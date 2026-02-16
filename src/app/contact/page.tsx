import Form from "@/components/layout/Form";
import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";
import Submit from "@/components/ui/Submit";
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
        <Form />

        <p>お問い合わせ用のページです。</p>
        <Label text="会社名" isRequired={false} id="company" />
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
        <p>お問い合わせ用のページです。</p>
        <Checkbox
          name="color2"
          items={[
            { value: "青", text: "青" },
            { value: "赤", text: "赤", defaultChecked: true },
            { value: "黄", text: "黄" },
          ]}
          required={true}
        />
        <p>お問い合わせ用のページです。</p>
        <Submit text="送信する" />
      </TwoColumn>
    </>
  );
}
