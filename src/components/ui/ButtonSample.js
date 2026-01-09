"use client";

export default function ButtonSample({ type, text, ...restOfProps }) {
  // const { type, text } = props;

  function handleButtonClick() {
    alert("ボタンがクリックされました！");
  }

  const buttonProps = {
    type: type,
    onClick: handleButtonClick,
  };

  return (
    <button type={type} onClick={handleButtonClick} {...restOfProps}>
      {text}
    </button>
    // <button {...buttonProps}>{text}</button>
  );
}
