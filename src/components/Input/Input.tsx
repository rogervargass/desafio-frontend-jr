import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        {label && <label>Titulo</label>}
        <input ref={ref} className={styles.input} type="text" {...props} />
      </div>
    );
  }
);

Input.displayName = "Input";
