import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import UsersCard from "../../components/UsersCard.jsx";
import DeleteEventModal from "../../components/DeleteEventModal";
import styles from "../../styles/Sing_up.module.css";
import Head from "next/head.js";
import { useUsers } from "../../context/userContext.jsx";

function index() {
  const { usersList, loading } = useUsers();
  const [filter, setFilter] = useState("");
  const [occupationSelected, setOccupationSelected] = useState(0);

  if (loading) {
    return (
      <>
        <Head>
          <title>Usuarios</title>
        </Head>
        <div className="flex flex-row justify-center">
          <h2>Cargando usuarios...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className="flex flex-col items-center my-8">
        <div className="flex flex-col md:flex-row justify-end  w-3/4 xl:w-2/3 mb-4">
          <div className="rounded-sm border-2 bg-dragon-white mr-2 mb-2 md:mb-0 w-fit ">
            <select
              name="List1"
              id="sel"
              value={occupationSelected}
              onChange={(e) => setOccupationSelected(e.target.value)}
              className={"h-10 border-0 bg-dragon-white selection:border-0"}
              required
            >
              <option value={0} defaultValue>
                {" "}
                Todas las ocupaciones
              </option>
              <option value={1}>Voluntario General</option>
              <option value={2}>Socorrista</option>
              <option value={3}>Juventino</option>
              <option value={4}>Personal Asalariado</option>
              <option value={5}>Dama Voluntaria</option>
              <option value={6}>Administrador</option>
            </select>
            <div className={""}></div>
          </div>
          <div className="inputForm-group">
            <input
              value={filter || ""}
              required
              type="text"
              autoComplete="off"
              className="border-2 rounded-md inputForm"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
            <label className="user-label">Buscar por nombre</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-10 w-3/4 xl:w-2/3">
          {usersList
            //
            .filter((user) => {
              return (
                (user.fullName.toLowerCase().includes(filter.toLowerCase()) &&
                  occupationSelected == 0) ||
                (user.fullName.toLowerCase().includes(filter.toLowerCase()) &&
                  user.occupation == occupationSelected)
              );
            })
            .map((filteredUser) => {
              return (
                <UsersCard
                  key={filteredUser._id}
                  user={filteredUser}
                ></UsersCard>
              );
            })
            .sort((a, b) => {
              if (a.props.user.attendaceStatus > b.props.user.attendaceStatus) {
                return 1;
              } else if (
                a.props.user.attendaceStatus < b.props.user.attendaceStatus
              ) {
                return -1;
              } else {
                return 0;
              }
            })
            .reverse()}
        </div>
      </div>
    </>
  );
}

export default index;
