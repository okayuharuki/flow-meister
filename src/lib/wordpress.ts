import { WP_REST_API_Posts, WP_REST_API_Post } from "wp-types";

const WORDPRESS_POSTS_URL = process.env.WORDPRESS_POSTS_URL;

export async function getPosts(perPage: number): Promise<WP_REST_API_Posts> {
  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed&per_page=${perPage}`,
  );
  const posts = await response.json();

  return posts;
}

export async function getPost(id: number): Promise<WP_REST_API_Post> {
  const response = await fetch(`${WORDPRESS_POSTS_URL}/${id}?_embed`);
  const post = await response.json();

  return post;
}
