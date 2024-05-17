import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const AxiosExample: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 使用 Axios 发起 GET 请求
    axios
      .get<Data[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Error: ${error}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Axios Example</h1>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> (User ID: {item.userId}) - Completed:{" "}
            {item.completed ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosExample;
