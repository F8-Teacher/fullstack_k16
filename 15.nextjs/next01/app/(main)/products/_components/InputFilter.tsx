"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function InputFilter() {
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(`?s=${value}`);
  };
  return (
    <input
      type="text"
      className="border border-[#ddd] px-3 py-2 outline-none mb-3"
      placeholder="Từ khóa..."
      onChange={handleChange}
    />
  );
}
