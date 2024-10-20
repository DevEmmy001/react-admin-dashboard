import { header } from "framer-motion/client";
import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="flex max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <p className="ml-5 text-sm ">Developed by Emeka</p>
      </div>
    </header>
  );
};

export default Header;
