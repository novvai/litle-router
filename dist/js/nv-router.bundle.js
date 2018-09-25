(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NvRouter"] = factory();
	else
		root["NvRouter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/base-router.js":
/*!*******************************!*\
  !*** ./source/base-router.js ***!
  \*******************************/
/*! exports provided: BaseRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseRouter\", function() { return BaseRouter; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./source/helpers.js\");\n/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page */ \"./source/error-page.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BaseRouter =\n/*#__PURE__*/\nfunction () {\n  function BaseRouter() {\n    _classCallCheck(this, BaseRouter);\n\n    this.bootstrap();\n  }\n\n  _createClass(BaseRouter, [{\n    key: \"bootstrap\",\n    value: function bootstrap() {\n      var _this = this;\n\n      this.links = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"e_l\"])('a[_href]');\n      this.handlerClasses = {\n        ErrorPage: _error_page__WEBPACK_IMPORTED_MODULE_1__[\"ErrorPage\"]\n      };\n      this.routes = [{\n        path: 'not-found',\n        func: 'ErrorPage'\n      }];\n      this.prepareBrowser();\n      this.links.forEach(function (element) {\n        element.addEventListener('click', _this.stopAll);\n        element.addEventListener('click', _this.invokeStateChange.bind(_this));\n      });\n    }\n    /**\n     * Merge the default routes with custom routes\n     * \n     * @param {Array} routes \n     * @returns self\n     */\n\n  }, {\n    key: \"registerRoutes\",\n    value: function registerRoutes(routes) {\n      this.routes = this.routes.concat(routes);\n      return this;\n    }\n    /**\n    * Initial loading of the router\n    */\n\n  }, {\n    key: \"load\",\n    value: function load() {\n      this.updateState(window.location.pathname);\n      return this;\n    }\n    /**\n     * Merge the default controllers with custom cuntrollers\n     * \n     * @param {Object} controllers \n     * @returns self\n     */\n\n  }, {\n    key: \"registerControllers\",\n    value: function registerControllers(controllers) {\n      this.handlerClasses = Object.assign({}, this.handlerClasses, controllers);\n      return this;\n    }\n    /**\n     * Prevents the default behavior of browser <a> tag\n     * \n     * @param {MouseEvent} e \n     */\n\n  }, {\n    key: \"stopAll\",\n    value: function stopAll(e) {\n      e.stopPropagation();\n      e.preventDefault();\n    }\n    /**\n     * Callback function for addEventListener attaching custom behaviour for <a> tags\n     * \n     * @param {MouseEvent} e \n     */\n\n  }, {\n    key: \"invokeStateChange\",\n    value: function invokeStateChange(e) {\n      this.updateState(e.currentTarget.getAttribute('_href'));\n    }\n    /**\n     * Push custom state to the history window object, simulating new page opening\n     * \n     * @param {string} state \n     */\n\n  }, {\n    key: \"updateState\",\n    value: function updateState(state) {\n      history.pushState(null, '', \"//\".concat(window.location.host, \"/\").concat(this.normalizeRoute(state)));\n      window.dispatchEvent(new Event('nv-route-change'));\n    }\n    /**\n     * Attaches Listener to the window object\n     * Listening for route change\n     */\n\n  }, {\n    key: \"prepareBrowser\",\n    value: function prepareBrowser() {\n      window.addEventListener('nv-route-change', this.iniRouteChange.bind(this));\n    }\n    /**\n     * Callback fetching needed information about the functionality of the route\n     * executing the route handler\n     * \n     * @param {Event} event \n     */\n\n  }, {\n    key: \"iniRouteChange\",\n    value: function iniRouteChange(event) {\n      var route = this.normalizeRoute(window.location.pathname);\n      var controller = this.findRoute(route);\n\n      try {\n        controller = this.handleController(controller);\n      } catch (e) {\n        return;\n      }\n\n      this.execute(controller);\n    }\n    /**\n     * @param {string} route \n     */\n\n  }, {\n    key: \"findRoute\",\n    value: function findRoute(route) {\n      var result = null;\n      this.routes.forEach(function (rEntry) {\n        if (rEntry.path == route) {\n          result = Object.assign({}, rEntry);\n        }\n      });\n\n      if (result === null) {\n        return this.defaultRoute();\n      }\n\n      return result;\n    }\n    /**\n     * String normalizer, currently removing the \"/\" from the route\n     * \n     * @param {string} route \n     */\n\n  }, {\n    key: \"normalizeRoute\",\n    value: function normalizeRoute(route) {\n      var result = route[0] == '/' ? route.substr(1) : route;\n      return result;\n    }\n    /**\n     * Default route redirect if the route \n     * that has been requested was not found inside the registered routes\n     */\n\n  }, {\n    key: \"defaultRoute\",\n    value: function defaultRoute() {\n      this.updateState('not-found');\n    }\n    /**\n     * Normalizer for the route controller\n     * separating the Class from method and attaching them to the main object\n     * if no method is provided its assumed that there will be |handle()| method\n     * \n     * @param {Object} controller\n     * \n     * @returns Object \n     */\n\n  }, {\n    key: \"handleController\",\n    value: function handleController(controller) {\n      var controllerParts = controller.func.split('@');\n      var controllerObject = {\n        class: controllerParts[0],\n        method: 'handle'\n      };\n\n      if (controllerParts.length == 2) {\n        controllerObject.method = controllerParts[1];\n      }\n\n      return Object.assign({}, controller, controllerObject);\n    }\n    /**\n     * Factory method that will find and initialize class\n     * and invoke the class with given methodima\n     * \n     * @param {Object} controller \n     */\n\n  }, {\n    key: \"execute\",\n    value: function execute(controller) {\n      try {\n        var instance = new this.handlerClasses[controller.class]();\n        return instance[controller.method]();\n      } catch (error) {\n        console.error(\"\".concat(controller.class, \" not found.\"));\n      }\n    }\n  }]);\n\n  return BaseRouter;\n}();\n\n//# sourceURL=webpack://NvRouter/./source/base-router.js?");

/***/ }),

