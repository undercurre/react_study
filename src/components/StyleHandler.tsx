import { useState } from "react";
import styles from "./StyleHandler.module.css";

const App = () => {
  const [judge, setJudge] = useState(false);

  const buttonStyle = {
    backgroundColor: judge ? "yellow" : "brown",
    color: judge ? "black" : "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      {/* 类选择器使用 */}
      <button className="button">Click Me</button>
      {/* 样式隔离 */}
      <button className={styles.button}>Click Me</button>
      {/* 内联样式使用 */}
      <button style={{ backgroundColor: "red", color: "white" }}>
        Click Me
      </button>
      {/* 动态样式使用 */}
      <button style={buttonStyle} onClick={() => setJudge((judge) => !judge)}>
        Click Me
      </button>
    </>
  );
};

export default App;
