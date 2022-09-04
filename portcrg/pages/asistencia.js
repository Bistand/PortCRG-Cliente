
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Asistencia(){
    return (
        <>
        <Navbar></Navbar>
        <div className="border-solid border-[1px] border-black m-100 text-center">
            <div>
            <h1 className ="text-[#FF3839] text-[25px] font-medium">
                Asistencia
            </h1>
            <table className="text-center">
                <tr>
                    <td><strong>Nombre</strong></td>
                    <td><strong>Tipo de Usuario</strong></td>
                    <td><strong>Estado</strong></td>
                </tr>
            </table>
            </div >
        </div>
        <Footer></Footer> 
        </>
    )
}