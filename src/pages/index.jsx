import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { useState, useCallback, useEffect } from "react";
import Posts from "../components/Posts";

// 新たな変数を関数内で使う場合、変数がコンポーネント内で定義されていたら関数をコンポーネント外で定義するとエラーとなる
// コンポーネント内で定義するとレンダリングされると関数も再生成される→解決策useCallBackを使う

const Home = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <Posts />
    </div>
  );
};

export default Home;
