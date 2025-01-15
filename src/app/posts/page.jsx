import React from "react";
import { fetchPosts } from "../utils/api";
import Link from "next/link";
import styles from "./postsPage.module.css";

const PostsPage = async () => {
  try {
    const posts = await fetchPosts();

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>All Posts</h1>

        {posts.length === 0 ? (
          <p className={styles.noPosts}>No posts found.</p>
        ) : (
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.id} className={styles.postItem}>
                <Link href={`/posts/${post.id}`} className={styles.postLink}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.title}>Error</h1>
        <p className={styles.errorMessage}>
          An error occurred while loading the posts. Please try again later.
        </p>
      </div>
    );
  }
};

export default PostsPage;
