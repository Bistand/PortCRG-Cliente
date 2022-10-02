import React, { useState } from "react";
import InformativeModal from "../components/InformativeModal";
import { BiImage } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import DeleteEventModal from "./DeleteEventModal";
import AddEventModal from "./AddEventModal";

function EventsCard({ event }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenDel, setIsOpenDel] = useState(false);
  let [isOpenAdd, setIsOpenAdd] = useState(false);
  let [dataModal, setDataModal] = useState({});

  return (
    <>
      <div className="border-2 p-4 rounded-lg hover:shadow-md flex flex-col justify-between">
        <div
          onClick={() => {
            setIsOpen(true);
            setDataModal(event);
          }}
        >
          <h1 className="font-inter font-semibold text-left sm:text-md 2xl:text-lg mb-2 truncate text-dark-cadet-blue">
            {event.title}
          </h1>
          <p className="truncate mb-3">{event.description}</p>
        </div>
        <div className="text-dark-cadet-blue">
          <div className="flex justify-between">
            {event.hasOwnProperty("image") && event.image != "" ? (
              <span className="lg:place-items-center flex">
                <BiImage size={"24px"} className="mr-2"></BiImage>
                {event.hasOwnProperty("dateEvent") &&
                event.dateEvent != null ? (
                  <p>{event.dateEvent.substring(0, 10)}</p>
                ) : null}
              </span>
            ) : (
              <>
                {event.hasOwnProperty("dateEvent") &&
                event.dateEvent != null ? (
                  <p>{event.dateEvent.substring(0, 10)}</p>
                ) : null}
              </>
            )}
            <div>
              <button
                className="has-tooltip mr-4 "
                onClick={() => {
                  setIsOpenAdd(true);
                  setDataModal(event);
                }}
              >
                <span className="tooltip rounded-md shadow-md p-1 bg-green-50 text-dark-cadet-blue -mt-8">
                  Editar
                </span>
                <FiEdit3
                  size={"20px"}
                  className="text-dark-cadet-blue my-1"
                ></FiEdit3>
              </button>
              <button
                className="has-tooltip"
                onClick={() => {
                  setIsOpenDel(true);
                  setDataModal(event);
                }}
              >
                <span className="tooltip rounded-md shadow-md p-1 bg-red-50 text-red-800 -mt-8">
                  Eliminar
                </span>
                <BsTrash size={"20px"} className="text-red-800 my-1"></BsTrash>
              </button>
            </div>
          </div>
        </div>
      </div>
      <InformativeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={dataModal}
      />

      <DeleteEventModal
        isOpen={isOpenDel}
        setIsOpen={setIsOpenDel}
        data={dataModal}
      />

      <AddEventModal
        isOpen={isOpenAdd}
        setIsOpen={setIsOpenAdd}
        data={dataModal}
      />
    </>
  );
}

export default EventsCard;
