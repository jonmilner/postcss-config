module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-mixins'),
    require('postcss-custom-selectors'),
    require('postcss-simple-vars'),
    require('postcss-color-function'),
    require('postcss-apply'),
    require('postcss-calc'),
    require('cq-prolyfill/postcss-plugin'),
    require('postcss-nested'),
    require('postcss-atroot'),
    require('postcss-assets')({
      basePath: 'src/',
      cachebuster: true,
      loadPaths: ['img/'],
      relative: true
    }),
    require('postcss-inline-svg')({
      path: 'src'
    }),
    require('postcss-initial'),
    require('postcss-pseudo-class-enter'),
    require('postcss-pxtorem')({
      unitPrecision: 4,
      propWhiteList: [],
      replace: true,
      selectorBlackList: [],
      minPixelValue: 4
    }),
    require('autoprefixer')({
      /* http://browserl.ist/?q=last+2+Chrome+versions%2C+last+2+Firefox+versions%2C+last+2+Safari+versions%2C+last+2+Edge+versions%2C+last+4+iOS+versions%2C+last+2+ChromeAndroid+versions */
      browsers: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 Edge versions',
        'last 4 iOS versions',
        'last 2 ChromeAndroid versions'
      ]
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          calc: false,
          colormin: false,
          discardUnused: false,
          normalizeUrl: false
        }
      ]
    }),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]
};
