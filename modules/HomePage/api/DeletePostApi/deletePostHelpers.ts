import { EStatusCode } from '../../../shared/api/EStatusCode';

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: 'something went wrong',
  [EStatusCode.Unauthorized]: 'Please login first to interact with our app',
  [EStatusCode.BadRequest]: 'Bad request',
};
