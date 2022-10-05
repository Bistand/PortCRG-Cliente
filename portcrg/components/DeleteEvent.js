import React from "react";
import { useEvents } from "../context/eventContext";

export default function DeleteEvent({ setIsOpen, data }) {
  const { handleDeleteEvent } = useEvents();
  return (
    <div className="flex justify-end gap-4 mt-4">
      <button
        className="justify-end w-1/4 rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none"
        onClick={() => {
          handleDeleteEvent(data._id);
          setIsOpen(false);
        }}
      >
        Eliminar
      </button>
      <button
        className="justify-end w-1/4 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Cerrar
      </button>
    </div>
  );
}
