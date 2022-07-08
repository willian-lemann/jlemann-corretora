import { useState } from "react";

export const Book = () => {
  const [content, setContent] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleSubmit = () => {};

  return (
    <section id="contact" className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <div className="bg-green-800 flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Fale com a gente
              <br /> para discutir
            </h1>
            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Won’t worry, we are
              <br /> ready to help you. You can fill in the column on the <br />
              right to book a meeting with us. Totally free.
            </p>
          </div>
          <div className="hidden xl:block xl:absolute right-0">
            <img src="/assets/image/book.png" alt="Image" />
          </div>
          <div className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
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
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
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
                className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
                onClick={handleSubmit}
              >
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
