import type { Task } from "../model/task-model.js";

type CreateTasksRepositoryParams = "default" | "inMemory";

type WithId<TData extends object> = {
  id: number;
} & TData;

const inMemoryTaskRepository = () => {
  const tasks: WithId<Task>[] = [];

  const _generateId = () => {
    const lastTaskId = tasks[tasks.length - 1]?.id ?? 0;
    const currentIndex = lastTaskId + 1;

    return currentIndex;
  };

  const create = async (task: Task) => {
    const id = _generateId();
    const newTask = { id, ...task };
    tasks.push(newTask);

    return newTask;
  };

  return {
    create,
  };
};

export const createTasksRepository = (
  variant: CreateTasksRepositoryParams = "default",
) => {
  const repository = variant
    ? inMemoryTaskRepository()
    : inMemoryTaskRepository();

  const create = async (task: Task) => {
    return await repository.create(task);
  };

  return {
    create,
  };
};
