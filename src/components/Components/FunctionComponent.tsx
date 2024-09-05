import { FC, useEffect, useState } from "react";

interface Props {
  title: string;
  user: string;
}

const MyComponent: FC<Props> = ({ title, user }) => {
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
  }, []);

  // 模拟 componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate: Component did update. Count:", count);
  }, [count]); // 依赖 count，当 count 发生变化时触发

  // 模拟 componentWillReceiveProps 和 getDerivedStateFromProps
  useEffect(() => {
    console.log(
      "getDerivedStateFromProps / componentWillReceiveProps: Component will receive new props or state."
    );
  });

  // 不传的话，后面每一次组件的title入参刷新都会执行

  console.log("Render: Component is rendering.");

  const showMessage = () => {
    alert("Followed " + user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <div>
      <h1 style={styles.text}>{title}</h1>
      <p style={styles.text}>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleClick}>Follow</button>
    </div>
  );
};

export default MyComponent;
