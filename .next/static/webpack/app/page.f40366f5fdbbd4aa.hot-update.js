"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/ContactCards.js":
/*!****************************************!*\
  !*** ./src/components/ContactCards.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/button/dist/chunk-3HSDMH4Y.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fi */ \"(app-client)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ \"(app-client)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ \"(app-client)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/gr */ \"(app-client)/./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-I7AEEVL3.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-K4VREUER.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-ARECNDSB.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.chakra.div);\n_c = MotionBox;\nconst MotionIconButton = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton);\n_c1 = MotionIconButton;\nconst ContactCards = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const mainButton = {\n        open: {\n            rotate: 90\n        },\n        closed: {\n            rotate: 0\n        }\n    };\n    const listButtons = {\n        open: (index)=>({\n                y: -(index * 10 + 70),\n                opacity: 1,\n                transition: {\n                    delay: index * 0.3\n                }\n            }),\n        closed: (index)=>({\n                y: index * 10,\n                opacity: 0,\n                transition: {\n                    delay: index * 0.1\n                }\n            })\n    };\n    const buttons = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiPhoneIncoming, {}, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            popoverPlacement: \"left-end\",\n            color: \"grey\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoMdChatbubbles, {}, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            color: \"grey\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        position: \"fixed\",\n        bottom: \"3rem\",\n        right: \"2rem\",\n        zIndex: \"sticky\",\n        flexDirection: \"column-reverse\",\n        display: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                children: isOpen && buttons.map((button, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n                        boxShadow: \"5px 3px 10px gray\",\n                        fontSize: \"30px\",\n                        bg: button.color,\n                        as: \"a\",\n                        href: button.url,\n                        variants: listButtons,\n                        initial: \"closed\",\n                        animate: \"open\",\n                        exit: \"closed\",\n                        custom: i,\n                        width: \"55px\",\n                        height: \"55px\",\n                        transformOrigin: \"bottom\",\n                        borderRadius: \"50%\",\n                        textColor: \"white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.popover_default, {\n                            placement: button.popoverPlacement,\n                            offset: 30,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.popover_trigger_default, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AbsoluteCenter, {\n                                        children: button.icon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.popover_content_default, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-1 py-2\",\n                                        style: {\n                                            backgroundColor: \"grey\",\n                                            borderRadius: \"8px\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-small font-bold text-white\",\n                                                style: {\n                                                    backgroundColor: \"grey\",\n                                                    borderRadius: \"8px\"\n                                                },\n                                                children: \"Popover Content\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-tiny text-white\",\n                                                children: \"This is the popover content\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined)\n                    }, button.url, false, {\n                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionIconButton, {\n                bg: \"gray.200\",\n                boxShadow: \"2px 3px 8px gray\",\n                position: \"fixed\",\n                bottom: \"3rem\",\n                right: \"2rem\",\n                zIndex: \"sticky\",\n                size: \"lg\",\n                icon: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__.FiX, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_13__.GrSchedules, {}, void 0, false, void 0, void 0),\n                onClick: ()=>setIsOpen(!isOpen),\n                variants: mainButton,\n                initial: \"closed\",\n                animate: isOpen ? \"open\" : \"closed\",\n                variant: \"solid\",\n                isRound: true\n            }, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContactCards, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c2 = ContactCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactCards);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"MotionIconButton\");\n$RefreshReg$(_c2, \"ContactCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdENhcmRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNiO0FBQ3ZCO0FBQ0k7QUFDWTtBQUNBO0FBQ0o7QUFDdUM7QUFHcEYsTUFBTWMsWUFBWVYscURBQU1BLENBQUNGLG9EQUFNQSxDQUFDYTtLQUExQkQ7QUFDTixNQUFNRSxtQkFBbUJaLHFEQUFNQSxDQUFDSCx3REFBVUE7TUFBcENlO0FBRU4sTUFBTUMsZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1lLGFBQWE7UUFDakJDLE1BQU07WUFBRUMsUUFBUTtRQUFFO1FBQ2xCQyxRQUFRO1lBQUVELFFBQVE7UUFBQztJQUNyQjtJQUVBLE1BQU1FLGNBQWM7UUFDbEJILE1BQU0sQ0FBQ0ksUUFBVztnQkFDaEJDLEdBQUcsQ0FBRUQsQ0FBQUEsUUFBUSxLQUFLLEVBQUM7Z0JBQ25CRSxTQUFTO2dCQUNUQyxZQUFZO29CQUFFQyxPQUFPSixRQUFRO2dCQUFJO1lBQ25DO1FBQ0FGLFFBQVEsQ0FBQ0UsUUFBVztnQkFDbEJDLEdBQUdELFFBQVE7Z0JBQ1hFLFNBQVM7Z0JBQ1RDLFlBQVk7b0JBQUVDLE9BQU9KLFFBQVE7Z0JBQUk7WUFDbkM7SUFDRjtJQUVBLE1BQU1LLFVBQVU7UUFDZDtZQUNFQyxvQkFBTSw4REFBQ3ZCLDJEQUFlQTs7Ozs7WUFDdEJ3QixrQkFBa0I7WUFDbEJDLE9BQU87UUFDVDtRQUNBO1lBQ0VGLG9CQUFNLDhEQUFDeEIsMkRBQWVBOzs7OztZQUN0QjBCLE9BQU87UUFDVDtLQUNEO0lBR0QscUJBQ0UsOERBQUNuQjtRQUNDb0IsVUFBUztRQUNUQyxRQUFPO1FBQ1BDLE9BQU07UUFDTkMsUUFBTztRQUNQQyxlQUFjO1FBQ2RDLFNBQVE7OzBCQUVSLDhEQUFDcEMsMERBQWVBOzBCQUNiZSxVQUNDWSxRQUFRVSxJQUFJLENBQUNDLFFBQVFDLGtCQUNuQiw4REFBQzVCO3dCQUNDNkIsV0FBVTt3QkFDVkMsVUFBUzt3QkFDVEMsSUFBSUosT0FBT1I7d0JBQ1hhLElBQUc7d0JBRUhDLE1BQU1OLE9BQU9PO3dCQUNiQyxVQUFVekI7d0JBQ1YwQixTQUFRO3dCQUNSQyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxRQUFRWDt3QkFDUlksT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsaUJBQWdCO3dCQUNoQkMsY0FBYTt3QkFDYkMsV0FBVTtrQ0FHViw0RUFBQ2hELDhEQUFPQTs0QkFBU2lELFdBQVdsQixPQUFPVDs0QkFBa0I0QixRQUFROzs4Q0FDM0QsOERBQUNqRCxzRUFBY0E7OENBQ2IsNEVBQUNYLDZEQUFjQTtrREFBRXlDLE9BQU9WOzs7Ozs7Ozs7Ozs4Q0FFMUIsOERBQUNuQix1RUFBY0E7OENBQ2IsNEVBQUNHO3dDQUFJOEMsV0FBVTt3Q0FBWUMsT0FBTzs0Q0FBRUMsaUJBQWlCOzRDQUFRTixjQUFjO3dDQUFLOzswREFDOUUsOERBQUMxQztnREFBSThDLFdBQVU7Z0RBQWtDQyxPQUFPO29EQUFFQyxpQkFBaUI7b0RBQVFOLGNBQWM7Z0RBQUs7MERBQUc7Ozs7OzswREFDekcsOERBQUMxQztnREFBSThDLFdBQVU7MERBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUDlCbkI7Ozs7O3VCQWRURCxPQUFPTzs7Ozs7Ozs7OzswQkE0QnBCLDhEQUFDaEM7Z0JBQ0M2QixJQUFHO2dCQUNIRixXQUFVO2dCQUNWVCxVQUFTO2dCQUNUQyxRQUFPO2dCQUNQQyxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQMkIsTUFBSztnQkFDTGpDLE1BQU1iLHVCQUFTLDhEQUFDWixnREFBR0EscURBQU0sOERBQUNHLHdEQUFXQTtnQkFDckN3RCxTQUFTLElBQU05QyxVQUFVLENBQUNEO2dCQUMxQitCLFVBQVU3QjtnQkFDVjhCLFNBQVE7Z0JBQ1JDLFNBQVNqQyxTQUFTLFNBQVM7Z0JBQzNCZ0QsU0FBUTtnQkFDUkMsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWpCO0dBakdNbEQ7TUFBQUE7QUFtR04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdENhcmRzLmpzP2JkOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzb2x1dGVDZW50ZXIsIEljb25CdXR0b24sIGNoYWtyYX0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgeyBJb01kQ2hhdGJ1YmJsZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEhpUGhvbmVJbmNvbWluZyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuaW1wb3J0IHsgR3JTY2hlZHVsZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJUcmlnZ2VyLCBQb3BvdmVyQ29udGVudCwgQnV0dG9uIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5cblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uKGNoYWtyYS5kaXYpO1xuY29uc3QgTW90aW9uSWNvbkJ1dHRvbiA9IG1vdGlvbihJY29uQnV0dG9uKTtcblxuY29uc3QgQ29udGFjdENhcmRzID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1haW5CdXR0b24gPSB7XG4gICAgb3BlbjogeyByb3RhdGU6IDkwfSxcbiAgICBjbG9zZWQ6IHsgcm90YXRlOiAwfSxcbiAgfTtcblxuICBjb25zdCBsaXN0QnV0dG9ucyA9IHtcbiAgICBvcGVuOiAoaW5kZXgpID0+ICh7XG4gICAgICB5OiAtKGluZGV4ICogMTAgKyA3MCksXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjogeyBkZWxheTogaW5kZXggKiAwLjMgfSxcbiAgICB9KSxcbiAgICBjbG9zZWQ6IChpbmRleCkgPT4gKHtcbiAgICAgIHk6IGluZGV4ICogMTAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNpdGlvbjogeyBkZWxheTogaW5kZXggKiAwLjEgfSxcbiAgICB9KSxcbiAgfTtcblxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHtcbiAgICAgIGljb246IDxIaVBob25lSW5jb21pbmcgLz4sXG4gICAgICBwb3BvdmVyUGxhY2VtZW50OiAnbGVmdC1lbmQnLFxuICAgICAgY29sb3I6ICdncmV5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxJb01kQ2hhdGJ1YmJsZXMgLz4sXG4gICAgICBjb2xvcjogJ2dyZXknLFxuICAgIH1cbiAgXTtcblxuXG4gIHJldHVybiAoXG4gICAgPE1vdGlvbkJveFxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICBib3R0b209XCIzcmVtXCJcbiAgICAgIHJpZ2h0PVwiMnJlbVwiXG4gICAgICB6SW5kZXg9XCJzdGlja3lcIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtbi1yZXZlcnNlXCJcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICA+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7aXNPcGVuICYmXG4gICAgICAgICAgYnV0dG9ucy5tYXAoKGJ1dHRvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPE1vdGlvbkJveFxuICAgICAgICAgICAgICBib3hTaGFkb3c9XCI1cHggM3B4IDEwcHggZ3JheVwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzBweFwiXG4gICAgICAgICAgICAgIGJnPXtidXR0b24uY29sb3J9XG4gICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgIGtleT17YnV0dG9uLnVybH1cbiAgICAgICAgICAgICAgaHJlZj17YnV0dG9uLnVybH1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2xpc3RCdXR0b25zfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5cIlxuICAgICAgICAgICAgICBleGl0PVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgY3VzdG9tPXtpfVxuICAgICAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1NXB4XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcbiAgICAgICAgICAgICAgdGV4dENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PXtpfSBwbGFjZW1lbnQ9e2J1dHRvbi5wb3BvdmVyUGxhY2VtZW50fSBvZmZzZXQ9ezMwfSA+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPEFic29sdXRlQ2VudGVyPntidXR0b24uaWNvbn08L0Fic29sdXRlQ2VudGVyPlxuICAgICAgICAgICAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50ID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMSBweS0yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsIGJvcmRlclJhZGl1czogJzhweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsIGJvcmRlclJhZGl1czogJzhweCd9fT5Qb3BvdmVyIENvbnRlbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRpbnkgdGV4dC13aGl0ZVwiPlRoaXMgaXMgdGhlIHBvcG92ZXIgY29udGVudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxNb3Rpb25JY29uQnV0dG9uXG4gICAgICAgIGJnPVwiZ3JheS4yMDBcIlxuICAgICAgICBib3hTaGFkb3c9XCIycHggM3B4IDhweCBncmF5XCJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGJvdHRvbT1cIjNyZW1cIlxuICAgICAgICByaWdodD1cIjJyZW1cIlxuICAgICAgICB6SW5kZXg9XCJzdGlja3lcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICBpY29uPXtpc09wZW4gPyA8RmlYIC8+IDogPEdyU2NoZWR1bGVzIC8+fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgIHZhcmlhbnRzPXttYWluQnV0dG9ufVxuICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XG4gICAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXG4gICAgICAgIGlzUm91bmQ9e3RydWV9XG4gICAgICAvPlxuICAgIDwvTW90aW9uQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENhcmRzO1xuIl0sIm5hbWVzIjpbIkFic29sdXRlQ2VudGVyIiwiSWNvbkJ1dHRvbiIsImNoYWtyYSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZVN0YXRlIiwiRmlYIiwiSW9NZENoYXRidWJibGVzIiwiSGlQaG9uZUluY29taW5nIiwiR3JTY2hlZHVsZXMiLCJQb3BvdmVyIiwiUG9wb3ZlclRyaWdnZXIiLCJQb3BvdmVyQ29udGVudCIsIkJ1dHRvbiIsIk1vdGlvbkJveCIsImRpdiIsIk1vdGlvbkljb25CdXR0b24iLCJDb250YWN0Q2FyZHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtYWluQnV0dG9uIiwib3BlbiIsInJvdGF0ZSIsImNsb3NlZCIsImxpc3RCdXR0b25zIiwiaW5kZXgiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkZWxheSIsImJ1dHRvbnMiLCJpY29uIiwicG9wb3ZlclBsYWNlbWVudCIsImNvbG9yIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInpJbmRleCIsImZsZXhEaXJlY3Rpb24iLCJkaXNwbGF5IiwibWFwIiwiYnV0dG9uIiwiaSIsImJveFNoYWRvdyIsImZvbnRTaXplIiwiYmciLCJhcyIsImhyZWYiLCJ1cmwiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsImN1c3RvbSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtT3JpZ2luIiwiYm9yZGVyUmFkaXVzIiwidGV4dENvbG9yIiwicGxhY2VtZW50Iiwib2Zmc2V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaXplIiwib25DbGljayIsInZhcmlhbnQiLCJpc1JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ContactCards.js\n"));

/***/ })

});