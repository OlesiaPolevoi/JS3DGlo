/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\n//entry point\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"10 January 2022\");\n\n// import twoJS from \"./modules/two\";\n// twoJS();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst timer = (deadline) => {\n  console.log(deadline);\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n\n    // let days = Math.floor(timeRemaining / 60 / 60 / 24);\n    // let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n    let hours = Math.floor(timeRemaining / 60 / 60);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    return {\n      // hours: hours,\n      // minutes: minutes,\n      // seconds: seconds,\n      timeRemaining,\n      hours,\n      minutes,\n      seconds,\n    };\n    // console.log(days);\n  };\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n\n    console.log(getTime);\n\n    if (getTime.hours < 10) {\n      timerHours.textContent = \"0\" + getTime.hours;\n    } else {\n      timerHours.textContent = getTime.hours;\n    }\n\n    if (getTime.minutes < 10) {\n      timerMinutes.minutes = \"0\" + getTime.minutes;\n    } else {\n      timerMinutes.textContent = getTime.minutes;\n    }\n\n    if (getTime.seconds < 10) {\n      timerSeconds.textContent = \"0\" + getTime.seconds;\n    } else {\n      timerSeconds.textContent = getTime.seconds;\n    }\n\n    // if (getTime.timeRemaining > 0) {\n    //   setTimeout(updateClock, 1000);\n    // }\n\n    if (getTime.timeRemaining < 0) {\n      clearInterval(idInterval);\n\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  };\n\n  let idInterval = setInterval(updateClock, 1000);\n  // clearInterval(idInterval);\n\n  //NOTE\n\n  // let count = 0;\n\n  // const logger = (str) => {\n  //   console.log(`Hello, I'm ${str}.`);\n  // };\n\n  // let idInterval = setInterval(() => {\n  //   count++;\n  //   logger(\"setInterval\");\n  //   if (count === 10) clearInterval(idInterval);\n  // }, 500);\n\n  //Переписать таймер с помощью setInterval. Будьте внимательны, чтобы setInterval не вызывал сам себя, не превращался в рекурсивный вызов!\n  //Проверить себя легко. Выведите что-нибудь в консоль внутри функции updateClock. Вывод в консоль должен происходить 1 раз за 1000ms.\n\n  // updateClock();\n  // countTimer(\"08 January 2022\");\n  // setInterval(countTimer, 1000, \"08 January 2022\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;