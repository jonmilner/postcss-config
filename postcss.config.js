module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-for': {},
    'postcss-each': {},
    'postcss-mixins': {},
    'postcss-custom-selectors': {},
    'postcss-simple-vars': {},
    'postcss-color-function': {},
    'postcss-apply': {},
    'postcss-calc': {},
    'postcss-nested': {},
    'postcss-atroot': {},
    'postcss-assets': {
      basePath: 'src/',
      cachebuster: true,
      loadPaths: ['img/'],
      relative: true
    },
    'postcss-inline-svg': {
      path: 'src'
    },
    'postcss-initial': {},
    'postcss-pseudo-class-enter': {},
    'postcss-pxtorem': {
      unitPrecision: 4,
      propWhiteList: [],
      replace: true,
      selectorBlackList: [],
      minPixelValue: 4
    },
    autoprefixer: {
      /* http://browserl.ist/?q=last+2+Chrome+versions%2C+last+2+Firefox+versions%2C+last+2+Safari+versions%2C+last+2+Edge+versions%2C+last+4+iOS+versions%2C+last+2+ChromeAndroid+versions */
      browsers: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 Edge versions',
        'last 4 iOS versions',
        'last 2 ChromeAndroid versions'
      ]
    },
    cssnano: {
      preset: [
        'default',
        {
          calc: false,
          colormin: false,
          discardUnused: false,
          normalizeUrl: false
        }
      ]
    },
    'postcss-reporter': {
      clearMessages: true
    }
  }
};
