import FunctionComponent from "../components/Components/FunctionComponent";
import ClassComponent from "../components/Components/ClassComponent";

function useComponent() {
  return (
    // 学习点： 组件化
    <>
      <FunctionComponent title="函数组件"></FunctionComponent>
      <br />
      <ClassComponent title="类组件"></ClassComponent>
    </>
  );
}

export default useComponent;

// 函数式组件是函数式编程思想，主打的是 immutable（不可变的）、没有副作用、引用透明等特点；而类组件是面向对象编程思想，它主打的是继承、生命周期等核心概念。官方更支持使用函数式组件。
// 状态管理，函数式组件使用 useState，类组件使用 this.setState
// 生命周期，
