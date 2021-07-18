export const generateErrMsg = (
  errorMessage: Record<number, string>,
  statusCode: number,
  defaultMessage: string,
): string => {
  if (!errorMessage[statusCode]) {
    return defaultMessage;
  }
  return errorMessage[statusCode];
};
