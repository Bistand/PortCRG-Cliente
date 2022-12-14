import Head from "next/head";
import Image from "next/image";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>PortCRG</title>
      </Head>
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
          <Image
            layout="fill"
            objectFit="cover"
            src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
          ></Image>
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
        <div className="col-span-2 mb-8 sm:mb-16 font-inter font-bold text-2xl text-center sm:text-4xl md:text-6xl 2xl:text-7xl leading-tight text-dark-cadet-blue">
          ??Por qu?? ser voluntario?
        </div>

        <div className="grid grid-cols-1 s place-items-center  my-4 sm:my-20 sm:grid-cols-2">
          <div className="basis-5/12 relative">
            <Image
              alt="Picture of the author"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1617699755337-c79e46f7eb0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></Image>
          </div>

          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Socorros y emergencias
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Los socorristas Actuamos para que las personas puedan superar las
              situaciones agudas o cr??nicas que ponen en peligro sus vida.
              Disponiendo de capacidades para hacer frente a las emergencias de
              distintos tipos y niveles en coordinacion con las autoridades
              competentes en cada caso. Adem??s apoya la divulgaci??n de la
              doctrina institucional, el derecho internacional humanitario y la
              transformaci??n pac??fica de conflictos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 s place-items-center  my-4 sm:my-20 sm:grid-cols-2">
          <div className="basis-5/12 relative">
            <Image
              alt="Picture of the author"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1624638746091-4b7de51514c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></Image>
          </div>
          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Primeros Auxilios
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Un familiar, un amigo, un compa??ero de trabaj. En cualquier
              momento puede surgir una situaci??n en la que la vida o la
              integridad f??sica de otra persona dependa de ti. Muchas veces
              basta con una acci??n sencilla, realizada en el instante preciso y
              de la manera adecuada, para resolverla. Conocer??s las t??cnicas
              esenciales de Primeros Auxilios, desde la Reanimaci??n Cardio
              Pulmonar (RCP) hasta c??mo mover correctamente a una persona herida
              o enferma.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 s place-items-center  my-4 sm:my-20 sm:grid-cols-2">
          <div className="basis-5/12 relative">
            <Image
              alt="Picture of the author"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="object-cover rounded-3xl sm:rounded-xtra-large h-40 sm:h-72 md:h-full 2xl:w-full 2xl:h-96"
            ></Image>
          </div>

          <div className="">
            <p className="text-md font-extrabold text-center mx-6 mb-2 text-dark-cadet-blue font-inter lg:text-2xl xl:text-4xl lg:mb-10">
              Intervencion Social
            </p>
            <p className="text-xs text-justify mx-6 mb-2 text-black font-inter lg:text-lg xl:text-xl">
              Tabajamos con las personas y grupos m??s vulnerables o en riesgo de
              exlusi??n social a trav??s de su plan de intervencion social,
              contribuyendo a su inclusi??n desde un enfoque integral de
              intervencion a trav??s de la participacion voluntaria, promoviendo
              la autonom??a personal y actuando sobre los efectos que produce la
              crisis econ??mica con el fin de mejorar sus condiciones de vida.
            </p>
          </div>
        </div>
      </div>

      {/* Fin parte baja homepage */}
    </>
  );
}
