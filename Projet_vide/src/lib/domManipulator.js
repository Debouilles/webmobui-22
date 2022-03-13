function domOn(selector, event, callback) {
    domForEach(selector, ele => ele.addEventListener(event, callback));
}

function domForEach(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}
export {domOn, domForEach}