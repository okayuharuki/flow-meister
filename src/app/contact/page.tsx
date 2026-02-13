import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Input from "@/components/ui/Input";

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
        />
      </TwoColumn>
    </>
  );
}
