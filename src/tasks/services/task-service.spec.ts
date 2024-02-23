import { expect } from "chai";
import { taskService } from "./task-service.js";

describe("task service", () => {
	it("should create a new task for valid input", () => {
		const service = taskService();

		const result = service.createNewTask({ title: "Test task" });

		expect(result).to.deep.equal({
			title: "Test task",
			deadline: undefined,
			description: undefined,
		});
	});

	it("should raise an validation error when title title is empty", () => {
		const service = taskService();

		expect(() => service.createNewTask({ title: " " })).to.throw(
			"Validation error"
		);
	});

	it("should raise an validation error when title is too long", () => {
		const service = taskService();

		expect(() =>
			service.createNewTask({
				title:
					"Transform Your Life | 5 Essential Habits for Lasting Improvement",
			})
		).to.throw("Validation error");
	});

	it("should raise an validation error when title is too short", () => {
		const service = taskService();

		expect(() => service.createNewTask({ title: " FV" })).to.throw(
			"Validation error"
		);
	});

	it("should raise an validation error when description is too long", () => {
		const service = taskService();

		expect(() =>
			service.createNewTask({
				title: "Correct title",
				description: Array(501).fill("t").join(""),
			})
		).to.throw("Validation error");
	});

	it("should raise an validation error when description is too short", () => {
		const service = taskService();

		expect(() =>
			service.createNewTask({
				title: "Correct title",
				description: "too short",
			})
		).to.throw("Validation error");
	});

	it("should accept deadline only within ISO 8601 format", () => {
		const service = taskService();

		const result = service.createNewTask({
			title: "Correct title",
			deadline: "2020-01-01T00:00:00Z",
		});

		expect(result).to.deep.equal({
			title: "Correct title",
			deadline: "2020-01-01T00:00:00Z",
			description: undefined,
		});
	});

	it("should raise an validation error when date is in incorrect format", () => {
		const service = taskService();

		expect(() =>
			service.createNewTask({
				title: "Correct title",
				deadline: "2020-01-01",
			})
		).to.throw("Validation error");
	});
});
