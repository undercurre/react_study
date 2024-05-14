import "./App.css";
import CssAnimation from "./components/Animations/CssAnimation";
import RafAnimattion from "./components/Animations/RafAnimation";
import ConditionRender from "./components/ConditionRender";
import CycleRender from "./components/CycleRender";
import DataControler from "./components/DataControler";
import FunctionComponent from "./components/Components/FunctionComponent";
import ClassComponent from "./components/Components/ClassComponent";
import TransitionGroup from "./components/Animations/TransitionGroup";

function App() {
  return (
    // 学习点： 组件化
    <>
      <TransitionGroup></TransitionGroup>
      <DataControler></DataControler>
      <ConditionRender></ConditionRender>
      <CycleRender></CycleRender>
      <CssAnimation></CssAnimation>
      <RafAnimattion></RafAnimattion>
      <FunctionComponent title={"自定义标题"}></FunctionComponent>
      <ClassComponent title="自定义标题2"></ClassComponent>
    </>
  );
}

export default App;
