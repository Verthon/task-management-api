type ServerErrorHttpCode = 500 | 501 | 502 | 503 | 504;
type ClientErrorHttpCode = 400 | 401 | 403 | 404 | 422;
type SuccessHttpCode = 200 | 201;

export type HTTPCode =
  | SuccessHttpCode
  | ClientErrorHttpCode
  | ServerErrorHttpCode;
