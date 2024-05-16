import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useParams } from "react-router-dom";
import { setAge, setName } from "../store/reducers/user";

const User = () => {
  // 路由传参
  const { userId } = useParams();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {userId}</p>

      <input
        type="text"
        value={user.name}
        onChange={(e) => dispatch(setName(e.target.value))}
        placeholder="Name"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => dispatch(setAge(Number(e.target.value)))}
        placeholder="Age"
      />
      <div>
        <span>{`Name: ${user.name}, Age: ${user.age}`}</span>
      </div>
    </div>
  );
};

export default User;
