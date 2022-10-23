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
      router.push("/EditarPerfil");
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
          router.push("/EditarPerfil");
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

      <div className="container py-5">
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
