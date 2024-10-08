function resolveCid(cid, pid) {
    var result = -1;
    if (typeof cid !== 'undefined' && cid !== null && !isNaN(parseInt(cid))) {
        result = cid;
    } else if (typeof pid !== 'undefined' && pid !== null && !isNaN(parseInt(pid))) {
        result = pid;
    }
    return result;
};

function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/([^/?#]+)$/i) || [, ''])[1]
    };
}

function getSubdomain() {
    return (window.location.href).split("/")[2].split(".")[0];
}

var setCookie = function(name, value) {
    var d = new Date;
    d.setTime(d.getTime() + 2 * parseInt(1) * 60 * 60 * 1e3);
    // d.setTime(d.getTime() + 1 * 1 * 3600); // 1 hour
    var expire = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";path=/;" + expire;
};

function getCookie(name) {
    for (var t = name + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        for (var r = n[i];
            " " === r.charAt(0);) r = r.substring(1);
        if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
    }
    return !1;
};

function replaceUrl(urlPattern, urlParams) {
    var url = urlPattern;
    Object.keys(urlParams).forEach(function(key) {
        url = url.replace("\[" + key + "\]", urlParams[key]);
    });
    return url.replace(/\[.*?\]/g, "");
};

function generateUUID() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function getUrlParams() {
    var e = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, i, a) {
        e[i] = a
    });
    return e;
}

function getBrowserInfo() {
    navigator.appVersion;
    var e, t, i, a = navigator.userAgent,
        n = navigator.appName,
        r = "" + parseFloat(navigator.appVersion),
        o = parseInt(navigator.appVersion, 10);
    o = parseInt(navigator.appVersion, 10);
    return -1 != (t = a.indexOf("Opera")) && (n = "Opera", r = a.substring(t + 6), -1 != (t = a.indexOf("Version")) && (r = a.substring(t + 8))), -1 != (t = a.indexOf("OPR")) ? (n = "Opera", r = a.substring(t + 4)) : -1 != (t = a.indexOf("MSIE")) ? (n = "Microsoft Internet Explorer", r = a.substring(t + 5)) : -1 != (t = a.indexOf("Chrome")) ? (n = "Chrome", r = a.substring(t + 7)) : -1 != (t = a.indexOf("Safari")) ? (n = "Safari", r = a.substring(t + 7), -1 != (t = a.indexOf("Version")) && (r = a.substring(t + 8))) : -1 != (t = a.indexOf("Firefox")) ? (n = "Firefox", r = a.substring(t + 8)) : -1 != a.indexOf("Trident/") ? (n = "Microsoft Internet Explorer", r = a.substring(a.indexOf("rv:") + 3)) : (e = a.lastIndexOf(" ") + 1) < (t = a.lastIndexOf("/")) && (n = a.substring(e, t), r = a.substring(t + 1), n.toLowerCase() == n.toUpperCase() && (n = navigator.appName)), -1 != (i = r.indexOf(";")) && (r = r.substring(0, i)), -1 != (i = r.indexOf(" ")) && (r = r.substring(0, i)), -1 != (i = r.indexOf(")")) && (r = r.substring(0, i)), o = parseInt("" + r, 10), isNaN(o) && (r = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), {
        browser: n,
        version: r,
        majorVersion: o
    }
}

function getLanguage() {
    return navigator.language || navigator.userLanguage
}

function getResolution() {
    var e = "";
    return screen.width && (e += (screen.width ? screen.width : "") + " x " + (screen.height ? screen.height : "")), e
}

function getDeviceType() {
    var e = 1,
        t = "desktop";
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = 2)
    }(navigator.userAgent || navigator.vendor || window.opera), 2 == e && (t = "mobile"), t
}

function getSystemInfo() {
    var e = navigator.userAgent,
        t = navigator.appVersion,
        i = "-",
        a = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
        }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
        }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
        }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: "Windows CE",
            r: /Windows CE/
        }, {
            s: "Windows 3.11",
            r: /Win16/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Open BSD",
            r: /OpenBSD/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: "QNX",
            r: /QNX/
        }, {
            s: "UNIX",
            r: /UNIX/
        }, {
            s: "BeOS",
            r: /BeOS/
        }, {
            s: "OS/2",
            r: /OS\/2/
        }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }];
    for (var n in a) {
        var r = a[n];
        if (r.r.test(e)) {
            i = r.s;
            break
        }
    }
    var o = "-";
    switch (/Windows/.test(i) && (o = /Windows (.*)/.exec(i)[1], i = "Windows"), i) {
        case "Mac OS X":
            o = /Mac OS X (10[\.\_\d]+)/.exec(e)[1];
            break;
        case "Android":
            o = /Android ([\.\_\d]+)/.exec(e)[1];
            break;
        case "iOS":
            o = (o = /OS (\d+)_(\d+)_?(\d+)?/.exec(t))[1] + "." + o[2] + "." + (0 | o[3])
    }
    return {
        os: i,
        osVersion: o
    }
}

function sendConversion(url) {
    $("body").append("<img height='1' width='1' src='" + url + "'/>");
};

function isWrongBrowser() {
    var browserInfo = getBrowserInfo();
    return (parseInt(browserInfo['majorVersion']) <= 52 && browserInfo['browser'] == 'Chrome') ||
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
};

function closePopup() {
    if (window.self) {
        setTimeout(function() {
            window.self.close();
        }, 5000);
    }
};