import { expect } from "chai";
import { errorService } from "./error-service.js";

describe("error-service", () => {
	it("should create the validation error object with default values", () => {
		const service = errorService();

		const result = service.createValidationError({});

		expect(result).to.deep.equal({
			httpCode: 400,
			message: "Validation failed",
			severity: "medium",
			systemMessage: "Validation failed - default case",
			type: "validation",
		});
	});

	it("should return validation error object with customized values", () => {
		const service = errorService();

		const result = service.createValidationError({
			httpCode: 422,
			message: "Title needs to have at least 3 letters",
			severity: "low",
			systemMessage: "Validation failed - title",
		});

		expect(result).to.deep.equal({
			httpCode: 422,
			message: "Title needs to have at least 3 letters",
			severity: "low",
			systemMessage: "Validation failed - title",
			type: "validation",
		});
	});

	it("should throw a validation error with strictly defined shape", () => {
		const service = errorService();

		expect(() =>
			service.throwError({
				httpCode: 422,
				message: "Title needs to have at least 3 letters",
				severity: "low",
				systemMessage: "Validation failed - title",
				type: "validation",
			})
		).to.throw("Title needs to have at least 3 letters");
	});

	it("should create the application error object with default values", () => {
		const service = errorService();

		const result = service.createApplicationError({});

		expect(result).to.deep.equal({
			httpCode: 500,
			message: "Application logic failed",
			severity: "high",
			systemMessage: "Application logic failed - default case",
			type: "application",
		});
	});

	it("should return application error object with customized values", () => {
		const service = errorService();

		const result = service.createApplicationError({
			httpCode: 502,
			message: "External dependency failure, try again later",
			severity: "critical",
			systemMessage: "External dependency failure - AWS is down",
		});

		expect(result).to.deep.equal({
			httpCode: 502,
			message: "External dependency failure, try again later",
			severity: "critical",
			systemMessage: "External dependency failure - AWS is down",
			type: "application",
		});
	});

	it("should throw a application error with strictly defined shape", () => {
		const service = errorService();

		expect(() =>
			service.throwError({
				httpCode: 502,
				message: "External dependency failure, try again later",
				severity: "low",
				systemMessage: "External dependency failure - AWS is down",
				type: "application",
			})
		).to.throw("External dependency failure, try again later");
	});
});
