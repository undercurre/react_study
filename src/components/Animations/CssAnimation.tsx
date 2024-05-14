import React, { Component, createRef, RefObject } from "react";
import "./CssAnimation.css";

interface State {
  focused: boolean;
}

class App extends Component<object, State> {
  private input: RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      focused: false,
    };
    this.input = createRef<HTMLInputElement>();
  }

  componentDidMount() {
    if (this.input.current) {
      this.input.current.addEventListener("focus", this.focus);
      this.input.current.addEventListener("blur", this.focus);
    }
  }

  componentWillUnmount() {
    if (this.input.current) {
      this.input.current.removeEventListener("focus", this.focus);
      this.input.current.removeEventListener("blur", this.focus);
    }
  }

  focus = () => {
    this.setState((state) => ({ focused: !state.focused }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            ref={this.input}
            className={[
              "input",
              this.state.focused ? "input-focused" : "",
            ].join(" ")}
          />
        </div>
      </div>
    );
  }
}

export default App;
