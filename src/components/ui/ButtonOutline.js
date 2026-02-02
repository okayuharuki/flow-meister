import styles from "./ButtonOutline.module.css";
import Link from "next/link";

export default function ButtonOutline({ href, text }) {
  return (
    <Link href={href} className={styles["c-buttonOutline"]}>
      {text}
    </Link>
  );
}
