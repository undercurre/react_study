import React, { Component } from "react";

// 定义组件的 Props 和 State 接口
interface Props {}
interface State {
  count: number;
  text: string;
}

class LifecycleDemo extends Component<Props, State> {
  // 初始化 state
  state: State = {
    count: 0,
    text: "",
  };

  constructor(props: Props) {
    super(props);
    console.log("Constructor: Component is being created");
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 在每次 render 之前调用，以更新 state
    console.log(
      "getDerivedStateFromProps: nextProps:",
      nextProps,
      "prevState:",
      prevState
    );
    return null;
  }

  componentDidMount() {
    // 组件挂载后调用
    console.log("componentDidMount: Component has been mounted");
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // 决定组件是否应该更新
    console.log(
      "shouldComponentUpdate: nextProps:",
      nextProps,
      "nextState:",
      nextState
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    // 获取更新前的快照
    console.log(
      "getSnapshotBeforeUpdate: prevProps:",
      prevProps,
      "prevState:",
      prevState
    );
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot?: unknown) {
    // 组件更新后调用
    console.log(
      "componentDidUpdate: prevProps:",
      prevProps,
      "prevState:",
      prevState,
      "snapshot:",
      snapshot
    );
  }

  componentWillUnmount() {
    // 组件卸载前调用
    console.log("componentWillUnmount: Component will unmount");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  render() {
    console.log("render: Rendering component");
    return (
      <div>
        <h1>React Class Component Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </p>
        <p>Text: {this.state.text}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
