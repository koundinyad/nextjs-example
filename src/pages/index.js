import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  // Fetch dad jokes API
  const { data, isLoading, error } = useSWR(
    "https://official-joke-api.appspot.com/random_joke",
    fetcher
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my demo app</h1>

        <p className={styles.card}>
          Here's some data from a random joke API endpoint: <br />
          {isLoading && "Loading..."}
          {JSON.stringify(data)}
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
