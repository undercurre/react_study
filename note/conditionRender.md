# 条件渲染

区别不大：只是 `vue` 使用的是隐式的 setter，而 `react` 使用的是显式的

```vue
<template>
  <div>
    <button @click="setJudge()"></button>
    <p>{{ judge ? "是" : "非" }}</p>
  </div>
</template>

<script lang="ts" setup>
const judge = ref(true);

const setJudge = () => {
  judge.value = !judge.value;
};
</script>
```

```tsx
import { useState } from "react";

function ConditionRender() {
  // 条件渲染
  const [judge, setJudge] = useState(true);

  return (
    <>
      <div className="card">
        <button onClick={() => setJudge((judge) => !judge)}>judge</button>

        <p>{judge ? "是" : "非"}</p>
      </div>
    </>
  );
}

export default ConditionRender;
```
