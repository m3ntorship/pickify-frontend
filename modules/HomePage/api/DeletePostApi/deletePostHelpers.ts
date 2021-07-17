import { EStatusCode } from '../../../shared/api/EStatusCode';

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: 'something went wrong',
  [EStatusCode.Unauthorized]: 'Unauthorized',
  [EStatusCode.BadRequest]: 'Bad request',
};
