import React, { useState, useEffect } from "react";

const LifecycleDemoFunc: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // 相当于 componentDidMount 和 componentDidUpdate: 可以传递第二个参数作为依赖数组，当依赖发生变化时，useEffect 会被调用。
  useEffect(() => {
    console.log("Effect: Component rendered or updated");

    // 相当于 componentWillUnmount:
    return () => {
      console.log("Cleanup: Component will unmount");
    };
  }, []); // 空依赖数组 [] 指示这个 useEffect 只在组件挂载和卸载时运行，没有依赖项的 useEffect 在每次渲染后运行。

  // 监听 count 的变化，类似于 componentDidUpdate:
  useEffect(() => {
    console.log(`Effect: Count has changed to ${count}`);
  }, [count]); // 依赖数组中包含 count，当 count 变化时运行

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
      <h1>React Functional Component Lifecycle Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>
        <input type="text" value={text} onChange={handleInputChange} />
      </p>
      <p>Text: {text}</p>
    </div>
  );
};

export default LifecycleDemoFunc;
