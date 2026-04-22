import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "./Ui/Button";
import Input from "./Ui/Input";

export default function TodosCrudApi() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editableTodo, seteditableTodo] = useState(null); // {id,title,status}

  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/api/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    axios
      .post("http://localhost:3000/api/todos", {
        title: title,
      })
      .then(() => {
        setTitle(""); // clear input
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3000/api/todos/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  const updateTodo = (todo) => {
  axios
    .put(`http://localhost:3000/api/todos/${todo.id}`, {
      title: todo.title,
      status: !todo.status, 
    })
    .then(() => fetchTodos())
    .catch((err) => console.log(err));
};

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-medium">Enter your Todo</h1>
      <form onSubmit={handleSubmit}>
        <Input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />

        <Button type="submit" className="ml-1" label="Add Todo" rounded />
      </form>

      <ul className="">
        {todos.map((todo) => (
          <li className="ml-1 font-medium flex gap-2">
            {todo.id}. {todo.title} {todo.status}
            <span
              className={` ml-1 mr-1  ${
                todo.status
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {todo.status ? "Completed" : "Pending"}
            </span>
            <Button onClick={() => updateTodo(todo.id)} label="Edit" size="sm" rounded />
            <Button
              onClick={() => deleteTodo(todo.id)}
              label="Delete"
              rounded
              size="sm"
            />
          </li>
        ))}
      </ul>
    </div>

  );
}
