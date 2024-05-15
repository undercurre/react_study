// App.tsx
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TransitionGroup.css";

const App: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);

  const addItem = () => {
    setItems([...items, Math.random()]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition
            key={item}
            timeout={500}
            classNames="item"
            onEnter={() => {
              console.log("componentWillEnter", "当组件第一次显示在页面上");
            }}
            onEntering={() => {
              console.log(
                "componentDidEnter",
                "当组件进入页面并且完成动画时触发"
              );
            }}
            onEntered={() => {
              console.log(
                "componentDidAppear",
                "元素第一次显示并且动画完成后触发"
              );
            }}
            onExit={() => {
              console.log("componentWillLeave", "当组件将要离开页面时触发");
            }}
            onExiting={() => {
              console.log("componentDidLeave", "当组件将要离开页面时触发");
            }}
            onExited={() => {
              console.log(
                "componentDidLeave",
                "当组件第一次显示在页面上，并且动画完成时触发"
              );
            }}
          >
            <div>
              <span>{item}</span>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default App;
