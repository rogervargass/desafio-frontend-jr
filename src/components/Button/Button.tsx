import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ title, variant = "primary", ...props }: Props) {
  return (
    <button className={styles[variant]} {...props}>
      {title}
    </button>
  );
}
