import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Sing_up.module.css";

export default function sing_up() {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.tit}>Inscribirse</h1>
      <div className={styles.imm}>
        <img src="/img/R1.png" alt="" />
      </div>
      <h1 className={styles.rescat}>Tipo de Usuario:</h1>
      <div>
        <select name="List1" id="" className={styles.select1}>
          <option value="" selected disabled>
            {" "}
            Seleccionar
          </option>
          <option value="">Voluntario geneneral</option>
          <option value="">Socorrista</option>
          <option value="">Juventino</option>
          <option value="">Damas Voluntarias</option>
          <option value="">Personal Asalariado</option>
        </select>
      </div>

      <div className={styles.text1}>Email</div>
      <input className={styles.input1} type="email" placeholder="Email" />
      <div className={styles.text2}>Contraseña</div>
      <input className={styles.input2} type="text" placeholder="Contraseña" />
      <div className={styles.text4}>¿Olvidaste tu Constraseña?</div>
      <div className={styles.buton}>
        <button className={styles.rectanglev}>Ingresar</button>
      </div>
    </div>
  );
}
