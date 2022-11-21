import { useEffect, useState } from "react";
import useCourses from "../hooks/useCourses";

export default function FormCourses({ setModal, course }) {
  const [_id, setId] = useState("")
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [diploma, setDiploma] = useState("");
  const [instructor, setInstructor] = useState("");
  const [modality, setModality] = useState("");
  const [amountOfParticipants, setAmountOfParticipants] = useState("");
  const [status, setStatus] = useState("");
  const [photographyURL, setPhotographyURL] = useState("");
  const [temarioURL, setTemarioURL] = useState("");
  // const [sede, setSede] = useState("");
  const [platform, setPlatform] = useState("");
  // const [prerequisitos, setPrerequisitos] = useState("");
  const { Course } = useCourses();

  useEffect(() => {
    if (course?._id) {
      setId(course._id)
      setName(course.name);
      setStartDate(course.startDate.split("T")[0]);
      setEndDate(course.endDate.split("T")[0]);
      setDescription(course.description);
      setDuration(course.duration);
      setDiploma(course.diploma);
      setInstructor(course.instructor);
      setModality(course.modality);
      setAmountOfParticipants(course.amountOfParticipants);
      setStatus(course.status);
      setPhotographyURL(course?.photographyURL);
      setPlatform(course.platform);

      return;
    }

    setId("")
    setName("");
    setStartDate("")
    setEndDate("")
    setDescription("")
    setDuration("")
    setDiploma("")
    setInstructor("")
    setModality("")
    setAmountOfParticipants("")
    setStatus("")
    setPhotographyURL("")
    setPlatform("")
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Course({
      
      name,
      startDate,
      endDate,
      description,
      duration,
      diploma,
      instructor,
      modality,
      amountOfParticipants,
      status,
      photographyURL,
      temarioURL,
      platform,
    }, _id);

    setModal(false);

 
  };

  const handleImagenChange = (e) => {
    setPhotographyURL(e.target.files[0]);
  };
  const handleTemarioChange = (e) => {
    setTemarioURL(e.target.files[0]);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-xl font-bold text-black"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-xl font-bold text-black"
              >
                Duracion meses
              </label>
              <input
                type="number"
                id="duracion"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label htmlFor="price" className="block text-xl font-bold text-black">
                Fecha de Inicio
              </label>
              <input
                type="date"
                id="fecha"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="fecha-finalizacion"
                className="block text-xl font-bold text-black"
              >
                Fecha de Finalizacion
              </label>
              <input
                type="date"
                id="endStart"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-xl font-bold text-black"
              >
                Estado
              </label>
              <select
                id="category"
                name="category"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                autoComplete="category-name"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
              >
                <option>-- Seleccionar --</option>
                <option value="1">Cancelado</option>
                <option value="2">Habilitado</option>
                <option value="3">Reprogramado</option>
                <option value="4">Terminado</option>
              </select>
            </div>

           

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Nombre-instructor"
                className="block text-xl font-bold text-black "
              >
                Nombre del Instructor
              </label>
              <input
                type="text"
                name="Nombre"
                id="nameInstructor"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Numero-participantes"
                className="block text-xl font-bold text-black"
              >
                Numero de participantes
              </label>
              <input
                type="number"
                id="Numero-participantes"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={amountOfParticipants}
                onChange={(e) => setAmountOfParticipants(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="Modalidad"
                className="block text-xl font-bold text-black"
              >
                Modalidad
              </label>
              <select
                id="Modalidad-id"
                value={modality}
                onChange={(e) => setModality(e.target.value)}
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
              >
                <option>-- Seleccionar --</option>
                <option value="1">Virtual</option>
                <option value="2">Presencial</option>
                <option value="3">Hibrido</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="Habilitar"
                className="block text-xl font-bold text-black"
              >
                Habilitar Diploma
              </label>

              <select
                id="Habilitar-diploma"
                value={diploma}
                onChange={(e) => setDiploma(e.target.value)}
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
              >
                <option>-- Seleccionar --</option>
                <option value={true}>SI</option>
                <option value={false}>NO</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="plataforma"
                className="block text-xl font-bold text-black"
              >
                Plataforma
              </label>
              <select
                id="plataforma"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
              >
                <option>-- Seleccionar --</option>
                <option>Ninguno</option>
                <option value="Meet">Meet</option>
                <option value="Zoom">Zoom</option>
                <option value="Teams">Teams</option>
                <option value="Google Duo">Google Duo</option>
              </select>
            </div>

         

            <div className="col-span-6">
              <label
                htmlFor="title"
                className="block text-xl font-bold text-black"
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
                id="Descripcion"
                className="text-sm border-2 border-rose-200 w-full p-2 mt-2 placeholder-red-400 rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <div>
                <label className="block text-xl font-bold text-black">
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
                          id="upload-files"
                          autoComplete="off"
                          type="file"
                          name="image"
                          accept="image/*"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                          onChange={(e) => handleImagenChange(e)}
                        ></input>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div>
                <label className="block text-xl font-bold text-black">
                  Subir Temario
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

                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer border bg-white rounded-md font-medium text-placeholder-red-400 hover:text-placeholder-red-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-placeholder-red-400"
                      >
                        <span>Actualizar Temario</span>
                        <input
                          id="upload-pdf"
                          autoComplete="off"
                          type="file"
                          name="pdf"
                          accept="pdf/*"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                          onChange={(e) => handleTemarioChange(e)}
                        ></input>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF 10MB
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
