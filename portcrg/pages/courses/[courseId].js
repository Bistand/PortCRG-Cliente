import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RightBarCourse from "../../components/RightBarCourse";
import LeftInfoCourse from "../../components/LeftInfoCourse";

const cursoPruebaJson = {
  name: "Curso de primeros auxilios",
  startDate: "22/09/22",
  endDate: "12/10/22",
  description:
    "Curso en el cual se impartiran los conocimientos básicos para brindar primeros auxilios para cualquier accidente que ocurra.",
  duration: 10,
  diploma: false,
  instructor: "Lic. Leonel Salas",
  modality: 2,
  photography:
    "https://images.pexels.com/photos/6520061/pexels-photo-6520061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  amountOfParticipants: 30,
  status: 2,
  sede: "Delegación Quetzaltenango",
  temario: "",
  platform: "Microsoft Teams",
  hora: "16:00",
  prerequisitos: ["Curso 1", "Curso 2"],
};

function courseDetails() {
  const router = useRouter();
  const courseId = router.query.courseId;
  return (
    <>
      <Head>
        <title>{cursoPruebaJson.name}</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Navbar></Navbar>
        <div className="flex flex-row justify-center items-center my-8">
          <div className="grid grid-cols-5 gap-10 lg:gap-8 w-4/5 3xl:w-2/3">
            {/* LeftInfoCourse */}
            <div className="col-span-3">
              <LeftInfoCourse course={cursoPruebaJson}></LeftInfoCourse>
            </div>
            {/* LeftInfoCourse */}
            {/* RightBarCourse */}
            <div className="col-span-2 px-4">
              <RightBarCourse course={cursoPruebaJson}></RightBarCourse>
            </div>
            {/* RightBarCourse */}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default courseDetails;
