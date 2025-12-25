import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getTodos } from "./store/slice/counterSlice";
import { useEffect } from "react";
import { useBackToTop } from "./hooks/useBackToTop";
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const todoList = useSelector((state) => state.counter.todoList);
  const status = useSelector((state) => state.counter.status);
  const message = useSelector((state) => state.counter.message);
  const { showBackToTop, handleScrollTop } = useBackToTop(100);

  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(20));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (status === "pending") {
    return <h3>Loading...</h3>;
  }
  if (status === "error") {
    return <h3>{message}</h3>;
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
      {showBackToTop && (
        <button
          onClick={handleScrollTop}
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
          }}
        >
          Top
        </button>
      )}
    </div>
  );
}

//reducer
//action
//action creator
//state
//middleware

//redux toolkit --> Đóng gói lại thành 1 thư viện

//core concept

//slice: state, action, action creator, reducer

//Custom hook
// - Hàm đặc biệt: Bắt đầu bằng từ khóa use
// - Được phép sử dụng các hook khác
// - Không trả về giao diện (jsx)
// Tóm lại: custom hook giống như 1 component nhưng không trả về jsx, nhằm mục đích kế thừa logic
