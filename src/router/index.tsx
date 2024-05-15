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
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // 学习点： 组件化
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/antDesign" element={<AntDesign />} />
          <Route path="/cssAnimation" element={<CssAnimation />} />
          <Route path="/rafAnimattion" element={<RafAnimattion />} />
          <Route path="/conditionRender" element={<ConditionRender />} />
          <Route path="/cycleRender" element={<CycleRender />} />
          <Route path="/dataControler" element={<DataControler />} />
          <Route
            path="/functionComponent"
            element={<FunctionComponent title={"函数式组件"} />}
          />
          <Route
            path="/classComponent"
            element={<ClassComponent title="类定义组件" />}
          />
          <Route path="/transitionGroup" element={<TransitionGroup />} />
          <Route path="/animatedBox" element={<AnimatedBox />} />
          <Route path="/webTools" element={<WebTools />} />
          <Route path="/storeCounter" element={<StoreCounter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
