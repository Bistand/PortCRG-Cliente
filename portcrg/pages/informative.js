import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsCard from "../components/EventsCard";
import { useEvents } from "../context/eventContext";

const informative = () => {
  const { eventsList, loading } = useEvents();

  if (loading) {
    return (
      <div className="flex flex-row justify-center">
        <h2>Cargando eventos ...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-3/4 xl:w-2/3">
          {eventsList.map((event) => {
            return <EventsCard key={event._id} event={event} />;
          })}
        </div>
      </div>
    </>
  );
};

export default informative;
