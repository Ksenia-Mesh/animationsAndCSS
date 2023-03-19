/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapse.js
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  init() {
    this.parentEl.innerHTML = this.constructor.markup();
    const button = this.parentEl.querySelector('.button');
    const collapse = this.parentEl.querySelector('.collapse');
    const collapseHeight = collapse.clientHeight;
    collapse.style.maxHeight = '0px';
    button.addEventListener('click', () => {
      this.onClick(collapse, collapseHeight);
    });
  }
  static markup() {
    return `
        <button class="button" type="button">Collapse</button>
        <div class="collapse">
          <p class="collapse__content">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proidint.</p>
        </div>
      `;
  }
  onClick(collapse, collapseHeight) {
    if (collapse.classList.contains('show')) {
      collapse.style.maxHeight = '0px';
      collapse.classList.remove('show');
    } else {
      collapse.style.maxHeight = `${collapseHeight}px`;
      collapse.classList.add('show');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector('.container');
const collapse = new Collapse(container);
collapse.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;