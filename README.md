# Gatsby `getBrowsersList` Bug

This repo displays a bug with Gatsby's `getBrowsersList` helper while using multi-environment Browserslist configs.

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
failed Building production JavaScript and CSS bundles - 0.281s

 ERROR #98123  WEBPACK

Generating JavaScript bundles failed

Unknown target 'browserslist:'. The following targets are supported:
* browserslist / browserslist:env / browserslist:query / browserslist:path-to-config / browserslist:path-to-config:env: Resolve
features from browserslist. Will resolve browserslist config automatically. Only browser or node queries are supported (electron is
 not supported). Examples: 'browserslist:modern' to use 'modern' environment from browserslist config
* web: Web browser.
* webworker: Web Worker, SharedWorker or Service Worker.
* [async-]node[X[.Y]]: Node.js in version X.Y. The 'async-' prefix will load chunks asynchronously via 'fs' and 'vm' instead of
'require()'. Examples: node14.5, async-node10.
* electron[X[.Y]]-main/preload/renderer: Electron in version X.Y. Script is running in main, preload resp. renderer context.
* nwjs[X[.Y]] / node-webkit[X[.Y]]: NW.js in version X.Y.
* esX: EcmaScript in this version. Examples: es2020, es5.
```

4. Change `.browserslistrc` to a single-environment config like the following:

```
> 1%
ie 10
```

Notice that the build is successful and the "Webpack target" log shows a correct value of `browserslist:> 1%,ie 10`.
