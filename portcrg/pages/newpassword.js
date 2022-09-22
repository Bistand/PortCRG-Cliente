import { useState } from "react";
export default function NewPassword() {
  const [actual, SetActual] = useState("");
  const [nueva, SetNueva] = useState("");
  function recibiractual(event) {
    SetActual(event.target.value);
  }
  function recibirnueva(event) {
    SetNueva(event.target.value);
  }
  function validar(event) {
    event.preventDefault();
    SetActual("");
    SetNueva("");
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-1/2 flex flex-col justify-center items border-4 border-red p-16 pt-4 mt-12 gap-6 ">
        <h1
          className="text-[#FF3839] text-[34px] font-medium
          font-mediun leading-10"
        >
          Cambiando Contraseña
        </h1>
        <form
          onSubmit={validar}
          className="flex flex-col justify-center w-full gap-7"
          id="form3"
        >
          <input
            name="actual"
            value={actual}
            onChange={recibiractual}
            type="password"
            placeholder="Contraseña Actual"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <input
            name="nueva"
            value={nueva}
            onChange={recibirnueva}
            type="password"
            placeholder="Nueva contraseña"
            className="bg-[#F5E7E7] border[#FBF8F8]
            border-2 border-solid rounded bourder-2 p-2 text-[12px] font-normal"
          />
          <button
            className="bg-[#FF3839] rounded-[10px] text-white font-regular text-[14px] self-center px-12 py-1.5
          hover:bg-transparent hover:text-[#FF3839]"
          >
            CAMBIAR
          </button>
        </form>
      </div>
    </div>
  );
}
