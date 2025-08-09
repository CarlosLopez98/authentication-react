import { useContext } from "react";
import { AuthContext } from "../context/contexts";

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be use inside of AuthProvider");
  return ctx;
}

export default useAuth;