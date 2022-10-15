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
  const tokenuser = getCookie("tokenuser");
  const router = useRouter();
  let usuario, privilegess;
  useEffect(() => {
    if (tokenuser) {
      privilegess = getCookie("token");
      validarpermisos(privilegess.substr(0, 1));
      setOcultar(true);
      setTodoshidden(false);
      Datos();
    } else {
      setOcultar(false);
      setSuperadmhidden(true);
      setAdminhidden(true);
      setUserhidden(true);
      setTodoshidden(true);
      setUser("");
    }
  });

  function validarpermisos(key) {
    //validar que privilegios tiene para desbloquear permisos
    switch (key) {
      case "1":
        break;

      case "2":
        break;

      case "3":
        break;
    }
  }
  const Datos = async () => {
    usuario = await datosUSer(tokenuser);
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
            <a
              className={`mt-4 sm:${
                !Supeadmrhidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Supeadmrhidden ? "block " : "hidden"
              }`}
            >
              Registrar
            </a>
          </Link>

          <Link href="/courses">
            <a
              className={`mt-4 sm:${
                !Supeadmrhidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Supeadmrhidden ? "block " : "hidden"
              }`}
              hidden={Supeadmrhidden}
            >
              Cursos
            </a>
          </Link>

          <Link href="/informative">
            <a
              className={`mt-4 sm:${
                !Todoshidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              Eventos
            </a>
          </Link>

          <Link href="/calendario">
            <a
              className={`mt-4 sm:${
                !Todoshidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              Calendario
            </a>
          </Link>
          <Link href="/EntradaSalida">
            <a
              className={`mt-4 sm:${
                !Userhidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Userhidden ? "block " : "hidden"
              }`}
            >
              Generar código
            </a>
          </Link>
          <Link href="/RegistroEntradas">
            <a
              className={`mt-4 sm:${
                !Userhidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Userhidden ? "block " : "hidden"
              }`}
            >
              Registro
            </a>
          </Link>
          <Link href="/users/courses">
            <a
              className={`mt-4 sm:${
                !Todoshidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              Cursos Asignados
            </a>
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
        <div className="divide-y-6 items-center flex">
          <a className="block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12">
            {user}
          </a>
          <Link href="/profile">
            <button
              className={`mt-4 sm:${
                !Todoshidden ? "inline-block " : "hidden"
              } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              <img
                className="h-[30px] w-[30px] rounded-full "
                src="/user1.png"
              ></img>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
