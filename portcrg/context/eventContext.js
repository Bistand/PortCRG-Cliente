import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const EventContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState([]);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ObtenerEventos = async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          "https://portcrg-dev.onrender.com/api/informativa/"
        );
        setEventsList(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    ObtenerEventos();
  }, []);

  const handleDeleteEvent = async (id) => {
    try {
      const config = {
        headers: {
          id: id,
        },
      };
      const response = await axios.delete(
        "https://portcrg-dev.onrender.com/api/informativa/area",
        config
      );
      const updatedEvents = eventsList.filter(
        (currentEvent) => currentEvent._id !== id
      );
      setEventsList(updatedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventContext.Provider
      value={{ eventsList, event, loading, handleDeleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};
export const useEvents = () => {
  return useContext(EventContext);
};
