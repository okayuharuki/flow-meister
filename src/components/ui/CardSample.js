import ButtonSample from "./ButtonSample";

export default function CardSample() {
  return (
    <div className="card">
      <p style={{ color: "#333", backgroundColor: "orange" }}>カードの内容が入ります。</p>
      <ButtonSample text="詳細を見る" type="button" />
      <ButtonSample text="購入する" type="button" />
    </div>
  );
}
