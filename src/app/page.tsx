import { TaskCard } from "@/components/TaskCard/TaskCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.pageContent}>
      <TaskCard />
    </section>
  );
}
