import { clearCachePath, clearCacheTag } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";

type Props = {
  onClose?: () => void;
};
export default function AddModal({ onClose }: Props) {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const handleAdd = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          completed: false,
        }),
      },
    );
    if (response.ok) {
      await clearCacheTag("todos");
      onClose?.();
      router.refresh();
    }
  };
  useEffect(() => {
    // const getCookie = async () => {
    //   const response = await fetch(`/api/cookie?name=name`);
    //   const data = await response.json();
    //   console.log(data);
    // };
    // getCookie();
  }, []);

  return (
    <div>
      <div className="max-w-75 mx-auto fixed top-[5%] left-0 right-0 bg-white border border-[#ccc] p-3 rounded-md z-9999">
        <h1 className="text-xl mb-3">Add todo</h1>
        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              className="px-3 py-1 border border-[#ccc] outline-0 rounded-sm w-full"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button className="px-3 py-1 bg-green-600 text-white cursor-pointer rounded-sm">
            Save
          </button>
        </form>
      </div>
      <div
        className="fixed inset-0 z-999 bg-[#0000007b]"
        onClick={onClose}
      ></div>
    </div>
  );
}
