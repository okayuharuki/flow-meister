import Button from "@/components/ui/Button";
import styles from "./NewsSection.module.css";
import Heading from "@/components/ui/Heading";
import NewsCard from "@/components/ui/NewsCard";

export default function NewsSection() {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <Heading subText="News" mainText="お知らせ" textAlign="isCenter" />
        <div className={styles.cards}>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail1.jpg"
              id={1}
              title='SaaS時代のデータサイエンティスト・佐藤が語る、Flow Meisterが変える"業務共有"の可能性'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、"業務を効率化するツール"ではなく、"流れるような業務共有"の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.03.27"
              categories={[{ id: 1, name: "コラム" }]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail2.jpg"
              id={2}
              title="導入後、会議時間30%削減！株式会社エムリンク様インタビュー公開"
              excerpt="「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow
                  Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。
                "
              date="2025.03.15"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail3.jpg"
              id={3}
              title="Japan IT Week【春】に出展決定！"
              excerpt="「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow
                  Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。"
              date="2025.03.10"
              categories={[{ id: 1, name: "コラム" }]}
            />
          </div>
        </div>

        <Button href="/news/" text="すべてのお知らせを見る" />
      </div>
    </div>
  );
}
