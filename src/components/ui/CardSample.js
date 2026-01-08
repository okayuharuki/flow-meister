import ButtonSample from "./ButtonSample";

export default function CardSample() {
  return (
    <div className="card">
      <p style={{ color: "#333", backgroundColor: "orange" }}>カードの内容が入ります。</p>
      <ButtonSample />
    </div>
  );
}
