import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import styles from "./News.module.css";
import Link from "next/link";
import NewsCard from "@/components/ui/NewsCard";
import { stripHtmlTags } from "@/utils/string";
import { formatDate } from "@/utils/date";
import { getPosts } from "@/lib/wordpress";
import { FeaturedMedia, Term } from "@/types/wordpress";

export default async function News() {
  const posts = await getPosts(9);

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>すべての記事</p>
          <div className={styles.cards}>
            {posts.map((post) => {
              const featuredmedia = (post?._embedded?.[
                "wp:featuredmedia"
              ]?.[0] ?? { source_url: "/thumbnail0.jpg" }) as FeaturedMedia;
              const categories = (post?._embedded?.["wp:term"]?.[0] ??
                []) as Term[];
              return (
                <div className={styles.card} key={post.id}>
                  <NewsCard
                    src={featuredmedia.source_url}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={stripHtmlTags(post.excerpt.rendered)}
                    date={formatDate(post.date)}
                    categories={categories.map((category) => {
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
