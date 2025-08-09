export interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (firstname: string, lastname: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}