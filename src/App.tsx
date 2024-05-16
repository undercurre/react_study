import "./App.css";
import RouterConfig from "./router/index";
import { BrowserRouter as Router } from "react-router-dom";
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
