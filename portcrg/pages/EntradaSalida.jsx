import Link from "next/link"
import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from '../styles/EntradaSalida.module.css'
import { datosUSer } from "../peticiones/session";
import { useState } from "react"
import { getCookie } from "cookies-next";
import swal from 'sweetalert';




export default function EntradaSalida() {
    let id = "63352acdcf19e0a4cafe0d06";
    let data;
    const [codigo, setcodigo] = useState("")
    const [usuario, setUser] = useState("")


    const tokenuser = getCookie("tokenuser");
  /*id*/
/*get para las entradas*/ 
    const fetchcodigoentrada = async () => {
        swal('Cruz Roja Quetzaltenango',
        'Generando..', { buttons: ["finalizar"], timer: 3000 });
        usuario = await datosUSer(tokenuser);
        setUser(usuario.id);
        const response = await fetch('https://portcrg-dev.onrender.com/api/asistencia/entry/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "id": usuario.id,
                Authorization: "Bearer " + tokenuser,
            },
        })
        data = await response.json()
        if (data.response == "error") {
            setcodigo("Acción no válida")
       }
       else{
       setcodigo(data.data)}
    }
/*get para las salidas*/ 
const fetchcodigosalida = async () => {
    swal('Cruz Roja Quetzaltenango',
    'Generando..', { buttons: ["finalizar"], timer: 3000 });
    usuario = await datosUSer(tokenuser);
    setUser(usuario.id);

    const response = await fetch('https://portcrg-dev.onrender.com/api/asistencia/egress', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "id": usuario.id,
            Authorization: "Bearer " + tokenuser,
        },
    })
    data = await response.json()
    if (data.response == "error") {
         setcodigo("Acción no válida")
    }
    else{
    setcodigo(data.data)}
}

    return (
        <div className={styles.general}>
            <div className={styles.bod}>
                <div className={styles.contenedor}>
                                    <div className={styles.divcodigo}>
                                    <div className={styles.text}>{"Código: "+codigo}</div>
                                    </div>
                                    <div className={styles.divbotones}>
                                    <div className={styles.diventrada}>
                                        <div className={styles.divcajaasistencia}>
                                            <label className={styles.label}>Código de Entrada</label>
                                            <button className={styles.botonentrada} onClick={fetchcodigoentrada}>
                                                
                                                Generar
                                            </button>
                                            
                                        </div>

                                    </div>
                                    <div className={styles.divsalida}>
                                        <div className={styles.divcajaasistencia}>
                                            <label className={styles.label} >Código de Salida</label>
                                            <button className={styles.botonsalida} onClick={fetchcodigosalida} >
                                                <img className={styles.img} src="/salidar.jpg" alt="" />
                                                Generar
                                            </button>
                                        </div>

                                    </div>
                                    </div>
                                
                 </div>
            </div>
        </div>

    )
}