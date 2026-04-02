import AddForm from "./AddForm";

export default function CreateTodoPage() {
  return (
    <div className="mx-auto bg-white border border-[#ccc] p-3 rounded-md">
      <h1 className="text-xl mb-3">Add todo</h1>
      <AddForm />
    </div>
  );
}
