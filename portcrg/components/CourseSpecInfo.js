import React from "react";
import Image from "next/image";
import {
  BiCalendar,
  BiCalendarCheck,
  BiLaptop,
  BiWalk,
  BiTask,
  BiTaskX,
  BiLinkExternal,
  BiLocationPlus,
  BiAlarm,
} from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";

function CourseSpecInfo(props) {
  const course = props.course;
  return (
    <div className="border-2 rounded-lg shadow-md">
      <div className="h-48 md:h-60 relative mb-4">
        {course.hasOwnProperty("photographyURL") &&
        course.photographyURL != "" ? (
          <Image
            layout="fill"
            objectFit="cover"
            src={course.photographyURL}
            className="object-cover rounded-lg"
          ></Image>
        ) : (
          <Image
            layout="fill"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="object-cover rounded-lg"
          ></Image>
        )}
      </div>

      <div className="text-dark-cadet-blue px-4 mb-2">
        <p className="font-bold text-lg mb-2">Detalles del curso</p>

        {/* <p className="font-semibold">Fecha de inicio</p> */}
        <span className="lg:place-items-center flex">
          <BiCalendar className="mr-2 mt-1 lg:mt-0 shrink-0"></BiCalendar>
          <p>Inicia {course.startDate.substring(0, 10)}</p>
        </span>
        {/* <p className="font-semibold">Fecha de cierre</p> */}
        <span className="lg:place-items-center flex">
          <BiCalendarCheck className="mr-2 mt-1 lg:mt-0 shrink-0"></BiCalendarCheck>
          <p>Finaliza {course.endDate.substring(0, 10)}</p>
        </span>

        {/* <span className="lg:place-items-center flex">
          <BiAlarm className="mr-2 mt-1 lg:mt-0 shrink-0"></BiAlarm>
          <p>Horario {course.hora}</p>
        </span> */}

        {/* <p className="font-semibold">Modalidad</p> */}
        {course.modality == 1 ? (
          <div>
            <span className="lg:place-items-center flex">
              <BiWalk className="mr-2 mt-1 lg:mt-0 shrink-0"></BiWalk>
              <p>Modalidad presencial</p>
            </span>
            {/* <p className="font-semibold">Ubicación</p> */}
            <span className="lg:place-items-center flex">
              <BiLocationPlus className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLocationPlus>
              <p>En la sede {course.sede}</p>
            </span>
          </div>
        ) : course.modality == 2 ? (
          <div>
            <span className="lg:place-items-center flex">
              <BiLaptop className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLaptop>
              <p>Modalidad virtual</p>
            </span>
            {/* <p className="font-semibold">Plataforma</p> */}
            <span className="lg:place-items-center flex">
              <BiLinkExternal className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLinkExternal>
              <p>En la plataforma {course.platform}</p>
            </span>
          </div>
        ) : course.modality == 3 ? (
          <div>
            <span className="lg:place-items-center flex">
              <BiLaptop className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLaptop>
              <p>Modalidad híbrida</p>
            </span>
            <span className="lg:place-items-center flex">
              <BiLocationPlus className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLocationPlus>
              <p>En la sede {course.sede}</p>
            </span>
            <span className="lg:place-items-center flex">
              <BiLinkExternal className="mr-2 mt-1 lg:mt-0 shrink-0"></BiLinkExternal>
              <p>En la plataforma {course.platform}</p>
            </span>
          </div>
        ) : null}
        {/* <p className="font-semibold">Diploma</p> */}
        {course.diploma ? (
          <span className="lg:place-items-center flex">
            <BiTask className="mr-2 mt-1 lg:mt-0 shrink-0"></BiTask>
            <p>Sí se entrega diploma/certificado</p>
          </span>
        ) : (
          <span className="lg:place-items-center flex">
            <BiTaskX className="mr-2 mt-1 lg:mt-0 shrink-0"></BiTaskX>
            <p>No se entrega diploma/certificado</p>
          </span>
        )}
        {/* <p className="font-semibold">Participantes</p> */}
        <span className="lg:place-items-center flex">
          <IoPeopleOutline className="mr-2 mt-1 lg:mt-0 shrink-0"></IoPeopleOutline>
          <p>{course.amountOfParticipants} cupos disponibles</p>
        </span>
      </div>
    </div>
  );
}

export default CourseSpecInfo;
