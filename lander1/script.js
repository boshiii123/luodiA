// link for offer
const offerURL = "https://afflift.rocks/r/go";

// link for back button
const backURL = "https://afflift.rocks/r/go";

// CTA button listener 
window.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("go");
    Array.from(elements).forEach(function(element) {
        element.addEventListener("click", function(event) {
            window.onbeforeunload = null;
            window.location = `${offerURL}`;
        });
    });
});

// back button script
!function() {
    var t;
    try {
        const URL = window.location.href.split(/[#]/)[0];
        for (t = 0; 10 > t; ++t) history.pushState({}, "", URL + "#");
        onpopstate = function(event) {
            window.onbeforeunload = null;
            event.state && location.replace(`${backURL}`);
        };
    } catch (o) {
        console.log(o);
    }
}();

// Javascript for buttons
document.getElementsByClassName("step")[0].addEventListener("click", e => {
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    document.getElementById("1").classList.add("active");
    document.getElementById("2").classList.remove("active");
    document.getElementById("hispan").style.display = "none";
});