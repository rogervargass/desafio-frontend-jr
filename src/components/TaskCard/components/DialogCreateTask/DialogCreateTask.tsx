import { Button } from "@/components/Button/Button";
import { Dialog } from "@/components/Dialog/Dialog";
import { Input } from "@/components/Input/Input";
import { useRef } from "react";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
};

export default function DialogCreateTask({ isOpen, onClose, onCreate }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCreateTask() {
    const title = inputRef.current?.value;
    if (!title) return;
    onCreate(title);
    onClose();
  }

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <p className={styles.title}>Nova tarefa</p>
        <Input label="Titulo" placeholder="Digite" ref={inputRef} />
        <div className={styles.actions}>
          <Button variant="secondary" title="Cancelar" onClick={onClose} />
          <Button title="Adicionar" onClick={handleCreateTask} />
        </div>
      </div>
    </Dialog>
  );
}
