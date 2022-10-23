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
          setSuperadmhidden(false);
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
    router.push("/login");
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
        <Link href="/">
          <a className="block sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
            Inicio
          </a>
        </Link>
        <Link href={"/login"}>
          <a
            className={` sm:${
              !Ocultar ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Ocultar ? "block " : "hidden"
            }`}
          >
            Ingresar
          </a>
        </Link>
        <Link href="/sign_up">
          <a
            className={` sm:${
              !Supeadmrhidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Supeadmrhidden ? "block " : "hidden"
            }`}
          >
            Registrar
          </a>
        </Link>
        <Link href="/course">
          <a
            className={` sm:${
              !Todoshidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
          >
            Cursos
          </a>
        </Link>
        <Link href="/informative">
          <a
            className={` sm:${
              !Todoshidden ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
          >
            Eventos
          </a>
        </Link>
        <a
          href="/EntradaSalida"
          className={` sm:${
            !Userhidden ? "inline-block " : "hidden"
          } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
            !Userhidden ? "block " : "hidden"
          }`}
        >
          Generar código
        </a>
        <a
          href="/RegistroEntradas"
          className={` sm:${
            !Admuser ? "inline-block " : "hidden"
          } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
            !Admuser ? "block " : "hidden"
          }`}
        >
          Registro
        </a>
        <a
          href="/users/courses"
          className={` sm:${
            !Userhidden ? "inline-block " : "hidden"
          } "block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12 ${
            !Userhidden ? "block " : "hidden"
          }`}
        >
          Cursos Asignados
        </a>

        <a className="block sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8">
          <button
            onClick={logout}
            className={`ml-4  sm:${
              Ocultar ? "inline-block " : "hidden"
            } sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              Ocultar ? "block " : "hidden"
            }`}
          >
            Cerrar sesion
          </button>
        </a>

        {/* <div className="text-sm items-center col sm:flex-grow">
        DIV ORIGINAL DEL NAVBAR

        </div> */}
        {/* PARTE DE BOTON DE USUARIO Y NOMBRE DE USUARIO */}
        <div className="text-sm sm:flex-grow"></div>

        <div className="items-center flex flex-row justify-end">
          <a className="block mt-16 sm:inline-block sm:mt-0 text-white hover:text-gray-200 hover:font-bold mr-12">
            {user}
          </a>
          <a href="/profile">
            <button
              className={` sm:${
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
