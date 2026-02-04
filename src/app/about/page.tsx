import ButtonSample from "@/components/ui/ButtonSample";
import CardSample from "@/components/ui/CardSample";
import MenuSample from "@/components/ui/MenuSample";
import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";
import Heading from "@/components/ui/Heading";
import HamburgerIcon from "@/components/ui/HamburgerIcon";

export default function About() {
  const boxClass = "box";

  return (
    <>
      <div className={boxClass}>
        <Button href="#" text="導入事例をすべて見る" />
        <ButtonOutline href="#" text="導入事例をすべて見る" />
        <hr />
        <Heading subText="Feature" mainText="3つの特徴" textAlign="isRight"></Heading>
        <hr />
        {/* <HamburgerIcon isOpen={true} /> */}

        <p style={{ color: "#333", backgroundColor: "pink" }}>
          段落が入ります。段落が入ります。
          <br />
          段落が入ります。
        </p>
        <ButtonSample
          text="ボタン"
          type="submit"
          disabled={true}
          title="テスト"
        />
        <hr />
        <CardSample />
        <hr />
        <MenuSample />
      </div>
      <div></div>
    </>
  );
}
