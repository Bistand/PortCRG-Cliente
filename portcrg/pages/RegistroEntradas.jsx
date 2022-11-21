import Link from "next/link";
import styles from "../styles/RegistroEntradas.module.css";
import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { getCookie } from "cookies-next";

export default function RegistroEntradas() {
  const [uno, setuno] = useState("");
  const [dos, setdos] = useState("");
  const [tres, settres] = useState("");
  const [cuatro, setcuatro] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();
  const [codigo, setcodigo] = useState("");

  const submitUsuario = async () => {
    const tokenuser = getCookie("tokenuser")
    let campo1 = codigo;
    if (campo1 != "") {
      console.log("funciona");
      const response = await fetch(
        "https://portcrg.onrender.com/api/asistencia",
        {
          method: "POST",
          body: JSON.stringify({ codigo }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenuser,
          },
        }
      );
      const data = await response.json();
      console.log(data),
        swal("Cruz Roja Quetzaltenango", data.message, "info", {
          buttons: ["finalizar"],
        });

      setTimeout(() => {
        location.href = location.href;
      }, 5000);
    } else {
      swal(
        "Cruz Roja Quetzaltenango",
        "LLene todos los campos correctamente",
        "error",
        { buttons: ["finalizar"] /*timer: 5000*/ }
      );
    }
  };
  function move(e) {
    let a = e;
    console.log(a);
  }

  function onSubmitForm(values) {
    console.log(values);
  }
  return (
    <div className={styles.general}>
      <div className={styles.bod}>
        <div className={styles.contenedor}>
          <form id="form" class="form" onSubmit={handleSubmit(onSubmitForm)}>
            <center>
              <div className={styles.central}>
                <div className={styles.divtitulo}>
                  <h1 className={styles.h1}>Ingrese Código de Verificación</h1>
                </div>
                <div className={styles.divinput}>
                  <input
                    type="text"
                    className={styles.input}
                    maxLength={4}
                    value={codigo}
                    onChange={(e) => setcodigo(e.target.value)}
                    autoFocus
                    required
                  />
                </div>
                <div className={styles.divboton}>
                  <button className={styles.Boton} onClick={submitUsuario}>
                    {" "}
                    Registrar
                  </button>
                </div>
              </div>
              <div></div>
              <div></div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
