const container = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("Ok chưa?");
//     },
//   },
//   "F8 - Học React không khó"
// );

// const h2 = React.createElement("h2", null, "Học React quá khó");

// const div = React.createElement("div", null, h1, h2);
// const wrapper = React.createElement(React.Fragment, null, h1, h2);
const title = <h2>Hello anh em</h2>;
const classA = "class-a";
const check = false;
const isAuth = true;
const id = 1;
// const wrapper = (
//   <>
//     {isAuth && (
//       <h1
//         id="title"
//         style={{
//           color: "red",
//           backgroundColor: "yellow",
//         }}
//         className="title"
//       >
//         F8 - Học React không khó
//       </h1>
//     )}
//     <a href={`https://fullstack.edu.vn/khoa-hoc/${id}`}>F8 Website</a>
//     <div className={isAuth ? "a" : ""}></div>
//     <h2 className={check ? classA : "abc"}>Xin chào anh em F8</h2>
//     {title}
//     <button
//       onClick={() => {
//         console.log("Clicked");
//       }}
//     >
//       Click me
//     </button>
//   </>
// );

const todos = [
  {
    id: 1,
    title: "Todo 1",
  },
  {
    id: 2,
    title: "Todo 2",
  },
];
// const myArr = todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>);
// const myArr = [];
// todos.forEach((todo) => {
//   myArr.push(<h1 key={todo.id}>{todo.title}</h1>);
// });
const handleClick = (e) => {
  console.log("Clicked");
  console.log(e);
};
const handleRemove = (id) => {
  console.log(id);
};
// console.log(() => handleRemove(1));
//Event Handler --> Tham số mặc định là event object
const handleChangeValue = (e) => {
  console.log(e.target.value);
};
const User = ({ name, email }) => {
  return (
    <div>
      <h2>Người dùng: {name}</h2>
      <h2>Email: {email ?? "Không có"}</h2>
    </div>
  );
};
const Product = (props) => {
  return (
    <div>
      <h2>Sản phẩm</h2>
      {props.children}
    </div>
  );
};
const Counter = () => {
  //Trạng thái (State): Thể hiện dữ liệu trong 1 component
  //Khi trạng thái thay đổi --> Component sẽ tự động được kích hoạt gọi lại (re-render)
  //Để quản lý trạng thái -> Dùng hàm React.useState() (Gọi là hook)
  //Cú pháp: const [tenState, hamThayDoiState] = React.useState(giatrimacdinh)
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [data, setData] = React.useState([]);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    });
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleClickBtn = () => {
    if (!value) {
      setMsg("Vui lòng nhập");
    } else {
      setMsg("");
      setData([...data, value]);
      setValue("");
    }
  };
  const handleDelete = (index) => {
    setData(data.filter((item, _index) => _index !== index));
    // const dataClone = [...data];
    // dataClone.splice(index, 1);
    // setData(dataClone);
  };
  //[1,2,3] --> data
  //setData([1,3]) --> [1,3] --> data
  //index = 1 --> [1,3] --> data
  return (
    <div>
      <h1>Count: {count}</h1>
      <button>-</button>
      <button onClick={handleIncrement}>+</button>
      <div>
        <input
          placeholder="Nhập gì đó..."
          onChange={handleChangeValue}
          value={value}
        />
        <button onClick={handleClickBtn}>Add</button>
        {msg && <span style={{ color: "red" }}>{msg}</span>}
        <div>Giá trị: {value}</div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => handleDelete(index)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const wrapper = (
  <>
    <div>
      <Counter />
      {/* <User name="Anh An" email="an@gmail.com" />
      <User name="Anh Sơn" /> */}
      {/* <Product>
        <h3>Sản phẩm 1</h3>
        <h3>Sản phẩm 2</h3>
      </Product> */}
      {/* {todos.map((todo) => {
        return (
          <h1 key={todo.id}>
            {todo.title}
            <button onClick={() => handleRemove(todo.id)}>&times;</button>
          </h1>
        );
      })}
      <input onChange={handleChangeValue} />
      <button onClick={handleClick}>Click me</button> */}
    </div>
  </>
);
// console.log(wrapper);

container.render(wrapper);

//Fragment
//JSX = JavaScript XML (Trình duyệt không hiểu)
//Javascript Compiler (Babel, SWC,...)
//React: JSX --> React Element --> React DOM --> Browser
