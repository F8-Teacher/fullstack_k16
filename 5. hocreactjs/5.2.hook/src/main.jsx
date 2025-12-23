import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import MountUnmount from "./MountUnmount.jsx";
import FetchApi from "./FetchApi.jsx";
import ReactRef from "./ReactRef.jsx";
import ExerciseRef from "./ExerciseRef.jsx";
import ReactContext from "./ReactContext.jsx";
import MoneyConvert from "./MoneyConvert/MoneyConvert.jsx";
import Reducer from "./Reducer.jsx";
import TodoReducer from "./TodoReducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MountUnmount /> */}
    {/* <FetchApi /> */}
    {/* <ReactRef /> */}
    {/* <ExerciseRef /> */}
    {/* <ReactContext /> */}
    {/* <MoneyConvert /> */}
    {/* <Reducer /> */}
    <TodoReducer />
  </StrictMode>
);
