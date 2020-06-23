module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: ./static/style.less
var style = __webpack_require__("hhho");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.min.css
var swiper_min = __webpack_require__("9L0q");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/component.less
var component = __webpack_require__("H7VS");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/header.js

var __jsx = external_react_default.a.createElement;




external_react_bootstrap_["NavDropdown"]; //导航子项

function NavItem() {
  // console.log(Router.router.pathname);
  let list = [{
    name: '首页',
    url: '/',
    isHome: true
  }, {
    name: '核心技术',
    url: '/middle'
  }, {
    name: '智能驾驶',
    url: '/auto'
  }, {
    name: '新闻中心',
    url: '/news'
  }, {
    name: '关于我们',
    url: '/about'
  }, {
    name: '加入我们',
    url: '/joinus'
  }, {
    name: '开发者社区',
    url: '/development'
  }]; //判断当前路径，并加上进入状态

  Object(external_react_["useEffect"])(() => {
    list.forEach(item => {
      if (item.url === router_default.a.router.pathname) {
        item['mounseIn'] = true;
      }
    });
  });
  const {
    0: NavList,
    1: setNavList
  } = Object(external_react_["useState"])(list);

  const mounseEnter = (e, item, index) => {
    console.log('进入了状态‘；');
    item['mounseIn'] = true;
    let arr = [...NavList];
    arr[index] = item;
    setNavList(arr);
  };

  const onMouseLeave = (e, item, index) => {
    if (item.url !== router_default.a.router.pathname) {
      item['mounseIn'] = false;
      let arr = [...NavList];
      arr[index] = item;
      setNavList(arr);
    }
  };

  return __jsx(external_react_bootstrap_["Nav"], {
    id: "parent-Nav"
  }, NavList.map((item, index) => {
    return __jsx(external_react_bootstrap_["Nav"].Link, {
      key: index,
      href: item.url,
      className: item['mounseIn'] && item['isHome'] ? 'moutrue blue-link homeColor' : item['mounseIn'] ? 'moutrue blue-link' : null,
      onMouseEnter: event => mounseEnter(event, item, index),
      onMouseLeave: event => onMouseLeave(event, item, index)
    }, item.name);
  }));
} //头部组件


function Header() {
  // console.log(Router, 'Router');
  const {
    0: isWhite,
    1: setIsWhite
  } = Object(external_react_["useState"])(false);
  const {
    0: transparent,
    1: setTransparent
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    router_default.a.router.pathname === '/' ? setTransparent(1) : setIsWhite(true);
    window.addEventListener('scroll', handleScroll);
  }, []);

  const parentMouseIn = () => {
    router_default.a.router.pathname === '/' ? setTransparent(0) : '';
    setIsWhite(true);
  };

  const parentMouseLeave = () => {
    if (router_default.a.router.pathname === '/') {
      setTransparent(1);
      setIsWhite(false);
    }
  };

  const handleScroll = e => {
    // console.log(e.srcElement.scrollingElement.scrollTop, '浏览器滚动事件');
    if (e.srcElement.scrollingElement.scrollTop > 0) {
      setTransparent(0);
      setIsWhite(true);
    } else {
      if (router_default.a.router.pathname === '/') {
        setTransparent(1);
        setIsWhite(false);
      }
    }
  };

  return __jsx("div", {
    className: transparent === 1 ? 'Nav-parent is-transparent' : 'Nav-parent bg-white'
  }, __jsx(external_react_bootstrap_["Navbar"], {
    onMouseEnter: event => parentMouseIn(event),
    onMouseLeave: event => parentMouseLeave(event),
    collapseOnSelect: true,
    expand: "lg"
  }, __jsx(external_react_bootstrap_["Navbar"].Brand, {
    href: "#home"
  }, __jsx(external_react_bootstrap_["Image"], {
    className: "logo",
    src: isWhite ? '/static/blue-logo.png' : '/static/logo2x.png',
    fluid: true
  })), __jsx(external_react_bootstrap_["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), __jsx(external_react_bootstrap_["Navbar"].Collapse, {
    id: "responsive-navbar-nav"
  }, __jsx(external_react_bootstrap_["Nav"], {
    className: "mr-auto"
  }), __jsx(NavItem, null))));
}
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./components/footer.less
var footer = __webpack_require__("ZAEe");

// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;


