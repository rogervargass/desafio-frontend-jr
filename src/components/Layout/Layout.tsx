import React from "react";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return <section className={styles.container}>{children}</section>;
}
