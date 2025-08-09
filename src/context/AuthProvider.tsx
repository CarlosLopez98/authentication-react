import { useEffect, useState } from "react";
import { AuthContext } from "./contexts";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false);
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Wrong credentials");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);

      navigate("/");
    } catch (e) {
      if (e instanceof Error)
        throw new Error(e.message);
      else
        throw new Error("Unexpected error while logging!");
    }
  };

  const signup = async (firstname: string, lastname: string, email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      if (!response.ok) {
        throw new Error("Error with the data");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);

      navigate("/");
    } catch (e) {
      if (e instanceof Error)
        throw new Error(e.message);
      else
        throw new Error("Unexpected error while signing up!");
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;