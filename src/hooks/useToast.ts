import { useContext } from "react";
import { ToastContext } from "../context/contexts";

const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be use inside of ToastProvider");
  return ctx;
}

export default useToast;