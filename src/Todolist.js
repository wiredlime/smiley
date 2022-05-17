import React, { useState } from "react";
import "./Todolist.css";

function Todolist() {
  // --------States
  const [tasks, setTasks] = useState([
    { id: "num1", title: "Clean up", status: 0 },
    { id: "num2", title: "Bossa", status: 1 },
    { id: "num3", title: "NOvva", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setnewTask] = useState("");

  // ------Event Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = { id: Date.now(), title: newTask, status: 0 };
      setTasks([...tasks, task]);
    }
    setnewTask("");
  };
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 }; //?
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== taskId) {
          return task;
        }
      })
    );
  };
  const handleInputChange = (e) => {
    setnewTask(e.target.value); //?
  };
  // ----------------
  return (
    <div className="container">
      <h1 className="title">
        Todo List
        <span className="subtitle"> One day at a time</span>
      </h1>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <li key={task.id}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input
                  type="checkbox"
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                  checked={Boolean(task.status)}
                  className="btn-action btn-action-done"
                />
                <button
                  onClick={() => removeTask(task.id)} //?
                  className="btn-action btn-action-delete"
                >
                  ✗
                </button>
              </div>
            </li>
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks
        </label>
        <input
          onChange={(e) => setShowIncomplete(e.target.checked)}
          checked={showIncomplete}
          type="checkbox"
          id="filter"
        />
      </div>

      <form onSubmit={handleSubmit} action="#" className="form">
        <input
          onChange={handleInputChange} //?
          value={newTask}
          type="text"
          id="newitem"
          placeholder="Add new tasks ..."
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Todolist;
