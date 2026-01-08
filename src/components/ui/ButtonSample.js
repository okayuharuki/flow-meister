"use client";

export default function ButtonSample(props) {
  function handleButtonClick() {
    alert("ボタンがクリックされました！");
  }

  return (
    <button type={props.type} onClick={handleButtonClick}>
      {props.text}
    </button>
  );
}
