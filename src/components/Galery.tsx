import { useState } from "react";

export const Galery = () => {
  const [selectedNavigation, setSelectedNavigation] = useState(0);

  const navigation = [
    {
      id: 1,
      name: "Todos",
      href: "#/todos",
      current: true,
    },

    {
      id: 2,
      name: "Lotes",
      href: "#/lotes",
      current: false,
    },

    {
      id: 3,
      name: "Casas",
      href: "#/casas",
      current: false,
    },

    {
      id: 4,
      name: "Apartamentos",
      href: "#/apartamentos",
      current: false,
    },
  ];
  // active ? "bg-gray-100" : "",
  //                             "block px-4 py-2 text-sm text-gray-700"
  return (
    <section id="gallery" className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Gallery
        </h1>
        <ul className="md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                item.id === selectedNavigation ? "bg-green-800" : ""
              } px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 focus:bg-green-800 focus:text-gray-100 transition ease-in-out duration-500`}
              onClick={() => setSelectedNavigation(item.id)}
            >
              {item.name}
            </a>
          ))}
        </ul>

        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <div>
            <img
              src="/assets/image/gallery-1.png"
              alt="image"
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <img
              src="/assets/image/gallery-4.png"
              alt="image"
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>
          <div>
            <img
              src="/assets/image/gallery-2.png"
              alt="image"
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <img
              src="assets/image/gallery-5.png"
              alt="image"
              className="mb-3 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <img
              src="/assets/image/gallery-6.png"
              alt="image"
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>
          <div>
            <img
              src="/assets/image/gallery-3.png"
              alt="image"
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <img
              src="/assets/image/gallery-7.png"
              alt="image"
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
      {/* container.// */}
    </section>
  );
};
