# 数据监听

## 相当于`vue3`的`computed`

```tsx
// 使用 useMemo 来计算派生状态
const computedValue = useMemo(() => {
  console.log("Computed value recalculated");
  return count * 2;
}, [count]);
```

## 相当于`vue3`的`watchEffect`和`watch`

```tsx
useEffect(() => {
  console.log(`Effect: Count has changed to ${count}`);
}, [count]); // 依赖数组中包含 count，当 count 变化时运行
```
