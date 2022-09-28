import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

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
    console.log(course)
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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CoursesContext.Provider value={{ coursesList, submitCourses, editarCourse, Course }}>
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider };

export default CoursesContext;
