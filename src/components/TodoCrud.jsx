import React, { useState, useEffect } from "react";
import { faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";

export default function TodosCrud() {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  //save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  // delete
  const handleDelete = (id) => {
    const filtered = todos.filter((t) => t.id !== id);
    setTodos(filtered);
  };

  // toggle status
  const toggleStatus = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  // open edit popup
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  // update todo
  const handleUpdate = () => {
    const updated = todos.map((t) =>
      t.id === editId ? { ...t, title: editText } : t
    );

    setTodos(updated);
    setEditId(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Todos CRUD</h1>

      {/* ADD FORM */}
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          className="border p-2"
        />
        <button className="ml-2 border px-3">Add</button>
      </form>

      {/* TABLE */}
      <table className="border mt-5 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Task</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td className="border p-2">{index + 1}</td>

              <td className="border p-2">{todo.title}</td>

              {/* STATUS */}
              <td
                className="border p-2 cursor-pointer"
              >
                <button  className="mr-2 text-blue-500" onClick={() => toggleStatus(todo.id)}>update</button>
                {todo.completed ? " Completed" : " Pending"}
              </td>

              {/* ACTION */}
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="mr-2 text-blue-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT POPUP */}
      {editId && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-5 rounded">
            <h2 className="mb-2 font-semibold">Edit Task</h2>

            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border p-2 w-full"
            />

            <div className="mt-3">
              <button
                onClick={handleUpdate}
                className="mr-2 bg-green-500 text-white px-3 py-1"
              >
                Save
              </button>

              <button
                onClick={() => setEditId(null)}
                className="bg-gray-400 px-3 py-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}