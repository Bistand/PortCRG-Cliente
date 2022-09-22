import React, { useState } from "react";
import InformativeModal from "../components/InformativeModal";
import { BiImage } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import DeleteEventModal from "./DeleteEventModal";

function EventsCard({ event }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenDel, setIsOpenDel] = useState(false);
  let [dataModal, setDataModal] = useState({});

  return (
    <>
      <div className="border-2 p-4 rounded-lg">
        <div
          onClick={() => {
            setIsOpen(true);
            setDataModal(event);
          }}
        >
          <h1 className="font-inter font-semibold text-left sm:text-md 2xl:text-lg mb-2 text-dark-cadet-blue">
            {event.title}
          </h1>
          <p className="truncate mb-2">{event.description}</p>
        </div>
        <div className="text-dark-cadet-blue">
          <div className="flex justify-between">
            {event.hasOwnProperty("image") && event.image != "" ? (
              <span className="lg:place-items-center flex">
                <BiImage size={"24px"} className="mr-2"></BiImage>
                <p>{event.dateEvent.substring(0, 10)}</p>
              </span>
            ) : (
              <p>{event.dateEvent.substring(0, 10)}</p>
            )}
            <button
              onClick={() => {
                setIsOpenDel(true);
                setDataModal(event);
              }}
            >
              <BsTrash size={"20px"} className="text-red-800 my-1"></BsTrash>
            </button>
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
    </>
  );
}

export default EventsCard;
