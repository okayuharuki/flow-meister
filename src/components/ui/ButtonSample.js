"use client";

export default function ButtonSample() {
  function handleButtonClick() {
    alert("ボタンがクリックされました！");
  }

  return (
    <button type="button" onClick={handleButtonClick}>ボタンサンプル</button>
  );
}
