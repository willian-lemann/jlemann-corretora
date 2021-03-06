/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

import { HeaderContent } from "../../types";

import { FiMenu as MenuIcon } from "react-icons/fi";
import { QuoteModal } from "./QuoteModal";

interface HeaderProps {
  content: HeaderContent;
}

export const Header = ({ content }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center py-14 xl:relative z-10">
          <div className="flex items-center justify-between mb-10 lg:mb-0">
            <h1 className="text-2xl">{content.title}</h1>

            <button
              className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>

          <ul
            className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16 ${
              !isMenuOpen ? "hidden" : "flex"
            }`}
          >
            {content.navigation.map((item) => (
              <li
                key={item.id}
                className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <QuoteModal />
        </nav>

        <div className="flex items-center justify-center xl:justify-start">
          <div className="mt-28 text-center xl:text-left w-[700px] z-20">
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
              {content.subheaderTitle}
            </h1>

            <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12 ">
              {content.subheaderDescription}
            </p>

            <button className="px-6 py-4 bg-green-700 text-white font-semibold text-lg rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
              Nos contate
            </button>
          </div>

          <div className="hidden xl:block xl:absolute z-0 top-0 right-0">
            <img
              src="/assets/image/home-img.png"
              alt="Home img"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
