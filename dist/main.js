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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_telAccord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/telAccord */ \"./src/modules/telAccord.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_telAccord__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://relax/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const body = document.querySelector('body')\r\n    const menuPopup = document.querySelector('.popup-menu');\r\n    const dialogPopup = menuPopup.querySelector('.popup-dialog-menu');\r\n    const footerBtn = document.querySelector('.button-footer a')\r\n\r\n    const menuOpen = () => {\r\n        dialogPopup.style.transform = 'translate3d(0, 0, 0)'\r\n    }\r\n    const menuClose = () => {\r\n        dialogPopup.style.transform = ''\r\n    }\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu')) {\r\n            menuOpen()\r\n        } else if (e.target.closest('.button-footer')) {\r\n            e.preventDefault()\r\n            document.querySelector(footerBtn.hash).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        } else if (e.target.classList.contains('close-menu') || !e.target.closest('.popup-menu-nav')) {\r\n            menuClose()\r\n        } else if (e.target.closest('.popup-menu-nav') && !e.target.closest('.fullList')) {\r\n            e.preventDefault()\r\n            menuClose()\r\n            document.querySelector(e.target.hash).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://relax/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    // все события на body, массив всех модальных окон\r\n    const body = document.querySelector('body')\r\n    const popups = document.querySelectorAll('.popup')\r\n\r\n    // функции открытия / закрытия popup\r\n    const popupOpen = (popup) => {\r\n        popup.style.visibility = 'visible'\r\n    }\r\n    const popupClose = (popup) => {\r\n        popup.style.visibility = ''\r\n    }\r\n\r\n    // в зависимости от кнопки передаём конкретный popup\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest('.fullList')) {\r\n            popups.forEach(popup => {\r\n                if (popup.classList.contains('popup-repair-types')) {\r\n                    popupOpen(popup)\r\n                }\r\n            })\r\n            \r\n        }\r\n    })\r\n\r\n    // закрытие любого popup при нажатии не в диалоговом окне\r\n    popups.forEach(popup => {\r\n        popup.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.popup-dialog')) {\r\n                popupClose(popup)\r\n            }\r\n        })\r\n    })\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://relax/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/telAccord.js":
/*!**********************************!*\
  !*** ./src/modules/telAccord.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst telAccord = () => {\r\n    const blockTel = document.querySelector('.header-contacts')\r\n    const tel2 = blockTel.querySelector('.header-contacts__phone-number-accord')\r\n    const tel2Number = tel2.querySelector('.header-contacts__phone-number')\r\n    const arrow = blockTel.querySelector('.header-contacts__arrow')\r\n\r\n    const arrowDown = () => {\r\n        arrow.style.transform = 'rotate(180deg)'\r\n        tel2.style.top = '20px'\r\n        tel2Number.style.opacity = '1'\r\n    }\r\n    const arrowUp = () => {\r\n        arrow.style.transform = ''\r\n        tel2.style.top = ''\r\n        tel2Number.style.opacity = ''\r\n    }\r\n\r\n    arrow.addEventListener('click', () => {\r\n        if (arrow.style.transform == 'rotate(180deg)') {\r\n            arrowUp()\r\n        } else arrowDown()\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (telAccord);\n\n//# sourceURL=webpack://relax/./src/modules/telAccord.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;