import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";

export default function TodosApi() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  return (
    <div>
      <h1 className="text-2xl text-black font-bold text-center">Todo List</h1>

      <button
        className="border bg-white px-3 py-2 text-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300"
        onClick={fetchTodos}
      >
        Fetch Todos
      </button>

         {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {todo.completed ? " (Completed)" : " (Pending)"}
          </li>
        ))}
      </ul> */}

      <table className="border border-gray-400 border-collapse mt-4 justify-center mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Title</th>
            <th className="border border-gray-400 p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => {
            const isCompleted = todo.completed;
      

            return (
              <tr key={todo.id}>
                <td className="border border-gray-400 p-2">{todo.id}</td>
                <td className="border border-gray-400 p-2">
                  {todo.title}
                </td>

                <td className="border border-gray-400 p-2 flex items-center">
                  <FontAwesomeIcon
                    icon={isCompleted ? faCheckCircle : faClock}
                    className={`mr-2 ${
                      isCompleted ? "text-[#48A111]" : "text-[#2FA4D7]"
                    }`}
                  />
                  {isCompleted ? "Completed" : "Pending"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

  

