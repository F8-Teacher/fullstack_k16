import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { thunkMiddleware } from "./middlewares/thunkMiddleware";

const rootReducer = combineReducers({
  //key: reducer-tuong-ung
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
// console.log(store.getState());

//counterReducer
//todoReducer
//authReducer

// --> rootReducer --> store

//Redux Middleware (Redux Thunk)
//Redux Toolkit --> Đơn giản hóa quá trình làm việc với Redux
