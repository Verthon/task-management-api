import { expect } from "chai";

import { createTasksRepository } from "./task-repository.js";

describe("task-repository", () => {
  it("should create a new task and return succesfully create resource", async () => {
    const repository = createTasksRepository("inMemory");

    const result = await repository.create({
      title: "Correct title",
      deadline: "2020-01-01T00:00:00Z",
    });

    expect(result).to.deep.equal({
      deadline: "2020-01-01T00:00:00Z",
      id: 1,
      title: "Correct title",
    });
  });

  it("should create a new task and save it with incremented id", async () => {
    const repository = createTasksRepository("inMemory");
    const initialState = await repository.create({
      title: "Correct title",
      deadline: "2020-01-01T00:00:00Z",
    });
    expect(initialState).to.deep.equal({
      deadline: "2020-01-01T00:00:00Z",
      id: 1,
      title: "Correct title",
    });

    const result = await repository.create({
      title: "Another task",
      deadline: "2023-03-03T00:00:00Z",
    });

    expect(result).to.deep.equal({
      deadline: "2023-03-03T00:00:00Z",
      id: 2,
      title: "Another task",
    });
  });
});
