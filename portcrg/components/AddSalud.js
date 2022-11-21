import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEvents } from "../context/eventContext";

function AddEventSalud({ isOpen, setIsOpen, data }) {
  const { handleInputSubmit } = useEvents();
  const [formData, setFormData] = useState({
    enfermedad: "",
    medicamento: "",
    incapacidad: "",
  });

  const clearData = () => {
    setFormData({
      enfermedad: "",
      medicamento: "",
      incapacidad: "",
    });
  };

  const setValues = (data) => {
    if (data.dateEvent != undefined) {
      setFormData({
        enfermedad: data.enfermedad,
        medicamento: data.medicamento,
        incapacidad: data.incapacidad,
        //     dateEventF: data.dateEventF.substring(0,10),
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagenChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await handleInputSubmit(data._id, formData);
    clearData();
  };

  useEffect(() => {
    setValues(data);
  }, [isOpen]);

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
            <div className="flex flex-row justify-between">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Actualizar Salud
              </Dialog.Title>
              <button
                className="justify-end rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none"
                onClick={() => {
                  clearData();
                  setIsOpen(false);
                }}
              >
                X
              </button>
            </div>

            <form id="form" className="space-y-6" onSubmit={handleAdd}>
              <div>
                <div className="sticky top-4 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enfermedad
                  </label>
                  <input
                    type="text"
                    name="enfermedad"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    value={formData.enfermedad}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Medicamento
                  </label>
                  <input
                    type="text"
                    name="medicamento"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    value={formData.medicamento}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Incapacidad
                  </label>
                  <input
                    type="text"
                    name="incapacidad"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    value={formData.incapacidad}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-cherry-red hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Actualizar datos
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AddEventSalud;
