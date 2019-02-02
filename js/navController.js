var side = document.getElementById('side'),
    side_selector = document.getElementById("side-selector"),
    side_nav_list = document.getElementsByClassName("side-nav-list");
var videos = document.getElementsByClassName("video");
var foot_frame = document.getElementById('foot-frame'),
    main_content = document.getElementById('main');
var currentList = 0;

function SideRegister() {
    if (side != null && side_selector != null && side_nav_list != null) {
        for (let i = 0; i < side_nav_list.length; i++) {
            side_nav_list[i].addEventListener('click', function () {
                side_selector.style.height = side_nav_list[i].clientHeight + 'px';
                side_selector.style.top = side_nav_list[i].offsetTop + 'px';
                currentList = i;
            }, false);
        }
    }
}

function ResizeVideo() {
    if (videos.length > 0) {
        for (let i = 0; i < videos.length; i++) {
            videos[i].style.height = videos[i].clientWidth * 0.618 + 'px';
            console.log(videos[0].style.height);
        }
    }
}

function ResetWidth() {
    var newFooterWidth = document.body.clientWidth;
    if (side != null) {
        newFooterWidth = document.body.clientWidth - side.offsetWidth;
    }
    foot_frame.style.width = newFooterWidth + 2 + 'px';
    main_content.style.width = newFooterWidth + 2 + 'px';
}

SideRegister();

window.onload = function () {
    ResetWidth();
    ResizeVideo();
}

window.onresize = function () {
    ResetWidth();
    ResizeVideo();
    if (side != null && side_selector != null && side_nav_list != null) {
        side_selector.style.height = side_nav_list[currentList].offsetHeight + 'px';
        side_selector.style.top = side_nav_list[currentList].offsetTop + 'px';
        console.log(side_nav_list[currentList].style.lineHeight);
    }
}