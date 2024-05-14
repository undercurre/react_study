import { useState } from "react";

function CycleRender() {
  // 循环渲染
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React App", completed: false },
    { id: 3, text: "Deploy the App", completed: false },
  ]);

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CycleRender;
