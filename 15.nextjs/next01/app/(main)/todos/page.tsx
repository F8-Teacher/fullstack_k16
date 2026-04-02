import DeleteButton from "./DeleteButton";
import ModalManager from "./ModalManager";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todos"],
    },
  });
  return response.json();
};
export default async function TodosPage() {
  // const cookieStore = await cookies(); //dynamic rendering
  // console.log(cookieStore.get("name"));
  // cookieStore.set("email", "an@gmail.com");
  // const response = await fetch(`http://localhost:3000/api/cookie?name=name`);
  // const data = await response.json();
  // console.log(data);

  const todos = await getTodos();
  return (
    <div>
      <h1 className="text-3xl">Todo List</h1>
      <ModalManager />
      {todos.map((todo) => (
        <h2 key={todo.id} className="flex gap-3">
          <input type="checkbox" disabled={todo.completed} />
          <span className={`${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </span>
          <DeleteButton id={todo.id} />
        </h2>
      ))}
    </div>
  );
}
