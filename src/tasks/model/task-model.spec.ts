import { expect } from "chai";
import { describe } from "mocha";
import { createTask } from "./task-model.js";

describe("task model", () => {
	it("should create task with title only", () => {
		expect(createTask({ title: "Urgent meeting" })).to.deep.equal({
			title: "Urgent meeting",
			deadline: undefined,
			description: undefined,
		});
	});

	it("should create task with optional fields", () => {
		expect(
			createTask({
				title: "Task with deadline and description",
				description: "description",
				deadline: "2024-02-28",
			})
		).to.deep.equal({
			title: "Task with deadline and description",
			deadline: "2024-02-28",
			description: "description",
		});
	});
});