/***/ "./source/error-page.js":
/*!******************************!*\
  !*** ./source/error-page.js ***!
  \******************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorPage\", function() { return ErrorPage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ErrorPage =\n/*#__PURE__*/\nfunction () {\n  function ErrorPage() {\n    _classCallCheck(this, ErrorPage);\n  }\n\n  _createClass(ErrorPage, [{\n    key: \"handle\",\n    value: function handle() {\n      console.log('FOCK');\n    }\n  }]);\n\n  return ErrorPage;\n}();\n\n//# sourceURL=webpack://NvRouter/./source/error-page.js?");

/***/ }),

/***/ "./source/helpers.js":
/*!***************************!*\
  !*** ./source/helpers.js ***!
  \***************************/
/*! exports provided: e, e_l, findIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e_l\", function() { return e_l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIn\", function() { return findIn; });\n/**\n * Retrieve element node from the DOM\n */\nfunction e(selector) {\n  var fetchedDOM = document.querySelectorAll(selector),\n      elemCount = fetchedDOM.length;\n  return elemCount == 1 ? fetchedDOM[0] : elemCount > 1 ? fetchedDOM : null;\n}\n/**\n * @param {string} selector\n * \n * @return {Array} \n */\n\nfunction e_l(selector) {\n  var fetchedDOM = e(selector);\n  return fetchedDOM === null ? [] : fetchedDOM.length == undefined ? [fetchedDOM] : fetchedDOM;\n}\n/**\n * Retrieve element node from the DOM\n */\n\nfunction findIn(el, selector) {\n  var fetchedDOM = el.querySelectorAll(selector),\n      elemCount = fetchedDOM.length;\n  return elemCount == 1 ? fetchedDOM[0] : elemCount > 1 ? fetchedDOM : null;\n}\n\n//# sourceURL=webpack://NvRouter/./source/helpers.js?");

/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-router */ \"./source/base-router.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NvRouter =\n/*#__PURE__*/\nfunction (_BaseRouter) {\n  _inherits(NvRouter, _BaseRouter);\n\n  function NvRouter() {\n    _classCallCheck(this, NvRouter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NvRouter).call(this));\n  }\n\n  return NvRouter;\n}(_base_router__WEBPACK_IMPORTED_MODULE_0__[\"BaseRouter\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NvRouter);\n\n//# sourceURL=webpack://NvRouter/./source/main.js?");

/***/ })

/******/ })["default"];
});