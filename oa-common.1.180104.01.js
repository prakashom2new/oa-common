"user strict";

function checkReady() {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        docReady ();
    } else {
        document.addEventListener('DOMContentLoaded', docReady);
    }
}
checkReady ();

function docReady () {
    // oa-dropdown
    function oaDropdown () {  
        var oaDropdowns = document.getElementsByClassName ("oa-dropdown-trigger");
        for (var i = 0; i < oaDropdowns.length; i++) {
            oaDropdowns[i].addEventListener ("click", function () {
                var dataTarget = this.getAttribute ("data-oa-target");
                var dropdownMenu = document.getElementById (dataTarget);
                if (dropdownMenu.classList.contains ("oa-hidden")) {
                    dropdownMenu.classList.remove ("oa-hidden");
                } else {
                    dropdownMenu.classList.add ("oa-hidden");
                }
            }, false);
        }
    } oaDropdown ();
}

// Notification box
function oaCreateNotification (data, bTimeOut, time) {
    var markup = null,
        randomize = Date.now() + "",
        notificationBoxID = "ele-" + randomize.replace(/\./g, "") + "-notification-box",
        notifBox = document.createElement ("div");

    notifBox.setAttribute ("id", notificationBoxID);
    notifBox.setAttribute ("class", "oa-notification-box");
    markup = "<p class='oa-notification-box__msg'></p>"
            + "<span class='oa-notification-box__close'><i class='fa fa-times-circle-o' aria-hidden='true'></i></span>";

    notifBox.innerHTML = markup;
    notifBox.querySelectorAll (".oa-notification-box__msg")[0].innerHTML = data;
    notifBox.querySelectorAll (".oa-notification-box__close")[0].addEventListener ("click", function () {
        notifBox.remove ();
    });

    document.body.appendChild (notifBox);

    if (bTimeOut) {
        setTimeout(function() {
            notifBox.remove ();
        }, time);
    }
}