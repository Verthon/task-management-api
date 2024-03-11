/* eslint-disable @typescript-eslint/no-explicit-any */
import supertest from "supertest";
import { expect } from "chai";

import { app } from "../../app.js";

describe("Task Routes Integration Tests", () => {
	let request: any;
	let server: any;

	beforeEach(() => {
		server = app.listen();
		request = supertest(server);
	});

	afterEach((done) => {
		server.close(done);
	});

	it("should create a new task when provided valid data", async () => {
		const res = await request
			.post("/tasks")
			.send({
				title: "Integration Test Task",
				description: "Task created during an integration test",
				deadline: undefined,
			})
			.expect(201);

		expect(res.body).to.have.property("id");
		expect(res.body.title).to.equal("Integration Test Task");
	});
});
