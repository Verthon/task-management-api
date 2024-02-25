import { AppError } from "../model/AppError.js";
import type { AppErrorDetails } from "../model/AppErrorDetails.js";

export const errorService = () => {
  const createApplicationError = ({
    httpCode = 500,
    message = "Application logic failed",
    severity = "high",
    systemMessage = "Application logic failed - default case",
  }: Partial<AppErrorDetails>) => {
    return {
      httpCode,
      message,
      severity,
      systemMessage,
      type: "application",
    };
  };

  const createValidationError = ({
    httpCode = 400,
    message = "Validation failed",
    severity = "medium",
    systemMessage = "Validation failed - default case",
  }: Partial<AppErrorDetails>): AppErrorDetails => {
    return {
      httpCode,
      message,
      severity,
      systemMessage,
      type: "validation",
    };
  };

  const throwError = ({
    httpCode,
    message,
    severity,
    systemMessage,
    type,
  }: AppErrorDetails) => {
    const error = new AppError({
      httpCode,
      message,
      severity,
      systemMessage,
      type,
    });

    throw error;
  };

  return {
    createApplicationError,
    createValidationError,
    throwError,
  };
};
