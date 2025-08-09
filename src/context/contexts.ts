import { createContext } from "react";
import type { ToastContextProvider } from "../types/toast.d";
import type { AuthContextProps } from "../types/auth.d";

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const ToastContext = createContext<ToastContextProvider | undefined>(undefined);
