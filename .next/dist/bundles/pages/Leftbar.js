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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var components = {
  multiList: {
    componentId: "genres-list",
    dataField: "genres_data.raw",
    className: "genres-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Genres",
    showCheckbox: true,
    showCount: true,
    showSearch: true,
    placeholder: "Search for a Genre",
    react: {
      and: ["mainSearch", "results", "date-filter", "RangeSlider", "language-list", "revenue-list"]
    },
    showFilter: true,
    filterLabel: "Genre",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  rangeSlider: {
    componentId: "RangeSlider",
    dataField: "vote_average",
    className: "review-filter",
    range: {
      start: 0,
      end: 10
    },
    rangeLabels: {
      start: "0",
      end: "10"
    },
    react: {
      and: ["mainSearch", "results", "language-list", "date-Filter", "genres-list", "revenue-list"]
    }
  },
  dateRange: {
    componentId: "date-filter",
    dataField: "release_date",
    className: "datePicker"
  },
  multiDataList: {
    componentId: "language-list",
    dataField: "original_language.raw",
    className: "language-filter",
    size: 100,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Languages",
    showCheckbox: true,
    showSearch: true,
    placeholder: "Search for a language",
    react: {
      and: ["mainSearch", "results", "date-filter", "RangeSlider", "genres-list", "revenue-list"]
    },
    data: [{
      label: "English",
      value: "English"
    }, {
      label: "Chinese",
      value: "Chinese"
    }, {
      label: "Turkish",
      value: "Turkish"
    }, {
      label: "Swedish",
      value: "Swedish"
    }, {
      label: "Russian",
      value: "Russian"
    }, {
      label: "Portuguese",
      value: "Portuguese"
    }, {
      label: "Korean",
      value: "Korean"
    }, {
      label: "Japanese",
      value: "Japanese"
    }, {
      label: "Italian",
      value: "Italian"
    }, {
      label: "Hindi",
      value: "Hindi"
    }, {
      label: "French",
      value: "French"
    }, {
      label: "Finnish",
      value: "Finnish"
    }, {
      label: "Spanish",
      value: "Spanish"
    }, {
      label: "Deutsch",
      value: "Deutsch"
    }],
    showFilter: true,
    filterLabel: "Language",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  singleRange: {
    componentId: "revenue-list",
    dataField: "ran_revenue",
    className: "revenue-filter",
    data: [{ start: 0, end: 1000, label: "< 1M" }, { start: 1000, end: 10000, label: "1M-10M" }, { start: 10000, end: 500000, label: "10M-500M" }, { start: 500000, end: 1000000, label: "500M-1B" }, { start: 1000000, end: 10000000, label: "> 1B" }],
    showRadio: true,
    showFilter: true,
    filterLabel: "Revenue",
    URLParams: false,
    innerClass: {
      label: "revenue-label",
      radio: "revenue-radio"
    }
  }
};

var Leftbar = function (_Component) {
  _inherits(Leftbar, _Component);

  function Leftbar() {
    _classCallCheck(this, Leftbar);

    return _possibleConstructorReturn(this, (Leftbar.__proto__ || Object.getPrototypeOf(Leftbar)).apply(this, arguments));
  }

  _createClass(Leftbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: this.props.isClicked ? "left-bar-optional" : "left-bar" },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center" },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            null,
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-pied-piper-alt" }),
            " Genres",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default.a, components.multiList),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center" },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            null,
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-dollar" }),
            " Revenue",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default.a, components.singleRange),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center" },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-star" }),
            " Ratings"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a, components.rangeSlider),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center" },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            null,
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-language" }),
            " Languages",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default.a, components.multiDataList),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center" },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            null,
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-calendar" }),
            " Release Date",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default.a, components.dateRange)
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return initReactivesearch([_extends({}, components.multiList, {
                  type: "MultiList",
                  source: __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default.a
                }), _extends({}, components.multiDataList, {
                  type: "MultiDataList",
                  source: __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default.a
                }), _extends({}, components.dateRange, {
                  type: "DateRange",
                  source: __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default.a
                }), _extends({}, components.rangeSlider, {
                  type: "RangeSlider",
                  source: __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a
                }), _extends({}, components.singleRange, {
                  type: "SingleRange",
                  source: __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default.a
                })], null);

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  store: _context.t0
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Leftbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Leftbar);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/components/list/MultiDataList");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/components/range/RangeSlider");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/components/date/DateRange");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/components/list/MultiList");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/components/range/SingleRange");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);