function Footer() {
  return footer_jsx("div", {
    className: "boot"
  }, footer_jsx("div", {
    className: "footer"
  }, footer_jsx("div", {
    className: "footer-box"
  }, footer_jsx("div", {
    className: "isLeft"
  }, footer_jsx("p", {
    className: "footer-p"
  }, "\u6211\u4EEC\u7684\u613F\u666F\uFF1A"), footer_jsx("span", {
    className: "footer-span"
  }, "\u8FB9\u7F18\u4EBA\u5DE5\u667A\u80FD\u82AF\u7247\u7684\u5168\u7403\u9886\u5BFC\u8005"), footer_jsx("p", {
    className: "footer-p"
  }, "\u6211\u4EEC\u7684\u4F7F\u547D\uFF1A"), footer_jsx("span", {
    className: "footer-span"
  }, "\u8D4B\u80FD\u4E07\u7269\uFF0C\u8BA9\u6BCF\u4E2A\u4EBA\u7684\u751F\u6D3B\u66F4\u5B89\u5168\uFF0C\u66F4\u7F8E\u597D")), footer_jsx("div", {
    className: "isRight"
  }, footer_jsx("div", {
    className: "right-box"
  }, footer_jsx("div", {
    className: "right-box-small"
  }, footer_jsx("p", {
    className: "footer-p"
  }, "\u516C\u53F8\u4E1A\u52A1"), footer_jsx("span", {
    className: "footer-span"
  }, "\u667A\u80FD\u9A7E\u9A76")), footer_jsx("div", {
    className: "right-box-small"
  }, footer_jsx("p", {
    className: "footer-p"
  }, "\u516C\u53F8\u4EA7\u54C1"), footer_jsx("span", {
    className: "footer-span"
  }, "\u5F81\u7A0B\u5904\u7406\u5668"), footer_jsx("span", {
    className: "footer-span"
  }, "\u65ED\u65E5\u5904\u7406\u5668"), footer_jsx("span", {
    className: "footer-span"
  }, "\u5730\u5E73\u7EBFMatrix")), footer_jsx("div", {
    className: "right-box-small"
  }, footer_jsx("p", {
    className: "footer-p"
  }, "\u5173\u4E8E\u6211\u4EEC"), footer_jsx("span", {
    className: "footer-span"
  }, "\u516C\u53F8\u4ECB\u7ECD"), footer_jsx("span", {
    className: "footer-span"
  }, "\u4F7F\u547D\u613F\u666F"), footer_jsx("span", {
    className: "footer-span"
  }, "\u53D1\u5C55\u5386\u7A0B"), footer_jsx("span", {
    className: "footer-span"
  }, "\u6295\u8D44\u8005"), footer_jsx("span", {
    className: "footer-span"
  }, "\u8054\u7CFB\u6211\u4EEC")), footer_jsx("div", {
    className: "right-box-small last"
  }, footer_jsx("p", {
    className: "footer-p"
  }, "\u8054\u7CFB\u6211\u4EEC"), footer_jsx("span", {
    className: "footer-span"
  }, "\u4E1A\u52A1\u5408\u4F5C\uFF1Adb@horizon.ai"), footer_jsx("span", {
    className: "footer-span"
  }, "\u5176\u4ED6\u5408\u4F5C\uFF1Amkt@horizon.ai"), footer_jsx("span", {
    className: "footer-span"
  }, "\u7B80\u5386\u6295\u9012\uFF1Adream@horizon.ai")))), footer_jsx("div", {
    className: "min-footer"
  }, footer_jsx(MinFooter, null))), footer_jsx("div", {
    className: "cbfixed"
  })), footer_jsx("div", {
    className: "boot-bottom"
  }, footer_jsx("div", {
    className: "boot-bottom-box"
  }, footer_jsx("div", {
    className: "bottom-right"
  }, footer_jsx("div", {
    className: "boot-btn"
  }, footer_jsx("img", {
    src: "/static/wx-logo.png"
  }), footer_jsx("span", null, "\u5730\u5E73\u7EBF\u5B98\u5FAE")), footer_jsx("div", {
    className: "boot-btn"
  }, footer_jsx("img", {
    src: "/static/wx-logo.png"
  }), footer_jsx("span", null, "\u5730\u5E73\u7EBF\u62DB\u8058\u53F7")), footer_jsx("div", {
    className: "cbfixed"
  })), footer_jsx("div", {
    className: "bottom-left"
  }, footer_jsx("p", null, "Copyright 2020 \u5730\u5E73\u7EBF\u5B98\u7F51 \u4EACICP\u590717020905\u53F7")), footer_jsx("div", {
    className: "cbfixed"
  }))));
}

