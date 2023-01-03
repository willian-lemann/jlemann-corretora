import { createContext, ReactNode, useContext } from "react";

import { ContextParams, usePasswords } from "./usePasswords";

const PasswordsContext = createContext({} as ContextParams);

interface PasswordsProviderProps {
  children: ReactNode;
}

export const PasswordsProvider = ({ children }: PasswordsProviderProps) => {
  const context = usePasswords();

  return (
    <PasswordsContext.Provider value={{ ...context }}>
      {children}
    </PasswordsContext.Provider>
  );
};

export const usePasswordsContext = () => useContext(PasswordsContext);
