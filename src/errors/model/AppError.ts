import { AppErrorDetails } from "./AppErrorDetails.js";

export class AppError extends Error {
	httpCode: AppErrorDetails["httpCode"];
	severity: AppErrorDetails["severity"];
	systemMessage: AppErrorDetails["systemMessage"];
	type: AppErrorDetails["type"];

	constructor({
		message,
		httpCode,
		severity,
		systemMessage,
		type,
	}: AppErrorDetails) {
		super(message);
		this.name = this.constructor.name;
		this.httpCode = httpCode;
		this.severity = severity;
		this.systemMessage = systemMessage;
		this.type = type;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}
