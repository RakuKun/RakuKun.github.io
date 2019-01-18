var enButton = document.getElementById('en-lang'),
    cnButton = document.getElementById('cn-lang'),
    selected = null,
    enText = document.getElementsByClassName('main-text-en'),
    cnText = document.getElementsByClassName('main-text-cn');
let colorKon = "rgb(17,35,64)",
    colorWhite = "rgb(255,255,255)";

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
            enText[i].style.display = "block";
            enButton.style.backgroundColor = colorKon;
            enButton.style.color = colorWhite;
            selected = enButton;
        }
        for (var j = 0; j < cnText.length; j++) {
            cnText[j].style.display = "none";
            cnButton.style.backgroundColor = colorWhite;
            cnButton.style.color = colorKon;
        }
    } else {
        for (var i = 0; i < enText.length; i++) {
            enText[i].style.display = "none";
            enButton.style.backgroundColor = colorWhite;
            enButton.style.color = colorKon;
            selected = cnButton;
        }
        for (var j = 0; j < cnText.length; j++) {
            cnText[j].style.display = "block";
            cnButton.style.backgroundColor = colorKon;
            cnButton.style.color = colorWhite;
        }
    }
}

SwitchLanguage(true);