const env = process.env.APP_ENV;

const config = {
  development: {
    apis: {
      posts: 'https://pickify-posts-be-dev.m3ntorship.net',
      votes: 'https://pickify-posts-be-dev.m3ntorship.net',
      media: 'https://pickify-media-be-dev.pickify.net',
    },
  },
  live: {
    apis: {
      posts: 'https://pickify-posts-be-live.m3ntorship.net',
      votes: 'https://pickify-posts-be-live.m3ntorship.net',
      media: 'https://pickify-media-be-live.pickify.net',
    },
  },
};

const appConfig = config[env] || config.development;

module.exports = {
  env: {
    config: appConfig,
  },
  images: {
    domains: [
      's3-alpha-sig.figma.com',
      'cdn.fakercloud.com',
      'placeimg.com',
      'images.unsplash.com',
      'pickify-media-be-dev.pickify.net',
      'pickify-media-be-live.pickify.net',
      'lh3.googleusercontent.com',
    ],
  },
};
