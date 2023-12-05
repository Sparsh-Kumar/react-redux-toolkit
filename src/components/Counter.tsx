import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { incrementCounter, incrementInfo, decrementCounterByAmount, decrementInfo } from "../slices/counterSlice";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const info = useSelector((state: RootState) => state.counter.info);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{counter}</h2>
      <h2>{info}</h2>
      <div>
        <button onClick={() => dispatch(incrementCounter())}>Increment Counter</button>
        <button onClick={() => dispatch(decrementCounterByAmount(10))}>Decrement By 10 Counter</button>
      </div>

      <div>
        <button onClick={() => dispatch(incrementInfo())}>Increment Info</button>
        <button onClick={() => dispatch(decrementInfo())}>Decrement Info</button>
      </div>
    </div>
  )
};

export default Counter;
