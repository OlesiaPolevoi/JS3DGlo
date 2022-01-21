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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_inputForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inputForms */ \"./modules/inputForms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"15 January 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_inputForms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/inputForms.js":
/*!*******************************!*\
  !*** ./modules/inputForms.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst inputForms = () => {\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n\r\n  calcSquare.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n  });\r\n  calcCount.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n  });\r\n  calcDay.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n  });\r\n\r\n  const formTwoMessage = document.getElementById(\"form2-message\");\r\n  const formOneName = document.getElementById(\"form1-name\");\r\n  const formTwoName = document.getElementById(\"form2-name\");\r\n  const formThreeName = document.getElementById(\"form3-name\");\r\n\r\n  formTwoMessage.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]/g, \"\");\r\n  });\r\n\r\n  formOneName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]/g, \"\");\r\n  });\r\n\r\n  formTwoName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]/g, \"\");\r\n  });\r\n\r\n  formThreeName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]/g, \"\");\r\n  });\r\n\r\n  const formOneEmail = document.getElementById(\"form1-email\");\r\n  const formTwoEmail = document.getElementById(\"form2-email\");\r\n  const formThreeEmail = document.getElementById(\"form3-email\");\r\n\r\n  formOneEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(\r\n      /[^a-zA-Z\\-\\d\\_\\@\\.\\!\\~\\*\\']/gi,\r\n      \"\"\r\n    );\r\n  });\r\n  formTwoEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(\r\n      /[^a-zA-Z\\-\\_\\d\\@\\.\\!\\~\\*\\']/gi,\r\n      \"\"\r\n    );\r\n  });\r\n  formThreeEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(\r\n      /[^a-zA-Z\\-\\d\\_\\@\\.\\!\\~\\*\\']/gi,\r\n      \"\"\r\n    );\r\n  });\r\n\r\n  const formOnePhone = document.getElementById(\"form1-phone\");\r\n  const formTwoPhone = document.getElementById(\"form2-phone\");\r\n  const formThreePhone = document.getElementById(\"form3-phone\");\r\n\r\n  formOnePhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)]/g, \"\");\r\n  });\r\n\r\n  formTwoPhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)]/g, \"\");\r\n  });\r\n\r\n  formThreePhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)]/g, \"\");\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputForms);\r\n\n\n//# sourceURL=webpack:///./modules/inputForms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menu.addEventListener(\"click\", (event) => {\r\n    if (event.target.matches(\".close-btn\")) {\r\n      event.preventDefault();\r\n\r\n      handleMenu();\r\n    }\r\n    if (event.target.matches(\"ul>li>a\")) {\r\n      handleMenu();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  const modalContent = document.querySelector(\".popup-content\");\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (screen.width < 768) {\r\n        modal.style.display = \"block\";\r\n\r\n        return;\r\n      }\r\n\r\n      modalContent.style.top = \"-52%\";\r\n      modal.style.display = \"block\";\r\n\r\n      let count = -52;\r\n      let idInterval;\r\n\r\n      const modalAnimate = () => {\r\n        count++;\r\n        idInterval = requestAnimationFrame(modalAnimate);\r\n\r\n        if (count < 10) {\r\n          modalContent.style.top = count + \"%\";\r\n        } else {\r\n          cancelAnimationFrame(idInterval);\r\n        }\r\n      };\r\n      modalAnimate();\r\n    });\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst slider = () => {\n  const sliderBlock = document.querySelector(\".portfolio-content\");\n  const slides = document.querySelectorAll(\".portfolio-item\");\n  const timeInterval = 2000;\n\n  let currentSlide = 0;\n  let interval;\n\n  let portfolioDots = document.querySelector(\".portfolio-dots\");\n\n  const addDots = () => {\n    for (let i = 0; i <= slides.length; i++) {\n      const addDot = document.createElement(\"li\");\n      if (i === 0) {\n        addDot.classList.add(\"dot-active\");\n      }\n      addDot.classList.add(\"dot\");\n      portfolioDots.append(addDot);\n    }\n  };\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  };\n\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n\n    if (e.target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (e.target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (e.target.classList.contains(\"dot\")) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n\n  sliderBlock.addEventListener(\n    \"mouseenter\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        stopSlide();\n      }\n    },\n    true\n  );\n\n  sliderBlock.addEventListener(\n    \"mouseleave\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        startSlide(timeInterval);\n      }\n    },\n    true\n  );\n\n  addDots();\n  const dots = document.querySelectorAll(\".dot\");\n\n  startSlide(timeInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      console.log(tabBtn);\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n  console.log(deadline);\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {\r\n      timeRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const updateOneClockTick = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      return;\r\n    }\r\n    if (getTime.hours < 10 && getTime.hours > 0) {\r\n      timerHours.textContent = \"0\" + getTime.hours;\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n    }\r\n\r\n    if (getTime.minutes < 10 && getTime.minutes > 0) {\r\n      timerMinutes.minutes = \"0\" + getTime.minutes;\r\n    } else {\r\n      timerMinutes.textContent = getTime.minutes;\r\n    }\r\n\r\n    if (getTime.seconds < 10 && getTime.minutes > 0) {\r\n      timerSeconds.textContent = \"0\" + getTime.seconds;\r\n    } else {\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n  };\r\n\r\n  updateOneClockTick();\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n\r\n      clearInterval(idInterval);\r\n      return;\r\n    }\r\n\r\n    if (getTime.hours < 10 && getTime.hours > 0) {\r\n      timerHours.textContent = \"0\" + getTime.hours;\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n    }\r\n\r\n    if (getTime.minutes < 10 && getTime.minutes > 0) {\r\n      timerMinutes.minutes = \"0\" + getTime.minutes;\r\n    } else {\r\n      timerMinutes.textContent = getTime.minutes;\r\n    }\r\n\r\n    if (getTime.seconds < 10 && getTime.minutes > 0) {\r\n      timerSeconds.textContent = \"0\" + getTime.seconds;\r\n    } else {\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n  };\r\n\r\n  let idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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