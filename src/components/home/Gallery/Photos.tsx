import Image from "next/image";
import { useApartmentPhotos } from "../../../context/apartment/useApartmentPhotos";
import { useApartments } from "../../../context/apartment/useApartments";
import { Carousel } from "./Carousel";

interface PhotosProps {
  apartmentId: string;
}

export const Photos = ({ apartmentId }: PhotosProps) => {
  const { photos, loading } = useApartmentPhotos(apartmentId);

  if (loading) {
    return <p>loading...</p>;
  }

  console.log(photos);
  return (
    <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
      <Carousel photos={photos} />
      {/* <div>
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
      </div> */}
    </div>
  );
};
