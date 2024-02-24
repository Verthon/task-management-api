import type { ErrorServerity } from "./ErrorServerity.js";
import type { ErrorType } from "./ErrorType.js";
import type { HTTPCode } from "./HttpCode.js";
import type { Message } from "./Message.js";
import type { SystemMessage } from "./SystemMessage.js";

export type AppErrorDetails = {
	systemMessage: SystemMessage;
	message: Message;
	httpCode: HTTPCode;
	severity: ErrorServerity;
	type: ErrorType;
};
