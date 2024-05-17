# 生命周期

## 相当于 `vue3`的 `onMounted` 组件挂载

```tsx
useEffect(() => {
  console.log("Effect: Component rendered");
}, []); // 空依赖数组 [] 指示这个 useEffect 只在组件挂载和卸载时运行
```

## 相当于 `vue3`的 `onUpdated` 组件状态变化

```tsx
useEffect(() => {
  console.log("Effect: Component rendered");
}); // 没有依赖项的 useEffect 在每次渲染后运行。
```

## 相当于 `vue3`的 `onBeforeUnmount` 组件卸载前

```tsx
useEffect(() => {
  return () => {
    console.log("Cleanup: Component will unmount");
  };
}, []);
```

## 保证 dom 最新 相当于 `vue3`的 `nextTick`

```tsx
import React, { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectExample: React.FC = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  });

  return (
    <div>
      <div ref={divRef} style={{ width: "50%" }}>
        This div's width is {width}px
      </div>
    </div>
  );
};

export default LayoutEffectExample;
```

```vue
<template>
  <div>
    <div ref="divRef" style="width: 50%">This div's width is {{ width }}px</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from "vue";

const width = ref(0);
const divRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  if (divRef.value) {
    width.value = divRef.value.offsetWidth;
  }
});
</script>
```
