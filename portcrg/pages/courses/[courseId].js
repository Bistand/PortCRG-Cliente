import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CourseSpecInfo from "../../components/CourseSpecInfo";
import CourseGenInfo from "../../components/CourseGenInfo";

const cursoPruebaJson = {
  name: "Curso de primeros auxilios",
  startDate: "22/09/22",
  endDate: "12/10/22",
  description:
    "Curso en el cual se impartiran los conocimientos básicos para brindar primeros auxilios para cualquier accidente que ocurra.",
  duration: 10,
  diploma: false,
  instructor: "Lic. Leonel Salas",
  modality: 1,
  photographyURL:
    "https://images.pexels.com/photos/6520061/pexels-photo-6520061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  amountOfParticipants: 30,
  status: 1,
  sede: "Delegación Quetzaltenango",
  temario: "",
  platform: "Microsoft Teams",
  hora: "16:00",
  prerequisitos: ["Curso 1", "Curso 2"],
};

function courseDetails({ data }) {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center my-8">
            <div className="grid grid-cols-5 gap-10 lg:gap-8 w-4/5 3xl:w-2/3">
              {/* CourseGenInfo */}
              <div className="col-span-3">
                <CourseGenInfo course={data}></CourseGenInfo>
              </div>
              {/* CourseGenInfo */}
              {/* CourseSpecInfo */}
              <div className="col-span-2 px-4">
                <CourseSpecInfo course={data}></CourseSpecInfo>
              </div>
              {/* CourseSpecInfo */}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 my-6">
              <CourseGenInfo course={data}></CourseGenInfo>
              <CourseSpecInfo course={data}></CourseSpecInfo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { courseId } = params;

  const response = await fetch(
    `https://portcrg-dev.onrender.com/api/courses/id`,
    {
      headers: {
        id: courseId,
      },
    }
  );
  const { data } = await response.json();
  return { props: { data } };
}

export default courseDetails;
