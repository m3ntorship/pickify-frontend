module.exports = {
  stories: [
    '../pages/**/*.stories.(js|mdx|tsx)',
    '../modules/**/*.stories.(js|mdx|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
  typescript: { reactDocgen: 'react-docgen' },
};
