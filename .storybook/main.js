const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-controls', '@storybook/addon-storysource'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../'))
    config.resolve.alias = {
      ...config.resolve.alias,
      // The below 2 lines fixes ThemeProvider context from this issue
      // https://github.com/storybookjs/storybook/issues/10231 [sam]
      // '@emotion/core': path.resolve(process.cwd(), 'node_modules/@emotion/react'),
      // 'emotion-theming': path.resolve(process.cwd(), 'node_modules/@emotion/react'),
    }
    return config
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
