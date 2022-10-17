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
  const [Supeadmrhidden, setSuperadmhidden] = useState(true);
  const [Adminhidden, setAdminhidden] = useState(true);
  const [Userhidden, setUserhidden] = useState(true);
  const [Todoshidden, setTodoshidden] = useState(true);
  const [Admuser, setAdminuser] = useState(true);
  const [texinicio, setTexinicio] = useState("Inicio");
  const tokenuser = getCookie("tokenuser");
  const router = useRouter();
  let usuario, privilegess;
  useEffect(() => {
    if (tokenuser) {
      privilegess = getCookie("token");
      const privilegesvalor = privilegess.substr(0, 1);
      switch (privilegesvalor) {
        case "1":
          setSuperadmhidden(false);
          setAdminuser(false);
          break;
        case "2":
          setAdminhidden(false);
          setAdminuser(false);
          break;
        case "3":
          setUserhidden(false);
          break;
      }

      setOcultar(true);
      setTodoshidden(false);
      Datos();
    } else {
      setOcultar(false);
      setSuperadmhidden(true);
      setAdminhidden(true);
      setUserhidden(true);
      setTodoshidden(true);
      setAdminuser(true);
      setUser("");
    }
  });
  const retornarinicio = () => {
    //router.push("/")
  };

  const Datos = async (e) => {
    usuario = await datosUSer(tokenuser);
    console.log(usuario);
    setUser(usuario.name);
  };
  const logout = () => {
    deleteCookie("tokenuser");
    deleteCookie("token");
    router.push("/");
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cherry-red px-5 sm:px-12 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-16">
        <button onClick={retornarinicio}>
          <Link href="/">
            <a>
              <Image src="/PortCRG.png" width={64} height={64}></Image>
            </a>
          </Link>
        </button>
      </div>
      <div className="block sm:hidden items-center flex">
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
        <div className="text-sm items-center col sm:flex-grow">
          <a
            href="/"
            className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8"
          >
            Inicio
          </a>

          <a
            href="/login"
            className={`mt-4 sm:${
              !Ocultar ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Ocultar ? "block " : "hidden"
            }`}
          >
            Login
          </a>
          <a
            href="/sign_up"
            className={`mt-4 sm:${
              !Supeadmrhidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Supeadmrhidden ? "block " : "hidden"
            }`}
          >
            Registrar
          </a>

          <a
            href="/courses"
            className={`mt-4 sm:${
              !Supeadmrhidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Supeadmrhidden ? "block " : "hidden"
            }`}
          >
            Cursos
          </a>

          <a
            Link
            href="/informative"
            className={`mt-4 sm:${
              !Todoshidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
          >
            Eventos
          </a>

          <a
            href="/calendario"
            className={`mt-4 sm:${
              !Todoshidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
          >
            Calendario
          </a>
          <a
            href="/EntradaSalida"
            className={`mt-4 sm:${
              !Userhidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Userhidden ? "block " : "hidden"
            }`}
          >
            Generar código
          </a>
          <a
            href="/RegistroEntradas"
            className={`mt-4 sm:${
              !Admuser ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Admuser ? "block " : "hidden"
            }`}
          >
            Registro
          </a>
          <a
            href="/users/courses"
            className={`mt-4 sm:${
              !Userhidden ? "inline-block " : "hidden"
            } "block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12 ${
              !Userhidden ? "block " : "hidden"
            }`}
          >
            Cursos Asignados
          </a>
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
        <div className="items-center flex">
          <a className="block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12">
            {user}
          </a>
          <a href="/profile">
            <button
              className={`mt-4 sm:${
                !Todoshidden ? "inline-block " : "hidden"
              } block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              <img
                className="h-[30px] w-[30px] rounded-full "
                src="/user1.png"
              ></img>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
