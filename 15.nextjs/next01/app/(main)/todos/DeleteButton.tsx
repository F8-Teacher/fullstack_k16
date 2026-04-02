"use client";

import { clearCacheTag } from "@/utils/cache";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};
export default function DeleteButton({ id }: Props) {
  const router = useRouter();
  //closure
  const handleRemove = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`,
      {
        method: "DELETE",
      },
    );
    if (response.ok) {
      await clearCacheTag("todos");
      router.refresh();
    }
  };
  return <button onClick={handleRemove}>&times;</button>;
}
