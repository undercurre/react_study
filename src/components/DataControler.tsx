import { useState } from "react";

function DataControler() {
  const [dataSource, setDataSource] = useState({
    count: 0,
    judge: true,
    name: "lirh",
    nums: [1, 2, 3],
  });

  const incCount = () => {
    setDataSource((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  const toggleJudge = () => {
    setDataSource((prevState) => ({
      ...prevState,
      judge: !prevState.judge,
    }));
  };

  const numsPush = () => {
    setDataSource((prevState) => ({
      ...prevState,
      nums: [...prevState.nums, 4],
    }));
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setDataSource((prevState) => ({
      ...prevState,
      name: newName,
    }));
  };

  return (
    <>
      <div style={{ color: "#000" }}>
        <p>count: {dataSource.count}</p>
        <p>judge: {dataSource.judge ? "Yes" : "No"}</p>
        <p>name: {dataSource.name}</p>
        <p>nums: {dataSource.nums.join(", ")}</p>
      </div>
      <div className="card">
        <button onClick={incCount}>increase</button>
        <button onClick={toggleJudge}>toggle</button>
        <button onClick={numsPush}>push</button>
        <input value={dataSource.name} onChange={changeInput}></input>
      </div>
    </>
  );
}

export default DataControler;

// 值得注意的是，react在数据绑定对象变量的时候，需要整个对象去替换，而不能只替换某个属性。
