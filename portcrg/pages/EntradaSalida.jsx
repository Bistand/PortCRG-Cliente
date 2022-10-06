import Link from "next/link"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/EntradaSalida.module.css'
import Image from "next/image"
import swal from "sweetalert"
import { useState } from "react"


function saludo(){
    swal('hola');
}

export default function EntradaSalida() {
 const[codigoentrada,setcodigoentrada] = useState([])

 const fetchcodigoentrada = async () => {
    const response = await fetch('https://portcrg-dev.onrender.com/api/asistencia/entry/')
    const data = await response.jason()
    setcodigoentrada(data)
 }
    
    return (
        
    
            <div className={styles.contenedor}>

                <div className={styles.divcodigo}>
                    <div className={styles.divcajacodigo}>
                        <h1 className={styles.h1}>Código:</h1>
                    </div>
                </div>
                <div className={styles.divgeneral} >
                   

                     <div className={styles.diventrada}>
                        <div className={styles.divcajaasistencia}>
                        <h2 className={styles.h2}>Código de Entrada</h2>
                           
                            <button className={styles.botonentrada} onClick={fetchcodigoentrada}>
                                <img className={styles.img} src="/entrada.jpg" alt="" />
                            
                            </button>
                        </div>
                     
                     </div>
                     <div className={styles.divsalida}>
                        <div className={styles.divcajaasistencia}>
                        <h2 className={styles.h2}>Código de Salida</h2>
                           
                            <button className={styles.botonsalida} onClick={saludo}>
                                <img className={styles.img} src="/salida.jpg" alt="" />
                            
                            </button>
                        </div>
                     
                     </div>
                     <div className={styles.divasistencia}>
                        <div className={styles.divcajaasistencia}>
                        <h2 className={styles.h2}>Ver Asistencia</h2>
                           
                            <button className={styles.botonasistencia} onClick={saludo}>
                                <img className={styles.img} src="/asistencia.jpg" alt="" />
                            
                            </button>
                        </div>
                     
                     </div>


                </div>
                
                
            </div>


    )
}