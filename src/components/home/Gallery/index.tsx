import { useState } from "react";

import { GalleryContent } from "../../../types";

import { Photos } from "./Photos";
import { Tabs } from "./Tabs";

interface GalleryProps {
  content: GalleryContent;
}

export const Gallery = ({ content }: GalleryProps) => {
  const [selectedNavigation, setSelectedNavigation] = useState(0);

  const handleSelectTab = (id: number) => {
    setSelectedNavigation(id);
  };

  return (
    <section id="gallery" className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          {content.title}
        </h1>

        <Tabs
          tabs={content.categories}
          selectedNavigation={selectedNavigation}
          onSelectTab={handleSelectTab}
        />

        <Photos />
      </div>
    </section>
  );
};
