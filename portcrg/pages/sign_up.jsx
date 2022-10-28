import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState, useEffect } from "react"
import styles from '../styles/Sing_up.module.css'
import axios from "axios"
import { bodyStreamToNodeStream } from "next/dist/server/body-streams"
import react from "react"
import { useForm } from "react-hook-form"
import swal from 'sweetalert';
import { getCookie } from "cookies-next"
import { Getdatosuser } from "../peticiones/profile"
export default function sign_up() {

    const [fullName, setfullName] = useState("")
    const [dpi, setdpi] = useState('')
    const [occupation, setoccupation] = useState('')
    const [number1, setnumber1] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmar, setconfirmar] = useState("")
    const [privileges, setprivilegios] = useState(0)
    const { register, handleSubmit, errors, reset } = useForm();
    function recargarr() {
        location.href = location.href;
    }
    const [superUsuario, setsuperUsuario] = useState(true);
    const tokenuser = getCookie("tokenuser");
    let perfil
    const comparacionprivileges = async () => {
        const usuario = await Getdatosuser(tokenuser);
        perfil = usuario.data
        console.log(perfil.privileges)
        if (perfil.privileges === 1) {
            setsuperUsuario(false)
        } else {
            setsuperUsuario(true)
        }

    }
    useEffect(() => {
        comparacionprivileges()
    })


    function onSubmitForm(values) {
        console.log(values);
    }
    const submitUsuario = async () => {
        const usertoken = getCookie("tokenuser");
        let confir = confirmar;
        let Fnomb = fullName;
        let Dpei = dpi;
        let ocu = occupation;
        let num1 = number1;
        let ema = email;
        let pss = password;
        let priv = privileges;
        if ((Fnomb != "") & (Dpei > 1000000000000) & (ocu != "") & (num1 > 29999999) & (ema != "") & (pss != "") & (priv != 0)) {
            if (pss == confir) {
                swal('Procesando...'
                    , { buttons: ["finalizar"] });
                const response = await fetch('https://portcrg-dev.onrender.com/api/user/register/admin', {
                    method: 'POST',
                    body: JSON.stringify({ fullName, dpi, occupation, number1, email, password, privileges }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + usertoken,
                    },
                })
                const data = await response.json();
                console.log(data);
                if (data.code = 400) {
                    swal(data.response, 'Correo Registrado Previamente; ¡Ingrese otro!',

                        'error', { buttons: ["finalizar"] });
                }
                if (data.code = 200) {
                    swal('Cruz Roja Quetzaltenango',
                        'Usuario Creado Exitosamente',
                        'success', { buttons: ["finalizar"] });
                    setTimeout(() => {
                        location.href = location.href;
                    }, 3000);
                }
            } else {
                swal('Cruz Roja Quetzaltenango',
                    'La contraseña no es igual',
                    'error', { buttons: ["finalizar"], timer: 2000 });
            }

        } else {
            swal('Cruz Roja Quetzaltenango',
                'LLene todos los campos correctamente',
                'error', { buttons: ["finalizar"], timer: 3000 });
        }
    }
    return (
        <div className={styles.general}>
            <div className={styles.bod} >
                <div className={styles.contenedor}>

                    <div className={styles.text}>Ingresar Usuario</div>


                    <form id="form" class="form" onSubmit={handleSubmit(onSubmitForm)}>
                        <div className={styles.formrow}>
                            <div className={styles.inputdata} >

                                <select name="List1" id="sel" value={occupation} onChange={e => setoccupation(e.target.value)} className={styles.select} required >
                                    <option value="" selected disabled > Seleccionar Ocupación</option>
                                    <option value="1">Voluntario General</option>
                                    <option value="2">Socorrista</option>
                                    <option value="3">Juventino</option>
                                    <option value="4">Personal Asalariado</option>
                                    <option value="5">Dama Voluntaria</option>
                                    <option value="6">Administrador</option>
                                </select>
                                <div className={styles.underline}></div>

                            </div>

                            <div className={styles.inputdata} >
                                <input id="txtnu" type="text" maxLength={8} value={number1} onChange={e => setnumber1(e.target.value)} required pattern="[3-7]{1}[0-9]{7}" title="Número de 8 dígitos"/>
                                <div className={styles.underline}></div>
                                <label>Número Telefónico</label>


                            </div>



                        </div>
                        <div className={styles.formrow}>
                            <div className={styles.inputdata} >
                                <input id="txtd" type="text" maxLength={13} value={dpi} onChange={e => setdpi(e.target.value)} pattern="[1-9]{1}[0-9]{12}" required title="Número de 13 dígitos" />
                                <div className={styles.underline}></div>
                                <label >DPI o CUI</label>
                            </div>

                            <div className={styles.inputdata} >

                                <input id="txtn" type="text" value={fullName} onChange={e => setfullName(e.target.value)} required pattern="^[a-zA-ZÀ-ÿ\s]{10,60}" title="Nombre: solo letras"/>
                                <div className={styles.underline}></div>
                                <label>Nombre Completo</label>

                            </div>



                        </div>
                        <div className={styles.formrow}>
                            <div className={styles.inputdata} >

                                <input id="txte" type="email" value={email} onChange={e => setemail(e.target.value)} required title="Correo válido, correo único por ususario" />
                                <div className={styles.underline}></div>
                                <label>Email</label>
                            </div>



                            <div className={styles.inputdata} >
                                <select name="List2" id="selp" onChange={e => setprivilegios(e.target.value)} className={styles.select} required>
                                    <option value="" selected disabled >Tipo de Privilegios</option>
                                    <option value={3}>Usuario</option>
                                    <option value={2} hidden={superUsuario} >Administrador</option>
                                </select>
                                <div className={styles.underline}></div>
                            </div>



                        </div>
                        <div className={styles.formrow}>

                            <div className={styles.inputdata} >
                                <input id="txtp" type="password" value={password} onChange={e => setpassword(e.target.value)} maxLength={15} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,15}$" title="Debe contener por lo menos un número y una letra mayúscula, 8 caracteres mínimo y 15 máximo"/>
                                <div className={styles.underline}></div>
                                <label>Contraseña</label>

                            </div>





                            <div className={styles.inputdata} >
                                <input id="txtp" type="password" value={confirmar} onChange={e => setconfirmar(e.target.value)} maxLength={15} required pattern={password} title="Debe coincidir con la contraseña" />
                                <div className={styles.underline}></div>
                                <label> Confirmar Contraseña</label>

                            </div>
                        </div>
                        <div className={styles.formrow}>
                            <div className={styles.inputdata}>
                                <button id="btn" onClick={submitUsuario} className={styles.Boton} >
                                    Ingresar
                                </button >
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>

    )
} 
