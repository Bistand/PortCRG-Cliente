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
      userperfil.telefono = perfil.number1;
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
      router.push("/profile");
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
          router.push("/profile");
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
    await UpdateProfile(userperfil);
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

      <div className="container">
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
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="user-name">Cruz Roja Guatemalteca</h3>
                  </div>

                  <a
                    href="#profile"
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
                      className="feather feather-user mr-2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    Información Personal
                  </a>
                  <a
                    hidden={estadodelet}
                    href="#account"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
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
                      className="feather feather-settings mr-2"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Ajustes de Cuenta
                  </a>
                  <a
                    href="#security"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
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
                  <a
                    href="#notification"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
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
                      className="feather feather-activity"
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
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </svg>
                    Salud
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
                      href="#profile"
                      data-toggle="tab"
                      className="nav-link has-icon active"
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
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#notification"
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
                        className="feather feather-activity"
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
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </svg>
                    </a>
                  </li>

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

                  <li className="nav-item">
                    <a
                      hidden={estadodelet}
                      href="#account"
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
                        className="feather feather-settings"
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body tab-content">
                <div className="tab-pane active" id="profile">
                  <h6><strong>INFORMACIÓN PERSONAL</strong></h6>
                  <hr />
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Nombre</strong></label>
                          <input
                            name="name"
                            type="text"
                            disabled={estadoperfil}
                            onChange={obteniendodatos}
                            className="form-control"
                            value={userperfil.name}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>DPI</strong></label>
                          <input
                            disabled
                            type="text"
                            id="DPI"
                            className="form-control"
                            value={userperfil.dpi}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Estado Civil</strong></label>
                          <select
                            className="form-control"
                            value={userperfil.estadocivil}
                            name="estadocivil"
                            disabled={estadoperfil}
                            onChange={obteniendodatos}
                          >
                            <option value={1}>Soltero</option>
                            <option value={2}>Casado</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Número de Teléfono</strong></label>
                          <input
                            name="telefono"
                            disabled={estadoperfil}
                            onChange={obteniendodatos}
                            type="tel"
                            className="form-control"
                            required
                            value={userperfil.telefono}
                            minLength="8"
                            maxLength="8"
                            size="10"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Ocupación</strong></label>
                          <select
                            className="form-control"
                            disabled
                            value={userperfil.ocupacion}
                          >
                            <option value={1}>Voluntario General</option>
                            <option value={2}>Socorrista</option>
                            <option value={3}>Juventino</option>
                            <option value={4}>Personal Asalariado</option>
                            <option value={5}>Damas Voluntarias</option>
                            <option value={6}>Administrador</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Fecha de Nacimiento</strong></label>
                          <input
                            disabled
                            type="text"
                            className="form-control"
                            value={userperfil.dateofBirth}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Departamento</strong></label>
                          <select
                            name="department"
                            className="form-control"
                            disabled={estadoperfil}
                            value={userperfil.department}
                            placeholder={"Seleccionar Departamento"}
                            onChange={obteniendodatos}
                          >
                            <option value="Alta Verapaz">Alta Verapaz</option>
                            <option value="Baja Verapaz">Baja Verapaz</option>
                            <option value="Chimaltenango">Chimaltenango</option>
                            <option value="Chiquimula">Chiquimula</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="El Progreso">El Progreso</option>
                            <option value="Escuintla">Escuintla</option>
                            <option value="Huehuetenango">Huehuetenango</option>
                            <option value="Izabal">Izabal</option>
                            <option value="Jalapa">Jalapa</option>
                            <option value="Jutiapa">Jutiapa</option>
                            <option value="Péten">Péten</option>
                            <option value="Quetzaltenango">
                              Quetzaltenango
                            </option>
                            <option value="Quiché">Quiché</option>
                            <option value="Retalhuleu">Retalhuleu</option>
                            <option value="Sacatepequez">Sacatepequez</option>
                            <option value="San Marcos">San Marcos</option>
                            <option value="Santa Rosa">Santa Rosa</option>
                            <option value="Sololá">Sololá</option>
                            <option value="Suchitepequez">Suchitepequez</option>
                            <option value="Totonicapán">Totonicapán</option>
                            <option value="Zacapa">Zacapa</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Municipio</strong></label>
                          <input
                            name="municipality"
                            disabled={estadoperfil}
                            onChange={obteniendodatos}
                            type="text"
                            className="form-control"
                            value={userperfil.municipality}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label><strong>Dirección de Residencia</strong></label>
                          <input
                            disabled={estadoperfil}
                            name="address"
                            onChange={obteniendodatos}
                            type="text"
                            className="form-control"
                            value={userperfil.address}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label><strong>Biografía</strong></label>
                          <textarea
                            name="bibliography"
                            disabled={estadoperfil}
                            onChange={obteniendodatos}
                            className="form-control"
                            id="biografia"
                            rows={4}
                            value={userperfil.bibliography}
                          />
                        </div>
                      </div>
                      <small id="fullNameHelp" className="form-text text-muted">
                        *El nombre que ingrese es el que se mostrará por
                        defecto. Puede cambiar o actualizar sus datos en
                        cualquier momento.
                      </small>
                    </div>
                  </form>
                  <hr></hr>
                  <div>
                    <button
                      onClick={editarLibre}
                      className="btn btn-warning m-2"
                    >
                      Editar
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={actualizarperfil}
                    >
                      Actualizar
                    </button>
                  </div>
                </div>

                <div className="tab-pane" id="account">
                  <h6><strong>ELIMINAR CUENTAS</strong></h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label htmlFor="username">Correo Electrónico</label>
                      <input
                        name="emaildelet"
                        onChange={eliminarusuario}
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        value={deletEmail}
                        placeholder="Ingrese el electrónico de la cuenta que desea eliminar"
                      />
                      <small id="usernameHelp" className="form-text text-muted">
                        Despues de eliminar la cuenta de usuario, el Correo
                        electrónico disponible para cualquier otra persona.
                      </small>
                    </div>

                    <div className="form-group">
                      <label className="d-block text-danger">
                        <strong>Eliminar Cuenta</strong>
                      </label>
                      <p className="text-muted font-size-sm">
                        Solo un usuario Administrador puede eliminar tu cuenta.
                      </p>
                    </div>
                    <hr></hr>
                    <button
                      onClick={deletuser}
                      className="btn btn-danger"
                      type="button"
                    >
                      Eliminar Cuenta
                    </button>
                  </form>
                </div>
                <div className="tab-pane" id="security">
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
                <div className="tab-pane" id="notification">
                  <h6><strong>INFORMACIÓN DE SALUD</strong></h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block mb-0">
                        Información de Salud Personal
                      </label>
                      <div className="small text-muted mb-3">
                        La siguiente información es personal y servirá para
                        poder tener un detalle de su perfil en determinada
                        emergencia.
                      </div>
                    </div>
                    <div className="form-group mb-0">
                     
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          <strong>Tipo de Sangre</strong>
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <select
                              className="form-control"
                              disabled={estadoSalud}
                              value={datossalud.tiposangre}
                            >
                              <option value={1}>O Positivo</option>
                              <option value={2}>O Negativo</option>
                              <option value={3}>A Positivo</option>
                              <option value={4}>A Negativo</option>
                              <option value={5}>B Positivo</option>
                              <option value={6}>B Negativo</option>
                              <option value={7}>AB Positivo</option>
                              <option value={8}>AB Negativo</option>
                            </select>
                          </div>
                        </li>
                        <hr></hr>

                        <small
                          id="fullNameHelp"
                          className="form-text text-muted"
                        >
                          En el siguiente apartado, si la respuesta es
                          afirmativa a la pregunta, favor de ingresarla. De lo
                          contrario puede dejar en blanco el espacio.
                        </small>
                        <li className="list-group-item has-icon">
                          <strong>Enfermedad:</strong>
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Ingrese enfermedad la cual padece"
                            />
                            <hr></hr>
                            <label>Historial:</label>
                            <textarea
                              disabled={estadoSalud}
                              name="enfermedad"
                              className="form-control"
                              id="enfermedad"
                              rows={4}
                              value={datossalud.enfermedad}
                              readOnly="readOnly"
                            />
                          </div>
                        </li>

                        <li className="list-group-item has-icon">
                          <strong>Medicamento:</strong>
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Ingrese medicamento que consume"
                            />
                            <hr></hr>
                            <label>Historial:</label>
                            <textarea
                              disabled={estadoSalud}
                              name="areamedicina"
                              className="form-control"
                              id="medicamento"
                              value={datossalud.medicina}
                              rows={4}
                              readOnly="readOnly"
                            />
                          </div>
                        </li>

                        <li className="list-group-item has-icon">
                          <strong>Incapacidad:</strong>
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              placeholder="Ingrese incapacidad"
                              name="name"
                              type="text"
                              className="form-control"
                            />
                            <hr></hr>
                            <label>Historial:</label>
                            <textarea
                              disabled={estadoSalud}
                              name="incapacidad"
                              className="form-control"
                              id="incapacidad"
                              rows={4}
                              value={datossalud.incapacidad}
                              readOnly="readOnly"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                  <hr></hr>
                  <div>
                    <button
                      onClick={editarLibresalud}
                      className="btn btn-warning m-2"
                    >
                      Editar
                    </button>
                    <button className="btn btn-primary">Actualizar</button>
                  </div>
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

      <Script
        type="text/javascript"
        nonce="449d412794494977987fdafaa11"
        src="//local.adguard.org?ts=1662436000105&amp;type=content-script&amp;dmn=www.bootdey.com&amp;app=com.apple.Safari&amp;css=1&amp;js=1&amp;gcss=1&amp;rel=1&amp;rji=1&amp;sbe=0&amp;stealth=1&amp;uag="
      ></Script>
      <Script
        type="text/javascript"
        nonce="449d412794494977987fdafaa11"
        src="//local.adguard.org?ts=1662436000105&amp;name=AdGuard%20Popup%20Blocker&amp;name=AdGuard%20Assistant&amp;name=AdGuard%20Extra&amp;type=user-script"
      ></Script>
      <Script src="https://code.jquery.com/jquery-1.10.2.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></Script>

      <script type="text/javascript"></script>
    </>
  );
}
