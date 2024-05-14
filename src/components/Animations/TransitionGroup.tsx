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
          <CSSTransition key={item} timeout={500} classNames="item">
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
