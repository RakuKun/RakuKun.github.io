var enButton = document.getElementById('en-lang');
var cnButton = document.getElementById('cn-lang');
var selected = null;
var enText = document.getElementsByClassName('main-text-en');
var cnText = document.getElementsByClassName('main-text-cn');
let colorKon = "rgb(17,35,64)";
let colorWhite = "rgb(255,255,255)";

enButton.addEventListener('click', function () {
    SwitchLanguage(true);
}, false);

cnButton.addEventListener('click', function () {
    SwitchLanguage(false);
}, false);

cnButton.addEventListener('mouseenter', function () {
    OnMouseEnter(cnButton);
}, false);

enButton.addEventListener('mouseenter', function () {
    OnMouseEnter(enButton);
}, false);

cnButton.addEventListener('mouseleave', function () {
    CheckBackground(cnButton);
}, false);

enButton.addEventListener('mouseleave', function () {
    CheckBackground(enButton);
}, false);

SwitchLanguage(true);

function OnMouseEnter(button) {
    if (button.style.backgroundColor == colorKon) {
        return;
    } else {
        button.style.backgroundColor = colorKon;
        button.style.color = colorWhite;
    }
}

function CheckBackground(button) {
    if (button != selected) {
        button.style.backgroundColor = colorWhite;
        button.style.color = colorKon;
    }
}

function SwitchLanguage(toEnglish) {
    selected = null;
    if (toEnglish) {
        for (var i = 0; i < enText.length; i++) {
            enText[i].style.display = 'block';
            cnText[i].style.display = 'none';
            enButton.style.backgroundColor = colorKon;
            enButton.style.color = colorWhite;
            cnButton.style.backgroundColor = colorWhite;
            cnButton.style.color = colorKon;
            selected = enButton;
        }
    } else {
        for (var i = 0; i < enText.length; i++) {
            enText[i].style.display = 'none';
            cnText[i].style.display = 'block';
            enButton.style.backgroundColor = colorWhite;
            enButton.style.color = colorKon;
            cnButton.style.backgroundColor = colorKon;
            cnButton.style.color = colorWhite;
            selected = cnButton;
        }
    }
}