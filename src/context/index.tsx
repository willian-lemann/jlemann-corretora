import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
);
