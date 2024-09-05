import FunctionComponent from "../components/Components/FunctionComponent";
import ClassComponent from "../components/Components/ClassComponent";
import { Select } from "antd";
import { useState } from "react";

function useComponent() {
  const [user, setUser] = useState("jack");

  const handleChange = (value: string) => {
    setUser(value);
  };

  return (
    // 学习点： 组件化
    <>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <FunctionComponent title="函数组件" user={user}></FunctionComponent>
      <br />
      <ClassComponent title="类组件" user={user}></ClassComponent>
    </>
  );
}

export default useComponent;

// 函数式组件是函数式编程思想，主打的是 immutable（不可变的）、没有副作用、引用透明等特点；而类组件是面向对象编程思想，它主打的是继承、生命周期等核心概念。官方更支持使用函数式组件。
// 状态管理，函数式组件使用 useState，类组件使用 this.setState
// 生命周期，函数式组件使用useEffect通过不同传参形式来实现，类组件有各种继承而来的钩子去实现。
// 调用方式，函数式组件只需要执行函数即可，类组件需要经过实例化的过程。
// 获取渲染的值，函数式组件
