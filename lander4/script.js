// link for offer
const offerURL = "https://cnboshi.xyz/click";

// link for back button
const backURL = "https://cnboshi.xyz/click";

// CTA button listener 
window.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("go");
    Array.from(elements).forEach(function (element) {
        element.addEventListener("click", function (event) {
            window.onbeforeunload = null;
            window.location = `${offerURL}`;
        });
    });
});

// back button script
!function () {
    var t;
    try {
        const URL = window.location.href.split(/[#]/)[0];
        for (t = 0; 10 > t; ++t) history.pushState({}, "", URL + "#");
        onpopstate = function (event) {
            window.onbeforeunload = null;
            event.state && location.replace(`${backURL}`);
        };
    } catch (o) {
        console.log(o);
    }
}();

// Javascript for buttons
(function ($) {
    $.fn.showHide = function (options) {
        var defaults = {
            speed: 1e3,
            easing: "",
            changeText: 1,
            showText: "Show",
            hideText: "Hide"
        };
        var options = $.extend(defaults, options);
        $(this).click(function () {
            $(".toggleDiv").fadeOut(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr("rel");
            changeBg(toggleDiv);
            $(toggleDiv).fadeIn(options.speed, options.easing, function () {
                if (options.changeText == 1) {
                    $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                }
            });
            return false;
        });
    };
})(jQuery);

function changeBg(toggleDiv) {
    if (toggleDiv === "#q0" || toggleDiv === "#q1" || toggleDiv === "#q2" || toggleDiv === "#q3" || toggleDiv === "#q4" || toggleDiv === "#q5" || toggleDiv === "#q6" || toggleDiv === "#q7" || toggleDiv === "#q8" || toggleDiv === "#q9") {
        $("body").css({
            background: "url(bg1.jpg)",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
            "background-position": "center center"
        });
        $(".layer").css({
            background: "none"
        });
    }
}

jQuery(document).ready(function ($) {
    $(".show_hide").showHide({
        speed: 400,
        easing: "",
        changeText: 1,
        showText: "View",
        hideText: ""
    });
});