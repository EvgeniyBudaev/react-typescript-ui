export type TApiResponse<TData, TError> =
  | {
      success: true;
      data: TData;
    }
  | {
      success: false;
      error: TError;
    };

export type TError = {
  body: string;
  message: string;
};

export type TErrorResponse = {
  success: false;
  error: TError;
};
