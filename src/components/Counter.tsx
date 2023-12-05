import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { incrementCounter, incrementInfo, decrementCounterByAmount, decrementInfo } from "../slices/counterSlice";
import counterIncrementThunk from "../thunks/counterIncrementThunk";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const info = useSelector((state: RootState) => state.counter.info);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter = {counter}</h2>
      <h2>Info = {info}</h2>
      <br></br>

      <button onClick={() => dispatch(incrementCounter())} style={{ backgroundColor: 'red' }}>Increment Counter</button><br /><br />
      <button onClick={() => dispatch(decrementCounterByAmount(10))} style={{ backgroundColor: 'blue' }}>Decrement By 10 Counter</button><br /><br />

      <button onClick={() => dispatch(incrementInfo())} style={{ backgroundColor: 'green' }}>Increment Info</button><br /><br />
      <button onClick={() => dispatch(decrementInfo())} style={{ backgroundColor: 'orange' }}>Decrement Info</button><br /><br />

      <button onClick={() => dispatch(counterIncrementThunk(20))} style={{ backgroundColor: 'yellow' }}>Increment Counter Async By Amount 20</button><br /><br />
    </div>
  )
};

export default Counter;
