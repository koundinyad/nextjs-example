import React from "react";
import Head from "next/head";
import styles from "../styles/BlogLayout.module.css";

const BlogLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; My Blog</p>
      </footer>
    </div>
  );
};

export default BlogLayout;
