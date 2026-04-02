"use client";

import { useActionState, useEffect } from "react";
import { handleSave, something } from "./action";
import { useRouter } from "next/navigation";

export default function AddForm() {
  const router = useRouter();
  const [state, action, pending] = useActionState(handleSave, {
    message: "",
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      router.push(`/todos`);
    }
  }, [state.success]);
  return (
    <div>
      <form action={action}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ccc] outline-0 rounded-sm w-full"
            placeholder="Title..."
            name="title"
          />
          {state.errors?.title && (
            <span className="text-red-600">{state.errors?.title}</span>
          )}
        </div>
        <button
          className="px-3 py-1 bg-green-600 text-white cursor-pointer rounded-sm disabled:bg-gray-600"
          disabled={pending}
        >
          {pending ? "Saving" : "Save"}
        </button>
        {state.message && (
          <span
            className={`${state.success ? "text-green-600" : "text-red-600"} block`}
          >
            {state.message}
          </span>
        )}
      </form>
      <button onClick={something}>Click me</button>
    </div>
  );
}
