import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import styles from "./News.module.css";
import Link from "next/link";
import NewsCard from "@/components/ui/NewsCard";

const WORDPRESS_POSTS_URL = process.env.WORDPRESS_POSTS_URL;

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export default async function News() {
  const response = await fetch(`${WORDPRESS_POSTS_URL}?_embed&per_page=9`);
  const posts = await response.json();
  console.log(posts);

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>すべての記事</p>
          <div className={styles.cards}>
            {posts.map((post) => {
              return (
                <div className={styles.card} key={post.id}>
                  <NewsCard
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={stripHtmlTags(post.excerpt.rendered)}
                    date={formatDate(post.date)}
                    categories={post._embedded["wp:term"][0].map((category) => {
                      return { id: category.id, name: category.name };
                    })}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.pagination}>
            <div className={styles.numbers}>
              <Link className={`${styles.number} ${styles.isCurrent}`} href="">
                1
              </Link>
              <Link className={styles.number} href="">
                2
              </Link>
            </div>
          </div>
        </div>
      </TwoColumn>
    </>
  );
}
