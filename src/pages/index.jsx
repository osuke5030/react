import { Main } from "../components/Main/Main";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import classes from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { useCallback } from "react";

// 新たな変数を関数内で使う場合、変数がコンポーネント内で定義されていたら関数をコンポーネント外で定義するとエラーとなる
// コンポーネント内で定義するとレンダリングされると関数も再生成される→解決策useCallBackを使う

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
