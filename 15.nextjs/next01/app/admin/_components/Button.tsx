"use client";

import { use } from "react";
import { AppContext } from "./ContextProvider";

export default function Button() {
  const { setMessage } = use(AppContext);
  return (
    <div>
      <button
        className="bg-red-600 text-white px-3 py-1"
        onClick={() => setMessage("Hello anh em K16")}
      >
        Click me
      </button>
    </div>
  );
}
