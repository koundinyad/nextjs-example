import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my demo app</h1>

        <p className={styles.description}>
          Here's some data from an API endpoint: {data}
        </p>

        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Go to /blog</p>
          </a>

          <a href="/csr" className={styles.card}>
            <h3>Client side rendered page</h3>
            <p>Go to /csr</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}> 2023</footer>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API endpoint
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return {
    props: {
      data: data.title,
    },
  };
}
