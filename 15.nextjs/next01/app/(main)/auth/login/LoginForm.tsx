"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "../../_actions/auth.action";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, action, pending] = useActionState(
    loginAction,
    {} as { success?: boolean },
  );
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      window.location.href = "/";
    }
  }, [state]);
  return (
    <form action={action}>
      {Object.keys(state).length > 0 && (
        <div className="px-3 py-2 text-center bg-amber-300 mx-3">
          {state.success ? "Đăng nhập thành công" : "Đăng nhập thất bại"}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="border border-[#ddd] px-3 py-2 outline-0 w-full"
          placeholder="Email..."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="border border-[#ddd] px-3 py-2 outline-0 w-full"
          placeholder="Password..."
          required
        />
      </div>
      <button
        className="px-3 py-2 bg-green-600 text-white cursor-pointer"
        disabled={pending}
      >
        {pending ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
