import Image from "next/image";
import logoIcon from "../../assets/icons/logo.svg";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <Image src={logoIcon} alt="logo" width={150} height={36} />
      <h1 className={styles.welcomeText}>Bem-vindo de volta, Roger</h1>
      <span className={styles.textSecondary}>
        Segunda, 01 de dezembro de 2025
      </span>
    </header>
  );
}
