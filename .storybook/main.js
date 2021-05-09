module.exports = {
  stories: ['../@(modules|pages)/**/*.stories.@(js|mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
};
