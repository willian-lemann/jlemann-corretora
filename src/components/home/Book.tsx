import { FormEvent, useState } from "react";

import { subscribe } from "../../services/subscribe";

import {
  addErrorNotification,
  addSuccessNotification,
} from "../../components/shared/alert";

import { Loading } from "../../components/shared/loading";

export const Book = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await subscribe(content.email);
      addSuccessNotification(
        "Inscrição realizada com sucesso!, Breve você receberá mais informações em seu e-mail"
      );
    } catch (error) {
      console.log(error);
      addErrorNotification("Erro ao tentar se inscrever, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts" className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <div className="bg-rose-50 flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-semibold text-zinc-800 text-4xl md:text-5xl lg:leading-[5rem] lg:text-7xl mb-4">
              Fale com a gente
              <br /> para discutir
            </h1>
            <p className="font-normal text-zinc-800 text-md md:text-xl">
              Need more time to discuss? Won’t worry, we are
              <br /> ready to help you. You can fill in the column on the <br />
              right to book a meeting with us. Totally free.
            </p>
          </div>
          <div className="hidden xl:block xl:absolute right-0">
            <img src="/assets/image/book.png" alt="Image" />
          </div>
          <form
            className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl"
            onSubmit={handleSubmit}
          >
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Agende uma visita
              </h3>
            </div>
            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                value={content.name}
                onChange={({ target }) => {
                  setContent({ ...content, name: target.value });
                }}
              />
            </div>
            <div className="py-3">
              <input
                type="email"
                placeholder="Email"
                value={content.email}
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                onChange={({ target }) => {
                  setContent({ ...content, email: target.value });
                }}
              />
            </div>
            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Date"
                className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />
              <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="calendar" />
              </div>
            </div>
            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Virtual Meeting"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
              <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="chevron-down" />
              </div>
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="w-full h-[53px] flex items-center justify-center font-semibold text-lg text-white bg-rose-600 rounded-xl hover:brightness-90 transition ease-in-out duration-500"
              >
                {isLoading ? <Loading /> : "Inscrever-se"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
