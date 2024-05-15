import { useState } from "react";

// 学习点：计数器组件：设置变量，事件处理(onClick)，样式表处理(className)，数据展示
function DataControler() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default DataControler;
