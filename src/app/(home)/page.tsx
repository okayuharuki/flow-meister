import Image from "next/image";
import styles from "./page.module.css";
import FirstView from "./_components/FirstView";
import PointSection from "./_components/PointSection";

export default function Home() {
  return (
    <>
      <FirstView />
      <PointSection />
    </>
  );
}
