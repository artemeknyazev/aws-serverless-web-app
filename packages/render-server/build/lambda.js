module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lambda.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../web-client/node_modules/react-dom/server.js":
/*!******************************************************!*\
  !*** ../web-client/node_modules/react-dom/server.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/web-client/node_modules/react-dom/server.js'");

/***/ }),

/***/ "../web-client/node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************************!*\
  !*** ../web-client/node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/web-client/node_modules/react-helmet/lib/Helmet.js'");

/***/ }),

/***/ "../web-client/node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************************!*\
  !*** ../web-client/node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/web-client/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "../web-client/node_modules/react/index.js":
/*!*************************************************!*\
  !*** ../web-client/node_modules/react/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/web-client/node_modules/react/index.js'");

/***/ }),

/***/ "../web-client/src/components/App.tsx":
/*!********************************************!*\
  !*** ../web-client/src/components/App.tsx ***!
  \********************************************/
/*! exports provided: ABC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABC", function() { return ABC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../web-client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../web-client/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "../web-client/node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "../web-client/node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);





const MainPage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Main page")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Main page"));

const ContactsPage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Contacts")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Contacts")); // 404


const NotFoundPage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Not found")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Not found")); // 5**


const InternalErrorPage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Internal error")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Internal error"));

const Header = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/"
}, "Main page"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/contacts"
}, "Contacts"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/aaa"
}, "aaa")));

const App = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
  defaultTitle: "S3rv3r1355",
  titleTemplate: "S3rv3r1355 \u2014 %s"
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/",
  exact: true,
  component: MainPage
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/contacts",
  exact: true,
  component: ContactsPage
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/not-found",
  exact: true,
  component: NotFoundPage
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/error",
  exact: true,
  component: InternalErrorPage
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
  to: "/not-found"
})));

console.log(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
  location: '/'
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, null))));
const ABC = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/"
}, "abc");
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.node.development.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.node.development.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

    var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

    var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

    var stream = __webpack_require__(/*! stream */ "stream"); // TODO: this is special because it gets imported during build.


    var ReactVersion = '16.8.6';
    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var validateFormat = function () {};

    {
      validateFormat = function (format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }

    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);

      if (!condition) {
        var error = void 0;

        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame

        throw error;
      }
    } // Relying on the `invariant()` implementation lets us
    // preserve the format and params in the www builds.

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var warningWithoutStack = function () {};

    {
      warningWithoutStack = function (condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }

        if (condition) {
          return;
        }

        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610

          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }
    var warningWithoutStack$1 = warningWithoutStack; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_CONCURRENT_MODE_TYPE:
          return 'ConcurrentMode';

        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
            }
        }
      }

      return null;
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
    // Current owner and dispatcher used to share the same ref,
    // but PR #14548 split them out to better support the react-debug-tools package.

    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
      ReactSharedInternals.ReactCurrentDispatcher = {
        current: null
      };
    }
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var warning = warningWithoutStack$1;
    {
      warning = function (condition, format) {
        if (condition) {
          return;
        }

        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }
    var warning$1 = warning;
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function (name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    }; // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


    var warnAboutDeprecatedLifecycles = false; // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.
    // Only used in www builds.

    var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.
    // Only used in www builds.
    // Only used in www builds.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

    var ReactDebugCurrentFrame$1 = void 0;
    var didWarnAboutInvalidateContextType = void 0;
    {
      ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      didWarnAboutInvalidateContextType = new Set();
    }
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }

    function maskContext(type, context) {
      var contextTypes = type.contextTypes;

      if (!contextTypes) {
        return emptyObject;
      }

      var maskedContext = {};

      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }

      return maskedContext;
    }

    function checkContextTypes(typeSpecs, values, location) {
      {
        checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
      }
    }

    function validateContextBounds(context, threadID) {
      // If we don't have enough slots in this context to store this threadID,
      // fill it in without leaving any holes to ensure that the VM optimizes
      // this as non-holey index properties.
      // (Note: If `react` package is < 16.6, _threadCount is undefined.)
      for (var i = context._threadCount | 0; i <= threadID; i++) {
        // We assume that this is the same as the defaultValue which might not be
        // true if we're rendering inside a secondary renderer but they are
        // secondary because these use cases are very rare.
        context[i] = context._currentValue2;
        context._threadCount = i + 1;
      }
    }

    function processContext(type, context, threadID) {
      var contextType = type.contextType;
      {
        if ('contextType' in type) {
          var isValid = // Allow null for conditional declaration
          contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

          if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
            didWarnAboutInvalidateContextType.add(type);
            var addendum = '';

            if (contextType === undefined) {
              addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
            } else if (typeof contextType !== 'object') {
              addendum = ' However, it is set to a ' + typeof contextType + '.';
            } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
              addendum = ' Did you accidentally pass the Context.Provider instead?';
            } else if (contextType._context !== undefined) {
              // <Context.Consumer>
              addendum = ' Did you accidentally pass the Context.Consumer instead?';
            } else {
              addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
            }

            warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
          }
        }
      }

      if (typeof contextType === 'object' && contextType !== null) {
        validateContextBounds(contextType, threadID);
        return contextType[threadID];
      } else {
        var maskedContext = maskContext(type, context);
        {
          if (type.contextTypes) {
            checkContextTypes(type.contextTypes, maskedContext, 'context');
          }
        }
        return maskedContext;
      }
    } // Allocates a new index for each request. Tries to stay as compact as possible so that these
    // indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
    // The first allocated index is 1.


    var nextAvailableThreadIDs = new Uint16Array(16);

    for (var i = 0; i < 15; i++) {
      nextAvailableThreadIDs[i] = i + 1;
    }

    nextAvailableThreadIDs[15] = 0;

    function growThreadCountAndReturnNextAvailable() {
      var oldArray = nextAvailableThreadIDs;
      var oldSize = oldArray.length;
      var newSize = oldSize * 2;
      !(newSize <= 0x10000) ? invariant(false, 'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.') : void 0;
      var newArray = new Uint16Array(newSize);
      newArray.set(oldArray);
      nextAvailableThreadIDs = newArray;
      nextAvailableThreadIDs[0] = oldSize + 1;

      for (var _i = oldSize; _i < newSize - 1; _i++) {
        nextAvailableThreadIDs[_i] = _i + 1;
      }

      nextAvailableThreadIDs[newSize - 1] = 0;
      return oldSize;
    }

    function allocThreadID() {
      var nextID = nextAvailableThreadIDs[0];

      if (nextID === 0) {
        return growThreadCountAndReturnNextAvailable();
      }

      nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
      return nextID;
    }

    function freeThreadID(id) {
      nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
      nextAvailableThreadIDs[0] = id;
    } // A reserved attribute.
    // It is handled by React separately and shouldn't be written to the DOM.


    var RESERVED = 0; // A simple string attribute.
    // Attributes that aren't in the whitelist are presumed to have this type.

    var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
    // "enumerated" attributes with "true" and "false" as possible values.
    // When true, it should be set to a "true" string.
    // When false, it should be set to a "false" string.

    var BOOLEANISH_STRING = 2; // A real boolean attribute.
    // When true, it should be present (set either to an empty string or its name).
    // When false, it should be omitted.

    var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
    // When true, it should be present (set either to an empty string or its name).
    // When false, it should be omitted.
    // For any other value, should be present with that value.

    var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
    // When falsy, it should be removed.

    var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
    // When falsy, it should be removed.

    var POSITIVE_NUMERIC = 6;
    /* eslint-disable max-len */

    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    /* eslint-enable max-len */

    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
    var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};

    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
        return true;
      }

      if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
        return false;
      }

      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
        validatedAttributeNameCache[attributeName] = true;
        return true;
      }

      illegalAttributeNameCache[attributeName] = true;
      {
        warning$1(false, 'Invalid attribute name: `%s`', attributeName);
      }
      return false;
    }

    function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null) {
        return propertyInfo.type === RESERVED;
      }

      if (isCustomComponentTag) {
        return false;
      }

      if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
        return true;
      }

      return false;
    }

    function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null && propertyInfo.type === RESERVED) {
        return false;
      }

      switch (typeof value) {
        case 'function': // $FlowIssue symbol is perfectly valid here

        case 'symbol':
          // eslint-disable-line
          return true;

        case 'boolean':
          {
            if (isCustomComponentTag) {
              return false;
            }

            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix = name.toLowerCase().slice(0, 5);
              return prefix !== 'data-' && prefix !== 'aria-';
            }
          }

        default:
          return false;
      }
    }

    function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
      if (value === null || typeof value === 'undefined') {
        return true;
      }

      if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
        return true;
      }

      if (isCustomComponentTag) {
        return false;
      }

      if (propertyInfo !== null) {
        switch (propertyInfo.type) {
          case BOOLEAN:
            return !value;

          case OVERLOADED_BOOLEAN:
            return value === false;

          case NUMERIC:
            return isNaN(value);

          case POSITIVE_NUMERIC:
            return isNaN(value) || value < 1;
        }
      }

      return false;
    }

    function getPropertyInfo(name) {
      return properties.hasOwnProperty(name) ? properties[name] : null;
    }

    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
      this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
      this.attributeName = attributeName;
      this.attributeNamespace = attributeNamespace;
      this.mustUseProperty = mustUseProperty;
      this.propertyName = name;
      this.type = type;
    } // When adding attributes to this list, be sure to also add them to
    // the `possibleStandardNames` module to ensure casing and incorrect
    // name warnings.


    var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

    ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    ); // A few React string attributes have a different name.
    // This is a mapping from React prop names to the attribute names.

    [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
      var name = _ref[0],
          attributeName = _ref[1];
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, // attributeName
      null);
    } // attributeNamespace
    ); // These are "enumerated" HTML attributes that accept "true" and "false".
    // In React, we let users pass `true` and `false` even though technically
    // these aren't boolean attributes (they are coerced to strings).

    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    ); // These are "enumerated" SVG attributes that accept "true" and "false".
    // In React, we let users pass `true` and `false` even though technically
    // these aren't boolean attributes (they are coerced to strings).
    // Since these are SVG attributes, their attribute names are case-sensitive.

    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    ); // These are HTML boolean attributes.

    ['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
    'itemScope'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    ); // These are the few React props that we set as DOM properties
    // rather than attributes. These are all booleans.

    ['checked', // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    'multiple', 'muted', 'selected'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    ); // These are HTML attributes that are "overloaded booleans": they behave like
    // booleans, but can also accept a string value.

    ['capture', 'download'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    ); // These are HTML attributes that must be positive numbers.

    ['cols', 'rows', 'size', 'span'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    ); // These are HTML attributes that must be numbers.

    ['rowSpan', 'start'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    );
    var CAMELIZE = /[\-\:]([a-z])/g;

    var capitalize = function (token) {
      return token[1].toUpperCase();
    }; // This is a list of all SVG attributes that need special casing, namespacing,
    // or boolean value assignment. Regular attributes that just accept strings
    // and have the same names are omitted, just like in the HTML whitelist.
    // Some of these attributes can be hard to find. This list was created by
    // scrapping the MDN documentation.


    ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, null);
    } // attributeNamespace
    ); // String SVG attributes with the xlink namespace.

    ['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, 'http://www.w3.org/1999/xlink');
    }); // String SVG attributes with the xml namespace.

    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, 'http://www.w3.org/XML/1998/namespace');
    }); // These attribute exists both in HTML and SVG.
    // The attribute name is case-sensitive in SVG so we can't just use
    // the React name like we do for attributes that exist only in HTML.

    ['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
      properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
      attributeName.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    ); // code copied and modified from escape-html

    /**
     * Module variables.
     * @private
     */

    var matchHtmlRegExp = /["'&<>]/;
    /**
     * Escapes special characters and HTML entities in a given html string.
     *
     * @param  {string} string HTML string to escape for later insertion
     * @return {string}
     * @public
     */

    function escapeHtml(string) {
      var str = '' + string;
      var match = matchHtmlRegExp.exec(str);

      if (!match) {
        return str;
      }

      var escape = void 0;
      var html = '';
      var index = void 0;
      var lastIndex = 0;

      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            // "
            escape = '&quot;';
            break;

          case 38:
            // &
            escape = '&amp;';
            break;

          case 39:
            // '
            escape = '&#x27;'; // modified from escape-html; used to be '&#39'

            break;

          case 60:
            // <
            escape = '&lt;';
            break;

          case 62:
            // >
            escape = '&gt;';
            break;

          default:
            continue;
        }

        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
      }

      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    } // end code copied and modified from escape-html

    /**
     * Escapes text to prevent scripting attacks.
     *
     * @param {*} text Text value to escape.
     * @return {string} An escaped string.
     */


    function escapeTextForBrowser(text) {
      if (typeof text === 'boolean' || typeof text === 'number') {
        // this shortcircuit helps perf for types that we know will never have
        // special characters, especially given that this function is used often
        // for numeric dom ids.
        return '' + text;
      }

      return escapeHtml(text);
    }
    /**
     * Escapes attribute value to prevent scripting attacks.
     *
     * @param {*} value Value to escape.
     * @return {string} An escaped string.
     */


    function quoteAttributeValueForBrowser(value) {
      return '"' + escapeTextForBrowser(value) + '"';
    }
    /**
     * Operations for dealing with DOM properties.
     */

    /**
     * Creates markup for the ID property.
     *
     * @param {string} id Unescaped ID.
     * @return {string} Markup string.
     */


    function createMarkupForRoot() {
      return ROOT_ATTRIBUTE_NAME + '=""';
    }
    /**
     * Creates markup for a property.
     *
     * @param {string} name
     * @param {*} value
     * @return {?string} Markup string, or null if the property was invalid.
     */


    function createMarkupForProperty(name, value) {
      var propertyInfo = getPropertyInfo(name);

      if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
        return '';
      }

      if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
        return '';
      }

      if (propertyInfo !== null) {
        var attributeName = propertyInfo.attributeName;
        var type = propertyInfo.type;

        if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
          return attributeName + '=""';
        } else {
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        }
      } else if (isAttributeNameSafe(name)) {
        return name + '=' + quoteAttributeValueForBrowser(value);
      }

      return '';
    }
    /**
     * Creates markup for a custom property.
     *
     * @param {string} name
     * @param {*} value
     * @return {string} Markup string, or empty string if the property was invalid.
     */


    function createMarkupForCustomAttribute(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }

      return name + '=' + quoteAttributeValueForBrowser(value);
    }
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */


    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }

    var currentlyRenderingComponent = null;
    var firstWorkInProgressHook = null;
    var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

    var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

    var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

    var renderPhaseUpdates = null; // Counter to prevent infinite loops.

    var numberOfReRenders = 0;
    var RE_RENDER_LIMIT = 25;
    var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

    var currentHookNameInDev = void 0;

    function resolveCurrentlyRenderingComponent() {
      !(currentlyRenderingComponent !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
      {
        !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
      }
      return currentlyRenderingComponent;
    }

    function areHookInputsEqual(nextDeps, prevDeps) {
      if (prevDeps === null) {
        {
          warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
        }
        return false;
      }

      {
        // Don't bother comparing lengths in prod because these arrays should be
        // passed inline.
        if (nextDeps.length !== prevDeps.length) {
          warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, '[' + nextDeps.join(', ') + ']', '[' + prevDeps.join(', ') + ']');
        }
      }

      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
        if (is(nextDeps[i], prevDeps[i])) {
          continue;
        }

        return false;
      }

      return true;
    }

    function createHook() {
      if (numberOfReRenders > 0) {
        invariant(false, 'Rendered more hooks than during the previous render');
      }

      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }

    function createWorkInProgressHook() {
      if (workInProgressHook === null) {
        // This is the first hook in the list
        if (firstWorkInProgressHook === null) {
          isReRender = false;
          firstWorkInProgressHook = workInProgressHook = createHook();
        } else {
          // There's already a work-in-progress. Reuse it.
          isReRender = true;
          workInProgressHook = firstWorkInProgressHook;
        }
      } else {
        if (workInProgressHook.next === null) {
          isReRender = false; // Append to the end of the list

          workInProgressHook = workInProgressHook.next = createHook();
        } else {
          // There's already a work-in-progress. Reuse it.
          isReRender = true;
          workInProgressHook = workInProgressHook.next;
        }
      }

      return workInProgressHook;
    }

    function prepareToUseHooks(componentIdentity) {
      currentlyRenderingComponent = componentIdentity;
      {
        isInHookUserCodeInDev = false;
      } // The following should have already been reset
      // didScheduleRenderPhaseUpdate = false;
      // firstWorkInProgressHook = null;
      // numberOfReRenders = 0;
      // renderPhaseUpdates = null;
      // workInProgressHook = null;
    }

    function finishHooks(Component, props, children, refOrContext) {
      // This must be called after every function component to prevent hooks from
      // being used in classes.
      while (didScheduleRenderPhaseUpdate) {
        // Updates were scheduled during the render phase. They are stored in
        // the `renderPhaseUpdates` map. Call the component again, reusing the
        // work-in-progress hooks and applying the additional updates on top. Keep
        // restarting until no more updates are scheduled.
        didScheduleRenderPhaseUpdate = false;
        numberOfReRenders += 1; // Start over from the beginning of the list

        workInProgressHook = null;
        children = Component(props, refOrContext);
      }

      currentlyRenderingComponent = null;
      firstWorkInProgressHook = null;
      numberOfReRenders = 0;
      renderPhaseUpdates = null;
      workInProgressHook = null;
      {
        isInHookUserCodeInDev = false;
      } // These were reset above
      // currentlyRenderingComponent = null;
      // didScheduleRenderPhaseUpdate = false;
      // firstWorkInProgressHook = null;
      // numberOfReRenders = 0;
      // renderPhaseUpdates = null;
      // workInProgressHook = null;

      return children;
    }

    function readContext(context, observedBits) {
      var threadID = currentThreadID;
      validateContextBounds(context, threadID);
      {
        !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
      }
      return context[threadID];
    }

    function useContext(context, observedBits) {
      {
        currentHookNameInDev = 'useContext';
      }
      resolveCurrentlyRenderingComponent();
      var threadID = currentThreadID;
      validateContextBounds(context, threadID);
      return context[threadID];
    }

    function basicStateReducer(state, action) {
      return typeof action === 'function' ? action(state) : action;
    }

    function useState(initialState) {
      {
        currentHookNameInDev = 'useState';
      }
      return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
      initialState);
    }

    function useReducer(reducer, initialArg, init) {
      {
        if (reducer !== basicStateReducer) {
          currentHookNameInDev = 'useReducer';
        }
      }
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();

      if (isReRender) {
        // This is a re-render. Apply the new render phase updates to the previous
        var _queue = workInProgressHook.queue;
        var _dispatch = _queue.dispatch;

        if (renderPhaseUpdates !== null) {
          // Render phase updates are stored in a map of queue -> linked list
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);

          if (firstRenderPhaseUpdate !== undefined) {
            renderPhaseUpdates.delete(_queue);
            var newState = workInProgressHook.memoizedState;
            var update = firstRenderPhaseUpdate;

            do {
              // Process this render phase update. We don't have to check the
              // priority because it will always be the same as the current
              // render's.
              var _action = update.action;
              {
                isInHookUserCodeInDev = true;
              }
              newState = reducer(newState, _action);
              {
                isInHookUserCodeInDev = false;
              }
              update = update.next;
            } while (update !== null);

            workInProgressHook.memoizedState = newState;
            return [newState, _dispatch];
          }
        }

        return [workInProgressHook.memoizedState, _dispatch];
      } else {
        {
          isInHookUserCodeInDev = true;
        }
        var initialState = void 0;

        if (reducer === basicStateReducer) {
          // Special case for `useState`.
          initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
        } else {
          initialState = init !== undefined ? init(initialArg) : initialArg;
        }

        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = initialState;

        var _queue2 = workInProgressHook.queue = {
          last: null,
          dispatch: null
        };

        var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);

        return [workInProgressHook.memoizedState, _dispatch2];
      }
    }

    function useMemo(nextCreate, deps) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;

      if (workInProgressHook !== null) {
        var prevState = workInProgressHook.memoizedState;

        if (prevState !== null) {
          if (nextDeps !== null) {
            var prevDeps = prevState[1];

            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }
      }

      {
        isInHookUserCodeInDev = true;
      }
      var nextValue = nextCreate();
      {
        isInHookUserCodeInDev = false;
      }
      workInProgressHook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }

    function useRef(initialValue) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      var previousRef = workInProgressHook.memoizedState;

      if (previousRef === null) {
        var ref = {
          current: initialValue
        };
        {
          Object.seal(ref);
        }
        workInProgressHook.memoizedState = ref;
        return ref;
      } else {
        return previousRef;
      }
    }

    function useLayoutEffect(create, inputs) {
      {
        currentHookNameInDev = 'useLayoutEffect';
      }
      warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
    }

    function dispatchAction(componentIdentity, queue, action) {
      !(numberOfReRenders < RE_RENDER_LIMIT) ? invariant(false, 'Too many re-renders. React limits the number of renders to prevent an infinite loop.') : void 0;

      if (componentIdentity === currentlyRenderingComponent) {
        // This is a render phase update. Stash it in a lazily-created map of
        // queue -> linked list of updates. After this render pass, we'll restart
        // and apply the stashed updates on top of the work-in-progress hook.
        didScheduleRenderPhaseUpdate = true;
        var update = {
          action: action,
          next: null
        };

        if (renderPhaseUpdates === null) {
          renderPhaseUpdates = new Map();
        }

        var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

        if (firstRenderPhaseUpdate === undefined) {
          renderPhaseUpdates.set(queue, update);
        } else {
          // Append the update to the end of the list.
          var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

          while (lastRenderPhaseUpdate.next !== null) {
            lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          }

          lastRenderPhaseUpdate.next = update;
        }
      } else {// This means an update has happened after the function component has
        // returned. On the server this is a no-op. In React Fiber, the update
        // would be scheduled for a future render.
      }
    }

    function useCallback(callback, deps) {
      // Callbacks are passed as they are in the server environment.
      return callback;
    }

    function noop() {}

    var currentThreadID = 0;

    function setCurrentThreadID(threadID) {
      currentThreadID = threadID;
    }

    var Dispatcher = {
      readContext: readContext,
      useContext: useContext,
      useMemo: useMemo,
      useReducer: useReducer,
      useRef: useRef,
      useState: useState,
      useLayoutEffect: useLayoutEffect,
      useCallback: useCallback,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: noop,
      // Effects are not run in the server environment.
      useEffect: noop,
      // Debugging effect
      useDebugValue: noop
    };
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var Namespaces = {
      html: HTML_NAMESPACE,
      mathml: MATH_NAMESPACE,
      svg: SVG_NAMESPACE
    }; // Assumes there is no parent namespace.

    function getIntrinsicNamespace(type) {
      switch (type) {
        case 'svg':
          return SVG_NAMESPACE;

        case 'math':
          return MATH_NAMESPACE;

        default:
          return HTML_NAMESPACE;
      }
    }

    function getChildNamespace(parentNamespace, type) {
      if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
        // No (or default) parent namespace: potential entry point.
        return getIntrinsicNamespace(type);
      }

      if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
        // We're leaving SVG.
        return HTML_NAMESPACE;
      } // By default, pass namespace below.


      return parentNamespace;
    }

    var ReactDebugCurrentFrame$2 = null;
    var ReactControlledValuePropTypes = {
      checkPropTypes: null
    };
    {
      ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      var propTypes = {
        value: function (props, propName, componentName) {
          if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
            return null;
          }

          return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        },
        checked: function (props, propName, componentName) {
          if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
            return null;
          }

          return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        }
      };
      /**
       * Provide a linked `value` attribute for controlled forms. You should not use
       * this outside of the ReactDOM controlled form components.
       */

      ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
        checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
      };
    } // For HTML, certain tags should omit their close tag. We keep a whitelist for
    // those special-case tags.

    var omittedCloseTags = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

    }; // For HTML, certain tags cannot have children. This has the same purpose as
    // `omittedCloseTags` except that `menuitem` should still have its closing tag.

    var voidElementTags = _assign({
      menuitem: true
    }, omittedCloseTags); // TODO: We can remove this if we add invariantWithStack()
    // or add stack by default to invariants where possible.


    var HTML = '__html';
    var ReactDebugCurrentFrame$3 = null;
    {
      ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
    }

    function assertValidProps(tag, props) {
      if (!props) {
        return;
      } // Note the use of `==` which checks for null or undefined.


      if (voidElementTags[tag]) {
        !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
      }

      if (props.dangerouslySetInnerHTML != null) {
        !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
        !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
      }

      {
        !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
      }
      !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
    }
    /**
     * CSS properties which accept numbers but are not in units of "px".
     */


    var isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    /**
     * @param {string} prefix vendor-specific prefix, eg: Webkit
     * @param {string} key style name, eg: transitionDuration
     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
     * WebkitTransitionDuration
     */

    function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    }
    /**
     * Support style names that may come passed in prefixed by adding permutations
     * of vendor prefixes.
     */


    var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
    // infinite loop, because it iterates over the newly added props too.

    Object.keys(isUnitlessNumber).forEach(function (prop) {
      prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
      });
    });
    /**
     * Convert a value into the proper css writable value. The style name `name`
     * should be logical (no hyphens), as specified
     * in `CSSProperty.isUnitlessNumber`.
     *
     * @param {string} name CSS property name such as `topMargin`.
     * @param {*} value CSS property value such as `10px`.
     * @return {string} Normalized style value with dimensions applied.
     */

    function dangerousStyleValue(name, value, isCustomProperty) {
      // Note that we've removed escapeTextForBrowser() calls here since the
      // whole string will be escaped when the attribute is injected into
      // the markup. If you provide unsafe user data here they can inject
      // arbitrary CSS which may be problematic (I couldn't repro this):
      // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
      // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
      // This is not an XSS hole but instead a potential CSS injection issue
      // which has lead to a greater discussion about how we're going to
      // trust URLs moving forward. See #2115901
      var isEmpty = value == null || typeof value === 'boolean' || value === '';

      if (isEmpty) {
        return '';
      }

      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
        return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
      }

      return ('' + value).trim();
    }

    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    /**
     * Hyphenates a camelcased CSS property name, for example:
     *
     *   > hyphenateStyleName('backgroundColor')
     *   < "background-color"
     *   > hyphenateStyleName('MozTransition')
     *   < "-moz-transition"
     *   > hyphenateStyleName('msTransition')
     *   < "-ms-transition"
     *
     * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
     * is converted to `-ms-`.
     */

    function hyphenateStyleName(name) {
      return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
    }

    function isCustomComponent(tagName, props) {
      if (tagName.indexOf('-') === -1) {
        return typeof props.is === 'string';
      }

      switch (tagName) {
        // These are reserved SVG and MathML elements.
        // We don't mind this whitelist too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return false;

        default:
          return true;
      }
    }

    var warnValidStyle = function () {};

    {
      // 'msTransform' is correct, but the other prefixes should be capitalized
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var msPattern$1 = /^-ms-/;
      var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnedForNaNValue = false;
      var warnedForInfinityValue = false;

      var camelize = function (string) {
        return string.replace(hyphenPattern, function (_, character) {
          return character.toUpperCase();
        });
      };

      var warnHyphenatedStyleName = function (name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }

        warnedStyleNames[name] = true;
        warning$1(false, 'Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        camelize(name.replace(msPattern$1, 'ms-')));
      };

      var warnBadVendoredStyleName = function (name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }

        warnedStyleNames[name] = true;
        warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
      };

      var warnStyleValueWithSemicolon = function (name, value) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }

        warnedStyleValues[value] = true;
        warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
      };

      var warnStyleValueIsNaN = function (name, value) {
        if (warnedForNaNValue) {
          return;
        }

        warnedForNaNValue = true;
        warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
      };

      var warnStyleValueIsInfinity = function (name, value) {
        if (warnedForInfinityValue) {
          return;
        }

        warnedForInfinityValue = true;
        warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
      };

      warnValidStyle = function (name, value) {
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value);
        }

        if (typeof value === 'number') {
          if (isNaN(value)) {
            warnStyleValueIsNaN(name, value);
          } else if (!isFinite(value)) {
            warnStyleValueIsInfinity(name, value);
          }
        }
      };
    }
    var warnValidStyle$1 = warnValidStyle;
    var ariaProperties = {
      'aria-current': 0,
      // state
      'aria-details': 0,
      'aria-disabled': 0,
      // state
      'aria-hidden': 0,
      // state
      'aria-invalid': 0,
      // state
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      // Widget Attributes
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      // Live Region Attributes
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      // Drag-and-Drop Attributes
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      // Relationship Attributes
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0
    };
    var warnedProperties = {};
    var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
    var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

    function validateProperty(tagName, name) {
      if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
        return true;
      }

      if (rARIACamel.test(name)) {
        var ariaName = 'aria-' + name.slice(4).toLowerCase();
        var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
        // DOM properties, then it is an invalid aria-* attribute.

        if (correctName == null) {
          warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
          warnedProperties[name] = true;
          return true;
        } // aria-* attributes should be lowercase; suggest the lowercase version.


        if (name !== correctName) {
          warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
          warnedProperties[name] = true;
          return true;
        }
      }

      if (rARIA.test(name)) {
        var lowerCasedName = name.toLowerCase();
        var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
        // DOM properties, then it is an invalid aria-* attribute.

        if (standardName == null) {
          warnedProperties[name] = true;
          return false;
        } // aria-* attributes should be lowercase; suggest the lowercase version.


        if (name !== standardName) {
          warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
          warnedProperties[name] = true;
          return true;
        }
      }

      return true;
    }

    function warnInvalidARIAProps(type, props) {
      var invalidProps = [];

      for (var key in props) {
        var isValid = validateProperty(type, key);

        if (!isValid) {
          invalidProps.push(key);
        }
      }

      var unknownPropString = invalidProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');

      if (invalidProps.length === 1) {
        warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
      } else if (invalidProps.length > 1) {
        warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
      }
    }

    function validateProperties(type, props) {
      if (isCustomComponent(type, props)) {
        return;
      }

      warnInvalidARIAProps(type, props);
    }

    var didWarnValueNull = false;

    function validateProperties$1(type, props) {
      if (type !== 'input' && type !== 'textarea' && type !== 'select') {
        return;
      }

      if (props != null && props.value === null && !didWarnValueNull) {
        didWarnValueNull = true;

        if (type === 'select' && props.multiple) {
          warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
        } else {
          warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
        }
      }
    }
    /**
     * Registers plugins so that they can extract and dispatch events.
     *
     * @see {EventPluginHub}
     */

    /**
     * Ordered list of injected plugins.
     */

    /**
     * Mapping from event name to dispatch config
     */

    /**
     * Mapping from registration name to plugin module
     */


    var registrationNameModules = {};
    /**
     * Mapping from registration name to event name
     */

    /**
     * Mapping from lowercase registration names to the properly cased version,
     * used to warn in the case of missing event handlers. Available
     * only in true.
     * @type {Object}
     */

    var possibleRegistrationNames = {}; // Trust the developer to only use possibleRegistrationNames in true

    /**
     * Injects an ordering of plugins (by plugin name). This allows the ordering
     * to be decoupled from injection of the actual plugins so that ordering is
     * always deterministic regardless of packaging, on-the-fly injection, etc.
     *
     * @param {array} InjectedEventPluginOrder
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginOrder}
     */

    /**
     * Injects plugins to be used by `EventPluginHub`. The plugin names must be
     * in the ordering injected by `injectEventPluginOrder`.
     *
     * Plugins can be injected as part of page initialization or on-the-fly.
     *
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginsByName}
     */
    // When adding attributes to the HTML or SVG whitelist, be sure to
    // also add them to this module to ensure casing and incorrect name
    // warnings.

    var possibleStandardNames = {
      // HTML
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      class: 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      default: 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      for: 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',
      // SVG
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      in: 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      typeof: 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan'
    };

    var validateProperty$1 = function () {};

    {
      var warnedProperties$1 = {};
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var EVENT_NAME_REGEX = /^on./;
      var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
      var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
      var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

      validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
        if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
          return true;
        }

        var lowerCasedName = name.toLowerCase();

        if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
          warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
          warnedProperties$1[name] = true;
          return true;
        } // We can't rely on the event system being injected on the server.


        if (canUseEventSystem) {
          if (registrationNameModules.hasOwnProperty(name)) {
            return true;
          }

          var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

          if (registrationName != null) {
            warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
            warnedProperties$1[name] = true;
            return true;
          }

          if (EVENT_NAME_REGEX.test(name)) {
            warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (EVENT_NAME_REGEX.test(name)) {
          // If no event plugins have been injected, we are in a server environment.
          // So we can't tell if the event name is correct for sure, but we can filter
          // out known bad ones like `onclick`. We can't suggest a specific replacement though.
          if (INVALID_EVENT_NAME_REGEX.test(name)) {
            warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
          }

          warnedProperties$1[name] = true;
          return true;
        } // Let the ARIA attribute hook validate ARIA attributes


        if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
          return true;
        }

        if (lowerCasedName === 'innerhtml') {
          warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
          warnedProperties$1[name] = true;
          return true;
        }

        if (lowerCasedName === 'aria') {
          warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
          warnedProperties$1[name] = true;
          return true;
        }

        if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
          warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
          warnedProperties$1[name] = true;
          return true;
        }

        if (typeof value === 'number' && isNaN(value)) {
          warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
          warnedProperties$1[name] = true;
          return true;
        }

        var propertyInfo = getPropertyInfo(name);
        var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
          var standardName = possibleStandardNames[lowerCasedName];

          if (standardName !== name) {
            warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (!isReserved && name !== lowerCasedName) {
          // Unknown attributes should have lowercase casing since that's how they
          // will be cased anyway with server rendering.
          warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
          warnedProperties$1[name] = true;
          return true;
        }

        if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          if (value) {
            warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
          } else {
            warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
          }

          warnedProperties$1[name] = true;
          return true;
        } // Now that we've validated casing, do not validate
        // data types for reserved props


        if (isReserved) {
          return true;
        } // Warn when a known attribute is a bad type


        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          warnedProperties$1[name] = true;
          return false;
        } // Warn when passing the strings 'false' or 'true' into a boolean prop


        if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
          warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
          warnedProperties$1[name] = true;
          return true;
        }

        return true;
      };
    }

    var warnUnknownProperties = function (type, props, canUseEventSystem) {
      var unknownProps = [];

      for (var key in props) {
        var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

        if (!isValid) {
          unknownProps.push(key);
        }
      }

      var unknownPropString = unknownProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');

      if (unknownProps.length === 1) {
        warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
      } else if (unknownProps.length > 1) {
        warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
      }
    };

    function validateProperties$2(type, props, canUseEventSystem) {
      if (isCustomComponent(type, props)) {
        return;
      }

      warnUnknownProperties(type, props, canUseEventSystem);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    } // Based on reading the React.Children implementation. TODO: type this somewhere?


    var toArray = React.Children.toArray; // This is only used in DEV.
    // Each entry is `this.stack` from a currently executing renderer instance.
    // (There may be more than one because ReactDOMServer is reentrant).
    // Each stack is an array of frames which may contain nested stacks of elements.

    var currentDebugStacks = [];
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var ReactDebugCurrentFrame = void 0;
    var prevGetCurrentStackImpl = null;

    var getCurrentServerStackImpl = function () {
      return '';
    };

    var describeStackFrame = function (element) {
      return '';
    };

    var validatePropertiesInDevelopment = function (type, props) {};

    var pushCurrentDebugStack = function (stack) {};

    var pushElementToDebugStack = function (element) {};

    var popCurrentDebugStack = function () {};

    var hasWarnedAboutUsingContextAsConsumer = false;
    {
      ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      validatePropertiesInDevelopment = function (type, props) {
        validateProperties(type, props);
        validateProperties$1(type, props);
        validateProperties$2(type, props,
        /* canUseEventSystem */
        false);
      };

      describeStackFrame = function (element) {
        var source = element._source;
        var type = element.type;
        var name = getComponentName(type);
        var ownerName = null;
        return describeComponentFrame(name, source, ownerName);
      };

      pushCurrentDebugStack = function (stack) {
        currentDebugStacks.push(stack);

        if (currentDebugStacks.length === 1) {
          // We are entering a server renderer.
          // Remember the previous (e.g. client) global stack implementation.
          prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
          ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
        }
      };

      pushElementToDebugStack = function (element) {
        // For the innermost executing ReactDOMServer call,
        var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

        var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

        frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
        // children and directly handle them in an inner loop instead of
        // creating separate frames for them.
      };

      popCurrentDebugStack = function () {
        currentDebugStacks.pop();

        if (currentDebugStacks.length === 0) {
          // We are exiting the server renderer.
          // Restore the previous (e.g. client) global stack implementation.
          ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
          prevGetCurrentStackImpl = null;
        }
      };

      getCurrentServerStackImpl = function () {
        if (currentDebugStacks.length === 0) {
          // Nothing is currently rendering.
          return '';
        } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
        // Take the frames from the innermost call which is the last in the array.


        var frames = currentDebugStacks[currentDebugStacks.length - 1];
        var stack = ''; // Go through every frame in the stack from the innermost one.

        for (var i = frames.length - 1; i >= 0; i--) {
          var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
          // This is because single-child nesting doesn't create materialized frames.
          // Instead it would push them through `pushElementToDebugStack()`.

          var _debugElementStack = frame.debugElementStack;

          for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
            stack += describeStackFrame(_debugElementStack[ii]);
          }
        }

        return stack;
      };
    }
    var didWarnDefaultInputValue = false;
    var didWarnDefaultChecked = false;
    var didWarnDefaultSelectValue = false;
    var didWarnDefaultTextareaValue = false;
    var didWarnInvalidOptionChildren = false;
    var didWarnAboutNoopUpdateForComponent = {};
    var didWarnAboutBadClass = {};
    var didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUndefinedDerivedState = {};
    var didWarnAboutUninitializedState = {};
    var valuePropNames = ['value', 'defaultValue'];
    var newlineEatingTags = {
      listing: true,
      pre: true,
      textarea: true
    }; // We accept any tag to be rendered but since this gets injected into arbitrary
    // HTML, we want to make sure that it's a safe tag.
    // http://www.w3.org/TR/REC-xml/#NT-Name

    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

    var validatedTagCache = {};

    function validateDangerousTag(tag) {
      if (!validatedTagCache.hasOwnProperty(tag)) {
        !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
        validatedTagCache[tag] = true;
      }
    }

    var styleNameCache = {};

    var processStyleName = function (styleName) {
      if (styleNameCache.hasOwnProperty(styleName)) {
        return styleNameCache[styleName];
      }

      var result = hyphenateStyleName(styleName);
      styleNameCache[styleName] = result;
      return result;
    };

    function createMarkupForStyles(styles) {
      var serialized = '';
      var delimiter = '';

      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }

        var isCustomProperty = styleName.indexOf('--') === 0;
        var styleValue = styles[styleName];
        {
          if (!isCustomProperty) {
            warnValidStyle$1(styleName, styleValue);
          }
        }

        if (styleValue != null) {
          serialized += delimiter + processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
          delimiter = ';';
        }
      }

      return serialized || null;
    }

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;

        if (didWarnAboutNoopUpdateForComponent[warningKey]) {
          return;
        }

        warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
        didWarnAboutNoopUpdateForComponent[warningKey] = true;
      }
    }

    function shouldConstruct(Component) {
      return Component.prototype && Component.prototype.isReactComponent;
    }

    function getNonChildrenInnerMarkup(props) {
      var innerHTML = props.dangerouslySetInnerHTML;

      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          return innerHTML.__html;
        }
      } else {
        var content = props.children;

        if (typeof content === 'string' || typeof content === 'number') {
          return escapeTextForBrowser(content);
        }
      }

      return null;
    }

    function flattenTopLevelChildren(children) {
      if (!React.isValidElement(children)) {
        return toArray(children);
      }

      var element = children;

      if (element.type !== REACT_FRAGMENT_TYPE) {
        return [element];
      }

      var fragmentChildren = element.props.children;

      if (!React.isValidElement(fragmentChildren)) {
        return toArray(fragmentChildren);
      }

      var fragmentChildElement = fragmentChildren;
      return [fragmentChildElement];
    }

    function flattenOptionChildren(children) {
      if (children === undefined || children === null) {
        return children;
      }

      var content = ''; // Flatten children and warn if they aren't strings or numbers;
      // invalid types are ignored.

      React.Children.forEach(children, function (child) {
        if (child == null) {
          return;
        }

        content += child;
        {
          if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
            didWarnInvalidOptionChildren = true;
            warning$1(false, 'Only strings and numbers are supported as <option> children.');
          }
        }
      });
      return content;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var STYLE = 'style';
    var RESERVED_PROPS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };

    function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
      var ret = '<' + tagVerbatim;

      for (var propKey in props) {
        if (!hasOwnProperty.call(props, propKey)) {
          continue;
        }

        var propValue = props[propKey];

        if (propValue == null) {
          continue;
        }

        if (propKey === STYLE) {
          propValue = createMarkupForStyles(propValue);
        }

        var markup = null;

        if (isCustomComponent(tagLowercase, props)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = createMarkupForProperty(propKey, propValue);
        }

        if (markup) {
          ret += ' ' + markup;
        }
      } // For static pages, no need to put React ID and checksum. Saves lots of
      // bytes.


      if (makeStaticMarkup) {
        return ret;
      }

      if (isRootElement) {
        ret += ' ' + createMarkupForRoot();
      }

      return ret;
    }

    function validateRenderResult(child, type) {
      if (child === undefined) {
        invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
      }
    }

    function resolve(child, context, threadID) {
      while (React.isValidElement(child)) {
        // Safe because we just checked it's an element.
        var element = child;
        var Component = element.type;
        {
          pushElementToDebugStack(element);
        }

        if (typeof Component !== 'function') {
          break;
        }

        processChild(element, Component);
      } // Extra closure so queue and replace can be captured properly


      function processChild(element, Component) {
        var publicContext = processContext(Component, context, threadID);
        var queue = [];
        var replace = false;
        var updater = {
          isMounted: function (publicInstance) {
            return false;
          },
          enqueueForceUpdate: function (publicInstance) {
            if (queue === null) {
              warnNoop(publicInstance, 'forceUpdate');
              return null;
            }
          },
          enqueueReplaceState: function (publicInstance, completeState) {
            replace = true;
            queue = [completeState];
          },
          enqueueSetState: function (publicInstance, currentPartialState) {
            if (queue === null) {
              warnNoop(publicInstance, 'setState');
              return null;
            }

            queue.push(currentPartialState);
          }
        };
        var inst = void 0;

        if (shouldConstruct(Component)) {
          inst = new Component(element.props, publicContext, updater);

          if (typeof Component.getDerivedStateFromProps === 'function') {
            {
              if (inst.state === null || inst.state === undefined) {
                var componentName = getComponentName(Component) || 'Unknown';

                if (!didWarnAboutUninitializedState[componentName]) {
                  warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
                  didWarnAboutUninitializedState[componentName] = true;
                }
              }
            }
            var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);
            {
              if (partialState === undefined) {
                var _componentName = getComponentName(Component) || 'Unknown';

                if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                  warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
                  didWarnAboutUndefinedDerivedState[_componentName] = true;
                }
              }
            }

            if (partialState != null) {
              inst.state = _assign({}, inst.state, partialState);
            }
          }
        } else {
          {
            if (Component.prototype && typeof Component.prototype.render === 'function') {
              var _componentName2 = getComponentName(Component) || 'Unknown';

              if (!didWarnAboutBadClass[_componentName2]) {
                warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
                didWarnAboutBadClass[_componentName2] = true;
              }
            }
          }
          var componentIdentity = {};
          prepareToUseHooks(componentIdentity);
          inst = Component(element.props, publicContext, updater);
          inst = finishHooks(Component, element.props, inst, publicContext);

          if (inst == null || inst.render == null) {
            child = inst;
            validateRenderResult(child, Component);
            return;
          }
        }

        inst.props = element.props;
        inst.context = publicContext;
        inst.updater = updater;
        var initialState = inst.state;

        if (initialState === undefined) {
          inst.state = initialState = null;
        }

        if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
          if (typeof inst.componentWillMount === 'function') {
            {
              if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
                var _componentName3 = getComponentName(Component) || 'Unknown';

                if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
                  lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
                  didWarnAboutDeprecatedWillMount[_componentName3] = true;
                }
              }
            } // In order to support react-lifecycles-compat polyfilled components,
            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.

            if (typeof Component.getDerivedStateFromProps !== 'function') {
              inst.componentWillMount();
            }
          }

          if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
            // In order to support react-lifecycles-compat polyfilled components,
            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
            inst.UNSAFE_componentWillMount();
          }

          if (queue.length) {
            var oldQueue = queue;
            var oldReplace = replace;
            queue = null;
            replace = false;

            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;

              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];

                var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

                if (_partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = _assign({}, nextState, _partialState);
                  } else {
                    _assign(nextState, _partialState);
                  }
                }
              }

              inst.state = nextState;
            }
          } else {
            queue = null;
          }
        }

        child = inst.render();
        {
          if (child === undefined && inst.render._isMockFunction) {
            // This is probably bad practice. Consider warning here and
            // deprecating this convenience.
            child = null;
          }
        }
        validateRenderResult(child, Component);
        var childContext = void 0;

        if (typeof inst.getChildContext === 'function') {
          var childContextTypes = Component.childContextTypes;

          if (typeof childContextTypes === 'object') {
            childContext = inst.getChildContext();

            for (var contextKey in childContext) {
              !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
            }
          } else {
            warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }

        if (childContext) {
          context = _assign({}, context, childContext);
        }
      }

      return {
        child: child,
        context: context
      };
    }

    var ReactDOMServerRenderer = function () {
      // DEV-only
      // TODO: type this more strictly:
      function ReactDOMServerRenderer(children, makeStaticMarkup) {
        _classCallCheck(this, ReactDOMServerRenderer);

        var flatChildren = flattenTopLevelChildren(children);
        var topFrame = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: Namespaces.html,
          children: flatChildren,
          childIndex: 0,
          context: emptyObject,
          footer: ''
        };
        {
          topFrame.debugElementStack = [];
        }
        this.threadID = allocThreadID();
        this.stack = [topFrame];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = makeStaticMarkup;
        this.suspenseDepth = 0; // Context (new API)

        this.contextIndex = -1;
        this.contextStack = [];
        this.contextValueStack = [];
        {
          this.contextProviderStack = [];
        }
      }

      ReactDOMServerRenderer.prototype.destroy = function destroy() {
        if (!this.exhausted) {
          this.exhausted = true;
          this.clearProviders();
          freeThreadID(this.threadID);
        }
      };
      /**
       * Note: We use just two stacks regardless of how many context providers you have.
       * Providers are always popped in the reverse order to how they were pushed
       * so we always know on the way down which provider you'll encounter next on the way up.
       * On the way down, we push the current provider, and its context value *before*
       * we mutated it, onto the stacks. Therefore, on the way up, we always know which
       * provider needs to be "restored" to which value.
       * https://github.com/facebook/react/pull/12985#issuecomment-396301248
       */


      ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
        var index = ++this.contextIndex;
        var context = provider.type._context;
        var threadID = this.threadID;
        validateContextBounds(context, threadID);
        var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

        this.contextStack[index] = context;
        this.contextValueStack[index] = previousValue;
        {
          // Only used for push/pop mismatch warnings.
          this.contextProviderStack[index] = provider;
        } // Mutate the current value.

        context[threadID] = provider.props.value;
      };

      ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
        var index = this.contextIndex;
        {
          !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
        }
        var context = this.contextStack[index];
        var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
        // because conceptually they are deletions--as long as we
        // promise to never access values beyond `this.contextIndex`.

        this.contextStack[index] = null;
        this.contextValueStack[index] = null;
        {
          this.contextProviderStack[index] = null;
        }
        this.contextIndex--; // Restore to the previous value we stored as we were walking down.
        // We've already verified that this context has been expanded to accommodate
        // this thread id, so we don't need to do it again.

        context[this.threadID] = previousValue;
      };

      ReactDOMServerRenderer.prototype.clearProviders = function clearProviders() {
        // Restore any remaining providers on the stack to previous values
        for (var index = this.contextIndex; index >= 0; index--) {
          var _context = this.contextStack[index];
          var previousValue = this.contextValueStack[index];
          _context[this.threadID] = previousValue;
        }
      };

      ReactDOMServerRenderer.prototype.read = function read(bytes) {
        if (this.exhausted) {
          return null;
        }

        var prevThreadID = currentThreadID;
        setCurrentThreadID(this.threadID);
        var prevDispatcher = ReactCurrentDispatcher.current;
        ReactCurrentDispatcher.current = Dispatcher;

        try {
          // Markup generated within <Suspense> ends up buffered until we know
          // nothing in that boundary suspended
          var out = [''];
          var suspended = false;

          while (out[0].length < bytes) {
            if (this.stack.length === 0) {
              this.exhausted = true;
              freeThreadID(this.threadID);
              break;
            }

            var frame = this.stack[this.stack.length - 1];

            if (suspended || frame.childIndex >= frame.children.length) {
              var _footer = frame.footer;

              if (_footer !== '') {
                this.previousWasTextNode = false;
              }

              this.stack.pop();

              if (frame.type === 'select') {
                this.currentSelectValue = null;
              } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                var provider = frame.type;
                this.popProvider(provider);
              } else if (frame.type === REACT_SUSPENSE_TYPE) {
                this.suspenseDepth--;
                var buffered = out.pop();

                if (suspended) {
                  suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

                  var _fallbackFrame = frame.fallbackFrame;
                  !_fallbackFrame ? invariant(false, 'suspense fallback not found, something is broken') : void 0;
                  this.stack.push(_fallbackFrame); // Skip flushing output since we're switching to the fallback

                  continue;
                } else {
                  out[this.suspenseDepth] += buffered;
                }
              } // Flush output


              out[this.suspenseDepth] += _footer;
              continue;
            }

            var child = frame.children[frame.childIndex++];
            var outBuffer = '';
            {
              pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

              frame.debugElementStack.length = 0;
            }

            try {
              outBuffer += this.render(child, frame.context, frame.domNamespace);
            } catch (err) {
              if (enableSuspenseServerRenderer && typeof err.then === 'function') {
                suspended = true;
              } else {
                throw err;
              }
            } finally {
              {
                popCurrentDebugStack();
              }
            }

            if (out.length <= this.suspenseDepth) {
              out.push('');
            }

            out[this.suspenseDepth] += outBuffer;
          }

          return out[0];
        } finally {
          ReactCurrentDispatcher.current = prevDispatcher;
          setCurrentThreadID(prevThreadID);
        }
      };

      ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
        if (typeof child === 'string' || typeof child === 'number') {
          var text = '' + child;

          if (text === '') {
            return '';
          }

          if (this.makeStaticMarkup) {
            return escapeTextForBrowser(text);
          }

          if (this.previousWasTextNode) {
            return '<!-- -->' + escapeTextForBrowser(text);
          }

          this.previousWasTextNode = true;
          return escapeTextForBrowser(text);
        } else {
          var nextChild = void 0;

          var _resolve = resolve(child, context, this.threadID);

          nextChild = _resolve.child;
          context = _resolve.context;

          if (nextChild === null || nextChild === false) {
            return '';
          } else if (!React.isValidElement(nextChild)) {
            if (nextChild != null && nextChild.$$typeof != null) {
              // Catch unexpected special types early.
              var $$typeof = nextChild.$$typeof;
              !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0; // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.

              invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
            }

            var nextChildren = toArray(nextChild);
            var frame = {
              type: null,
              domNamespace: parentNamespace,
              children: nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              frame.debugElementStack = [];
            }
            this.stack.push(frame);
            return '';
          } // Safe because we just checked it's an element.


          var nextElement = nextChild;
          var elementType = nextElement.type;

          if (typeof elementType === 'string') {
            return this.renderDOM(nextElement, context, parentNamespace);
          }

          switch (elementType) {
            case REACT_STRICT_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE:
              {
                var _nextChildren = toArray(nextChild.props.children);

                var _frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };
                {
                  _frame.debugElementStack = [];
                }
                this.stack.push(_frame);
                return '';
              }

            case REACT_SUSPENSE_TYPE:
              {
                if (enableSuspenseServerRenderer) {
                  var fallback = nextChild.props.fallback;

                  if (fallback === undefined) {
                    // If there is no fallback, then this just behaves as a fragment.
                    var _nextChildren3 = toArray(nextChild.props.children);

                    var _frame3 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren3,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };
                    {
                      _frame3.debugElementStack = [];
                    }
                    this.stack.push(_frame3);
                    return '';
                  }

                  var fallbackChildren = toArray(fallback);

                  var _nextChildren2 = toArray(nextChild.props.children);

                  var _fallbackFrame2 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: fallbackChildren,
                    childIndex: 0,
                    context: context,
                    footer: '',
                    out: ''
                  };
                  var _frame2 = {
                    fallbackFrame: _fallbackFrame2,
                    type: REACT_SUSPENSE_TYPE,
                    domNamespace: parentNamespace,
                    children: _nextChildren2,
                    childIndex: 0,
                    context: context,
                    footer: '<!--/$-->'
                  };
                  {
                    _frame2.debugElementStack = [];
                    _fallbackFrame2.debugElementStack = [];
                  }
                  this.stack.push(_frame2);
                  this.suspenseDepth++;
                  return '<!--$-->';
                } else {
                  invariant(false, 'ReactDOMServer does not yet support Suspense.');
                }
              }
            // eslint-disable-next-line-no-fallthrough

            default:
              break;
          }

          if (typeof elementType === 'object' && elementType !== null) {
            switch (elementType.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                {
                  var element = nextChild;

                  var _nextChildren4 = void 0;

                  var componentIdentity = {};
                  prepareToUseHooks(componentIdentity);
                  _nextChildren4 = elementType.render(element.props, element.ref);
                  _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
                  _nextChildren4 = toArray(_nextChildren4);
                  var _frame4 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren4,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame4.debugElementStack = [];
                  }
                  this.stack.push(_frame4);
                  return '';
                }

              case REACT_MEMO_TYPE:
                {
                  var _element = nextChild;
                  var _nextChildren5 = [React.createElement(elementType.type, _assign({
                    ref: _element.ref
                  }, _element.props))];
                  var _frame5 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren5,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame5.debugElementStack = [];
                  }
                  this.stack.push(_frame5);
                  return '';
                }

              case REACT_PROVIDER_TYPE:
                {
                  var provider = nextChild;
                  var nextProps = provider.props;

                  var _nextChildren6 = toArray(nextProps.children);

                  var _frame6 = {
                    type: provider,
                    domNamespace: parentNamespace,
                    children: _nextChildren6,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame6.debugElementStack = [];
                  }
                  this.pushProvider(provider);
                  this.stack.push(_frame6);
                  return '';
                }

              case REACT_CONTEXT_TYPE:
                {
                  var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
                  // DEV mode, we create a separate object for Context.Consumer that acts
                  // like a proxy to Context. This proxy object adds unnecessary code in PROD
                  // so we use the old behaviour (Context.Consumer references Context) to
                  // reduce size and overhead. The separate object references context via
                  // a property called "_context", which also gives us the ability to check
                  // in DEV mode if this property exists or not and warn if it does not.

                  {
                    if (reactContext._context === undefined) {
                      // This may be because it's a Context (rather than a Consumer).
                      // Or it may be because it's older React where they're the same thing.
                      // We only want to warn if we're sure it's a new React.
                      if (reactContext !== reactContext.Consumer) {
                        if (!hasWarnedAboutUsingContextAsConsumer) {
                          hasWarnedAboutUsingContextAsConsumer = true;
                          warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                        }
                      }
                    } else {
                      reactContext = reactContext._context;
                    }
                  }
                  var _nextProps = nextChild.props;
                  var threadID = this.threadID;
                  validateContextBounds(reactContext, threadID);
                  var nextValue = reactContext[threadID];

                  var _nextChildren7 = toArray(_nextProps.children(nextValue));

                  var _frame7 = {
                    type: nextChild,
                    domNamespace: parentNamespace,
                    children: _nextChildren7,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame7.debugElementStack = [];
                  }
                  this.stack.push(_frame7);
                  return '';
                }

              case REACT_LAZY_TYPE:
                invariant(false, 'ReactDOMServer does not yet support lazy-loaded components.');
            }
          }

          var info = '';
          {
            var owner = nextElement._owner;

            if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
            }

            var ownerName = owner ? getComponentName(owner) : null;

            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }
          }
          invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
        }
      };

      ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
        var tag = element.type.toLowerCase();
        var namespace = parentNamespace;

        if (parentNamespace === Namespaces.html) {
          namespace = getIntrinsicNamespace(tag);
        }

        {
          if (namespace === Namespaces.html) {
            // Should this check be gated by parent namespace? Not sure we want to
            // allow <SVG> or <mATH>.
            !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
          }
        }
        validateDangerousTag(tag);
        var props = element.props;

        if (tag === 'input') {
          {
            ReactControlledValuePropTypes.checkPropTypes('input', props);

            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
              warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultChecked = true;
            }

            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
              warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultInputValue = true;
            }
          }
          props = _assign({
            type: undefined
          }, props, {
            defaultChecked: undefined,
            defaultValue: undefined,
            value: props.value != null ? props.value : props.defaultValue,
            checked: props.checked != null ? props.checked : props.defaultChecked
          });
        } else if (tag === 'textarea') {
          {
            ReactControlledValuePropTypes.checkPropTypes('textarea', props);

            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
              warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultTextareaValue = true;
            }
          }
          var initialValue = props.value;

          if (initialValue == null) {
            var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

            var textareaChildren = props.children;

            if (textareaChildren != null) {
              {
                warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
              }
              !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;

              if (Array.isArray(textareaChildren)) {
                !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
                textareaChildren = textareaChildren[0];
              }

              defaultValue = '' + textareaChildren;
            }

            if (defaultValue == null) {
              defaultValue = '';
            }

            initialValue = defaultValue;
          }

          props = _assign({}, props, {
            value: undefined,
            children: '' + initialValue
          });
        } else if (tag === 'select') {
          {
            ReactControlledValuePropTypes.checkPropTypes('select', props);

            for (var i = 0; i < valuePropNames.length; i++) {
              var propName = valuePropNames[i];

              if (props[propName] == null) {
                continue;
              }

              var isArray = Array.isArray(props[propName]);

              if (props.multiple && !isArray) {
                warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
              } else if (!props.multiple && isArray) {
                warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
              }
            }

            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
              warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultSelectValue = true;
            }
          }
          this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
          props = _assign({}, props, {
            value: undefined
          });
        } else if (tag === 'option') {
          var selected = null;
          var selectValue = this.currentSelectValue;
          var optionChildren = flattenOptionChildren(props.children);

          if (selectValue != null) {
            var value = void 0;

            if (props.value != null) {
              value = props.value + '';
            } else {
              value = optionChildren;
            }

            selected = false;

            if (Array.isArray(selectValue)) {
              // multiple
              for (var j = 0; j < selectValue.length; j++) {
                if ('' + selectValue[j] === value) {
                  selected = true;
                  break;
                }
              }
            } else {
              selected = '' + selectValue === value;
            }

            props = _assign({
              selected: undefined,
              children: undefined
            }, props, {
              selected: selected,
              children: optionChildren
            });
          }
        }

        {
          validatePropertiesInDevelopment(tag, props);
        }
        assertValidProps(tag, props);
        var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
        var footer = '';

        if (omittedCloseTags.hasOwnProperty(tag)) {
          out += '/>';
        } else {
          out += '>';
          footer = '</' + element.type + '>';
        }

        var children = void 0;
        var innerMarkup = getNonChildrenInnerMarkup(props);

        if (innerMarkup != null) {
          children = [];

          if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
            // text/html ignores the first character in these tags if it's a newline
            // Prefer to break application/xml over text/html (for now) by adding
            // a newline specifically to get eaten by the parser. (Alternately for
            // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
            // \r is normalized out by HTMLTextAreaElement#value.)
            // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
            // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
            // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
            // See: Parsing of "textarea" "listing" and "pre" elements
            //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
            out += '\n';
          }

          out += innerMarkup;
        } else {
          children = toArray(props.children);
        }

        var frame = {
          domNamespace: getChildNamespace(parentNamespace, element.type),
          type: tag,
          children: children,
          childIndex: 0,
          context: context,
          footer: footer
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        this.previousWasTextNode = false;
        return out;
      };

      return ReactDOMServerRenderer;
    }();
    /**
     * Render a ReactElement to its initial HTML. This should only be used on the
     * server.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostring
     */


    function renderToString(element) {
      var renderer = new ReactDOMServerRenderer(element, false);

      try {
        var markup = renderer.read(Infinity);
        return markup;
      } finally {
        renderer.destroy();
      }
    }
    /**
     * Similar to renderToString, except this doesn't create extra DOM attributes
     * such as data-react-id that React uses internally.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
     */


    function renderToStaticMarkup(element) {
      var renderer = new ReactDOMServerRenderer(element, true);

      try {
        var markup = renderer.read(Infinity);
        return markup;
      } finally {
        renderer.destroy();
      }
    }

    function _classCallCheck$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // This is a Readable Node.js stream which wraps the ReactDOMPartialRenderer.


    var ReactMarkupReadableStream = function (_Readable) {
      _inherits(ReactMarkupReadableStream, _Readable);

      function ReactMarkupReadableStream(element, makeStaticMarkup) {
        _classCallCheck$1(this, ReactMarkupReadableStream);

        var _this = _possibleConstructorReturn(this, _Readable.call(this, {})); // Calls the stream.Readable(options) constructor. Consider exposing built-in
        // features like highWaterMark in the future.


        _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup);
        return _this;
      }

      ReactMarkupReadableStream.prototype._destroy = function _destroy(err, callback) {
        this.partialRenderer.destroy();
        callback(err);
      };

      ReactMarkupReadableStream.prototype._read = function _read(size) {
        try {
          this.push(this.partialRenderer.read(size));
        } catch (err) {
          this.destroy(err);
        }
      };

      return ReactMarkupReadableStream;
    }(stream.Readable);
    /**
     * Render a ReactElement to its initial HTML. This should only be used on the
     * server.
     * See https://reactjs.org/docs/react-dom-server.html#rendertonodestream
     */


    function renderToNodeStream(element) {
      return new ReactMarkupReadableStream(element, false);
    }
    /**
     * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
     * such as data-react-id that React uses internally.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream
     */


    function renderToStaticNodeStream(element) {
      return new ReactMarkupReadableStream(element, true);
    } // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


    var ReactDOMServerNode = {
      renderToString: renderToString,
      renderToStaticMarkup: renderToStaticMarkup,
      renderToNodeStream: renderToNodeStream,
      renderToStaticNodeStream: renderToStaticNodeStream,
      version: ReactVersion
    };
    var ReactDOMServerNode$1 = Object.freeze({
      default: ReactDOMServerNode
    });
    var ReactDOMServer = ReactDOMServerNode$1 && ReactDOMServerNode || ReactDOMServerNode$1; // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest

    var server_node = ReactDOMServer.default || ReactDOMServer;
    module.exports = server_node;
  })();
}

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/server.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./server.node */ "./node_modules/react-dom/server.node.js");

