import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Asistencia() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-full">
        <div className="border-solid border-[1px] border-black text-center mx-44 my-20">
          <div className="border-solid border-[1px] border-black m-100 text-center">
            <h1 className="text-[#FF3839] text-[25px] font-bold my-4">
              Asistencia
            </h1>
          </div>
          <div className="border-solid border-[1px] border-black m-100 text-center">
            <div className="px-5 my-4 flex flex-col">
              <input
                placeholder="Buscar..."
                className="border-b-2 border-black border-solid self-end"
              />
              <table className="w-full border-black border-[1px] mt-2">
                <thead className="w-full">
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo Usuario</th>
                    <th>Estado</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
