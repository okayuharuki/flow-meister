import Form from "@/components/layout/Form";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <PageFirstView
        subText="Contact"
        mainText="お問い合わせ"
        textAlign="isCenter"
      />
      <OneColumn isSlim={true}>
        <p className={styles.text}>
          サービスに関するご相談やお問い合わせは、必要事項を入力の上、お問い合わせください。
          <br />
          2～3営業日以内に、担当よりメールにて返信いたします。
        </p>
        <Form />
      </OneColumn>
    </>
  );
}
