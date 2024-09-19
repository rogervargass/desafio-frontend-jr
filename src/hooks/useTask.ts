import { Task, TaskList } from "@/types/taskTypes";
import { useState } from "react";

const INITIAL_LIST: Task[] = [
  {
    id: 1,
    title: "Lavar as mãos",
    isDone: false,
  },
  {
    id: 2,
    title: "Lavar a louça",
    isDone: false,
  },
  {
    id: 3,
    title: "Fazer um bolo",
    isDone: false,
  },
  {
    id: 4,
    title: "Levar o lixo para fora",
    isDone: true,
  },
];

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_LIST);

  const taskToDo = tasks.filter((task) => !task.isDone);
  const taskDone = tasks.filter((task) => task.isDone);

  function list(): TaskList {
    return { taskToDo, taskDone };
  }

  function create(title: string) {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function update(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function remove(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return {
    list,
    create,
    update,
    remove,
    taskToDo,
    taskDone,
  };
}
