import { db } from "src/infrastructure/database/db.js";
import type { Task } from "../model/task-model.js";
import type { RepositoryVariant } from "../../infrastructure/models/RepositoryVariant.js";

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

const taskRepository = () => {
	const create = async (task: Task) => {
		const [id] = await db("tasks").insert(task).returning("id");
		return { id, ...task };
	};

	return {
		create,
	};
};

export const createTasksRepository = (
	variant: RepositoryVariant = "default"
) => {
	const repository =
		variant === "inMemory" ? inMemoryTaskRepository() : taskRepository();

	const create = async (task: Task) => {
		return await repository.create(task);
	};

	return {
		create,
	};
};
