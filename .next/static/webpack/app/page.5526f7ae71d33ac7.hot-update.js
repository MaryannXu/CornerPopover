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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/button/dist/chunk-3HSDMH4Y.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-client)/./node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fi */ \"(app-client)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ \"(app-client)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ \"(app-client)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/gr */ \"(app-client)/./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-I7AEEVL3.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-K4VREUER.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-client)/./node_modules/@nextui-org/popover/dist/chunk-ARECNDSB.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.chakra.div);\n_c = MotionBox;\nconst MotionIconButton = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton);\n_c1 = MotionIconButton;\nconst ContactCards = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const mainButton = {\n        open: {\n            rotate: 90\n        },\n        closed: {\n            rotate: 0\n        }\n    };\n    const listButtons = {\n        open: (index)=>({\n                y: -(index * 10 + 70),\n                opacity: 1,\n                transition: {\n                    delay: index * 0.3\n                }\n            }),\n        closed: (index)=>({\n                y: index * 10,\n                opacity: 0,\n                transition: {\n                    delay: index * 0.1\n                }\n            })\n    };\n    const buttons = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiPhoneIncoming, {}, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            popoverPlacement: \"left-end\",\n            color: \"grey\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoMdChatbubbles, {}, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            color: \"grey\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        position: \"fixed\",\n        bottom: \"3rem\",\n        right: \"2rem\",\n        zIndex: \"sticky\",\n        flexDirection: \"column-reverse\",\n        display: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                children: isOpen && buttons.map((button, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n                        boxShadow: \"5px 3px 10px gray\",\n                        fontSize: \"30px\",\n                        bg: button.color,\n                        as: \"a\",\n                        href: button.url,\n                        variants: listButtons,\n                        initial: \"closed\",\n                        animate: \"open\",\n                        exit: \"closed\",\n                        custom: i,\n                        width: \"55px\",\n                        height: \"55px\",\n                        transformOrigin: \"bottom\",\n                        borderRadius: \"50%\",\n                        textColor: \"white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.popover_default, {\n                            placement: button.popoverPlacement,\n                            offset: 30,\n                            color: \"primary\",\n                            backdrop: opaque,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.popover_trigger_default, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AbsoluteCenter, {\n                                        children: button.icon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.popover_content_default, {\n                                    style: {\n                                        backgroundColor: \"rgba(0, 0, 0, 0.8)\",\n                                        marginRight: \"10px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-1 py-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-small font-bold text-white\",\n                                                children: \"Popover Content\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-tiny text-white\",\n                                                children: \"This is the popover content\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, undefined)\n                    }, button.url, false, {\n                        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionIconButton, {\n                bg: \"gray.200\",\n                boxShadow: \"2px 3px 8px gray\",\n                position: \"fixed\",\n                bottom: \"3rem\",\n                right: \"2rem\",\n                zIndex: \"sticky\",\n                size: \"lg\",\n                icon: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__.FiX, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_13__.GrSchedules, {}, void 0, false, void 0, void 0),\n                onClick: ()=>setIsOpen(!isOpen),\n                variants: mainButton,\n                initial: \"closed\",\n                animate: isOpen ? \"open\" : \"closed\",\n                variant: \"solid\",\n                isRound: true\n            }, void 0, false, {\n                fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maryannxu/Documents/projects/completed/src/components/ContactCards.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContactCards, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c2 = ContactCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactCards);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"MotionIconButton\");\n$RefreshReg$(_c2, \"ContactCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdENhcmRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNiO0FBQ3ZCO0FBQ0k7QUFDWTtBQUNBO0FBQ0o7QUFDdUM7QUFHcEYsTUFBTWMsWUFBWVYscURBQU1BLENBQUNGLG9EQUFNQSxDQUFDYTtLQUExQkQ7QUFDTixNQUFNRSxtQkFBbUJaLHFEQUFNQSxDQUFDSCx3REFBVUE7TUFBcENlO0FBRU4sTUFBTUMsZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1lLGFBQWE7UUFDakJDLE1BQU07WUFBRUMsUUFBUTtRQUFFO1FBQ2xCQyxRQUFRO1lBQUVELFFBQVE7UUFBQztJQUNyQjtJQUVBLE1BQU1FLGNBQWM7UUFDbEJILE1BQU0sQ0FBQ0ksUUFBVztnQkFDaEJDLEdBQUcsQ0FBRUQsQ0FBQUEsUUFBUSxLQUFLLEVBQUM7Z0JBQ25CRSxTQUFTO2dCQUNUQyxZQUFZO29CQUFFQyxPQUFPSixRQUFRO2dCQUFJO1lBQ25DO1FBQ0FGLFFBQVEsQ0FBQ0UsUUFBVztnQkFDbEJDLEdBQUdELFFBQVE7Z0JBQ1hFLFNBQVM7Z0JBQ1RDLFlBQVk7b0JBQUVDLE9BQU9KLFFBQVE7Z0JBQUk7WUFDbkM7SUFDRjtJQUVBLE1BQU1LLFVBQVU7UUFDZDtZQUNFQyxvQkFBTSw4REFBQ3ZCLDJEQUFlQTs7Ozs7WUFDdEJ3QixrQkFBa0I7WUFDbEJDLE9BQU87UUFDVDtRQUNBO1lBQ0VGLG9CQUFNLDhEQUFDeEIsMkRBQWVBOzs7OztZQUN0QjBCLE9BQU87UUFDVDtLQUNEO0lBR0QscUJBQ0UsOERBQUNuQjtRQUNDb0IsVUFBUztRQUNUQyxRQUFPO1FBQ1BDLE9BQU07UUFDTkMsUUFBTztRQUNQQyxlQUFjO1FBQ2RDLFNBQVE7OzBCQUVSLDhEQUFDcEMsMERBQWVBOzBCQUNiZSxVQUNDWSxRQUFRVSxJQUFJLENBQUNDLFFBQVFDLGtCQUNuQiw4REFBQzVCO3dCQUNDNkIsV0FBVTt3QkFDVkMsVUFBUzt3QkFDVEMsSUFBSUosT0FBT1I7d0JBQ1hhLElBQUc7d0JBRUhDLE1BQU1OLE9BQU9PO3dCQUNiQyxVQUFVekI7d0JBQ1YwQixTQUFRO3dCQUNSQyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxRQUFRWDt3QkFDUlksT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsaUJBQWdCO3dCQUNoQkMsY0FBYTt3QkFDYkMsV0FBVTtrQ0FFViw0RUFBQ2hELDhEQUFPQTs0QkFBU2lELFdBQVdsQixPQUFPVDs0QkFBa0I0QixRQUFROzRCQUFJM0IsT0FBTTs0QkFBVTRCLFVBQVVDOzs4Q0FDekYsOERBQUNuRCxzRUFBY0E7OENBQ2IsNEVBQUNYLDZEQUFjQTtrREFBRXlDLE9BQU9WOzs7Ozs7Ozs7Ozs4Q0FFMUIsOERBQUNuQix1RUFBY0E7b0NBQUNtRCxPQUFPO3dDQUFFQyxpQkFBaUI7d0NBQXNCQyxhQUFhO29DQUFPOzhDQUNsRiw0RUFBQ2xEO3dDQUFJbUQsV0FBVTs7MERBQ2IsOERBQUNuRDtnREFBSW1ELFdBQVU7MERBQWtDOzs7Ozs7MERBQ2pELDhEQUFDbkQ7Z0RBQUltRCxXQUFVOzBEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVA5QnhCOzs7Ozt1QkFiVEQsT0FBT087Ozs7Ozs7Ozs7MEJBMkJwQiw4REFBQ2hDO2dCQUNDNkIsSUFBRztnQkFDSEYsV0FBVTtnQkFDVlQsVUFBUztnQkFDVEMsUUFBTztnQkFDUEMsT0FBTTtnQkFDTkMsUUFBTztnQkFDUDhCLE1BQUs7Z0JBQ0xwQyxNQUFNYix1QkFBUyw4REFBQ1osZ0RBQUdBLHFEQUFNLDhEQUFDRyx3REFBV0E7Z0JBQ3JDMkQsU0FBUyxJQUFNakQsVUFBVSxDQUFDRDtnQkFDMUIrQixVQUFVN0I7Z0JBQ1Y4QixTQUFRO2dCQUNSQyxTQUFTakMsU0FBUyxTQUFTO2dCQUMzQm1ELFNBQVE7Z0JBQ1JDLFNBQVM7Ozs7Ozs7Ozs7OztBQUlqQjtHQWhHTXJEO01BQUFBO0FBa0dOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RDYXJkcy5qcz9iZDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic29sdXRlQ2VudGVyLCBJY29uQnV0dG9uLCBjaGFrcmF9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlYIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHsgSW9NZENoYXRidWJibGVzIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBIaVBob25lSW5jb21pbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCB7IEdyU2NoZWR1bGVzIH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyVHJpZ2dlciwgUG9wb3ZlckNvbnRlbnQsIEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuXG5cbmNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbihjaGFrcmEuZGl2KTtcbmNvbnN0IE1vdGlvbkljb25CdXR0b24gPSBtb3Rpb24oSWNvbkJ1dHRvbik7XG5cbmNvbnN0IENvbnRhY3RDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtYWluQnV0dG9uID0ge1xuICAgIG9wZW46IHsgcm90YXRlOiA5MH0sXG4gICAgY2xvc2VkOiB7IHJvdGF0ZTogMH0sXG4gIH07XG5cbiAgY29uc3QgbGlzdEJ1dHRvbnMgPSB7XG4gICAgb3BlbjogKGluZGV4KSA9PiAoe1xuICAgICAgeTogLShpbmRleCAqIDEwICsgNzApLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IGluZGV4ICogMC4zIH0sXG4gICAgfSksXG4gICAgY2xvc2VkOiAoaW5kZXgpID0+ICh7XG4gICAgICB5OiBpbmRleCAqIDEwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IGluZGV4ICogMC4xIH0sXG4gICAgfSksXG4gIH07XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8SGlQaG9uZUluY29taW5nIC8+LFxuICAgICAgcG9wb3ZlclBsYWNlbWVudDogJ2xlZnQtZW5kJyxcbiAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8SW9NZENoYXRidWJibGVzIC8+LFxuICAgICAgY29sb3I6ICdncmV5JyxcbiAgICB9XG4gIF07XG5cblxuICByZXR1cm4gKFxuICAgIDxNb3Rpb25Cb3hcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgYm90dG9tPVwiM3JlbVwiXG4gICAgICByaWdodD1cIjJyZW1cIlxuICAgICAgekluZGV4PVwic3RpY2t5XCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW4tcmV2ZXJzZVwiXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgIGJ1dHRvbnMubWFwKChidXR0b24sIGkpID0+IChcbiAgICAgICAgICAgIDxNb3Rpb25Cb3hcbiAgICAgICAgICAgICAgYm94U2hhZG93PVwiNXB4IDNweCAxMHB4IGdyYXlcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjMwcHhcIlxuICAgICAgICAgICAgICBiZz17YnV0dG9uLmNvbG9yfVxuICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICBrZXk9e2J1dHRvbi51cmx9XG4gICAgICAgICAgICAgIGhyZWY9e2J1dHRvbi51cmx9XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0QnV0dG9uc31cbiAgICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuXCJcbiAgICAgICAgICAgICAgZXhpdD1cImNsb3NlZFwiXG4gICAgICAgICAgICAgIGN1c3RvbT17aX1cbiAgICAgICAgICAgICAgd2lkdGg9XCI1NXB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXG4gICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PXtpfSBwbGFjZW1lbnQ9e2J1dHRvbi5wb3BvdmVyUGxhY2VtZW50fSBvZmZzZXQ9ezMwfSBjb2xvcj1cInByaW1hcnlcIiBiYWNrZHJvcD17b3BhcXVlfT5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICA8QWJzb2x1dGVDZW50ZXI+e2J1dHRvbi5pY29ufTwvQWJzb2x1dGVDZW50ZXI+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjgpJywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMSBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbWFsbCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlBvcG92ZXIgQ29udGVudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdGlueSB0ZXh0LXdoaXRlXCI+VGhpcyBpcyB0aGUgcG9wb3ZlciBjb250ZW50PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXJDb250ZW50PlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L01vdGlvbkJveD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPE1vdGlvbkljb25CdXR0b25cbiAgICAgICAgYmc9XCJncmF5LjIwMFwiXG4gICAgICAgIGJveFNoYWRvdz1cIjJweCAzcHggOHB4IGdyYXlcIlxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgYm90dG9tPVwiM3JlbVwiXG4gICAgICAgIHJpZ2h0PVwiMnJlbVwiXG4gICAgICAgIHpJbmRleD1cInN0aWNreVwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGljb249e2lzT3BlbiA/IDxGaVggLz4gOiA8R3JTY2hlZHVsZXMgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgdmFyaWFudHM9e21haW5CdXR0b259XG4gICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcbiAgICAgICAgaXNSb3VuZD17dHJ1ZX1cbiAgICAgIC8+XG4gICAgPC9Nb3Rpb25Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q2FyZHM7XG4iXSwibmFtZXMiOlsiQWJzb2x1dGVDZW50ZXIiLCJJY29uQnV0dG9uIiwiY2hha3JhIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlU3RhdGUiLCJGaVgiLCJJb01kQ2hhdGJ1YmJsZXMiLCJIaVBob25lSW5jb21pbmciLCJHclNjaGVkdWxlcyIsIlBvcG92ZXIiLCJQb3BvdmVyVHJpZ2dlciIsIlBvcG92ZXJDb250ZW50IiwiQnV0dG9uIiwiTW90aW9uQm94IiwiZGl2IiwiTW90aW9uSWNvbkJ1dHRvbiIsIkNvbnRhY3RDYXJkcyIsImlzT3BlbiIsInNldElzT3BlbiIsIm1haW5CdXR0b24iLCJvcGVuIiwicm90YXRlIiwiY2xvc2VkIiwibGlzdEJ1dHRvbnMiLCJpbmRleCIsInkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiYnV0dG9ucyIsImljb24iLCJwb3BvdmVyUGxhY2VtZW50IiwiY29sb3IiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsImRpc3BsYXkiLCJtYXAiLCJidXR0b24iLCJpIiwiYm94U2hhZG93IiwiZm9udFNpemUiLCJiZyIsImFzIiwiaHJlZiIsInVybCIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiY3VzdG9tIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJib3JkZXJSYWRpdXMiLCJ0ZXh0Q29sb3IiLCJwbGFjZW1lbnQiLCJvZmZzZXQiLCJiYWNrZHJvcCIsIm9wYXF1ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJjbGFzc05hbWUiLCJzaXplIiwib25DbGljayIsInZhcmlhbnQiLCJpc1JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ContactCards.js\n"));

/***/ })

});