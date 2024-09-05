import { Component } from "react";

interface Props {
  title: string;
  user: string;
}

interface State {
  count: number;
}

class MyComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("Constructor: Component is being initialized.");
    this.state = {
      count: 0,
    };
  }

  getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 在 render 前调用，在初始挂载以及后续更新时都会被调用。
    console.log("getDerivedStateFromProps", nextProps, prevState);
    return null;
  }

  // 在组件挂载后调用
  componentDidMount() {
    console.log("componentDidMount: Component has mounted.");
    // 模拟数据加载
  }

  // 判断组件是否需要更新
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log(
      "shouldComponentUpdate: Should the component update?",
      nextProps,
      nextState
    );
    // 可以在这里进行条件判断，如果返回 false，组件将不会更新
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return "getSnapshotBeforeUpdate";
  }

  // 在组件更新后调用
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: unknown) {
    console.log(
      "componentDidUpdate: Component did update.",
      prevProps,
      prevState,
      snapshot
    ); // "getSnapshotBeforeUpdate"
  }

  // 在组件卸载前调用
  componentWillUnmount() {
    console.log("componentWillUnmount: Component will unmount.");
  }

  styles = {
    text: {
      color: "#000",
    },
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  showMessage() {
    alert("Followed " + this.props.user);
  }

  handleClick() {
    setTimeout(this.showMessage.bind(this), 3000);
  }

  render() {
    console.log("Render: Component is rendering.");
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1 style={this.styles.text}>{title}</h1>
        <p style={this.styles.text}>Count: {count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleClick.bind(this)}>Follow</button>
      </div>
    );
  }
}

export default MyComponent;
