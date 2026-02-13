import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Input from "@/components/ui/Input";
import Radio from "@/components/ui/Radio";
import Textarea from "@/components/ui/Textarea";

export default function Contact() {
  return (
    <>
      <PageFirstView
        subText="Contact"
        mainText="お問い合わせ"
        textAlign="isCenter"
      />
      <TwoColumn>
        <p>お問い合わせ用のページです。</p>
        <Input
          id="company"
          type="text"
          name="company"
          defaultValue=""
          placeholder="例：株式会社XXX"
          required={true}
          pattern="XXX"
        />
        <p>お問い合わせ用のページです。</p>
        <Textarea
          id="message"
          name="message"
          defaultValue=""
          placeholder="お伝え事項がございましたらご自由にご記入ください。"
        />
        <p>お問い合わせ用のページです。</p>
        <Radio
          name="color"
          items={[
            { value: "青", text: "青" },
            { value: "赤", text: "赤", defaultChecked: true },
            { value: "黄", text: "黄" },
          ]}
          required={true}
        />
      </TwoColumn>
    </>
  );
}
