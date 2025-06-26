import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;

  if (!token || decodedToken.role !== "admin") {
    return <Navigate to="/login" />; // Redirect to login if not admin
  }

  return children; // Allow access to protected route
};

export default ProtectedRoute;
