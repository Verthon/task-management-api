import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";

import { taskService } from "./task-service.js";

use(chaiAsPromised);

describe("task service", () => {
	it("should create a new task for valid input", async () => {
		const service = taskService("inMemory");

		const result = await service.createNewTask({ title: "Test task" });

		expect(result).to.deep.equal({
			id: 1,
			title: "Test task",
			deadline: undefined,
			description: undefined,
		});
	});

	it("should raise a validation error when title title is empty", async () => {
		const service = taskService("inMemory");

		await expect(service.createNewTask({ title: " " })).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});

	it("should raise a validation error when title is too long", async () => {
		const service = taskService("inMemory");

		expect(
			service.createNewTask({
				title:
					"Transform Your Life | 5 Essential Habits for Lasting Improvement",
			})
		).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});

	it("should raise a validation error when title is too short", async () => {
		const service = taskService("inMemory");

		await expect(service.createNewTask({ title: " FV" })).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});

	it("should raise a validation error when description is too long", async () => {
		const service = taskService("inMemory");

		await expect(
			service.createNewTask({
				title: "Correct title",
				description: Array(501).fill("t").join(""),
			})
		).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});

	it("should raise a validation error when description is too short", async () => {
		const service = taskService("inMemory");

		await expect(
			service.createNewTask({
				title: "Correct title",
				description: "too short",
			})
		).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});

	it("should accept deadline only within ISO 8601 format", async () => {
		const service = taskService("inMemory");

		const result = await service.createNewTask({
			title: "Correct title",
			deadline: "2020-01-01T00:00:00Z",
		});

		expect(result).to.deep.equal({
			id: 1,
			title: "Correct title",
			deadline: "2020-01-01T00:00:00Z",
			description: undefined,
		});
	});

	it("should raise a validation error when date is in incorrect format", async () => {
		const service = taskService("inMemory");

		expect(
			service.createNewTask({
				title: "Correct title",
				deadline: "2020-01-01",
			})
		).to.be.rejectedWith(
			"Validation failed, please double check your form and try again"
		);
	});
});
