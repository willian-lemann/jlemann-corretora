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
import { signUpService } from "../services/auth/signup";
import { signOutService } from "../services/auth/signout";

import { User } from "../models/user";

interface InitialState {
  currentUser: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as InitialState);

interface AuthProviderProps {
  children: ReactNode;
}

const COOKIE_NAME = "@jlemann_corretor.token";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    const { token, user } = await authenticateService(email, password);

    if (!user) {
      return;
    }

    setCookie(undefined, COOKIE_NAME, token, {
      maxAge: 60 * 60 * 1,
    });

    setCurrentUser({
      email,
      name: user.name || "Juciane Lemann",
    });

    Router.push("/");
  }

  async function signUp(email: string, password: string) {
    const { token, user } = await signUpService(email, password);

    if (!user) {
      return;
    }

    setCookie(undefined, COOKIE_NAME, token, {
      maxAge: 60 * 60 * 1,
    });

    setCurrentUser({
      email,
      name: user.name || "Juciane Lemann",
    });

    Router.push("/");
  }

  async function logOut() {
    await signOutService();
    setCurrentUser(null);
    destroyCookie(undefined, COOKIE_NAME);

    Router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
