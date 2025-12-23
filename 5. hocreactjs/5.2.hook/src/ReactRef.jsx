import { useEffect, useRef } from "react";
import Button from "./components/Button";
const data = ["Item 1", "Item 2", "Item 3"];
export default function ReactRef() {
  const inputRef = useRef();
  const itemsRef = useRef([]);
  const btnRef = useRef();
  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
    let id = setTimeout(() => {
      itemsRef.current.forEach((el) => {
        el.style.color = "red";
      });
    }, 3000);
    console.log(btnRef);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div>
      <input type="text" placeholder="Nhập gì đó..." ref={inputRef} />
      <ul>
        {data.map((item, index) => (
          <li
            ref={(el) => {
              if (itemsRef.current.length < data.length) {
                itemsRef.current.push(el);
              }
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <Button ref={btnRef} />
    </div>
  );
}

//State:
// - state đổi --> component re-render
// - re-render --> state lấy giá cuối cùng của lần render trước

//Ref: useRef()
// - Giữ được giá trị sau mỗi lần re-render
// - Không kích hoạt re-render khi thay đổi
// - Tham chiếu đến phần tử DOM --> Thao tác với Dom Browser
