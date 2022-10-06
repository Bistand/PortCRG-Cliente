import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEvents } from "../context/eventContext";

function DeleteEventModal({ isOpen, setIsOpen, data }) {
  const { handleDeleteEvent } = useEvents();
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                ¿Seguro que desea eliminar este evento?
              </Dialog.Title>
            </div>
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
            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default DeleteEventModal;
