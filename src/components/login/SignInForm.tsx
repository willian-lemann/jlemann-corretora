import { FormEvent, ReactNode, useState } from "react";

import { LockClosedIcon } from "@heroicons/react/20/solid";

import { useAuth } from "../../context/AuthContext";
import { addErrorNotification } from "../shared/alert";
import { Loading } from "../shared/loading";

interface SignInFormProps {
  children?: ReactNode;
}

export const SignInForm = ({ children }: SignInFormProps) => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const { email, password, name } = formData;

    try {
      await signIn(email, password, name);
    } catch (error) {
      addErrorNotification("Erro ao fazer login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="mt-8 space-y-6 mx-[1rem]"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" defaultValue="true" />

      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email"
            value={formData.email}
            onChange={({ target }) =>
              setFormData({ ...formData, email: target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="email-address" className="sr-only">
            Nome
          </label>
          <input
            id="email-address"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Nome"
            value={formData.name}
            onChange={({ target }) =>
              setFormData({ ...formData, name: target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Senha"
            value={formData.password}
            onChange={({ target }) =>
              setFormData({ ...formData, password: target.value })
            }
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          {isLoading ? <Loading /> : " Entrar"}
        </button>
      </div>
    </form>
  );
};
