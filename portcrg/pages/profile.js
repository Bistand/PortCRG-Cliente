import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";



import Script from 'next/script'

import ProfilePic from '../public/crg.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>PortCRG</title>
      </Head>
      <Navbar></Navbar>

      <div className="container">
        {/* Breadcrumb */}

        {/* /Breadcrumb */}
        <div className="row gutters-sm">
          <div className="col-md-4 d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <nav className="nav flex-column nav-pills nav-gap-y-1">

                  <div className="user-info">
                    <img
                      className="img-profile img-circle img-responsive center-block"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    <ul className="meta list list-unstyled">
                      <li className="name">
                        Rebecca Sanders
                        <label className="label label-info">UX Designer</label>
                      </li>
                      
                      
                    </ul>
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
                      className="feather feather-bell mr-2"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
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
                        className="feather feather-bell"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
              <div className="card-body tab-content">
                <div className="tab-pane active" id="profile">
                  <h6>INFORMACIÓN PERSONAL</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label htmlFor="fullName">Nombre Completo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="fullNameHelp"
                        placeholder="Ingrese su nombre completo"
                        defaultValue=""
                      />
                      <small id="fullNameHelp" className="form-text text-muted">
                        El nombre que ingrese es el que se mostrará por defecto.
                        Puede cambiar o actualizar su nombre en cualquier momento.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Biografía</label>
                      <textarea
                        className="form-control autosize"
                        id="bio"
                        placeholder="Puedes escribir un poco mas de ti, para conocer tus gustos e intereses."
                        style={{
                          overflow: "hidden",
                          overflowWrap: "break-word",
                          resize: "none",
                          height: 62
                        }}
                        defaultValue={
                          ""
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="fullName">DPI</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="fullNameHelp"
                        placeholder="Ingrese su número de DPI"
                        defaultValue=""
                      />
                      
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Número de Telefono/Celular</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="fullNameHelp"
                        placeholder="Ingrese su número de contacto"
                        defaultValue=""
                      />
                      
                    </div>


                    <div className="form-group">
                      <label htmlFor="url">Fecha de nacimiento</label>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        defaultValue="2018-07-22"
                        min="2018-01-01"
                        max="2018-12-31"
                      />

                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Departamento</label>
                      <div class="col-sm-10">
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


                    <div className="form-group">
                      <label htmlFor="Municio">Municipio</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Ingrese el Municipio donde vive actualmente"
                        defaultValue=""
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Dirección de Residencia</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Ingrese la dirección donde vive actualmente"
                        defaultValue=""
                      />
                    </div>




                    <div className="form-group small text-muted">
                    Todos los campos de esta página son opcionales y se pueden eliminar
                      en cualquier momento, y al rellenarlos nos estás dando tu consentimiento
                      para compartir estos datos dondequiera que aparezca su perfil de usuario.
                    </div>
                    <button type="button" className="btn btn-success">
                      Actualizar perfil
                    </button>

                  </form>
                </div>
                <div className="tab-pane" id="account">
                  <h6>AJUSTES DE CUENTA</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label htmlFor="username">Correo Electrónico / Codigo de Personal</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Ingrese su correo electrónico o Codigo de personal"
                        defaultValue=""
                      />
                      <small id="usernameHelp" className="form-text text-muted">
                        Despues de cambiar el Correo electrónico o Codigo de Personal 
                        el mismo estará disponible para cualquier otra persona.
                      </small>
                    </div>
                    <hr />
                    <div className="form-group">
                      <label className="d-block text-danger">Eliminar Cuenta</label>
                      <p className="text-muted font-size-sm">
                        Una vez eliminada tu cuenta, no abra marcha atraz, por favor se conciente.
                       
                      </p>
                    </div>
                    <button className="btn btn-danger" type="button">
                      Eliminar Cuenta
                    </button>
                  </form>
                </div>
                <div className="tab-pane" id="security">
                  <h6>AJUSTES DE SEGURIDAD</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block">Cambiar contraseña</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su contraseña anterior"
                      />
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Nueva contraseña"
                      />
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Confirmar nueva contraseña"
                      />
                      <button type="button" className="btn btn-success">
                      Actualizar Contraseña
                    </button>
                    </div>
                  </form>
                  
                </div>
                <div className="tab-pane" id="notification">
                  <h6>AJUSTES DE SALUD</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block mb-0">Información de Salud Personal</label>
                      <div className="small text-muted mb-3">
                        La siguiente información es personal y servirá para poder tener un detalle de su perfil en determinada emergencia.
                      </div>
                      
                      
                    </div>
                    <div className="form-group mb-0">
                      <label className="d-block">SMS Notifications</label>
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          Tipo de Sangre
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <select class="form-control">
                          <option selected="">Seleccionar Tipo de Sangre</option>
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
                          Medicamento
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            
                            <select class="form-control">
                          <option selected="">¿Actualmente está tomando algún tipo de medicación?</option>
                          <option>SI</option>
                          <option>NO</option>
                         

                        </select>
                        
                        <label htmlFor="fullName">Nombre de Medicamento</label>
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
                          Reminders
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customSwitch3"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customSwitch3"
                            />
                          </div>
                        </li>
                        <li className="list-group-item has-icon">
                          Events
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customSwitch4"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customSwitch4"
                            />
                          </div>
                        </li>
                        <li className="list-group-item has-icon">
                          Pages You Follow
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customSwitch5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customSwitch5"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nbody{\n    margin-top:20px;\n    color: #1a202c;\n    text-align: left;\n    background-color: #e2e8f0;    \n}\n.main-body {\n    padding: 15px;\n}\n\n.nav-link {\n    color: #4a5568;\n}\n.card {\n  margin-top:25px; margin-bottom:25px;\n \n box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);\n}\n\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 0 solid rgba(0,0,0,.125);\n    border-radius: .25rem;\n}\n\n.card-body {\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 1rem;\n}\n\n.gutters-sm {\n    margin-right: -8px;\n    margin-left: -8px;\n}\n\n.gutters-sm>.col, .gutters-sm>[class*=col-] {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.mb-3, .my-3 {\n    margin-bottom: 1rem!important;\n}\n\n.bg-gray-300 {\n    background-color: #e2e8f0;\n}\n.h-100 {\n    height: 100%!important;\n}\n.shadow-none {\n    box-shadow: none!important;\n}\n\n"
        }}
      />





      <Footer></Footer>

      <Script type="text/javascript"></Script>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <Script type="text/javascript" nonce="449d412794494977987fdafaa11" src="//local.adguard.org?ts=1662436000105&amp;type=content-script&amp;dmn=www.bootdey.com&amp;app=com.apple.Safari&amp;css=1&amp;js=1&amp;gcss=1&amp;rel=1&amp;rji=1&amp;sbe=0&amp;stealth=1&amp;uag="></Script>
      <Script type="text/javascript" nonce="449d412794494977987fdafaa11" src="//local.adguard.org?ts=1662436000105&amp;name=AdGuard%20Popup%20Blocker&amp;name=AdGuard%20Assistant&amp;name=AdGuard%20Extra&amp;type=user-script"></Script>
      <Script src="https://code.jquery.com/jquery-1.10.2.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></Script>

    </>
  );
}
