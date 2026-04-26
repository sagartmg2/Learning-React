import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "./Ui/Button";
import Input from "./Ui/Input";
import { toast } from "react-toastify";

export default function TodosCrudApi() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editableTodo, setEditableTodo] = useState(null);

  // GET TODOS
  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/api/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ADD TODO
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.warning("Please enter todo");
      return;
    }

    axios
      .post("http://localhost:3000/api/todos", {
        title,
        status: false,
      })
      .then(() => {
        setTitle("");
        fetchTodos();
        toast.success("Todo added Succesfully");
      })
      .catch((err) => console.log(err));
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3000/api/todos/${id}`)
      .then(() => {
        fetchTodos();
        toast.success("Todo deleted Successfully");
      })
      .catch((err) => console.log(err));
  };

  const openEdit = (todo) => {
    setEditableTodo({
      ...todo,
      status: !!todo.status,
    });
  };

  // UPDATE TODO
  const updateTodo = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/todos/${editableTodo.id}`, editableTodo)
      .then(() => {
        setEditableTodo(null);
        fetchTodos();
        toast.success("Todo Updated Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-medium">Enter your Todo</h1>

      {/* ADD TODO */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />
        <Button type="submit" label="Add Todo" rounded />
      </form>

      {/* LIST */}
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-3 items-center mb-2">
            <span>{todo.id}.</span>
            <span>{todo.title}</span>

            {/* STATUS */}
            <span
              className={`text-xs px-2 py-1 rounded ${
                todo.status
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {todo.status ? "Completed" : "Pending"}
            </span>

            {/* EDIT */}
            <Button
              onClick={() => openEdit(todo)}
              label="Edit"
              size="sm"
              rounded 
            />
           

            {/* DELETE */}
            <Button
              onClick={() => deleteTodo(todo.id)}
              label="Delete"
              size="sm"
              rounded
            />
          </li>
        ))}
      </ul>

      {/* MODAL */}
      {editableTodo && (
        <div
          onClick={() => setEditableTodo(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={updateTodo}
            className="bg-white p-5 rounded w-96"
          >
            <h2 className="text-lg font-bold mb-3">Edit Todo</h2>

            {/* TITLE */}
            <input
              className="border w-full p-2 mb-3"
              value={editableTodo.title}
              onChange={(e) =>
                setEditableTodo({
                  ...editableTodo,
                  title: e.target.value,
                })
              }
            />

            {/* STATUS CHECKBOX */}
            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={editableTodo.status}
                onChange={(e) =>
                  setEditableTodo({
                    ...editableTodo,
                    status: e.target.checked,
                  })
                }
              />
              Completed
            </label>

            {/* BUTTONS */}
            <div className="flex justify-end gap-2">
        
              <Button className={"bg-red-600"} type="button" color label="Cancel" rounded  onClick={() => setEditableTodo(null)} />

              <Button type="submit" label="Update" rounded />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
