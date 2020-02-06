var cursor = document.getElementById("cursor"),
    body = document.body;
var path = window.location.pathname;
var page = path.split("/").pop();
var thre = body.clientHeight;
let colorShironeri = "rgb(252, 250, 242)",
    colorKon = "rgb(17,35,64)";

function MoveCursor() {
    var Y = event.pageY,
        X = event.pageX;

    cursor.style.top = Y + 'px';
    cursor.style.left = X + 'px';
}

window.onmousemove = MoveCursor;
window.onmouseover = function (e) {
    if (e.target.className == 'footer-nav-content') {
        cursor.style.background = colorShironeri;
    } else {
        cursor.style.background = colorKon;
    }
}