import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState(
    "Hello! Welcome to the Task Manager."
  );

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // DOM manipulation + Event handling
  const changeGreeting = () => {
    if (name.trim() === "") {
      setGreeting("Please enter your name!");
    } else {
      setGreeting("Hello, " + name + "! Welcome 🎉");
    }
  };

  // Dynamic content handling
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Checkbox event
  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete event
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">

      <h1 id="title">Student Task Manager</h1>

      {/* Greeting Card */}
      <div className="card">

        <h2>Personalized Greeting</h2>

        <div className="input-row">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={changeGreeting}>
            Change Greeting
          </button>

        </div>

        <p id="greeting">{greeting}</p>

      </div>


      {/* Add Task Card */}
      <div className="card">

        <h2>Add a Task</h2>

        <div className="task-input">

          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

      </div>


      {/* Dynamic Task List */}
      <div className="card">

        <h2>Your Tasks</h2>

        <p id="taskCount">
          Total Tasks: {tasks.length}
        </p>

        {tasks.length === 0 ? (
          <p className="empty">
            No tasks added yet.
          </p>
        ) : (
          <ul id="taskList">

            {tasks.map((item) => (

              <li
                className={
                  item.completed
                    ? "task completed"
                    : "task"
                }
                key={item.id}
              >

                <div className="task-left">

                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() =>
                      toggleTask(item.id)
                    }
                  />

                  <span>{item.text}</span>

                </div>

                <button
                  className="deleteBtn"
                  onClick={() =>
                    deleteTask(item.id)
                  }
                >
                  Delete
                </button>

              </li>

            ))}

          </ul>
        )}

        <button
          id="clearBtn"
          onClick={clearTasks}
        >
          Clear All Tasks
        </button>

      </div>

    </div>
  );
}

export default App;