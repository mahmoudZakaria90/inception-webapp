(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/main.js":[function(require,module,exports){
'use strict';

var Hello = require('./Hello');

var hello = new Hello();
hello.greet();

},{"./Hello":"/Users/omarfouad/work/git/inception-webapp/src/js/Hello.js"}],"/Users/omarfouad/work/git/inception-webapp/src/js/Hello.js":[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hello = (function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, [{
    key: 'greet',
    value: function greet() {
      console.log('Hello, World!');
    }
  }]);

  return Hello;
})();

module.exports = Hello;

},{}]},{},["./src/js/main.js"]);
