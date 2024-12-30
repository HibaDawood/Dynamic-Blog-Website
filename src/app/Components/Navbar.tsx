"use client";

import React, { useState } from "react";
import { GiTechnoHeart } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        fontFamily: "Saira",
        fontWeight: 500,
      }}
      className="bg-myDarkPr border-gray-200 dark:bg-gray-900"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-myWhite text-3xl">
            <GiTechnoHeart />
          </span>
          <span
            className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-myDarkestPr
           text-myWhite"
          >
            Techno Blogs
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
            focus:ring-myDarkestPr dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
           bg-myLightPr md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent
            dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            {["Home", "Blogs", "About", "Contact", "FAQ"].map((item) => (
              <li key={item}>
                <a
                  href={item === "Home" ? "/" : `/${item}`}
                  className="block py-2 px-3 text-myWhite rounded
                   hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-myDarkestPr md:p-0 dark:text-myDarkestPr
                     md:dark:hover:text-myDarkestPr dark:hover:bg-gray-700
                      dark:hover:text-white md:dark:hover:bg-transparent text-base sm:text-lg font-semibold"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
