# 样式处理

react 的样式割离是利用加了 module 的 css 文件名

```tsx
import { useState } from "react";
import styles from "./StyleHandler.module.css";

const App = () => {
  const [judge, setJudge] = useState(false);

  const buttonStyle = {
    backgroundColor: judge ? "yellow" : "brown",
    color: judge ? "black" : "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      {/* 类选择器使用 */}
      <button className="button">Click Me</button>
      {/* 样式隔离 */}
      <button className={styles.button}>Click Me</button>
      {/* 内联样式使用 */}
      <button style={{ backgroundColor: "red", color: "white" }}>
        Click Me
      </button>
      {/* 动态样式使用 */}
      <button style={buttonStyle} onClick={() => setJudge((judge) => !judge)}>
        Click Me
      </button>
    </>
  );
};

export default App;
```

```vue
<template>
  <div>
    <button class="button">Click Me</button>
    <button :style="buttonStyle">Click Me</button>
  </div>
</template>

<script lang="ts" setup>
const buttonStyle = {
  backgroundColor: "yellow",
  color: "white",
  padding: "10px",
  border: "none",
  cursor: "pointer",
};
</script>

<style scoped>
.button {
  padding: 10px;
  color: white;
  background-color: blue;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}
</style>
```
