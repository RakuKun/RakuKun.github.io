"use strict";
var pnls = document.querySelectorAll('.section').length,
    scdir, hold = false;
var current = 0;
var main = document.getElementById('main');
var sections = main.childElementCount - 1;

function _scrollY(obj, slength) {
    var plength, pan,
        vh = window.innerHeight / 100,
        vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
    if ((this !== undefined && this.id === 'main') || (obj !== undefined && obj.id === 'main')) {
        pan = this || obj;
        plength = parseInt(pan.offsetHeight / vh);
    }
    if (pan === undefined) {
        return;
    }
    plength = plength || parseInt(pan.offsetHeight / vmin);
    if (hold === true) return;
    if (scdir === 'down' && current != -100 * (sections - 1)) {
        current -= slength;
        slength *= -1;
    } else if (scdir === 'up' && current < 0) {
        current += slength;
    } else if (scdir === 'top') {
        current = 0;
        slength = 0;
    }
    switch (current) {
        case 0:
            main.style.backgroundColor = 'rgb(12, 12, 12)';
            break;
        case -100:
            main.style.backgroundColor = 'rgb(11, 52, 110)';
            break;
        case -200:
            main.style.backgroundColor = 'rgb(203, 27, 69)';
            break;
        case -300:
            main.style.backgroundColor = 'rgb(237, 120, 74)';
            break;
        case -300:
            main.style.backgroundColor = 'rgb(237, 120, 74)';
            break;
        case -400:
            main.style.backgroundColor = 'rgb(252, 250, 242)';
            break;
        default:
            main.style.backgroundColor = 'rgb(12, 12, 12)';
            break;
    }
    if (hold === false) {
        hold = true;
        setTimeout(function () {
            hold = false;
        }, 1000);
        pan.style.transform = 'translateY(' + current + 'vh)';
    }
    console.log('current: ' + current + ' ' + scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
}

function _swipe(obj) {
    var swdir,
        sX,
        sY,
        dX,
        dY,
        threshold = 100,
        /*[min distance traveled to be considered swipe]*/
        slack = 50,
        /*[max distance allowed at the same time in perpendicular direction]*/
        alT = 500,
        /*[max time allowed to travel that distance]*/
        elT, /*[elapsed time]*/
        stT; /*[start time]*/
    obj.addEventListener('touchstart', function (e) {
        var tchs = e.changedTouches[0];
        swdir = 'none';
        sX = tchs.pageX;
        sY = tchs.pageY;
        stT = new Date().getTime();
        //e.preventDefault();
    }, false);

    obj.addEventListener('touchmove', function (e) {
        e.preventDefault(); /*[prevent scrolling when inside DIV]*/
    }, false);

    obj.addEventListener('touchend', function (e) {
        var tchs = e.changedTouches[0];
        dX = tchs.pageX - sX;
        dY = tchs.pageY - sY;
        elT = new Date().getTime() - stT;
        if (elT <= alT) {
            if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                swdir = (dX < 0) ? 'left' : 'right';
            } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                swdir = (dY < 0) ? 'down' : 'up';
            }
            if (obj.id === 'main') {
                if (swdir === 'down') {
                    scdir = swdir;
                    _scrollY(obj);
                } else if (swdir === 'up' && obj.style.transform !== 'translateY(0)') {
                    scdir = swdir;
                    _scrollY(obj);

                }
                e.stopPropagation();
            }
        }
    }, false);
}

function registerChildren() {
    for (let i = 1; i < sections - 1; i++) {
        main.children[0].children[0].children[i].addEventListener('click', function () {
            scdir = 'down';
            _scrollY(main, 100 * (i));
        });
    }
}
registerChildren();

main.style.transform = 'translateY(0)';
main.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        scdir = 'up';
    }
    if (e.deltaY > 0) {
        scdir = 'down';
    }
    _scrollY(main, 100);
    e.stopPropagation();
});
main.addEventListener('wheel', _scrollY);
_swipe(main);
var tops = document.querySelectorAll('.top');
for (let i = 0; i < tops.length; i++) {
    tops[i].addEventListener('click', function () {
        console.log(tops[i].parentElement);
        scdir = 'top';
        _scrollY(main);
    });
}

window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})
