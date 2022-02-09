export type TError = {
  body: string;
  message: string;
};

export type TErrorResponse = {
  success: false;
  error: TError;
};
