import { useState } from "react";

function ConditionRender() {
  // 条件渲染
  const [judge, setJudge] = useState(true);

  return (
    <>
      <div className="card">
        <button onClick={() => setJudge((judge) => !judge)}>judge</button>

        <p>{judge ? "是" : "非"}</p>
      </div>
    </>
  );
}

export default ConditionRender;
