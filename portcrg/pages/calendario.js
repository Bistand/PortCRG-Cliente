
import Head from "next/head";
import Script from "next/script";

//Librerias necesarias para dibujar el calendario 
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEvents } from "../context/eventContext";
import styles from '../styles/calendario.module.css';

//idioma para el calendario
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [

];


export default function Home() {
    const { eventsList } = useEvents();
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    console.log(eventsList)

    return (
        <>
            <div className="App">
                <h1 className={styles.h1}>Calendario de Actividades</h1>
                <hr className={styles.hr}></hr>

                
                    <div className="flex flex-row justify-center  mb-7">
                        
                        {/* {occupation == 6 || occupation == 7 || occupation == 8 ? ( */}
                        <button
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            Agregar actividades
                        </button>
                        {/* ) : null} */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-10 w-3/4 xl:w-2/3">
                        
                            
                    </div>
                

                <Calendar
                    localizer={localizer}
                    events={eventsList}
                    startAccessor="dateEvent"
                    endAccessor="dateEvent"
                    style={{ height: 500, margin: "50px" }} />
            </div>



        </>
    );

}
