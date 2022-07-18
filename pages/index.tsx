import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../common/components/MainPage/Masthead";
import Navbar from "../common/components/MainPage/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Navbar />
      <Masthead />
    </>
  );
};

export default Home;
