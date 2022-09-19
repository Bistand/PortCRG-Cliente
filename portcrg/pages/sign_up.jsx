import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Sing_up.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function sing_up() {
  return (
    <>
      <div className={styles.general}>
        <h1 className={styles.tit}>Inscribirse</h1>
        <h1 className={styles.rescat}>Rescatista</h1>
        <h1 className={styles.juven}>Juventino</h1>
        <h1 className={styles.cap}>Capacitacion</h1>
        <div className={styles.imm}>
          <Image
            alt="Picture of the author"
            width={500}
            height={500}
            src="/img/R1.png"
          />
        </div>
        <div>
          <input type="checkbox" name="" id="" className={styles.chek1} />
        </div>
        <div>
          <input type="checkbox" name="" id="" className={styles.chek2} />
        </div>
        <div>
          <input type="checkbox" name="" id="" className={styles.chek3} />
        </div>
        <div className={styles.text1}>Email</div>
        <input className={styles.input1} type="text" />
        <div className={styles.text2}>Contraseña</div>
        <input className={styles.input2} type="text" />
        <div className={styles.text3}>Confirmar contraseña</div>
        <input className={styles.input3} type="text" />
        <div className={styles.text4}>¿Olvidaste tu Constraseña?</div>
        <div className={styles.buton}>
          <button className={styles.rectanglev}>Ingresar</button>
        </div>
      </div>
    </>
  );
}
