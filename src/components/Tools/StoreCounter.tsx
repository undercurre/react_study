import { useSelector, useDispatch } from "react-redux";
import {
  CounterState,
  decrement,
  increment,
} from "../../store/reducers/counterReducer";

export default function Counter() {
  const count = useSelector((state: CounterState) => state.counter.value);
  const dispatch = useDispatch();

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
    </div>
  );
}
