import "./App.css";
import RouterConfig from "./router/index";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // 学习点： 组件化
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/antDesign">AntDesign</Link>
            </li>
            <li>
              <Link to="/cssAnimation">CssAnimation</Link>
            </li>
            <li>
              <Link to="/rafAnimattion">RafAnimattion</Link>
            </li>
            <li>
              <Link to="/conditionRender">ConditionRender</Link>
            </li>
            <li>
              <Link to="/cycleRender">CycleRender</Link>
            </li>
            <li>
              <Link to="/dataControler">DataControler</Link>
            </li>
            <li>
              <Link to="/functionComponent">FunctionComponent</Link>
            </li>
            <li>
              <Link to="/classComponent">ClassComponent</Link>
            </li>
            <li>
              <Link to="/functionComponent">FunctionComponent</Link>
            </li>
            <li>
              <Link to="/transitionGroup">TransitionGroup</Link>
            </li>
            <li>
              <Link to="/animatedBox">AnimatedBox</Link>
            </li>
            <li>
              <Link to="/webTools">WebTools</Link>
            </li>
            <li>
              <Link to="/storeCounter">StoreCounter</Link>
            </li>
            <li>
              <Link to="/user/123">User 123</Link> {/* 示例用户ID */}
            </li>
          </ul>
        </nav>
        <RouterConfig></RouterConfig>
      </Router>
    </>
  );
}

export default App;
