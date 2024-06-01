import React, { useState } from "react";
import "./App.css";

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = { text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue(""); //update values depending on varibles
  };

  const toggleCompletion = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">TODO List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded mr-2"
            placeholder="Enter Item"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 border-b border-gray-200"
            >
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
                className="form-checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
