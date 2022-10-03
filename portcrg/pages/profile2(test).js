import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

import Script from "next/script";



export default function Home() {
  return (
  <>
  
  <section className="py-5 my-5">
  <div className="container">
    <h1 className="mb-5">PERFIL DE USUARIO</h1>
    <div className="bg-white shadow rounded-lg d-block d-sm-flex">
      <div className="profile-tab-nav border-right">
        <div className="p-4">
          <div className="img-circle text-center mb-3">
          <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
          </div>
          <h4 className="text-center">Kiran Acharya</h4>
        </div>
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="account-tab"
            data-toggle="pill"
            href="#account"
            role="tab"
            aria-controls="account"
            aria-selected="true"
          >
            <i className="fa fa-home text-center mr-1" />
            Información Personal
          </a>
          <a
            className="nav-link"
            id="password-tab"
            data-toggle="pill"
            href="#password"
            role="tab"
            aria-controls="password"
            aria-selected="false"
          >
            <i className="fa fa-key text-center mr-1" />
            Seguridad
          </a>
          <a
            className="nav-link"
            id="security-tab"
            data-toggle="pill"
            href="#security"
            role="tab"
            aria-controls="security"
            aria-selected="false"
          >
            <i className="fa fa-user text-center mr-1" />
            Cuenta
          </a>
          
          <a
            className="nav-link"
            id="notification-tab"
            data-toggle="pill"
            href="#notification"
            role="tab"
            aria-controls="notification"
            aria-selected="false"
          >
            <i className="fa fa-bell text-center mr-1" />
            Salud
          </a>
        </div>
      </div>
      <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="account"
          role="tabpanel"
          aria-labelledby="account-tab"
        >
          <h3 className="mb-4">Información Personal</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Ingrese sus nombres"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Ingrese sus apellidos"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>DPI</label>
                <input
                  type="text"
                  id="DPI"
                  className="form-control"
                  placeholder="Ingrese número de DPI"
                  defaultValue=""
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Estado Civil</label>
                <select class="form-control">
                          <option selected="">
                            Seleccione su estado Civil
                          </option>
                          <option>Soltero</option>
                          <option>Casado</option>
                        </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Número de Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="Cellphone"
                  placeholder="Ingrese número de teléfono"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Ocupación</label>
                <select class="form-control">
                          <option selected="">Seleccionar Ocupación</option>
                          <option>Voluntario General</option>
                          <option>Socorrista</option>
                          <option>Juventino</option>
                          <option>Personal Asalariado</option>
                          <option>Damas Voluntarias</option>
                          <option>Administrador</option>
                        </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="nacimiento"
                  placeholder="Ingrese fecha de nacimiento"
                  defaultValue=""
                />
              </div>
            </div>
            

            <div className="col-md-6">
              <div className="form-group">
                <label>Departamento</label>
                <select class="form-control">
                          <option selected="">Seleccionar Departamento</option>
                          <option>Alta Verapaz</option>
                          <option>Baja Verapaz</option>
                          <option>Chimaltenango</option>
                          <option>Chiquimula</option>
                          <option>Guatemala</option>
                          <option>El Progreso</option>
                          <option>Escuintla</option>
                          <option>Huehuetenango</option>
                          <option>Izabal</option>
                          <option>Jalapa</option>
                          <option>Jutiapa</option>
                          <option>Péten</option>
                          <option>Quetzaltenango</option>
                          <option>Quiché</option>
                          <option>Retalhuleu</option>
                          <option>Sacatepequez</option>
                          <option>San Marcos</option>
                          <option>Santa Rosa</option>
                          <option>Sololá</option>
                          <option>Suchitepequez</option>
                          <option>Totonicapán</option>
                          <option>Zacapa</option>
                        </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Municipio</label>
                <input
                  type="text"
                  className="form-control"
                  id="municipio"
                  placeholder="Ingrese nombre de municipio"
                  defaultValue=""
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Dirección de Residencia</label>
                <input
                  type="text"
                  className="form-control"
                  id="nacimiento"
                  placeholder="Ingrese dirección donde vive actualmente"
                  defaultValue=""
                />
              </div>
            </div>

            


            <div className="col-md-12">
              <div className="form-group">
                <label>Biografía</label>
                <textarea
                  className="form-control"
                  id="biografia"
                  rows={4}
                  defaultValue={
                    "Puedes escribir un poco mas de ti, para conocer tus gustos e intereses."
                  }
                />
              </div>
            </div>
          </div>
          <small id="fullNameHelp" className="form-text text-muted">
                        *El nombre que ingrese es el que se mostrará por defecto.
                        Puede cambiar o actualizar su nombre en cualquier
                        momento.
                      </small>
          <div>
            <button className="btn btn-primary">Actualizar</button>
            
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="password"
          role="tabpanel"
          aria-labelledby="password-tab"
        >
          <h3 className="mb-4">Seguridad</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Contraseña anterior</label>
                <input type="password" className="form-control" 
                id="oldPassword"
                placeholder="Ingrese contraseña anterior"
                defaultValue=""/>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Nueva contraseña</label>
                <input type="password" className="form-control"
                id="newPassword" 
                placeholder="Ingrese nueva contraseña"
                defaultValue=""/>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label>Confirmar nueva contraseña</label>
                <input type="password" className="form-control"
                id="rePassword" 
                placeholder="Confirme nueva contraseña"
                defaultValue=""/>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary">Actualizar</button>
            
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="security"
          role="tabpanel"
          aria-labelledby="security-tab"
        >
          <h3 className="mb-4">Cuenta</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="text" className="form-control" 
                id="email"/>
              </div>
              <small id="usernameHelp" className="form-text text-muted">
                        Despues de eliminar la cuenta de PORT CRG.
                        El correo electrónico estará disponible para cualquier otra
                        persona.
                      </small>
            </div>
           
            
          </div>
          <div>
            <button className="btn btn-danger">Eliminar</button>
            
          </div>
        </div>
        
        <div
          className="tab-pane fade"
          id="notification"
          role="tabpanel"
          aria-labelledby="notification-tab"
        >
          <h3 className="mb-4"> Información de Salud</h3>
          
          <div className="small text-muted mb-3">
                        La siguiente información es personal y servirá para
                        poder tener un detalle de su perfil en determinada
                        emergencia.
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <label className="d-block">Salud</label>
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          Tipo de Sangre
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <select class="form-control">
                              <option selected="">
                                Seleccionar Tipo de Sangre
                              </option>
                              <option>O Positivo</option>
                              <option>O Negativo</option>
                              <option>A Positivo</option>
                              <option>A Negativo</option>
                              <option>B Positivo</option>
                              <option>B Negativo</option>
                              <option>AB Positivo</option>
                              <option>AB Negativo</option>
                            </select>
                          </div>
                        </li>
                        <li className="list-group-item has-icon">
                          Enfermedad
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <select class="form-control">
                              <option selected="">
                                ¿Padece de alguna enfermedad?
                              </option>
                              <option>SI</option>
                              <option>NO</option>
                            </select>

                            <label htmlFor="fullName">
                              ¿Cual es la enfermedad?
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              aria-describedby="fullNameHelp"
                              placeholder="Si su respuesta anterior fue SI, Ingrese nombre de enfermedad"
                              defaultValue=""
                            />
                          </div>
                        </li>

                        <li className="list-group-item has-icon">
                          Medicamento
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <select class="form-control">
                              <option selected="">
                                ¿Actualmente está tomando algún tipo de
                                medicación?
                              </option>
                              <option>SI</option>
                              <option>NO</option>
                            </select>

                            <label htmlFor="fullName">
                              Nombre de Medicamento
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              aria-describedby="fullNameHelp"
                              placeholder="Si su respuesta anterior fue SI, Ingrese nombre de medicamento o compuesto"
                              defaultValue=""
                            />
                          </div>
                        </li>

                        <li className="list-group-item has-icon">
                          Incapacidad
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <select class="form-control">
                              <option selected="">
                                ¿Padece de alguna incapacidad?
                              </option>
                              <option>SI</option>
                              <option>NO</option>
                            </select>

                            <label htmlFor="fullName">
                              Mencione la discapacidad
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              aria-describedby="fullNameHelp"
                              placeholder="Si su respuesta anterior fue SI, Ingrese nombre de discapacidad"
                              defaultValue=""
                            />
                          </div>
                        </li>
                      </ul>
                    
          
          <div>
            <button className="btn btn-primary">Actualizar</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  
</section>

<>
<link
  rel="stylesheet"
  type="text/css"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
/>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
</>



<Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></Script>
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></Script>
	<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></Script>

  
  </>
  );
}
