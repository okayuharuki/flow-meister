import styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.widget}>
        <h2 className={styles.widgetTitle}>運営会社</h2>
        <div className={styles.profile}>
          <Image
            src="/profile.jpg"
            className={styles.profileImage}
            alt=""
            width="356"
            height="160"
          />
          <div className={styles.profileBody}>
            <p className={styles.profileName}>株式会社Flow Meister</p>
            <p className={styles.profileDescription}>
              会社の説明が入ります。会社の説明が入ります。会社の説明が入ります。会社の説明が入ります。会社の説明が入ります。会社の説明が入ります。
            </p>
          </div>
          <div className={styles.profileButton}>
            <Link href="/contact/" className={styles.button}>
              ご相談はこちら
              <svg
                className={styles.buttonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M17.6223 8.62216C18.1246 8.11993 18.1246 7.3043 17.6223 6.80207L11.1938 0.3735C10.6915 -0.128732 9.87589 -0.128732 9.37366 0.3735C8.87143 0.875732 8.87143 1.69136 9.37366 2.19359L13.6125 6.42841H1.28571C0.574554 6.42841 0 7.00296 0 7.71413C0 8.42529 0.574554 8.99984 1.28571 8.99984H13.6085L9.37768 13.2347C8.87545 13.7369 8.87545 14.5525 9.37768 15.0548C9.87991 15.557 10.6955 15.557 11.1978 15.0548L17.6263 8.62618L17.6223 8.62216Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>ピックアップ記事</h3>
        <div className={styles.cards}>
          <Link href="/news/post.html" className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/thumbnail1.jpg"
              alt=""
              width="110"
              height="96"
            />
            <div className={styles.cardBody}>
              <time className={styles.cardDate} dateTime="2025-03-27">
                2025.03.27
              </time>
              <p className={styles.cardTitle}>
                SaaS時代のデータサイエンティスト・佐藤が語る、Flow
                Meisterが変える"業務共有"の可能性
              </p>
            </div>
          </Link>
          <Link href="/news/post.html" className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/thumbnail4.jpg"
              alt=""
              width="110"
              height="96"
            />
            <div className={styles.cardBody}>
              <time className={styles.cardDate} dateTime="2025-03-04">
                2025.03.04
              </time>
              <p className={styles.cardTitle}>
                属人化を脱却！業務ナレッジ共有で成果を上げた企業様の取り組みを公開しました
              </p>
            </div>
          </Link>
          <Link href="/news/post.html" className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/thumbnail6.jpg"
              alt=""
              width="110"
              height="96"
            />
            <div className={styles.cardBody}>
              <time className={styles.cardDate} dateTime="2025-02-20">
                2025.02.20
              </time>
              <p className={styles.cardTitle}>
                部署間連携で受注率がアップ！営業・サポート間の情報共有成功事例を追加しました
              </p>
            </div>
          </Link>
          <Link href="/news/post.html" className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/thumbnail7.jpg"
              alt=""
              width="110"
              height="96"
            />
            <div className={styles.cardBody}>
              <time className={styles.cardDate} dateTime="2025-02-15">
                2025.02.15
              </time>
              <p className={styles.cardTitle}>
                社内ドキュメント整備の成功ポイントとは？見せ方を変えた企業様の声を掲載中
              </p>
            </div>
          </Link>
          <Link href="/news/post.html" className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/thumbnail9.jpg"
              alt=""
              width="110"
              height="96"
            />
            <div className={styles.cardBody}>
              <time className={styles.cardDate} dateTime="2025-02-08">
                2025.02.08
              </time>
              <p className={styles.cardTitle}>
                引き継ぎ業務がスムーズに！"属人化リスク"を抑える取り組み事例を公開
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>メニュー</h3>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <Link className={styles.link} href="/news/">
              コラム
            </Link>
            <Link className={styles.link} href="/news/">
              人材育成
            </Link>
            <Link className={styles.link} href="/news/">
              営業支援
            </Link>
            <Link className={styles.link} href="/news/">
              導入事例
            </Link>
            <Link className={styles.link} href="/news/">
              業務改善
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
