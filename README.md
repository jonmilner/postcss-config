# postcss-config
A PostCSS config file with all the right stuff 🌶

## Getting Started

### Install Dependencies 📦

#### PostCSS and PostCSS Plugins

```
yarn add --dev postcss postcss-easy-import postcss-for postcss-each postcss-mixins postcss-custom-selectors postcss-simple-vars postcss-color-function postcss-apply postcss-calc postcss-nested postcss-atroot postcss-assets postcss-inline-svg postcss-initial postcss-pseudo-class-enter postcss-pxtorem autoprefixer cssnano postcss-reporter
```

#### Container Queries Prolyfill

If you want to use container queries, add `cq-prolyfill` as a regular dependency. If not, remove it from `postcss.config.js`.

```
yarn add cq-prolyfill
```

### Add Config

Add `postcss.config.js` to the project root.
