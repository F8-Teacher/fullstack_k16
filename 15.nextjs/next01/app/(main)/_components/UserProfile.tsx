"use client";
import Link from "next/link";
import { use } from "react";
import { AuthContext } from "../_context/AuthProvider";

export default function UserProfile() {
  const { user, isLoading, isAuthenticated } = use(AuthContext);

  return (
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : isAuthenticated ? (
        <li>Chào: {user.name}</li>
      ) : (
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
