import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";

export default function News() {
  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.post}>
          <h2 className={styles.title}>
            SaaS時代のデータサイエンティスト・佐藤が語る、Flow
            Meisterが変える&quot;業務共有&quot;の可能性
          </h2>
          <div className={styles.meta}>
            <p className={styles.date}>2025.03.27</p>
            <div className={styles.categories}>
              <Link className={styles.category} href="/news/">
                コラム
              </Link>
            </div>
          </div>
          <img
            className={styles.thumbnail}
            src="/thumbnail1.jpg"
            alt=""
            width="700"
            height="377"
          />
          <div className={styles.content}>
            <p>
              「タスクは登録して終わり、になっていませんか？」
              <br />
              そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。
              <br />
              彼が語るのは、&quot;業務を効率化するツール&quot;ではなく、&quot;流れるような業務共有&quot;の重要性。
              <br />
              Flow
              Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。
              <br />
              そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。
            </p>
            <p>
              Flow Meisterの導入背景から、実際に感じた変化まで。
              <br />
              SaaSの現場で日々進化し続けるプロフェッショナルの視点から、「使いやすい」ではなく「手放せない」ツールへと進化した理由が明らかになります。
            </p>
            <h2>なぜFlow Meisterを選んだのか？</h2>
            <p>
              「操作に時間を取られるのが一番のムダだと気づいたんです」と佐藤氏。
              <br />
              チーム内で複数のツールを使い分けていた過去。チャットとタスク管理が分断され、情報は各所に散乱。
              <br />
              そんな中、Flow
              Meisterの&quot;つながり&quot;の強さがチームに変化をもたらしました。
            </p>
            <figure>
              <Image src="/post-image1.jpg" alt="" width="700" height="377" />
            </figure>
            <p>
              「連携機能はもちろん、&quot;いま、誰がどこまで進んでいるか&quot;がひと目でわかる。
              <br />
              リモートでもまったくストレスがないのは本当にありがたいですね」と語ります。
            </p>
            <h3>データドリブンな働き方との相性</h3>
            <p>
              佐藤氏のチームでは、業務のすべてを数値化し、KPIベースで可視化しています。
              <br />
              Flow
              Meisterでは、タスクの進捗状況や完了率などをリアルタイムで把握でき、
              <strong>定例会議での報告の手間が激減</strong>したそうです。
            </p>
            <ul>
              <li>Slack連携で、チャットからそのままタスク登録</li>
              <li>プロジェクトごとの進捗をダッシュボードで可視化</li>
              <li>
                誰が、何を、いつまでに。明確な責任範囲が自然と共有される仕組み
              </li>
            </ul>
            <h4>&quot;共有&quot;は信頼のインフラである</h4>
            <p>
              「ただ情報を見られるだけでは意味がない。信頼できる形で流れていくことが大事なんです。」
              <br />
              佐藤氏が最後にそう語ったのがとても印象的でした。 Flow
              Meisterの&quot;見える共有&quot;は、単なる効率化ではなく、
              <strong>チームが信頼し合い、動き出すきっかけになる</strong>
              といいます。
            </p>
            <blockquote>
              <p>
                「ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。」
              </p>
            </blockquote>
            <p>
              <Link href="/contact/">無料デモの申し込みはこちらから</Link>
              どうぞ。お気軽にご相談ください！
            </p>
          </div>
          <div className={styles.pagination}>
            <div className={styles.list}>
              <Link href="/news/" className={styles.listButton}>
                記事一覧
              </Link>
            </div>
          </div>
        </div>
      </TwoColumn>
    </>
  );
}
