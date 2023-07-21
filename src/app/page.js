import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Main";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero2 />
    </main>
  );
}
