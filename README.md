# Gatsby `getBrowsersList` Bug

This repo displays a bug with Gatsby's `getBrowsersList` helper while using multi-environment Browserslist configs.

See the [original issue](https://github.com/gatsbyjs/gatsby/issues/29943) for a more in-depth explanation.

## Reproduction Steps

1. Clone the repo
2. Install dependencies:

```bash
yarn
```

3. Attempt a production build:

```bash
yarn build
```

Notice that Webpack throws an error during the build:

```
failed Building production JavaScript and CSS bundles - 0.005s

 ERROR #98123  WEBPACK

Generating JavaScript bundles failed

Write any browsers query (for instance, `defaults`) before `not supports es6-module`
```

4. Change `.browserslistrc` to a single-environment config like the following:

```
> 1%
ie 10
```

Notice that the build is successful.
