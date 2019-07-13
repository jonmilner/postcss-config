module.exports = {
  plugins: {
    "postcss-easy-import": {},
    "postcss-for": {},
    "postcss-each": {},
    "postcss-mixins": {},
    "postcss-custom-selectors": {},
    "postcss-nested": {},
    "postcss-preset-env": {
      autoprefixer: {
        browsers: [
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Safari versions",
          "last 2 Edge versions",
          "last 4 iOS versions",
          "last 2 ChromeAndroid versions",
        ],
      },
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
