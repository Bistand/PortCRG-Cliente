import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>PortCRG</title>
      </Head>
      <Navbar></Navbar>
      <div className="flex gap-x-3 mx-5 mt-8 mb-4 sm:mx-12 sm:my-7">
        <div className="basis-7/12 sm:mr-10 lg:mr-28">
          <p className="font-inter font-bold text-2xl text-center sm:text-left sm:text-4xl md:text-6xl 2xl:text-7xl leading-tight text-dark-cadet-blue">
            Nunca subestimes tu habilidad para mejorar la vida de alguien
          </p>
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 mt-12 sm:gap-2 lg:gap-6">
              <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
                <FaTasks size={48} className="mb-3 mt-2"></FaTasks>
                <p className="text-xs md:text-base text-center mx-6 text-black font-inter">
                  Expande tus habilidades y experiencia
                </p>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
                <MdWork size={48} className="mb-3 mt-2"></MdWork>
                <p className="text-xs md:text-base text-center mx-6 mb-2 text-black font-inter">
                  Aumenta tu empleabilidad manteniendote comprometido con la
                  sociedad
                </p>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center text-dark-cadet-blue hover:text-cadet-blue hover:bg-gray-100">
                <IoIosPeople size={56} className="mb-2 mt-1"></IoIosPeople>
                <p className="text-xs md:text-base text-center mx-6 text-black font-inter">
                  Retribuye a la comunidad y ayuda a las personas
                </p>
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
      <Footer></Footer>
    </>
  );
}
