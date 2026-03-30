"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h1 className="text-3xl">Đã có lỗi xảy ra</h1>
      <h2 className="text-2xl">Error: {error.message}</h2>
    </div>
  );
}
