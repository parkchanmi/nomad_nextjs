"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.home}>
          <Link href="/">Home</Link> {path === "/" ? <div className={styles.active}></div> : ""}
        </li>
        <li className={styles.about}>
          <Link href="/about">About</Link> {path === "/about" ? <div className={styles.active}></div> : ""}
        </li>
      </ul>
    </nav>
  );
}