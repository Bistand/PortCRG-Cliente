
import Head from "next/head";

import Script from "next/script";


import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    return (
        <>
            <div className="App">
                <h1>CALENDARIO</h1>
                <h2>Agregar nuevo compromiso</h2>
                <div>
                    <input type="text" placeholder="Agregar titulo" className="txtTitulo" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Fecha de Inicio" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="Fecha Finalización" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button type="button" className="button btnEvento"onClick={handleAddEvent}>
                        Agregar evento
                    </button>
                </div>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>


    <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nh1 {\ntext-align: center;\ntext-transform: uppercase;\nfont-size: 5rem;\nmargin-bottom: 2rem;\ncolor: ##000000;\n}\nh2 {\ntext-transform: uppercase;\nfont-size: 1.5rem;\nmargin-bottom: 1rem;\ncolor: ##000000;\n}.button {\n  border-radius: 15px;\nbackground-color: #4CAF50; \n  border: none;\n  color: white;\n  padding: 16px 32px;\n text-align: center;\n text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n margin: 4px 2px;\n transition-duration: 0.4s;\n cursor: pointer;\n  }\n.btnEvento{\nbackground-color: white; \ncolor: black; \n border: 2px solid #008CBA;\n }\n .btnEvento:hover {\n background-color: #008CBA;\n color: white;\n }\n   }"
               
        }}
      />

        </>
    );

}
