export type Task = {
	title: string;
	description?: string;
	deadline?: string;
};

export const createTask = ({ title, deadline, description }: Task) => {
	return {
		title,
		deadline,
		description,
	};
};
