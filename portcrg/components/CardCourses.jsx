import React from "react";
import Image from "next/image";

const CardCourses = ({ _id, name, description, photographyURL }) => {
    // photographyURL = "https://res.cloudinary.com/dzdoi1gfv/image/upload/v1663377085/PortCRG/byf2sfbs3csrww7jxfdf.jpg"
  return (
    <section className="mx-4 ">
      <div className="flex flex-col justify-center items-center bg-slate-500 rounded-md mb-8">
        <div className=" rounded-2xl">
          <Image src={photographyURL} alt="" className="rounded-2xl" width={250} height={200} />
        </div>
        <p className="font-bold spa my-2">{name}</p>

        <p>{description}</p>
      </div>
    </section>
  );
};

export default CardCourses;
