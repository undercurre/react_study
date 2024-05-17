# 路由

使用 `react-router`

```tsx
function RouterConfig() {
  return (
    // 学习点： 路由配置，关键点：Route, Routes的使用，并在路由根部定义Router包裹
    <>
      <Routes>
        {/* 路由重定向 */}
        <Route path="/" element={<Navigate replace to="/antDesign" />} />
        <Route path="/antDesign" element={<AntDesign />} />
        <Route path="/cssAnimation" element={<CssAnimation />} />
        <Route
          path="/functionComponent"
          element={<FunctionComponent title={"函数式组件"} />}
        />
        <Route
          path="/classComponent"
          element={<ClassComponent title="类定义组件" />}
        />
        {/* 路由传参 */}
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </>
  );
}

export default RouterConfig;
```

```tsx
import "./App.css";
import RouterConfig from "./router/index";
import { BrowserRouter as Router } from "react-router-dom";
// React Router 支持两种主要的路由模式：Hash 模式和 Browser 模式。
// import { HashRouter as Router } from "react-router-dom";

import NavBar from "./views/navBar/navBar";

function App() {
  return (
    // 学习点：
    <>
      <Router>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <NavBar></NavBar>
          <RouterConfig></RouterConfig>
        </div>
      </Router>
    </>
  );
}

export default App;
```

## 编程式导航

```tsx
const navigate = useNavigate();

const onClick: MenuProps["onClick"] = (e) => {
  navigate(e.key);
};
```
