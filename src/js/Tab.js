/**
 * Copyright (c) fafazlab
 * fafaz-modal projects are licensed under the MIT license
 * https://github.com/fafaz/fafaz-tab
 */

export default class Tab {
    VERSION = '1.0.1';

    state = {
        lastIdx: 0
    };

    constructor(container = undefined, options = {}) {
        // 스타일시트 등록
        if (!document.getElementById('stylesheet-tab')) {
            const style = document.createElement('style');
            style.id = 'stylesheet-tab';
            style.innerText = `.tab-header{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:2px solid rgba(200,200,200,0.2)}.tab-header__item{line-height:1;padding:0 0 .5rem;margin-right:.5rem;cursor:pointer}.tab-header__activeLine{position:absolute;top:100%;left:0;height:2px;width:auto;background-color:#443f54;}.tab-body__item{display:none}`;
            document.head.appendChild(style);
        }

        this.config = {
            ...options
        };

        this.container = document.querySelector(container);
        this.container.removeAttribute('hidden');
        this.init();
    }

    init() {
        const headerElements = this.container.querySelectorAll('.tab-header__item');
        const bodyElements = this.container.querySelectorAll('.tab-body__item');
        const activeLine = document.createElement('div');

        activeLine.classList.add('tab-header__activeLine');
        activeLine.style.cssText = `width:${headerElements[0].offsetWidth}px; left: ${headerElements[0].offsetLeft}px;`;
        headerElements[0].parentNode.appendChild(activeLine);
        bodyElements[0].style.display = 'block';

        headerElements.forEach((item, idx) => {
            item.addEventListener('click', () => {
                // 현재 열려있는 탭과 선택된 탭이 같으면 중단
                if (this.state.lastIdx === idx) return;

                // 기존 탭 인터페이스 변경
                bodyElements[this.state.lastIdx].style.display = '';

                // 상태 변경
                this.state.lastIdx = idx;

                // 선택된 탭과 엑티브 라인 인터페이스 변경
                bodyElements[idx].style.display = 'block';
                activeLine.style.cssText = `width:${item.offsetWidth}px; left: ${item.offsetLeft}px;`;

                // change event 발동
                this._trigger('change', { idx, container: bodyElements[idx] });
            });
        });
    }

    handlerList = {};

    _trigger(eventName, modules) {
        this.handlerList[eventName] !== undefined && this.handlerList[eventName](modules);
        // modules 는 전달값
    }

    on(eventName, handler) {
        this.handlerList[eventName] = handler;
    }
}
