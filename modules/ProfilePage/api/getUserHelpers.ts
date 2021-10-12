import { EStatusCode } from '../../shared/api/EStatusCode';

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: "The user you are looking for doesn't exist.",
  [EStatusCode.Unauthorized]: 'Please login first to interact with our app.',
  [EStatusCode.BadRequest]: "The user you are looking for doesn't exist.",
};
