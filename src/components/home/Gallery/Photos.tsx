export const Photos = () => {
  return (
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
  );
};
