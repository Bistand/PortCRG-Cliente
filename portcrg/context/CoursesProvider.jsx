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

  const submitCourses = async (course) => {
    try {
      // if ([name, instructor].includes("")) {
      //   alert("Todos los campos son obligatorios");
      //   return;
      // }

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

  return (
    <CoursesContext.Provider value={{coursesList, submitCourses}}>
      {children}
    </CoursesContext.Provider>
  );
};

export  {CoursesProvider};

export default CoursesContext;
