import { useState } from "react";

import { GalleryContent } from "../../../types";

import { Photos } from "./Photos";
import { Tabs } from "./Tabs";

interface GalleryProps {
  content: GalleryContent;
}

export const Gallery = ({ content }: GalleryProps) => {
  const [apartmentId, setApartmentId] = useState("");

  const handleSelectTab = (id: string) => {
    setApartmentId(id);
  };

  return (
    <section id="gallery" className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          {content.title}
        </h1>

        <Tabs
          tabs={content.apartments}
          selectedNavigation={apartmentId}
          onSelectTab={handleSelectTab}
        />

        <Photos apartmentId={apartmentId} />
      </div>
    </section>
  );
};
