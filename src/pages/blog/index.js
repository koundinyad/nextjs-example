import React from "react";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import BlogLayout from "@/layouts/BlogLayout";

const Blog = ({ posts }) => {
  return (
    <BlogLayout>
      <div>This page uses getServerSideProps</div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.id} href={post.url} className={styles.card}>
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </BlogLayout>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const updatedPosts = posts.map((post) => ({
    ...post,
    url: `/blog/${post.id}`,
  }));

  return {
    props: {
      posts: updatedPosts,
    },
  };
}
