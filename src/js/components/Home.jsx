import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [inputTask, setInpuntTask] = useState("");
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputTask.trim() !== "") {
      // Agrega la tarea al presionar Enter si el input no está vacío
      setTasks([...tasks, inputTask]);
      setInpuntTask(""); // Limpia el campo de entrada
    }
  };

  const handleDelete = (index) => {
    // Elimina la tarea al hacer clic en el botón de eliminar
    if (index > -1) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }
  };
  return (
    <div className="container">
      <div className="container mt-4">
		<h1 className="text-center">Task List</h1>
        <label htmlFor="taskInput" className="form-label mt-3">
          {`Pending tasks:  (${tasks.length})`}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={inputTask}
          onChange={(e) => setInpuntTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul className="list-group mt-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="sticky-note d-flex justify-content-between align-items-center"
            >
              <span>
                {index + 1}.{task}
              </span>{" "}
              {/* Sin espacio después del punto */}
              <div
                onClick={() => handleDelete(index)}
                style={{ cursor: "pointer", color: "red" }}
              >
                x
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
