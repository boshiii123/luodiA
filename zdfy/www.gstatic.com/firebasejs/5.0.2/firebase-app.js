! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.firebase = e()
}(this, function() {
    "use strict";
    ! function(t) {
        if (!t.fetch) {
            var e = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                n = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                o = ArrayBuffer.isView || function(t) {
                    return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                };
            f.prototype.append = function(t, e) {
                t = a(t), e = c(e);
                var r = this.map[t];
                this.map[t] = r ? r + "," + e : e
            }, f.prototype.delete = function(t) {
                delete this.map[a(t)]
            }, f.prototype.get = function(t) {
                return t = a(t), this.has(t) ? this.map[t] : null
            }, f.prototype.has = function(t) {
                return this.map.hasOwnProperty(a(t))
            }, f.prototype.set = function(t, e) {
                this.map[a(t)] = c(e)
            }, f.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, f.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push(r)
                }), u(t)
            }, f.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), u(t)
            }, f.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push([r, e])
                }), u(t)
            }, e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            v.prototype.clone = function() {
                return new v(this, {
                    body: this._bodyInit
                })
            }, y.call(v.prototype), y.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var t = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var s = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (-1 === s.indexOf(e)) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = f, t.Request = v, t.Response = m, t.fetch = function(t, r) {
                return new Promise(function(n, o) {
                    var i = new v(t, r),
                        s = new XMLHttpRequest;
                    s.onload = function() {
                        var t, e, r = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: (t = s.getAllResponseHeaders() || "", e = new f, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                var r = t.split(":"),
                                    n = r.shift().trim();
                                if (n) {
                                    var o = r.join(":").trim();
                                    e.append(n, o)
                                }
                            }), e)
                        };
                        r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                        var o = "response" in s ? s.response : s.responseText;
                        n(new m(o, r))
                    }, s.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, s.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, s.open(i.method, i.url, !0), "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1), "responseType" in s && e.blob && (s.responseType = "blob"), i.headers.forEach(function(t, e) {
                        s.setRequestHeader(e, t)
                    }), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }

        function a(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function c(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function u(t) {
            var r = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return e.iterable && (r[Symbol.iterator] = function() {
                return r
            }), r
        }

        function f(t) {
            this.map = {}, t instanceof f ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function h(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function p(t) {
            return new Promise(function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            })
        }

        function l(t) {
            var e = new FileReader,
                r = p(e);
            return e.readAsArrayBuffer(t), r
        }

        function d(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && n(t)) this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !o(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = d(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, e.blob && (this.blob = function() {
                var t = h(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
            }), this.text = function() {
                var t, e, r, n = h(this);
                if (n) return n;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = p(e), e.readAsText(t), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function v(t, e) {
            var r, n, o = (e = e || {}).body;
            if (t instanceof v) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), i.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o)
        }

        function b(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var r = t.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }), e
        }

        function m(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : void 0);
    var t = setTimeout;

    function e() {}

    function r(t) {
        if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], a(t, this)
    }

    function n(t, e) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, r._immediateFn(function() {
            var r = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== r) {
                var n;
                try {
                    n = r(t._value)
                } catch (t) {
                    return void i(e.promise, t)
                }
                o(e.promise, n)
            } else(1 === t._state ? o : i)(e.promise, t._value)
        })) : t._deferreds.push(e)
    }

    function o(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof r) return t._state = 3, t._value = e, void s(t);
                if ("function" == typeof n) return void a((o = n, c = e, function() {
                    o.apply(c, arguments)
                }), t)
            }
            t._state = 1, t._value = e, s(t)
        } catch (e) {
            i(t, e)
        }
        var o, c
    }

    function i(t, e) {
        t._state = 2, t._value = e, s(t)
    }

    function s(t) {
        2 === t._state && 0 === t._deferreds.length && r._immediateFn(function() {
            t._handled || r._unhandledRejectionFn(t._value)
        });
        for (var e = 0, o = t._deferreds.length; e < o; e++) n(t, t._deferreds[e]);
        t._deferreds = null
    }

    function a(t, e) {
        var r = !1;
        try {
            t(function(t) {
                r || (r = !0, o(e, t))
            }, function(t) {
                r || (r = !0, i(e, t))
            })
        } catch (t) {
            if (r) return;
            r = !0, i(e, t)
        }
    }
    r.prototype.catch = function(t) {
        return this.then(null, t)
    }, r.prototype.then = function(t, r) {
        var o = new this.constructor(e);
        return n(this, new function(t, e, r) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = r
        }(t, r, o)), o
    }, r.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(r) {
            return e.resolve(t()).then(function() {
                return r
            })
        }, function(r) {
            return e.resolve(t()).then(function() {
                return e.reject(r)
            })
        })
    }, r.all = function(t) {
        return new r(function(e, r) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var n = Array.prototype.slice.call(t);
            if (0 === n.length) return e([]);
            var o = n.length;

            function i(t, s) {
                try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                        var a = s.then;
                        if ("function" == typeof a) return void a.call(s, function(e) {
                            i(t, e)
                        }, r)
                    }
                    n[t] = s, 0 == --o && e(n)
                } catch (t) {
                    r(t)
                }
            }
            for (var s = 0; s < n.length; s++) i(s, n[s])
        })
    }, r.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
            e(t)
        })
    }, r.reject = function(t) {
        return new r(function(e, r) {
            r(t)
        })
    }, r.race = function(t) {
        return new r(function(e, r) {
            for (var n = 0, o = t.length; n < o; n++) t[n].then(e, r)
        })
    }, r._immediateFn = "function" == typeof setImmediate && function(t) {
        setImmediate(t)
    } || function(e) {
        t(e, 0)
    }, r._unhandledRejectionFn = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    var c = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();

    function u(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    c.Promise || (c.Promise = r);
    var f = u(function(t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }),
        h = u(function(t) {
            var e = t.exports = {
                version: "2.5.5"
            };
            "number" == typeof __e && (__e = e)
        }),
        p = (h.version, function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }),
        l = function(t) {
            if (!p(t)) throw TypeError(t + " is not an object!");
            return t
        },
        d = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        y = !d(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        v = f.document,
        b = p(v) && p(v.createElement),
        m = !y && !d(function() {
            return 7 != Object.defineProperty((t = "div", b ? v.createElement(t) : {}), "a", {
                get: function() {
                    return 7
                }
            }).a;
            var t
        }),
        _ = Object.defineProperty,
        w = {
            f: y ? Object.defineProperty : function(t, e, r) {
                if (l(t), e = function(t, e) {
                        if (!p(t)) return t;
                        var r, n;
                        if (e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
                        if ("function" == typeof(r = t.valueOf) && !p(n = r.call(t))) return n;
                        if (!e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
                        throw TypeError("Can't convert object to primitive value")
                    }(e, !0), l(r), m) try {
                    return _(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                return "value" in r && (t[e] = r.value), t
            }
        },
        g = y ? function(t, e, r) {
            return w.f(t, e, function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        A = {}.hasOwnProperty,
        E = function(t, e) {
            return A.call(t, e)
        },
        O = 0,
        P = Math.random(),
        T = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++O + P).toString(36))
        },
        j = u(function(t) {
            var e = T("src"),
                r = Function.toString,
                n = ("" + r).split("toString");
            h.inspectSource = function(t) {
                return r.call(t)
            }, (t.exports = function(t, r, o, i) {
                var s = "function" == typeof o;
                s && (E(o, "name") || g(o, "name", r)), t[r] !== o && (s && (E(o, e) || g(o, e, t[r] ? "" + t[r] : n.join(String(r)))), t === f ? t[r] = o : i ? t[r] ? t[r] = o : g(t, r, o) : (delete t[r], g(t, r, o)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[e] || r.call(this)
            })
        }),
        S = function(t, e, r) {
            if (function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!")
                }(t), void 0 === e) return t;
            switch (r) {
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, o) {
                        return t.call(e, r, n, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        x = function(t, e, r) {
            var n, o, i, s, a = t & x.F,
                c = t & x.G,
                u = t & x.S,
                p = t & x.P,
                l = t & x.B,
                d = c ? f : u ? f[e] || (f[e] = {}) : (f[e] || {}).prototype,
                y = c ? h : h[e] || (h[e] = {}),
                v = y.prototype || (y.prototype = {});
            for (n in c && (r = e), r) i = ((o = !a && d && void 0 !== d[n]) ? d : r)[n], s = l && o ? S(i, f) : p && "function" == typeof i ? S(Function.call, i) : i, d && j(d, n, i, t & x.U), y[n] != i && g(y, n, s), p && v[n] != i && (v[n] = i)
        };
    f.core = h, x.F = 1, x.G = 2, x.S = 4, x.P = 8, x.B = 16, x.W = 32, x.U = 64, x.R = 128;
    var k = x,
        F = {}.toString,
        B = function(t) {
            return F.call(t).slice(8, -1)
        },
        D = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == B(t) ? t.split("") : Object(t)
        },
        I = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        },
        N = Math.ceil,
        R = Math.floor,
        U = Math.min,
        C = function(t) {
            return t > 0 ? U(function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? R : N)(t)
            }(t), 9007199254740991) : 0
        },
        L = Array.isArray || function(t) {
            return "Array" == B(t)
        },
        z = f["__core-js_shared__"] || (f["__core-js_shared__"] = {}),
        M = function(t) {
            return z[t] || (z[t] = {})
        },
        W = u(function(t) {
            var e = M("wks"),
                r = f.Symbol,
                n = "function" == typeof r;
            (t.exports = function(t) {
                return e[t] || (e[t] = n && r[t] || (n ? r : T)("Symbol." + t))
            }).store = e
        }),
        $ = W("species"),
        q = function(t, e) {
            return new(function(t) {
                var e;
                return L(t) && ("function" != typeof(e = t.constructor) || e !== Array && !L(e.prototype) || (e = void 0), p(e) && null === (e = e[$]) && (e = void 0)), void 0 === e ? Array : e
            }(t))(e)
        },
        H = function(t, e) {
            var r = 1 == t,
                n = 2 == t,
                o = 3 == t,
                i = 4 == t,
                s = 6 == t,
                a = 5 == t || s,
                c = e || q;
            return function(e, u, f) {
                for (var h, p, l = Object(I(e)), d = D(l), y = S(u, f, 3), v = C(d.length), b = 0, m = r ? c(e, v) : n ? c(e, 0) : void 0; v > b; b++)
                    if ((a || b in d) && (p = y(h = d[b], b, l), t))
                        if (r) m[b] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return b;
                    case 2:
                        m.push(h)
                } else if (i) return !1;
                return s ? -1 : o || i ? i : m
            }
        },
        G = W("unscopables"),
        K = Array.prototype;
    void 0 == K[G] && g(K, G, {});
    var V = function(t) {
            K[G][t] = !0
        },
        X = H(5),
        J = !0;
    "find" in [] && Array(1).find(function() {
        J = !1
    }), k(k.P + k.F * J, "Array", {
        find: function(t) {
            return X(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), V("find");
    h.Array.find;
    var Q = H(6),
        Y = !0;
    "findIndex" in [] && Array(1).findIndex(function() {
        Y = !1
    }), k(k.P + k.F * Y, "Array", {
        findIndex: function(t) {
            return Q(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), V("findIndex");
    h.Array.findIndex;
    var Z = W("match"),
        tt = function(t, e, r) {
            if (p(n = e) && (void 0 !== (o = n[Z]) ? o : "RegExp" == B(n))) throw TypeError("String#" + r + " doesn't accept regex!");
            var n, o;
            return String(I(t))
        },
        et = W("match"),
        rt = "".startsWith;
    k(k.P + k.F * function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (r) {
            try {
                return e[et] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }("startsWith"), "String", {
        startsWith: function(t) {
            var e = tt(this, t, "startsWith"),
                r = C(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                n = String(t);
            return rt ? rt.call(e, n, r) : e.slice(r, r + n.length) === n
        }
    });
    h.String.startsWith;
    var nt = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e
    } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
    };

    function ot(t, e) {
        if (!(e instanceof Object)) return e;
        switch (e.constructor) {
            case Date:
                return new Date(e.getTime());
            case Object:
                void 0 === t && (t = {});
                break;
            case Array:
                t = [];
                break;
            default:
                return e
        }
        for (var r in e) e.hasOwnProperty(r) && (t[r] = ot(t[r], e[r]));
        return t
    }

    function it(t, e, r) {
        t[e] = r
    }
    var st = "FirebaseError",
        at = Error.captureStackTrace,
        ct = function() {
            return function(t, e) {
                if (this.code = t, this.message = e, at) at(this, ut.prototype.create);
                else {
                    var r = Error.apply(this, arguments);
                    this.name = st, Object.defineProperty(this, "stack", {
                        get: function() {
                            return r.stack
                        }
                    })
                }
            }
        }();
    ct.prototype = Object.create(Error.prototype), ct.prototype.constructor = ct, ct.prototype.name = st;
    var ut = function() {
        function t(t, e, r) {
            this.service = t, this.serviceName = e, this.errors = r, this.pattern = /\{\$([^}]+)}/g
        }
        return t.prototype.create = function(t, e) {
            void 0 === e && (e = {});
            var r, n = this.errors[t],
                o = this.service + "/" + t;
            r = void 0 === n ? "Error" : n.replace(this.pattern, function(t, r) {
                var n = e[r];
                return void 0 !== n ? n.toString() : "<" + r + "?>"
            }), r = this.serviceName + ": " + r + " (" + o + ").";
            var i = new ct(o, r);
            for (var s in e) e.hasOwnProperty(s) && "_" !== s.slice(-1) && (i[s] = e[s]);
            return i
        }, t
    }();
    ! function(t) {
        function e() {
            var e = t.call(this) || this;
            e.chain_ = [], e.buf_ = [], e.W_ = [], e.pad_ = [], e.inbuf_ = 0, e.total_ = 0, e.blockSize = 64, e.pad_[0] = 128;
            for (var r = 1; r < e.blockSize; ++r) e.pad_[r] = 0;
            return e.reset(), e
        }(function(t, e) {
            function r() {
                this.constructor = t
            }
            nt(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        })(e, t), e.prototype.reset = function() {
            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
        }, e.prototype.compress_ = function(t, e) {
            e || (e = 0);
            var r = this.W_;
            if ("string" == typeof t)
                for (var n = 0; n < 16; n++) r[n] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
            else
                for (n = 0; n < 16; n++) r[n] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
            for (n = 16; n < 80; n++) {
                var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
                r[n] = 4294967295 & (o << 1 | o >>> 31)
            }
            var i, s, a = this.chain_[0],
                c = this.chain_[1],
                u = this.chain_[2],
                f = this.chain_[3],
                h = this.chain_[4];
            for (n = 0; n < 80; n++) {
                n < 40 ? n < 20 ? (i = f ^ c & (u ^ f), s = 1518500249) : (i = c ^ u ^ f, s = 1859775393) : n < 60 ? (i = c & u | f & (c | u), s = 2400959708) : (i = c ^ u ^ f, s = 3395469782);
                o = (a << 5 | a >>> 27) + i + h + s + r[n] & 4294967295;
                h = f, f = u, u = 4294967295 & (c << 30 | c >>> 2), c = a, a = o
            }
            this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + c & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + f & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295
        }, e.prototype.update = function(t, e) {
            if (null != t) {
                void 0 === e && (e = t.length);
                for (var r = e - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < e;) {
                    if (0 == i)
                        for (; n <= r;) this.compress_(t, n), n += this.blockSize;
                    if ("string" == typeof t) {
                        for (; n < e;)
                            if (o[i] = t.charCodeAt(n), ++n, ++i == this.blockSize) {
                                this.compress_(o), i = 0;
                                break
                            }
                    } else
                        for (; n < e;)
                            if (o[i] = t[n], ++n, ++i == this.blockSize) {
                                this.compress_(o), i = 0;
                                break
                            }
                }
                this.inbuf_ = i, this.total_ += e
            }
        }, e.prototype.digest = function() {
            var t = [],
                e = 8 * this.total_;
            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            for (var r = this.blockSize - 1; r >= 56; r--) this.buf_[r] = 255 & e, e /= 256;
            this.compress_(this.buf_);
            var n = 0;
            for (r = 0; r < 5; r++)
                for (var o = 24; o >= 0; o -= 8) t[n] = this.chain_[r] >> o & 255, ++n;
            return t
        }
    }(function() {
        return function() {
            this.blockSize = -1
        }
    }());

    function ft(t, e) {
        var r = new ht(t, e);
        return r.subscribe.bind(r)
    }
    var ht = function() {
        function t(t, e) {
            var r = this;
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function() {
                t(r)
            }).catch(function(t) {
                r.error(t)
            })
        }
        return t.prototype.next = function(t) {
            this.forEachObserver(function(e) {
                e.next(t)
            })
        }, t.prototype.error = function(t) {
            this.forEachObserver(function(e) {
                e.error(t)
            }), this.close(t)
        }, t.prototype.complete = function() {
            this.forEachObserver(function(t) {
                t.complete()
            }), this.close()
        }, t.prototype.subscribe = function(t, e, r) {
            var n, o = this;
            if (void 0 === t && void 0 === e && void 0 === r) throw new Error("Missing Observer.");
            void 0 === (n = function(t, e) {
                if ("object" != typeof t || null === t) return !1;
                for (var r = 0, n = e; r < n.length; r++) {
                    var o = n[r];
                    if (o in t && "function" == typeof t[o]) return !0
                }
                return !1
            }(t, ["next", "error", "complete"]) ? t : {
                next: t,
                error: e,
                complete: r
            }).next && (n.next = pt), void 0 === n.error && (n.error = pt), void 0 === n.complete && (n.complete = pt);
            var i = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(function() {
                try {
                    o.finalError ? n.error(o.finalError) : n.complete()
                } catch (t) {}
            }), this.observers.push(n), i
        }, t.prototype.unsubscribeOne = function(t) {
            void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }, t.prototype.forEachObserver = function(t) {
            if (!this.finalized)
                for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t)
        }, t.prototype.sendOne = function(t, e) {
            var r = this;
            this.task.then(function() {
                if (void 0 !== r.observers && void 0 !== r.observers[t]) try {
                    e(r.observers[t])
                } catch (t) {
                    "undefined" != typeof console && console.error && console.error(t)
                }
            })
        }, t.prototype.close = function(t) {
            var e = this;
            this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then(function() {
                e.observers = void 0, e.onNoObservers = void 0
            }))
        }, t
    }();

    function pt() {}
    var lt = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        dt = "[DEFAULT]",
        yt = [],
        vt = function() {
            function t(t, e, r) {
                this.firebase_ = r, this.isDeleted_ = !1, this.services_ = {}, this.name_ = e.name, this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled || !1, this.options_ = ot(void 0, t), this.INTERNAL = {
                    getUid: function() {
                        return null
                    },
                    getToken: function() {
                        return Promise.resolve(null)
                    },
                    addAuthTokenListener: function(t) {
                        yt.push(t), setTimeout(function() {
                            return t(null)
                        }, 0)
                    },
                    removeAuthTokenListener: function(t) {
                        yt = yt.filter(function(e) {
                            return e !== t
                        })
                    }
                }
            }
            return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
                get: function() {
                    return this.checkDestroyed_(), this._automaticDataCollectionEnabled
                },
                set: function(t) {
                    this.checkDestroyed_(), this._automaticDataCollectionEnabled = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this.checkDestroyed_(), this.name_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "options", {
                get: function() {
                    return this.checkDestroyed_(), this.options_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.delete = function() {
                var t = this;
                return new Promise(function(e) {
                    t.checkDestroyed_(), e()
                }).then(function() {
                    t.firebase_.INTERNAL.removeApp(t.name_);
                    var e = [];
                    return Object.keys(t.services_).forEach(function(r) {
                        Object.keys(t.services_[r]).forEach(function(n) {
                            e.push(t.services_[r][n])
                        })
                    }), Promise.all(e.map(function(t) {
                        return t.INTERNAL.delete()
                    }))
                }).then(function() {
                    t.isDeleted_ = !0, t.services_ = {}
                })
            }, t.prototype._getService = function(t, e) {
                if (void 0 === e && (e = dt), this.checkDestroyed_(), this.services_[t] || (this.services_[t] = {}), !this.services_[t][e]) {
                    var r = e !== dt ? e : void 0,
                        n = this.firebase_.INTERNAL.factories[t](this, this.extendApp.bind(this), r);
                    this.services_[t][e] = n
                }
                return this.services_[t][e]
            }, t.prototype.extendApp = function(t) {
                var e = this;
                ot(this, t), t.INTERNAL && t.INTERNAL.addAuthTokenListener && (yt.forEach(function(t) {
                    e.INTERNAL.addAuthTokenListener(t)
                }), yt = [])
            }, t.prototype.checkDestroyed_ = function() {
                this.isDeleted_ && bt("app-deleted", {
                    name: this.name_
                })
            }, t
        }();

    function bt(t, e) {
        throw mt.create(t, e)
    }
    vt.prototype.name && vt.prototype.options || vt.prototype.delete || console.log("dc");
    var mt = new ut("app", "Firebase", {
        "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$name}",
        "duplicate-app": "Firebase App named '{$name}' already exists",
        "app-deleted": "Firebase App named '{$name}' already deleted",
        "duplicate-service": "Firebase service named '{$name}' already registered",
        "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
        "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
    });
    return function t() {
        var e = {},
            r = {},
            n = {},
            o = {
                __esModule: !0,
                initializeApp: function(t, r) {
                    if (void 0 === r && (r = {}), "object" != typeof r || null === r) {
                        var n = r;
                        r = {
                            name: n
                        }
                    }
                    var i = r;
                    void 0 === i.name && (i.name = dt);
                    var s = i.name;
                    "string" == typeof s && s || bt("bad-app-name", {
                        name: s + ""
                    }), lt(e, s) && bt("duplicate-app", {
                        name: s
                    });
                    var c = new vt(t, i, o);
                    return e[s] = c, a(c, "create"), c
                },
                app: i,
                apps: null,
                Promise: Promise,
                SDK_VERSION: "5.0.2",
                INTERNAL: {
                    registerService: function(t, e, a, c, u) {
                        r[t] && bt("duplicate-service", {
                            name: t
                        }), r[t] = e, c && (n[t] = c, s().forEach(function(t) {
                            c("create", t)
                        }));
                        var f = function(e) {
                            return void 0 === e && (e = i()), "function" != typeof e[t] && bt("invalid-app-argument", {
                                name: t
                            }), e[t]()
                        };
                        return void 0 !== a && ot(f, a), o[t] = f, vt.prototype[t] = function() {
                            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return this._getService.bind(this, t).apply(this, u ? e : [])
                        }, f
                    },
                    createFirebaseNamespace: t,
                    extendNamespace: function(t) {
                        ot(o, t)
                    },
                    createSubscribe: ft,
                    ErrorFactory: ut,
                    removeApp: function(t) {
                        a(e[t], "delete"), delete e[t]
                    },
                    factories: r,
                    useAsService: c,
                    Promise: Promise,
                    deepExtend: ot
                }
            };

        function i(t) {
            return lt(e, t = t || dt) || bt("no-app", {
                name: t
            }), e[t]
        }

        function s() {
            return Object.keys(e).map(function(t) {
                return e[t]
            })
        }

        function a(t, e) {
            Object.keys(r).forEach(function(r) {
                var o = c(t, r);
                null !== o && n[o] && n[o](e, t)
            })
        }

        function c(t, e) {
            if ("serverAuth" === e) return null;
            var r = e;
            return t.options, r
        }
        return it(o, "default", o), Object.defineProperty(o, "apps", {
            get: s
        }), it(i, "App", vt), o
    }()
});
//# sourceMappingURL=firebase-app.js.map