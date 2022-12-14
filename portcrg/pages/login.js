import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { conprobaruser } from "../peticiones/logiarse";
import { getCookie, setCookie } from "cookies-next";
export default function Login() {
  const router = useRouter();
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const [hidden, SetHidden] = useState(true);
  let validarusuario, credenciales;

  function recibiendouser(event) {
    SetUser(event.target.value);
  }

  function recibiendopassword(event) {
    SetPassword(event.target.value);
  }
  async function validar(event) {
    event.preventDefault();
    validarusuario = await conprobaruser(user, password);
    if (!validarusuario) {
      SetHidden(false);
    } else {
      router.push("/");
      location.reload();
    }
    SetUser("");
    SetPassword("");
  }
  return (
    <div
      className="h-screen w-full
    lg:flex"
    >
      <div
        className="w-full h-1/3 mt-28 sm:m-0
      lg:w-1/2 lg:h-full lg:pt-6 lg:mx-auto"
      >
        <img
          className="lg:hidden object-center w-full h-full"
          src="/voluntariado.jpg"
        ></img>
        <img
          className="lg:block hidden object-none object-center w-full h-full"
          src="/volun2.png"
        ></img>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-16 pt-4 sm:mt-20 lg:mx-auto">
        <h1
          className="text-[#FF3839] text-[64px] font-medium
        text-[40px] font-mediun"
        >
          INGRESAR
        </h1>
        {hidden ? (
          <p className="text-[15px]  mb-2.5">
            Ingrese el correo electrónico y contraseña para ingresar.
          </p>
        ) : (
          <p className={`text-[15px]  mb-2.5 text-red bg-red-200 p-2`}>
            ERROR! Usuario o contraseña incorrecta!
          </p>
        )}

        <form
          onSubmit={validar}
          className="flex flex-col justify-center w-full gap-7"
        >
          <input
            name="user"
            value={user}
            onChange={recibiendouser}
            type="email"
            placeholder="CORREO ELECTRÓNICO"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <input
            name="password"
            value={password}
            onChange={recibiendopassword}
            type="password"
            placeholder="CONTRASEÑA"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <button
            className="bg-[#FF3839] rounded-[10px] text-white font-regular text-[14px] self-center px-12 py-1.5 hover:outline-[#FF3839] hover:outline-1
            active:bg-white active:text-[#FF3839] hover:outline"
          >
            Ingresar
          </button>
          <a
            className="text-[#FF3839] text-[11px] font-regular self-start mt-16"
            hidden
            href="newpassword"
          >
            Olvidó su usuario o contraseña?
          </a>
        </form>
      </div>
    </div>
  );
}
