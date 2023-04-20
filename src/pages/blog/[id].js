import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        This page uses dynamic routing and getStaticProps with getStaticPaths
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
