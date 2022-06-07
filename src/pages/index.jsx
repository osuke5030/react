import { Main } from "../components/Main/Main";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import classes from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
