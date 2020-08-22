/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;
        total = (personsSum + daysSum) * 3000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0 + ' ₽';
        } else {
            totalValue.innerHTML = total + ' ₽';
        }
    });
    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        total = (personsSum + daysSum) * 3000;

        if (restDays.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0 + ' ₽';
        } else {
            totalValue.innerHTML = total + ' ₽';
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0 + ' ₽';
        } else {
            let n = total;
            totalValue.innerHTML = n * this.options[this.selectedIndex].value + ' ₽';
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMsg = document.createElement('div'),
        form2 = document.getElementById('form');

    let msg = {
        loading: 'Загрузка...',
        fail: 'Упс! Произошла ошибка',
        success: 'Спасибо! Скоро мы свяжемся с вами.'
    }

    function sendForm(el) {
        el.addEventListener('submit', function (e) {
            e.preventDefault();
            statusMsg.style.color = 'antiquewhite';
            statusMsg.style.marginTop = '15px';
            el.appendChild(statusMsg);

            let formData = new FormData(el);


            function Post(data) {

                return new Promise(function (resolve, reject) {
                    let req = new XMLHttpRequest();
                    req.open('POST', 'server.php');
                    req.setRequestHeader('Content', 'application/x-www-form-urlencoded');
                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    req.addEventListener('readystatechange', function () {
                        if (req.readyState < 4) {
                            resolve();
                        } else if (req.readyState === 4 && req.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    req.send(JSON.stringify(obj));
                });
            }

            function clear() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            Post(formData)
                .then(() => statusMsg.innerHTML = msg.loading)
                .then(() => statusMsg.innerHTML = msg.success)
                .catch(() => statusMsg.innerHTML = msg.fail)
                .then(() => clear())
        });
    };
    sendForm(form);
    sendForm(form2);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let more = document.querySelector('.more'),
        over = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        over.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        over.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let index = 1,
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slides = document.querySelectorAll('.slider-item'),
        dots = document.querySelector('.slider-dots'),
        dot = document.querySelectorAll('.dot');

    showSlides(index);

    function showSlides(e) {

        if (index > slides.length) {
            index = 1;
        }
        if (index < 1) {
            index = slides.length;
        }

        slides.forEach((i) => i.style.display = 'none');
        dot.forEach((i) => i.classList.remove('dot-active'));

        slides[index - 1].style.display = 'block';
        dot[index - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(index += n);
    }

    function currentSlide(n) {
        showSlides(index = n);
    }

    prev.addEventListener('click', function () {
        plusSlide(-1);
    });

    next.addEventListener('click', function () {
        plusSlide(1);
    });

    dots.addEventListener('click', function (e) {
        for (let i = 0; i < dot.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dot[i]) {
                currentSlide(i + 1);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTab(1);

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (e.target == tab[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadLine = '2020-08-23';

    function getTime(end) {
        let t = Date.parse(end) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setTime(id, end) {
        let timer = document.getElementById(id),
            second = timer.querySelector('.seconds'),
            minute = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            interval = setInterval(updateTimer, 1000);

        function updateTimer() {
            let t = getTime(end);

            if (t.seconds < 10) {
                second.textContent = '0' + t.seconds;
            } else if (t.minutes < 10) {
                minute.textContent = '0' + t.minutes;
            } else if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                second.textContent = t.seconds;
                minute.textContent = t.minutes;
                hours.textContent = t.hours;
            }

            if (t.total <= 0 || t.seconds < 0 || t.minutes < 0) {
                second.textContent = '00';
                minute.textContent = '00';
                hours.textContent = '00';
                clearInterval(interval);
            }
        }
    }

    setTime('timer', deadLine);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");


    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map