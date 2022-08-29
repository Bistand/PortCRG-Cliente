import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex gap-x-3 sm:mx-12 sm:my-7">
        <div className="basis-7/12">
          <span>ABCDEFG</span>
        </div>
        <div className="basis-5/12 relative">
          <img
            src="https://images.pexels.com/photos/6565751/pexels-photo-6565751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover rounded-3xl h-60 sm:h-auto"
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
