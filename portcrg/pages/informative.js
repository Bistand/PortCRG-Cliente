import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsCard from "../components/EventsCard";
import { useEvents } from "../context/eventContext";
import AddEventModal from "../components/AddEventModal";

const informative = () => {
  const { eventsList, loading } = useEvents();
  let [isOpen, setIsOpen] = useState(false);
  let [dataModal, setDataModal] = useState({});

  if (loading) {
    return (
      <div className="flex flex-row justify-center">
        <h2>Cargando eventos ...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center my-8">
        <div className="flex flex-row justify-between w-2/3 mb-8">
          <p className="font-inter font-bold text-left text-xl sm:text-3xl 2xl:text-4xl mb-2 text-dark-cadet-blue">
            Eventos
          </p>
          <button
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Agregar evento
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-3/4 xl:w-2/3">
          {eventsList.map((event) => {
            return <EventsCard key={event._id} event={event} />;
          })}
        </div>
      </div>
      <AddEventModal isOpen={isOpen} setIsOpen={setIsOpen} data={dataModal} />
    </>
  );
};

export default informative;
