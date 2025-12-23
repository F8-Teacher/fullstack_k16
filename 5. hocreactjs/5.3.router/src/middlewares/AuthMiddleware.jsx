import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = localStorage.getItem("isAuth") === "true";
  const location = useLocation();
  if (isAuth) {
    return <Outlet />;
  }

  const continueUrl = location.pathname;

  return <Navigate to={`/login?continue=${continueUrl}`} replace />;
}
