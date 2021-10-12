const env: string = process.env.APP_ENV ?? 'development';
interface APIConfigs {
  apis: {
    posts: string;
    votes: string;
    media: string;
  };
}

let configurations = {} as APIConfigs;

if (env === 'live') {
  configurations = {
    apis: {
      posts: 'https://pickify-posts-be-live.m3ntorship.net',
      votes: 'https://pickify-posts-be-live.m3ntorship.net',
      media: 'https://pickify-media-be-live.pickify.net',
    },
  };
} else {
  configurations = {
    apis: {
      posts: 'https://pickify-posts-be-dev.m3ntorship.net',
      votes: 'https://pickify-posts-be-dev.m3ntorship.net',
      media: 'https://pickify-media-be-dev.pickify.net',
    },
  };
}

export const POSTS_API = `${configurations.apis.posts}/api`;
export const VOTES_API = `${configurations.apis.votes}/api`;
export const MEDIA_API = `${configurations.apis.media}/api`;
