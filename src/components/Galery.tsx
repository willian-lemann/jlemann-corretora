export const Galery = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Gallery
        </h1>
        <div className="md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
          <a
            href="#"
            className="px-6 py-2 bg-green-800 text-white font-semibold text-xl rounded-lg hover:bg-green-600 transition ease-in-out duration-500"
          >
            All
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            Exterior
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            Interior
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            Building
          </a>
        </div>
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
