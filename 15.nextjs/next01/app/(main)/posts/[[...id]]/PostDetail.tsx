type Props = {
  id: string[];
};
export default function PostDetail({ id }: Props) {
  console.log(id);
  return (
    <div>
      <h1 className="text-3xl">PostDetail</h1>
    </div>
  );
}
