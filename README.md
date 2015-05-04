## Inception for web applications
![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)

A general structure for web applications with no specific JS framework.

Gulp tasks:
* Bundles JS using Browserify, supporting ES6 syntax (using babelify)
* Compiles Sass
* Compiles CoffeeScript
* Autoprefixes CSS
* JSHint
* JS Error notifications (Mac only)
* Localhost setup using autoconnect with optional HTML5 History Api Fallback (for single page web apps)

Tasks for production builds:

* JavaScript Uglification
* CSS minification

### TL;DR

Install node dependencies

```shell
$ npm install
```

Run gulp (default task)
```shell
$ gulp
```

Minifies JS and CSS
```shell
$ gulp build
```
