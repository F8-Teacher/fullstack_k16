import { useEffect, useState } from "react";

export default function Content() {
  //   console.log("Content render");

  //   useEffect(() => {
  //     console.log("Content Mounting");
  //     return () => {
  //       console.log("Content Unmounting");
  //     };
  //   }, []);
  const [count, setCount] = useState(localStorage.getItem("count") ?? 0);
  const handleIncrement = () => {
    setCount(+count + 1);
    console.log("State change");
  };
  useEffect(() => {
    console.log("mount");
    return () => {
      localStorage.removeItem("count");
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("count", count);
    console.log("effect 1");
  }, [count]);

  console.log("re-render");

  return (
    <div>
      <h1>Count: {count}</h1>
      {console.log("UI Update")}
      <button onClick={handleIncrement}>+</button>
      <hr />
    </div>
  );
}

//Mounting: Quá trình component được đưa vào DOM
//Unmounting: Quá trình component bị loại bỏ khỏi DOM

//Component Lifecycle
//1. Mounting --> Lần render đầu tiên (Component được đưa vào DOM)
//2. Updating --> Từ lần re-render thứ 2 trở đi
//3. Unmounting --> Khi component bị loại khỏi DOM

//Bài tập:
// - Bấm dấu + --> Tăng lên --> Lưu vào localStorage
// - Khi reload trang --> Lấy giá trị cuối cùng
// - Khi bấm toggle --> Xóa localStorage
