import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import HomePage from "../feature/HomePage";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.add(styles.bodyTag);
  });

  return (
    <div className={styles.main}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
        <title>FatCat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
