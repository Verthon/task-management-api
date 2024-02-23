import { createTask } from "../model/task-model.js";
import { createTaskValidationSchema } from "../validation/task-validation-schema.js";

type CreateNewTaskParams = {
	title: string;
	deadline?: string;
	description?: string;
};

export const taskService = () => {
	const _validateTask = ({
		title,
		deadline,
		description,
	}: CreateNewTaskParams) => {
		const schema = createTaskValidationSchema();

		return schema.validate({ title, deadline, description });
	};

	const createNewTask = ({
		title,
		deadline,
		description,
	}: CreateNewTaskParams) => {
		if (_validateTask({ title, deadline, description }) === "invalid")
			throw new Error("Validation error");

		const newTask = createTask({
			title,
			deadline,
			description,
		});

		return newTask;
	};

	return {
		createNewTask,
	};
};
