import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Script from "next/script";
import ProfilePic from "../public/crg.png";
import { useState, useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

import {
  Getdatosuser,
  UpdateProfile,
  updatePassword,
  updateP,
  deletUser,
} from "../peticiones/profile";
import { datosUSer, newPassword } from "../peticiones/session";
import moment, { Moment } from "moment";
import { async } from "regenerator-runtime";
import { useRouter } from "next/router";

export default function Home() {
  const saludAgregar = () => {
    const { eventsList, loading } = useEvents();
    let [isOpen, setIsOpen] = useState(false);
    let [dataModal, setDataModal] = useState({});
    const [occupation, setOccupation] = useState(1);
    const authToken = getCookie("tokenuser");
  };

  let perfil, usuario;
  const tokenuser = getCookie("tokenuser");
  const router = useRouter();
  const Swal = require("sweetalert2");

  const [estadodelet, setEstadodelet] = useState(true);
  const [estadoperfil, setEstadoperfil] = useState(true);
  const [estadoSalud, setEstadosalud] = useState(true);
  //Mostrar datos de salud
  const [datossalud, setDatossalud] = useState({
    medicina: "",
    enfermedad: "",
    incapacidad: "",
    tiposangre: 0,
  });
  //variables propiedades del perfil
  const [userperfil, setUserperfil] = useState({
    id: "",
    name: "",
    dpi: "",
    ocupacion: 0,
    bibliography: "",
    estadocivil: "",
    telefono: "",
    dateofBirth: "",
    department: "",
    municipality: "",
    address: "",
  });
  // variables para cambiar contraseña
  const [credenciales, setCredenciales] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    emaildelet: "",
  });
  const [deletEmail, setDeletemail] = useState("");
  const eliminarusuario = (e) => {
    e.preventDefault();
    setDeletemail(e.target.value);
  };

  const cambiarpassword = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (tokenuser) {
      Datos();
    }
  }, [tokenuser]);
  const Datos = async () => {
    usuario = await Getdatosuser(tokenuser);
    console.log(usuario);
    perfil = usuario.data;
    datossalud.medicina = "";
    datossalud.enfermedad = "";
    datossalud.incapacidad = "";
    setDatossalud(datossalud);
    if (perfil) {
      userperfil.id = perfil._id;
      userperfil.name = perfil.fullName;
      userperfil.telefono = perfil.phoneNumber;
      userperfil.dpi = perfil.dpi;
      userperfil.ocupacion = perfil.occupation;
      userperfil.address = perfil.address;
      userperfil.municipality = perfil.municipality;
      userperfil.department = perfil.department;
      const daybirth = moment.utc(perfil.dateofBirth).format("MM/DD/YYYY");
      userperfil.dateofBirth = daybirth;
      userperfil.bibliography = perfil.bibliography;
      userperfil.estadocivil = perfil.maritalStatus;
      credenciales.email = perfil.email;

      //datos de salud del usuario
      datossalud.tiposangre = perfil.bloodType;
      for (let a = 0; a < perfil.medicines.length; a++) {
        console.log(perfil.medicines[a].medicines);
        datossalud.medicina += "\n" + "-" + perfil.medicines[a].medicines;
      }
      for (let a = 0; a < perfil.inability.length; a++) {
        console.log(perfil.inability[a].inability);
        datossalud.incapacidad += "\n" + "-" + perfil.inability[a].inability;
      }
      for (let a = 0; a < perfil.illness.length; a++) {
        console.log(perfil.illness[a].illness);
        datossalud.enfermedad += "\n" + "-" + perfil.illness[a].illnes;
      }
      setDatossalud(datossalud);
      console.log(datossalud.medicina);
      setCredenciales(credenciales);
      setUserperfil(userperfil);

      if (perfil.privileges === 1 || perfil.privileges === 2) {
        setEstadodelet(false);
      } else {
        setEstadodelet(true);
      }
      //router.push("/SeguridadPerfil");
      console.log(perfil.privileges);
    } else {
      Swal.fire("No cuenta con datos!", "", "info");
    }
  };
  const obteniendodatos = (e) => {
    setUserperfil({
      ...userperfil,
      [e.target.name]: e.target.value,
    });
  };

  const editarLibre = () => {
    if (estadoperfil) {
      setEstadoperfil(false);
      Swal.fire("Ya puede editar!", "", "success");
    } else {
      setEstadoperfil(true);
    }
  };
  const editarLibresalud = () => {
    if (estadoSalud) {
      setEstadosalud(false);
      Swal.fire("Ya puede editar!", "", "success");
    } else {
      setEstadosalud(true);
    }
  };

  //funcion que actualiza la contraseña
  const newPass = () => {
    console.log(credenciales);
  };

  const actualizaspassword = async (e) => {
    e.preventDefault();
    if (
      credenciales.newpassword.length > 7 &&
      credenciales.confirmpassword.length > 7
    ) {
      if (credenciales.newpassword === credenciales.confirmpassword) {
        console.log("si paso");
        passwordupdate();
      } else {
        console.log(credenciales.newpassword);
        console.log(credenciales.confirmpassword);
        Swal.fire("Contraseña no coinciden!", "", "info");
      }
    } else {
      Swal.fire("Las contraseñas deben tener minimo 8 caracteres!", "", "info");
      setCredenciales({
        ...credenciales,
        newpassword: "",
        confirmpassword: "",
      });
    }
  };

  const actualizarperfil = () => {
    if (estadoperfil) {
      setEstadoperfil(false);
    } else {
      if (userperfil.telefono.length === 8) {
        Swal.fire({
          title: "Quiere guardar los cambios?",
          showDenyButton: true,
          //showCancelButton: true,
          confirmButtonText: "Actualizar",
          denyButtonText: `Cancelar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Datos actualizados!", "", "success");
            setEstadoperfil(true);
            datosactualizados();
          } else if (result.isDenied) {
            Swal.fire("No se actuliazaron datos", "", "info");
            console.log(userperfil);
          }
          //router.push("/SeguridadPerfil");
        });
      }
    }
  };

  const deletuser = async () => {
    Swal.fire({
      title: "Está seguro de eliminar la Cuenta?",
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const aceptar = deletUser(deletEmail, tokenuser);
        console.log(deletEmail);
        console.log(aceptar);
        if (aceptar === "ok") {
          Swal.fire("Cuenta Eliminada!", "", "success");
          setDeletemail("");
        } else {
          Swal.fire("No se pudo eliminar cuenta", "", "error");
          //console.log(aceptar);
        }
        datosactualizados();
      } else if (result.isDenied) {
        Swal.fire("Se cancelo eliminación de cuenta", "", "info");
        //console.log(userperfil);
      }
    });
  };
  async function datosactualizados() {
    await UpdateProfile(userperfil, tokenuser);
  }

  async function passwordupdate() {
    //console.log(userperfil.id);
    const valor = await updatePassword(credenciales, userperfil.id);
    console.log(valor);
    if (valor.response === "ok") {
      Swal.fire("Contraseña actualizada!", "", "success");
      deleteCookie("tokenuser");
      router.push("/login");
    } else {
      //no es la contraseña ingresada
      Swal.fire("Contraseña incorrecta!", "", "error");
      setCredenciales({
        ...credenciales,
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
      });
    }
  }

  return (
    <>
      <Head>
        <title>PortCRG</title>
      </Head>

      <div className="container py-3">
        {/* Breadcrumb */}

        {/* /Breadcrumb */}
        <div className="row gutters-sm">
          <div className="col-md-4 d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <nav className="nav flex-column nav-pills nav-gap-y-1">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://snipboard.io/7Cmrs1.jpg"
                        alt=""
                      />
                    </div>
                    <h3 className="user-name py-3">Cruz Roja Guatemalteca</h3>
                  </div>

                  
                  
                  <a
                    href="#security"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded active"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shield mr-2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Seguridad
                  </a>
                  
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header border-bottom mb-3 d-flex d-md-none">
                <ul
                  className="nav nav-tabs card-header-tabs nav-gap-x-1"
                  role="tablist"
                >
                  
                  

                  <li className="nav-item">
                    <a
                      href="#security"
                      data-toggle="tab"
                      className="nav-link has-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shield"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </a>
                  </li>

                  
                </ul>
              </div>
              <div className="card-body tab-content">
                
                
                <div className="tab-pane active" id="security"> 
                  <h6><strong>AJUSTES DE SEGURIDAD</strong></h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block"><strong>Cambiar constraseña</strong></label>
                      <input
                        onChange={cambiarpassword}
                        name="oldpassword"
                        value={credenciales.oldpassword}
                        type="password"
                        className="form-control"
                        placeholder="Ingrese su contraseña actual"
                      />
                      <input
                        onChange={cambiarpassword}
                        type="password"
                        name="newpassword"
                        required
                        minLength="8"
                        size="10"
                        value={credenciales.newpassword}
                        className="form-control mt-1"
                        placeholder="Nueva contraseña"
                      />
                      <input
                        onChange={cambiarpassword}
                        type="password"
                        name="confirmpassword"
                        required
                        value={credenciales.confirmpassword}
                        minLength="8"
                        size="10"
                        className="form-control mt-1"
                        placeholder="Confirmar nueva contraseña"
                      />
                    </div>
                    <hr></hr>
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={actualizaspassword}
                    >
                      Actualizar Contraseña
                    </button>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

    </>
  );
}
