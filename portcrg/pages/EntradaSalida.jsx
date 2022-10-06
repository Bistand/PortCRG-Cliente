import Link from "next/link"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/EntradaSalida.module.css'
import { datosUSer } from "../peticiones/session";
import { useState } from "react"
import { getCookie } from "cookies-next";




export default function EntradaSalida() {
    let id = "63352acdcf19e0a4cafe0d06";
    let data;
    const [codigo, setcodigo] = useState("")
    const [usuario, setUser] = useState("")


    const tokenuser = getCookie("tokenuser");
  /*id*/
/*get para las entradas*/ 
    const fetchcodigoentrada = async () => {
        usuario = await datosUSer(tokenuser);
        setUser(usuario.id);
        console.log(usuario.id);
        const response = await fetch('https://portcrg-dev.onrender.com/api/asistencia/entry/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "id": usuario.id,
            },
        })
        data = await response.json()
        console.log(data);
        setcodigo(data.data)
    }
/*get para las salidas*/ 
const fetchcodigosalida = async () => {
    usuario = await datosUSer(tokenuser);
    setUser(usuario.id);
    console.log(usuario.id);
    const response = await fetch('https://portcrg-dev.onrender.com/api/asistencia/egress', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "id": usuario.id,
        },
    })
    data = await response.json()
    console.log(data);
    setcodigo(data.data)
}

    return (


        <div className={styles.contenedor}>

            <div className={styles.divcodigo}>
                <div className={styles.divcajacodigo}>
                    <h1 className={styles.h1}>{"Código: "+codigo}</h1>
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

                        <button className={styles.botonsalida} onClick={fetchcodigosalida} >
                            <img className={styles.img} src="/salida.jpg" alt="" />

                        </button>
                    </div>

                </div>
                <div className={styles.divasistencia}>
                    <div className={styles.divcajaasistencia}>
                        <h2 className={styles.h2}>Ver Asistencia</h2>

                        <button className={styles.botonasistencia} >
                            <img className={styles.img} src="/asistencia.jpg" alt="" />

                        </button>
                    </div>

                </div>


            </div>


        </div>


    )
}