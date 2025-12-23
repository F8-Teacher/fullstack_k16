import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const loginData = {
  email: "demo@gmail.com",
  password: "123456",
};
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const continueUrl = searchParams.get("continue") ?? "/";
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === loginData.email && password === loginData.password) {
      localStorage.setItem("isAuth", true);
      navigate(continueUrl);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
