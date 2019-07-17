module.exports = {
  plugins: {
    "postcss-easy-import": {},
    "postcss-for": {},
    "postcss-each": {},
    "postcss-mixins": {},
    "postcss-custom-selectors": {},
    "postcss-nested": {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      unitPrecision: 4,
      propWhiteList: [],
      replace: true,
      selectorBlackList: [],
      minPixelValue: 2,
    },
    "postcss-initial": {},
    "postcss-focus-visible": {},
    cssnano: {
      preset: [
        "default",
        {
          calc: false,
          colormin: false,
          discardUnused: false,
          mergeRules: false,
          normalizeUrl: false,
        },
      ],
    },
    "postcss-reporter": {
      clearMessages: true,
    },
  },
};
