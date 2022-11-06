import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";
import { datosUSer } from "../peticiones/session";
import { Getdatosuser } from "../peticiones/profile";

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
  let usuario, privilegess, perfil, user2;
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

  const Datos = async () => {
    user2 = await Getdatosuser(tokenuser);
    perfil = user2.data;
    console.log(perfil.fullName);
    setUser(perfil.fullName);
  };
  const logout = () => {
    deleteCookie("tokenuser");
    deleteCookie("token");
    router.prefetch("/login");
    router.push("/login");
    location.reload();
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cherry-red px-5 lg:px-12 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-16">
        <button>
          <Link href="/">
            <a>
              <Image src="/PortCRG.png" width={64} height={64}></Image>
            </a>
          </Link>
        </button>
      </div>
      <div className="block lg:hidden items-center flex">
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
        <Link href={"/login"}>
          <button
            className={` lg:${
              !Ocultar ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Ocultar ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Ingresar
          </button>
        </Link>
        <Link href="/sign_up">
          <button
            hidden={Admuser}
            className={
              "lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 "
            }
            onClick={() => setNavbarOpen(false)}
          >
            Registrar
          </button>
        </Link>
        <Link href="/courses">
          <button
            className={` lg:${
              !Todoshidden ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Cursos
          </button>
        </Link>
        <Link href="/users">
          <button
            hidden={Supeadmrhidden}
            className={
              "lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8"
            }
            onClick={() => setNavbarOpen(false)}
          >
            Usuarios
          </button>
        </Link>
        <Link href="/informative">
          <button
            className={` lg:${
              !Todoshidden ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Todoshidden ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Eventos
          </button>
        </Link>
        <Link href="/EntradaSalida">
          <button
            className={` lg:${
              !Userhidden ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Userhidden ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Generar código
          </button>
        </Link>
        <Link href="/RegistroEntradas">
          <button
            className={` lg:${
              !Admuser ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Admuser ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Registro
          </button>
        </Link>
        <Link href="/users/courses">
          <button
            className={` lg:${
              !Userhidden ? "inline-block " : "hidden"
            } "block lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              !Userhidden ? "block " : "hidden"
            }`}
            onClick={() => setNavbarOpen(false)}
          >
            Cursos Asignados
          </button>
        </Link>

        <a className="block lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold lg:mr-6">
          <button
            onClick={logout}
            className={`lg:${
              Ocultar ? "inline-block " : "hidden"
            } lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-8 ${
              Ocultar ? "block " : "hidden"
            }`}
          >
            Cerrar sesion
          </button>
        </a>

        {/* <div className="text-sm items-center col lg:flex-grow">
        DIV ORIGINAL DEL NAVBAR

        </div> */}
        {/* PARTE DE BOTON DE USUARIO Y NOMBRE DE USUARIO */}
        <div className="text-sm lg:flex-grow"></div>

        <div className="items-center flex flex-row justify-start lg:pt-0 ">
          <a className="block lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-4">
            {user}
          </a>
          <a href="/profile">
            <button
              className={` lg:${
                !Todoshidden ? "inline-block " : "hidden"
              } block lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:font-bold mr-4 ${
                !Todoshidden ? "block " : "hidden"
              }`}
            >
              <img
                className="h-[30px] w-[30px] rounded-full inline-block "
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
