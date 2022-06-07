import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
      </Head>

      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
