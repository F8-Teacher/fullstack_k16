import { createContext, useState } from "react";
import Theme from "./components/Theme";
import Heading from "./components/Heading";
export const AppContext = createContext();

export default function ReactContext() {
  const [message, setMessage] = useState("F8 - Học React");
  return (
    <AppContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      <Theme />
    </AppContext.Provider>
  );
}

//Props: A -> B -> C -> D
//Context:
//1. Provider --> Gửi dữ liệu đi
//2. Consumer --> Lấy dữ liệu từ context
// - Class component --> Sử dụng component Consumer
// - Function component --> Sử dụng hook useContext hoặc use (React 19)

//Khi component cha re-render --> Tất cả các component con bị re-render
