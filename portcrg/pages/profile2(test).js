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
          <label>Salud</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label>Salud de voluntario</label>
          <input type="text" name="text" />
        </div>
        <div>
          <br />
          <input type="submit" defaultValue="Agregar" className="agregar" />
        </div>
      </form>
      <table id="listado" className="hide">
        <thead>
          <tr>
            <th>Enfermedad</th>
            <th>Medicina</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    * {box-sizing: border-box;font-family:arial;}\n    .hide {display:none;}\n    .right {text-align:right;}\n    .error {border:1px solid Red;}\n \n    .nombre {width:100%}\n    .formulario {text-align:center;width:400px;border:1px solid #eee;padding:10px;}\n    .formulario label,.formulario label~input {\n        width: 50%;\n        display: inline-block;\n        float:left;\n    }\n    .formulario label {text-align:right;padding-right:20px;}\n    .formulario>div {margin-top:10px;overflow:hidden;}\n    .agregar {\n        background-color:green;\n        border-color:green;\n        color:white;\n    }\n \n    #listado {\n        border:1px solid #eee;\n        margin-top:20px;\n        width:400px;\n    }\n    #listado th {background-color:#eee;padding:5px 10px;}\n    #listado input[type=button] {\n        background-color:Red;\n        border-color:Red;\n        color:white;\n    }\n    ",
        }}
      />
    </>
  );
}
