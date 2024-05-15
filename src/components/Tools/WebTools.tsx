import React from "react";
import { useLocalStorageValue } from "@react-hookz/web";

const App: React.FC = () => {
  // 使用 useLocalStorageValue Hook
  const myKeyLocalHandler = useLocalStorageValue("my-key", {
    defaultValue: "default value",
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>useLocalStorageValue Example</h1>
      <input
        value={myKeyLocalHandler.value ?? ""}
        onChange={(e) => myKeyLocalHandler.set(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => myKeyLocalHandler.remove()}>Remove</button>
      <p>Stored value: {myKeyLocalHandler.value}</p>
    </div>
  );
};

export default App;