/***/ }),

/***/ "./node_modules/react-dom/server.node.js":
/*!***********************************************!*\
  !*** ./node_modules/react-dom/server.node.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.development.js */ "./node_modules/react-dom/cjs/react-dom-server.node.development.js");
}

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/render-server/node_modules/react-helmet/lib/Helmet.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/auriel/Projects/js/aws-serverless-web-app/packages/render-server/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

    var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js"); // TODO: this is special because it gets imported during build.


    var ReactVersion = '16.8.6'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */


    var validateFormat = function () {};

    {
      validateFormat = function (format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }

    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);

      if (!condition) {
        var error = void 0;

        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame

        throw error;
      }
    } // Relying on the `invariant()` implementation lets us
    // preserve the format and params in the www builds.

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warningWithoutStack = function () {};

    {
      warningWithoutStack = function (condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }

        if (condition) {
          return;
        }

        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610

          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }
    var warningWithoutStack$1 = warningWithoutStack;
    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function (name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    };

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_CONCURRENT_MODE_TYPE:
          return 'ConcurrentMode';

        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
            }
        }
      }

      return null;
    }

    var ReactDebugCurrentFrame = {};
    var currentlyValidatingElement = null;

    function setCurrentlyValidatingElement(element) {
      {
        currentlyValidatingElement = element;
      }
    }

    {
      // Stack implementation injected by the current renderer.
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentlyValidatingElement) {
          var name = getComponentName(currentlyValidatingElement.type);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentOwner: ReactCurrentOwner,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      _assign(ReactSharedInternals, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    }
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = warningWithoutStack$1;
    {
      warning = function (condition, format) {
        if (condition) {
          return;
        }

        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }
    var warning$1 = warning;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown = void 0;
    var specialPropRefWarningShown = void 0;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} key
     * @param {string|object} ref
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @param {*} owner
     * @param {*} props
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName = void 0; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    /**
     * Return a function that produces ReactElements of a given type.
     * See https://reactjs.org/docs/react-api.html#createfactory
     */


    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;
      var propName = void 0; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps = void 0;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];

    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;

      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }
    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child = void 0;
      var nextName = void 0;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(children);
          var step = void 0;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;
          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
        }
      }

      return subtreeCount;
    }
    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof component === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;
      func.call(context, child, bookKeeping.count++);
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }

      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
      var mappedChild = func.call(context, child, bookKeeping.count++);

      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
          return c;
        });
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }

        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';

      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }

      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      return traverseAllChildren(children, function () {
        return null;
      }, null);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
        return child;
      });
      return result;
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    function lazy(ctor) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _ctor: ctor,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };
      {
        // In production, this would just set it on the object.
        var defaultProps = void 0;
        var propTypes = void 0;
        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        } else {
          !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
          render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
        }

        if (render != null) {
          !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
        }
      }
      return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
    }

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
      }
      return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;
      !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, inputs);
    }

    function useLayoutEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, inputs);
    }

    function useCallback(callback, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, inputs);
    }

    function useMemo(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, inputs);
    }

    function useImperativeHandle(ref, create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, inputs);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }
    /**
     * ReactElementValidator provides a wrapper around a element factory
     * which validates the props passed to the element. This is intended to be
     * used only in DEV and could be replaced by a static type checker for languages
     * that support it.
     */


    var propTypesMisspellWarningShown = void 0;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(elementProps) {
      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
        var source = elementProps.__source;
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
      }

      setCurrentlyValidatingElement(element);
      {
        warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
      }
      setCurrentlyValidatingElement(null);
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step = void 0;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      var type = element.type;

      if (type === null || type === undefined || typeof type === 'string') {
        return;
      }

      var name = getComponentName(type);
      var propTypes = void 0;

      if (typeof type === 'function') {
        propTypes = type.propTypes;
      } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      type.$$typeof === REACT_MEMO_TYPE)) {
        propTypes = type.propTypes;
      } else {
        return;
      }

      if (propTypes) {
        setCurrentlyValidatingElement(element);
        checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
        setCurrentlyValidatingElement(null);
      } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
        propTypesMisspellWarningShown = true;
        warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
      }

      if (typeof type.getDefaultProps === 'function') {
        !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      setCurrentlyValidatingElement(fragment);
      var keys = Object.keys(fragment.props);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (key !== 'children' && key !== 'key') {
          warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
          break;
        }
      }

      if (fragment.ref !== null) {
        warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
      }

      setCurrentlyValidatingElement(null);
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString = void 0;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }

        warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type; // Legacy hook: remove it

      {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    } // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.
    // Only used in www builds.
    // TODO: true? Here it might just be false.
    // Only used in www builds.
    // Only used in www builds.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.


    var enableStableConcurrentModeAPIs = false;
    var React = {
      Children: {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      },
      createRef: createRef,
      Component: Component,
      PureComponent: PureComponent,
      createContext: createContext,
      forwardRef: forwardRef,
      lazy: lazy,
      memo: memo,
      useCallback: useCallback,
      useContext: useContext,
      useEffect: useEffect,
      useImperativeHandle: useImperativeHandle,
      useDebugValue: useDebugValue,
      useLayoutEffect: useLayoutEffect,
      useMemo: useMemo,
      useReducer: useReducer,
      useRef: useRef,
      useState: useState,
      Fragment: REACT_FRAGMENT_TYPE,
      StrictMode: REACT_STRICT_MODE_TYPE,
      Suspense: REACT_SUSPENSE_TYPE,
      createElement: createElementWithValidation,
      cloneElement: cloneElementWithValidation,
      createFactory: createFactoryWithValidation,
      isValidElement: isValidElement,
      version: ReactVersion,
      unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
      unstable_Profiler: REACT_PROFILER_TYPE,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
    }; // Note: some APIs are added with feature flags.
    // Make sure that stable builds for open source
    // don't modify the React object to avoid deopts.
    // Also let's not expose their names in stable builds.

    if (enableStableConcurrentModeAPIs) {
      React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      React.Profiler = REACT_PROFILER_TYPE;
      React.unstable_ConcurrentMode = undefined;
      React.unstable_Profiler = undefined;
    }

    var React$2 = Object.freeze({
      default: React
    });
    var React$3 = React$2 && React || React$2; // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest.

    var react = React$3.default || React$3;
    module.exports = react;
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./src/lambda.tsx":
/*!************************!*\
  !*** ./src/lambda.tsx ***!
  \************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web_client_src_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web-client/src/components/App */ "../web-client/src/components/App.tsx");





