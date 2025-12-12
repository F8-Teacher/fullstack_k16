import { useEffect, useState } from "react";
import { instance } from "./utils/axios";
export default function FetchApi() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await instance.get(`/posts`);
        setPosts(response.data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
    const handlePress = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keyup", handlePress);
    return () => {
      document.removeEventListener("keyup", handlePress);
    };
  }, []);
  const handleDetail = async (id) => {
    setShowModal(true);
    const response = await instance.get(`/posts/${id}`);
    setPost(response.data);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setPost(null);
  };
  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        posts.map((post) => (
          <h2 key={post.id}>
            {post.title}{" "}
            <button onClick={() => handleDetail(post.id)}>Chi tiết</button>
          </h2>
        ))
      )}
      {showModal && (
        <>
          <div
            style={{
              position: "fixed",
              top: "5%",
              left: 0,
              right: 0,
              maxWidth: "70%",
              marginInline: "auto",
              background: "#fff",
              border: "1px solid #ccc",
              padding: "15px",
              zIndex: 100,
            }}
          >
            {!post ? (
              <h3>Loading...</h3>
            ) : (
              <>
                <h3>{post?.title}</h3>
                <p>{post?.body}</p>
              </>
            )}
          </div>
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgb(0 0 0 / 55%)",
            }}
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </div>
  );
}

//useRef
//context
