import { useRef, useState } from "react";

export default function FormCourses({ setOpen, setAlert, product }) {
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {};

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                defaultValue={product?.title}
                type="text"
                name="title"
                id="title"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Duracion meses
              </label>
              <input
                defaultValue={product?.title}
                type="number"
                name="title"
                id="duracion"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                //   value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium "
              >
                Fecha de Inicio
              </label>
              <input
                defaultValue={product?.price}
                type="date"
                name="price"
                id="price"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Finalizacion
              </label>
              <input
                defaultValue={product?.price}
                type="date"
                name="price"
                id="price"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium placeholder-red-400"
              >
                Habilitar Diploma
              </label>

              <div className="grid grid-cols-2 ">
                <label className=" px-16">SI</label>
                <input
                  defaultValue={product?.title}
                  type="radio"
                  name="title"
                  id="title"
                  className="border-2 border-rose-300 w-full mx-0 placeholder-red-400 rounded-md"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div className="grid  border-rose-200 grid-cols-2 mt-4">
                <label className=" px-16">No</label>
                <input
                  defaultValue={product?.title}
                  type="radio"
                  name="title"
                  id="title"
                  className="border-2 border-rose-300 w-full mx-0 placeholder-red-400 rounded-md"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium placeholder-red-400"
              >
                Nombre del Instructor
              </label>
              <input
                defaultValue={product?.title}
                type="text"
                name="title"
                id="title"
                className="border-2  border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                // value={stock}
                // onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium placeholder-red-400"
              >
                Numero de participantes
              </label>
              <input
                defaultValue={product?.title}
                type="number"
                name="title"
                id="title"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400rounded-md"
                // value={stock}
                // onChange={(e) => setStock(e.target.value)}
              />
            </div>

            
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium placeholder-red-400"
              >
                Modalidad
              </label>
              <select
                id="category"
                name="category"
                defaultValue={product?.category}
                autoComplete="category-name"
                className="mt-1 block w-full border-rose-300 py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:placeholder-red-400 focus:border-placeholder-red-400 sm:text-sm text-black"
              >
                <option value="1">Presencial</option>
                <option value="1">Virtual</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium placeholder-red-400"
              >
                Plataforma
              </label>
              <select
                id="category"
                name="category"
                defaultValue={product?.category}
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-rose-300 bg-white rounded-md shadow-sm focus:outline-none focus:placeholder-red-400 focus:border-placeholder-red-400 sm:text-sm text-black"
              >
                <option value="1">Ninguno</option>
                <option value="1">Meet</option>
                <option value="1">Zoom</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </label>
              <select
                id="category"
                name="category"
                defaultValue={product?.category}
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-rose-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-black"
              >
                <option value="1">Cancelado</option>
                <option value="1">Habilitado</option>
                <option value="1">Reprogramado</option>
                <option value="1">Terminado</option>
              </select>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium placeholder-red-400"
              >
                Descripcion
              </label>
              <textarea
                defaultValue={product?.title}
               
                name="title"
                id="title"
                className="border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Imagen de Portada
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 placeholder-red-400 border-dashed border-rose-300 rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 placeholder-red-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer border bg-white rounded-md font-medium text-placeholder-red-400 hover:text-placeholder-red-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-placeholder-red-400"
                      >
                        <span>Actualizar Imagen</span>
                        <input
                          defaultValue={product?.images}
                          id="images"
                          name="images"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">Cargar Imagen</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className=" bg-cherry-red inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
