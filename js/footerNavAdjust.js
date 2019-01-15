var avater_image = document.getElementById('avatar-image');
var footer_nav = document.getElementById('footer-nav');
var main_content = document.getElementById('main-nav');

function ResetWidth() {
    var newFooterWidth = document.body.clientWidth - avater_image.offsetWidth;
    footer_nav.style.width = newFooterWidth + 2 + 'px';
    main_content.style.width = newFooterWidth + 2 + 'px';
}

ResetWidth();

window.onresize = ResetWidth;