"user strict";

    function oaCreateNotification (data, status, bTimeOut, time) {
        var markup = null,
            notificationBoxID = data.substring(0, 3) + "-notification-box",
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