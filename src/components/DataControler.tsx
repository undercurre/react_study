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
      <div>
        <span>count: {dataSource.count}</span>
        <span>judge: {dataSource.judge ? "Yes" : "No"}</span>
        <span>name: {dataSource.name}</span>
        <span>nums: {dataSource.nums.join(", ")}</span>
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
