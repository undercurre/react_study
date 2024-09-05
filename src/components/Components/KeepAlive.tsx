import React, { useState, ChangeEvent } from "react";

// 定义 ChildComponent 的 props 类型
interface ChildComponentProps {
  data: string;
}

const ChildComponent: React.FC<ChildComponentProps> = React.memo(({ data }) => {
  console.log("Child Component rendered");
  return <div>{data}</div>;
});

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={`Count is: ${count}`} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ParentComponent;
