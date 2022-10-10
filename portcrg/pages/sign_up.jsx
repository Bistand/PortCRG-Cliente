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
            
            const response = await fetch('https://portcrg-dev.onrender.com/api/user/register/admin', {
                method: 'POST',
                body: JSON.stringify({ fullName, dpi, occupation, number1, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            console.log(data);
            if(data.code=400){ 
                swal(data.response, 'Correo ya fue registrado',
                   /* data.message*/
                    'error',{buttons: ["finalizar"]});
            }
            if(data.code=200){ 
                swal('Cruz Roja Quetzaltenango',
            data.message,
            'success',{buttons: ["finalizar"]});
            setTimeout(() => {
                location.href = location.href;
            }, 3000);}
            
        } else {
            swal('Cruz Roja Quetzaltenango',
            'LLene todos los campos correctamente',
            'error',{buttons: ["finalizar"],timer: 4000 });
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
                           
                                <select name="List1" id="sel" value={occupation} onChange={e => setoccupation(e.target.value)} className={styles.select} required>
                                    <option value="" selected disabled > Seleccione Ocupacion</option>
                                    <option value="1">Voluntario geneneral</option>
                                    <option value="2">Socorrista</option>
                                    <option value="3">Juventino</option>
                                    <option value="4">Personal Asalariado</option>
                                    <option value="5">Dama Voluntaria</option>
                                    <option value="6">Administrador</option>
                                </select>
                                <div className={styles.underline}></div>
                               
                                </div>

                                <div className={styles.inputdata} >
                                <input id="txtnu"  type="text" maxLength={8} value={number1} onChange={e => setnumber1(e.target.value)} required pattern="[3-7]{1}[0-9]{7}" />
                                <div className={styles.underline}></div>
                                <label>Numero Telefonico</label>
                               
                               
                                </div>


                           
                </div>
                <div className={styles.formrow}>
                                <div className={styles.inputdata} >
                                <input id="txtd"  type="text" maxLength={13} value={dpi} onChange={e => setdpi(e.target.value)} pattern="[1-9]{1}[0-9]{12}" required />
                                <div className={styles.underline}></div>
                                <label >DPI o CUI</label>
                                </div>

                               <div className={styles.inputdata} >
                              
                                <input id="txtn"  type="text" value={fullName} onChange={e => setfullName(e.target.value)}  required pattern="^[a-zA-ZÀ-ÿ\s]{8,60}" />
                                <div className={styles.underline}></div>
                                <label>Nombre Completo</label>
                               
                                </div>



                </div>   
                    <div className={styles.formrow}>  
                                <div className={styles.inputdata} >
                                
                                <input id="txte"  type="email" value={email} onChange={e => setemail(e.target.value)} required />
                                <div className={styles.underline}></div>
                                <label>Email</label>
                               
                                </div>
                                <div className={styles.inputdata} >
                                
                                <input id="txtp"  type="text" value={password} onChange={e => setpassword(e.target.value)} maxLength={12}  required />
                                <div className={styles.underline}></div>
                                <label>Contraseña</label>
                                
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
