import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // CREATE
  const addTask = () => {
    if (task.trim() === "") return;

    if (editId !== null) {
      // UPDATE
      const updated = todos.map((t) =>
        t.id === editId ? { ...t, text: task } : t
      );
      setTodos(updated);
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task }]);
    }

    setTask("");
  };

  // DELETE
  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // EDIT
  const editTask = (id) => {
    const selected = todos.find((t) => t.id === id);
    setTask(selected.text);
    setEditId(id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      <input className="border bg-white px-6 py-2 text-black rounded-xl"
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="border bg-white px-3 py-2 ml-10 text-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300" onClick={addTask}>
        {editId ? "Update" : "Add"}
      </button>

      <ul className="list-disc">
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button className="border bg-white px-3 py-2  mt-4 ml-10 text-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300" onClick={() => editTask(t.id)}>
              Edit
            </button>
            <button className="border bg-white px-6 py-2 mt-4 ml-10 text-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300 p" onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}