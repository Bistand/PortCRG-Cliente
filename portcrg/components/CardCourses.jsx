import React from "react";
import Image from "next/image";

const CardCourses = ({ _id, name, description, photographyURL }) => {
  return (
    <section className="mx-4 ">
      <div className="bg-slate-100">
        <div className="flex flex-col justify-center items-center bg-slate-100 rounded-md mb-8 mt-24">
          <div className=" rounded-2xl">
            {photographyURL ? (
              <Image
                src={photographyURL}
                alt=""
                className="rounded-2xl"
                width={300}
                height={200}
              />
            ) : (
              <Image
                src="https://i.ibb.co/zXgqRtP/Portada.png"
                alt=""
                className="rounded-2xl"
                width={300}
                height={200}
              />
            )}
          </div>
          <p className="font-bold spa my-2">{name}</p>
          <p>{description}</p>
        </div>

        <button
          className="bg-dark-cadet-blue px-4 py-3 text-white uppercase
            font-bold text-sm rounded-lg text-start"
          // onClick={() => handleEditarTarea(tarea)}
        >
          Editar
        </button>
      </div>
    </section>
  );
};

export default CardCourses;
