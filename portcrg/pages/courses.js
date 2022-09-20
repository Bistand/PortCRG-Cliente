import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import FormCourses from "../components/FormCourses";
import axios from "axios";
import CardCourses from "../components/CardCourses";

const courses = () => {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const ObtenerCursos = async () => {
      try {
        const { data } = await axios(
          "https://portcrg-dev.onrender.com/api/courses/"
        );

        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    ObtenerCursos();
  }, []);

  const dta = courses;

  console.log(dta);

  return (
    <>
      <Navbar />

      <div className="mx-28 grid grid-cols-2 mt-8">
        <div>
          <p className="font-inter font-bold text-2xl   sm:text-4xl  leading-tight text-dark-cadet-blue">
            Nunca subestimes tu habilidad para mejorar la vida de alguien
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className=" text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
              bg-cherry-red text-white text-center mt-5 flex gap-2 items-center justify-center"
              onClick={() => setModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Agregar Nuevo Curso
            </button>
          </span>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-28 lg:h-36">
        {dta?.map((course) => (
          <CardCourses key={course?._id} _id={course?._id} name={course?.name} description={course?.description} photographyURL={course?.photographyURL}/>
        ))}

      </div>

      <Modal modal={modal} setModal={setModal} name="Cursos">
        <FormCourses setModal={setModal}></FormCourses>
      </Modal>
    </>
  );
};

export default courses;
