





// document.addEventListener("DOMContentLoaded", () => {

//     let vh = window.innerHeight * 0.01;
//     // Then we set the value in the --vh custom property to the root of the document
//     document.documentElement.style.setProperty("--vh", `${vh}px`);

//     window.addEventListener("resize", () => {
//       // We execute the same script as before
//       let vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     });
//     //for iOS
//     window.addEventListener(
//       "orientationchange",
//       function () {
//         let vh = window.innerHeight * 0.01;
//         document.documentElement.style.setProperty("--vh", `${vh}px`);
//       },
//       false
//     );

//     // REDIRECT AND SENDING DATA
//     function getAllUrlParams() {
//       var queryString = window.location.search.slice(1);
//       var obj = {};
//       if (queryString) {
//         queryString = queryString.split("#")[0];
//         var arr = queryString.split("&");

//         for (var i = 0; i < arr.length; i++) {
//           var a = arr[i].split("=");
//           var paramNum = undefined;
//           var paramName = a[0].replace(/\[\d*\]/, function (v) {
//             paramNum = v.slice(1, -1);
//             return "";
//           });
//           var paramValue = typeof a[1] === "undefined" ? true : a[1];
//           paramName = paramName.toLowerCase();
//           paramValue = paramValue.toLowerCase();
//           if (obj[paramName]) {
//             if (typeof obj[paramName] === "string") {
//               obj[paramName] = [obj[paramName]];
//             }
//             if (typeof paramNum === "undefined") {
//               obj[paramName].push(paramValue);
//             } else {
//               obj[paramName][paramNum] = paramValue;
//             }
//           } else {
//             obj[paramName] = paramValue;
//           }
//         }
//       }
//       return obj;
//     }

//     var domain = "borgach.com";
//     var t1 = "empty";
//     var t6 = "empty";

//     if (getAllUrlParams().domain !== undefined) {
//       domain = getAllUrlParams().domain;
//     }
//     if (getAllUrlParams().t1 !== undefined) {
//       t1 = getAllUrlParams().t1;
//     }
//     if (getAllUrlParams().lander !== undefined) {
//       t6 = getAllUrlParams().lander;
//     }



//     // Redirect
//     var redirect = "https://" + domain + "/click.php?lp=1";
//     console.info(redirect);

//     var additionalOffer = "https://ziptrck.com/ysdZKj?t1=" + t1 + "_add" + "&t6=" + t6;
//     console.info(additionalOffer);

//     function goRedirect() {
//       PreventExitPop = false;
//       window.open(redirect);
//       location.href = additionalOffer;
//     }

//     document.querySelectorAll(".redirect").forEach(function (el) {
//       el.addEventListener("click", function () {
//         goRedirect();
//       });
//     });


//     // Back
//     var back = "https://ziptrck.com/JJr7dX?t1=" + t1 + "_bb" + "&t6=" + t6;
//     console.info(back);

//     var windowAdvertising = "https://ziptrck.com/4PJQz4J5?t1=" + t1 + "_bb2" + "&t6=" + t6;
//     console.info(windowAdvertising);

//     function goBack() {
//       PreventExitPop = false;
//       window.open(windowAdvertising);
//       location.href = back;
//     }

//     document.querySelectorAll(".back").forEach(function (el) {
//       el.addEventListener("click", function () {
//         goBack();
//       });
//     });


//     // Native
//     var native = "https://ziptrck.com/h2bMkK?t1=" + t1 + "_nbb" + "&t6=" + t6;
//     console.info(native);

//     var count_click = 0;
//     var pagePersisted = false; // In case safari's native back persists (keeps) page state

//     function newLand() {
//       var msg = "New Lend";
//       var customUrl = "";
//       window.history.pushState(
//         { html: msg, pageTitle: "My Title" },
//         "",
//         customUrl
//       );
//       count_click++;
//     }
//     newLand();

//     window.onpopstate = function (event) {
//       if (count_click >= 0 && !pagePersisted) {
//         window.open(windowAdvertising);
//         window.location.replace(native);
//         window.location.href = native;
//       }

//       pagePersisted = false;
//     };

//     window.onpageshow = function (event) {
//       pagePersisted = event.persisted;
//     };


//   });





$(document).ready((function () {
  function e() {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 1500)
  }
  setTimeout(e, 2500);

  var t = window.navigator.userAgent.toLowerCase()
    , n = /'UCBrowser|MiuiBrowser|SamsungBrowser|opera mini|x11/i.test(t)
    , r = $("video-item");
  n && (r.hide("hide"),
    $(".video-block").addClass("mobile")),
    r.on("click", (function (e) {
      e.preventDefault(),
        r[0].play()
    }
    )),
    r.trigger("click");
  var i = $(".step-btn")
    , o = 0
    , a = $(".step-item");
  a.length;
  i.not(".submit-btn").on("click", (function () {
    o++,
      a.hide().eq(o).fadeIn(),
      e()
  }
  ))
}
));




