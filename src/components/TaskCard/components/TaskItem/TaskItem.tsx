import Checkbox from "@/components/Checkbox/Checkbox";
import Image from "next/image";
import { useState } from "react";
import trashIcon from "../../../../assets/icons/trash.svg";
import { DialogDeleteTask } from "../DialogDeleteTask/DialogDeleteTask";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  isDone: boolean;
  id: number;
  onUpdate: (id: number) => void;
  onRemove: (id: number) => void;
};

export function TaskItem({ title, isDone, id, onUpdate, onRemove }: Props) {
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState<boolean>(false);

  const $textStyles = {
    flex: 1,
    fontSize: "1rem",
    textDecoration: isDone ? "line-through" : "none",
    color: isDone ? "rgba(0, 0, 0, 0.54)" : "#000000",
  };

  function handleDeleteTask() {
    setIsDialogDeleteOpen(true);
  }

  function closeDialog() {
    setIsDialogDeleteOpen(false);
  }

  return (
    <div className={styles.taskItem}>
      <div onClick={() => onUpdate(id)}>
        <Checkbox checked={isDone} />
      </div>
      <p style={{ ...$textStyles }} onClick={() => onUpdate(id)}>
        {title}
      </p>
      <Image
        src={trashIcon}
        alt="delete icon"
        width={24}
        height={24}
        onClick={handleDeleteTask}
      />
      <DialogDeleteTask
        dialogProps={{ isOpen: isDialogDeleteOpen, onClose: closeDialog }}
        taskId={id}
        onRemove={onRemove}
      />
    </div>
  );
}