function MinFooter() {
  return footer_jsx(external_react_bootstrap_["Accordion"], null, footer_jsx(external_react_bootstrap_["Card"], null, footer_jsx(external_react_bootstrap_["Accordion"].Toggle, {
    as: external_react_bootstrap_["Card"].Header,
    eventKey: "0"
  }, footer_jsx("span", null, "\u516C\u53F8\u4E1A\u52A1"), footer_jsx("img", {
    src: "/static/upimg.png",
    className: "upimg"
  })), footer_jsx(external_react_bootstrap_["Accordion"].Collapse, {
    eventKey: "0"
  }, footer_jsx(external_react_bootstrap_["Card"].Body, null, footer_jsx("a", {
    href: "#"
  }, "\u667A\u80FD\u9A7E\u9A76")))), footer_jsx(external_react_bootstrap_["Card"], null, footer_jsx(external_react_bootstrap_["Accordion"].Toggle, {
    as: external_react_bootstrap_["Card"].Header,
    eventKey: "1"
  }, footer_jsx("span", null, "\u516C\u53F8\u4EA7\u54C1"), footer_jsx("img", {
    src: "/static/upimg.png",
    className: "upimg"
  })), footer_jsx(external_react_bootstrap_["Accordion"].Collapse, {
    eventKey: "1"
  }, footer_jsx(external_react_bootstrap_["Card"].Body, null, footer_jsx("a", {
    href: "#"
  }, "\u8FDC\u5F81\u5904\u7406\u5668"), footer_jsx("a", {
    href: "#"
  }, "\u65ED\u65E5\u5904\u7406\u5668"), footer_jsx("a", {
    href: "#"
  }, "\u5730\u5E73\u7EBFMatrix")))), footer_jsx(external_react_bootstrap_["Card"], null, footer_jsx(external_react_bootstrap_["Accordion"].Toggle, {
    as: external_react_bootstrap_["Card"].Header,
    eventKey: "2"
  }, footer_jsx("span", null, "\u5173\u4E8E\u6211\u4EEC"), footer_jsx("img", {
    src: "/static/upimg.png",
    className: "upimg"
  })), footer_jsx(external_react_bootstrap_["Accordion"].Collapse, {
    eventKey: "2"
  }, footer_jsx(external_react_bootstrap_["Card"].Body, null, footer_jsx("a", {
    href: "#"
  }, "\u516C\u53F8\u4ECB\u7ECD"), footer_jsx("a", {
    href: "#"
  }, "\u4F7F\u547D\u613F\u666F"), footer_jsx("a", {
    href: "#"
  }, "\u53D1\u5C55\u5386\u7A0B"), footer_jsx("a", {
    href: "#"
  }, "\u6295\u8D44\u8005"), footer_jsx("a", {
    href: "#"
  }, "\u8054\u7CFB\u6211\u4EEC")))), footer_jsx(external_react_bootstrap_["Card"], null, footer_jsx(external_react_bootstrap_["Accordion"].Toggle, {
    as: external_react_bootstrap_["Card"].Header,
    eventKey: "3"
  }, footer_jsx("span", null, "\u8054\u7CFB\u6211\u4EEC"), footer_jsx("img", {
    src: "/static/upimg.png",
    className: "upimg"
  })), footer_jsx(external_react_bootstrap_["Accordion"].Collapse, {
    eventKey: "3"
  }, footer_jsx(external_react_bootstrap_["Card"].Body, null, footer_jsx("span", {
    className: "footer-span"
  }, "\u4E1A\u52A1\u5408\u4F5C\uFF1Adb@horizon.ai"), footer_jsx("span", {
    className: "footer-span"
  }, "\u5176\u4ED6\u5408\u4F5C\uFF1Amkt@horizon.ai"), footer_jsx("span", {
    className: "footer-span"
  }, "\u7B80\u5386\u6295\u9012\uFF1Adream@horizon.ai")))));
}
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;






 // eslint-disable-next-line react/prop-types

function MyApp({
  Component,
  pageProps
}) {
  // console.log(Component, 'Component');
  // console.log(pageProps, 'pagePropss');
  return _app_jsx(Layout["a" /* default */], null, _app_jsx(Header, null), _app_jsx(Component, pageProps), _app_jsx(Footer, null));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // eslint-disable-next-line react/display-name
// export default ({ children }) => (
//   <div>
//     <Head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//       <title>Next-Antd-Scafflod</title>
//       <link rel="icon" href="/favicon.ico" />
//       <link rel="stylesheet" href="" />
//     </Head>
//     <style jsx global>{`
//       html,
//       body {
//         padding: 0;
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//           Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//       }
//       * {
//         box-sizing: border-box;
//       }
//     `}</style>
//     {children}
//   </div>
// );
// eslint-disable-next-line react/prop-types

function Layout({
  children
}) {
  return __jsx("div", {
    className: "jsx-1292447078"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1292447078"
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-1292447078"
  }), __jsx("title", {
    className: "jsx-1292447078"
  }, "Next-Antd-Scafflod"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1292447078"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "",
    className: "jsx-1292447078"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1292447078"
  }, ["html,body{background:black;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}", "*{box-sizing:border-box;}"]), children);
}

/***/ }),

/***/ "9L0q":
/***/ (function(module, exports) {



/***/ }),

/***/ "H7VS":
/***/ (function(module, exports) {



/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "ZAEe":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hhho":
/***/ (function(module, exports) {



/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });