import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import Router from "next/router";
import { setCookie, destroyCookie } from "nookies";

import { authenticateService } from "../services/auth/authenticate";

import { signOutService } from "../services/auth/signout";

import { User } from "../models/user";

interface InitialState {
  currentUser: User | null;
  signIn: (email: string, password: string, name: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as InitialState);

interface AuthProviderProps {
  children: ReactNode;
}

const COOKIE_NAME = "@jlemann_corretora.token";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function signIn(email: string, password: string, name: string) {
    const { token, user } = await authenticateService(email, password, name);

    if (!user) {
      return;
    }

    setCookie(undefined, COOKIE_NAME, token, {
      maxAge: 60 * 60 * 1,
    });

    setCurrentUser({
      email,
      name,
    });

    Router.push("/admin");
  }

  async function logOut() {
    await signOutService();
    setCurrentUser(null);
    destroyCookie(undefined, COOKIE_NAME);

    Router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ currentUser, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
