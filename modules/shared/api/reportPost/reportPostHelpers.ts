import { EStatusCode } from '../EStatusCode';

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: 'Post not found',
  [EStatusCode.Unauthorized]: 'Please login first to interact with our app',
  [EStatusCode.BadRequest]: 'Something went wrong',
  [EStatusCode.Conflict]: "You've already reported this post",
  [EStatusCode.ManyRequests]: 'You can not report more than 50 posts per day',
  [EStatusCode.Forbidden]: 'You can not report your own post',
};
