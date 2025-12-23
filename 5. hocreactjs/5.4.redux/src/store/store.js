import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  //key: reducer-tuong-ung
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(rootReducer);
// console.log(store.getState());

//counterReducer
//todoReducer
//authReducer

// --> rootReducer --> store

//Redux Middleware (Redux Thunk)
//Redux Toolkit --> Đơn giản hóa quá trình làm việc với Redux
