import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

import Script from "next/script";



export default function Home() {
  return (

  <>
  <form className="formulario">
    <div>
      <label>Nombre del alumno</label>
      <input type="text" name="nombre" />
    </div>
    <div>
      <label>Edad del alumno</label>
      <input type="number" name="edad" min={3} max={100} />
    </div>
    <div>
      <br />
      <input type="submit" defaultValue="Agregar" className="agregar" />
    </div>
  </form>
  <table id="listado" className="hide">
    <thead>
      <tr>
        <th>Alumno</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  
</>
  



  );
}
