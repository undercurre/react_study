import { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // 组件挂载后自动聚焦输入框
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // 修改输入框的值
    if (inputRef.current) {
      inputRef.current.value = "Hello, World!";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Click to change input value</button>
    </div>
  );
};

export default App;
