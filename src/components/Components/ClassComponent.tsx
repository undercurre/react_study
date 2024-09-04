import { Component } from "react";

interface Props {
  title: string;
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

  // 在组件挂载前调用
  componentWillMount() {
    console.log("componentWillMount: Component is about to mount.");
  }

  // 在组件挂载后调用
  componentDidMount() {
    console.log("componentDidMount: Component has mounted.");
    // 模拟数据加载
    setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  // 在组件接收到新的 props 前调用
  componentWillReceiveProps(nextProps: Props) {
    console.log(
      "componentWillReceiveProps: Component will receive new props:",
      nextProps
    );
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

  // 在组件更新前调用
  componentWillUpdate(nextProps: Props, nextState: State) {
    console.log(
      "componentWillUpdate: Component will update.",
      nextProps,
      nextState
    );
  }

  // 在组件更新后调用
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log(
      "componentDidUpdate: Component did update.",
      prevProps,
      prevState
    );
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

  render() {
    console.log("Render: Component is rendering.");
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1 style={this.styles.text}>{title}</h1>
        <p style={this.styles.text}>Count: {count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
