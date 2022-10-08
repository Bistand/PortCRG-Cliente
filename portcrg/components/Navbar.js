import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";
import { datosUSer } from "../peticiones/session";

const Navbar = () => {
  const [user, setUser] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [Ocultar, setOcultar] = useState(false);
  const tokenuser = getCookie("tokenuser");
  const router = useRouter();
  let usuario;
  useEffect(() => {
    if (tokenuser) {
      setOcultar(true);
      Datos();
    } else {
      setOcultar(false);
      setUser("");
    }
  });
  const Datos = async () => {
    usuario = await datosUSer(tokenuser);
    setUser(usuario.name);
  };
  const logout = () => {
    deleteCookie("tokenuser");
    router.push("/");
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cherry-red px-5 sm:px-12 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-16">
        <Image src="/PortCRG.png" width={64} height={64}></Image>
      </div>
      <div className="block sm:hidden">
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
          "w-full block flex-grow sm:flex sm:items-center sm:w-auto" +
          (navbarOpen ? null : " hidden")
        }
      >
        <div className="text-sm sm:flex-grow">
          <Link href="/">
            <a className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
              Inicio
            </a>
          </Link>

          <Link href="/login">
            <a
              className={`mt-4 sm:${
                !Ocultar ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Ocultar ? "block " : "hidden"
              }`}
            >
              Login
            </a>
          </Link>

          <Link href="/sign_up">
            <a className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
              Registrar
            </a>
          </Link>

          <Link href="/courses">
            <a className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
              Cursos
            </a>
          </Link>

          <Link href="/informative">
            <a className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
              Eventos
            </a>
          </Link>

          <Link href="/calendario">
            <a className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
              Calendario
            </a>
          </Link>
        </div>
        <div className="divide-y-6 items-center flex">
          <a className="block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12">
            {user}
          </a>
          <Link href="/profile">
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-cherry-red hover:bg-white mt-4 sm:mt-0">
              <img
                className="h-[30px] w-[30px] rounded-full "
                src="/user1.png"
              ></img>
            </button>
          </Link>

          <button
            onClick={logout}
            className={`ml-4 mt-4 sm:${
              Ocultar ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              Ocultar ? "block " : "hidden"
            }`}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
