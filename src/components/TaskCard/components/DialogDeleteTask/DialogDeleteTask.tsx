import { Button } from "@/components/Button/Button";
import { Dialog, DialogProps } from "@/components/Dialog/Dialog";
import styles from "./styles.module.scss";

type Props = {
  dialogProps: Pick<DialogProps, "isOpen" | "onClose">;
  taskId: number;
  onRemove: (id: number) => void;
};

export function DialogDeleteTask({ dialogProps, taskId, onRemove }: Props) {
  function handleConfirmDelete() {
    onRemove(taskId);
    dialogProps.onClose();
  }

  return (
    <Dialog isOpen={dialogProps.isOpen} onClose={dialogProps.onClose}>
      <div className={styles.content}>
        <p className={styles.title}>Deletar tarefa</p>
        <p className={styles.subTitle}>
          Tem certeza que você deseja deletar essa tarefa?
        </p>
        <div className={styles.actions}>
          <Button
            variant="secondary"
            title="Cancelar"
            onClick={dialogProps.onClose}
          />
          <Button
            variant="danger"
            title="Deletar"
            onClick={handleConfirmDelete}
          />
        </div>
      </div>
    </Dialog>
  );
}
