"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  const boxClass = "box";

  function handleButtonClick() {
    alert("ボタンがクリックされました！");
  }

  return (
    <>
      <div className={boxClass}>
        <p style={{ color: "#333", backgroundColor: "pink" }}>
          段落が入ります。段落が入ります。
          <br />
          段落が入ります。
        </p>
        <button type="button" onClick={handleButtonClick}>ボタン</button>
      </div>
      <div></div>
    </>
  );
}
