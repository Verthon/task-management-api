import { expect } from "chai";
import { describe } from "mocha";
import { createTask } from "./task.js";

describe("task model", () => {
	it("should create task with title only", () => {
		expect(createTask({ title: "Urgent meeting" })).to.deep.equal({
			title: "Urgent meeting",
			deadline: undefined,
			description: undefined,
		});
	});
});
