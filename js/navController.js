var side = document.getElementById('side'),
    side_selector = document.getElementById("side-selector"),
    side_nav_list = document.getElementsByClassName("side-nav-list");
footer_nav = document.getElementById('footer-nav'),
    main_content = document.getElementById('main');

function SideRegister() {
    if (side != null && side_selector != null && side_nav_list != null) {
        for (let i = 0; i < side_nav_list.length; i++) {
            side_nav_list[i].addEventListener('click', function () {
                side_selector.style.height = side_nav_list[i].clientHeight + 'px';
                side_selector.style.top = side_nav_list[i].offsetTop + 'px';
                console.log(side_nav_list[i].style.top);
            }, false);
        }
    }
}

function ResetWidth() {
    var newFooterWidth = document.body.clientWidth;
    if (side != null) {
        newFooterWidth = document.body.clientWidth - side.offsetWidth;
    }
    footer_nav.style.width = newFooterWidth + 2 + 'px';
    main_content.style.width = newFooterWidth + 2 + 'px';
}

SideRegister();

window.onload = ResetWidth;
window.onresize = ResetWidth;