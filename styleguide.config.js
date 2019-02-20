module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts/config/webpack.config'),
  dangerouslyUpdateWebpackConfig: (c) => {
    c.cache = false
    return c
  },
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*.styles.ts'
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700'
        }
      ]
    }
  },
  theme: {
    color: {
      base: '#FFF',
      baseBackground: '#1D1D21',
      sidebarBackground: '#080809',
      border: '#080809'
    }
  }
}