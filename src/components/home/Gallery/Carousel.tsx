import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import { Carousel as RCarousel } from "react-responsive-carousel";
import { ApartmentPhotos } from "../../../types/apartment";

interface CarouselProps {
  photos: ApartmentPhotos[];
}

export const Carousel = ({ photos }: CarouselProps) => {
  console.log(photos);
  return (
    <RCarousel
      emulateTouch
      showStatus={false}
      className="w-full h-[600px] "
      centerMode
    >
      {photos?.map((photo) => (
        <div key={photo.id} className="bg-purple-400 w-[500px] h-[600px]">
          <Image
            src={photo.url}
            alt="apartment photo"
            fill
            className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
          />
        </div>
      ))}
    </RCarousel>
  );
};
