import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;