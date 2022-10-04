import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ObtenerCursos = async () => {
      try {
        const { data } = await axios(
          "https://portcrg-dev.onrender.com/api/courses/"
        );

        setCoursesList(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    ObtenerCursos();
  }, []);

  const Course = async (course, _id) => {
    if (_id) {
      await editarCourse(course, _id);
    } else {
      await submitCourses(course);
    }
  };

  const submitCourses = async (course) => {
    console.log(course);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "https://portcrg-dev.onrender.com/api/courses/",
        course,
        config
      );

      setCoursesList([...coursesList, data.data]);
      console.log(data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Curso Agregado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const AsignarCourse = async (idCourse) => {
    console.log(idCourse.course._id);
    try {
      const idUser = localStorage.getItem("id");
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //     curso: idCourse.course._id,
      //     user: idUser,
      //   },
      // };
      // const { data } = await axios.post(
      //   "https://portcrg-dev.onrender.com/api/courses/assignment",
      //   config
      // );

      // console.log(data);

      const message = await fetch(
        "https://portcrg-dev.onrender.com/api/courses/assignment",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            curso: idCourse.course._id,
            user: idUser,
          },
        }
      ).then(function (response) {
        if (response.ok) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Curso asignado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Curso ya asignado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editarCourse = async (course, _id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          id: _id,
        },
      };
      const { data } = await axios.put(
        "https://portcrg-dev.onrender.com/api/courses/",
        course,
        config
      );
      location.reload();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Curso Editado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CoursesContext.Provider
      value={{
        coursesList,
        submitCourses,
        editarCourse,
        Course,
        AsignarCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider };

export default CoursesContext;
