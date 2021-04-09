/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbandayd"] = self["webpackChunkbandayd"] || []).push([["client_src_editBlogPage_EditBlogPageContainer_jsx"],{

/***/ "./client/src/editBlogPage/EditArea.jsx":
/*!**********************************************!*\
  !*** ./client/src/editBlogPage/EditArea.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditArea)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globalStyles */ \"./client/src/styles/globalStyles.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction EditArea(_ref) {\n  var _ref$text = _ref.text,\n      text = _ref$text === void 0 ? '' : _ref$text,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? '' : _ref$title,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? null : _ref$id,\n      handleSave = _ref.handleSave,\n      handleCancel = _ref.handleCancel;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(text),\n      _useState2 = _slicedToArray(_useState, 2),\n      currentText = _useState2[0],\n      setText = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title),\n      _useState4 = _slicedToArray(_useState3, 2),\n      currentTitle = _useState4[0],\n      setTitle = _useState4[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    type: \"text\",\n    defaultValue: currentTitle,\n    onChange: function onChange(e) {\n      return setTitle(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.TextArea, {\n    onChange: function onChange(e) {\n      return setText(e.target.value);\n    },\n    defaultValue: currentText\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: handleCancel\n  }, \" Cancel \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick() {\n      return handleSave({\n        post: currentText,\n        name: currentTitle,\n        id: id\n      });\n    }\n  }, \"Save\")));\n}\nEditArea.propTypes = {\n  handleCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  handleSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)\n};\nvar EditCard = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.VerticalCard).withConfig({\n  displayName: \"EditArea__EditCard\",\n  componentId: \"sc-1hkbc9v-0\"\n})([\"flex:2;\"]);\n\n//# sourceURL=webpack://bandayd/./client/src/editBlogPage/EditArea.jsx?");

/***/ }),

/***/ "./client/src/editBlogPage/EditBlogPageContainer.jsx":
/*!***********************************************************!*\
  !*** ./client/src/editBlogPage/EditBlogPageContainer.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditBlogPageContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globalStyles */ \"./client/src/styles/globalStyles.js\");\n/* harmony import */ var _PastBlogPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PastBlogPosts */ \"./client/src/editBlogPage/PastBlogPosts.jsx\");\n/* harmony import */ var _EditArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditArea */ \"./client/src/editBlogPage/EditArea.jsx\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies */ \"./client/src/cookies.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // import PropTypes from 'prop-types';\n\n\n\n\n\n\n\nfunction EditBlogPageContainer() {\n  var bandId = _cookies__WEBPACK_IMPORTED_MODULE_5__.default.get('userId');\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isEditing = _useState2[0],\n      setIsEditing = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isEditing]);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      currentPost = _useState4[0],\n      setCurrentPost = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isEditing]);\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState6 = _slicedToArray(_useState5, 2),\n      posts = _useState6[0],\n      setPosts = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // Initial get request\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:3010/api/blogs/\".concat(bandId)).then(function (res) {\n      var postObj = {};\n      res.data.forEach(function (post) {\n        postObj[post.id] = post;\n      });\n      setPosts(postObj);\n    });\n  }, []);\n\n  var handleSave = function handleSave(post) {\n    setIsEditing(false);\n\n    if (!currentPost.id) {\n      // if no id, it's as new post\n      axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:3010/api/blogs/\".concat(bandId), {\n        name: post.name,\n        post: post.post,\n        bandId: bandId\n      }).then(function (res) {\n        // Adds new post by id to post list\n        setPosts(function (prevState) {\n          return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, res.data.id, res.data));\n        });\n      });\n    } else if (post.post !== currentPost.post || post.name !== currentPost.name) {\n      // only send put request if text or title was changed\n      setPosts(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, post.id, post));\n      });\n      axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"http://localhost:3010/api/blogs/post/\".concat(post.id), {\n        id: post.id,\n        name: post.name,\n        post: post.post,\n        bandId: bandId\n      });\n    }\n  };\n\n  var handleBlogPostClick = function handleBlogPostClick(post) {\n    setIsEditing(true);\n    setCurrentPost(post);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PastBlogPosts__WEBPACK_IMPORTED_MODULE_3__.default, {\n    onPostClick: handleBlogPostClick,\n    posts: Object.values(posts)\n  }), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditArea__WEBPACK_IMPORTED_MODULE_4__.default, {\n    id: currentPost.id,\n    text: currentPost.post,\n    title: currentPost.name,\n    handleSave: handleSave,\n    handleCancel: function handleCancel() {\n      return setIsEditing(false);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.VerticalCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" Choose a post to edit \")));\n}\nvar Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.Tile).withConfig({\n  displayName: \"EditBlogPageContainer__Container\",\n  componentId: \"sc-1jw1jg9-0\"\n})([\"flex-direction:row;justify-content:flex-start;align-items:flex-start;\"]); // EditBlogPageContainer.propTypes = {\n//   bandId: PropTypes.number.isRequired,\n// };\n\n//# sourceURL=webpack://bandayd/./client/src/editBlogPage/EditBlogPageContainer.jsx?");

/***/ }),

/***/ "./client/src/editBlogPage/PastBlogPosts.jsx":
/*!***************************************************!*\
  !*** ./client/src/editBlogPage/PastBlogPosts.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PastBlogPosts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globalStyles */ \"./client/src/styles/globalStyles.js\");\n\n\n\n\nfunction PastBlogPosts(_ref) {\n  var _ref$onPostClick = _ref.onPostClick,\n      onPostClick = _ref$onPostClick === void 0 ? function () {} : _ref$onPostClick,\n      posts = _ref.posts;\n\n  var handleClick = function handleClick(post) {\n    onPostClick(post);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PastBlogPostContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \" Past Blog Posts \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick() {\n      return onPostClick({\n        name: '',\n        post: ''\n      });\n    }\n  }, \"Create New\"), posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n      onClick: function onClick() {\n        return handleClick(post);\n      },\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, post.name));\n  }));\n}\nPastBlogPosts.propTypes = {\n  onPostClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Array)\n};\nPastBlogPosts.defaultProps = {\n  posts: []\n};\nvar PastBlogPostContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.ListTile).withConfig({\n  displayName: \"PastBlogPosts__PastBlogPostContainer\",\n  componentId: \"ctmxex-0\"\n})([\"width:32%;> \", \"{cursor:pointer;}height:100%;overflow:auto;\"], _styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__.ListItem);\n\n//# sourceURL=webpack://bandayd/./client/src/editBlogPage/PastBlogPosts.jsx?");

/***/ })

}]);