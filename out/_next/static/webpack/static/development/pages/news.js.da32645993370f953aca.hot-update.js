webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _news_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.less */ \"./pages/news.less\");\n/* harmony import */ var _news_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_news_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/wujiaqi/Desktop/Web-Demo-Code/next-app/pages/news.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar initList = [{\n  id: 0,\n  img: '/static/news1.png',\n  title: '地平线公告 B 轮融资',\n  date: '2019年2月1日',\n  content: '2019 年 2 月 27 日，地平线（Horizon Robotics）公告由 SK 中国、SK Hynix 以及数家中国一线汽车集团（与旗下基金）联合领投的 B 轮融资，获得 6 亿美金左右的投资，估值达 30 亿美金…'\n}, {\n  id: 1,\n  img: '/static/news2.png',\n  title: '国家知识产权局赴地平线调研',\n  date: '2019年2月1日',\n  content: '2019 年 2 月 27 日，地平线（Horizon Robotics）公告由 SK 中国、SK Hynix 以及数家中国一线汽车集团（与旗下基金）联合领投的 B 轮融资，获得 6 亿美金左右的投资，估值达 30 亿美金…'\n}];\nfunction News() {\n  _s();\n\n  var _this = this;\n\n  var tabsList = [{\n    name: '全部新闻',\n    id: 0\n  }, {\n    name: '企业咨询',\n    id: 1\n  }, {\n    name: '生态合作',\n    id: 2\n  }, {\n    name: '产品技术',\n    id: 3\n  }, {\n    name: '公司活动',\n    id: 4\n  }, {\n    name: '下载中心',\n    id: 5\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initList),\n      newsArr = _useState[0],\n      setNewsArr = _useState[1];\n\n  setNewsArr;\n\n  var handleClick = function handleClick(item) {\n    console.log(item, 'tie');\n  };\n\n  var goDetail = function goDetail(item) {\n    console.log(item, 'itme');\n    var id = item.id; // Router.push(`/news/[${id}]`);\n  };\n\n  return __jsx(\"div\", {\n    className: \"main\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"main-bg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"news-banner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/news-banner.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"\\u65B0\\u95FB\\u4E2D\\u5FC3\")), __jsx(\"div\", {\n    className: \"news-tabs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"news-tabs-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, tabsList.map(function (item) {\n    return __jsx(\"span\", {\n      className: \"news-tabs-a\",\n      onClick: function onClick() {\n        return handleClick(item);\n      },\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }, item.name);\n  })), __jsx(\"div\", {\n    className: \"news-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"relevant-left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, newsArr.map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: item.id,\n      href: \"/news/[\".concat(item.id, \"]\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 19\n      }\n    }, __jsx(\"div\", {\n      className: \"news-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }\n    }, __jsx(\"img\", {\n      className: \"news-left\",\n      src: item.img,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 23\n      }\n    }), __jsx(\"div\", {\n      className: \"news-right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 23\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 25\n      }\n    }, item.title), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 25\n      }\n    }, item.date), __jsx(\"em\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 25\n      }\n    }, item.content))));\n  })), __jsx(\"div\", {\n    className: \"relevant-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"relevant-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, \"\\u76F8\\u5173\\u6587\\u7AE0\"), __jsx(\"div\", {\n    className: \"hr-style\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: \"relevant-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"relevant-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/news1.png\",\n    className: \"relevant-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 19\n    }\n  }), __jsx(\"div\", {\n    className: \"relevant-details\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 19\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 21\n    }\n  }, \"\\u53F7\\u5916\\uFF01\\uFF01\\u5730\\u5E73\\u7EBF\\u559C\\u63D0 CES \\u521B\\u65B0\\u5956\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 21\n    }\n  }, \"2019\\u5E742\\u670821\\u65E5\")))), __jsx(\"div\", {\n    className: \"hr-style\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: \"relevant-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"relevant-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/news1.png\",\n    className: \"relevant-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }), __jsx(\"div\", {\n    className: \"relevant-details\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }, \"\\u53F7\\u5916\\uFF01\\uFF01\\u5730\\u5E73\\u7EBF\\u559C\\u63D0 CES \\u521B\\u65B0\\u5956\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 21\n    }\n  }, \"2019\\u5E742\\u670821\\u65E5\"))))), __jsx(\"div\", {\n    className: \"clearfix\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(News, \"0OepvmKWdt4oE3eRUpnd21aLYGI=\");\n\n_c = News;\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLmpzPzJhYmYiXSwibmFtZXMiOlsiaW5pdExpc3QiLCJpZCIsImltZyIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJOZXdzIiwidGFic0xpc3QiLCJuYW1lIiwidXNlU3RhdGUiLCJuZXdzQXJyIiwic2V0TmV3c0FyciIsImhhbmRsZUNsaWNrIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnb0RldGFpbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxLQUFHLEVBQUUsbUJBRlA7QUFHRUMsT0FBSyxFQUFFLGFBSFQ7QUFJRUMsTUFBSSxFQUFFLFdBSlI7QUFLRUMsU0FBTyxFQUNMO0FBTkosQ0FEYSxFQVNiO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVDLEtBQUcsRUFBRSxtQkFGUDtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsV0FKUjtBQUtFQyxTQUFPLEVBQ0w7QUFOSixDQVRhLENBQWY7QUFrQmUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxRQUFJLEVBQUUsTUFEUjtBQUVFUCxNQUFFLEVBQUU7QUFGTixHQURlLEVBS2Y7QUFDRU8sUUFBSSxFQUFFLE1BRFI7QUFFRVAsTUFBRSxFQUFFO0FBRk4sR0FMZSxFQVNmO0FBQ0VPLFFBQUksRUFBRSxNQURSO0FBRUVQLE1BQUUsRUFBRTtBQUZOLEdBVGUsRUFhZjtBQUNFTyxRQUFJLEVBQUUsTUFEUjtBQUVFUCxNQUFFLEVBQUU7QUFGTixHQWJlLEVBaUJmO0FBQ0VPLFFBQUksRUFBRSxNQURSO0FBRUVQLE1BQUUsRUFBRTtBQUZOLEdBakJlLEVBcUJmO0FBQ0VPLFFBQUksRUFBRSxNQURSO0FBRUVQLE1BQUUsRUFBRTtBQUZO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QyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQUZGLENBREYsQ0FIRixFQVlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQUZGLENBREYsQ0FiRixDQWpCRixFQXdDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q0YsQ0FkRixDQUxGLENBREYsQ0FERjtBQW1FRDs7R0F4R3VCQyxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvbmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9uZXdzLmxlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5sZXQgaW5pdExpc3QgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBpbWc6ICcvc3RhdGljL25ld3MxLnBuZycsXG4gICAgdGl0bGU6ICflnLDlubPnur/lhazlkYogQiDova7ono3otYQnLFxuICAgIGRhdGU6ICcyMDE55bm0MuaciDHml6UnLFxuICAgIGNvbnRlbnQ6XG4gICAgICAnMjAxOSDlubQgMiDmnIggMjcg5pel77yM5Zyw5bmz57q/77yISG9yaXpvbiBSb2JvdGljc++8ieWFrOWRiueUsSBTSyDkuK3lm73jgIFTSyBIeW5peCDku6Xlj4rmlbDlrrbkuK3lm73kuIDnur/msb3ovabpm4blm6LvvIjkuI7ml5fkuIvln7rph5HvvInogZTlkIjpoobmipXnmoQgQiDova7ono3otYTvvIzojrflvpcgNiDkur/nvo7ph5Hlt6blj7PnmoTmipXotYTvvIzkvLDlgLzovr4gMzAg5Lq/576O6YeR4oCmJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZzogJy9zdGF0aWMvbmV3czIucG5nJyxcbiAgICB0aXRsZTogJ+WbveWutuefpeivhuS6p+adg+WxgOi1tOWcsOW5s+e6v+iwg+eglCcsXG4gICAgZGF0ZTogJzIwMTnlubQy5pyIMeaXpScsXG4gICAgY29udGVudDpcbiAgICAgICcyMDE5IOW5tCAyIOaciCAyNyDml6XvvIzlnLDlubPnur/vvIhIb3Jpem9uIFJvYm90aWNz77yJ5YWs5ZGK55SxIFNLIOS4reWbveOAgVNLIEh5bml4IOS7peWPiuaVsOWutuS4reWbveS4gOe6v+axvei9pumbhuWbou+8iOS4juaXl+S4i+WfuumHke+8ieiBlOWQiOmihuaKleeahCBCIOi9ruiejei1hO+8jOiOt+W+lyA2IOS6v+e+jumHkeW3puWPs+eahOaKlei1hO+8jOS8sOWAvOi+viAzMCDkur/nvo7ph5HigKYnLFxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoKSB7XG4gIGNvbnN0IHRhYnNMaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICflhajpg6jmlrDpl7snLFxuICAgICAgaWQ6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5LyB5Lia5ZKo6K+iJyxcbiAgICAgIGlkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ+eUn+aAgeWQiOS9nCcsXG4gICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICfkuqflk4HmioDmnK8nLFxuICAgICAgaWQ6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5YWs5Y+45rS75YqoJyxcbiAgICAgIGlkOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ+S4i+i9veS4reW/gycsXG4gICAgICBpZDogNSxcbiAgICB9LFxuICBdO1xuICBjb25zdCBbbmV3c0Fyciwgc2V0TmV3c0Fycl0gPSB1c2VTdGF0ZShpbml0TGlzdCk7XG4gIHNldE5ld3NBcnI7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGl0ZW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtLCAndGllJyk7XG4gIH07XG4gIGNvbnN0IGdvRGV0YWlsID0gKGl0ZW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtLCAnaXRtZScpO1xuICAgIGNvbnN0IHsgaWQgfSA9IGl0ZW07XG4gICAgLy8gUm91dGVyLnB1c2goYC9uZXdzL1ske2lkfV1gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYmFubmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL25ld3MtYmFubmVyLnBuZ1wiIC8+XG4gICAgICAgICAgPHA+5paw6Ze75Lit5b+DPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLXRhYnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtdGFicy10aXRsZVwiPlxuICAgICAgICAgICAge3RhYnNMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXdzLXRhYnMtYVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGV2YW50LWxlZnRcIj5cbiAgICAgICAgICAgICAge25ld3NBcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj17YC9uZXdzL1ske2l0ZW0uaWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmV3cy1sZWZ0XCIgc3JjPXtpdGVtLmltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPntpdGVtLmNvbnRlbnR9PC9lbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZXZhbnQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVsZXZhbnQtdGl0bGVcIj7nm7jlhbPmlofnq6A8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHItc3R5bGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxldmFudC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxldmFudC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9uZXdzMS5wbmdcIiBjbGFzc05hbWU9XCJyZWxldmFudC1pbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxldmFudC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPuWPt+Wklu+8ge+8geWcsOW5s+e6v+WWnOaPkCBDRVMg5Yib5paw5aWWPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yMDE55bm0MuaciDIx5pelPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyLXN0eWxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZXZhbnQtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZXZhbnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbmV3czEucG5nXCIgY2xhc3NOYW1lPVwicmVsZXZhbnQtaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZXZhbnQtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD7lj7flpJbvvIHvvIHlnLDlubPnur/llpzmj5AgQ0VTIOWIm+aWsOWlljwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MjAxOeW5tDLmnIgyMeaXpTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

})