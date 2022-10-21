import Head from "next/head";
import Script from "next/script";

//Librerias necesarias para dibujar el calendario
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/calendario.module.css";

//idioma para el calendario
import moment from "moment";
import "moment/locale/es-us";
//importaciones extras
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsCard from "../components/EventsCard";
import { useEvents } from "../context/eventContext";
import AddEventModal from "../components/AddEventModal";
import { getCookie } from "cookies-next";
import { de } from "date-fns/locale";
import Link from "next/link";

// const locales = {
//     "pt-BR": require("date-fns/locale/pt-BR"),
// };

const localizer = momentLocalizer(moment);

const events = [];

//inicio
const calendar = () => {
  //conectar calendar con back
  const { eventsList, loading } = useEvents();
  let [isOpen, setIsOpen] = useState(false);
  let [dataModal, setDataModal] = useState({});
  const [occupation, setOccupation] = useState(1);
  const [privileges, setPrivileges] = useState(0);
  const authToken = getCookie("tokenuser");

  //Agregar eventos a calendario
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [mostrarboton, setMostrarboton] = useState(true);
  const token = getCookie("token");
  function validarusuario() {
    console.log("validar");
    if (token) {
      const privilegesvalor = token.substr(0, 1);
      console.log(privilegesvalor);
      if (privileges === "3") {
        setMostrarboton(true);
      }
      if (privilegesvalor === "1") {
        setMostrarboton(false);
      }
    }
  }

  const messages = {
    allDay: "Dia entero",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",

    showMore: (total) => `+ (${total}) Eventos`,
  };

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  console.log(eventsList);

  useEffect(() => {
    getUserId(authToken);
    validarusuario();
  }, [occupation]);

  const getUserId = async (token) => {
    try {
      const config = {
        headers: {
          "auth-token": token,
        },
      };
      const { data } = await axios.get(
        "https://portcrg-dev.onrender.com/api/admin",
        config
      );
      setOccupation(data.data.user.occupation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="font-inter font-bold text-center text-xl sm:text-3xl 2xl:text-4xl py-4 text-dark-cadet-blue">
          Calendario de Actividades
        </h1>
        <hr className={styles.hr}></hr>

        <div className="flex flex-col items-center my-8">
          <div className="flex flex-row justify-between w-2/3 mb-8">
            {/* {occupation == 6 || occupation == 7 || occupation == 8 ? ( */}

            <Link href="/informative">
              <a className=" flex items-center bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Ver Eventos
              </a>
            </Link>

            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              hidden={mostrarboton}
              onClick={() => {
                setIsOpen(true), validarusuario;
              }}
            >
              Agregar actividad
            </button>
            {/* ) : null} */}
          </div>
        </div>

        <Calendar
          className={styles.letras}
          localizer={localizer}
          events={eventsList}
          //Para ver solo mes y agenda.
          views={["month", "agenda"]}
          startAccessor="dateEvent"
          endAccessor="dateEvent"
          style={{
            height: 500,
            margin: "50px",
          }}
          // eventPropGetter={(event) => {
          //     return {
          //         style: {
          //             backgroundColor: '#3f51b5',
          //             borderRadius: '8px',
          //             minHeight: '10px',

          //         },
          //     };
          // }}
          messages={messages}
          onSelectSlot={(slot) => handleOpenDialog(slot)}
          // onSelectEvent={(event) => handleOpenEvent(event)}
        />
      </div>

      <AddEventModal isOpen={isOpen} setIsOpen={setIsOpen} data={dataModal} />
    </>
  );
};

export default calendar;
