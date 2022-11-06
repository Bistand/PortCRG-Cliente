import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CourseSpecInfo from "../../components/CourseSpecInfo";
import CourseGenInfo from "../../components/CourseGenInfo";
import TablaAsignados from "../../components/TablaAsignados";

function courseDetails({ data }) {
  console.log(data);
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>{data.courses.name}</title>
      </Head>

      <div>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center my-8">
            <div className="grid grid-cols-5 gap-10 lg:gap-8 w-4/5 3xl:w-2/3">
              {/* CourseGenInfo */}
              <div className="col-span-3">
                <CourseGenInfo course={data.courses}></CourseGenInfo>
              </div>
              {/* CourseGenInfo */}
              {/* CourseSpecInfo */}
              <div className="col-span-2 px-4">
                <CourseSpecInfo course={data.courses}></CourseSpecInfo>
              </div>
              {/* CourseSpecInfo */}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 my-6">
              <CourseGenInfo course={data.courses}></CourseGenInfo>
              <CourseSpecInfo course={data.courses}></CourseSpecInfo>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-4">
        <TablaAsignados participantes={data.participantes} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { courseId } = params;
  const cookie = context.req.cookies.tokenuser;

  const response = await fetch(
    `https://portcrg-dev.onrender.com/api/courses/id`,
    {
      headers: {
        id: courseId,
        Authorization: `Bearer ${cookie}`,
      },
    }
  );

  const { data } = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}

export default courseDetails;
