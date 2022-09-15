import React from "react";
import {
  MdHighlightOff,
  MdHistory,
  MdDomainVerification,
} from "react-icons/md";

import { BiWindowOpen } from "react-icons/bi";

function LeftInfoCourse(props) {
  const course = props.course;
  return (
    <>
      <div className="flex flex-col h-full">
        <p className="font-inter font-bold text-left sm:text-3xl 2xl:text-4xl mb-2 text-dark-cadet-blue">
          {course.name}
        </p>
        <span className="place-items-center flex">
          <p>Impartido por&nbsp;</p>
          <p className="font-semibold">{course.instructor}</p>
        </span>
        <div className="bg-slate-100 px-2 py-1 rounded-md my-2 flex flex-row">
          <div className="basis-2/5">
            <p className="font-semibold text-gray-500">Status</p>
            {course.status == 1 ? (
              <span className="place-items-center flex text-red-600">
                <MdHighlightOff className="mr-2 shrink-0"></MdHighlightOff>
                <p>Cancelado</p>
              </span>
            ) : course.status == 2 ? (
              <span className="place-items-center flex text-green-600">
                <BiWindowOpen className="mr-2 shrink-0"></BiWindowOpen>
                <p>Habilitado</p>
              </span>
            ) : course.status == 3 ? (
              <span className="place-items-center flex text-yellow-500">
                <MdHistory className="mr-2 shrink-0"></MdHistory>
                <p>Reprogramado</p>
              </span>
            ) : course.status == 4 ? (
              <span className="place-items-center flex">
                <MdDomainVerification className="mr-2 shrink-0"></MdDomainVerification>
                <p>Terminado</p>
              </span>
            ) : null}
          </div>
          <div className="basis-3/5">
            <p className="font-semibold text-gray-500">Prerrequisitos</p>
            {course.prerequisitos.length == 0 ? (
              <p>Ninguno</p>
            ) : (
              <ul className="list-disc ml-5">
                {course.prerequisitos.map((course_details) => {
                  return <li>{course_details}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
        <p className="font-inter font-bold text-left sm:text-lg 2xl:text-xl mb-2 text-dark-cadet-blue">
          Descripción del curso
        </p>
        <p>{course.description}</p>
      </div>
    </>
  );
}

export default LeftInfoCourse;
