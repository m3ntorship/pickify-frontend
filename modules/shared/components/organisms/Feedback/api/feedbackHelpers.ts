import { EStatusCode } from '../../../../api/EStatusCode';

export const errorMessage: Record<number, string> = {
  [EStatusCode.Unauthorized]: 'Please login first to interact with our app.',
  [EStatusCode.BadRequest]: 'An error has occured.',
};
