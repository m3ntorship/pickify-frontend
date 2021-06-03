import { PostsApi } from '@m3ntorship/posts-client';
import type { Configuration } from '@m3ntorship/posts-client/dist/client';

export const postsApi = new PostsApi({
  basePath: 'http://localhost:4010',
} as Configuration);
