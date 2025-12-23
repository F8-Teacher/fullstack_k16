import { use, useState } from "react";
import { TodoContext } from "../../TodoReducer";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const { dispatch } = use(TodoContext);
  const handleAdd = (e) => {
    e.preventDefault();
    /*
    {
      id: 1,
      title: "Todo 1",
      isCompleted: false,
    },
    */
    if (!title) {
      return alert("Không được để trống");
    }
    const todo = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };
    dispatch({
      type: "todos/add",
      payload: todo,
    });
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
