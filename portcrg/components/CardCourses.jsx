import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CardCourses = ({ _id, name, description, photographyURL }) => {
  let router = useRouter();
  function redirect() {
    router.push(`/courses/${_id}`);
  }
  return (
    <div
      className="flex flex-col mx-4 justify-between items-center bg-slate-100 rounded-md mt-8 hover:shadow-lg hover:bg-slate-200"
      onClick={() => {
        redirect();
      }}
    >
      <div className="lg:h-80 md:h-80 w-full h-fit pb-2">
        <div className="rounded-t-md h-48 w-full relative mb-4">
          {photographyURL ? (
            <Image
              src={photographyURL}
              alt=""
              className="rounded-t-md object-cover"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Image
              src="https://i.ibb.co/zXgqRtP/Portada.png"
              alt=""
              className="rounded-t-md object-cover"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="text-center mb-2">
          <Link href={"/courses/" + _id} passHref>
            <a className="font-bold spa my-2 marker:bg-transparent hover:underline text-cadet-blue pt-1 pl-1 pr-2 rounded line-clamp-1">
              {name}
            </a>
          </Link>
        </div>
        <p className="mx-3 line-clamp-3 text-left">{description}</p>
      </div>
    </div>
  );
};

export default CardCourses;
