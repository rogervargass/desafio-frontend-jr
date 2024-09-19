"use client";
import { useTask } from "@/hooks/useTask";
import { Task } from "@/types/taskTypes";
import { useState } from "react";
import { Button } from "../Button/Button";
import DialogCreateTask from "./components/DialogCreateTask/DialogCreateTask";
import { TaskItem } from "./components/TaskItem/TaskItem";
import styles from "./styles.module.scss";

export function TaskCard() {
  const { taskToDo, taskDone, update, remove, create } = useTask();
  const [isDialogCreateOpen, setIsDialogCreateOpen] = useState<boolean>(false);

  function handleAddTask() {
    setIsDialogCreateOpen(true);
  }

  function onCloseDialog() {
    setIsDialogCreateOpen(false);
  }

  function handleCreateTask(title: string) {
    create(title);
    setIsDialogCreateOpen(false);
  }

  function handleUpdateTask(id: number) {
    update(id);
  }

  function handleRemoveTask(id: number) {
    remove(id);
  }

  function renderTaskSection(title: string, tasks: Task[]) {
    if (tasks.length === 0) return null;

    return (
      <>
        <p className={styles.cardTitle}>{title}</p>
        <div className={styles.cardItems}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              isDone={task.isDone}
              id={task.id}
              onUpdate={handleUpdateTask}
              onRemove={handleRemoveTask}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.taskCard}>
        {renderTaskSection("Suas tarefas de hoje", taskToDo)}
        {renderTaskSection("Tarefas finalizadas", taskDone)}
        <DialogCreateTask
          isOpen={isDialogCreateOpen}
          onClose={onCloseDialog}
          onCreate={handleCreateTask}
        />
      </div>
      <Button title="Adicionar nova tarefa" onClick={handleAddTask} />
    </>
  );
}
