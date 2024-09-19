import Image from "next/image";
import checkIcon from "../../assets/icons/check.svg";
import styles from "./styles.module.scss";

interface Props {
  checked: boolean;
}

export default function Checkbox({ checked }: Props) {
  const $styles = {
    borderColor: checked ? "#0796D3" : "#d7dde9",
    background: checked ? "#A0DCF6" : "#FFFFFF",
  };

  return (
    <div className={styles.checkbox} style={{ ...$styles }}>
      {checked && (
        <div className={styles.content}>
          <Image src={checkIcon} alt="check icon" width={18} height={18} />
        </div>
      )}
    </div>
  );
}
