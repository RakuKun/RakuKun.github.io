var cursor = document.getElementById("cursor"),
    body = document.body;

function MoveCursor() {
    var Y = event.pageY,
        X = event.pageX;

    cursor.style.top = Y + 'px';
    cursor.style.left = X + 'px';
}

window.onmousemove = MoveCursor;