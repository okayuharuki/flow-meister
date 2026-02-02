import styles from "./Heading.module.css";

export default function Heading({ subText, mainText, textAlign = "isCenter" }) {
  return (
    <div className={`${styles.heading} ${styles[textAlign]}`}>
      <p className={styles.sub}>{subText}</p>
      <h2 className={styles.main}>{mainText}</h2>
    </div>
  );
}
