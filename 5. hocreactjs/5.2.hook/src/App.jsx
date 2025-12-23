import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  console.log(`re-render: ${count}`);
  // useEffect(() => {
  //   console.log(`effect: ${count}`);
  //   //cleanup
  //   return () => {
  //     console.log(`cleanup: ${count}`);
  //   };
  // }, [count]);
  useEffect(() => {
    console.log("effect", count);
    const setLoginStatus = () => {
      setTimeout(() => {
        setLogin(localStorage.getItem("is_login") === "true" ? true : false);
        setLoading(false);
      }, 1000);
    };
    setLoginStatus();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {console.log("UI update", count)}
      {isLogin ? (
        <>
          <h1>Count: {count}</h1>
          <button onClick={handleIncrement}>+</button>
        </>
      ) : (
        <div>
          <h2>Vui lòng đăng nhập</h2>
        </div>
      )}
    </div>
  );
}

//useEffect(callback, depedencies)

//Flow React: State -> Trigger -> Re-render -> UI Update
//Side Effect: Các logic không nằm trong luồng chính của việc update giao diện
// - storage: localStorage, sessionStorage
// - http request
// - timer: setTimeout, setInterval,...
// - eventListener
// => Các công việc side effect phải được thực hiện sau khi render

//Hook useEffect dùng để quản lý các side effect
//TH1: depedencies = null | undefined --> Khi component re-render --> callback effect sẽ chạy
//Th2: depedencies = [] --> callback effect chỉ chạy sau lần render đầu tiên
//Th3: dependencies = [bien1,bien2,...] --> Khi 1 trong các biến được khai báo chạy --> callback effect sẽ chạy

//snapshot

//Thứ tự chạy useEffect
// 1. State thay đổi
// 2. Component Re-render
// 3. UI Update (Browser Repaint)
// 4. Cleanup (Nếu có)
// 5. callback Effect

//Thứ tự chạy useLayoutEffect
// 1. State thay đổi
// 2. Component Re-render
// 3. Cleanup (Nếu có)
// 4. callback Effect
// 5. UI Update (Browser Repaint)
