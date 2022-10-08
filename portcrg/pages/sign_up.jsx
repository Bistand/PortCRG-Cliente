import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import styles from '../styles/Sing_up.module.css'
import axios from "axios"
import { bodyStreamToNodeStream } from "next/dist/server/body-streams"
import react from "react"
import { useForm } from "react-hook-form"
import swal from 'sweetalert';
export default function sign_up() {
    const [fullName, setfullName] = useState("")
    const [dpi, setdpi] = useState('')
    const [occupation, setoccupation] = useState('')
    const [number1, setnumber1] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { register, handleSubmit, errors, reset } = useForm();
    function recargarr(){
        location.href = location.href;
    }
    function onSubmitForm(values) {
        console.log(values);
    }
    const submitUsuario = async () => {
        let Fnomb = fullName;
        let Dpei = dpi;
        let ocu = occupation;
        let num1 = number1;
        let ema = email;
        let pss = password;
        if ((Fnomb != "") & (Dpei != "") & (ocu != "") & (num1 != "") & (ema != "") & (pss != "")) {
            console.log("funciona")
            const response = await fetch('https://portcrg-dev.onrender.com/api/user/register/admin', {
                method: 'POST',
                body: JSON.stringify({ fullName, dpi, occupation, number1, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            console.log(data), swal('Cruz Roja Quetzaltenango',
            data.message,
            'success',{buttons: ["finalizar"]});
            setTimeout(() => {
                location.href = location.href;
            }, 3000);
            
        } else {
            swal('Cruz Roja Quetzaltenango',
            'LLene todos los campos correctamente',
            'error',{buttons: ["finalizar"],timer: 4000 });
        }
    }
    return (
        <form id="form" class="form" onSubmit={handleSubmit(onSubmitForm)}>
            <div className={styles.contenedor}>
                <div className={styles.divTitulo}>
                    <h1 className={styles.htitulo1}>Registrar Usuario</h1>
                </div>
                <div className={styles.divCampos}>
                    <div className={styles.divespacio}>
                    </div>
                    <div className={styles.divInputSeleccionar}>
                        <h2 className={styles.htitulo2}>Ocupación</h2>
                        <select name="List1" id="sel" value={occupation} onChange={e => setoccupation(e.target.value)} className={styles.select} required>
                            <option value="" selected disabled > Seleccionar</option>
                            <option value="1">Voluntario geneneral</option>
                            <option value="2">Socorrista</option>
                            <option value="3">Juventino</option>
                            <option value="4">Personal Asalariado</option>
                            <option value="5">Dama Voluntaria</option>
                            <option value="6">Administrador</option>
                        </select>
                        <span class="note"></span>
                    </div>
                    <div className={styles.divNumero}>
                    </div>
                    <div>
                        <h2 className={styles.htitulo2}>Número Telefónico</h2>
                        <input id="txtnu" className={styles.input} type="text" maxLength={8} value={number1} onChange={e => setnumber1(e.target.value)} placeholder="Número" required pattern="[3-7]{1}[0-9]{7}" />
                        <span class="note"></span>
                    </div>
                    <div className={styles.divNumeroDpi}>
                    </div>
                    <div>
                        <h2 className={styles.htitulo2}>DPI</h2>
                        <input id="txtd" className={styles.input} type="text" maxLength={13} value={dpi} onChange={e => setdpi(e.target.value)} placeholder="DPI- (CUI)" pattern="[1-9]{1}[0-9]{12}" required />
                        <span class="note"></span>
                    </div>
                    <div className={styles.divNombre}>
                    </div>
                    <div>
                        <h2 className={styles.htitulo2}>Nombre Completo</h2>
                        <input id="txtn" className={styles.input} type="text" value={fullName} onChange={e => setfullName(e.target.value)} placeholder="Nombre Completo" required pattern="^[a-zA-ZÀ-ÿ\s]{8,60}" />
                        <span class="note"></span>
                    </div>
                    <div className={styles.divEmail}>
                    </div>
                    <div className={styles.divInputEmail}>
                        <h2 className={styles.htitulo2}>Email</h2>
                        <input id="txte" className={styles.input} type="email" value={email} onChange={e => setemail(e.target.value)} placeholder="Ejemplo@gmail.com" required />
                        <span class="note"></span>
                    </div>
                    <div className={styles.divContraseña}>
                    </div>
                    <h2 className={styles.htitulo2}>Contraseña</h2>
                    <div className={styles.divInputConstaseña}>
                        <input id="txtp" className={styles.input} type="text" value={password} onChange={e => setpassword(e.target.value)} maxLength={12} placeholder="Contraseña" required />
                        <span class="note"></span>
                    </div>
                    <div className={styles.divBoton}>
                        <button id="btn" onClick={submitUsuario} className={styles.Boton} >
                            Ingresar
                        </button >
                    </div>
                </div>
            </div>
        </form>
    )
} 
