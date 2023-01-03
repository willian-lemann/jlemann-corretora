import { useState } from "react";
import Image from "next/image";

import { withSSRGuest } from "../utils/withSSRGuest";

import { SignInForm } from "../components/login/SignInForm";

export default function Login() {
  return (
    <>
      <div className="flex justify-between w-screen h-screen">
        <section className="flex flex-col justify-center m-auto md:w-1/2 max-w-md  space-y-8">
          <div>
            <div className="mx-auto h-20 w-20">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entrar em JLemann corretora
            </h2>
          </div>
          <SignInForm />
        </section>

        <section className="hidden md:block w-1/2 relative">
          <Image
            src="/assets/image/login-background.jpg"
            alt=""
            className="w-full h-full"
            fill
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
