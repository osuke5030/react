import classes from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((items) => {
        return (
          <Link key={items.href} href={items.href}>
            <a className={classes.ancher}>{items.label} </a>
          </Link>
        );
      })}
    </header>
  );
};
