import Image from "next/image";
import styles from "./page.module.css";
import { introduction } from "@/lib/data";
import Volumes from "./Volumes";
import Button from "./Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Lord of the Rings</h1>
        
        <p>{ introduction }</p>

        <h2>All Volumes</h2>
        < Volumes />
        
        < Button /> 
      </main>
      <footer className={styles.footer}>
        <a>
        </a>
      </footer>
    </div>
  );
}
