import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import FormCourses from "./FormCourses";
import {
  MdHighlightOff,
  MdHistory,
  MdDomainVerification,
} from "react-icons/md";

import { BiWindowOpen } from "react-icons/bi";
import PdfViewer from "./PdfViewer";

function CourseGenInfo(props) {
  const [modal, setModal] = useState(false);
  const [modalPdf, setModalPdf] = useState(false);
  const course = props.course;

  return (
    <>
      <div className="flex flex-col h-full mb-4 lg:mb-0">
        <div className="md:flex md:justify-between ">
          <p className="font-inter font-bold text-left sm:text-3xl 2xl:text-4xl mb-2 text-dark-cadet-blue">
            {course.name}
          </p>

          <button
            className="bg-dark-cadet-blue px-4 py-3 text-white uppercase
            font-bold text-sm rounded-lg text-start"
            onClick={() => setModal(true)}
          >
            Editar
          </button>
        </div>

        <span className="flex">
          <p>Impartido por&nbsp;</p>
          <p className="font-semibold">{course.instructor}</p>
        </span>
        <div className="bg-slate-100 px-2 py-1 rounded-md my-2 flex flex-col lg:flex-row gap-2">
          <div className="basis-full lg:basis-2/5">
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
          {course.hasOwnProperty("prerequisitos") ? (
            <div className="basis-full lg:basis-3/5">
              <p className="font-semibold text-gray-500">Prerrequisitos</p>
              {course.prerequisitos.length == 0 ? (
                <p>Ninguno</p>
              ) : (
                <ul className="list-disc ml-5">
                  {course.prerequisitos.map((course_details) => {
                    return <li key={course_details}>{course_details}</li>;
                  })}
                </ul>
              )}
            </div>
          ) : null}
        </div>
        <div>
          <p className="font-inter font-bold text-left sm:text-lg 2xl:text-xl mb-2 text-dark-cadet-blue">
            Descripción del curso
          </p>
          <p>{course.description}</p>
        </div>
        <div className="mt-2">
          <p className="font-inter font-bold text-left sm:text-lg 2xl:text-xl mb-2 text-dark-cadet-blue">
            Enlace de descarga de temario del curso
          </p>
          {course.hasOwnProperty("temarioURL") && course.temarioURL != "" ? (
            // <Link href={course.temarioURL} passHref>
            //   <a className="text-teal-700 hover:underline" target="_blank">
            //     Temario - {course.name}
            //   </a>
            // </Link>
            <button
              type="button"
              className=" text-sm px-3 py-2 w-full md:w-auto rounded-lg uppercase font-bold
              bg-dark-cadet-blue text-white text-center mt-2 flex gap-2 items-center justify-center"
              onClick={() => setModalPdf(true)}
            >
              Ver temario
            </button>
          ) : (
            <p>Aún no se ha cargado el recurso</p>
          )}
        </div>
      </div>
      <Modal modal={modalPdf} setModal={setModalPdf} name="">
        <PdfViewer
          pdfUrl={course.temarioURL}
          courseName={course.name}
        ></PdfViewer>
      </Modal>
      <Modal modal={modal} setModal={setModal} name="Editar Curso">
        <FormCourses setModal={setModal} course={course}></FormCourses>
      </Modal>
    </>
  );
}

export default CourseGenInfo;
