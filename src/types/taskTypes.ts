export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TaskList {
  taskToDo: Task[];
  taskDone: Task[];
}
