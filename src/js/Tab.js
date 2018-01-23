import { addEvent } from './utils';
import 'classlist-polyfill';
import '../sass/tab.scss';

/**
 * Copyright (c) fafazlab
 * fafaz-modal projects are licensed under the MIT license
 * https://github.com/fafaz/fafaz-tab
 */

export default class Tab {
    constructor(container = undefined, customOptions = {}) {
        this._version = '1.0';

        this._config = {
            style: 'material',
            ...customOptions
        };
        
        this.containers = document.querySelectorAll(container);
        this.containers.forEach((item, idx) => {
            
            let headerElements = item.querySelectorAll('.tab-header__item');
            let bodyElements = item.querySelectorAll('.tab-body__item');
            let activeLine = item.querySelector('.tab-header__activeLine');
            
            headerElements.forEach((value, idx) => {
                if (idx === 0) activeLine.style.width = `${value.offsetWidth}px`;
                addEvent(value, 'click', (ev) => {
                    if (value.classList.contains('is-active')) return;

                    this._removeAllActiveClass(item);
                    value.classList.add('is-active');
                    bodyElements[idx].classList.add('is-active');
                    activeLine.style.cssText = `width:${value.offsetWidth}px; left:${value.offsetLeft}px`;
                });
            });
        });
    }

    _removeAllActiveClass(container) {
        const targetElements = container.querySelectorAll('.is-active');
        console.log(targetElements);
        targetElements.forEach((item) => {
            item.classList.remove('is-active');
        });
    }
};
