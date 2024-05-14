import React, { FC } from "react";

interface Props {
  title: string;
}

const MyComponent: FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default MyComponent;
