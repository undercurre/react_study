# 元素处理

都是用`ref`

```tsx
import { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // 组件挂载后自动聚焦输入框
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // 修改输入框的值
    if (inputRef.current) {
      inputRef.current.value = "Hello, World!";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Click to change input value</button>
    </div>
  );
};

export default App;
```

```vue
<template>
  <div>
    <input ref="inputRef" type="text" />
    <button @click="handleButtonClick">Click to change input value</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  // 组件挂载后自动聚焦输入框
  if (inputRef.value) {
    inputRef.value.focus();
  }
});

const handleButtonClick = () => {
  // 修改输入框的值
  if (inputRef.value) {
    inputRef.value.value = "Hello, World!";
  }
};
</script>
```
