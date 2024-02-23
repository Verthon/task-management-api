import { z } from "zod";

export const createTaskValidationSchema = (validator: typeof z = z) => {
	const taskSchema = validator.object({
		title: validator.string().trim().min(3).max(50),
		description: validator.string().trim().min(10).max(500).optional(),
		deadline: validator.string().datetime().optional(),
	});

	const validate = (data: unknown) => {
		const { success } = taskSchema.safeParse(data);

		return success ? "valid" : "invalid";
	};

	return {
		validate,
	};
};
