# 组件化

## react 需要单标签包裹

```tsx
return (
  <>
    <div></div>
  </>
);
```

## 类组件

```tsx
import { Component } from "react";

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
```

## 函数组件

```tsx
import { FC } from "react";

interface Props {
  title: string;
}

const MyComponent: FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default MyComponent;
```

## 调用第三方组件库

```tsx
// 使用第三方组件库
import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;

const App: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    // 学习点：直接编写内联样式
    <div style={{ marginTop: "60px" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            { required: true, message: "Please select your date of birth!" },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select>
            <Option value="china">China</Option>
            <Option value="usa">USA</Option>
            <Option value="india">India</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
```
