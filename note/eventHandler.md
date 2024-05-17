# 事件处理

onXXX 和@XXX 的区别

```tsx
import React, { useState } from "react";

const FormComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default FormComponent;
```

```vue
<template>
  <div>
    <input type="text" :value="inputValue" @change="handleInputChange" />
    <p>Input Value: {{ inputValue }}</p>
  </div>
</template>

<script lang="ts" setup>
const inputValue = ref("");
function handleInputChange(payload: Event) {
  if (payload.target instanceof HTMLInputElement)
    inputValue.value = payload.target.value;
}
</script>
```
