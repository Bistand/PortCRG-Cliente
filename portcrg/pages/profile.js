import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

import ProfilePic from '../public/crg.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>PortCRG</title>
      </Head>
      <Navbar></Navbar>

      <>
        <meta charSet="utf-8" />

        <title>CRGport</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <Image
                          src={ProfilePic}
                          alt=""
                        />
                      </div>
                      <h5 className="user-name">Cruz Roja</h5>
                      <h6 className="user-email">crgport@gmail.com</h6>

                    </div>


                    <div className="about">
                      <h5 className="mb-2 text-primary">Información</h5>
                      <p>
                        Institución no lucrativa, de interés social y voluntario que presta auxilio a la población que se encuentre en riesgo o en desastre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 text-primary">Información Personal</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Nombre completo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Ingresa tu nombre completo"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="eMail">Correo Electrónico</label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          placeholder="Ingresa tu Correo Electrónico"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Ingresa tu numero teléfonico"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone2">Teléfono alternativo (Emergencias)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone2"
                          placeholder="Ingresa numero de teléfono alternativo"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 text-primary">Fotografía de perfil</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Cambiar imagen </label>
                        <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                          <input type="file" className="file-uploader pull-left" />
                          <button type="submit" className="btn btn-sm btn-default-alt pull-left">
                            Subir Imagen
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 text-primary">Dirección</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Street">Dirección</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          placeholder="Ingresa dirección de residencia"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="ciTy">Departamento</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          placeholder="Ingresa Departamento"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="sTate">Municipio</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          placeholder="Ingresa Municiopio"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="zIp">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
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
        </div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\nbody{margin-top:200px;\ncolor: #FDFFFC;\n    background: #fdfffc;\n}\n.account-settings .user-profile {\n    margin: 0 0 1rem 0;\n    padding-bottom: 1rem;\n    text-align: center;\n}\n.account-settings .user-profile .user-avatar {\n    margin: 0 0 1rem 0;\n}\n.account-settings .user-profile .user-avatar img {\n    width: 150px;\n    height: 150px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px;\n    border-radius: 100px;\n}\n.account-settings .user-profile h5.user-name {\n    margin: 0 0 0.5rem 0;\n}\n.account-settings .user-profile h6.user-email {\n    margin: 0;\n    font-size: 1rem;\n    font-weight: 400;\n}\n.account-settings .about {\n    margin: 1rem 0 0 0;\n    font-size: 1rem;\n    text-align: center;\n}\n.card {\n    background: #56A3A6;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 15px;\n    border: 0;\n    margin-bottom: 1rem;\n}\n.form-control {\n    border: 1px solid #596280;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    font-size: 1rem;\n    background: #1A233A;\n    color: #bcd0f7;\n}\n\n"
          }}
        />
        <script type="text/javascript"></script>
      </>


      <Footer></Footer>
    </>
  );
}
