import { useReducer } from "react";
import { initialState, reducer } from "./utils/reducer";

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    //dispatch --> Object Action: {type: "ten", payload: du-lieu-gui-len}
    dispatch({
      type: "counter/increment",
      payload: 2,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
}

//const [value, setValue] = useState(init)
//Logic update state --> Trong component --> Xử lý state nội bộ, không kế thừa được logic tới các component khác

//Giải pháp: Tách logic cập nhật state ra bên ngoài
// - Sử dụng concept của hàm reduce array
// - Logic nằm ở hàm reducer

//array.reduce(callback, initialValue)

//Ý nghĩa:
// - Giải quyết các state phức tạp trong component
// - Muốn kế logic cập nhật state (Áp dụng khi cần share state tới nhiều component)
