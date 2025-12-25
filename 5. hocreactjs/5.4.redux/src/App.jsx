import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/actions/counterActions";
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const handleClick = () => {
    dispatch(increment(10));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

//dispatch --> reducer --> redux state -> subscribe --> react xử lý tiếp

//function -> return action object -> action creator
