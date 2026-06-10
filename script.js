const display = document.getElementById("display");
function appToDisplay(input) {
    display.value += input;
}
function calculator() {
    try {
        display.value = eval(display.value);
    } catch (reeor) {
        display.value = "error"
    }
}
function clr() {
    display.value = "";
}
function del() {
    display.value -= input;
}