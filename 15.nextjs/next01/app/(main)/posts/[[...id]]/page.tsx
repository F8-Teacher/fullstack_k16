import PostDetail from "./PostDetail";
import PostList from "./PostList";

type Props = {
  params: Promise<{ id: string[] }>;
};
export default async function PostsPage({ params }: Props) {
  const { id } = await params;
  if (!id) {
    return <PostList />;
  }
  return <PostDetail id={id} />;
}
