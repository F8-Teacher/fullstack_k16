"use client";
import Link from "next/link";
import { use } from "react";
import { AppContext } from "./ContextProvider";

export default function Nav() {
  const { message } = use(AppContext);
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/users">Users</Link>
        </li>
        <li>Hello, {message}</li>
      </ul>
    </nav>
  );
}
