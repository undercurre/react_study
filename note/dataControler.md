# 数据绑定

`react` 在需要更新视图的时候要通过事先获取到的 setter 更新变量，这个过程如果遇到对象需要解构，在 `React` 中，状态是不可变的，只有通过 `React` 提供的状态更新函数（例如 `useState` 返回的函数）来更新状态，`React` 才能正确地检测到状态的变化并触发重新渲染。如果直接修改 dataSource 对象的属性值，虽然会改变对象本身的值，但并不会触发组件的重新渲染。因此，即使 dataSource 对象的属性已经被修改，但视图仍然保持不变。
而`vue3`因为`Proxy`的缘故，setter 对 object 变量的变化是自动的

```vue
<template>
  <div>
    <span>count: {{ dataSource.count }}</span>
    <span>judge: {{ dataSource.judge ? "Yes" : "No" }}</span>
    <span>name: {{ dataSource.name }}</span>
    <span>nums: {{ dataSource.nums }}</span>
  </div>

  <button @click="incCount">increase</button>
  <button @click="toggleJudge">toggle</button>
  <input v-model="dataSource.name" />
  <button @click="numsPush">push</button>
</template>

<script lang="ts" setup>
const dataSource = ref({
  count: 0,
  judge: true,
  name: "lirh",
  nums: [1, 2, 3],
});

const incCount = () => {
  dataSource.value.count += 1;
};

const toggleJudge = () => {
  dataSource.value.judge = !dataSource.value.judge;
};

const numsPush = () => {
  dataSource.value.nums.push(4);
};
</script>
```

```tsx
import { useState } from "react";

function DataControler() {
  const [dataSource, setDataSource] = useState({
    count: 0,
    judge: true,
    name: "lirh",
    nums: [1, 2, 3],
  });

  const incCount = () => {
    setDataSource((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  const toggleJudge = () => {
    setDataSource((prevState) => ({
      ...prevState,
      judge: !prevState.judge,
    }));
  };

  const numsPush = () => {
    setDataSource((prevState) => ({
      ...prevState,
      nums: [...prevState.nums, 4],
    }));
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setDataSource((prevState) => ({
      ...prevState,
      name: newName,
    }));
  };

  return (
    <>
      <div>
        <span>count: {dataSource.count}</span>
        <span>judge: {dataSource.judge ? "Yes" : "No"}</span>
        <span>name: {dataSource.name}</span>
        <span>nums: {dataSource.nums.join(", ")}</span>
      </div>
      <div className="card">
        <button onClick={incCount}>increase</button>
        <button onClick={toggleJudge}>toggle</button>
        <button onClick={numsPush}>push</button>
        <input value={dataSource.name} onChange={changeInput}></input>
      </div>
    </>
  );
}

export default DataControler;
```
