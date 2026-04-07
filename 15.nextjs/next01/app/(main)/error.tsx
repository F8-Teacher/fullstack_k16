"use client";

// import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  // useEffect(() => {
  //   if (error.message === "Unauthorize") {
  //     window.location.href = "/auth/login";
  //   }
  // }, [error]);
  return (
    <div>
      <h1 className="text-3xl">Đã có lỗi xảy ra</h1>
      <h2 className="text-2xl">Error: {error.message}</h2>
    </div>
  );
}
