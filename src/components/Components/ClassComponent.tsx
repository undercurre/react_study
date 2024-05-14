import React, { Component } from "react";

interface Props {
  title: string;
}

interface State {
  count: number;
}

class MyComponent extends Component<Props, State> {
  state: State = {
    count: 0,
  };

  render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyComponent;
