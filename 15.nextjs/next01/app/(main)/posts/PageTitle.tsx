"use client";

import { use } from "react";
import { AuthContext } from "../_context/AuthProvider";

export default function PageTitle() {
  const { accessToken } = use(AuthContext);
  console.log(`accessToken From Client`, accessToken);

  return <h1 className="text-3xl mb-3">Posts</h1>;
}
