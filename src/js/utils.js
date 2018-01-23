const win = typeof window !== "undefined" && window.Math === Math
    ? window
    : (
        typeof self !== "undefined" && (
            self.Math === Math ? self : Function("return this")()
        )
    );
const document = win.document;

const SUPPORT_ADDEVENTLISTENER = !!("addEventListener" in document);

const SUPPORT_PASSIVE = (() => {
    let supportsPassiveOption = false;

    try {
        if (SUPPORT_ADDEVENTLISTENER && Object.defineProperty) {
            document.addEventListener("test", null, Object.defineProperty({},
                "passive", {
                    get() {
                        supportsPassiveOption = true;
                    },
                }));
        }
    } catch (e) { }
    return supportsPassiveOption;
})();

export function addEvent(element, type, handler, eventListenerOptions) {
    if (SUPPORT_ADDEVENTLISTENER) {
        let options = eventListenerOptions || false;

        if (typeof eventListenerOptions === "object") {
            options = SUPPORT_PASSIVE ? eventListenerOptions : false;
        }
        element.addEventListener(type, handler, options);
    } else if (element.attachEvent) {
        element.attachEvent(`on${type}`, handler);
    } else {
        element[`on${type}`] = handler;
    }
}
