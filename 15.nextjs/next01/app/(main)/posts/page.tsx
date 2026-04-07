import { fetchWrapper } from "@/utils/fetch";
import PageTitle from "./PageTitle";
const getPosts = async () => {
  const response = await fetchWrapper(
    `${process.env.NEXT_PUBLIC_SERVER_API}/posts`,
  );
  if (response.status === 401) {
    return false;
  }
  return response.json();
};
export default async function PostsPage() {
  const posts = await getPosts();
  // if (!posts) {
  //   return redirect("/auth/login");
  // }
  return (
    <div>
      <PageTitle />
      {posts?.map((post: { id: number; title: string }) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

//Refresh token -->
// - Thụ động: Khi nào response báo về 401 --> Refresh token --> save token --> retry
// - Chủ động: Kiểm tra thời gian hết hạn của accessToken theo tuần suất --> Trước khi hết hạn khoảng 1 phút --> Chủ động refresh token và update (Client Component)
