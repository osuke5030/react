import { Main } from "../components/Main/Main";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import classes from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";

// 新たな変数を関数内で使う場合、変数がコンポーネント内で定義されていたら関数をコンポーネント外で定義するとエラーとなる
// コンポーネント内で定義するとレンダリングされると関数も再生成される→解決策useCallBackを使う

const Home = (props) => {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleAdd,
    handleChange,
  } = props;
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <div className={classes.button}>
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示 " : "表示"}</button>
      </div>
      <input
        className={classes.input}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>追加</button>
      <ul className={classes.list}>
        {array?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
