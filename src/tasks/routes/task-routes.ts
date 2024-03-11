import Router from "koa-router";

import { taskService } from "../services/task-service.js";
import { createTaskInputSchema } from "../validation/task-input-schema.js";
import { AppError } from "src/errors/model/AppError.js";

const router = new Router({ prefix: "/tasks" });

router.post("/", async (ctx) => {
	const userInput = ctx.request.body;
	const { validate } = createTaskInputSchema();

	const userInputValidation = validate(userInput);

	if (userInputValidation.status === "invalid") {
		ctx.status = 400;
		ctx.body = "invalid data, please fix your data";
		return;
	}

	const { createNewTask } = taskService();

	try {
		if (userInputValidation.status === "valid") {
			const createdTask = await createNewTask(userInputValidation.data);
			ctx.status = 201;
			ctx.body = createdTask;
		}
	} catch (error) {
		if (error instanceof AppError) {
			ctx.status = error.httpCode || 500;
			ctx.body = { message: error.message };

			return;
		}

		ctx.status = 500;
		ctx.body = { message: "An unexpected error occurred" };
	}
});

export default router;
