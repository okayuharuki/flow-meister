import ButtonSample from "../../components/ui/ButtonSample";
import CardSample from "../../components/ui/CardSample";
import MenuSample from "../../components/ui/MenuSample";

export default function About() {
  const boxClass = "box";

  return (
    <>
      <div className={boxClass}>
        <p style={{ color: "#333", backgroundColor: "pink" }}>
          段落が入ります。段落が入ります。
          <br />段落が入ります。
        </p>
        <ButtonSample text="ボタン" type="submit" />
        <hr/>
        <CardSample />
        <hr />
        <MenuSample />
      </div>
      <div></div>
    </>
  );
}
