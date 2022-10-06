import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href={"/courses/" + _id} passHref className="">
            <a className="font-bold spa my-2 marker:bg-transparent hover:underline text-cadet-blue pt-1 px-4 rounded text-right ">
              {name}
            </a>
          </Link>

          <p>{description}</p>
        </div>
        <div className="flex flex-row justify-between">
          
        </div>
      </div>
    </section>
  );
};

export default CardCourses;
