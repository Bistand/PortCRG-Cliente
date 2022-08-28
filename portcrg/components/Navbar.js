import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cherry-red px-12 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-16">
        <Image src="/PortCRG.png" width={64} height={64}></Image>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-gray-200 hover:border-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full block flex-grow lg:flex lg:items-center lg:w-auto" +
          (navbarOpen ? null : " hidden")
        }
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#inicio"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8"
          >
            Inicio
          </a>
          <a
            href="#asistencia"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8"
          >
            Asistencia
          </a>
          <a
            href="#cursos"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8"
          >
            Cursos
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cherry-red hover:bg-white mt-4 lg:mt-0"
          >
            Usuario
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
