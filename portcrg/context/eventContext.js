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

  const handleInputSubmit = async (id, data) => {
    if (id != undefined) {
      handleUpdateEvent(id, data);
    } else {
      handleAddEvent(data);
    }
  };

  const handleAddEvent = async (evento) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "https://portcrg-dev.onrender.com/api/informativa/",
        evento,
        config
      );
      setEventsList([...eventsList, data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateEvent = async (id, evento) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          id: id,
        },
      };
      const { data } = await axios.put(
        "https://portcrg-dev.onrender.com/api/informativa/area",
        evento,
        config
      );
      const updatedEvents = eventsList.map((event) =>
        event._id === id ? data.data : event
      );
      setEventsList(updatedEvents);
    } catch (error) {
      console.log(error);
    }
  };

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
      value={{
        eventsList,
        event,
        loading,
        handleDeleteEvent,
        handleInputSubmit,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
export const useEvents = () => {
  return useContext(EventContext);
};
