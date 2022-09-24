import { useState } from "react";
import Image from "next/image";

import { withSSRGuest } from "../utils/withSSRGuest";

import { SignInForm } from "../components/login/SignInForm";
import { SignUpForm } from "../components/login/SignUpForm";

export default function Login() {
  const [formMode, setFormMode] = useState<"login" | "signup">("login");

  return (
    <>
      <div className="flex  justify-between w-screen h-screen">
        <section className="flex flex-col justify-center m-auto md:w-1/2 max-w-md  space-y-8">
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
        </section>

        <section className="hidden md:block w-1/2">
          <img
            src="/assets/image/login-background.jpg"
            alt=""
            className="w-full h-full"
          />
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {},
  };
});
