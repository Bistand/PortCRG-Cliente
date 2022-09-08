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
                        <label htmlFor="zIp">Código Postal</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Ingrese su Código postal"
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


        <div className="basis-5/12 relative">
          <img
            src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
          ></img>
        </div>
      </div>

      <div className="sm:hidden mx-5 mb-8">
        <div className="grid grid-cols-3 mt-12 gap-2 lg:gap-6">
          <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
            <FaTasks size={48} className="mb-3 mt-2"></FaTasks>
            <p className="text-xs text-center mx-6 text-black font-inter">
              Expande tus habilidades y experiencia
            </p>
          </div>
          <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
            <MdWork size={48} className="mb-3 mt-2"></MdWork>
            <p className="text-xs text-center mx-6 mb-2 text-black font-inter">
              Aumenta tu empleabilidad manteniendote comprometido con la
              sociedad
            </p>
          </div>
          <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
            <IoIosPeople size={56} className="mb-2 mt-1"></IoIosPeople>
            <p className="text-xs text-center mx-6 text-black font-inter">
              Retribuye a la comunidad y ayuda a las personas
            </p>
          </div>
        </div>
      </div>

      {/* inicio parte baja homepage */}

      <div className="mx-4 sm:mx-12">
        <div className="grid grid-cols-2 place-items-center gap-2 my-4 sm:my-20">
          <div className="col-span-2 mb-8 sm:mb-16 font-inter font-bold text-2xl text-center sm:text-4xl md:text-6xl 2xl:text-7xl leading-tight text-dark-cadet-blue">
            ¿Por qué ser voluntario?
          </div>

          <div className="basis-5/12 relative">
            <img
              src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></img>
          </div>

          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Socorros y emergencias
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Los socorristas deben ser responsables, vigilantes y capaces de
              afirmarse en situaciones donde la vida humana esta en peligro
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-2 my-4 sm:my-20">
          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Socorros y emergencias
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Los socorristas deben ser responsables, vigilantes y capaces de
              afirmarse en situaciones donde la vida humana esta en peligro Los
              socorristas deben ser responsables, vigilantes y capaces de
              afirmarse en situaciones donde la vida humana esta en peligro
            </p>
          </div>

          <div className="basis-5/12 relative">
            <img
              src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></img>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-2 my-4 sm:my-20">
          <div className="basis-5/12 relative">
            <img
              src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></img>
          </div>

          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Socorros y emergencias
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Los socorristas deben ser responsables, vigilantes y capaces de
              afirmarse en situaciones donde la vida humana esta en peligro
            </p>
          </div>
        </div>
      </div>

      {/* Fin parte baja homepage */}


      <Footer></Footer>
    </>
  );
}
