import React, { useState, useMemo, useEffect } from "react";

const ComputedDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    console.log(`Effect: Count has changed to ${count}`);
  }, [count]); // 依赖数组中包含 count，当 count 变化时运行

  // 使用 useMemo 来计算派生状态
  const computedValue = useMemo(() => {
    console.log("Computed value recalculated");
    return count * 2;
  }, [count]);

  // 处理点击事件，增加计数器
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // 处理输入框变化事件
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>React useMemo for Computed Demo</h1>
      <p>Count: {count}</p>
      <p>Computed Value (Count * 2): {computedValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>
        <input type="text" value={text} onChange={handleInputChange} />
      </p>
      <p>Text: {text}</p>
    </div>
  );
};

export default ComputedDemo;
