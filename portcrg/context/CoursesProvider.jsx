import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { getCookie } from "cookies-next";
import { async } from "regenerator-runtime";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [coursesList, setCoursesList] = useState([]);
  const [coursesListUser, setCoursesListUser] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const tokenuser = getCookie("tokenuser");

  useEffect(() => {
    const ObtenerCursos = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${tokenuser}`,
          },
        };
        const { data } = await axios(
          "https://portcrg-dev.onrender.com/api/courses/",
          config
        );

        setCoursesList(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    //reparando los mages que se complicaron el despliegue

    ObtenerCursos();
    getCoursesByUser();
  }, []);

  const Course = async (course, _id) => {
    if (_id) {
      await editarCourse(course, _id);
    } else {
      await submitCourses(course);
    }
  };

  const submitCourses = async (course) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${tokenuser}`,
        },
      };

      const { data } = await axios.post(
        "https://portcrg-dev.onrender.com/api/courses/",
        course,
        config
      );

      setCoursesList([...coursesList, data.data]);

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
            Authorization: `Bearer ${tokenuser}`,
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

  const unassignCourse = async (course) => {
    try {
      const idUser = localStorage.getItem("id");
      const message = await fetch(
        "https://portcrg-dev.onrender.com/api/courses/unassign",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            curso: course.course,
            user: idUser,
            Authorization: `Bearer ${tokenuser}`,
          },
        }
      ).then(function (response) {
        if (response.ok) {
          const updatedCourses = coursesListUser.filter(
            (currentCourse) => currentCourse._id !== course.course
          );
          setCoursesListUser(updatedCourses);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Curso desasignado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "No se ha podido desasignar",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCoursesByUser = async () => {
    try {
      const idUser = localStorage.getItem("id");
      const config = {
        headers: {
          Authorization: `Bearer ${tokenuser}`,
        },
      };
      const { data } = await axios(
        `https://portcrg-dev.onrender.com/api/user/courses/${idUser}`,
        config
      );
      setCoursesListUser(data.data.reverse());
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
          Authorization: `Bearer ${tokenuser}`,
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

  const ObtenerParticipantes = async (_id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          id: _id,
          Authorization: `Bearer ${tokenuser}`,
        },
      };

      const { data } = await axios(
        "https://portcrg-dev.onrender.com/api/courses/id",
        config
      );

      setParticipantes(data.participantes)
      console.log(data.participantes)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CoursesContext.Provider
      value={{
        coursesList,
        coursesListUser,
        submitCourses,
        editarCourse,
        Course,
        AsignarCourse,
        unassignCourse,
        getCoursesByUser,
        ObtenerParticipantes,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider };

export default CoursesContext;
