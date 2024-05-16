import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.tsx";
import "./index.css";

// 把编写的dom挂载到根容器root上进行渲染
ReactDOM.createRoot(document.getElementById("root")!).render(
  // 配置store
  <Provider store={store}>
    {/* React.StrictMode 是一个用于检测 React 应用中潜在问题的工具，类似于一个帮助开发者在开发阶段发现并修复不安全的代码或者不推荐的模式的辅助组件。它并不会对生产构建的行为产生影响，仅在开发模式下被启用。 */}
    {/* 当你将组件包裹在 <React.StrictMode> 标签中时，React 会对这些组件启用额外的检查和警告。这可以帮助你提前发现问题 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
