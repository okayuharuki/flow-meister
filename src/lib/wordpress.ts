import {
  WP_REST_API_Posts,
  WP_REST_API_Post,
  WP_REST_API_Categories,
} from "wp-types";

const WORDPRESS_POSTS_URL = process.env.WORDPRESS_POSTS_URL;
const WORDPRESS_CATEGORIES_URL = process.env.WORDPRESS_CATEGORIES_URL;

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

export async function getTagPosts(
  tagIds: number | number[],
  perPage: number,
): Promise<WP_REST_API_Posts> {
  const tagsString = Array.isArray(tagIds)
    ? tagIds.join(",")
    : tagIds.toString();

  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed&per_page=${perPage}&tags=${tagsString}`,
  );
  const posts = await response.json();

  return posts;
}

export async function getAllCategories(): Promise<WP_REST_API_Categories> {
  const categoryResponse = await fetch(WORDPRESS_CATEGORIES_URL);
  const categories = await categoryResponse.json();

  return categories;
}
