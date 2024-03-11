import { z } from "zod";

export const createTaskInputSchema = (validator: typeof z = z) => {
	const taskSchema = validator.object({
		title: validator.string().trim(),
		description: validator.string().trim().optional(),
		deadline: validator.string().optional(),
	});

	const validate = (data: unknown) => {
		const result = taskSchema.safeParse(data);

		if (result.success) {
			return {
				status: "valid",
				data: result.data,
			} as const;
		}

		return {
			status: "invalid",
			data: data,
			error: result.error,
		} as const;
	};

	return {
		validate,
	};
};
