# 循环渲染

主要区别：vue 使用 v-for 指令编写模板，react 使用的 tsx 语法，在模板中需要使用数组方法 map 循环标签

这波我站 `vue`，`vue` 的指令明显简化了循环渲染时的模板编写的复杂程度, 在不切断联系的情况下尽可能剥离数据和模板结构本身的编码行为

```vue
<template>
  <div>
    <h2>Task List:</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <button @click="toggleCompletion(task.id)"></button>
        <button @click="deleteTask(task.id)"></button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const tasks = ref([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a React App", completed: false },
  { id: 3, text: "Deploy the App", completed: false },
]);

const toggleCompletion = (id: number) => {
  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
};

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
</script>
```

```tsx
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
```
