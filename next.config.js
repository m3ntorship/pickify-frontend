const { APP_ENV } = process.env;

module.exports = {
  env: {
    APP_ENV,
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
