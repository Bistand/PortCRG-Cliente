import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/Asistencias.module.css'

export default function Asistencias() {
    return (
    
        <div className={styles.contenedor}>
            <div className={styles.divTitulo}>
                <h1 className={styles.h1}>Reporte de asistencia.</h1>
            </div>
            <div className={styles.divCampos}>
                <div className={styles.divInicio}>
                    <h2 className={styles.h2}>Inicio</h2>
                </div>
                <div className={styles.divInput1}>
                   <input className={styles.Input} type="date" />
                </div>
                <div className={styles.divFinal}>
                    <h2 className={styles.h2}>Final</h2>   
                </div>
                <div className={styles.divInput2}>
                <input className={styles.Input} type="date" />
                </div>
                <div className={styles.divBoton}>
                <button className={styles.Boton}>
                    Buscar
                </button >
                </div>
            </div>

            <div className={styles.divMatriz}>
                <div className={styles.divEMatriz}>
                    <h3 className={styles.EMatriz}>Lista</h3>
                </div>

            </div>
            


        </div>
        


    )
}