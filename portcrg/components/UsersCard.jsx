import React, { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import DeleteEventModal from "./DeleteEventModal";
import ManagePermissions from "./ManagePermissions";
import { useEvents } from "../context/eventContext";
function UsersCard({ user }) {
  const { privileges } = useEvents();
  const [isOpenDel, setIsOpenDel] = useState(false);
  let [dataModal, setDataModal] = useState({});

  return (
    <>
      <div className="border-2 p-4 rounded-lg hover:shadow-md flex flex-col justify-between">
        <p className="font-bold text-base text-dark-cadet-blue truncate">
          {user.fullName}
        </p>
        <div className="text-slate-500 text-sm mb-1">
          {user.occupation === 1 ? (
            <p>Voluntario General</p>
          ) : user.occupation === 2 ? (
            <p>Socorrista</p>
          ) : user.occupation === 3 ? (
            <p>Juventino</p>
          ) : user.occupation === 4 ? (
            <p>Personal asalariado</p>
          ) : user.occupation === 5 ? (
            <p>Dama Voluntaria</p>
          ) : user.occupation === 6 ? (
            <p>Administrador</p>
          ) : null}
        </div>
        <span className="flex items-center mb-1 text-slate-500 text-sm">
          <BsTelephone size={"16"} className="mr-2"></BsTelephone>
          <p>{user.phoneNumber}</p>
        </span>
        <span className="flex items-center mb-1 text-slate-500 text-sm">
          <AiOutlineMail size={"16"} className="mr-2 mt-1"></AiOutlineMail>
          <p>{user.email}</p>
        </span>
        <div className="flex w-full">
          {user.attendaceStatus ? (
            <div className="flex flex-row justify-between w-full">
              <span className="flex items-center text-green-600">
                <AiOutlineCheckCircle
                  size={"16"}
                  className="mr-2 mt-1"
                ></AiOutlineCheckCircle>
                <p>Activo</p>
              </span>
            </div>
          ) : (
            <div className="flex flex-row justify-between w-full">
              <span className="flex items-center text-red-600">
                <AiOutlineCloseCircle
                  size={"16px"}
                  className="mr-2 mt-1"
                ></AiOutlineCloseCircle>
                <p>Inactivo</p>
              </span>
            </div>
          )}
          {privileges == 1 ? (
            <button
              className="has-tooltip"
              onClick={() => {
                setIsOpenDel(true);
                setDataModal(user);
              }}
            >
              <span className="tooltip rounded-md shadow-md p-1 bg-slate-100 text-dark-cadet-blue -mt-8">
                Modificar privilegios
              </span>
              <FaUserEdit
                size={"20px"}
                className="text-dark-cadet-blue my-1"
              ></FaUserEdit>
            </button>
          ) : null}
        </div>
      </div>
      <DeleteEventModal
        isOpen={isOpenDel}
        setIsOpen={setIsOpenDel}
        name={"Cambio de privilegios"}
      >
        <ManagePermissions
          data={dataModal}
          setIsOpen={setIsOpenDel}
        ></ManagePermissions>
      </DeleteEventModal>
    </>
  );
}

export default UsersCard;
