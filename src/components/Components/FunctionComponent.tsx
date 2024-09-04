import { FC, useEffect, useState } from "react";

interface Props {
  title: string;
}

const MyComponent: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const styles = {
    text: {
      color: "#000",
    },
  };

  // 模拟 componentDidMount 和 componentWillUnmount
  useEffect(() => {
    console.log("componentDidMount: Component has mounted.");

    // 模拟 componentWillUnmount
    return () => {
      console.log("componentWillUnmount: Component will unmount.");
    };
  }, []); // 依赖空数组，表示只在组件挂载和卸载时运行

  console.log("Render: Component is rendering.");

  return (
    <div>
      <h1 style={styles.text}>{title}</h1>
      <p style={styles.text}>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
