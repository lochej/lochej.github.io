var profileTitle = "";

var timer = setTimeout(displayProfileTitle, 70);
var profileIdx = 0;

function displayProfileTitle() {

    var profileElement = document.getElementById("profile-title");

    if (profileIdx == 0) {
        //retrieve
        profileTitle = profileElement.innerHTML;
    }

    if (profileIdx > profileTitle.length) {
        return;
    }

    profileElement.innerHTML = profileTitle.substring(0, profileIdx++);
    setTimeout(displayProfileTitle, 40 + Math.random() * 80);
}


function printResume() {
    var profileElement = document.getElementById("profile-title");

    profileElement.innerHTML = profileTitle;
    window.print();
}