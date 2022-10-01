import { useState } from "react";
import Image from "next/image";
import { Resetpassword, ConfirmPasswordnew } from "../../peticiones/session";
import { useRouter } from "next/router";
import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";
import { cookie } from "cookie";

export default function Password(request) {
  const [password, SetPassword] = useState("");
  const [passwordnew, SetPasswordnew] = useState("");
  const [hidden, SetHidden] = useState(true);
  const router = useRouter();

  function passwordin(event) {
    SetPassword(event.target.value);
  }
  function confirmpasswordin(event) {
    SetPasswordnew(event.target.value);
    SetHidden(true);
  }
  async function validar(event) {
    const token = getCookie("tokenuser");
    event.preventDefault();
    if (password === passwordnew) {
      //se manda el token y password para reiniciar contraseña
      await Resetpassword(token, password);
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
          Cambiando Contraseña
        </h1>
        {!hidden ? (
          <p className="text-[15px] capitalize mb-2.5">
            No son coinciden las contraseñas
          </p>
        ) : (
          <p></p>
        )}
        <form
          onSubmit={validar}
          className="flex flex-col justify-center w-full gap-7"
        >
          <input
            name="pasword"
            value={password}
            onChange={passwordin}
            type="password"
            placeholder="Password"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <input
            name="password"
            value={passwordnew}
            onChange={confirmpasswordin}
            type="password"
            placeholder="Confirm Password"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />

          <button className="bg-[#FF3839] rounded-[10px] text-white font-regular text-[14px] self-center px-12 py-1.5">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
