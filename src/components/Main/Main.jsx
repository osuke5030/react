import classes from "./Main.module.css";
import { Headline } from "../Headline/Headline";
import { Links } from "../Links/Links";
import { useCallback } from "react";
import { useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "ocumentation→",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn→",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples→",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy→",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  });

  return (
    <main className={classes.main}>
      <Headline page={props.page} items={items} handleReduce={handleReduce}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links items={items} />
    </main>
  );
};
