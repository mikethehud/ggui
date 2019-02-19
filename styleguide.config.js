module.exports = {
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts/config/webpack.config'),
    dangerouslyUpdateWebpackConfig: (c) => {
      c.cache = false
      return c
    },
    template: {
      head: {
        links: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Rubik'
          }
        ]
      }
    }
}