async function handler(event, context) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  console.log('path', event.path);
  console.log('body', event.body); // TODO: prepare with query params&hash

  const location = event.path;
  const staticRouterContext = {};
  const appHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: location,
    context: staticRouterContext
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](web_client_src_components_App__WEBPACK_IMPORTED_MODULE_4__["ABC"], null)));
  const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a.renderStatic();
  const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToStaticMarkup"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("html", helmet.htmlAttributes.toComponent(), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("head", null, helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("body", helmet.bodyAttributes.toComponent(), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: appHtml
    }
  }))));
  return {
    statusCode: 200,
    body
  };
}

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3dlYi1jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLXNlcnZlci5ub2RlLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbWJkYS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJDb250YWN0c1BhZ2UiLCJOb3RGb3VuZFBhZ2UiLCJJbnRlcm5hbEVycm9yUGFnZSIsIkhlYWRlciIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUb1N0cmluZyIsIkFCQyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImtleSIsImNhbGwiLCJwcmludFdhcm5pbmciLCJwcm9jZXNzIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJyZXF1aXJlIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiaGFzIiwiRnVuY3Rpb24iLCJiaW5kIiwidGV4dCIsIm1lc3NhZ2UiLCJlcnJvciIsIkVycm9yIiwieCIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJuYW1lIiwiZXgiLCJzdGFjayIsInJlc2V0V2FybmluZ0NhY2hlIiwiX2Fzc2lnbiIsIlJlYWN0Iiwic3RyZWFtIiwiUmVhY3RWZXJzaW9uIiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJhcmdzIiwiYXJnSW5kZXgiLCJyZXBsYWNlIiwiZnJhbWVzVG9Qb3AiLCJ3YXJuaW5nV2l0aG91dFN0YWNrIiwiX2xlbiIsIkFycmF5IiwiX2tleSIsImFyZ3NXaXRoRm9ybWF0IiwiaXRlbSIsInVuc2hpZnQiLCJhcHBseSIsIndhcm5pbmdXaXRob3V0U3RhY2skMSIsImhhc1N5bWJvbCIsIlN5bWJvbCIsImZvciIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSZXNvbHZlZCIsInJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCIsImxhenlDb21wb25lbnQiLCJfc3RhdHVzIiwiX3Jlc3VsdCIsImdldFdyYXBwZWROYW1lIiwib3V0ZXJUeXBlIiwiaW5uZXJUeXBlIiwid3JhcHBlck5hbWUiLCJmdW5jdGlvbk5hbWUiLCJkaXNwbGF5TmFtZSIsImdldENvbXBvbmVudE5hbWUiLCJ0eXBlIiwidGFnIiwiJCR0eXBlb2YiLCJyZW5kZXIiLCJ0aGVuYWJsZSIsInJlc29sdmVkVGhlbmFibGUiLCJsb3dQcmlvcml0eVdhcm5pbmciLCJ3YXJuIiwiX2xlbjIiLCJfa2V5MiIsImNvbmNhdCIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJjdXJyZW50Iiwid2FybmluZyIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJnZXRTdGFja0FkZGVuZHVtIiwid2FybmluZyQxIiwiQkVGT1JFX1NMQVNIX1JFIiwiZGVzY3JpYmVDb21wb25lbnRGcmFtZSIsIm93bmVyTmFtZSIsInNvdXJjZUluZm8iLCJwYXRoIiwiZmlsZU5hbWUiLCJ0ZXN0IiwibWF0Y2giLCJwYXRoQmVmb3JlU2xhc2giLCJmb2xkZXJOYW1lIiwibGluZU51bWJlciIsIndhcm5BYm91dERlcHJlY2F0ZWRMaWZlY3ljbGVzIiwiZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlciIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSIsImRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZSIsIlNldCIsImVtcHR5T2JqZWN0IiwiZnJlZXplIiwibWFza0NvbnRleHQiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIiwibWFza2VkQ29udGV4dCIsImNvbnRleHROYW1lIiwiY2hlY2tDb250ZXh0VHlwZXMiLCJnZXRDdXJyZW50U3RhY2siLCJ2YWxpZGF0ZUNvbnRleHRCb3VuZHMiLCJ0aHJlYWRJRCIsIl90aHJlYWRDb3VudCIsIl9jdXJyZW50VmFsdWUyIiwicHJvY2Vzc0NvbnRleHQiLCJjb250ZXh0VHlwZSIsImlzVmFsaWQiLCJfY29udGV4dCIsImFkZCIsImFkZGVuZHVtIiwibmV4dEF2YWlsYWJsZVRocmVhZElEcyIsIlVpbnQxNkFycmF5IiwiZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSIsIm9sZEFycmF5Iiwib2xkU2l6ZSIsIm5ld1NpemUiLCJuZXdBcnJheSIsInNldCIsIl9pIiwiYWxsb2NUaHJlYWRJRCIsIm5leHRJRCIsImZyZWVUaHJlYWRJRCIsImlkIiwiUkVTRVJWRUQiLCJTVFJJTkciLCJCT09MRUFOSVNIX1NUUklORyIsIkJPT0xFQU4iLCJPVkVSTE9BREVEX0JPT0xFQU4iLCJOVU1FUklDIiwiUE9TSVRJVkVfTlVNRVJJQyIsIkFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIiLCJBVFRSSUJVVEVfTkFNRV9DSEFSIiwiUk9PVF9BVFRSSUJVVEVfTkFNRSIsIlZBTElEX0FUVFJJQlVURV9OQU1FX1JFR0VYIiwiUmVnRXhwIiwiaGFzT3duUHJvcGVydHkkMSIsImlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUiLCJ2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUiLCJpc0F0dHJpYnV0ZU5hbWVTYWZlIiwiYXR0cmlidXRlTmFtZSIsInNob3VsZElnbm9yZUF0dHJpYnV0ZSIsInByb3BlcnR5SW5mbyIsImlzQ3VzdG9tQ29tcG9uZW50VGFnIiwic2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmciLCJ2YWx1ZSIsImFjY2VwdHNCb29sZWFucyIsInByZWZpeCIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJzaG91bGRSZW1vdmVBdHRyaWJ1dGUiLCJpc05hTiIsImdldFByb3BlcnR5SW5mbyIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eUluZm9SZWNvcmQiLCJtdXN0VXNlUHJvcGVydHkiLCJhdHRyaWJ1dGVOYW1lc3BhY2UiLCJwcm9wZXJ0eU5hbWUiLCJfcmVmIiwiQ0FNRUxJWkUiLCJjYXBpdGFsaXplIiwidG9rZW4iLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoSHRtbFJlZ0V4cCIsImVzY2FwZUh0bWwiLCJzdHJpbmciLCJzdHIiLCJleGVjIiwiZXNjYXBlIiwiaHRtbCIsImluZGV4IiwibGFzdEluZGV4IiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsImVzY2FwZVRleHRGb3JCcm93c2VyIiwicXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIiLCJjcmVhdGVNYXJrdXBGb3JSb290IiwiY3JlYXRlTWFya3VwRm9yUHJvcGVydHkiLCJjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUiLCJpcyIsInkiLCJjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQiLCJmaXJzdFdvcmtJblByb2dyZXNzSG9vayIsIndvcmtJblByb2dyZXNzSG9vayIsImlzUmVSZW5kZXIiLCJkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlIiwicmVuZGVyUGhhc2VVcGRhdGVzIiwibnVtYmVyT2ZSZVJlbmRlcnMiLCJSRV9SRU5ERVJfTElNSVQiLCJpc0luSG9va1VzZXJDb2RlSW5EZXYiLCJjdXJyZW50SG9va05hbWVJbkRldiIsInJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQiLCJhcmVIb29rSW5wdXRzRXF1YWwiLCJuZXh0RGVwcyIsInByZXZEZXBzIiwiY3JlYXRlSG9vayIsIm1lbW9pemVkU3RhdGUiLCJxdWV1ZSIsIm5leHQiLCJjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2siLCJwcmVwYXJlVG9Vc2VIb29rcyIsImNvbXBvbmVudElkZW50aXR5IiwiZmluaXNoSG9va3MiLCJDb21wb25lbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVmT3JDb250ZXh0IiwicmVhZENvbnRleHQiLCJvYnNlcnZlZEJpdHMiLCJjdXJyZW50VGhyZWFkSUQiLCJ1c2VDb250ZXh0IiwiYmFzaWNTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsQXJnIiwiaW5pdCIsIl9xdWV1ZSIsIl9kaXNwYXRjaCIsImRpc3BhdGNoIiwiZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSIsImdldCIsImRlbGV0ZSIsIm5ld1N0YXRlIiwidXBkYXRlIiwiX2FjdGlvbiIsIl9xdWV1ZTIiLCJsYXN0IiwiX2Rpc3BhdGNoMiIsImRpc3BhdGNoQWN0aW9uIiwidXNlTWVtbyIsIm5leHRDcmVhdGUiLCJkZXBzIiwicHJldlN0YXRlIiwibmV4dFZhbHVlIiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwicHJldmlvdXNSZWYiLCJyZWYiLCJzZWFsIiwidXNlTGF5b3V0RWZmZWN0IiwiY3JlYXRlIiwiaW5wdXRzIiwiTWFwIiwibGFzdFJlbmRlclBoYXNlVXBkYXRlIiwidXNlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm5vb3AiLCJzZXRDdXJyZW50VGhyZWFkSUQiLCJEaXNwYXRjaGVyIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZUVmZmVjdCIsInVzZURlYnVnVmFsdWUiLCJIVE1MX05BTUVTUEFDRSIsIk1BVEhfTkFNRVNQQUNFIiwiU1ZHX05BTUVTUEFDRSIsIk5hbWVzcGFjZXMiLCJtYXRobWwiLCJzdmciLCJnZXRJbnRyaW5zaWNOYW1lc3BhY2UiLCJnZXRDaGlsZE5hbWVzcGFjZSIsInBhcmVudE5hbWVzcGFjZSIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUkMiIsIlJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzIiwiaGFzUmVhZE9ubHlWYWx1ZSIsImJ1dHRvbiIsImNoZWNrYm94IiwiaW1hZ2UiLCJoaWRkZW4iLCJyYWRpbyIsInJlc2V0Iiwic3VibWl0IiwicHJvcFR5cGVzIiwicHJvcE5hbWUiLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwidGFnTmFtZSIsIm9taXR0ZWRDbG9zZVRhZ3MiLCJhcmVhIiwiYmFzZSIsImJyIiwiY29sIiwiZW1iZWQiLCJociIsImltZyIsImlucHV0Iiwia2V5Z2VuIiwibGluayIsIm1ldGEiLCJwYXJhbSIsInRyYWNrIiwid2JyIiwidm9pZEVsZW1lbnRUYWdzIiwibWVudWl0ZW0iLCJIVE1MIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzIiwiYXNzZXJ0VmFsaWRQcm9wcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiY29udGVudEVkaXRhYmxlIiwic3R5bGUiLCJpc1VuaXRsZXNzTnVtYmVyIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJib3JkZXJJbWFnZU91dHNldCIsImJvcmRlckltYWdlU2xpY2UiLCJib3JkZXJJbWFnZVdpZHRoIiwiYm94RmxleCIsImJveEZsZXhHcm91cCIsImJveE9yZGluYWxHcm91cCIsImNvbHVtbkNvdW50IiwiY29sdW1ucyIsImZsZXgiLCJmbGV4R3JvdyIsImZsZXhQb3NpdGl2ZSIsImZsZXhTaHJpbmsiLCJmbGV4TmVnYXRpdmUiLCJmbGV4T3JkZXIiLCJncmlkQXJlYSIsImdyaWRSb3ciLCJncmlkUm93RW5kIiwiZ3JpZFJvd1NwYW4iLCJncmlkUm93U3RhcnQiLCJncmlkQ29sdW1uIiwiZ3JpZENvbHVtbkVuZCIsImdyaWRDb2x1bW5TcGFuIiwiZ3JpZENvbHVtblN0YXJ0IiwiZm9udFdlaWdodCIsImxpbmVDbGFtcCIsImxpbmVIZWlnaHQiLCJvcGFjaXR5Iiwib3JkZXIiLCJvcnBoYW5zIiwidGFiU2l6ZSIsIndpZG93cyIsInpJbmRleCIsInpvb20iLCJmaWxsT3BhY2l0eSIsImZsb29kT3BhY2l0eSIsInN0b3BPcGFjaXR5Iiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2lkdGgiLCJwcmVmaXhLZXkiLCJjaGFyQXQiLCJwcmVmaXhlcyIsInByb3AiLCJkYW5nZXJvdXNTdHlsZVZhbHVlIiwiaXNDdXN0b21Qcm9wZXJ0eSIsImlzRW1wdHkiLCJ0cmltIiwidXBwZXJjYXNlUGF0dGVybiIsIm1zUGF0dGVybiIsImh5cGhlbmF0ZVN0eWxlTmFtZSIsImlzQ3VzdG9tQ29tcG9uZW50IiwiaW5kZXhPZiIsIndhcm5WYWxpZFN0eWxlIiwiYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuIiwibXNQYXR0ZXJuJDEiLCJoeXBoZW5QYXR0ZXJuIiwiYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuIiwid2FybmVkU3R5bGVOYW1lcyIsIndhcm5lZFN0eWxlVmFsdWVzIiwid2FybmVkRm9yTmFOVmFsdWUiLCJ3YXJuZWRGb3JJbmZpbml0eVZhbHVlIiwiY2FtZWxpemUiLCJfIiwiY2hhcmFjdGVyIiwid2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUiLCJ3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUiLCJ3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24iLCJ3YXJuU3R5bGVWYWx1ZUlzTmFOIiwid2FyblN0eWxlVmFsdWVJc0luZmluaXR5IiwiaXNGaW5pdGUiLCJ3YXJuVmFsaWRTdHlsZSQxIiwiYXJpYVByb3BlcnRpZXMiLCJ3YXJuZWRQcm9wZXJ0aWVzIiwickFSSUEiLCJyQVJJQUNhbWVsIiwiaGFzT3duUHJvcGVydHkkMiIsInZhbGlkYXRlUHJvcGVydHkiLCJhcmlhTmFtZSIsImNvcnJlY3ROYW1lIiwibG93ZXJDYXNlZE5hbWUiLCJzdGFuZGFyZE5hbWUiLCJ3YXJuSW52YWxpZEFSSUFQcm9wcyIsImludmFsaWRQcm9wcyIsInB1c2giLCJ1bmtub3duUHJvcFN0cmluZyIsInZhbGlkYXRlUHJvcGVydGllcyIsImRpZFdhcm5WYWx1ZU51bGwiLCJ2YWxpZGF0ZVByb3BlcnRpZXMkMSIsIm11bHRpcGxlIiwicmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMiLCJwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzIiwicG9zc2libGVTdGFuZGFyZE5hbWVzIiwiYWNjZXB0IiwiYWNjZXB0Y2hhcnNldCIsImFjY2Vzc2tleSIsImFsbG93ZnVsbHNjcmVlbiIsImFsdCIsImFzIiwiYXN5bmMiLCJhdXRvY2FwaXRhbGl6ZSIsImF1dG9jb21wbGV0ZSIsImF1dG9jb3JyZWN0IiwiYXV0b2ZvY3VzIiwiYXV0b3BsYXkiLCJhdXRvc2F2ZSIsImNhcHR1cmUiLCJjZWxscGFkZGluZyIsImNlbGxzcGFjaW5nIiwiY2hhbGxlbmdlIiwiY2hhcnNldCIsImNpdGUiLCJjbGFzcyIsImNsYXNzaWQiLCJjbGFzc25hbWUiLCJjb2xzIiwiY29sc3BhbiIsImNvbnRlbnQiLCJjb250ZW50ZWRpdGFibGUiLCJjb250ZXh0bWVudSIsImNvbnRyb2xzIiwiY29udHJvbHNsaXN0IiwiY29vcmRzIiwiY3Jvc3NvcmlnaW4iLCJkYW5nZXJvdXNseXNldGlubmVyaHRtbCIsImRhdGEiLCJkYXRldGltZSIsImRlZmF1bHQiLCJkZWZhdWx0Y2hlY2tlZCIsImRlZmF1bHR2YWx1ZSIsImRlZmVyIiwiZGlyIiwiZG93bmxvYWQiLCJkcmFnZ2FibGUiLCJlbmN0eXBlIiwiZm9ybSIsImZvcm1tZXRob2QiLCJmb3JtYWN0aW9uIiwiZm9ybWVuY3R5cGUiLCJmb3Jtbm92YWxpZGF0ZSIsImZvcm10YXJnZXQiLCJmcmFtZWJvcmRlciIsImhlYWRlcnMiLCJoZWlnaHQiLCJoaWdoIiwiaHJlZiIsImhyZWZsYW5nIiwiaHRtbGZvciIsImh0dHBlcXVpdiIsImljb24iLCJpbm5lcmh0bWwiLCJpbnB1dG1vZGUiLCJpbnRlZ3JpdHkiLCJpdGVtaWQiLCJpdGVtcHJvcCIsIml0ZW1yZWYiLCJpdGVtc2NvcGUiLCJpdGVtdHlwZSIsImtleXBhcmFtcyIsImtleXR5cGUiLCJraW5kIiwibGFiZWwiLCJsYW5nIiwibGlzdCIsImxvb3AiLCJsb3ciLCJtYW5pZmVzdCIsIm1hcmdpbndpZHRoIiwibWFyZ2luaGVpZ2h0IiwibWF4IiwibWF4bGVuZ3RoIiwibWVkaWEiLCJtZWRpYWdyb3VwIiwibWV0aG9kIiwibWluIiwibWlubGVuZ3RoIiwibXV0ZWQiLCJub21vZHVsZSIsIm5vbmNlIiwibm92YWxpZGF0ZSIsIm9wZW4iLCJvcHRpbXVtIiwicGF0dGVybiIsInBsYWNlaG9sZGVyIiwicGxheXNpbmxpbmUiLCJwb3N0ZXIiLCJwcmVsb2FkIiwicHJvZmlsZSIsInJhZGlvZ3JvdXAiLCJyZWFkb25seSIsInJlZmVycmVycG9saWN5IiwicmVsIiwicmVxdWlyZWQiLCJyZXZlcnNlZCIsInJvbGUiLCJyb3dzIiwicm93c3BhbiIsInNhbmRib3giLCJzY29wZSIsInNjb3BlZCIsInNjcm9sbGluZyIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzaGFwZSIsInNpemUiLCJzaXplcyIsInNwYW4iLCJzcGVsbGNoZWNrIiwic3JjIiwic3JjZG9jIiwic3JjbGFuZyIsInNyY3NldCIsInN0YXJ0Iiwic3RlcCIsInN1bW1hcnkiLCJ0YWJpbmRleCIsInRpdGxlIiwidXNlbWFwIiwid2lkdGgiLCJ3bW9kZSIsIndyYXAiLCJhYm91dCIsImFjY2VudGhlaWdodCIsImFjY3VtdWxhdGUiLCJhZGRpdGl2ZSIsImFsaWdubWVudGJhc2VsaW5lIiwiYWxsb3dyZW9yZGVyIiwiYWxwaGFiZXRpYyIsImFtcGxpdHVkZSIsImFyYWJpY2Zvcm0iLCJhc2NlbnQiLCJhdHRyaWJ1dGVuYW1lIiwiYXR0cmlidXRldHlwZSIsImF1dG9yZXZlcnNlIiwiYXppbXV0aCIsImJhc2VmcmVxdWVuY3kiLCJiYXNlbGluZXNoaWZ0IiwiYmFzZXByb2ZpbGUiLCJiYm94IiwiYmVnaW4iLCJiaWFzIiwiYnkiLCJjYWxjbW9kZSIsImNhcGhlaWdodCIsImNsaXAiLCJjbGlwcGF0aCIsImNsaXBwYXRodW5pdHMiLCJjbGlwcnVsZSIsImNvbG9yIiwiY29sb3JpbnRlcnBvbGF0aW9uIiwiY29sb3JpbnRlcnBvbGF0aW9uZmlsdGVycyIsImNvbG9ycHJvZmlsZSIsImNvbG9ycmVuZGVyaW5nIiwiY29udGVudHNjcmlwdHR5cGUiLCJjb250ZW50c3R5bGV0eXBlIiwiY3Vyc29yIiwiY3giLCJjeSIsImRhdGF0eXBlIiwiZGVjZWxlcmF0ZSIsImRlc2NlbnQiLCJkaWZmdXNlY29uc3RhbnQiLCJkaXJlY3Rpb24iLCJkaXNwbGF5IiwiZGl2aXNvciIsImRvbWluYW50YmFzZWxpbmUiLCJkdXIiLCJkeCIsImR5IiwiZWRnZW1vZGUiLCJlbGV2YXRpb24iLCJlbmFibGViYWNrZ3JvdW5kIiwiZW5kIiwiZXhwb25lbnQiLCJleHRlcm5hbHJlc291cmNlc3JlcXVpcmVkIiwiZmlsbCIsImZpbGxvcGFjaXR5IiwiZmlsbHJ1bGUiLCJmaWx0ZXIiLCJmaWx0ZXJyZXMiLCJmaWx0ZXJ1bml0cyIsImZsb29kb3BhY2l0eSIsImZsb29kY29sb3IiLCJmb2N1c2FibGUiLCJmb250ZmFtaWx5IiwiZm9udHNpemUiLCJmb250c2l6ZWFkanVzdCIsImZvbnRzdHJldGNoIiwiZm9udHN0eWxlIiwiZm9udHZhcmlhbnQiLCJmb250d2VpZ2h0IiwiZngiLCJmeSIsImcxIiwiZzIiLCJnbHlwaG5hbWUiLCJnbHlwaG9yaWVudGF0aW9uaG9yaXpvbnRhbCIsImdseXBob3JpZW50YXRpb252ZXJ0aWNhbCIsImdseXBocmVmIiwiZ3JhZGllbnR0cmFuc2Zvcm0iLCJncmFkaWVudHVuaXRzIiwiaGFuZ2luZyIsImhvcml6YWR2eCIsImhvcml6b3JpZ2lueCIsImlkZW9ncmFwaGljIiwiaW1hZ2VyZW5kZXJpbmciLCJpbjIiLCJpbiIsImlubGlzdCIsImludGVyY2VwdCIsImsxIiwiazIiLCJrMyIsIms0IiwiayIsImtlcm5lbG1hdHJpeCIsImtlcm5lbHVuaXRsZW5ndGgiLCJrZXJuaW5nIiwia2V5cG9pbnRzIiwia2V5c3BsaW5lcyIsImtleXRpbWVzIiwibGVuZ3RoYWRqdXN0IiwibGV0dGVyc3BhY2luZyIsImxpZ2h0aW5nY29sb3IiLCJsaW1pdGluZ2NvbmVhbmdsZSIsImxvY2FsIiwibWFya2VyZW5kIiwibWFya2VyaGVpZ2h0IiwibWFya2VybWlkIiwibWFya2Vyc3RhcnQiLCJtYXJrZXJ1bml0cyIsIm1hcmtlcndpZHRoIiwibWFzayIsIm1hc2tjb250ZW50dW5pdHMiLCJtYXNrdW5pdHMiLCJtYXRoZW1hdGljYWwiLCJtb2RlIiwibnVtb2N0YXZlcyIsIm9mZnNldCIsIm9wZXJhdG9yIiwib3JpZW50Iiwib3JpZW50YXRpb24iLCJvcmlnaW4iLCJvdmVyZmxvdyIsIm92ZXJsaW5lcG9zaXRpb24iLCJvdmVybGluZXRoaWNrbmVzcyIsInBhaW50b3JkZXIiLCJwYW5vc2UxIiwicGF0aGxlbmd0aCIsInBhdHRlcm5jb250ZW50dW5pdHMiLCJwYXR0ZXJudHJhbnNmb3JtIiwicGF0dGVybnVuaXRzIiwicG9pbnRlcmV2ZW50cyIsInBvaW50cyIsInBvaW50c2F0eCIsInBvaW50c2F0eSIsInBvaW50c2F0eiIsInByZXNlcnZlYWxwaGEiLCJwcmVzZXJ2ZWFzcGVjdHJhdGlvIiwicHJpbWl0aXZldW5pdHMiLCJwcm9wZXJ0eSIsInIiLCJyYWRpdXMiLCJyZWZ4IiwicmVmeSIsInJlbmRlcmluZ2ludGVudCIsInJlcGVhdGNvdW50IiwicmVwZWF0ZHVyIiwicmVxdWlyZWRleHRlbnNpb25zIiwicmVxdWlyZWRmZWF0dXJlcyIsInJlc291cmNlIiwicmVzdGFydCIsInJlc3VsdCIsInJlc3VsdHMiLCJyb3RhdGUiLCJyeCIsInJ5Iiwic2NhbGUiLCJzZWN1cml0eSIsInNlZWQiLCJzaGFwZXJlbmRlcmluZyIsInNsb3BlIiwic3BhY2luZyIsInNwZWN1bGFyY29uc3RhbnQiLCJzcGVjdWxhcmV4cG9uZW50Iiwic3BlZWQiLCJzcHJlYWRtZXRob2QiLCJzdGFydG9mZnNldCIsInN0ZGRldmlhdGlvbiIsInN0ZW1oIiwic3RlbXYiLCJzdGl0Y2h0aWxlcyIsInN0b3Bjb2xvciIsInN0b3BvcGFjaXR5Iiwic3RyaWtldGhyb3VnaHBvc2l0aW9uIiwic3RyaWtldGhyb3VnaHRoaWNrbmVzcyIsInN0cm9rZSIsInN0cm9rZWRhc2hhcnJheSIsInN0cm9rZWRhc2hvZmZzZXQiLCJzdHJva2VsaW5lY2FwIiwic3Ryb2tlbGluZWpvaW4iLCJzdHJva2VtaXRlcmxpbWl0Iiwic3Ryb2tld2lkdGgiLCJzdHJva2VvcGFjaXR5Iiwic3VwcHJlc3Njb250ZW50ZWRpdGFibGV3YXJuaW5nIiwic3VwcHJlc3NoeWRyYXRpb253YXJuaW5nIiwic3VyZmFjZXNjYWxlIiwic3lzdGVtbGFuZ3VhZ2UiLCJ0YWJsZXZhbHVlcyIsInRhcmdldHgiLCJ0YXJnZXR5IiwidGV4dGFuY2hvciIsInRleHRkZWNvcmF0aW9uIiwidGV4dGxlbmd0aCIsInRleHRyZW5kZXJpbmciLCJ0cmFuc2Zvcm0iLCJ0eXBlb2YiLCJ1MSIsInUyIiwidW5kZXJsaW5lcG9zaXRpb24iLCJ1bmRlcmxpbmV0aGlja25lc3MiLCJ1bmljb2RlIiwidW5pY29kZWJpZGkiLCJ1bmljb2RlcmFuZ2UiLCJ1bml0c3BlcmVtIiwidW5zZWxlY3RhYmxlIiwidmFscGhhYmV0aWMiLCJ2ZWN0b3JlZmZlY3QiLCJ2ZXJzaW9uIiwidmVydGFkdnkiLCJ2ZXJ0b3JpZ2lueCIsInZlcnRvcmlnaW55IiwidmhhbmdpbmciLCJ2aWRlb2dyYXBoaWMiLCJ2aWV3Ym94Iiwidmlld3RhcmdldCIsInZpc2liaWxpdHkiLCJ2bWF0aGVtYXRpY2FsIiwidm9jYWIiLCJ3aWR0aHMiLCJ3b3Jkc3BhY2luZyIsIndyaXRpbmdtb2RlIiwieDEiLCJ4MiIsInhjaGFubmVsc2VsZWN0b3IiLCJ4aGVpZ2h0IiwieGxpbmthY3R1YXRlIiwieGxpbmthcmNyb2xlIiwieGxpbmtocmVmIiwieGxpbmtyb2xlIiwieGxpbmtzaG93IiwieGxpbmt0aXRsZSIsInhsaW5rdHlwZSIsInhtbGJhc2UiLCJ4bWxsYW5nIiwieG1sbnMiLCJ4bWxuc3hsaW5rIiwieG1sc3BhY2UiLCJ5MSIsInkyIiwieWNoYW5uZWxzZWxlY3RvciIsInoiLCJ6b29tYW5kcGFuIiwidmFsaWRhdGVQcm9wZXJ0eSQxIiwid2FybmVkUHJvcGVydGllcyQxIiwiX2hhc093blByb3BlcnR5IiwiRVZFTlRfTkFNRV9SRUdFWCIsIklOVkFMSURfRVZFTlRfTkFNRV9SRUdFWCIsInJBUklBJDEiLCJyQVJJQUNhbWVsJDEiLCJjYW5Vc2VFdmVudFN5c3RlbSIsInJlZ2lzdHJhdGlvbk5hbWUiLCJpc1Jlc2VydmVkIiwid2FyblVua25vd25Qcm9wZXJ0aWVzIiwidW5rbm93blByb3BzIiwidmFsaWRhdGVQcm9wZXJ0aWVzJDIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwidG9BcnJheSIsIkNoaWxkcmVuIiwiY3VycmVudERlYnVnU3RhY2tzIiwicHJldkdldEN1cnJlbnRTdGFja0ltcGwiLCJnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsIiwiZGVzY3JpYmVTdGFja0ZyYW1lIiwiZWxlbWVudCIsInZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQiLCJwdXNoQ3VycmVudERlYnVnU3RhY2siLCJwdXNoRWxlbWVudFRvRGVidWdTdGFjayIsInBvcEN1cnJlbnREZWJ1Z1N0YWNrIiwiaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyIiwiX3NvdXJjZSIsImZyYW1lIiwiZGVidWdFbGVtZW50U3RhY2siLCJwb3AiLCJmcmFtZXMiLCJfZGVidWdFbGVtZW50U3RhY2siLCJpaSIsImRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSIsImRpZFdhcm5EZWZhdWx0Q2hlY2tlZCIsImRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUiLCJkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUiLCJkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuIiwiZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudCIsImRpZFdhcm5BYm91dEJhZENsYXNzIiwiZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudCIsImRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZSIsImRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZSIsInZhbHVlUHJvcE5hbWVzIiwibmV3bGluZUVhdGluZ1RhZ3MiLCJsaXN0aW5nIiwicHJlIiwidGV4dGFyZWEiLCJWQUxJRF9UQUdfUkVHRVgiLCJ2YWxpZGF0ZWRUYWdDYWNoZSIsInZhbGlkYXRlRGFuZ2Vyb3VzVGFnIiwic3R5bGVOYW1lQ2FjaGUiLCJwcm9jZXNzU3R5bGVOYW1lIiwic3R5bGVOYW1lIiwiY3JlYXRlTWFya3VwRm9yU3R5bGVzIiwic3R5bGVzIiwic2VyaWFsaXplZCIsImRlbGltaXRlciIsInN0eWxlVmFsdWUiLCJ3YXJuTm9vcCIsInB1YmxpY0luc3RhbmNlIiwiY2FsbGVyTmFtZSIsIl9jb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwid2FybmluZ0tleSIsInNob3VsZENvbnN0cnVjdCIsImlzUmVhY3RDb21wb25lbnQiLCJnZXROb25DaGlsZHJlbklubmVyTWFya3VwIiwiaW5uZXJIVE1MIiwiX19odG1sIiwiZmxhdHRlblRvcExldmVsQ2hpbGRyZW4iLCJpc1ZhbGlkRWxlbWVudCIsImZyYWdtZW50Q2hpbGRyZW4iLCJmcmFnbWVudENoaWxkRWxlbWVudCIsImZsYXR0ZW5PcHRpb25DaGlsZHJlbiIsImNoaWxkIiwiU1RZTEUiLCJSRVNFUlZFRF9QUk9QUyIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyIsImNyZWF0ZU9wZW5UYWdNYXJrdXAiLCJ0YWdWZXJiYXRpbSIsInRhZ0xvd2VyY2FzZSIsIm5hbWVzcGFjZSIsIm1ha2VTdGF0aWNNYXJrdXAiLCJpc1Jvb3RFbGVtZW50IiwicmV0IiwicHJvcEtleSIsInByb3BWYWx1ZSIsIm1hcmt1cCIsInZhbGlkYXRlUmVuZGVyUmVzdWx0IiwicmVzb2x2ZSIsInByb2Nlc3NDaGlsZCIsInB1YmxpY0NvbnRleHQiLCJ1cGRhdGVyIiwiaXNNb3VudGVkIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImNvbXBsZXRlU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJjdXJyZW50UGFydGlhbFN0YXRlIiwiaW5zdCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInBhcnRpYWxTdGF0ZSIsIl9jb21wb25lbnROYW1lIiwiX2NvbXBvbmVudE5hbWUyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxNb3VudCIsIl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmciLCJfY29tcG9uZW50TmFtZTMiLCJvbGRRdWV1ZSIsIm9sZFJlcGxhY2UiLCJuZXh0U3RhdGUiLCJkb250TXV0YXRlIiwicGFydGlhbCIsIl9wYXJ0aWFsU3RhdGUiLCJfaXNNb2NrRnVuY3Rpb24iLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRLZXkiLCJSZWFjdERPTVNlcnZlclJlbmRlcmVyIiwiZmxhdENoaWxkcmVuIiwidG9wRnJhbWUiLCJkb21OYW1lc3BhY2UiLCJjaGlsZEluZGV4IiwiZm9vdGVyIiwiZXhoYXVzdGVkIiwiY3VycmVudFNlbGVjdFZhbHVlIiwicHJldmlvdXNXYXNUZXh0Tm9kZSIsInN1c3BlbnNlRGVwdGgiLCJjb250ZXh0SW5kZXgiLCJjb250ZXh0U3RhY2siLCJjb250ZXh0VmFsdWVTdGFjayIsImNvbnRleHRQcm92aWRlclN0YWNrIiwiZGVzdHJveSIsImNsZWFyUHJvdmlkZXJzIiwicHVzaFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcmV2aW91c1ZhbHVlIiwicG9wUHJvdmlkZXIiLCJyZWFkIiwiYnl0ZXMiLCJwcmV2VGhyZWFkSUQiLCJwcmV2RGlzcGF0Y2hlciIsIm91dCIsInN1c3BlbmRlZCIsIl9mb290ZXIiLCJidWZmZXJlZCIsIl9mYWxsYmFja0ZyYW1lIiwiZmFsbGJhY2tGcmFtZSIsIm91dEJ1ZmZlciIsInRoZW4iLCJuZXh0Q2hpbGQiLCJfcmVzb2x2ZSIsInRvU3RyaW5nIiwibmV4dENoaWxkcmVuIiwibmV4dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsInJlbmRlckRPTSIsIl9uZXh0Q2hpbGRyZW4iLCJfZnJhbWUiLCJmYWxsYmFjayIsIl9uZXh0Q2hpbGRyZW4zIiwiX2ZyYW1lMyIsImZhbGxiYWNrQ2hpbGRyZW4iLCJfbmV4dENoaWxkcmVuMiIsIl9mYWxsYmFja0ZyYW1lMiIsIl9mcmFtZTIiLCJfbmV4dENoaWxkcmVuNCIsIl9mcmFtZTQiLCJfZWxlbWVudCIsIl9uZXh0Q2hpbGRyZW41IiwiY3JlYXRlRWxlbWVudCIsIl9mcmFtZTUiLCJuZXh0UHJvcHMiLCJfbmV4dENoaWxkcmVuNiIsIl9mcmFtZTYiLCJyZWFjdENvbnRleHQiLCJDb25zdW1lciIsIl9uZXh0UHJvcHMiLCJfbmV4dENoaWxkcmVuNyIsIl9mcmFtZTciLCJpbmZvIiwib3duZXIiLCJfb3duZXIiLCJkZWZhdWx0Q2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhQ2hpbGRyZW4iLCJpc0FycmF5Iiwic2VsZWN0VmFsdWUiLCJvcHRpb25DaGlsZHJlbiIsImoiLCJpbm5lck1hcmt1cCIsInJlbmRlcmVyIiwiSW5maW5pdHkiLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsIl9jbGFzc0NhbGxDaGVjayQxIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlJlYWN0TWFya3VwUmVhZGFibGVTdHJlYW0iLCJfUmVhZGFibGUiLCJfdGhpcyIsInBhcnRpYWxSZW5kZXJlciIsIl9kZXN0cm95IiwiX3JlYWQiLCJSZWFkYWJsZSIsInJlbmRlclRvTm9kZVN0cmVhbSIsInJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSIsIlJlYWN0RE9NU2VydmVyTm9kZSIsIlJlYWN0RE9NU2VydmVyTm9kZSQxIiwiUmVhY3RET01TZXJ2ZXIiLCJzZXJ2ZXJfbm9kZSIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIk1BWUJFX0lURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIm1heWJlSXRlcmF0b3IiLCJkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQiLCJSZWFjdE5vb3BVcGRhdGVRdWV1ZSIsInJlZnMiLCJzZXRTdGF0ZSIsImZvcmNlVXBkYXRlIiwiZGVwcmVjYXRlZEFQSXMiLCJyZXBsYWNlU3RhdGUiLCJkZWZpbmVEZXByZWNhdGlvbldhcm5pbmciLCJtZXRob2ROYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJmbk5hbWUiLCJDb21wb25lbnREdW1teSIsIlB1cmVDb21wb25lbnQiLCJwdXJlQ29tcG9uZW50UHJvdG90eXBlIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJjcmVhdGVSZWYiLCJyZWZPYmplY3QiLCJSZWFjdEN1cnJlbnRPd25lciIsImN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Iiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQiLCJpbXBsIiwiUmVhY3RDb21wb25lbnRUcmVlSG9vayIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJSZWFjdEVsZW1lbnQiLCJfc3RvcmUiLCJjaGlsZHJlbkxlbmd0aCIsImNoaWxkQXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJjbG9uZUFuZFJlcGxhY2VLZXkiLCJvbGRFbGVtZW50IiwibmV3S2V5IiwibmV3RWxlbWVudCIsIl9zZWxmIiwiY2xvbmVFbGVtZW50Iiwib2JqZWN0IiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsImRpZFdhcm5BYm91dE1hcHMiLCJ1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCIsImVzY2FwZVVzZXJQcm92aWRlZEtleSIsIlBPT0xfU0laRSIsInRyYXZlcnNlQ29udGV4dFBvb2wiLCJnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQiLCJtYXBSZXN1bHQiLCJrZXlQcmVmaXgiLCJtYXBGdW5jdGlvbiIsIm1hcENvbnRleHQiLCJ0cmF2ZXJzZUNvbnRleHQiLCJmdW5jIiwiY291bnQiLCJyZWxlYXNlVHJhdmVyc2VDb250ZXh0IiwidHJhdmVyc2VBbGxDaGlsZHJlbkltcGwiLCJuYW1lU29GYXIiLCJpbnZva2VDYWxsYmFjayIsImdldENvbXBvbmVudEtleSIsIm5leHROYW1lIiwic3VidHJlZUNvdW50IiwibmV4dE5hbWVQcmVmaXgiLCJpdGVyYXRvckZuIiwiZW50cmllcyIsImRvbmUiLCJjaGlsZHJlblN0cmluZyIsInRyYXZlcnNlQWxsQ2hpbGRyZW4iLCJjb21wb25lbnQiLCJmb3JFYWNoU2luZ2xlQ2hpbGQiLCJib29rS2VlcGluZyIsImZvckVhY2hDaGlsZHJlbiIsImZvckVhY2hGdW5jIiwiZm9yRWFjaENvbnRleHQiLCJtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0IiwiY2hpbGRLZXkiLCJtYXBwZWRDaGlsZCIsIm1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwiLCJhcnJheSIsImVzY2FwZWRQcmVmaXgiLCJtYXBDaGlsZHJlbiIsImNvdW50Q2hpbGRyZW4iLCJvbmx5Q2hpbGQiLCJjcmVhdGVDb250ZXh0IiwiY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY3VycmVudFZhbHVlIiwiUHJvdmlkZXIiLCJoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyIsImhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIl9Qcm92aWRlciIsIl9jdXJyZW50UmVuZGVyZXIiLCJfY3VycmVudFJlbmRlcmVyMiIsImxhenkiLCJjdG9yIiwibGF6eVR5cGUiLCJfY3RvciIsIm5ld0RlZmF1bHRQcm9wcyIsIm5ld1Byb3BUeXBlcyIsImZvcndhcmRSZWYiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJtZW1vIiwiY29tcGFyZSIsInJlc29sdmVEaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRleHQiLCJ1bnN0YWJsZV9vYnNlcnZlZEJpdHMiLCJyZWFsQ29udGV4dCIsImZvcm1hdHRlckZuIiwicHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24iLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsImVsZW1lbnRQcm9wcyIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsInZhbGlkYXRlUHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNSZWFjdENsYXNzQXBwcm92ZWQiLCJ2YWxpZGF0ZUZyYWdtZW50UHJvcHMiLCJmcmFnbWVudCIsImNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiIsInZhbGlkVHlwZSIsInR5cGVTdHJpbmciLCJjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24iLCJ2YWxpZGF0ZWRGYWN0b3J5IiwiY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24iLCJlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMiLCJvbmx5IiwiRnJhZ21lbnQiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJjcmVhdGVGYWN0b3J5IiwidW5zdGFibGVfQ29uY3VycmVudE1vZGUiLCJ1bnN0YWJsZV9Qcm9maWxlciIsIkNvbmN1cnJlbnRNb2RlIiwiUHJvZmlsZXIiLCJSZWFjdCQyIiwiUmVhY3QkMyIsInJlYWN0IiwiaGFuZGxlciIsImV2ZW50IiwiaHR0cE1ldGhvZCIsInN0YXR1c0NvZGUiLCJib2R5Iiwic3RhdGljUm91dGVyQ29udGV4dCIsImFwcEh0bWwiLCJoZWxtZXQiLCJIZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJodG1sQXR0cmlidXRlcyIsInRvQ29tcG9uZW50IiwiYm9keUF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNB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QztBQWdCQSxTQUFPO0FBQ0xILGNBQVUsRUFBRSxHQURQO0FBRUxDO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7O0FDdkRELG1DIiwiZmlsZSI6ImxhbWJkYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xhbWJkYS50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTd2l0Y2gsXG4gIFJvdXRlLFxuICBSZWRpcmVjdCxcbiAgTGluayxcbiAgU3RhdGljUm91dGVyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPk1haW4gcGFnZTwvdGl0bGU+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPk1haW4gcGFnZTwvaDE+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBDb250YWN0c1BhZ2UgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPkNvbnRhY3RzPC90aXRsZT5cbiAgICA8L0hlbG1ldD5cbiAgICA8aDE+Q29udGFjdHM8L2gxPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuLy8gNDA0XG5jb25zdCBOb3RGb3VuZFBhZ2UgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPk5vdCBmb3VuZDwvdGl0bGU+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPk5vdCBmb3VuZDwvaDE+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG4vLyA1KipcbmNvbnN0IEludGVybmFsRXJyb3JQYWdlID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT5JbnRlcm5hbCBlcnJvcjwvdGl0bGU+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPkludGVybmFsIGVycm9yPC9oMT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8bmF2PlxuICAgICAgPExpbmsgdG89Jy8nPk1haW4gcGFnZTwvTGluaz5cbiAgICAgIDxMaW5rIHRvPScvY29udGFjdHMnPkNvbnRhY3RzPC9MaW5rPlxuICAgICAgPExpbmsgdG89Jy9hYWEnPmFhYTwvTGluaz5cbiAgICA8L25hdj5cbiAgPC9oZWFkZXI+XG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVsbWV0IGRlZmF1bHRUaXRsZT0nUzNydjNyMTM1NScgdGl0bGVUZW1wbGF0ZT0nUzNydjNyMTM1NSAmbWRhc2g7ICVzJyAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17TWFpblBhZ2V9IC8+XG4gICAgICA8Um91dGUgcGF0aD0nL2NvbnRhY3RzJyBleGFjdCBjb21wb25lbnQ9e0NvbnRhY3RzUGFnZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPScvbm90LWZvdW5kJyBleGFjdCBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPScvZXJyb3InIGV4YWN0IGNvbXBvbmVudD17SW50ZXJuYWxFcnJvclBhZ2V9IC8+XG4gICAgICA8UmVkaXJlY3QgdG89Jy9ub3QtZm91bmQnIC8+XG4gICAgPC9Td2l0Y2g+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zb2xlLmxvZyhyZW5kZXJUb1N0cmluZyhcbiAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17Jy8nfT5cbiAgICA8QXBwIC8+XG4gIDwvU3RhdGljUm91dGVyPlxuKSk7XG5cbmV4cG9ydCBjb25zdCBBQkMgPSAoKSA9PiAoXG4gIDxMaW5rIHRvPScvJz5hYmM8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWRvbS1zZXJ2ZXIubm9kZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG52YXIgc3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjguNic7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3IgPSB2b2lkIDA7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbi8vIFJlbHlpbmcgb24gdGhlIGBpbnZhcmlhbnQoKWAgaW1wbGVtZW50YXRpb24gbGV0cyB1c1xuLy8gcHJlc2VydmUgdGhlIGZvcm1hdCBhbmQgcGFyYW1zIGluIHRoZSB3d3cgYnVpbGRzLlxuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpO1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cblxudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG52YXIgUmVzb2x2ZWQgPSAxO1xuXG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArICcoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdDb25jdXJyZW50TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuLy8gUHJldmVudCBuZXdlciByZW5kZXJlcnMgZnJvbSBSVEUgd2hlbiB1c2VkIHdpdGggb2xkZXIgcmVhY3QgcGFja2FnZSB2ZXJzaW9ucy5cbi8vIEN1cnJlbnQgb3duZXIgYW5kIGRpc3BhdGNoZXIgdXNlZCB0byBzaGFyZSB0aGUgc2FtZSByZWYsXG4vLyBidXQgUFIgIzE0NTQ4IHNwbGl0IHRoZW0gb3V0IHRvIGJldHRlciBzdXBwb3J0IHRoZSByZWFjdC1kZWJ1Zy10b29scyBwYWNrYWdlLlxuaWYgKCFSZWFjdFNoYXJlZEludGVybmFscy5oYXNPd25Qcm9wZXJ0eSgnUmVhY3RDdXJyZW50RGlzcGF0Y2hlcicpKSB7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IHdhcm5pbmdXaXRob3V0U3RhY2skMTtcblxue1xuICB3YXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3dhcm5pbmctYW5kLWludmFyaWFudC1hcmdzXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMS5hcHBseSh1bmRlZmluZWQsIFtmYWxzZSwgZm9ybWF0ICsgJyVzJ10uY29uY2F0KGFyZ3MsIFtzdGFja10pKTtcbiAgfTtcbn1cblxudmFyIHdhcm5pbmckMSA9IHdhcm5pbmc7XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxudmFyIHdhcm5BYm91dERlcHJlY2F0ZWRMaWZlY3ljbGVzID0gZmFsc2U7XG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG52YXIgZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlciA9IGZhbHNlOyAvLyBUT0RPOiB0cnVlPyBIZXJlIGl0IG1pZ2h0IGp1c3QgYmUgZmFsc2UuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gdm9pZCAwO1xudmFyIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZSA9IHZvaWQgMDtcbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlID0gbmV3IFNldCgpO1xufVxuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnRleHRUeXBlcyA9IHR5cGUuY29udGV4dFR5cGVzO1xuICBpZiAoIWNvbnRleHRUeXBlcykge1xuICAgIHJldHVybiBlbXB0eU9iamVjdDtcbiAgfVxuICB2YXIgbWFza2VkQ29udGV4dCA9IHt9O1xuICBmb3IgKHZhciBjb250ZXh0TmFtZSBpbiBjb250ZXh0VHlwZXMpIHtcbiAgICBtYXNrZWRDb250ZXh0W2NvbnRleHROYW1lXSA9IGNvbnRleHRbY29udGV4dE5hbWVdO1xuICB9XG4gIHJldHVybiBtYXNrZWRDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0NvbnRleHRUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24pIHtcbiAge1xuICAgIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgJ0NvbXBvbmVudCcsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5nZXRDdXJyZW50U3RhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCkge1xuICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCBzbG90cyBpbiB0aGlzIGNvbnRleHQgdG8gc3RvcmUgdGhpcyB0aHJlYWRJRCxcbiAgLy8gZmlsbCBpdCBpbiB3aXRob3V0IGxlYXZpbmcgYW55IGhvbGVzIHRvIGVuc3VyZSB0aGF0IHRoZSBWTSBvcHRpbWl6ZXNcbiAgLy8gdGhpcyBhcyBub24taG9sZXkgaW5kZXggcHJvcGVydGllcy5cbiAgLy8gKE5vdGU6IElmIGByZWFjdGAgcGFja2FnZSBpcyA8IDE2LjYsIF90aHJlYWRDb3VudCBpcyB1bmRlZmluZWQuKVxuICBmb3IgKHZhciBpID0gY29udGV4dC5fdGhyZWFkQ291bnQgfCAwOyBpIDw9IHRocmVhZElEOyBpKyspIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCB0aGlzIGlzIHRoZSBzYW1lIGFzIHRoZSBkZWZhdWx0VmFsdWUgd2hpY2ggbWlnaHQgbm90IGJlXG4gICAgLy8gdHJ1ZSBpZiB3ZSdyZSByZW5kZXJpbmcgaW5zaWRlIGEgc2Vjb25kYXJ5IHJlbmRlcmVyIGJ1dCB0aGV5IGFyZVxuICAgIC8vIHNlY29uZGFyeSBiZWNhdXNlIHRoZXNlIHVzZSBjYXNlcyBhcmUgdmVyeSByYXJlLlxuICAgIGNvbnRleHRbaV0gPSBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gaSArIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NvbnRleHQodHlwZSwgY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgdmFyIGNvbnRleHRUeXBlID0gdHlwZS5jb250ZXh0VHlwZTtcbiAge1xuICAgIGlmICgnY29udGV4dFR5cGUnIGluIHR5cGUpIHtcbiAgICAgIHZhciBpc1ZhbGlkID1cbiAgICAgIC8vIEFsbG93IG51bGwgZm9yIGNvbmRpdGlvbmFsIGRlY2xhcmF0aW9uXG4gICAgICBjb250ZXh0VHlwZSA9PT0gbnVsbCB8fCBjb250ZXh0VHlwZSAhPT0gdW5kZWZpbmVkICYmIGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgJiYgY29udGV4dFR5cGUuX2NvbnRleHQgPT09IHVuZGVmaW5lZDsgLy8gTm90IGEgPENvbnRleHQuQ29uc3VtZXI+XG5cbiAgICAgIGlmICghaXNWYWxpZCAmJiAhZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgICBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUuYWRkKHR5cGUpO1xuXG4gICAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAgICBpZiAoY29udGV4dFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gdW5kZWZpbmVkLiAnICsgJ1RoaXMgY2FuIGJlIGNhdXNlZCBieSBhIHR5cG8gb3IgYnkgbWl4aW5nIHVwIG5hbWVkIGFuZCBkZWZhdWx0IGltcG9ydHMuICcgKyAnVGhpcyBjYW4gYWxzbyBoYXBwZW4gZHVlIHRvIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSwgc28gJyArICd0cnkgbW92aW5nIHRoZSBjcmVhdGVDb250ZXh0KCkgY2FsbCB0byBhIHNlcGFyYXRlIGZpbGUuJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byBhICcgKyB0eXBlb2YgY29udGV4dFR5cGUgKyAnLic7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUpIHtcbiAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Qcm92aWRlciBpbnN0ZWFkPyc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIDxDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgIGFkZGVuZHVtID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIHRoZSBDb250ZXh0LkNvbnN1bWVyIGluc3RlYWQ/JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGFuIG9iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjb250ZXh0VHlwZSkuam9pbignLCAnKSArICd9Lic7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXMgZGVmaW5lcyBhbiBpbnZhbGlkIGNvbnRleHRUeXBlLiAnICsgJ2NvbnRleHRUeXBlIHNob3VsZCBwb2ludCB0byB0aGUgQ29udGV4dCBvYmplY3QgcmV0dXJuZWQgYnkgUmVhY3QuY3JlYXRlQ29udGV4dCgpLiVzJywgZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB8fCAnQ29tcG9uZW50JywgYWRkZW5kdW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGNvbnRleHRUeXBlID09PSAnb2JqZWN0JyAmJiBjb250ZXh0VHlwZSAhPT0gbnVsbCkge1xuICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0VHlwZSwgdGhyZWFkSUQpO1xuICAgIHJldHVybiBjb250ZXh0VHlwZVt0aHJlYWRJRF07XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1hc2tlZENvbnRleHQgPSBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcbiAgICB7XG4gICAgICBpZiAodHlwZS5jb250ZXh0VHlwZXMpIHtcbiAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIG1hc2tlZENvbnRleHQsICdjb250ZXh0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrZWRDb250ZXh0O1xuICB9XG59XG5cbi8vIEFsbG9jYXRlcyBhIG5ldyBpbmRleCBmb3IgZWFjaCByZXF1ZXN0LiBUcmllcyB0byBzdGF5IGFzIGNvbXBhY3QgYXMgcG9zc2libGUgc28gdGhhdCB0aGVzZVxuLy8gaW5kaWNlcyBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgYSB0aWdodGx5IHBhY2thZ2VkIGFycmF5LiBBcyBvcHBvc2VkIHRvIGJlaW5nIHVzZWQgaW4gYSBNYXAuXG4vLyBUaGUgZmlyc3QgYWxsb2NhdGVkIGluZGV4IGlzIDEuXG5cbnZhciBuZXh0QXZhaWxhYmxlVGhyZWFkSURzID0gbmV3IFVpbnQxNkFycmF5KDE2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2ldID0gaSArIDE7XG59XG5uZXh0QXZhaWxhYmxlVGhyZWFkSURzWzE1XSA9IDA7XG5cbmZ1bmN0aW9uIGdyb3dUaHJlYWRDb3VudEFuZFJldHVybk5leHRBdmFpbGFibGUoKSB7XG4gIHZhciBvbGRBcnJheSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHM7XG4gIHZhciBvbGRTaXplID0gb2xkQXJyYXkubGVuZ3RoO1xuICB2YXIgbmV3U2l6ZSA9IG9sZFNpemUgKiAyO1xuICAhKG5ld1NpemUgPD0gMHgxMDAwMCkgPyBpbnZhcmlhbnQoZmFsc2UsICdNYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IFJlYWN0IHJlbmRlcmVycyBleGNlZWRlZC4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgbm90IHByb3Blcmx5IGRlc3Ryb3lpbmcgdGhlIFJlYWRhYmxlIHByb3ZpZGVkIGJ5IFJlYWN0LiBFbnN1cmUgdGhhdCB5b3UgY2FsbCAuZGVzdHJveSgpIG9uIGl0IGlmIHlvdSBubyBsb25nZXIgd2FudCB0byByZWFkIGZyb20gaXQsIGFuZCBkaWQgbm90IHJlYWQgdG8gdGhlIGVuZC4gSWYgeW91IHVzZSAucGlwZSgpIHRoaXMgc2hvdWxkIGJlIGF1dG9tYXRpYy4nKSA6IHZvaWQgMDtcbiAgdmFyIG5ld0FycmF5ID0gbmV3IFVpbnQxNkFycmF5KG5ld1NpemUpO1xuICBuZXdBcnJheS5zZXQob2xkQXJyYXkpO1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzID0gbmV3QXJyYXk7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBvbGRTaXplICsgMTtcbiAgZm9yICh2YXIgX2kgPSBvbGRTaXplOyBfaSA8IG5ld1NpemUgLSAxOyBfaSsrKSB7XG4gICAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tfaV0gPSBfaSArIDE7XG4gIH1cbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tuZXdTaXplIC0gMV0gPSAwO1xuICByZXR1cm4gb2xkU2l6ZTtcbn1cblxuZnVuY3Rpb24gYWxsb2NUaHJlYWRJRCgpIHtcbiAgdmFyIG5leHRJRCA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XG4gIGlmIChuZXh0SUQgPT09IDApIHtcbiAgICByZXR1cm4gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpO1xuICB9XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25leHRJRF07XG4gIHJldHVybiBuZXh0SUQ7XG59XG5cbmZ1bmN0aW9uIGZyZWVUaHJlYWRJRChpZCkge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2lkXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBpZDtcbn1cblxuLy8gQSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4vLyBJdCBpcyBoYW5kbGVkIGJ5IFJlYWN0IHNlcGFyYXRlbHkgYW5kIHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG52YXIgUkVTRVJWRUQgPSAwO1xuXG4vLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxuLy8gQXR0cmlidXRlcyB0aGF0IGFyZW4ndCBpbiB0aGUgd2hpdGVsaXN0IGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoaXMgdHlwZS5cbnZhciBTVFJJTkcgPSAxO1xuXG4vLyBBIHN0cmluZyBhdHRyaWJ1dGUgdGhhdCBhY2NlcHRzIGJvb2xlYW5zIGluIFJlYWN0LiBJbiBIVE1MLCB0aGVzZSBhcmUgY2FsbGVkXG4vLyBcImVudW1lcmF0ZWRcIiBhdHRyaWJ1dGVzIHdpdGggXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIiBhcyBwb3NzaWJsZSB2YWx1ZXMuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcInRydWVcIiBzdHJpbmcuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgc2V0IHRvIGEgXCJmYWxzZVwiIHN0cmluZy5cbnZhciBCT09MRUFOSVNIX1NUUklORyA9IDI7XG5cbi8vIEEgcmVhbCBib29sZWFuIGF0dHJpYnV0ZS5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHByZXNlbnQgKHNldCBlaXRoZXIgdG8gYW4gZW1wdHkgc3RyaW5nIG9yIGl0cyBuYW1lKS5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBvbWl0dGVkLlxudmFyIEJPT0xFQU4gPSAzO1xuXG4vLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cbnZhciBPVkVSTE9BREVEX0JPT0xFQU4gPSA0O1xuXG4vLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG52YXIgTlVNRVJJQyA9IDU7XG5cbi8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIHBvc2l0aXZlIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cbnZhciBQT1NJVElWRV9OVU1FUklDID0gNjtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSAnOkEtWl9hLXpcXFxcdTAwQzAtXFxcXHUwMEQ2XFxcXHUwMEQ4LVxcXFx1MDBGNlxcXFx1MDBGOC1cXFxcdTAyRkZcXFxcdTAzNzAtXFxcXHUwMzdEXFxcXHUwMzdGLVxcXFx1MUZGRlxcXFx1MjAwQy1cXFxcdTIwMERcXFxcdTIwNzAtXFxcXHUyMThGXFxcXHUyQzAwLVxcXFx1MkZFRlxcXFx1MzAwMS1cXFxcdUQ3RkZcXFxcdUY5MDAtXFxcXHVGRENGXFxcXHVGREYwLVxcXFx1RkZGRCc7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbnZhciBBVFRSSUJVVEVfTkFNRV9DSEFSID0gQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArICdcXFxcLS4wLTlcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MCc7XG5cblxudmFyIFJPT1RfQVRUUklCVVRFX05BTUUgPSAnZGF0YS1yZWFjdHJvb3QnO1xudmFyIFZBTElEX0FUVFJJQlVURV9OQU1FX1JFR0VYID0gbmV3IFJlZ0V4cCgnXlsnICsgQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArICddWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xudmFyIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWVTYWZlKGF0dHJpYnV0ZU5hbWUpIHtcbiAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbCh2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbChpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVgudGVzdChhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZVthdHRyaWJ1dGVOYW1lXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZVthdHRyaWJ1dGVOYW1lXSA9IHRydWU7XG4gIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lOiBgJXNgJywgYXR0cmlidXRlTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG91bGRJZ25vcmVBdHRyaWJ1dGUobmFtZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRDtcbiAgfVxuICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG5hbWUubGVuZ3RoID4gMiAmJiAobmFtZVswXSA9PT0gJ28nIHx8IG5hbWVbMF0gPT09ICdPJykgJiYgKG5hbWVbMV0gPT09ICduJyB8fCBuYW1lWzFdID09PSAnTicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAvLyAkRmxvd0lzc3VlIHN5bWJvbCBpcyBwZXJmZWN0bHkgdmFsaWQgaGVyZVxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gIXByb3BlcnR5SW5mby5hY2NlcHRzQm9vbGVhbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IG5hbWUudG9Mb3dlckNhc2UoKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICE9PSAnZGF0YS0nICYmIHByZWZpeCAhPT0gJ2FyaWEtJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkUmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgc3dpdGNoIChwcm9wZXJ0eUluZm8udHlwZSkge1xuICAgICAgY2FzZSBCT09MRUFOOlxuICAgICAgICByZXR1cm4gIXZhbHVlO1xuICAgICAgY2FzZSBPVkVSTE9BREVEX0JPT0xFQU46XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZmFsc2U7XG4gICAgICBjYXNlIE5VTUVSSUM6XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZSk7XG4gICAgICBjYXNlIFBPU0lUSVZFX05VTUVSSUM6XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5SW5mbyhuYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gcHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCB0eXBlLCBtdXN0VXNlUHJvcGVydHksIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWVzcGFjZSkge1xuICB0aGlzLmFjY2VwdHNCb29sZWFucyA9IHR5cGUgPT09IEJPT0xFQU5JU0hfU1RSSU5HIHx8IHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IGF0dHJpYnV0ZU5hbWVzcGFjZTtcbiAgdGhpcy5tdXN0VXNlUHJvcGVydHkgPSBtdXN0VXNlUHJvcGVydHk7XG4gIHRoaXMucHJvcGVydHlOYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbn1cblxuLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGlzIGxpc3QsIGJlIHN1cmUgdG8gYWxzbyBhZGQgdGhlbSB0b1xuLy8gdGhlIGBwb3NzaWJsZVN0YW5kYXJkTmFtZXNgIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3Rcbi8vIG5hbWUgd2FybmluZ3MuXG52YXIgcHJvcGVydGllcyA9IHt9O1xuXG4vLyBUaGVzZSBwcm9wcyBhcmUgcmVzZXJ2ZWQgYnkgUmVhY3QuIFRoZXkgc2hvdWxkbid0IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cblsnY2hpbGRyZW4nLCAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuLy8gVE9ETzogVGhpcyBwcmV2ZW50cyB0aGUgYXNzaWdubWVudCBvZiBkZWZhdWx0VmFsdWUgdG8gcmVndWxhclxuLy8gZWxlbWVudHMgKG5vdCBqdXN0IGlucHV0cykuIE5vdyB0aGF0IFJlYWN0RE9NSW5wdXQgYXNzaWducyB0byB0aGVcbi8vIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSAtLSBkbyB3ZSBuZWVkIHRoaXM/XG4nZGVmYXVsdFZhbHVlJywgJ2RlZmF1bHRDaGVja2VkJywgJ2lubmVySFRNTCcsICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLCAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJywgJ3N0eWxlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBSRVNFUlZFRCwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwpO1xufSAvLyBhdHRyaWJ1dGVOYW1lc3BhY2Vcbik7XG5cbi8vIEEgZmV3IFJlYWN0IHN0cmluZyBhdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbmFtZS5cbi8vIFRoaXMgaXMgYSBtYXBwaW5nIGZyb20gUmVhY3QgcHJvcCBuYW1lcyB0byB0aGUgYXR0cmlidXRlIG5hbWVzLlxuW1snYWNjZXB0Q2hhcnNldCcsICdhY2NlcHQtY2hhcnNldCddLCBbJ2NsYXNzTmFtZScsICdjbGFzcyddLCBbJ2h0bWxGb3InLCAnZm9yJ10sIFsnaHR0cEVxdWl2JywgJ2h0dHAtZXF1aXYnXV0uZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWZbMF0sXG4gICAgICBhdHRyaWJ1dGVOYW1lID0gX3JlZlsxXTtcblxuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsKTtcbn0gLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4pO1xuXG4vLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXG4vLyBJbiBSZWFjdCwgd2UgbGV0IHVzZXJzIHBhc3MgYHRydWVgIGFuZCBgZmFsc2VgIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5XG4vLyB0aGVzZSBhcmVuJ3QgYm9vbGVhbiBhdHRyaWJ1dGVzICh0aGV5IGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MpLlxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsKTtcbn0gLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4pO1xuXG4vLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG4vLyBTaW5jZSB0aGVzZSBhcmUgU1ZHIGF0dHJpYnV0ZXMsIHRoZWlyIGF0dHJpYnV0ZSBuYW1lcyBhcmUgY2FzZS1zZW5zaXRpdmUuXG5bJ2F1dG9SZXZlcnNlJywgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAnZm9jdXNhYmxlJywgJ3ByZXNlcnZlQWxwaGEnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCk7XG59IC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuKTtcblxuLy8gVGhlc2UgYXJlIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzLlxuWydhbGxvd0Z1bGxTY3JlZW4nLCAnYXN5bmMnLFxuLy8gTm90ZTogdGhlcmUgaXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIERPTVxuLy8gb24gdGhlIGNsaWVudCBzaWRlIGJlY2F1c2UgdGhlIGJyb3dzZXJzIGFyZSBpbmNvbnNpc3RlbnQuIEluc3RlYWQgd2UgY2FsbCBmb2N1cygpLlxuJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsICdjb250cm9scycsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2Rpc2FibGVkJywgJ2Zvcm1Ob1ZhbGlkYXRlJywgJ2hpZGRlbicsICdsb29wJywgJ25vTW9kdWxlJywgJ25vVmFsaWRhdGUnLCAnb3BlbicsICdwbGF5c0lubGluZScsICdyZWFkT25seScsICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdzY29wZWQnLCAnc2VhbWxlc3MnLFxuLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsKTtcbn0gLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4pO1xuXG4vLyBUaGVzZSBhcmUgdGhlIGZldyBSZWFjdCBwcm9wcyB0aGF0IHdlIHNldCBhcyBET00gcHJvcGVydGllc1xuLy8gcmF0aGVyIHRoYW4gYXR0cmlidXRlcy4gVGhlc2UgYXJlIGFsbCBib29sZWFucy5cblsnY2hlY2tlZCcsXG4vLyBOb3RlOiBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xuLy8gZGlzYWJsZWQgd2l0aCBgcmVtb3ZlQXR0cmlidXRlYC4gV2UgaGF2ZSBzcGVjaWFsIGxvZ2ljIGZvciBoYW5kbGluZyB0aGlzLlxuJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCB0cnVlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsKTtcbn0gLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4pO1xuXG4vLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgYXJlIFwib3ZlcmxvYWRlZCBib29sZWFuc1wiOiB0aGV5IGJlaGF2ZSBsaWtlXG4vLyBib29sZWFucywgYnV0IGNhbiBhbHNvIGFjY2VwdCBhIHN0cmluZyB2YWx1ZS5cblsnY2FwdHVyZScsICdkb3dubG9hZCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgT1ZFUkxPQURFRF9CT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCk7XG59IC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuKTtcblxuLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblsnY29scycsICdyb3dzJywgJ3NpemUnLCAnc3BhbiddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgUE9TSVRJVkVfTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwpO1xufSAvLyBhdHRyaWJ1dGVOYW1lc3BhY2Vcbik7XG5cbi8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIG51bWJlcnMuXG5bJ3Jvd1NwYW4nLCAnc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE5VTUVSSUMsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwpO1xufSAvLyBhdHRyaWJ1dGVOYW1lc3BhY2Vcbik7XG5cbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIHJldHVybiB0b2tlblsxXS50b1VwcGVyQ2FzZSgpO1xufTtcblxuLy8gVGhpcyBpcyBhIGxpc3Qgb2YgYWxsIFNWRyBhdHRyaWJ1dGVzIHRoYXQgbmVlZCBzcGVjaWFsIGNhc2luZywgbmFtZXNwYWNpbmcsXG4vLyBvciBib29sZWFuIHZhbHVlIGFzc2lnbm1lbnQuIFJlZ3VsYXIgYXR0cmlidXRlcyB0aGF0IGp1c3QgYWNjZXB0IHN0cmluZ3Ncbi8vIGFuZCBoYXZlIHRoZSBzYW1lIG5hbWVzIGFyZSBvbWl0dGVkLCBqdXN0IGxpa2UgaW4gdGhlIEhUTUwgd2hpdGVsaXN0LlxuLy8gU29tZSBvZiB0aGVzZSBhdHRyaWJ1dGVzIGNhbiBiZSBoYXJkIHRvIGZpbmQuIFRoaXMgbGlzdCB3YXMgY3JlYXRlZCBieVxuLy8gc2NyYXBwaW5nIHRoZSBNRE4gZG9jdW1lbnRhdGlvbi5cblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwpO1xufSAvLyBhdHRyaWJ1dGVOYW1lc3BhY2Vcbik7XG5cbi8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bGluayBuYW1lc3BhY2UuXG5bJ3hsaW5rOmFjdHVhdGUnLCAneGxpbms6YXJjcm9sZScsICd4bGluazpocmVmJywgJ3hsaW5rOnJvbGUnLCAneGxpbms6c2hvdycsICd4bGluazp0aXRsZScsICd4bGluazp0eXBlJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xufSk7XG5cbi8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bWwgbmFtZXNwYWNlLlxuWyd4bWw6YmFzZScsICd4bWw6bGFuZycsICd4bWw6c3BhY2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnKTtcbn0pO1xuXG4vLyBUaGVzZSBhdHRyaWJ1dGUgZXhpc3RzIGJvdGggaW4gSFRNTCBhbmQgU1ZHLlxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxuLy8gdGhlIFJlYWN0IG5hbWUgbGlrZSB3ZSBkbyBmb3IgYXR0cmlidXRlcyB0aGF0IGV4aXN0IG9ubHkgaW4gSFRNTC5cblsndGFiSW5kZXgnLCAnY3Jvc3NPcmlnaW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHByb3BlcnRpZXNbYXR0cmlidXRlTmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKGF0dHJpYnV0ZU5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCk7XG59IC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuKTtcblxuLy8gY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XG5cbi8qKlxuICogRXNjYXBlcyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIEhUTUwgZW50aXRpZXMgaW4gYSBnaXZlbiBodG1sIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBIVE1MIHN0cmluZyB0byBlc2NhcGUgZm9yIGxhdGVyIGluc2VydGlvblxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcbiAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBlc2NhcGUgPSB2b2lkIDA7XG4gIHZhciBodG1sID0gJyc7XG4gIHZhciBpbmRleCA9IHZvaWQgMDtcbiAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgY2FzZSAzNDpcbiAgICAgICAgLy8gXCJcbiAgICAgICAgZXNjYXBlID0gJyZxdW90Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gJlxuICAgICAgICBlc2NhcGUgPSAnJmFtcDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjeDI3Oyc7IC8vIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWw7IHVzZWQgdG8gYmUgJyYjMzknXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDpcbiAgICAgICAgLy8gPFxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MjpcbiAgICAgICAgLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGU7XG4gIH1cblxuICByZXR1cm4gbGFzdEluZGV4ICE9PSBpbmRleCA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpIDogaHRtbDtcbn1cbi8vIGVuZCBjb2RlIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbFxuXG4vKipcbiAqIEVzY2FwZXMgdGV4dCB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGV4dCBUZXh0IHZhbHVlIHRvIGVzY2FwZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpIHtcbiAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSB7XG4gICAgLy8gdGhpcyBzaG9ydGNpcmN1aXQgaGVscHMgcGVyZiBmb3IgdHlwZXMgdGhhdCB3ZSBrbm93IHdpbGwgbmV2ZXIgaGF2ZVxuICAgIC8vIHNwZWNpYWwgY2hhcmFjdGVycywgZXNwZWNpYWxseSBnaXZlbiB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvZnRlblxuICAgIC8vIGZvciBudW1lcmljIGRvbSBpZHMuXG4gICAgcmV0dXJuICcnICsgdGV4dDtcbiAgfVxuICByZXR1cm4gZXNjYXBlSHRtbCh0ZXh0KTtcbn1cblxuLyoqXG4gKiBFc2NhcGVzIGF0dHJpYnV0ZSB2YWx1ZSB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiBlc2NhcGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpIHtcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih2YWx1ZSkgKyAnXCInO1xufVxuXG4vKipcbiAqIE9wZXJhdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCBET00gcHJvcGVydGllcy5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciB0aGUgSUQgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFVuZXNjYXBlZCBJRC5cbiAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclJvb3QoKSB7XG4gIHJldHVybiBST09UX0FUVFJJQlVURV9OQU1FICsgJz1cIlwiJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIG1hcmt1cCBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7P3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgbnVsbCBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm8obmFtZSk7XG4gIGlmIChuYW1lICE9PSAnc3R5bGUnICYmIHNob3VsZElnbm9yZUF0dHJpYnV0ZShuYW1lLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eUluZm8uYXR0cmlidXRlTmFtZTtcbiAgICB2YXIgdHlwZSA9IHByb3BlcnR5SW5mby50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlTmFtZSArICc9XCJcIic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpKSB7XG4gICAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBNYXJrdXAgc3RyaW5nLCBvciBlbXB0eSBzdHJpbmcgaWYgdGhlIHByb3BlcnR5IHdhcyBpbnZhbGlkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG59XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbnZhciBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG52YXIgd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbi8vIFdoZXRoZXIgdGhlIHdvcmstaW4tcHJvZ3Jlc3MgaG9vayBpcyBhIHJlLXJlbmRlcmVkIGhvb2tcbnZhciBpc1JlUmVuZGVyID0gZmFsc2U7XG4vLyBXaGV0aGVyIGFuIHVwZGF0ZSB3YXMgc2NoZWR1bGVkIGR1cmluZyB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyByZW5kZXIgcGFzcy5cbnZhciBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7XG4vLyBMYXppbHkgY3JlYXRlZCBtYXAgb2YgcmVuZGVyLXBoYXNlIHVwZGF0ZXNcbnZhciByZW5kZXJQaGFzZVVwZGF0ZXMgPSBudWxsO1xuLy8gQ291bnRlciB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzLlxudmFyIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbnZhciBSRV9SRU5ERVJfTElNSVQgPSAyNTtcblxudmFyIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuXG4vLyBJbiBERVYsIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcHJpbWl0aXZlIGhvb2tcbnZhciBjdXJyZW50SG9va05hbWVJbkRldiA9IHZvaWQgMDtcblxuZnVuY3Rpb24gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpIHtcbiAgIShjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpIDogdm9pZCAwO1xuICB7XG4gICAgISFpc0luSG9va1VzZXJDb2RlSW5EZXYgPyB3YXJuaW5nJDEoZmFsc2UsICdEbyBub3QgY2FsbCBIb29rcyBpbnNpZGUgdXNlRWZmZWN0KC4uLiksIHVzZU1lbW8oLi4uKSwgb3Igb3RoZXIgYnVpbHQtaW4gSG9va3MuICcgKyAnWW91IGNhbiBvbmx5IGNhbGwgSG9va3MgYXQgdGhlIHRvcCBsZXZlbCBvZiB5b3VyIFJlYWN0IGZ1bmN0aW9uLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgJyArICdodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJykgOiB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykge1xuICBpZiAocHJldkRlcHMgPT09IG51bGwpIHtcbiAgICB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICclcyByZWNlaXZlZCBhIGZpbmFsIGFyZ3VtZW50IGR1cmluZyB0aGlzIHJlbmRlciwgYnV0IG5vdCBkdXJpbmcgJyArICd0aGUgcHJldmlvdXMgcmVuZGVyLiBFdmVuIHRob3VnaCB0aGUgZmluYWwgYXJndW1lbnQgaXMgb3B0aW9uYWwsICcgKyAnaXRzIHR5cGUgY2Fubm90IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMuJywgY3VycmVudEhvb2tOYW1lSW5EZXYpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB7XG4gICAgLy8gRG9uJ3QgYm90aGVyIGNvbXBhcmluZyBsZW5ndGhzIGluIHByb2QgYmVjYXVzZSB0aGVzZSBhcnJheXMgc2hvdWxkIGJlXG4gICAgLy8gcGFzc2VkIGlubGluZS5cbiAgICBpZiAobmV4dERlcHMubGVuZ3RoICE9PSBwcmV2RGVwcy5sZW5ndGgpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1RoZSBmaW5hbCBhcmd1bWVudCBwYXNzZWQgdG8gJXMgY2hhbmdlZCBzaXplIGJldHdlZW4gcmVuZGVycy4gVGhlICcgKyAnb3JkZXIgYW5kIHNpemUgb2YgdGhpcyBhcnJheSBtdXN0IHJlbWFpbiBjb25zdGFudC5cXG5cXG4nICsgJ1ByZXZpb3VzOiAlc1xcbicgKyAnSW5jb21pbmc6ICVzJywgY3VycmVudEhvb2tOYW1lSW5EZXYsICdbJyArIG5leHREZXBzLmpvaW4oJywgJykgKyAnXScsICdbJyArIHByZXZEZXBzLmpvaW4oJywgJykgKyAnXScpO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZEZXBzLmxlbmd0aCAmJiBpIDwgbmV4dERlcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXMobmV4dERlcHNbaV0sIHByZXZEZXBzW2ldKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9vaygpIHtcbiAgaWYgKG51bWJlck9mUmVSZW5kZXJzID4gMCkge1xuICAgIGludmFyaWFudChmYWxzZSwgJ1JlbmRlcmVkIG1vcmUgaG9va3MgdGhhbiBkdXJpbmcgdGhlIHByZXZpb3VzIHJlbmRlcicpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVtb2l6ZWRTdGF0ZTogbnVsbCxcbiAgICBxdWV1ZTogbnVsbCxcbiAgICBuZXh0OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpIHtcbiAgaWYgKHdvcmtJblByb2dyZXNzSG9vayA9PT0gbnVsbCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgaW4gdGhlIGxpc3RcbiAgICBpZiAoZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcbiAgICAgIGlzUmVSZW5kZXIgPSBmYWxzZTtcbiAgICAgIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlSG9vaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGVyZSdzIGFscmVhZHkgYSB3b3JrLWluLXByb2dyZXNzLiBSZXVzZSBpdC5cbiAgICAgIGlzUmVSZW5kZXIgPSB0cnVlO1xuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2s7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2submV4dCA9PT0gbnVsbCkge1xuICAgICAgaXNSZVJlbmRlciA9IGZhbHNlO1xuICAgICAgLy8gQXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vay5uZXh0ID0gY3JlYXRlSG9vaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGVyZSdzIGFscmVhZHkgYSB3b3JrLWluLXByb2dyZXNzLiBSZXVzZSBpdC5cbiAgICAgIGlzUmVSZW5kZXIgPSB0cnVlO1xuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiB3b3JrSW5Qcm9ncmVzc0hvb2s7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IGNvbXBvbmVudElkZW50aXR5O1xuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIHNob3VsZCBoYXZlIGFscmVhZHkgYmVlbiByZXNldFxuICAvLyBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7XG4gIC8vIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbiAgLy8gbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xuICAvLyByZW5kZXJQaGFzZVVwZGF0ZXMgPSBudWxsO1xuICAvLyB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBmaW5pc2hIb29rcyhDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbiwgcmVmT3JDb250ZXh0KSB7XG4gIC8vIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgZXZlcnkgZnVuY3Rpb24gY29tcG9uZW50IHRvIHByZXZlbnQgaG9va3MgZnJvbVxuICAvLyBiZWluZyB1c2VkIGluIGNsYXNzZXMuXG5cbiAgd2hpbGUgKGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUpIHtcbiAgICAvLyBVcGRhdGVzIHdlcmUgc2NoZWR1bGVkIGR1cmluZyB0aGUgcmVuZGVyIHBoYXNlLiBUaGV5IGFyZSBzdG9yZWQgaW5cbiAgICAvLyB0aGUgYHJlbmRlclBoYXNlVXBkYXRlc2AgbWFwLiBDYWxsIHRoZSBjb21wb25lbnQgYWdhaW4sIHJldXNpbmcgdGhlXG4gICAgLy8gd29yay1pbi1wcm9ncmVzcyBob29rcyBhbmQgYXBwbHlpbmcgdGhlIGFkZGl0aW9uYWwgdXBkYXRlcyBvbiB0b3AuIEtlZXBcbiAgICAvLyByZXN0YXJ0aW5nIHVudGlsIG5vIG1vcmUgdXBkYXRlcyBhcmUgc2NoZWR1bGVkLlxuICAgIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTtcbiAgICBudW1iZXJPZlJlUmVuZGVycyArPSAxO1xuXG4gICAgLy8gU3RhcnQgb3ZlciBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuXG4gICAgY2hpbGRyZW4gPSBDb21wb25lbnQocHJvcHMsIHJlZk9yQ29udGV4dCk7XG4gIH1cbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG4gIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoZXNlIHdlcmUgcmVzZXQgYWJvdmVcbiAgLy8gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHJlYWRDb250ZXh0KGNvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB2YXIgdGhyZWFkSUQgPSBjdXJyZW50VGhyZWFkSUQ7XG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gIHtcbiAgICAhIWlzSW5Ib29rVXNlckNvZGVJbkRldiA/IHdhcm5pbmckMShmYWxzZSwgJ0NvbnRleHQgY2FuIG9ubHkgYmUgcmVhZCB3aGlsZSBSZWFjdCBpcyByZW5kZXJpbmcuICcgKyAnSW4gY2xhc3NlcywgeW91IGNhbiByZWFkIGl0IGluIHRoZSByZW5kZXIgbWV0aG9kIG9yIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy4gJyArICdJbiBmdW5jdGlvbiBjb21wb25lbnRzLCB5b3UgY2FuIHJlYWQgaXQgZGlyZWN0bHkgaW4gdGhlIGZ1bmN0aW9uIGJvZHksIGJ1dCBub3QgJyArICdpbnNpZGUgSG9va3MgbGlrZSB1c2VSZWR1Y2VyKCkgb3IgdXNlTWVtbygpLicpIDogdm9pZCAwO1xuICB9XG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0LCBvYnNlcnZlZEJpdHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUNvbnRleHQnO1xuICB9XG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgdmFyIHRocmVhZElEID0gY3VycmVudFRocmVhZElEO1xuICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpO1xuICByZXR1cm4gY29udGV4dFt0aHJlYWRJRF07XG59XG5cbmZ1bmN0aW9uIGJhc2ljU3RhdGVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicgPyBhY3Rpb24oc3RhdGUpIDogYWN0aW9uO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZVN0YXRlJztcbiAgfVxuICByZXR1cm4gdXNlUmVkdWNlcihiYXNpY1N0YXRlUmVkdWNlcixcbiAgLy8gdXNlUmVkdWNlciBoYXMgYSBzcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCBsYXp5IHVzZVN0YXRlIGluaXRpYWxpemVyc1xuICBpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAge1xuICAgIGlmIChyZWR1Y2VyICE9PSBiYXNpY1N0YXRlUmVkdWNlcikge1xuICAgICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlUmVkdWNlcic7XG4gICAgfVxuICB9XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG4gIGlmIChpc1JlUmVuZGVyKSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlLXJlbmRlci4gQXBwbHkgdGhlIG5ldyByZW5kZXIgcGhhc2UgdXBkYXRlcyB0byB0aGUgcHJldmlvdXNcbiAgICB2YXIgX3F1ZXVlID0gd29ya0luUHJvZ3Jlc3NIb29rLnF1ZXVlO1xuICAgIHZhciBfZGlzcGF0Y2ggPSBfcXVldWUuZGlzcGF0Y2g7XG4gICAgaWYgKHJlbmRlclBoYXNlVXBkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgLy8gUmVuZGVyIHBoYXNlIHVwZGF0ZXMgYXJlIHN0b3JlZCBpbiBhIG1hcCBvZiBxdWV1ZSAtPiBsaW5rZWQgbGlzdFxuICAgICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KF9xdWV1ZSk7XG4gICAgICBpZiAoZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbmRlclBoYXNlVXBkYXRlcy5kZWxldGUoX3F1ZXVlKTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG4gICAgICAgIHZhciB1cGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgLy8gUHJvY2VzcyB0aGlzIHJlbmRlciBwaGFzZSB1cGRhdGUuIFdlIGRvbid0IGhhdmUgdG8gY2hlY2sgdGhlXG4gICAgICAgICAgLy8gcHJpb3JpdHkgYmVjYXVzZSBpdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHJlbmRlcidzLlxuICAgICAgICAgIHZhciBfYWN0aW9uID0gdXBkYXRlLmFjdGlvbjtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdTdGF0ZSA9IHJlZHVjZXIobmV3U3RhdGUsIF9hY3Rpb24pO1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGUgPSB1cGRhdGUubmV4dDtcbiAgICAgICAgfSB3aGlsZSAodXBkYXRlICE9PSBudWxsKTtcblxuICAgICAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IG5ld1N0YXRlO1xuXG4gICAgICAgIHJldHVybiBbbmV3U3RhdGUsIF9kaXNwYXRjaF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUsIF9kaXNwYXRjaF07XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcbiAgICBpZiAocmVkdWNlciA9PT0gYmFzaWNTdGF0ZVJlZHVjZXIpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYHVzZVN0YXRlYC5cbiAgICAgIGluaXRpYWxTdGF0ZSA9IHR5cGVvZiBpbml0aWFsQXJnID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbEFyZygpIDogaW5pdGlhbEFyZztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbFN0YXRlID0gaW5pdCAhPT0gdW5kZWZpbmVkID8gaW5pdChpbml0aWFsQXJnKSA6IGluaXRpYWxBcmc7XG4gICAgfVxuICAgIHtcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgIH1cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB2YXIgX3F1ZXVlMiA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZSA9IHtcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBkaXNwYXRjaDogbnVsbFxuICAgIH07XG4gICAgdmFyIF9kaXNwYXRjaDIgPSBfcXVldWUyLmRpc3BhdGNoID0gZGlzcGF0Y2hBY3Rpb24uYmluZChudWxsLCBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQsIF9xdWV1ZTIpO1xuICAgIHJldHVybiBbd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUsIF9kaXNwYXRjaDJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8obmV4dENyZWF0ZSwgZGVwcykge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuXG4gIHZhciBuZXh0RGVwcyA9IGRlcHMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZXBzO1xuXG4gIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2sgIT09IG51bGwpIHtcbiAgICB2YXIgcHJldlN0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG4gICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5leHREZXBzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwcmV2RGVwcyA9IHByZXZTdGF0ZVsxXTtcbiAgICAgICAgaWYgKGFyZUhvb2tJbnB1dHNFcXVhbChuZXh0RGVwcywgcHJldkRlcHMpKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZVswXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICB9XG4gIHZhciBuZXh0VmFsdWUgPSBuZXh0Q3JlYXRlKCk7XG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IFtuZXh0VmFsdWUsIG5leHREZXBzXTtcbiAgcmV0dXJuIG5leHRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuICB2YXIgcHJldmlvdXNSZWYgPSB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZTtcbiAgaWYgKHByZXZpb3VzUmVmID09PSBudWxsKSB7XG4gICAgdmFyIHJlZiA9IHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH07XG4gICAge1xuICAgICAgT2JqZWN0LnNlYWwocmVmKTtcbiAgICB9XG4gICAgd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUgPSByZWY7XG4gICAgcmV0dXJuIHJlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJldmlvdXNSZWY7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHtcbiAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VMYXlvdXRFZmZlY3QnO1xuICB9XG4gIHdhcm5pbmckMShmYWxzZSwgJ3VzZUxheW91dEVmZmVjdCBkb2VzIG5vdGhpbmcgb24gdGhlIHNlcnZlciwgYmVjYXVzZSBpdHMgZWZmZWN0IGNhbm5vdCAnICsgXCJiZSBlbmNvZGVkIGludG8gdGhlIHNlcnZlciByZW5kZXJlcidzIG91dHB1dCBmb3JtYXQuIFRoaXMgd2lsbCBsZWFkIFwiICsgJ3RvIGEgbWlzbWF0Y2ggYmV0d2VlbiB0aGUgaW5pdGlhbCwgbm9uLWh5ZHJhdGVkIFVJIGFuZCB0aGUgaW50ZW5kZWQgJyArICdVSS4gVG8gYXZvaWQgdGhpcywgdXNlTGF5b3V0RWZmZWN0IHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gJyArICdjb21wb25lbnRzIHRoYXQgcmVuZGVyIGV4Y2x1c2l2ZWx5IG9uIHRoZSBjbGllbnQuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtdXNlbGF5b3V0ZWZmZWN0LXNzciBmb3IgY29tbW9uIGZpeGVzLicpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEFjdGlvbihjb21wb25lbnRJZGVudGl0eSwgcXVldWUsIGFjdGlvbikge1xuICAhKG51bWJlck9mUmVSZW5kZXJzIDwgUkVfUkVOREVSX0xJTUlUKSA/IGludmFyaWFudChmYWxzZSwgJ1RvbyBtYW55IHJlLXJlbmRlcnMuIFJlYWN0IGxpbWl0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcnMgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLicpIDogdm9pZCAwO1xuXG4gIGlmIChjb21wb25lbnRJZGVudGl0eSA9PT0gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlbmRlciBwaGFzZSB1cGRhdGUuIFN0YXNoIGl0IGluIGEgbGF6aWx5LWNyZWF0ZWQgbWFwIG9mXG4gICAgLy8gcXVldWUgLT4gbGlua2VkIGxpc3Qgb2YgdXBkYXRlcy4gQWZ0ZXIgdGhpcyByZW5kZXIgcGFzcywgd2UnbGwgcmVzdGFydFxuICAgIC8vIGFuZCBhcHBseSB0aGUgc3Rhc2hlZCB1cGRhdGVzIG9uIHRvcCBvZiB0aGUgd29yay1pbi1wcm9ncmVzcyBob29rLlxuICAgIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSB0cnVlO1xuICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuICAgIGlmIChyZW5kZXJQaGFzZVVwZGF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcbiAgICBpZiAoZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW5kZXJQaGFzZVVwZGF0ZXMuc2V0KHF1ZXVlLCB1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBcHBlbmQgdGhlIHVwZGF0ZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgICAgdmFyIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IGZpcnN0UmVuZGVyUGhhc2VVcGRhdGU7XG4gICAgICB3aGlsZSAobGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gbGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQ7XG4gICAgICB9XG4gICAgICBsYXN0UmVuZGVyUGhhc2VVcGRhdGUubmV4dCA9IHVwZGF0ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBtZWFucyBhbiB1cGRhdGUgaGFzIGhhcHBlbmVkIGFmdGVyIHRoZSBmdW5jdGlvbiBjb21wb25lbnQgaGFzXG4gICAgLy8gcmV0dXJuZWQuIE9uIHRoZSBzZXJ2ZXIgdGhpcyBpcyBhIG5vLW9wLiBJbiBSZWFjdCBGaWJlciwgdGhlIHVwZGF0ZVxuICAgIC8vIHdvdWxkIGJlIHNjaGVkdWxlZCBmb3IgYSBmdXR1cmUgcmVuZGVyLlxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIC8vIENhbGxiYWNrcyBhcmUgcGFzc2VkIGFzIHRoZXkgYXJlIGluIHRoZSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG4gIHJldHVybiBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBjdXJyZW50VGhyZWFkSUQgPSAwO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGhyZWFkSUQodGhyZWFkSUQpIHtcbiAgY3VycmVudFRocmVhZElEID0gdGhyZWFkSUQ7XG59XG5cbnZhciBEaXNwYXRjaGVyID0ge1xuICByZWFkQ29udGV4dDogcmVhZENvbnRleHQsXG4gIHVzZUNvbnRleHQ6IHVzZUNvbnRleHQsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG4gIHVzZUxheW91dEVmZmVjdDogdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VDYWxsYmFjazogdXNlQ2FsbGJhY2ssXG4gIC8vIHVzZUltcGVyYXRpdmVIYW5kbGUgaXMgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50XG4gIHVzZUltcGVyYXRpdmVIYW5kbGU6IG5vb3AsXG4gIC8vIEVmZmVjdHMgYXJlIG5vdCBydW4gaW4gdGhlIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgdXNlRWZmZWN0OiBub29wLFxuICAvLyBEZWJ1Z2dpbmcgZWZmZWN0XG4gIHVzZURlYnVnVmFsdWU6IG5vb3Bcbn07XG5cbnZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbnZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxudmFyIE5hbWVzcGFjZXMgPSB7XG4gIGh0bWw6IEhUTUxfTkFNRVNQQUNFLFxuICBtYXRobWw6IE1BVEhfTkFNRVNQQUNFLFxuICBzdmc6IFNWR19OQU1FU1BBQ0Vcbn07XG5cbi8vIEFzc3VtZXMgdGhlcmUgaXMgbm8gcGFyZW50IG5hbWVzcGFjZS5cbmZ1bmN0aW9uIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3N2Zyc6XG4gICAgICByZXR1cm4gU1ZHX05BTUVTUEFDRTtcbiAgICBjYXNlICdtYXRoJzpcbiAgICAgIHJldHVybiBNQVRIX05BTUVTUEFDRTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEhUTUxfTkFNRVNQQUNFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkTmFtZXNwYWNlKHBhcmVudE5hbWVzcGFjZSwgdHlwZSkge1xuICBpZiAocGFyZW50TmFtZXNwYWNlID09IG51bGwgfHwgcGFyZW50TmFtZXNwYWNlID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgIC8vIE5vIChvciBkZWZhdWx0KSBwYXJlbnQgbmFtZXNwYWNlOiBwb3RlbnRpYWwgZW50cnkgcG9pbnQuXG4gICAgcmV0dXJuIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKTtcbiAgfVxuICBpZiAocGFyZW50TmFtZXNwYWNlID09PSBTVkdfTkFNRVNQQUNFICYmIHR5cGUgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIFdlJ3JlIGxlYXZpbmcgU1ZHLlxuICAgIHJldHVybiBIVE1MX05BTUVTUEFDRTtcbiAgfVxuICAvLyBCeSBkZWZhdWx0LCBwYXNzIG5hbWVzcGFjZSBiZWxvdy5cbiAgcmV0dXJuIHBhcmVudE5hbWVzcGFjZTtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMiA9IG51bGw7XG5cbnZhciBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcyA9IHtcbiAgY2hlY2tQcm9wVHlwZXM6IG51bGxcbn07XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuICB2YXIgaGFzUmVhZE9ubHlWYWx1ZSA9IHtcbiAgICBidXR0b246IHRydWUsXG4gICAgY2hlY2tib3g6IHRydWUsXG4gICAgaW1hZ2U6IHRydWUsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIHJhZGlvOiB0cnVlLFxuICAgIHJlc2V0OiB0cnVlLFxuICAgIHN1Ym1pdDogdHJ1ZVxuICB9O1xuXG4gIHZhciBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChoYXNSZWFkT25seVZhbHVlW3Byb3BzLnR5cGVdIHx8IHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IHByb3ZpZGVkIGEgYHZhbHVlYCBwcm9wIHRvIGEgZm9ybSBmaWVsZCB3aXRob3V0IGFuICcgKyAnYG9uQ2hhbmdlYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBJZiAnICsgJ3RoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYGRlZmF1bHRWYWx1ZWAuIE90aGVyd2lzZSwgJyArICdzZXQgZWl0aGVyIGBvbkNoYW5nZWAgb3IgYHJlYWRPbmx5YC4nKTtcbiAgICB9LFxuICAgIGNoZWNrZWQ6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSB8fCBwcm9wcy5yZWFkT25seSB8fCBwcm9wcy5kaXNhYmxlZCB8fCBwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBwcm92aWRlZCBhIGBjaGVja2VkYCBwcm9wIHRvIGEgZm9ybSBmaWVsZCB3aXRob3V0IGFuICcgKyAnYG9uQ2hhbmdlYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBJZiAnICsgJ3RoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYGRlZmF1bHRDaGVja2VkYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZSBhIGxpbmtlZCBgdmFsdWVgIGF0dHJpYnV0ZSBmb3IgY29udHJvbGxlZCBmb3Jtcy4gWW91IHNob3VsZCBub3QgdXNlXG4gICAqIHRoaXMgb3V0c2lkZSBvZiB0aGUgUmVhY3RET00gY29udHJvbGxlZCBmb3JtIGNvbXBvbmVudHMuXG4gICAqL1xuICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xuICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgcHJvcHMsICdwcm9wJywgdGFnTmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyLmdldFN0YWNrQWRkZW5kdW0pO1xuICB9O1xufVxuXG4vLyBGb3IgSFRNTCwgY2VydGFpbiB0YWdzIHNob3VsZCBvbWl0IHRoZWlyIGNsb3NlIHRhZy4gV2Uga2VlcCBhIHdoaXRlbGlzdCBmb3Jcbi8vIHRob3NlIHNwZWNpYWwtY2FzZSB0YWdzLlxuXG52YXIgb21pdHRlZENsb3NlVGFncyA9IHtcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGlucHV0OiB0cnVlLFxuICBrZXlnZW46IHRydWUsXG4gIGxpbms6IHRydWUsXG4gIG1ldGE6IHRydWUsXG4gIHBhcmFtOiB0cnVlLFxuICBzb3VyY2U6IHRydWUsXG4gIHRyYWNrOiB0cnVlLFxuICB3YnI6IHRydWVcbiAgLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cbn07XG5cbi8vIEZvciBIVE1MLCBjZXJ0YWluIHRhZ3MgY2Fubm90IGhhdmUgY2hpbGRyZW4uIFRoaXMgaGFzIHRoZSBzYW1lIHB1cnBvc2UgYXNcbi8vIGBvbWl0dGVkQ2xvc2VUYWdzYCBleGNlcHQgdGhhdCBgbWVudWl0ZW1gIHNob3VsZCBzdGlsbCBoYXZlIGl0cyBjbG9zaW5nIHRhZy5cblxudmFyIHZvaWRFbGVtZW50VGFncyA9IF9hc3NpZ24oe1xuICBtZW51aXRlbTogdHJ1ZVxufSwgb21pdHRlZENsb3NlVGFncyk7XG5cbi8vIFRPRE86IFdlIGNhbiByZW1vdmUgdGhpcyBpZiB3ZSBhZGQgaW52YXJpYW50V2l0aFN0YWNrKClcbi8vIG9yIGFkZCBzdGFjayBieSBkZWZhdWx0IHRvIGludmFyaWFudHMgd2hlcmUgcG9zc2libGUuXG52YXIgSFRNTCA9ICdfX2h0bWwnO1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzID0gbnVsbDtcbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gTm90ZSB0aGUgdXNlIG9mIGA9PWAgd2hpY2ggY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZC5cbiAgaWYgKHZvaWRFbGVtZW50VGFnc1t0YWddKSB7XG4gICAgIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnJXMgaXMgYSB2b2lkIGVsZW1lbnQgdGFnIGFuZCBtdXN0IG5laXRoZXIgaGF2ZSBgY2hpbGRyZW5gIG5vciB1c2UgYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC4lcycsIHRhZywgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzLmdldFN0YWNrQWRkZW5kdW0oKSkgOiB2b2lkIDA7XG4gIH1cbiAgaWYgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICAhKHByb3BzLmNoaWxkcmVuID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnQ2FuIG9ubHkgc2V0IG9uZSBvZiBgY2hpbGRyZW5gIG9yIGBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAuJykgOiB2b2lkIDA7XG4gICAgISh0eXBlb2YgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPT09ICdvYmplY3QnICYmIEhUTUwgaW4gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID8gaW52YXJpYW50KGZhbHNlLCAnYHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYCBtdXN0IGJlIGluIHRoZSBmb3JtIGB7X19odG1sOiAuLi59YC4gUGxlYXNlIHZpc2l0IGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YXJpYW50LWRhbmdlcm91c2x5LXNldC1pbm5lci1odG1sIGZvciBtb3JlIGluZm9ybWF0aW9uLicpIDogdm9pZCAwO1xuICB9XG4gIHtcbiAgICAhKHByb3BzLnN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyB8fCAhcHJvcHMuY29udGVudEVkaXRhYmxlIHx8IHByb3BzLmNoaWxkcmVuID09IG51bGwpID8gd2FybmluZyQxKGZhbHNlLCAnQSBjb21wb25lbnQgaXMgYGNvbnRlbnRFZGl0YWJsZWAgYW5kIGNvbnRhaW5zIGBjaGlsZHJlbmAgbWFuYWdlZCBieSAnICsgJ1JlYWN0LiBJdCBpcyBub3cgeW91ciByZXNwb25zaWJpbGl0eSB0byBndWFyYW50ZWUgdGhhdCBub25lIG9mICcgKyAndGhvc2Ugbm9kZXMgYXJlIHVuZXhwZWN0ZWRseSBtb2RpZmllZCBvciBkdXBsaWNhdGVkLiBUaGlzIGlzICcgKyAncHJvYmFibHkgbm90IGludGVudGlvbmFsLicpIDogdm9pZCAwO1xuICB9XG4gICEocHJvcHMuc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgPT09ICdvYmplY3QnKSA/IGludmFyaWFudChmYWxzZSwgJ1RoZSBgc3R5bGVgIHByb3AgZXhwZWN0cyBhIG1hcHBpbmcgZnJvbSBzdHlsZSBwcm9wZXJ0aWVzIHRvIHZhbHVlcywgbm90IGEgc3RyaW5nLiBGb3IgZXhhbXBsZSwgc3R5bGU9e3ttYXJnaW5SaWdodDogc3BhY2luZyArIFxcJ2VtXFwnfX0gd2hlbiB1c2luZyBKU1guJXMnLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDMuZ2V0U3RhY2tBZGRlbmR1bSgpKSA6IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgY29sdW1uczogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkUm93U3BhbjogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uRW5kOiB0cnVlLFxuICBncmlkQ29sdW1uU3BhbjogdHJ1ZSxcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIHN0eWxlIHZhbHVlIHdpdGggZGltZW5zaW9ucyBhcHBsaWVkLlxuICovXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KSB7XG4gIC8vIE5vdGUgdGhhdCB3ZSd2ZSByZW1vdmVkIGVzY2FwZVRleHRGb3JCcm93c2VyKCkgY2FsbHMgaGVyZSBzaW5jZSB0aGVcbiAgLy8gd2hvbGUgc3RyaW5nIHdpbGwgYmUgZXNjYXBlZCB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgaW5qZWN0ZWQgaW50b1xuICAvLyB0aGUgbWFya3VwLiBJZiB5b3UgcHJvdmlkZSB1bnNhZmUgdXNlciBkYXRhIGhlcmUgdGhleSBjYW4gaW5qZWN0XG4gIC8vIGFyYml0cmFyeSBDU1Mgd2hpY2ggbWF5IGJlIHByb2JsZW1hdGljIChJIGNvdWxkbid0IHJlcHJvIHRoaXMpOlxuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1hTU19GaWx0ZXJfRXZhc2lvbl9DaGVhdF9TaGVldFxuICAvLyBodHRwOi8vd3d3LnRoZXNwYW5uZXIuY28udWsvMjAwNy8xMS8yNi91bHRpbWF0ZS14c3MtY3NzLWluamVjdGlvbi9cbiAgLy8gVGhpcyBpcyBub3QgYW4gWFNTIGhvbGUgYnV0IGluc3RlYWQgYSBwb3RlbnRpYWwgQ1NTIGluamVjdGlvbiBpc3N1ZVxuICAvLyB3aGljaCBoYXMgbGVhZCB0byBhIGdyZWF0ZXIgZGlzY3Vzc2lvbiBhYm91dCBob3cgd2UncmUgZ29pbmcgdG9cbiAgLy8gdHJ1c3QgVVJMcyBtb3ZpbmcgZm9yd2FyZC4gU2VlICMyMTE1OTAxXG5cbiAgdmFyIGlzRW1wdHkgPSB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJztcbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xuICB9XG5cbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XG59XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5mdW5jdGlvbiBpc0N1c3RvbUNvbXBvbmVudCh0YWdOYW1lLCBwcm9wcykge1xuICBpZiAodGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9wcy5pcyA9PT0gJ3N0cmluZyc7XG4gIH1cbiAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgLy8gVGhlc2UgYXJlIHJlc2VydmVkIFNWRyBhbmQgTWF0aE1MIGVsZW1lbnRzLlxuICAgIC8vIFdlIGRvbid0IG1pbmQgdGhpcyB3aGl0ZWxpc3QgdG9vIG11Y2ggYmVjYXVzZSB3ZSBleHBlY3QgaXQgdG8gbmV2ZXIgZ3Jvdy5cbiAgICAvLyBUaGUgYWx0ZXJuYXRpdmUgaXMgdG8gdHJhY2sgdGhlIG5hbWVzcGFjZSBpbiBhIGZldyBwbGFjZXMgd2hpY2ggaXMgY29udm9sdXRlZC5cbiAgICAvLyBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3VzdG9tLWVsZW1lbnRzLWNvcmUtY29uY2VwdHNcbiAgICBjYXNlICdhbm5vdGF0aW9uLXhtbCc6XG4gICAgY2FzZSAnY29sb3ItcHJvZmlsZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlJzpcbiAgICBjYXNlICdmb250LWZhY2Utc3JjJzpcbiAgICBjYXNlICdmb250LWZhY2UtdXJpJzpcbiAgICBjYXNlICdmb250LWZhY2UtZm9ybWF0JzpcbiAgICBjYXNlICdmb250LWZhY2UtbmFtZSc6XG4gICAgY2FzZSAnbWlzc2luZy1nbHlwaCc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIC8vICdtc1RyYW5zZm9ybScgaXMgY29ycmVjdCwgYnV0IHRoZSBvdGhlciBwcmVmaXhlcyBzaG91bGQgYmUgY2FwaXRhbGl6ZWRcbiAgdmFyIGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybiA9IC9eKD86d2Via2l0fG1venxvKVtBLVpdLztcbiAgdmFyIG1zUGF0dGVybiQxID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuXG4gIC8vIHN0eWxlIHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvblxuICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG5cbiAgdmFyIHdhcm5lZFN0eWxlTmFtZXMgPSB7fTtcbiAgdmFyIHdhcm5lZFN0eWxlVmFsdWVzID0ge307XG4gIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xuICB2YXIgd2FybmVkRm9ySW5maW5pdHlWYWx1ZSA9IGZhbHNlO1xuXG4gIHZhciBjYW1lbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ1Vuc3VwcG9ydGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JywgbmFtZSxcbiAgICAvLyBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXG4gICAgLy8gKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICAgIC8vIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAgICBjYW1lbGl6ZShuYW1lLnJlcGxhY2UobXNQYXR0ZXJuJDEsICdtcy0nKSkpO1xuICB9O1xuXG4gIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsIFwiU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uLiBcIiArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzTmFOID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvckluZmluaXR5VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdgSW5maW5pdHlgIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSk7XG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSQxID0gd2FyblZhbGlkU3R5bGU7XG5cbnZhciBhcmlhUHJvcGVydGllcyA9IHtcbiAgJ2FyaWEtY3VycmVudCc6IDAsIC8vIHN0YXRlXG4gICdhcmlhLWRldGFpbHMnOiAwLFxuICAnYXJpYS1kaXNhYmxlZCc6IDAsIC8vIHN0YXRlXG4gICdhcmlhLWhpZGRlbic6IDAsIC8vIHN0YXRlXG4gICdhcmlhLWludmFsaWQnOiAwLCAvLyBzdGF0ZVxuICAnYXJpYS1rZXlzaG9ydGN1dHMnOiAwLFxuICAnYXJpYS1sYWJlbCc6IDAsXG4gICdhcmlhLXJvbGVkZXNjcmlwdGlvbic6IDAsXG4gIC8vIFdpZGdldCBBdHRyaWJ1dGVzXG4gICdhcmlhLWF1dG9jb21wbGV0ZSc6IDAsXG4gICdhcmlhLWNoZWNrZWQnOiAwLFxuICAnYXJpYS1leHBhbmRlZCc6IDAsXG4gICdhcmlhLWhhc3BvcHVwJzogMCxcbiAgJ2FyaWEtbGV2ZWwnOiAwLFxuICAnYXJpYS1tb2RhbCc6IDAsXG4gICdhcmlhLW11bHRpbGluZSc6IDAsXG4gICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IDAsXG4gICdhcmlhLW9yaWVudGF0aW9uJzogMCxcbiAgJ2FyaWEtcGxhY2Vob2xkZXInOiAwLFxuICAnYXJpYS1wcmVzc2VkJzogMCxcbiAgJ2FyaWEtcmVhZG9ubHknOiAwLFxuICAnYXJpYS1yZXF1aXJlZCc6IDAsXG4gICdhcmlhLXNlbGVjdGVkJzogMCxcbiAgJ2FyaWEtc29ydCc6IDAsXG4gICdhcmlhLXZhbHVlbWF4JzogMCxcbiAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAnYXJpYS12YWx1ZW5vdyc6IDAsXG4gICdhcmlhLXZhbHVldGV4dCc6IDAsXG4gIC8vIExpdmUgUmVnaW9uIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYXRvbWljJzogMCxcbiAgJ2FyaWEtYnVzeSc6IDAsXG4gICdhcmlhLWxpdmUnOiAwLFxuICAnYXJpYS1yZWxldmFudCc6IDAsXG4gIC8vIERyYWctYW5kLURyb3AgQXR0cmlidXRlc1xuICAnYXJpYS1kcm9wZWZmZWN0JzogMCxcbiAgJ2FyaWEtZ3JhYmJlZCc6IDAsXG4gIC8vIFJlbGF0aW9uc2hpcCBBdHRyaWJ1dGVzXG4gICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiAwLFxuICAnYXJpYS1jb2xjb3VudCc6IDAsXG4gICdhcmlhLWNvbGluZGV4JzogMCxcbiAgJ2FyaWEtY29sc3Bhbic6IDAsXG4gICdhcmlhLWNvbnRyb2xzJzogMCxcbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiAwLFxuICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiAwLFxuICAnYXJpYS1mbG93dG8nOiAwLFxuICAnYXJpYS1sYWJlbGxlZGJ5JzogMCxcbiAgJ2FyaWEtb3ducyc6IDAsXG4gICdhcmlhLXBvc2luc2V0JzogMCxcbiAgJ2FyaWEtcm93Y291bnQnOiAwLFxuICAnYXJpYS1yb3dpbmRleCc6IDAsXG4gICdhcmlhLXJvd3NwYW4nOiAwLFxuICAnYXJpYS1zZXRzaXplJzogMFxufTtcblxudmFyIHdhcm5lZFByb3BlcnRpZXMgPSB7fTtcbnZhciByQVJJQSA9IG5ldyBSZWdFeHAoJ14oYXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xudmFyIHJBUklBQ2FtZWwgPSBuZXcgUmVnRXhwKCdeKGFyaWEpW0EtWl1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eSh0YWdOYW1lLCBuYW1lKSB7XG4gIGlmIChoYXNPd25Qcm9wZXJ0eSQyLmNhbGwod2FybmVkUHJvcGVydGllcywgbmFtZSkgJiYgd2FybmVkUHJvcGVydGllc1tuYW1lXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHJBUklBQ2FtZWwudGVzdChuYW1lKSkge1xuICAgIHZhciBhcmlhTmFtZSA9ICdhcmlhLScgKyBuYW1lLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGNvcnJlY3ROYW1lID0gYXJpYVByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoYXJpYU5hbWUpID8gYXJpYU5hbWUgOiBudWxsO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXG4gICAgLy8gRE9NIHByb3BlcnRpZXMsIHRoZW4gaXQgaXMgYW4gaW52YWxpZCBhcmlhLSogYXR0cmlidXRlLlxuICAgIGlmIChjb3JyZWN0TmFtZSA9PSBudWxsKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIEFSSUEgYXR0cmlidXRlIGAlc2AuIEFSSUEgYXR0cmlidXRlcyBmb2xsb3cgdGhlIHBhdHRlcm4gYXJpYS0qIGFuZCBtdXN0IGJlIGxvd2VyY2FzZS4nLCBuYW1lKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGFyaWEtKiBhdHRyaWJ1dGVzIHNob3VsZCBiZSBsb3dlcmNhc2U7IHN1Z2dlc3QgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uLlxuICAgIGlmIChuYW1lICE9PSBjb3JyZWN0TmFtZSkge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBBUklBIGF0dHJpYnV0ZSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBjb3JyZWN0TmFtZSk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyQVJJQS50ZXN0KG5hbWUpKSB7XG4gICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBzdGFuZGFyZE5hbWUgPSBhcmlhUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBsb3dlckNhc2VkTmFtZSA6IG51bGw7XG5cbiAgICAvLyBJZiB0aGlzIGlzIGFuIGFyaWEtKiBhdHRyaWJ1dGUsIGJ1dCBpcyBub3QgbGlzdGVkIGluIHRoZSBrbm93biBET01cbiAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXG4gICAgaWYgKHN0YW5kYXJkTmFtZSA9PSBudWxsKSB7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gYXJpYS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb24uXG4gICAgaWYgKG5hbWUgIT09IHN0YW5kYXJkTmFtZSkge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnVW5rbm93biBBUklBIGF0dHJpYnV0ZSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBzdGFuZGFyZE5hbWUpO1xuICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gd2FybkludmFsaWRBUklBUHJvcHModHlwZSwgcHJvcHMpIHtcbiAgdmFyIGludmFsaWRQcm9wcyA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVQcm9wZXJ0eSh0eXBlLCBrZXkpO1xuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgaW52YWxpZFByb3BzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSBpbnZhbGlkUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gIH0pLmpvaW4oJywgJyk7XG5cbiAgaWYgKGludmFsaWRQcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGFyaWEgcHJvcCAlcyBvbiA8JXM+IHRhZy4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vZmIubWUvaW52YWxpZC1hcmlhLXByb3AnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gIH0gZWxzZSBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGFyaWEgcHJvcHMgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL2ludmFsaWQtYXJpYS1wcm9wJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcykge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdhcm5JbnZhbGlkQVJJQVByb3BzKHR5cGUsIHByb3BzKTtcbn1cblxudmFyIGRpZFdhcm5WYWx1ZU51bGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpIHtcbiAgaWYgKHR5cGUgIT09ICdpbnB1dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJyAmJiB0eXBlICE9PSAnc2VsZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwcm9wcyAhPSBudWxsICYmIHByb3BzLnZhbHVlID09PSBudWxsICYmICFkaWRXYXJuVmFsdWVOdWxsKSB7XG4gICAgZGlkV2FyblZhbHVlTnVsbCA9IHRydWU7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm11bHRpcGxlKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdgdmFsdWVgIHByb3Agb24gYCVzYCBzaG91bGQgbm90IGJlIG51bGwuICcgKyAnQ29uc2lkZXIgdXNpbmcgYW4gZW1wdHkgYXJyYXkgd2hlbiBgbXVsdGlwbGVgIGlzIHNldCB0byBgdHJ1ZWAgJyArICd0byBjbGVhciB0aGUgY29tcG9uZW50IG9yIGB1bmRlZmluZWRgIGZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnYHZhbHVlYCBwcm9wIG9uIGAlc2Agc2hvdWxkIG5vdCBiZSBudWxsLiAnICsgJ0NvbnNpZGVyIHVzaW5nIGFuIGVtcHR5IHN0cmluZyB0byBjbGVhciB0aGUgY29tcG9uZW50IG9yIGB1bmRlZmluZWRgICcgKyAnZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicsIHR5cGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBwbHVnaW5zIHNvIHRoYXQgdGhleSBjYW4gZXh0cmFjdCBhbmQgZGlzcGF0Y2ggZXZlbnRzLlxuICpcbiAqIEBzZWUge0V2ZW50UGx1Z2luSHVifVxuICovXG5cbi8qKlxuICogT3JkZXJlZCBsaXN0IG9mIGluamVjdGVkIHBsdWdpbnMuXG4gKi9cblxuXG4vKipcbiAqIE1hcHBpbmcgZnJvbSBldmVudCBuYW1lIHRvIGRpc3BhdGNoIGNvbmZpZ1xuICovXG5cblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gcmVnaXN0cmF0aW9uIG5hbWUgdG8gcGx1Z2luIG1vZHVsZVxuICovXG52YXIgcmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMgPSB7fTtcblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gcmVnaXN0cmF0aW9uIG5hbWUgdG8gZXZlbnQgbmFtZVxuICovXG5cblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gbG93ZXJjYXNlIHJlZ2lzdHJhdGlvbiBuYW1lcyB0byB0aGUgcHJvcGVybHkgY2FzZWQgdmVyc2lvbixcbiAqIHVzZWQgdG8gd2FybiBpbiB0aGUgY2FzZSBvZiBtaXNzaW5nIGV2ZW50IGhhbmRsZXJzLiBBdmFpbGFibGVcbiAqIG9ubHkgaW4gdHJ1ZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzID0ge307XG4vLyBUcnVzdCB0aGUgZGV2ZWxvcGVyIHRvIG9ubHkgdXNlIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgaW4gdHJ1ZVxuXG4vKipcbiAqIEluamVjdHMgYW4gb3JkZXJpbmcgb2YgcGx1Z2lucyAoYnkgcGx1Z2luIG5hbWUpLiBUaGlzIGFsbG93cyB0aGUgb3JkZXJpbmdcbiAqIHRvIGJlIGRlY291cGxlZCBmcm9tIGluamVjdGlvbiBvZiB0aGUgYWN0dWFsIHBsdWdpbnMgc28gdGhhdCBvcmRlcmluZyBpc1xuICogYWx3YXlzIGRldGVybWluaXN0aWMgcmVnYXJkbGVzcyBvZiBwYWNrYWdpbmcsIG9uLXRoZS1mbHkgaW5qZWN0aW9uLCBldGMuXG4gKlxuICogQHBhcmFtIHthcnJheX0gSW5qZWN0ZWRFdmVudFBsdWdpbk9yZGVyXG4gKiBAaW50ZXJuYWxcbiAqIEBzZWUge0V2ZW50UGx1Z2luSHViLmluamVjdGlvbi5pbmplY3RFdmVudFBsdWdpbk9yZGVyfVxuICovXG5cblxuLyoqXG4gKiBJbmplY3RzIHBsdWdpbnMgdG8gYmUgdXNlZCBieSBgRXZlbnRQbHVnaW5IdWJgLiBUaGUgcGx1Z2luIG5hbWVzIG11c3QgYmVcbiAqIGluIHRoZSBvcmRlcmluZyBpbmplY3RlZCBieSBgaW5qZWN0RXZlbnRQbHVnaW5PcmRlcmAuXG4gKlxuICogUGx1Z2lucyBjYW4gYmUgaW5qZWN0ZWQgYXMgcGFydCBvZiBwYWdlIGluaXRpYWxpemF0aW9uIG9yIG9uLXRoZS1mbHkuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGluamVjdGVkTmFtZXNUb1BsdWdpbnMgTWFwIGZyb20gbmFtZXMgdG8gcGx1Z2luIG1vZHVsZXMuXG4gKiBAaW50ZXJuYWxcbiAqIEBzZWUge0V2ZW50UGx1Z2luSHViLmluamVjdGlvbi5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWV9XG4gKi9cblxuLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGUgSFRNTCBvciBTVkcgd2hpdGVsaXN0LCBiZSBzdXJlIHRvXG4vLyBhbHNvIGFkZCB0aGVtIHRvIHRoaXMgbW9kdWxlIHRvIGVuc3VyZSBjYXNpbmcgYW5kIGluY29ycmVjdCBuYW1lXG4vLyB3YXJuaW5ncy5cbnZhciBwb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSB7XG4gIC8vIEhUTUxcbiAgYWNjZXB0OiAnYWNjZXB0JyxcbiAgYWNjZXB0Y2hhcnNldDogJ2FjY2VwdENoYXJzZXQnLFxuICAnYWNjZXB0LWNoYXJzZXQnOiAnYWNjZXB0Q2hhcnNldCcsXG4gIGFjY2Vzc2tleTogJ2FjY2Vzc0tleScsXG4gIGFjdGlvbjogJ2FjdGlvbicsXG4gIGFsbG93ZnVsbHNjcmVlbjogJ2FsbG93RnVsbFNjcmVlbicsXG4gIGFsdDogJ2FsdCcsXG4gIGFzOiAnYXMnLFxuICBhc3luYzogJ2FzeW5jJyxcbiAgYXV0b2NhcGl0YWxpemU6ICdhdXRvQ2FwaXRhbGl6ZScsXG4gIGF1dG9jb21wbGV0ZTogJ2F1dG9Db21wbGV0ZScsXG4gIGF1dG9jb3JyZWN0OiAnYXV0b0NvcnJlY3QnLFxuICBhdXRvZm9jdXM6ICdhdXRvRm9jdXMnLFxuICBhdXRvcGxheTogJ2F1dG9QbGF5JyxcbiAgYXV0b3NhdmU6ICdhdXRvU2F2ZScsXG4gIGNhcHR1cmU6ICdjYXB0dXJlJyxcbiAgY2VsbHBhZGRpbmc6ICdjZWxsUGFkZGluZycsXG4gIGNlbGxzcGFjaW5nOiAnY2VsbFNwYWNpbmcnLFxuICBjaGFsbGVuZ2U6ICdjaGFsbGVuZ2UnLFxuICBjaGFyc2V0OiAnY2hhclNldCcsXG4gIGNoZWNrZWQ6ICdjaGVja2VkJyxcbiAgY2hpbGRyZW46ICdjaGlsZHJlbicsXG4gIGNpdGU6ICdjaXRlJyxcbiAgY2xhc3M6ICdjbGFzc05hbWUnLFxuICBjbGFzc2lkOiAnY2xhc3NJRCcsXG4gIGNsYXNzbmFtZTogJ2NsYXNzTmFtZScsXG4gIGNvbHM6ICdjb2xzJyxcbiAgY29sc3BhbjogJ2NvbFNwYW4nLFxuICBjb250ZW50OiAnY29udGVudCcsXG4gIGNvbnRlbnRlZGl0YWJsZTogJ2NvbnRlbnRFZGl0YWJsZScsXG4gIGNvbnRleHRtZW51OiAnY29udGV4dE1lbnUnLFxuICBjb250cm9sczogJ2NvbnRyb2xzJyxcbiAgY29udHJvbHNsaXN0OiAnY29udHJvbHNMaXN0JyxcbiAgY29vcmRzOiAnY29vcmRzJyxcbiAgY3Jvc3NvcmlnaW46ICdjcm9zc09yaWdpbicsXG4gIGRhbmdlcm91c2x5c2V0aW5uZXJodG1sOiAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICBkYXRhOiAnZGF0YScsXG4gIGRhdGV0aW1lOiAnZGF0ZVRpbWUnLFxuICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gIGRlZmF1bHRjaGVja2VkOiAnZGVmYXVsdENoZWNrZWQnLFxuICBkZWZhdWx0dmFsdWU6ICdkZWZhdWx0VmFsdWUnLFxuICBkZWZlcjogJ2RlZmVyJyxcbiAgZGlyOiAnZGlyJyxcbiAgZGlzYWJsZWQ6ICdkaXNhYmxlZCcsXG4gIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICBkcmFnZ2FibGU6ICdkcmFnZ2FibGUnLFxuICBlbmN0eXBlOiAnZW5jVHlwZScsXG4gIGZvcjogJ2h0bWxGb3InLFxuICBmb3JtOiAnZm9ybScsXG4gIGZvcm1tZXRob2Q6ICdmb3JtTWV0aG9kJyxcbiAgZm9ybWFjdGlvbjogJ2Zvcm1BY3Rpb24nLFxuICBmb3JtZW5jdHlwZTogJ2Zvcm1FbmNUeXBlJyxcbiAgZm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXG4gIGZvcm10YXJnZXQ6ICdmb3JtVGFyZ2V0JyxcbiAgZnJhbWVib3JkZXI6ICdmcmFtZUJvcmRlcicsXG4gIGhlYWRlcnM6ICdoZWFkZXJzJyxcbiAgaGVpZ2h0OiAnaGVpZ2h0JyxcbiAgaGlkZGVuOiAnaGlkZGVuJyxcbiAgaGlnaDogJ2hpZ2gnLFxuICBocmVmOiAnaHJlZicsXG4gIGhyZWZsYW5nOiAnaHJlZkxhbmcnLFxuICBodG1sZm9yOiAnaHRtbEZvcicsXG4gIGh0dHBlcXVpdjogJ2h0dHBFcXVpdicsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246ICdpY29uJyxcbiAgaWQ6ICdpZCcsXG4gIGlubmVyaHRtbDogJ2lubmVySFRNTCcsXG4gIGlucHV0bW9kZTogJ2lucHV0TW9kZScsXG4gIGludGVncml0eTogJ2ludGVncml0eScsXG4gIGlzOiAnaXMnLFxuICBpdGVtaWQ6ICdpdGVtSUQnLFxuICBpdGVtcHJvcDogJ2l0ZW1Qcm9wJyxcbiAgaXRlbXJlZjogJ2l0ZW1SZWYnLFxuICBpdGVtc2NvcGU6ICdpdGVtU2NvcGUnLFxuICBpdGVtdHlwZTogJ2l0ZW1UeXBlJyxcbiAga2V5cGFyYW1zOiAna2V5UGFyYW1zJyxcbiAga2V5dHlwZTogJ2tleVR5cGUnLFxuICBraW5kOiAna2luZCcsXG4gIGxhYmVsOiAnbGFiZWwnLFxuICBsYW5nOiAnbGFuZycsXG4gIGxpc3Q6ICdsaXN0JyxcbiAgbG9vcDogJ2xvb3AnLFxuICBsb3c6ICdsb3cnLFxuICBtYW5pZmVzdDogJ21hbmlmZXN0JyxcbiAgbWFyZ2lud2lkdGg6ICdtYXJnaW5XaWR0aCcsXG4gIG1hcmdpbmhlaWdodDogJ21hcmdpbkhlaWdodCcsXG4gIG1heDogJ21heCcsXG4gIG1heGxlbmd0aDogJ21heExlbmd0aCcsXG4gIG1lZGlhOiAnbWVkaWEnLFxuICBtZWRpYWdyb3VwOiAnbWVkaWFHcm91cCcsXG4gIG1ldGhvZDogJ21ldGhvZCcsXG4gIG1pbjogJ21pbicsXG4gIG1pbmxlbmd0aDogJ21pbkxlbmd0aCcsXG4gIG11bHRpcGxlOiAnbXVsdGlwbGUnLFxuICBtdXRlZDogJ211dGVkJyxcbiAgbmFtZTogJ25hbWUnLFxuICBub21vZHVsZTogJ25vTW9kdWxlJyxcbiAgbm9uY2U6ICdub25jZScsXG4gIG5vdmFsaWRhdGU6ICdub1ZhbGlkYXRlJyxcbiAgb3BlbjogJ29wZW4nLFxuICBvcHRpbXVtOiAnb3B0aW11bScsXG4gIHBhdHRlcm46ICdwYXR0ZXJuJyxcbiAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlcicsXG4gIHBsYXlzaW5saW5lOiAncGxheXNJbmxpbmUnLFxuICBwb3N0ZXI6ICdwb3N0ZXInLFxuICBwcmVsb2FkOiAncHJlbG9hZCcsXG4gIHByb2ZpbGU6ICdwcm9maWxlJyxcbiAgcmFkaW9ncm91cDogJ3JhZGlvR3JvdXAnLFxuICByZWFkb25seTogJ3JlYWRPbmx5JyxcbiAgcmVmZXJyZXJwb2xpY3k6ICdyZWZlcnJlclBvbGljeScsXG4gIHJlbDogJ3JlbCcsXG4gIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICByZXZlcnNlZDogJ3JldmVyc2VkJyxcbiAgcm9sZTogJ3JvbGUnLFxuICByb3dzOiAncm93cycsXG4gIHJvd3NwYW46ICdyb3dTcGFuJyxcbiAgc2FuZGJveDogJ3NhbmRib3gnLFxuICBzY29wZTogJ3Njb3BlJyxcbiAgc2NvcGVkOiAnc2NvcGVkJyxcbiAgc2Nyb2xsaW5nOiAnc2Nyb2xsaW5nJyxcbiAgc2VhbWxlc3M6ICdzZWFtbGVzcycsXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxuICBzaGFwZTogJ3NoYXBlJyxcbiAgc2l6ZTogJ3NpemUnLFxuICBzaXplczogJ3NpemVzJyxcbiAgc3BhbjogJ3NwYW4nLFxuICBzcGVsbGNoZWNrOiAnc3BlbGxDaGVjaycsXG4gIHNyYzogJ3NyYycsXG4gIHNyY2RvYzogJ3NyY0RvYycsXG4gIHNyY2xhbmc6ICdzcmNMYW5nJyxcbiAgc3Jjc2V0OiAnc3JjU2V0JyxcbiAgc3RhcnQ6ICdzdGFydCcsXG4gIHN0ZXA6ICdzdGVwJyxcbiAgc3R5bGU6ICdzdHlsZScsXG4gIHN1bW1hcnk6ICdzdW1tYXJ5JyxcbiAgdGFiaW5kZXg6ICd0YWJJbmRleCcsXG4gIHRhcmdldDogJ3RhcmdldCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICB0eXBlOiAndHlwZScsXG4gIHVzZW1hcDogJ3VzZU1hcCcsXG4gIHZhbHVlOiAndmFsdWUnLFxuICB3aWR0aDogJ3dpZHRoJyxcbiAgd21vZGU6ICd3bW9kZScsXG4gIHdyYXA6ICd3cmFwJyxcblxuICAvLyBTVkdcbiAgYWJvdXQ6ICdhYm91dCcsXG4gIGFjY2VudGhlaWdodDogJ2FjY2VudEhlaWdodCcsXG4gICdhY2NlbnQtaGVpZ2h0JzogJ2FjY2VudEhlaWdodCcsXG4gIGFjY3VtdWxhdGU6ICdhY2N1bXVsYXRlJyxcbiAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXG4gIGFsaWdubWVudGJhc2VsaW5lOiAnYWxpZ25tZW50QmFzZWxpbmUnLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJzogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgYWxsb3dyZW9yZGVyOiAnYWxsb3dSZW9yZGVyJyxcbiAgYWxwaGFiZXRpYzogJ2FscGhhYmV0aWMnLFxuICBhbXBsaXR1ZGU6ICdhbXBsaXR1ZGUnLFxuICBhcmFiaWNmb3JtOiAnYXJhYmljRm9ybScsXG4gICdhcmFiaWMtZm9ybSc6ICdhcmFiaWNGb3JtJyxcbiAgYXNjZW50OiAnYXNjZW50JyxcbiAgYXR0cmlidXRlbmFtZTogJ2F0dHJpYnV0ZU5hbWUnLFxuICBhdHRyaWJ1dGV0eXBlOiAnYXR0cmlidXRlVHlwZScsXG4gIGF1dG9yZXZlcnNlOiAnYXV0b1JldmVyc2UnLFxuICBhemltdXRoOiAnYXppbXV0aCcsXG4gIGJhc2VmcmVxdWVuY3k6ICdiYXNlRnJlcXVlbmN5JyxcbiAgYmFzZWxpbmVzaGlmdDogJ2Jhc2VsaW5lU2hpZnQnLFxuICAnYmFzZWxpbmUtc2hpZnQnOiAnYmFzZWxpbmVTaGlmdCcsXG4gIGJhc2Vwcm9maWxlOiAnYmFzZVByb2ZpbGUnLFxuICBiYm94OiAnYmJveCcsXG4gIGJlZ2luOiAnYmVnaW4nLFxuICBiaWFzOiAnYmlhcycsXG4gIGJ5OiAnYnknLFxuICBjYWxjbW9kZTogJ2NhbGNNb2RlJyxcbiAgY2FwaGVpZ2h0OiAnY2FwSGVpZ2h0JyxcbiAgJ2NhcC1oZWlnaHQnOiAnY2FwSGVpZ2h0JyxcbiAgY2xpcDogJ2NsaXAnLFxuICBjbGlwcGF0aDogJ2NsaXBQYXRoJyxcbiAgJ2NsaXAtcGF0aCc6ICdjbGlwUGF0aCcsXG4gIGNsaXBwYXRodW5pdHM6ICdjbGlwUGF0aFVuaXRzJyxcbiAgY2xpcHJ1bGU6ICdjbGlwUnVsZScsXG4gICdjbGlwLXJ1bGUnOiAnY2xpcFJ1bGUnLFxuICBjb2xvcjogJ2NvbG9yJyxcbiAgY29sb3JpbnRlcnBvbGF0aW9uOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24nOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgY29sb3JpbnRlcnBvbGF0aW9uZmlsdGVyczogJ2NvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMnLFxuICAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJzogJ2NvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMnLFxuICBjb2xvcnByb2ZpbGU6ICdjb2xvclByb2ZpbGUnLFxuICAnY29sb3ItcHJvZmlsZSc6ICdjb2xvclByb2ZpbGUnLFxuICBjb2xvcnJlbmRlcmluZzogJ2NvbG9yUmVuZGVyaW5nJyxcbiAgJ2NvbG9yLXJlbmRlcmluZyc6ICdjb2xvclJlbmRlcmluZycsXG4gIGNvbnRlbnRzY3JpcHR0eXBlOiAnY29udGVudFNjcmlwdFR5cGUnLFxuICBjb250ZW50c3R5bGV0eXBlOiAnY29udGVudFN0eWxlVHlwZScsXG4gIGN1cnNvcjogJ2N1cnNvcicsXG4gIGN4OiAnY3gnLFxuICBjeTogJ2N5JyxcbiAgZDogJ2QnLFxuICBkYXRhdHlwZTogJ2RhdGF0eXBlJyxcbiAgZGVjZWxlcmF0ZTogJ2RlY2VsZXJhdGUnLFxuICBkZXNjZW50OiAnZGVzY2VudCcsXG4gIGRpZmZ1c2Vjb25zdGFudDogJ2RpZmZ1c2VDb25zdGFudCcsXG4gIGRpcmVjdGlvbjogJ2RpcmVjdGlvbicsXG4gIGRpc3BsYXk6ICdkaXNwbGF5JyxcbiAgZGl2aXNvcjogJ2Rpdmlzb3InLFxuICBkb21pbmFudGJhc2VsaW5lOiAnZG9taW5hbnRCYXNlbGluZScsXG4gICdkb21pbmFudC1iYXNlbGluZSc6ICdkb21pbmFudEJhc2VsaW5lJyxcbiAgZHVyOiAnZHVyJyxcbiAgZHg6ICdkeCcsXG4gIGR5OiAnZHknLFxuICBlZGdlbW9kZTogJ2VkZ2VNb2RlJyxcbiAgZWxldmF0aW9uOiAnZWxldmF0aW9uJyxcbiAgZW5hYmxlYmFja2dyb3VuZDogJ2VuYWJsZUJhY2tncm91bmQnLFxuICAnZW5hYmxlLWJhY2tncm91bmQnOiAnZW5hYmxlQmFja2dyb3VuZCcsXG4gIGVuZDogJ2VuZCcsXG4gIGV4cG9uZW50OiAnZXhwb25lbnQnLFxuICBleHRlcm5hbHJlc291cmNlc3JlcXVpcmVkOiAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsXG4gIGZpbGw6ICdmaWxsJyxcbiAgZmlsbG9wYWNpdHk6ICdmaWxsT3BhY2l0eScsXG4gICdmaWxsLW9wYWNpdHknOiAnZmlsbE9wYWNpdHknLFxuICBmaWxscnVsZTogJ2ZpbGxSdWxlJyxcbiAgJ2ZpbGwtcnVsZSc6ICdmaWxsUnVsZScsXG4gIGZpbHRlcjogJ2ZpbHRlcicsXG4gIGZpbHRlcnJlczogJ2ZpbHRlclJlcycsXG4gIGZpbHRlcnVuaXRzOiAnZmlsdGVyVW5pdHMnLFxuICBmbG9vZG9wYWNpdHk6ICdmbG9vZE9wYWNpdHknLFxuICAnZmxvb2Qtb3BhY2l0eSc6ICdmbG9vZE9wYWNpdHknLFxuICBmbG9vZGNvbG9yOiAnZmxvb2RDb2xvcicsXG4gICdmbG9vZC1jb2xvcic6ICdmbG9vZENvbG9yJyxcbiAgZm9jdXNhYmxlOiAnZm9jdXNhYmxlJyxcbiAgZm9udGZhbWlseTogJ2ZvbnRGYW1pbHknLFxuICAnZm9udC1mYW1pbHknOiAnZm9udEZhbWlseScsXG4gIGZvbnRzaXplOiAnZm9udFNpemUnLFxuICAnZm9udC1zaXplJzogJ2ZvbnRTaXplJyxcbiAgZm9udHNpemVhZGp1c3Q6ICdmb250U2l6ZUFkanVzdCcsXG4gICdmb250LXNpemUtYWRqdXN0JzogJ2ZvbnRTaXplQWRqdXN0JyxcbiAgZm9udHN0cmV0Y2g6ICdmb250U3RyZXRjaCcsXG4gICdmb250LXN0cmV0Y2gnOiAnZm9udFN0cmV0Y2gnLFxuICBmb250c3R5bGU6ICdmb250U3R5bGUnLFxuICAnZm9udC1zdHlsZSc6ICdmb250U3R5bGUnLFxuICBmb250dmFyaWFudDogJ2ZvbnRWYXJpYW50JyxcbiAgJ2ZvbnQtdmFyaWFudCc6ICdmb250VmFyaWFudCcsXG4gIGZvbnR3ZWlnaHQ6ICdmb250V2VpZ2h0JyxcbiAgJ2ZvbnQtd2VpZ2h0JzogJ2ZvbnRXZWlnaHQnLFxuICBmb3JtYXQ6ICdmb3JtYXQnLFxuICBmcm9tOiAnZnJvbScsXG4gIGZ4OiAnZngnLFxuICBmeTogJ2Z5JyxcbiAgZzE6ICdnMScsXG4gIGcyOiAnZzInLFxuICBnbHlwaG5hbWU6ICdnbHlwaE5hbWUnLFxuICAnZ2x5cGgtbmFtZSc6ICdnbHlwaE5hbWUnLFxuICBnbHlwaG9yaWVudGF0aW9uaG9yaXpvbnRhbDogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnOiAnZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWwnLFxuICBnbHlwaG9yaWVudGF0aW9udmVydGljYWw6ICdnbHlwaE9yaWVudGF0aW9uVmVydGljYWwnLFxuICAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgZ2x5cGhyZWY6ICdnbHlwaFJlZicsXG4gIGdyYWRpZW50dHJhbnNmb3JtOiAnZ3JhZGllbnRUcmFuc2Zvcm0nLFxuICBncmFkaWVudHVuaXRzOiAnZ3JhZGllbnRVbml0cycsXG4gIGhhbmdpbmc6ICdoYW5naW5nJyxcbiAgaG9yaXphZHZ4OiAnaG9yaXpBZHZYJyxcbiAgJ2hvcml6LWFkdi14JzogJ2hvcml6QWR2WCcsXG4gIGhvcml6b3JpZ2lueDogJ2hvcml6T3JpZ2luWCcsXG4gICdob3Jpei1vcmlnaW4teCc6ICdob3Jpek9yaWdpblgnLFxuICBpZGVvZ3JhcGhpYzogJ2lkZW9ncmFwaGljJyxcbiAgaW1hZ2VyZW5kZXJpbmc6ICdpbWFnZVJlbmRlcmluZycsXG4gICdpbWFnZS1yZW5kZXJpbmcnOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICBpbjI6ICdpbjInLFxuICBpbjogJ2luJyxcbiAgaW5saXN0OiAnaW5saXN0JyxcbiAgaW50ZXJjZXB0OiAnaW50ZXJjZXB0JyxcbiAgazE6ICdrMScsXG4gIGsyOiAnazInLFxuICBrMzogJ2szJyxcbiAgazQ6ICdrNCcsXG4gIGs6ICdrJyxcbiAga2VybmVsbWF0cml4OiAna2VybmVsTWF0cml4JyxcbiAga2VybmVsdW5pdGxlbmd0aDogJ2tlcm5lbFVuaXRMZW5ndGgnLFxuICBrZXJuaW5nOiAna2VybmluZycsXG4gIGtleXBvaW50czogJ2tleVBvaW50cycsXG4gIGtleXNwbGluZXM6ICdrZXlTcGxpbmVzJyxcbiAga2V5dGltZXM6ICdrZXlUaW1lcycsXG4gIGxlbmd0aGFkanVzdDogJ2xlbmd0aEFkanVzdCcsXG4gIGxldHRlcnNwYWNpbmc6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgJ2xldHRlci1zcGFjaW5nJzogJ2xldHRlclNwYWNpbmcnLFxuICBsaWdodGluZ2NvbG9yOiAnbGlnaHRpbmdDb2xvcicsXG4gICdsaWdodGluZy1jb2xvcic6ICdsaWdodGluZ0NvbG9yJyxcbiAgbGltaXRpbmdjb25lYW5nbGU6ICdsaW1pdGluZ0NvbmVBbmdsZScsXG4gIGxvY2FsOiAnbG9jYWwnLFxuICBtYXJrZXJlbmQ6ICdtYXJrZXJFbmQnLFxuICAnbWFya2VyLWVuZCc6ICdtYXJrZXJFbmQnLFxuICBtYXJrZXJoZWlnaHQ6ICdtYXJrZXJIZWlnaHQnLFxuICBtYXJrZXJtaWQ6ICdtYXJrZXJNaWQnLFxuICAnbWFya2VyLW1pZCc6ICdtYXJrZXJNaWQnLFxuICBtYXJrZXJzdGFydDogJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlci1zdGFydCc6ICdtYXJrZXJTdGFydCcsXG4gIG1hcmtlcnVuaXRzOiAnbWFya2VyVW5pdHMnLFxuICBtYXJrZXJ3aWR0aDogJ21hcmtlcldpZHRoJyxcbiAgbWFzazogJ21hc2snLFxuICBtYXNrY29udGVudHVuaXRzOiAnbWFza0NvbnRlbnRVbml0cycsXG4gIG1hc2t1bml0czogJ21hc2tVbml0cycsXG4gIG1hdGhlbWF0aWNhbDogJ21hdGhlbWF0aWNhbCcsXG4gIG1vZGU6ICdtb2RlJyxcbiAgbnVtb2N0YXZlczogJ251bU9jdGF2ZXMnLFxuICBvZmZzZXQ6ICdvZmZzZXQnLFxuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIG9wZXJhdG9yOiAnb3BlcmF0b3InLFxuICBvcmRlcjogJ29yZGVyJyxcbiAgb3JpZW50OiAnb3JpZW50JyxcbiAgb3JpZW50YXRpb246ICdvcmllbnRhdGlvbicsXG4gIG9yaWdpbjogJ29yaWdpbicsXG4gIG92ZXJmbG93OiAnb3ZlcmZsb3cnLFxuICBvdmVybGluZXBvc2l0aW9uOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gICdvdmVybGluZS1wb3NpdGlvbic6ICdvdmVybGluZVBvc2l0aW9uJyxcbiAgb3ZlcmxpbmV0aGlja25lc3M6ICdvdmVybGluZVRoaWNrbmVzcycsXG4gICdvdmVybGluZS10aGlja25lc3MnOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxuICBwYWludG9yZGVyOiAncGFpbnRPcmRlcicsXG4gICdwYWludC1vcmRlcic6ICdwYWludE9yZGVyJyxcbiAgcGFub3NlMTogJ3Bhbm9zZTEnLFxuICAncGFub3NlLTEnOiAncGFub3NlMScsXG4gIHBhdGhsZW5ndGg6ICdwYXRoTGVuZ3RoJyxcbiAgcGF0dGVybmNvbnRlbnR1bml0czogJ3BhdHRlcm5Db250ZW50VW5pdHMnLFxuICBwYXR0ZXJudHJhbnNmb3JtOiAncGF0dGVyblRyYW5zZm9ybScsXG4gIHBhdHRlcm51bml0czogJ3BhdHRlcm5Vbml0cycsXG4gIHBvaW50ZXJldmVudHM6ICdwb2ludGVyRXZlbnRzJyxcbiAgJ3BvaW50ZXItZXZlbnRzJzogJ3BvaW50ZXJFdmVudHMnLFxuICBwb2ludHM6ICdwb2ludHMnLFxuICBwb2ludHNhdHg6ICdwb2ludHNBdFgnLFxuICBwb2ludHNhdHk6ICdwb2ludHNBdFknLFxuICBwb2ludHNhdHo6ICdwb2ludHNBdFonLFxuICBwcmVmaXg6ICdwcmVmaXgnLFxuICBwcmVzZXJ2ZWFscGhhOiAncHJlc2VydmVBbHBoYScsXG4gIHByZXNlcnZlYXNwZWN0cmF0aW86ICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJyxcbiAgcHJpbWl0aXZldW5pdHM6ICdwcmltaXRpdmVVbml0cycsXG4gIHByb3BlcnR5OiAncHJvcGVydHknLFxuICByOiAncicsXG4gIHJhZGl1czogJ3JhZGl1cycsXG4gIHJlZng6ICdyZWZYJyxcbiAgcmVmeTogJ3JlZlknLFxuICByZW5kZXJpbmdpbnRlbnQ6ICdyZW5kZXJpbmdJbnRlbnQnLFxuICAncmVuZGVyaW5nLWludGVudCc6ICdyZW5kZXJpbmdJbnRlbnQnLFxuICByZXBlYXRjb3VudDogJ3JlcGVhdENvdW50JyxcbiAgcmVwZWF0ZHVyOiAncmVwZWF0RHVyJyxcbiAgcmVxdWlyZWRleHRlbnNpb25zOiAncmVxdWlyZWRFeHRlbnNpb25zJyxcbiAgcmVxdWlyZWRmZWF0dXJlczogJ3JlcXVpcmVkRmVhdHVyZXMnLFxuICByZXNvdXJjZTogJ3Jlc291cmNlJyxcbiAgcmVzdGFydDogJ3Jlc3RhcnQnLFxuICByZXN1bHQ6ICdyZXN1bHQnLFxuICByZXN1bHRzOiAncmVzdWx0cycsXG4gIHJvdGF0ZTogJ3JvdGF0ZScsXG4gIHJ4OiAncngnLFxuICByeTogJ3J5JyxcbiAgc2NhbGU6ICdzY2FsZScsXG4gIHNlY3VyaXR5OiAnc2VjdXJpdHknLFxuICBzZWVkOiAnc2VlZCcsXG4gIHNoYXBlcmVuZGVyaW5nOiAnc2hhcGVSZW5kZXJpbmcnLFxuICAnc2hhcGUtcmVuZGVyaW5nJzogJ3NoYXBlUmVuZGVyaW5nJyxcbiAgc2xvcGU6ICdzbG9wZScsXG4gIHNwYWNpbmc6ICdzcGFjaW5nJyxcbiAgc3BlY3VsYXJjb25zdGFudDogJ3NwZWN1bGFyQ29uc3RhbnQnLFxuICBzcGVjdWxhcmV4cG9uZW50OiAnc3BlY3VsYXJFeHBvbmVudCcsXG4gIHNwZWVkOiAnc3BlZWQnLFxuICBzcHJlYWRtZXRob2Q6ICdzcHJlYWRNZXRob2QnLFxuICBzdGFydG9mZnNldDogJ3N0YXJ0T2Zmc2V0JyxcbiAgc3RkZGV2aWF0aW9uOiAnc3RkRGV2aWF0aW9uJyxcbiAgc3RlbWg6ICdzdGVtaCcsXG4gIHN0ZW12OiAnc3RlbXYnLFxuICBzdGl0Y2h0aWxlczogJ3N0aXRjaFRpbGVzJyxcbiAgc3RvcGNvbG9yOiAnc3RvcENvbG9yJyxcbiAgJ3N0b3AtY29sb3InOiAnc3RvcENvbG9yJyxcbiAgc3RvcG9wYWNpdHk6ICdzdG9wT3BhY2l0eScsXG4gICdzdG9wLW9wYWNpdHknOiAnc3RvcE9wYWNpdHknLFxuICBzdHJpa2V0aHJvdWdocG9zaXRpb246ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbic6ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICBzdHJpa2V0aHJvdWdodGhpY2tuZXNzOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyc6ICdzdHJpa2V0aHJvdWdoVGhpY2tuZXNzJyxcbiAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgc3Ryb2tlOiAnc3Ryb2tlJyxcbiAgc3Ryb2tlZGFzaGFycmF5OiAnc3Ryb2tlRGFzaGFycmF5JyxcbiAgJ3N0cm9rZS1kYXNoYXJyYXknOiAnc3Ryb2tlRGFzaGFycmF5JyxcbiAgc3Ryb2tlZGFzaG9mZnNldDogJ3N0cm9rZURhc2hvZmZzZXQnLFxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnc3Ryb2tlRGFzaG9mZnNldCcsXG4gIHN0cm9rZWxpbmVjYXA6ICdzdHJva2VMaW5lY2FwJyxcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ3N0cm9rZUxpbmVjYXAnLFxuICBzdHJva2VsaW5lam9pbjogJ3N0cm9rZUxpbmVqb2luJyxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdzdHJva2VMaW5lam9pbicsXG4gIHN0cm9rZW1pdGVybGltaXQ6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgJ3N0cm9rZS1taXRlcmxpbWl0JzogJ3N0cm9rZU1pdGVybGltaXQnLFxuICBzdHJva2V3aWR0aDogJ3N0cm9rZVdpZHRoJyxcbiAgJ3N0cm9rZS13aWR0aCc6ICdzdHJva2VXaWR0aCcsXG4gIHN0cm9rZW9wYWNpdHk6ICdzdHJva2VPcGFjaXR5JyxcbiAgJ3N0cm9rZS1vcGFjaXR5JzogJ3N0cm9rZU9wYWNpdHknLFxuICBzdXBwcmVzc2NvbnRlbnRlZGl0YWJsZXdhcm5pbmc6ICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLFxuICBzdXBwcmVzc2h5ZHJhdGlvbndhcm5pbmc6ICdzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcnLFxuICBzdXJmYWNlc2NhbGU6ICdzdXJmYWNlU2NhbGUnLFxuICBzeXN0ZW1sYW5ndWFnZTogJ3N5c3RlbUxhbmd1YWdlJyxcbiAgdGFibGV2YWx1ZXM6ICd0YWJsZVZhbHVlcycsXG4gIHRhcmdldHg6ICd0YXJnZXRYJyxcbiAgdGFyZ2V0eTogJ3RhcmdldFknLFxuICB0ZXh0YW5jaG9yOiAndGV4dEFuY2hvcicsXG4gICd0ZXh0LWFuY2hvcic6ICd0ZXh0QW5jaG9yJyxcbiAgdGV4dGRlY29yYXRpb246ICd0ZXh0RGVjb3JhdGlvbicsXG4gICd0ZXh0LWRlY29yYXRpb24nOiAndGV4dERlY29yYXRpb24nLFxuICB0ZXh0bGVuZ3RoOiAndGV4dExlbmd0aCcsXG4gIHRleHRyZW5kZXJpbmc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgJ3RleHQtcmVuZGVyaW5nJzogJ3RleHRSZW5kZXJpbmcnLFxuICB0bzogJ3RvJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNmb3JtJyxcbiAgdHlwZW9mOiAndHlwZW9mJyxcbiAgdTE6ICd1MScsXG4gIHUyOiAndTInLFxuICB1bmRlcmxpbmVwb3NpdGlvbjogJ3VuZGVybGluZVBvc2l0aW9uJyxcbiAgJ3VuZGVybGluZS1wb3NpdGlvbic6ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gIHVuZGVybGluZXRoaWNrbmVzczogJ3VuZGVybGluZVRoaWNrbmVzcycsXG4gICd1bmRlcmxpbmUtdGhpY2tuZXNzJzogJ3VuZGVybGluZVRoaWNrbmVzcycsXG4gIHVuaWNvZGU6ICd1bmljb2RlJyxcbiAgdW5pY29kZWJpZGk6ICd1bmljb2RlQmlkaScsXG4gICd1bmljb2RlLWJpZGknOiAndW5pY29kZUJpZGknLFxuICB1bmljb2RlcmFuZ2U6ICd1bmljb2RlUmFuZ2UnLFxuICAndW5pY29kZS1yYW5nZSc6ICd1bmljb2RlUmFuZ2UnLFxuICB1bml0c3BlcmVtOiAndW5pdHNQZXJFbScsXG4gICd1bml0cy1wZXItZW0nOiAndW5pdHNQZXJFbScsXG4gIHVuc2VsZWN0YWJsZTogJ3Vuc2VsZWN0YWJsZScsXG4gIHZhbHBoYWJldGljOiAndkFscGhhYmV0aWMnLFxuICAndi1hbHBoYWJldGljJzogJ3ZBbHBoYWJldGljJyxcbiAgdmFsdWVzOiAndmFsdWVzJyxcbiAgdmVjdG9yZWZmZWN0OiAndmVjdG9yRWZmZWN0JyxcbiAgJ3ZlY3Rvci1lZmZlY3QnOiAndmVjdG9yRWZmZWN0JyxcbiAgdmVyc2lvbjogJ3ZlcnNpb24nLFxuICB2ZXJ0YWR2eTogJ3ZlcnRBZHZZJyxcbiAgJ3ZlcnQtYWR2LXknOiAndmVydEFkdlknLFxuICB2ZXJ0b3JpZ2lueDogJ3ZlcnRPcmlnaW5YJyxcbiAgJ3ZlcnQtb3JpZ2luLXgnOiAndmVydE9yaWdpblgnLFxuICB2ZXJ0b3JpZ2lueTogJ3ZlcnRPcmlnaW5ZJyxcbiAgJ3ZlcnQtb3JpZ2luLXknOiAndmVydE9yaWdpblknLFxuICB2aGFuZ2luZzogJ3ZIYW5naW5nJyxcbiAgJ3YtaGFuZ2luZyc6ICd2SGFuZ2luZycsXG4gIHZpZGVvZ3JhcGhpYzogJ3ZJZGVvZ3JhcGhpYycsXG4gICd2LWlkZW9ncmFwaGljJzogJ3ZJZGVvZ3JhcGhpYycsXG4gIHZpZXdib3g6ICd2aWV3Qm94JyxcbiAgdmlld3RhcmdldDogJ3ZpZXdUYXJnZXQnLFxuICB2aXNpYmlsaXR5OiAndmlzaWJpbGl0eScsXG4gIHZtYXRoZW1hdGljYWw6ICd2TWF0aGVtYXRpY2FsJyxcbiAgJ3YtbWF0aGVtYXRpY2FsJzogJ3ZNYXRoZW1hdGljYWwnLFxuICB2b2NhYjogJ3ZvY2FiJyxcbiAgd2lkdGhzOiAnd2lkdGhzJyxcbiAgd29yZHNwYWNpbmc6ICd3b3JkU3BhY2luZycsXG4gICd3b3JkLXNwYWNpbmcnOiAnd29yZFNwYWNpbmcnLFxuICB3cml0aW5nbW9kZTogJ3dyaXRpbmdNb2RlJyxcbiAgJ3dyaXRpbmctbW9kZSc6ICd3cml0aW5nTW9kZScsXG4gIHgxOiAneDEnLFxuICB4MjogJ3gyJyxcbiAgeDogJ3gnLFxuICB4Y2hhbm5lbHNlbGVjdG9yOiAneENoYW5uZWxTZWxlY3RvcicsXG4gIHhoZWlnaHQ6ICd4SGVpZ2h0JyxcbiAgJ3gtaGVpZ2h0JzogJ3hIZWlnaHQnLFxuICB4bGlua2FjdHVhdGU6ICd4bGlua0FjdHVhdGUnLFxuICAneGxpbms6YWN0dWF0ZSc6ICd4bGlua0FjdHVhdGUnLFxuICB4bGlua2FyY3JvbGU6ICd4bGlua0FyY3JvbGUnLFxuICAneGxpbms6YXJjcm9sZSc6ICd4bGlua0FyY3JvbGUnLFxuICB4bGlua2hyZWY6ICd4bGlua0hyZWYnLFxuICAneGxpbms6aHJlZic6ICd4bGlua0hyZWYnLFxuICB4bGlua3JvbGU6ICd4bGlua1JvbGUnLFxuICAneGxpbms6cm9sZSc6ICd4bGlua1JvbGUnLFxuICB4bGlua3Nob3c6ICd4bGlua1Nob3cnLFxuICAneGxpbms6c2hvdyc6ICd4bGlua1Nob3cnLFxuICB4bGlua3RpdGxlOiAneGxpbmtUaXRsZScsXG4gICd4bGluazp0aXRsZSc6ICd4bGlua1RpdGxlJyxcbiAgeGxpbmt0eXBlOiAneGxpbmtUeXBlJyxcbiAgJ3hsaW5rOnR5cGUnOiAneGxpbmtUeXBlJyxcbiAgeG1sYmFzZTogJ3htbEJhc2UnLFxuICAneG1sOmJhc2UnOiAneG1sQmFzZScsXG4gIHhtbGxhbmc6ICd4bWxMYW5nJyxcbiAgJ3htbDpsYW5nJzogJ3htbExhbmcnLFxuICB4bWxuczogJ3htbG5zJyxcbiAgJ3htbDpzcGFjZSc6ICd4bWxTcGFjZScsXG4gIHhtbG5zeGxpbms6ICd4bWxuc1hsaW5rJyxcbiAgJ3htbG5zOnhsaW5rJzogJ3htbG5zWGxpbmsnLFxuICB4bWxzcGFjZTogJ3htbFNwYWNlJyxcbiAgeTE6ICd5MScsXG4gIHkyOiAneTInLFxuICB5OiAneScsXG4gIHljaGFubmVsc2VsZWN0b3I6ICd5Q2hhbm5lbFNlbGVjdG9yJyxcbiAgejogJ3onLFxuICB6b29tYW5kcGFuOiAnem9vbUFuZFBhbidcbn07XG5cbnZhciB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgd2FybmVkUHJvcGVydGllcyQxID0ge307XG4gIHZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgRVZFTlRfTkFNRV9SRUdFWCA9IC9eb24uLztcbiAgdmFyIElOVkFMSURfRVZFTlRfTkFNRV9SRUdFWCA9IC9eb25bXkEtWl0vO1xuICB2YXIgckFSSUEkMSA9IG5ldyBSZWdFeHAoJ14oYXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xuICB2YXIgckFSSUFDYW1lbCQxID0gbmV3IFJlZ0V4cCgnXihhcmlhKVtBLVpdWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xuXG4gIHZhbGlkYXRlUHJvcGVydHkkMSA9IGZ1bmN0aW9uICh0YWdOYW1lLCBuYW1lLCB2YWx1ZSwgY2FuVXNlRXZlbnRTeXN0ZW0pIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwod2FybmVkUHJvcGVydGllcyQxLCBuYW1lKSAmJiB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBsb3dlckNhc2VkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3VzaW4nIHx8IGxvd2VyQ2FzZWROYW1lID09PSAnb25mb2N1c291dCcpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0IHVzZXMgb25Gb2N1cyBhbmQgb25CbHVyIGluc3RlYWQgb2Ygb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0LiAnICsgJ0FsbCBSZWFjdCBldmVudHMgYXJlIG5vcm1hbGl6ZWQgdG8gYnViYmxlLCBzbyBvbkZvY3VzSW4gYW5kIG9uRm9jdXNPdXQgJyArICdhcmUgbm90IG5lZWRlZC9zdXBwb3J0ZWQgYnkgUmVhY3QuJyk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gV2UgY2FuJ3QgcmVseSBvbiB0aGUgZXZlbnQgc3lzdGVtIGJlaW5nIGluamVjdGVkIG9uIHRoZSBzZXJ2ZXIuXG4gICAgaWYgKGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gICAgICBpZiAocmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVnaXN0cmF0aW9uTmFtZSA9IHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpID8gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lc1tsb3dlckNhc2VkTmFtZV0gOiBudWxsO1xuICAgICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWUgIT0gbnVsbCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgcmVnaXN0cmF0aW9uTmFtZSk7XG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdVbmtub3duIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gSXQgd2lsbCBiZSBpZ25vcmVkLicsIG5hbWUpO1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgLy8gSWYgbm8gZXZlbnQgcGx1Z2lucyBoYXZlIGJlZW4gaW5qZWN0ZWQsIHdlIGFyZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgICAgIC8vIFNvIHdlIGNhbid0IHRlbGwgaWYgdGhlIGV2ZW50IG5hbWUgaXMgY29ycmVjdCBmb3Igc3VyZSwgYnV0IHdlIGNhbiBmaWx0ZXJcbiAgICAgIC8vIG91dCBrbm93biBiYWQgb25lcyBsaWtlIGBvbmNsaWNrYC4gV2UgY2FuJ3Qgc3VnZ2VzdCBhIHNwZWNpZmljIHJlcGxhY2VtZW50IHRob3VnaC5cbiAgICAgIGlmIChJTlZBTElEX0VWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gJyArICdSZWFjdCBldmVudHMgdXNlIHRoZSBjYW1lbENhc2UgbmFtaW5nIGNvbnZlbnRpb24sIGZvciBleGFtcGxlIGBvbkNsaWNrYC4nLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBMZXQgdGhlIEFSSUEgYXR0cmlidXRlIGhvb2sgdmFsaWRhdGUgQVJJQSBhdHRyaWJ1dGVzXG4gICAgaWYgKHJBUklBJDEudGVzdChuYW1lKSB8fCByQVJJQUNhbWVsJDEudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaW5uZXJodG1sJykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnRGlyZWN0bHkgc2V0dGluZyBwcm9wZXJ0eSBgaW5uZXJIVE1MYCBpcyBub3QgcGVybWl0dGVkLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBsb29rdXAgZG9jdW1lbnRhdGlvbiBvbiBgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLicpO1xuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ2FyaWEnKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdUaGUgYGFyaWFgIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZSBpbiBSZWFjdC4gJyArICdQYXNzIGluZGl2aWR1YWwgYGFyaWEtYCBhdHRyaWJ1dGVzIGluc3RlYWQuJyk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaXMnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVjZWl2ZWQgYSBgJXNgIGZvciBhIHN0cmluZyBhdHRyaWJ1dGUgYGlzYC4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCB0eXBlb2YgdmFsdWUpO1xuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVjZWl2ZWQgTmFOIGZvciB0aGUgYCVzYCBhdHRyaWJ1dGUuIElmIHRoaXMgaXMgZXhwZWN0ZWQsIGNhc3QgJyArICd0aGUgdmFsdWUgdG8gYSBzdHJpbmcuJywgbmFtZSk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5SW5mbyA9IGdldFByb3BlcnR5SW5mbyhuYW1lKTtcbiAgICB2YXIgaXNSZXNlcnZlZCA9IHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7XG5cbiAgICAvLyBLbm93biBhdHRyaWJ1dGVzIHNob3VsZCBtYXRjaCB0aGUgY2FzaW5nIHNwZWNpZmllZCBpbiB0aGUgcHJvcGVydHkgY29uZmlnLlxuICAgIGlmIChwb3NzaWJsZVN0YW5kYXJkTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpKSB7XG4gICAgICB2YXIgc3RhbmRhcmROYW1lID0gcG9zc2libGVTdGFuZGFyZE5hbWVzW2xvd2VyQ2FzZWROYW1lXTtcbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBET00gcHJvcGVydHkgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgc3RhbmRhcmROYW1lKTtcbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZCAmJiBuYW1lICE9PSBsb3dlckNhc2VkTmFtZSkge1xuICAgICAgLy8gVW5rbm93biBhdHRyaWJ1dGVzIHNob3VsZCBoYXZlIGxvd2VyY2FzZSBjYXNpbmcgc2luY2UgdGhhdCdzIGhvdyB0aGV5XG4gICAgICAvLyB3aWxsIGJlIGNhc2VkIGFueXdheSB3aXRoIHNlcnZlciByZW5kZXJpbmcuXG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdCBkb2VzIG5vdCByZWNvZ25pemUgdGhlIGAlc2AgcHJvcCBvbiBhIERPTSBlbGVtZW50LiBJZiB5b3UgJyArICdpbnRlbnRpb25hbGx5IHdhbnQgaXQgdG8gYXBwZWFyIGluIHRoZSBET00gYXMgYSBjdXN0b20gJyArICdhdHRyaWJ1dGUsIHNwZWxsIGl0IGFzIGxvd2VyY2FzZSBgJXNgIGluc3RlYWQuICcgKyAnSWYgeW91IGFjY2lkZW50YWxseSBwYXNzZWQgaXQgZnJvbSBhIHBhcmVudCBjb21wb25lbnQsIHJlbW92ZSAnICsgJ2l0IGZyb20gdGhlIERPTSBlbGVtZW50LicsIG5hbWUsIGxvd2VyQ2FzZWROYW1lKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVjZWl2ZWQgYCVzYCBmb3IgYSBub24tYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC5cXG5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIHdyaXRlIGl0IHRvIHRoZSBET00sIHBhc3MgYSBzdHJpbmcgaW5zdGVhZDogJyArICclcz1cIiVzXCIgb3IgJXM9e3ZhbHVlLnRvU3RyaW5nKCl9LicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWNlaXZlZCBgJXNgIGZvciBhIG5vbi1ib29sZWFuIGF0dHJpYnV0ZSBgJXNgLlxcblxcbicgKyAnSWYgeW91IHdhbnQgdG8gd3JpdGUgaXQgdG8gdGhlIERPTSwgcGFzcyBhIHN0cmluZyBpbnN0ZWFkOiAnICsgJyVzPVwiJXNcIiBvciAlcz17dmFsdWUudG9TdHJpbmcoKX0uXFxuXFxuJyArICdJZiB5b3UgdXNlZCB0byBjb25kaXRpb25hbGx5IG9taXQgaXQgd2l0aCAlcz17Y29uZGl0aW9uICYmIHZhbHVlfSwgJyArICdwYXNzICVzPXtjb25kaXRpb24gPyB2YWx1ZSA6IHVuZGVmaW5lZH0gaW5zdGVhZC4nLCB2YWx1ZSwgbmFtZSwgbmFtZSwgdmFsdWUsIG5hbWUsIG5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIHZhbGlkYXRlZCBjYXNpbmcsIGRvIG5vdCB2YWxpZGF0ZVxuICAgIC8vIGRhdGEgdHlwZXMgZm9yIHJlc2VydmVkIHByb3BzXG4gICAgaWYgKGlzUmVzZXJ2ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFdhcm4gd2hlbiBhIGtub3duIGF0dHJpYnV0ZSBpcyBhIGJhZCB0eXBlXG4gICAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBXYXJuIHdoZW4gcGFzc2luZyB0aGUgc3RyaW5ncyAnZmFsc2UnIG9yICd0cnVlJyBpbnRvIGEgYm9vbGVhbiBwcm9wXG4gICAgaWYgKCh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ3RydWUnKSAmJiBwcm9wZXJ0eUluZm8gIT09IG51bGwgJiYgcHJvcGVydHlJbmZvLnR5cGUgPT09IEJPT0xFQU4pIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlY2VpdmVkIHRoZSBzdHJpbmcgYCVzYCBmb3IgdGhlIGJvb2xlYW4gYXR0cmlidXRlIGAlc2AuICcgKyAnJXMgJyArICdEaWQgeW91IG1lYW4gJXM9eyVzfT8nLCB2YWx1ZSwgbmFtZSwgdmFsdWUgPT09ICdmYWxzZScgPyAnVGhlIGJyb3dzZXIgd2lsbCBpbnRlcnByZXQgaXQgYXMgYSB0cnV0aHkgdmFsdWUuJyA6ICdBbHRob3VnaCB0aGlzIHdvcmtzLCBpdCB3aWxsIG5vdCB3b3JrIGFzIGV4cGVjdGVkIGlmIHlvdSBwYXNzIHRoZSBzdHJpbmcgXCJmYWxzZVwiLicsIG5hbWUsIHZhbHVlKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxudmFyIHdhcm5Vbmtub3duUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcywgY2FuVXNlRXZlbnRTeXN0ZW0pIHtcbiAgdmFyIHVua25vd25Qcm9wcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkkMSh0eXBlLCBrZXksIHByb3BzW2tleV0sIGNhblVzZUV2ZW50U3lzdGVtKTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHVua25vd25Qcm9wcy5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHVua25vd25Qcm9wU3RyaW5nID0gdW5rbm93blByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiAnYCcgKyBwcm9wICsgJ2AnO1xuICB9KS5qb2luKCcsICcpO1xuICBpZiAodW5rbm93blByb3BzLmxlbmd0aCA9PT0gMSkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgdmFsdWUgZm9yIHByb3AgJXMgb24gPCVzPiB0YWcuIEVpdGhlciByZW1vdmUgaXQgZnJvbSB0aGUgZWxlbWVudCwgJyArICdvciBwYXNzIGEgc3RyaW5nIG9yIG51bWJlciB2YWx1ZSB0byBrZWVwIGl0IGluIHRoZSBET00uICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWF0dHJpYnV0ZS1iZWhhdmlvcicsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgfSBlbHNlIGlmICh1bmtub3duUHJvcHMubGVuZ3RoID4gMSkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgdmFsdWVzIGZvciBwcm9wcyAlcyBvbiA8JXM+IHRhZy4gRWl0aGVyIHJlbW92ZSB0aGVtIGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCB0aGVtIGluIHRoZSBET00uICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWF0dHJpYnV0ZS1iZWhhdmlvcicsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsIGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0eXBlLCBwcm9wcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgd2FyblVua25vd25Qcm9wZXJ0aWVzKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIEJhc2VkIG9uIHJlYWRpbmcgdGhlIFJlYWN0LkNoaWxkcmVuIGltcGxlbWVudGF0aW9uLiBUT0RPOiB0eXBlIHRoaXMgc29tZXdoZXJlP1xuXG52YXIgdG9BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXk7XG5cbi8vIFRoaXMgaXMgb25seSB1c2VkIGluIERFVi5cbi8vIEVhY2ggZW50cnkgaXMgYHRoaXMuc3RhY2tgIGZyb20gYSBjdXJyZW50bHkgZXhlY3V0aW5nIHJlbmRlcmVyIGluc3RhbmNlLlxuLy8gKFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIGJlY2F1c2UgUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50KS5cbi8vIEVhY2ggc3RhY2sgaXMgYW4gYXJyYXkgb2YgZnJhbWVzIHdoaWNoIG1heSBjb250YWluIG5lc3RlZCBzdGFja3Mgb2YgZWxlbWVudHMuXG52YXIgY3VycmVudERlYnVnU3RhY2tzID0gW107XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gdm9pZCAwO1xudmFyIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gbnVsbDtcbnZhciBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJyc7XG59O1xudmFyIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiAnJztcbn07XG5cbnZhciB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7fTtcbnZhciBwdXNoQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoc3RhY2spIHt9O1xudmFyIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHt9O1xudmFyIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge307XG52YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyID0gZmFsc2U7XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbiAgdmFsaWRhdGVQcm9wZXJ0aWVzSW5EZXZlbG9wbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcyk7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpO1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLCAvKiBjYW5Vc2VFdmVudFN5c3RlbSAqL2ZhbHNlKTtcbiAgfTtcblxuICBkZXNjcmliZVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgIHZhciBvd25lck5hbWUgPSBudWxsO1xuICAgIHJldHVybiBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKTtcbiAgfTtcblxuICBwdXNoQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICBjdXJyZW50RGVidWdTdGFja3MucHVzaChzdGFjayk7XG5cbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gV2UgYXJlIGVudGVyaW5nIGEgc2VydmVyIHJlbmRlcmVyLlxuICAgICAgLy8gUmVtZW1iZXIgdGhlIHByZXZpb3VzIChlLmcuIGNsaWVudCkgZ2xvYmFsIHN0YWNrIGltcGxlbWVudGF0aW9uLlxuICAgICAgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbDtcbiAgICB9XG4gIH07XG5cbiAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEZvciB0aGUgaW5uZXJtb3N0IGV4ZWN1dGluZyBSZWFjdERPTVNlcnZlciBjYWxsLFxuICAgIHZhciBzdGFjayA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07XG4gICAgLy8gVGFrZSB0aGUgaW5uZXJtb3N0IGV4ZWN1dGluZyBmcmFtZSAoZS5nLiA8Rm9vPiksXG4gICAgdmFyIGZyYW1lID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgLy8gYW5kIHJlY29yZCB0aGF0IGl0IGhhcyBvbmUgbW9yZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgIC8vIFdlIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2Ugd2UgdGFpbC1vcHRpbWl6ZSBzaW5nbGUtZWxlbWVudFxuICAgIC8vIGNoaWxkcmVuIGFuZCBkaXJlY3RseSBoYW5kbGUgdGhlbSBpbiBhbiBpbm5lciBsb29wIGluc3RlYWQgb2ZcbiAgICAvLyBjcmVhdGluZyBzZXBhcmF0ZSBmcmFtZXMgZm9yIHRoZW0uXG4gIH07XG5cbiAgcG9wQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudERlYnVnU3RhY2tzLnBvcCgpO1xuXG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFdlIGFyZSBleGl0aW5nIHRoZSBzZXJ2ZXIgcmVuZGVyZXIuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwcmV2aW91cyAoZS5nLiBjbGllbnQpIGdsb2JhbCBzdGFjayBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gcHJldkdldEN1cnJlbnRTdGFja0ltcGw7XG4gICAgICBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIE5vdGhpbmcgaXMgY3VycmVudGx5IHJlbmRlcmluZy5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy8gUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50IHNvIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBjYWxscyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIFRha2UgdGhlIGZyYW1lcyBmcm9tIHRoZSBpbm5lcm1vc3QgY2FsbCB3aGljaCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkuXG4gICAgdmFyIGZyYW1lcyA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgLy8gR28gdGhyb3VnaCBldmVyeSBmcmFtZSBpbiB0aGUgc3RhY2sgZnJvbSB0aGUgaW5uZXJtb3N0IG9uZS5cbiAgICBmb3IgKHZhciBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZnJhbWUgPSBmcmFtZXNbaV07XG4gICAgICAvLyBFdmVyeSBmcmFtZSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVidWcgZWxlbWVudCBzdGFjayBlbnRyeSBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugc2luZ2xlLWNoaWxkIG5lc3RpbmcgZG9lc24ndCBjcmVhdGUgbWF0ZXJpYWxpemVkIGZyYW1lcy5cbiAgICAgIC8vIEluc3RlYWQgaXQgd291bGQgcHVzaCB0aGVtIHRocm91Z2ggYHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKClgLlxuICAgICAgdmFyIF9kZWJ1Z0VsZW1lbnRTdGFjayA9IGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrO1xuICAgICAgZm9yICh2YXIgaWkgPSBfZGVidWdFbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgaWkgPj0gMDsgaWktLSkge1xuICAgICAgICBzdGFjayArPSBkZXNjcmliZVN0YWNrRnJhbWUoX2RlYnVnRWxlbWVudFN0YWNrW2lpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIGRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gZmFsc2U7XG52YXIgZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dEJhZENsYXNzID0ge307XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZSA9IHt9O1xudmFyIGRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZSA9IHt9O1xudmFyIHZhbHVlUHJvcE5hbWVzID0gWyd2YWx1ZScsICdkZWZhdWx0VmFsdWUnXTtcbnZhciBuZXdsaW5lRWF0aW5nVGFncyA9IHtcbiAgbGlzdGluZzogdHJ1ZSxcbiAgcHJlOiB0cnVlLFxuICB0ZXh0YXJlYTogdHJ1ZVxufTtcblxuLy8gV2UgYWNjZXB0IGFueSB0YWcgdG8gYmUgcmVuZGVyZWQgYnV0IHNpbmNlIHRoaXMgZ2V0cyBpbmplY3RlZCBpbnRvIGFyYml0cmFyeVxuLy8gSFRNTCwgd2Ugd2FudCB0byBtYWtlIHN1cmUgdGhhdCBpdCdzIGEgc2FmZSB0YWcuXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLyNOVC1OYW1lXG52YXIgVkFMSURfVEFHX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVo6X1xcLlxcLVxcZF0qJC87IC8vIFNpbXBsaWZpZWQgc3Vic2V0XG52YXIgdmFsaWRhdGVkVGFnQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIHZhbGlkYXRlRGFuZ2Vyb3VzVGFnKHRhZykge1xuICBpZiAoIXZhbGlkYXRlZFRhZ0NhY2hlLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICAhVkFMSURfVEFHX1JFR0VYLnRlc3QodGFnKSA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgdGFnOiAlcycsIHRhZykgOiB2b2lkIDA7XG4gICAgdmFsaWRhdGVkVGFnQ2FjaGVbdGFnXSA9IHRydWU7XG4gIH1cbn1cblxudmFyIHN0eWxlTmFtZUNhY2hlID0ge307XG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgaWYgKHN0eWxlTmFtZUNhY2hlLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICByZXR1cm4gc3R5bGVOYW1lQ2FjaGVbc3R5bGVOYW1lXTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHN0eWxlTmFtZSk7XG4gIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV0gPSByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciBzZXJpYWxpemVkID0gJyc7XG4gIHZhciBkZWxpbWl0ZXIgPSAnJztcbiAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgIHZhciBzdHlsZVZhbHVlID0gc3R5bGVzW3N0eWxlTmFtZV07XG4gICAge1xuICAgICAgaWYgKCFpc0N1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdhcm5WYWxpZFN0eWxlJDEoc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0eWxlVmFsdWUgIT0gbnVsbCkge1xuICAgICAgc2VyaWFsaXplZCArPSBkZWxpbWl0ZXIgKyBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkgKyAnOic7XG4gICAgICBzZXJpYWxpemVkICs9IGRhbmdlcm91c1N0eWxlVmFsdWUoc3R5bGVOYW1lLCBzdHlsZVZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KTtcblxuICAgICAgZGVsaW1pdGVyID0gJzsnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2VyaWFsaXplZCB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIGdldENvbXBvbmVudE5hbWUoX2NvbnN0cnVjdG9yKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzKC4uLik6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG91dHNpZGUgY29tcG9uZW50V2lsbE1vdW50KCkgb24gdGhlIHNlcnZlci4gJyArICdUaGlzIGlzIGEgbm8tb3AuXFxuXFxuUGxlYXNlIGNoZWNrIHRoZSBjb2RlIGZvciB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKSB7XG4gIHZhciBpbm5lckhUTUwgPSBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcbiAgaWYgKGlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKGlubmVySFRNTC5fX2h0bWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGlubmVySFRNTC5fX2h0bWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZW50ID0gcHJvcHMuY2hpbGRyZW47XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcihjb250ZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Ub3BMZXZlbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoY2hpbGRyZW4pO1xuICB9XG4gIHZhciBlbGVtZW50ID0gY2hpbGRyZW47XG4gIGlmIChlbGVtZW50LnR5cGUgIT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICByZXR1cm4gW2VsZW1lbnRdO1xuICB9XG4gIHZhciBmcmFnbWVudENoaWxkcmVuID0gZWxlbWVudC5wcm9wcy5jaGlsZHJlbjtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmcmFnbWVudENoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGZyYWdtZW50Q2hpbGRyZW4pO1xuICB9XG4gIHZhciBmcmFnbWVudENoaWxkRWxlbWVudCA9IGZyYWdtZW50Q2hpbGRyZW47XG4gIHJldHVybiBbZnJhZ21lbnRDaGlsZEVsZW1lbnRdO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuT3B0aW9uQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIGNvbnRlbnQgPSAnJztcbiAgLy8gRmxhdHRlbiBjaGlsZHJlbiBhbmQgd2FybiBpZiB0aGV5IGFyZW4ndCBzdHJpbmdzIG9yIG51bWJlcnM7XG4gIC8vIGludmFsaWQgdHlwZXMgYXJlIGlnbm9yZWQuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gY2hpbGQ7XG4gICAge1xuICAgICAgaWYgKCFkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuICYmIHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNoaWxkICE9PSAnbnVtYmVyJykge1xuICAgICAgICBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnT25seSBzdHJpbmdzIGFuZCBudW1iZXJzIGFyZSBzdXBwb3J0ZWQgYXMgPG9wdGlvbj4gY2hpbGRyZW4uJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgU1RZTEUgPSAnc3R5bGUnO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG51bGwsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogbnVsbCxcbiAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVuVGFnTWFya3VwKHRhZ1ZlcmJhdGltLCB0YWdMb3dlcmNhc2UsIHByb3BzLCBuYW1lc3BhY2UsIG1ha2VTdGF0aWNNYXJrdXAsIGlzUm9vdEVsZW1lbnQpIHtcbiAgdmFyIHJldCA9ICc8JyArIHRhZ1ZlcmJhdGltO1xuXG4gIGZvciAodmFyIHByb3BLZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIHByb3BLZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BLZXldO1xuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChwcm9wS2V5ID09PSBTVFlMRSkge1xuICAgICAgcHJvcFZhbHVlID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHByb3BWYWx1ZSk7XG4gICAgfVxuICAgIHZhciBtYXJrdXAgPSBudWxsO1xuICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0YWdMb3dlcmNhc2UsIHByb3BzKSkge1xuICAgICAgaWYgKCFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICBtYXJrdXAgPSBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yUHJvcGVydHkocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKG1hcmt1cCkge1xuICAgICAgcmV0ICs9ICcgJyArIG1hcmt1cDtcbiAgICB9XG4gIH1cblxuICAvLyBGb3Igc3RhdGljIHBhZ2VzLCBubyBuZWVkIHRvIHB1dCBSZWFjdCBJRCBhbmQgY2hlY2tzdW0uIFNhdmVzIGxvdHMgb2ZcbiAgLy8gYnl0ZXMuXG4gIGlmIChtYWtlU3RhdGljTWFya3VwKSB7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGlmIChpc1Jvb3RFbGVtZW50KSB7XG4gICAgcmV0ICs9ICcgJyArIGNyZWF0ZU1hcmt1cEZvclJvb3QoKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgdHlwZSkge1xuICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgIGludmFyaWFudChmYWxzZSwgJyVzKC4uLik6IE5vdGhpbmcgd2FzIHJldHVybmVkIGZyb20gcmVuZGVyLiBUaGlzIHVzdWFsbHkgbWVhbnMgYSByZXR1cm4gc3RhdGVtZW50IGlzIG1pc3NpbmcuIE9yLCB0byByZW5kZXIgbm90aGluZywgcmV0dXJuIG51bGwuJywgZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB8fCAnQ29tcG9uZW50Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgd2hpbGUgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgIC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50ID0gY2hpbGQ7XG4gICAgdmFyIENvbXBvbmVudCA9IGVsZW1lbnQudHlwZTtcbiAgICB7XG4gICAgICBwdXNoRWxlbWVudFRvRGVidWdTdGFjayhlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwcm9jZXNzQ2hpbGQoZWxlbWVudCwgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8vIEV4dHJhIGNsb3N1cmUgc28gcXVldWUgYW5kIHJlcGxhY2UgY2FuIGJlIGNhcHR1cmVkIHByb3Blcmx5XG4gIGZ1bmN0aW9uIHByb2Nlc3NDaGlsZChlbGVtZW50LCBDb21wb25lbnQpIHtcbiAgICB2YXIgcHVibGljQ29udGV4dCA9IHByb2Nlc3NDb250ZXh0KENvbXBvbmVudCwgY29udGV4dCwgdGhyZWFkSUQpO1xuXG4gICAgdmFyIHF1ZXVlID0gW107XG4gICAgdmFyIHJlcGxhY2UgPSBmYWxzZTtcbiAgICB2YXIgdXBkYXRlciA9IHtcbiAgICAgIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICBpZiAocXVldWUgPT09IG51bGwpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUpIHtcbiAgICAgICAgcmVwbGFjZSA9IHRydWU7XG4gICAgICAgIHF1ZXVlID0gW2NvbXBsZXRlU3RhdGVdO1xuICAgICAgfSxcbiAgICAgIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjdXJyZW50UGFydGlhbFN0YXRlKSB7XG4gICAgICAgIGlmIChxdWV1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnRQYXJ0aWFsU3RhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaW5zdCA9IHZvaWQgMDtcbiAgICBpZiAoc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkpIHtcbiAgICAgIGluc3QgPSBuZXcgQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChpbnN0LnN0YXRlID09PSBudWxsIHx8IGluc3Quc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGVbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnYCVzYCB1c2VzIGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGJ1dCBpdHMgaW5pdGlhbCBzdGF0ZSBpcyAnICsgJyVzLiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZC4gSW5zdGVhZCwgZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIGJ5ICcgKyAnYXNzaWduaW5nIGFuIG9iamVjdCB0byBgdGhpcy5zdGF0ZWAgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGAlc2AuICcgKyAnVGhpcyBlbnN1cmVzIHRoYXQgYGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc2AgYXJndW1lbnRzIGhhdmUgYSBjb25zaXN0ZW50IHNoYXBlLicsIGNvbXBvbmVudE5hbWUsIGluc3Quc3RhdGUgPT09IG51bGwgPyAnbnVsbCcgOiAndW5kZWZpbmVkJywgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgIGRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZVtjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRpYWxTdGF0ZSA9IENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuY2FsbChudWxsLCBlbGVtZW50LnByb3BzLCBpbnN0LnN0YXRlKTtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpOiBBIHZhbGlkIHN0YXRlIG9iamVjdCAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZC4gJyArICdZb3UgaGF2ZSByZXR1cm5lZCB1bmRlZmluZWQuJywgX2NvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gX2Fzc2lnbih7fSwgaW5zdC5zdGF0ZSwgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB7XG4gICAgICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlICYmIHR5cGVvZiBDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTIgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdKSB7XG4gICAgICAgICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsIFwiVGhlIDwlcyAvPiBjb21wb25lbnQgYXBwZWFycyB0byBoYXZlIGEgcmVuZGVyIG1ldGhvZCwgYnV0IGRvZXNuJ3QgZXh0ZW5kIFJlYWN0LkNvbXBvbmVudC4gXCIgKyAnVGhpcyBpcyBsaWtlbHkgdG8gY2F1c2UgZXJyb3JzLiBDaGFuZ2UgJXMgdG8gZXh0ZW5kIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLicsIF9jb21wb25lbnROYW1lMiwgX2NvbXBvbmVudE5hbWUyKTtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dEJhZENsYXNzW19jb21wb25lbnROYW1lMl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XG4gICAgICBpbnN0ID0gQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuICAgICAgaW5zdCA9IGZpbmlzaEhvb2tzKENvbXBvbmVudCwgZWxlbWVudC5wcm9wcywgaW5zdCwgcHVibGljQ29udGV4dCk7XG5cbiAgICAgIGlmIChpbnN0ID09IG51bGwgfHwgaW5zdC5yZW5kZXIgPT0gbnVsbCkge1xuICAgICAgICBjaGlsZCA9IGluc3Q7XG4gICAgICAgIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCBDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zdC5wcm9wcyA9IGVsZW1lbnQucHJvcHM7XG4gICAgaW5zdC5jb250ZXh0ID0gcHVibGljQ29udGV4dDtcbiAgICBpbnN0LnVwZGF0ZXIgPSB1cGRhdGVyO1xuXG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IGluc3Quc3RhdGU7XG4gICAgaWYgKGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0LnN0YXRlID0gaW5pdGlhbFN0YXRlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAod2FybkFib3V0RGVwcmVjYXRlZExpZmVjeWNsZXMgJiYgaW5zdC5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lMyA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTNdKSB7XG4gICAgICAgICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXM6IGNvbXBvbmVudFdpbGxNb3VudCgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uIFJlYWQgYWJvdXQgdGhlIG1vdGl2YXRpb25zICcgKyAnYmVoaW5kIHRoaXMgY2hhbmdlOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcycgKyAnXFxuXFxuJyArICdBcyBhIHRlbXBvcmFyeSB3b3JrYXJvdW5kLCB5b3UgY2FuIHJlbmFtZSB0byAnICsgJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgaW5zdGVhZC4nLCBfY29tcG9uZW50TmFtZTMpO1xuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lM10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQgcG9seWZpbGxlZCBjb21wb25lbnRzLFxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGluc3QuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJbiBvcmRlciB0byBzdXBwb3J0IHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0IHBvbHlmaWxsZWQgY29tcG9uZW50cyxcbiAgICAgICAgLy8gVW5zYWZlIGxpZmVjeWNsZXMgc2hvdWxkIG5vdCBiZSBpbnZva2VkIGZvciBhbnkgY29tcG9uZW50IHdpdGggdGhlIG5ldyBnRFNGUC5cbiAgICAgICAgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICB9XG4gICAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvbGRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICB2YXIgb2xkUmVwbGFjZSA9IHJlcGxhY2U7XG4gICAgICAgIHF1ZXVlID0gbnVsbDtcbiAgICAgICAgcmVwbGFjZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvbGRSZXBsYWNlICYmIG9sZFF1ZXVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGluc3Quc3RhdGUgPSBvbGRRdWV1ZVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gb2xkUmVwbGFjZSA/IG9sZFF1ZXVlWzBdIDogaW5zdC5zdGF0ZTtcbiAgICAgICAgICB2YXIgZG9udE11dGF0ZSA9IHRydWU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IG9sZFJlcGxhY2UgPyAxIDogMDsgaSA8IG9sZFF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydGlhbCA9IG9sZFF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIF9wYXJ0aWFsU3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcnRpYWwuY2FsbChpbnN0LCBuZXh0U3RhdGUsIGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQpIDogcGFydGlhbDtcbiAgICAgICAgICAgIGlmIChfcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKGRvbnRNdXRhdGUpIHtcbiAgICAgICAgICAgICAgICBkb250TXV0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gX2Fzc2lnbih7fSwgbmV4dFN0YXRlLCBfcGFydGlhbFN0YXRlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYXNzaWduKG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGlsZCA9IGluc3QucmVuZGVyKCk7XG5cbiAgICB7XG4gICAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCAmJiBpbnN0LnJlbmRlci5faXNNb2NrRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgICAgLy8gZGVwcmVjYXRpbmcgdGhpcyBjb252ZW5pZW5jZS5cbiAgICAgICAgY2hpbGQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgQ29tcG9uZW50KTtcblxuICAgIHZhciBjaGlsZENvbnRleHQgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiBpbnN0LmdldENoaWxkQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGNoaWxkQ29udGV4dFR5cGVzID0gQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzO1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZENvbnRleHRUeXBlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gaW5zdC5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgZm9yICh2YXIgY29udGV4dEtleSBpbiBjaGlsZENvbnRleHQpIHtcbiAgICAgICAgICAhKGNvbnRleHRLZXkgaW4gY2hpbGRDb250ZXh0VHlwZXMpID8gaW52YXJpYW50KGZhbHNlLCAnJXMuZ2V0Q2hpbGRDb250ZXh0KCk6IGtleSBcIiVzXCIgaXMgbm90IGRlZmluZWQgaW4gY2hpbGRDb250ZXh0VHlwZXMuJywgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJywgY29udGV4dEtleSkgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzLmdldENoaWxkQ29udGV4dCgpOiBjaGlsZENvbnRleHRUeXBlcyBtdXN0IGJlIGRlZmluZWQgaW4gb3JkZXIgdG8gJyArICd1c2UgZ2V0Q2hpbGRDb250ZXh0KCkuJywgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZENvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBfYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBjaGlsZDogY2hpbGQsIGNvbnRleHQ6IGNvbnRleHQgfTtcbn1cblxudmFyIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIERFVi1vbmx5XG5cbiAgLy8gVE9ETzogdHlwZSB0aGlzIG1vcmUgc3RyaWN0bHk6XG4gIGZ1bmN0aW9uIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoY2hpbGRyZW4sIG1ha2VTdGF0aWNNYXJrdXApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RET01TZXJ2ZXJSZW5kZXJlcik7XG5cbiAgICB2YXIgZmxhdENoaWxkcmVuID0gZmxhdHRlblRvcExldmVsQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgdmFyIHRvcEZyYW1lID0ge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIC8vIEFzc3VtZSBhbGwgdHJlZXMgc3RhcnQgaW4gdGhlIEhUTUwgbmFtZXNwYWNlIChub3QgdG90YWxseSB0cnVlLCBidXRcbiAgICAgIC8vIHRoaXMgaXMgd2hhdCB3ZSBkaWQgaGlzdG9yaWNhbGx5KVxuICAgICAgZG9tTmFtZXNwYWNlOiBOYW1lc3BhY2VzLmh0bWwsXG4gICAgICBjaGlsZHJlbjogZmxhdENoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGVtcHR5T2JqZWN0LFxuICAgICAgZm9vdGVyOiAnJ1xuICAgIH07XG4gICAge1xuICAgICAgdG9wRnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICB9XG4gICAgdGhpcy50aHJlYWRJRCA9IGFsbG9jVGhyZWFkSUQoKTtcbiAgICB0aGlzLnN0YWNrID0gW3RvcEZyYW1lXTtcbiAgICB0aGlzLmV4aGF1c3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VTdGF0aWNNYXJrdXAgPSBtYWtlU3RhdGljTWFya3VwO1xuICAgIHRoaXMuc3VzcGVuc2VEZXB0aCA9IDA7XG5cbiAgICAvLyBDb250ZXh0IChuZXcgQVBJKVxuICAgIHRoaXMuY29udGV4dEluZGV4ID0gLTE7XG4gICAgdGhpcy5jb250ZXh0U3RhY2sgPSBbXTtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrID0gW107XG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFjayA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5leGhhdXN0ZWQpIHtcbiAgICAgIHRoaXMuZXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJQcm92aWRlcnMoKTtcbiAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE5vdGU6IFdlIHVzZSBqdXN0IHR3byBzdGFja3MgcmVnYXJkbGVzcyBvZiBob3cgbWFueSBjb250ZXh0IHByb3ZpZGVycyB5b3UgaGF2ZS5cbiAgICogUHJvdmlkZXJzIGFyZSBhbHdheXMgcG9wcGVkIGluIHRoZSByZXZlcnNlIG9yZGVyIHRvIGhvdyB0aGV5IHdlcmUgcHVzaGVkXG4gICAqIHNvIHdlIGFsd2F5cyBrbm93IG9uIHRoZSB3YXkgZG93biB3aGljaCBwcm92aWRlciB5b3UnbGwgZW5jb3VudGVyIG5leHQgb24gdGhlIHdheSB1cC5cbiAgICogT24gdGhlIHdheSBkb3duLCB3ZSBwdXNoIHRoZSBjdXJyZW50IHByb3ZpZGVyLCBhbmQgaXRzIGNvbnRleHQgdmFsdWUgKmJlZm9yZSpcbiAgICogd2UgbXV0YXRlZCBpdCwgb250byB0aGUgc3RhY2tzLiBUaGVyZWZvcmUsIG9uIHRoZSB3YXkgdXAsIHdlIGFsd2F5cyBrbm93IHdoaWNoXG4gICAqIHByb3ZpZGVyIG5lZWRzIHRvIGJlIFwicmVzdG9yZWRcIiB0byB3aGljaCB2YWx1ZS5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMTI5ODUjaXNzdWVjb21tZW50LTM5NjMwMTI0OFxuICAgKi9cblxuICBSZWFjdERPTVNlcnZlclJlbmRlcmVyLnByb3RvdHlwZS5wdXNoUHJvdmlkZXIgPSBmdW5jdGlvbiBwdXNoUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICB2YXIgaW5kZXggPSArK3RoaXMuY29udGV4dEluZGV4O1xuICAgIHZhciBjb250ZXh0ID0gcHJvdmlkZXIudHlwZS5fY29udGV4dDtcbiAgICB2YXIgdGhyZWFkSUQgPSB0aGlzLnRocmVhZElEO1xuICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBjb250ZXh0W3RocmVhZElEXTtcblxuICAgIC8vIFJlbWVtYmVyIHdoaWNoIHZhbHVlIHRvIHJlc3RvcmUgdGhpcyBjb250ZXh0IHRvIG9uIG91ciB3YXkgdXAuXG4gICAgdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XSA9IHByZXZpb3VzVmFsdWU7XG4gICAge1xuICAgICAgLy8gT25seSB1c2VkIGZvciBwdXNoL3BvcCBtaXNtYXRjaCB3YXJuaW5ncy5cbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdID0gcHJvdmlkZXI7XG4gICAgfVxuXG4gICAgLy8gTXV0YXRlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgIGNvbnRleHRbdGhyZWFkSURdID0gcHJvdmlkZXIucHJvcHMudmFsdWU7XG4gIH07XG5cbiAgUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGUucG9wUHJvdmlkZXIgPSBmdW5jdGlvbiBwb3BQcm92aWRlcihwcm92aWRlcikge1xuICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4O1xuICAgIHtcbiAgICAgICEoaW5kZXggPiAtMSAmJiBwcm92aWRlciA9PT0gdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0pID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnVW5leHBlY3RlZCBwb3AuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRTdGFja1tpbmRleF07XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XTtcblxuICAgIC8vIFwiSGlkZVwiIHRoZXNlIG51bGwgYXNzaWdubWVudHMgZnJvbSBGbG93IGJ5IHVzaW5nIGBhbnlgXG4gICAgLy8gYmVjYXVzZSBjb25jZXB0dWFsbHkgdGhleSBhcmUgZGVsZXRpb25zLS1hcyBsb25nIGFzIHdlXG4gICAgLy8gcHJvbWlzZSB0byBuZXZlciBhY2Nlc3MgdmFsdWVzIGJleW9uZCBgdGhpcy5jb250ZXh0SW5kZXhgLlxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBudWxsO1xuICAgIHtcbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0SW5kZXgtLTtcblxuICAgIC8vIFJlc3RvcmUgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHdlIHN0b3JlZCBhcyB3ZSB3ZXJlIHdhbGtpbmcgZG93bi5cbiAgICAvLyBXZSd2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhpcyBjb250ZXh0IGhhcyBiZWVuIGV4cGFuZGVkIHRvIGFjY29tbW9kYXRlXG4gICAgLy8gdGhpcyB0aHJlYWQgaWQsIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gaXQgYWdhaW4uXG4gICAgY29udGV4dFt0aGlzLnRocmVhZElEXSA9IHByZXZpb3VzVmFsdWU7XG4gIH07XG5cbiAgUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGUuY2xlYXJQcm92aWRlcnMgPSBmdW5jdGlvbiBjbGVhclByb3ZpZGVycygpIHtcbiAgICAvLyBSZXN0b3JlIGFueSByZW1haW5pbmcgcHJvdmlkZXJzIG9uIHRoZSBzdGFjayB0byBwcmV2aW91cyB2YWx1ZXNcbiAgICBmb3IgKHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICB2YXIgX2NvbnRleHQgPSB0aGlzLmNvbnRleHRTdGFja1tpbmRleF07XG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdO1xuICAgICAgX2NvbnRleHRbdGhpcy50aHJlYWRJRF0gPSBwcmV2aW91c1ZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdERPTVNlcnZlclJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChieXRlcykge1xuICAgIGlmICh0aGlzLmV4aGF1c3RlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHByZXZUaHJlYWRJRCA9IGN1cnJlbnRUaHJlYWRJRDtcbiAgICBzZXRDdXJyZW50VGhyZWFkSUQodGhpcy50aHJlYWRJRCk7XG4gICAgdmFyIHByZXZEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IERpc3BhdGNoZXI7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1hcmt1cCBnZW5lcmF0ZWQgd2l0aGluIDxTdXNwZW5zZT4gZW5kcyB1cCBidWZmZXJlZCB1bnRpbCB3ZSBrbm93XG4gICAgICAvLyBub3RoaW5nIGluIHRoYXQgYm91bmRhcnkgc3VzcGVuZGVkXG4gICAgICB2YXIgb3V0ID0gWycnXTtcbiAgICAgIHZhciBzdXNwZW5kZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlIChvdXRbMF0ubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChzdXNwZW5kZWQgfHwgZnJhbWUuY2hpbGRJbmRleCA+PSBmcmFtZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgX2Zvb3RlciA9IGZyYW1lLmZvb3RlcjtcbiAgICAgICAgICBpZiAoX2Zvb3RlciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChmcmFtZS50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZnJhbWUudHlwZSAhPSBudWxsICYmIGZyYW1lLnR5cGUudHlwZSAhPSBudWxsICYmIGZyYW1lLnR5cGUudHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZnJhbWUudHlwZTtcbiAgICAgICAgICAgIHRoaXMucG9wUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZnJhbWUudHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSkge1xuICAgICAgICAgICAgdGhpcy5zdXNwZW5zZURlcHRoLS07XG4gICAgICAgICAgICB2YXIgYnVmZmVyZWQgPSBvdXQucG9wKCk7XG5cbiAgICAgICAgICAgIGlmIChzdXNwZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VzcGVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIElmIHJlbmRlcmluZyB3YXMgc3VzcGVuZGVkIGF0IHRoaXMgYm91bmRhcnksIHJlbmRlciB0aGUgZmFsbGJhY2tGcmFtZVxuICAgICAgICAgICAgICB2YXIgX2ZhbGxiYWNrRnJhbWUgPSBmcmFtZS5mYWxsYmFja0ZyYW1lO1xuICAgICAgICAgICAgICAhX2ZhbGxiYWNrRnJhbWUgPyBpbnZhcmlhbnQoZmFsc2UsICdzdXNwZW5zZSBmYWxsYmFjayBub3QgZm91bmQsIHNvbWV0aGluZyBpcyBicm9rZW4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mYWxsYmFja0ZyYW1lKTtcbiAgICAgICAgICAgICAgLy8gU2tpcCBmbHVzaGluZyBvdXRwdXQgc2luY2Ugd2UncmUgc3dpdGNoaW5nIHRvIHRoZSBmYWxsYmFja1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IGJ1ZmZlcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZsdXNoIG91dHB1dFxuICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IF9mb290ZXI7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkID0gZnJhbWUuY2hpbGRyZW5bZnJhbWUuY2hpbGRJbmRleCsrXTtcblxuICAgICAgICB2YXIgb3V0QnVmZmVyID0gJyc7XG4gICAgICAgIHtcbiAgICAgICAgICBwdXNoQ3VycmVudERlYnVnU3RhY2sodGhpcy5zdGFjayk7XG4gICAgICAgICAgLy8gV2UncmUgc3RhcnRpbmcgd29yayBvbiB0aGlzIGZyYW1lLCBzbyByZXNldCBpdHMgaW5uZXIgc3RhY2suXG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIG91dEJ1ZmZlciArPSB0aGlzLnJlbmRlcihjaGlsZCwgZnJhbWUuY29udGV4dCwgZnJhbWUuZG9tTmFtZXNwYWNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIgJiYgdHlwZW9mIGVyci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdXNwZW5kZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvcEN1cnJlbnREZWJ1Z1N0YWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvdXQubGVuZ3RoIDw9IHRoaXMuc3VzcGVuc2VEZXB0aCkge1xuICAgICAgICAgIG91dC5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBvdXRCdWZmZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0WzBdO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2RGlzcGF0Y2hlcjtcbiAgICAgIHNldEN1cnJlbnRUaHJlYWRJRChwcmV2VGhyZWFkSUQpO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdERPTVNlcnZlclJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2hpbGQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyBjaGlsZDtcbiAgICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tYWtlU3RhdGljTWFya3VwKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuICc8IS0tIC0tPicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IHRydWU7XG4gICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0Q2hpbGQgPSB2b2lkIDA7XG5cbiAgICAgIHZhciBfcmVzb2x2ZSA9IHJlc29sdmUoY2hpbGQsIGNvbnRleHQsIHRoaXMudGhyZWFkSUQpO1xuXG4gICAgICBuZXh0Q2hpbGQgPSBfcmVzb2x2ZS5jaGlsZDtcbiAgICAgIGNvbnRleHQgPSBfcmVzb2x2ZS5jb250ZXh0O1xuXG4gICAgICBpZiAobmV4dENoaWxkID09PSBudWxsIHx8IG5leHRDaGlsZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobmV4dENoaWxkKSkge1xuICAgICAgICBpZiAobmV4dENoaWxkICE9IG51bGwgJiYgbmV4dENoaWxkLiQkdHlwZW9mICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBDYXRjaCB1bmV4cGVjdGVkIHNwZWNpYWwgdHlwZXMgZWFybHkuXG4gICAgICAgICAgdmFyICQkdHlwZW9mID0gbmV4dENoaWxkLiQkdHlwZW9mO1xuICAgICAgICAgICEoJCR0eXBlb2YgIT09IFJFQUNUX1BPUlRBTF9UWVBFKSA/IGludmFyaWFudChmYWxzZSwgJ1BvcnRhbHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIgcmVuZGVyZXIuIFJlbmRlciB0aGVtIGNvbmRpdGlvbmFsbHkgc28gdGhhdCB0aGV5IG9ubHkgYXBwZWFyIG9uIHRoZSBjbGllbnQgcmVuZGVyLicpIDogdm9pZCAwO1xuICAgICAgICAgIC8vIENhdGNoLWFsbCB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AgaWYgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSgpIHN1cHBvcnRzIHNvbWUgbmV3IHR5cGUuXG4gICAgICAgICAgaW52YXJpYW50KGZhbHNlLCAnVW5rbm93biBlbGVtZW50LWxpa2Ugb2JqZWN0IHR5cGU6ICVzLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJywgJCR0eXBlb2YudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkKTtcbiAgICAgICAgdmFyIGZyYW1lID0ge1xuICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgY2hpbGRyZW46IG5leHRDaGlsZHJlbixcbiAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB7XG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goZnJhbWUpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICAvLyBTYWZlIGJlY2F1c2Ugd2UganVzdCBjaGVja2VkIGl0J3MgYW4gZWxlbWVudC5cbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IG5leHRFbGVtZW50LnR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRPTShuZXh0RWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlbGVtZW50VHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuID0gdG9BcnJheShuZXh0Q2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdmFyIF9mcmFtZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuLFxuICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWUpO1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IG5leHRDaGlsZC5wcm9wcy5mYWxsYmFjaztcbiAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBmYWxsYmFjaywgdGhlbiB0aGlzIGp1c3QgYmVoYXZlcyBhcyBhIGZyYWdtZW50LlxuICAgICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuMyA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lMyA9IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuMyxcbiAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lMy5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lMyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmYWxsYmFja0NoaWxkcmVuID0gdG9BcnJheShmYWxsYmFjayk7XG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuMiA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgdmFyIF9mYWxsYmFja0ZyYW1lMiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBmYWxsYmFja0NoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnLFxuICAgICAgICAgICAgICAgIG91dDogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTIgPSB7XG4gICAgICAgICAgICAgICAgZmFsbGJhY2tGcmFtZTogX2ZhbGxiYWNrRnJhbWUyLFxuICAgICAgICAgICAgICAgIHR5cGU6IFJFQUNUX1NVU1BFTlNFX1RZUEUsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW4yLFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICc8IS0tLyQtLT4nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWUyLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgICAgX2ZhbGxiYWNrRnJhbWUyLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTIpO1xuICAgICAgICAgICAgICB0aGlzLnN1c3BlbnNlRGVwdGgrKztcbiAgICAgICAgICAgICAgcmV0dXJuICc8IS0tJC0tPic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBTdXNwZW5zZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50VHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuNCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICAgICAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSBlbGVtZW50VHlwZS5yZW5kZXIoZWxlbWVudC5wcm9wcywgZWxlbWVudC5yZWYpO1xuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNCA9IGZpbmlzaEhvb2tzKGVsZW1lbnRUeXBlLnJlbmRlciwgZWxlbWVudC5wcm9wcywgX25leHRDaGlsZHJlbjQsIGVsZW1lbnQucmVmKTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSB0b0FycmF5KF9uZXh0Q2hpbGRyZW40KTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjQsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTQuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50ID0gbmV4dENoaWxkO1xuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjUgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZS50eXBlLCBfYXNzaWduKHsgcmVmOiBfZWxlbWVudC5yZWYgfSwgX2VsZW1lbnQucHJvcHMpKV07XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU1ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW41LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU1LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTUpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBuZXh0UHJvcHMgPSBwcm92aWRlci5wcm9wcztcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW42ID0gdG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjYsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTYuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHVzaFByb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNik7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIHJlYWN0Q29udGV4dCA9IG5leHRDaGlsZC50eXBlO1xuICAgICAgICAgICAgICAvLyBUaGUgbG9naWMgYmVsb3cgZm9yIENvbnRleHQgZGlmZmVycyBkZXBlbmRpbmcgb24gUFJPRCBvciBERVYgbW9kZS4gSW5cbiAgICAgICAgICAgICAgLy8gREVWIG1vZGUsIHdlIGNyZWF0ZSBhIHNlcGFyYXRlIG9iamVjdCBmb3IgQ29udGV4dC5Db25zdW1lciB0aGF0IGFjdHNcbiAgICAgICAgICAgICAgLy8gbGlrZSBhIHByb3h5IHRvIENvbnRleHQuIFRoaXMgcHJveHkgb2JqZWN0IGFkZHMgdW5uZWNlc3NhcnkgY29kZSBpbiBQUk9EXG4gICAgICAgICAgICAgIC8vIHNvIHdlIHVzZSB0aGUgb2xkIGJlaGF2aW91ciAoQ29udGV4dC5Db25zdW1lciByZWZlcmVuY2VzIENvbnRleHQpIHRvXG4gICAgICAgICAgICAgIC8vIHJlZHVjZSBzaXplIGFuZCBvdmVyaGVhZC4gVGhlIHNlcGFyYXRlIG9iamVjdCByZWZlcmVuY2VzIGNvbnRleHQgdmlhXG4gICAgICAgICAgICAgIC8vIGEgcHJvcGVydHkgY2FsbGVkIFwiX2NvbnRleHRcIiwgd2hpY2ggYWxzbyBnaXZlcyB1cyB0aGUgYWJpbGl0eSB0byBjaGVja1xuICAgICAgICAgICAgICAvLyBpbiBERVYgbW9kZSBpZiB0aGlzIHByb3BlcnR5IGV4aXN0cyBvciBub3QgYW5kIHdhcm4gaWYgaXQgZG9lcyBub3QuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocmVhY3RDb250ZXh0Ll9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbWF5IGJlIGJlY2F1c2UgaXQncyBhIENvbnRleHQgKHJhdGhlciB0aGFuIGEgQ29uc3VtZXIpLlxuICAgICAgICAgICAgICAgICAgLy8gT3IgaXQgbWF5IGJlIGJlY2F1c2UgaXQncyBvbGRlciBSZWFjdCB3aGVyZSB0aGV5J3JlIHRoZSBzYW1lIHRoaW5nLlxuICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHdhcm4gaWYgd2UncmUgc3VyZSBpdCdzIGEgbmV3IFJlYWN0LlxuICAgICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29udGV4dCAhPT0gcmVhY3RDb250ZXh0LkNvbnN1bWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQ+IGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVhY3RDb250ZXh0ID0gcmVhY3RDb250ZXh0Ll9jb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgX25leHRQcm9wcyA9IG5leHRDaGlsZC5wcm9wcztcbiAgICAgICAgICAgICAgdmFyIHRocmVhZElEID0gdGhpcy50aHJlYWRJRDtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKHJlYWN0Q29udGV4dCwgdGhyZWFkSUQpO1xuICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gcmVhY3RDb250ZXh0W3RocmVhZElEXTtcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjcgPSB0b0FycmF5KF9uZXh0UHJvcHMuY2hpbGRyZW4obmV4dFZhbHVlKSk7XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU3ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG5leHRDaGlsZCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjcsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTcuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgJ1JlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IGxhenktbG9hZGVkIGNvbXBvbmVudHMuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSAnJztcbiAgICAgIHtcbiAgICAgICAgdmFyIG93bmVyID0gbmV4dEVsZW1lbnQuX293bmVyO1xuICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdvYmplY3QnICYmIGVsZW1lbnRUeXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKGVsZW1lbnRUeXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBcIiArICduYW1lZCBpbXBvcnRzLic7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IG93bmVyID8gZ2V0Q29tcG9uZW50TmFtZShvd25lcikgOiBudWxsO1xuICAgICAgICBpZiAob3duZXJOYW1lKSB7XG4gICAgICAgICAgaW5mbyArPSAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBvd25lck5hbWUgKyAnYC4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdFbGVtZW50IHR5cGUgaXMgaW52YWxpZDogZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciBidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlIGNvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgZWxlbWVudFR5cGUgPT0gbnVsbCA/IGVsZW1lbnRUeXBlIDogdHlwZW9mIGVsZW1lbnRUeXBlLCBpbmZvKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyRE9NID0gZnVuY3Rpb24gcmVuZGVyRE9NKGVsZW1lbnQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIHZhciB0YWcgPSBlbGVtZW50LnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHZhciBuYW1lc3BhY2UgPSBwYXJlbnROYW1lc3BhY2U7XG4gICAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gTmFtZXNwYWNlcy5odG1sKSB7XG4gICAgICBuYW1lc3BhY2UgPSBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodGFnKTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAobmFtZXNwYWNlID09PSBOYW1lc3BhY2VzLmh0bWwpIHtcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgY2hlY2sgYmUgZ2F0ZWQgYnkgcGFyZW50IG5hbWVzcGFjZT8gTm90IHN1cmUgd2Ugd2FudCB0b1xuICAgICAgICAvLyBhbGxvdyA8U1ZHPiBvciA8bUFUSD4uXG4gICAgICAgICEodGFnID09PSBlbGVtZW50LnR5cGUpID8gd2FybmluZyQxKGZhbHNlLCAnPCVzIC8+IGlzIHVzaW5nIGluY29ycmVjdCBjYXNpbmcuICcgKyAnVXNlIFBhc2NhbENhc2UgZm9yIFJlYWN0IGNvbXBvbmVudHMsICcgKyAnb3IgbG93ZXJjYXNlIGZvciBIVE1MIGVsZW1lbnRzLicsIGVsZW1lbnQudHlwZSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKTtcblxuICAgIHZhciBwcm9wcyA9IGVsZW1lbnQucHJvcHM7XG4gICAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xuICAgICAge1xuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygnaW5wdXQnLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLmNoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdENoZWNrZWQpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCBjaGVja2VkIGFuZCBkZWZhdWx0Q2hlY2tlZCBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgY2hlY2tlZCBwcm9wLCBvciB0aGUgZGVmYXVsdENoZWNrZWQgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnJXMgY29udGFpbnMgYW4gaW5wdXQgb2YgdHlwZSAlcyB3aXRoIGJvdGggdmFsdWUgYW5kIGRlZmF1bHRWYWx1ZSBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgaW5wdXQgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnLCAnQSBjb21wb25lbnQnLCBwcm9wcy50eXBlKTtcbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb3BzID0gX2Fzc2lnbih7XG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSAhPSBudWxsID8gcHJvcHMudmFsdWUgOiBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgIT0gbnVsbCA/IHByb3BzLmNoZWNrZWQgOiBwcm9wcy5kZWZhdWx0Q2hlY2tlZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHtcbiAgICAgICAgUmVhY3RDb250cm9sbGVkVmFsdWVQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoJ3RleHRhcmVhJywgcHJvcHMpO1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnVGV4dGFyZWEgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIHRleHRhcmVhICcgKyAnYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50cycpO1xuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgaWYgKGluaXRpYWxWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIC8vIFRPRE8gKHl1bmdzdGVycyk6IFJlbW92ZSBzdXBwb3J0IGZvciBjaGlsZHJlbiBjb250ZW50IGluIDx0ZXh0YXJlYT4uXG4gICAgICAgIHZhciB0ZXh0YXJlYUNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIGlmICh0ZXh0YXJlYUNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdVc2UgdGhlIGBkZWZhdWx0VmFsdWVgIG9yIGB2YWx1ZWAgcHJvcHMgaW5zdGVhZCBvZiBzZXR0aW5nICcgKyAnY2hpbGRyZW4gb24gPHRleHRhcmVhPi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgIShkZWZhdWx0VmFsdWUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdJZiB5b3Ugc3VwcGx5IGBkZWZhdWx0VmFsdWVgIG9uIGEgPHRleHRhcmVhPiwgZG8gbm90IHBhc3MgY2hpbGRyZW4uJykgOiB2b2lkIDA7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dGFyZWFDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICEodGV4dGFyZWFDaGlsZHJlbi5sZW5ndGggPD0gMSkgPyBpbnZhcmlhbnQoZmFsc2UsICc8dGV4dGFyZWE+IGNhbiBvbmx5IGhhdmUgYXQgbW9zdCBvbmUgY2hpbGQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICB0ZXh0YXJlYUNoaWxkcmVuID0gdGV4dGFyZWFDaGlsZHJlblswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyArIHRleHRhcmVhQ2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wcyA9IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkcmVuOiAnJyArIGluaXRpYWxWYWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICB7XG4gICAgICAgIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCdzZWxlY3QnLCBwcm9wcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZVByb3BOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwcm9wTmFtZSA9IHZhbHVlUHJvcE5hbWVzW2ldO1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAmJiAhaXNBcnJheSkge1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGFuIGFycmF5IGlmICcgKyAnYG11bHRpcGxlYCBpcyB0cnVlLicsIHByb3BOYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9wcy5tdWx0aXBsZSAmJiBpc0FycmF5KSB7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYSBzY2FsYXIgJyArICd2YWx1ZSBpZiBgbXVsdGlwbGVgIGlzIGZhbHNlLicsIHByb3BOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1NlbGVjdCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgc2VsZWN0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJyk7XG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ29wdGlvbicpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IG51bGw7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBvcHRpb25DaGlsZHJlbiA9IGZsYXR0ZW5PcHRpb25DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgICBpZiAoc2VsZWN0VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSArICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gb3B0aW9uQ2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGVcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdFZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoJycgKyBzZWxlY3RWYWx1ZVtqXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSAnJyArIHNlbGVjdFZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0gX2Fzc2lnbih7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkXG4gICAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgICAgIGNoaWxkcmVuOiBvcHRpb25DaGlsZHJlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50KHRhZywgcHJvcHMpO1xuICAgIH1cblxuICAgIGFzc2VydFZhbGlkUHJvcHModGFnLCBwcm9wcyk7XG5cbiAgICB2YXIgb3V0ID0gY3JlYXRlT3BlblRhZ01hcmt1cChlbGVtZW50LnR5cGUsIHRhZywgcHJvcHMsIG5hbWVzcGFjZSwgdGhpcy5tYWtlU3RhdGljTWFya3VwLCB0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMSk7XG4gICAgdmFyIGZvb3RlciA9ICcnO1xuICAgIGlmIChvbWl0dGVkQ2xvc2VUYWdzLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICAgIG91dCArPSAnLz4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgKz0gJz4nO1xuICAgICAgZm9vdGVyID0gJzwvJyArIGVsZW1lbnQudHlwZSArICc+JztcbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gdm9pZCAwO1xuICAgIHZhciBpbm5lck1hcmt1cCA9IGdldE5vbkNoaWxkcmVuSW5uZXJNYXJrdXAocHJvcHMpO1xuICAgIGlmIChpbm5lck1hcmt1cCAhPSBudWxsKSB7XG4gICAgICBjaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKG5ld2xpbmVFYXRpbmdUYWdzW3RhZ10gJiYgaW5uZXJNYXJrdXAuY2hhckF0KDApID09PSAnXFxuJykge1xuICAgICAgICAvLyB0ZXh0L2h0bWwgaWdub3JlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZXNlIHRhZ3MgaWYgaXQncyBhIG5ld2xpbmVcbiAgICAgICAgLy8gUHJlZmVyIHRvIGJyZWFrIGFwcGxpY2F0aW9uL3htbCBvdmVyIHRleHQvaHRtbCAoZm9yIG5vdykgYnkgYWRkaW5nXG4gICAgICAgIC8vIGEgbmV3bGluZSBzcGVjaWZpY2FsbHkgdG8gZ2V0IGVhdGVuIGJ5IHRoZSBwYXJzZXIuIChBbHRlcm5hdGVseSBmb3JcbiAgICAgICAgLy8gdGV4dGFyZWFzLCByZXBsYWNpbmcgXCJeXFxuXCIgd2l0aCBcIlxcclxcblwiIGRvZXNuJ3QgZ2V0IGVhdGVuLCBhbmQgdGhlIGZpcnN0XG4gICAgICAgIC8vIFxcciBpcyBub3JtYWxpemVkIG91dCBieSBIVE1MVGV4dEFyZWFFbGVtZW50I3ZhbHVlLilcbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbC1wb2x5Z2xvdC8jbmV3bGluZXMtaW4tdGV4dGFyZWEtYW5kLXByZT5cbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudC1yZXN0cmljdGlvbnM+XG4gICAgICAgIC8vIFNlZTogPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI25ld2xpbmVzPlxuICAgICAgICAvLyBTZWU6IFBhcnNpbmcgb2YgXCJ0ZXh0YXJlYVwiIFwibGlzdGluZ1wiIGFuZCBcInByZVwiIGVsZW1lbnRzXG4gICAgICAgIC8vICBmcm9tIDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5PlxuICAgICAgICBvdXQgKz0gJ1xcbic7XG4gICAgICB9XG4gICAgICBvdXQgKz0gaW5uZXJNYXJrdXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVuID0gdG9BcnJheShwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICAgIHZhciBmcmFtZSA9IHtcbiAgICAgIGRvbU5hbWVzcGFjZTogZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCBlbGVtZW50LnR5cGUpLFxuICAgICAgdHlwZTogdGFnLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBmb290ZXI6IGZvb3RlclxuICAgIH07XG4gICAge1xuICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zdGFjay5wdXNoKGZyYW1lKTtcbiAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIHJldHVybiBSZWFjdERPTVNlcnZlclJlbmRlcmVyO1xufSgpO1xuXG4vKipcbiAqIFJlbmRlciBhIFJlYWN0RWxlbWVudCB0byBpdHMgaW5pdGlhbCBIVE1MLiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gdGhlXG4gKiBzZXJ2ZXIuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS1zZXJ2ZXIuaHRtbCNyZW5kZXJ0b3N0cmluZ1xuICovXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyhlbGVtZW50KSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgdHJ5IHtcbiAgICB2YXIgbWFya3VwID0gcmVuZGVyZXIucmVhZChJbmZpbml0eSk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfSBmaW5hbGx5IHtcbiAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIHJlbmRlclRvU3RyaW5nLCBleGNlcHQgdGhpcyBkb2Vzbid0IGNyZWF0ZSBleHRyYSBET00gYXR0cmlidXRlc1xuICogc3VjaCBhcyBkYXRhLXJlYWN0LWlkIHRoYXQgUmVhY3QgdXNlcyBpbnRlcm5hbGx5LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdGF0aWNtYXJrdXBcbiAqL1xuZnVuY3Rpb24gcmVuZGVyVG9TdGF0aWNNYXJrdXAoZWxlbWVudCkge1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihlbGVtZW50LCB0cnVlKTtcbiAgdHJ5IHtcbiAgICB2YXIgbWFya3VwID0gcmVuZGVyZXIucmVhZChJbmZpbml0eSk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfSBmaW5hbGx5IHtcbiAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrJDEoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIFRoaXMgaXMgYSBSZWFkYWJsZSBOb2RlLmpzIHN0cmVhbSB3aGljaCB3cmFwcyB0aGUgUmVhY3RET01QYXJ0aWFsUmVuZGVyZXIuXG5cbnZhciBSZWFjdE1hcmt1cFJlYWRhYmxlU3RyZWFtID0gZnVuY3Rpb24gKF9SZWFkYWJsZSkge1xuICBfaW5oZXJpdHMoUmVhY3RNYXJrdXBSZWFkYWJsZVN0cmVhbSwgX1JlYWRhYmxlKTtcblxuICBmdW5jdGlvbiBSZWFjdE1hcmt1cFJlYWRhYmxlU3RyZWFtKGVsZW1lbnQsIG1ha2VTdGF0aWNNYXJrdXApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBSZWFjdE1hcmt1cFJlYWRhYmxlU3RyZWFtKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFkYWJsZS5jYWxsKHRoaXMsIHt9KSk7XG4gICAgLy8gQ2FsbHMgdGhlIHN0cmVhbS5SZWFkYWJsZShvcHRpb25zKSBjb25zdHJ1Y3Rvci4gQ29uc2lkZXIgZXhwb3NpbmcgYnVpbHQtaW5cbiAgICAvLyBmZWF0dXJlcyBsaWtlIGhpZ2hXYXRlck1hcmsgaW4gdGhlIGZ1dHVyZS5cblxuXG4gICAgX3RoaXMucGFydGlhbFJlbmRlcmVyID0gbmV3IFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoZWxlbWVudCwgbWFrZVN0YXRpY01hcmt1cCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUmVhY3RNYXJrdXBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBfZGVzdHJveShlcnIsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5wYXJ0aWFsUmVuZGVyZXIuZGVzdHJveSgpO1xuICAgIGNhbGxiYWNrKGVycik7XG4gIH07XG5cbiAgUmVhY3RNYXJrdXBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiBfcmVhZChzaXplKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHVzaCh0aGlzLnBhcnRpYWxSZW5kZXJlci5yZWFkKHNpemUpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdHJveShlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUmVhY3RNYXJrdXBSZWFkYWJsZVN0cmVhbTtcbn0oc3RyZWFtLlJlYWRhYmxlKTtcbi8qKlxuICogUmVuZGVyIGEgUmVhY3RFbGVtZW50IHRvIGl0cyBpbml0aWFsIEhUTUwuIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbiB0aGVcbiAqIHNlcnZlci5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLXNlcnZlci5odG1sI3JlbmRlcnRvbm9kZXN0cmVhbVxuICovXG5cblxuZnVuY3Rpb24gcmVuZGVyVG9Ob2RlU3RyZWFtKGVsZW1lbnQpIHtcbiAgcmV0dXJuIG5ldyBSZWFjdE1hcmt1cFJlYWRhYmxlU3RyZWFtKGVsZW1lbnQsIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIHJlbmRlclRvTm9kZVN0cmVhbSwgZXhjZXB0IHRoaXMgZG9lc24ndCBjcmVhdGUgZXh0cmEgRE9NIGF0dHJpYnV0ZXNcbiAqIHN1Y2ggYXMgZGF0YS1yZWFjdC1pZCB0aGF0IFJlYWN0IHVzZXMgaW50ZXJuYWxseS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLXNlcnZlci5odG1sI3JlbmRlcnRvc3RhdGljbm9kZXN0cmVhbVxuICovXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oZWxlbWVudCkge1xuICByZXR1cm4gbmV3IFJlYWN0TWFya3VwUmVhZGFibGVTdHJlYW0oZWxlbWVudCwgdHJ1ZSk7XG59XG5cbi8vIE5vdGU6IHdoZW4gY2hhbmdpbmcgdGhpcywgYWxzbyBjb25zaWRlciBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNTI2XG52YXIgUmVhY3RET01TZXJ2ZXJOb2RlID0ge1xuICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXG4gIHJlbmRlclRvU3RhdGljTWFya3VwOiByZW5kZXJUb1N0YXRpY01hcmt1cCxcbiAgcmVuZGVyVG9Ob2RlU3RyZWFtOiByZW5kZXJUb05vZGVTdHJlYW0sXG4gIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbTogcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtLFxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb25cbn07XG5cbnZhciBSZWFjdERPTVNlcnZlck5vZGUkMSA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdERPTVNlcnZlck5vZGVcbn0pO1xuXG52YXIgUmVhY3RET01TZXJ2ZXIgPSAoIFJlYWN0RE9NU2VydmVyTm9kZSQxICYmIFJlYWN0RE9NU2VydmVyTm9kZSApIHx8IFJlYWN0RE9NU2VydmVyTm9kZSQxO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdFxudmFyIHNlcnZlcl9ub2RlID0gUmVhY3RET01TZXJ2ZXIuZGVmYXVsdCB8fCBSZWFjdERPTVNlcnZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXJfbm9kZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NlcnZlci5ub2RlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5ub2RlLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIubm9kZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi44LjYnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcblxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxudmFyIFJlc29sdmVkID0gMTtcblxuXG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyAnKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnQ29uY3VycmVudE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG57XG4gIC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnO1xuXG4gICAgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9XG5cbiAgICAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IHdhcm5pbmdXaXRob3V0U3RhY2skMTtcblxue1xuICB3YXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3dhcm5pbmctYW5kLWludmFyaWFudC1hcmdzXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMS5hcHBseSh1bmRlZmluZWQsIFtmYWxzZSwgZm9ybWF0ICsgJyVzJ10uY29uY2F0KGFyZ3MsIFtzdGFja10pKTtcbiAgfTtcbn1cblxudmFyIHdhcm5pbmckMSA9IHdhcm5pbmc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHZvaWQgMDtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHZvaWQgMDtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAhIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDA7XG4gIHZhciBuZXh0TmFtZSA9IHZvaWQgMDtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyQxKGZhbHNlLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gICFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9O1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIHZhciBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7XG4gICAgICAgICAgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcbiAgIShkaXNwYXRjaGVyICE9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgICEodW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQpID8gd2FybmluZyQxKGZhbHNlLCAndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJykgOiB2b2lkIDA7XG5cbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRGVidWdWYWx1ZTogdXNlRGVidWdWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIHVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOiBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSxcbiAgdW5zdGFibGVfUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG4vLyBOb3RlOiBzb21lIEFQSXMgYXJlIGFkZGVkIHdpdGggZmVhdHVyZSBmbGFncy5cbi8vIE1ha2Ugc3VyZSB0aGF0IHN0YWJsZSBidWlsZHMgZm9yIG9wZW4gc291cmNlXG4vLyBkb24ndCBtb2RpZnkgdGhlIFJlYWN0IG9iamVjdCB0byBhdm9pZCBkZW9wdHMuXG4vLyBBbHNvIGxldCdzIG5vdCBleHBvc2UgdGhlaXIgbmFtZXMgaW4gc3RhYmxlIGJ1aWxkcy5cblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gdW5kZWZpbmVkO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IHVuZGVmaW5lZDtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCB8fCBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCwgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgU3dpdGNoLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgQXBwLCB7IEFCQyB9IGZyb20gJ3dlYi1jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCB7XG4gIElBV1NBUElHYXRld2F5QVdTUHJveHlFdmVudCxcbiAgSUFXU0xhbWJkYUNvbnRleHQsXG4gIElBV1NBUElHYXRld2F5UmVzcG9uc2Vcbn0gZnJvbSAnY29tbW9uL3NyYy90eXBlcy9hd3MvbGFtYmRhJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIGV2ZW50OiBJQVdTQVBJR2F0ZXdheUFXU1Byb3h5RXZlbnQsXG4gIGNvbnRleHQ6IElBV1NMYW1iZGFDb250ZXh0XG4pOiBQcm9taXNlPElBV1NBUElHYXRld2F5UmVzcG9uc2U+IHtcbiAgaWYgKGV2ZW50Lmh0dHBNZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGU6IDQwNSxcbiAgICAgIGJvZHk6ICdNZXRob2QgTm90IEFsbG93ZWQnXG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ3BhdGgnLCBldmVudC5wYXRoKTtcbiAgY29uc29sZS5sb2coJ2JvZHknLCBldmVudC5ib2R5KTtcblxuICAvLyBUT0RPOiBwcmVwYXJlIHdpdGggcXVlcnkgcGFyYW1zJmhhc2hcbiAgY29uc3QgbG9jYXRpb24gPSBldmVudC5wYXRoO1xuICBjb25zdCBzdGF0aWNSb3V0ZXJDb250ZXh0ID0ge307XG4gIGNvbnN0IGFwcEh0bWwgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0gY29udGV4dD17c3RhdGljUm91dGVyQ29udGV4dH0+XG4gICAgICA8QUJDIC8+XG4gICAgPC9TdGF0aWNSb3V0ZXI+XG4gICk7XG4gIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcblxuICBjb25zdCBib2R5ID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgPGh0bWwgey4uLmhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpfT5cbiAgICAgIDxoZWFkPlxuICAgICAgICB7aGVsbWV0LnRpdGxlLnRvQ29tcG9uZW50KCl9XG4gICAgICAgIHtoZWxtZXQubWV0YS50b0NvbXBvbmVudCgpfVxuICAgICAgICB7aGVsbWV0LmxpbmsudG9Db21wb25lbnQoKX1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IHsuLi5oZWxtZXQuYm9keUF0dHJpYnV0ZXMudG9Db21wb25lbnQoKX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cInJvb3RcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXBwSHRtbCB9fVxuICAgICAgICAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5XG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==