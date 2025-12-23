import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", {
      replace: false,
    });
  };
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
