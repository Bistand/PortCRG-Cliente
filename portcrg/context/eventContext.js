import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

const EventContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState([]);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [privileges, setPrivileges] = useState(3);
  const tokenuser = getCookie("tokenuser");

  useEffect(() => {
    const ObtenerEventos = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tokenuser}`,
          },
        };
        const { data } = await axios(
          "https://portcrg.onrender.com/api/informativa/",
          config
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

  useEffect(() => {
    getUserAuth();
  }, [privileges]);

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
          Authorization: `Bearer ${tokenuser}`,
        },
      };
      const { data } = await axios.post(
        "https://portcrg.onrender.com/api/informativa/",
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
          Authorization: `Bearer ${tokenuser}`,
        },
      };
      const { data } = await axios.put(
        "https://portcrg.onrender.com/api/informativa/area",
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
          Authorization: `Bearer ${tokenuser}`,
        },
      };
      const response = await axios.delete(
        "https://portcrg.onrender.com/api/informativa/area",
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

  const getUserAuth = async () => {
    try {
      const config = {
        headers: {
          "auth-token": tokenuser,
        },
      };
      const { data } = await axios.get(
        "https://portcrg.onrender.com/api/admin",
        config
      );
      setPrivileges(data.data.user.privileges);
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
        privileges,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
export const useEvents = () => {
  return useContext(EventContext);
};
