import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { getCookie } from "cookies-next";

const UserContext = createContext();

export const UsersProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const authToken = getCookie("tokenuser");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        };
        const { data } = await axios(
          "https://portcrg-dev.onrender.com/api/user",
          config
        );
        setUsersList(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const UpdatePermissions = async (user, privilegeChoice) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const body = {
        privileges: privilegeChoice,
      };
      const { data } = await axios.post(
        `https://portcrg-dev.onrender.com/api/user/updatePrivileges/${user._id}`,
        body,
        config
      );
      const updatedUsersList = usersList.map((userUpdate) =>
        userUpdate._id === user._id ? data.data : userUpdate
      );
      setUsersList(updatedUsersList);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Permisos actualizados correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No se ha podido actualizar los permisos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        usersList,
        loading,
        UpdatePermissions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUsers = () => {
  return useContext(UserContext);
};
