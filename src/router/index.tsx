import CssAnimation from "../components/Animations/CssAnimation";
import RafAnimattion from "../components/Animations/RafAnimation";
import ConditionRender from "../components/ConditionRender";
import CycleRender from "../components/CycleRender";
import DataControler from "../components/DataControler";
import FunctionComponent from "../components/Components/FunctionComponent";
import ClassComponent from "../components/Components/ClassComponent";
import TransitionGroup from "../components/Animations/TransitionGroup";
import AnimatedBox from "../components/Extras/Animated";
import AntDesign from "../components/Extras/AntDesign";
import WebTools from "../components/Tools/WebTools";
import StoreCounter from "../components/Tools/StoreCounter";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "../views/user";
import EventHandler from "../components/EventHandler";

function RouterConfig() {
  return (
    // 学习点： 路由配置，关键点：Route, Routes的使用，并在路由根部定义Router包裹
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/antDesign" />} />
        <Route path="/antDesign" element={<AntDesign />} />
        <Route path="/cssAnimation" element={<CssAnimation />} />
        <Route path="/rafAnimation" element={<RafAnimattion />} />
        <Route path="/conditionRender" element={<ConditionRender />} />
        <Route path="/cycleRender" element={<CycleRender />} />
        <Route path="/dataControler" element={<DataControler />} />
        <Route path="/eventHandler" element={<EventHandler />} />
        <Route
          path="/functionComponent"
          element={<FunctionComponent title={"函数式组件"} />}
        />
        <Route
          path="/classComponent"
          element={<ClassComponent title="类定义组件" />}
        />
        <Route path="/transitionGroup" element={<TransitionGroup />} />
        <Route path="/animated" element={<AnimatedBox />} />
        <Route path="/webTools" element={<WebTools />} />
        <Route path="/storeCounter" element={<StoreCounter />} />
        {/* 路由传参 */}
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </>
  );
}

export default RouterConfig;
