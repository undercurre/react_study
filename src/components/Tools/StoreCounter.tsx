import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/reducers/counter";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <span>{`Name: ${user.name}, Age: ${user.age}`}</span>
      </div>
    </div>
  );
}
