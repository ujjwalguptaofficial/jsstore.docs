var Dialog,
    Validator;
window.onresize = function () {
    if (typeof onResized !== "undefined") {
        onResized();
    }
}

window.onload = function () {
    Dialog = new MatDialog();
    Validator = new JsValidator();
    if (typeof onPageLoaded !== "undefined") {
        onPageLoaded();
    }
    $('.collapsible').collapsible();
}

