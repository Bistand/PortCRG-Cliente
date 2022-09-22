import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/Asistencias.module.css'

export default function Asistencias() {
    return (
    
            <div className={styles.contenedor}>
            <div >
                <h1 className={styles.titulo}>
                    Reporte de Asistencias.
                </h1>
                <h1 className={styles.titulo2}>
                    Inicio:
                </h1>
                <h1 className={styles.titulo3}>
                    Fin:
                </h1>

                <div >
                    <button className={styles.butonbuscar}>
                        Buscar
                    </button >
                </div>
            </div>
            <div>
                <input className={styles.inbox1} type="date" />
            </div>
            <div>
                <input className={styles.inbox2} type="date" />
            </div>
            <div className={styles.divmatriz}>
                <table className={styles.matriz}>
                    <tbody>
                           Lista
                        <tr>
                            
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <hr className={styles.linea}/>
            </div>
            </div>


    )
}