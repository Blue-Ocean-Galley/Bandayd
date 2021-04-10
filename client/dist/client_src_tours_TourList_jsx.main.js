/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbandayd"] = self["webpackChunkbandayd"] || []).push([["client_src_tours_TourList_jsx"],{

/***/ "./client/src/tours/TourEntry.jsx":
/*!****************************************!*\
  !*** ./client/src/tours/TourEntry.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TourEntry)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globalStyles */ \"./client/src/styles/globalStyles.js\");\n\n\nfunction TourEntry(_ref) {\n  var show = _ref.show;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, show.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, show.bandName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", null, show.showDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, show.displayName));\n}\n\n//# sourceURL=webpack://bandayd/./client/src/tours/TourEntry.jsx?");

/***/ }),

/***/ "./client/src/tours/TourList.jsx":
/*!***************************************!*\
  !*** ./client/src/tours/TourList.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TourList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/Popup.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/TileLayer.js\");\n/* harmony import */ var _TourEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TourEntry */ \"./client/src/tours/TourEntry.jsx\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globalStyles */ \"./client/src/styles/globalStyles.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* eslint-disable arrow-body-style */\n\n\n\n\n\n\nreact_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement(document.getElementById('app'));\n(react_modal__WEBPACK_IMPORTED_MODULE_2___default().defaultStyles.overlay.backgroundColor) = 'rgba(0,0,0,0.6)';\nfunction TourList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showTourButton = _useState2[0],\n      setTourButton = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      showTourModal = _useState4[0],\n      setTourModal = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      showName = _useState6[0],\n      setShowName = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      address = _useState8[0],\n      setAddress = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState10 = _slicedToArray(_useState9, 2),\n      showInfo = _useState10[0],\n      setShowInfo = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState12 = _slicedToArray(_useState11, 2),\n      newDate = _useState12[0],\n      setNewDate = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState14 = _slicedToArray(_useState13, 2),\n      newTime = _useState14[0],\n      setNewTime = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{\n    id: 1,\n    name: 'Our cool show!!',\n    showDate: '2020-07-19 09:08:35',\n    displayName: 'Boston House of blues',\n    city: 'Boston',\n    state: 'Massachusetts',\n    country: 'USA',\n    bandId: 2,\n    bandName: 'The Electric Kitty-Cats',\n    latitude: 34.5632,\n    longitude: 4.357788,\n    createdAt: new Date(),\n    updatedAt: new Date()\n  }, {\n    id: 2,\n    name: 'Our lame show!!',\n    showDate: '2020-06-19 09:28:35',\n    displayName: 'The Whiskey a go-go',\n    city: 'Los Angeles',\n    state: 'California',\n    country: 'USA',\n    bandId: 2,\n    bandName: 'The Electric Kitty-Cats',\n    latitude: 35.4234,\n    longitude: -1.3423,\n    createdAt: new Date(),\n    updatedAt: new Date()\n  }]),\n      _useState16 = _slicedToArray(_useState15, 2),\n      shows = _useState16[0],\n      setShows = _useState16[1];\n\n  var updateName = function updateName(e) {\n    e.preventDefault();\n    setShowName(e.target.value);\n  };\n\n  var updateAddress = function updateAddress(e) {\n    e.preventDefault();\n    setAddress(e.target.value);\n  };\n\n  var updateNewDate = function updateNewDate(e) {\n    e.preventDefault();\n    setNewDate(e.target.value);\n  };\n\n  var updateNewTime = function updateNewTime(e) {\n    e.preventDefault();\n    setNewTime(e.target.value);\n  };\n\n  var searchAddress = function searchAddress(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://nominatim.openstreetmap.org', {\n      params: {\n        q: address,\n        format: 'json',\n        limit: 1,\n        addressdetails: 1\n      }\n    }).then(function (res) {\n      var loc = res.data[0];\n      setAddress(loc.display_name);\n      setShowInfo({\n        name: {\n          showName: showName\n        },\n        showDate: '2020-07-19 09:08:35',\n        displayName: loc.display_name,\n        city: loc.address.city ? loc.address.city : loc.address.town,\n        state: loc.address.state,\n        country: loc.address.country,\n        bandId: 2,\n        latitude: loc.lat,\n        longitude: loc[\"long\"],\n        createdAt: new Date(),\n        updatedAt: new Date()\n      });\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  var renderMarker = function renderMarker() {\n    if (showInfo.latitude && showInfo.longitude) {\n      console.log('marker should be there');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n        position: [showInfo.latitude, showInfo.longitude]\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, null, showName));\n    }\n  };\n\n  var renderShows = function renderShows() {\n    return shows.map(function (show) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TourEntry__WEBPACK_IMPORTED_MODULE_3__.default, {\n        key: show.id,\n        show: show\n      });\n    });\n  };\n\n  var renderMarkers = function renderMarkers() {\n    return shows.map(function (show) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n        position: [show.latitude, show.longitude],\n        key: show.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, null, show.name, show.showDate, show.displayName));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Upcoming Shows\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.Button, {\n    onClick: function onClick() {\n      return setTourModal(!showTourModal);\n    }\n  }, \"Add New Show\")), renderShows(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {\n    center: [51.505, -0.09],\n    zoom: 13,\n    style: {\n      height: '300px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.TileLayer, {\n    attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n  }), renderMarkers()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n    isOpen: showTourModal,\n    onRequestClose: function onRequestClose() {\n      return setTourModal(!showTourModal);\n    },\n    shouldCloseOnOverlayClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.Tile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Add A New Show\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Show Name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: showName,\n    onChange: updateName\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Date:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"time\",\n    name: \"show-time\",\n    value: newTime,\n    onChange: updateNewTime\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"date\",\n    name: \"show-date\",\n    value: newDate,\n    onChange: updateNewDate,\n    min: \"2021-01-01\",\n    max: \"2031-12-31\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Address:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: address,\n    onChange: updateAddress\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.Button, {\n    onClick: searchAddress\n  }, \"Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.Button, null, \"Confirm\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {\n    center: [51.505, -0.09],\n    zoom: 13,\n    style: {\n      height: '300px',\n      width: '300px',\n      zIndex: 100000000\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.TileLayer, {\n    attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n  }), renderMarker()))));\n}\n\n//# sourceURL=webpack://bandayd/./client/src/tours/TourList.jsx?");

/***/ })

}]);