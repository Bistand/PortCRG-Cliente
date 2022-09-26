import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/Sing_up.module.css'

export default function sing_up() {
    return (
        <div className={styles.contenedor}>
            <div className={styles.divTitulo}>
                <h1 className={styles.h1}>Registrarse</h1>
            </div>
            <div className={styles.divImagen}>
             <div className={styles.contimg}>
                <img src="/img/R1.png" alt="" className={styles.img} />
            </div>
            </div>
            <div className={styles.divCampos}>
                <div className={styles.divCamposinternos}>
                    <div className={styles.divSeleccionar}>
                    <h2 >Tipo de Usuario</h2>
                    </div>
                    <div className={styles.divInputSeleccionar}>
                        <select name="List1" id="" className={styles.select}>
                            <option value="" selected disabled > Seleccionar</option>
                            <option value="">Voluntario geneneral</option>
                            <option value="">Socorrista</option>
                            <option value="">Juventino</option>
                            <option value="">Damas Voluntarias</option>
                            <option value="">Personal Asalariado</option>
                        </select>
                    </div>
                    <div className={styles.divEmail}>
                        <h2 >Email</h2>
                    </div>
                    <div className={styles.divInputEmail}>
                        <input className={styles.input} type="email" placeholder="Email" />
                    </div>
                    <div className={styles.divContraseña}>
                    <h2  >Contraseña</h2>
                    </div>
                    <div className={styles.divInputConstaseña}>
                        <input className={styles.input} type="text" placeholder="Contraseña" />
                    </div>
                    <div className={styles.divOlvido}>
                        <a href="">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
                <div className={styles.divBoton}>
                <button className={styles.Boton}>
                    Ingresar
                </button >
                </div>

            </div>
        </div>

    )
}