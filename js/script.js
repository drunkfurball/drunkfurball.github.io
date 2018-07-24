function onLoad() {
    // initial code to run when page loads
    return;
}

function addClass(elem, clss) {
    elem.className += clss;
}

function remClass(elem, clss) {
    var reg = new RegExp('(^| )' + clss + '($| )', 'g');
    elem.className = elem.className.replace(reg, '');
}