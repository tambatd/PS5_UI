webpackHotUpdate("main",{

/***/ "./src/components/ps5.js":
/*!*******************************!*\
  !*** ./src/components/ps5.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_console_UI_Header_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/console_UI/Header.png */ "./src/assets/console_UI/Header.png");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/components/app.js");
/* harmony import */ var _assets_apps_spiderManMilesMorales_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/apps/spiderManMilesMorales/icon.png */ "./src/assets/apps/spiderManMilesMorales/icon.png");
/* harmony import */ var _assets_apps_ghostOfTsushima_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/apps/ghostOfTsushima/icon.png */ "./src/assets/apps/ghostOfTsushima/icon.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/tambat/Desktop/PlayStation/ps5/src/components/ps5.js",
    _s = __webpack_require__.$Refresh$.signature();









const PlayStationUserInterface = () => {
  _s();

  const [currentApp, setCurrentApp] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const fun = event => {
    console.log(event.key);
  };

  const nextApp = () => {
    setCurrentApp(currentApp + 1);
  };

  const prevApp = () => {
    setCurrentApp(currentApp - 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PlayStation5UI, {
    onKeyDown: undefined.onKeyPressed,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Header, {
      src: _assets_console_UI_Header_png__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppSelection, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_spiderManMilesMorales_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_ghostOfTsushima_icon_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_spiderManMilesMorales_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_ghostOfTsushima_icon_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_spiderManMilesMorales_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
        logo: _assets_apps_ghostOfTsushima_icon_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_s(PlayStationUserInterface, "pVnn32YdVrmjJQdlDnPWbsbwHUY=");

_c = PlayStationUserInterface;
const PlayStation5UI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  min-width: 1920px;
  min-height: 1080px;
  max-width: 1920px;
  max-height: 1080px;
  background: black;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
_c2 = PlayStation5UI;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  padding-top: 30px;
  width: 1800px;
`;
_c3 = Header;
const AppSelection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  width: 1920px;
  padding: 50px;
  padding-right: 100px;

  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: flex-start;
`; //modify padding right to move the images

_c4 = AppSelection;
/* harmony default export */ __webpack_exports__["default"] = (PlayStationUserInterface);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "PlayStationUserInterface");
__webpack_require__.$Refresh$.register(_c2, "PlayStation5UI");
__webpack_require__.$Refresh$.register(_c3, "Header");
__webpack_require__.$Refresh$.register(_c4, "AppSelection");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.274520845e456bd4d6b7.hot-update.js.map