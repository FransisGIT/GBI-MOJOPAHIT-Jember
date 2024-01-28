/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/simple-datatables@9.0.0/dist/umd/simple-datatables.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
        ).simpleDatatables = t();
    }
})(function () {
    return (function t(e, s, i) {
        function n(o, r) {
            if (!s[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var d = new Error("Cannot find module '" + o + "'");
                    throw ((d.code = "MODULE_NOT_FOUND"), d);
                }
                var c = (s[o] = { exports: {} });
                e[o][0].call(
                    c.exports,
                    function (t) {
                        return n(e[o][1][t] || t);
                    },
                    c,
                    c.exports,
                    t,
                    e,
                    s,
                    i
                );
            }
            return s[o].exports;
        }
        for (
            var a = "function" == typeof require && require, o = 0;
            o < i.length;
            o++
        )
            n(i[o]);
        return n;
    })(
        {
            1: [
                function (t, e, s) {
                    (function (t) {
                        (function () {
                            "use strict";
                            const e = (t) =>
                                    "[object Object]" ===
                                    Object.prototype.toString.call(t),
                                i = (t) => {
                                    let s = !1;
                                    try {
                                        s = JSON.parse(t);
                                    } catch (t) {
                                        return !1;
                                    }
                                    return (
                                        !(
                                            null === s ||
                                            (!Array.isArray(s) && !e(s))
                                        ) && s
                                    );
                                },
                                n = (t, e) => {
                                    const s = document.createElement(t);
                                    if (e && "object" == typeof e)
                                        for (const t in e)
                                            "html" === t
                                                ? (s.innerHTML = e[t])
                                                : s.setAttribute(t, e[t]);
                                    return s;
                                },
                                a = (t) =>
                                    ["#text", "#comment"].includes(t.nodeName)
                                        ? t.data
                                        : t.childNodes
                                        ? t.childNodes.map((t) => a(t)).join("")
                                        : "",
                                o = (t) => {
                                    if (null == t) return "";
                                    if (
                                        t.hasOwnProperty("text") ||
                                        t.hasOwnProperty("data")
                                    ) {
                                        const e = t;
                                        return e.text ?? o(e.data);
                                    }
                                    return t.hasOwnProperty("nodeName")
                                        ? a(t)
                                        : String(t);
                                },
                                r = function (t) {
                                    return t
                                        .replace(/&/g, "&amp;")
                                        .replace(/</g, "&lt;")
                                        .replace(/>/g, "&gt;")
                                        .replace(/"/g, "&quot;");
                                },
                                l = function (t, e) {
                                    let s = 0,
                                        i = 0;
                                    for (; s < t + 1; )
                                        e[i].hidden || (s += 1), (i += 1);
                                    return i - 1;
                                },
                                d = function (t) {
                                    const e = {};
                                    if (t)
                                        for (const s of t) e[s.name] = s.value;
                                    return e;
                                },
                                c = (t) =>
                                    t
                                        ? t
                                              .trim()
                                              .split(" ")
                                              .map((t) => `.${t}`)
                                              .join("")
                                        : null,
                                h = (t, e) => {
                                    const s = e
                                        ?.split(" ")
                                        .some((e) => !t.classList.contains(e));
                                    return !s;
                                },
                                u = (t, e) =>
                                    t ? (e ? `${t} ${e}` : t) : e || "";
                            var p = (function () {
                                function t(t) {
                                    var e = this;
                                    void 0 === t && (t = {}),
                                        Object.entries(t).forEach(function (t) {
                                            var s = t[0],
                                                i = t[1];
                                            return (e[s] = i);
                                        });
                                }
                                return (
                                    (t.prototype.toString = function () {
                                        return JSON.stringify(this);
                                    }),
                                    (t.prototype.setValue = function (t, e) {
                                        return (this[t] = e), this;
                                    }),
                                    t
                                );
                            })();
                            function f(t) {
                                for (
                                    var e = arguments, s = [], i = 1;
                                    i < arguments.length;
                                    i++
                                )
                                    s[i - 1] = e[i];
                                return (
                                    null != t &&
                                    s.some(function (e) {
                                        var s, i;
                                        return (
                                            "function" ==
                                                typeof (null ===
                                                    (i =
                                                        null ===
                                                            (s =
                                                                null == t
                                                                    ? void 0
                                                                    : t.ownerDocument) ||
                                                        void 0 === s
                                                            ? void 0
                                                            : s.defaultView) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i[e]) &&
                                            t instanceof
                                                t.ownerDocument.defaultView[e]
                                        );
                                    })
                                );
                            }
                            function m(t, e, s) {
                                var i;
                                return (
                                    "#text" === t.nodeName
                                        ? (i = s.document.createTextNode(
                                              t.data
                                          ))
                                        : "#comment" === t.nodeName
                                        ? (i = s.document.createComment(t.data))
                                        : (e
                                              ? (i = s.document.createElementNS(
                                                    "http://www.w3.org/2000/svg",
                                                    t.nodeName
                                                ))
                                              : "svg" ===
                                                t.nodeName.toLowerCase()
                                              ? ((i =
                                                    s.document.createElementNS(
                                                        "http://www.w3.org/2000/svg",
                                                        "svg"
                                                    )),
                                                (e = !0))
                                              : (i = s.document.createElement(
                                                    t.nodeName
                                                )),
                                          t.attributes &&
                                              Object.entries(
                                                  t.attributes
                                              ).forEach(function (t) {
                                                  var e = t[0],
                                                      s = t[1];
                                                  return i.setAttribute(e, s);
                                              }),
                                          t.childNodes &&
                                              t.childNodes.forEach(function (
                                                  t
                                              ) {
                                                  return i.appendChild(
                                                      m(t, e, s)
                                                  );
                                              }),
                                          s.valueDiffing &&
                                              (t.value &&
                                                  f(
                                                      i,
                                                      "HTMLButtonElement",
                                                      "HTMLDataElement",
                                                      "HTMLInputElement",
                                                      "HTMLLIElement",
                                                      "HTMLMeterElement",
                                                      "HTMLOptionElement",
                                                      "HTMLProgressElement",
                                                      "HTMLParamElement"
                                                  ) &&
                                                  (i.value = t.value),
                                              t.checked &&
                                                  f(i, "HTMLInputElement") &&
                                                  (i.checked = t.checked),
                                              t.selected &&
                                                  f(i, "HTMLOptionElement") &&
                                                  (i.selected = t.selected))),
                                    i
                                );
                            }
                            var g = function (t, e) {
                                for (e = e.slice(); e.length > 0; ) {
                                    var s = e.splice(0, 1)[0];
                                    t = t.childNodes[s];
                                }
                                return t;
                            };
                            function b(t, e, s) {
                                var i,
                                    n,
                                    a,
                                    o = e[s._const.action],
                                    r = e[s._const.route];
                                [
                                    s._const.addElement,
                                    s._const.addTextElement,
                                ].includes(o) || (i = g(t, r));
                                var l = { diff: e, node: i };
                                if (s.preDiffApply(l)) return !0;
                                switch (o) {
                                    case s._const.addAttribute:
                                        if (!i || !f(i, "Element")) return !1;
                                        i.setAttribute(
                                            e[s._const.name],
                                            e[s._const.value]
                                        );
                                        break;
                                    case s._const.modifyAttribute:
                                        if (!i || !f(i, "Element")) return !1;
                                        i.setAttribute(
                                            e[s._const.name],
                                            e[s._const.newValue]
                                        ),
                                            f(i, "HTMLInputElement") &&
                                                "value" === e[s._const.name] &&
                                                (i.value =
                                                    e[s._const.newValue]);
                                        break;
                                    case s._const.removeAttribute:
                                        if (!i || !f(i, "Element")) return !1;
                                        i.removeAttribute(e[s._const.name]);
                                        break;
                                    case s._const.modifyTextElement:
                                        if (!i || !f(i, "Text")) return !1;
                                        s.textDiff(
                                            i,
                                            i.data,
                                            e[s._const.oldValue],
                                            e[s._const.newValue]
                                        ),
                                            f(
                                                i.parentNode,
                                                "HTMLTextAreaElement"
                                            ) &&
                                                (i.parentNode.value =
                                                    e[s._const.newValue]);
                                        break;
                                    case s._const.modifyValue:
                                        if (!i || void 0 === i.value) return !1;
                                        i.value = e[s._const.newValue];
                                        break;
                                    case s._const.modifyComment:
                                        if (!i || !f(i, "Comment")) return !1;
                                        s.textDiff(
                                            i,
                                            i.data,
                                            e[s._const.oldValue],
                                            e[s._const.newValue]
                                        );
                                        break;
                                    case s._const.modifyChecked:
                                        if (!i || void 0 === i.checked)
                                            return !1;
                                        i.checked = e[s._const.newValue];
                                        break;
                                    case s._const.modifySelected:
                                        if (!i || void 0 === i.selected)
                                            return !1;
                                        i.selected = e[s._const.newValue];
                                        break;
                                    case s._const.replaceElement:
                                        var d =
                                            "svg" ===
                                                e[
                                                    s._const.newValue
                                                ].nodeName.toLowerCase() ||
                                            "http://www.w3.org/2000/svg" ===
                                                i.parentNode.namespaceURI;
                                        i.parentNode.replaceChild(
                                            m(e[s._const.newValue], d, s),
                                            i
                                        );
                                        break;
                                    case s._const.relocateGroup:
                                        Array.apply(
                                            void 0,
                                            new Array(e[s._const.groupLength])
                                        )
                                            .map(function () {
                                                return i.removeChild(
                                                    i.childNodes[
                                                        e[s._const.from]
                                                    ]
                                                );
                                            })
                                            .forEach(function (t, n) {
                                                0 === n &&
                                                    (a =
                                                        i.childNodes[
                                                            e[s._const.to]
                                                        ]),
                                                    i.insertBefore(
                                                        t,
                                                        a || null
                                                    );
                                            });
                                        break;
                                    case s._const.removeElement:
                                        i.parentNode.removeChild(i);
                                        break;
                                    case s._const.addElement:
                                        var c = (u = r.slice()).splice(
                                            u.length - 1,
                                            1
                                        )[0];
                                        if (!f((i = g(t, u)), "Element"))
                                            return !1;
                                        i.insertBefore(
                                            m(
                                                e[s._const.element],
                                                "http://www.w3.org/2000/svg" ===
                                                    i.namespaceURI,
                                                s
                                            ),
                                            i.childNodes[c] || null
                                        );
                                        break;
                                    case s._const.removeTextElement:
                                        if (!i || 3 !== i.nodeType) return !1;
                                        var h = i.parentNode;
                                        h.removeChild(i),
                                            f(h, "HTMLTextAreaElement") &&
                                                (h.value = "");
                                        break;
                                    case s._const.addTextElement:
                                        var u;
                                        if (
                                            ((c = (u = r.slice()).splice(
                                                u.length - 1,
                                                1
                                            )[0]),
                                            (n = s.document.createTextNode(
                                                e[s._const.value]
                                            )),
                                            !(i = g(t, u)).childNodes)
                                        )
                                            return !1;
                                        i.insertBefore(
                                            n,
                                            i.childNodes[c] || null
                                        ),
                                            f(
                                                i.parentNode,
                                                "HTMLTextAreaElement"
                                            ) &&
                                                (i.parentNode.value =
                                                    e[s._const.value]);
                                        break;
                                    default:
                                        console.log("unknown action");
                                }
                                return (
                                    s.postDiffApply({
                                        diff: l.diff,
                                        node: l.node,
                                        newNode: n,
                                    }),
                                    !0
                                );
                            }
                            function v(t, e, s) {
                                var i = t[e];
                                (t[e] = t[s]), (t[s] = i);
                            }
                            var w = function () {
                                return (
                                    (w =
                                        Object.assign ||
                                        function (t) {
                                            for (
                                                var e,
                                                    s = arguments,
                                                    i = 1,
                                                    n = arguments.length;
                                                i < n;
                                                i++
                                            )
                                                for (var a in (e = s[i]))
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        a
                                                    ) && (t[a] = e[a]);
                                            return t;
                                        }),
                                    w.apply(this, arguments)
                                );
                            };
                            "function" == typeof SuppressedError &&
                                SuppressedError;
                            var _ = function (t) {
                                    var e = [];
                                    return (
                                        e.push(t.nodeName),
                                        "#text" !== t.nodeName &&
                                            "#comment" !== t.nodeName &&
                                            t.attributes &&
                                            (t.attributes.class &&
                                                e.push(
                                                    ""
                                                        .concat(t.nodeName, ".")
                                                        .concat(
                                                            t.attributes.class.replace(
                                                                / /g,
                                                                "."
                                                            )
                                                        )
                                                ),
                                            t.attributes.id &&
                                                e.push(
                                                    ""
                                                        .concat(t.nodeName, "#")
                                                        .concat(t.attributes.id)
                                                )),
                                        e
                                    );
                                },
                                y = function (t) {
                                    var e = {},
                                        s = {};
                                    return (
                                        t.forEach(function (t) {
                                            _(t).forEach(function (t) {
                                                var i = t in e;
                                                i || t in s
                                                    ? i &&
                                                      (delete e[t], (s[t] = !0))
                                                    : (e[t] = !0);
                                            });
                                        }),
                                        e
                                    );
                                },
                                N = function (t, e) {
                                    var s = y(t),
                                        i = y(e),
                                        n = {};
                                    return (
                                        Object.keys(s).forEach(function (t) {
                                            i[t] && (n[t] = !0);
                                        }),
                                        n
                                    );
                                },
                                D = function (t) {
                                    return (
                                        delete t.outerDone,
                                        delete t.innerDone,
                                        delete t.valueDone,
                                        !t.childNodes || t.childNodes.every(D)
                                    );
                                },
                                x = function (t) {
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        )
                                    )
                                        return {
                                            nodeName:
                                                "#text" === t.nodeName
                                                    ? "#text"
                                                    : "#comment",
                                            data: t.data,
                                        };
                                    var e = { nodeName: t.nodeName };
                                    return (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "attributes"
                                        ) &&
                                            (e.attributes = w(
                                                {},
                                                t.attributes
                                            )),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "checked"
                                        ) && (e.checked = t.checked),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "value"
                                        ) && (e.value = t.value),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "selected"
                                        ) && (e.selected = t.selected),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "childNodes"
                                        ) &&
                                            (e.childNodes = t.childNodes.map(
                                                function (t) {
                                                    return x(t);
                                                }
                                            )),
                                        e
                                    );
                                },
                                M = function (t, e) {
                                    if (
                                        ![
                                            "nodeName",
                                            "value",
                                            "checked",
                                            "selected",
                                            "data",
                                        ].every(function (s) {
                                            return t[s] === e[s];
                                        })
                                    )
                                        return !1;
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        )
                                    )
                                        return !0;
                                    if (
                                        Boolean(t.attributes) !==
                                        Boolean(e.attributes)
                                    )
                                        return !1;
                                    if (
                                        Boolean(t.childNodes) !==
                                        Boolean(e.childNodes)
                                    )
                                        return !1;
                                    if (t.attributes) {
                                        var s = Object.keys(t.attributes),
                                            i = Object.keys(e.attributes);
                                        if (s.length !== i.length) return !1;
                                        if (
                                            !s.every(function (s) {
                                                return (
                                                    t.attributes[s] ===
                                                    e.attributes[s]
                                                );
                                            })
                                        )
                                            return !1;
                                    }
                                    if (t.childNodes) {
                                        if (
                                            t.childNodes.length !==
                                            e.childNodes.length
                                        )
                                            return !1;
                                        if (
                                            !t.childNodes.every(function (
                                                t,
                                                s
                                            ) {
                                                return M(t, e.childNodes[s]);
                                            })
                                        )
                                            return !1;
                                    }
                                    return !0;
                                },
                                O = function (t, e, s, i, n) {
                                    if ((void 0 === n && (n = !1), !t || !e))
                                        return !1;
                                    if (t.nodeName !== e.nodeName) return !1;
                                    if (
                                        ["#text", "#comment"].includes(
                                            t.nodeName
                                        )
                                    )
                                        return !!n || t.data === e.data;
                                    if (t.nodeName in s) return !0;
                                    if (t.attributes && e.attributes) {
                                        if (t.attributes.id) {
                                            if (
                                                t.attributes.id !==
                                                e.attributes.id
                                            )
                                                return !1;
                                            if (
                                                ""
                                                    .concat(t.nodeName, "#")
                                                    .concat(t.attributes.id) in
                                                s
                                            )
                                                return !0;
                                        }
                                        if (
                                            t.attributes.class &&
                                            t.attributes.class ===
                                                e.attributes.class &&
                                            ""
                                                .concat(t.nodeName, ".")
                                                .concat(
                                                    t.attributes.class.replace(
                                                        / /g,
                                                        "."
                                                    )
                                                ) in s
                                        )
                                            return !0;
                                    }
                                    if (i) return !0;
                                    var a = t.childNodes
                                            ? t.childNodes.slice().reverse()
                                            : [],
                                        o = e.childNodes
                                            ? e.childNodes.slice().reverse()
                                            : [];
                                    if (a.length !== o.length) return !1;
                                    if (n)
                                        return a.every(function (t, e) {
                                            return t.nodeName === o[e].nodeName;
                                        });
                                    var r = N(a, o);
                                    return a.every(function (t, e) {
                                        return O(t, o[e], r, !0, !0);
                                    });
                                },
                                E = function (t, e) {
                                    return Array.apply(
                                        void 0,
                                        new Array(t)
                                    ).map(function () {
                                        return e;
                                    });
                                },
                                V = (function () {
                                    function t() {
                                        this.list = [];
                                    }
                                    return (
                                        (t.prototype.add = function (t) {
                                            var e;
                                            (e = this.list).push.apply(e, t);
                                        }),
                                        (t.prototype.forEach = function (t) {
                                            this.list.forEach(function (e) {
                                                return t(e);
                                            });
                                        }),
                                        t
                                    );
                                })();
                            function $(t, e) {
                                var s,
                                    i,
                                    n = t;
                                for (e = e.slice(); e.length > 0; )
                                    (i = e.splice(0, 1)[0]),
                                        (s = n),
                                        (n = n.childNodes
                                            ? n.childNodes[i]
                                            : void 0);
                                return { node: n, parentNode: s, nodeIndex: i };
                            }
                            function C(t, e, s) {
                                return (
                                    e.forEach(function (e) {
                                        !(function (t, e, s) {
                                            var i, n, a, o;
                                            if (
                                                ![
                                                    s._const.addElement,
                                                    s._const.addTextElement,
                                                ].includes(e[s._const.action])
                                            ) {
                                                var r = $(t, e[s._const.route]);
                                                (n = r.node),
                                                    (a = r.parentNode),
                                                    (o = r.nodeIndex);
                                            }
                                            var l,
                                                d,
                                                c = [],
                                                h = { diff: e, node: n };
                                            if (s.preVirtualDiffApply(h))
                                                return !0;
                                            switch (e[s._const.action]) {
                                                case s._const.addAttribute:
                                                    n.attributes ||
                                                        (n.attributes = {}),
                                                        (n.attributes[
                                                            e[s._const.name]
                                                        ] = e[s._const.value]),
                                                        "checked" ===
                                                        e[s._const.name]
                                                            ? (n.checked = !0)
                                                            : "selected" ===
                                                              e[s._const.name]
                                                            ? (n.selected = !0)
                                                            : "INPUT" ===
                                                                  n.nodeName &&
                                                              "value" ===
                                                                  e[
                                                                      s._const
                                                                          .name
                                                                  ] &&
                                                              (n.value =
                                                                  e[
                                                                      s._const.value
                                                                  ]);
                                                    break;
                                                case s._const.modifyAttribute:
                                                    n.attributes[
                                                        e[s._const.name]
                                                    ] = e[s._const.newValue];
                                                    break;
                                                case s._const.removeAttribute:
                                                    delete n.attributes[
                                                        e[s._const.name]
                                                    ],
                                                        0 ===
                                                            Object.keys(
                                                                n.attributes
                                                            ).length &&
                                                            delete n.attributes,
                                                        "checked" ===
                                                        e[s._const.name]
                                                            ? (n.checked = !1)
                                                            : "selected" ===
                                                              e[s._const.name]
                                                            ? delete n.selected
                                                            : "INPUT" ===
                                                                  n.nodeName &&
                                                              "value" ===
                                                                  e[
                                                                      s._const
                                                                          .name
                                                                  ] &&
                                                              delete n.value;
                                                    break;
                                                case s._const.modifyTextElement:
                                                    (n.data =
                                                        e[s._const.newValue]),
                                                        "TEXTAREA" ===
                                                            a.nodeName &&
                                                            (a.value =
                                                                e[
                                                                    s._const.newValue
                                                                ]);
                                                    break;
                                                case s._const.modifyValue:
                                                    n.value =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifyComment:
                                                    n.data =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifyChecked:
                                                    n.checked =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifySelected:
                                                    n.selected =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.replaceElement:
                                                    (l = x(
                                                        e[s._const.newValue]
                                                    )),
                                                        (a.childNodes[o] = l);
                                                    break;
                                                case s._const.relocateGroup:
                                                    n.childNodes
                                                        .splice(
                                                            e[s._const.from],
                                                            e[
                                                                s._const
                                                                    .groupLength
                                                            ]
                                                        )
                                                        .reverse()
                                                        .forEach(function (t) {
                                                            return n.childNodes.splice(
                                                                e[s._const.to],
                                                                0,
                                                                t
                                                            );
                                                        }),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        e[
                                                                            s
                                                                                ._const
                                                                                .from
                                                                        ] <
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue <=
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ]
                                                                    )
                                                                        (t.oldValue -=
                                                                            e[
                                                                                s._const.groupLength
                                                                            ]),
                                                                            (i =
                                                                                t.oldValue +
                                                                                t.length -
                                                                                e[
                                                                                    s
                                                                                        ._const
                                                                                        .to
                                                                                ]) >
                                                                                0 &&
                                                                                (c.push(
                                                                                    {
                                                                                        oldValue:
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .to
                                                                                            ] +
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .groupLength
                                                                                            ],
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            t.length -
                                                                                            i,
                                                                                        length: i,
                                                                                    }
                                                                                ),
                                                                                (t.length -=
                                                                                    i));
                                                                    else if (
                                                                        e[
                                                                            s
                                                                                ._const
                                                                                .from
                                                                        ] >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue <
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ]
                                                                    ) {
                                                                        var i;
                                                                        (t.oldValue +=
                                                                            e[
                                                                                s._const.groupLength
                                                                            ]),
                                                                            (i =
                                                                                t.oldValue +
                                                                                t.length -
                                                                                e[
                                                                                    s
                                                                                        ._const
                                                                                        .to
                                                                                ]) >
                                                                                0 &&
                                                                                (c.push(
                                                                                    {
                                                                                        oldValue:
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .to
                                                                                            ] +
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .groupLength
                                                                                            ],
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            t.length -
                                                                                            i,
                                                                                        length: i,
                                                                                    }
                                                                                ),
                                                                                (t.length -=
                                                                                    i));
                                                                    } else
                                                                        t.oldValue ===
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ] &&
                                                                            (t.oldValue =
                                                                                e[
                                                                                    s._const.to
                                                                                ]);
                                                                }
                                                            );
                                                    break;
                                                case s._const.removeElement:
                                                    a.childNodes.splice(o, 1),
                                                        a.subsets &&
                                                            a.subsets.forEach(
                                                                function (t) {
                                                                    t.oldValue >
                                                                    o
                                                                        ? (t.oldValue -= 1)
                                                                        : t.oldValue ===
                                                                          o
                                                                        ? (t.delete =
                                                                              !0)
                                                                        : t.oldValue <
                                                                              o &&
                                                                          t.oldValue +
                                                                              t.length >
                                                                              o &&
                                                                          (t.oldValue +
                                                                              t.length -
                                                                              1 ===
                                                                          o
                                                                              ? t.length--
                                                                              : (c.push(
                                                                                    {
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            o -
                                                                                            t.oldValue,
                                                                                        oldValue:
                                                                                            o,
                                                                                        length:
                                                                                            t.length -
                                                                                            o +
                                                                                            t.oldValue -
                                                                                            1,
                                                                                    }
                                                                                ),
                                                                                (t.length =
                                                                                    o -
                                                                                    t.oldValue)));
                                                                }
                                                            ),
                                                        (n = a);
                                                    break;
                                                case s._const.addElement:
                                                    var u = (d =
                                                        e[
                                                            s._const.route
                                                        ].slice()).splice(
                                                        d.length - 1,
                                                        1
                                                    )[0];
                                                    (n =
                                                        null ===
                                                            (i = $(t, d)) ||
                                                        void 0 === i
                                                            ? void 0
                                                            : i.node),
                                                        (l = x(
                                                            e[s._const.element]
                                                        )),
                                                        n.childNodes ||
                                                            (n.childNodes = []),
                                                        u >= n.childNodes.length
                                                            ? n.childNodes.push(
                                                                  l
                                                              )
                                                            : n.childNodes.splice(
                                                                  u,
                                                                  0,
                                                                  l
                                                              ),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        t.oldValue >=
                                                                        u
                                                                    )
                                                                        t.oldValue += 1;
                                                                    else if (
                                                                        t.oldValue <
                                                                            u &&
                                                                        t.oldValue +
                                                                            t.length >
                                                                            u
                                                                    ) {
                                                                        var e =
                                                                            t.oldValue +
                                                                            t.length -
                                                                            u;
                                                                        c.push({
                                                                            newValue:
                                                                                t.newValue +
                                                                                t.length -
                                                                                e,
                                                                            oldValue:
                                                                                u +
                                                                                1,
                                                                            length: e,
                                                                        }),
                                                                            (t.length -=
                                                                                e);
                                                                    }
                                                                }
                                                            );
                                                    break;
                                                case s._const.removeTextElement:
                                                    a.childNodes.splice(o, 1),
                                                        "TEXTAREA" ===
                                                            a.nodeName &&
                                                            delete a.value,
                                                        a.subsets &&
                                                            a.subsets.forEach(
                                                                function (t) {
                                                                    t.oldValue >
                                                                    o
                                                                        ? (t.oldValue -= 1)
                                                                        : t.oldValue ===
                                                                          o
                                                                        ? (t.delete =
                                                                              !0)
                                                                        : t.oldValue <
                                                                              o &&
                                                                          t.oldValue +
                                                                              t.length >
                                                                              o &&
                                                                          (t.oldValue +
                                                                              t.length -
                                                                              1 ===
                                                                          o
                                                                              ? t.length--
                                                                              : (c.push(
                                                                                    {
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            o -
                                                                                            t.oldValue,
                                                                                        oldValue:
                                                                                            o,
                                                                                        length:
                                                                                            t.length -
                                                                                            o +
                                                                                            t.oldValue -
                                                                                            1,
                                                                                    }
                                                                                ),
                                                                                (t.length =
                                                                                    o -
                                                                                    t.oldValue)));
                                                                }
                                                            ),
                                                        (n = a);
                                                    break;
                                                case s._const.addTextElement:
                                                    var p = (d =
                                                        e[
                                                            s._const.route
                                                        ].slice()).splice(
                                                        d.length - 1,
                                                        1
                                                    )[0];
                                                    (l = {
                                                        nodeName: "#text",
                                                        data: e[s._const.value],
                                                    }),
                                                        (n = $(t, d).node)
                                                            .childNodes ||
                                                            (n.childNodes = []),
                                                        p >= n.childNodes.length
                                                            ? n.childNodes.push(
                                                                  l
                                                              )
                                                            : n.childNodes.splice(
                                                                  p,
                                                                  0,
                                                                  l
                                                              ),
                                                        "TEXTAREA" ===
                                                            n.nodeName &&
                                                            (n.value =
                                                                e[
                                                                    s._const.newValue
                                                                ]),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        (t.oldValue >=
                                                                            p &&
                                                                            (t.oldValue += 1),
                                                                        t.oldValue <
                                                                            p &&
                                                                            t.oldValue +
                                                                                t.length >
                                                                                p)
                                                                    ) {
                                                                        var e =
                                                                            t.oldValue +
                                                                            t.length -
                                                                            p;
                                                                        c.push({
                                                                            newValue:
                                                                                t.newValue +
                                                                                t.length -
                                                                                e,
                                                                            oldValue:
                                                                                p +
                                                                                1,
                                                                            length: e,
                                                                        }),
                                                                            (t.length -=
                                                                                e);
                                                                    }
                                                                }
                                                            );
                                                    break;
                                                default:
                                                    console.log(
                                                        "unknown action"
                                                    );
                                            }
                                            n.subsets &&
                                                ((n.subsets = n.subsets.filter(
                                                    function (t) {
                                                        return (
                                                            !t.delete &&
                                                            t.oldValue !==
                                                                t.newValue
                                                        );
                                                    }
                                                )),
                                                c.length &&
                                                    (n.subsets =
                                                        n.subsets.concat(c))),
                                                s.postVirtualDiffApply({
                                                    node: h.node,
                                                    diff: h.diff,
                                                    newNode: l,
                                                });
                                        })(t, e, s);
                                    }),
                                    !0
                                );
                            }
                            function S(t, e) {
                                void 0 === e && (e = { valueDiffing: !0 });
                                var s = { nodeName: t.nodeName };
                                return (
                                    f(t, "Text", "Comment")
                                        ? (s.data = t.data)
                                        : (t.attributes &&
                                              t.attributes.length > 0 &&
                                              ((s.attributes = {}),
                                              Array.prototype.slice
                                                  .call(t.attributes)
                                                  .forEach(function (t) {
                                                      return (s.attributes[
                                                          t.name
                                                      ] = t.value);
                                                  })),
                                          t.childNodes &&
                                              t.childNodes.length > 0 &&
                                              ((s.childNodes = []),
                                              Array.prototype.slice
                                                  .call(t.childNodes)
                                                  .forEach(function (t) {
                                                      return s.childNodes.push(
                                                          S(t, e)
                                                      );
                                                  })),
                                          e.valueDiffing &&
                                              (f(t, "HTMLTextAreaElement") &&
                                                  (s.value = t.value),
                                              f(t, "HTMLInputElement") &&
                                              ["radio", "checkbox"].includes(
                                                  t.type.toLowerCase()
                                              ) &&
                                              void 0 !== t.checked
                                                  ? (s.checked = t.checked)
                                                  : f(
                                                        t,
                                                        "HTMLButtonElement",
                                                        "HTMLDataElement",
                                                        "HTMLInputElement",
                                                        "HTMLLIElement",
                                                        "HTMLMeterElement",
                                                        "HTMLOptionElement",
                                                        "HTMLProgressElement",
                                                        "HTMLParamElement"
                                                    ) && (s.value = t.value),
                                              f(t, "HTMLOptionElement") &&
                                                  (s.selected = t.selected))),
                                    s
                                );
                            }
                            var k =
                                    /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,
                                T =
                                    /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
                            function L(t) {
                                return t
                                    .replace(/&lt;/g, "<")
                                    .replace(/&gt;/g, ">")
                                    .replace(/&amp;/g, "&");
                            }
                            var A = {
                                    area: !0,
                                    base: !0,
                                    br: !0,
                                    col: !0,
                                    embed: !0,
                                    hr: !0,
                                    img: !0,
                                    input: !0,
                                    keygen: !0,
                                    link: !0,
                                    menuItem: !0,
                                    meta: !0,
                                    param: !0,
                                    source: !0,
                                    track: !0,
                                    wbr: !0,
                                },
                                P = function (t, e) {
                                    var s = { nodeName: "", attributes: {} },
                                        i = !1,
                                        n = t.match(/<\/?([^\s]+?)[/\s>]/);
                                    if (
                                        n &&
                                        ((s.nodeName =
                                            e || "svg" === n[1]
                                                ? n[1]
                                                : n[1].toUpperCase()),
                                        (A[n[1]] ||
                                            "/" === t.charAt(t.length - 2)) &&
                                            (i = !0),
                                        s.nodeName.startsWith("!--"))
                                    ) {
                                        var a = t.indexOf("--\x3e");
                                        return {
                                            type: "comment",
                                            node: {
                                                nodeName: "#comment",
                                                data:
                                                    -1 !== a
                                                        ? t.slice(4, a)
                                                        : "",
                                            },
                                            voidElement: i,
                                        };
                                    }
                                    for (
                                        var o = new RegExp(T), r = null, l = !1;
                                        !l;

                                    )
                                        if (null === (r = o.exec(t))) l = !0;
                                        else if (r[0].trim())
                                            if (r[1]) {
                                                var d = r[1].trim(),
                                                    c = [d, ""];
                                                d.indexOf("=") > -1 &&
                                                    (c = d.split("=")),
                                                    (s.attributes[c[0]] = c[1]),
                                                    o.lastIndex--;
                                            } else
                                                r[2] &&
                                                    (s.attributes[r[2]] = r[3]
                                                        .trim()
                                                        .substring(
                                                            1,
                                                            r[3].length - 1
                                                        ));
                                    return {
                                        type: "tag",
                                        node: s,
                                        voidElement: i,
                                    };
                                },
                                R = function (t, e) {
                                    void 0 === e &&
                                        (e = {
                                            valueDiffing: !0,
                                            caseSensitive: !1,
                                        });
                                    var s,
                                        i = [],
                                        n = -1,
                                        a = [],
                                        o = !1;
                                    if (0 !== t.indexOf("<")) {
                                        var r = t.indexOf("<");
                                        i.push({
                                            nodeName: "#text",
                                            data:
                                                -1 === r
                                                    ? t
                                                    : t.substring(0, r),
                                        });
                                    }
                                    return (
                                        t.replace(k, function (r, l) {
                                            var d = "/" !== r.charAt(1),
                                                c = r.startsWith("\x3c!--"),
                                                h = l + r.length,
                                                u = t.charAt(h);
                                            if (c) {
                                                var p = P(
                                                    r,
                                                    e.caseSensitive
                                                ).node;
                                                if (n < 0) return i.push(p), "";
                                                var f = a[n];
                                                return (
                                                    f &&
                                                        p.nodeName &&
                                                        (f.node.childNodes ||
                                                            (f.node.childNodes =
                                                                []),
                                                        f.node.childNodes.push(
                                                            p
                                                        )),
                                                    ""
                                                );
                                            }
                                            if (d) {
                                                if (
                                                    ("svg" ===
                                                        (s = P(
                                                            r,
                                                            e.caseSensitive || o
                                                        )).node.nodeName &&
                                                        (o = !0),
                                                    n++,
                                                    !s.voidElement &&
                                                        u &&
                                                        "<" !== u)
                                                ) {
                                                    s.node.childNodes ||
                                                        (s.node.childNodes =
                                                            []);
                                                    var m = L(
                                                        t.slice(
                                                            h,
                                                            t.indexOf("<", h)
                                                        )
                                                    );
                                                    s.node.childNodes.push({
                                                        nodeName: "#text",
                                                        data: m,
                                                    }),
                                                        e.valueDiffing &&
                                                            "TEXTAREA" ===
                                                                s.node
                                                                    .nodeName &&
                                                            (s.node.value = m);
                                                }
                                                0 === n &&
                                                    s.node.nodeName &&
                                                    i.push(s.node);
                                                var g = a[n - 1];
                                                g &&
                                                    s.node.nodeName &&
                                                    (g.node.childNodes ||
                                                        (g.node.childNodes =
                                                            []),
                                                    g.node.childNodes.push(
                                                        s.node
                                                    )),
                                                    (a[n] = s);
                                            }
                                            if (
                                                (!d || s.voidElement) &&
                                                (n > -1 &&
                                                    (s.voidElement ||
                                                        (e.caseSensitive &&
                                                            s.node.nodeName ===
                                                                r.slice(
                                                                    2,
                                                                    -1
                                                                )) ||
                                                        (!e.caseSensitive &&
                                                            s.node.nodeName.toUpperCase() ===
                                                                r
                                                                    .slice(
                                                                        2,
                                                                        -1
                                                                    )
                                                                    .toUpperCase())) &&
                                                    --n > -1 &&
                                                    ("svg" ===
                                                        s.node.nodeName &&
                                                        (o = !1),
                                                    (s = a[n])),
                                                "<" !== u && u)
                                            ) {
                                                var b =
                                                        -1 === n
                                                            ? i
                                                            : a[n].node
                                                                  .childNodes ||
                                                              [],
                                                    v = t.indexOf("<", h);
                                                (m = L(
                                                    t.slice(
                                                        h,
                                                        -1 === v ? void 0 : v
                                                    )
                                                )),
                                                    b.push({
                                                        nodeName: "#text",
                                                        data: m,
                                                    });
                                            }
                                            return "";
                                        }),
                                        i[0]
                                    );
                                },
                                H = (function () {
                                    function t(t, e, s) {
                                        (this.options = s),
                                            (this.t1 =
                                                "undefined" != typeof Element &&
                                                f(t, "Element")
                                                    ? S(t, this.options)
                                                    : "string" == typeof t
                                                    ? R(t, this.options)
                                                    : JSON.parse(
                                                          JSON.stringify(t)
                                                      )),
                                            (this.t2 =
                                                "undefined" != typeof Element &&
                                                f(e, "Element")
                                                    ? S(e, this.options)
                                                    : "string" == typeof e
                                                    ? R(e, this.options)
                                                    : JSON.parse(
                                                          JSON.stringify(e)
                                                      )),
                                            (this.diffcount = 0),
                                            (this.foundAll = !1),
                                            this.debug &&
                                                ((this.t1Orig =
                                                    "undefined" !=
                                                        typeof Element &&
                                                    f(t, "Element")
                                                        ? S(t, this.options)
                                                        : "string" == typeof t
                                                        ? R(t, this.options)
                                                        : JSON.parse(
                                                              JSON.stringify(t)
                                                          )),
                                                (this.t2Orig =
                                                    "undefined" !=
                                                        typeof Element &&
                                                    f(e, "Element")
                                                        ? S(e, this.options)
                                                        : "string" == typeof e
                                                        ? R(e, this.options)
                                                        : JSON.parse(
                                                              JSON.stringify(e)
                                                          ))),
                                            (this.tracker = new V());
                                    }
                                    return (
                                        (t.prototype.init = function () {
                                            return this.findDiffs(
                                                this.t1,
                                                this.t2
                                            );
                                        }),
                                        (t.prototype.findDiffs = function (
                                            t,
                                            e
                                        ) {
                                            var s;
                                            do {
                                                if (
                                                    this.options.debug &&
                                                    ((this.diffcount += 1),
                                                    this.diffcount >
                                                        this.options.diffcap)
                                                )
                                                    throw new Error(
                                                        "surpassed diffcap:"
                                                            .concat(
                                                                JSON.stringify(
                                                                    this.t1Orig
                                                                ),
                                                                " -> "
                                                            )
                                                            .concat(
                                                                JSON.stringify(
                                                                    this.t2Orig
                                                                )
                                                            )
                                                    );
                                                0 ===
                                                    (s = this.findNextDiff(
                                                        t,
                                                        e,
                                                        []
                                                    )).length &&
                                                    (M(t, e) ||
                                                        (this.foundAll
                                                            ? console.error(
                                                                  "Could not find remaining diffs!"
                                                              )
                                                            : ((this.foundAll =
                                                                  !0),
                                                              D(t),
                                                              (s =
                                                                  this.findNextDiff(
                                                                      t,
                                                                      e,
                                                                      []
                                                                  ))))),
                                                    s.length > 0 &&
                                                        ((this.foundAll = !1),
                                                        this.tracker.add(s),
                                                        C(t, s, this.options));
                                            } while (s.length > 0);
                                            return this.tracker.list;
                                        }),
                                        (t.prototype.findNextDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i, n;
                                            if (
                                                this.options.maxDepth &&
                                                s.length > this.options.maxDepth
                                            )
                                                return [];
                                            if (!t.outerDone) {
                                                if (
                                                    ((i = this.findOuterDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )),
                                                    this.options
                                                        .filterOuterDiff &&
                                                        (n =
                                                            this.options.filterOuterDiff(
                                                                t,
                                                                e,
                                                                i
                                                            )) &&
                                                        (i = n),
                                                    i.length > 0)
                                                )
                                                    return (
                                                        (t.outerDone = !0), i
                                                    );
                                                t.outerDone = !0;
                                            }
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "data"
                                                )
                                            )
                                                return [];
                                            if (!t.innerDone) {
                                                if (
                                                    (i = this.findInnerDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )).length > 0
                                                )
                                                    return i;
                                                t.innerDone = !0;
                                            }
                                            if (
                                                this.options.valueDiffing &&
                                                !t.valueDone
                                            ) {
                                                if (
                                                    (i = this.findValueDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )).length > 0
                                                )
                                                    return (
                                                        (t.valueDone = !0), i
                                                    );
                                                t.valueDone = !0;
                                            }
                                            return [];
                                        }),
                                        (t.prototype.findOuterDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i,
                                                n,
                                                a,
                                                o,
                                                r,
                                                l,
                                                d = [];
                                            if (t.nodeName !== e.nodeName) {
                                                if (!s.length)
                                                    throw new Error(
                                                        "Top level nodes have to be of the same kind."
                                                    );
                                                return [
                                                    new p()
                                                        .setValue(
                                                            this.options._const
                                                                .action,
                                                            this.options._const
                                                                .replaceElement
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .oldValue,
                                                            x(t)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .newValue,
                                                            x(e)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .route,
                                                            s
                                                        ),
                                                ];
                                            }
                                            if (
                                                s.length &&
                                                this.options.diffcap <
                                                    Math.abs(
                                                        (t.childNodes || [])
                                                            .length -
                                                            (e.childNodes || [])
                                                                .length
                                                    )
                                            )
                                                return [
                                                    new p()
                                                        .setValue(
                                                            this.options._const
                                                                .action,
                                                            this.options._const
                                                                .replaceElement
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .oldValue,
                                                            x(t)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .newValue,
                                                            x(e)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .route,
                                                            s
                                                        ),
                                                ];
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "data"
                                                ) &&
                                                t.data !== e.data
                                            )
                                                return "#text" === t.nodeName
                                                    ? [
                                                          new p()
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .action,
                                                                  this.options
                                                                      ._const
                                                                      .modifyTextElement
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .route,
                                                                  s
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .oldValue,
                                                                  t.data
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .newValue,
                                                                  e.data
                                                              ),
                                                      ]
                                                    : [
                                                          new p()
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .action,
                                                                  this.options
                                                                      ._const
                                                                      .modifyComment
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .route,
                                                                  s
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .oldValue,
                                                                  t.data
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .newValue,
                                                                  e.data
                                                              ),
                                                      ];
                                            for (
                                                n = t.attributes
                                                    ? Object.keys(
                                                          t.attributes
                                                      ).sort()
                                                    : [],
                                                    a = e.attributes
                                                        ? Object.keys(
                                                              e.attributes
                                                          ).sort()
                                                        : [],
                                                    o = n.length,
                                                    l = 0;
                                                l < o;
                                                l++
                                            )
                                                (i = n[l]),
                                                    -1 === (r = a.indexOf(i))
                                                        ? d.push(
                                                              new p()
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .action,
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .removeAttribute
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .route,
                                                                      s
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .name,
                                                                      i
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .value,
                                                                      t
                                                                          .attributes[
                                                                          i
                                                                      ]
                                                                  )
                                                          )
                                                        : (a.splice(r, 1),
                                                          t.attributes[i] !==
                                                              e.attributes[i] &&
                                                              d.push(
                                                                  new p()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .modifyAttribute
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .name,
                                                                          i
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .oldValue,
                                                                          t
                                                                              .attributes[
                                                                              i
                                                                          ]
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .newValue,
                                                                          e
                                                                              .attributes[
                                                                              i
                                                                          ]
                                                                      )
                                                              ));
                                            for (
                                                o = a.length, l = 0;
                                                l < o;
                                                l++
                                            )
                                                (i = a[l]),
                                                    d.push(
                                                        new p()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .addAttribute
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .name,
                                                                i
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .value,
                                                                e.attributes[i]
                                                            )
                                                    );
                                            return d;
                                        }),
                                        (t.prototype.findInnerDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i = t.childNodes
                                                    ? t.childNodes.slice()
                                                    : [],
                                                n = e.childNodes
                                                    ? e.childNodes.slice()
                                                    : [],
                                                a = Math.max(
                                                    i.length,
                                                    n.length
                                                ),
                                                o = Math.abs(
                                                    i.length - n.length
                                                ),
                                                r = [],
                                                l = 0;
                                            if (
                                                !this.options.maxChildCount ||
                                                a < this.options.maxChildCount
                                            ) {
                                                var d = Boolean(
                                                        t.subsets &&
                                                            t.subsetsAge--
                                                    ),
                                                    c = d
                                                        ? t.subsets
                                                        : t.childNodes &&
                                                          e.childNodes
                                                        ? (function (t, e) {
                                                              for (
                                                                  var s =
                                                                          t.childNodes
                                                                              ? t.childNodes
                                                                              : [],
                                                                      i =
                                                                          e.childNodes
                                                                              ? e.childNodes
                                                                              : [],
                                                                      n = E(
                                                                          s.length,
                                                                          !1
                                                                      ),
                                                                      a = E(
                                                                          i.length,
                                                                          !1
                                                                      ),
                                                                      o = [],
                                                                      r =
                                                                          function () {
                                                                              return arguments[1];
                                                                          },
                                                                      l = !1,
                                                                      d =
                                                                          function () {
                                                                              var t =
                                                                                  (function (
                                                                                      t,
                                                                                      e,
                                                                                      s,
                                                                                      i
                                                                                  ) {
                                                                                      var n = 0,
                                                                                          a =
                                                                                              [],
                                                                                          o =
                                                                                              t.length,
                                                                                          r =
                                                                                              e.length,
                                                                                          l =
                                                                                              Array.apply(
                                                                                                  void 0,
                                                                                                  new Array(
                                                                                                      o +
                                                                                                          1
                                                                                                  )
                                                                                              ).map(
                                                                                                  function () {
                                                                                                      return [];
                                                                                                  }
                                                                                              ),
                                                                                          d =
                                                                                              N(
                                                                                                  t,
                                                                                                  e
                                                                                              ),
                                                                                          c =
                                                                                              o ===
                                                                                              r;
                                                                                      c &&
                                                                                          t.some(
                                                                                              function (
                                                                                                  t,
                                                                                                  s
                                                                                              ) {
                                                                                                  var i =
                                                                                                          _(
                                                                                                              t
                                                                                                          ),
                                                                                                      n =
                                                                                                          _(
                                                                                                              e[
                                                                                                                  s
                                                                                                              ]
                                                                                                          );
                                                                                                  return i.length !==
                                                                                                      n.length
                                                                                                      ? ((c =
                                                                                                            !1),
                                                                                                        !0)
                                                                                                      : (i.some(
                                                                                                            function (
                                                                                                                t,
                                                                                                                e
                                                                                                            ) {
                                                                                                                if (
                                                                                                                    t !==
                                                                                                                    n[
                                                                                                                        e
                                                                                                                    ]
                                                                                                                )
                                                                                                                    return (
                                                                                                                        (c =
                                                                                                                            !1),
                                                                                                                        !0
                                                                                                                    );
                                                                                                            }
                                                                                                        ),
                                                                                                        !c ||
                                                                                                            void 0);
                                                                                              }
                                                                                          );
                                                                                      for (
                                                                                          var h = 0;
                                                                                          h <
                                                                                          o;
                                                                                          h++
                                                                                      )
                                                                                          for (
                                                                                              var u =
                                                                                                      t[
                                                                                                          h
                                                                                                      ],
                                                                                                  p = 0;
                                                                                              p <
                                                                                              r;
                                                                                              p++
                                                                                          ) {
                                                                                              var f =
                                                                                                  e[
                                                                                                      p
                                                                                                  ];
                                                                                              s[
                                                                                                  h
                                                                                              ] ||
                                                                                              i[
                                                                                                  p
                                                                                              ] ||
                                                                                              !O(
                                                                                                  u,
                                                                                                  f,
                                                                                                  d,
                                                                                                  c
                                                                                              )
                                                                                                  ? (l[
                                                                                                        h +
                                                                                                            1
                                                                                                    ][
                                                                                                        p +
                                                                                                            1
                                                                                                    ] = 0)
                                                                                                  : ((l[
                                                                                                        h +
                                                                                                            1
                                                                                                    ][
                                                                                                        p +
                                                                                                            1
                                                                                                    ] =
                                                                                                        l[
                                                                                                            h
                                                                                                        ][
                                                                                                            p
                                                                                                        ]
                                                                                                            ? l[
                                                                                                                  h
                                                                                                              ][
                                                                                                                  p
                                                                                                              ] +
                                                                                                              1
                                                                                                            : 1),
                                                                                                    l[
                                                                                                        h +
                                                                                                            1
                                                                                                    ][
                                                                                                        p +
                                                                                                            1
                                                                                                    ] >=
                                                                                                        n &&
                                                                                                        ((n =
                                                                                                            l[
                                                                                                                h +
                                                                                                                    1
                                                                                                            ][
                                                                                                                p +
                                                                                                                    1
                                                                                                            ]),
                                                                                                        (a =
                                                                                                            [
                                                                                                                h +
                                                                                                                    1,
                                                                                                                p +
                                                                                                                    1,
                                                                                                            ])));
                                                                                          }
                                                                                      return (
                                                                                          0 !==
                                                                                              n && {
                                                                                              oldValue:
                                                                                                  a[0] -
                                                                                                  n,
                                                                                              newValue:
                                                                                                  a[1] -
                                                                                                  n,
                                                                                              length: n,
                                                                                          }
                                                                                      );
                                                                                  })(
                                                                                      s,
                                                                                      i,
                                                                                      n,
                                                                                      a
                                                                                  );
                                                                              t
                                                                                  ? (o.push(
                                                                                        t
                                                                                    ),
                                                                                    Array.apply(
                                                                                        void 0,
                                                                                        new Array(
                                                                                            t.length
                                                                                        )
                                                                                    )
                                                                                        .map(
                                                                                            r
                                                                                        )
                                                                                        .forEach(
                                                                                            function (
                                                                                                e
                                                                                            ) {
                                                                                                return (function (
                                                                                                    t,
                                                                                                    e,
                                                                                                    s,
                                                                                                    i
                                                                                                ) {
                                                                                                    (t[
                                                                                                        s.oldValue +
                                                                                                            i
                                                                                                    ] =
                                                                                                        !0),
                                                                                                        (e[
                                                                                                            s.newValue +
                                                                                                                i
                                                                                                        ] =
                                                                                                            !0);
                                                                                                })(
                                                                                                    n,
                                                                                                    a,
                                                                                                    t,
                                                                                                    e
                                                                                                );
                                                                                            }
                                                                                        ))
                                                                                  : (l =
                                                                                        !0);
                                                                          };
                                                                  !l;

                                                              )
                                                                  d();
                                                              return (
                                                                  (t.subsets =
                                                                      o),
                                                                  (t.subsetsAge = 100),
                                                                  o
                                                              );
                                                          })(t, e)
                                                        : [];
                                                if (
                                                    c.length > 0 &&
                                                    (r =
                                                        this.attemptGroupRelocation(
                                                            t,
                                                            e,
                                                            c,
                                                            s,
                                                            d
                                                        )).length > 0
                                                )
                                                    return r;
                                            }
                                            for (var h = 0; h < a; h += 1) {
                                                var u = i[h],
                                                    f = n[h];
                                                o &&
                                                    (u && !f
                                                        ? "#text" === u.nodeName
                                                            ? (r.push(
                                                                  new p()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .removeTextElement
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s.concat(
                                                                              l
                                                                          )
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .value,
                                                                          u.data
                                                                      )
                                                              ),
                                                              (l -= 1))
                                                            : (r.push(
                                                                  new p()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .removeElement
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s.concat(
                                                                              l
                                                                          )
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .element,
                                                                          x(u)
                                                                      )
                                                              ),
                                                              (l -= 1))
                                                        : f &&
                                                          !u &&
                                                          ("#text" ===
                                                          f.nodeName
                                                              ? r.push(
                                                                    new p()
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .action,
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .addTextElement
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .route,
                                                                            s.concat(
                                                                                l
                                                                            )
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .value,
                                                                            f.data
                                                                        )
                                                                )
                                                              : r.push(
                                                                    new p()
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .action,
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .addElement
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .route,
                                                                            s.concat(
                                                                                l
                                                                            )
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .element,
                                                                            x(f)
                                                                        )
                                                                ))),
                                                    u &&
                                                        f &&
                                                        (!this.options
                                                            .maxChildCount ||
                                                        a <
                                                            this.options
                                                                .maxChildCount
                                                            ? (r = r.concat(
                                                                  this.findNextDiff(
                                                                      u,
                                                                      f,
                                                                      s.concat(
                                                                          l
                                                                      )
                                                                  )
                                                              ))
                                                            : M(u, f) ||
                                                              (i.length >
                                                              n.length
                                                                  ? ("#text" ===
                                                                    u.nodeName
                                                                        ? r.push(
                                                                              new p()
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .action,
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .removeTextElement
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .route,
                                                                                      s.concat(
                                                                                          l
                                                                                      )
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .value,
                                                                                      u.data
                                                                                  )
                                                                          )
                                                                        : r.push(
                                                                              new p()
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .action,
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .removeElement
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .element,
                                                                                      x(
                                                                                          u
                                                                                      )
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .route,
                                                                                      s.concat(
                                                                                          l
                                                                                      )
                                                                                  )
                                                                          ),
                                                                    i.splice(
                                                                        h,
                                                                        1
                                                                    ),
                                                                    (h -= 1),
                                                                    (l -= 1),
                                                                    (o -= 1))
                                                                  : i.length <
                                                                    n.length
                                                                  ? ((r =
                                                                        r.concat(
                                                                            [
                                                                                new p()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .addElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .element,
                                                                                        x(
                                                                                            f
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        s.concat(
                                                                                            l
                                                                                        )
                                                                                    ),
                                                                            ]
                                                                        )),
                                                                    i.splice(
                                                                        h,
                                                                        0,
                                                                        x(f)
                                                                    ),
                                                                    (o -= 1))
                                                                  : (r =
                                                                        r.concat(
                                                                            [
                                                                                new p()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .replaceElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .oldValue,
                                                                                        x(
                                                                                            u
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .newValue,
                                                                                        x(
                                                                                            f
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        s.concat(
                                                                                            l
                                                                                        )
                                                                                    ),
                                                                            ]
                                                                        )))),
                                                    (l += 1);
                                            }
                                            return (t.innerDone = !0), r;
                                        }),
                                        (t.prototype.attemptGroupRelocation =
                                            function (t, e, s, i, n) {
                                                for (
                                                    var a,
                                                        o,
                                                        r,
                                                        l,
                                                        d,
                                                        c = (function (
                                                            t,
                                                            e,
                                                            s
                                                        ) {
                                                            var i = t.childNodes
                                                                    ? E(
                                                                          t
                                                                              .childNodes
                                                                              .length,
                                                                          !0
                                                                      )
                                                                    : [],
                                                                n = e.childNodes
                                                                    ? E(
                                                                          e
                                                                              .childNodes
                                                                              .length,
                                                                          !0
                                                                      )
                                                                    : [],
                                                                a = 0;
                                                            return (
                                                                s.forEach(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        for (
                                                                            var e =
                                                                                    t.oldValue +
                                                                                    t.length,
                                                                                s =
                                                                                    t.newValue +
                                                                                    t.length,
                                                                                o =
                                                                                    t.oldValue;
                                                                            o <
                                                                            e;
                                                                            o += 1
                                                                        )
                                                                            i[
                                                                                o
                                                                            ] =
                                                                                a;
                                                                        for (
                                                                            o =
                                                                                t.newValue;
                                                                            o <
                                                                            s;
                                                                            o += 1
                                                                        )
                                                                            n[
                                                                                o
                                                                            ] =
                                                                                a;
                                                                        a += 1;
                                                                    }
                                                                ),
                                                                {
                                                                    gaps1: i,
                                                                    gaps2: n,
                                                                }
                                                            );
                                                        })(t, e, s),
                                                        h = c.gaps1,
                                                        u = c.gaps2,
                                                        f =
                                                            t.childNodes.slice(),
                                                        m =
                                                            e.childNodes.slice(),
                                                        g = Math.min(
                                                            h.length,
                                                            u.length
                                                        ),
                                                        b = [],
                                                        v = 0,
                                                        w = 0;
                                                    v < g;
                                                    w += 1, v += 1
                                                )
                                                    if (
                                                        !n ||
                                                        (!0 !== h[v] &&
                                                            !0 !== u[v])
                                                    )
                                                        if (!0 === h[w])
                                                            if (
                                                                "#text" ===
                                                                (l = f[w])
                                                                    .nodeName
                                                            )
                                                                if (
                                                                    "#text" ===
                                                                    m[v]
                                                                        .nodeName
                                                                ) {
                                                                    if (
                                                                        l.data !==
                                                                        m[v]
                                                                            .data
                                                                    ) {
                                                                        for (
                                                                            var _ =
                                                                                w;
                                                                            f.length >
                                                                                _ +
                                                                                    1 &&
                                                                            "#text" ===
                                                                                f[
                                                                                    _ +
                                                                                        1
                                                                                ]
                                                                                    .nodeName;

                                                                        )
                                                                            if (
                                                                                ((_ += 1),
                                                                                m[
                                                                                    v
                                                                                ]
                                                                                    .data ===
                                                                                    f[
                                                                                        _
                                                                                    ]
                                                                                        .data)
                                                                            ) {
                                                                                d =
                                                                                    !0;
                                                                                break;
                                                                            }
                                                                        d ||
                                                                            b.push(
                                                                                new p()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .modifyTextElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        i.concat(
                                                                                            w
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .oldValue,
                                                                                        l.data
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .newValue,
                                                                                        m[
                                                                                            v
                                                                                        ]
                                                                                            .data
                                                                                    )
                                                                            );
                                                                    }
                                                                } else
                                                                    b.push(
                                                                        new p()
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .action,
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .removeTextElement
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .route,
                                                                                i.concat(
                                                                                    w
                                                                                )
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .value,
                                                                                l.data
                                                                            )
                                                                    ),
                                                                        h.splice(
                                                                            w,
                                                                            1
                                                                        ),
                                                                        f.splice(
                                                                            w,
                                                                            1
                                                                        ),
                                                                        (g =
                                                                            Math.min(
                                                                                h.length,
                                                                                u.length
                                                                            )),
                                                                        (w -= 1),
                                                                        (v -= 1);
                                                            else
                                                                !0 === u[v]
                                                                    ? b.push(
                                                                          new p()
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .action,
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .replaceElement
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .oldValue,
                                                                                  x(
                                                                                      l
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .newValue,
                                                                                  x(
                                                                                      m[
                                                                                          v
                                                                                      ]
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .route,
                                                                                  i.concat(
                                                                                      w
                                                                                  )
                                                                              )
                                                                      )
                                                                    : (b.push(
                                                                          new p()
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .action,
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .removeElement
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .route,
                                                                                  i.concat(
                                                                                      w
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .element,
                                                                                  x(
                                                                                      l
                                                                                  )
                                                                              )
                                                                      ),
                                                                      h.splice(
                                                                          w,
                                                                          1
                                                                      ),
                                                                      f.splice(
                                                                          w,
                                                                          1
                                                                      ),
                                                                      (g =
                                                                          Math.min(
                                                                              h.length,
                                                                              u.length
                                                                          )),
                                                                      (w -= 1),
                                                                      (v -= 1));
                                                        else if (!0 === u[v])
                                                            "#text" ===
                                                            (l = m[v]).nodeName
                                                                ? (b.push(
                                                                      new p()
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .action,
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .addTextElement
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .route,
                                                                              i.concat(
                                                                                  w
                                                                              )
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .value,
                                                                              l.data
                                                                          )
                                                                  ),
                                                                  h.splice(
                                                                      w,
                                                                      0,
                                                                      !0
                                                                  ),
                                                                  f.splice(
                                                                      w,
                                                                      0,
                                                                      {
                                                                          nodeName:
                                                                              "#text",
                                                                          data: l.data,
                                                                      }
                                                                  ),
                                                                  (g = Math.min(
                                                                      h.length,
                                                                      u.length
                                                                  )))
                                                                : (b.push(
                                                                      new p()
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .action,
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .addElement
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .route,
                                                                              i.concat(
                                                                                  w
                                                                              )
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .element,
                                                                              x(
                                                                                  l
                                                                              )
                                                                          )
                                                                  ),
                                                                  h.splice(
                                                                      w,
                                                                      0,
                                                                      !0
                                                                  ),
                                                                  f.splice(
                                                                      w,
                                                                      0,
                                                                      x(l)
                                                                  ),
                                                                  (g = Math.min(
                                                                      h.length,
                                                                      u.length
                                                                  )));
                                                        else if (
                                                            h[w] !== u[v]
                                                        ) {
                                                            if (b.length > 0)
                                                                return b;
                                                            if (
                                                                ((r = s[h[w]]),
                                                                (o = Math.min(
                                                                    r.newValue,
                                                                    f.length -
                                                                        r.length
                                                                )) !==
                                                                    r.oldValue)
                                                            ) {
                                                                a = !1;
                                                                for (
                                                                    var y = 0;
                                                                    y <
                                                                    r.length;
                                                                    y += 1
                                                                )
                                                                    O(
                                                                        f[
                                                                            o +
                                                                                y
                                                                        ],
                                                                        f[
                                                                            r.oldValue +
                                                                                y
                                                                        ],
                                                                        {},
                                                                        !1,
                                                                        !0
                                                                    ) ||
                                                                        (a =
                                                                            !0);
                                                                if (a)
                                                                    return [
                                                                        new p()
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .action,
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .relocateGroup
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .groupLength,
                                                                                r.length
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .from,
                                                                                r.oldValue
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .to,
                                                                                o
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .route,
                                                                                i
                                                                            ),
                                                                    ];
                                                            }
                                                        }
                                                return b;
                                            }),
                                        (t.prototype.findValueDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i = [];
                                            return (
                                                t.selected !== e.selected &&
                                                    i.push(
                                                        new p()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifySelected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.selected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.selected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                (t.value || e.value) &&
                                                    t.value !== e.value &&
                                                    "OPTION" !== t.nodeName &&
                                                    i.push(
                                                        new p()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifyValue
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.value || ""
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.value || ""
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                t.checked !== e.checked &&
                                                    i.push(
                                                        new p()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifyChecked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.checked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.checked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                i
                                            );
                                        }),
                                        t
                                    );
                                })(),
                                I = {
                                    debug: !1,
                                    diffcap: 10,
                                    maxDepth: !1,
                                    maxChildCount: 50,
                                    valueDiffing: !0,
                                    textDiff: function (t, e, s, i) {
                                        t.data = i;
                                    },
                                    preVirtualDiffApply: function () {},
                                    postVirtualDiffApply: function () {},
                                    preDiffApply: function () {},
                                    postDiffApply: function () {},
                                    filterOuterDiff: null,
                                    compress: !1,
                                    _const: !1,
                                    document:
                                        !(
                                            "undefined" == typeof window ||
                                            !window.document
                                        ) && window.document,
                                    components: [],
                                },
                                Y = (function () {
                                    function t(t) {
                                        if (
                                            (void 0 === t && (t = {}),
                                            Object.entries(I).forEach(function (
                                                e
                                            ) {
                                                var s = e[0],
                                                    i = e[1];
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    s
                                                ) || (t[s] = i);
                                            }),
                                            !t._const)
                                        ) {
                                            var e = [
                                                    "addAttribute",
                                                    "modifyAttribute",
                                                    "removeAttribute",
                                                    "modifyTextElement",
                                                    "relocateGroup",
                                                    "removeElement",
                                                    "addElement",
                                                    "removeTextElement",
                                                    "addTextElement",
                                                    "replaceElement",
                                                    "modifyValue",
                                                    "modifyChecked",
                                                    "modifySelected",
                                                    "modifyComment",
                                                    "action",
                                                    "route",
                                                    "oldValue",
                                                    "newValue",
                                                    "element",
                                                    "group",
                                                    "groupLength",
                                                    "from",
                                                    "to",
                                                    "name",
                                                    "value",
                                                    "data",
                                                    "attributes",
                                                    "nodeName",
                                                    "childNodes",
                                                    "checked",
                                                    "selected",
                                                ],
                                                s = {};
                                            t.compress
                                                ? e.forEach(function (t, e) {
                                                      return (s[t] = e);
                                                  })
                                                : e.forEach(function (t) {
                                                      return (s[t] = t);
                                                  }),
                                                (t._const = s);
                                        }
                                        this.options = t;
                                    }
                                    return (
                                        (t.prototype.apply = function (t, e) {
                                            return (function (t, e, s) {
                                                return e.every(function (e) {
                                                    return b(t, e, s);
                                                });
                                            })(t, e, this.options);
                                        }),
                                        (t.prototype.undo = function (t, e) {
                                            return (function (t, e, s) {
                                                (e = e.slice()).reverse(),
                                                    e.forEach(function (e) {
                                                        !(function (t, e, s) {
                                                            switch (
                                                                e[
                                                                    s._const
                                                                        .action
                                                                ]
                                                            ) {
                                                                case s
                                                                    ._const.addAttribute:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.removeAttribute),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.modifyAttribute:
                                                                    v(
                                                                        e,
                                                                        s._const
                                                                            .oldValue,
                                                                        s._const
                                                                            .newValue
                                                                    ),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.removeAttribute:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.addAttribute),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.modifyTextElement:
                                                                case s
                                                                    ._const.modifyValue:
                                                                case s
                                                                    ._const.modifyComment:
                                                                case s
                                                                    ._const.modifyChecked:
                                                                case s
                                                                    ._const.modifySelected:
                                                                case s
                                                                    ._const.replaceElement:
                                                                    v(
                                                                        e,
                                                                        s._const
                                                                            .oldValue,
                                                                        s._const
                                                                            .newValue
                                                                    ),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.relocateGroup:
                                                                    v(
                                                                        e,
                                                                        s._const
                                                                            .from,
                                                                        s._const
                                                                            .to
                                                                    ),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.removeElement:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.addElement),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.addElement:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.removeElement),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.removeTextElement:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.addTextElement),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                case s
                                                                    ._const.addTextElement:
                                                                    (e[
                                                                        s._const.action
                                                                    ] =
                                                                        s._const.removeTextElement),
                                                                        b(
                                                                            t,
                                                                            e,
                                                                            s
                                                                        );
                                                                    break;
                                                                default:
                                                                    console.log(
                                                                        "unknown action"
                                                                    );
                                                            }
                                                        })(t, e, s);
                                                    });
                                            })(t, e, this.options);
                                        }),
                                        (t.prototype.diff = function (t, e) {
                                            return new H(
                                                t,
                                                e,
                                                this.options
                                            ).init();
                                        }),
                                        t
                                    );
                                })();
                            const j = (
                                    t,
                                    e,
                                    s,
                                    {
                                        classes: i,
                                        format: n,
                                        hiddenHeader: a,
                                        sortable: o,
                                        scrollY: r,
                                        type: l,
                                    },
                                    { noColumnWidths: d, unhideHeader: c }
                                ) => ({
                                    nodeName: "TR",
                                    childNodes: t
                                        .map((t, h) => {
                                            const p = e[h] || {
                                                type: l,
                                                format: n,
                                                sortable: !0,
                                                searchable: !0,
                                            };
                                            if (p.hidden) return;
                                            const f = t.attributes
                                                ? { ...t.attributes }
                                                : {};
                                            if (
                                                (p.sortable &&
                                                    o &&
                                                    (!r.length || c) &&
                                                    (p.filter
                                                        ? (f[
                                                              "data-filterable"
                                                          ] = "true")
                                                        : (f["data-sortable"] =
                                                              "true")),
                                                p.headerClass &&
                                                    (f.class = u(
                                                        f.class,
                                                        p.headerClass
                                                    )),
                                                s.sort && s.sort.column === h)
                                            ) {
                                                const t =
                                                    "asc" === s.sort.dir
                                                        ? i.ascending
                                                        : i.descending;
                                                (f.class = u(f.class, t)),
                                                    (f["aria-sort"] =
                                                        "asc" === s.sort.dir
                                                            ? "ascending"
                                                            : "descending");
                                            } else
                                                s.filters[h] &&
                                                    (f.class = u(
                                                        f.class,
                                                        i.filterActive
                                                    ));
                                            if (s.widths[h] && !d) {
                                                const t = `width: ${s.widths[h]}%;`;
                                                f.style = u(f.style, t);
                                            }
                                            if (r.length && !c) {
                                                const t =
                                                    "padding-bottom: 0;padding-top: 0;border: 0;";
                                                f.style = u(f.style, t);
                                            }
                                            const m =
                                                "html" === t.type
                                                    ? t.data
                                                    : [
                                                          {
                                                              nodeName: "#text",
                                                              data:
                                                                  t.text ??
                                                                  String(
                                                                      t.data
                                                                  ),
                                                          },
                                                      ];
                                            return {
                                                nodeName: "TH",
                                                attributes: f,
                                                childNodes:
                                                    (!a && !r.length) || c
                                                        ? p.sortable && o
                                                            ? [
                                                                  {
                                                                      nodeName:
                                                                          "BUTTON",
                                                                      attributes:
                                                                          {
                                                                              class: p.filter
                                                                                  ? i.filter
                                                                                  : i.sorter,
                                                                          },
                                                                      childNodes:
                                                                          m,
                                                                  },
                                                              ]
                                                            : m
                                                        : [
                                                              {
                                                                  nodeName:
                                                                      "#text",
                                                                  data: "",
                                                              },
                                                          ],
                                            };
                                        })
                                        .filter((t) => t),
                                }),
                                q = (
                                    t,
                                    e,
                                    s,
                                    i,
                                    n,
                                    a,
                                    {
                                        classes: r,
                                        hiddenHeader: l,
                                        header: d,
                                        footer: c,
                                        format: h,
                                        sortable: p,
                                        scrollY: f,
                                        type: m,
                                        rowRender: g,
                                        tabIndex: b,
                                    },
                                    {
                                        noColumnWidths: v,
                                        unhideHeader: w,
                                        renderHeader: _,
                                    },
                                    y,
                                    N
                                ) => {
                                    const D = {
                                        nodeName: "TABLE",
                                        attributes: { ...t },
                                        childNodes: [
                                            {
                                                nodeName: "TBODY",
                                                childNodes: s.map(
                                                    ({ row: t, index: e }) => {
                                                        const s = {
                                                            nodeName: "TR",
                                                            attributes: {
                                                                ...t.attributes,
                                                                "data-index":
                                                                    String(e),
                                                            },
                                                            childNodes: t.cells
                                                                .map((t, s) => {
                                                                    const a = i[
                                                                        s
                                                                    ] || {
                                                                        type: m,
                                                                        format: h,
                                                                        sortable:
                                                                            !0,
                                                                        searchable:
                                                                            !0,
                                                                    };
                                                                    if (
                                                                        a.hidden
                                                                    )
                                                                        return;
                                                                    const r = {
                                                                        nodeName:
                                                                            "TD",
                                                                        attributes:
                                                                            t.attributes
                                                                                ? {
                                                                                      ...t.attributes,
                                                                                  }
                                                                                : {},
                                                                        childNodes:
                                                                            "html" ===
                                                                            a.type
                                                                                ? t.data
                                                                                : [
                                                                                      {
                                                                                          nodeName:
                                                                                              "#text",
                                                                                          data: o(
                                                                                              t
                                                                                          ),
                                                                                      },
                                                                                  ],
                                                                    };
                                                                    if (
                                                                        (d ||
                                                                            c ||
                                                                            !n
                                                                                .widths[
                                                                                s
                                                                            ] ||
                                                                            v ||
                                                                            (r.attributes.style =
                                                                                u(
                                                                                    r
                                                                                        .attributes
                                                                                        .style,
                                                                                    `width: ${n.widths[s]}%;`
                                                                                )),
                                                                        a.cellClass &&
                                                                            (r.attributes.class =
                                                                                u(
                                                                                    r
                                                                                        .attributes
                                                                                        .class,
                                                                                    a.cellClass
                                                                                )),
                                                                        a.render)
                                                                    ) {
                                                                        const i =
                                                                            a.render(
                                                                                t.data,
                                                                                r,
                                                                                e,
                                                                                s
                                                                            );
                                                                        if (i) {
                                                                            if (
                                                                                "string" !=
                                                                                typeof i
                                                                            )
                                                                                return i;
                                                                            {
                                                                                const t =
                                                                                    R(
                                                                                        `<td>${i}</td>`
                                                                                    );
                                                                                1 ===
                                                                                    t
                                                                                        .childNodes
                                                                                        .length &&
                                                                                [
                                                                                    "#text",
                                                                                    "#comment",
                                                                                ].includes(
                                                                                    t
                                                                                        .childNodes[0]
                                                                                        .nodeName
                                                                                )
                                                                                    ? (r.childNodes[0].data =
                                                                                          i)
                                                                                    : (r.childNodes =
                                                                                          t.childNodes);
                                                                            }
                                                                        }
                                                                    }
                                                                    return r;
                                                                })
                                                                .filter(
                                                                    (t) => t
                                                                ),
                                                        };
                                                        if (
                                                            (e === a &&
                                                                (s.attributes.class =
                                                                    u(
                                                                        s
                                                                            .attributes
                                                                            .class,
                                                                        r.cursor
                                                                    )),
                                                            g)
                                                        ) {
                                                            const i = g(
                                                                t,
                                                                s,
                                                                e
                                                            );
                                                            if (i) {
                                                                if (
                                                                    "string" !=
                                                                    typeof i
                                                                )
                                                                    return i;
                                                                {
                                                                    const t = R(
                                                                        `<tr>${i}</tr>`
                                                                    );
                                                                    !t.childNodes ||
                                                                    (1 ===
                                                                        t
                                                                            .childNodes
                                                                            .length &&
                                                                        [
                                                                            "#text",
                                                                            "#comment",
                                                                        ].includes(
                                                                            t
                                                                                .childNodes[0]
                                                                                .nodeName
                                                                        ))
                                                                        ? (s.childNodes[0].data =
                                                                              i)
                                                                        : (s.childNodes =
                                                                              t.childNodes);
                                                                }
                                                            }
                                                        }
                                                        return s;
                                                    }
                                                ),
                                            },
                                        ],
                                    };
                                    if (
                                        ((D.attributes.class = u(
                                            D.attributes.class,
                                            r.table
                                        )),
                                        d || c || _)
                                    ) {
                                        const t = j(
                                            e,
                                            i,
                                            n,
                                            {
                                                classes: r,
                                                hiddenHeader: l,
                                                sortable: p,
                                                scrollY: f,
                                            },
                                            {
                                                noColumnWidths: v,
                                                unhideHeader: w,
                                            }
                                        );
                                        if (d || _) {
                                            const e = {
                                                nodeName: "THEAD",
                                                childNodes: [t],
                                            };
                                            (!f.length && !l) ||
                                                w ||
                                                (e.attributes = {
                                                    style: "height: 0px;",
                                                }),
                                                D.childNodes.unshift(e);
                                        }
                                        if (c) {
                                            const e = {
                                                nodeName: "TFOOT",
                                                childNodes: [
                                                    d ? structuredClone(t) : t,
                                                ],
                                            };
                                            (!f.length && !l) ||
                                                w ||
                                                (e.attributes = {
                                                    style: "height: 0px;",
                                                }),
                                                D.childNodes.push(e);
                                        }
                                    }
                                    return (
                                        y.forEach((t) => D.childNodes.push(t)),
                                        N.forEach((t) => D.childNodes.push(t)),
                                        !1 !== b &&
                                            (D.attributes.tabindex = String(b)),
                                        D
                                    );
                                };
                            function F(t) {
                                return t &&
                                    t.__esModule &&
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        "default"
                                    )
                                    ? t.default
                                    : t;
                            }
                            "undefined" != typeof globalThis
                                ? globalThis
                                : "undefined" != typeof window
                                ? window
                                : void 0 !== t ||
                                  ("undefined" != typeof self && self);
                            var B = F(
                                    ({ exports: {} }.exports = (function () {
                                        var t = 6e4,
                                            e = 36e5,
                                            s = "millisecond",
                                            i = "second",
                                            n = "minute",
                                            a = "hour",
                                            o = "day",
                                            r = "week",
                                            l = "month",
                                            d = "quarter",
                                            c = "year",
                                            h = "date",
                                            u = "Invalid Date",
                                            p =
                                                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                                            f =
                                                /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                                            m = {
                                                name: "en",
                                                weekdays:
                                                    "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                                                        "_"
                                                    ),
                                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                                                    "_"
                                                ),
                                                ordinal: function (t) {
                                                    var e = [
                                                            "th",
                                                            "st",
                                                            "nd",
                                                            "rd",
                                                        ],
                                                        s = t % 100;
                                                    return (
                                                        "[" +
                                                        t +
                                                        (e[(s - 20) % 10] ||
                                                            e[s] ||
                                                            e[0]) +
                                                        "]"
                                                    );
                                                },
                                            },
                                            g = function (t, e, s) {
                                                var i = String(t);
                                                return !i || i.length >= e
                                                    ? t
                                                    : "" +
                                                          Array(
                                                              e + 1 - i.length
                                                          ).join(s) +
                                                          t;
                                            },
                                            b = {
                                                s: g,
                                                z: function (t) {
                                                    var e = -t.utcOffset(),
                                                        s = Math.abs(e),
                                                        i = Math.floor(s / 60),
                                                        n = s % 60;
                                                    return (
                                                        (e <= 0 ? "+" : "-") +
                                                        g(i, 2, "0") +
                                                        ":" +
                                                        g(n, 2, "0")
                                                    );
                                                },
                                                m: function t(e, s) {
                                                    if (e.date() < s.date())
                                                        return -t(s, e);
                                                    var i =
                                                            12 *
                                                                (s.year() -
                                                                    e.year()) +
                                                            (s.month() -
                                                                e.month()),
                                                        n = e.clone().add(i, l),
                                                        a = s - n < 0,
                                                        o = e
                                                            .clone()
                                                            .add(
                                                                i +
                                                                    (a
                                                                        ? -1
                                                                        : 1),
                                                                l
                                                            );
                                                    return +(
                                                        -(
                                                            i +
                                                            (s - n) /
                                                                (a
                                                                    ? n - o
                                                                    : o - n)
                                                        ) || 0
                                                    );
                                                },
                                                a: function (t) {
                                                    return t < 0
                                                        ? Math.ceil(t) || 0
                                                        : Math.floor(t);
                                                },
                                                p: function (t) {
                                                    return (
                                                        {
                                                            M: l,
                                                            y: c,
                                                            w: r,
                                                            d: o,
                                                            D: h,
                                                            h: a,
                                                            m: n,
                                                            s: i,
                                                            ms: s,
                                                            Q: d,
                                                        }[t] ||
                                                        String(t || "")
                                                            .toLowerCase()
                                                            .replace(/s$/, "")
                                                    );
                                                },
                                                u: function (t) {
                                                    return void 0 === t;
                                                },
                                            },
                                            v = "en",
                                            w = {};
                                        w[v] = m;
                                        var _ = "$isDayjsObject",
                                            y = function (t) {
                                                return (
                                                    t instanceof M ||
                                                    !(!t || !t[_])
                                                );
                                            },
                                            N = function t(e, s, i) {
                                                var n;
                                                if (!e) return v;
                                                if ("string" == typeof e) {
                                                    var a = e.toLowerCase();
                                                    w[a] && (n = a),
                                                        s &&
                                                            ((w[a] = s),
                                                            (n = a));
                                                    var o = e.split("-");
                                                    if (!n && o.length > 1)
                                                        return t(o[0]);
                                                } else {
                                                    var r = e.name;
                                                    (w[r] = e), (n = r);
                                                }
                                                return (
                                                    !i && n && (v = n),
                                                    n || (!i && v)
                                                );
                                            },
                                            D = function (t, e) {
                                                if (y(t)) return t.clone();
                                                var s =
                                                    "object" == typeof e
                                                        ? e
                                                        : {};
                                                return (
                                                    (s.date = t),
                                                    (s.args = arguments),
                                                    new M(s)
                                                );
                                            },
                                            x = b;
                                        (x.l = N),
                                            (x.i = y),
                                            (x.w = function (t, e) {
                                                return D(t, {
                                                    locale: e.$L,
                                                    utc: e.$u,
                                                    x: e.$x,
                                                    $offset: e.$offset,
                                                });
                                            });
                                        var M = (function () {
                                                function m(t) {
                                                    (this.$L = N(
                                                        t.locale,
                                                        null,
                                                        !0
                                                    )),
                                                        this.parse(t),
                                                        (this.$x =
                                                            this.$x ||
                                                            t.x ||
                                                            {}),
                                                        (this[_] = !0);
                                                }
                                                var g = m.prototype;
                                                return (
                                                    (g.parse = function (t) {
                                                        (this.$d = (function (
                                                            t
                                                        ) {
                                                            var e = t.date,
                                                                s = t.utc;
                                                            if (null === e)
                                                                return new Date(
                                                                    NaN
                                                                );
                                                            if (x.u(e))
                                                                return new Date();
                                                            if (
                                                                e instanceof
                                                                Date
                                                            )
                                                                return new Date(
                                                                    e
                                                                );
                                                            if (
                                                                "string" ==
                                                                    typeof e &&
                                                                !/Z$/i.test(e)
                                                            ) {
                                                                var i =
                                                                    e.match(p);
                                                                if (i) {
                                                                    var n =
                                                                            i[2] -
                                                                                1 ||
                                                                            0,
                                                                        a = (
                                                                            i[7] ||
                                                                            "0"
                                                                        ).substring(
                                                                            0,
                                                                            3
                                                                        );
                                                                    return s
                                                                        ? new Date(
                                                                              Date.UTC(
                                                                                  i[1],
                                                                                  n,
                                                                                  i[3] ||
                                                                                      1,
                                                                                  i[4] ||
                                                                                      0,
                                                                                  i[5] ||
                                                                                      0,
                                                                                  i[6] ||
                                                                                      0,
                                                                                  a
                                                                              )
                                                                          )
                                                                        : new Date(
                                                                              i[1],
                                                                              n,
                                                                              i[3] ||
                                                                                  1,
                                                                              i[4] ||
                                                                                  0,
                                                                              i[5] ||
                                                                                  0,
                                                                              i[6] ||
                                                                                  0,
                                                                              a
                                                                          );
                                                                }
                                                            }
                                                            return new Date(e);
                                                        })(t)),
                                                            this.init();
                                                    }),
                                                    (g.init = function () {
                                                        var t = this.$d;
                                                        (this.$y =
                                                            t.getFullYear()),
                                                            (this.$M =
                                                                t.getMonth()),
                                                            (this.$D =
                                                                t.getDate()),
                                                            (this.$W =
                                                                t.getDay()),
                                                            (this.$H =
                                                                t.getHours()),
                                                            (this.$m =
                                                                t.getMinutes()),
                                                            (this.$s =
                                                                t.getSeconds()),
                                                            (this.$ms =
                                                                t.getMilliseconds());
                                                    }),
                                                    (g.$utils = function () {
                                                        return x;
                                                    }),
                                                    (g.isValid = function () {
                                                        return !(
                                                            this.$d.toString() ===
                                                            u
                                                        );
                                                    }),
                                                    (g.isSame = function (
                                                        t,
                                                        e
                                                    ) {
                                                        var s = D(t);
                                                        return (
                                                            this.startOf(e) <=
                                                                s &&
                                                            s <= this.endOf(e)
                                                        );
                                                    }),
                                                    (g.isAfter = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return (
                                                            D(t) <
                                                            this.startOf(e)
                                                        );
                                                    }),
                                                    (g.isBefore = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return (
                                                            this.endOf(e) < D(t)
                                                        );
                                                    }),
                                                    (g.$g = function (t, e, s) {
                                                        return x.u(t)
                                                            ? this[e]
                                                            : this.set(s, t);
                                                    }),
                                                    (g.unix = function () {
                                                        return Math.floor(
                                                            this.valueOf() / 1e3
                                                        );
                                                    }),
                                                    (g.valueOf = function () {
                                                        return this.$d.getTime();
                                                    }),
                                                    (g.startOf = function (
                                                        t,
                                                        e
                                                    ) {
                                                        var s = this,
                                                            d = !!x.u(e) || e,
                                                            u = x.p(t),
                                                            p = function (
                                                                t,
                                                                e
                                                            ) {
                                                                var i = x.w(
                                                                    s.$u
                                                                        ? Date.UTC(
                                                                              s.$y,
                                                                              e,
                                                                              t
                                                                          )
                                                                        : new Date(
                                                                              s.$y,
                                                                              e,
                                                                              t
                                                                          ),
                                                                    s
                                                                );
                                                                return d
                                                                    ? i
                                                                    : i.endOf(
                                                                          o
                                                                      );
                                                            },
                                                            f = function (
                                                                t,
                                                                e
                                                            ) {
                                                                return x.w(
                                                                    s
                                                                        .toDate()
                                                                        [
                                                                            t
                                                                        ].apply(
                                                                            s.toDate(
                                                                                "s"
                                                                            ),
                                                                            (d
                                                                                ? [
                                                                                      0,
                                                                                      0,
                                                                                      0,
                                                                                      0,
                                                                                  ]
                                                                                : [
                                                                                      23,
                                                                                      59,
                                                                                      59,
                                                                                      999,
                                                                                  ]
                                                                            ).slice(
                                                                                e
                                                                            )
                                                                        ),
                                                                    s
                                                                );
                                                            },
                                                            m = this.$W,
                                                            g = this.$M,
                                                            b = this.$D,
                                                            v =
                                                                "set" +
                                                                (this.$u
                                                                    ? "UTC"
                                                                    : "");
                                                        switch (u) {
                                                            case c:
                                                                return d
                                                                    ? p(1, 0)
                                                                    : p(31, 11);
                                                            case l:
                                                                return d
                                                                    ? p(1, g)
                                                                    : p(
                                                                          0,
                                                                          g + 1
                                                                      );
                                                            case r:
                                                                var w =
                                                                        this.$locale()
                                                                            .weekStart ||
                                                                        0,
                                                                    _ =
                                                                        (m < w
                                                                            ? m +
                                                                              7
                                                                            : m) -
                                                                        w;
                                                                return p(
                                                                    d
                                                                        ? b - _
                                                                        : b +
                                                                              (6 -
                                                                                  _),
                                                                    g
                                                                );
                                                            case o:
                                                            case h:
                                                                return f(
                                                                    v + "Hours",
                                                                    0
                                                                );
                                                            case a:
                                                                return f(
                                                                    v +
                                                                        "Minutes",
                                                                    1
                                                                );
                                                            case n:
                                                                return f(
                                                                    v +
                                                                        "Seconds",
                                                                    2
                                                                );
                                                            case i:
                                                                return f(
                                                                    v +
                                                                        "Milliseconds",
                                                                    3
                                                                );
                                                            default:
                                                                return this.clone();
                                                        }
                                                    }),
                                                    (g.endOf = function (t) {
                                                        return this.startOf(
                                                            t,
                                                            !1
                                                        );
                                                    }),
                                                    (g.$set = function (t, e) {
                                                        var r,
                                                            d = x.p(t),
                                                            u =
                                                                "set" +
                                                                (this.$u
                                                                    ? "UTC"
                                                                    : ""),
                                                            p = ((r = {}),
                                                            (r[o] = u + "Date"),
                                                            (r[h] = u + "Date"),
                                                            (r[l] =
                                                                u + "Month"),
                                                            (r[c] =
                                                                u + "FullYear"),
                                                            (r[a] =
                                                                u + "Hours"),
                                                            (r[n] =
                                                                u + "Minutes"),
                                                            (r[i] =
                                                                u + "Seconds"),
                                                            (r[s] =
                                                                u +
                                                                "Milliseconds"),
                                                            r)[d],
                                                            f =
                                                                d === o
                                                                    ? this.$D +
                                                                      (e -
                                                                          this
                                                                              .$W)
                                                                    : e;
                                                        if (
                                                            d === l ||
                                                            d === c
                                                        ) {
                                                            var m =
                                                                this.clone().set(
                                                                    h,
                                                                    1
                                                                );
                                                            m.$d[p](f),
                                                                m.init(),
                                                                (this.$d =
                                                                    m.set(
                                                                        h,
                                                                        Math.min(
                                                                            this
                                                                                .$D,
                                                                            m.daysInMonth()
                                                                        )
                                                                    ).$d);
                                                        } else
                                                            p && this.$d[p](f);
                                                        return (
                                                            this.init(), this
                                                        );
                                                    }),
                                                    (g.set = function (t, e) {
                                                        return this.clone().$set(
                                                            t,
                                                            e
                                                        );
                                                    }),
                                                    (g.get = function (t) {
                                                        return this[x.p(t)]();
                                                    }),
                                                    (g.add = function (s, d) {
                                                        var h,
                                                            u = this;
                                                        s = Number(s);
                                                        var p = x.p(d),
                                                            f = function (t) {
                                                                var e = D(u);
                                                                return x.w(
                                                                    e.date(
                                                                        e.date() +
                                                                            Math.round(
                                                                                t *
                                                                                    s
                                                                            )
                                                                    ),
                                                                    u
                                                                );
                                                            };
                                                        if (p === l)
                                                            return this.set(
                                                                l,
                                                                this.$M + s
                                                            );
                                                        if (p === c)
                                                            return this.set(
                                                                c,
                                                                this.$y + s
                                                            );
                                                        if (p === o)
                                                            return f(1);
                                                        if (p === r)
                                                            return f(7);
                                                        var m =
                                                                ((h = {}),
                                                                (h[n] = t),
                                                                (h[a] = e),
                                                                (h[i] = 1e3),
                                                                h)[p] || 1,
                                                            g =
                                                                this.$d.getTime() +
                                                                s * m;
                                                        return x.w(g, this);
                                                    }),
                                                    (g.subtract = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return this.add(
                                                            -1 * t,
                                                            e
                                                        );
                                                    }),
                                                    (g.format = function (t) {
                                                        var e = this,
                                                            s = this.$locale();
                                                        if (!this.isValid())
                                                            return (
                                                                s.invalidDate ||
                                                                u
                                                            );
                                                        var i =
                                                                t ||
                                                                "YYYY-MM-DDTHH:mm:ssZ",
                                                            n = x.z(this),
                                                            a = this.$H,
                                                            o = this.$m,
                                                            r = this.$M,
                                                            l = s.weekdays,
                                                            d = s.months,
                                                            c = s.meridiem,
                                                            h = function (
                                                                t,
                                                                s,
                                                                n,
                                                                a
                                                            ) {
                                                                return (
                                                                    (t &&
                                                                        (t[s] ||
                                                                            t(
                                                                                e,
                                                                                i
                                                                            ))) ||
                                                                    n[s].slice(
                                                                        0,
                                                                        a
                                                                    )
                                                                );
                                                            },
                                                            p = function (t) {
                                                                return x.s(
                                                                    a % 12 ||
                                                                        12,
                                                                    t,
                                                                    "0"
                                                                );
                                                            },
                                                            m =
                                                                c ||
                                                                function (
                                                                    t,
                                                                    e,
                                                                    s
                                                                ) {
                                                                    var i =
                                                                        t < 12
                                                                            ? "AM"
                                                                            : "PM";
                                                                    return s
                                                                        ? i.toLowerCase()
                                                                        : i;
                                                                };
                                                        return i.replace(
                                                            f,
                                                            function (t, i) {
                                                                return (
                                                                    i ||
                                                                    (function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t
                                                                        ) {
                                                                            case "YY":
                                                                                return String(
                                                                                    e.$y
                                                                                ).slice(
                                                                                    -2
                                                                                );
                                                                            case "YYYY":
                                                                                return x.s(
                                                                                    e.$y,
                                                                                    4,
                                                                                    "0"
                                                                                );
                                                                            case "M":
                                                                                return (
                                                                                    r +
                                                                                    1
                                                                                );
                                                                            case "MM":
                                                                                return x.s(
                                                                                    r +
                                                                                        1,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "MMM":
                                                                                return h(
                                                                                    s.monthsShort,
                                                                                    r,
                                                                                    d,
                                                                                    3
                                                                                );
                                                                            case "MMMM":
                                                                                return h(
                                                                                    d,
                                                                                    r
                                                                                );
                                                                            case "D":
                                                                                return e.$D;
                                                                            case "DD":
                                                                                return x.s(
                                                                                    e.$D,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "d":
                                                                                return String(
                                                                                    e.$W
                                                                                );
                                                                            case "dd":
                                                                                return h(
                                                                                    s.weekdaysMin,
                                                                                    e.$W,
                                                                                    l,
                                                                                    2
                                                                                );
                                                                            case "ddd":
                                                                                return h(
                                                                                    s.weekdaysShort,
                                                                                    e.$W,
                                                                                    l,
                                                                                    3
                                                                                );
                                                                            case "dddd":
                                                                                return l[
                                                                                    e
                                                                                        .$W
                                                                                ];
                                                                            case "H":
                                                                                return String(
                                                                                    a
                                                                                );
                                                                            case "HH":
                                                                                return x.s(
                                                                                    a,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "h":
                                                                                return p(
                                                                                    1
                                                                                );
                                                                            case "hh":
                                                                                return p(
                                                                                    2
                                                                                );
                                                                            case "a":
                                                                                return m(
                                                                                    a,
                                                                                    o,
                                                                                    !0
                                                                                );
                                                                            case "A":
                                                                                return m(
                                                                                    a,
                                                                                    o,
                                                                                    !1
                                                                                );
                                                                            case "m":
                                                                                return String(
                                                                                    o
                                                                                );
                                                                            case "mm":
                                                                                return x.s(
                                                                                    o,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "s":
                                                                                return String(
                                                                                    e.$s
                                                                                );
                                                                            case "ss":
                                                                                return x.s(
                                                                                    e.$s,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "SSS":
                                                                                return x.s(
                                                                                    e.$ms,
                                                                                    3,
                                                                                    "0"
                                                                                );
                                                                            case "Z":
                                                                                return n;
                                                                        }
                                                                        return null;
                                                                    })(t) ||
                                                                    n.replace(
                                                                        ":",
                                                                        ""
                                                                    )
                                                                );
                                                            }
                                                        );
                                                    }),
                                                    (g.utcOffset = function () {
                                                        return (
                                                            15 *
                                                            -Math.round(
                                                                this.$d.getTimezoneOffset() /
                                                                    15
                                                            )
                                                        );
                                                    }),
                                                    (g.diff = function (
                                                        s,
                                                        h,
                                                        u
                                                    ) {
                                                        var p,
                                                            f = this,
                                                            m = x.p(h),
                                                            g = D(s),
                                                            b =
                                                                (g.utcOffset() -
                                                                    this.utcOffset()) *
                                                                t,
                                                            v = this - g,
                                                            w = function () {
                                                                return x.m(
                                                                    f,
                                                                    g
                                                                );
                                                            };
                                                        switch (m) {
                                                            case c:
                                                                p = w() / 12;
                                                                break;
                                                            case l:
                                                                p = w();
                                                                break;
                                                            case d:
                                                                p = w() / 3;
                                                                break;
                                                            case r:
                                                                p =
                                                                    (v - b) /
                                                                    6048e5;
                                                                break;
                                                            case o:
                                                                p =
                                                                    (v - b) /
                                                                    864e5;
                                                                break;
                                                            case a:
                                                                p = v / e;
                                                                break;
                                                            case n:
                                                                p = v / t;
                                                                break;
                                                            case i:
                                                                p = v / 1e3;
                                                                break;
                                                            default:
                                                                p = v;
                                                        }
                                                        return u ? p : x.a(p);
                                                    }),
                                                    (g.daysInMonth =
                                                        function () {
                                                            return this.endOf(l)
                                                                .$D;
                                                        }),
                                                    (g.$locale = function () {
                                                        return w[this.$L];
                                                    }),
                                                    (g.locale = function (
                                                        t,
                                                        e
                                                    ) {
                                                        if (!t) return this.$L;
                                                        var s = this.clone(),
                                                            i = N(t, e, !0);
                                                        return (
                                                            i && (s.$L = i), s
                                                        );
                                                    }),
                                                    (g.clone = function () {
                                                        return x.w(
                                                            this.$d,
                                                            this
                                                        );
                                                    }),
                                                    (g.toDate = function () {
                                                        return new Date(
                                                            this.valueOf()
                                                        );
                                                    }),
                                                    (g.toJSON = function () {
                                                        return this.isValid()
                                                            ? this.toISOString()
                                                            : null;
                                                    }),
                                                    (g.toISOString =
                                                        function () {
                                                            return this.$d.toISOString();
                                                        }),
                                                    (g.toString = function () {
                                                        return this.$d.toUTCString();
                                                    }),
                                                    m
                                                );
                                            })(),
                                            O = M.prototype;
                                        return (
                                            (D.prototype = O),
                                            [
                                                ["$ms", s],
                                                ["$s", i],
                                                ["$m", n],
                                                ["$H", a],
                                                ["$W", o],
                                                ["$M", l],
                                                ["$y", c],
                                                ["$D", h],
                                            ].forEach(function (t) {
                                                O[t[1]] = function (e) {
                                                    return this.$g(
                                                        e,
                                                        t[0],
                                                        t[1]
                                                    );
                                                };
                                            }),
                                            (D.extend = function (t, e) {
                                                return (
                                                    t.$i ||
                                                        (t(e, M, D),
                                                        (t.$i = !0)),
                                                    D
                                                );
                                            }),
                                            (D.locale = N),
                                            (D.isDayjs = y),
                                            (D.unix = function (t) {
                                                return D(1e3 * t);
                                            }),
                                            (D.en = w[v]),
                                            (D.Ls = w),
                                            (D.p = {}),
                                            D
                                        );
                                    })())
                                ),
                                U = F(
                                    ({ exports: {} }.exports = (function () {
                                        var t = {
                                                LTS: "h:mm:ss A",
                                                LT: "h:mm A",
                                                L: "MM/DD/YYYY",
                                                LL: "MMMM D, YYYY",
                                                LLL: "MMMM D, YYYY h:mm A",
                                                LLLL: "dddd, MMMM D, YYYY h:mm A",
                                            },
                                            e =
                                                /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                                            s = /\d\d/,
                                            i = /\d\d?/,
                                            n = /\d*[^-_:/,()\s\d]+/,
                                            a = {},
                                            o = function (t) {
                                                return (
                                                    (t = +t) +
                                                    (t > 68 ? 1900 : 2e3)
                                                );
                                            },
                                            r = function (t) {
                                                return function (e) {
                                                    this[t] = +e;
                                                };
                                            },
                                            l = [
                                                /[+-]\d\d:?(\d\d)?|Z/,
                                                function (t) {
                                                    (
                                                        this.zone ||
                                                        (this.zone = {})
                                                    ).offset = (function (t) {
                                                        if (!t) return 0;
                                                        if ("Z" === t) return 0;
                                                        var e =
                                                                t.match(
                                                                    /([+-]|\d\d)/g
                                                                ),
                                                            s =
                                                                60 * e[1] +
                                                                (+e[2] || 0);
                                                        return 0 === s
                                                            ? 0
                                                            : "+" === e[0]
                                                            ? -s
                                                            : s;
                                                    })(t);
                                                },
                                            ],
                                            d = function (t) {
                                                var e = a[t];
                                                return (
                                                    e &&
                                                    (e.indexOf
                                                        ? e
                                                        : e.s.concat(e.f))
                                                );
                                            },
                                            c = function (t, e) {
                                                var s,
                                                    i = a.meridiem;
                                                if (i) {
                                                    for (
                                                        var n = 1;
                                                        n <= 24;
                                                        n += 1
                                                    )
                                                        if (
                                                            t.indexOf(
                                                                i(n, 0, e)
                                                            ) > -1
                                                        ) {
                                                            s = n > 12;
                                                            break;
                                                        }
                                                } else
                                                    s = t === (e ? "pm" : "PM");
                                                return s;
                                            },
                                            h = {
                                                A: [
                                                    n,
                                                    function (t) {
                                                        this.afternoon = c(
                                                            t,
                                                            !1
                                                        );
                                                    },
                                                ],
                                                a: [
                                                    n,
                                                    function (t) {
                                                        this.afternoon = c(
                                                            t,
                                                            !0
                                                        );
                                                    },
                                                ],
                                                S: [
                                                    /\d/,
                                                    function (t) {
                                                        this.milliseconds =
                                                            100 * +t;
                                                    },
                                                ],
                                                SS: [
                                                    s,
                                                    function (t) {
                                                        this.milliseconds =
                                                            10 * +t;
                                                    },
                                                ],
                                                SSS: [
                                                    /\d{3}/,
                                                    function (t) {
                                                        this.milliseconds = +t;
                                                    },
                                                ],
                                                s: [i, r("seconds")],
                                                ss: [i, r("seconds")],
                                                m: [i, r("minutes")],
                                                mm: [i, r("minutes")],
                                                H: [i, r("hours")],
                                                h: [i, r("hours")],
                                                HH: [i, r("hours")],
                                                hh: [i, r("hours")],
                                                D: [i, r("day")],
                                                DD: [s, r("day")],
                                                Do: [
                                                    n,
                                                    function (t) {
                                                        var e = a.ordinal,
                                                            s = t.match(/\d+/);
                                                        if (
                                                            ((this.day = s[0]),
                                                            e)
                                                        )
                                                            for (
                                                                var i = 1;
                                                                i <= 31;
                                                                i += 1
                                                            )
                                                                e(i).replace(
                                                                    /\[|\]/g,
                                                                    ""
                                                                ) === t &&
                                                                    (this.day =
                                                                        i);
                                                    },
                                                ],
                                                M: [i, r("month")],
                                                MM: [s, r("month")],
                                                MMM: [
                                                    n,
                                                    function (t) {
                                                        var e = d("months"),
                                                            s =
                                                                (
                                                                    d(
                                                                        "monthsShort"
                                                                    ) ||
                                                                    e.map(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t.slice(
                                                                                0,
                                                                                3
                                                                            );
                                                                        }
                                                                    )
                                                                ).indexOf(t) +
                                                                1;
                                                        if (s < 1)
                                                            throw new Error();
                                                        this.month =
                                                            s % 12 || s;
                                                    },
                                                ],
                                                MMMM: [
                                                    n,
                                                    function (t) {
                                                        var e =
                                                            d("months").indexOf(
                                                                t
                                                            ) + 1;
                                                        if (e < 1)
                                                            throw new Error();
                                                        this.month =
                                                            e % 12 || e;
                                                    },
                                                ],
                                                Y: [/[+-]?\d+/, r("year")],
                                                YY: [
                                                    s,
                                                    function (t) {
                                                        this.year = o(t);
                                                    },
                                                ],
                                                YYYY: [/\d{4}/, r("year")],
                                                Z: l,
                                                ZZ: l,
                                            };
                                        function u(s) {
                                            var i, n;
                                            (i = s), (n = a && a.formats);
                                            for (
                                                var o = (s = i.replace(
                                                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                        function (e, s, i) {
                                                            var a =
                                                                i &&
                                                                i.toUpperCase();
                                                            return (
                                                                s ||
                                                                n[i] ||
                                                                t[i] ||
                                                                n[a].replace(
                                                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                                    function (
                                                                        t,
                                                                        e,
                                                                        s
                                                                    ) {
                                                                        return (
                                                                            e ||
                                                                            s.slice(
                                                                                1
                                                                            )
                                                                        );
                                                                    }
                                                                )
                                                            );
                                                        }
                                                    )).match(e),
                                                    r = o.length,
                                                    l = 0;
                                                l < r;
                                                l += 1
                                            ) {
                                                var d = o[l],
                                                    c = h[d],
                                                    u = c && c[0],
                                                    p = c && c[1];
                                                o[l] = p
                                                    ? { regex: u, parser: p }
                                                    : d.replace(/^\[|\]$/g, "");
                                            }
                                            return function (t) {
                                                for (
                                                    var e = {}, s = 0, i = 0;
                                                    s < r;
                                                    s += 1
                                                ) {
                                                    var n = o[s];
                                                    if ("string" == typeof n)
                                                        i += n.length;
                                                    else {
                                                        var a = n.regex,
                                                            l = n.parser,
                                                            d = t.slice(i),
                                                            c = a.exec(d)[0];
                                                        l.call(e, c),
                                                            (t = t.replace(
                                                                c,
                                                                ""
                                                            ));
                                                    }
                                                }
                                                return (
                                                    (function (t) {
                                                        var e = t.afternoon;
                                                        if (void 0 !== e) {
                                                            var s = t.hours;
                                                            e
                                                                ? s < 12 &&
                                                                  (t.hours += 12)
                                                                : 12 === s &&
                                                                  (t.hours = 0),
                                                                delete t.afternoon;
                                                        }
                                                    })(e),
                                                    e
                                                );
                                            };
                                        }
                                        return function (t, e, s) {
                                            (s.p.customParseFormat = !0),
                                                t &&
                                                    t.parseTwoDigitYear &&
                                                    (o = t.parseTwoDigitYear);
                                            var i = e.prototype,
                                                n = i.parse;
                                            i.parse = function (t) {
                                                var e = t.date,
                                                    i = t.utc,
                                                    o = t.args;
                                                this.$u = i;
                                                var r = o[1];
                                                if ("string" == typeof r) {
                                                    var l = !0 === o[2],
                                                        d = !0 === o[3],
                                                        c = l || d,
                                                        h = o[2];
                                                    d && (h = o[2]),
                                                        (a = this.$locale()),
                                                        !l &&
                                                            h &&
                                                            (a = s.Ls[h]),
                                                        (this.$d = (function (
                                                            t,
                                                            e,
                                                            s
                                                        ) {
                                                            try {
                                                                if (
                                                                    [
                                                                        "x",
                                                                        "X",
                                                                    ].indexOf(
                                                                        e
                                                                    ) > -1
                                                                )
                                                                    return new Date(
                                                                        ("X" ===
                                                                        e
                                                                            ? 1e3
                                                                            : 1) *
                                                                            t
                                                                    );
                                                                var i = u(e)(t),
                                                                    n = i.year,
                                                                    a = i.month,
                                                                    o = i.day,
                                                                    r = i.hours,
                                                                    l =
                                                                        i.minutes,
                                                                    d =
                                                                        i.seconds,
                                                                    c =
                                                                        i.milliseconds,
                                                                    h = i.zone,
                                                                    p =
                                                                        new Date(),
                                                                    f =
                                                                        o ||
                                                                        (n || a
                                                                            ? 1
                                                                            : p.getDate()),
                                                                    m =
                                                                        n ||
                                                                        p.getFullYear(),
                                                                    g = 0;
                                                                (n && !a) ||
                                                                    (g =
                                                                        a > 0
                                                                            ? a -
                                                                              1
                                                                            : p.getMonth());
                                                                var b = r || 0,
                                                                    v = l || 0,
                                                                    w = d || 0,
                                                                    _ = c || 0;
                                                                return h
                                                                    ? new Date(
                                                                          Date.UTC(
                                                                              m,
                                                                              g,
                                                                              f,
                                                                              b,
                                                                              v,
                                                                              w,
                                                                              _ +
                                                                                  60 *
                                                                                      h.offset *
                                                                                      1e3
                                                                          )
                                                                      )
                                                                    : s
                                                                    ? new Date(
                                                                          Date.UTC(
                                                                              m,
                                                                              g,
                                                                              f,
                                                                              b,
                                                                              v,
                                                                              w,
                                                                              _
                                                                          )
                                                                      )
                                                                    : new Date(
                                                                          m,
                                                                          g,
                                                                          f,
                                                                          b,
                                                                          v,
                                                                          w,
                                                                          _
                                                                      );
                                                            } catch (t) {
                                                                return new Date(
                                                                    ""
                                                                );
                                                            }
                                                        })(e, r, i)),
                                                        this.init(),
                                                        h &&
                                                            !0 !== h &&
                                                            (this.$L =
                                                                this.locale(
                                                                    h
                                                                ).$L),
                                                        c &&
                                                            e !=
                                                                this.format(
                                                                    r
                                                                ) &&
                                                            (this.$d = new Date(
                                                                ""
                                                            )),
                                                        (a = {});
                                                } else if (r instanceof Array)
                                                    for (
                                                        var p = r.length, f = 1;
                                                        f <= p;
                                                        f += 1
                                                    ) {
                                                        o[1] = r[f - 1];
                                                        var m = s.apply(
                                                            this,
                                                            o
                                                        );
                                                        if (m.isValid()) {
                                                            (this.$d = m.$d),
                                                                (this.$L =
                                                                    m.$L),
                                                                this.init();
                                                            break;
                                                        }
                                                        f === p &&
                                                            (this.$d = new Date(
                                                                ""
                                                            ));
                                                    }
                                                else n.call(this, t);
                                            };
                                        };
                                    })())
                                );
                            B.extend(U);
                            const z = (t, e) => {
                                    let s;
                                    if (e)
                                        switch (e) {
                                            case "ISO_8601":
                                                s = t;
                                                break;
                                            case "RFC_2822":
                                                s = B(
                                                    t.slice(5),
                                                    "DD MMM YYYY HH:mm:ss ZZ"
                                                ).unix();
                                                break;
                                            case "MYSQL":
                                                s = B(
                                                    t,
                                                    "YYYY-MM-DD hh:mm:ss"
                                                ).unix();
                                                break;
                                            case "UNIX":
                                                s = B(t).unix();
                                                break;
                                            default:
                                                s = B(t, e, !0).valueOf();
                                        }
                                    return s;
                                },
                                J = (t, e) => {
                                    if (
                                        t?.constructor === Object &&
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        ) &&
                                        !Object.keys(t).find(
                                            (t) =>
                                                ![
                                                    "text",
                                                    "order",
                                                    "data",
                                                    "attributes",
                                                ].includes(t)
                                        )
                                    )
                                        return t;
                                    const s = { data: t };
                                    switch (e.type) {
                                        case "string":
                                            "string" != typeof t &&
                                                ((s.text = String(s.data)),
                                                (s.order = s.text));
                                            break;
                                        case "date":
                                            e.format &&
                                                (s.order = z(
                                                    String(s.data),
                                                    e.format
                                                ));
                                            break;
                                        case "number":
                                            (s.text = String(s.data)),
                                                (s.data = parseInt(s.data, 10));
                                            break;
                                        case "html": {
                                            const t = Array.isArray(s.data)
                                                ? {
                                                      nodeName: "TD",
                                                      childNodes: s.data,
                                                  }
                                                : R(
                                                      `<td>${String(
                                                          s.data
                                                      )}</td>`
                                                  );
                                            s.data = t.childNodes || [];
                                            const e = a(t);
                                            (s.text = e), (s.order = e);
                                            break;
                                        }
                                        case "boolean":
                                            "string" == typeof s.data &&
                                                (s.data = s.data
                                                    .toLowerCase()
                                                    .trim()),
                                                (s.data = ![
                                                    "false",
                                                    !1,
                                                    null,
                                                    void 0,
                                                    0,
                                                ].includes(s.data)),
                                                (s.order = s.data ? 1 : 0),
                                                (s.text = String(s.data));
                                            break;
                                        case "other":
                                            (s.text = ""), (s.order = 0);
                                            break;
                                        default:
                                            s.text = JSON.stringify(s.data);
                                    }
                                    return s;
                                },
                                W = (t) => {
                                    if (
                                        t instanceof Object &&
                                        t.constructor === Object &&
                                        t.hasOwnProperty("data") &&
                                        ("string" == typeof t.text ||
                                            "string" == typeof t.data)
                                    )
                                        return t;
                                    const e = { data: t };
                                    if ("string" == typeof t) {
                                        if (t.length) {
                                            const s = R(`<th>${t}</th>`);
                                            if (
                                                s.childNodes &&
                                                (1 !== s.childNodes.length ||
                                                    "#text" !==
                                                        s.childNodes[0]
                                                            .nodeName)
                                            ) {
                                                (e.data = s.childNodes),
                                                    (e.type = "html");
                                                const t = a(s);
                                                e.text = t;
                                            }
                                        }
                                    } else
                                        [null, void 0].includes(t)
                                            ? (e.text = "")
                                            : (e.text = JSON.stringify(t));
                                    return e;
                                },
                                Q = (t, e = void 0, s, i, n) => {
                                    const o = { data: [], headings: [] };
                                    if (t.headings)
                                        o.headings = t.headings.map((t) =>
                                            W(t)
                                        );
                                    else if (e?.tHead)
                                        o.headings = Array.from(
                                            e.tHead.querySelectorAll("th")
                                        ).map((t, e) => {
                                            const o = ((t) => {
                                                const e = S(t, {
                                                    valueDiffing: !1,
                                                });
                                                let s;
                                                return (
                                                    (s =
                                                        !e.childNodes ||
                                                        (1 ===
                                                            e.childNodes
                                                                .length &&
                                                            "#text" ===
                                                                e.childNodes[0]
                                                                    .nodeName)
                                                            ? {
                                                                  data: t.innerText,
                                                                  type: "string",
                                                              }
                                                            : {
                                                                  data: e.childNodes,
                                                                  type: "html",
                                                                  text: a(e),
                                                              }),
                                                    (s.attributes =
                                                        e.attributes),
                                                    s
                                                );
                                            })(t);
                                            s[e] ||
                                                (s[e] = {
                                                    type: i,
                                                    format: n,
                                                    searchable: !0,
                                                    sortable: !0,
                                                });
                                            const r = s[e];
                                            return (
                                                ("false" !==
                                                    t.dataset.sortable
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    "false" !==
                                                        t.dataset.sort
                                                            ?.trim()
                                                            .toLowerCase()) ||
                                                    (r.sortable = !1),
                                                "false" ===
                                                    t.dataset.searchable
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    (r.searchable = !1),
                                                ("true" !==
                                                    t.dataset.hidden
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    "true" !==
                                                        t
                                                            .getAttribute(
                                                                "hidden"
                                                            )
                                                            ?.trim()
                                                            .toLowerCase()) ||
                                                    (r.hidden = !0),
                                                [
                                                    "number",
                                                    "string",
                                                    "html",
                                                    "date",
                                                    "boolean",
                                                    "other",
                                                ].includes(t.dataset.type) &&
                                                    ((r.type = t.dataset.type),
                                                    "date" === r.type &&
                                                        t.dataset.format &&
                                                        (r.format =
                                                            t.dataset.format)),
                                                o
                                            );
                                        });
                                    else if (t.data?.length) {
                                        const e = t.data[0],
                                            s = Array.isArray(e) ? e : e.cells;
                                        o.headings = s.map((t) => W(""));
                                    } else
                                        e?.tBodies.length &&
                                            (o.headings = Array.from(
                                                e.tBodies[0].rows[0].cells
                                            ).map((t) => W("")));
                                    for (let t = 0; t < o.headings.length; t++)
                                        s[t] ||
                                            (s[t] = {
                                                type: i,
                                                format: n,
                                                sortable: !0,
                                                searchable: !0,
                                            });
                                    if (
                                        (t.data
                                            ? (o.data = t.data.map((t) => {
                                                  let e, i;
                                                  return (
                                                      Array.isArray(t)
                                                          ? ((e = {}), (i = t))
                                                          : ((e = t.attributes),
                                                            (i = t.cells)),
                                                      {
                                                          attributes: e,
                                                          cells: i.map((t, e) =>
                                                              J(t, s[e])
                                                          ),
                                                      }
                                                  );
                                              }))
                                            : e?.tBodies?.length &&
                                              (o.data = Array.from(
                                                  e.tBodies[0].rows
                                              ).map((t) => ({
                                                  attributes: d(t.attributes),
                                                  cells: Array.from(
                                                      t.cells
                                                  ).map((t, e) => {
                                                      const i = t.dataset
                                                          .content
                                                          ? J(
                                                                t.dataset
                                                                    .content,
                                                                s[e]
                                                            )
                                                          : ((t, e) => {
                                                                let s;
                                                                switch (
                                                                    e.type
                                                                ) {
                                                                    case "string":
                                                                        s = {
                                                                            data: t.innerText,
                                                                        };
                                                                        break;
                                                                    case "date": {
                                                                        const i =
                                                                            t.innerText;
                                                                        s = {
                                                                            data: i,
                                                                            order: z(
                                                                                i,
                                                                                e.format
                                                                            ),
                                                                        };
                                                                        break;
                                                                    }
                                                                    case "number":
                                                                        s = {
                                                                            data: parseInt(
                                                                                t.innerText,
                                                                                10
                                                                            ),
                                                                            text: t.innerText,
                                                                        };
                                                                        break;
                                                                    case "boolean": {
                                                                        const e =
                                                                            ![
                                                                                "false",
                                                                                "0",
                                                                                "null",
                                                                                "undefined",
                                                                            ].includes(
                                                                                t.innerText
                                                                                    .toLowerCase()
                                                                                    .trim()
                                                                            );
                                                                        s = {
                                                                            data: e,
                                                                            text: e
                                                                                ? "1"
                                                                                : "0",
                                                                            order: e
                                                                                ? 1
                                                                                : 0,
                                                                        };
                                                                        break;
                                                                    }
                                                                    default:
                                                                        s = {
                                                                            data:
                                                                                S(
                                                                                    t,
                                                                                    {
                                                                                        valueDiffing:
                                                                                            !1,
                                                                                    }
                                                                                )
                                                                                    .childNodes ||
                                                                                [],
                                                                            text: t.innerText,
                                                                            order: t.innerText,
                                                                        };
                                                                }
                                                                return (
                                                                    (s.attributes =
                                                                        d(
                                                                            t.attributes
                                                                        )),
                                                                    s
                                                                );
                                                            })(t, s[e]);
                                                      return (
                                                          t.dataset.order &&
                                                              (i.order = isNaN(
                                                                  parseFloat(
                                                                      t.dataset
                                                                          .order
                                                                  )
                                                              )
                                                                  ? t.dataset
                                                                        .order
                                                                  : parseFloat(
                                                                        t
                                                                            .dataset
                                                                            .order
                                                                    )),
                                                          i
                                                      );
                                                  }),
                                              }))),
                                        o.data.length &&
                                            o.data[0].cells.length !==
                                                o.headings.length)
                                    )
                                        throw new Error(
                                            "Data heading length mismatch."
                                        );
                                    return o;
                                };
                            class X {
                                constructor(t) {
                                    (this.dt = t), (this.cursor = !1);
                                }
                                setCursor(t = !1) {
                                    if (t === this.cursor) return;
                                    const e = this.cursor;
                                    if (
                                        ((this.cursor = t),
                                        this.dt._renderTable(),
                                        !1 !== t && this.dt.options.scrollY)
                                    ) {
                                        const t = c(
                                                this.dt.options.classes.cursor
                                            ),
                                            e = this.dt.dom.querySelector(
                                                `tr${t}`
                                            );
                                        e &&
                                            e.scrollIntoView({
                                                block: "nearest",
                                            });
                                    }
                                    this.dt.emit(
                                        "datatable.cursormove",
                                        this.cursor,
                                        e
                                    );
                                }
                                add(t) {
                                    if (!Array.isArray(t) || t.length < 1)
                                        return;
                                    const e = {
                                        cells: t.map((t, e) => {
                                            const s =
                                                this.dt.columns.settings[e];
                                            return J(t, s);
                                        }),
                                    };
                                    this.dt.data.data.push(e),
                                        (this.dt.hasRows = !0),
                                        this.dt.update(!0);
                                }
                                remove(t) {
                                    if (!Array.isArray(t))
                                        return this.remove([t]);
                                    (this.dt.data.data =
                                        this.dt.data.data.filter(
                                            (e, s) => !t.includes(s)
                                        )),
                                        this.dt.data.data.length ||
                                            (this.dt.hasRows = !1),
                                        this.dt.update(!0);
                                }
                                findRowIndex(t, e) {
                                    return this.dt.data.data.findIndex((s) => {
                                        const i = s.cells[t];
                                        return o(i)
                                            .toLowerCase()
                                            .includes(String(e).toLowerCase());
                                    });
                                }
                                findRow(t, e) {
                                    const s = this.findRowIndex(t, e);
                                    if (s < 0)
                                        return {
                                            index: -1,
                                            row: null,
                                            cols: [],
                                        };
                                    const i = this.dt.data.data[s],
                                        n = i.cells.map((t) => t.data);
                                    return { index: s, row: i, cols: n };
                                }
                                updateRow(t, e) {
                                    const s = {
                                        cells: e.map((t, e) => {
                                            const s =
                                                this.dt.columns.settings[e];
                                            return J(t, s);
                                        }),
                                    };
                                    this.dt.data.data.splice(t, 1, s),
                                        this.dt.update(!0);
                                }
                            }
                            class Z {
                                constructor(t) {
                                    (this.dt = t), this.init();
                                }
                                init() {
                                    [this.settings, this._state] = ((
                                        t = [],
                                        e,
                                        s
                                    ) => {
                                        let i = [],
                                            n = !1;
                                        const a = [];
                                        return (
                                            t.forEach((t) => {
                                                (Array.isArray(t.select)
                                                    ? t.select
                                                    : [t.select]
                                                ).forEach((o) => {
                                                    i[o]
                                                        ? t.type &&
                                                          (i[o].type = t.type)
                                                        : (i[o] = {
                                                              type: t.type || e,
                                                              sortable: !0,
                                                              searchable: !0,
                                                          });
                                                    const r = i[o];
                                                    t.render &&
                                                        (r.render = t.render),
                                                        t.format
                                                            ? (r.format =
                                                                  t.format)
                                                            : "date" ===
                                                                  t.type &&
                                                              (r.format = s),
                                                        t.cellClass &&
                                                            (r.cellClass =
                                                                t.cellClass),
                                                        t.headerClass &&
                                                            (r.headerClass =
                                                                t.headerClass),
                                                        t.locale &&
                                                            (r.locale =
                                                                t.locale),
                                                        !1 === t.sortable
                                                            ? (r.sortable = !1)
                                                            : (t.numeric &&
                                                                  (r.numeric =
                                                                      t.numeric),
                                                              t.caseFirst &&
                                                                  (r.caseFirst =
                                                                      t.caseFirst)),
                                                        !1 === t.searchable
                                                            ? (r.searchable =
                                                                  !1)
                                                            : t.sensitivity &&
                                                              (r.sensitivity =
                                                                  t.sensitivity),
                                                        (r.searchable ||
                                                            r.sortable) &&
                                                            void 0 !==
                                                                t.ignorePunctuation &&
                                                            (r.ignorePunctuation =
                                                                t.ignorePunctuation),
                                                        t.hidden &&
                                                            (r.hidden = !0),
                                                        t.filter &&
                                                            (r.filter =
                                                                t.filter),
                                                        t.sortSequence &&
                                                            (r.sortSequence =
                                                                t.sortSequence),
                                                        t.sort &&
                                                            (t.filter
                                                                ? (a[o] =
                                                                      t.sort)
                                                                : (n = {
                                                                      column: o,
                                                                      dir: t.sort,
                                                                  })),
                                                        void 0 !==
                                                            t.searchItemSeparator &&
                                                            (r.searchItemSeparator =
                                                                t.searchItemSeparator);
                                                });
                                            }),
                                            (i = i.map(
                                                (t) =>
                                                    t || {
                                                        type: e,
                                                        format:
                                                            "date" === e
                                                                ? s
                                                                : void 0,
                                                        sortable: !0,
                                                        searchable: !0,
                                                    }
                                            )),
                                            [
                                                i,
                                                {
                                                    filters: a,
                                                    sort: n,
                                                    widths: [],
                                                },
                                            ]
                                        );
                                    })(
                                        this.dt.options.columns,
                                        this.dt.options.type,
                                        this.dt.options.format
                                    );
                                }
                                get(t) {
                                    return t < 0 || t >= this.size()
                                        ? null
                                        : { ...this.settings[t] };
                                }
                                size() {
                                    return this.settings.length;
                                }
                                swap(t) {
                                    if (2 === t.length) {
                                        const e = this.dt.data.headings.map(
                                                (t, e) => e
                                            ),
                                            s = t[0],
                                            i = t[1],
                                            n = e[i];
                                        return (
                                            (e[i] = e[s]),
                                            (e[s] = n),
                                            this.order(e)
                                        );
                                    }
                                }
                                order(t) {
                                    (this.dt.data.headings = t.map(
                                        (t) => this.dt.data.headings[t]
                                    )),
                                        this.dt.data.data.forEach(
                                            (e) =>
                                                (e.cells = t.map(
                                                    (t) => e.cells[t]
                                                ))
                                        ),
                                        (this.settings = t.map(
                                            (t) => this.settings[t]
                                        )),
                                        this.dt.update();
                                }
                                hide(t) {
                                    t.length &&
                                        (t.forEach((t) => {
                                            this.settings[t] ||
                                                (this.settings[t] = {
                                                    type: "string",
                                                }),
                                                (this.settings[t].hidden = !0);
                                        }),
                                        this.dt.update());
                                }
                                show(t) {
                                    t.length &&
                                        (t.forEach((t) => {
                                            this.settings[t] ||
                                                (this.settings[t] = {
                                                    type: "string",
                                                    sortable: !0,
                                                }),
                                                delete this.settings[t].hidden;
                                        }),
                                        this.dt.update());
                                }
                                visible(t) {
                                    return (
                                        void 0 === t &&
                                            (t = [
                                                ...Array(
                                                    this.dt.data.headings.length
                                                ).keys(),
                                            ]),
                                        Array.isArray(t)
                                            ? t.map(
                                                  (t) =>
                                                      !this.settings[t]?.hidden
                                              )
                                            : !this.settings[t]?.hidden
                                    );
                                }
                                add(t) {
                                    const e = this.dt.data.headings.length;
                                    if (
                                        ((this.dt.data.headings =
                                            this.dt.data.headings.concat([
                                                W(t.heading),
                                            ])),
                                        this.dt.data.data.forEach((e, s) => {
                                            e.cells = e.cells.concat([
                                                J(t.data[s], t),
                                            ]);
                                        }),
                                        (this.settings[e] = {
                                            type: t.type || "string",
                                            sortable: !0,
                                            searchable: !0,
                                        }),
                                        t.type ||
                                            t.format ||
                                            t.sortable ||
                                            t.render ||
                                            t.filter)
                                    ) {
                                        const s = this.settings[e];
                                        t.render && (s.render = t.render),
                                            t.format && (s.format = t.format),
                                            t.cellClass &&
                                                (s.cellClass = t.cellClass),
                                            t.headerClass &&
                                                (s.headerClass = t.headerClass),
                                            t.locale && (s.locale = t.locale),
                                            !1 === t.sortable
                                                ? (s.sortable = !1)
                                                : (t.numeric &&
                                                      (s.numeric = t.numeric),
                                                  t.caseFirst &&
                                                      (s.caseFirst =
                                                          t.caseFirst)),
                                            !1 === t.searchable
                                                ? (s.searchable = !1)
                                                : t.sensitivity &&
                                                  (s.sensitivity =
                                                      t.sensitivity),
                                            (s.searchable || s.sortable) &&
                                                t.ignorePunctuation &&
                                                (s.ignorePunctuation =
                                                    t.ignorePunctuation),
                                            t.hidden && (s.hidden = !0),
                                            t.filter && (s.filter = t.filter),
                                            t.sortSequence &&
                                                (s.sortSequence =
                                                    t.sortSequence);
                                    }
                                    this.dt.update(!0);
                                }
                                remove(t) {
                                    if (!Array.isArray(t))
                                        return this.remove([t]);
                                    (this.dt.data.headings =
                                        this.dt.data.headings.filter(
                                            (e, s) => !t.includes(s)
                                        )),
                                        this.dt.data.data.forEach(
                                            (e) =>
                                                (e.cells = e.cells.filter(
                                                    (e, s) => !t.includes(s)
                                                ))
                                        ),
                                        this.dt.update(!0);
                                }
                                filter(t, e = !1) {
                                    if (!this.settings[t]?.filter?.length)
                                        return;
                                    const s = this._state.filters[t];
                                    let i;
                                    if (s) {
                                        let e = !1;
                                        i = this.settings[t].filter.find(
                                            (t) =>
                                                !!e || (t === s && (e = !0), !1)
                                        );
                                    } else {
                                        const e = this.settings[t].filter;
                                        i = e ? e[0] : void 0;
                                    }
                                    i
                                        ? (this._state.filters[t] = i)
                                        : s &&
                                          (this._state.filters[t] = void 0),
                                        (this.dt._currentPage = 1),
                                        this.dt.update(),
                                        e ||
                                            this.dt.emit(
                                                "datatable.filter",
                                                t,
                                                i
                                            );
                                }
                                sort(t, e = void 0, s = !1) {
                                    const i = this.settings[t];
                                    if (
                                        (s ||
                                            this.dt.emit(
                                                "datatable.sorting",
                                                t,
                                                e
                                            ),
                                        !e)
                                    ) {
                                        const s =
                                                !(
                                                    !this._state.sort ||
                                                    this._state.sort.column !==
                                                        t
                                                ) && this._state.sort?.dir,
                                            n = i?.sortSequence || [
                                                "asc",
                                                "desc",
                                            ];
                                        if (s) {
                                            const t = n.indexOf(s);
                                            e =
                                                -1 === t
                                                    ? n[0] || "asc"
                                                    : t === n.length - 1
                                                    ? n[0]
                                                    : n[t + 1];
                                        } else e = n.length ? n[0] : "asc";
                                    }
                                    const n =
                                        !!["string", "html"].includes(i.type) &&
                                        new Intl.Collator(
                                            i.locale || this.dt.options.locale,
                                            {
                                                usage: "sort",
                                                numeric:
                                                    i.numeric ||
                                                    this.dt.options.numeric,
                                                caseFirst:
                                                    i.caseFirst ||
                                                    this.dt.options.caseFirst,
                                                ignorePunctuation:
                                                    i.ignorePunctuation ||
                                                    this.dt.options
                                                        .ignorePunctuation,
                                            }
                                        );
                                    this.dt.data.data.sort((s, i) => {
                                        const a = s.cells[t],
                                            r = i.cells[t];
                                        let l = a.order ?? o(a),
                                            d = r.order ?? o(r);
                                        if ("desc" === e) {
                                            const t = l;
                                            (l = d), (d = t);
                                        }
                                        return n
                                            ? n.compare(String(l), String(d))
                                            : l < d
                                            ? -1
                                            : l > d
                                            ? 1
                                            : 0;
                                    }),
                                        (this._state.sort = {
                                            column: t,
                                            dir: e,
                                        }),
                                        this.dt._searchQueries.length
                                            ? (this.dt.multiSearch(
                                                  this.dt._searchQueries
                                              ),
                                              this.dt.emit(
                                                  "datatable.sort",
                                                  t,
                                                  e
                                              ))
                                            : s ||
                                              ((this.dt._currentPage = 1),
                                              this.dt.update(),
                                              this.dt.emit(
                                                  "datatable.sort",
                                                  t,
                                                  e
                                              ));
                                }
                                _measureWidths() {
                                    const t = this.dt.data.headings.filter(
                                        (t, e) => !this.settings[e]?.hidden
                                    );
                                    if (
                                        (this.dt.options.scrollY.length ||
                                            this.dt.options.fixedColumns) &&
                                        t?.length
                                    ) {
                                        this._state.widths = [];
                                        const t = { noPaging: !0 };
                                        if (
                                            this.dt.options.header ||
                                            this.dt.options.footer
                                        ) {
                                            this.dt.options.scrollY.length &&
                                                (t.unhideHeader = !0),
                                                this.dt.headerDOM &&
                                                    this.dt.headerDOM.parentElement.removeChild(
                                                        this.dt.headerDOM
                                                    ),
                                                (t.noColumnWidths = !0),
                                                this.dt._renderTable(t);
                                            const e = Array.from(
                                                this.dt.dom
                                                    .querySelector(
                                                        "thead, tfoot"
                                                    )
                                                    ?.firstElementChild?.querySelectorAll(
                                                        "th"
                                                    ) || []
                                            );
                                            let s = 0;
                                            const i = this.dt.data.headings.map(
                                                    (t, i) => {
                                                        if (
                                                            this.settings[i]
                                                                ?.hidden
                                                        )
                                                            return 0;
                                                        const n =
                                                            e[s].offsetWidth;
                                                        return (s += 1), n;
                                                    }
                                                ),
                                                n = i.reduce(
                                                    (t, e) => t + e,
                                                    0
                                                );
                                            this._state.widths = i.map(
                                                (t) => (t / n) * 100
                                            );
                                        } else {
                                            (t.renderHeader = !0),
                                                this.dt._renderTable(t);
                                            const e = Array.from(
                                                this.dt.dom
                                                    .querySelector(
                                                        "thead, tfoot"
                                                    )
                                                    ?.firstElementChild?.querySelectorAll(
                                                        "th"
                                                    ) || []
                                            );
                                            let s = 0;
                                            const i = this.dt.data.headings.map(
                                                    (t, i) => {
                                                        if (
                                                            this.settings[i]
                                                                ?.hidden
                                                        )
                                                            return 0;
                                                        const n =
                                                            e[s].offsetWidth;
                                                        return (s += 1), n;
                                                    }
                                                ),
                                                n = i.reduce(
                                                    (t, e) => t + e,
                                                    0
                                                );
                                            this._state.widths = i.map(
                                                (t) => (t / n) * 100
                                            );
                                        }
                                        this.dt._renderTable();
                                    }
                                }
                            }
                            const G = {
                                    sortable: !0,
                                    locale: "en",
                                    numeric: !0,
                                    caseFirst: "false",
                                    searchable: !0,
                                    sensitivity: "base",
                                    ignorePunctuation: !0,
                                    destroyable: !0,
                                    searchItemSeparator: "",
                                    searchQuerySeparator: " ",
                                    searchAnd: !1,
                                    data: {},
                                    type: "html",
                                    format: "YYYY-MM-DD",
                                    columns: [],
                                    paging: !0,
                                    perPage: 10,
                                    perPageSelect: [5, 10, 15, 20, 25],
                                    nextPrev: !0,
                                    firstLast: !1,
                                    prevText: "‹",
                                    nextText: "›",
                                    firstText: "«",
                                    lastText: "»",
                                    ellipsisText: "…",
                                    truncatePager: !0,
                                    pagerDelta: 2,
                                    scrollY: "",
                                    fixedColumns: !0,
                                    fixedHeight: !1,
                                    footer: !1,
                                    header: !0,
                                    hiddenHeader: !1,
                                    caption: void 0,
                                    rowNavigation: !1,
                                    tabIndex: !1,
                                    pagerRender: !1,
                                    rowRender: !1,
                                    tableRender: !1,
                                    diffDomOptions: { valueDiffing: !1 },
                                    labels: {
                                        placeholder: "Search...",
                                        searchTitle: "Search within table",
                                        perPage: "entries per page",
                                        pageTitle: "Page {page}",
                                        noRows: "No entries found",
                                        noResults:
                                            "No results match your search query",
                                        info: "Showing {start} to {end} of {rows} entries",
                                    },
                                    template: (t, e) =>
                                        `<div class='${t.classes.top}'>\n    ${
                                            t.paging && t.perPageSelect
                                                ? `<div class='${t.classes.dropdown}'>\n            <label>\n                <select class='${t.classes.selector}'></select> ${t.labels.perPage}\n            </label>\n        </div>`
                                                : ""
                                        }\n    ${
                                            t.searchable
                                                ? `<div class='${
                                                      t.classes.search
                                                  }'>\n            <input class='${
                                                      t.classes.input
                                                  }' placeholder='${
                                                      t.labels.placeholder
                                                  }' type='search' title='${
                                                      t.labels.searchTitle
                                                  }'${
                                                      e.id
                                                          ? ` aria-controls="${e.id}"`
                                                          : ""
                                                  }>\n        </div>`
                                                : ""
                                        }\n</div>\n<div class='${
                                            t.classes.container
                                        }'${
                                            t.scrollY.length
                                                ? ` style='height: ${t.scrollY}; overflow-Y: auto;'`
                                                : ""
                                        }></div>\n<div class='${
                                            t.classes.bottom
                                        }'>\n    ${
                                            t.paging
                                                ? `<div class='${t.classes.info}'></div>`
                                                : ""
                                        }\n    <nav class='${
                                            t.classes.pagination
                                        }'></nav>\n</div>`,
                                    classes: {
                                        active: "datatable-active",
                                        ascending: "datatable-ascending",
                                        bottom: "datatable-bottom",
                                        container: "datatable-container",
                                        cursor: "datatable-cursor",
                                        descending: "datatable-descending",
                                        disabled: "datatable-disabled",
                                        dropdown: "datatable-dropdown",
                                        ellipsis: "datatable-ellipsis",
                                        filter: "datatable-filter",
                                        filterActive: "datatable-filter-active",
                                        empty: "datatable-empty",
                                        headercontainer:
                                            "datatable-headercontainer",
                                        hidden: "datatable-hidden",
                                        info: "datatable-info",
                                        input: "datatable-input",
                                        loading: "datatable-loading",
                                        pagination: "datatable-pagination",
                                        paginationList:
                                            "datatable-pagination-list",
                                        paginationListItem:
                                            "datatable-pagination-list-item",
                                        paginationListItemLink:
                                            "datatable-pagination-list-item-link",
                                        search: "datatable-search",
                                        selector: "datatable-selector",
                                        sorter: "datatable-sorter",
                                        table: "datatable-table",
                                        top: "datatable-top",
                                        wrapper: "datatable-wrapper",
                                    },
                                },
                                K = (t, e, s, i = {}) => ({
                                    nodeName: "LI",
                                    attributes: {
                                        class:
                                            i.active && !i.hidden
                                                ? `${s.classes.paginationListItem} ${s.classes.active}`
                                                : i.hidden
                                                ? `${s.classes.paginationListItem} ${s.classes.hidden} ${s.classes.disabled}`
                                                : s.classes.paginationListItem,
                                    },
                                    childNodes: [
                                        {
                                            nodeName: "BUTTON",
                                            attributes: {
                                                "data-page": String(t),
                                                class: s.classes
                                                    .paginationListItemLink,
                                                "aria-label":
                                                    s.labels.pageTitle.replace(
                                                        "{page}",
                                                        String(t)
                                                    ),
                                            },
                                            childNodes: [
                                                { nodeName: "#text", data: e },
                                            ],
                                        },
                                    ],
                                }),
                                tt = {
                                    classes: {
                                        row: "datatable-editor-row",
                                        form: "datatable-editor-form",
                                        item: "datatable-editor-item",
                                        menu: "datatable-editor-menu",
                                        save: "datatable-editor-save",
                                        block: "datatable-editor-block",
                                        cancel: "datatable-editor-cancel",
                                        close: "datatable-editor-close",
                                        inner: "datatable-editor-inner",
                                        input: "datatable-editor-input",
                                        label: "datatable-editor-label",
                                        modal: "datatable-editor-modal",
                                        action: "datatable-editor-action",
                                        header: "datatable-editor-header",
                                        wrapper: "datatable-editor-wrapper",
                                        editable: "datatable-editor-editable",
                                        container: "datatable-editor-container",
                                        separator: "datatable-editor-separator",
                                    },
                                    labels: {
                                        closeX: "x",
                                        editCell: "Edit Cell",
                                        editRow: "Edit Row",
                                        removeRow: "Remove Row",
                                        reallyRemove: "Are you sure?",
                                        reallyCancel:
                                            "Do you really want to cancel?",
                                        save: "Save",
                                        cancel: "Cancel",
                                    },
                                    cancelModal: (t) =>
                                        confirm(t.options.labels.reallyCancel),
                                    inline: !0,
                                    hiddenColumns: !1,
                                    contextMenu: !0,
                                    clickEvent: "dblclick",
                                    excludeColumns: [],
                                    menuItems: [
                                        {
                                            text: (t) =>
                                                t.options.labels.editCell,
                                            action: (t, e) => {
                                                if (
                                                    !(
                                                        t.event
                                                            .target instanceof
                                                        Element
                                                    )
                                                )
                                                    return;
                                                const s =
                                                    t.event.target.closest(
                                                        "td"
                                                    );
                                                return t.editCell(s);
                                            },
                                        },
                                        {
                                            text: (t) =>
                                                t.options.labels.editRow,
                                            action: (t, e) => {
                                                if (
                                                    !(
                                                        t.event
                                                            .target instanceof
                                                        Element
                                                    )
                                                )
                                                    return;
                                                const s =
                                                    t.event.target.closest(
                                                        "tr"
                                                    );
                                                return t.editRow(s);
                                            },
                                        },
                                        { separator: !0 },
                                        {
                                            text: (t) =>
                                                t.options.labels.removeRow,
                                            action: (t, e) => {
                                                if (
                                                    t.event.target instanceof
                                                        Element &&
                                                    confirm(
                                                        t.options.labels
                                                            .reallyRemove
                                                    )
                                                ) {
                                                    const e =
                                                        t.event.target.closest(
                                                            "tr"
                                                        );
                                                    t.removeRow(e);
                                                }
                                            },
                                        },
                                    ],
                                };
                            class et {
                                constructor(t, e = {}) {
                                    (this.dt = t),
                                        (this.options = { ...tt, ...e });
                                }
                                init() {
                                    this.initialized ||
                                        (this.options.classes.editable
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.dt.wrapperDOM.classList.add(
                                                    t
                                                )
                                            ),
                                        this.options.inline &&
                                            ((this.originalRowRender =
                                                this.dt.options.rowRender),
                                            (this.dt.options.rowRender = (
                                                t,
                                                e,
                                                s
                                            ) => {
                                                let i = this.rowRender(t, e, s);
                                                return (
                                                    this.originalRowRender &&
                                                        (i =
                                                            this.originalRowRender(
                                                                t,
                                                                i,
                                                                s
                                                            )),
                                                    i
                                                );
                                            })),
                                        this.options.contextMenu &&
                                            ((this.containerDOM = n("div", {
                                                id: this.options.classes
                                                    .container,
                                            })),
                                            (this.wrapperDOM = n("div", {
                                                class: this.options.classes
                                                    .wrapper,
                                            })),
                                            (this.menuDOM = n("ul", {
                                                class: this.options.classes
                                                    .menu,
                                            })),
                                            this.options.menuItems &&
                                                this.options.menuItems.length &&
                                                this.options.menuItems.forEach(
                                                    (t) => {
                                                        const e = n("li", {
                                                            class: t.separator
                                                                ? this.options
                                                                      .classes
                                                                      .separator
                                                                : this.options
                                                                      .classes
                                                                      .item,
                                                        });
                                                        if (!t.separator) {
                                                            const s = n("a", {
                                                                class: this
                                                                    .options
                                                                    .classes
                                                                    .action,
                                                                href:
                                                                    t.url ||
                                                                    "#",
                                                                html:
                                                                    "function" ==
                                                                    typeof t.text
                                                                        ? t.text(
                                                                              this
                                                                          )
                                                                        : t.text,
                                                            });
                                                            e.appendChild(s),
                                                                t.action &&
                                                                    "function" ==
                                                                        typeof t.action &&
                                                                    s.addEventListener(
                                                                        "click",
                                                                        (e) => {
                                                                            e.preventDefault(),
                                                                                t.action(
                                                                                    this,
                                                                                    e
                                                                                );
                                                                        }
                                                                    );
                                                        }
                                                        this.menuDOM.appendChild(
                                                            e
                                                        );
                                                    }
                                                ),
                                            this.wrapperDOM.appendChild(
                                                this.menuDOM
                                            ),
                                            this.containerDOM.appendChild(
                                                this.wrapperDOM
                                            ),
                                            this.updateMenu()),
                                        (this.data = {}),
                                        (this.menuOpen = !1),
                                        (this.editing = !1),
                                        (this.editingRow = !1),
                                        (this.editingCell = !1),
                                        this.bindEvents(),
                                        setTimeout(() => {
                                            (this.initialized = !0),
                                                this.dt.emit("editable.init");
                                        }, 10));
                                }
                                bindEvents() {
                                    (this.events = {
                                        keydown: this.keydown.bind(this),
                                        click: this.click.bind(this),
                                    }),
                                        this.dt.dom.addEventListener(
                                            this.options.clickEvent,
                                            this.events.click
                                        ),
                                        document.addEventListener(
                                            "keydown",
                                            this.events.keydown
                                        ),
                                        this.options.contextMenu &&
                                            ((this.events.context =
                                                this.context.bind(this)),
                                            (this.events.updateMenu =
                                                this.updateMenu.bind(this)),
                                            (this.events.dismissMenu =
                                                this.dismissMenu.bind(this)),
                                            (this.events.reset = (function (
                                                t,
                                                e = 300
                                            ) {
                                                let s;
                                                return (...i) => {
                                                    clearTimeout(s),
                                                        (s = window.setTimeout(
                                                            () => t(),
                                                            e
                                                        ));
                                                };
                                            })(
                                                () => this.events.updateMenu(),
                                                50
                                            )),
                                            this.dt.dom.addEventListener(
                                                "contextmenu",
                                                this.events.context
                                            ),
                                            document.addEventListener(
                                                "click",
                                                this.events.dismissMenu
                                            ),
                                            window.addEventListener(
                                                "resize",
                                                this.events.reset
                                            ),
                                            window.addEventListener(
                                                "scroll",
                                                this.events.reset
                                            ));
                                }
                                context(t) {
                                    const e = t.target;
                                    if (!(e instanceof Element)) return;
                                    this.event = t;
                                    const s = e.closest("tbody td");
                                    if (!this.disabled && s) {
                                        t.preventDefault();
                                        let e = t.pageX,
                                            s = t.pageY;
                                        e > this.limits.x &&
                                            (e -= this.rect.width),
                                            s > this.limits.y &&
                                                (s -= this.rect.height),
                                            (this.wrapperDOM.style.top = `${s}px`),
                                            (this.wrapperDOM.style.left = `${e}px`),
                                            this.openMenu(),
                                            this.updateMenu();
                                    }
                                }
                                click(t) {
                                    const e = t.target;
                                    if (e instanceof Element)
                                        if (
                                            this.editing &&
                                            this.data &&
                                            this.editingCell
                                        ) {
                                            const t = c(
                                                    this.options.classes.input
                                                ),
                                                e = this.modalDOM
                                                    ? this.modalDOM.querySelector(
                                                          `input${t}[type=text]`
                                                      )
                                                    : this.dt.wrapperDOM.querySelector(
                                                          `input${t}[type=text]`
                                                      );
                                            this.saveCell(e.value);
                                        } else if (!this.editing) {
                                            const s = e.closest("tbody td");
                                            s &&
                                                (this.editCell(s),
                                                t.preventDefault());
                                        }
                                }
                                keydown(t) {
                                    const e = c(this.options.classes.input);
                                    if (this.modalDOM) {
                                        if ("Escape" === t.key)
                                            this.options.cancelModal(this) &&
                                                this.closeModal();
                                        else if ("Enter" === t.key)
                                            if (this.editingCell) {
                                                const t =
                                                    this.modalDOM.querySelector(
                                                        `input${e}[type=text]`
                                                    );
                                                this.saveCell(t.value);
                                            } else {
                                                const t = Array.from(
                                                    this.modalDOM.querySelectorAll(
                                                        `input${e}[type=text]`
                                                    )
                                                ).map((t) => t.value.trim());
                                                this.saveRow(t, this.data.row);
                                            }
                                    } else if (this.editing && this.data)
                                        if ("Enter" === t.key) {
                                            if (this.editingCell) {
                                                const t =
                                                    this.dt.wrapperDOM.querySelector(
                                                        `input${e}[type=text]`
                                                    );
                                                this.saveCell(t.value);
                                            } else if (this.editingRow) {
                                                const t = Array.from(
                                                    this.dt.wrapperDOM.querySelectorAll(
                                                        `input${e}[type=text]`
                                                    )
                                                ).map((t) => t.value.trim());
                                                this.saveRow(t, this.data.row);
                                            }
                                        } else
                                            "Escape" === t.key &&
                                                (this.editingCell
                                                    ? this.saveCell(
                                                          this.data.content
                                                      )
                                                    : this.editingRow &&
                                                      this.saveRow(
                                                          null,
                                                          this.data.row
                                                      ));
                                }
                                editCell(t) {
                                    const e = l(
                                        t.cellIndex,
                                        this.dt.columns.settings
                                    );
                                    if (this.options.excludeColumns.includes(e))
                                        return void this.closeMenu();
                                    const s = parseInt(
                                            t.parentElement.dataset.index,
                                            10
                                        ),
                                        i = this.dt.data.data[s].cells[e];
                                    (this.data = {
                                        cell: i,
                                        rowIndex: s,
                                        columnIndex: e,
                                        content: o(i),
                                    }),
                                        (this.editing = !0),
                                        (this.editingCell = !0),
                                        this.options.inline
                                            ? this.dt.update()
                                            : this.editCellModal(),
                                        this.closeMenu();
                                }
                                editCellModal() {
                                    const t = this.data.cell,
                                        e = this.data.columnIndex,
                                        s =
                                            this.dt.data.headings[e].text ||
                                            String(
                                                this.dt.data.headings[e].data
                                            ),
                                        i = [
                                            `<div class='${this.options.classes.inner}'>`,
                                            `<div class='${this.options.classes.header}'>`,
                                            `<h4>${this.options.labels.editCell}</h4>`,
                                            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
                                            " </div>",
                                            `<div class='${this.options.classes.block}'>`,
                                            `<form class='${this.options.classes.form}'>`,
                                            `<div class='${this.options.classes.row}'>`,
                                            `<label class='${
                                                this.options.classes.label
                                            }'>${r(s)}</label>`,
                                            `<input class='${
                                                this.options.classes.input
                                            }' value='${r(o(t))}' type='text'>`,
                                            "</div>",
                                            `<div class='${this.options.classes.row}'>`,
                                            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
                                            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
                                            "</div>",
                                            "</form>",
                                            "</div>",
                                            "</div>",
                                        ].join(""),
                                        a = n("div", {
                                            class: this.options.classes.modal,
                                            html: i,
                                        });
                                    (this.modalDOM = a), this.openModal();
                                    const l = c(this.options.classes.input),
                                        d = a.querySelector(
                                            `input${l}[type=text]`
                                        );
                                    d.focus(),
                                        (d.selectionStart = d.selectionEnd =
                                            d.value.length),
                                        a.addEventListener("click", (t) => {
                                            const e = t.target;
                                            e instanceof Element &&
                                                (e.hasAttribute(
                                                    "data-editor-cancel"
                                                )
                                                    ? (t.preventDefault(),
                                                      this.options.cancelModal(
                                                          this
                                                      ) && this.closeModal())
                                                    : e.hasAttribute(
                                                          "data-editor-save"
                                                      ) &&
                                                      (t.preventDefault(),
                                                      this.saveCell(d.value)));
                                        });
                                }
                                saveCell(t) {
                                    const e = this.data.content,
                                        s =
                                            this.dt.columns.settings[
                                                this.data.columnIndex
                                            ].type || this.dt.options.type,
                                        i = t.trim();
                                    let n;
                                    if ("number" === s)
                                        n = { data: parseFloat(i) };
                                    else if ("boolean" === s)
                                        n = ["", "false", "0"].includes(i)
                                            ? {
                                                  data: !1,
                                                  text: "false",
                                                  order: 0,
                                              }
                                            : {
                                                  data: !0,
                                                  text: "true",
                                                  order: 1,
                                              };
                                    else if ("html" === s)
                                        n = {
                                            data: [
                                                { nodeName: "#text", data: t },
                                            ],
                                            text: t,
                                            order: t,
                                        };
                                    else if ("string" === s) n = { data: t };
                                    else if ("date" === s) {
                                        const e =
                                            this.dt.columns.settings[
                                                this.data.columnIndex
                                            ].format || this.dt.options.format;
                                        n = { data: t, order: z(String(t), e) };
                                    } else n = { data: t };
                                    (this.dt.data.data[
                                        this.data.rowIndex
                                    ].cells[this.data.columnIndex] = n),
                                        this.closeModal();
                                    const a = this.data.rowIndex,
                                        o = this.data.columnIndex;
                                    (this.data = {}),
                                        this.dt.update(!0),
                                        (this.editing = !1),
                                        (this.editingCell = !1),
                                        this.dt.emit(
                                            "editable.save.cell",
                                            t,
                                            e,
                                            a,
                                            o
                                        );
                                }
                                editRow(t) {
                                    if (
                                        !t ||
                                        "TR" !== t.nodeName ||
                                        this.editing
                                    )
                                        return;
                                    const e = parseInt(t.dataset.index, 10),
                                        s = this.dt.data.data[e];
                                    (this.data = { row: s.cells, rowIndex: e }),
                                        (this.editing = !0),
                                        (this.editingRow = !0),
                                        this.options.inline
                                            ? this.dt.update()
                                            : this.editRowModal(),
                                        this.closeMenu();
                                }
                                editRowModal() {
                                    const t = this.data.row,
                                        e = [
                                            `<div class='${this.options.classes.inner}'>`,
                                            `<div class='${this.options.classes.header}'>`,
                                            `<h4>${this.options.labels.editRow}</h4>`,
                                            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
                                            " </div>",
                                            `<div class='${this.options.classes.block}'>`,
                                            `<form class='${this.options.classes.form}'>`,
                                            `<div class='${this.options.classes.row}'>`,
                                            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
                                            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
                                            "</div>",
                                            "</form>",
                                            "</div>",
                                            "</div>",
                                        ].join(""),
                                        s = n("div", {
                                            class: this.options.classes.modal,
                                            html: e,
                                        }),
                                        i = s.firstElementChild;
                                    if (!i) return;
                                    const a =
                                        i.lastElementChild?.firstElementChild;
                                    if (!a) return;
                                    t.forEach((t, e) => {
                                        const s = this.dt.columns.settings[e];
                                        if (
                                            (!s.hidden ||
                                                (s.hidden &&
                                                    this.options
                                                        .hiddenColumns)) &&
                                            !this.options.excludeColumns.includes(
                                                e
                                            )
                                        ) {
                                            const s =
                                                this.dt.data.headings[e].text ||
                                                String(
                                                    this.dt.data.headings[e]
                                                        .data
                                                );
                                            a.insertBefore(
                                                n("div", {
                                                    class: this.options.classes
                                                        .row,
                                                    html: [
                                                        `<div class='${this.options.classes.row}'>`,
                                                        `<label class='${
                                                            this.options.classes
                                                                .label
                                                        }'>${r(s)}</label>`,
                                                        `<input class='${
                                                            this.options.classes
                                                                .input
                                                        }' value='${r(
                                                            o(t)
                                                        )}' type='text'>`,
                                                        "</div>",
                                                    ].join(""),
                                                }),
                                                a.lastElementChild
                                            );
                                        }
                                    }),
                                        (this.modalDOM = s),
                                        this.openModal();
                                    const l = c(this.options.classes.input),
                                        d = Array.from(
                                            a.querySelectorAll(
                                                `input${l}[type=text]`
                                            )
                                        );
                                    s.addEventListener("click", (t) => {
                                        const e = t.target;
                                        if (e instanceof Element)
                                            if (
                                                e.hasAttribute(
                                                    "data-editor-cancel"
                                                )
                                            )
                                                this.options.cancelModal(
                                                    this
                                                ) && this.closeModal();
                                            else if (
                                                e.hasAttribute(
                                                    "data-editor-save"
                                                )
                                            ) {
                                                const t = d.map((t) =>
                                                    t.value.trim()
                                                );
                                                this.saveRow(t, this.data.row);
                                            }
                                    });
                                }
                                saveRow(t, e) {
                                    const s = e.map((t) => o(t)),
                                        i =
                                            this.dt.data.data[
                                                this.data.rowIndex
                                            ];
                                    if (t) {
                                        let s = 0;
                                        i.cells = e.map((e, i) => {
                                            if (
                                                this.options.excludeColumns.includes(
                                                    i
                                                ) ||
                                                this.dt.columns.settings[i]
                                                    .hidden
                                            )
                                                return e;
                                            const n =
                                                    this.dt.columns.settings[i]
                                                        .type ||
                                                    this.dt.options.type,
                                                a = t[s++];
                                            let o;
                                            if ("number" === n)
                                                o = { data: parseFloat(a) };
                                            else if ("boolean" === n)
                                                o = ["", "false", "0"].includes(
                                                    a
                                                )
                                                    ? {
                                                          data: !1,
                                                          text: "false",
                                                          order: 0,
                                                      }
                                                    : {
                                                          data: !0,
                                                          text: "true",
                                                          order: 1,
                                                      };
                                            else if ("html" === n)
                                                o = {
                                                    data: [
                                                        {
                                                            nodeName: "#text",
                                                            data: a,
                                                        },
                                                    ],
                                                    text: a,
                                                    order: a,
                                                };
                                            else if ("string" === n)
                                                o = { data: a };
                                            else if ("date" === n) {
                                                const t =
                                                    this.dt.columns.settings[i]
                                                        .format ||
                                                    this.dt.options.format;
                                                o = {
                                                    data: a,
                                                    order: z(String(a), t),
                                                };
                                            } else o = { data: a };
                                            return o;
                                        });
                                    }
                                    const n = i.cells.map((t) => o(t));
                                    (this.data = {}),
                                        this.dt.update(!0),
                                        this.closeModal(),
                                        (this.editing = !1),
                                        this.dt.emit(
                                            "editable.save.row",
                                            n,
                                            s,
                                            e
                                        );
                                }
                                openModal() {
                                    this.modalDOM &&
                                        document.body.appendChild(
                                            this.modalDOM
                                        );
                                }
                                closeModal() {
                                    this.editing &&
                                        this.modalDOM &&
                                        (document.body.removeChild(
                                            this.modalDOM
                                        ),
                                        (this.modalDOM =
                                            this.editing =
                                            this.editingRow =
                                            this.editingCell =
                                                !1));
                                }
                                removeRow(t) {
                                    if (
                                        !t ||
                                        "TR" !== t.nodeName ||
                                        this.editing
                                    )
                                        return;
                                    const e = parseInt(t.dataset.index, 10);
                                    this.dt.rows.remove(e), this.closeMenu();
                                }
                                updateMenu() {
                                    const t =
                                            window.scrollX ||
                                            window.pageXOffset,
                                        e =
                                            window.scrollY ||
                                            window.pageYOffset;
                                    (this.rect =
                                        this.wrapperDOM.getBoundingClientRect()),
                                        (this.limits = {
                                            x:
                                                window.innerWidth +
                                                t -
                                                this.rect.width,
                                            y:
                                                window.innerHeight +
                                                e -
                                                this.rect.height,
                                        });
                                }
                                dismissMenu(t) {
                                    const e = t.target;
                                    if (
                                        !(e instanceof Element) ||
                                        this.wrapperDOM.contains(e)
                                    )
                                        return;
                                    let s = !0;
                                    if (this.editing) {
                                        const t = c(this.options.classes.input);
                                        s = !e.matches(`input${t}[type=text]`);
                                    }
                                    s && this.closeMenu();
                                }
                                openMenu() {
                                    if (
                                        this.editing &&
                                        this.data &&
                                        this.editingCell
                                    ) {
                                        const t = c(this.options.classes.input),
                                            e = this.modalDOM
                                                ? this.modalDOM.querySelector(
                                                      `input${t}[type=text]`
                                                  )
                                                : this.dt.wrapperDOM.querySelector(
                                                      `input${t}[type=text]`
                                                  );
                                        this.saveCell(e.value);
                                    }
                                    document.body.appendChild(
                                        this.containerDOM
                                    ),
                                        (this.menuOpen = !0),
                                        this.dt.emit("editable.context.open");
                                }
                                closeMenu() {
                                    this.menuOpen &&
                                        ((this.menuOpen = !1),
                                        document.body.removeChild(
                                            this.containerDOM
                                        ),
                                        this.dt.emit("editable.context.close"));
                                }
                                destroy() {
                                    this.dt.dom.removeEventListener(
                                        this.options.clickEvent,
                                        this.events.click
                                    ),
                                        this.dt.dom.removeEventListener(
                                            "contextmenu",
                                            this.events.context
                                        ),
                                        document.removeEventListener(
                                            "click",
                                            this.events.dismissMenu
                                        ),
                                        document.removeEventListener(
                                            "keydown",
                                            this.events.keydown
                                        ),
                                        window.removeEventListener(
                                            "resize",
                                            this.events.reset
                                        ),
                                        window.removeEventListener(
                                            "scroll",
                                            this.events.reset
                                        ),
                                        document.body.contains(
                                            this.containerDOM
                                        ) &&
                                            document.body.removeChild(
                                                this.containerDOM
                                            ),
                                        this.options.inline &&
                                            (this.dt.options.rowRender =
                                                this.originalRowRender),
                                        (this.initialized = !1);
                                }
                                rowRender(t, e, s) {
                                    return this.data && this.data.rowIndex === s
                                        ? (this.editingCell
                                              ? (e.childNodes[
                                                    (function (t, e) {
                                                        let s = t,
                                                            i = 0;
                                                        for (; i < t; )
                                                            e[i].hidden &&
                                                                (s -= 1),
                                                                i++;
                                                        return s;
                                                    })(
                                                        this.data.columnIndex,
                                                        this.dt.columns.settings
                                                    )
                                                ].childNodes = [
                                                    {
                                                        nodeName: "INPUT",
                                                        attributes: {
                                                            type: "text",
                                                            value: this.data
                                                                .content,
                                                            class: this.options
                                                                .classes.input,
                                                        },
                                                    },
                                                ])
                                              : e.childNodes.forEach((s, i) => {
                                                    const n = l(
                                                            i,
                                                            this.dt.columns
                                                                .settings
                                                        ),
                                                        a = t[n];
                                                    this.options.excludeColumns.includes(
                                                        n
                                                    ) ||
                                                        (e.childNodes[
                                                            i
                                                        ].childNodes = [
                                                            {
                                                                nodeName:
                                                                    "INPUT",
                                                                attributes: {
                                                                    type: "text",
                                                                    value: r(
                                                                        a.text ||
                                                                            String(
                                                                                a.data
                                                                            ) ||
                                                                            ""
                                                                    ),
                                                                    class: this
                                                                        .options
                                                                        .classes
                                                                        .input,
                                                                },
                                                            },
                                                        ]);
                                                }),
                                          e)
                                        : e;
                                }
                            }
                            const st = {
                                classes: {
                                    button: "datatable-column-filter-button",
                                    menu: "datatable-column-filter-menu",
                                    container:
                                        "datatable-column-filter-container",
                                    wrapper: "datatable-column-filter-wrapper",
                                },
                                labels: {
                                    button: "Filter columns within the table",
                                },
                                hiddenColumns: [],
                            };
                            class it {
                                constructor(t, e = {}) {
                                    (this.dt = t),
                                        (this.options = { ...st, ...e });
                                }
                                init() {
                                    if (this.initialized) return;
                                    const t = c(this.options.classes.button);
                                    let e = this.dt.wrapperDOM.querySelector(t);
                                    if (!e) {
                                        e = n("button", {
                                            class: this.options.classes.button,
                                            html: "▦",
                                        });
                                        const t = c(
                                                this.dt.options.classes.search
                                            ),
                                            s =
                                                this.dt.wrapperDOM.querySelector(
                                                    t
                                                );
                                        s
                                            ? s.appendChild(e)
                                            : this.dt.wrapperDOM.appendChild(e),
                                            (this.addedButtonDOM = !0);
                                    }
                                    (this.buttonDOM = e),
                                        (this.containerDOM = n("div", {
                                            id: this.options.classes.container,
                                        })),
                                        (this.wrapperDOM = n("div", {
                                            class: this.options.classes.wrapper,
                                        })),
                                        (this.menuDOM = n("ul", {
                                            class: this.options.classes.menu,
                                            html: this.dt.data.headings
                                                .map((t, e) => {
                                                    const s =
                                                        this.dt.columns
                                                            .settings[e];
                                                    return this.options.hiddenColumns.includes(
                                                        e
                                                    )
                                                        ? ""
                                                        : `<li data-column="${e}">\n                        <input type="checkbox" value="${
                                                              t.text || t.data
                                                          }" ${
                                                              s.hidden
                                                                  ? ""
                                                                  : "checked=''"
                                                          }>\n                        <label>\n                            ${
                                                              t.text || t.data
                                                          }\n                        </label>\n                    </li>`;
                                                })
                                                .join(""),
                                        })),
                                        this.wrapperDOM.appendChild(
                                            this.menuDOM
                                        ),
                                        this.containerDOM.appendChild(
                                            this.wrapperDOM
                                        ),
                                        this._measureSpace(),
                                        this._bind(),
                                        (this.initialized = !0);
                                }
                                dismiss() {
                                    this.addedButtonDOM &&
                                        this.buttonDOM.parentElement &&
                                        this.buttonDOM.parentElement.removeChild(
                                            this.buttonDOM
                                        ),
                                        document.removeEventListener(
                                            "click",
                                            this.events.click
                                        );
                                }
                                _bind() {
                                    (this.events = {
                                        click: this._click.bind(this),
                                    }),
                                        document.addEventListener(
                                            "click",
                                            this.events.click
                                        );
                                }
                                _openMenu() {
                                    document.body.appendChild(
                                        this.containerDOM
                                    ),
                                        this._measureSpace(),
                                        (this.menuOpen = !0),
                                        this.dt.emit("columnFilter.menu.open");
                                }
                                _closeMenu() {
                                    this.menuOpen &&
                                        ((this.menuOpen = !1),
                                        document.body.removeChild(
                                            this.containerDOM
                                        ),
                                        this.dt.emit(
                                            "columnFilter.menu.close"
                                        ));
                                }
                                _measureSpace() {
                                    const t =
                                            window.scrollX ||
                                            window.pageXOffset,
                                        e =
                                            window.scrollY ||
                                            window.pageYOffset;
                                    (this.rect =
                                        this.wrapperDOM.getBoundingClientRect()),
                                        (this.limits = {
                                            x:
                                                window.innerWidth +
                                                t -
                                                this.rect.width,
                                            y:
                                                window.innerHeight +
                                                e -
                                                this.rect.height,
                                        });
                                }
                                _click(t) {
                                    const e = t.target;
                                    if (e instanceof Element)
                                        if (
                                            ((this.event = t),
                                            this.buttonDOM.contains(e))
                                        ) {
                                            if (
                                                (t.preventDefault(),
                                                this.menuOpen)
                                            )
                                                return void this._closeMenu();
                                            this._openMenu();
                                            let e = t.pageX,
                                                s = t.pageY;
                                            e > this.limits.x &&
                                                (e -= this.rect.width),
                                                s > this.limits.y &&
                                                    (s -= this.rect.height),
                                                (this.wrapperDOM.style.top = `${s}px`),
                                                (this.wrapperDOM.style.left = `${e}px`);
                                        } else if (this.menuDOM.contains(e)) {
                                            const t = c(
                                                    this.options.classes.menu
                                                ),
                                                s = e.closest(`${t} > li`);
                                            if (!s) return;
                                            const i = s.querySelector(
                                                "input[type=checkbox]"
                                            );
                                            i.contains(e) ||
                                                (i.checked = !i.checked);
                                            const n = Number(s.dataset.column);
                                            i.checked
                                                ? this.dt.columns.show([n])
                                                : this.dt.columns.hide([n]);
                                        } else
                                            this.menuOpen && this._closeMenu();
                                }
                            }
                            (s.DataTable = class {
                                constructor(t, e = {}) {
                                    const s =
                                        "string" == typeof t
                                            ? document.querySelector(t)
                                            : t;
                                    s instanceof HTMLTableElement
                                        ? (this.dom = s)
                                        : ((this.dom =
                                              document.createElement("table")),
                                          s.appendChild(this.dom));
                                    const i = {
                                            ...G.diffDomOptions,
                                            ...e.diffDomOptions,
                                        },
                                        n = { ...G.labels, ...e.labels },
                                        a = { ...G.classes, ...e.classes };
                                    (this.options = {
                                        ...G,
                                        ...e,
                                        diffDomOptions: i,
                                        labels: n,
                                        classes: a,
                                    }),
                                        (this._initialInnerHTML = this.options
                                            .destroyable
                                            ? this.dom.innerHTML
                                            : ""),
                                        this.options.tabIndex
                                            ? (this.dom.tabIndex =
                                                  this.options.tabIndex)
                                            : this.options.rowNavigation &&
                                              -1 === this.dom.tabIndex &&
                                              (this.dom.tabIndex = 0),
                                        (this._listeners = {
                                            onResize: () => this._onResize(),
                                        }),
                                        (this._dd = new Y(
                                            this.options.diffDomOptions || {}
                                        )),
                                        (this.initialized = !1),
                                        (this._events = {}),
                                        (this._currentPage = 0),
                                        (this.onFirstPage = !0),
                                        (this.hasHeadings = !1),
                                        (this.hasRows = !1),
                                        (this._searchQueries = []),
                                        this.init();
                                }
                                init() {
                                    if (
                                        this.initialized ||
                                        h(this.dom, this.options.classes.table)
                                    )
                                        return !1;
                                    (this._virtualDOM = S(
                                        this.dom,
                                        this.options.diffDomOptions || {}
                                    )),
                                        (this._tableAttributes = {
                                            ...this._virtualDOM.attributes,
                                        }),
                                        (this._tableFooters =
                                            this._virtualDOM.childNodes?.filter(
                                                (t) => "TFOOT" === t.nodeName
                                            ) ?? []),
                                        (this._tableCaptions =
                                            this._virtualDOM.childNodes?.filter(
                                                (t) => "CAPTION" === t.nodeName
                                            ) ?? []),
                                        void 0 !== this.options.caption &&
                                            this._tableCaptions.push({
                                                nodeName: "CAPTION",
                                                childNodes: [
                                                    {
                                                        nodeName: "#text",
                                                        data: this.options
                                                            .caption,
                                                    },
                                                ],
                                            }),
                                        (this.rows = new X(this)),
                                        (this.columns = new Z(this)),
                                        (this.data = Q(
                                            this.options.data,
                                            this.dom,
                                            this.columns.settings,
                                            this.options.type,
                                            this.options.format
                                        )),
                                        this._render(),
                                        setTimeout(() => {
                                            this.emit("datatable.init"),
                                                (this.initialized = !0);
                                        }, 10);
                                }
                                _render() {
                                    (this.wrapperDOM = n("div", {
                                        class: `${this.options.classes.wrapper} ${this.options.classes.loading}`,
                                    })),
                                        (this.wrapperDOM.innerHTML =
                                            this.options.template(
                                                this.options,
                                                this.dom
                                            ));
                                    const t = c(this.options.classes.selector),
                                        e = this.wrapperDOM.querySelector(
                                            `select${t}`
                                        );
                                    e &&
                                    this.options.paging &&
                                    this.options.perPageSelect
                                        ? this.options.perPageSelect.forEach(
                                              (t) => {
                                                  const [s, i] = Array.isArray(
                                                          t
                                                      )
                                                          ? [t[0], t[1]]
                                                          : [String(t), t],
                                                      n =
                                                          i ===
                                                          this.options.perPage,
                                                      a = new Option(
                                                          s,
                                                          String(i),
                                                          n,
                                                          n
                                                      );
                                                  e.appendChild(a);
                                              }
                                          )
                                        : e && e.parentElement.removeChild(e);
                                    const s = c(this.options.classes.container);
                                    (this.containerDOM =
                                        this.wrapperDOM.querySelector(s)),
                                        (this._pagerDOMs = []);
                                    const i = c(
                                        this.options.classes.pagination
                                    );
                                    Array.from(
                                        this.wrapperDOM.querySelectorAll(i)
                                    ).forEach((t) => {
                                        t instanceof HTMLElement &&
                                            ((t.innerHTML = `<ul class="${this.options.classes.paginationList}"></ul>`),
                                            this._pagerDOMs.push(
                                                t.firstElementChild
                                            ));
                                    }),
                                        (this._virtualPagerDOM = {
                                            nodeName: "UL",
                                            attributes: {
                                                class: this.options.classes
                                                    .paginationList,
                                            },
                                        });
                                    const a = c(this.options.classes.info);
                                    (this._label =
                                        this.wrapperDOM.querySelector(a)),
                                        this.dom.parentElement.replaceChild(
                                            this.wrapperDOM,
                                            this.dom
                                        ),
                                        this.containerDOM.appendChild(this.dom),
                                        (this._rect =
                                            this.dom.getBoundingClientRect()),
                                        this._fixHeight(),
                                        this.options.header ||
                                            this.wrapperDOM.classList.add(
                                                "no-header"
                                            ),
                                        this.options.footer ||
                                            this.wrapperDOM.classList.add(
                                                "no-footer"
                                            ),
                                        this.options.sortable &&
                                            this.wrapperDOM.classList.add(
                                                "sortable"
                                            ),
                                        this.options.searchable &&
                                            this.wrapperDOM.classList.add(
                                                "searchable"
                                            ),
                                        this.options.fixedHeight &&
                                            this.wrapperDOM.classList.add(
                                                "fixed-height"
                                            ),
                                        this.options.fixedColumns &&
                                            this.wrapperDOM.classList.add(
                                                "fixed-columns"
                                            ),
                                        this._bindEvents(),
                                        this.columns._state.sort &&
                                            this.columns.sort(
                                                this.columns._state.sort.column,
                                                this.columns._state.sort.dir,
                                                !0
                                            ),
                                        this.update(!0);
                                }
                                _renderTable(t = {}) {
                                    let e;
                                    e =
                                        (this.options.paging ||
                                            this._searchQueries.length ||
                                            this.columns._state.filters
                                                .length) &&
                                        this._currentPage &&
                                        this.pages.length &&
                                        !t.noPaging
                                            ? this.pages[this._currentPage - 1]
                                            : this.data.data.map((t, e) => ({
                                                  row: t,
                                                  index: e,
                                              }));
                                    let s = q(
                                        this._tableAttributes,
                                        this.data.headings,
                                        e,
                                        this.columns.settings,
                                        this.columns._state,
                                        this.rows.cursor,
                                        this.options,
                                        t,
                                        this._tableFooters,
                                        this._tableCaptions
                                    );
                                    if (this.options.tableRender) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            s,
                                            "main"
                                        );
                                        t && (s = t);
                                    }
                                    const i = this._dd.diff(
                                        this._virtualDOM,
                                        s
                                    );
                                    this._dd.apply(this.dom, i),
                                        (this._virtualDOM = s);
                                }
                                _renderPage(t = !1) {
                                    this.hasRows && this.totalPages
                                        ? (this._currentPage >
                                              this.totalPages &&
                                              (this._currentPage = 1),
                                          this._renderTable(),
                                          (this.onFirstPage =
                                              1 === this._currentPage),
                                          (this.onLastPage =
                                              this._currentPage ===
                                              this.lastPage))
                                        : this.setMessage(
                                              this.options.labels.noRows
                                          );
                                    let e,
                                        s = 0,
                                        i = 0,
                                        n = 0;
                                    if (
                                        (this.totalPages &&
                                            ((s = this._currentPage - 1),
                                            (i = s * this.options.perPage),
                                            (n = i + this.pages[s].length),
                                            (i += 1),
                                            (e = this._searchQueries.length
                                                ? this._searchData.length
                                                : this.data.data.length)),
                                        this._label &&
                                            this.options.labels.info.length)
                                    ) {
                                        const t = this.options.labels.info
                                            .replace("{start}", String(i))
                                            .replace("{end}", String(n))
                                            .replace(
                                                "{page}",
                                                String(this._currentPage)
                                            )
                                            .replace(
                                                "{pages}",
                                                String(this.totalPages)
                                            )
                                            .replace("{rows}", String(e));
                                        this._label.innerHTML = e ? t : "";
                                    }
                                    if (
                                        (1 == this._currentPage &&
                                            this._fixHeight(),
                                        this.options.rowNavigation &&
                                            this._currentPage &&
                                            (!this.rows.cursor ||
                                                !this.pages[
                                                    this._currentPage - 1
                                                ].find(
                                                    (t) =>
                                                        t.index ===
                                                        this.rows.cursor
                                                )))
                                    ) {
                                        const e =
                                            this.pages[this._currentPage - 1];
                                        e.length &&
                                            (t
                                                ? this.rows.setCursor(
                                                      e[e.length - 1].index
                                                  )
                                                : this.rows.setCursor(
                                                      e[0].index
                                                  ));
                                    }
                                }
                                _renderPagers() {
                                    if (!this.options.paging) return;
                                    let t = ((t, e, s, i, n) => {
                                        let a = [];
                                        if (
                                            (n.firstLast &&
                                                a.push(K(1, n.firstText, n)),
                                            n.nextPrev)
                                        ) {
                                            const e = t ? 1 : s - 1;
                                            a.push(
                                                K(e, n.prevText, n, {
                                                    hidden: t,
                                                })
                                            );
                                        }
                                        let o = [...Array(i).keys()].map((t) =>
                                            K(t + 1, String(t + 1), n, {
                                                active: t === s - 1,
                                            })
                                        );
                                        if (
                                            (n.truncatePager &&
                                                (o = ((t, e, s, i) => {
                                                    const n = i.pagerDelta,
                                                        a = i.classes,
                                                        o = i.ellipsisText,
                                                        r = 2 * n;
                                                    let l = e - n,
                                                        d = e + n;
                                                    e < 4 - n + r
                                                        ? (d = 3 + r)
                                                        : e > s - (3 - n + r) &&
                                                          (l = s - (2 + r));
                                                    const c = [];
                                                    for (let e = 1; e <= s; e++)
                                                        if (
                                                            1 == e ||
                                                            e == s ||
                                                            (e >= l && e <= d)
                                                        ) {
                                                            const s = t[e - 1];
                                                            c.push(s);
                                                        }
                                                    let h;
                                                    const u = [];
                                                    return (
                                                        c.forEach((e) => {
                                                            const s = parseInt(
                                                                e.childNodes[0]
                                                                    .attributes[
                                                                    "data-page"
                                                                ],
                                                                10
                                                            );
                                                            if (h) {
                                                                const e =
                                                                    parseInt(
                                                                        h
                                                                            .childNodes[0]
                                                                            .attributes[
                                                                            "data-page"
                                                                        ],
                                                                        10
                                                                    );
                                                                if (s - e == 2)
                                                                    u.push(
                                                                        t[e]
                                                                    );
                                                                else if (
                                                                    s - e !=
                                                                    1
                                                                ) {
                                                                    const t = {
                                                                        nodeName:
                                                                            "LI",
                                                                        attributes:
                                                                            {
                                                                                class: `${a.paginationListItem} ${a.ellipsis} ${a.disabled}`,
                                                                            },
                                                                        childNodes:
                                                                            [
                                                                                {
                                                                                    nodeName:
                                                                                        "BUTTON",
                                                                                    attributes:
                                                                                        {
                                                                                            class: a.paginationListItemLink,
                                                                                        },
                                                                                    childNodes:
                                                                                        [
                                                                                            {
                                                                                                nodeName:
                                                                                                    "#text",
                                                                                                data: o,
                                                                                            },
                                                                                        ],
                                                                                },
                                                                            ],
                                                                    };
                                                                    u.push(t);
                                                                }
                                                            }
                                                            u.push(e), (h = e);
                                                        }),
                                                        u
                                                    );
                                                })(o, s, i, n)),
                                            (a = a.concat(o)),
                                            n.nextPrev)
                                        ) {
                                            const t = e ? i : s + 1;
                                            a.push(
                                                K(t, n.nextText, n, {
                                                    hidden: e,
                                                })
                                            );
                                        }
                                        return (
                                            n.firstLast &&
                                                a.push(K(i, n.lastText, n)),
                                            {
                                                nodeName: "UL",
                                                attributes: {
                                                    class: n.classes
                                                        .paginationList,
                                                },
                                                childNodes:
                                                    o.length > 1 ? a : [],
                                            }
                                        );
                                    })(
                                        this.onFirstPage,
                                        this.onLastPage,
                                        this._currentPage,
                                        this.totalPages,
                                        this.options
                                    );
                                    if (this.options.pagerRender) {
                                        const e = this.options.pagerRender(
                                            [
                                                this.onFirstPage,
                                                this.onLastPage,
                                                this._currentPage,
                                                this.totalPages,
                                            ],
                                            t
                                        );
                                        e && (t = e);
                                    }
                                    const e = this._dd.diff(
                                        this._virtualPagerDOM,
                                        t
                                    );
                                    this._pagerDOMs.forEach((t) => {
                                        this._dd.apply(t, e);
                                    }),
                                        (this._virtualPagerDOM = t);
                                }
                                _renderSeparateHeader() {
                                    const t = this.dom.parentElement;
                                    this.headerDOM ||
                                        ((this.headerDOM =
                                            document.createElement("div")),
                                        (this._virtualHeaderDOM = {
                                            nodeName: "DIV",
                                        })),
                                        t.parentElement.insertBefore(
                                            this.headerDOM,
                                            t
                                        );
                                    let e = {
                                        nodeName: "TABLE",
                                        attributes: this._tableAttributes,
                                        childNodes: [
                                            {
                                                nodeName: "THEAD",
                                                childNodes: [
                                                    j(
                                                        this.data.headings,
                                                        this.columns.settings,
                                                        this.columns._state,
                                                        this.options,
                                                        { unhideHeader: !0 }
                                                    ),
                                                ],
                                            },
                                        ],
                                    };
                                    if (
                                        ((e.attributes.class = u(
                                            e.attributes.class,
                                            this.options.classes.table
                                        )),
                                        this.options.tableRender)
                                    ) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            e,
                                            "header"
                                        );
                                        t && (e = t);
                                    }
                                    const s = {
                                            nodeName: "DIV",
                                            attributes: {
                                                class: this.options.classes
                                                    .headercontainer,
                                            },
                                            childNodes: [e],
                                        },
                                        i = this._dd.diff(
                                            this._virtualHeaderDOM,
                                            s
                                        );
                                    this._dd.apply(this.headerDOM, i),
                                        (this._virtualHeaderDOM = s);
                                    const n =
                                        this.headerDOM.firstElementChild
                                            .clientWidth - this.dom.clientWidth;
                                    if (n) {
                                        const t = structuredClone(
                                            this._virtualHeaderDOM
                                        );
                                        t.attributes.style = `padding-right: ${n}px;`;
                                        const e = this._dd.diff(
                                            this._virtualHeaderDOM,
                                            t
                                        );
                                        this._dd.apply(this.headerDOM, e),
                                            (this._virtualHeaderDOM = t);
                                    }
                                    t.scrollHeight > t.clientHeight &&
                                        (t.style.overflowY = "scroll");
                                }
                                _bindEvents() {
                                    if (this.options.perPageSelect) {
                                        const t = c(
                                                this.options.classes.selector
                                            ),
                                            e =
                                                this.wrapperDOM.querySelector(
                                                    t
                                                );
                                        e &&
                                            e instanceof HTMLSelectElement &&
                                            e.addEventListener(
                                                "change",
                                                () => {
                                                    (this.options.perPage =
                                                        parseInt(e.value, 10)),
                                                        this.update(),
                                                        this._fixHeight(),
                                                        this.emit(
                                                            "datatable.perpage",
                                                            this.options.perPage
                                                        );
                                                },
                                                !1
                                            );
                                    }
                                    this.options.searchable &&
                                        this.wrapperDOM.addEventListener(
                                            "input",
                                            (t) => {
                                                const e = c(
                                                        this.options.classes
                                                            .input
                                                    ),
                                                    s = t.target;
                                                if (
                                                    !(
                                                        s instanceof
                                                            HTMLInputElement &&
                                                        s.matches(e)
                                                    )
                                                )
                                                    return;
                                                t.preventDefault();
                                                const i = [];
                                                if (
                                                    (Array.from(
                                                        this.wrapperDOM.querySelectorAll(
                                                            e
                                                        )
                                                    )
                                                        .filter(
                                                            (t) =>
                                                                t.value.length
                                                        )
                                                        .forEach((t) => {
                                                            const e =
                                                                    t.dataset
                                                                        .and ||
                                                                    this.options
                                                                        .searchAnd,
                                                                s =
                                                                    t.dataset
                                                                        .querySeparator ||
                                                                    this.options
                                                                        .searchQuerySeparator
                                                                        ? t.value.split(
                                                                              this
                                                                                  .options
                                                                                  .searchQuerySeparator
                                                                          )
                                                                        : [
                                                                              t.value,
                                                                          ];
                                                            e
                                                                ? s.forEach(
                                                                      (e) => {
                                                                          t
                                                                              .dataset
                                                                              .columns
                                                                              ? i.push(
                                                                                    {
                                                                                        terms: [
                                                                                            e,
                                                                                        ],
                                                                                        columns:
                                                                                            JSON.parse(
                                                                                                t
                                                                                                    .dataset
                                                                                                    .columns
                                                                                            ),
                                                                                    }
                                                                                )
                                                                              : i.push(
                                                                                    {
                                                                                        terms: [
                                                                                            e,
                                                                                        ],
                                                                                        columns:
                                                                                            void 0,
                                                                                    }
                                                                                );
                                                                      }
                                                                  )
                                                                : t.dataset
                                                                      .columns
                                                                ? i.push({
                                                                      terms: s,
                                                                      columns:
                                                                          JSON.parse(
                                                                              t
                                                                                  .dataset
                                                                                  .columns
                                                                          ),
                                                                  })
                                                                : i.push({
                                                                      terms: s,
                                                                      columns:
                                                                          void 0,
                                                                  });
                                                        }),
                                                    1 === i.length &&
                                                        1 === i[0].terms.length)
                                                ) {
                                                    const t = i[0];
                                                    this.search(
                                                        t.terms[0],
                                                        t.columns
                                                    );
                                                } else this.multiSearch(i);
                                            }
                                        ),
                                        this.wrapperDOM.addEventListener(
                                            "click",
                                            (t) => {
                                                const e =
                                                    t.target.closest(
                                                        "a, button"
                                                    );
                                                if (e)
                                                    if (
                                                        e.hasAttribute(
                                                            "data-page"
                                                        )
                                                    )
                                                        this.page(
                                                            parseInt(
                                                                e.getAttribute(
                                                                    "data-page"
                                                                ),
                                                                10
                                                            )
                                                        ),
                                                            t.preventDefault();
                                                    else if (
                                                        h(
                                                            e,
                                                            this.options.classes
                                                                .sorter
                                                        )
                                                    ) {
                                                        const s = Array.from(
                                                                e.parentElement
                                                                    .parentElement
                                                                    .children
                                                            ).indexOf(
                                                                e.parentElement
                                                            ),
                                                            i = l(
                                                                s,
                                                                this.columns
                                                                    .settings
                                                            );
                                                        this.columns.sort(i),
                                                            t.preventDefault();
                                                    } else if (
                                                        h(
                                                            e,
                                                            this.options.classes
                                                                .filter
                                                        )
                                                    ) {
                                                        const s = Array.from(
                                                                e.parentElement
                                                                    .parentElement
                                                                    .children
                                                            ).indexOf(
                                                                e.parentElement
                                                            ),
                                                            i = l(
                                                                s,
                                                                this.columns
                                                                    .settings
                                                            );
                                                        this.columns.filter(i),
                                                            t.preventDefault();
                                                    }
                                            },
                                            !1
                                        ),
                                        this.options.rowNavigation
                                            ? (this.dom.addEventListener(
                                                  "keydown",
                                                  (t) => {
                                                      if ("ArrowUp" === t.key) {
                                                          let e;
                                                          t.preventDefault(),
                                                              t.stopPropagation(),
                                                              this.pages[
                                                                  this
                                                                      ._currentPage -
                                                                      1
                                                              ].find(
                                                                  (t) =>
                                                                      t.index ===
                                                                          this
                                                                              .rows
                                                                              .cursor ||
                                                                      ((e = t),
                                                                      !1)
                                                              ),
                                                              e
                                                                  ? this.rows.setCursor(
                                                                        e.index
                                                                    )
                                                                  : this
                                                                        .onFirstPage ||
                                                                    this.page(
                                                                        this
                                                                            ._currentPage -
                                                                            1,
                                                                        !0
                                                                    );
                                                      } else if (
                                                          "ArrowDown" === t.key
                                                      ) {
                                                          let e;
                                                          t.preventDefault(),
                                                              t.stopPropagation();
                                                          const s = this.pages[
                                                              this
                                                                  ._currentPage -
                                                                  1
                                                          ].find(
                                                              (t) =>
                                                                  !!e ||
                                                                  (t.index ===
                                                                      this.rows
                                                                          .cursor &&
                                                                      (e = !0),
                                                                  !1)
                                                          );
                                                          s
                                                              ? this.rows.setCursor(
                                                                    s.index
                                                                )
                                                              : this
                                                                    .onLastPage ||
                                                                this.page(
                                                                    this
                                                                        ._currentPage +
                                                                        1
                                                                );
                                                      } else
                                                          [
                                                              "Enter",
                                                              " ",
                                                          ].includes(t.key) &&
                                                              this.emit(
                                                                  "datatable.selectrow",
                                                                  this.rows
                                                                      .cursor,
                                                                  t
                                                              );
                                                  }
                                              ),
                                              this.dom.addEventListener(
                                                  "mousedown",
                                                  (t) => {
                                                      const e = t.target;
                                                      if (
                                                          e instanceof
                                                              Element &&
                                                          this.dom.matches(
                                                              ":focus"
                                                          )
                                                      ) {
                                                          const s = Array.from(
                                                              this.dom.querySelectorAll(
                                                                  "tbody > tr"
                                                              )
                                                          ).find((t) =>
                                                              t.contains(e)
                                                          );
                                                          s &&
                                                              s instanceof
                                                                  HTMLElement &&
                                                              this.emit(
                                                                  "datatable.selectrow",
                                                                  parseInt(
                                                                      s.dataset
                                                                          .index,
                                                                      10
                                                                  ),
                                                                  t
                                                              );
                                                      }
                                                  }
                                              ))
                                            : this.dom.addEventListener(
                                                  "mousedown",
                                                  (t) => {
                                                      const e = t.target;
                                                      if (
                                                          !(
                                                              e instanceof
                                                              Element
                                                          )
                                                      )
                                                          return;
                                                      const s = Array.from(
                                                          this.dom.querySelectorAll(
                                                              "tbody > tr"
                                                          )
                                                      ).find((t) =>
                                                          t.contains(e)
                                                      );
                                                      s &&
                                                          s instanceof
                                                              HTMLElement &&
                                                          this.emit(
                                                              "datatable.selectrow",
                                                              parseInt(
                                                                  s.dataset
                                                                      .index,
                                                                  10
                                                              ),
                                                              t
                                                          );
                                                  }
                                              ),
                                        window.addEventListener(
                                            "resize",
                                            this._listeners.onResize
                                        );
                                }
                                _onResize() {
                                    (this._rect =
                                        this.containerDOM.getBoundingClientRect()),
                                        this._rect.width && this.update(!0);
                                }
                                destroy() {
                                    this.options.destroyable &&
                                        ((this.dom.innerHTML =
                                            this._initialInnerHTML),
                                        this.options.classes.table
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.wrapperDOM.classList.remove(
                                                    t
                                                )
                                            ),
                                        this.wrapperDOM.parentElement &&
                                            this.wrapperDOM.parentElement.replaceChild(
                                                this.dom,
                                                this.wrapperDOM
                                            ),
                                        (this.initialized = !1),
                                        window.removeEventListener(
                                            "resize",
                                            this._listeners.onResize
                                        ));
                                }
                                update(t = !1) {
                                    t &&
                                        (this.columns._measureWidths(),
                                        (this.hasRows = Boolean(
                                            this.data.data.length
                                        )),
                                        (this.hasHeadings = Boolean(
                                            this.data.headings.length
                                        ))),
                                        this.options.classes.empty
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.wrapperDOM.classList.remove(
                                                    t
                                                )
                                            ),
                                        this._paginate(),
                                        this._renderPage(),
                                        this._renderPagers(),
                                        this.options.scrollY.length &&
                                            this._renderSeparateHeader(),
                                        this.emit("datatable.update");
                                }
                                _paginate() {
                                    let t = this.data.data.map((t, e) => ({
                                        row: t,
                                        index: e,
                                    }));
                                    return (
                                        this._searchQueries.length &&
                                            ((t = []),
                                            this._searchData.forEach((e) =>
                                                t.push({
                                                    index: e,
                                                    row: this.data.data[e],
                                                })
                                            )),
                                        this.columns._state.filters.length &&
                                            this.columns._state.filters.forEach(
                                                (e, s) => {
                                                    e &&
                                                        (t = t.filter((t) => {
                                                            const i =
                                                                t.row.cells[s];
                                                            return "function" ==
                                                                typeof e
                                                                ? e(i.data)
                                                                : o(i) === e;
                                                        }));
                                                }
                                            ),
                                        this.options.paging &&
                                        this.options.perPage > 0
                                            ? (this.pages = t
                                                  .map((e, s) =>
                                                      s %
                                                          this.options
                                                              .perPage ==
                                                      0
                                                          ? t.slice(
                                                                s,
                                                                s +
                                                                    this.options
                                                                        .perPage
                                                            )
                                                          : null
                                                  )
                                                  .filter((t) => t))
                                            : (this.pages = [t]),
                                        (this.totalPages = this.lastPage =
                                            this.pages.length),
                                        this._currentPage ||
                                            (this._currentPage = 1),
                                        this.totalPages
                                    );
                                }
                                _fixHeight() {
                                    this.options.fixedHeight &&
                                        ((this.containerDOM.style.height =
                                            null),
                                        (this._rect =
                                            this.containerDOM.getBoundingClientRect()),
                                        (this.containerDOM.style.height = `${this._rect.height}px`));
                                }
                                search(t, e = void 0) {
                                    if (!t.length)
                                        return (
                                            (this._currentPage = 1),
                                            (this._searchQueries = []),
                                            (this._searchData = []),
                                            this.update(),
                                            this.emit(
                                                "datatable.search",
                                                "",
                                                []
                                            ),
                                            this.wrapperDOM.classList.remove(
                                                "search-results"
                                            ),
                                            !1
                                        );
                                    this.multiSearch([
                                        { terms: [t], columns: e || void 0 },
                                    ]),
                                        this.emit(
                                            "datatable.search",
                                            t,
                                            this._searchData
                                        );
                                }
                                multiSearch(t) {
                                    if (!this.hasRows) return !1;
                                    (this._currentPage = 1),
                                        (this._searchData = []);
                                    const e = t
                                        .map((t) => ({
                                            columns: t.columns,
                                            terms: t.terms
                                                .map((t) => t.trim())
                                                .filter((t) => t),
                                        }))
                                        .filter((t) => t.terms.length);
                                    if (((this._searchQueries = e), !e.length))
                                        return (
                                            this.update(),
                                            this.emit(
                                                "datatable.multisearch",
                                                e,
                                                this._searchData
                                            ),
                                            this.wrapperDOM.classList.remove(
                                                "search-results"
                                            ),
                                            !1
                                        );
                                    const s = e.map((t) =>
                                        this.columns.settings.map((e, s) => {
                                            if (
                                                e.hidden ||
                                                !e.searchable ||
                                                (t.columns &&
                                                    !t.columns.includes(s))
                                            )
                                                return !1;
                                            let i = t.terms;
                                            const n =
                                                e.sensitivity ||
                                                this.options.sensitivity;
                                            return (
                                                ["base", "accent"].includes(
                                                    n
                                                ) &&
                                                    (i = i.map((t) =>
                                                        t.toLowerCase()
                                                    )),
                                                ["base", "case"].includes(n) &&
                                                    (i = i.map((t) =>
                                                        t
                                                            .normalize("NFD")
                                                            .replace(
                                                                /\p{Diacritic}/gu,
                                                                ""
                                                            )
                                                    )),
                                                (e.ignorePunctuation ??
                                                    this.options
                                                        .ignorePunctuation) &&
                                                    (i = i.map((t) =>
                                                        t.replace(
                                                            /[.,/#!$%^&*;:{}=-_`~()]/g,
                                                            ""
                                                        )
                                                    )),
                                                i
                                            );
                                        })
                                    );
                                    this.data.data.forEach((t, e) => {
                                        const i = t.cells.map((t, e) => {
                                            let s = o(t).trim();
                                            const i = this.columns.settings[e];
                                            if (s.length) {
                                                const t =
                                                    i.sensitivity ||
                                                    this.options.sensitivity;
                                                ["base", "accent"].includes(
                                                    t
                                                ) && (s = s.toLowerCase()),
                                                    ["base", "case"].includes(
                                                        t
                                                    ) &&
                                                        (s = s
                                                            .normalize("NFD")
                                                            .replace(
                                                                /\p{Diacritic}/gu,
                                                                ""
                                                            )),
                                                    (i.ignorePunctuation ??
                                                        this.options
                                                            .ignorePunctuation) &&
                                                        (s = s.replace(
                                                            /[.,/#!$%^&*;:{}=-_`~()]/g,
                                                            ""
                                                        ));
                                            }
                                            const n =
                                                i.searchItemSeparator ||
                                                this.options
                                                    .searchItemSeparator;
                                            return n ? s.split(n) : [s];
                                        });
                                        s.every((t) =>
                                            t.find(
                                                (t, e) =>
                                                    !!t &&
                                                    t.find((t) =>
                                                        i[e].find((e) =>
                                                            e.includes(t)
                                                        )
                                                    )
                                            )
                                        ) && this._searchData.push(e);
                                    }),
                                        this.wrapperDOM.classList.add(
                                            "search-results"
                                        ),
                                        this._searchData.length
                                            ? this.update()
                                            : (this.wrapperDOM.classList.remove(
                                                  "search-results"
                                              ),
                                              this.setMessage(
                                                  this.options.labels.noResults
                                              )),
                                        this.emit(
                                            "datatable.multisearch",
                                            e,
                                            this._searchData
                                        );
                                }
                                page(t, e = !1) {
                                    return (
                                        t !== this._currentPage &&
                                        (isNaN(t) || (this._currentPage = t),
                                        !(t > this.pages.length || t < 0) &&
                                            (this._renderPage(e),
                                            this._renderPagers(),
                                            void this.emit(
                                                "datatable.page",
                                                t
                                            )))
                                    );
                                }
                                insert(t) {
                                    let s = [];
                                    if (Array.isArray(t)) {
                                        const e = this.data.headings.map(
                                            (t) => t.text ?? String(t.data)
                                        );
                                        t.forEach((t, i) => {
                                            const n = [];
                                            Object.entries(t).forEach(
                                                ([t, s]) => {
                                                    const a = e.indexOf(t);
                                                    a > -1
                                                        ? (n[a] = J(
                                                              s,
                                                              this.columns
                                                                  .settings[a]
                                                          ))
                                                        : this.hasHeadings ||
                                                          this.hasRows ||
                                                          0 !== i ||
                                                          ((n[e.length] = J(
                                                              s,
                                                              this.columns
                                                                  .settings[
                                                                  e.length
                                                              ]
                                                          )),
                                                          e.push(t),
                                                          this.data.headings.push(
                                                              W(t)
                                                          ));
                                                }
                                            ),
                                                s.push({ cells: n });
                                        });
                                    } else
                                        e(t) &&
                                            (!t.headings ||
                                            this.hasHeadings ||
                                            this.hasRows
                                                ? t.data &&
                                                  Array.isArray(t.data) &&
                                                  (s = t.data.map((t) => {
                                                      let e, s;
                                                      return (
                                                          Array.isArray(t)
                                                              ? ((e = {}),
                                                                (s = t))
                                                              : ((e =
                                                                    t.attributes),
                                                                (s = t.cells)),
                                                          {
                                                              attributes: e,
                                                              cells: s.map(
                                                                  (t, e) =>
                                                                      J(
                                                                          t,
                                                                          this
                                                                              .columns
                                                                              .settings[
                                                                              e
                                                                          ]
                                                                      )
                                                              ),
                                                          }
                                                      );
                                                  }))
                                                : (this.data = Q(
                                                      t,
                                                      void 0,
                                                      this.columns.settings,
                                                      this.options.type,
                                                      this.options.format
                                                  )));
                                    s.length &&
                                        s.forEach((t) =>
                                            this.data.data.push(t)
                                        ),
                                        (this.hasHeadings = Boolean(
                                            this.data.headings.length
                                        )),
                                        this.columns._state.sort &&
                                            this.columns.sort(
                                                this.columns._state.sort.column,
                                                this.columns._state.sort.dir,
                                                !0
                                            ),
                                        this.update(!0);
                                }
                                refresh() {
                                    if (this.options.searchable) {
                                        const t = c(this.options.classes.input);
                                        Array.from(
                                            this.wrapperDOM.querySelectorAll(t)
                                        ).forEach((t) => (t.value = "")),
                                            (this._searchQueries = []);
                                    }
                                    (this._currentPage = 1),
                                        (this.onFirstPage = !0),
                                        this.update(!0),
                                        this.emit("datatable.refresh");
                                }
                                print() {
                                    const t = n("table");
                                    let e = q(
                                        this._tableAttributes,
                                        this.data.headings,
                                        this.data.data.map((t, e) => ({
                                            row: t,
                                            index: e,
                                        })),
                                        this.columns.settings,
                                        this.columns._state,
                                        !1,
                                        this.options,
                                        {
                                            noColumnWidths: !0,
                                            unhideHeader: !0,
                                        },
                                        this._tableFooters,
                                        this._tableCaptions
                                    );
                                    if (this.options.tableRender) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            e,
                                            "print"
                                        );
                                        t && (e = t);
                                    }
                                    const s = this._dd.diff(
                                        { nodeName: "TABLE" },
                                        e
                                    );
                                    this._dd.apply(t, s);
                                    const i = window.open();
                                    i.document.body.appendChild(t), i.print();
                                }
                                setMessage(t) {
                                    const e =
                                        this.data.headings.filter(
                                            (t, e) =>
                                                !this.columns.settings[e]
                                                    ?.hidden
                                        ).length || 1;
                                    this.options.classes.empty
                                        ?.split(" ")
                                        .forEach((t) =>
                                            this.wrapperDOM.classList.add(t)
                                        ),
                                        this._label &&
                                            (this._label.innerHTML = ""),
                                        (this.totalPages = 0),
                                        this._renderPagers();
                                    let s = {
                                        nodeName: "TABLE",
                                        attributes: this._tableAttributes,
                                        childNodes: [
                                            {
                                                nodeName: "THEAD",
                                                childNodes: [
                                                    j(
                                                        this.data.headings,
                                                        this.columns.settings,
                                                        this.columns._state,
                                                        this.options,
                                                        {}
                                                    ),
                                                ],
                                            },
                                            {
                                                nodeName: "TBODY",
                                                childNodes: [
                                                    {
                                                        nodeName: "TR",
                                                        childNodes: [
                                                            {
                                                                nodeName: "TD",
                                                                attributes: {
                                                                    class: this
                                                                        .options
                                                                        .classes
                                                                        .empty,
                                                                    colspan:
                                                                        String(
                                                                            e
                                                                        ),
                                                                },
                                                                childNodes: [
                                                                    {
                                                                        nodeName:
                                                                            "#text",
                                                                        data: t,
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    };
                                    if (
                                        (this._tableFooters.forEach((t) =>
                                            s.childNodes.push(t)
                                        ),
                                        this._tableCaptions.forEach((t) =>
                                            s.childNodes.push(t)
                                        ),
                                        (s.attributes.class = u(
                                            s.attributes.class,
                                            this.options.classes.table
                                        )),
                                        this.options.tableRender)
                                    ) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            s,
                                            "message"
                                        );
                                        t && (s = t);
                                    }
                                    const i = this._dd.diff(
                                        this._virtualDOM,
                                        s
                                    );
                                    this._dd.apply(this.dom, i),
                                        (this._virtualDOM = s);
                                }
                                on(t, e) {
                                    (this._events[t] = this._events[t] || []),
                                        this._events[t].push(e);
                                }
                                off(t, e) {
                                    t in this._events != 0 &&
                                        this._events[t].splice(
                                            this._events[t].indexOf(e),
                                            1
                                        );
                                }
                                emit(t, ...e) {
                                    if (t in this._events != 0)
                                        for (
                                            let s = 0;
                                            s < this._events[t].length;
                                            s++
                                        )
                                            this._events[t][s](...e);
                                }
                            }),
                                (s.addColumnFilter = function (t, e = {}) {
                                    const s = new it(t, e);
                                    return (
                                        t.initialized
                                            ? s.init()
                                            : t.on("datatable.init", () =>
                                                  s.init()
                                              ),
                                        s
                                    );
                                }),
                                (s.convertCSV = function (t) {
                                    let s;
                                    if (!e(t)) return !1;
                                    const i = {
                                        lineDelimiter: "\n",
                                        columnDelimiter: ",",
                                        removeDoubleQuotes: !1,
                                        ...t,
                                    };
                                    if (i.data.length) {
                                        s = { data: [] };
                                        const t = i.data.split(i.lineDelimiter);
                                        if (
                                            (t.length &&
                                                (i.headings &&
                                                    ((s.headings = t[0].split(
                                                        i.columnDelimiter
                                                    )),
                                                    i.removeDoubleQuotes &&
                                                        (s.headings =
                                                            s.headings.map(
                                                                (t) =>
                                                                    t
                                                                        .trim()
                                                                        .replace(
                                                                            /(^"|"$)/g,
                                                                            ""
                                                                        )
                                                            )),
                                                    t.shift()),
                                                t.forEach((t, e) => {
                                                    s.data[e] = [];
                                                    const n = t.split(
                                                        i.columnDelimiter
                                                    );
                                                    n.length &&
                                                        n.forEach((t) => {
                                                            i.removeDoubleQuotes &&
                                                                (t = t
                                                                    .trim()
                                                                    .replace(
                                                                        /(^"|"$)/g,
                                                                        ""
                                                                    )),
                                                                s.data[e].push(
                                                                    t
                                                                );
                                                        });
                                                })),
                                            s)
                                        )
                                            return s;
                                    }
                                    return !1;
                                }),
                                (s.convertJSON = function (t) {
                                    let s;
                                    if (!e(t)) return !1;
                                    const n = { data: "", ...t };
                                    if (n.data.length || e(n.data)) {
                                        const t =
                                            !!i(n.data) && JSON.parse(n.data);
                                        if (
                                            (t
                                                ? ((s = {
                                                      headings: [],
                                                      data: [],
                                                  }),
                                                  t.forEach((t, e) => {
                                                      (s.data[e] = []),
                                                          Object.entries(
                                                              t
                                                          ).forEach(
                                                              ([t, i]) => {
                                                                  s.headings.includes(
                                                                      t
                                                                  ) ||
                                                                      s.headings.push(
                                                                          t
                                                                      ),
                                                                      s.data[
                                                                          e
                                                                      ].push(i);
                                                              }
                                                          );
                                                  }))
                                                : console.warn(
                                                      "That's not valid JSON!"
                                                  ),
                                            s)
                                        )
                                            return s;
                                    }
                                    return !1;
                                }),
                                (s.createElement = n),
                                (s.exportCSV = function (t, s = {}) {
                                    if (!t.hasHeadings && !t.hasRows) return !1;
                                    if (!e(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            lineDelimiter: "\n",
                                            columnDelimiter: ",",
                                            ...s,
                                        },
                                        n = (e) =>
                                            !i.skipColumn.includes(e) &&
                                            !t.columns.settings[e]?.hidden,
                                        a = t.data.headings
                                            .filter((t, e) => n(e))
                                            .map((t) => t.text ?? t.data);
                                    let r;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            r = [];
                                            for (
                                                let e = 0;
                                                e < i.selection.length;
                                                e++
                                            )
                                                r = r.concat(
                                                    t.pages[
                                                        i.selection[e] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            r = t.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else r = t.data.data;
                                    let l = [];
                                    if (
                                        ((l[0] = a),
                                        (l = l.concat(
                                            r.map((t) =>
                                                t.cells
                                                    .filter((t, e) => n(e))
                                                    .map((t) => o(t))
                                            )
                                        )),
                                        l.length)
                                    ) {
                                        let t = "";
                                        if (
                                            (l.forEach((e) => {
                                                e.forEach((e) => {
                                                    "string" == typeof e &&
                                                        (e = (e = (e = (e = (e =
                                                            e.trim()).replace(
                                                            /\s{2,}/g,
                                                            " "
                                                        )).replace(
                                                            /\n/g,
                                                            "  "
                                                        )).replace(
                                                            /"/g,
                                                            '""'
                                                        )).replace(
                                                            /#/g,
                                                            "%23"
                                                        )).includes(",") &&
                                                        (e = `"${e}"`),
                                                        (t +=
                                                            e +
                                                            i.columnDelimiter);
                                                }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += i.lineDelimiter);
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(
                                                `data:text/csv;charset=utf-8,${t}`
                                            )),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.csv`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (s.exportJSON = function (t, s = {}) {
                                    if (!t.hasHeadings && !t.hasRows) return !1;
                                    if (!e(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            replacer: null,
                                            space: 4,
                                            ...s,
                                        },
                                        n = (e) =>
                                            !i.skipColumn.includes(e) &&
                                            !t.columns.settings[e]?.hidden;
                                    let a;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            a = [];
                                            for (
                                                let e = 0;
                                                e < i.selection.length;
                                                e++
                                            )
                                                a = a.concat(
                                                    t.pages[
                                                        i.selection[e] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            a = t.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else a = t.data.data;
                                    const r = a.map((t) =>
                                            t.cells
                                                .filter((t, e) => n(e))
                                                .map((t) => o(t))
                                        ),
                                        l = t.data.headings
                                            .filter((t, e) => n(e))
                                            .map(
                                                (t) => t.text ?? String(t.data)
                                            );
                                    if (r.length) {
                                        const t = [];
                                        r.forEach((e, s) => {
                                            (t[s] = t[s] || {}),
                                                e.forEach((e, i) => {
                                                    t[s][l[i]] = e;
                                                });
                                        });
                                        const e = JSON.stringify(
                                            t,
                                            i.replacer,
                                            i.space
                                        );
                                        if (i.download) {
                                            const t = new Blob([e], {
                                                    type: "data:application/json;charset=utf-8",
                                                }),
                                                s = URL.createObjectURL(t),
                                                n = document.createElement("a");
                                            (n.href = s),
                                                (n.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.json`),
                                                document.body.appendChild(n),
                                                n.click(),
                                                document.body.removeChild(n),
                                                URL.revokeObjectURL(s);
                                        }
                                        return e;
                                    }
                                    return !1;
                                }),
                                (s.exportSQL = function (t, s = {}) {
                                    if (!t.hasHeadings && !t.hasRows) return !1;
                                    if (!e(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            tableName: "myTable",
                                            ...s,
                                        },
                                        n = (e) =>
                                            !i.skipColumn.includes(e) &&
                                            !t.columns.settings[e]?.hidden;
                                    let a = [];
                                    if (i.selection)
                                        if (Array.isArray(i.selection))
                                            for (
                                                let e = 0;
                                                e < i.selection.length;
                                                e++
                                            )
                                                a = a.concat(
                                                    t.pages[
                                                        i.selection[e] - 1
                                                    ].map((t) => t.row)
                                                );
                                        else
                                            a = t.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else a = t.data.data;
                                    const r = a.map((t) =>
                                            t.cells
                                                .filter((t, e) => n(e))
                                                .map((t) => o(t))
                                        ),
                                        l = t.data.headings
                                            .filter((t, e) => n(e))
                                            .map(
                                                (t) => t.text ?? String(t.data)
                                            );
                                    if (r.length) {
                                        let t = `INSERT INTO \`${i.tableName}\` (`;
                                        if (
                                            (l.forEach((e) => {
                                                t += `\`${e}\`,`;
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            (t += ") VALUES "),
                                            r.forEach((e) => {
                                                (t += "("),
                                                    e.forEach((e) => {
                                                        t +=
                                                            "string" == typeof e
                                                                ? `"${e}",`
                                                                : `${e},`;
                                                    }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += "),");
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            (t += ";"),
                                            i.download &&
                                                (t = `data:application/sql;charset=utf-8,${t}`),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(t)),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.sql`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (s.exportTXT = function (t, s = {}) {
                                    if (!t.hasHeadings && !t.hasRows) return !1;
                                    if (!e(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            lineDelimiter: "\n",
                                            columnDelimiter: ",",
                                            ...s,
                                        },
                                        n = (e) =>
                                            !i.skipColumn.includes(e) &&
                                            !t.columns.settings[e]?.hidden,
                                        a = t.data.headings
                                            .filter((t, e) => n(e))
                                            .map((t) => t.text ?? t.data);
                                    let r;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            r = [];
                                            for (
                                                let e = 0;
                                                e < i.selection.length;
                                                e++
                                            )
                                                r = r.concat(
                                                    t.pages[
                                                        i.selection[e] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            r = t.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else r = t.data.data;
                                    let l = [];
                                    if (
                                        ((l[0] = a),
                                        (l = l.concat(
                                            r.map((t) =>
                                                t.cells
                                                    .filter((t, e) => n(e))
                                                    .map((t) => o(t))
                                            )
                                        )),
                                        l.length)
                                    ) {
                                        let t = "";
                                        if (
                                            (l.forEach((e) => {
                                                e.forEach((e) => {
                                                    "string" == typeof e &&
                                                        (e = (e = (e = (e = (e =
                                                            e.trim()).replace(
                                                            /\s{2,}/g,
                                                            " "
                                                        )).replace(
                                                            /\n/g,
                                                            "  "
                                                        )).replace(
                                                            /"/g,
                                                            '""'
                                                        )).replace(
                                                            /#/g,
                                                            "%23"
                                                        )).includes(",") &&
                                                        (e = `"${e}"`),
                                                        (t +=
                                                            e +
                                                            i.columnDelimiter);
                                                }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += i.lineDelimiter);
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            i.download &&
                                                (t = `data:text/csv;charset=utf-8,${t}`),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(t)),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.txt`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (s.isJson = i),
                                (s.isObject = e),
                                (s.makeEditable = function (t, e = {}) {
                                    const s = new et(t, e);
                                    return (
                                        t.initialized
                                            ? s.init()
                                            : t.on("datatable.init", () =>
                                                  s.init()
                                              ),
                                        s
                                    );
                                });
                        }).call(this);
                    }).call(
                        this,
                        "undefined" != typeof global
                            ? global
                            : "undefined" != typeof self
                            ? self
                            : "undefined" != typeof window
                            ? window
                            : {}
                    );
                },
                {},
            ],
        },
        {},
        [1]
    )(1);
});
//# sourceMappingURL=/sm/1d4565a30142d80f5ae9720c14575af2265d2a37ede66284df458dbc9e5694fb.map
