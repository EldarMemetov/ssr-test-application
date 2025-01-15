import React from "react";
import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link href="/posts" className={style.navLink}>
              Posts
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href="/users" className={style.navLink}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
