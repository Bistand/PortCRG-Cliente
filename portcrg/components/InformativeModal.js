import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEvents } from "../context/eventContext";
import Image from "next/image";
import axios from "axios";

function InformativeModal({ isOpen, setIsOpen, data }) {
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
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="grid grid-cols-3 gap-4">
              {data.hasOwnProperty("image") && data.image != "" ? (
                <>
                  <div className="col-span-2">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {data.title}
                    </Dialog.Title>
                    <p>{data.description} </p>
                  </div>
                  <div className="h-40 relative mb-4">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={data.image}
                      className="object-cover rounded-lg"
                    ></Image>
                  </div>
                </>
              ) : (
                <div className="col-span-3 mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data.title}
                  </Dialog.Title>
                  <p>{data.description} </p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="justify-end w-1/4 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cerrar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default InformativeModal;
