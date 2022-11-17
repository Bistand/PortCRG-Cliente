import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsCard from "../components/EventsCard";
import { useEvents } from "../context/eventContext";
import AddEventModal from "../components/AddEventModal";
import { getCookie } from "cookies-next";

import Link from "next/link";
import Head from "next/head";

const informative = () => {
  const { eventsList, loading, privileges } = useEvents();
  let [isOpen, setIsOpen] = useState(false);
  let [dataModal, setDataModal] = useState({});
  const authToken = getCookie("tokenuser");

  if (loading) {
    return (
      <div className="flex flex-row justify-center">
        <h2>Cargando eventos ...</h2>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Área informativa</title>
      </Head>
      <h1 className="font-inter font-bold text-center text-xl sm:text-3xl 2xl:text-4xl py-4 text-dark-cadet-blue">
        Eventos de Actividades
      </h1>
      <hr></hr>
      <div className="flex flex-col items-center my-8">
        <div className="flex flex-row justify-between w-2/3 mb-8">
          <Link href="/calendario">
            <a className=" flex items-center bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Ver Calendario
            </a>
          </Link>
          {privileges == 1 || privileges == 2 ? (
            <>
              {/* BOTON PARA REDIRIGIR A CALENDARIO */}

              <button
                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Agregar actividad
              </button>
            </>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-10 w-3/4 xl:w-2/3">
          {eventsList.length ? (
            eventsList
              .map((event) => {
                return (
                  <EventsCard
                    key={event._id}
                    event={event}
                    privileges={privileges}
                  />
                );
              })
              .reverse()
          ) : (
            <div className="md:col-span-2 xl:col-span-3 text-center">
              No se han agregado eventos.
            </div>
          )}
        </div>
      </div>
      <AddEventModal isOpen={isOpen} setIsOpen={setIsOpen} data={dataModal} />
    </>
  );
};

export default informative;
