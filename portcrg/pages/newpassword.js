import { useState } from "react";
import Image from "next/image";
import { Resetpassword } from "../peticiones/session";

export default function Password() {
  const [email, SetEmail] = useState("");
  const [hidden, SetHidden] = useState(false);
  function recibiremail(event) {
    SetEmail(event.target.value);
    SetHidden(true);
  }
  async function validar(event) {
    event.preventDefault();
    const res = await Resetpassword(email);
    if (res) {
      SetHidden(true);
      SetEmail("");
    } else {
      SetHidden(false);
    }
  }
  return (
    <div
      className="h-screen w-full
    lg:flex text-center"
    >
      <div
        className="w-full h-1/3 sm:m-0
      lg:w-2/5 lg:h-full lg:pt-6 lg:mx-auto bg-cherry-red flex justify-center items-center"
      >
        <img className="object-center bg-red" src="/PortCRG.png"></img>
      </div>
      <div className="lg:w-3/5 flex flex-col justify-center items-center p-16 pt-4 sm:mt-20 lg:mx-auto mt-12 gap-6">
        <h1
          className="text-[#FF3839] text-[46px] font-medium
        text-[40px] font-mediun leading-10"
        >
          Recuperar Contraseña
        </h1>
        {hidden ? (
          <p className="text-[15px] capitalize mb-2.5">
            Se enviara un enlace a su correo para que pueda restablecer su
            contraseña
          </p>
        ) : (
          <p
            className={`text-[15px] capitalize mb-2.5 text-red bg-red-200 p-2`}
          >
            ERROR! No existe este correo
          </p>
        )}
        <p className="text-[15px] capitalize mb-2.5"></p>
        <form
          onSubmit={validar}
          className="flex flex-col justify-center w-full gap-7"
        >
          <input
            name="email"
            value={email}
            onChange={recibiremail}
            type="email"
            placeholder="EMAIL"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <button
            className="bg-[#FF3839] rounded-[10px] text-white font-regular text-[14px] self-center px-12 py-1.5 hover:outline-[#FF3839] hover:outline-1
            active:bg-white active:text-[#FF3839] hover:outline"
          >
            ENVIAR
          </button>
          <a
            className="text-[#FF3839] text-[11px] font-regular self-start mt-16 "
            href="login"
          >
            Regresar a Inicio?
          </a>
        </form>
      </div>
    </div>
  );
}
