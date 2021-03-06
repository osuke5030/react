import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";

const About = (props) => {
  const {
    doubleCount,
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
        <title>About page</title>
      </Head>

      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
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
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
