import { useState } from "react";
import { withSSRGuest } from "../utils/withSSRGuest";

import { SignInForm } from "../components/login/SignInForm";
import { SignUpForm } from "../components/login/SignUpForm";

export default function Login() {
  const [formMode, setFormMode] = useState<"login" | "signup">("login");

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entrar em JLemann corretora
            </h2>
          </div>

          {formMode === "login" ? (
            <SignInForm>
              <button
                type="button"
                className="ml-2 block text-sm text-gray-900"
                onClick={() => setFormMode("signup")}
              >
                Cadastrar-me
              </button>
            </SignInForm>
          ) : (
            <SignUpForm>
              <button
                type="button"
                className="ml-2 block text-sm text-gray-900"
                onClick={() => setFormMode("login")}
              >
                Voltar
              </button>
            </SignUpForm>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {},
  };
});
