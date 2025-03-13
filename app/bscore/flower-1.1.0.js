function checkIsPlayer() {
    appData.isPlayer = 0;
    for (var e = 0; e < appData.player.length; e++) appData.player[e].account_id == userData.accountId && (appData.isPlayer = 1)
}
function checkIsWatch() {
    appData.isWatch = 0;
    for (var e = 0; e < appData.guests.length; e++) appData.guests[e].account_id == userData.accountId && (appData.isWatch = 1)
}
function checkPhone(e) {
    return !! /^1(3|4|5|7|8)\d{9}$/.test(e)
}
function checkAuthcode(e) {
    return "" != e && void 0 != e && !!new RegExp("^[0-9]*$").test(e)
}
function canvas() {
    var e = document.getElementById("ranking");
    html2canvas(e, {
        allowTaint: !0,
        taintTest: !1,
        onrendered: function(e) {
            e.id = "mycanvas";
            var t = e.toDataURL("image/jpeg", .3);
            $("#end").attr("src", t),
                $(".end").show(),
                $(".ranking").hide(),
                newGame()
        }
    })
}
function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
function logMessage(e) {
    console.log(e)
}
function reload() {
    globalData.isShortUrl,
        window.location.href = window.location.href
}
function errorAPI(e, t) {}
function errorSocket(e, t) {}
function getLocalTime(e) {
    var t = new Date(1e3 * parseInt(e)),
        a = t.getFullYear() + "年",
        n = t.getMonth() + 1 + "月",
        r = t.getDate() + "日 ",
        o = t.getHours(),
        i = t.getMinutes(),
        s = ":";
    return i < 10 && (s += 0),
    a + n + r + o + s + i
}
function chooseBigWinner() {
    for (var e = appData.playerBoard.score.length,
             t = 1,
             a = 0; a < e; a++) appData.playerBoard.score.isBigWinner = 0,
    appData.playerBoard.score[a].account_score > t && (t = appData.playerBoard.score[a].account_score);
    for (var n = 0; n < e; n++) appData.playerBoard.score[n].account_score == t && (appData.playerBoard.score[n].isBigWinner = 1)
}
function preventDefaultFn(e) {
    e.preventDefault()
}
function disable_scroll() {
    $("body").on("touchmove", preventDefaultFn)
}
function enable_scroll() {
    $("body").off("touchmove", preventDefaultFn)
}
function getShareContent() {
    shareContent = "\n",
        1 == appData.ruleInfo.chip_type ? shareContent += "筹码：2/4，4/8，8/16，10/20": 2 == appData.ruleInfo.chip_type ? shareContent += "筹码：2/4，5/10，10/20，20/40": 3 == appData.ruleInfo.chip_type && (shareContent += "筹码：10/20，20/40，50/100，100/200"),
    1 != appData.ruleInfo.disable_pk_100 && 1 != appData.ruleInfo.disable_pk_men || (shareContent += " 规则：", 1 == appData.ruleInfo.disable_pk_100 && (shareContent += " 100分以下不能比牌"), 1 == appData.ruleInfo.disable_pk_men && (shareContent += " 闷牌，全场禁止比牌")),
        shareContent = 1 == appData.ruleInfo.ticket_count ? shareContent + "  局数：" + gameInfo.eachCard + "局x1张房卡": shareContent + "  局数：" + 2 * gameInfo.eachCard + "局x2张房卡",
        0 == appData.ruleInfo.upper_limit ? shareContent += "  上限：无": shareContent = shareContent + "  上限：" + appData.ruleInfo.upper_limit,
        shareContent = shareContent + "  准入：>=" + appData.ruleInfo.balance_req + "豆"
} !
    function(e, t) {
        "function" == typeof define && (define.amd || define.cmd) ? define(function() {
            return t(e)
        }) : t(e, !0)
    } (this,
        function(e, t) {
            function a(t, a, n) {
                e.WeixinJSBridge ? WeixinJSBridge.invoke(t, r(a),
                    function(e) {
                        i(t, e, n)
                    }) : l(t, n)
            }
            function n(t, a, n) {
                e.WeixinJSBridge ? WeixinJSBridge.on(t,
                    function(e) {
                        n && n.trigger && n.trigger(e),
                            i(t, e, a)
                    }) : n ? l(t, n) : l(t, a)
            }
            function r(e) {
                return e = e || {},
                    e.appId = P.appId,
                    e.verifyAppId = P.appId,
                    e.verifySignType = "sha1",
                    e.verifyTimestamp = P.timestamp + "",
                    e.verifyNonceStr = P.nonceStr,
                    e.verifySignature = P.signature,
                    e
            }
            function o(e) {
                return {
                    timeStamp: e.timestamp + "",
                    nonceStr: e.nonceStr,
                    package: e.package,
                    paySign: e.paySign,
                    signType: e.signType || "SHA1"
                }
            }
            function i(e, t, a) {
                var n, r;
                switch (delete t.err_code, delete t.err_desc, delete t.err_detail, n = t.errMsg, n || (n = t.err_msg, delete t.err_msg, n = s(e, n), t.errMsg = n), a = a || {},
                a._complete && (a._complete(t), delete a._complete), n = t.errMsg || "", P.debug && !a.isInnerInvoke && alert(JSON.stringify(t)), r = n.indexOf(":"), n.substring(r + 1)) {
                    case "ok":
                        a.success && a.success(t);
                        break;
                    case "cancel":
                        a.cancel && a.cancel(t);
                        break;
                    default:
                        a.fail && a.fail(t)
                }
                a.complete && a.complete(t)
            }
            function s(e, t) {
                var a, n, r = e,
                    o = m[r];
                return o && (r = o),
                    a = "ok",
                t && (n = t.indexOf(":"), a = t.substring(n + 1), "confirm" == a && (a = "ok"), "failed" == a && (a = "fail"), -1 != a.indexOf("failed_") && (a = a.substring(7)), -1 != a.indexOf("fail_") && (a = a.substring(5)), a = a.replace(/_/g, " "), a = a.toLowerCase(), ("access denied" == a || "no permission to execute" == a) && (a = "permission denied"), "config" == r && "function not exist" == a && (a = "ok"), "" == a && (a = "fail")),
                    t = r + ":" + a
            }
            function c(e) {
                var t, a, n, r;
                if (e) {
                    for (t = 0, a = e.length; a > t; ++t) n = e[t],
                    (r = h[n]) && (e[t] = r);
                    return e
                }
            }
            function l(e, t) {
                if (! (!P.debug || t && t.isInnerInvoke)) {
                    var a = m[e];
                    a && (e = a),
                    t && t._complete && delete t._complete,
                        console.log('"' + e + '",', t || "")
                }
            }
            function u() {
                0 != A.preVerifyState && (_ || w || P.debug || "6.0.2" > S || A.systemType < 0 || T || (T = !0, A.appId = P.appId, A.initTime = M.initEndTime - M.initStartTime, A.preVerifyTime = M.preVerifyEndTime - M.preVerifyStartTime, E.getNetworkType({
                    isInnerInvoke: !0,
                    success: function(e) {
                        var t, a;
                        A.networkType = e.networkType,
                            t = "http://open.weixin.qq.com/sdk/report?v=" + A.version + "&o=" + A.preVerifyState + "&s=" + A.systemType + "&c=" + A.clientVersion + "&a=" + A.appId + "&n=" + A.networkType + "&i=" + A.initTime + "&p=" + A.preVerifyTime + "&u=" + A.url,
                            a = new Image,
                            a.src = t
                    }
                })))
            }
            function p() {
                return (new Date).getTime()
            }
            function d(t) {
                D && (e.WeixinJSBridge ? t() : g.addEventListener && g.addEventListener("WeixinJSBridgeReady", t, !1))
            }
            function f() {
                E.invoke || (E.invoke = function(t, a, n) {
                    e.WeixinJSBridge && WeixinJSBridge.invoke(t, r(a), n)
                },
                    E.on = function(t, a) {
                        e.WeixinJSBridge && WeixinJSBridge.on(t, a)
                    })
            }
            var h, m, g, v, y, b, _, w, D, k, x, S, T, C, M, A, P, I, N, E;
            if (!e.jWeixin) return h = {
                config: "preVerifyJSAPI",
                onMenuShareTimeline: "menu:share:timeline",
                onMenuShareAppMessage: "menu:share:appmessage",
                onMenuShareQQ: "menu:share:qq",
                onMenuShareWeibo: "menu:share:weiboApp",
                onMenuShareQZone: "menu:share:QZone",
                previewImage: "imagePreview",
                getLocation: "geoLocation",
                openProductSpecificView: "openProductViewWithPid",
                addCard: "batchAddCard",
                openCard: "batchViewCard",
                chooseWXPay: "getBrandWCPayRequest"
            },
                m = function() {
                    var e, t = {};
                    for (e in h) t[h[e]] = e;
                    return t
                } (),
                g = e.document,
                v = g.title,
                y = navigator.userAgent.toLowerCase(),
                b = navigator.platform.toLowerCase(),
                _ = !(!b.match("mac") && !b.match("win")),
                w = -1 != y.indexOf("wxdebugger"),
                D = -1 != y.indexOf("micromessenger"),
                k = -1 != y.indexOf("android"),
                x = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"),
                S = function() {
                    var e = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
                    return e ? e[1] : ""
                } (),
                T = !1,
                C = !1,
                M = {
                    initStartTime: p(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                },
                A = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    preVerifyState: 1,
                    systemType: x ? 1 : k ? 2 : -1,
                    clientVersion: S,
                    url: encodeURIComponent(location.href)
                },
                P = {},
                I = {
                    _completes: []
                },
                N = {
                    state: 0,
                    data: {}
                },
                d(function() {
                    M.initEndTime = p()
                }),
                E = {
                    config: function(e) {
                        P = e,
                            l("config", e);
                        var t = !1 !== P.check;
                        d(function() {
                            var e, n, r;
                            if (t) a(h.config, {
                                    verifyJsApiList: c(P.jsApiList)
                                },
                                function() {
                                    I._complete = function(e) {
                                        M.preVerifyEndTime = p(),
                                            N.state = 1,
                                            N.data = e
                                    },
                                        I.success = function() {
                                            A.preVerifyState = 0
                                        },
                                        I.fail = function(e) {
                                            I._fail ? I._fail(e) : N.state = -1
                                        };
                                    var e = I._completes;
                                    return e.push(function() {
                                        u()
                                    }),
                                        I.complete = function() {
                                            for (var t = 0,
                                                     a = e.length; a > t; ++t) e[t]();
                                            I._completes = []
                                        },
                                        I
                                } ()),
                                M.preVerifyStartTime = p();
                            else {
                                for (N.state = 1, e = I._completes, n = 0, r = e.length; r > n; ++n) e[n]();
                                I._completes = []
                            }
                        }),
                        P.beta && f()
                    },
                    ready: function(e) {
                        0 != N.state ? e() : (I._completes.push(e), !D && P.debug && e())
                    },
                    error: function(e) {
                        "6.0.2" > S || C || (C = !0, -1 == N.state ? e(N.data) : I._fail = e)
                    },
                    checkJsApi: function(e) {
                        var t = function(e) {
                            var t, a, n = e.checkResult;
                            for (t in n)(a = m[t]) && (n[a] = n[t], delete n[t]);
                            return e
                        };
                        a("checkJsApi", {
                                jsApiList: c(e.jsApiList)
                            },
                            function() {
                                return e._complete = function(e) {
                                    if (k) {
                                        var a = e.checkResult;
                                        a && (e.checkResult = JSON.parse(a))
                                    }
                                    e = t(e)
                                },
                                    e
                            } ())
                    },
                    onMenuShareTimeline: function(e) {
                        n(h.onMenuShareTimeline, {
                                complete: function() {
                                    a("shareTimeline", {
                                            title: e.title || v,
                                            desc: e.title || v,
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href,
                                            type: e.type || "link",
                                            data_url: e.dataUrl || ""
                                        },
                                        e)
                                }
                            },
                            e)
                    },
                    onMenuShareAppMessage: function(e) {
                        n(h.onMenuShareAppMessage, {
                                complete: function() {
                                    a("sendAppMessage", {
                                            title: e.title || v,
                                            desc: e.desc || "",
                                            link: e.link || location.href,
                                            img_url: e.imgUrl || "",
                                            type: e.type || "link",
                                            data_url: e.dataUrl || ""
                                        },
                                        e)
                                }
                            },
                            e)
                    },
                    onMenuShareQQ: function(e) {
                        n(h.onMenuShareQQ, {
                                complete: function() {
                                    a("shareQQ", {
                                            title: e.title || v,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        },
                                        e)
                                }
                            },
                            e)
                    },
                    onMenuShareWeibo: function(e) {
                        n(h.onMenuShareWeibo, {
                                complete: function() {
                                    a("shareWeiboApp", {
                                            title: e.title || v,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        },
                                        e)
                                }
                            },
                            e)
                    },
                    onMenuShareQZone: function(e) {
                        n(h.onMenuShareQZone, {
                                complete: function() {
                                    a("shareQZone", {
                                            title: e.title || v,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        },
                                        e)
                                }
                            },
                            e)
                    },
                    startRecord: function(e) {
                        a("startRecord", {},
                            e)
                    },
                    stopRecord: function(e) {
                        a("stopRecord", {},
                            e)
                    },
                    onVoiceRecordEnd: function(e) {
                        n("onVoiceRecordEnd", e)
                    },
                    playVoice: function(e) {
                        a("playVoice", {
                                localId: e.localId
                            },
                            e)
                    },
                    pauseVoice: function(e) {
                        a("pauseVoice", {
                                localId: e.localId
                            },
                            e)
                    },
                    stopVoice: function(e) {
                        a("stopVoice", {
                                localId: e.localId
                            },
                            e)
                    },
                    onVoicePlayEnd: function(e) {
                        n("onVoicePlayEnd", e)
                    },
                    uploadVoice: function(e) {
                        a("uploadVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                    },
                    downloadVoice: function(e) {
                        a("downloadVoice", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                    },
                    translateVoice: function(e) {
                        a("translateVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                    },
                    chooseImage: function(e) {
                        a("chooseImage", {
                                scene: "1|2",
                                count: e.count || 9,
                                sizeType: e.sizeType || ["original", "compressed"],
                                sourceType: e.sourceType || ["album", "camera"]
                            },
                            function() {
                                return e._complete = function(e) {
                                    if (k) {
                                        var t = e.localIds;
                                        t && (e.localIds = JSON.parse(t))
                                    }
                                },
                                    e
                            } ())
                    },
                    previewImage: function(e) {
                        a(h.previewImage, {
                                current: e.current,
                                urls: e.urls
                            },
                            e)
                    },
                    uploadImage: function(e) {
                        a("uploadImage", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                    },
                    downloadImage: function(e) {
                        a("downloadImage", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                    },
                    getNetworkType: function(e) {
                        var t = function(e) {
                            var t, a, n, r = e.errMsg;
                            if (e.errMsg = "getNetworkType:ok", t = e.subtype, delete e.subtype, t) e.networkType = t;
                            else switch (a = r.indexOf(":"), n = r.substring(a + 1)) {
                                case "wifi":
                                case "edge":
                                case "wwan":
                                    e.networkType = n;
                                    break;
                                default:
                                    e.errMsg = "getNetworkType:fail"
                            }
                            return e
                        };
                        a("getNetworkType", {},
                            function() {
                                return e._complete = function(e) {
                                    e = t(e)
                                },
                                    e
                            } ())
                    },
                    openLocation: function(e) {
                        a("openLocation", {
                                latitude: e.latitude,
                                longitude: e.longitude,
                                name: e.name || "",
                                address: e.address || "",
                                scale: e.scale || 28,
                                infoUrl: e.infoUrl || ""
                            },
                            e)
                    },
                    getLocation: function(e) {
                        e = e || {},
                            a(h.getLocation, {
                                    type: e.type || "wgs84"
                                },
                                function() {
                                    return e._complete = function(e) {
                                        delete e.type
                                    },
                                        e
                                } ())
                    },
                    hideOptionMenu: function(e) {
                        a("hideOptionMenu", {},
                            e)
                    },
                    showOptionMenu: function(e) {
                        a("showOptionMenu", {},
                            e)
                    },
                    closeWindow: function(e) {
                        e = e || {},
                            a("closeWindow", {},
                                e)
                    },
                    hideMenuItems: function(e) {
                        a("hideMenuItems", {
                                menuList: e.menuList
                            },
                            e)
                    },
                    showMenuItems: function(e) {
                        a("showMenuItems", {
                                menuList: e.menuList
                            },
                            e)
                    },
                    hideAllNonBaseMenuItem: function(e) {
                        a("hideAllNonBaseMenuItem", {},
                            e)
                    },
                    showAllNonBaseMenuItem: function(e) {
                        a("showAllNonBaseMenuItem", {},
                            e)
                    },
                    scanQRCode: function(e) {
                        e = e || {},
                            a("scanQRCode", {
                                    needResult: e.needResult || 0,
                                    scanType: e.scanType || ["qrCode", "barCode"]
                                },
                                function() {
                                    return e._complete = function(e) {
                                        var t, a;
                                        x && (t = e.resultStr) && (a = JSON.parse(t), e.resultStr = a && a.scan_code && a.scan_code.scan_result)
                                    },
                                        e
                                } ())
                    },
                    openProductSpecificView: function(e) {
                        a(h.openProductSpecificView, {
                                pid: e.productId,
                                view_type: e.viewType || 0,
                                ext_info: e.extInfo
                            },
                            e)
                    },
                    addCard: function(e) {
                        var t, n, r, o, i = e.cardList,
                            s = [];
                        for (t = 0, n = i.length; n > t; ++t) r = i[t],
                            o = {
                                card_id: r.cardId,
                                card_ext: r.cardExt
                            },
                            s.push(o);
                        a(h.addCard, {
                                card_list: s
                            },
                            function() {
                                return e._complete = function(e) {
                                    var t, a, n, r = e.card_list;
                                    if (r) {
                                        for (r = JSON.parse(r), t = 0, a = r.length; a > t; ++t) n = r[t],
                                            n.cardId = n.card_id,
                                            n.cardExt = n.card_ext,
                                            n.isSuccess = !!n.is_succ,
                                            delete n.card_id,
                                            delete n.card_ext,
                                            delete n.is_succ;
                                        e.cardList = r,
                                            delete e.card_list
                                    }
                                },
                                    e
                            } ())
                    },
                    chooseCard: function(e) {
                        a("chooseCard", {
                                app_id: P.appId,
                                location_id: e.shopId || "",
                                sign_type: e.signType || "SHA1",
                                card_id: e.cardId || "",
                                card_type: e.cardType || "",
                                card_sign: e.cardSign,
                                time_stamp: e.timestamp + "",
                                nonce_str: e.nonceStr
                            },
                            function() {
                                return e._complete = function(e) {
                                    e.cardList = e.choose_card_info,
                                        delete e.choose_card_info
                                },
                                    e
                            } ())
                    },
                    openCard: function(e) {
                        var t, n, r, o, i = e.cardList,
                            s = [];
                        for (t = 0, n = i.length; n > t; ++t) r = i[t],
                            o = {
                                card_id: r.cardId,
                                code: r.code
                            },
                            s.push(o);
                        a(h.openCard, {
                                card_list: s
                            },
                            e)
                    },
                    chooseWXPay: function(e) {
                        a(h.chooseWXPay, o(e), e)
                    }
                },
            t && (e.wx = e.jWeixin = E),
                E
        }),
    function(e, t) {
        function a(e) {
            var t = e.length,
                a = ce.type(e);
            return ! ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === a || "function" !== a && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
        }
        function n(e) {
            var t = ve[e] = {};
            return ce.each(e.match(ue) || [],
                function(e, a) {
                    t[a] = !0
                }),
                t
        }
        function r(e, a, n, r) {
            if (ce.acceptData(e)) {
                var o, i, s = ce.expando,
                    c = "string" == typeof a,
                    l = e.nodeType,
                    u = l ? ce.cache: e,
                    p = l ? e[s] : e[s] && s;
                if (p && u[p] && (r || u[p].data) || !c || n !== t) return p || (l ? e[s] = p = Z.pop() || ce.guid++:p = s),
                u[p] || (u[p] = {},
                l || (u[p].toJSON = ce.noop)),
                ("object" == typeof a || "function" == typeof a) && (r ? u[p] = ce.extend(u[p], a) : u[p].data = ce.extend(u[p].data, a)),
                    o = u[p],
                r || (o.data || (o.data = {}), o = o.data),
                n !== t && (o[ce.camelCase(a)] = n),
                    c ? null == (i = o[a]) && (i = o[ce.camelCase(a)]) : i = o,
                    i
            }
        }
        function o(e, t, a) {
            if (ce.acceptData(e)) {
                var n, r, o, i = e.nodeType,
                    c = i ? ce.cache: e,
                    l = i ? e[ce.expando] : ce.expando;
                if (c[l]) {
                    if (t && (o = a ? c[l] : c[l].data)) {
                        ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in o ? t = [t] : (t = ce.camelCase(t), t = t in o ? [t] : t.split(" "));
                        for (n = 0, r = t.length; r > n; n++) delete o[t[n]];
                        if (! (a ? s: ce.isEmptyObject)(o)) return
                    } (a || (delete c[l].data, s(c[l]))) && (i ? ce.cleanData([e], !0) : ce.support.deleteExpando || c != c.window ? delete c[l] : c[l] = null)
                }
            }
        }
        function i(e, a, n) {
            if (n === t && 1 === e.nodeType) {
                var r = "data-" + a.replace(be, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: ye.test(n) ? ce.parseJSON(n) : n)
                    } catch(e) {}
                    ce.data(e, a, n)
                } else n = t
            }
            return n
        }
        function s(e) {
            var t;
            for (t in e) if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
            return ! 0
        }
        function c() {
            return ! 0
        }
        function l() {
            return ! 1
        }
        function u(e, t) {
            do {
                e = e[t]
            } while ( e && 1 !== e . nodeType );
            return e
        }
        function p(e, t, a) {
            if (t = t || 0, ce.isFunction(t)) return ce.grep(e,
                function(e, n) {
                    return !! t.call(e, n, e) === a
                });
            if (t.nodeType) return ce.grep(e,
                function(e) {
                    return e === t === a
                });
            if ("string" == typeof t) {
                var n = ce.grep(e,
                    function(e) {
                        return 1 === e.nodeType
                    });
                if ($e.test(t)) return ce.filter(t, n, !a);
                t = ce.filter(t, n)
            }
            return ce.grep(e,
                function(e) {
                    return ce.inArray(e, t) >= 0 === a
                })
        }
        function d(e) {
            var t = Be.split("|"),
                a = e.createDocumentFragment();
            if (a.createElement) for (; t.length;) a.createElement(t.pop());
            return a
        }
        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function h(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type,
                e
        }
        function m(e) {
            var t = Je.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
                e
        }
        function g(e, t) {
            for (var a, n = 0; null != (a = e[n]); n++) ce._data(a, "globalEval", !t || ce._data(t[n], "globalEval"))
        }
        function v(e, t) {
            if (1 === t.nodeType && ce.hasData(e)) {
                var a, n, r, o = ce._data(e),
                    i = ce._data(t, o),
                    s = o.events;
                if (s) {
                    delete i.handle,
                        i.events = {};
                    for (a in s) for (n = 0, r = s[a].length; r > n; n++) ce.event.add(t, a, s[a][n])
                }
                i.data && (i.data = ce.extend({},
                    i.data))
            }
        }
        function y(e, t) {
            var a, n, r;
            if (1 === t.nodeType) {
                if (a = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
                    r = ce._data(t);
                    for (n in r.events) ce.removeEvent(t, n, r.handle);
                    t.removeAttribute(ce.expando)
                }
                "script" === a && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === a ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === a && Xe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === a ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === a || "textarea" === a) && (t.defaultValue = e.defaultValue)
            }
        }
        function b(e, a) {
            var n, r, o = 0,
                i = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(a || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(a || "*") : t;
            if (!i) for (i = [], n = e.childNodes || e; null != (r = n[o]); o++) ! a || ce.nodeName(r, a) ? i.push(r) : ce.merge(i, b(r, a));
            return a === t || a && ce.nodeName(e, a) ? ce.merge([e], i) : i
        }
        function _(e) {
            Xe.test(e.type) && (e.defaultChecked = e.checked)
        }
        function w(e, t) {
            if (t in e) return t;
            for (var a = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = mt.length; r--;) if ((t = mt[r] + a) in e) return t;
            return n
        }
        function D(e, t) {
            return e = t || e,
            "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
        }
        function k(e, t) {
            for (var a, n, r, o = [], i = 0, s = e.length; s > i; i++) n = e[i],
            n.style && (o[i] = ce._data(n, "olddisplay"), a = n.style.display, t ? (o[i] || "none" !== a || (n.style.display = ""), "" === n.style.display && D(n) && (o[i] = ce._data(n, "olddisplay", C(n.nodeName)))) : o[i] || (r = D(n), (a && "none" !== a || !r) && ce._data(n, "olddisplay", r ? a: ce.css(n, "display"))));
            for (i = 0; s > i; i++) n = e[i],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[i] || "": "none"));
            return e
        }
        function x(e, t, a) {
            var n = ct.exec(t);
            return n ? Math.max(0, n[1] - (a || 0)) + (n[2] || "px") : t
        }
        function S(e, t, a, n, r) {
            for (var o = a === (n ? "border": "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > o; o += 2)"margin" === a && (i += ce.css(e, a + ht[o], !0, r)),
                n ? ("content" === a && (i -= ce.css(e, "padding" + ht[o], !0, r)), "margin" !== a && (i -= ce.css(e, "border" + ht[o] + "Width", !0, r))) : (i += ce.css(e, "padding" + ht[o], !0, r), "padding" !== a && (i += ce.css(e, "border" + ht[o] + "Width", !0, r)));
            return i
        }
        function T(e, t, a) {
            var n = !0,
                r = "width" === t ? e.offsetWidth: e.offsetHeight,
                o = tt(e),
                i = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = at(e, t, o), (0 > r || null == r) && (r = e.style[t]), lt.test(r)) return r;
                n = i && (ce.support.boxSizingReliable || r === e.style[t]),
                    r = parseFloat(r) || 0
            }
            return r + S(e, t, a || (i ? "border": "content"), n, o) + "px"
        }
        function C(e) {
            var t = G,
                a = pt[e];
            return a || (a = M(e, t), "none" !== a && a || (et = (et || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (et[0].contentWindow || et[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), a = M(e, t), et.detach()), pt[e] = a),
                a
        }
        function M(e, t) {
            var a = ce(t.createElement(e)).appendTo(t.body),
                n = ce.css(a[0], "display");
            return a.remove(),
                n
        }
        function A(e, t, a, n) {
            var r;
            if (ce.isArray(t)) ce.each(t,
                function(t, r) {
                    a || gt.test(e) ? n(e, r) : A(e + "[" + ("object" == typeof r ? t: "") + "]", r, a, n)
                });
            else if (a || "object" !== ce.type(t)) n(e, t);
            else for (r in t) A(e + "[" + r + "]", t[r], a, n)
        }
        function P(e) {
            return function(t, a) {
                "string" != typeof t && (a = t, t = "*");
                var n, r = 0,
                    o = t.toLowerCase().match(ue) || [];
                if (ce.isFunction(a)) for (; n = o[r++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(a)) : (e[n] = e[n] || []).push(a)
            }
        }
        function I(e, a, n, r) {
            function o(c) {
                var l;
                return i[c] = !0,
                    ce.each(e[c] || [],
                        function(e, c) {
                            var u = c(a, n, r);
                            return "string" != typeof u || s || i[u] ? s ? !(l = u) : t: (a.dataTypes.unshift(u), o(u), !1)
                        }),
                    l
            }
            var i = {},
                s = e === Pt;
            return o(a.dataTypes[0]) || !i["*"] && o("*")
        }
        function N(e, a) {
            var n, r, o = ce.ajaxSettings.flatOptions || {};
            for (r in a) a[r] !== t && ((o[r] ? e: n || (n = {}))[r] = a[r]);
            return n && ce.extend(!0, e, n),
                e
        }
        function E(e, a, n) {
            var r, o, i, s, c = e.contents,
                l = e.dataTypes,
                u = e.responseFields;
            for (s in u) s in n && (a[u[s]] = n[s]);
            for (;
                "*" === l[0];) l.shift(),
            o === t && (o = e.mimeType || a.getResponseHeader("Content-Type"));
            if (o) for (s in c) if (c[s] && c[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0] in n) i = l[0];
            else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        i = s;
                        break
                    }
                    r || (r = s)
                }
                i = i || r
            }
            return i ? (i !== l[0] && l.unshift(i), n[i]) : t
        }
        function O(e, t) {
            var a, n, r, o, i = {},
                s = 0,
                c = e.dataTypes.slice(),
                l = c[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1]) for (r in e.converters) i[r.toLowerCase()] = e.converters[r];
            for (; n = c[++s];) if ("*" !== n) {
                if ("*" !== l && l !== n) {
                    if (! (r = i[l + " " + n] || i["* " + n])) for (a in i) if (o = a.split(" "), o[1] === n && (r = i[l + " " + o[0]] || i["* " + o[0]])) { ! 0 === r ? r = i[a] : !0 !== i[a] && (n = o[0], c.splice(s--, 0, n));
                        break
                    }
                    if (!0 !== r) if (r && e.throws) t = r(t);
                    else try {
                            t = r(t)
                        } catch(e) {
                            return {
                                state: "parsererror",
                                error: r ? e: "No conversion from " + l + " to " + n
                            }
                        }
                }
                l = n
            }
            return {
                state: "success",
                data: t
            }
        }
        function j() {
            try {
                return new e.XMLHttpRequest
            } catch(e) {}
        }
        function $() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch(e) {}
        }
        function L() {
            return setTimeout(function() {
                Rt = t
            }),
                Rt = ce.now()
        }
        function R(e, t) {
            ce.each(t,
                function(t, a) {
                    for (var n = (Wt[t] || []).concat(Wt["*"]), r = 0, o = n.length; o > r; r++) if (n[r].call(e, t, a)) return
                })
        }
        function B(e, t, a) {
            var n, r, o = 0,
                i = qt.length,
                s = ce.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (r) return ! 1;
                    for (var t = Rt || L(), a = Math.max(0, l.startTime + l.duration - t), n = a / l.duration || 0, o = 1 - n, i = 0, c = l.tweens.length; c > i; i++) l.tweens[i].run(o);
                    return s.notifyWith(e, [l, o, a]),
                        1 > o && c ? a: (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: ce.extend({},
                        t),
                    opts: ce.extend(!0, {
                            specialEasing: {}
                        },
                        a),
                    originalProperties: t,
                    originalOptions: a,
                    startTime: Rt || L(),
                    duration: a.duration,
                    tweens: [],
                    createTween: function(t, a) {
                        var n = ce.Tween(e, l.opts, t, a, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(n),
                            n
                    },
                    stop: function(t) {
                        var a = 0,
                            n = t ? l.tweens.length: 0;
                        if (r) return this;
                        for (r = !0; n > a; a++) l.tweens[a].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                            this
                    }
                }),
                u = l.props;
            for (H(u, l.opts.specialEasing); i > o; o++) if (n = qt[o].call(l, e, u, l.opts)) return n;
            return R(l, u),
            ce.isFunction(l.opts.start) && l.opts.start.call(e, l),
                ce.fx.timer(ce.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function H(e, t) {
            var a, n, r, o, i;
            for (r in e) if (n = ce.camelCase(r), o = t[n], a = e[r], ce.isArray(a) && (o = a[1], a = e[r] = a[0]), r !== n && (e[n] = a, delete e[r]), (i = ce.cssHooks[n]) && "expand" in i) {
                a = i.expand(a),
                    delete e[n];
                for (r in a) r in e || (e[r] = a[r], t[r] = o)
            } else t[n] = o
        }
        function V(e, t, a) {
            var n, r, o, i, s, c, l, u, p, d = this,
                f = e.style,
                h = {},
                m = [],
                g = e.nodeType && D(e);
            a.queue || (u = ce._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function() {
                u.unqueued || p()
            }), u.unqueued++, d.always(function() {
                d.always(function() {
                    u.unqueued--,
                    ce.queue(e, "fx").length || u.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (a.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
            a.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || d.always(function() {
                f.overflow = a.overflow[0],
                    f.overflowX = a.overflow[1],
                    f.overflowY = a.overflow[2]
            }));
            for (r in t) if (i = t[r], Ht.exec(i)) {
                if (delete t[r], c = c || "toggle" === i, i === (g ? "hide": "show")) continue;
                m.push(r)
            }
            if (o = m.length) {
                s = ce._data(e, "fxshow") || ce._data(e, "fxshow", {}),
                "hidden" in s && (g = s.hidden),
                c && (s.hidden = !g),
                    g ? ce(e).show() : d.done(function() {
                        ce(e).hide()
                    }),
                    d.done(function() {
                        var t;
                        ce._removeData(e, "fxshow");
                        for (t in h) ce.style(e, t, h[t])
                    });
                for (r = 0; o > r; r++) n = m[r],
                    l = d.createTween(n, g ? s[n] : 0),
                    h[n] = s[n] || ce.style(e, n),
                n in s || (s[n] = l.start, g && (l.end = l.start, l.start = "width" === n || "height" === n ? 1 : 0))
            }
        }
        function F(e, t, a, n, r) {
            return new F.prototype.init(e, t, a, n, r)
        }
        function q(e, t) {
            var a, n = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) a = ht[r],
                n["margin" + a] = n["padding" + a] = e;
            return t && (n.opacity = n.width = e),
                n
        }
        function W(e) {
            return ce.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var U, z, X = typeof t,
            G = e.document,
            Y = e.location,
            J = e.jQuery,
            Q = e.$,
            K = {},
            Z = [],
            ee = "1.9.1",
            te = Z.concat,
            ae = Z.push,
            ne = Z.slice,
            re = Z.indexOf,
            oe = K.toString,
            ie = K.hasOwnProperty,
            se = ee.trim,
            ce = function(e, t) {
                return new ce.fn.init(e, t, z)
            },
            le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ue = /\S+/g,
            pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^[\],:{}\s]*$/,
            he = function(e, t) {
                return t.toUpperCase()
            },
            me = function(e) { (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (ge(), ce.ready())
            },
            ge = function() {
                G.addEventListener ? (G.removeEventListener("DOMContentLoaded", me, !1), e.removeEventListener("load", me, !1)) : (G.detachEvent("onreadystatechange", me), e.detachEvent("onload", me))
            };
        ce.fn = ce.prototype = {
            jquery: ee,
            constructor: ce,
            init: function(e, a, n) {
                var r, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (! (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e)) || !r[1] && a) return ! a || a.jquery ? (a || n).find(e) : this.constructor(a).find(e);
                    if (r[1]) {
                        if (a = a instanceof ce ? a[0] : a, ce.merge(this, ce.parseHTML(r[1], a && a.nodeType ? a.ownerDocument || a: G, !0)), de.test(r[1]) && ce.isPlainObject(a)) for (r in a) ce.isFunction(this[r]) ? this[r](a[r]) : this.attr(r, a[r]);
                        return this
                    }
                    if ((o = G.getElementById(r[2])) && o.parentNode) {
                        if (o.id !== r[2]) return n.find(e);
                        this.length = 1,
                            this[0] = o
                    }
                    return this.context = G,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ne.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ce.merge(this.constructor(), e);
                return t.prevObject = this,
                    t.context = this.context,
                    t
            },
            each: function(e, t) {
                return ce.each(this, e, t)
            },
            ready: function(e) {
                return ce.ready.promise().done(e),
                    this
            },
            slice: function() {
                return this.pushStack(ne.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                    a = +e + (0 > e ? t: 0);
                return this.pushStack(a >= 0 && t > a ? [this[a]] : [])
            },
            map: function(e) {
                return this.pushStack(ce.map(this,
                    function(t, a) {
                        return e.call(t, a, t)
                    }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ae,
            sort: [].sort,
            splice: [].splice
        },
            ce.fn.init.prototype = ce.fn,
            ce.extend = ce.fn.extend = function() {
                var e, a, n, r, o, i, s = arguments[0] || {},
                    c = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
                    c = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), l === c && (s = this, --c); l > c; c++) if (null != (o = arguments[c])) for (r in o) e = s[r],
                    n = o[r],
                s !== n && (u && n && (ce.isPlainObject(n) || (a = ce.isArray(n))) ? (a ? (a = !1, i = e && ce.isArray(e) ? e: []) : i = e && ce.isPlainObject(e) ? e: {},
                    s[r] = ce.extend(u, i, n)) : n !== t && (s[r] = n));
                return s
            },
            ce.extend({
                noConflict: function(t) {
                    return e.$ === ce && (e.$ = Q),
                    t && e.jQuery === ce && (e.jQuery = J),
                        ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ce.readyWait++:ce.ready(!0)
                },
                ready: function(e) {
                    if (!0 === e ? !--ce.readyWait: !ce.isReady) {
                        if (!G.body) return setTimeout(ce.ready);
                        ce.isReady = !0,
                        !0 !== e && --ce.readyWait > 0 || (U.resolveWith(G, [ce]), ce.fn.trigger && ce(G).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ce.type(e)
                },
                isArray: Array.isArray ||
                function(e) {
                    return "array" === ce.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return ! isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? K[oe.call(e)] || "object": typeof e
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return ! 1;
                    try {
                        if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(e) {
                        return ! 1
                    }
                    var a;
                    for (a in e);
                    return a === t || ie.call(e, a)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return ! 1;
                    return ! 0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, a) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (a = t, t = !1),
                        t = t || G;
                    var n = de.exec(e),
                        r = !a && [];
                    return n ? [t.createElement(n[1])] : (n = ce.buildFragment([e], t, r), r && ce(r).remove(), ce.merge([], n.childNodes))
                },
                parseJSON: function(a) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(a) : null === a ? a: "string" == typeof a && (a = ce.trim(a)) && fe.test(a.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? Function("return " + a)() : (ce.error("Invalid JSON: " + a), t)
                },
                parseXML: function(a) {
                    var n, r;
                    if (!a || "string" != typeof a) return null;
                    try {
                        e.DOMParser ? (r = new DOMParser, n = r.parseFromString(a, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(a))
                    } catch(e) {
                        n = t
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + a),
                        n
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ce.trim(t) && (e.execScript ||
                        function(t) {
                            e.eval.call(e, t)
                        })(t)
                },
                camelCase: function(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, he)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r = 0,
                        o = e.length,
                        i = a(e);
                    if (n) {
                        if (i) for (; o > r && !1 !== t.apply(e[r], n); r++);
                        else for (r in e) if (!1 === t.apply(e[r], n)) break
                    } else if (i) for (; o > r && !1 !== t.call(e[r], r, e[r]); r++);
                    else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: se && !se.call("\ufeff ") ?
                    function(e) {
                        return null == e ? "": se.call(e)
                    }: function(e) {
                        return null == e ? "": (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (a(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)),
                        n
                },
                inArray: function(e, t, a) {
                    var n;
                    if (t) {
                        if (re) return re.call(t, e, a);
                        for (n = t.length, a = a ? 0 > a ? Math.max(0, n + a) : a: 0; n > a; a++) if (a in t && t[a] === e) return a
                    }
                    return - 1
                },
                merge: function(e, a) {
                    var n = a.length,
                        r = e.length,
                        o = 0;
                    if ("number" == typeof n) for (; n > o; o++) e[r++] = a[o];
                    else for (; a[o] !== t;) e[r++] = a[o++];
                    return e.length = r,
                        e
                },
                grep: function(e, t, a) {
                    var n, r = [],
                        o = 0,
                        i = e.length;
                    for (a = !!a; i > o; o++) n = !!t(e[o], o),
                    a !== n && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var r, o = 0,
                        i = e.length,
                        s = a(e),
                        c = [];
                    if (s) for (; i > o; o++) null != (r = t(e[o], o, n)) && (c[c.length] = r);
                    else for (o in e) null != (r = t(e[o], o, n)) && (c[c.length] = r);
                    return te.apply([], c)
                },
                guid: 1,
                proxy: function(e, a) {
                    var n, r, o;
                    return "string" == typeof a && (o = e[a], a = e, e = o),
                        ce.isFunction(e) ? (n = ne.call(arguments, 2), r = function() {
                            return e.apply(a || this, n.concat(ne.call(arguments)))
                        },
                            r.guid = e.guid = e.guid || ce.guid++, r) : t
                },
                access: function(e, a, n, r, o, i, s) {
                    var c = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === ce.type(n)) {
                        o = !0;
                        for (c in n) ce.access(e, a, c, n[c], !0, i, s)
                    } else if (r !== t && (o = !0, ce.isFunction(r) || (s = !0), u && (s ? (a.call(e, r), a = null) : (u = a, a = function(e, t, a) {
                            return u.call(ce(e), a)
                        })), a)) for (; l > c; c++) a(e[c], n, s ? r: r.call(e[c], c, a(e[c], n)));
                    return o ? e: u ? a.call(e) : l ? a(e[0], n) : i
                },
                now: function() {
                    return (new Date).getTime()
                }
            }),
            ce.ready.promise = function(t) {
                if (!U) if (U = ce.Deferred(), "complete" === G.readyState) setTimeout(ce.ready);
                else if (G.addEventListener) G.addEventListener("DOMContentLoaded", me, !1),
                    e.addEventListener("load", me, !1);
                else {
                    G.attachEvent("onreadystatechange", me),
                        e.attachEvent("onload", me);
                    var a = !1;
                    try {
                        a = null == e.frameElement && G.documentElement
                    } catch(e) {}
                    a && a.doScroll &&
                    function e() {
                        if (!ce.isReady) {
                            try {
                                a.doScroll("left")
                            } catch(t) {
                                return setTimeout(e, 50)
                            }
                            ge(),
                                ce.ready()
                        }
                    } ()
                }
                return U.promise(t)
            },
            ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                function(e, t) {
                    K["[object " + t + "]"] = t.toLowerCase()
                }),
            z = ce(G);
        var ve = {};
        ce.Callbacks = function(e) {
            e = "string" == typeof e ? ve[e] || n(e) : ce.extend({},
                e);
            var a, r, o, i, s, c, l = [],
                u = !e.once && [],
                p = function(t) {
                    for (r = e.memory && t, o = !0, s = c || 0, c = 0, i = l.length, a = !0; l && i > s; s++) if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                    a = !1,
                    l && (u ? u.length && p(u.shift()) : r ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var t = l.length; (function t(a) {
                                ce.each(a,
                                    function(a, n) {
                                        var r = ce.type(n);
                                        "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && t(n)
                                    })
                            })(arguments),
                                a ? i = l.length: r && (c = t, p(r))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ce.each(arguments,
                            function(e, t) {
                                for (var n; (n = ce.inArray(t, l, n)) > -1;) l.splice(n, 1),
                                a && (i >= n && i--, s >= n && s--)
                            }),
                            this
                    },
                    has: function(e) {
                        return e ? ce.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [],
                            this
                    },
                    disable: function() {
                        return l = u = r = t,
                            this
                    },
                    disabled: function() {
                        return ! l
                    },
                    lock: function() {
                        return u = t,
                        r || d.disable(),
                            this
                    },
                    locked: function() {
                        return ! u
                    },
                    fireWith: function(e, t) {
                        return t = t || [],
                            t = [e, t.slice ? t.slice() : t],
                        !l || o && !u || (a ? u.push(t) : p(t)),
                            this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !! o
                    }
                };
            return d
        },
            ce.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]],
                        a = "pending",
                        n = {
                            state: function() {
                                return a
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments),
                                    this
                            },
                            then: function() {
                                var e = arguments;
                                return ce.Deferred(function(a) {
                                    ce.each(t,
                                        function(t, o) {
                                            var i = o[0],
                                                s = ce.isFunction(e[t]) && e[t];
                                            r[o[1]](function() {
                                                var e = s && s.apply(this, arguments);
                                                e && ce.isFunction(e.promise) ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[i + "With"](this === n ? a.promise() : this, s ? [e] : arguments)
                                            })
                                        }),
                                        e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? ce.extend(e, n) : n
                            }
                        },
                        r = {};
                    return n.pipe = n.then,
                        ce.each(t,
                            function(e, o) {
                                var i = o[2],
                                    s = o[3];
                                n[o[1]] = i.add,
                                s && i.add(function() {
                                        a = s
                                    },
                                    t[1 ^ e][2].disable, t[2][2].lock),
                                    r[o[0]] = function() {
                                        return r[o[0] + "With"](this === r ? n: this, arguments),
                                            this
                                    },
                                    r[o[0] + "With"] = i.fireWith
                            }),
                        n.promise(r),
                    e && e.call(r, r),
                        r
                },
                when: function(e) {
                    var t, a, n, r = 0,
                        o = ne.call(arguments),
                        i = o.length,
                        s = 1 !== i || e && ce.isFunction(e.promise) ? i: 0,
                        c = 1 === s ? e: ce.Deferred(),
                        l = function(e, a, n) {
                            return function(r) {
                                a[e] = this,
                                    n[e] = arguments.length > 1 ? ne.call(arguments) : r,
                                    n === t ? c.notifyWith(a, n) : --s || c.resolveWith(a, n)
                            }
                        };
                    if (i > 1) for (t = Array(i), a = Array(i), n = Array(i); i > r; r++) o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(l(r, n, o)).fail(c.reject).progress(l(r, a, t)) : --s;
                    return s || c.resolveWith(n, o),
                        c.promise()
                }
            }),
            ce.support = function() {
                var t, a, n, r, o, i, s, c, l, u, p = G.createElement("div");
                if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = p.getElementsByTagName("*"), n = p.getElementsByTagName("a")[0], !a || !n || !a.length) return {};
                o = G.createElement("select"),
                    s = o.appendChild(G.createElement("option")),
                    r = p.getElementsByTagName("input")[0],
                    n.style.cssText = "top:1px;float:left;opacity:.5",
                    t = {
                        getSetAttribute: "t" !== p.className,
                        leadingWhitespace: 3 === p.firstChild.nodeType,
                        tbody: !p.getElementsByTagName("tbody").length,
                        htmlSerialize: !!p.getElementsByTagName("link").length,
                        style: /top/.test(n.getAttribute("style")),
                        hrefNormalized: "/a" === n.getAttribute("href"),
                        opacity: /^0.5/.test(n.style.opacity),
                        cssFloat: !!n.style.cssFloat,
                        checkOn: !!r.value,
                        optSelected: s.selected,
                        enctype: !!G.createElement("form").enctype,
                        html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
                        boxModel: "CSS1Compat" === G.compatMode,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0,
                        boxSizingReliable: !0,
                        pixelPosition: !1
                    },
                    r.checked = !0,
                    t.noCloneChecked = r.cloneNode(!0).checked,
                    o.disabled = !0,
                    t.optDisabled = !s.disabled;
                try {
                    delete p.test
                } catch(e) {
                    t.deleteExpando = !1
                }
                r = G.createElement("input"),
                    r.setAttribute("value", ""),
                    t.input = "" === r.getAttribute("value"),
                    r.value = "t",
                    r.setAttribute("type", "radio"),
                    t.radioValue = "t" === r.value,
                    r.setAttribute("checked", "t"),
                    r.setAttribute("name", "t"),
                    i = G.createDocumentFragment(),
                    i.appendChild(r),
                    t.appendChecked = r.checked,
                    t.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
                p.attachEvent && (p.attachEvent("onclick",
                    function() {
                        t.noCloneEvent = !1
                    }), p.cloneNode(!0).click());
                for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) p.setAttribute(c = "on" + u, "t"),
                    t[u + "Bubbles"] = c in e || !1 === p.attributes[c].expando;
                return p.style.backgroundClip = "content-box",
                    p.cloneNode(!0).style.backgroundClip = "",
                    t.clearCloneStyle = "content-box" === p.style.backgroundClip,
                    ce(function() {
                        var a, n, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                            i = G.getElementsByTagName("body")[0];
                        i && (a = G.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(a).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = p.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== i.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                            width: "4px"
                        }).width, n = p.appendChild(G.createElement("div")), n.style.cssText = p.style.cssText = o, n.style.marginRight = n.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof p.style.zoom !== X && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (i.style.zoom = 1)), i.removeChild(a), a = p = r = n = null)
                    }),
                    a = o = i = s = n = r = null,
                    t
            } ();
        var ye = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            be = /([A-Z])/g;
        ce.extend({
            cache: {},
            expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return !! (e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando]) && !s(e)
            },
            data: function(e, t, a) {
                return r(e, t, a)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, a) {
                return r(e, t, a, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
                var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
                return ! t || !0 !== t && e.getAttribute("classid") === t
            }
        }),
            ce.fn.extend({
                data: function(e, a) {
                    var n, r, o = this[0],
                        s = 0,
                        c = null;
                    if (e === t) {
                        if (this.length && (c = ce.data(o), 1 === o.nodeType && !ce._data(o, "parsedAttrs"))) {
                            for (n = o.attributes; n.length > s; s++) r = n[s].name,
                            r.indexOf("data-") || (r = ce.camelCase(r.slice(5)), i(o, r, c[r]));
                            ce._data(o, "parsedAttrs", !0)
                        }
                        return c
                    }
                    return "object" == typeof e ? this.each(function() {
                        ce.data(this, e)
                    }) : ce.access(this,
                        function(a) {
                            return a === t ? o ? i(o, e, ce.data(o, e)) : null: (this.each(function() {
                                ce.data(this, e, a)
                            }), t)
                        },
                        null, a, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        ce.removeData(this, e)
                    })
                }
            }),
            ce.extend({
                queue: function(e, a, n) {
                    var r;
                    return e ? (a = (a || "fx") + "queue", r = ce._data(e, a), n && (!r || ce.isArray(n) ? r = ce._data(e, a, ce.makeArray(n)) : r.push(n)), r || []) : t
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var a = ce.queue(e, t),
                        n = a.length,
                        r = a.shift(),
                        o = ce._queueHooks(e, t),
                        i = function() {
                            ce.dequeue(e, t)
                        };
                    "inprogress" === r && (r = a.shift(), n--),
                        o.cur = r,
                    r && ("fx" === t && a.unshift("inprogress"), delete o.stop, r.call(e, i, o)),
                    !n && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var a = t + "queueHooks";
                    return ce._data(e, a) || ce._data(e, a, {
                        empty: ce.Callbacks("once memory").add(function() {
                            ce._removeData(e, t + "queue"),
                                ce._removeData(e, a)
                        })
                    })
                }
            }),
            ce.fn.extend({
                queue: function(e, a) {
                    var n = 2;
                    return "string" != typeof e && (a = e, e = "fx", n--),
                        n > arguments.length ? ce.queue(this[0], e) : a === t ? this: this.each(function() {
                            var t = ce.queue(this, e, a);
                            ce._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
                        })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ce.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = ce.fx ? ce.fx.speeds[e] || e: e,
                        t = t || "fx",
                        this.queue(t,
                            function(t, a) {
                                var n = setTimeout(t, e);
                                a.stop = function() {
                                    clearTimeout(n)
                                }
                            })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, a) {
                    var n, r = 1,
                        o = ce.Deferred(),
                        i = this,
                        s = this.length,
                        c = function() {--r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (a = e, e = t), e = e || "fx"; s--;)(n = ce._data(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(c));
                    return c(),
                        o.promise(a)
                }
            });
        var _e, we, De = /[\t\r\n]/g,
            ke = /^(?:input|select|textarea|button|object)$/i,
            xe = /^(?:a|area)$/i,
            Se = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Te = /^(?:checked|selected)$/i,
            Ce = ce.support.getSetAttribute,
            Me = ce.support.input;
        ce.fn.extend({
            attr: function(e, t) {
                return ce.access(this, ce.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ce.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ce.access(this, ce.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ce.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch(e) {}
                    })
            },
            addClass: function(e) {
                var t, a, n, r, o, i = 0,
                    s = this.length,
                    c = "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).addClass(e.call(this, t, this.className))
                });
                if (c) for (t = (e || "").match(ue) || []; s > i; i++) if (a = this[i], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(De, " ") : " ")) {
                    for (o = 0; r = t[o++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
                    a.className = ce.trim(n)
                }
                return this
            },
            removeClass: function(e) {
                var t, a, n, r, o, i = 0,
                    s = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).removeClass(e.call(this, t, this.className))
                });
                if (c) for (t = (e || "").match(ue) || []; s > i; i++) if (a = this[i], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(De, " ") : "")) {
                    for (o = 0; r = t[o++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                    a.className = e ? ce.trim(n) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var a = typeof e,
                    n = "boolean" == typeof t;
                return ce.isFunction(e) ? this.each(function(a) {
                    ce(this).toggleClass(e.call(this, a, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === a) for (var r, o = 0,
                                                 i = ce(this), s = t, c = e.match(ue) || []; r = c[o++];) s = n ? s: !i.hasClass(r),
                        i[s ? "addClass": "removeClass"](r);
                    else(a === X || "boolean" === a) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "": ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ",
                         a = 0,
                         n = this.length; n > a; a++) if (1 === this[a].nodeType && (" " + this[a].className + " ").replace(De, " ").indexOf(t) >= 0) return ! 0;
                return ! 1
            },
            val: function(e) {
                var a, n, r, o = this[0];
                return arguments.length ? (r = ce.isFunction(e), this.each(function(a) {
                    var o, i = ce(this);
                    1 === this.nodeType && (o = r ? e.call(this, a, i.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ce.isArray(o) && (o = ce.map(o,
                        function(e) {
                            return null == e ? "": e + ""
                        })), (n = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (n = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (a = n.get(o, "value")) !== t ? a: (a = o.value, "string" == typeof a ? a.replace(/\r/g, "") : null == a ? "": a)) : void 0
            }
        }),
            ce.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return ! t || t.specified ? e.value: e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, a, n = e.options,
                                     r = e.selectedIndex,
                                     o = "select-one" === e.type || 0 > r,
                                     i = o ? null: [], s = o ? r + 1 : n.length, c = 0 > r ? s: o ? r: 0; s > c; c++) if (a = n[c], !(!a.selected && c !== r || (ce.support.optDisabled ? a.disabled: null !== a.getAttribute("disabled")) || a.parentNode.disabled && ce.nodeName(a.parentNode, "optgroup"))) {
                                if (t = ce(a).val(), o) return t;
                                i.push(t)
                            }
                            return i
                        },
                        set: function(e, t) {
                            var a = ce.makeArray(t);
                            return ce(e).find("option").each(function() {
                                this.selected = ce.inArray(ce(this).val(), a) >= 0
                            }),
                            a.length || (e.selectedIndex = -1),
                                a
                        }
                    }
                },
                attr: function(e, a, n) {
                    var r, o, i, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === X ? ce.prop(e, a, n) : (o = 1 !== s || !ce.isXMLDoc(e), o && (a = a.toLowerCase(), r = ce.attrHooks[a] || (Se.test(a) ? we: _e)), n === t ? r && o && "get" in r && null !== (i = r.get(e, a)) ? i: (typeof e.getAttribute !== X && (i = e.getAttribute(a)), null == i ? t: i) : null !== n ? r && o && "set" in r && (i = r.set(e, n, a)) !== t ? i: (e.setAttribute(a, n + ""), n) : (ce.removeAttr(e, a), t))
                },
                removeAttr: function(e, t) {
                    var a, n, r = 0,
                        o = t && t.match(ue);
                    if (o && 1 === e.nodeType) for (; a = o[r++];) n = ce.propFix[a] || a,
                        Se.test(a) ? !Ce && Te.test(a) ? e[ce.camelCase("default-" + a)] = e[n] = !1 : e[n] = !1 : ce.attr(e, a, ""),
                        e.removeAttribute(Ce ? a: n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                                var a = e.value;
                                return e.setAttribute("type", t),
                                a && (e.value = a),
                                    t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, a, n) {
                    var r, o, i, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return i = 1 !== s || !ce.isXMLDoc(e),
                    i && (a = ce.propFix[a] || a, o = ce.propHooks[a]),
                        n !== t ? o && "set" in o && (r = o.set(e, n, a)) !== t ? r: e[a] = n: o && "get" in o && null !== (r = o.get(e, a)) ? r: e[a]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var a = e.getAttributeNode("tabindex");
                            return a && a.specified ? parseInt(a.value, 10) : ke.test(e.nodeName) || xe.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }),
            we = {
                get: function(e, a) {
                    var n = ce.prop(e, a),
                        r = "boolean" == typeof n && e.getAttribute(a),
                        o = "boolean" == typeof n ? Me && Ce ? null != r: Te.test(a) ? e[ce.camelCase("default-" + a)] : !!r: e.getAttributeNode(a);
                    return o && !1 !== o.value ? a.toLowerCase() : t
                },
                set: function(e, t, a) {
                    return ! 1 === t ? ce.removeAttr(e, a) : Me && Ce || !Te.test(a) ? e.setAttribute(!Ce && ce.propFix[a] || a, a) : e[ce.camelCase("default-" + a)] = e[a] = !0,
                        a
                }
            },
        Me && Ce || (ce.attrHooks.value = {
            get: function(e, a) {
                var n = e.getAttributeNode(a);
                return ce.nodeName(e, "input") ? e.defaultValue: n && n.specified ? n.value: t
            },
            set: function(e, a, n) {
                return ce.nodeName(e, "input") ? (e.defaultValue = a, t) : _e && _e.set(e, a, n)
            }
        }),
        Ce || (_e = ce.valHooks.button = {
            get: function(e, a) {
                var n = e.getAttributeNode(a);
                return n && ("id" === a || "name" === a || "coords" === a ? "" !== n.value: n.specified) ? n.value: t
            },
            set: function(e, a, n) {
                var r = e.getAttributeNode(n);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                    r.value = a += "",
                    "value" === n || a === e.getAttribute(n) ? a: t
            }
        },
            ce.attrHooks.contenteditable = {
                get: _e.get,
                set: function(e, t, a) {
                    _e.set(e, "" !== t && t, a)
                }
            },
            ce.each(["width", "height"],
                function(e, a) {
                    ce.attrHooks[a] = ce.extend(ce.attrHooks[a], {
                        set: function(e, n) {
                            return "" === n ? (e.setAttribute(a, "auto"), n) : t
                        }
                    })
                })),
        ce.support.hrefNormalized || (ce.each(["href", "src", "width", "height"],
            function(e, a) {
                ce.attrHooks[a] = ce.extend(ce.attrHooks[a], {
                    get: function(e) {
                        var n = e.getAttribute(a, 2);
                        return null == n ? t: n
                    }
                })
            }), ce.each(["href", "src"],
            function(e, t) {
                ce.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })),
        ce.support.style || (ce.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        ce.support.optSelected || (ce.propHooks.selected = ce.extend(ce.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        ce.support.enctype || (ce.propFix.enctype = "encoding"),
        ce.support.checkOn || ce.each(["radio", "checkbox"],
            function() {
                ce.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on": e.value
                    }
                }
            }),
            ce.each(["radio", "checkbox"],
                function() {
                    ce.valHooks[this] = ce.extend(ce.valHooks[this], {
                        set: function(e, a) {
                            return ce.isArray(a) ? e.checked = ce.inArray(ce(e).val(), a) >= 0 : t
                        }
                    })
                });
        var Ae = /^(?:input|select|textarea)$/i,
            Pe = /^key/,
            Ie = /^(?:mouse|contextmenu)|click/,
            Ne = /^(?:focusinfocus|focusoutblur)$/,
            Ee = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(e, a, n, r, o) {
                var i, s, c, l, u, p, d, f, h, m, g, v = ce._data(e);
                if (v) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ce.guid++), (s = v.events) || (s = v.events = {}), (p = v.handle) || (p = v.handle = function(e) {
                        return typeof ce === X || e && ce.event.triggered === e.type ? t: ce.event.dispatch.apply(p.elem, arguments)
                    },
                        p.elem = e), a = (a || "").match(ue) || [""], c = a.length; c--;) i = Ee.exec(a[c]) || [],
                        h = g = i[1],
                        m = (i[2] || "").split(".").sort(),
                        u = ce.event.special[h] || {},
                        h = (o ? u.delegateType: u.bindType) || h,
                        u = ce.event.special[h] || {},
                        d = ce.extend({
                                type: h,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && ce.expr.match.needsContext.test(o),
                                namespace: m.join(".")
                            },
                            l),
                    (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, m, p) || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))),
                    u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                        o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                        ce.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, a, n, r) {
                var o, i, s, c, l, u, p, d, f, h, m, g = ce.hasData(e) && ce._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(ue) || [""], l = t.length; l--;) if (s = Ee.exec(t[l]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (p = ce.event.special[f] || {},
                                 f = (n ? p.delegateType: p.bindType) || f, d = u[f] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = d.length; o--;) i = d[o],
                        !r && m !== i.origType || a && a.guid !== i.guid || s && !s.test(i.namespace) || n && n !== i.selector && ("**" !== n || !i.selector) || (d.splice(o, 1), i.selector && d.delegateCount--, p.remove && p.remove.call(e, i));
                        c && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || ce.removeEvent(e, f, g.handle), delete u[f])
                    } else for (f in u) ce.event.remove(e, f + t[l], a, n, !0);
                    ce.isEmptyObject(u) && (delete g.handle, ce._removeData(e, "events"))
                }
            },
            trigger: function(a, n, r, o) {
                var i, s, c, l, u, p, d, f = [r || G],
                    h = ie.call(a, "type") ? a.type: a,
                    m = ie.call(a, "namespace") ? a.namespace.split(".") : [];
                if (c = p = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Ne.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, a = a[ce.expando] ? a: new ce.Event(h, "object" == typeof a && a), a.isTrigger = !0, a.namespace = m.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = t, a.target || (a.target = r), n = null == n ? [a] : ce.makeArray(n, [a]), u = ce.event.special[h] || {},
                    o || !u.trigger || !1 !== u.trigger.apply(r, n))) {
                    if (!o && !u.noBubble && !ce.isWindow(r)) {
                        for (l = u.delegateType || h, Ne.test(l + h) || (c = c.parentNode); c; c = c.parentNode) f.push(c),
                            p = c;
                        p === (r.ownerDocument || G) && f.push(p.defaultView || p.parentWindow || e)
                    }
                    for (d = 0; (c = f[d++]) && !a.isPropagationStopped();) a.type = d > 1 ? l: u.bindType || h,
                        i = (ce._data(c, "events") || {})[a.type] && ce._data(c, "handle"),
                    i && i.apply(c, n),
                    (i = s && c[s]) && ce.acceptData(c) && i.apply && !1 === i.apply(c, n) && a.preventDefault();
                    if (a.type = h, !(o || a.isDefaultPrevented() || u._default && !1 !== u._default.apply(r.ownerDocument, n) || "click" === h && ce.nodeName(r, "a") || !ce.acceptData(r) || !s || !r[h] || ce.isWindow(r))) {
                        p = r[s],
                        p && (r[s] = null),
                            ce.event.triggered = h;
                        try {
                            r[h]()
                        } catch(e) {}
                        ce.event.triggered = t,
                        p && (r[s] = p)
                    }
                    return a.result
                }
            },
            dispatch: function(e) {
                e = ce.event.fix(e);
                var a, n, r, o, i, s = [],
                    c = ne.call(arguments),
                    l = (ce._data(this, "events") || {})[e.type] || [],
                    u = ce.event.special[e.type] || {};
                if (c[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (s = ce.event.handlers.call(this, e, l), a = 0; (o = s[a++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, (n = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, c)) !== t && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e),
                        e.result
                }
            },
            handlers: function(e, a) {
                var n, r, o, i, s = [],
                    c = a.delegateCount,
                    l = e.target;
                if (c && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                    for (o = [], i = 0; c > i; i++) r = a[i],
                        n = r.selector + " ",
                    o[n] === t && (o[n] = r.needsContext ? ce(n, this).index(l) >= 0 : ce.find(n, this, null, [l]).length),
                    o[n] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    })
                }
                return a.length > c && s.push({
                    elem: this,
                    handlers: a.slice(c)
                }),
                    s
            },
            fix: function(e) {
                if (e[ce.expando]) return e;
                var t, a, n, r = e.type,
                    o = e,
                    i = this.fixHooks[r];
                for (i || (this.fixHooks[r] = i = Ie.test(r) ? this.mouseHooks: Pe.test(r) ? this.keyHooks: {}), n = i.props ? this.props.concat(i.props) : this.props, e = new ce.Event(o), t = n.length; t--;) a = n[t],
                    e[a] = o[a];
                return e.target || (e.target = o.srcElement || G),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    i.filter ? i.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, a) {
                    var n, r, o, i = a.button,
                        s = a.fromElement;
                    return null == e.pageX && null != a.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, n = r.body, e.pageX = a.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = a.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && s && (e.relatedTarget = s === e.target ? a.toElement: s),
                    e.which || i === t || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                        e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== G.activeElement && this.focus) try {
                            return this.focus(),
                                !1
                        } catch(e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === G.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, a, n) {
                var r = ce.extend(new ce.Event, a, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? ce.event.trigger(r, null, t) : ce.event.dispatch.call(t, r),
                r.isDefaultPrevented() && a.preventDefault()
            }
        },
            ce.removeEvent = G.removeEventListener ?
                function(e, t, a) {
                    e.removeEventListener && e.removeEventListener(t, a, !1)
                }: function(e, t, a) {
                    var n = "on" + t;
                    e.detachEvent && (typeof e[n] === X && (e[n] = null), e.detachEvent(n, a))
                },
            ce.Event = function(e, a) {
                return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? c: l) : this.type = e, a && ce.extend(this, a), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0, t) : new ce.Event(e, a)
            },
            ce.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c,
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = c,
                        this.stopPropagation()
                }
            },
            ce.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                function(e, t) {
                    ce.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var a, n = this,
                                r = e.relatedTarget,
                                o = e.handleObj;
                            return (!r || r !== n && !ce.contains(n, r)) && (e.type = o.origType, a = o.handler.apply(this, arguments), e.type = t),
                                a
                        }
                    }
                }),
        ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ! ce.nodeName(this, "form") && (ce.event.add(this, "click._submit keypress._submit",
                    function(e) {
                        var a = e.target,
                            n = ce.nodeName(a, "input") || ce.nodeName(a, "button") ? a.form: t;
                        n && !ce._data(n, "submitBubbles") && (ce.event.add(n, "submit._submit",
                            function(e) {
                                e._submit_bubble = !0
                            }), ce._data(n, "submitBubbles", !0))
                    }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ! ce.nodeName(this, "form") && (ce.event.remove(this, "._submit"), t)
            }
        }),
        ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change",
                    function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), ce.event.add(this, "click._change",
                    function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            ce.event.simulate("change", this, e, !0)
                    })), !1) : (ce.event.add(this, "beforeactivate._change",
                    function(e) {
                        var t = e.target;
                        Ae.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change",
                            function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                            }), ce._data(t, "changeBubbles", !0))
                    }), t)
            },
            handle: function(e) {
                var a = e.target;
                return this !== a || e.isSimulated || e.isTrigger || "radio" !== a.type && "checkbox" !== a.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ce.event.remove(this, "._change"),
                    !Ae.test(this.nodeName)
            }
        }),
        ce.support.focusinBubbles || ce.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                var a = 0,
                    n = function(e) {
                        ce.event.simulate(t, e.target, ce.event.fix(e), !0)
                    };
                ce.event.special[t] = {
                    setup: function() {
                        0 == a++&&G.addEventListener(e, n, !0)
                    },
                    teardown: function() {
                        0 == --a && G.removeEventListener(e, n, !0)
                    }
                }
            }),
            ce.fn.extend({
                on: function(e, a, n, r, o) {
                    var i, s;
                    if ("object" == typeof e) {
                        "string" != typeof a && (n = n || a, a = t);
                        for (i in e) this.on(i, a, n, e[i], o);
                        return this
                    }
                    if (null == n && null == r ? (r = a, n = a = t) : null == r && ("string" == typeof a ? (r = n, n = t) : (r = n, n = a, a = t)), !1 === r) r = l;
                    else if (!r) return this;
                    return 1 === o && (s = r, r = function(e) {
                        return ce().off(e),
                            s.apply(this, arguments)
                    },
                        r.guid = s.guid || (s.guid = ce.guid++)),
                        this.each(function() {
                            ce.event.add(this, e, r, n, a)
                        })
                },
                one: function(e, t, a, n) {
                    return this.on(e, t, a, n, 1)
                },
                off: function(e, a, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                        ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                        this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, a, e[o]);
                        return this
                    }
                    return (!1 === a || "function" == typeof a) && (n = a, a = t),
                    !1 === n && (n = l),
                        this.each(function() {
                            ce.event.remove(this, e, n, a)
                        })
                },
                bind: function(e, t, a) {
                    return this.on(e, null, t, a)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, a, n) {
                    return this.on(t, e, a, n)
                },
                undelegate: function(e, t, a) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        ce.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, a) {
                    var n = this[0];
                    return n ? ce.event.trigger(e, a, n, !0) : t
                }
            }),
            function(e, t) {
                function a(e) {
                    return pe.test(e + "")
                }
                function n() {
                    var e, t = [];
                    return e = function(a, n) {
                        return t.push(a += " ") > D.cacheLength && delete e[t.shift()],
                            e[a] = n
                    }
                }
                function r(e) {
                    return e[L] = !0,
                        e
                }
                function o(e) {
                    var t = A.createElement("div");
                    try {
                        return e(t)
                    } catch(e) {
                        return ! 1
                    } finally {
                        t = null
                    }
                }
                function i(e, t, a, n) {
                    var r, o, i, s, c, p, d, f, h, m;
                    if ((t ? t.ownerDocument || t: R) !== A && M(t), t = t || A, a = a || [], !e || "string" != typeof e) return a;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (!I && !n) {
                        if (r = de.exec(e)) if (i = r[1]) {
                            if (9 === s) {
                                if (! (o = t.getElementById(i)) || !o.parentNode) return a;
                                if (o.id === i) return a.push(o),
                                    a
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(i)) && j(t, o) && o.id === i) return a.push(o),
                                a
                        } else {
                            if (r[2]) return Y.apply(a, J.call(t.getElementsByTagName(e), 0)),
                                a;
                            if ((i = r[3]) && B.getByClassName && t.getElementsByClassName) return Y.apply(a, J.call(t.getElementsByClassName(i), 0)),
                                a
                        }
                        if (B.qsa && !N.test(e)) {
                            if (d = !0, f = L, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (p = l(e), (d = t.getAttribute("id")) ? f = d.replace(me, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = p.length; c--;) p[c] = f + u(p[c]);
                                h = ue.test(e) && t.parentNode || t,
                                    m = p.join(",")
                            }
                            if (m) try {
                                return Y.apply(a, J.call(h.querySelectorAll(m), 0)),
                                    a
                            } catch(e) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return y(e.replace(ne, "$1"), t, a, n)
                }
                function s(e, t) {
                    var a = t && e,
                        n = a && (~t.sourceIndex || z) - (~e.sourceIndex || z);
                    if (n) return n;
                    if (a) for (; a = a.nextSibling;) if (a === t) return - 1;
                    return e ? 1 : -1
                }
                function c(e) {
                    return r(function(t) {
                        return t = +t,
                            r(function(a, n) {
                                for (var r, o = e([], a.length, t), i = o.length; i--;) a[r = o[i]] && (a[r] = !(n[r] = a[r]))
                            })
                    })
                }
                function l(e, t) {
                    var a, n, r, o, s, c, l, u = q[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, c = [], l = D.preFilter; s;) { (!a || (n = re.exec(s))) && (n && (s = s.slice(n[0].length) || s), c.push(r = [])),
                        a = !1,
                    (n = oe.exec(s)) && (a = n.shift(), r.push({
                        value: a,
                        type: n[0].replace(ne, " ")
                    }), s = s.slice(a.length));
                        for (o in D.filter) ! (n = le[o].exec(s)) || l[o] && !(n = l[o](n)) || (a = n.shift(), r.push({
                            value: a,
                            type: o,
                            matches: n
                        }), s = s.slice(a.length));
                        if (!a) break
                    }
                    return t ? s.length: s ? i.error(e) : q(e, c).slice(0)
                }
                function u(e) {
                    for (var t = 0,
                             a = e.length,
                             n = ""; a > t; t++) n += e[t].value;
                    return n
                }
                function p(e, t, a) {
                    var n = t.dir,
                        r = a && "parentNode" === n,
                        o = V++;
                    return t.first ?
                        function(t, a, o) {
                            for (; t = t[n];) if (1 === t.nodeType || r) return e(t, a, o)
                        }: function(t, a, i) {
                            var s, c, l, u = H + " " + o;
                            if (i) {
                                for (; t = t[n];) if ((1 === t.nodeType || r) && e(t, a, i)) return ! 0
                            } else for (; t = t[n];) if (1 === t.nodeType || r) if (l = t[L] || (t[L] = {}), (c = l[n]) && c[0] === u) {
                                if (!0 === (s = c[1]) || s === w) return ! 0 === s
                            } else if (c = l[n] = [u], c[1] = e(t, a, i) || w, !0 === c[1]) return ! 0
                        }
                }
                function d(e) {
                    return e.length > 1 ?
                        function(t, a, n) {
                            for (var r = e.length; r--;) if (!e[r](t, a, n)) return ! 1;
                            return ! 0
                        }: e[0]
                }
                function f(e, t, a, n, r) {
                    for (var o, i = [], s = 0, c = e.length, l = null != t; c > s; s++)(o = e[s]) && (!a || a(o, n, r)) && (i.push(o), l && t.push(s));
                    return i
                }
                function h(e, t, a, n, o, i) {
                    return n && !n[L] && (n = h(n)),
                    o && !o[L] && (o = h(o, i)),
                        r(function(r, i, s, c) {
                            var l, u, p, d = [],
                                h = [],
                                m = i.length,
                                g = r || v(t || "*", s.nodeType ? [s] : s, []),
                                y = !e || !r && t ? g: f(g, d, e, s, c),
                                b = a ? o || (r ? e: m || n) ? [] : i: y;
                            if (a && a(y, b, s, c), n) for (l = f(b, h), n(l, [], s, c), u = l.length; u--;)(p = l[u]) && (b[h[u]] = !(y[h[u]] = p));
                            if (r) {
                                if (o || e) {
                                    if (o) {
                                        for (l = [], u = b.length; u--;)(p = b[u]) && l.push(y[u] = p);
                                        o(null, b = [], l, c)
                                    }
                                    for (u = b.length; u--;)(p = b[u]) && (l = o ? Q.call(r, p) : d[u]) > -1 && (r[l] = !(i[l] = p))
                                }
                            } else b = f(b === i ? b.splice(m, b.length) : b),
                                o ? o(null, i, b, c) : Y.apply(i, b)
                        })
                }
                function m(e) {
                    for (var t, a, n, r = e.length,
                             o = D.relative[e[0].type], i = o || D.relative[" "], s = o ? 1 : 0, c = p(function(e) {
                                return e === t
                            },
                            i, !0), l = p(function(e) {
                                return Q.call(t, e) > -1
                            },
                            i, !0), f = [function(e, a, n) {
                            return ! o && (n || a !== C) || ((t = a).nodeType ? c(e, a, n) : l(e, a, n))
                        }]; r > s; s++) if (a = D.relative[e[s].type]) f = [p(d(f), a)];
                    else {
                        if (a = D.filter[e[s].type].apply(null, e[s].matches), a[L]) {
                            for (n = ++s; r > n && !D.relative[e[n].type]; n++);
                            return h(s > 1 && d(f), s > 1 && u(e.slice(0, s - 1)).replace(ne, "$1"), a, n > s && m(e.slice(s, n)), r > n && m(e = e.slice(n)), r > n && u(e))
                        }
                        f.push(a)
                    }
                    return d(f)
                }
                function g(e, t) {
                    var a = 0,
                        n = t.length > 0,
                        o = e.length > 0,
                        s = function(r, s, c, l, u) {
                            var p, d, h, m = [],
                                g = 0,
                                v = "0",
                                y = r && [],
                                b = null != u,
                                _ = C,
                                k = r || o && D.find.TAG("*", u && s.parentNode || s),
                                x = H += null == _ ? 1 : Math.random() || .1;
                            for (b && (C = s !== A && s, w = a); null != (p = k[v]); v++) {
                                if (o && p) {
                                    for (d = 0; h = e[d++];) if (h(p, s, c)) {
                                        l.push(p);
                                        break
                                    }
                                    b && (H = x, w = ++a)
                                }
                                n && ((p = !h && p) && g--, r && y.push(p))
                            }
                            if (g += v, n && v !== g) {
                                for (d = 0; h = t[d++];) h(y, m, s, c);
                                if (r) {
                                    if (g > 0) for (; v--;) y[v] || m[v] || (m[v] = G.call(l));
                                    m = f(m)
                                }
                                Y.apply(l, m),
                                b && !r && m.length > 0 && g + t.length > 1 && i.uniqueSort(l)
                            }
                            return b && (H = x, C = _),
                                y
                        };
                    return n ? r(s) : s
                }
                function v(e, t, a) {
                    for (var n = 0,
                             r = t.length; r > n; n++) i(e, t[n], a);
                    return a
                }
                function y(e, t, a, n) {
                    var r, o, i, s, c, p = l(e);
                    if (!n && 1 === p.length) {
                        if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && 9 === t.nodeType && !I && D.relative[o[1].type]) {
                            if (! (t = D.find.ID(i.matches[0].replace(ge, ve), t)[0])) return a;
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = le.needsContext.test(e) ? 0 : o.length; r--&&(i = o[r], !D.relative[s = i.type]);) if ((c = D.find[s]) && (n = c(i.matches[0].replace(ge, ve), ue.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(r, 1), !(e = n.length && u(o))) return Y.apply(a, J.call(n, 0)),
                                a;
                            break
                        }
                    }
                    return S(e, p)(n, t, I, a, ue.test(e)),
                        a
                }
                function b() {}
                var _, w, D, k, x, S, T, C, M, A, P, I, N, E, O, j, $, L = "sizzle" + -new Date,
                    R = e.document,
                    B = {},
                    H = 0,
                    V = 0,
                    F = n(),
                    q = n(),
                    W = n(),
                    U = typeof t,
                    z = 1 << 31,
                    X = [],
                    G = X.pop,
                    Y = X.push,
                    J = X.slice,
                    Q = X.indexOf ||
                        function(e) {
                            for (var t = 0,
                                     a = this.length; a > t; t++) if (this[t] === e) return t;
                            return - 1
                        },
                    K = "[\\x20\\t\\r\\n\\f]",
                    Z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ee = Z.replace("w", "w#"),
                    te = "\\[" + K + "*(" + Z + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + K + "*\\]",
                    ae = ":(" + Z + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)",
                    ne = RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
                    re = RegExp("^" + K + "*," + K + "*"),
                    oe = RegExp("^" + K + "*([\\x20\\t\\r\\n\\f>+~])" + K + "*"),
                    ie = RegExp(ae),
                    se = RegExp("^" + ee + "$"),
                    le = {
                        ID: RegExp("^#(" + Z + ")"),
                        CLASS: RegExp("^\\.(" + Z + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + Z + ")['\"]?\\]"),
                        TAG: RegExp("^(" + Z.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + te),
                        PSEUDO: RegExp("^" + ae),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                        needsContext: RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ue = /[\x20\t\r\n\f]*[+~]/,
                    pe = /^[^{]+\{\s*\[native code/,
                    de = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    fe = /^(?:input|select|textarea|button)$/i,
                    he = /^h\d$/i,
                    me = /'|\\/g,
                    ge = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    ve = function(e, t) {
                        var a = "0x" + t - 65536;
                        return a !== a ? t: 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    };
                try {
                    J.call(R.documentElement.childNodes, 0)[0].nodeType
                } catch(e) {
                    J = function(e) {
                        for (var t, a = []; t = this[e++];) a.push(t);
                        return a
                    }
                }
                x = i.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !! t && "HTML" !== t.nodeName
                },
                    M = i.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e: R;
                        return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, P = n.documentElement, I = x(n), B.tagNameNoComments = o(function(e) {
                            return e.appendChild(n.createComment("")),
                                !e.getElementsByTagName("*").length
                        }), B.attributes = o(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }), B.getByClassName = o(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                            !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                        }), B.getByName = o(function(e) {
                            e.id = L + 0,
                                e.innerHTML = "<a name='" + L + "'></a><div name='" + L + "'></div>",
                                P.insertBefore(e, P.firstChild);
                            var t = n.getElementsByName && n.getElementsByName(L).length === 2 + n.getElementsByName(L + 0).length;
                            return B.getIdNotName = !n.getElementById(L),
                                P.removeChild(e),
                                t
                        }), D.attrHandle = o(function(e) {
                            return e.innerHTML = "<a href='#'></a>",
                            e.firstChild && typeof e.firstChild.getAttribute !== U && "#" === e.firstChild.getAttribute("href")
                        }) ? {}: {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                            B.getIdNotName ? (D.find.ID = function(e, t) {
                                if (typeof t.getElementById !== U && !I) {
                                    var a = t.getElementById(e);
                                    return a && a.parentNode ? [a] : []
                                }
                            },
                                D.filter.ID = function(e) {
                                    var t = e.replace(ge, ve);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }) : (D.find.ID = function(e, a) {
                                if (typeof a.getElementById !== U && !I) {
                                    var n = a.getElementById(e);
                                    return n ? n.id === e || typeof n.getAttributeNode !== U && n.getAttributeNode("id").value === e ? [n] : t: []
                                }
                            },
                                D.filter.ID = function(e) {
                                    var t = e.replace(ge, ve);
                                    return function(e) {
                                        var a = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                                        return a && a.value === t
                                    }
                                }), D.find.TAG = B.tagNameNoComments ?
                            function(e, a) {
                                return typeof a.getElementsByTagName !== U ? a.getElementsByTagName(e) : t
                            }: function(e, t) {
                                var a, n = [],
                                    r = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; a = o[r++];) 1 === a.nodeType && n.push(a);
                                    return n
                                }
                                return o
                            },
                            D.find.NAME = B.getByName &&
                                function(e, a) {
                                    return typeof a.getElementsByName !== U ? a.getElementsByName(name) : t
                                },
                            D.find.CLASS = B.getByClassName &&
                                function(e, a) {
                                    return typeof a.getElementsByClassName === U || I ? t: a.getElementsByClassName(e)
                                },
                            E = [], N = [":focus"], (B.qsa = a(n.querySelectorAll)) && (o(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>",
                            e.querySelectorAll("[selected]").length || N.push("\\[" + K + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                            e.querySelectorAll(":checked").length || N.push(":checked")
                        }), o(function(e) {
                            e.innerHTML = "<input type='hidden' i=''/>",
                            e.querySelectorAll("[i^='']").length && N.push("[*^$]=" + K + "*(?:\"\"|'')"),
                            e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                N.push(",.*:")
                        })), (B.matchesSelector = a(O = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                            B.disconnectedMatch = O.call(e, "div"),
                                O.call(e, "[s!='']:x"),
                                E.push("!=", ae)
                        }), N = RegExp(N.join("|")), E = RegExp(E.join("|")), j = a(P.contains) || P.compareDocumentPosition ?
                            function(e, t) {
                                var a = 9 === e.nodeType ? e.documentElement: e,
                                    n = t && t.parentNode;
                                return e === n || !(!n || 1 !== n.nodeType || !(a.contains ? a.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                            }: function(e, t) {
                                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                                return ! 1
                            },
                            $ = P.compareDocumentPosition ?
                                function(e, t) {
                                    var a;
                                    return e === t ? (T = !0, 0) : (a = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & a || e.parentNode && 11 === e.parentNode.nodeType ? e === n || j(R, e) ? -1 : t === n || j(R, t) ? 1 : 0 : 4 & a ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                                }: function(e, t) {
                                    var a, r = 0,
                                        o = e.parentNode,
                                        i = t.parentNode,
                                        c = [e],
                                        l = [t];
                                    if (e === t) return T = !0,
                                        0;
                                    if (!o || !i) return e === n ? -1 : t === n ? 1 : o ? -1 : i ? 1 : 0;
                                    if (o === i) return s(e, t);
                                    for (a = e; a = a.parentNode;) c.unshift(a);
                                    for (a = t; a = a.parentNode;) l.unshift(a);
                                    for (; c[r] === l[r];) r++;
                                    return r ? s(c[r], l[r]) : c[r] === R ? -1 : l[r] === R ? 1 : 0
                                },
                            T = !1, [0, 0].sort($), B.detectDuplicates = T, A) : A
                    },
                    i.matches = function(e, t) {
                        return i(e, null, null, t)
                    },
                    i.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== A && M(e), t = t.replace(/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "='$1']"), !(!B.matchesSelector || I || E && E.test(t) || N.test(t))) try {
                            var a = O.call(e, t);
                            if (a || B.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                        } catch(e) {}
                        return i(t, A, null, [e]).length > 0
                    },
                    i.contains = function(e, t) {
                        return (e.ownerDocument || e) !== A && M(e),
                            j(e, t)
                    },
                    i.attr = function(e, t) {
                        var a;
                        return (e.ownerDocument || e) !== A && M(e),
                        I || (t = t.toLowerCase()),
                            (a = D.attrHandle[t]) ? a(e) : I || B.attributes ? e.getAttribute(t) : ((a = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t: a && a.specified ? a.value: null
                    },
                    i.error = function(e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    },
                    i.uniqueSort = function(e) {
                        var t, a = [],
                            n = 1,
                            r = 0;
                        if (T = !B.detectDuplicates, e.sort($), T) {
                            for (; t = e[n]; n++) t === e[n - 1] && (r = a.push(n));
                            for (; r--;) e.splice(a[r], 1)
                        }
                        return e
                    },
                    k = i.getText = function(e) {
                        var t, a = "",
                            n = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) a += k(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else for (; t = e[n]; n++) a += k(t);
                        return a
                    },
                    D = i.selectors = {
                        cacheLength: 50,
                        createPseudo: r,
                        match: le,
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ge, ve),
                                    e[3] = (e[4] || e[5] || "").replace(ge, ve),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || i.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && i.error(e[0]),
                                    e
                            },
                            PSEUDO: function(e) {
                                var t, a = !e[5] && e[2];
                                return le.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : a && ie.test(a) && (t = l(a, !0)) && (t = a.indexOf(")", a.length - t) - a.length) && (e[0] = e[0].slice(0, t), e[2] = a.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                return "*" === e ?
                                    function() {
                                        return ! 0
                                    }: (e = e.replace(ge, ve).toLowerCase(),
                                        function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        })
                            },
                            CLASS: function(e) {
                                var t = F[e + " "];
                                return t || (t = RegExp("(^|" + K + ")" + e + "(" + K + "|$)")) && F(e,
                                    function(e) {
                                        return t.test(e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                                    })
                            },
                            ATTR: function(e, t, a) {
                                return function(n) {
                                    var r = i.attr(n, e);
                                    return null == r ? "!=" === t: !t || (r += "", "=" === t ? r === a: "!=" === t ? r !== a: "^=" === t ? a && 0 === r.indexOf(a) : "*=" === t ? a && r.indexOf(a) > -1 : "$=" === t ? a && r.slice( - a.length) === a: "~=" === t ? (" " + r + " ").indexOf(a) > -1 : "|=" === t && (r === a || r.slice(0, a.length + 1) === a + "-"))
                                }
                            },
                            CHILD: function(e, t, a, n, r) {
                                var o = "nth" !== e.slice(0, 3),
                                    i = "last" !== e.slice( - 4),
                                    s = "of-type" === t;
                                return 1 === n && 0 === r ?
                                    function(e) {
                                        return !! e.parentNode
                                    }: function(t, a, c) {
                                        var l, u, p, d, f, h, m = o !== i ? "nextSibling": "previousSibling",
                                            g = t.parentNode,
                                            v = s && t.nodeName.toLowerCase(),
                                            y = !c && !s;
                                        if (g) {
                                            if (o) {
                                                for (; m;) {
                                                    for (p = t; p = p[m];) if (s ? p.nodeName.toLowerCase() === v: 1 === p.nodeType) return ! 1;
                                                    h = m = "only" === e && !h && "nextSibling"
                                                }
                                                return ! 0
                                            }
                                            if (h = [i ? g.firstChild: g.lastChild], i && y) {
                                                for (u = g[L] || (g[L] = {}), l = u[e] || [], f = l[0] === H && l[1], d = l[0] === H && l[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();) if (1 === p.nodeType && ++d && p === t) {
                                                    u[e] = [H, f, d];
                                                    break
                                                }
                                            } else if (y && (l = (t[L] || (t[L] = {}))[e]) && l[0] === H) d = l[1];
                                            else for (; (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v: 1 !== p.nodeType) || !++d || (y && ((p[L] || (p[L] = {}))[e] = [H, d]), p !== t)););
                                            return (d -= r) === n || 0 == d % n && d / n >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(e, t) {
                                var a, n = D.pseudos[e] || D.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                                return n[L] ? n(t) : n.length > 1 ? (a = [e, e, "", t], D.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, a) {
                                    for (var r, o = n(e, t), i = o.length; i--;) r = Q.call(e, o[i]),
                                        e[r] = !(a[r] = o[i])
                                }) : function(e) {
                                    return n(e, 0, a)
                                }) : n
                            }
                        },
                        pseudos: {
                            not: r(function(e) {
                                var t = [],
                                    a = [],
                                    n = S(e.replace(ne, "$1"));
                                return n[L] ? r(function(e, t, a, r) {
                                    for (var o, i = n(e, null, r, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, r, o) {
                                    return t[0] = e,
                                        n(t, null, o, a),
                                        !a.pop()
                                }
                            }),
                            has: r(function(e) {
                                return function(t) {
                                    return i(e, t).length > 0
                                }
                            }),
                            contains: r(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                                }
                            }),
                            lang: r(function(e) {
                                return se.test(e || "") || i.error("unsupported lang: " + e),
                                    e = e.replace(ge, ve).toLowerCase(),
                                    function(t) {
                                        var a;
                                        do {
                                            if (a = I ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-")
                                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                                        return ! 1
                                    }
                            }),
                            target: function(t) {
                                var a = e.location && e.location.hash;
                                return a && a.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === P
                            },
                            focus: function(e) {
                                return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return ! 1 === e.disabled
                            },
                            disabled: function(e) {
                                return ! 0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                                return ! 0
                            },
                            parent: function(e) {
                                return ! D.pseudos.empty(e)
                            },
                            header: function(e) {
                                return he.test(e.nodeName)
                            },
                            input: function(e) {
                                return fe.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: c(function() {
                                return [0]
                            }),
                            last: c(function(e, t) {
                                return [t - 1]
                            }),
                            eq: c(function(e, t, a) {
                                return [0 > a ? a + t: a]
                            }),
                            even: c(function(e, t) {
                                for (var a = 0; t > a; a += 2) e.push(a);
                                return e
                            }),
                            odd: c(function(e, t) {
                                for (var a = 1; t > a; a += 2) e.push(a);
                                return e
                            }),
                            lt: c(function(e, t, a) {
                                for (var n = 0 > a ? a + t: a; --n >= 0;) e.push(n);
                                return e
                            }),
                            gt: c(function(e, t, a) {
                                for (var n = 0 > a ? a + t: a; t > ++n;) e.push(n);
                                return e
                            })
                        }
                    };
                for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) D.pseudos[_] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                } (_);
                for (_ in {
                    submit: !0,
                    reset: !0
                }) D.pseudos[_] = function(e) {
                    return function(t) {
                        var a = t.nodeName.toLowerCase();
                        return ("input" === a || "button" === a) && t.type === e
                    }
                } (_);
                S = i.compile = function(e, t) {
                    var a, n = [],
                        r = [],
                        o = W[e + " "];
                    if (!o) {
                        for (t || (t = l(e)), a = t.length; a--;) o = m(t[a]),
                            o[L] ? n.push(o) : r.push(o);
                        o = W(e, g(r, n))
                    }
                    return o
                },
                    D.pseudos.nth = D.pseudos.eq,
                    D.filters = b.prototype = D.pseudos,
                    D.setFilters = new b,
                    M(),
                    i.attr = ce.attr,
                    ce.find = i,
                    ce.expr = i.selectors,
                    ce.expr[":"] = ce.expr.pseudos,
                    ce.unique = i.uniqueSort,
                    ce.text = i.getText,
                    ce.isXMLDoc = i.isXML,
                    ce.contains = i.contains
            } (e);
        var Oe = /Until$/,
            je = /^(?:parents|prev(?:Until|All))/,
            $e = /^.[^:#\[\.,]*$/,
            Le = ce.expr.match.needsContext,
            Re = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(e) {
                var t, a, n, r = this.length;
                if ("string" != typeof e) return n = this,
                    this.pushStack(ce(e).filter(function() {
                        for (t = 0; r > t; t++) if (ce.contains(n[t], this)) return ! 0
                    }));
                for (a = [], t = 0; r > t; t++) ce.find(e, this[t], a);
                return a = this.pushStack(r > 1 ? ce.unique(a) : a),
                    a.selector = (this.selector ? this.selector + " ": "") + e,
                    a
            },
            has: function(e) {
                var t, a = ce(e, this),
                    n = a.length;
                return this.filter(function() {
                    for (t = 0; n > t; t++) if (ce.contains(this, a[t])) return ! 0
                })
            },
            not: function(e) {
                return this.pushStack(p(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(p(this, e, !0))
            },
            is: function(e) {
                return !! e && ("string" == typeof e ? Le.test(e) ? ce(e, this.context).index(this[0]) >= 0 : ce.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var a, n = 0,
                         r = this.length,
                         o = [], i = Le.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r > n; n++) for (a = this[n]; a && a.ownerDocument && a !== t && 11 !== a.nodeType;) {
                    if (i ? i.index(a) > -1 : ce.find.matchesSelector(a, e)) {
                        o.push(a);
                        break
                    }
                    a = a.parentNode
                }
                return this.pushStack(o.length > 1 ? ce.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                var a = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
                    n = ce.merge(this.get(), a);
                return this.pushStack(ce.unique(n))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
            ce.fn.andSelf = ce.fn.addBack,
            ce.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t: null
                    },
                    parents: function(e) {
                        return ce.dir(e, "parentNode")
                    },
                    parentsUntil: function(e, t, a) {
                        return ce.dir(e, "parentNode", a)
                    },
                    next: function(e) {
                        return u(e, "nextSibling")
                    },
                    prev: function(e) {
                        return u(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return ce.dir(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return ce.dir(e, "previousSibling")
                    },
                    nextUntil: function(e, t, a) {
                        return ce.dir(e, "nextSibling", a)
                    },
                    prevUntil: function(e, t, a) {
                        return ce.dir(e, "previousSibling", a)
                    },
                    siblings: function(e) {
                        return ce.sibling((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return ce.sibling(e.firstChild)
                    },
                    contents: function(e) {
                        return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ce.merge([], e.childNodes)
                    }
                },
                function(e, t) {
                    ce.fn[e] = function(a, n) {
                        var r = ce.map(this, t, a);
                        return Oe.test(e) || (n = a),
                        n && "string" == typeof n && (r = ce.filter(n, r)),
                            r = this.length > 1 && !Re[e] ? ce.unique(r) : r,
                        this.length > 1 && je.test(e) && (r = r.reverse()),
                            this.pushStack(r)
                    }
                }),
            ce.extend({
                filter: function(e, t, a) {
                    return a && (e = ":not(" + e + ")"),
                        1 === t.length ? ce.find.matchesSelector(t[0], e) ? [t[0]] : [] : ce.find.matches(e, t)
                },
                dir: function(e, a, n) {
                    for (var r = [], o = e[a]; o && 9 !== o.nodeType && (n === t || 1 !== o.nodeType || !ce(o).is(n));) 1 === o.nodeType && r.push(o),
                        o = o[a];
                    return r
                },
                sibling: function(e, t) {
                    for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
                    return a
                }
            });
        var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            He = RegExp("<(?:" + Be + ")[\\s/>]", "i"),
            Ve = /^\s+/,
            Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            We = /<tbody/i,
            Ue = /<|&#?\w+;/,
            ze = /<(?:script|style|link)/i,
            Xe = /^(?:checkbox|radio)$/i,
            Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ye = /^$|\/(?:java|ecma)script/i,
            Je = /^true\/(.*)/,
            Qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ke = d(G),
            Ze = Ke.appendChild(G.createElement("div"));
        Qe.optgroup = Qe.option,
            Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead,
            Qe.th = Qe.td,
            ce.fn.extend({
                text: function(e) {
                    return ce.access(this,
                        function(e) {
                            return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
                        },
                        null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (ce.isFunction(e)) return this.each(function(t) {
                        ce(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                return e
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return ce.isFunction(e) ? this.each(function(t) {
                        ce(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = ce(this),
                            a = t.contents();
                        a.length ? a.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = ce.isFunction(e);
                    return this.each(function(a) {
                        ce(this).wrapAll(t ? e.call(this, a) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0,
                        function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                        })
                },
                prepend: function() {
                    return this.domManip(arguments, !0,
                        function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                        })
                },
                before: function() {
                    return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                },
                after: function() {
                    return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                },
                remove: function(e, t) {
                    for (var a, n = 0; null != (a = this[n]); n++)(!e || ce.filter(e, [a]).length > 0) && (t || 1 !== a.nodeType || ce.cleanData(b(a)), a.parentNode && (t && ce.contains(a.ownerDocument, a) && g(b(a, "script")), a.parentNode.removeChild(a)));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ce.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && ce.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                        t = null == t ? e: t,
                        this.map(function() {
                            return ce.clone(this, e, t)
                        })
                },
                html: function(e) {
                    return ce.access(this,
                        function(e) {
                            var a = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (e === t) return 1 === a.nodeType ? a.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : t;
                            if (! ("string" != typeof e || ze.test(e) || !ce.support.htmlSerialize && He.test(e) || !ce.support.leadingWhitespace && Ve.test(e) || Qe[(qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                                e = e.replace(Fe, "<$1></$2>");
                                try {
                                    for (; r > n; n++) a = this[n] || {},
                                    1 === a.nodeType && (ce.cleanData(b(a, !1)), a.innerHTML = e);
                                    a = 0
                                } catch(e) {}
                            }
                            a && this.empty().append(e)
                        },
                        null, e, arguments.length)
                },
                replaceWith: function(e) {
                    return ce.isFunction(e) || "string" == typeof e || (e = ce(e).not(this).detach()),
                        this.domManip([e], !0,
                            function(e) {
                                var t = this.nextSibling,
                                    a = this.parentNode;
                                a && (ce(this).remove(), a.insertBefore(e, t))
                            })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, a, n) {
                    e = te.apply([], e);
                    var r, o, i, s, c, l, u = 0,
                        p = this.length,
                        d = this,
                        g = p - 1,
                        v = e[0],
                        y = ce.isFunction(v);
                    if (y || !(1 >= p || "string" != typeof v || ce.support.checkClone) && Ge.test(v)) return this.each(function(r) {
                        var o = d.eq(r);
                        y && (e[0] = v.call(this, r, a ? o.html() : t)),
                            o.domManip(e, a, n)
                    });
                    if (p && (l = ce.buildFragment(e, this[0].ownerDocument, !1, this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                        for (a = a && ce.nodeName(r, "tr"), s = ce.map(b(l, "script"), h), i = s.length; p > u; u++) o = l,
                        u !== g && (o = ce.clone(o, !0, !0), i && ce.merge(s, b(o, "script"))),
                            n.call(a && ce.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], o, u);
                        if (i) for (c = s[s.length - 1].ownerDocument, ce.map(s, m), u = 0; i > u; u++) o = s[u],
                        Ye.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(c, o) && (o.src ? ce.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")));
                        l = r = null
                    }
                    return this
                }
            }),
            ce.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                },
                function(e, t) {
                    ce.fn[e] = function(e) {
                        for (var a, n = 0,
                                 r = [], o = ce(e), i = o.length - 1; i >= n; n++) a = n === i ? this: this.clone(!0),
                            ce(o[n])[t](a),
                            ae.apply(r, a.get());
                        return this.pushStack(r)
                    }
                }),
            ce.extend({
                clone: function(e, t, a) {
                    var n, r, o, i, s, c = ce.contains(e.ownerDocument, e);
                    if (ce.support.html5Clone || ce.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ze.innerHTML = e.outerHTML, Ze.removeChild(o = Ze.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (n = b(o), s = b(e), i = 0; null != (r = s[i]); ++i) n[i] && y(r, n[i]);
                    if (t) if (a) for (s = s || b(e), n = n || b(o), i = 0; null != (r = s[i]); i++) v(r, n[i]);
                    else v(e, o);
                    return n = b(o, "script"),
                    n.length > 0 && g(n, !c && b(e, "script")),
                        n = s = r = null,
                        o
                },
                buildFragment: function(e, t, a, n) {
                    for (var r, o, i, s, c, l, u, p = e.length,
                             f = d(t), h = [], m = 0; p > m; m++) if ((o = e[m]) || 0 === o) if ("object" === ce.type(o)) ce.merge(h, o.nodeType ? [o] : o);
                    else if (Ue.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")), c = (qe.exec(o) || ["", ""])[1].toLowerCase(), u = Qe[c] || Qe._default, s.innerHTML = u[1] + o.replace(Fe, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                        if (!ce.support.leadingWhitespace && Ve.test(o) && h.push(t.createTextNode(Ve.exec(o)[0])), !ce.support.tbody) for (o = "table" !== c || We.test(o) ? "<table>" !== u[1] || We.test(o) ? 0 : s: s.firstChild, r = o && o.childNodes.length; r--;) ce.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (ce.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else h.push(t.createTextNode(o));
                    for (s && f.removeChild(s), ce.support.appendChecked || ce.grep(b(h, "input"), _), m = 0; o = h[m++];) if ((!n || -1 === ce.inArray(o, n)) && (i = ce.contains(o.ownerDocument, o), s = b(f.appendChild(o), "script"), i && g(s), a)) for (r = 0; o = s[r++];) Ye.test(o.type || "") && a.push(o);
                    return s = null,
                        f
                },
                cleanData: function(e, t) {
                    for (var a, n, r, o, i = 0,
                             s = ce.expando,
                             c = ce.cache,
                             l = ce.support.deleteExpando,
                             u = ce.event.special; null != (a = e[i]); i++) if ((t || ce.acceptData(a)) && (r = a[s], o = r && c[r])) {
                        if (o.events) for (n in o.events) u[n] ? ce.event.remove(a, n) : ce.removeEvent(a, n, o.handle);
                        c[r] && (delete c[r], l ? delete a[s] : typeof a.removeAttribute !== X ? a.removeAttribute(s) : a[s] = null, Z.push(r))
                    }
                }
            });
        var et, tt, at, nt = /alpha\([^)]*\)/i,
            rt = /opacity\s*=\s*([^)]*)/,
            ot = /^(top|right|bottom|left)$/,
            it = /^(none|table(?!-c[ea]).+)/,
            st = /^margin/,
            ct = RegExp("^(" + le + ")(.*)$", "i"),
            lt = RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"),
            ut = RegExp("^([+-])=(" + le + ")", "i"),
            pt = {
                BODY: "block"
            },
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ft = {
                letterSpacing: 0,
                fontWeight: 400
            },
            ht = ["Top", "Right", "Bottom", "Left"],
            mt = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(e, a) {
                return ce.access(this,
                    function(e, a, n) {
                        var r, o, i = {},
                            s = 0;
                        if (ce.isArray(a)) {
                            for (o = tt(e), r = a.length; r > s; s++) i[a[s]] = ce.css(e, a[s], !1, o);
                            return i
                        }
                        return n !== t ? ce.style(e, a, n) : ce.css(e, a)
                    },
                    e, a, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() { (t ? e: D(this)) ? ce(this).show() : ce(this).hide()
                })
            }
        }),
            ce.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var a = at(e, "opacity");
                                return "" === a ? "1": a
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: ce.support.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(e, a, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, s, c = ce.camelCase(a),
                            l = e.style;
                        if (a = ce.cssProps[c] || (ce.cssProps[c] = w(l, c)), s = ce.cssHooks[a] || ce.cssHooks[c], n === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o: l[a];
                        if (i = typeof n, "string" === i && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ce.css(e, a)), i = "number"), !(null == n || "number" === i && isNaN(n) || ("number" !== i || ce.cssNumber[c] || (n += "px"), ce.support.clearCloneStyle || "" !== n || 0 !== a.indexOf("background") || (l[a] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === t))) try {
                            l[a] = n
                        } catch(e) {}
                    }
                },
                css: function(e, a, n, r) {
                    var o, i, s, c = ce.camelCase(a);
                    return a = ce.cssProps[c] || (ce.cssProps[c] = w(e.style, c)),
                        s = ce.cssHooks[a] || ce.cssHooks[c],
                    s && "get" in s && (i = s.get(e, !0, n)),
                    i === t && (i = at(e, a, r)),
                    "normal" === i && a in ft && (i = ft[a]),
                        "" === n || n ? (o = parseFloat(i), !0 === n || ce.isNumeric(o) ? o || 0 : i) : i
                },
                swap: function(e, t, a, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o],
                        e.style[o] = t[o];
                    r = a.apply(e, n || []);
                    for (o in t) e.style[o] = i[o];
                    return r
                }
            }),
            e.getComputedStyle ? (tt = function(t) {
                return e.getComputedStyle(t, null)
            },
                at = function(e, a, n) {
                    var r, o, i, s = n || tt(e),
                        c = s ? s.getPropertyValue(a) || s[a] : t,
                        l = e.style;
                    return s && ("" !== c || ce.contains(e.ownerDocument, e) || (c = ce.style(e, a)), lt.test(c) && st.test(a) && (r = l.width, o = l.minWidth, i = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = s.width, l.width = r, l.minWidth = o, l.maxWidth = i)),
                        c
                }) : G.documentElement.currentStyle && (tt = function(e) {
                return e.currentStyle
            },
                at = function(e, a, n) {
                    var r, o, i, s = n || tt(e),
                        c = s ? s[a] : t,
                        l = e.style;
                    return null == c && l && l[a] && (c = l[a]),
                    lt.test(c) && !ot.test(a) && (r = l.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), l.left = "fontSize" === a ? "1em": c, c = l.pixelLeft + "px", l.left = r, i && (o.left = i)),
                        "" === c ? "auto": c
                }),
            ce.each(["height", "width"],
                function(e, a) {
                    ce.cssHooks[a] = {
                        get: function(e, n, r) {
                            return n ? 0 === e.offsetWidth && it.test(ce.css(e, "display")) ? ce.swap(e, dt,
                                function() {
                                    return T(e, a, r)
                                }) : T(e, a, r) : t
                        },
                        set: function(e, t, n) {
                            var r = n && tt(e);
                            return x(e, t, n ? S(e, a, n, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, r), r) : 0)
                        }
                    }
                }),
        ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(e, t) {
                return rt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
            },
            set: function(e, t) {
                var a = e.style,
                    n = e.currentStyle,
                    r = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                    o = n && n.filter || a.filter || "";
                a.zoom = 1,
                (t >= 1 || "" === t) && "" === ce.trim(o.replace(nt, "")) && a.removeAttribute && (a.removeAttribute("filter"), "" === t || n && !n.filter) || (a.filter = nt.test(o) ? o.replace(nt, r) : o + " " + r)
            }
        }),
            ce(function() {
                ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                    get: function(e, a) {
                        return a ? ce.swap(e, {
                                display: "inline-block"
                            },
                            at, [e, "marginRight"]) : t
                    }
                }),
                !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"],
                    function(e, a) {
                        ce.cssHooks[a] = {
                            get: function(e, n) {
                                return n ? (n = at(e, a), lt.test(n) ? ce(e).position()[a] + "px": n) : t
                            }
                        }
                    })
            }),
        ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
        },
            ce.expr.filters.visible = function(e) {
                return ! ce.expr.filters.hidden(e)
            }),
            ce.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                },
                function(e, t) {
                    ce.cssHooks[e + t] = {
                        expand: function(a) {
                            for (var n = 0,
                                     r = {},
                                     o = "string" == typeof a ? a.split(" ") : [a]; 4 > n; n++) r[e + ht[n] + t] = o[n] || o[n - 2] || o[0];
                            return r
                        }
                    },
                    st.test(e) || (ce.cssHooks[e + t].set = x)
                });
        var gt = /\[\]$/,
            vt = /^(?:submit|button|image|reset|file)$/i,
            yt = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ce(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !Xe.test(e))
                }).map(function(e, t) {
                    var a = ce(this).val();
                    return null == a ? null: ce.isArray(a) ? ce.map(a,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(/\r?\n/g, "\r\n")
                            }
                        }) : {
                        name: t.name,
                        value: a.replace(/\r?\n/g, "\r\n")
                    }
                }).get()
            }
        }),
            ce.param = function(e, a) {
                var n, r = [],
                    o = function(e, t) {
                        t = ce.isFunction(t) ? t() : null == t ? "": t,
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (a === t && (a = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e,
                    function() {
                        o(this.name, this.value)
                    });
                else for (n in e) A(n, e[n], a, o);
                return r.join("&").replace(/%20/g, "+")
            },
            ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function(e, t) {
                    ce.fn[t] = function(e, a) {
                        return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t)
                    }
                }),
            ce.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            };
        var bt, _t, wt = ce.now(),
            Dt = /\?/,
            kt = /([?&])_=[^&]*/,
            xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Tt = /^(?:GET|HEAD)$/,
            Ct = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Mt = ce.fn.load,
            At = {},
            Pt = {},
            It = "*/".concat("*");
        try {
            _t = Y.href
        } catch(e) {
            _t = G.createElement("a"),
                _t.href = "",
                _t = _t.href
        }
        bt = Ct.exec(_t.toLowerCase()) || [],
            ce.fn.load = function(e, a, n) {
                if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
                var r, o, i, s = this,
                    c = e.indexOf(" ");
                return c >= 0 && (r = e.slice(c, e.length), e = e.slice(0, c)),
                    ce.isFunction(a) ? (n = a, a = t) : a && "object" == typeof a && (i = "POST"),
                s.length > 0 && ce.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: a
                }).done(function(e) {
                    o = arguments,
                        s.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
                }).complete(n &&
                    function(e, t) {
                        s.each(n, o || [e.responseText, t, e])
                    }),
                    this
            },
            ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                function(e, t) {
                    ce.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }),
            ce.each(["get", "post"],
                function(e, a) {
                    ce[a] = function(e, n, r, o) {
                        return ce.isFunction(n) && (o = o || r, r = n, n = t),
                            ce.ajax({
                                url: e,
                                type: a,
                                dataType: o,
                                data: n,
                                success: r
                            })
                    }
                }),
            ce.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: _t,
                    type: "GET",
                    isLocal: St.test(bt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": It,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": ce.parseJSON,
                        "text xml": ce.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? N(N(e, ce.ajaxSettings), t) : N(ce.ajaxSettings, e)
                },
                ajaxPrefilter: P(At),
                ajaxTransport: P(Pt),
                ajax: function(e, a) {
                    function n(e, a, n, r) {
                        var o, p, y, b, w, k = a;
                        2 !== _ && (_ = 2, c && clearTimeout(c), u = t, s = r || "", D.readyState = e > 0 ? 4 : 0, n && (b = E(d, D, n)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = D.getResponseHeader("Last-Modified"), w && (ce.lastModified[i] = w), (w = D.getResponseHeader("etag")) && (ce.etag[i] = w)), 204 === e ? (o = !0, k = "nocontent") : 304 === e ? (o = !0, k = "notmodified") : (o = O(d, b), k = o.state, p = o.data, y = o.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), D.status = e, D.statusText = (a || k) + "", o ? m.resolveWith(f, [p, k, D]) : m.rejectWith(f, [D, k, y]), D.statusCode(v), v = t, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [D, d, o ? p: y]), g.fireWith(f, [D, k]), l && (h.trigger("ajaxComplete", [D, d]), --ce.active || ce.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (a = e, e = t),
                        a = a || {};
                    var r, o, i, s, c, l, u, p, d = ce.ajaxSetup({},
                        a),
                        f = d.context || d,
                        h = d.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
                        m = ce.Deferred(),
                        g = ce.Callbacks("once memory"),
                        v = d.statusCode || {},
                        y = {},
                        b = {},
                        _ = 0,
                        w = "canceled",
                        D = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === _) {
                                    if (!p) for (p = {}; t = xt.exec(s);) p[t[1].toLowerCase()] = t[2];
                                    t = p[e.toLowerCase()]
                                }
                                return null == t ? null: t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === _ ? s: null
                            },
                            setRequestHeader: function(e, t) {
                                var a = e.toLowerCase();
                                return _ || (e = b[a] = b[a] || e, y[e] = t),
                                    this
                            },
                            overrideMimeType: function(e) {
                                return _ || (d.mimeType = e),
                                    this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e) if (2 > _) for (t in e) v[t] = [v[t], e[t]];
                                else D.always(e[D.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || w;
                                return u && u.abort(t),
                                    n(0, t),
                                    this
                            }
                        };
                    if (m.promise(D).complete = g.add, D.success = D.done, D.error = D.fail, d.url = ((e || d.url || _t) + "").replace(/#.*$/, "").replace(/^\/\//, bt[1] + "//"), d.type = a.method || a.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(ue) || [""], null == d.crossDomain && (r = Ct.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === bt[1] && r[2] === bt[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (bt[3] || ("http:" === bt[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), I(At, d, a, D), 2 === _) return D;
                    l = d.global,
                    l && 0 == ce.active++&&ce.event.trigger("ajaxStart"),
                        d.type = d.type.toUpperCase(),
                        d.hasContent = !Tt.test(d.type),
                        i = d.url,
                    d.hasContent || (d.data && (i = d.url += (Dt.test(i) ? "&": "?") + d.data, delete d.data), !1 === d.cache && (d.url = kt.test(i) ? i.replace(kt, "$1_=" + wt++) : i + (Dt.test(i) ? "&": "?") + "_=" + wt++)),
                    d.ifModified && (ce.lastModified[i] && D.setRequestHeader("If-Modified-Since", ce.lastModified[i]), ce.etag[i] && D.setRequestHeader("If-None-Match", ce.etag[i])),
                    (d.data && d.hasContent && !1 !== d.contentType || a.contentType) && D.setRequestHeader("Content-Type", d.contentType),
                        D.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01": "") : d.accepts["*"]);
                    for (o in d.headers) D.setRequestHeader(o, d.headers[o]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(f, D, d) || 2 === _)) return D.abort();
                    w = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) D[o](d[o]);
                    if (u = I(Pt, d, a, D)) {
                        D.readyState = 1,
                        l && h.trigger("ajaxSend", [D, d]),
                        d.async && d.timeout > 0 && (c = setTimeout(function() {
                                D.abort("timeout")
                            },
                            d.timeout));
                        try {
                            _ = 1,
                                u.send(y, n)
                        } catch(e) {
                            if (! (2 > _)) throw e;
                            n( - 1, e)
                        }
                    } else n( - 1, "No Transport");
                    return D
                },
                getScript: function(e, a) {
                    return ce.get(e, t, a, "script")
                },
                getJSON: function(e, t, a) {
                    return ce.get(e, t, a, "json")
                }
            }),
            ce.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return ce.globalEval(e),
                            e
                    }
                }
            }),
            ce.ajaxPrefilter("script",
                function(e) {
                    e.cache === t && (e.cache = !1),
                    e.crossDomain && (e.type = "GET", e.global = !1)
                }),
            ce.ajaxTransport("script",
                function(e) {
                    if (e.crossDomain) {
                        var a, n = G.head || ce("head")[0] || G.documentElement;
                        return {
                            send: function(t, r) {
                                a = G.createElement("script"),
                                    a.async = !0,
                                e.scriptCharset && (a.charset = e.scriptCharset),
                                    a.src = e.url,
                                    a.onload = a.onreadystatechange = function(e, t) { (t || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, t || r(200, "success"))
                                    },
                                    n.insertBefore(a, n.firstChild)
                            },
                            abort: function() {
                                a && a.onload(t, !0)
                            }
                        }
                    }
                });
        var Nt = [],
            Et = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Nt.pop() || ce.expando + "_" + wt++;
                return this[e] = !0,
                    e
            }
        }),
            ce.ajaxPrefilter("json jsonp",
                function(a, n, r) {
                    var o, i, s, c = !1 !== a.jsonp && (Et.test(a.url) ? "url": "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Et.test(a.data) && "data");
                    return c || "jsonp" === a.dataTypes[0] ? (o = a.jsonpCallback = ce.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, c ? a[c] = a[c].replace(Et, "$1" + o) : !1 !== a.jsonp && (a.url += (Dt.test(a.url) ? "&": "?") + a.jsonp + "=" + o), a.converters["script json"] = function() {
                        return s || ce.error(o + " was not called"),
                            s[0]
                    },
                        a.dataTypes[0] = "json", i = e[o], e[o] = function() {
                        s = arguments
                    },
                        r.always(function() {
                            e[o] = i,
                            a[o] && (a.jsonpCallback = n.jsonpCallback, Nt.push(o)),
                            s && ce.isFunction(i) && i(s[0]),
                                s = i = t
                        }), "script") : t
                });
        var Ot, jt, $t = 0,
            Lt = e.ActiveXObject &&
                function() {
                    var e;
                    for (e in Ot) Ot[e](t, !0)
                };
        ce.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return ! this.isLocal && j() || $()
            }: j,
            jt = ce.ajaxSettings.xhr(),
            ce.support.cors = !!jt && "withCredentials" in jt,
        (jt = ce.support.ajax = !!jt) && ce.ajaxTransport(function(a) {
            if (!a.crossDomain || ce.support.cors) {
                var n;
                return {
                    send: function(r, o) {
                        var i, s, c = a.xhr();
                        if (a.username ? c.open(a.type, a.url, a.async, a.username, a.password) : c.open(a.type, a.url, a.async), a.xhrFields) for (s in a.xhrFields) c[s] = a.xhrFields[s];
                        a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType),
                        a.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in r) c.setRequestHeader(s, r[s])
                        } catch(e) {}
                        c.send(a.hasContent && a.data || null),
                            n = function(e, r) {
                                var s, l, u, p;
                                try {
                                    if (n && (r || 4 === c.readyState)) if (n = t, i && (c.onreadystatechange = ce.noop, Lt && delete Ot[i]), r) 4 !== c.readyState && c.abort();
                                    else {
                                        p = {},
                                            s = c.status,
                                            l = c.getAllResponseHeaders(),
                                        "string" == typeof c.responseText && (p.text = c.responseText);
                                        try {
                                            u = c.statusText
                                        } catch(e) {
                                            u = ""
                                        }
                                        s || !a.isLocal || a.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                    }
                                } catch(e) {
                                    r || o( - 1, e)
                                }
                                p && o(s, u, p, l)
                            },
                            a.async ? 4 === c.readyState ? setTimeout(n) : (i = ++$t, Lt && (Ot || (Ot = {},
                                ce(e).unload(Lt)), Ot[i] = n), c.onreadystatechange = n) : n()
                    },
                    abort: function() {
                        n && n(t, !0)
                    }
                }
            }
        });
        var Rt, Bt, Ht = /^(?:toggle|show|hide)$/,
            Vt = RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
            Ft = /queueHooks$/,
            qt = [V],
            Wt = {
                "*": [function(e, t) {
                    var a, n, r = this.createTween(e, t),
                        o = Vt.exec(t),
                        i = r.cur(),
                        s = +i || 0,
                        c = 1,
                        l = 20;
                    if (o) {
                        if (a = +o[2], "px" !== (n = o[3] || (ce.cssNumber[e] ? "": "px")) && s) {
                            s = ce.css(r.elem, e, !0) || a || 1;
                            do {
                                c = c || ".5", s /= c, ce.style(r.elem, e, s + n)
                            } while ( c !== ( c = r . cur () / i) && 1 !== c && --l)
                        }
                        r.unit = n,
                            r.start = s,
                            r.end = o[1] ? s + (o[1] + 1) * a: a
                    }
                    return r
                }]
            };
        ce.Animation = ce.extend(B, {
            tweener: function(e, t) {
                ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var a, n = 0,
                         r = e.length; r > n; n++) a = e[n],
                    Wt[a] = Wt[a] || [],
                    Wt[a].unshift(t)
            },
            prefilter: function(e, t) {
                t ? qt.unshift(e) : qt.push(e)
            }
        }),
            ce.Tween = F,
            F.prototype = {
                constructor: F,
                init: function(e, t, a, n, r, o) {
                    this.elem = e,
                        this.prop = a,
                        this.easing = r || "swing",
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = n,
                        this.unit = o || (ce.cssNumber[a] ? "": "px")
                },
                cur: function() {
                    var e = F.propHooks[this.prop];
                    return e && e.get ? e.get(this) : F.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, a = F.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                        this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        a && a.set ? a.set(this) : F.propHooks._default.set(this),
                        this
                }
            },
            F.prototype.init.prototype = F.prototype,
            F.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            ce.each(["toggle", "show", "hide"],
                function(e, t) {
                    var a = ce.fn[t];
                    ce.fn[t] = function(e, n, r) {
                        return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(q(t, !0), e, n, r)
                    }
                }),
            ce.fn.extend({
                fadeTo: function(e, t, a, n) {
                    return this.filter(D).css("opacity", 0).show().end().animate({
                            opacity: t
                        },
                        e, a, n)
                },
                animate: function(e, t, a, n) {
                    var r = ce.isEmptyObject(e),
                        o = ce.speed(t, a, n),
                        i = function() {
                            var t = B(this, ce.extend({},
                                e), o);
                            i.finish = function() {
                                t.stop(!0)
                            },
                            (r || ce._data(this, "finish")) && t.stop(!0)
                        };
                    return i.finish = i,
                        r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
                },
                stop: function(e, a, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                            t(n)
                    };
                    return "string" != typeof e && (n = a, a = e, e = t),
                    a && !1 !== e && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0,
                                a = null != e && e + "queueHooks",
                                o = ce.timers,
                                i = ce._data(this);
                            if (a) i[a] && i[a].stop && r(i[a]);
                            else for (a in i) i[a] && i[a].stop && Ft.test(a) && r(i[a]);
                            for (a = o.length; a--;) o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1)); (t || !n) && ce.dequeue(this, e)
                        })
                },
                finish: function(e) {
                    return ! 1 !== e && (e = e || "fx"),
                        this.each(function() {
                            var t, a = ce._data(this),
                                n = a[e + "queue"],
                                r = a[e + "queueHooks"],
                                o = ce.timers,
                                i = n ? n.length: 0;
                            for (a.finish = !0, ce.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; i > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete a.finish
                        })
                }
            }),
            ce.each({
                    slideDown: q("show"),
                    slideUp: q("hide"),
                    slideToggle: q("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                },
                function(e, t) {
                    ce.fn[e] = function(e, a, n) {
                        return this.animate(t, e, a, n)
                    }
                }),
            ce.speed = function(e, t, a) {
                var n = e && "object" == typeof e ? ce.extend({},
                    e) : {
                    complete: a || !a && t || ce.isFunction(e) && e,
                    duration: e,
                    easing: a && t || t && !ce.isFunction(t) && t
                };
                return n.duration = ce.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in ce.fx.speeds ? ce.fx.speeds[n.duration] : ce.fx.speeds._default,
                (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
                    n.old = n.complete,
                    n.complete = function() {
                        ce.isFunction(n.old) && n.old.call(this),
                        n.queue && ce.dequeue(this, n.queue)
                    },
                    n
            },
            ce.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return.5 - Math.cos(e * Math.PI) / 2
                }
            },
            ce.timers = [],
            ce.fx = F.prototype.init,
            ce.fx.tick = function() {
                var e, a = ce.timers,
                    n = 0;
                for (Rt = ce.now(); a.length > n; n++)(e = a[n])() || a[n] !== e || a.splice(n--, 1);
                a.length || ce.fx.stop(),
                    Rt = t
            },
            ce.fx.timer = function(e) {
                e() && ce.timers.push(e) && ce.fx.start()
            },
            ce.fx.interval = 13,
            ce.fx.start = function() {
                Bt || (Bt = setInterval(ce.fx.tick, ce.fx.interval))
            },
            ce.fx.stop = function() {
                clearInterval(Bt),
                    Bt = null
            },
            ce.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ce.fx.step = {},
        ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(e) {
            return ce.grep(ce.timers,
                function(t) {
                    return e === t.elem
                }).length
        }),
            ce.fn.offset = function(e) {
                if (arguments.length) return e === t ? this: this.each(function(t) {
                    ce.offset.setOffset(this, e, t)
                });
                var a, n, r = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    i = o && o.ownerDocument;
                return i ? (a = i.documentElement, ce.contains(a, o) ? (typeof o.getBoundingClientRect !== X && (r = o.getBoundingClientRect()), n = W(i), {
                    top: r.top + (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                    left: r.left + (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
                }) : r) : void 0
            },
            ce.offset = {
                setOffset: function(e, t, a) {
                    var n = ce.css(e, "position");
                    "static" === n && (e.style.position = "relative");
                    var r, o, i = ce(e),
                        s = i.offset(),
                        c = ce.css(e, "top"),
                        l = ce.css(e, "left"),
                        u = ("absolute" === n || "fixed" === n) && ce.inArray("auto", [c, l]) > -1,
                        p = {},
                        d = {};
                    u ? (d = i.position(), r = d.top, o = d.left) : (r = parseFloat(c) || 0, o = parseFloat(l) || 0),
                    ce.isFunction(t) && (t = t.call(e, a, s)),
                    null != t.top && (p.top = t.top - s.top + r),
                    null != t.left && (p.left = t.left - s.left + o),
                        "using" in t ? t.using.call(e, p) : i.css(p)
                }
            },
            ce.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, a = {
                                top: 0,
                                left: 0
                            },
                            n = this[0];
                        return "fixed" === ce.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (a = e.offset()), a.top += ce.css(e[0], "borderTopWidth", !0), a.left += ce.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - a.top - ce.css(n, "marginTop", !0),
                                left: t.left - a.left - ce.css(n, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || G.documentElement; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                        return e || G.documentElement
                    })
                }
            }),
            ce.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                },
                function(e, a) {
                    var n = /Y/.test(a);
                    ce.fn[e] = function(r) {
                        return ce.access(this,
                            function(e, r, o) {
                                var i = W(e);
                                return o === t ? i ? a in i ? i[a] : i.document.documentElement[r] : e[r] : (i ? i.scrollTo(n ? ce(i).scrollLeft() : o, n ? o: ce(i).scrollTop()) : e[r] = o, t)
                            },
                            e, r, arguments.length, null)
                    }
                }),
            ce.each({
                    Height: "height",
                    Width: "width"
                },
                function(e, a) {
                    ce.each({
                            padding: "inner" + e,
                            content: a,
                            "": "outer" + e
                        },
                        function(n, r) {
                            ce.fn[r] = function(r, o) {
                                var i = arguments.length && (n || "boolean" != typeof r),
                                    s = n || (!0 === r || !0 === o ? "margin": "border");
                                return ce.access(this,
                                    function(a, n, r) {
                                        var o;
                                        return ce.isWindow(a) ? a.document.documentElement["client" + e] : 9 === a.nodeType ? (o = a.documentElement, Math.max(a.body["scroll" + e], o["scroll" + e], a.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ce.css(a, n, s) : ce.style(a, n, r, s)
                                    },
                                    a, i ? r: t, i, null)
                            }
                        })
                }),
            e.jQuery = e.$ = ce,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
            function() {
                return ce
            })
    } (window),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.BScroll = t()
    } (this,
        function() {
            "use strict";
            function e(e) {
                return ! 1 !== f && ("standard" === f ? e: f + e.charAt(0).toUpperCase() + e.substr(1))
            }
            function t(e, t, a, n) {
                e.addEventListener(t, a, {
                    passive: !1,
                    capture: !!n
                })
            }
            function a(e, t, a, n) {
                e.removeEventListener(t, a, !!n)
            }
            function n(e) {
                for (var t = 0,
                         a = 0; e;) t -= e.offsetLeft,
                    a -= e.offsetTop,
                    e = e.offsetParent;
                return {
                    left: t,
                    top: a
                }
            }
            function r(e) {
                if (e instanceof window.SVGElement) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    }
                }
                return {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            function o(e, t) {
                for (var a in t) if (t[a].test(e[a])) return ! 0;
                return ! 1
            }
            function i(e, t) {
                var a = document.createEvent("Event");
                a.initEvent(t, !0, !0),
                    a.pageX = e.pageX,
                    a.pageY = e.pageY,
                    e.target.dispatchEvent(a)
            }
            function s(e) {
                var t = e.target;
                if (!/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)) {
                    var a = document.createEvent(window.MouseEvent ? "MouseEvents": "Event");
                    a.initEvent("click", !0, !0),
                        a._constructed = !0,
                        t.dispatchEvent(a)
                }
            }
            function c(e, t) {
                t.firstChild ? l(e, t.firstChild) : t.appendChild(e)
            }
            function l(e, t) {
                t.parentNode.insertBefore(e, t)
            }
            function u(e, t) {
                for (var a in t) e[a] = t[a]
            }
            function p(e, t, a, n, r, o) {
                var i = e - t,
                    s = Math.abs(i) / a,
                    c = o.deceleration,
                    l = o.itemHeight,
                    u = o.swipeBounceTime,
                    p = o.bounceTime,
                    d = o.swipeTime,
                    f = o.wheel ? 4 : 15,
                    h = e + s / c * (i < 0 ? -1 : 1);
                return o.wheel && l && (h = Math.round(h / l) * l),
                    h < n ? (h = r ? n - r / f * s: n, d = u - p) : h > 0 && (h = r ? r / f * s: 0, d = u - p),
                    {
                        destination: Math.round(h),
                        duration: d
                    }
            }
            var d = document.createElement("div").style,
                f = function() {
                    var e = {
                        webkit: "webkitTransform",
                        Moz: "MozTransform",
                        O: "OTransform",
                        ms: "msTransform",
                        standard: "transform"
                    };
                    for (var t in e) if (void 0 !== d[e[t]]) return t;
                    return ! 1
                } (),
                h = e("transform"),
                m = e("perspective") in d,
                g = "ontouchstart" in window,
                v = !1 !== h,
                y = e("transition") in d,
                b = {
                    transform: h,
                    transitionTimingFunction: e("transitionTimingFunction"),
                    transitionDuration: e("transitionDuration"),
                    transitionDelay: e("transitionDelay"),
                    transformOrigin: e("transformOrigin"),
                    transitionEnd: e("transitionEnd")
                },
                _ = {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2
                },
                w = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
                        function(e) {
                            return window.setTimeout(e, (e.interval || 100 / 60) / 2)
                        }
                } (),
                D = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
                        function(e) {
                            window.clearTimeout(e)
                        }
                } (),
                k = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion),
                x = {
                    swipe: {
                        style: "cubic-bezier(0.23, 1, 0.32, 1)",
                        fn: function(e) {
                            return 1 + --e * e * e * e * e
                        }
                    },
                    swipeBounce: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(e) {
                            return e * (2 - e)
                        }
                    },
                    bounce: {
                        style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                        fn: function(e) {
                            return 1 - --e * e * e * e
                        }
                    }
                },
                S = function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                T = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                            "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a),
                        n && e(t, n),
                            t
                    }
                } (),
                C = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                },
                M = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                },
                A = function() {
                    function e(e, t) {
                        var a = [],
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); ! (n = (i = s.next()).done) && (a.push(i.value), !t || a.length !== t); n = !0);
                        } catch(e) {
                            r = !0,
                                o = e
                        } finally {
                            try { ! n && s.
                                return && s.
                            return ()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return a
                    }
                    return function(t, a) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, a);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                } (),
                P = function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0,
                                 a = Array(e.length); t < e.length; t++) a[t] = e[t];
                        return a
                    }
                    return Array.from(e)
                },
                I = function() {
                    function e() {
                        S(this, e),
                            this._events = {}
                    }
                    return T(e, [{
                        key: "on",
                        value: function(e, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
                            this._events[e] || (this._events[e] = []),
                                this._events[e].push([t, a])
                        }
                    },
                        {
                            key: "once",
                            value: function(e, t) {
                                function a() {
                                    this.off(e, a),
                                    r || (r = !0, t.apply(n, arguments))
                                }
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
                                    r = !1;
                                this.on(e, a)
                            }
                        },
                        {
                            key: "off",
                            value: function(e, t) {
                                var a = this._events[e];
                                if (a) for (var n = a.length; n--;) a[n][0] === t && (a[n][0] = void 0)
                            }
                        },
                        {
                            key: "trigger",
                            value: function(e) {
                                var t = this._events[e];
                                if (t) for (var a = t.length,
                                                n = [].concat(P(t)), r = 0; r < a; r++) {
                                    var o = n[r],
                                        i = A(o, 2),
                                        s = i[0],
                                        c = i[1];
                                    s && s.apply(c, [].slice.call(arguments, 1))
                                }
                            }
                        }]),
                        e
                } (),
                N = function(e) {
                    function l(e, t) {
                        S(this, l);
                        var a = M(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
                        return a.wrapper = "string" == typeof e ? document.querySelector(e) : e,
                            a.scroller = a.wrapper.children[0],
                            a.scrollerStyle = a.scroller.style,
                            a.options = {
                                startX: 0,
                                startY: 0,
                                scrollY: !0,
                                directionLockThreshold: 5,
                                momentum: !0,
                                bounce: !0,
                                selectedIndex: 0,
                                rotate: 25,
                                wheel: !1,
                                snap: !1,
                                snapLoop: !1,
                                snapThreshold: .1,
                                swipeTime: 2500,
                                bounceTime: 700,
                                adjustTime: 400,
                                swipeBounceTime: 1200,
                                deceleration: .001,
                                momentumLimitTime: 300,
                                momentumLimitDistance: 15,
                                resizePolling: 60,
                                preventDefault: !0,
                                preventDefaultException: {
                                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                                },
                                HWCompositing: !0,
                                useTransition: !0,
                                useTransform: !0
                            },
                            u(a.options, t),
                            a.translateZ = a.options.HWCompositing && m ? " translateZ(0)": "",
                            a.options.useTransition = a.options.useTransition && y,
                            a.options.useTransform = a.options.useTransform && v,
                            a.options.eventPassthrough = !0 === a.options.eventPassthrough ? "vertical": a.options.eventPassthrough,
                            a.options.preventDefault = !a.options.eventPassthrough && a.options.preventDefault,
                            a.options.scrollX = "horizontal" !== a.options.eventPassthrough && a.options.scrollX,
                            a.options.scrollY = "vertical" !== a.options.eventPassthrough && a.options.scrollY,
                            a.options.freeScroll = a.options.freeScroll && !a.options.eventPassthrough,
                            a.options.directionLockThreshold = a.options.eventPassthrough ? 0 : a.options.directionLockThreshold,
                        !0 === a.options.tap && (a.options.tap = "tap"),
                            a._init(),
                        a.options.snap && a._initSnap(),
                            a.refresh(),
                        a.options.snap || a.scrollTo(a.options.startX, a.options.startY),
                            a.enable(),
                            a
                    }
                    return C(l, e),
                        T(l, [{
                            key: "_init",
                            value: function() {
                                this.x = 0,
                                    this.y = 0,
                                    this.directionX = 0,
                                    this.directionY = 0,
                                    this._addEvents()
                            }
                        },
                            {
                                key: "_initSnap",
                                value: function() {
                                    var e = this;
                                    if (this.currentPage = {},
                                            this.options.snapLoop) {
                                        var t = this.scroller.children;
                                        t.length > 0 && (c(t[t.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(t[1].cloneNode(!0)))
                                    }
                                    "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
                                        this.on("refresh",
                                            function() {
                                                if (e.pages = [], e.wrapperWidth && e.wrapperHeight && e.scrollerWidth && e.scrollerHeight) {
                                                    var t = e.options.snapStepX || e.wrapperWidth,
                                                        a = e.options.snapStepY || e.wrapperHeight,
                                                        n = 0,
                                                        o = void 0,
                                                        i = void 0,
                                                        s = void 0,
                                                        c = 0,
                                                        l = void 0,
                                                        u = 0,
                                                        p = void 0,
                                                        d = void 0,
                                                        f = void 0;
                                                    if (!0 === e.options.snap) for (i = Math.round(t / 2), s = Math.round(a / 2); n > -e.scrollerWidth;) {
                                                        for (e.pages[c] = [], l = 0, o = 0; o > -e.scrollerHeight;) e.pages[c][l] = {
                                                            x: Math.max(n, e.maxScrollX),
                                                            y: Math.max(o, e.maxScrollY),
                                                            width: t,
                                                            height: a,
                                                            cx: n - i,
                                                            cy: o - s
                                                        },
                                                            o -= a,
                                                            l++;
                                                        n -= t,
                                                            c++
                                                    } else for (d = e.options.snap, l = d.length, p = -1; c < l; c++) f = r(d[c]),
                                                    (0 === c || f.left <= r(d[c - 1]).left) && (u = 0, p++),
                                                    e.pages[u] || (e.pages[u] = []),
                                                        n = Math.max( - f.left, e.maxScrollX),
                                                        o = Math.max( - f.top, e.maxScrollY),
                                                        i = n - Math.round(f.width / 2),
                                                        s = o - Math.round(f.height / 2),
                                                        e.pages[u][p] = {
                                                            x: n,
                                                            y: o,
                                                            width: f.width,
                                                            height: f.height,
                                                            cx: i,
                                                            cy: s
                                                        },
                                                    n > e.maxScrollX && u++;
                                                    var h = e.options.snapLoop ? 1 : 0;
                                                    e.goToPage(e.currentPage.pageX || h, e.currentPage.pageY || 0, 0),
                                                        e.options.snapThreshold % 1 == 0 ? (e.snapThresholdX = e.options.snapThreshold, e.snapThresholdY = e.options.snapThreshold) : (e.snapThresholdX = Math.round(e.pages[e.currentPage.pageX][e.currentPage.pageY].width * e.options.snapThreshold), e.snapThresholdY = Math.round(e.pages[e.currentPage.pageX][e.currentPage.pageY].height * e.options.snapThreshold))
                                                }
                                            }),
                                        this.on("scrollEnd",
                                            function() {
                                                e.options.snapLoop && (0 === e.currentPage.pageX && e.goToPage(e.pages.length - 2, e.currentPage.pageY, 0), e.currentPage.pageX === e.pages.length - 1 && e.goToPage(1, e.currentPage.pageY, 0))
                                            }),
                                        this.on("flick",
                                            function() {
                                                var t = e.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(e.x - e.startX), 1e3), Math.min(Math.abs(e.y - e.startY), 1e3)), 300);
                                                e.goToPage(e.currentPage.pageX + e.directionX, e.currentPage.pageY + e.directionY, t)
                                            })
                                }
                            },
                            {
                                key: "_nearestSnap",
                                value: function(e, t) {
                                    if (!this.pages.length) return {
                                        x: 0,
                                        y: 0,
                                        pageX: 0,
                                        pageY: 0
                                    };
                                    var a = 0;
                                    if (Math.abs(e - this.absStartX) <= this.snapThresholdX && Math.abs(t - this.absStartY) <= this.snapThresholdY) return this.currentPage;
                                    e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
                                        t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY);
                                    for (var n = this.pages.length; a < n; a++) if (e >= this.pages[a][0].cx) {
                                        e = this.pages[a][0].x;
                                        break
                                    }
                                    n = this.pages[a].length;
                                    for (var r = 0; r < n; r++) if (t >= this.pages[0][r].cy) {
                                        t = this.pages[0][r].y;
                                        break
                                    }
                                    return a === this.currentPage.pageX && (a += this.directionX, a < 0 ? a = 0 : a >= this.pages.length && (a = this.pages.length - 1), e = this.pages[a][0].x),
                                    r === this.currentPage.pageY && (r += this.directionY, r < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), t = this.pages[0][r].y),
                                        {
                                            x: e,
                                            y: t,
                                            pageX: a,
                                            pageY: r
                                        }
                                }
                            },
                            {
                                key: "_addEvents",
                                value: function() {
                                    var e = t;
                                    this._handleEvents(e)
                                }
                            },
                            {
                                key: "_removeEvents",
                                value: function() {
                                    var e = a;
                                    this._handleEvents(e)
                                }
                            },
                            {
                                key: "_handleEvents",
                                value: function(e) {
                                    var t = this.options.bindToWrapper ? this.wrapper: window;
                                    e(window, "orientationchange", this),
                                        e(window, "resize", this),
                                    this.options.click && e(this.wrapper, "click", this),
                                    this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(t, "mousemove", this), e(t, "mousecancel", this), e(t, "mouseup", this)),
                                    g && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(t, "touchmove", this), e(t, "touchcancel", this), e(t, "touchend", this)),
                                        e(this.scroller, b.transitionEnd, this)
                                }
                            },
                            {
                                key: "_start",
                                value: function(e) {
                                    var t = _[e.type];
                                    if ((1 === t || 0 === e.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== t)) {
                                        if (this.initiated = t, !this.options.preventDefault || k || o(e.target, this.options.preventDefaultException) || e.preventDefault(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = +new Date, this.options.wheel && (this.target = e.target), this.options.useTransition && this.isInTransition) {
                                            this.isInTransition = !1;
                                            var a = this.getComputedPosition();
                                            this._translate(a.x, a.y),
                                                this.options.wheel ? this.target = this.items[Math.round( - a.y / this.itemHeight)] : this.trigger("scrollEnd", {
                                                    x: this.x,
                                                    y: this.y
                                                })
                                        }
                                        var n = e.touches ? e.touches[0] : e;
                                        this.startX = this.x,
                                            this.startY = this.y,
                                            this.absStartX = this.x,
                                            this.absStartY = this.y,
                                            this.pointX = n.pageX,
                                            this.pointY = n.pageY,
                                            this.trigger("beforeScrollStart")
                                    }
                                }
                            },
                            {
                                key: "_move",
                                value: function(e) {
                                    if (this.enabled && !this.destroyed && _[e.type] === this.initiated) {
                                        this.options.preventDefault && e.preventDefault();
                                        var t = e.touches ? e.touches[0] : e,
                                            a = t.pageX - this.pointX,
                                            n = t.pageY - this.pointY;
                                        this.pointX = t.pageX,
                                            this.pointY = t.pageY,
                                            this.distX += a,
                                            this.distY += n;
                                        var r = Math.abs(this.distX),
                                            o = Math.abs(this.distY),
                                            i = +new Date;
                                        if (! (i - this.endTime > this.options.momentumLimitTime && o < this.options.momentumLimitDistance && r < this.options.momentumLimitDistance)) {
                                            if (this.directionLocked || this.options.freeScroll || (r > o + this.options.directionLockThreshold ? this.directionLocked = "h": o >= r + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" === this.directionLocked) {
                                                if ("vertical" === this.options.eventPassthrough) e.preventDefault();
                                                else if ("horizontal" === this.options.eventPassthrough) return void(this.initiated = !1);
                                                n = 0
                                            } else if ("v" === this.directionLocked) {
                                                if ("horizontal" === this.options.eventPassthrough) e.preventDefault();
                                                else if ("vertical" === this.options.eventPassthrough) return void(this.initiated = !1);
                                                a = 0
                                            }
                                            a = this.hasHorizontalScroll ? a: 0,
                                                n = this.hasVerticalScroll ? n: 0;
                                            var s = this.x + a,
                                                c = this.y + n; (s > 0 || s < this.maxScrollX) && (s = this.options.bounce ? this.x + a / 3 : s > 0 ? 0 : this.maxScrollX),
                                            (c > 0 || c < this.maxScrollY) && (c = this.options.bounce ? this.y + n / 3 : c > 0 ? 0 : this.maxScrollY),
                                            this.moved || (this.moved = !0, this.trigger("scrollStart")),
                                                this._translate(s, c),
                                            i - this.startTime > this.options.momentumLimitTime && (this.startTime = i, this.startX = this.x, this.startY = this.y, 1 === this.options.probeType && this.trigger("scroll", {
                                                x: this.x,
                                                y: this.y
                                            })),
                                            this.options.probeType > 1 && this.trigger("scroll", {
                                                x: this.x,
                                                y: this.y
                                            });
                                            var l = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
                                                u = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                                                p = this.pointX - l,
                                                d = this.pointY - u; (p > document.documentElement.clientWidth - this.options.momentumLimitDistance || p < this.options.momentumLimitDistance || d < this.options.momentumLimitDistance || d > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(e)
                                        }
                                    }
                                }
                            },
                            {
                                key: "_end",
                                value: function(e) {
                                    if (this.enabled && !this.destroyed && _[e.type] === this.initiated && (this.initiated = !1, this.options.preventDefault && !o(e.target, this.options.preventDefaultException) && e.preventDefault(), this.trigger("touchend", {
                                            x: this.x,
                                            y: this.y
                                        }), !this.resetPosition(this.options.bounceTime, x.bounce))) {
                                        this.isInTransition = !1;
                                        var t = Math.round(this.x),
                                            a = Math.round(this.y);
                                        if (!this.moved) {
                                            if (this.options.wheel) {
                                                if (this.target && "wheel-scroll" === this.target.className) {
                                                    var r = Math.abs(Math.round(a / this.itemHeight)),
                                                        c = Math.round((this.pointY + n(this.target).top - this.itemHeight / 2) / this.itemHeight);
                                                    this.target = this.items[r + c]
                                                }
                                                this.scrollToElement(this.target, this.options.adjustTime, !0, !0, x.swipe)
                                            } else this.options.tap && i(e, this.options.tap),
                                            this.options.click && s(e);
                                            return void this.trigger("scrollCancel")
                                        }
                                        this.scrollTo(t, a);
                                        var l = t - this.absStartX,
                                            u = a - this.absStartY;
                                        this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0,
                                            this.directionY = u > 0 ? -1 : u < 0 ? 1 : 0,
                                            this.endTime = +new Date;
                                        var d = this.endTime - this.startTime,
                                            f = Math.abs(t - this.startX),
                                            h = Math.abs(a - this.startY);
                                        if (this._events.flick && d < this.options.momentumLimitTime && f < this.options.momentumLimitDistance && h < this.options.momentumLimitDistance) return void this.trigger("flick");
                                        var m = 0;
                                        if (this.options.momentum && d < this.options.momentumLimitTime && (h > this.options.momentumLimitDistance || f > this.options.momentumLimitDistance)) {
                                            var g = this.hasHorizontalScroll ? p(this.x, this.startX, d, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options) : {
                                                    destination: t,
                                                    duration: 0
                                                },
                                                v = this.hasVerticalScroll ? p(this.y, this.startY, d, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options) : {
                                                    destination: a,
                                                    duration: 0
                                                };
                                            t = g.destination,
                                                a = v.destination,
                                                m = Math.max(g.duration, v.duration),
                                                this.isInTransition = 1
                                        } else this.options.wheel && (a = Math.round(a / this.itemHeight) * this.itemHeight, m = this.options.adjustTime);
                                        var y = x.swipe;
                                        if (this.options.snap) {
                                            var b = this._nearestSnap(t, a);
                                            this.currentPage = b,
                                                m = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(t - b.x), 1e3), Math.min(Math.abs(a - b.y), 1e3)), 300),
                                                t = b.x,
                                                a = b.y,
                                                this.directionX = 0,
                                                this.directionY = 0,
                                                y = x.bounce
                                        }
                                        if (t !== this.x || a !== this.y) return (t > 0 || t < this.maxScrollX || a > 0 || a < this.maxScrollY) && (y = x.swipeBounce),
                                            void this.scrollTo(t, a, m, y);
                                        this.options.wheel && (this.selectedIndex = 0 | Math.abs(this.y / this.itemHeight)),
                                            this.trigger("scrollEnd", {
                                                x: this.x,
                                                y: this.y
                                            })
                                    }
                                }
                            },
                            {
                                key: "_resize",
                                value: function() {
                                    var e = this;
                                    this.enabled && (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                                            e.refresh()
                                        },
                                        this.options.resizePolling))
                                }
                            },
                            {
                                key: "_startProbe",
                                value: function() {
                                    function e() {
                                        var a = t.getComputedPosition();
                                        t.trigger("scroll", a),
                                        t.isInTransition && (t.probeTimer = w(e))
                                    }
                                    D(this.probeTimer),
                                        this.probeTimer = w(e);
                                    var t = this
                                }
                            },
                            {
                                key: "_transitionTime",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    if (this.scrollerStyle[b.transitionDuration] = t + "ms", this.options.wheel && !k) for (var a = 0; a < this.items.length; a++) this.items[a].style[b.transitionDuration] = t + "ms"; ! t && k && (this.scrollerStyle[b.transitionDuration] = "0.001s", w(function() {
                                        "0.0001ms" === e.scrollerStyle[b.transitionDuration] && (e.scrollerStyle[b.transitionDuration] = "0s")
                                    }))
                                }
                            },
                            {
                                key: "_transitionTimingFunction",
                                value: function(e) {
                                    if (this.scrollerStyle[b.transitionTimingFunction] = e, this.options.wheel && !k) for (var t = 0; t < this.items.length; t++) this.items[t].style[b.transitionTimingFunction] = e
                                }
                            },
                            {
                                key: "_transitionEnd",
                                value: function(e) {
                                    e.target === this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime, x.bounce) || (this.isInTransition = !1, this.trigger("scrollEnd", {
                                        x: this.x,
                                        y: this.y
                                    })))
                                }
                            },
                            {
                                key: "_translate",
                                value: function(e, t) {
                                    if (this.options.useTransform ? this.scrollerStyle[b.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ: (e = Math.round(e), t = Math.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.options.wheel && !k) for (var a = 0; a < this.items.length; a++) {
                                        var n = this.options.rotate * (t / this.itemHeight + a);
                                        this.items[a].style[b.transform] = "rotateX(" + n + "deg)"
                                    }
                                    this.x = e,
                                        this.y = t
                                }
                            },
                            {
                                key: "enable",
                                value: function() {
                                    this.enabled = !0
                                }
                            },
                            {
                                key: "disable",
                                value: function() {
                                    this.enabled = !1
                                }
                            },
                            {
                                key: "refresh",
                                value: function() {
                                    this.wrapper.offsetHeight;
                                    this.wrapperWidth = parseInt(this.wrapper.style.width) || this.wrapper.clientWidth,
                                        this.wrapperHeight = parseInt(this.wrapper.style.height) || this.wrapper.clientHeight,
                                        this.scrollerWidth = parseInt(this.scroller.style.width) || this.scroller.clientWidth,
                                        this.scrollerHeight = parseInt(this.scroller.style.height) || this.scroller.clientHeight,
                                        this.options.wheel ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.items[0].clientHeight: 0, void 0 === this.selectedIndex && (this.selectedIndex = this.options.selectedIndex), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
                                        this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
                                        this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
                                    this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
                                    this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
                                        this.endTime = 0,
                                        this.directionX = 0,
                                        this.directionY = 0,
                                        this.wrapperOffset = n(this.wrapper),
                                        this.trigger("refresh"),
                                        this.resetPosition()
                                }
                            },
                            {
                                key: "resetPosition",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.bounce,
                                        a = this.x; ! this.hasHorizontalScroll || a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX);
                                    var n = this.y;
                                    return ! this.hasVerticalScroll || n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY),
                                    (a !== this.x || n !== this.y) && (this.scrollTo(a, n, e, t), !0)
                                }
                            },
                            {
                                key: "wheelTo",
                                value: function(e) {
                                    this.options.wheel && (this.y = -e * this.itemHeight, this.scrollTo(0, this.y))
                                }
                            },
                            {
                                key: "scrollBy",
                                value: function(e, t) {
                                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.bounce;
                                    e = this.x + e,
                                        t = this.y + t,
                                        this.scrollTo(e, t, a, n)
                                }
                            },
                            {
                                key: "scrollTo",
                                value: function(e, t, a) {
                                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.bounce;
                                    this.isInTransition = this.options.useTransition && a > 0 && (e !== this.x || t !== this.y),
                                    a && !this.options.useTransition || (this._transitionTimingFunction(n.style), this._transitionTime(a), this._translate(e, t), a && 3 === this.options.probeType && this._startProbe(), this.options.wheel && (t > 0 ? this.selectedIndex = 0 : t < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = 0 | Math.abs(t / this.itemHeight)))
                                }
                            },
                            {
                                key: "getSelectedIndex",
                                value: function() {
                                    return this.options.wheel && this.selectedIndex
                                }
                            },
                            {
                                key: "getCurrentPage",
                                value: function() {
                                    return this.options.snap && this.currentPage
                                }
                            },
                            {
                                key: "scrollToElement",
                                value: function(e, t, a, r, o) {
                                    if (e && (e = e.nodeType ? e: this.scroller.querySelector(e), !this.options.wheel || "wheel-item" === e.className)) {
                                        var i = n(e);
                                        i.left -= this.wrapperOffset.left,
                                            i.top -= this.wrapperOffset.top,
                                        !0 === a && (a = Math.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                                        !0 === r && (r = Math.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                                            i.left -= a || 0,
                                            i.top -= r || 0,
                                            i.left = i.left > 0 ? 0 : i.left < this.maxScrollX ? this.maxScrollX: i.left,
                                            i.top = i.top > 0 ? 0 : i.top < this.maxScrollY ? this.maxScrollY: i.top,
                                        this.options.wheel && (i.top = Math.round(i.top / this.itemHeight) * this.itemHeight),
                                            t = void 0 === t || null === t || "auto" === t ? Math.max(Math.abs(this.x - i.left), Math.abs(this.y - i.top)) : t,
                                            this.scrollTo(i.left, i.top, t, o)
                                    }
                                }
                            },
                            {
                                key: "getComputedPosition",
                                value: function() {
                                    var e = window.getComputedStyle(this.scroller, null),
                                        t = void 0,
                                        a = void 0;
                                    return this.options.useTransform ? (e = e[b.transform].split(")")[0].split(", "), t = +(e[12] || e[4]), a = +(e[13] || e[5])) : (t = +e.left.replace(/[^-\d.]/g, ""), a = +e.top.replace(/[^-\d.]/g, "")),
                                        {
                                            x: t,
                                            y: a
                                        }
                                }
                            },
                            {
                                key: "goToPage",
                                value: function(e, t, a) {
                                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.bounce;
                                    e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0),
                                        t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
                                    var r = this.pages[e][t].x,
                                        o = this.pages[e][t].y;
                                    a = void 0 === a ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(o - this.y), 1e3)), 300) : a,
                                        this.currentPage = {
                                            x: r,
                                            y: o,
                                            pageX: e,
                                            pageY: t
                                        },
                                        this.scrollTo(r, o, a, n)
                                }
                            },
                            {
                                key: "next",
                                value: function(e, t) {
                                    var a = this.currentPage.pageX,
                                        n = this.currentPage.pageY;
                                    a++,
                                    a >= this.pages.length && this.hasVerticalScroll && (a = 0, n++),
                                        this.goToPage(a, n, e, t)
                                }
                            },
                            {
                                key: "prev",
                                value: function(e, t) {
                                    var a = this.currentPage.pageX,
                                        n = this.currentPage.pageY;
                                    a--,
                                    a < 0 && this.hasVerticalScroll && (a = 0, n--),
                                        this.goToPage(a, n, e, t)
                                }
                            },
                            {
                                key: "destroy",
                                value: function() {
                                    this._removeEvents(),
                                        this.destroyed = !0,
                                        this.trigger("destroy")
                                }
                            },
                            {
                                key: "handleEvent",
                                value: function(e) {
                                    switch (e.type) {
                                        case "touchstart":
                                        case "mousedown":
                                            this._start(e);
                                            break;
                                        case "touchmove":
                                        case "mousemove":
                                            this._move(e);
                                            break;
                                        case "touchend":
                                        case "mouseup":
                                        case "touchcancel":
                                        case "mousecancel":
                                            this._end(e);
                                            break;
                                        case "orientationchange":
                                        case "resize":
                                            this._resize();
                                            break;
                                        case "transitionend":
                                        case "webkitTransitionEnd":
                                        case "oTransitionEnd":
                                        case "MSTransitionEnd":
                                            this._transitionEnd(e);
                                            break;
                                        case "click":
                                            !this.enabled || e._constructed || /(SELECT|INPUT|TEXTAREA)/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation())
                                    }
                                }
                            }]),
                        l
                } (I);
            return N.Version = "0.4.0",
                N
        }),
    function(e) {
        "use strict";
        function t(e) {
            var t = e.length,
                n = a.type(e);
            return "function" !== n && !a.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        if (!e.jQuery) {
            var a = function(e, t) {
                return new a.fn.init(e, t)
            };
            a.isWindow = function(e) {
                return e && e === e.window
            },
                a.type = function(e) {
                    return e ? "object" == typeof e || "function" == typeof e ? r[i.call(e)] || "object": typeof e: e + ""
                },
                a.isArray = Array.isArray ||
                    function(e) {
                        return "array" === a.type(e)
                    },
                a.isPlainObject = function(e) {
                    var t;
                    if (!e || "object" !== a.type(e) || e.nodeType || a.isWindow(e)) return ! 1;
                    try {
                        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(e) {
                        return ! 1
                    }
                    for (t in e);
                    return void 0 === t || o.call(e, t)
                },
                a.each = function(e, a, n) {
                    var r = 0,
                        o = e.length,
                        i = t(e);
                    if (n) {
                        if (i) for (; r < o && !1 !== a.apply(e[r], n); r++);
                        else for (r in e) if (e.hasOwnProperty(r) && !1 === a.apply(e[r], n)) break
                    } else if (i) for (; r < o && !1 !== a.call(e[r], r, e[r]); r++);
                    else for (r in e) if (e.hasOwnProperty(r) && !1 === a.call(e[r], r, e[r])) break;
                    return e
                },
                a.data = function(e, t, r) {
                    if (void 0 === r) {
                        var o = e[a.expando],
                            i = o && n[o];
                        if (void 0 === t) return i;
                        if (i && t in i) return i[t]
                    } else if (void 0 !== t) {
                        var s = e[a.expando] || (e[a.expando] = ++a.uuid);
                        return n[s] = n[s] || {},
                            n[s][t] = r,
                            r
                    }
                },
                a.removeData = function(e, t) {
                    var r = e[a.expando],
                        o = r && n[r];
                    o && (t ? a.each(t,
                        function(e, t) {
                            delete o[t]
                        }) : delete n[r])
                },
                a.extend = function() {
                    var e, t, n, r, o, i, s = arguments[0] || {},
                        c = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof s && (u = s, s = arguments[c] || {},
                        c++), "object" != typeof s && "function" !== a.type(s) && (s = {}), c === l && (s = this, c--); c < l; c++) if (o = arguments[c]) for (r in o) o.hasOwnProperty(r) && (e = s[r], n = o[r], s !== n && (u && n && (a.isPlainObject(n) || (t = a.isArray(n))) ? (t ? (t = !1, i = e && a.isArray(e) ? e: []) : i = e && a.isPlainObject(e) ? e: {},
                        s[r] = a.extend(u, i, n)) : void 0 !== n && (s[r] = n)));
                    return s
                },
                a.queue = function(e, n, r) {
                    if (e) {
                        n = (n || "fx") + "queue";
                        var o = a.data(e, n);
                        return r ? (!o || a.isArray(r) ? o = a.data(e, n,
                            function(e, a) {
                                var n = [];
                                return e && (t(Object(e)) ?
                                    function(e, t) {
                                        for (var a = +t.length,
                                                 n = 0,
                                                 r = e.length; n < a;) e[r++] = t[n++];
                                        if (a !== a) for (; void 0 !== t[n];) e[r++] = t[n++];
                                        e.length = r
                                    } (n, "string" == typeof e ? [e] : e) : [].push.call(n, e)),
                                    n
                            } (r)) : o.push(r), o) : o || []
                    }
                },
                a.dequeue = function(e, t) {
                    a.each(e.nodeType ? [e] : e,
                        function(e, n) {
                            t = t || "fx";
                            var r = a.queue(n, t),
                                o = r.shift();
                            "inprogress" === o && (o = r.shift()),
                            o && ("fx" === t && r.unshift("inprogress"), o.call(n,
                                function() {
                                    a.dequeue(n, t)
                                }))
                        })
                },
                a.fn = a.prototype = {
                    init: function(e) {
                        if (e.nodeType) return this[0] = e,
                            this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        var e = this[0],
                            t = function(e) {
                                for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                                return t || document
                            } (e),
                            n = this.offset(),
                            r = /^(?:body|html)$/i.test(t.nodeName) ? {
                                top: 0,
                                left: 0
                            }: a(t).offset();
                        return n.top -= parseFloat(e.style.marginTop) || 0,
                            n.left -= parseFloat(e.style.marginLeft) || 0,
                        t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0),
                            {
                                top: n.top - r.top,
                                left: n.left - r.left
                            }
                    }
                };
            var n = {};
            a.expando = "velocity" + (new Date).getTime(),
                a.uuid = 0;
            for (var r = {},
                     o = r.hasOwnProperty,
                     i = r.toString,
                     s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), c = 0; c < s.length; c++) r["[object " + s[c] + "]"] = s[c].toLowerCase();
            a.fn.init.prototype = a.fn,
                e.Velocity = {
                    Utilities: a
                }
        }
    } (window),
    function(e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    } (function() {
        "use strict";
        return function(e, t, a, n) {
            function r(e) {
                for (var t = -1,
                         a = e ? e.length: 0, n = []; ++t < a;) {
                    var r = e[t];
                    r && n.push(r)
                }
                return n
            }
            function o(e) {
                return _.isWrapped(e) ? e = y.call(e) : _.isNode(e) && (e = [e]),
                    e
            }
            function i(e) {
                var t = h.data(e, "velocity");
                return null === t ? n: t
            }
            function s(e, t) {
                var a = i(e);
                a && a.delayTimer && !a.delayPaused && (a.delayRemaining = a.delay - t + a.delayBegin, a.delayPaused = !0, clearTimeout(a.delayTimer.setTimeout))
            }
            function c(e, t) {
                var a = i(e);
                a && a.delayTimer && a.delayPaused && (a.delayPaused = !1, a.delayTimer.setTimeout = setTimeout(a.delayTimer.next, a.delayRemaining))
            }
            function l(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }
            function u(e, a, n, r) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }
                function i(e, t) {
                    return 3 * t - 6 * e
                }
                function s(e) {
                    return 3 * e
                }
                function c(e, t, a) {
                    return ((o(t, a) * e + i(t, a)) * e + s(t)) * e
                }
                function l(e, t, a) {
                    return 3 * o(t, a) * e * e + 2 * i(t, a) * e + s(t)
                }
                function u(t, a) {
                    for (var r = 0; r < m; ++r) {
                        var o = l(a, e, n);
                        if (0 === o) return a;
                        a -= (c(a, e, n) - t) / o
                    }
                    return a
                }
                function p() {
                    for (var t = 0; t < b; ++t) k[t] = c(t * _, e, n)
                }
                function d(t, a, r) {
                    var o, i, s = 0;
                    do {
                        i = a + (r - a) / 2, o = c(i, e, n) - t, o > 0 ? r = i: a = i
                    } while ( Math . abs ( o ) > v && ++s < y);
                    return i
                }
                function f(t) {
                    for (var a = 0,
                             r = 1,
                             o = b - 1; r !== o && k[r] <= t; ++r) a += _; --r;
                    var i = (t - k[r]) / (k[r + 1] - k[r]),
                        s = a + i * _,
                        c = l(s, e, n);
                    return c >= g ? u(t, s) : 0 === c ? s: d(t, a, a + _)
                }
                function h() {
                    x = !0,
                    e === a && n === r || p()
                }
                var m = 4,
                    g = .001,
                    v = 1e-7,
                    y = 10,
                    b = 11,
                    _ = 1 / (b - 1),
                    w = "Float32Array" in t;
                if (4 !== arguments.length) return ! 1;
                for (var D = 0; D < 4; ++D) if ("number" != typeof arguments[D] || isNaN(arguments[D]) || !isFinite(arguments[D])) return ! 1;
                e = Math.min(e, 1),
                    n = Math.min(n, 1),
                    e = Math.max(e, 0),
                    n = Math.max(n, 0);
                var k = w ? new Float32Array(b) : new Array(b),
                    x = !1,
                    S = function(t) {
                        return x || h(),
                            e === a && n === r ? t: 0 === t ? 0 : 1 === t ? 1 : c(f(t), a, r)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: a
                    },
                        {
                            x: n,
                            y: r
                        }]
                };
                var T = "generateBezier(" + [e, a, n, r] + ")";
                return S.toString = function() {
                    return T
                },
                    S
            }
            function p(e, t) {
                var a = e;
                return _.isString(e) ? x.Easings[e] || (a = !1) : a = _.isArray(e) && 1 === e.length ? l.apply(null, e) : _.isArray(e) && 2 === e.length ? S.apply(null, e.concat([t])) : !(!_.isArray(e) || 4 !== e.length) && u.apply(null, e),
                !1 === a && (a = x.Easings[x.defaults.easing] ? x.defaults.easing: k),
                    a
            }
            function d(e) {
                if (e) {
                    var t = x.timestamp && !0 !== e ? e: v.now(),
                        a = x.State.calls.length;
                    a > 1e4 && (x.State.calls = r(x.State.calls), a = x.State.calls.length);
                    for (var o = 0; o < a; o++) if (x.State.calls[o]) {
                        var s = x.State.calls[o],
                            c = s[0],
                            l = s[2],
                            u = s[3],
                            p = !!u,
                            g = null,
                            y = s[5],
                            b = s[6];
                        if (u || (u = x.State.calls[o][3] = t - 16), y) {
                            if (!0 !== y.resume) continue;
                            u = s[3] = Math.round(t - b - 16),
                                s[5] = null
                        }
                        b = s[6] = t - u;
                        for (var w = Math.min(b / l.duration, 1), D = 0, k = c.length; D < k; D++) {
                            var S = c[D],
                                C = S.element;
                            if (i(C)) {
                                var A = !1;
                                if (l.display !== n && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        h.each(P,
                                            function(e, t) {
                                                T.setPropertyValue(C, "display", t)
                                            })
                                    }
                                    T.setPropertyValue(C, "display", l.display)
                                }
                                l.visibility !== n && "hidden" !== l.visibility && T.setPropertyValue(C, "visibility", l.visibility);
                                for (var I in S) if (S.hasOwnProperty(I) && "element" !== I) {
                                    var N, E = S[I],
                                        O = _.isString(E.easing) ? x.Easings[E.easing] : E.easing;
                                    if (_.isString(E.pattern)) {
                                        var j = 1 === w ?
                                            function(e, t, a) {
                                                var n = E.endValue[t];
                                                return a ? Math.round(n) : n
                                            }: function(e, t, a) {
                                                var n = E.startValue[t],
                                                    r = E.endValue[t] - n,
                                                    o = n + r * O(w, l, r);
                                                return a ? Math.round(o) : o
                                            };
                                        N = E.pattern.replace(/{(\d+)(!)?}/g, j)
                                    } else if (1 === w) N = E.endValue;
                                    else {
                                        var $ = E.endValue - E.startValue;
                                        N = E.startValue + $ * O(w, l, $)
                                    }
                                    if (!p && N === E.currentValue) continue;
                                    if (E.currentValue = N, "tween" === I) g = N;
                                    else {
                                        var L;
                                        if (T.Hooks.registered[I]) {
                                            L = T.Hooks.getRoot(I);
                                            var R = i(C).rootPropertyValueCache[L];
                                            R && (E.rootPropertyValue = R)
                                        }
                                        var B = T.setPropertyValue(C, I, E.currentValue + (m < 9 && 0 === parseFloat(N) ? "": E.unitType), E.rootPropertyValue, E.scrollData);
                                        T.Hooks.registered[I] && (T.Normalizations.registered[L] ? i(C).rootPropertyValueCache[L] = T.Normalizations.registered[L]("extract", null, B[1]) : i(C).rootPropertyValueCache[L] = B[1]),
                                        "transform" === B[0] && (A = !0)
                                    }
                                }
                                l.mobileHA && i(C).transformCache.translate3d === n && (i(C).transformCache.translate3d = "(0px, 0px, 0px)", A = !0),
                                A && T.flushTransformCache(C)
                            }
                        }
                        l.display !== n && "none" !== l.display && (x.State.calls[o][2].display = !1),
                        l.visibility !== n && "hidden" !== l.visibility && (x.State.calls[o][2].visibility = !1),
                        l.progress && l.progress.call(s[1], s[1], w, Math.max(0, u + l.duration - t), u, g),
                        1 === w && f(o)
                    }
                }
                x.State.isTicking && M(d)
            }
            function f(e, t) {
                if (!x.State.calls[e]) return ! 1;
                for (var a = x.State.calls[e][0], r = x.State.calls[e][1], o = x.State.calls[e][2], s = x.State.calls[e][4], c = !1, l = 0, u = a.length; l < u; l++) {
                    var p = a[l].element;
                    t || o.loop || ("none" === o.display && T.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && T.setPropertyValue(p, "visibility", o.visibility));
                    var d = i(p);
                    if (!0 !== o.loop && (h.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(p)[1])) && d) {
                        d.isAnimating = !1,
                            d.rootPropertyValueCache = {};
                        var f = !1;
                        h.each(T.Lists.transforms3D,
                            function(e, t) {
                                var a = /^scale/.test(t) ? 1 : 0,
                                    r = d.transformCache[t];
                                d.transformCache[t] !== n && new RegExp("^\\(" + a + "[^.]").test(r) && (f = !0, delete d.transformCache[t])
                            }),
                        o.mobileHA && (f = !0, delete d.transformCache.translate3d),
                        f && T.flushTransformCache(p),
                            T.Values.removeClass(p, "velocity-animating")
                    }
                    if (!t && o.complete && !o.loop && l === u - 1) try {
                        o.complete.call(r, r)
                    } catch(e) {
                        setTimeout(function() {
                                throw e
                            },
                            1)
                    }
                    s && !0 !== o.loop && s(r),
                    d && !0 === o.loop && !t && (h.each(d.tweensContainer,
                        function(e, t) {
                            if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                                var a = t.startValue;
                                t.startValue = t.endValue,
                                    t.endValue = a
                            }
                            /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                        }), x(p, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })),
                    !1 !== o.queue && h.dequeue(p, o.queue)
                }
                x.State.calls[e] = !1;
                for (var m = 0,
                         g = x.State.calls.length; m < g; m++) if (!1 !== x.State.calls[m]) {
                    c = !0;
                    break
                } ! 1 === c && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
            }
            var h, m = function() {
                    if (a.documentMode) return a.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = a.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null,
                            e
                    }
                    return n
                } (),
                g = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame ||
                        function(t) {
                            var a, n = (new Date).getTime();
                            return a = Math.max(0, 16 - (n - e)),
                                e = n + a,
                                setTimeout(function() {
                                        t(n + a)
                                    },
                                    a)
                        }
                } (),
                v = function() {
                    var e = t.performance || {};
                    if ("function" != typeof e.now) {
                        var a = e.timing && e.timing.navigationStart ? e.timing.navigationStart: (new Date).getTime();
                        e.now = function() {
                            return (new Date).getTime() - a
                        }
                    }
                    return e
                } (),
                y = function() {
                    var e = Array.prototype.slice;
                    try {
                        return e.call(a.documentElement),
                            e
                    } catch(t) {
                        return function(t, a) {
                            var n = this.length;
                            if ("number" != typeof t && (t = 0), "number" != typeof a && (a = n), this.slice) return e.call(this, t, a);
                            var r, o = [],
                                i = t >= 0 ? t: Math.max(0, n + t),
                                s = a < 0 ? n + a: Math.min(a, n),
                                c = s - i;
                            if (c > 0) if (o = new Array(c), this.charAt) for (r = 0; r < c; r++) o[r] = this.charAt(i + r);
                            else for (r = 0; r < c; r++) o[r] = this[i + r];
                            return o
                        }
                    }
                } (),
                b = function() {
                    return Array.prototype.includes ?
                        function(e, t) {
                            return e.includes(t)
                        }: Array.prototype.indexOf ?
                            function(e, t) {
                                return e.indexOf(t) >= 0
                            }: function(e, t) {
                                for (var a = 0; a < e.length; a++) if (e[a] === t) return ! 0;
                                return ! 1
                            }
                },
                _ = {
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray ||
                    function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isWrapped: function(e) {
                        return e && e !== t && _.isNumber(e.length) && !_.isString(e) && !_.isFunction(e) && !_.isNode(e) && (0 === e.length || _.isNode(e[0]))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
                        return ! 0
                    }
                },
                w = !1;
            if (e.fn && e.fn.jquery ? (h = e, w = !0) : h = t.Velocity.Utilities, m <= 8 && !w) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (m <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var D = 400,
                k = "swing",
                x = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: a.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: h,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: D,
                        easing: k,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(e) {
                        h.data(e, "velocity", {
                            isSVG: _.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(e) {
                        var t = (new Date).getTime();
                        h.each(x.State.calls,
                            function(t, a) {
                                if (a) {
                                    if (e !== n && (a[2].queue !== e || !1 === a[2].queue)) return ! 0;
                                    a[5] = {
                                        resume: !1
                                    }
                                }
                            }),
                            h.each(x.State.delayedElements,
                                function(e, a) {
                                    a && s(a, t)
                                })
                    },
                    resumeAll: function(e) {
                        var t = (new Date).getTime();
                        h.each(x.State.calls,
                            function(t, a) {
                                if (a) {
                                    if (e !== n && (a[2].queue !== e || !1 === a[2].queue)) return ! 0;
                                    a[5] && (a[5].resume = !0)
                                }
                            }),
                            h.each(x.State.delayedElements,
                                function(e, a) {
                                    a && c(a, t)
                                })
                    }
                };
            t.pageYOffset !== n ? (x.State.scrollAnchor = t, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = a.documentElement || a.body.parentNode || a.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
            var S = function() {
                function e(e) {
                    return - e.tension * e.x - e.friction * e.v
                }
                function t(t, a, n) {
                    var r = {
                        x: t.x + n.dx * a,
                        v: t.v + n.dv * a,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }
                function a(a, n) {
                    var r = {
                            dx: a.v,
                            dv: e(a)
                        },
                        o = t(a, .5 * n, r),
                        i = t(a, .5 * n, o),
                        s = t(a, n, i),
                        c = 1 / 6 * (r.dx + 2 * (o.dx + i.dx) + s.dx),
                        l = 1 / 6 * (r.dv + 2 * (o.dv + i.dv) + s.dv);
                    return a.x = a.x + c * n,
                        a.v = a.v + l * n,
                        a
                }
                return function e(t, n, r) {
                    var o, i, s, c = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        l = [0],
                        u = 0;
                    for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, r = r || null, c.tension = t, c.friction = n, o = null !== r, o ? (u = e(t, n), i = u / r * .016) : i = .016; s = a(s || c, i), l.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                    return o ?
                        function(e) {
                            return l[e * (l.length - 1) | 0]
                        }: u
                }
            } ();
            x.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return.5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            },
                h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]],
                    function(e, t) {
                        x.Easings[t[0]] = u.apply(null, t[1])
                    });
            var T = x.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < T.Lists.colors.length; e++) {
                            var t = "color" === T.Lists.colors[e] ? "0 0 0 1": "255 255 255 1";
                            T.Hooks.templates[T.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var a, n, r;
                        if (m) for (a in T.Hooks.templates) if (T.Hooks.templates.hasOwnProperty(a)) {
                            n = T.Hooks.templates[a],
                                r = n[0].split(" ");
                            var o = n[1].match(T.RegEx.valueSplit);
                            "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), T.Hooks.templates[a] = [r.join(" "), o.join(" ")])
                        }
                        for (a in T.Hooks.templates) if (T.Hooks.templates.hasOwnProperty(a)) {
                            n = T.Hooks.templates[a],
                                r = n[0].split(" ");
                            for (var i in r) if (r.hasOwnProperty(i)) {
                                var s = a + r[i],
                                    c = i;
                                T.Hooks.registered[s] = [a, c]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = T.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    getUnit: function(e, t) {
                        var a = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return a && b(T.Lists.units, a) ? a: ""
                    },
                    fixColors: function(e) {
                        return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,
                            function(e, t, a) {
                                return T.Lists.colorNames.hasOwnProperty(a) ? (t || "rgba(") + T.Lists.colorNames[a] + (t ? "": ",1)") : t + a
                            })
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return T.RegEx.valueUnwrap.test(t) && (t = t.match(T.RegEx.valueUnwrap)[1]),
                        T.Values.isCSSNullValue(t) && (t = T.Hooks.templates[e][1]),
                            t
                    },
                    extractValue: function(e, t) {
                        var a = T.Hooks.registered[e];
                        if (a) {
                            var n = a[0],
                                r = a[1];
                            return t = T.Hooks.cleanRootPropertyValue(n, t),
                                t.toString().match(T.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, a) {
                        var n = T.Hooks.registered[e];
                        if (n) {
                            var r, o = n[0],
                                i = n[1];
                            return a = T.Hooks.cleanRootPropertyValue(o, a),
                                r = a.toString().match(T.RegEx.valueSplit),
                                r[i] = t,
                                r.join(" ")
                        }
                        return a
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, a) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return T.RegEx.wrappedValueAlreadyExtracted.test(a) ? n = a: (n = a.toString().match(T.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : a),
                                        n;
                                case "inject":
                                    return "rect(" + a + ")"
                            }
                        },
                        blur: function(e, t, a) {
                            switch (e) {
                                case "name":
                                    return x.State.isFirefox ? "filter": "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(a);
                                    if (!n && 0 !== n) {
                                        var r = a.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = r ? r[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(a) ? "blur(" + a + ")": "none"
                            }
                        },
                        opacity: function(e, t, a) {
                            if (m <= 8) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = a.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return a = n ? n[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1,
                                        parseFloat(a) >= 1 ? "": "alpha(opacity=" + parseInt(100 * parseFloat(a), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return a
                            }
                        }
                    },
                    register: function() {
                        function e(e, t, a) {
                            if ("border-box" === T.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (a || !1)) {
                                var n, r, o = 0,
                                    i = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                    s = ["padding" + i[0], "padding" + i[1], "border" + i[0] + "Width", "border" + i[1] + "Width"];
                                for (n = 0; n < s.length; n++) r = parseFloat(T.getPropertyValue(t, s[n])),
                                isNaN(r) || (o += r);
                                return a ? -o: o
                            }
                            return 0
                        }
                        function t(t, a) {
                            return function(n, r, o) {
                                switch (n) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        return parseFloat(o) + e(t, r, a);
                                    case "inject":
                                        return parseFloat(o) - e(t, r, a) + "px"
                                }
                            }
                        }
                        m && !(m > 9) || x.State.isGingerbread || (T.Lists.transformsBase = T.Lists.transformsBase.concat(T.Lists.transforms3D));
                        for (var a = 0; a < T.Lists.transformsBase.length; a++) !
                            function() {
                                var e = T.Lists.transformsBase[a];
                                T.Normalizations.registered[e] = function(t, a, r) {
                                    switch (t) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return i(a) === n || i(a).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : i(a).transformCache[e].replace(/[()]/g, "");
                                        case "inject":
                                            var o = !1;
                                            switch (e.substr(0, e.length - 1)) {
                                                case "translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    x.State.isAndroid && i(a).transformCache[e] === n && r < 1 && (r = 1),
                                                        o = !/(\d)$/i.test(r);
                                                    break;
                                                case "skew":
                                                    o = !/(deg|\d)$/i.test(r);
                                                    break;
                                                case "rotate":
                                                    o = !/(deg|\d)$/i.test(r)
                                            }
                                            return o || (i(a).transformCache[e] = "(" + r + ")"),
                                                i(a).transformCache[e]
                                    }
                                }
                            } ();
                        for (var r = 0; r < T.Lists.colors.length; r++) !
                            function() {
                                var e = T.Lists.colors[r];
                                T.Normalizations.registered[e] = function(t, a, r) {
                                    switch (t) {
                                        case "name":
                                            return e;
                                        case "extract":
                                            var o;
                                            if (T.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                            else {
                                                var i, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(r) ? i = s[r] !== n ? s[r] : s.black: T.RegEx.isHex.test(r) ? i = "rgb(" + T.Values.hexToRgb(r).join(" ") + ")": /^rgba?\(/i.test(r) || (i = s.black),
                                                    o = (i || r).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return (!m || m > 8) && 3 === o.split(" ").length && (o += " 1"),
                                                o;
                                        case "inject":
                                            return /^rgb/.test(r) ? r: (m <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (m <= 8 ? "rgb": "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            } ();
                        T.Normalizations.registered.innerWidth = t("width", !0),
                            T.Normalizations.registered.innerHeight = t("height", !0),
                            T.Normalizations.registered.outerWidth = t("width"),
                            T.Normalizations.registered.outerHeight = t("height")
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g,
                            function(e, t) {
                                return t.toUpperCase()
                            })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (m || x.State.isAndroid && !x.State.isChrome) && (t += "|transform"),
                            new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (x.State.prefixMatches[e]) return [x.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], a = 0, n = t.length; a < n; a++) {
                            var r;
                            if (r = 0 === a ? e: t[a] + e.replace(/^\w/,
                                    function(e) {
                                        return e.toUpperCase()
                                    }), _.isString(x.State.prefixElement.style[r])) return x.State.prefixMatches[e] = r,
                                [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            function(e, t, a, n) {
                                return t + t + a + a + n + n
                            }),
                            t = a.exec(e),
                            t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return ! e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg": /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "": "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline": /^(li)$/i.test(t) ? "list-item": /^(tr)$/i.test(t) ? "table-row": /^(table)$/i.test(t) ? "table": /^(tbody)$/i.test(t) ? "table-row-group": "block"
                    },
                    addClass: function(e, t) {
                        if (e) if (e.classList) e.classList.add(t);
                        else if (_.isString(e.className)) e.className += (e.className.length ? " ": "") + t;
                        else {
                            var a = e.getAttribute(m <= 7 ? "className": "class") || "";
                            e.setAttribute("class", a + (a ? " ": "") + t)
                        }
                    },
                    removeClass: function(e, t) {
                        if (e) if (e.classList) e.classList.remove(t);
                        else if (_.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        else {
                            var a = e.getAttribute(m <= 7 ? "className": "class") || "";
                            e.setAttribute("class", a.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                        }
                    }
                },
                getPropertyValue: function(e, a, r, o) {
                    function s(e, a) {
                        var r = 0;
                        if (m <= 8) r = h.css(e, a);
                        else {
                            var c = !1;
                            /^(width|height)$/.test(a) && 0 === T.getPropertyValue(e, "display") && (c = !0, T.setPropertyValue(e, "display", T.Values.getDisplayType(e)));
                            var l = function() {
                                c && T.setPropertyValue(e, "display", "none")
                            };
                            if (!o) {
                                if ("height" === a && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var u = e.offsetHeight - (parseFloat(T.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingBottom")) || 0);
                                    return l(),
                                        u
                                }
                                if ("width" === a && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p = e.offsetWidth - (parseFloat(T.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingRight")) || 0);
                                    return l(),
                                        p
                                }
                            }
                            var d;
                            d = i(e) === n ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle: i(e).computedStyle = t.getComputedStyle(e, null),
                            "borderColor" === a && (a = "borderTopColor"),
                                r = 9 === m && "filter" === a ? d.getPropertyValue(a) : d[a],
                            "" !== r && null !== r || (r = e.style[a]),
                                l()
                        }
                        if ("auto" === r && /^(top|right|bottom|left)$/i.test(a)) {
                            var f = s(e, "position"); ("fixed" === f || "absolute" === f && /top|left/i.test(a)) && (r = h(e).position()[a] + "px")
                        }
                        return r
                    }
                    var c;
                    if (T.Hooks.registered[a]) {
                        var l = a,
                            u = T.Hooks.getRoot(l);
                        r === n && (r = T.getPropertyValue(e, T.Names.prefixCheck(u)[0])),
                        T.Normalizations.registered[u] && (r = T.Normalizations.registered[u]("extract", e, r)),
                            c = T.Hooks.extractValue(l, r)
                    } else if (T.Normalizations.registered[a]) {
                        var p, d;
                        p = T.Normalizations.registered[a]("name", e),
                        "transform" !== p && (d = s(e, T.Names.prefixCheck(p)[0]), T.Values.isCSSNullValue(d) && T.Hooks.templates[a] && (d = T.Hooks.templates[a][1])),
                            c = T.Normalizations.registered[a]("extract", e, d)
                    }
                    if (!/^[\d-]/.test(c)) {
                        var f = i(e);
                        if (f && f.isSVG && T.Names.SVGAttribute(a)) if (/^(height|width)$/i.test(a)) try {
                            c = e.getBBox()[a]
                        } catch(e) {
                            c = 0
                        } else c = e.getAttribute(a);
                        else c = s(e, T.Names.prefixCheck(a)[0])
                    }
                    return T.Values.isCSSNullValue(c) && (c = 0),
                    x.debug >= 2 && console.log("Get " + a + ": " + c),
                        c
                },
                setPropertyValue: function(e, a, n, r, o) {
                    var s = a;
                    if ("scroll" === a) o.container ? o.container["scroll" + o.direction] = n: "Left" === o.direction ? t.scrollTo(n, o.alternateValue) : t.scrollTo(o.alternateValue, n);
                    else if (T.Normalizations.registered[a] && "transform" === T.Normalizations.registered[a]("name", e)) T.Normalizations.registered[a]("inject", e, n),
                        s = "transform",
                        n = i(e).transformCache[a];
                    else {
                        if (T.Hooks.registered[a]) {
                            var c = a,
                                l = T.Hooks.getRoot(a);
                            r = r || T.getPropertyValue(e, l),
                                n = T.Hooks.injectValue(c, n, r),
                                a = l
                        }
                        if (T.Normalizations.registered[a] && (n = T.Normalizations.registered[a]("inject", e, n), a = T.Normalizations.registered[a]("name", e)), s = T.Names.prefixCheck(a)[0], m <= 8) try {
                            e.style[s] = n
                        } catch(e) {
                            x.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        } else {
                            var u = i(e);
                            u && u.isSVG && T.Names.SVGAttribute(a) ? e.setAttribute(a, n) : e.style[s] = n
                        }
                        x.debug >= 2 && console.log("Set " + a + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function(e) {
                    var t = "",
                        a = i(e);
                    if ((m || x.State.isAndroid && !x.State.isChrome) && a && a.isSVG) {
                        var n = function(t) {
                                return parseFloat(T.getPropertyValue(e, t))
                            },
                            r = {
                                translate: [n("translateX"), n("translateY")],
                                skewX: [n("skewX")],
                                skewY: [n("skewY")],
                                scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                                rotate: [n("rotateZ"), 0, 0]
                            };
                        h.each(i(e).transformCache,
                            function(e) { / ^translate / i.test(e) ? e = "translate": /^scale/i.test(e) ? e = "scale": /^rotate/i.test(e) && (e = "rotate"),
                            r[e] && (t += e + "(" + r[e].join(" ") + ") ", delete r[e])
                            })
                    } else {
                        var o, s;
                        h.each(i(e).transformCache,
                            function(a) {
                                if (o = i(e).transformCache[a], "transformPerspective" === a) return s = o,
                                    !0;
                                9 === m && "rotateZ" === a && (a = "rotate"),
                                    t += a + o + " "
                            }),
                        s && (t = "perspective" + s + " " + t)
                    }
                    T.setPropertyValue(e, "transform", t)
                }
            };
            T.Hooks.register(),
                T.Normalizations.register(),
                x.hook = function(e, t, a) {
                    var r;
                    return e = o(e),
                        h.each(e,
                            function(e, o) {
                                if (i(o) === n && x.init(o), a === n) r === n && (r = T.getPropertyValue(o, t));
                                else {
                                    var s = T.setPropertyValue(o, t, a);
                                    "transform" === s[0] && x.CSS.flushTransformCache(o),
                                        r = s
                                }
                            }),
                        r
                };
            var C = function() {
                function e() {
                    return u ? S.promise || null: m
                }
                function r(e, r) {
                    function o(o) {
                        var u, f;
                        if (c.begin && 0 === A) try {
                            c.begin.call(v, v)
                        } catch(e) {
                            setTimeout(function() {
                                    throw e
                                },
                                1)
                        }
                        if ("scroll" === N) {
                            var m, g, D, k = /^x$/i.test(c.axis) ? "Left": "Top",
                                C = parseFloat(c.offset) || 0;
                            c.container ? _.isWrapped(c.container) || _.isNode(c.container) ? (c.container = c.container[0] || c.container, m = c.container["scroll" + k], D = m + h(e).position()[k.toLowerCase()] + C) : c.container = null: (m = x.State.scrollAnchor[x.State["scrollProperty" + k]], g = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === k ? "Top": "Left")]], D = h(e).offset()[k.toLowerCase()] + C),
                                l = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: m,
                                        currentValue: m,
                                        endValue: D,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: k,
                                            alternateValue: g
                                        }
                                    },
                                    element: e
                                },
                            x.debug && console.log("tweensContainer (scroll): ", l.scroll, e)
                        } else if ("reverse" === N) {
                            if (! (u = i(e))) return;
                            if (!u.tweensContainer) return void h.dequeue(e, c.queue);
                            "none" === u.opts.display && (u.opts.display = "auto"),
                            "hidden" === u.opts.visibility && (u.opts.visibility = "visible"),
                                u.opts.loop = !1,
                                u.opts.begin = null,
                                u.opts.complete = null,
                            w.easing || delete c.easing,
                            w.duration || delete c.duration,
                                c = h.extend({},
                                    u.opts, c),
                                f = h.extend(!0, {},
                                    u ? u.tweensContainer: null);
                            for (var P in f) if (f.hasOwnProperty(P) && "element" !== P) {
                                var I = f[P].startValue;
                                f[P].startValue = f[P].currentValue = f[P].endValue,
                                    f[P].endValue = I,
                                _.isEmptyObject(w) || (f[P].easing = c.easing),
                                x.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(f[P]), e)
                            }
                            l = f
                        } else if ("start" === N) { (u = i(e)) && u.tweensContainer && !0 === u.isAnimating && (f = u.tweensContainer);
                            var E = function(r, o) {
                                var i, p = T.Hooks.getRoot(r),
                                    d = !1,
                                    m = o[0],
                                    g = o[1],
                                    v = o[2];
                                if (! (u && u.isSVG || "tween" === p || !1 !== T.Names.prefixCheck(p)[1] || T.Normalizations.registered[p] !== n)) return void(x.debug && console.log("Skipping [" + p + "] due to a lack of browser support.")); (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(r) && !v && 0 !== m && (v = 0),
                                    c._cacheValues && f && f[r] ? (v === n && (v = f[r].endValue + f[r].unitType), d = u.rootPropertyValueCache[p]) : T.Hooks.registered[r] ? v === n ? (d = T.getPropertyValue(e, p), v = T.getPropertyValue(e, r, d)) : d = T.Hooks.templates[p][1] : v === n && (v = T.getPropertyValue(e, r));
                                var y, b, w, D = !1,
                                    k = function(e, t) {
                                        var a, n;
                                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/,
                                            function(e) {
                                                return a = e,
                                                    ""
                                            }),
                                        a || (a = T.Values.getUnitType(e)),
                                            [n, a]
                                    };
                                if (v !== m && _.isString(v) && _.isString(m)) {
                                    i = "";
                                    var S = 0,
                                        C = 0,
                                        M = [],
                                        A = [],
                                        P = 0,
                                        I = 0,
                                        N = 0;
                                    for (v = T.Hooks.fixColors(v), m = T.Hooks.fixColors(m); S < v.length && C < m.length;) {
                                        var E = v[S],
                                            O = m[C];
                                        if (/[\d\.-]/.test(E) && /[\d\.-]/.test(O)) {
                                            for (var j = E,
                                                     $ = O,
                                                     L = ".",
                                                     B = "."; ++S < v.length;) {
                                                if ((E = v[S]) === L) L = "..";
                                                else if (!/\d/.test(E)) break;
                                                j += E
                                            }
                                            for (; ++C < m.length;) {
                                                if ((O = m[C]) === B) B = "..";
                                                else if (!/\d/.test(O)) break;
                                                $ += O
                                            }
                                            var H = T.Hooks.getUnit(v, S),
                                                V = T.Hooks.getUnit(m, C);
                                            if (S += H.length, C += V.length, H === V) j === $ ? i += j + H: (i += "{" + M.length + (I ? "!": "") + "}" + H, M.push(parseFloat(j)), A.push(parseFloat($)));
                                            else {
                                                var F = parseFloat(j),
                                                    q = parseFloat($);
                                                i += (P < 5 ? "calc": "") + "(" + (F ? "{" + M.length + (I ? "!": "") + "}": "0") + H + " + " + (q ? "{" + (M.length + (F ? 1 : 0)) + (I ? "!": "") + "}": "0") + V + ")",
                                                F && (M.push(F), A.push(0)),
                                                q && (M.push(0), A.push(q))
                                            }
                                        } else {
                                            if (E !== O) {
                                                P = 0;
                                                break
                                            }
                                            i += E,
                                                S++,
                                                C++,
                                                0 === P && "c" === E || 1 === P && "a" === E || 2 === P && "l" === E || 3 === P && "c" === E || P >= 4 && "(" === E ? P++:(P && P < 5 || P >= 4 && ")" === E && --P < 5) && (P = 0),
                                                0 === I && "r" === E || 1 === I && "g" === E || 2 === I && "b" === E || 3 === I && "a" === E || I >= 3 && "(" === E ? (3 === I && "a" === E && (N = 1), I++) : N && "," === E ? ++N > 3 && (I = N = 0) : (N && I < (N ? 5 : 4) || I >= (N ? 4 : 3) && ")" === E && --I < (N ? 5 : 4)) && (I = N = 0)
                                        }
                                    }
                                    S === v.length && C === m.length || (x.debug && console.error('Trying to pattern match mis-matched strings ["' + m + '", "' + v + '"]'), i = n),
                                    i && (M.length ? (x.debug && console.log('Pattern found "' + i + '" -> ', M, A, "[" + v + "," + m + "]"), v = M, m = A, b = w = "") : i = n)
                                }
                                if (i || (y = k(r, v), v = y[0], w = y[1], y = k(r, m), m = y[0].replace(/^([+-\/*])=/,
                                        function(e, t) {
                                            return D = t,
                                                ""
                                        }), b = y[1], v = parseFloat(v) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(r) ? (m /= 100, b = "em") : /^scale/.test(r) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(r) && (m = m / 100 * 255, b = ""))), /[\/*]/.test(D)) b = w;
                                else if (w !== b && 0 !== v) if (0 === m) b = w;
                                else {
                                    s = s ||
                                        function() {
                                            var n = {
                                                    myParent: e.parentNode || a.body,
                                                    position: T.getPropertyValue(e, "position"),
                                                    fontSize: T.getPropertyValue(e, "fontSize")
                                                },
                                                r = n.position === R.lastPosition && n.myParent === R.lastParent,
                                                o = n.fontSize === R.lastFontSize;
                                            R.lastParent = n.myParent,
                                                R.lastPosition = n.position,
                                                R.lastFontSize = n.fontSize;
                                            var i = {};
                                            if (o && r) i.emToPx = R.lastEmToPx,
                                                i.percentToPxWidth = R.lastPercentToPxWidth,
                                                i.percentToPxHeight = R.lastPercentToPxHeight;
                                            else {
                                                var s = u && u.isSVG ? a.createElementNS("http://www.w3.org/2000/svg", "rect") : a.createElement("div");
                                                x.init(s),
                                                    n.myParent.appendChild(s),
                                                    h.each(["overflow", "overflowX", "overflowY"],
                                                        function(e, t) {
                                                            x.CSS.setPropertyValue(s, t, "hidden")
                                                        }),
                                                    x.CSS.setPropertyValue(s, "position", n.position),
                                                    x.CSS.setPropertyValue(s, "fontSize", n.fontSize),
                                                    x.CSS.setPropertyValue(s, "boxSizing", "content-box"),
                                                    h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"],
                                                        function(e, t) {
                                                            x.CSS.setPropertyValue(s, t, "100%")
                                                        }),
                                                    x.CSS.setPropertyValue(s, "paddingLeft", "100em"),
                                                    i.percentToPxWidth = R.lastPercentToPxWidth = (parseFloat(T.getPropertyValue(s, "width", null, !0)) || 1) / 100,
                                                    i.percentToPxHeight = R.lastPercentToPxHeight = (parseFloat(T.getPropertyValue(s, "height", null, !0)) || 1) / 100,
                                                    i.emToPx = R.lastEmToPx = (parseFloat(T.getPropertyValue(s, "paddingLeft")) || 1) / 100,
                                                    n.myParent.removeChild(s)
                                            }
                                            return null === R.remToPx && (R.remToPx = parseFloat(T.getPropertyValue(a.body, "fontSize")) || 16),
                                            null === R.vwToPx && (R.vwToPx = parseFloat(t.innerWidth) / 100, R.vhToPx = parseFloat(t.innerHeight) / 100),
                                                i.remToPx = R.remToPx,
                                                i.vwToPx = R.vwToPx,
                                                i.vhToPx = R.vhToPx,
                                            x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), e),
                                                i
                                        } ();
                                    var W = /margin|padding|left|right|width|text|word|letter/i.test(r) || /X$/.test(r) || "x" === r ? "x": "y";
                                    switch (w) {
                                        case "%":
                                            v *= "x" === W ? s.percentToPxWidth: s.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= s[w + "ToPx"]
                                    }
                                    switch (b) {
                                        case "%":
                                            v *= 1 / ("x" === W ? s.percentToPxWidth: s.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= 1 / s[b + "ToPx"]
                                    }
                                }
                                switch (D) {
                                    case "+":
                                        m = v + m;
                                        break;
                                    case "-":
                                        m = v - m;
                                        break;
                                    case "*":
                                        m *= v;
                                        break;
                                    case "/":
                                        m = v / m
                                }
                                l[r] = {
                                    rootPropertyValue: d,
                                    startValue: v,
                                    currentValue: v,
                                    endValue: m,
                                    unitType: b,
                                    easing: g
                                },
                                i && (l[r].pattern = i),
                                x.debug && console.log("tweensContainer (" + r + "): " + JSON.stringify(l[r]), e)
                            };
                            for (var O in y) if (y.hasOwnProperty(O)) {
                                var j = T.Names.camelCase(O),
                                    $ = function(t, a) {
                                        var n, o, i;
                                        return _.isFunction(t) && (t = t.call(e, r, M)),
                                            _.isArray(t) ? (n = t[0], !_.isArray(t[1]) && /^[\d-]/.test(t[1]) || _.isFunction(t[1]) || T.RegEx.isHex.test(t[1]) ? i = t[1] : _.isString(t[1]) && !T.RegEx.isHex.test(t[1]) && x.Easings[t[1]] || _.isArray(t[1]) ? (o = p(t[1], c.duration), i = t[2]) : i = t[1] || t[2]) : n = t,
                                            o = o || c.easing,
                                        _.isFunction(n) && (n = n.call(e, r, M)),
                                        _.isFunction(i) && (i = i.call(e, r, M)),
                                            [n || 0, o, i]
                                    } (y[O]);
                                if (b(T.Lists.colors, j)) {
                                    var L = $[0],
                                        H = $[1],
                                        V = $[2];
                                    if (T.RegEx.isHex.test(L)) {
                                        for (var F = ["Red", "Green", "Blue"], q = T.Values.hexToRgb(L), W = V ? T.Values.hexToRgb(V) : n, U = 0; U < F.length; U++) {
                                            var z = [q[U]];
                                            H && z.push(H),
                                            W !== n && z.push(W[U]),
                                                E(j + F[U], z)
                                        }
                                        continue
                                    }
                                }
                                E(j, $)
                            }
                            l.element = e
                        }
                        l.element && (T.Values.addClass(e, "velocity-animating"), B.push(l), u = i(e), u && ("" === c.queue && (u.tweensContainer = l, u.opts = c), u.isAnimating = !0), A === M - 1 ? (x.State.calls.push([B, v, c, null, S.resolver, null, 0]), !1 === x.State.isTicking && (x.State.isTicking = !0, d())) : A++)
                    }
                    var s, c = h.extend({},
                        x.defaults, w),
                        l = {};
                    switch (i(e) === n && x.init(e), parseFloat(c.delay) && !1 !== c.queue && h.queue(e, c.queue,
                        function(t) {
                            x.velocityQueueEntryFlag = !0;
                            var a = x.State.delayedElements.count++;
                            x.State.delayedElements[a] = e;
                            var n = function(e) {
                                return function() {
                                    x.State.delayedElements[e] = !1,
                                        t()
                                }
                            } (a);
                            i(e).delayBegin = (new Date).getTime(),
                                i(e).delay = parseFloat(c.delay),
                                i(e).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(c.delay)),
                                    next: n
                                }
                        }), c.duration.toString().toLowerCase()) {
                        case "fast":
                            c.duration = 200;
                            break;
                        case "normal":
                            c.duration = D;
                            break;
                        case "slow":
                            c.duration = 600;
                            break;
                        default:
                            c.duration = parseFloat(c.duration) || 1
                    }
                    if (!1 !== x.mock && (!0 === x.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(x.mock) || 1, c.delay *= parseFloat(x.mock) || 1)), c.easing = p(c.easing, c.duration), c.begin && !_.isFunction(c.begin) && (c.begin = null), c.progress && !_.isFunction(c.progress) && (c.progress = null), c.complete && !_.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = x.CSS.Values.getDisplayType(e))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && x.State.isMobile && !x.State.isGingerbread, !1 === c.queue) if (c.delay) {
                        var u = x.State.delayedElements.count++;
                        x.State.delayedElements[u] = e;
                        var f = function(e) {
                            return function() {
                                x.State.delayedElements[e] = !1,
                                    o()
                            }
                        } (u);
                        i(e).delayBegin = (new Date).getTime(),
                            i(e).delay = parseFloat(c.delay),
                            i(e).delayTimer = {
                                setTimeout: setTimeout(o, parseFloat(c.delay)),
                                next: f
                            }
                    } else o();
                    else h.queue(e, c.queue,
                        function(e, t) {
                            if (!0 === t) return S.promise && S.resolver(v),
                                !0;
                            x.velocityQueueEntryFlag = !0,
                                o(e)
                        });
                    "" !== c.queue && "fx" !== c.queue || "inprogress" === h.queue(e)[0] || h.dequeue(e)
                }
                var l, u, m, g, v, y, w, k = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || _.isString(arguments[0].properties));
                _.isWrapped(this) ? (u = !1, g = 0, v = this, m = this) : (u = !0, g = 1, v = k ? arguments[0].elements || arguments[0].e: arguments[0]);
                var S = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (u && x.Promise && (S.promise = new x.Promise(function(e, t) {
                        S.resolver = e,
                            S.rejecter = t
                    })), k ? (y = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (y = arguments[g], w = arguments[g + 1]), !(v = o(v))) return void(S.promise && (y && w && !1 === w.promiseRejectEmpty ? S.resolver() : S.rejecter()));
                var M = v.length,
                    A = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(y) && !h.isPlainObject(w)) {
                    var P = g + 1;
                    w = {};
                    for (var I = P; I < arguments.length; I++) _.isArray(arguments[I]) || !/^(fast|normal|slow)$/i.test(arguments[I]) && !/^\d/.test(arguments[I]) ? _.isString(arguments[I]) || _.isArray(arguments[I]) ? w.easing = arguments[I] : _.isFunction(arguments[I]) && (w.complete = arguments[I]) : w.duration = arguments[I]
                }
                var N;
                switch (y) {
                    case "scroll":
                        N = "scroll";
                        break;
                    case "reverse":
                        N = "reverse";
                        break;
                    case "pause":
                        var E = (new Date).getTime();
                        return h.each(v,
                            function(e, t) {
                                s(t, E)
                            }),
                            h.each(x.State.calls,
                                function(e, t) {
                                    var a = !1;
                                    t && h.each(t[1],
                                        function(e, r) {
                                            var o = w === n ? "": w;
                                            return ! 0 !== o && t[2].queue !== o && (w !== n || !1 !== t[2].queue) || (h.each(v,
                                                function(e, n) {
                                                    if (n === r) return t[5] = {
                                                        resume: !1
                                                    },
                                                        a = !0,
                                                        !1
                                                }), !a && void 0)
                                        })
                                }),
                            e();
                    case "resume":
                        return h.each(v,
                            function(e, t) {
                                c(t, E)
                            }),
                            h.each(x.State.calls,
                                function(e, t) {
                                    var a = !1;
                                    t && h.each(t[1],
                                        function(e, r) {
                                            var o = w === n ? "": w;
                                            return ! 0 !== o && t[2].queue !== o && (w !== n || !1 !== t[2].queue) || !t[5] || (h.each(v,
                                                function(e, n) {
                                                    if (n === r) return t[5].resume = !0,
                                                        a = !0,
                                                        !1
                                                }), !a && void 0)
                                        })
                                }),
                            e();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        h.each(v,
                            function(e, t) {
                                i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer),
                                "finishAll" !== y || !0 !== w && !_.isString(w) || (h.each(h.queue(t, _.isString(w) ? w: ""),
                                    function(e, t) {
                                        _.isFunction(t) && t()
                                    }), h.queue(t, _.isString(w) ? w: "", []))
                            });
                        var O = [];
                        return h.each(x.State.calls,
                            function(e, t) {
                                t && h.each(t[1],
                                    function(a, r) {
                                        var o = w === n ? "": w;
                                        if (!0 !== o && t[2].queue !== o && (w !== n || !1 !== t[2].queue)) return ! 0;
                                        h.each(v,
                                            function(a, n) {
                                                if (n === r) if ((!0 === w || _.isString(w)) && (h.each(h.queue(n, _.isString(w) ? w: ""),
                                                        function(e, t) {
                                                            _.isFunction(t) && t(null, !0)
                                                        }), h.queue(n, _.isString(w) ? w: "", [])), "stop" === y) {
                                                    var s = i(n);
                                                    s && s.tweensContainer && !1 !== o && h.each(s.tweensContainer,
                                                        function(e, t) {
                                                            t.endValue = t.currentValue
                                                        }),
                                                        O.push(e)
                                                } else "finish" !== y && "finishAll" !== y || (t[2].duration = 1)
                                            })
                                    })
                            }),
                        "stop" === y && (h.each(O,
                            function(e, t) {
                                f(t, !0)
                            }), S.promise && S.resolver(v)),
                            e();
                    default:
                        if (!h.isPlainObject(y) || _.isEmptyObject(y)) {
                            if (_.isString(y) && x.Redirects[y]) {
                                l = h.extend({},
                                    w);
                                var j = l.duration,
                                    $ = l.delay || 0;
                                return ! 0 === l.backwards && (v = h.extend(!0, [], v).reverse()),
                                    h.each(v,
                                        function(e, t) {
                                            parseFloat(l.stagger) ? l.delay = $ + parseFloat(l.stagger) * e: _.isFunction(l.stagger) && (l.delay = $ + l.stagger.call(t, e, M)),
                                            l.drag && (l.duration = parseFloat(j) || (/^(callout|transition)/.test(y) ? 1e3: D), l.duration = Math.max(l.duration * (l.backwards ? 1 - e / M: (e + 1) / M), .75 * l.duration, 200)),
                                                x.Redirects[y].call(t, t, l || {},
                                                    e, M, v, S.promise ? S: n)
                                        }),
                                    e()
                            }
                            var L = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return S.promise ? S.rejecter(new Error(L)) : t.console && console.log(L),
                                e()
                        }
                        N = "start"
                }
                var R = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    B = [];
                h.each(v,
                    function(e, t) {
                        _.isNode(t) && r(t, e)
                    }),
                    l = h.extend({},
                        x.defaults, w),
                    l.loop = parseInt(l.loop, 10);
                var H = 2 * l.loop - 1;
                if (l.loop) for (var V = 0; V < H; V++) {
                    var F = {
                        delay: l.delay,
                        progress: l.progress
                    };
                    V === H - 1 && (F.display = l.display, F.visibility = l.visibility, F.complete = l.complete),
                        C(v, "reverse", F)
                }
                return e()
            };
            x = h.extend(C, x),
                x.animate = C;
            var M = t.requestAnimationFrame || g;
            if (!x.State.isMobile && a.hidden !== n) {
                var A = function() {
                    a.hidden ? (M = function(e) {
                        return setTimeout(function() {
                                e(!0)
                            },
                            16)
                    },
                        d()) : M = t.requestAnimationFrame || g
                };
                A(),
                    a.addEventListener("visibilitychange", A)
            }
            return e.Velocity = x,
            e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = x.defaults),
                h.each(["Down", "Up"],
                    function(e, t) {
                        x.Redirects["slide" + t] = function(e, a, r, o, i, s) {
                            var c = h.extend({},
                                a),
                                l = c.begin,
                                u = c.complete,
                                p = {},
                                d = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                };
                            c.display === n && (c.display = "Down" === t ? "inline" === x.CSS.Values.getDisplayType(e) ? "inline-block": "block": "none"),
                                c.begin = function() {
                                    0 === r && l && l.call(i, i);
                                    for (var a in d) if (d.hasOwnProperty(a)) {
                                        p[a] = e.style[a];
                                        var n = T.getPropertyValue(e, a);
                                        d[a] = "Down" === t ? [n, 0] : [0, n]
                                    }
                                    p.overflow = e.style.overflow,
                                        e.style.overflow = "hidden"
                                },
                                c.complete = function() {
                                    for (var t in p) p.hasOwnProperty(t) && (e.style[t] = p[t]);
                                    r === o - 1 && (u && u.call(i, i), s && s.resolver(i))
                                },
                                x(e, d, c)
                        }
                    }),
                h.each(["In", "Out"],
                    function(e, t) {
                        x.Redirects["fade" + t] = function(e, a, r, o, i, s) {
                            var c = h.extend({},
                                a),
                                l = c.complete,
                                u = {
                                    opacity: "In" === t ? 1 : 0
                                };
                            0 !== r && (c.begin = null),
                                c.complete = r !== o - 1 ? null: function() {
                                    l && l.call(i, i),
                                    s && s.resolver(i)
                                },
                            c.display === n && (c.display = "In" === t ? "auto": "none"),
                                x(this, u, c)
                        }
                    }),
                x
        } (window.jQuery || window.Zepto || window, window, window ? window.document: void 0)
    }),
    function(e) {
        e.fn.marquee = function(t) {
            return this.each(function() {
                var a, n, r, o, i, s = e.extend({},
                    e.fn.marquee.defaults, t),
                    c = e(this),
                    l = 3,
                    u = "animation-play-state",
                    p = !1,
                    d = function(e, t, a) {
                        for (var n = ["webkit", "moz", "MS", "o", ""], r = 0; r < n.length; r++) n[r] || (t = t.toLowerCase()),
                            e.addEventListener(n[r] + t, a, !1)
                    },
                    f = function(e) {
                        var t, a = [];
                        for (t in e) e.hasOwnProperty(t) && a.push(t + ":" + e[t]);
                        return a.push(),
                        "{" + a.join(",") + "}"
                    },
                    h = {
                        pause: function() {
                            p && s.allowCss3Support ? a.css(u, "paused") : e.fn.pause && a.pause(),
                                c.data("runningStatus", "paused"),
                                c.trigger("paused")
                        },
                        resume: function() {
                            p && s.allowCss3Support ? a.css(u, "running") : e.fn.resume && a.resume(),
                                c.data("runningStatus", "resumed"),
                                c.trigger("resumed")
                        },
                        toggle: function() {
                            h["resumed" == c.data("runningStatus") ? "pause": "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(c.timer),
                                c.find("*").andSelf().unbind(),
                                c.html(c.find(".js-marquee:first").html())
                        }
                    };
                if ("string" == typeof t) e.isFunction(h[t]) && (a || (a = c.find(".js-marquee-wrapper")), !0 === c.data("css3AnimationIsSupported") && (p = !0), h[t]());
                else {
                    var m;
                    e.each(s,
                        function(e, t) {
                            if (void 0 !== (m = c.attr("data-" + e))) {
                                switch (m) {
                                    case "true":
                                        m = !0;
                                        break;
                                    case "false":
                                        m = !1
                                }
                                s[e] = m
                            }
                        }),
                    s.speed && (s.duration = s.speed * parseInt(c.width(), 10)),
                        o = "up" == s.direction || "down" == s.direction,
                        s.gap = s.duplicated ? parseInt(s.gap) : 0,
                        c.wrapInner('<div class="js-marquee"></div>');
                    var g = c.find(".js-marquee").css({
                        "margin-right": s.gap,
                        float: "left"
                    });
                    if (s.duplicated && g.clone(!0).appendTo(c), c.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), a = c.find(".js-marquee-wrapper"), o) {
                        var v = c.height();
                        a.removeAttr("style"),
                            c.height(v),
                            c.find(".js-marquee").css({
                                float: "none",
                                "margin-bottom": s.gap,
                                "margin-right": 0
                            }),
                        s.duplicated && c.find(".js-marquee:last").css({
                            "margin-bottom": 0
                        });
                        var y = c.find(".js-marquee:first").height() + s.gap;
                        s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(y, 10) + parseInt(v, 10)) / parseInt(v, 10) * s.duration, s.duration *= parseInt(y, 10) / parseInt(v, 10)) : s.duration *= (parseInt(y, 10) + parseInt(v, 10)) / parseInt(v, 10)
                    } else i = c.find(".js-marquee:first").width() + s.gap,
                        n = c.width(),
                        s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(i, 10) + parseInt(n, 10)) / parseInt(n, 10) * s.duration, s.duration *= parseInt(i, 10) / parseInt(n, 10)) : s.duration *= (parseInt(i, 10) + parseInt(n, 10)) / parseInt(n, 10);
                    if (s.duplicated && (s.duration /= 2), s.allowCss3Support) {
                        var g = document.body || document.createElement("div"),
                            b = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                            _ = ["Webkit", "Moz", "O", "ms", "Khtml"],
                            w = "animation",
                            D = "",
                            k = "";
                        if (g.style.animation && (k = "@keyframes " + b + " ", p = !0), !1 === p) for (var x = 0; x < _.length; x++) if (void 0 !== g.style[_[x] + "AnimationName"]) {
                            g = "-" + _[x].toLowerCase() + "-",
                                w = g + w,
                                u = g + u,
                                k = "@" + g + "keyframes " + b + " ",
                                p = !0;
                            break
                        }
                        p && (D = b + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s infinite " + s.css3easing, c.data("css3AnimationIsSupported", !0))
                    }
                    var S = function() {
                            a.css("margin-top", "up" == s.direction ? v + "px": "-" + y + "px")
                        },
                        T = function() {
                            a.css("margin-left", "left" == s.direction ? n + "px": "-" + i + "px")
                        };
                    s.duplicated ? (o ? s.startVisible ? a.css("margin-top", 0) : a.css("margin-top", "up" == s.direction ? v + "px": "-" + (2 * y - s.gap) + "px") : s.startVisible ? a.css("margin-left", 0) : a.css("margin-left", "left" == s.direction ? n + "px": "-" + (2 * i - s.gap) + "px"), s.startVisible || (l = 1)) : s.startVisible ? l = 2 : o ? S() : T();
                    var C = function() {
                        if (s.duplicated && (1 === l ? (s._originalDuration = s.duration, s.duration = o ? "up" == s.direction ? s.duration + v / (y / s.duration) : 2 * s.duration: "left" == s.direction ? s.duration + n / (i / s.duration) : 2 * s.duration, D && (D = b + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), l++) : 2 === l && (s.duration = s._originalDuration, D && (b += "0", k = e.trim(k) + "0 ", D = b + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), l++)), o ? s.duplicated ? (2 < l && a.css("margin-top", "up" == s.direction ? 0 : "-" + y + "px"), r = {
                                "margin-top": "up" == s.direction ? "-" + y + "px": 0
                            }) : s.startVisible ? 2 === l ? (D && (D = b + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), r = {
                                "margin-top": "up" == s.direction ? "-" + y + "px": v + "px"
                            },
                                l++) : 3 === l && (s.duration = s._completeDuration, D && (b += "0", k = e.trim(k) + "0 ", D = b + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), S()) : (S(), r = {
                                "margin-top": "up" == s.direction ? "-" + a.height() + "px": v + "px"
                            }) : s.duplicated ? (2 < l && a.css("margin-left", "left" == s.direction ? 0 : "-" + i + "px"), r = {
                                "margin-left": "left" == s.direction ? "-" + i + "px": 0
                            }) : s.startVisible ? 2 === l ? (D && (D = b + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), r = {
                                "margin-left": "left" == s.direction ? "-" + i + "px": n + "px"
                            },
                                l++) : 3 === l && (s.duration = s._completeDuration, D && (b += "0", k = e.trim(k) + "0 ", D = b + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), T()) : (T(), r = {
                                "margin-left": "left" == s.direction ? "-" + i + "px": n + "px"
                            }), c.trigger("beforeStarting"), p) {
                            a.css(w, D);
                            var t = k + " { 100%  " + f(r) + "}",
                                u = a.find("style");
                            0 !== u.length ? u.filter(":last").html(t) : a.append("<style>" + t + "</style>"),
                                d(a[0], "AnimationIteration",
                                    function() {
                                        c.trigger("finished")
                                    }),
                                d(a[0], "AnimationEnd",
                                    function() {
                                        C(),
                                            c.trigger("finished")
                                    })
                        } else a.animate(r, s.duration, s.easing,
                            function() {
                                c.trigger("finished"),
                                    s.pauseOnCycle ? c.timer = setTimeout(C, s.delayBeforeStart) : C()
                            });
                        c.data("runningStatus", "resumed")
                    };
                    c.bind("pause", h.pause),
                        c.bind("resume", h.resume),
                    s.pauseOnHover && c.bind("mouseenter mouseleave", h.toggle),
                        p && s.allowCss3Support ? C() : c.timer = setTimeout(C, s.delayBeforeStart)
                }
            })
        },
            e.fn.marquee.defaults = {
                allowCss3Support: !0,
                css3easing: "linear",
                easing: "linear",
                delayBeforeStart: 1e3,
                direction: "left",
                duplicated: !1,
                duration: 5e3,
                gap: 20,
                pauseOnCycle: !1,
                pauseOnHover: !1,
                startVisible: !1
            }
    } (jQuery),
    function(e) {
        "use strict";
        var t, a = e.Base64;
        if ("undefined" != typeof module && module.exports) try {
            t = require("buffer").Buffer
        } catch(e) {}
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            r = function(e) {
                for (var t = {},
                         a = 0,
                         n = e.length; a < n; a++) t[e.charAt(a)] = a;
                return t
            } (n),
            o = String.fromCharCode,
            i = function(e) {
                if (e.length < 2) {
                    var t = e.charCodeAt(0);
                    return t < 128 ? e: t < 2048 ? o(192 | t >>> 6) + o(128 | 63 & t) : o(224 | t >>> 12 & 15) + o(128 | t >>> 6 & 63) + o(128 | 63 & t)
                }
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return o(240 | t >>> 18 & 7) + o(128 | t >>> 12 & 63) + o(128 | t >>> 6 & 63) + o(128 | 63 & t)
            },
            s = function(e) {
                return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, i)
            },
            c = function(e) {
                var t = [0, 2, 1][e.length % 3],
                    a = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                return [n.charAt(a >>> 18), n.charAt(a >>> 12 & 63), t >= 2 ? "=": n.charAt(a >>> 6 & 63), t >= 1 ? "=": n.charAt(63 & a)].join("")
            },
            l = e.btoa ?
                function(t) {
                    return e.btoa(t)
                }: function(e) {
                    return e.replace(/[\s\S]{1,3}/g, c)
                },
            u = t ?
                function(e) {
                    return (e.constructor === t.constructor ? e: new t(e)).toString("base64")
                }: function(e) {
                    return l(s(e))
                },
            p = function(e, t) {
                return t ? u(String(e)).replace(/[+\/]/g,
                    function(e) {
                        return "+" == e ? "-": "_"
                    }).replace(/=/g, "") : u(String(e))
            },
            d = function(e) {
                return p(e, !0)
            },
            f = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
            h = function(e) {
                switch (e.length) {
                    case 4:
                        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                            a = t - 65536;
                        return o(55296 + (a >>> 10)) + o(56320 + (1023 & a));
                    case 3:
                        return o((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return o((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                }
            },
            m = function(e) {
                return e.replace(f, h)
            },
            g = function(e) {
                var t = e.length,
                    a = t % 4,
                    n = (t > 0 ? r[e.charAt(0)] << 18 : 0) | (t > 1 ? r[e.charAt(1)] << 12 : 0) | (t > 2 ? r[e.charAt(2)] << 6 : 0) | (t > 3 ? r[e.charAt(3)] : 0),
                    i = [o(n >>> 16), o(n >>> 8 & 255), o(255 & n)];
                return i.length -= [0, 0, 2, 1][a],
                    i.join("")
            },
            v = e.atob ?
                function(t) {
                    return e.atob(t)
                }: function(e) {
                    return e.replace(/[\s\S]{1,4}/g, g)
                },
            y = t ?
                function(e) {
                    return (e.constructor === t.constructor ? e: new t(e, "base64")).toString()
                }: function(e) {
                    return m(v(e))
                },
            b = function(e) {
                return y(String(e).replace(/[-_]/g,
                    function(e) {
                        return "-" == e ? "+": "/"
                    }).replace(/[^A-Za-z0-9\+\/]/g, ""))
            },
            _ = function() {
                var t = e.Base64;
                return e.Base64 = a,
                    t
            };
        if (e.Base64 = {
                VERSION: "2.1.9",
                atob: v,
                btoa: l,
                fromBase64: b,
                toBase64: p,
                utob: s,
                encode: p,
                encodeURI: d,
                btou: m,
                decode: b,
                noConflict: _
            },
            "function" == typeof Object.defineProperty) {
            var w = function(e) {
                return {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            };
            e.Base64.extendString = function() {
                Object.defineProperty(String.prototype, "fromBase64", w(function() {
                    return b(this)
                })),
                    Object.defineProperty(String.prototype, "toBase64", w(function(e) {
                        return p(this, e)
                    })),
                    Object.defineProperty(String.prototype, "toBase64URI", w(function() {
                        return p(this, !0)
                    }))
            }
        }
        e.Meteor && (Base64 = e.Base64)
    } (this),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
    } (this,
        function() {
            "use strict";
            function e(e) {
                return null == e ? "": "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
            }
            function t(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e: t
            }
            function a(e, t) {
                for (var a = Object.create(null), n = e.split(","), r = 0; r < n.length; r++) a[n[r]] = !0;
                return t ?
                    function(e) {
                        return a[e.toLowerCase()]
                    }: function(e) {
                        return a[e]
                    }
            }
            function n(e, t) {
                if (e.length) {
                    var a = e.indexOf(t);
                    if (a > -1) return e.splice(a, 1)
                }
            }
            function r(e, t) {
                return wr.call(e, t)
            }
            function o(e) {
                return "string" == typeof e || "number" == typeof e
            }
            function i(e) {
                var t = Object.create(null);
                return function(a) {
                    return t[a] || (t[a] = e(a))
                }
            }
            function s(e, t) {
                function a(a) {
                    var n = arguments.length;
                    return n ? n > 1 ? e.apply(t, arguments) : e.call(t, a) : e.call(t)
                }
                return a._length = e.length,
                    a
            }
            function c(e, t) {
                t = t || 0;
                for (var a = e.length - t,
                         n = new Array(a); a--;) n[a] = e[a + t];
                return n
            }
            function l(e, t) {
                for (var a in t) e[a] = t[a];
                return e
            }
            function u(e) {
                return null !== e && "object" == typeof e
            }
            function p(e) {
                return Sr.call(e) === Tr
            }
            function d(e) {
                for (var t = {},
                         a = 0; a < e.length; a++) e[a] && l(t, e[a]);
                return t
            }
            function f() {}
            function h(e, t) {
                var a = u(e),
                    n = u(t);
                if (!a || !n) return ! a && !n && String(e) === String(t);
                try {
                    return JSON.stringify(e) === JSON.stringify(t)
                } catch(a) {
                    return e === t
                }
            }
            function m(e, t) {
                for (var a = 0; a < e.length; a++) if (h(e[a], t)) return a;
                return - 1
            }
            function g(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e())
                }
            }
            function v(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t
            }
            function y(e, t, a, n) {
                Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !!n,
                    writable: !0,
                    configurable: !0
                })
            }
            function b(e) {
                if (!Ir.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var a = 0; a < t.length; a++) {
                            if (!e) return;
                            e = e[t[a]]
                        }
                        return e
                    }
                }
            }
            function _(e) {
                return /native code/.test(e.toString())
            }
            function w(e) {
                Xr.target && Gr.push(Xr.target),
                    Xr.target = e
            }
            function D() {
                Xr.target = Gr.pop()
            }
            function k(e, t) {
                e.__proto__ = t
            }
            function x(e, t, a) {
                for (var n = 0,
                         r = a.length; n < r; n++) {
                    var o = a[n];
                    y(e, o, t[o])
                }
            }
            function S(e, t) {
                if (u(e)) {
                    var a;
                    return r(e, "__ob__") && e.__ob__ instanceof Zr ? a = e.__ob__: Kr.shouldConvert && !Vr() && (Array.isArray(e) || p(e)) && Object.isExtensible(e) && !e._isVue && (a = new Zr(e)),
                    t && a && a.vmCount++,
                        a
                }
            }
            function T(e, t, a, n) {
                var r = new Xr,
                    o = Object.getOwnPropertyDescriptor(e, t);
                if (!o || !1 !== o.configurable) {
                    var i = o && o.get,
                        s = o && o.set,
                        c = S(a);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = i ? i.call(e) : a;
                            return Xr.target && (r.depend(), c && c.dep.depend(), Array.isArray(t) && A(t)),
                                t
                        },
                        set: function(t) {
                            var n = i ? i.call(e) : a;
                            t === n || t !== t && n !== n || (s ? s.call(e, t) : a = t, c = S(t), r.notify())
                        }
                    })
                }
            }
            function C(e, t, a) {
                if (Array.isArray(e) && "number" == typeof t) return e.length = Math.max(e.length, t),
                    e.splice(t, 1, a),
                    a;
                if (r(e, t)) return e[t] = a,
                    a;
                var n = e.__ob__;
                return e._isVue || n && n.vmCount ? a: n ? (T(n.value, t, a), n.dep.notify(), a) : (e[t] = a, a)
            }
            function M(e, t) {
                if (Array.isArray(e) && "number" == typeof t) return void e.splice(t, 1);
                var a = e.__ob__;
                e._isVue || a && a.vmCount || r(e, t) && (delete e[t], a && a.dep.notify())
            }
            function A(e) {
                for (var t = void 0,
                         a = 0,
                         n = e.length; a < n; a++) t = e[a],
                t && t.__ob__ && t.__ob__.dep.depend(),
                Array.isArray(t) && A(t)
            }
            function P(e, t) {
                if (!t) return e;
                for (var a, n, o, i = Object.keys(t), s = 0; s < i.length; s++) a = i[s],
                    n = e[a],
                    o = t[a],
                    r(e, a) ? p(n) && p(o) && P(n, o) : C(e, a, o);
                return e
            }
            function I(e, t) {
                return t ? e ? e.concat(t) : Array.isArray(t) ? t: [t] : e
            }
            function N(e, t) {
                var a = Object.create(e || null);
                return t ? l(a, t) : a
            }
            function E(e) {
                var t = e.props;
                if (t) {
                    var a, n, r, o = {};
                    if (Array.isArray(t)) for (a = t.length; a--;)"string" == typeof(n = t[a]) && (r = Dr(n), o[r] = {
                        type: null
                    });
                    else if (p(t)) for (var i in t) n = t[i],
                        r = Dr(i),
                        o[r] = p(n) ? n: {
                            type: n
                        };
                    e.props = o
                }
            }
            function O(e) {
                var t = e.directives;
                if (t) for (var a in t) {
                    var n = t[a];
                    "function" == typeof n && (t[a] = {
                        bind: n,
                        update: n
                    })
                }
            }
            function j(e, t, a) {
                function n(n) {
                    var r = eo[n] || to;
                    u[n] = r(e[n], t[n], a, n)
                }
                E(t),
                    O(t);
                var o = t.extends;
                if (o && (e = "function" == typeof o ? j(e, o.options, a) : j(e, o, a)), t.mixins) for (var i = 0,
                                                                                                            s = t.mixins.length; i < s; i++) {
                    var c = t.mixins[i];
                    c.prototype instanceof at && (c = c.options),
                        e = j(e, c, a)
                }
                var l, u = {};
                for (l in e) n(l);
                for (l in t) r(e, l) || n(l);
                return u
            }
            function $(e, t, a, n) {
                if ("string" == typeof a) {
                    var o = e[t];
                    if (r(o, a)) return o[a];
                    var i = Dr(a);
                    if (r(o, i)) return o[i];
                    var s = kr(i);
                    if (r(o, s)) return o[s];
                    return o[a] || o[i] || o[s]
                }
            }
            function L(e, t, a, n) {
                var o = t[e],
                    i = !r(a, e),
                    s = a[e];
                if (H(Boolean, o.type) && (i && !r(o, "default") ? s = !1 : H(String, o.type) || "" !== s && s !== xr(e) || (s = !0)), void 0 === s) {
                    s = R(n, o, e);
                    var c = Kr.shouldConvert;
                    Kr.shouldConvert = !0,
                        S(s),
                        Kr.shouldConvert = c
                }
                return s
            }
            function R(e, t, a) {
                if (r(t, "default")) {
                    var n = t.
                        default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" == typeof n && "Function" !== B(t.type) ? n.call(e) : n
                }
            }
            function B(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t && t[1]
            }
            function H(e, t) {
                if (!Array.isArray(t)) return B(t) === B(e);
                for (var a = 0,
                         n = t.length; a < n; a++) if (B(t[a]) === B(e)) return ! 0;
                return ! 1
            }
            function V(e, t, a) {
                if (Ar.errorHandler) Ar.errorHandler.call(null, e, t, a);
                else {
                    if (!Er || "undefined" == typeof console) throw e;
                    console.error(e)
                }
            }
            function F(e) {
                return new ao(void 0, void 0, void 0, String(e))
            }
            function q(e) {
                var t = new ao(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
                return t.ns = e.ns,
                    t.isStatic = e.isStatic,
                    t.key = e.key,
                    t.isCloned = !0,
                    t
            }
            function W(e) {
                for (var t = e.length,
                         a = new Array(t), n = 0; n < t; n++) a[n] = q(e[n]);
                return a
            }
            function U(e) {
                function t() {
                    var e = arguments,
                        a = t.fns;
                    if (!Array.isArray(a)) return a.apply(null, arguments);
                    for (var n = 0; n < a.length; n++) a[n].apply(null, e)
                }
                return t.fns = e,
                    t
            }
            function z(e, t, a, n, r) {
                var o, i, s, c;
                for (o in e) i = e[o],
                    s = t[o],
                    c = io(o),
                i && (s ? i !== s && (s.fns = i, e[o] = s) : (i.fns || (i = e[o] = U(i)), a(c.name, i, c.once, c.capture)));
                for (o in t) e[o] || (c = io(o), n(c.name, t[o], c.capture))
            }
            function X(e, t, a) {
                function r() {
                    a.apply(this, arguments),
                        n(o.fns, r)
                }
                var o, i = e[t];
                i ? i.fns && i.merged ? (o = i, o.fns.push(r)) : o = U([i, r]) : o = U([r]),
                    o.merged = !0,
                    e[t] = o
            }
            function G(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e
            }
            function Y(e) {
                return o(e) ? [F(e)] : Array.isArray(e) ? J(e) : void 0
            }
            function J(e, t) {
                var a, n, r, i = [];
                for (a = 0; a < e.length; a++) null != (n = e[a]) && "boolean" != typeof n && (r = i[i.length - 1], Array.isArray(n) ? i.push.apply(i, J(n, (t || "") + "_" + a)) : o(n) ? r && r.text ? r.text += String(n) : "" !== n && i.push(F(n)) : n.text && r && r.text ? i[i.length - 1] = F(r.text + n.text) : (n.tag && null == n.key && null != t && (n.key = "__vlist" + t + "_" + a + "__"), i.push(n)));
                return i
            }
            function Q(e) {
                return e && e.filter(function(e) {
                    return e && e.componentOptions
                })[0]
            }
            function K(e) {
                e._events = Object.create(null),
                    e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && te(e, t)
            }
            function Z(e, t, a) {
                a ? ro.$once(e, t) : ro.$on(e, t)
            }
            function ee(e, t) {
                ro.$off(e, t)
            }
            function te(e, t, a) {
                ro = e,
                    z(t, a || {},
                        Z, ee, e)
            }
            function ae(e, t) {
                var a = {};
                if (!e) return a;
                for (var n, r, o = [], i = 0, s = e.length; i < s; i++) if (r = e[i], (r.context === t || r.functionalContext === t) && r.data && (n = r.data.slot)) {
                    var c = a[n] || (a[n] = []);
                    "template" === r.tag ? c.push.apply(c, r.children) : c.push(r)
                } else o.push(r);
                return o.every(ne) || (a.
                    default = o),
                    a
            }
            function ne(e) {
                return e.isComment || " " === e.text
            }
            function re(e) {
                for (var t = {},
                         a = 0; a < e.length; a++) t[e[a][0]] = e[a][1];
                return t
            }
            function oe(e) {
                var t = e.$options,
                    a = t.parent;
                if (a && !t.abstract) {
                    for (; a.$options.abstract && a.$parent;) a = a.$parent;
                    a.$children.push(e)
                }
                e.$parent = a,
                    e.$root = a ? a.$root: e,
                    e.$children = [],
                    e.$refs = {},
                    e._watcher = null,
                    e._inactive = null,
                    e._directInactive = !1,
                    e._isMounted = !1,
                    e._isDestroyed = !1,
                    e._isBeingDestroyed = !1
            }
            function ie(e, t, a) {
                e.$el = t,
                e.$options.render || (e.$options.render = oo),
                    pe(e, "beforeMount");
                var n;
                return n = function() {
                    e._update(e._render(), a)
                },
                    e._watcher = new mo(e, n, f),
                    a = !1,
                null == e.$vnode && (e._isMounted = !0, pe(e, "mounted")),
                    e
            }
            function se(e, t, a, n, r) {
                var o = !!(r || e.$options._renderChildren || n.data.scopedSlots || e.$scopedSlots !== Pr);
                if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), e.$options._renderChildren = r, t && e.$options.props) {
                    Kr.shouldConvert = !1;
                    for (var i = e._props,
                             s = e.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var l = s[c];
                        i[l] = L(l, e.$options.props, t, e)
                    }
                    Kr.shouldConvert = !0,
                        e.$options.propsData = t
                }
                if (a) {
                    var u = e.$options._parentListeners;
                    e.$options._parentListeners = a,
                        te(e, a, u)
                }
                o && (e.$slots = ae(r, n.context), e.$forceUpdate())
            }
            function ce(e) {
                for (; e && (e = e.$parent);) if (e._inactive) return ! 0;
                return ! 1
            }
            function le(e, t) {
                if (t) {
                    if (e._directInactive = !1, ce(e)) return
                } else if (e._directInactive) return;
                if (e._inactive || null == e._inactive) {
                    e._inactive = !1;
                    for (var a = 0; a < e.$children.length; a++) le(e.$children[a]);
                    pe(e, "activated")
                }
            }
            function ue(e, t) {
                if (! (t && (e._directInactive = !0, ce(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var a = 0; a < e.$children.length; a++) ue(e.$children[a]);
                    pe(e, "deactivated")
                }
            }
            function pe(e, t) {
                var a = e.$options[t];
                if (a) for (var n = 0,
                                r = a.length; n < r; n++) try {
                    a[n].call(e)
                } catch(a) {
                    V(a, e, t + " hook")
                }
                e._hasHookEvent && e.$emit("hook:" + t)
            }
            function de() {
                co.length = 0,
                    lo = {},
                    uo = po = !1
            }
            function fe() {
                po = !0;
                var e, t, a;
                for (co.sort(function(e, t) {
                    return e.id - t.id
                }), fo = 0; fo < co.length; fo++) e = co[fo],
                    t = e.id,
                    lo[t] = null,
                    e.run();
                var n = co.slice();
                for (de(), fo = n.length; fo--;) e = n[fo],
                    a = e.vm,
                a._watcher === e && a._isMounted && pe(a, "updated");
                Fr && Ar.devtools && Fr.emit("flush")
            }
            function he(e) {
                var t = e.id;
                if (null == lo[t]) {
                    if (lo[t] = !0, po) {
                        for (var a = co.length - 1; a >= 0 && co[a].id > e.id;) a--;
                        co.splice(Math.max(a, fo) + 1, 0, e)
                    } else co.push(e);
                    uo || (uo = !0, Wr(fe))
                }
            }
            function me(e) {
                go.clear(),
                    ge(e, go)
            }
            function ge(e, t) {
                var a, n, r = Array.isArray(e);
                if ((r || u(e)) && Object.isExtensible(e)) {
                    if (e.__ob__) {
                        var o = e.__ob__.dep.id;
                        if (t.has(o)) return;
                        t.add(o)
                    }
                    if (r) for (a = e.length; a--;) ge(e[a], t);
                    else for (n = Object.keys(e), a = n.length; a--;) ge(e[n[a]], t)
                }
            }
            function ve(e, t, a) {
                vo.get = function() {
                    return this[t][a]
                },
                    vo.set = function(e) {
                        this[t][a] = e
                    },
                    Object.defineProperty(e, a, vo)
            }
            function ye(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && be(e, t.props),
                t.methods && Se(e, t.methods),
                    t.data ? _e(e) : S(e._data = {},
                        !0),
                t.computed && De(e, t.computed),
                t.watch && Te(e, t.watch)
            }
            function be(e, t) {
                var a = e.$options.propsData || {},
                    n = e._props = {},
                    r = e.$options._propKeys = [],
                    o = !e.$parent;
                Kr.shouldConvert = o;
                for (var i in t) !
                    function(o) {
                        r.push(o);
                        var i = L(o, t, a, e);
                        T(n, o, i),
                        o in e || ve(e, "_props", o)
                    } (i);
                Kr.shouldConvert = !0
            }
            function _e(e) {
                var t = e.$options.data;
                t = e._data = "function" == typeof t ? we(t, e) : t || {},
                p(t) || (t = {});
                for (var a = Object.keys(t), n = e.$options.props, o = a.length; o--;) n && r(n, a[o]) || v(a[o]) || ve(e, "_data", a[o]);
                S(t, !0)
            }
            function we(e, t) {
                try {
                    return e.call(t)
                } catch(e) {
                    return V(e, t, "data()"),
                        {}
                }
            }
            function De(e, t) {
                var a = e._computedWatchers = Object.create(null);
                for (var n in t) {
                    var r = t[n],
                        o = "function" == typeof r ? r: r.get;
                    a[n] = new mo(e, o, f, yo),
                    n in e || ke(e, n, r)
                }
            }
            function ke(e, t, a) {
                "function" == typeof a ? (vo.get = xe(t), vo.set = f) : (vo.get = a.get ? !1 !== a.cache ? xe(t) : a.get: f, vo.set = a.set ? a.set: f),
                    Object.defineProperty(e, t, vo)
            }
            function xe(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(),
                    Xr.target && t.depend(),
                        t.value
                }
            }
            function Se(e, t) {
                e.$options.props;
                for (var a in t) e[a] = null == t[a] ? f: s(t[a], e)
            }
            function Te(e, t) {
                for (var a in t) {
                    var n = t[a];
                    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) Ce(e, a, n[r]);
                    else Ce(e, a, n)
                }
            }
            function Ce(e, t, a) {
                var n;
                p(a) && (n = a, a = a.handler),
                "string" == typeof a && (a = e[a]),
                    e.$watch(t, a, n)
            }
            function Me(e, t, a, n, r) {
                if (e) {
                    var o = a.$options._base;
                    if (u(e) && (e = o.extend(e)), "function" == typeof e) {
                        if (!e.cid) if (e.resolved) e = e.resolved;
                        else if (! (e = Ie(e, o,
                                function() {
                                    a.$forceUpdate()
                                }))) return;
                        Ze(e),
                            t = t || {},
                        t.model && $e(e.options, t);
                        var i = Ne(t, e, r);
                        if (e.options.functional) return Ae(e, i, t, a, n);
                        var s = t.on;
                        t.on = t.nativeOn,
                        e.options.abstract && (t = {}),
                            Oe(t);
                        var c = e.options.name || r;
                        return new ao("vue-component-" + e.cid + (c ? "-" + c: ""), t, void 0, void 0, void 0, a, {
                            Ctor: e,
                            propsData: i,
                            listeners: s,
                            tag: r,
                            children: n
                        })
                    }
                }
            }
            function Ae(e, t, a, n, r) {
                var o = {},
                    i = e.options.props;
                if (i) for (var s in i) o[s] = L(s, i, t);
                var c = Object.create(n),
                    l = function(e, t, a, n) {
                        return Le(c, e, t, a, n, !0)
                    },
                    u = e.options.render.call(null, l, {
                        props: o,
                        data: a,
                        parent: n,
                        children: r,
                        slots: function() {
                            return ae(r, n)
                        }
                    });
                return u instanceof ao && (u.functionalContext = n, a.slot && ((u.data || (u.data = {})).slot = a.slot)),
                    u
            }
            function Pe(e, t, a, n) {
                var r = e.componentOptions,
                    o = {
                        _isComponent: !0,
                        parent: t,
                        propsData: r.propsData,
                        _componentTag: r.tag,
                        _parentVnode: e,
                        _parentListeners: r.listeners,
                        _renderChildren: r.children,
                        _parentElm: a || null,
                        _refElm: n || null
                    },
                    i = e.data.inlineTemplate;
                return i && (o.render = i.render, o.staticRenderFns = i.staticRenderFns),
                    new r.Ctor(o)
            }
            function Ie(e, t, a) {
                if (!e.requested) {
                    e.requested = !0;
                    var n = e.pendingCallbacks = [a],
                        r = !0,
                        o = function(a) {
                            if (u(a) && (a = t.extend(a)), e.resolved = a, !r) for (var o = 0,
                                                                                        i = n.length; o < i; o++) n[o](a)
                        },
                        i = function(e) {},
                        s = e(o, i);
                    return s && "function" == typeof s.then && !e.resolved && s.then(o, i),
                        r = !1,
                        e.resolved
                }
                e.pendingCallbacks.push(a)
            }
            function Ne(e, t, a) {
                var n = t.options.props;
                if (n) {
                    var r = {},
                        o = e.attrs,
                        i = e.props,
                        s = e.domProps;
                    if (o || i || s) for (var c in n) {
                        var l = xr(c);
                        Ee(r, i, c, l, !0) || Ee(r, o, c, l) || Ee(r, s, c, l)
                    }
                    return r
                }
            }
            function Ee(e, t, a, n, o) {
                if (t) {
                    if (r(t, a)) return e[a] = t[a],
                    o || delete t[a],
                        !0;
                    if (r(t, n)) return e[a] = t[n],
                    o || delete t[n],
                        !0
                }
                return ! 1
            }
            function Oe(e) {
                e.hook || (e.hook = {});
                for (var t = 0; t < _o.length; t++) {
                    var a = _o[t],
                        n = e.hook[a],
                        r = bo[a];
                    e.hook[a] = n ? je(r, n) : r
                }
            }
            function je(e, t) {
                return function(a, n, r, o) {
                    e(a, n, r, o),
                        t(a, n, r, o)
                }
            }
            function $e(e, t) {
                var a = e.model && e.model.prop || "value",
                    n = e.model && e.model.event || "input"; (t.props || (t.props = {}))[a] = t.model.value;
                var r = t.on || (t.on = {});
                r[n] ? r[n] = [t.model.callback].concat(r[n]) : r[n] = t.model.callback
            }
            function Le(e, t, a, n, r, i) {
                return (Array.isArray(a) || o(a)) && (r = n, n = a, a = void 0),
                i && (r = Do),
                    Re(e, t, a, n, r)
            }
            function Re(e, t, a, n, r) {
                if (a && a.__ob__) return oo();
                if (!t) return oo();
                Array.isArray(n) && "function" == typeof n[0] && (a = a || {},
                    a.scopedSlots = {
                        default:
                            n[0]
                    },
                    n.length = 0),
                    r === Do ? n = Y(n) : r === wo && (n = G(n));
                var o, i;
                if ("string" == typeof t) {
                    var s;
                    i = Ar.getTagNamespace(t),
                        o = Ar.isReservedTag(t) ? new ao(Ar.parsePlatformTagName(t), a, n, void 0, void 0, e) : (s = $(e.$options, "components", t)) ? Me(s, a, e, n, t) : new ao(t, a, n, void 0, void 0, e)
                } else o = Me(t, a, e, n);
                return o ? (i && Be(o, i), o) : oo()
            }
            function Be(e, t) {
                if (e.ns = t, "foreignObject" !== e.tag && e.children) for (var a = 0,
                                                                                n = e.children.length; a < n; a++) {
                    var r = e.children[a];
                    r.tag && !r.ns && Be(r, t)
                }
            }
            function He(e, t) {
                var a, n, r, o, i;
                if (Array.isArray(e) || "string" == typeof e) for (a = new Array(e.length), n = 0, r = e.length; n < r; n++) a[n] = t(e[n], n);
                else if ("number" == typeof e) for (a = new Array(e), n = 0; n < e; n++) a[n] = t(n + 1, n);
                else if (u(e)) for (o = Object.keys(e), a = new Array(o.length), n = 0, r = o.length; n < r; n++) i = o[n],
                    a[n] = t(e[i], i, n);
                return a
            }
            function Ve(e, t, a, n) {
                var r = this.$scopedSlots[e];
                return r ? (a = a || {},
                n && l(a, n), r(a) || t) : this.$slots[e] || t
            }
            function Fe(e) {
                return $(this.$options, "filters", e, !0) || Mr
            }
            function qe(e, t, a) {
                var n = Ar.keyCodes[t] || a;
                return Array.isArray(n) ? -1 === n.indexOf(e) : n !== e
            }
            function We(e, t, a, n) {
                if (a && u(a)) {
                    Array.isArray(a) && (a = d(a));
                    var r;
                    for (var o in a) {
                        if ("class" === o || "style" === o) r = e;
                        else {
                            var i = e.attrs && e.attrs.type;
                            r = n || Ar.mustUseProp(t, i, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        o in r || (r[o] = a[o])
                    }
                }
                return e
            }
            function Ue(e, t) {
                var a = this._staticTrees[e];
                return a && !t ? Array.isArray(a) ? W(a) : q(a) : (a = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), Xe(a, "__static__" + e, !1), a)
            }
            function ze(e, t, a) {
                return Xe(e, "__once__" + t + (a ? "_" + a: ""), !0),
                    e
            }
            function Xe(e, t, a) {
                if (Array.isArray(e)) for (var n = 0; n < e.length; n++) e[n] && "string" != typeof e[n] && Ge(e[n], t + "_" + n, a);
                else Ge(e, t, a)
            }
            function Ge(e, t, a) {
                e.isStatic = !0,
                    e.key = t,
                    e.isOnce = a
            }
            function Ye(e) {
                e.$vnode = null,
                    e._vnode = null,
                    e._staticTrees = null;
                var t = e.$options._parentVnode,
                    a = t && t.context;
                e.$slots = ae(e.$options._renderChildren, a),
                    e.$scopedSlots = Pr,
                    e._c = function(t, a, n, r) {
                        return Le(e, t, a, n, r, !1)
                    },
                    e.$createElement = function(t, a, n, r) {
                        return Le(e, t, a, n, r, !0)
                    }
            }
            function Je(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }
            function Qe(e) {
                var t = e.$options.inject;
                if (t) for (var a = Array.isArray(t), n = a ? t: qr ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < n.length; r++) !
                    function(r) {
                        for (var o = n[r], i = a ? o: t[o], s = e; s;) {
                            if (s._provided && i in s._provided) {
                                T(e, o, s._provided[i]);
                                break
                            }
                            s = s.$parent
                        }
                    } (r)
            }
            function Ke(e, t) {
                var a = e.$options = Object.create(e.constructor.options);
                a.parent = t.parent,
                    a.propsData = t.propsData,
                    a._parentVnode = t._parentVnode,
                    a._parentListeners = t._parentListeners,
                    a._renderChildren = t._renderChildren,
                    a._componentTag = t._componentTag,
                    a._parentElm = t._parentElm,
                    a._refElm = t._refElm,
                t.render && (a.render = t.render, a.staticRenderFns = t.staticRenderFns)
            }
            function Ze(e) {
                var t = e.options;
                if (e.super) {
                    var a = Ze(e.super);
                    if (a !== e.superOptions) {
                        e.superOptions = a;
                        var n = et(e);
                        n && l(e.extendOptions, n),
                            t = e.options = j(a, e.extendOptions),
                        t.name && (t.components[t.name] = e)
                    }
                }
                return t
            }
            function et(e) {
                var t, a = e.options,
                    n = e.sealedOptions;
                for (var r in a) a[r] !== n[r] && (t || (t = {}), t[r] = tt(a[r], n[r]));
                return t
            }
            function tt(e, t) {
                if (Array.isArray(e)) {
                    var a = [];
                    t = Array.isArray(t) ? t: [t];
                    for (var n = 0; n < e.length; n++) t.indexOf(e[n]) < 0 && a.push(e[n]);
                    return a
                }
                return e
            }
            function at(e) {
                this._init(e)
            }
            function nt(e) {
                e.use = function(e) {
                    if (!e.installed) {
                        var t = c(arguments, 1);
                        return t.unshift(this),
                            "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t),
                            e.installed = !0,
                            this
                    }
                }
            }
            function rt(e) {
                e.mixin = function(e) {
                    this.options = j(this.options, e)
                }
            }
            function ot(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var a = this,
                        n = a.cid,
                        r = e._Ctor || (e._Ctor = {});
                    if (r[n]) return r[n];
                    var o = e.name || a.options.name,
                        i = function(e) {
                            this._init(e)
                        };
                    return i.prototype = Object.create(a.prototype),
                        i.prototype.constructor = i,
                        i.cid = t++,
                        i.options = j(a.options, e),
                        i.super = a,
                    i.options.props && it(i),
                    i.options.computed && st(i),
                        i.extend = a.extend,
                        i.mixin = a.mixin,
                        i.use = a.use,
                        Ar._assetTypes.forEach(function(e) {
                            i[e] = a[e]
                        }),
                    o && (i.options.components[o] = i),
                        i.superOptions = a.options,
                        i.extendOptions = e,
                        i.sealedOptions = l({},
                            i.options),
                        r[n] = i,
                        i
                }
            }
            function it(e) {
                var t = e.options.props;
                for (var a in t) ve(e.prototype, "_props", a)
            }
            function st(e) {
                var t = e.options.computed;
                for (var a in t) ke(e.prototype, a, t[a])
            }
            function ct(e) {
                Ar._assetTypes.forEach(function(t) {
                    e[t] = function(e, a) {
                        return a ? ("component" === t && p(a) && (a.name = a.name || e, a = this.options._base.extend(a)), "directive" === t && "function" == typeof a && (a = {
                            bind: a,
                            update: a
                        }), this.options[t + "s"][e] = a, a) : this.options[t + "s"][e]
                    }
                })
            }
            function lt(e) {
                return e && (e.Ctor.options.name || e.tag)
            }
            function ut(e, t) {
                return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e instanceof RegExp && e.test(t)
            }
            function pt(e, t) {
                for (var a in e) {
                    var n = e[a];
                    if (n) {
                        var r = lt(n.componentOptions);
                        r && !t(r) && (dt(n), e[a] = null)
                    }
                }
            }
            function dt(e) {
                e && (e.componentInstance._inactive || pe(e.componentInstance, "deactivated"), e.componentInstance.$destroy())
            }
            function ft(e) {
                for (var t = e.data,
                         a = e,
                         n = e; n.componentInstance;) n = n.componentInstance._vnode,
                n.data && (t = ht(n.data, t));
                for (; a = a.parent;) a.data && (t = ht(t, a.data));
                return mt(t)
            }
            function ht(e, t) {
                return {
                    staticClass: gt(e.staticClass, t.staticClass),
                    class: e.class ? [e.class, t.class] : t.class
                }
            }
            function mt(e) {
                var t = e.class,
                    a = e.staticClass;
                return a || t ? gt(a, vt(t)) : ""
            }
            function gt(e, t) {
                return e ? t ? e + " " + t: e: t || ""
            }
            function vt(e) {
                var t = "";
                if (!e) return t;
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    for (var a, n = 0,
                             r = e.length; n < r; n++) e[n] && (a = vt(e[n])) && (t += a + " ");
                    return t.slice(0, -1)
                }
                if (u(e)) {
                    for (var o in e) e[o] && (t += o + " ");
                    return t.slice(0, -1)
                }
                return t
            }
            function yt(e) {
                return zo(e) ? "svg": "math" === e ? "math": void 0
            }
            function bt(e) {
                if (!Er) return ! 0;
                if (Go(e)) return ! 1;
                if (e = e.toLowerCase(), null != Yo[e]) return Yo[e];
                var t = document.createElement(e);
                return e.indexOf("-") > -1 ? Yo[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement: Yo[e] = /HTMLUnknownElement/.test(t.toString())
            }
            function _t(e) {
                if ("string" == typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div")
                }
                return e
            }
            function wt(e, t) {
                var a = document.createElement(e);
                return "select" !== e ? a: (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && a.setAttribute("multiple", "multiple"), a)
            }
            function Dt(e, t) {
                return document.createElementNS(Wo[e], t)
            }
            function kt(e) {
                return document.createTextNode(e)
            }
            function xt(e) {
                return document.createComment(e)
            }
            function St(e, t, a) {
                e.insertBefore(t, a)
            }
            function Tt(e, t) {
                e.removeChild(t)
            }
            function Ct(e, t) {
                e.appendChild(t)
            }
            function Mt(e) {
                return e.parentNode
            }
            function At(e) {
                return e.nextSibling
            }
            function Pt(e) {
                return e.tagName
            }
            function It(e, t) {
                e.textContent = t
            }
            function Nt(e, t, a) {
                e.setAttribute(t, a)
            }
            function Et(e, t) {
                var a = e.data.ref;
                if (a) {
                    var r = e.context,
                        o = e.componentInstance || e.elm,
                        i = r.$refs;
                    t ? Array.isArray(i[a]) ? n(i[a], o) : i[a] === o && (i[a] = void 0) : e.data.refInFor ? Array.isArray(i[a]) && i[a].indexOf(o) < 0 ? i[a].push(o) : i[a] = [o] : i[a] = o
                }
            }
            function Ot(e) {
                return void 0 === e || null === e
            }
            function jt(e) {
                return void 0 !== e && null !== e
            }
            function $t(e) {
                return ! 0 === e
            }
            function Lt(e, t) {
                return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && jt(e.data) === jt(t.data) && Rt(e, t)
            }
            function Rt(e, t) {
                if ("input" !== e.tag) return ! 0;
                var a;
                return (jt(a = e.data) && jt(a = a.attrs) && a.type) === (jt(a = t.data) && jt(a = a.attrs) && a.type)
            }
            function Bt(e, t, a) {
                var n, r, o = {};
                for (n = t; n <= a; ++n) r = e[n].key,
                jt(r) && (o[r] = n);
                return o
            }
            function Ht(e, t) { (e.data.directives || t.data.directives) && Vt(e, t)
            }
            function Vt(e, t) {
                var a, n, r, o = e === Ko,
                    i = t === Ko,
                    s = Ft(e.data.directives, e.context),
                    c = Ft(t.data.directives, t.context),
                    l = [],
                    u = [];
                for (a in c) n = s[a],
                    r = c[a],
                    n ? (r.oldValue = n.value, Wt(r, "update", t, e), r.def && r.def.componentUpdated && u.push(r)) : (Wt(r, "bind", t, e), r.def && r.def.inserted && l.push(r));
                if (l.length) {
                    var p = function() {
                        for (var a = 0; a < l.length; a++) Wt(l[a], "inserted", t, e)
                    };
                    o ? X(t.data.hook || (t.data.hook = {}), "insert", p) : p()
                }
                if (u.length && X(t.data.hook || (t.data.hook = {}), "postpatch",
                        function() {
                            for (var a = 0; a < u.length; a++) Wt(u[a], "componentUpdated", t, e)
                        }), !o) for (a in s) c[a] || Wt(s[a], "unbind", e, e, i)
            }
            function Ft(e, t) {
                var a = Object.create(null);
                if (!e) return a;
                var n, r;
                for (n = 0; n < e.length; n++) r = e[n],
                r.modifiers || (r.modifiers = ti),
                    a[qt(r)] = r,
                    r.def = $(t.$options, "directives", r.name, !0);
                return a
            }
            function qt(e) {
                return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
            }
            function Wt(e, t, a, n, r) {
                var o = e.def && e.def[t];
                o && o(a.elm, e, a, n, r)
            }
            function Ut(e, t) {
                if (e.data.attrs || t.data.attrs) {
                    var a, n, r = t.elm,
                        o = e.data.attrs || {},
                        i = t.data.attrs || {};
                    i.__ob__ && (i = t.data.attrs = l({},
                        i));
                    for (a in i) n = i[a],
                    o[a] !== n && zt(r, a, n);
                    $r && i.value !== o.value && zt(r, "value", i.value);
                    for (a in o) null == i[a] && (Vo(a) ? r.removeAttributeNS(Ho, Fo(a)) : Ro(a) || r.removeAttribute(a))
                }
            }
            function zt(e, t, a) {
                Bo(t) ? qo(a) ? e.removeAttribute(t) : e.setAttribute(t, t) : Ro(t) ? e.setAttribute(t, qo(a) || "false" === a ? "false": "true") : Vo(t) ? qo(a) ? e.removeAttributeNS(Ho, Fo(t)) : e.setAttributeNS(Ho, t, a) : qo(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
            }
            function Xt(e, t) {
                var a = t.elm,
                    n = t.data,
                    r = e.data;
                if (n.staticClass || n.class || r && (r.staticClass || r.class)) {
                    var o = ft(t),
                        i = a._transitionClasses;
                    i && (o = gt(o, vt(i))),
                    o !== a._prevClass && (a.setAttribute("class", o), a._prevClass = o)
                }
            }
            function Gt(e) {
                function t() { (i || (i = [])).push(e.slice(h, r).trim()),
                    h = r + 1
                }
                var a, n, r, o, i, s = !1,
                    c = !1,
                    l = !1,
                    u = !1,
                    p = 0,
                    d = 0,
                    f = 0,
                    h = 0;
                for (r = 0; r < e.length; r++) if (n = a, a = e.charCodeAt(r), s) 39 === a && 92 !== n && (s = !1);
                else if (c) 34 === a && 92 !== n && (c = !1);
                else if (l) 96 === a && 92 !== n && (l = !1);
                else if (u) 47 === a && 92 !== n && (u = !1);
                else if (124 !== a || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || p || d || f) {
                    switch (a) {
                        case 34:
                            c = !0;
                            break;
                        case 39:
                            s = !0;
                            break;
                        case 96:
                            l = !0;
                            break;
                        case 40:
                            f++;
                            break;
                        case 41:
                            f--;
                            break;
                        case 91:
                            d++;
                            break;
                        case 93:
                            d--;
                            break;
                        case 123:
                            p++;
                            break;
                        case 125:
                            p--
                    }
                    if (47 === a) {
                        for (var m = r - 1,
                                 g = void 0; m >= 0 && " " === (g = e.charAt(m)); m--);
                        g && oi.test(g) || (u = !0)
                    }
                } else void 0 === o ? (h = r + 1, o = e.slice(0, r).trim()) : t();
                if (void 0 === o ? o = e.slice(0, r).trim() : 0 !== h && t(), i) for (r = 0; r < i.length; r++) o = Yt(o, i[r]);
                return o
            }
            function Yt(e, t) {
                var a = t.indexOf("(");
                return a < 0 ? '_f("' + t + '")(' + e + ")": '_f("' + t.slice(0, a) + '")(' + e + "," + t.slice(a + 1)
            }
            function Jt(e) {
                console.error("[Vue compiler]: " + e)
            }
            function Qt(e, t) {
                return e ? e.map(function(e) {
                    return e[t]
                }).filter(function(e) {
                    return e
                }) : []
            }
            function Kt(e, t, a) { (e.props || (e.props = [])).push({
                name: t,
                value: a
            })
            }
            function Zt(e, t, a) { (e.attrs || (e.attrs = [])).push({
                name: t,
                value: a
            })
            }
            function ea(e, t, a, n, r, o) { (e.directives || (e.directives = [])).push({
                name: t,
                rawName: a,
                value: n,
                arg: r,
                modifiers: o
            })
            }
            function ta(e, t, a, n, r) {
                n && n.capture && (delete n.capture, t = "!" + t),
                n && n.once && (delete n.once, t = "~" + t);
                var o;
                n && n.native ? (delete n.native, o = e.nativeEvents || (e.nativeEvents = {})) : o = e.events || (e.events = {});
                var i = {
                        value: a,
                        modifiers: n
                    },
                    s = o[t];
                Array.isArray(s) ? r ? s.unshift(i) : s.push(i) : o[t] = s ? r ? [i, s] : [s, i] : i
            }
            function aa(e, t, a) {
                var n = na(e, ":" + t) || na(e, "v-bind:" + t);
                if (null != n) return Gt(n);
                if (!1 !== a) {
                    var r = na(e, t);
                    if (null != r) return JSON.stringify(r)
                }
            }
            function na(e, t) {
                var a;
                if (null != (a = e.attrsMap[t])) for (var n = e.attrsList,
                                                          r = 0,
                                                          o = n.length; r < o; r++) if (n[r].name === t) {
                    n.splice(r, 1);
                    break
                }
                return a
            }
            function ra(e, t, a) {
                var n = a || {},
                    r = n.number,
                    o = n.trim,
                    i = "$$v";
                o && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
                r && (i = "_n(" + i + ")");
                var s = oa(t, i);
                e.model = {
                    value: "(" + t + ")",
                    expression: '"' + t + '"',
                    callback: "function ($$v) {" + s + "}"
                }
            }
            function oa(e, t) {
                var a = ia(e);
                return null === a.idx ? e + "=" + t: "var $$exp = " + a.exp + ", $$idx = " + a.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}"
            }
            function ia(e) {
                if (Mo = e, Co = Mo.length, Po = Io = No = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < Co - 1) return {
                    exp: e,
                    idx: null
                };
                for (; ! ca();) Ao = sa(),
                    la(Ao) ? pa(Ao) : 91 === Ao && ua(Ao);
                return {
                    exp: e.substring(0, Io),
                    idx: e.substring(Io + 1, No)
                }
            }
            function sa() {
                return Mo.charCodeAt(++Po)
            }
            function ca() {
                return Po >= Co
            }
            function la(e) {
                return 34 === e || 39 === e
            }
            function ua(e) {
                var t = 1;
                for (Io = Po; ! ca();) if (e = sa(), la(e)) pa(e);
                else if (91 === e && t++, 93 === e && t--, 0 === t) {
                    No = Po;
                    break
                }
            }
            function pa(e) {
                for (var t = e; ! ca() && (e = sa()) !== t;);
            }
            function da(e, t, a) {
                Eo = a;
                var n = t.value,
                    r = t.modifiers,
                    o = e.tag,
                    i = e.attrsMap.type;
                if ("select" === o) ma(e, n, r);
                else if ("input" === o && "checkbox" === i) fa(e, n, r);
                else if ("input" === o && "radio" === i) ha(e, n, r);
                else if ("input" === o || "textarea" === o) ga(e, n, r);
                else if (!Ar.isReservedTag(o)) return ra(e, n, r),
                    !1;
                return ! 0
            }
            function fa(e, t, a) {
                var n = a && a.number,
                    r = aa(e, "value") || "null",
                    o = aa(e, "true-value") || "true",
                    i = aa(e, "false-value") || "false";
                Kt(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + r + ")>-1" + ("true" === o ? ":(" + t + ")": ":_q(" + t + "," + o + ")")),
                    ta(e, si, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + i + ");if(Array.isArray($$a)){var $$v=" + (n ? "_n(" + r + ")": r) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0)
            }
            function ha(e, t, a) {
                var n = a && a.number,
                    r = aa(e, "value") || "null";
                r = n ? "_n(" + r + ")": r,
                    Kt(e, "checked", "_q(" + t + "," + r + ")"),
                    ta(e, si, oa(t, r), null, !0)
            }
            function ma(e, t, a) {
                var n = a && a.number,
                    r = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n ? "_n(val)": "val") + "})",
                    o = "var $$selectedVal = " + r + ";";
                o = o + " " + oa(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),
                    ta(e, "change", o, null, !0)
            }
            function ga(e, t, a) {
                var n = e.attrsMap.type,
                    r = a || {},
                    o = r.lazy,
                    i = r.number,
                    s = r.trim,
                    c = !o && "range" !== n,
                    l = o ? "change": "range" === n ? ii: "input",
                    u = "$event.target.value";
                s && (u = "$event.target.value.trim()"),
                i && (u = "_n(" + u + ")");
                var p = oa(t, u);
                c && (p = "if($event.target.composing)return;" + p),
                    Kt(e, "value", "(" + t + ")"),
                    ta(e, l, p, null, !0),
                (s || i || "number" === n) && ta(e, "blur", "$forceUpdate()")
            }
            function va(e) {
                var t;
                e[ii] && (t = jr ? "change": "input", e[t] = [].concat(e[ii], e[t] || []), delete e[ii]),
                e[si] && (t = Hr ? "click": "change", e[t] = [].concat(e[si], e[t] || []), delete e[si])
            }
            function ya(e, t, a, n) {
                if (a) {
                    var r = t,
                        o = Oo;
                    t = function(a) {
                        null !== (1 === arguments.length ? r(a) : r.apply(null, arguments)) && ba(e, t, n, o)
                    }
                }
                Oo.addEventListener(e, t, n)
            }
            function ba(e, t, a, n) { (n || Oo).removeEventListener(e, t, a)
            }
            function _a(e, t) {
                if (e.data.on || t.data.on) {
                    var a = t.data.on || {},
                        n = e.data.on || {};
                    Oo = t.elm,
                        va(a),
                        z(a, n, ya, ba, t.context)
                }
            }
            function wa(e, t) {
                if (e.data.domProps || t.data.domProps) {
                    var a, n, r = t.elm,
                        o = e.data.domProps || {},
                        i = t.data.domProps || {};
                    i.__ob__ && (i = t.data.domProps = l({},
                        i));
                    for (a in o) null == i[a] && (r[a] = "");
                    for (a in i) if (n = i[a], "textContent" !== a && "innerHTML" !== a || (t.children && (t.children.length = 0), n !== o[a])) if ("value" === a) {
                        r._value = n;
                        var s = null == n ? "": String(n);
                        Da(r, t, s) && (r.value = s)
                    } else r[a] = n
                }
            }
            function Da(e, t, a) {
                return ! e.composing && ("option" === t.tag || ka(e, a) || xa(e, a))
            }
            function ka(e, t) {
                return document.activeElement !== e && e.value !== t
            }
            function xa(e, a) {
                var n = e.value,
                    r = e._vModifiers;
                return r && r.number || "number" === e.type ? t(n) !== t(a) : r && r.trim ? n.trim() !== a.trim() : n !== a
            }
            function Sa(e) {
                var t = Ta(e.style);
                return e.staticStyle ? l(e.staticStyle, t) : t
            }
            function Ta(e) {
                return Array.isArray(e) ? d(e) : "string" == typeof e ? ui(e) : e
            }
            function Ca(e, t) {
                var a, n = {};
                if (t) for (var r = e; r.componentInstance;) r = r.componentInstance._vnode,
                r.data && (a = Sa(r.data)) && l(n, a); (a = Sa(e.data)) && l(n, a);
                for (var o = e; o = o.parent;) o.data && (a = Sa(o.data)) && l(n, a);
                return n
            }
            function Ma(e, t) {
                var a = t.data,
                    n = e.data;
                if (a.staticStyle || a.style || n.staticStyle || n.style) {
                    var r, o, i = t.elm,
                        s = e.data.staticStyle,
                        c = e.data.style || {},
                        u = s || c,
                        p = Ta(t.data.style) || {};
                    t.data.style = p.__ob__ ? l({},
                        p) : p;
                    var d = Ca(t, !0);
                    for (o in u) null == d[o] && fi(i, o, "");
                    for (o in d)(r = d[o]) !== u[o] && fi(i, o, null == r ? "": r)
                }
            }
            function Aa(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var a = " " + (e.getAttribute("class") || "") + " ";
                    a.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (a + t).trim())
                }
            }
            function Pa(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t);
                else {
                    for (var a = " " + (e.getAttribute("class") || "") + " ", n = " " + t + " "; a.indexOf(n) >= 0;) a = a.replace(n, " ");
                    e.setAttribute("class", a.trim())
                }
            }
            function Ia(e) {
                if (e) {
                    if ("object" == typeof e) {
                        var t = {};
                        return ! 1 !== e.css && l(t, vi(e.name || "v")),
                            l(t, e),
                            t
                    }
                    return "string" == typeof e ? vi(e) : void 0
                }
            }
            function Na(e) {
                Si(function() {
                    Si(e)
                })
            }
            function Ea(e, t) { (e._transitionClasses || (e._transitionClasses = [])).push(t),
                Aa(e, t)
            }
            function Oa(e, t) {
                e._transitionClasses && n(e._transitionClasses, t),
                    Pa(e, t)
            }
            function ja(e, t, a) {
                var n = $a(e, t),
                    r = n.type,
                    o = n.timeout,
                    i = n.propCount;
                if (!r) return a();
                var s = r === bi ? Di: xi,
                    c = 0,
                    l = function() {
                        e.removeEventListener(s, u),
                            a()
                    },
                    u = function(t) {
                        t.target === e && ++c >= i && l()
                    };
                setTimeout(function() {
                        c < i && l()
                    },
                    o + 1),
                    e.addEventListener(s, u)
            }
            function $a(e, t) {
                var a, n = window.getComputedStyle(e),
                    r = n[wi + "Delay"].split(", "),
                    o = n[wi + "Duration"].split(", "),
                    i = La(r, o),
                    s = n[ki + "Delay"].split(", "),
                    c = n[ki + "Duration"].split(", "),
                    l = La(s, c),
                    u = 0,
                    p = 0;
                return t === bi ? i > 0 && (a = bi, u = i, p = o.length) : t === _i ? l > 0 && (a = _i, u = l, p = c.length) : (u = Math.max(i, l), a = u > 0 ? i > l ? bi: _i: null, p = a ? a === bi ? o.length: c.length: 0),
                    {
                        type: a,
                        timeout: u,
                        propCount: p,
                        hasTransform: a === bi && Ti.test(n[wi + "Property"])
                    }
            }
            function La(e, t) {
                for (; e.length < t.length;) e = e.concat(e);
                return Math.max.apply(null, t.map(function(t, a) {
                    return Ra(t) + Ra(e[a])
                }))
            }
            function Ra(e) {
                return 1e3 * Number(e.slice(0, -1))
            }
            function Ba(e, a) {
                var n = e.elm;
                n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());
                var r = Ia(e.data.transition);
                if (r && !n._enterCb && 1 === n.nodeType) {
                    for (var o = r.css,
                             i = r.type,
                             s = r.enterClass,
                             c = r.enterToClass,
                             l = r.enterActiveClass,
                             p = r.appearClass,
                             d = r.appearToClass,
                             f = r.appearActiveClass,
                             h = r.beforeEnter,
                             m = r.enter,
                             v = r.afterEnter,
                             y = r.enterCancelled,
                             b = r.beforeAppear,
                             _ = r.appear,
                             w = r.afterAppear,
                             D = r.appearCancelled,
                             k = r.duration,
                             x = so,
                             S = so.$vnode; S && S.parent;) S = S.parent,
                        x = S.context;
                    var T = !x._isMounted || !e.isRootInsert;
                    if (!T || _ || "" === _) {
                        var C = T && p ? p: s,
                            M = T && f ? f: l,
                            A = T && d ? d: c,
                            P = T ? b || h: h,
                            I = T && "function" == typeof _ ? _: m,
                            N = T ? w || v: v,
                            E = T ? D || y: y,
                            O = t(u(k) ? k.enter: k),
                            j = !1 !== o && !$r,
                            $ = Fa(I),
                            L = n._enterCb = g(function() {
                                j && (Oa(n, A), Oa(n, M)),
                                    L.cancelled ? (j && Oa(n, C), E && E(n)) : N && N(n),
                                    n._enterCb = null
                            });
                        e.data.show || X(e.data.hook || (e.data.hook = {}), "insert",
                            function() {
                                var t = n.parentNode,
                                    a = t && t._pending && t._pending[e.key];
                                a && a.tag === e.tag && a.elm._leaveCb && a.elm._leaveCb(),
                                I && I(n, L)
                            }),
                        P && P(n),
                        j && (Ea(n, C), Ea(n, M), Na(function() {
                            Ea(n, A),
                                Oa(n, C),
                            L.cancelled || $ || (Va(O) ? setTimeout(L, O) : ja(n, i, L))
                        })),
                        e.data.show && (a && a(), I && I(n, L)),
                        j || $ || L()
                    }
                }
            }
            function Ha(e, a) {
                function n() {
                    D.cancelled || (e.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e), d && d(r), b && (Ea(r, c), Ea(r, p), Na(function() {
                        Ea(r, l),
                            Oa(r, c),
                        D.cancelled || _ || (Va(w) ? setTimeout(D, w) : ja(r, s, D))
                    })), f && f(r, D), b || _ || D())
                }
                var r = e.elm;
                r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());
                var o = Ia(e.data.transition);
                if (!o) return a();
                if (!r._leaveCb && 1 === r.nodeType) {
                    var i = o.css,
                        s = o.type,
                        c = o.leaveClass,
                        l = o.leaveToClass,
                        p = o.leaveActiveClass,
                        d = o.beforeLeave,
                        f = o.leave,
                        h = o.afterLeave,
                        m = o.leaveCancelled,
                        v = o.delayLeave,
                        y = o.duration,
                        b = !1 !== i && !$r,
                        _ = Fa(f),
                        w = t(u(y) ? y.leave: y),
                        D = r._leaveCb = g(function() {
                            r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null),
                            b && (Oa(r, l), Oa(r, p)),
                                D.cancelled ? (b && Oa(r, c), m && m(r)) : (a(), h && h(r)),
                                r._leaveCb = null
                        });
                    v ? v(n) : n()
                }
            }
            function Va(e) {
                return "number" == typeof e && !isNaN(e)
            }
            function Fa(e) {
                if (!e) return ! 1;
                var t = e.fns;
                return t ? Fa(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
            }
            function qa(e, t) {
                t.data.show || Ba(t)
            }
            function Wa(e, t, a) {
                var n = t.value,
                    r = e.multiple;
                if (!r || Array.isArray(n)) {
                    for (var o, i, s = 0,
                             c = e.options.length; s < c; s++) if (i = e.options[s], r) o = m(n, za(i)) > -1,
                    i.selected !== o && (i.selected = o);
                    else if (h(za(i), n)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
                    r || (e.selectedIndex = -1)
                }
            }
            function Ua(e, t) {
                for (var a = 0,
                         n = t.length; a < n; a++) if (h(za(t[a]), e)) return ! 1;
                return ! 0
            }
            function za(e) {
                return "_value" in e ? e._value: e.value
            }
            function Xa(e) {
                e.target.composing = !0
            }
            function Ga(e) {
                e.target.composing = !1,
                    Ya(e.target, "input")
            }
            function Ya(e, t) {
                var a = document.createEvent("HTMLEvents");
                a.initEvent(t, !0, !0),
                    e.dispatchEvent(a)
            }
            function Ja(e) {
                return ! e.componentInstance || e.data && e.data.transition ? e: Ja(e.componentInstance._vnode)
            }
            function Qa(e) {
                var t = e && e.componentOptions;
                return t && t.Ctor.options.abstract ? Qa(Q(t.children)) : e
            }
            function Ka(e) {
                var t = {},
                    a = e.$options;
                for (var n in a.propsData) t[n] = e[n];
                var r = a._parentListeners;
                for (var o in r) t[Dr(o)] = r[o];
                return t
            }
            function Za(e, t) {
                return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
            }
            function en(e) {
                for (; e = e.parent;) if (e.data.transition) return ! 0
            }
            function tn(e, t) {
                return t.key === e.key && t.tag === e.tag
            }
            function an(e) {
                e.elm._moveCb && e.elm._moveCb(),
                e.elm._enterCb && e.elm._enterCb()
            }
            function nn(e) {
                e.data.newPos = e.elm.getBoundingClientRect()
            }
            function rn(e) {
                var t = e.data.pos,
                    a = e.data.newPos,
                    n = t.left - a.left,
                    r = t.top - a.top;
                if (n || r) {
                    e.data.moved = !0;
                    var o = e.elm.style;
                    o.transform = o.WebkitTransform = "translate(" + n + "px," + r + "px)",
                        o.transitionDuration = "0s"
                }
            }
            function on(e) {
                return Bi = Bi || document.createElement("div"),
                    Bi.innerHTML = e,
                    Bi.textContent
            }
            function sn(e, t) {
                var a = t ? Ds: ws;
                return e.replace(a,
                    function(e) {
                        return _s[e]
                    })
            }
            function cn(e, t) {
                function a(t) {
                    u += t,
                        e = e.substring(t)
                }
                function n(e, a, n) {
                    var r, s;
                    if (null == a && (a = u), null == n && (n = u), e && (s = e.toLowerCase()), e) for (r = i.length - 1; r >= 0 && i[r].lowerCasedTag !== s; r--);
                    else r = 0;
                    if (r >= 0) {
                        for (var c = i.length - 1; c >= r; c--) t.end && t.end(i[c].tag, a, n);
                        i.length = r,
                            o = r && i[r - 1].tag
                    } else "br" === s ? t.start && t.start(e, [], !0, a, n) : "p" === s && (t.start && t.start(e, [], !1, a, n), t.end && t.end(e, a, n))
                }
                for (var r, o, i = [], s = t.expectHTML, c = t.isUnaryTag || Cr, l = t.canBeLeftOpenTag || Cr, u = 0; e;) {
                    if (r = e, o && ys(o)) {
                        var p = o.toLowerCase(),
                            d = bs[p] || (bs[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
                            f = 0,
                            h = e.replace(d,
                                function(e, a, n) {
                                    return f = n.length,
                                    ys(p) || "noscript" === p || (a = a.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                                    t.chars && t.chars(a),
                                        ""
                                });
                        u += e.length - h.length,
                            e = h,
                            n(p, u - f, u)
                    } else {
                        var m = e.indexOf("<");
                        if (0 === m) {
                            if (Qi.test(e)) {
                                var g = e.indexOf("--\x3e");
                                if (g >= 0) {
                                    a(g + 3);
                                    continue
                                }
                            }
                            if (Ki.test(e)) {
                                var v = e.indexOf("]>");
                                if (v >= 0) {
                                    a(v + 2);
                                    continue
                                }
                            }
                            var y = e.match(Ji);
                            if (y) {
                                a(y[0].length);
                                continue
                            }
                            var b = e.match(Yi);
                            if (b) {
                                var _ = u;
                                a(b[0].length),
                                    n(b[1], _, u);
                                continue
                            }
                            var w = function() {
                                var t = e.match(Xi);
                                if (t) {
                                    var n = {
                                        tagName: t[1],
                                        attrs: [],
                                        start: u
                                    };
                                    a(t[0].length);
                                    for (var r, o; ! (r = e.match(Gi)) && (o = e.match(Ui));) a(o[0].length),
                                        n.attrs.push(o);
                                    if (r) return n.unarySlash = r[1],
                                        a(r[0].length),
                                        n.end = u,
                                        n
                                }
                            } ();
                            if (w) { !
                                function(e) {
                                    var a = e.tagName,
                                        r = e.unarySlash;
                                    s && ("p" === o && qi(a) && n(o), l(a) && o === a && n(a));
                                    for (var u = c(a) || "html" === a && "head" === o || !!r, p = e.attrs.length, d = new Array(p), f = 0; f < p; f++) {
                                        var h = e.attrs[f];
                                        Zi && -1 === h[0].indexOf('""') && ("" === h[3] && delete h[3], "" === h[4] && delete h[4], "" === h[5] && delete h[5]);
                                        var m = h[3] || h[4] || h[5] || "";
                                        d[f] = {
                                            name: h[1],
                                            value: sn(m, t.shouldDecodeNewlines)
                                        }
                                    }
                                    u || (i.push({
                                        tag: a,
                                        lowerCasedTag: a.toLowerCase(),
                                        attrs: d
                                    }), o = a),
                                    t.start && t.start(a, d, u, e.start, e.end)
                                } (w);
                                continue
                            }
                        }
                        var D = void 0,
                            k = void 0,
                            x = void 0;
                        if (m >= 0) {
                            for (k = e.slice(m); ! (Yi.test(k) || Xi.test(k) || Qi.test(k) || Ki.test(k) || (x = k.indexOf("<", 1)) < 0);) m += x,
                                k = e.slice(m);
                            D = e.substring(0, m),
                                a(m)
                        }
                        m < 0 && (D = e, e = ""),
                        t.chars && D && t.chars(D)
                    }
                    if (e === r) {
                        t.chars && t.chars(e);
                        break
                    }
                }
                n()
            }
            function ln(e, t) {
                var a = t ? xs(t) : ks;
                if (a.test(e)) {
                    for (var n, r, o = [], i = a.lastIndex = 0; n = a.exec(e);) { (r = n.index) > i && o.push(JSON.stringify(e.slice(i, r)));
                        var s = Gt(n[1].trim());
                        o.push("_s(" + s + ")"),
                            i = r + n[0].length
                    }
                    return i < e.length && o.push(JSON.stringify(e.slice(i))),
                        o.join("+")
                }
            }
            function un(e, t) {
                function a(e) {
                    e.pre && (s = !1),
                    os(e.tag) && (c = !1)
                }
                es = t.warn || Jt,
                    ss = t.getTagNamespace || Cr,
                    is = t.mustUseProp || Cr,
                    os = t.isPreTag || Cr,
                    ns = Qt(t.modules, "preTransformNode"),
                    as = Qt(t.modules, "transformNode"),
                    rs = Qt(t.modules, "postTransformNode"),
                    ts = t.delimiters;
                var n, r, o = [],
                    i = !1 !== t.preserveWhitespace,
                    s = !1,
                    c = !1;
                return cn(e, {
                    warn: es,
                    expectHTML: t.expectHTML,
                    isUnaryTag: t.isUnaryTag,
                    canBeLeftOpenTag: t.canBeLeftOpenTag,
                    shouldDecodeNewlines: t.shouldDecodeNewlines,
                    start: function(e, i, l) {
                        var u = r && r.ns || ss(e);
                        jr && "svg" === u && (i = Mn(i));
                        var p = {
                            type: 1,
                            tag: e,
                            attrsList: i,
                            attrsMap: Tn(i),
                            parent: r,
                            children: []
                        };
                        u && (p.ns = u),
                        Cn(p) && !Vr() && (p.forbidden = !0);
                        for (var d = 0; d < ns.length; d++) ns[d](p, t);
                        if (s || (pn(p), p.pre && (s = !0)), os(p.tag) && (c = !0), s) dn(p);
                        else {
                            mn(p),
                                gn(p),
                                _n(p),
                                fn(p),
                                p.plain = !p.key && !i.length,
                                hn(p),
                                wn(p),
                                Dn(p);
                            for (var f = 0; f < as.length; f++) as[f](p, t);
                            kn(p)
                        }
                        if (n ? o.length || n.
                                if && (p.elseif || p.
                                else) && bn(n, {
                                exp: p.elseif,
                                block: p
                            }) : n = p, r && !p.forbidden) if (p.elseif || p.
                                else) vn(p, r);
                        else if (p.slotScope) {
                            r.plain = !1;
                            var h = p.slotTarget || '"default"'; (r.scopedSlots || (r.scopedSlots = {}))[h] = p
                        } else r.children.push(p),
                            p.parent = r;
                        l ? a(p) : (r = p, o.push(p));
                        for (var m = 0; m < rs.length; m++) rs[m](p, t)
                    },
                    end: function() {
                        var e = o[o.length - 1],
                            t = e.children[e.children.length - 1];
                        t && 3 === t.type && " " === t.text && !c && e.children.pop(),
                            o.length -= 1,
                            r = o[o.length - 1],
                            a(e)
                    },
                    chars: function(e) {
                        if (r && (!jr || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                            var t = r.children;
                            if (e = c || e.trim() ? Ns(e) : i && t.length ? " ": "") {
                                var a; ! s && " " !== e && (a = ln(e, ts)) ? t.push({
                                    type: 2,
                                    expression: a,
                                    text: e
                                }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({
                                    type: 3,
                                    text: e
                                })
                            }
                        }
                    }
                }),
                    n
            }
            function pn(e) {
                null != na(e, "v-pre") && (e.pre = !0)
            }
            function dn(e) {
                var t = e.attrsList.length;
                if (t) for (var a = e.attrs = new Array(t), n = 0; n < t; n++) a[n] = {
                    name: e.attrsList[n].name,
                    value: JSON.stringify(e.attrsList[n].value)
                };
                else e.pre || (e.plain = !0)
            }
            function fn(e) {
                var t = aa(e, "key");
                t && (e.key = t)
            }
            function hn(e) {
                var t = aa(e, "ref");
                t && (e.ref = t, e.refInFor = xn(e))
            }
            function mn(e) {
                var t;
                if (t = na(e, "v-for")) {
                    var a = t.match(Cs);
                    if (!a) return;
                    e.
                        for = a[2].trim();
                    var n = a[1].trim(),
                        r = n.match(Ms);
                    r ? (e.alias = r[1].trim(), e.iterator1 = r[2].trim(), r[3] && (e.iterator2 = r[3].trim())) : e.alias = n
                }
            }
            function gn(e) {
                var t = na(e, "v-if");
                if (t) e.
                    if = t,
                    bn(e, {
                        exp: t,
                        block: e
                    });
                else {
                    null != na(e, "v-else") && (e.
                        else = !0);
                    var a = na(e, "v-else-if");
                    a && (e.elseif = a)
                }
            }
            function vn(e, t) {
                var a = yn(t.children);
                a && a.
                    if && bn(a, {
                    exp: e.elseif,
                    block: e
                })
            }
            function yn(e) {
                for (var t = e.length; t--;) {
                    if (1 === e[t].type) return e[t];
                    e.pop()
                }
            }
            function bn(e, t) {
                e.ifConditions || (e.ifConditions = []),
                    e.ifConditions.push(t)
            }
            function _n(e) {
                null != na(e, "v-once") && (e.once = !0)
            }
            function wn(e) {
                if ("slot" === e.tag) e.slotName = aa(e, "name");
                else {
                    var t = aa(e, "slot");
                    t && (e.slotTarget = '""' === t ? '"default"': t),
                    "template" === e.tag && (e.slotScope = na(e, "scope"))
                }
            }
            function Dn(e) {
                var t; (t = aa(e, "is")) && (e.component = t),
                null != na(e, "inline-template") && (e.inlineTemplate = !0)
            }
            function kn(e) {
                var t, a, n, r, o, i, s, c = e.attrsList;
                for (t = 0, a = c.length; t < a; t++) if (n = r = c[t].name, o = c[t].value, Ts.test(n)) if (e.hasBindings = !0, i = Sn(n), i && (n = n.replace(Is, "")), Ps.test(n)) n = n.replace(Ps, ""),
                    o = Gt(o),
                    s = !1,
                i && (i.prop && (s = !0, "innerHtml" === (n = Dr(n)) && (n = "innerHTML")), i.camel && (n = Dr(n))),
                    s || is(e.tag, e.attrsMap.type, n) ? Kt(e, n, o) : Zt(e, n, o);
                else if (Ss.test(n)) n = n.replace(Ss, ""),
                    ta(e, n, o, i);
                else {
                    n = n.replace(Ts, "");
                    var l = n.match(As),
                        u = l && l[1];
                    u && (n = n.slice(0, -(u.length + 1))),
                        ea(e, n, r, o, u, i)
                } else Zt(e, n, JSON.stringify(o))
            }
            function xn(e) {
                for (var t = e; t;) {
                    if (void 0 !== t.
                            for) return ! 0;
                    t = t.parent
                }
                return ! 1
            }
            function Sn(e) {
                var t = e.match(Is);
                if (t) {
                    var a = {};
                    return t.forEach(function(e) {
                        a[e.slice(1)] = !0
                    }),
                        a
                }
            }
            function Tn(e) {
                for (var t = {},
                         a = 0,
                         n = e.length; a < n; a++) t[e[a].name] = e[a].value;
                return t
            }
            function Cn(e) {
                return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
            }
            function Mn(e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e[a];
                    Es.test(n.name) || (n.name = n.name.replace(Os, ""), t.push(n))
                }
                return t
            }
            function An(e, t) {
                e && (cs = js(t.staticKeys || ""), ls = t.isReservedTag || Cr, In(e), Nn(e, !1))
            }
            function Pn(e) {
                return a("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e: ""))
            }
            function In(e) {
                if (e.static = On(e), 1 === e.type) {
                    if (!ls(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                    for (var t = 0,
                             a = e.children.length; t < a; t++) {
                        var n = e.children[t];
                        In(n),
                        n.static || (e.static = !1)
                    }
                }
            }
            function Nn(e, t) {
                if (1 === e.type) {
                    if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                    if (e.staticRoot = !1, e.children) for (var a = 0,
                                                                n = e.children.length; a < n; a++) Nn(e.children[a], t || !!e.
                        for);
                    e.ifConditions && En(e.ifConditions, t)
                }
            }
            function En(e, t) {
                for (var a = 1,
                         n = e.length; a < n; a++) Nn(e[a].block, t)
            }
            function On(e) {
                return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.
                    if || e.
                    for || _r(e.tag) || !ls(e.tag) || jn(e) || !Object.keys(e).every(cs))))
            }
            function jn(e) {
                for (; e.parent;) {
                    if (e = e.parent, "template" !== e.tag) return ! 1;
                    if (e.
                            for) return ! 0
                }
                return ! 1
            }
            function $n(e, t) {
                var a = t ? "nativeOn:{": "on:{";
                for (var n in e) a += '"' + n + '":' + Ln(n, e[n]) + ",";
                return a.slice(0, -1) + "}"
            }
            function Ln(e, t) {
                if (!t) return "function(){}";
                if (Array.isArray(t)) return "[" + t.map(function(t) {
                    return Ln(e, t)
                }).join(",") + "]";
                var a = Ls.test(t.value),
                    n = $s.test(t.value);
                if (t.modifiers) {
                    var r = "",
                        o = "",
                        i = [];
                    for (var s in t.modifiers) Hs[s] ? (o += Hs[s], Rs[s] && i.push(s)) : i.push(s);
                    return i.length && (r += Rn(i)),
                    o && (r += o),
                    "function($event){" + r + (a ? t.value + "($event)": n ? "(" + t.value + ")($event)": t.value) + "}"
                }
                return a || n ? t.value: "function($event){" + t.value + "}"
            }
            function Rn(e) {
                return "if(!('button' in $event)&&" + e.map(Bn).join("&&") + ")return null;"
            }
            function Bn(e) {
                var t = parseInt(e, 10);
                if (t) return "$event.keyCode!==" + t;
                var a = Rs[e];
                return "_k($event.keyCode," + JSON.stringify(e) + (a ? "," + JSON.stringify(a) : "") + ")"
            }
            function Hn(e, t) {
                e.wrapData = function(a) {
                    return "_b(" + a + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true": "") + ")"
                }
            }
            function Vn(e, t) {
                var a = ms,
                    n = ms = [],
                    r = gs;
                gs = 0,
                    vs = t,
                    us = t.warn || Jt,
                    ps = Qt(t.modules, "transformCode"),
                    ds = Qt(t.modules, "genData"),
                    fs = t.directives || {},
                    hs = t.isReservedTag || Cr;
                var o = e ? Fn(e) : '_c("div")';
                return ms = a,
                    gs = r,
                    {
                        render: "with(this){return " + o + "}",
                        staticRenderFns: n
                    }
            }
            function Fn(e) {
                if (e.staticRoot && !e.staticProcessed) return qn(e);
                if (e.once && !e.onceProcessed) return Wn(e);
                if (e.
                        for && !e.forProcessed) return Xn(e);
                if (e.
                        if && !e.ifProcessed) return Un(e);
                if ("template" !== e.tag || e.slotTarget) {
                    if ("slot" === e.tag) return or(e);
                    var t;
                    if (e.component) t = ir(e.component, e);
                    else {
                        var a = e.plain ? void 0 : Gn(e),
                            n = e.inlineTemplate ? null: Zn(e, !0);
                        t = "_c('" + e.tag + "'" + (a ? "," + a: "") + (n ? "," + n: "") + ")"
                    }
                    for (var r = 0; r < ps.length; r++) t = ps[r](e, t);
                    return t
                }
                return Zn(e) || "void 0"
            }
            function qn(e) {
                return e.staticProcessed = !0,
                    ms.push("with(this){return " + Fn(e) + "}"),
                "_m(" + (ms.length - 1) + (e.staticInFor ? ",true": "") + ")"
            }
            function Wn(e) {
                if (e.onceProcessed = !0, e.
                        if && !e.ifProcessed) return Un(e);
                if (e.staticInFor) {
                    for (var t = "",
                             a = e.parent; a;) {
                        if (a.
                                for) {
                            t = a.key;
                            break
                        }
                        a = a.parent
                    }
                    return t ? "_o(" + Fn(e) + "," + gs+++(t ? "," + t: "") + ")": Fn(e)
                }
                return qn(e)
            }
            function Un(e) {
                return e.ifProcessed = !0,
                    zn(e.ifConditions.slice())
            }
            function zn(e) {
                function t(e) {
                    return e.once ? Wn(e) : Fn(e)
                }
                if (!e.length) return "_e()";
                var a = e.shift();
                return a.exp ? "(" + a.exp + ")?" + t(a.block) + ":" + zn(e) : "" + t(a.block)
            }
            function Xn(e) {
                var t = e.
                        for,
                    a = e.alias,
                    n = e.iterator1 ? "," + e.iterator1: "",
                    r = e.iterator2 ? "," + e.iterator2: "";
                return e.forProcessed = !0,
                "_l((" + t + "),function(" + a + n + r + "){return " + Fn(e) + "})"
            }
            function Gn(e) {
                var t = "{",
                    a = Yn(e);
                a && (t += a + ","),
                e.key && (t += "key:" + e.key + ","),
                e.ref && (t += "ref:" + e.ref + ","),
                e.refInFor && (t += "refInFor:true,"),
                e.pre && (t += "pre:true,"),
                e.component && (t += 'tag:"' + e.tag + '",');
                for (var n = 0; n < ds.length; n++) t += ds[n](e);
                if (e.attrs && (t += "attrs:{" + sr(e.attrs) + "},"), e.props && (t += "domProps:{" + sr(e.props) + "},"), e.events && (t += $n(e.events) + ","), e.nativeEvents && (t += $n(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += Qn(e.scopedSlots) + ","), e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                    var r = Jn(e);
                    r && (t += r + ",")
                }
                return t = t.replace(/,$/, "") + "}",
                e.wrapData && (t = e.wrapData(t)),
                    t
            }
            function Yn(e) {
                var t = e.directives;
                if (t) {
                    var a, n, r, o, i = "directives:[",
                        s = !1;
                    for (a = 0, n = t.length; a < n; a++) {
                        r = t[a],
                            o = !0;
                        var c = fs[r.name] || Vs[r.name];
                        c && (o = !!c(e, r, us)),
                        o && (s = !0, i += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ',arg:"' + r.arg + '"': "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},")
                    }
                    return s ? i.slice(0, -1) + "]": void 0
                }
            }
            function Jn(e) {
                var t = e.children[0];
                if (1 === t.type) {
                    var a = Vn(t, vs);
                    return "inlineTemplate:{render:function(){" + a.render + "},staticRenderFns:[" + a.staticRenderFns.map(function(e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }
            function Qn(e) {
                return "scopedSlots:_u([" + Object.keys(e).map(function(t) {
                    return Kn(t, e[t])
                }).join(",") + "])"
            }
            function Kn(e, t) {
                return "[" + e + ",function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? Zn(t) || "void 0": Fn(t)) + "}]"
            }
            function Zn(e, t) {
                var a = e.children;
                if (a.length) {
                    var n = a[0];
                    if (1 === a.length && n.
                            for && "template" !== n.tag && "slot" !== n.tag) return Fn(n);
                    var r = t ? er(a) : 0;
                    return "[" + a.map(nr).join(",") + "]" + (r ? "," + r: "")
                }
            }
            function er(e) {
                for (var t = 0,
                         a = 0; a < e.length; a++) {
                    var n = e[a];
                    if (1 === n.type) {
                        if (tr(n) || n.ifConditions && n.ifConditions.some(function(e) {
                                return tr(e.block)
                            })) {
                            t = 2;
                            break
                        } (ar(n) || n.ifConditions && n.ifConditions.some(function(e) {
                            return ar(e.block)
                        })) && (t = 1)
                    }
                }
                return t
            }
            function tr(e) {
                return void 0 !== e.
                    for || "template" === e.tag || "slot" === e.tag
            }
            function ar(e) {
                return ! hs(e.tag)
            }
            function nr(e) {
                return 1 === e.type ? Fn(e) : rr(e)
            }
            function rr(e) {
                return "_v(" + (2 === e.type ? e.expression: cr(JSON.stringify(e.text))) + ")"
            }
            function or(e) {
                var t = e.slotName || '"default"',
                    a = Zn(e),
                    n = "_t(" + t + (a ? "," + a: ""),
                    r = e.attrs && "{" + e.attrs.map(function(e) {
                        return Dr(e.name) + ":" + e.value
                    }).join(",") + "}",
                    o = e.attrsMap["v-bind"];
                return ! r && !o || a || (n += ",null"),
                r && (n += "," + r),
                o && (n += (r ? "": ",null") + "," + o),
                n + ")"
            }
            function ir(e, t) {
                var a = t.inlineTemplate ? null: Zn(t, !0);
                return "_c(" + e + "," + Gn(t) + (a ? "," + a: "") + ")"
            }
            function sr(e) {
                for (var t = "",
                         a = 0; a < e.length; a++) {
                    var n = e[a];
                    t += '"' + n.name + '":' + cr(n.value) + ","
                }
                return t.slice(0, -1)
            }
            function cr(e) {
                return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            function lr(e, t) {
                var a = un(e.trim(), t);
                An(a, t);
                var n = Vn(a, t);
                return {
                    ast: a,
                    render: n.render,
                    staticRenderFns: n.staticRenderFns
                }
            }
            function ur(e, t) {
                try {
                    return new Function(e)
                } catch(a) {
                    return t.push({
                        err: a,
                        code: e
                    }),
                        f
                }
            }
            function pr(e, t) {
                var a = (t.warn, na(e, "class"));
                a && (e.staticClass = JSON.stringify(a));
                var n = aa(e, "class", !1);
                n && (e.classBinding = n)
            }
            function dr(e) {
                var t = "";
                return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
                e.classBinding && (t += "class:" + e.classBinding + ","),
                    t
            }
            function fr(e, t) {
                var a = (t.warn, na(e, "style"));
                a && (e.staticStyle = JSON.stringify(ui(a)));
                var n = aa(e, "style", !1);
                n && (e.styleBinding = n)
            }
            function hr(e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","),
                e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
                    t
            }
            function mr(e, t) {
                t.value && Kt(e, "textContent", "_s(" + t.value + ")")
            }
            function gr(e, t) {
                t.value && Kt(e, "innerHTML", "_s(" + t.value + ")")
            }
            function vr(e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)),
                    t.innerHTML
            }
            var yr, br, _r = a("slot,component", !0),
                wr = Object.prototype.hasOwnProperty,
                Dr = i(function(e) {
                    return e.replace(/-(\w)/g,
                        function(e, t) {
                            return t ? t.toUpperCase() : ""
                        })
                }),
                kr = i(function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }),
                xr = i(function(e) {
                    return e.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase()
                }),
                Sr = Object.prototype.toString,
                Tr = "[object Object]",
                Cr = function() {
                    return ! 1
                },
                Mr = function(e) {
                    return e
                },
                Ar = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: Cr,
                    isUnknownElement: Cr,
                    getTagNamespace: f,
                    parsePlatformTagName: Mr,
                    mustUseProp: Cr,
                    _assetTypes: ["component", "directive", "filter"],
                    _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                    _maxUpdateCount: 100
                },
                Pr = Object.freeze({}),
                Ir = /[^\w.$]/,
                Nr = "__proto__" in {},
                Er = "undefined" != typeof window,
                Or = Er && window.navigator.userAgent.toLowerCase(),
                jr = Or && /msie|trident/.test(Or),
                $r = Or && Or.indexOf("msie 9.0") > 0,
                Lr = Or && Or.indexOf("edge/") > 0,
                Rr = Or && Or.indexOf("android") > 0,
                Br = Or && /iphone|ipad|ipod|ios/.test(Or),
                Hr = Or && /chrome\/\d+/.test(Or) && !Lr,
                Vr = function() {
                    return void 0 === yr && (yr = !Er && "undefined" != typeof global && "server" === global.process.env.VUE_ENV),
                        yr
                },
                Fr = Er && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
                qr = "undefined" != typeof Symbol && _(Symbol) && "undefined" != typeof Reflect && _(Reflect.ownKeys),
                Wr = function() {
                    function e() {
                        n = !1;
                        var e = a.slice(0);
                        a.length = 0;
                        for (var t = 0; t < e.length; t++) e[t]()
                    }
                    var t, a = [],
                        n = !1;
                    if ("undefined" != typeof Promise && _(Promise)) {
                        var r = Promise.resolve(),
                            o = function(e) {
                                console.error(e)
                            };
                        t = function() {
                            r.then(e).
                            catch(o),
                            Br && setTimeout(f)
                        }
                    } else if ("undefined" == typeof MutationObserver || !_(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
                        setTimeout(e, 0)
                    };
                    else {
                        var i = 1,
                            s = new MutationObserver(e),
                            c = document.createTextNode(String(i));
                        s.observe(c, {
                            characterData: !0
                        }),
                            t = function() {
                                i = (i + 1) % 2,
                                    c.data = String(i)
                            }
                    }
                    return function(e, r) {
                        var o;
                        if (a.push(function() {
                                e && e.call(r),
                                o && o(r)
                            }), n || (n = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                            o = e
                        })
                    }
                } ();
            br = "undefined" != typeof Set && _(Set) ? Set: function() {
                function e() {
                    this.set = Object.create(null)
                }
                return e.prototype.has = function(e) {
                    return ! 0 === this.set[e]
                },
                    e.prototype.add = function(e) {
                        this.set[e] = !0
                    },
                    e.prototype.clear = function() {
                        this.set = Object.create(null)
                    },
                    e
            } ();
            var Ur = f,
                zr = 0,
                Xr = function() {
                    this.id = zr++,
                        this.subs = []
                };
            Xr.prototype.addSub = function(e) {
                this.subs.push(e)
            },
                Xr.prototype.removeSub = function(e) {
                    n(this.subs, e)
                },
                Xr.prototype.depend = function() {
                    Xr.target && Xr.target.addDep(this)
                },
                Xr.prototype.notify = function() {
                    for (var e = this.subs.slice(), t = 0, a = e.length; t < a; t++) e[t].update()
                },
                Xr.target = null;
            var Gr = [],
                Yr = Array.prototype,
                Jr = Object.create(Yr); ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
                var t = Yr[e];
                y(Jr, e,
                    function() {
                        for (var a = arguments,
                                 n = arguments.length,
                                 r = new Array(n); n--;) r[n] = a[n];
                        var o, i = t.apply(this, r),
                            s = this.__ob__;
                        switch (e) {
                            case "push":
                            case "unshift":
                                o = r;
                                break;
                            case "splice":
                                o = r.slice(2)
                        }
                        return o && s.observeArray(o),
                            s.dep.notify(),
                            i
                    })
            });
            var Qr = Object.getOwnPropertyNames(Jr),
                Kr = {
                    shouldConvert: !0,
                    isSettingProps: !1
                },
                Zr = function(e) {
                    this.value = e,
                        this.dep = new Xr,
                        this.vmCount = 0,
                        y(e, "__ob__", this),
                        Array.isArray(e) ? ((Nr ? k: x)(e, Jr, Qr), this.observeArray(e)) : this.walk(e)
                };
            Zr.prototype.walk = function(e) {
                for (var t = Object.keys(e), a = 0; a < t.length; a++) T(e, t[a], e[t[a]])
            },
                Zr.prototype.observeArray = function(e) {
                    for (var t = 0,
                             a = e.length; t < a; t++) S(e[t])
                };
            var eo = Ar.optionMergeStrategies;
            eo.data = function(e, t, a) {
                return a ? e || t ?
                    function() {
                        var n = "function" == typeof t ? t.call(a) : t,
                            r = "function" == typeof e ? e.call(a) : void 0;
                        return n ? P(n, r) : r
                    }: void 0 : t ? "function" != typeof t ? e: e ?
                    function() {
                        return P(t.call(this), e.call(this))
                    }: t: e
            },
                Ar._lifecycleHooks.forEach(function(e) {
                    eo[e] = I
                }),
                Ar._assetTypes.forEach(function(e) {
                    eo[e + "s"] = N
                }),
                eo.watch = function(e, t) {
                    if (!t) return Object.create(e || null);
                    if (!e) return t;
                    var a = {};
                    l(a, e);
                    for (var n in t) {
                        var r = a[n],
                            o = t[n];
                        r && !Array.isArray(r) && (r = [r]),
                            a[n] = r ? r.concat(o) : [o]
                    }
                    return a
                },
                eo.props = eo.methods = eo.computed = function(e, t) {
                    if (!t) return Object.create(e || null);
                    if (!e) return t;
                    var a = Object.create(null);
                    return l(a, e),
                        l(a, t),
                        a
                };
            var to = function(e, t) {
                    return void 0 === t ? e: t
                },
                ao = function(e, t, a, n, r, o, i) {
                    this.tag = e,
                        this.data = t,
                        this.children = a,
                        this.text = n,
                        this.elm = r,
                        this.ns = void 0,
                        this.context = o,
                        this.functionalContext = void 0,
                        this.key = t && t.key,
                        this.componentOptions = i,
                        this.componentInstance = void 0,
                        this.parent = void 0,
                        this.raw = !1,
                        this.isStatic = !1,
                        this.isRootInsert = !0,
                        this.isComment = !1,
                        this.isCloned = !1,
                        this.isOnce = !1
                },
                no = {
                    child: {}
                };
            no.child.get = function() {
                return this.componentInstance
            },
                Object.defineProperties(ao.prototype, no);
            var ro, oo = function() {
                    var e = new ao;
                    return e.text = "",
                        e.isComment = !0,
                        e
                },
                io = i(function(e) {
                    var t = "~" === e.charAt(0);
                    e = t ? e.slice(1) : e;
                    var a = "!" === e.charAt(0);
                    return e = a ? e.slice(1) : e,
                        {
                            name: e,
                            once: t,
                            capture: a
                        }
                }),
                so = null,
                co = [],
                lo = {},
                uo = !1,
                po = !1,
                fo = 0,
                ho = 0,
                mo = function(e, t, a, n) {
                    this.vm = e,
                        e._watchers.push(this),
                        n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync) : this.deep = this.user = this.lazy = this.sync = !1,
                        this.cb = a,
                        this.id = ++ho,
                        this.active = !0,
                        this.dirty = this.lazy,
                        this.deps = [],
                        this.newDeps = [],
                        this.depIds = new br,
                        this.newDepIds = new br,
                        this.expression = "",
                        "function" == typeof t ? this.getter = t: (this.getter = b(t), this.getter || (this.getter = function() {})),
                        this.value = this.lazy ? void 0 : this.get()
                };
            mo.prototype.get = function() {
                w(this);
                var e, t = this.vm;
                if (this.user) try {
                    e = this.getter.call(t, t)
                } catch(e) {
                    V(e, t, 'getter for watcher "' + this.expression + '"')
                } else e = this.getter.call(t, t);
                return this.deep && me(e),
                    D(),
                    this.cleanupDeps(),
                    e
            },
                mo.prototype.addDep = function(e) {
                    var t = e.id;
                    this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
                },
                mo.prototype.cleanupDeps = function() {
                    for (var e = this,
                             t = this.deps.length; t--;) {
                        var a = e.deps[t];
                        e.newDepIds.has(a.id) || a.removeSub(e)
                    }
                    var n = this.depIds;
                    this.depIds = this.newDepIds,
                        this.newDepIds = n,
                        this.newDepIds.clear(),
                        n = this.deps,
                        this.deps = this.newDeps,
                        this.newDeps = n,
                        this.newDeps.length = 0
                },
                mo.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : he(this)
                },
                mo.prototype.run = function() {
                    if (this.active) {
                        var e = this.get();
                        if (e !== this.value || u(e) || this.deep) {
                            var t = this.value;
                            if (this.value = e, this.user) try {
                                this.cb.call(this.vm, e, t)
                            } catch(e) {
                                V(e, this.vm, 'callback for watcher "' + this.expression + '"')
                            } else this.cb.call(this.vm, e, t)
                        }
                    }
                },
                mo.prototype.evaluate = function() {
                    this.value = this.get(),
                        this.dirty = !1
                },
                mo.prototype.depend = function() {
                    for (var e = this,
                             t = this.deps.length; t--;) e.deps[t].depend()
                },
                mo.prototype.teardown = function() {
                    var e = this;
                    if (this.active) {
                        this.vm._isBeingDestroyed || n(this.vm._watchers, this);
                        for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
                        this.active = !1
                    }
                };
            var go = new br,
                vo = {
                    enumerable: !0,
                    configurable: !0,
                    get: f,
                    set: f
                },
                yo = {
                    lazy: !0
                },
                bo = {
                    init: function(e, t, a, n) {
                        if (!e.componentInstance || e.componentInstance._isDestroyed)(e.componentInstance = Pe(e, so, a, n)).$mount(t ? e.elm: void 0, t);
                        else if (e.data.keepAlive) {
                            var r = e;
                            bo.prepatch(r, r)
                        }
                    },
                    prepatch: function(e, t) {
                        var a = t.componentOptions;
                        se(t.componentInstance = e.componentInstance, a.propsData, a.listeners, t, a.children)
                    },
                    insert: function(e) {
                        e.componentInstance._isMounted || (e.componentInstance._isMounted = !0, pe(e.componentInstance, "mounted")),
                        e.data.keepAlive && le(e.componentInstance, !0)
                    },
                    destroy: function(e) {
                        e.componentInstance._isDestroyed || (e.data.keepAlive ? ue(e.componentInstance, !0) : e.componentInstance.$destroy())
                    }
                },
                _o = Object.keys(bo),
                wo = 1,
                Do = 2,
                ko = 0; !
                function(e) {
                    e.prototype._init = function(e) {
                        var t = this;
                        t._uid = ko++,
                            t._isVue = !0,
                            e && e._isComponent ? Ke(t, e) : t.$options = j(Ze(t.constructor), e || {},
                                t),
                            t._renderProxy = t,
                            t._self = t,
                            oe(t),
                            K(t),
                            Ye(t),
                            pe(t, "beforeCreate"),
                            Qe(t),
                            ye(t),
                            Je(t),
                            pe(t, "created"),
                        t.$options.el && t.$mount(t.$options.el)
                    }
                } (at),
                function(e) {
                    var t = {};
                    t.get = function() {
                        return this._data
                    };
                    var a = {};
                    a.get = function() {
                        return this._props
                    },
                        Object.defineProperty(e.prototype, "$data", t),
                        Object.defineProperty(e.prototype, "$props", a),
                        e.prototype.$set = C,
                        e.prototype.$delete = M,
                        e.prototype.$watch = function(e, t, a) {
                            var n = this;
                            a = a || {},
                                a.user = !0;
                            var r = new mo(n, e, t, a);
                            return a.immediate && t.call(n, r.value),
                                function() {
                                    r.teardown()
                                }
                        }
                } (at),
                function(e) {
                    var t = /^hook:/;
                    e.prototype.$on = function(e, a) {
                        var n = this,
                            r = this;
                        if (Array.isArray(e)) for (var o = 0,
                                                       i = e.length; o < i; o++) n.$on(e[o], a);
                        else(r._events[e] || (r._events[e] = [])).push(a),
                        t.test(e) && (r._hasHookEvent = !0);
                        return r
                    },
                        e.prototype.$once = function(e, t) {
                            function a() {
                                n.$off(e, a),
                                    t.apply(n, arguments)
                            }
                            var n = this;
                            return a.fn = t,
                                n.$on(e, a),
                                n
                        },
                        e.prototype.$off = function(e, t) {
                            var a = this,
                                n = this;
                            if (!arguments.length) return n._events = Object.create(null),
                                n;
                            if (Array.isArray(e)) {
                                for (var r = 0,
                                         o = e.length; r < o; r++) a.$off(e[r], t);
                                return n
                            }
                            var i = n._events[e];
                            if (!i) return n;
                            if (1 === arguments.length) return n._events[e] = null,
                                n;
                            for (var s, c = i.length; c--;) if ((s = i[c]) === t || s.fn === t) {
                                i.splice(c, 1);
                                break
                            }
                            return n
                        },
                        e.prototype.$emit = function(e) {
                            var t = this,
                                a = t._events[e];
                            if (a) {
                                a = a.length > 1 ? c(a) : a;
                                for (var n = c(arguments, 1), r = 0, o = a.length; r < o; r++) a[r].apply(t, n)
                            }
                            return t
                        }
                } (at),
                function(e) {
                    e.prototype._update = function(e, t) {
                        var a = this;
                        a._isMounted && pe(a, "beforeUpdate");
                        var n = a.$el,
                            r = a._vnode,
                            o = so;
                        so = a,
                            a._vnode = e,
                            a.$el = r ? a.__patch__(r, e) : a.__patch__(a.$el, e, t, !1, a.$options._parentElm, a.$options._refElm),
                            so = o,
                        n && (n.__vue__ = null),
                        a.$el && (a.$el.__vue__ = a),
                        a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el)
                    },
                        e.prototype.$forceUpdate = function() {
                            var e = this;
                            e._watcher && e._watcher.update()
                        },
                        e.prototype.$destroy = function() {
                            var e = this;
                            if (!e._isBeingDestroyed) {
                                pe(e, "beforeDestroy"),
                                    e._isBeingDestroyed = !0;
                                var t = e.$parent; ! t || t._isBeingDestroyed || e.$options.abstract || n(t.$children, e),
                                e._watcher && e._watcher.teardown();
                                for (var a = e._watchers.length; a--;) e._watchers[a].teardown();
                                e._data.__ob__ && e._data.__ob__.vmCount--,
                                    e._isDestroyed = !0,
                                    e.__patch__(e._vnode, null),
                                    pe(e, "destroyed"),
                                    e.$off(),
                                e.$el && (e.$el.__vue__ = null),
                                    e.$options._parentElm = e.$options._refElm = null
                            }
                        }
                } (at),
                function(a) {
                    a.prototype.$nextTick = function(e) {
                        return Wr(e, this)
                    },
                        a.prototype._render = function() {
                            var e = this,
                                t = e.$options,
                                a = t.render,
                                n = t.staticRenderFns,
                                r = t._parentVnode;
                            if (e._isMounted) for (var o in e.$slots) e.$slots[o] = W(e.$slots[o]);
                            e.$scopedSlots = r && r.data.scopedSlots || Pr,
                            n && !e._staticTrees && (e._staticTrees = []),
                                e.$vnode = r;
                            var i;
                            try {
                                i = a.call(e._renderProxy, e.$createElement)
                            } catch(t) {
                                V(t, e, "render function"),
                                    i = e._vnode
                            }
                            return i instanceof ao || (i = oo()),
                                i.parent = r,
                                i
                        },
                        a.prototype._o = ze,
                        a.prototype._n = t,
                        a.prototype._s = e,
                        a.prototype._l = He,
                        a.prototype._t = Ve,
                        a.prototype._q = h,
                        a.prototype._i = m,
                        a.prototype._m = Ue,
                        a.prototype._f = Fe,
                        a.prototype._k = qe,
                        a.prototype._b = We,
                        a.prototype._v = F,
                        a.prototype._e = oo,
                        a.prototype._u = re
                } (at);
            var xo = [String, RegExp],
                So = {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: xo,
                        exclude: xo
                    },
                    created: function() {
                        this.cache = Object.create(null)
                    },
                    destroyed: function() {
                        var e = this;
                        for (var t in e.cache) dt(e.cache[t])
                    },
                    watch: {
                        include: function(e) {
                            pt(this.cache,
                                function(t) {
                                    return ut(e, t)
                                })
                        },
                        exclude: function(e) {
                            pt(this.cache,
                                function(t) {
                                    return ! ut(e, t)
                                })
                        }
                    },
                    render: function() {
                        var e = Q(this.$slots.
                                default),
                            t = e && e.componentOptions;
                        if (t) {
                            var a = lt(t);
                            if (a && (this.include && !ut(this.include, a) || this.exclude && ut(this.exclude, a))) return e;
                            var n = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag: "") : e.key;
                            this.cache[n] ? e.componentInstance = this.cache[n].componentInstance: this.cache[n] = e,
                                e.data.keepAlive = !0
                        }
                        return e
                    }
                },
                To = {
                    KeepAlive: So
                }; !
                function(e) {
                    var t = {};
                    t.get = function() {
                        return Ar
                    },
                        Object.defineProperty(e, "config", t),
                        e.util = {
                            warn: Ur,
                            extend: l,
                            mergeOptions: j,
                            defineReactive: T
                        },
                        e.set = C,
                        e.delete = M,
                        e.nextTick = Wr,
                        e.options = Object.create(null),
                        Ar._assetTypes.forEach(function(t) {
                            e.options[t + "s"] = Object.create(null)
                        }),
                        e.options._base = e,
                        l(e.options.components, To),
                        nt(e),
                        rt(e),
                        ot(e),
                        ct(e)
                } (at),
                Object.defineProperty(at.prototype, "$isServer", {
                    get: Vr
                }),
                at.version = "2.2.6";
            var Co, Mo, Ao, Po, Io, No, Eo, Oo, jo, $o = a("input,textarea,option,select"),
                Lo = function(e, t, a) {
                    return "value" === a && $o(e) && "button" !== t || "selected" === a && "option" === e || "checked" === a && "input" === e || "muted" === a && "video" === e
                },
                Ro = a("contenteditable,draggable,spellcheck"),
                Bo = a("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Ho = "http://www.w3.org/1999/xlink",
                Vo = function(e) {
                    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
                },
                Fo = function(e) {
                    return Vo(e) ? e.slice(6, e.length) : ""
                },
                qo = function(e) {
                    return null == e || !1 === e
                },
                Wo = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                Uo = a("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
                zo = a("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Xo = function(e) {
                    return "pre" === e
                },
                Go = function(e) {
                    return Uo(e) || zo(e)
                },
                Yo = Object.create(null),
                Jo = Object.freeze({
                    createElement: wt,
                    createElementNS: Dt,
                    createTextNode: kt,
                    createComment: xt,
                    insertBefore: St,
                    removeChild: Tt,
                    appendChild: Ct,
                    parentNode: Mt,
                    nextSibling: At,
                    tagName: Pt,
                    setTextContent: It,
                    setAttribute: Nt
                }),
                Qo = {
                    create: function(e, t) {
                        Et(t)
                    },
                    update: function(e, t) {
                        e.data.ref !== t.data.ref && (Et(e, !0), Et(t))
                    },
                    destroy: function(e) {
                        Et(e, !0)
                    }
                },
                Ko = new ao("", {},
                    []),
                Zo = ["create", "activate", "update", "remove", "destroy"],
                ei = {
                    create: Ht,
                    update: Ht,
                    destroy: function(e) {
                        Ht(e, Ko)
                    }
                },
                ti = Object.create(null),
                ai = [Qo, ei],
                ni = {
                    create: Ut,
                    update: Ut
                },
                ri = {
                    create: Xt,
                    update: Xt
                },
                oi = /[\w).+\-_$\]]/,
                ii = "__r",
                si = "__c",
                ci = {
                    create: _a,
                    update: _a
                },
                li = {
                    create: wa,
                    update: wa
                },
                ui = i(function(e) {
                    var t = {};
                    return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                        if (e) {
                            var a = e.split(/:(.+)/);
                            a.length > 1 && (t[a[0].trim()] = a[1].trim())
                        }
                    }),
                        t
                }),
                pi = /^--/,
                di = /\s*!important$/,
                fi = function(e, t, a) {
                    pi.test(t) ? e.style.setProperty(t, a) : di.test(a) ? e.style.setProperty(t, a.replace(di, ""), "important") : e.style[mi(t)] = a
                },
                hi = ["Webkit", "Moz", "ms"],
                mi = i(function(e) {
                    if (jo = jo || document.createElement("div"), "filter" !== (e = Dr(e)) && e in jo.style) return e;
                    for (var t = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < hi.length; a++) {
                        var n = hi[a] + t;
                        if (n in jo.style) return n
                    }
                }),
                gi = {
                    create: Ma,
                    update: Ma
                },
                vi = i(function(e) {
                    return {
                        enterClass: e + "-enter",
                        enterToClass: e + "-enter-to",
                        enterActiveClass: e + "-enter-active",
                        leaveClass: e + "-leave",
                        leaveToClass: e + "-leave-to",
                        leaveActiveClass: e + "-leave-active"
                    }
                }),
                yi = Er && !$r,
                bi = "transition",
                _i = "animation",
                wi = "transition",
                Di = "transitionend",
                ki = "animation",
                xi = "animationend";
            yi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (wi = "WebkitTransition", Di = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ki = "WebkitAnimation", xi = "webkitAnimationEnd"));
            var Si = Er && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
                Ti = /\b(transform|all)(,|$)/,
                Ci = Er ? {
                    create: qa,
                    activate: qa,
                    remove: function(e, t) {
                        e.data.show ? t() : Ha(e, t)
                    }
                }: {},
                Mi = [ni, ri, ci, li, gi, Ci],
                Ai = Mi.concat(ai),
                Pi = function(e) {
                    function t(e) {
                        return new ao(C.tagName(e).toLowerCase(), {},
                            [], void 0, e)
                    }
                    function n(e, t) {
                        function a() {
                            0 == --a.listeners && r(e)
                        }
                        return a.listeners = t,
                            a
                    }
                    function r(e) {
                        var t = C.parentNode(e);
                        jt(t) && C.removeChild(t, e)
                    }
                    function i(e, t, a, n, r) {
                        if (e.isRootInsert = !r, !s(e, t, a, n)) {
                            var o = e.data,
                                i = e.children,
                                c = e.tag;
                            jt(c) ? (e.elm = e.ns ? C.createElementNS(e.ns, c) : C.createElement(c, e), h(e), p(e, i, t), jt(o) && f(e, t), u(a, e.elm, n)) : $t(e.isComment) ? (e.elm = C.createComment(e.text), u(a, e.elm, n)) : (e.elm = C.createTextNode(e.text), u(a, e.elm, n))
                        }
                    }
                    function s(e, t, a, n) {
                        var r = e.data;
                        if (jt(r)) {
                            var o = jt(e.componentInstance) && r.keepAlive;
                            if (jt(r = r.hook) && jt(r = r.init) && r(e, !1, a, n), jt(e.componentInstance)) return c(e, t),
                            $t(o) && l(e, t, a, n),
                                !0
                        }
                    }
                    function c(e, t) {
                        jt(e.data.pendingInsert) && t.push.apply(t, e.data.pendingInsert),
                            e.elm = e.componentInstance.$el,
                            d(e) ? (f(e, t), h(e)) : (Et(e), t.push(e))
                    }
                    function l(e, t, a, n) {
                        for (var r, o = e; o.componentInstance;) if (o = o.componentInstance._vnode, jt(r = o.data) && jt(r = r.transition)) {
                            for (r = 0; r < S.activate.length; ++r) S.activate[r](Ko, o);
                            t.push(o);
                            break
                        }
                        u(a, e.elm, n)
                    }
                    function u(e, t, a) {
                        jt(e) && (jt(a) ? C.insertBefore(e, t, a) : C.appendChild(e, t))
                    }
                    function p(e, t, a) {
                        if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) i(t[n], a, e.elm, null, !0);
                        else o(e.text) && C.appendChild(e.elm, C.createTextNode(e.text))
                    }
                    function d(e) {
                        for (; e.componentInstance;) e = e.componentInstance._vnode;
                        return jt(e.tag)
                    }
                    function f(e, t) {
                        for (var a = 0; a < S.create.length; ++a) S.create[a](Ko, e);
                        k = e.data.hook,
                        jt(k) && (jt(k.create) && k.create(Ko, e), jt(k.insert) && t.push(e))
                    }
                    function h(e) {
                        for (var t, a = e; a;) jt(t = a.context) && jt(t = t.$options._scopeId) && C.setAttribute(e.elm, t, ""),
                            a = a.parent;
                        jt(t = so) && t !== e.context && jt(t = t.$options._scopeId) && C.setAttribute(e.elm, t, "")
                    }
                    function m(e, t, a, n, r, o) {
                        for (; n <= r; ++n) i(a[n], o, e, t)
                    }
                    function g(e) {
                        var t, a, n = e.data;
                        if (jt(n)) for (jt(t = n.hook) && jt(t = t.destroy) && t(e), t = 0; t < S.destroy.length; ++t) S.destroy[t](e);
                        if (jt(t = e.children)) for (a = 0; a < e.children.length; ++a) g(e.children[a])
                    }
                    function v(e, t, a, n) {
                        for (; a <= n; ++a) {
                            var o = t[a];
                            jt(o) && (jt(o.tag) ? (y(o), g(o)) : r(o.elm))
                        }
                    }
                    function y(e, t) {
                        if (jt(t) || jt(e.data)) {
                            var a = S.remove.length + 1;
                            for (jt(t) ? t.listeners += a: t = n(e.elm, a), jt(k = e.componentInstance) && jt(k = k._vnode) && jt(k.data) && y(k, t), k = 0; k < S.remove.length; ++k) S.remove[k](e, t);
                            jt(k = e.data.hook) && jt(k = k.remove) ? k(e, t) : t()
                        } else r(e.elm)
                    }
                    function b(e, t, a, n, r) {
                        for (var o, s, c, l, u = 0,
                                 p = 0,
                                 d = t.length - 1,
                                 f = t[0], h = t[d], g = a.length - 1, y = a[0], b = a[g], w = !r; u <= d && p <= g;) Ot(f) ? f = t[++u] : Ot(h) ? h = t[--d] : Lt(f, y) ? (_(f, y, n), f = t[++u], y = a[++p]) : Lt(h, b) ? (_(h, b, n), h = t[--d], b = a[--g]) : Lt(f, b) ? (_(f, b, n), w && C.insertBefore(e, f.elm, C.nextSibling(h.elm)), f = t[++u], b = a[--g]) : Lt(h, y) ? (_(h, y, n), w && C.insertBefore(e, h.elm, f.elm), h = t[--d], y = a[++p]) : (Ot(o) && (o = Bt(t, u, d)), s = jt(y.key) ? o[y.key] : null, Ot(s) ? (i(y, n, e, f.elm), y = a[++p]) : (c = t[s], Lt(c, y) ? (_(c, y, n), t[s] = void 0, w && C.insertBefore(e, y.elm, f.elm), y = a[++p]) : (i(y, n, e, f.elm), y = a[++p])));
                        u > d ? (l = Ot(a[g + 1]) ? null: a[g + 1].elm, m(e, l, a, p, g, n)) : p > g && v(e, t, u, d)
                    }
                    function _(e, t, a, n) {
                        if (e !== t) {
                            if ($t(t.isStatic) && $t(e.isStatic) && t.key === e.key && ($t(t.isCloned) || $t(t.isOnce))) return t.elm = e.elm,
                                void(t.componentInstance = e.componentInstance);
                            var r, o = t.data;
                            jt(o) && jt(r = o.hook) && jt(r = r.prepatch) && r(e, t);
                            var i = t.elm = e.elm,
                                s = e.children,
                                c = t.children;
                            if (jt(o) && d(t)) {
                                for (r = 0; r < S.update.length; ++r) S.update[r](e, t);
                                jt(r = o.hook) && jt(r = r.update) && r(e, t)
                            }
                            Ot(t.text) ? jt(s) && jt(c) ? s !== c && b(i, s, c, a, n) : jt(c) ? (jt(e.text) && C.setTextContent(i, ""), m(i, null, c, 0, c.length - 1, a)) : jt(s) ? v(i, s, 0, s.length - 1) : jt(e.text) && C.setTextContent(i, "") : e.text !== t.text && C.setTextContent(i, t.text),
                            jt(o) && jt(r = o.hook) && jt(r = r.postpatch) && r(e, t)
                        }
                    }
                    function w(e, t, a) {
                        if ($t(a) && jt(e.parent)) e.parent.data.pendingInsert = t;
                        else for (var n = 0; n < t.length; ++n) t[n].data.hook.insert(t[n])
                    }
                    function D(e, t, a) {
                        t.elm = e;
                        var n = t.tag,
                            r = t.data,
                            o = t.children;
                        if (jt(r) && (jt(k = r.hook) && jt(k = k.init) && k(t, !0), jt(k = t.componentInstance))) return c(t, a),
                            !0;
                        if (jt(n)) {
                            if (jt(o)) if (e.hasChildNodes()) {
                                for (var i = !0,
                                         s = e.firstChild,
                                         l = 0; l < o.length; l++) {
                                    if (!s || !D(s, o[l], a)) {
                                        i = !1;
                                        break
                                    }
                                    s = s.nextSibling
                                }
                                if (!i || s) return ! 1
                            } else p(t, o, a);
                            if (jt(r)) for (var u in r) if (!M(u)) {
                                f(t, a);
                                break
                            }
                        } else e.data !== t.text && (e.data = t.text);
                        return ! 0
                    }
                    var k, x, S = {},
                        T = e.modules,
                        C = e.nodeOps;
                    for (k = 0; k < Zo.length; ++k) for (S[Zo[k]] = [], x = 0; x < T.length; ++x) jt(T[x][Zo[k]]) && S[Zo[k]].push(T[x][Zo[k]]);
                    var M = a("attrs,style,class,staticClass,staticStyle,key");
                    return function(e, a, n, r, o, s) {
                        if (Ot(a)) return void(jt(e) && g(e));
                        var c = !1,
                            l = [];
                        if (Ot(e)) c = !0,
                            i(a, l, o, s);
                        else {
                            var u = jt(e.nodeType);
                            if (!u && Lt(e, a)) _(e, a, l, r);
                            else {
                                if (u) {
                                    if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), n = !0), $t(n) && D(e, a, l)) return w(a, l, !0),
                                        e;
                                    e = t(e)
                                }
                                var p = e.elm,
                                    f = C.parentNode(p);
                                if (i(a, l, p._leaveCb ? null: f, C.nextSibling(p)), jt(a.parent)) {
                                    for (var h = a.parent; h;) h.elm = a.elm,
                                        h = h.parent;
                                    if (d(a)) for (var m = 0; m < S.create.length; ++m) S.create[m](Ko, a.parent)
                                }
                                jt(f) ? v(f, [e], 0, 0) : jt(e.tag) && g(e)
                            }
                        }
                        return w(a, l, c),
                            a.elm
                    }
                } ({
                    nodeOps: Jo,
                    modules: Ai
                });
            $r && document.addEventListener("selectionchange",
                function() {
                    var e = document.activeElement;
                    e && e.vmodel && Ya(e, "input")
                });
            var Ii = {
                    inserted: function(e, t, a) {
                        if ("select" === a.tag) {
                            var n = function() {
                                Wa(e, t, a.context)
                            };
                            n(),
                            (jr || Lr) && setTimeout(n, 0)
                        } else "textarea" !== a.tag && "text" !== e.type && "password" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (Rr || (e.addEventListener("compositionstart", Xa), e.addEventListener("compositionend", Ga)), $r && (e.vmodel = !0)))
                    },
                    componentUpdated: function(e, t, a) {
                        "select" === a.tag && (Wa(e, t, a.context), (e.multiple ? t.value.some(function(t) {
                            return Ua(t, e.options)
                        }) : t.value !== t.oldValue && Ua(t.value, e.options)) && Ya(e, "change"))
                    }
                },
                Ni = {
                    bind: function(e, t, a) {
                        var n = t.value;
                        a = Ja(a);
                        var r = a.data && a.data.transition,
                            o = e.__vOriginalDisplay = "none" === e.style.display ? "": e.style.display;
                        n && r && !$r ? (a.data.show = !0, Ba(a,
                            function() {
                                e.style.display = o
                            })) : e.style.display = n ? o: "none"
                    },
                    update: function(e, t, a) {
                        var n = t.value;
                        n !== t.oldValue && (a = Ja(a), a.data && a.data.transition && !$r ? (a.data.show = !0, n ? Ba(a,
                            function() {
                                e.style.display = e.__vOriginalDisplay
                            }) : Ha(a,
                            function() {
                                e.style.display = "none"
                            })) : e.style.display = n ? e.__vOriginalDisplay: "none")
                    },
                    unbind: function(e, t, a, n, r) {
                        r || (e.style.display = e.__vOriginalDisplay)
                    }
                },
                Ei = {
                    model: Ii,
                    show: Ni
                },
                Oi = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                },
                ji = {
                    name: "transition",
                    props: Oi,
                    abstract: !0,
                    render: function(e) {
                        var t = this,
                            a = this.$slots.
                                default;
                        if (a && (a = a.filter(function(e) {
                                return e.tag
                            }), a.length)) {
                            var n = this.mode,
                                r = a[0];
                            if (en(this.$vnode)) return r;
                            var i = Qa(r);
                            if (!i) return r;
                            if (this._leaving) return Za(e, r);
                            var s = "__transition-" + this._uid + "-";
                            i.key = null == i.key ? s + i.tag: o(i.key) ? 0 === String(i.key).indexOf(s) ? i.key: s + i.key: i.key;
                            var c = (i.data || (i.data = {})).transition = Ka(this),
                                u = this._vnode,
                                p = Qa(u);
                            if (i.data.directives && i.data.directives.some(function(e) {
                                    return "show" === e.name
                                }) && (i.data.show = !0), p && p.data && !tn(i, p)) {
                                var d = p && (p.data.transition = l({},
                                    c));
                                if ("out-in" === n) return this._leaving = !0,
                                    X(d, "afterLeave",
                                        function() {
                                            t._leaving = !1,
                                                t.$forceUpdate()
                                        }),
                                    Za(e, r);
                                if ("in-out" === n) {
                                    var f, h = function() {
                                        f()
                                    };
                                    X(c, "afterEnter", h),
                                        X(c, "enterCancelled", h),
                                        X(d, "delayLeave",
                                            function(e) {
                                                f = e
                                            })
                                }
                            }
                            return r
                        }
                    }
                },
                $i = l({
                        tag: String,
                        moveClass: String
                    },
                    Oi);
            delete $i.mode;
            var Li = {
                    props: $i,
                    render: function(e) {
                        for (var t = this.tag || this.$vnode.data.tag || "span",
                                 a = Object.create(null), n = this.prevChildren = this.children, r = this.$slots.
                                default || [], o = this.children = [], i = Ka(this), s = 0; s < r.length; s++) {
                            var c = r[s];
                            c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), a[c.key] = c, (c.data || (c.data = {})).transition = i)
                        }
                        if (n) {
                            for (var l = [], u = [], p = 0; p < n.length; p++) {
                                var d = n[p];
                                d.data.transition = i,
                                    d.data.pos = d.elm.getBoundingClientRect(),
                                    a[d.key] ? l.push(d) : u.push(d)
                            }
                            this.kept = e(t, null, l),
                                this.removed = u
                        }
                        return e(t, null, o)
                    },
                    beforeUpdate: function() {
                        this.__patch__(this._vnode, this.kept, !1, !0),
                            this._vnode = this.kept
                    },
                    updated: function() {
                        var e = this.prevChildren,
                            t = this.moveClass || (this.name || "v") + "-move";
                        if (e.length && this.hasMove(e[0].elm, t)) {
                            e.forEach(an),
                                e.forEach(nn),
                                e.forEach(rn);
                            document.body.offsetHeight,
                                e.forEach(function(e) {
                                    if (e.data.moved) {
                                        var a = e.elm,
                                            n = a.style;
                                        Ea(a, t),
                                            n.transform = n.WebkitTransform = n.transitionDuration = "",
                                            a.addEventListener(Di, a._moveCb = function e(n) {
                                                n && !/transform$/.test(n.propertyName) || (a.removeEventListener(Di, e), a._moveCb = null, Oa(a, t))
                                            })
                                    }
                                })
                        }
                    },
                    methods: {
                        hasMove: function(e, t) {
                            if (!yi) return ! 1;
                            if (null != this._hasMove) return this._hasMove;
                            var a = e.cloneNode();
                            e._transitionClasses && e._transitionClasses.forEach(function(e) {
                                Pa(a, e)
                            }),
                                Aa(a, t),
                                a.style.display = "none",
                                this.$el.appendChild(a);
                            var n = $a(a);
                            return this.$el.removeChild(a),
                                this._hasMove = n.hasTransform
                        }
                    }
                },
                Ri = {
                    Transition: ji,
                    TransitionGroup: Li
                };
            at.config.mustUseProp = Lo,
                at.config.isReservedTag = Go,
                at.config.getTagNamespace = yt,
                at.config.isUnknownElement = bt,
                l(at.options.directives, Ei),
                l(at.options.components, Ri),
                at.prototype.__patch__ = Er ? Pi: f,
                at.prototype.$mount = function(e, t) {
                    return e = e && Er ? _t(e) : void 0,
                        ie(this, e, t)
                },
                setTimeout(function() {
                        Ar.devtools && Fr && Fr.emit("init", at)
                    },
                    0);
            var Bi, Hi = !!Er &&
                function(e, t) {
                    var a = document.createElement("div");
                    return a.innerHTML = '<div a="\n">',
                    a.innerHTML.indexOf("&#10;") > 0
                } (),
                Vi = a("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                Fi = a("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                qi = a("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                Wi = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
                Ui = new RegExp("^\\s*" + /([^\s"'<>\/=]+)/.source + "(?:\\s*(" + /(?:=)/.source + ")\\s*(?:" + Wi.join("|") + "))?"),
                zi = "[a-zA-Z_][\\w\\-\\.]*",
                Xi = new RegExp("^<((?:" + zi + "\\:)?" + zi + ")"),
                Gi = /^\s*(\/?)>/,
                Yi = new RegExp("^<\\/((?:" + zi + "\\:)?" + zi + ")[^>]*>"),
                Ji = /^<!DOCTYPE [^>]+>/i,
                Qi = /^<!--/,
                Ki = /^<!\[/,
                Zi = !1;
            "x".replace(/x(.)?/g,
                function(e, t) {
                    Zi = "" === t
                });
            var es, ts, as, ns, rs, os, is, ss, cs, ls, us, ps, ds, fs, hs, ms, gs, vs, ys = a("script,style,textarea", !0),
                bs = {},
                _s = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&amp;": "&",
                    "&#10;": "\n"
                },
                ws = /&(?:lt|gt|quot|amp);/g,
                Ds = /&(?:lt|gt|quot|amp|#10);/g,
                ks = /\{\{((?:.|\n)+?)\}\}/g,
                xs = i(function(e) {
                    var t = e[0].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&"),
                        a = e[1].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
                    return new RegExp(t + "((?:.|\\n)+?)" + a, "g")
                }),
                Ss = /^@|^v-on:/,
                Ts = /^v-|^@|^:/,
                Cs = /(.*?)\s+(?:in|of)\s+(.*)/,
                Ms = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
                As = /:(.*)$/,
                Ps = /^:|^v-bind:/,
                Is = /\.[^.]+/g,
                Ns = i(on),
                Es = /^xmlns:NS\d+/,
                Os = /^NS\d+:/,
                js = i(Pn),
                $s = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
                Ls = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
                Rs = {
                    esc: 27,
                    tab: 9,
                    enter: 13,
                    space: 32,
                    up: 38,
                    left: 37,
                    right: 39,
                    down: 40,
                    delete: [8, 46]
                },
                Bs = function(e) {
                    return "if(" + e + ")return null;"
                },
                Hs = {
                    stop: "$event.stopPropagation();",
                    prevent: "$event.preventDefault();",
                    self: Bs("$event.target !== $event.currentTarget"),
                    ctrl: Bs("!$event.ctrlKey"),
                    shift: Bs("!$event.shiftKey"),
                    alt: Bs("!$event.altKey"),
                    meta: Bs("!$event.metaKey"),
                    left: Bs("'button' in $event && $event.button !== 0"),
                    middle: Bs("'button' in $event && $event.button !== 1"),
                    right: Bs("'button' in $event && $event.button !== 2")
                },
                Vs = {
                    bind: Hn,
                    cloak: f
                },
                Fs = {
                    staticKeys: ["staticClass"],
                    transformNode: pr,
                    genData: dr
                },
                qs = {
                    staticKeys: ["staticStyle"],
                    transformNode: fr,
                    genData: hr
                },
                Ws = [Fs, qs],
                Us = {
                    model: da,
                    text: mr,
                    html: gr
                },
                zs = {
                    expectHTML: !0,
                    modules: Ws,
                    directives: Us,
                    isPreTag: Xo,
                    isUnaryTag: Vi,
                    mustUseProp: Lo,
                    canBeLeftOpenTag: Fi,
                    isReservedTag: Go,
                    getTagNamespace: yt,
                    staticKeys: function(e) {
                        return e.reduce(function(e, t) {
                                return e.concat(t.staticKeys || [])
                            },
                            []).join(",")
                    } (Ws)
                },
                Xs = function(e) {
                    function t(t, a) {
                        var n = Object.create(e),
                            r = [],
                            o = [];
                        if (n.warn = function(e, t) { (t ? o: r).push(e)
                            },
                                a) {
                            a.modules && (n.modules = (e.modules || []).concat(a.modules)),
                            a.directives && (n.directives = l(Object.create(e.directives), a.directives));
                            for (var i in a)"modules" !== i && "directives" !== i && (n[i] = a[i])
                        }
                        var s = lr(t, n);
                        return s.errors = r,
                            s.tips = o,
                            s
                    }
                    function a(e, a, r) {
                        a = a || {};
                        var o = a.delimiters ? String(a.delimiters) + e: e;
                        if (n[o]) return n[o];
                        var i = t(e, a),
                            s = {},
                            c = [];
                        s.render = ur(i.render, c);
                        var l = i.staticRenderFns.length;
                        s.staticRenderFns = new Array(l);
                        for (var u = 0; u < l; u++) s.staticRenderFns[u] = ur(i.staticRenderFns[u], c);
                        return n[o] = s
                    }
                    var n = Object.create(null);
                    return {
                        compile: t,
                        compileToFunctions: a
                    }
                } (zs),
                Gs = Xs.compileToFunctions,
                Ys = i(function(e) {
                    var t = _t(e);
                    return t && t.innerHTML
                }),
                Js = at.prototype.$mount;
            return at.prototype.$mount = function(e, t) {
                if ((e = e && _t(e)) === document.body || e === document.documentElement) return this;
                var a = this.$options;
                if (!a.render) {
                    var n = a.template;
                    if (n) if ("string" == typeof n)"#" === n.charAt(0) && (n = Ys(n));
                    else {
                        if (!n.nodeType) return this;
                        n = n.innerHTML
                    } else e && (n = vr(e));
                    if (n) {
                        var r = Gs(n, {
                                shouldDecodeNewlines: Hi,
                                delimiters: a.delimiters
                            },
                            this),
                            o = r.render,
                            i = r.staticRenderFns;
                        a.render = o,
                            a.staticRenderFns = i
                    }
                }
                return Js.call(this, e, t)
            },
                at.compile = Gs,
                at
        }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.VueResource = t()
    } (this,
        function() {
            "use strict";
            function e(e) {
                this.state = V,
                    this.value = void 0,
                    this.deferred = [];
                var t = this;
                try {
                    e(function(e) {
                            t.resolve(e)
                        },
                        function(e) {
                            t.reject(e)
                        })
                } catch(e) {
                    t.reject(e)
                }
            }
            function t(e, t) {
                e instanceof Promise ? this.promise = e: this.promise = new Promise(e.bind(t)),
                    this.context = t
            }
            function a(e) {
                "undefined" != typeof console && Y && console.warn("[VueResource warn]: " + e)
            }
            function n(e) {
                "undefined" != typeof console && console.error(e)
            }
            function r(e, t) {
                return W(e, t)
            }
            function o(e) {
                return e ? e.replace(/^\s*|\s*$/g, "") : ""
            }
            function i(e) {
                return e ? e.toLowerCase() : ""
            }
            function s(e) {
                return e ? e.toUpperCase() : ""
            }
            function c(e) {
                return "string" == typeof e
            }
            function l(e) {
                return "function" == typeof e
            }
            function u(e) {
                return null !== e && "object" == typeof e
            }
            function p(e) {
                return u(e) && Object.getPrototypeOf(e) == Object.prototype
            }
            function d(e) {
                return "undefined" != typeof Blob && e instanceof Blob
            }
            function f(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }
            function h(e, a, n) {
                var r = t.resolve(e);
                return arguments.length < 2 ? r: r.then(a, n)
            }
            function m(e, t, a) {
                return a = a || {},
                l(a) && (a = a.call(t)),
                    v(e.bind({
                        $vm: t,
                        $options: a
                    }), e, {
                        $options: a
                    })
            }
            function g(e, t) {
                var a, n;
                if (K(e)) for (a = 0; a < e.length; a++) t.call(e[a], e[a], a);
                else if (u(e)) for (n in e) z.call(e, n) && t.call(e[n], e[n], n);
                return e
            }
            function v(e) {
                return G.call(arguments, 1).forEach(function(t) {
                    _(e, t, !0)
                }),
                    e
            }
            function y(e) {
                return G.call(arguments, 1).forEach(function(t) {
                    for (var a in t) void 0 === e[a] && (e[a] = t[a])
                }),
                    e
            }
            function b(e) {
                return G.call(arguments, 1).forEach(function(t) {
                    _(e, t)
                }),
                    e
            }
            function _(e, t, a) {
                for (var n in t) a && (p(t[n]) || K(t[n])) ? (p(t[n]) && !p(e[n]) && (e[n] = {}), K(t[n]) && !K(e[n]) && (e[n] = []), _(e[n], t[n], a)) : void 0 !== t[n] && (e[n] = t[n])
            }
            function w(e, t, a) {
                var n = D(e),
                    r = n.expand(t);
                return a && a.push.apply(a, n.vars),
                    r
            }
            function D(e) {
                var t = ["+", "#", ".", "/", ";", "?", "&"],
                    a = [];
                return {
                    vars: a,
                    expand: function(n) {
                        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,
                            function(e, r, o) {
                                if (r) {
                                    var i = null,
                                        s = [];
                                    if ( - 1 !== t.indexOf(r.charAt(0)) && (i = r.charAt(0), r = r.substr(1)), r.split(/,/g).forEach(function(e) {
                                            var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e);
                                            s.push.apply(s, k(n, i, t[1], t[2] || t[3])),
                                                a.push(t[1])
                                        }), i && "+" !== i) {
                                        var c = ",";
                                        return "?" === i ? c = "&": "#" !== i && (c = i),
                                        (0 !== s.length ? i: "") + s.join(c)
                                    }
                                    return s.join(",")
                                }
                                return C(o)
                            })
                    }
                }
            }
            function k(e, t, a, n) {
                var r = e[a],
                    o = [];
                if (x(r) && "" !== r) if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r) r = r.toString(),
                n && "*" !== n && (r = r.substring(0, parseInt(n, 10))),
                    o.push(T(t, r, S(t) ? a: null));
                else if ("*" === n) Array.isArray(r) ? r.filter(x).forEach(function(e) {
                    o.push(T(t, e, S(t) ? a: null))
                }) : Object.keys(r).forEach(function(e) {
                    x(r[e]) && o.push(T(t, r[e], e))
                });
                else {
                    var i = [];
                    Array.isArray(r) ? r.filter(x).forEach(function(e) {
                        i.push(T(t, e))
                    }) : Object.keys(r).forEach(function(e) {
                        x(r[e]) && (i.push(encodeURIComponent(e)), i.push(T(t, r[e].toString())))
                    }),
                        S(t) ? o.push(encodeURIComponent(a) + "=" + i.join(",")) : 0 !== i.length && o.push(i.join(","))
                } else ";" === t ? o.push(encodeURIComponent(a)) : "" !== r || "&" !== t && "?" !== t ? "" === r && o.push("") : o.push(encodeURIComponent(a) + "=");
                return o
            }
            function x(e) {
                return void 0 !== e && null !== e
            }
            function S(e) {
                return ";" === e || "&" === e || "?" === e
            }
            function T(e, t, a) {
                return t = "+" === e || "#" === e ? C(t) : encodeURIComponent(t),
                    a ? encodeURIComponent(a) + "=" + t: t
            }
            function C(e) {
                return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
                    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e)),
                        e
                }).join("")
            }
            function M(e, t) {
                var a, n = this || {},
                    r = e;
                return c(e) && (r = {
                    url: e,
                    params: t
                }),
                    r = v({},
                        M.options, n.$options, r),
                    M.transforms.forEach(function(e) {
                        a = A(e, a, n.$vm)
                    }),
                    a(r)
            }
            function A(e, t, a) {
                return function(n) {
                    return e.call(a, n, t)
                }
            }
            function P(e, t, a) {
                var n, r = K(t),
                    o = p(t);
                g(t,
                    function(t, i) {
                        n = u(t) || K(t),
                        a && (i = a + "[" + (o || n ? i: "") + "]"),
                            !a && r ? e.add(t.name, t.value) : n ? P(e, t, i) : e.add(i, t)
                    })
            }
            function I(e) {
                var t = e.match(/^\[|^\{(?!\{)/),
                    a = {
                        "[": /]$/,
                        "{": /}$/
                    };
                return t && a[t[0]].test(e)
            }
            function N(e, t) {
                t((e.client || (J ? fe: he))(e))
            }
            function E(e, t) {
                return Object.keys(e).reduce(function(e, a) {
                        return i(t) === i(a) ? a: e
                    },
                    null)
            }
            function O(e) {
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return o(e)
            }
            function j(e) {
                return new t(function(t) {
                    var a = new FileReader;
                    a.readAsText(e),
                        a.onload = function() {
                            t(a.result)
                        }
                })
            }
            function $(e) {
                return 0 === e.type.indexOf("text") || -1 !== e.type.indexOf("json")
            }
            function L(e) {
                var a = this || {},
                    r = me(a.$vm);
                return y(e || {},
                    a.$options, L.options),
                    L.interceptors.forEach(function(e) {
                        r.use(e)
                    }),
                    r(new ye(e)).then(function(e) {
                            return e.ok ? e: t.reject(e)
                        },
                        function(e) {
                            return e instanceof Error && n(e),
                                t.reject(e)
                        })
            }
            function R(e, t, a, n) {
                var r = this || {},
                    o = {};
                return a = Z({},
                    R.actions, a),
                    g(a,
                        function(a, i) {
                            a = v({
                                    url: e,
                                    params: Z({},
                                        t)
                                },
                                n, a),
                                o[i] = function() {
                                    return (r.$http || L)(B(a, arguments))
                                }
                        }),
                    o
            }
            function B(e, t) {
                var a, n = Z({},
                    e),
                    r = {};
                switch (t.length) {
                    case 2:
                        r = t[0],
                            a = t[1];
                        break;
                    case 1:
                        /^(POST|PUT|PATCH)$/i.test(n.method) ? a = t[0] : r = t[0];
                        break;
                    case 0:
                        break;
                    default:
                        throw "Expected up to 2 arguments [params, body], got " + t.length + " arguments"
                }
                return n.body = a,
                    n.params = Z({},
                        n.params, r),
                    n
            }
            function H(e) {
                H.installed || (Q(e), e.url = M, e.http = L, e.resource = R, e.Promise = t, Object.defineProperties(e.prototype, {
                    $url: {
                        get: function() {
                            return m(e.url, this, this.$options.url)
                        }
                    },
                    $http: {
                        get: function() {
                            return m(e.http, this, this.$options.http)
                        }
                    },
                    $resource: {
                        get: function() {
                            return e.resource.bind(this)
                        }
                    },
                    $promise: {
                        get: function() {
                            var t = this;
                            return function(a) {
                                return new e.Promise(a, t)
                            }
                        }
                    }
                }))
            }
            var V = 2;
            e.reject = function(t) {
                return new e(function(e, a) {
                    a(t)
                })
            },
                e.resolve = function(t) {
                    return new e(function(e, a) {
                        e(t)
                    })
                },
                e.all = function(t) {
                    return new e(function(a, n) {
                        var r = 0,
                            o = [];
                        0 === t.length && a(o);
                        for (var i = 0; i < t.length; i += 1) e.resolve(t[i]).then(function(e) {
                            return function(n) {
                                o[e] = n,
                                (r += 1) === t.length && a(o)
                            }
                        } (i), n)
                    })
                },
                e.race = function(t) {
                    return new e(function(a, n) {
                        for (var r = 0; r < t.length; r += 1) e.resolve(t[r]).then(a, n)
                    })
                };
            var F = e.prototype;
            F.resolve = function(e) {
                var t = this;
                if (t.state === V) {
                    if (e === t) throw new TypeError("Promise settled with itself.");
                    var a = !1;
                    try {
                        var n = e && e.then;
                        if (null !== e && "object" == typeof e && "function" == typeof n) return void n.call(e,
                            function(e) {
                                a || t.resolve(e),
                                    a = !0
                            },
                            function(e) {
                                a || t.reject(e),
                                    a = !0
                            })
                    } catch(e) {
                        return void(a || t.reject(e))
                    }
                    t.state = 0,
                        t.value = e,
                        t.notify()
                }
            },
                F.reject = function(e) {
                    var t = this;
                    if (t.state === V) {
                        if (e === t) throw new TypeError("Promise settled with itself.");
                        t.state = 1,
                            t.value = e,
                            t.notify()
                    }
                },
                F.notify = function() {
                    var e = this;
                    r(function() {
                        if (e.state !== V) for (; e.deferred.length;) {
                            var t = e.deferred.shift(),
                                a = t[0],
                                n = t[1],
                                r = t[2],
                                o = t[3];
                            try {
                                0 === e.state ? r("function" == typeof a ? a.call(void 0, e.value) : e.value) : 1 === e.state && ("function" == typeof n ? r(n.call(void 0, e.value)) : o(e.value))
                            } catch(e) {
                                o(e)
                            }
                        }
                    })
                },
                F.then = function(t, a) {
                    var n = this;
                    return new e(function(e, r) {
                        n.deferred.push([t, a, e, r]),
                            n.notify()
                    })
                },
                F.
                    catch = function(e) {
                    return this.then(void 0, e)
                },
            "undefined" == typeof Promise && (window.Promise = e),
                t.all = function(e, a) {
                    return new t(Promise.all(e), a)
                },
                t.resolve = function(e, a) {
                    return new t(Promise.resolve(e), a)
                },
                t.reject = function(e, a) {
                    return new t(Promise.reject(e), a)
                },
                t.race = function(e, a) {
                    return new t(Promise.race(e), a)
                };
            var q = t.prototype;
            q.bind = function(e) {
                return this.context = e,
                    this
            },
                q.then = function(e, a) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                    a && a.bind && this.context && (a = a.bind(this.context)),
                        new t(this.promise.then(e, a), this.context)
                },
                q.
                    catch = function(e) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                        new t(this.promise.
                        catch(e), this.context)
                },
                q.
                    finally = function(e) {
                    return this.then(function(t) {
                            return e.call(this),
                                t
                        },
                        function(t) {
                            return e.call(this),
                                Promise.reject(t)
                        })
                };
            var W, U = {},
                z = U.hasOwnProperty,
                X = [],
                G = X.slice,
                Y = !1,
                J = "undefined" != typeof window,
                Q = function(e) {
                    var t = e.config,
                        a = e.nextTick;
                    W = a,
                        Y = t.debug || !t.silent
                },
                K = Array.isArray,
                Z = Object.assign || b,
                ee = function(e, t) {
                    var a = t(e);
                    return c(e.root) && !a.match(/^(https?:)?\//) && (a = e.root + "/" + a),
                        a
                },
                te = function(e, t) {
                    var a = Object.keys(M.options.params),
                        n = {},
                        r = t(e);
                    return g(e.params,
                        function(e, t) { - 1 === a.indexOf(t) && (n[t] = e)
                        }),
                        n = M.params(n),
                    n && (r += ( - 1 == r.indexOf("?") ? "?": "&") + n),
                        r
                },
                ae = function(e) {
                    var t = [],
                        a = w(e.url, e.params, t);
                    return t.forEach(function(t) {
                        delete e.params[t]
                    }),
                        a
                };
            M.options = {
                url: "",
                root: null,
                params: {}
            },
                M.transforms = [ae, te, ee],
                M.params = function(e) {
                    var t = [],
                        a = encodeURIComponent;
                    return t.add = function(e, t) {
                        l(t) && (t = t()),
                        null === t && (t = ""),
                            this.push(a(e) + "=" + a(t))
                    },
                        P(t, e),
                        t.join("&").replace(/%20/g, "+")
                },
                M.parse = function(e) {
                    var t = document.createElement("a");
                    return document.documentMode && (t.href = e, e = t.href),
                        t.href = e,
                        {
                            href: t.href,
                            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                            port: t.port,
                            host: t.host,
                            hostname: t.hostname,
                            pathname: "/" === t.pathname.charAt(0) ? t.pathname: "/" + t.pathname,
                            search: t.search ? t.search.replace(/^\?/, "") : "",
                            hash: t.hash ? t.hash.replace(/^#/, "") : ""
                        }
                };
            var ne = function(e) {
                    return new t(function(t) {
                        var a = new XDomainRequest,
                            n = function(n) {
                                var r = n.type,
                                    o = 0;
                                "load" === r ? o = 200 : "error" === r && (o = 500),
                                    t(e.respondWith(a.responseText, {
                                        status: o
                                    }))
                            };
                        e.abort = function() {
                            return a.abort()
                        },
                            a.open(e.method, e.getUrl()),
                        e.timeout && (a.timeout = e.timeout),
                            a.onload = n,
                            a.onabort = n,
                            a.onerror = n,
                            a.ontimeout = n,
                            a.onprogress = function() {},
                            a.send(e.getBody())
                    })
                },
                re = J && "withCredentials" in new XMLHttpRequest,
                oe = function(e, t) {
                    if (J) {
                        var a = M.parse(location.href),
                            n = M.parse(e.getUrl());
                        n.protocol === a.protocol && n.host === a.host || (e.crossOrigin = !0, e.emulateHTTP = !1, re || (e.client = ne))
                    }
                    t()
                },
                ie = function(e, t) {
                    f(e.body) ? e.headers.delete("Content-Type") : (u(e.body) || K(e.body)) && (e.emulateJSON ? (e.body = M.params(e.body), e.headers.set("Content-Type", "application/x-www-form-urlencoded")) : e.body = JSON.stringify(e.body)),
                        t(function(e) {
                            return Object.defineProperty(e, "data", {
                                get: function() {
                                    return this.body
                                },
                                set: function(e) {
                                    this.body = e
                                }
                            }),
                                e.bodyText ? h(e.text(),
                                    function(t) {
                                        if (0 === (e.headers.get("Content-Type") || "").indexOf("application/json") || I(t)) try {
                                            e.body = JSON.parse(t)
                                        } catch(t) {
                                            e.body = null
                                        } else e.body = t;
                                        return e
                                    }) : e
                        })
                },
                se = function(e) {
                    return new t(function(t) {
                        var a, n, r = e.jsonp || "callback",
                            o = e.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                            i = null;
                        a = function(a) {
                            var r = a.type,
                                s = 0;
                            "load" === r && null !== i ? s = 200 : "error" === r && (s = 500),
                            s && window[o] && (delete window[o], document.body.removeChild(n)),
                                t(e.respondWith(i, {
                                    status: s
                                }))
                        },
                            window[o] = function(e) {
                                i = JSON.stringify(e)
                            },
                            e.abort = function() {
                                a({
                                    type: "abort"
                                })
                            },
                            e.params[r] = o,
                        e.timeout && setTimeout(e.abort, e.timeout),
                            n = document.createElement("script"),
                            n.src = e.getUrl(),
                            n.type = "text/javascript",
                            n.async = !0,
                            n.onload = a,
                            n.onerror = a,
                            document.body.appendChild(n)
                    })
                },
                ce = function(e, t) {
                    "JSONP" == e.method && (e.client = se),
                        t()
                },
                le = function(e, t) {
                    l(e.before) && e.before.call(this, e),
                        t()
                },
                ue = function(e, t) {
                    e.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(e.method) && (e.headers.set("X-HTTP-Method-Override", e.method), e.method = "POST"),
                        t()
                },
                pe = function(e, t) {
                    g(Z({},
                        L.headers.common, e.crossOrigin ? {}: L.headers.custom, L.headers[i(e.method)]),
                        function(t, a) {
                            e.headers.has(a) || e.headers.set(a, t)
                        }),
                        t()
                },
                de = "undefined" != typeof Blob && "undefined" != typeof FileReader,
                fe = function(e) {
                    return new t(function(t) {
                        var a = new XMLHttpRequest,
                            n = function(n) {
                                var r = e.respondWith("response" in a ? a.response: a.responseText, {
                                    status: 1223 === a.status ? 204 : a.status,
                                    statusText: 1223 === a.status ? "No Content": o(a.statusText)
                                });
                                g(o(a.getAllResponseHeaders()).split("\n"),
                                    function(e) {
                                        r.headers.append(e.slice(0, e.indexOf(":")), e.slice(e.indexOf(":") + 1))
                                    }),
                                    t(r)
                            };
                        e.abort = function() {
                            return a.abort()
                        },
                        e.progress && ("GET" === e.method ? a.addEventListener("progress", e.progress) : /^(POST|PUT)$/i.test(e.method) && a.upload.addEventListener("progress", e.progress)),
                            a.open(e.method, e.getUrl(), !0),
                        e.timeout && (a.timeout = e.timeout),
                        !0 === e.credentials && (a.withCredentials = !0),
                        e.crossOrigin || e.headers.set("X-Requested-With", "XMLHttpRequest"),
                        "responseType" in a && de && (a.responseType = "blob"),
                            e.headers.forEach(function(e, t) {
                                a.setRequestHeader(t, e)
                            }),
                            a.onload = n,
                            a.onabort = n,
                            a.onerror = n,
                            a.ontimeout = n,
                            a.send(e.getBody())
                    })
                },
                he = function(e) {
                    var a = require("got");
                    return new t(function(t) {
                        var n, r = e.getUrl(),
                            i = e.getBody(),
                            s = e.method,
                            c = {};
                        e.headers.forEach(function(e, t) {
                            c[t] = e
                        }),
                            a(r, {
                                body: i,
                                method: s,
                                headers: c
                            }).then(n = function(a) {
                                    var n = e.respondWith(a.body, {
                                        status: a.statusCode,
                                        statusText: o(a.statusMessage)
                                    });
                                    g(a.headers,
                                        function(e, t) {
                                            n.headers.set(t, e)
                                        }),
                                        t(n)
                                },
                                function(e) {
                                    return n(e.response)
                                })
                    })
                },
                me = function(e) {
                    function n(n) {
                        return new t(function(t) {
                                function s() {
                                    r = o.pop(),
                                        l(r) ? r.call(e, n, c) : (a("Invalid interceptor of type " + typeof r + ", must be a function"), c())
                                }
                                function c(a) {
                                    if (l(a)) i.unshift(a);
                                    else if (u(a)) return i.forEach(function(t) {
                                        a = h(a,
                                            function(a) {
                                                return t.call(e, a) || a
                                            })
                                    }),
                                        void h(a, t);
                                    s()
                                }
                                s()
                            },
                            e)
                    }
                    var r, o = [N],
                        i = [];
                    return u(e) || (e = null),
                        n.use = function(e) {
                            o.push(e)
                        },
                        n
                },
                ge = function(e) {
                    var t = this;
                    this.map = {},
                        g(e,
                            function(e, a) {
                                return t.append(a, e)
                            })
                };
            ge.prototype.has = function(e) {
                return null !== E(this.map, e)
            },
                ge.prototype.get = function(e) {
                    var t = this.map[E(this.map, e)];
                    return t ? t.join() : null
                },
                ge.prototype.getAll = function(e) {
                    return this.map[E(this.map, e)] || []
                },
                ge.prototype.set = function(e, t) {
                    this.map[O(E(this.map, e) || e)] = [o(t)]
                },
                ge.prototype.append = function(e, t) {
                    var a = this.map[E(this.map, e)];
                    a ? a.push(o(t)) : this.set(e, t)
                },
                ge.prototype.delete = function(e) {
                    delete this.map[E(this.map, e)]
                },
                ge.prototype.deleteAll = function() {
                    this.map = {}
                },
                ge.prototype.forEach = function(e, t) {
                    var a = this;
                    g(this.map,
                        function(n, r) {
                            g(n,
                                function(n) {
                                    return e.call(t, n, r, a)
                                })
                        })
                };
            var ve = function(e, t) {
                var a = t.url,
                    n = t.headers,
                    r = t.status,
                    o = t.statusText;
                this.url = a,
                    this.ok = r >= 200 && r < 300,
                    this.status = r || 0,
                    this.statusText = o || "",
                    this.headers = new ge(n),
                    this.body = e,
                    c(e) ? this.bodyText = e: d(e) && (this.bodyBlob = e, $(e) && (this.bodyText = j(e)))
            };
            ve.prototype.blob = function() {
                return h(this.bodyBlob)
            },
                ve.prototype.text = function() {
                    return h(this.bodyText)
                },
                ve.prototype.json = function() {
                    return h(this.text(),
                        function(e) {
                            return JSON.parse(e)
                        })
                };
            var ye = function(e) {
                this.body = null,
                    this.params = {},
                    Z(this, e, {
                        method: s(e.method || "GET")
                    }),
                this.headers instanceof ge || (this.headers = new ge(this.headers))
            };
            ye.prototype.getUrl = function() {
                return M(this)
            },
                ye.prototype.getBody = function() {
                    return this.body
                },
                ye.prototype.respondWith = function(e, t) {
                    return new ve(e, Z(t || {},
                        {
                            url: this.getUrl()
                        }))
                };
            var be = {
                    Accept: "application/json, text/plain, */*"
                },
                _e = {
                    "Content-Type": "application/json;charset=utf-8"
                };
            return L.options = {},
                L.headers = {
                    put: _e,
                    post: _e,
                    patch: _e,
                    delete: _e,
                    common: be,
                    custom: {}
                },
                L.interceptors = [le, ue, ie, ce, pe, oe],
                ["get", "delete", "head", "jsonp"].forEach(function(e) {
                    L[e] = function(t, a) {
                        return this(Z(a || {},
                            {
                                url: t,
                                method: e
                            }))
                    }
                }),
                ["post", "put", "patch"].forEach(function(e) {
                    L[e] = function(t, a, n) {
                        return this(Z(n || {},
                            {
                                url: t,
                                method: e,
                                body: a
                            }))
                    }
                }),
                R.actions = {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET"
                    },
                    update: {
                        method: "PUT"
                    },
                    remove: {
                        method: "DELETE"
                    },
                    delete: {
                        method: "DELETE"
                    }
                },
            "undefined" != typeof window && window.Vue && window.Vue.use(H),
                H
        }),
    jQuery.error = function(e) {},
    onerror = function(e, t, a, n, r) {};
var ws, game = {
        room: 0,
        room_number: globalData.roomNumber,
        room_url: 0,
        score: 0,
        status: 0,
        time: -1,
        round: 0,
        total_num: 12,
        currentScore: 0,
        cardDeal: 0,
        can_open: 0,
        is_play: !1
    },
    message = [{
        num: 0,
        text: "一首凉凉送给你"
    },
        {
            num: 1,
            text: "溜了溜了溜了"
        },
        {
            num: 2,
            text: "有本事干我啊"
        },
        {
            num: 3,
            text: "别磨蹭，快点打牌"
        },
        {
            num: 4,
            text: "我出去叫人"
        },
        {
            num: 5,
            text: "你的牌好靓哇"
        },
        {
            num: 6,
            text: "我当年横扫澳门五条街"
        },
        {
            num: 7,
            text: "算你牛逼"
        },
        {
            num: 8,
            text: "别吹牛逼，有本事干到底"
        },
        {
            num: 9,
            text: "输得裤衩都没了"
        },
        {
            num: 10,
            text: "我给你们送温暖了"
        },
        {
            num: 11,
            text: "谢谢老板"
        }],
    wsOperation = {
        CreateRoom: "CreateRoom",
        JoinRoom: "JoinRoom",
        ReadyStart: "ReadyStart",
        PrepareJoinRoom: "PrepareJoinRoom",
        AllGamerInfo: "AllGamerInfo",
        UpdateGamerInfo: "UpdateGamerInfo",
        UpdateAccountStatus: "UpdateAccountStatus",
        StartLimitTime: "StartLimitTime",
        CancelStartLimitTime: "CancelStartLimitTime",
        GameStart: "GameStart",
        NotyChooseChip: "NotyChooseChip",
        CardInfo: "CardInfo",
        PkCard: "PkCard",
        UpdateAccountScore: "UpdateAccountScore",
        OpenCard: "OpenCard",
        Win: "Win",
        Discard: "Discard",
        BroadcastVoice: "BroadcastVoice",
        CreateRoom: "CreateRoom",
        ClickToLook: "ClickToLook",
        ChooseChip: "ChooseChip",
        GrabBanker: "GrabBanker",
        PlayerMultiples: "PlayerMultiples",
        ShowCard: "ShowCard",
        UpdateAccountShow: "UpdateAccountShow",
        UpdateAccountMultiples: "UpdateAccountMultiples",
        StartBet: "StartBet",
        StartShow: "StartShow",
        RefreshRoom: "PullRoomInfo",
        BroadcastVoice: "BroadcastVoice",
        ClickToLook: "ClickToLook",
        ChooseChip: "ChooseChip",
        OpenCard: "OpenCard",
        ActiveRoom: "ActivateRoom",
        GameHistory: "HistoryScoreboard",
        GuestRoom: "GuestRoom",
        AllGuestInfo: "AllGuestInfo",
        UpdateGuestInfo: "UpdateGuestInfo"
    },
    httpModule = {
        getSFRP: function() {
            var e = {
                dealerNum: globalData.dealerNum,
                accountId: userData.accountId,
                s: globalData.session,
                org_id: globalData.org_id
            };
            Vue.http.post(globalData.rpUrl + "/sf/redPacket", e).then(function(e) {
                    var t = e.body;
                    setTimeout(function() {
                            $(".imgOpenRP").removeClass("transf"),
                                appData.canGetDogRP = 1,
                                0 == t.result ? (appData.isGetDogRP = 1, appData.roomCard = parseInt(appData.roomCard) + parseInt(t.data.ticket), appData.dogRPText = "房卡" + t.data.ticket + "张") : (appData.isGetDogRP = 1, appData.dogRPText = t.msg)
                        },
                        1e3)
                },
                function(e) {
                    appData.canGetDogRP = 1,
                        $(".imgOpenRP").removeClass("transf")
                })
        },
        checkPacket: function() {
            var e = {
                dealerNum: globalData.dealerNum,
                accountId: userData.accountId,
                s: globalData.session,
                org_id: globalData.org_id
            };
            Vue.http.post(globalData.rpUrl + "/sf/checkPacket", e).then(function(e) {
                    1 == e.body.data.hasPacket && (appData.isShowDogRP = 1)
                },
                function(e) {
                    console.log(e.body)
                })
        },
        callbackMessage: function() {
            var e = {
                dealer_num: globalData.dealerNum,
                account_id: userData.accountId,
                session: globalData.session,
                org_id: globalData.org_id
            };
            Vue.http.post(globalData.baseUrl + "game/callbackMessage", e).then(function(e) {
                    logMessage(e.body),
                        e.body.result
                },
                function(e) {
                    logMessage(e.body)
                })
        },
        getRoomCardInfo: function() {
            Vue.http.post(globalData.baseUrl + "game/roomCardInfo", {
                dealer_num: globalData.dealerNum,
                session: globalData.session,
                org_id: globalData.org_id
            }).then(function(e) {
                    logMessage(e.body);
                    var t = e.body;
                    if (0 == t.result) {
                        appData.roomCardInfo = t.data.concat();
                        for (var a = 0; a < appData.roomCardInfo.length; a++) appData.roomCardInfo[a].num = a + 1,
                            appData.roomCardInfo[a].price = Math.ceil(appData.roomCardInfo[a].price);
                        appData.select = appData.roomCardInfo[0].goods_id
                    } else alert(t.result_message)
                },
                function(e) {
                    logMessage(e.body)
                })
        },
        getActivityInfo: function() {
            Vue.http.post(globalData.baseUrl + "game/getActivityInfo", {
                account_id: userData.accountId,
                dealer_num: globalData.dealerNum,
                session: globalData.session,
                org_id: globalData.org_id
            }).then(function(e) {
                    e.body.result
                },
                function(e) {
                    logMessage(e.body)
                }),
                reconnectSocket(),
                appData.is_connect = !0
        },
        getCards: function() {
            if (appData.activity.length < 1) return void logMessage("activity length less than 1");
            Vue.http.post(globalData.baseUrl + "game/updateActivityOpt", {
                account_id: userData.accountId,
                activity_id: appData.activity[0].activity_id,
                dealer_num: globalData.dealerNum,
                session: globalData.session,
                org_id: globalData.org_id
            }).then(function(e) {
                    logMessage(e.body);
                    var t = e.body;
                    0 == t.result ? (appData.roomCard = appData.roomCard + Math.ceil(appData.activity[0].ticket_count), appData.activity.splice(0, 1), 0 == appData.activity.length ? (reconnectSocket(), appData.is_connect = !0, viewMethods.clickCloseAlert()) : viewMethods.clickShowAlert(5, appData.activity[0].content)) : alert(t.result_message)
                },
                function(e) {
                    logMessage(e.body)
                })
        },
        buyCard: function(e) {
            Vue.http.post(globalData.baseUrl + "index.php/wxpay/flower/getPaymentOpt", {
                account_id: userData.accountId,
                open_id: globalData.openId,
                goods_id: e,
                dealer_num: globalData.dealerNum,
                session: globalData.session,
                org_id: globalData.org_id
            }).then(function(e) {
                    logMessage(e.body);
                    var t = e.body;
                    if (void 0 === t.result) alert("购买失败，请重新操作"),
                        appData.isShowShopLoading = !1;
                    else if ("-1" == t.result) alert(t.result_message),
                        appData.isShowShopLoading = !1;
                    else {
                        var a = t.data;
                        WeixinJSBridge.invoke("getBrandWCPayRequest", {
                                appId: a.appId,
                                timeStamp: a.timeStamp,
                                nonceStr: a.nonceStr,
                                package: "prepay_id=" + a.prepay_id,
                                signType: a.signType,
                                paySign: a.paySign
                            },
                            function(e) {
                                if ("get_brand_wcpay_request:ok" == e.err_msg) return alert("购买成功"),
                                    appData.isShowShopLoading = !1,
                                    appData.roomCard = parseInt(appData.roomCard) + appData.ticket_count,
                                    viewMethods.clickHideShop(),
                                    appData.isShowAlert = !1,
                                    socketModule.sendPrepareJoinRoom(),
                                    0;
                                alert("购买失败，请重新操作"),
                                    appData.isShowShopLoading = !1
                            })
                    }
                },
                function(e) {
                    alert("error"),
                        appData.isShowShopLoading = !1
                })
        },
        getAuthcode: function(e) {
            var t = {
                dealer_num: globalData.dealerNum,
                phone: e,
                session: globalData.session,
                org_id: globalData.org_id
            };
            Vue.http.post(globalData.baseUrl + "account/getMobileSms", t).then(function(e) {
                    logMessage(e.body);
                    var t = e.body;
                    0 == t.result ? (appData.authcodeTime = 60, authcodeTimer(), appData.authcodeType = 2) : viewMethods.clickShowAlert(21, t.result_message)
                },
                function(e) {
                    viewMethods.clickShowAlert(21, "获取验证码失败")
                })
        },
        bindPhone: function(e, t) {
            var a = {
                dealer_num: globalData.dealerNum,
                phone: e,
                code: t,
                session: globalData.session,
                org_id: globalData.org_id
            };
            Vue.http.post(globalData.baseUrl + "account/checkSmsCode", a).then(function(e) {
                    var t = e.body;
                    0 == t.result ? (appData.isAuthPhone = 0, appData.phone = appData.sPhone, null != t.data.card_count && void 0 != t.data.card_count && "" != t.data.card_count && (appData.roomCard = parseInt(appData.roomCard) + parseInt(t.data.card_count)), t.data.account_id != userData.accountId ? viewMethods.clickShowAlert(23, t.result_message) : viewMethods.clickShowAlert(22, t.result_message), appData.sPhone = "", appData.sAuthcode = "") : viewMethods.clickShowAlert(21, t.result_message)
                },
                function(e) {
                    appData.authcodeTime = 0,
                        viewMethods.clickShowAlert(21, "绑定失败")
                })
        }
    },
    socketModule = {
        closeSocket: function() {
            if (ws) try {
                ws.close()
            } catch(e) {
                console.log(e)
            }
        },
        sendData: function(e) {
            try {
                if (console.log("websocket state：" + ws.readyState), ws.readyState == WebSocket.CLOSED) return void reconnectSocket();
                ws.readyState == WebSocket.OPEN ? ws.send(JSON.stringify(e)) : ws.readyState == WebSocket.CONNECTING ? setTimeout(function() {
                        socketModule.sendData(e)
                    },
                    1e3) : (console.log("websocket state：" + ws.readyState), errorSocket(e.operation, JSON.stringify(e)))
            } catch(e) {
                console.log(e)
            }
        },
        sendPrepareJoinRoom: function() {
            socketModule.sendData({
                operation: wsOperation.PrepareJoinRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_number: globalData.roomNumber
                }
            })
        },
        sendGameHistory: function() {
            socketModule.sendData({
                operation: wsOperation.GameHistory,
                account_id: userData.accountId,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_number: globalData.roomNumber
                }
            })
        },
        sendActiveRoom: function() {
            socketModule.sendData({
                operation: wsOperation.ActiveRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_number: globalData.roomNumber,
                    chip_type: appData.createInfo.chip_type,
                    ticket_count: appData.createInfo.ticket_count,
                    disable_pk_100: appData.createInfo.disable_pk_100,
                    disable_pk_men: appData.createInfo.disable_pk_men,
                    upper_limit: appData.createInfo.upper_limit
                }
            })
        },
        sendCreateRoom: function() {
            socketModule.sendData({
                operation: wsOperation.CreateRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    data_key: Date.parse(new Date) + randomString(5),
                    chip_type: appData.createInfo.chip_type,
                    ticket_count: appData.createInfo.ticket_count,
                    disable_pk_100: appData.createInfo.disable_pk_100,
                    disable_pk_men: appData.createInfo.disable_pk_men,
                    upper_limit: appData.createInfo.upper_limit
                }
            })
        },
        sendJoinRoom: function() {
            socketModule.sendData({
                operation: wsOperation.JoinRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_number: globalData.roomNumber
                }
            })
        },
        sendGuestRoom: function() {
            socketModule.sendData({
                operation: wsOperation.GuestRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_number: globalData.roomNumber
                }
            })
        },
        sendRefreshRoom: function() {
            socketModule.sendData({
                operation: wsOperation.RefreshRoom,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendReadyStart: function() {
            socketModule.sendData({
                operation: wsOperation.ReadyStart,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendBroadcastVoice: function(e) {
            socketModule.sendData({
                operation: wsOperation.BroadcastVoice,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    voice_num: e
                }
            })
        },
        sendGrabBanker: function() {
            socketModule.sendData({
                operation: wsOperation.GrabBanker,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    is_grab: "1"
                }
            })
        },
        sendNotGrabBanker: function() {
            socketModule.sendData({
                operation: wsOperation.GrabBanker,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    is_grab: "0"
                }
            })
        },
        sendPlayerMultiples: function(e) {
            socketModule.sendData({
                operation: wsOperation.PlayerMultiples,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    multiples: e
                }
            })
        },
        sendShowCard: function() {
            socketModule.sendData({
                operation: wsOperation.ShowCard,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendClickToLook: function() {
            socketModule.sendData({
                operation: wsOperation.ClickToLook,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendChooseChip: function(e) {
            socketModule.sendData({
                operation: wsOperation.ChooseChip,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    score: e
                }
            })
        },
        sendDiscard: function() {
            socketModule.sendData({
                operation: wsOperation.Discard,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendOpenCard: function() {
            socketModule.sendData({
                operation: wsOperation.OpenCard,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room
                }
            })
        },
        sendPkCard: function(e) {
            socketModule.sendData({
                operation: wsOperation.PkCard,
                account_id: userData.accountId,
                session: globalData.session,
                dealer_num: globalData.dealerNum,
                org_id: globalData.org_id,
                data: {
                    room_id: appData.game.room,
                    other_account_id: e
                }
            })
        },
        processGameHistory: function(e) {
            appData.recordList = [];
            for (var t = 0; t < e.data.length; t++) appData.recordList.push({
                time: getLocalTime(e.data[t].time),
                scoreboard: e.data[t].scoreboard
            });
            appData.isShowRecord = !0
        },
        processGameRule: function(e) {
            e.data.chip_type && (appData.createInfo.chip_type = e.data.chip_type, appData.createInfo.disable_pk_men = e.data.disable_pk_men, appData.createInfo.disable_pk_100 = e.data.disable_pk_100, appData.createInfo.ticket_count = e.data.ticket_count, appData.createInfo.upper_limit = e.data.upper_limit, appData.ruleInfo.chip_type = e.data.chip_type, appData.ruleInfo.disable_pk_men = e.data.disable_pk_men, appData.ruleInfo.disable_pk_100 = e.data.disable_pk_100, appData.ruleInfo.ticket_count = e.data.ticket_count, appData.ruleInfo.upper_limit = e.data.upper_limit, 1 == appData.ruleInfo.disable_pk_100 && 1 == appData.ruleInfo.disable_pk_men ? (appData.createInfo.rule_height = 60, appData.ruleInfo.rule_height = 60) : (appData.createInfo.rule_height = 30, appData.ruleInfo.rule_height = 30), 2 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [4, 10, 20, 40], appData.scoreList2 = [2, 5, 10, 20]) : 3 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [20, 40, 100, 200], appData.scoreList2 = [10, 20, 50, 100]) : (appData.scoreList1 = [4, 8, 16, 20], appData.scoreList2 = [2, 4, 8, 10]))
        },
        processPrepareJoinRoom: function(e) {
            if (4 == e.data.room_status) return appData.roomStatus = e.data.room_status,
                void viewMethods.clickShowAlert(8, e.result_message);
            if (e.data.chip_type && (appData.createInfo.chip_type = e.data.chip_type, appData.createInfo.disable_pk_men = e.data.disable_pk_men, appData.createInfo.disable_pk_100 = e.data.disable_pk_100, appData.createInfo.ticket_count = e.data.ticket_count, appData.createInfo.upper_limit = e.data.upper_limit, appData.ruleInfo.chip_type = e.data.chip_type, appData.ruleInfo.disable_pk_men = e.data.disable_pk_men, appData.ruleInfo.disable_pk_100 = e.data.disable_pk_100, appData.ruleInfo.ticket_count = e.data.ticket_count, appData.ruleInfo.upper_limit = e.data.upper_limit, appData.ruleInfo.balance_req = e.data.balance_req, 1 == appData.ruleInfo.disable_pk_100 && 1 == appData.ruleInfo.disable_pk_men ? (appData.createInfo.rule_height = 60, appData.ruleInfo.rule_height = 60) : (appData.createInfo.rule_height = 30, appData.ruleInfo.rule_height = 30), 2 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [4, 10, 20, 40], appData.scoreList2 = [2, 5, 10, 20]) : 3 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [20, 40, 100, 200], appData.scoreList2 = [10, 20, 50, 100]) : (appData.scoreList1 = [4, 8, 16, 20], appData.scoreList2 = [2, 4, 8, 10])), wxModule.config(), 3 == e.data.room_status) return void(1 == appData.isAutoActive ? socketModule.sendActiveRoom() : (appData.createInfo.type = 2, appData.createInfo.isShow = !0));
            if (1 == e.data.is_member) socketModule.sendJoinRoom();
            else {
                if (1 == e.data.can_join) if (1 == e.data.can_guest) if (appData.joinType = 1, e.data.room_users.length >= 1) {
                    for (var t = "",
                             a = 0; a < e.data.room_users.length; a++) t += e.data.room_users[a],
                        a == e.data.room_users.length - 1 ? t += "，": t += "、";
                    e.data.alert_text = "房间里有" + t + "是否加入？"
                } else e.data.alert_text = "";
                else if (appData.joinType = 2, e.data.room_users.length >= 1) {
                    for (var t = "",
                             a = 0; a < e.data.room_users.length; a++) t += e.data.room_users[a],
                        a == e.data.room_users.length - 1 ? t += "，": t += "、";
                    e.data.alert_text = "观战人数已满，房间里有" + t + "是否加入游戏？"
                } else e.data.alert_text = "";
                else if (1 == e.data.can_guest) {
                    if (appData.joinType = 3, e.data.room_users.length >= 1) {
                        for (var t = "",
                                 a = 0; a < e.data.room_users.length; a++) t += e.data.room_users[a],
                            a == e.data.room_users.length - 1 ? t += "，": t += "、";
                        e.data.alert_text = "游戏人数已满，是否加入观战?"
                    } else e.data.alert_text = "";
                    0 == e.data.is_enough && (e.data.alert_text = "欢乐豆不足，是否加入观战?"),
                    0 == e.data.is_orgMember && (e.data.alert_text = "你不是此公会成员，是否加入观战?")
                } else appData.joinType = 4;
                1 == appData.joinType || 2 == appData.joinType || 3 == appData.joinType ? viewMethods.clickShowAlert(4, e.data.alert_text) : viewMethods.clickShowAlert(1, "游戏和观战人数已满")
            }
        },
        processActiveRoom: function(e) {
            0 == appData.isAA && (2 == appData.createInfo.ticket_count ? appData.roomCard = appData.roomCard - 2 : appData.roomCard = appData.roomCard - 1),
                socketModule.sendPrepareJoinRoom()
        },
        processJoinRoom: function(e) {
            1 == appData.createInfo.disable_pk_100 && 1 == appData.createInfo.disable_pk_men ? appData.createInfo.rule_height = 60 : appData.createInfo.rule_height = 30,
                appData.player = [],
                appData.playerBoard = {
                    score: [],
                    round: 0,
                    record: ""
                };
            for (var t = 0; t < 6; t++) appData.player.push({
                num: t + 1,
                serial_num: t + 1,
                account_id: 0,
                account_status: 0,
                playing_status: 0,
                online_status: 0,
                nickname: "",
                headimgurl: "",
                account_score: 0,
                ticket_checked: 0,
                is_win: !1,
                win_type: 0,
                limit_time: 0,
                is_operation: !1,
                win_show: !1,
                card: [],
                is_showCard: !1,
                is_pk: !1,
                is_readyPK: !1,
                card_type: 0,
                messageOn: !1,
                messageText: "我们来血拼吧",
                is_guest: 0
            }),
                appData.playerBoard.score.push({
                    account_id: 0,
                    nickname: "",
                    account_score: 0,
                    isBigWinner: 0
                });
            appData.game.room = e.data.room_id,
                appData.game.room_url = e.data.room_url,
                appData.game.currentScore = Math.ceil(e.data.benchmark),
                appData.game.score = Math.ceil(e.data.pool_score),
                appData.game.round = Math.ceil(e.data.game_num),
                appData.game.total_num = Math.ceil(e.data.total_num),
                2 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [4, 10, 20, 40], appData.scoreList2 = [2, 5, 10, 20]) : 3 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [20, 40, 100, 200], appData.scoreList2 = [10, 20, 50, 100]) : (appData.scoreList1 = [4, 8, 16, 20], appData.scoreList2 = [2, 4, 8, 10]),
            -1 == e.data.limit_time && (appData.game.time = Math.ceil(e.data.limit_time), viewMethods.timeCountDown()),
                appData.player[0].serial_num = Math.ceil(e.data.serial_num);
            for (var t = 0; t < 6; t++) t <= 6 - Math.ceil(e.data.serial_num) ? appData.player[t].serial_num = t + Math.ceil(e.data.serial_num) : appData.player[t].serial_num = t + Math.ceil(e.data.serial_num) - 6;
            appData.player[0].account_status = Math.ceil(e.data.account_status),
                appData.player[0].account_score = Math.ceil(e.data.account_score),
                appData.player[0].nickname = userData.nickname,
                appData.player[0].headimgurl = userData.headimgurl,
                appData.player[0].account_id = userData.accountId,
                appData.player[0].card = e.data.cards.concat(),
                appData.player[0].card_type = e.data.card_type,
                appData.player[0].ticket_checked = e.data.ticket_checked,
                appData.game.status = Math.ceil(e.data.room_status),
            2 == appData.game.status && (appData.game.cardDeal = 3, 4 == appData.player[0].account_status && viewMethods.cardOver(0)),
                appData.scoreboard = e.data.scoreboard,
                appData.isWatch = 0,
                setTimeout(function() {
                        appData.showGuest = 0
                    },
                    100)
        },
        processRefreshRoom: function(e) {
            appData.player = [],
                appData.playerBoard = {
                    score: [],
                    round: 0,
                    record: ""
                };
            for (var t = 0; t < 6; t++) appData.player.push({
                num: t + 1,
                serial_num: t + 1,
                account_id: 0,
                account_status: 0,
                playing_status: 0,
                online_status: 0,
                nickname: "",
                headimgurl: "",
                account_score: 0,
                ticket_checked: 0,
                is_win: !1,
                win_type: 0,
                limit_time: 0,
                is_operation: !1,
                win_show: !1,
                card: [],
                is_showCard: !1,
                is_pk: !1,
                is_readyPK: !1,
                card_type: 0,
                messageOn: !1,
                messageText: "我们来血拼吧"
            }),
                appData.playerBoard.score.push({
                    account_id: 0,
                    nickname: "",
                    account_score: 0,
                    isBigWinner: 0
                });
            appData.game.currentScore = Math.ceil(e.data.benchmark),
                appData.game.score = Math.ceil(e.data.pool_score),
                2 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [4, 10, 20, 40], appData.scoreList2 = [2, 5, 10, 20]) : 3 == appData.ruleInfo.chip_type ? (appData.scoreList1 = [20, 40, 100, 200], appData.scoreList2 = [10, 20, 50, 100]) : (appData.scoreList1 = [4, 8, 16, 20], appData.scoreList2 = [2, 4, 8, 10]);
            for (var t = 0; t < appData.player.length; t++) t <= appData.player.length - Math.ceil(e.data.serial_num) ? appData.player[t].serial_num = t + Math.ceil(e.data.serial_num) : appData.player[t].serial_num = t + Math.ceil(e.data.serial_num) - appData.player.length;
            for (var t = 0; t < appData.player.length; t++) for (var a = 0; a < e.all_gamer_info.length; a++) appData.player[t].serial_num == e.all_gamer_info[a].serial_num && (appData.player[t].nickname = e.all_gamer_info[a].nickname, appData.player[t].headimgurl = e.all_gamer_info[a].headimgurl, appData.player[t].account_id = e.all_gamer_info[a].account_id, appData.player[t].account_score = Math.ceil(e.all_gamer_info[a].account_score), appData.player[t].account_status = Math.ceil(e.all_gamer_info[a].account_status), appData.player[t].online_status = Math.ceil(e.all_gamer_info[a].online_status), appData.player[t].ticket_checked = e.all_gamer_info[a].ticket_checked);
            appData.player[0].card = e.data.cards.concat(),
                appData.player[0].card_type = e.data.card_type
        },
        processAllGamerInfo: function(e) {
            console.log(appData.player);
            for (var t = 0; t < 6; t++) for (var a = 0; a < e.data.length; a++) appData.player[t].serial_num == e.data[a].serial_num && (appData.player[t].is_guest = 0, appData.player[t].nickname = e.data[a].nickname, appData.player[t].headimgurl = e.data[a].headimgurl, appData.player[t].account_id = e.data[a].account_id, appData.player[t].account_score = Math.ceil(e.data[a].account_score), appData.player[t].account_status = Math.ceil(e.data[a].account_status), appData.player[t].online_status = Math.ceil(e.data[a].online_status), appData.player[t].ticket_checked = e.data[a].ticket_checked);
            if (appData.player[0].account_status > 2 && setTimeout(function() {
                        appData.player[0].is_showCard = !0
                    },
                    500), "" != appData.scoreboard) {
                for (var t = 0; t < 6; t++) for (s in appData.scoreboard) appData.player[t].account_id == s && (appData.playerBoard.score[t].num = appData.player[t].num, appData.playerBoard.score[t].account_id = appData.player[t].account_id, appData.playerBoard.score[t].nickname = appData.player[t].nickname, appData.playerBoard.score[t].account_score = Math.ceil(appData.scoreboard[s]));
                2 == appData.game.status ? appData.playerBoard.round = appData.game.round - 1 : appData.playerBoard.round = appData.game.round
            }
            appData.player[0].account_status > 2 && setTimeout(function() {
                    appData.player[0].is_showCard = !0
                },
                500),
                console.log(appData.player)
        },
        processUpdateGamerInfo: function(e) {
            for (var t = 0; t < 6; t++) appData.player[t].serial_num == e.data.serial_num ? (appData.player[t].nickname = e.data.nickname, appData.player[t].headimgurl = e.data.headimgurl, appData.player[t].account_id = e.data.account_id, appData.player[t].account_score = Math.ceil(e.data.account_score), appData.player[t].account_status = Math.ceil(e.data.account_status), appData.player[t].online_status = Math.ceil(e.data.online_status), appData.player[t].ticket_checked = e.data.ticket_checked, appData.player[t].is_guest = 0) : appData.player[t].account_id == e.data.account_id && socketModule.sendRefreshRoom();
            for (var a = [], t = 0; t < appData.guests.length; t++) appData.guests[t].account_id != e.data.account_id && a.push(appData.guests[t]);
            appData.guests = a,
                checkIsWatch()
        },
        processUpdateAccountStatus: function(e) {
            for (var t = [], a = 0; a < appData.guests.length; a++) appData.guests[a].account_id != e.data.account_id && t.push(appData.guests[a]);
            appData.guests = t,
                checkIsWatch();
            for (var a = 0; a < 6; a++) appData.player[a].account_id == e.data.account_id && (appData.player[a].is_guest = 0, 1 == e.data.online_status ? (appData.player[a].account_status = Math.ceil(e.data.account_status), 0 != a ? 4 == appData.player[a].account_status ? m4aAudioPlay("audio3") : 5 == appData.player[a].account_status ? m4aAudioPlay("audio4") : 6 == appData.player[a].account_status && m4aAudioPlay("audio5") : appData.player[0].is_operation = !1) : 0 == e.data.online_status && 0 == appData.player[a].account_status ? (appData.player[a].account_id = 0, appData.player[a].account_status = 0, appData.player[a].playing_status = 0, appData.player[a].online_status = 0, appData.player[a].nickname = "", appData.player[a].headimgurl = "", appData.player[a].account_score = 0) : 0 == e.data.online_status && appData.player[a].account_status > 0 && (appData.player[a].account_status = Math.ceil(e.data.account_status), appData.player[a].online_status = 0))
        },
        processStartLimitTime: function(e) {
            e.data.limit_time > 1 && (appData.game.time = Math.ceil(e.data.limit_time), viewMethods.timeCountDown())
        },
        processCancelStartLimitTime: function(e) {
            appData.game.time = -1
        },
        processGameStart: function(e) {
            viewMethods.tableReset(0),
                appData.game.score = 0,
                appData.game.time = -1,
                appData.game.is_play = !0,
                appData.game.round = appData.game.round + 1,
                currentPlayerNum = -1;
            for (var t = 0; t < 6; t++) {
                appData.player[t].is_operation = !1,
                    appData.player[t].is_showCard = !1;
                for (var a = 0; a < e.data.length; a++) appData.player[t].account_id == e.data[a].account_id && (0 == appData.player[t].ticket_checked && 0 == t && 1 == appData.isAA && (2 == appData.ruleInfo.ticket_count ? appData.roomCard = appData.roomCard - 2 : appData.roomCard = appData.roomCard - 1), appData.player[t].ticket_checked = 1, appData.player[t].account_status = Math.ceil(e.data[a].account_status), appData.player[t].playing_status = Math.ceil(e.data[a].playing_status), appData.player[t].online_status = Math.ceil(e.data[a].online_status), appData.player[t].account_score = appData.player[t].account_score - appData.scoreList1[0], appData.player[t].limit_time = Math.ceil(e.data[a].limit_time), appData.player[t].playing_status > 1 && (currentPlayerNum = t), appData.ruleInfo.chip_type, appData.game.score = appData.game.score + appData.scoreList1[0], viewMethods.throwCoin(0))
            }
            appData.game.status = 2,
                viewMethods.reDeal(),
            currentPlayerNum >= 0 && viewMethods.playerTimeCountDown()
        },
        processNotyChooseChip: function(e) {
            if (appData.game.is_play = !0, currentPlayerNum = -1, 2 == appData.game.status) for (var t = 0; t < 6; t++) appData.player[t].playing_status = 1,
            appData.player[t].account_id == e.data.account_id && (appData.player[t].is_showCard = !0, appData.player[t].is_operation = !1, appData.player[t].playing_status = Math.ceil(e.data.playing_status), appData.player[t].limit_time = Math.ceil(e.data.limit_time), appData.game.can_open = e.data.can_open),
            appData.player[t].playing_status > 1 && (currentPlayerNum = t);
            appData.pkPeople = e.data.pk_user.concat(),
            currentPlayerNum >= 0 && viewMethods.playerTimeCountDown()
        },
        processCardInfo: function(e) {
            appData.player[0].card = e.data.cards.concat(),
                appData.player[0].card_type = e.data.card_type,
                viewMethods.cardOver(0),
                viewMethods.cardTest()
        },
        processPKCard: function(e) {
            for (var t = 0,
                     a = 0,
                     n = 0; n < 6; n++) appData.player[n].account_id == e.data.account_id && (appData.player[n].account_score = appData.player[n].account_score - Math.ceil(e.data.score), viewMethods.throwCoin(appData.player[n].num, e.data.score)),
            appData.player[n].account_id == e.data.loser_id && (appData.player[n].account_status = 7, appData.player[n].is_pk = !0, t = n),
            appData.player[n].account_id == e.data.winner_id && (appData.player[n].is_pk = !0, a = n);
            appData.game.score = appData.game.score + Math.ceil(e.data.score),
                viewMethods.playerPK(t, a)
        },
        processBroadcastVoice: function(e) {
            if (appData.player[0].account_id == userData.accountId) for (var t = 0; t < 6; t++) appData.player[t].account_id == e.data.account_id && 0 != t && (m4aAudioPlay("message" + e.data.voice_num), viewMethods.messageSay(t, e.data.voice_num));
            else for (var t = 0; t < 6; t++) appData.player[t].account_id == e.data.account_id && (m4aAudioPlay("message" + e.data.voice_num), viewMethods.messageSay(t, e.data.voice_num))
        },
        processCreateRoom: function(e) {
            window.location.href = globalData.baseUrl + "game/main?room_number=" + e.data.room_number + "&dealer_num=" + globalData.dealerNum
        },
        processUpdateAccountScore: function(e) {
            for (var t = 0; t < 6; t++) appData.player[t].account_id == e.data.account_id && (appData.player[t].account_score = appData.player[t].account_score - Math.ceil(e.data.score), 5 == appData.player[t].account_status ? appData.game.currentScore = 2 * Math.ceil(e.data.score) : appData.game.currentScore = Math.ceil(e.data.score), appData.game.score = appData.game.score + Math.ceil(e.data.score), appData.player[t].account_id == userData.accountId ? 0 != t && (viewMethods.throwCoin(appData.player[t].num, e.data.score), m4aAudioPlay(e.data.score + "f")) : (viewMethods.throwCoin(appData.player[t].num, e.data.score), m4aAudioPlay(e.data.score + "f")))
        },
        processOpenCard: function(e) {
            if (!appData.game.is_play) return 0;
            for (var t = 0; t < 6; t++) appData.player[t].account_id == e.data.account_id && (appData.player[t].account_score = appData.player[t].account_score - Math.ceil(e.data.score), appData.game.score = appData.game.score + Math.ceil(e.data.score), viewMethods.throwCoin(appData.player[t].num, e.data.score))
        },
        processWin: function(e) {
            appData.game.is_play = !1,
                appData.game.round = Math.ceil(e.data.game_num),
                appData.game.total_num = Math.ceil(e.data.total_num),
                appData.playerBoard.round = Math.ceil(e.data.game_num);
            for (var t = 0; t < 6; t++) {
                if (appData.player[t].playing_status = 1, 0 == e.data.card_type);
                else for (var a = 0; a < e.data.player_cards.length; a++) appData.player[t].account_id == e.data.player_cards[a].account_id && (appData.player[t].card = e.data.player_cards[a].cards.concat());
                for (a in e.data.winner_score_dict) appData.player[t].account_id == a && (appData.player[t].is_win = !0, appData.player[t].win_type = e.data.card_type, appData.player[t].current_win = e.data.winner_score_dict[a])
            }
            0 == e.data.card_type ? viewMethods.gameOver(e.data.winner_score_dict, e.data.balance_board, 1e3, 2e3, e.data.balance_scoreboard) : (viewMethods.cardOver(1), e.data.total_num == e.data.game_num ? viewMethods.gameOver(e.data.winner_score_dict, e.data.balance_board, 2500, 1e3, e.data.balance_scoreboard) : viewMethods.gameOver(e.data.winner_score_dict, e.data.balance_board, 2500, 2500, e.data.balance_scoreboard)),
            e.data.total_num == e.data.game_num && viewMethods.roundEnd()
        },
        processDiscard: function(e) {
            appData.player[0].account_status = 6
        },
        processLastScoreboard: function(e) {
            if (void 0 != e) {
                console.log(e);
                try {
                    var t = new Date(1e3 * parseInt(e.time)),
                        a = t.getFullYear() + "-",
                        n = t.getMonth() + 1 + "-",
                        r = t.getDate() + " ",
                        o = t.getHours(),
                        i = t.getMinutes(),
                        c = ":";
                    i < 10 && (c += 0);
                    var l = a + n + r + o + c + i;
                    appData.playerBoard.round = e.game_num,
                        appData.playerBoard.record = l,
                        appData.playerBoard.score = [],
                    void 0 != e.total_num && null != e.total_num && "" != e.total_num && (appData.game.total_num = e.total_num);
                    var u = e.scoreboard;
                    for (s in u) {
                        var p = 0;
                        userData.accountId == u[s].account_id && (p = 1),
                            appData.playerBoard.score.push({
                                account_id: u[s].account_id,
                                nickname: Base64.decode(u[s].name),
                                account_score: Math.ceil(u[s].score),
                                num: p,
                                commission: Math.ceil(u[s].commission)
                            })
                    }
                    chooseBigWinner(),
                        $(".ranking .rankBack").css("opacity", "1"),
                        $(".roundEndShow").show(),
                        $(".ranking").show(),
                        canvas(),
                        $("#endCreateRoomBtn").show()
                } catch(e) {
                    console.log(e)
                }
            }
        },
        processGuestRoom: function(e) {
            appData.game.room = e.data.room_id,
                appData.game.room_url = e.data.room_url,
                appData.game.currentScore = Math.ceil(e.data.benchmark),
                appData.game.score = Math.ceil(e.data.pool_score),
                appData.game.round = Math.ceil(e.data.game_num),
                appData.game.total_num = Math.ceil(e.data.total_num),
                appData.game.status = Math.ceil(e.data.room_status),
            2 == appData.game.status && (appData.game.cardDeal = 3, 4 == appData.player[0].account_status && viewMethods.cardOver(0)),
                appData.scoreboard = e.data.scoreboard,
                viewMethods.clickCloseAlert(),
                appData.showGuest = 0
        },
        processAllGuestInfo: function(e) {
            if (console.log(e), appData.guests = [], e.data) for (var t = 0; t < e.data.length; t++) {
                appData.guests.push({
                    account_id: e.data[t].account_id,
                    account_status: e.data[t].account_status,
                    avatar: e.data[t].headimgurl,
                    nickname: e.data[t].nickname
                });
                for (var a = 0; a < appData.player.length; a++) appData.player[a].account_id == e.data[t].account_id && (appData.player[a].is_guest = 1, appData.player[a].account_status < 1 && (appData.player[a].account_id = 0))
            }
            checkIsWatch(),
                console.log(appData.player)
        },
        processUpdateGuestInfo: function(e) {
            for (var t = 0,
                     a = 0; a < appData.guests.length; a++) appData.guests[a].account_id == e.data.account_id && (t = 1);
            0 == t && appData.guests.push({
                account_id: e.data.account_id,
                account_status: e.data.account_status,
                avatar: e.data.headimgurl,
                nickname: e.data.nickname
            });
            for (var n = 0; n < appData.player.length; n++) appData.player[n].account_id == e.data.account_id && (appData.player[n].is_guest = 1, appData.player[n].account_status < 1 && (appData.player[n].account_id = 0));
            checkIsWatch()
        }
    },
    viewMethods = {
        clickHome: function() {
            window.location.href = globalData.mhUrl
        },
        clickCreateRoom: function() {
            appData.createInfo.type = 1,
                appData.createInfo.isShow = !0
        },
        clickShowInvite: function() {
            appData.isShowInvite = !0
        },
        clickCloseInvite: function() {
            appData.isShowInvite = !1
        },
        clickShowAlert: function(e, t) {
            appData.alertType = e,
                appData.alertText = t,
                appData.isShowAlert = !0,
                setTimeout(function() {
                        var t = $(".alertText").height(),
                            a = t;
                        t < .15 * height && (t = .15 * height),
                        t > .8 * height && (t = .8 * height);
                        var n = t + .056 * height * 2 + .022 * height + .056 * height;
                        8 == e && (n = n - .022 * height - .056 * height);
                        var r = t + .034 * height * 2,
                            o = .022 * height + (r - a) / 2;
                        4 == appData.alertType ? ($(".alert .mainPart").css("height", n + "px"), $(".alert .mainPart").css("margin-top", "-" + n / 2 + "px"), $(".alert .mainPart .alertText").css("top", o + "px")) : $(".alert1 .mainPart").css("margin-top", "-" + n / 2 + "px")
                    },
                    0)
        },
        clickCloseAlert: function() {
            1 == appData.alertType ? (viewMethods.clickShowShop(), appData.is_connect || (reconnectSocket(), appData.is_connect = !0)) : 22 == appData.alertType ? (appData.isShowAlert = !1, httpModule.getActivityInfo()) : appData.isShowAlert = !1
        },
        clickShowShop: function() {
            0 != appData.isShop && (appData.select = 1, appData.ticket_count = 20, $(".shop .shopBody").animate({
                height: 1.541 * appData.width + "px"
            }), appData.isShowShop = !0)
        },
        clickHideShop: function() {
            $(".shop .shopBody").animate({
                    height: 0
                },
                function() {
                    appData.isShowShop = !1
                })
        },
        clickSitDown: function() {
            appData.isShowAlert = !1,
                socketModule.sendJoinRoom()
        },
        clickGetCards: function() {
            httpModule.getCards()
        },
        clickReady: function() {
            if (appData.player[0].is_operation || 1 != appData.game.status) return 0;
            socketModule.sendReadyStart(),
                appData.player[0].is_operation = !0
        },
        reDeal: function() {
            m4aAudioPlay("audio1"),
                appData.game.cardDeal = 1,
                setTimeout(function() {
                        appData.game.cardDeal = 2,
                            setTimeout(function() {
                                    appData.game.cardDeal = 3,
                                        setTimeout(function() {
                                                appData.player[0].is_showCard = !0
                                            },
                                            400)
                                },
                                250)
                    },
                    250)
        },
        cardOver: function(e) {
            0 == e ? ($(".myCards .card0").velocity({
                    left: 0
                },
                {
                    duration: 450
                }), $(".myCards .card1").velocity({
                    left: 0
                },
                {
                    duration: 450
                }), $(".myCards .card2").velocity({
                    left: 0
                },
                {
                    duration: 450,
                    complete: function() {
                        $(".myCards .cards").addClass("card-flipped"),
                            $(".myCards .card0").velocity({
                                    left: "0"
                                },
                                {
                                    duration: 550
                                }),
                            $(".myCards .card1").velocity({
                                    left: "50%"
                                },
                                {
                                    duration: 550
                                }),
                            $(".myCards .card2").velocity({
                                    left: "100%"
                                },
                                {
                                    duration: 550
                                })
                    }
                })) : (appData.game.cardDeal = -1, $(".cardOver .card0").velocity({
                    left: 0
                },
                {
                    duration: 250
                }), $(".cardOver .card1").velocity({
                    left: 0
                },
                {
                    duration: 250
                }), $(".cardOver .card2").velocity({
                    left: 0
                },
                {
                    duration: 250,
                    complete: function() {
                        $(".cardOver .cards").addClass("card-flipped"),
                            $(".cardOver .card0").velocity({
                                    left: "0"
                                },
                                {
                                    duration: 500
                                }),
                            $(".cardOver .card1").velocity({
                                    left: "25%"
                                },
                                {
                                    duration: 500
                                }),
                            $(".cardOver .card2").velocity({
                                    left: "50%"
                                },
                                {
                                    duration: 500
                                })
                    }
                }), 5 == appData.player[0].account_status && (appData.player[0].account_status = 4, viewMethods.cardOver(0)))
        },
        cardTest: function() {
            4 == appData.player[0].account_status && 0 == appData.player[0].card.length && socketModule.sendRefreshRoom()
        },
        gameOver: function(e, t, a, n, r) {
            for (var o = 0; o < 6; o++) for (s in t) appData.player[o].account_id == s && (appData.player[o].account_score = Math.ceil(t[s]));
            if (appData.playerBoard.score = [], void 0 != r && r.length >= 1) for (s in r) {
                var i = 0;
                userData.accountId == r[s].account_id && (i = 1),
                    appData.playerBoard.score.push({
                        account_id: r[s].account_id,
                        nickname: r[s].name,
                        account_score: Math.ceil(r[s].score),
                        num: i,
                        commission: Math.ceil(r[s].commission)
                    })
            }
            setTimeout(function() {
                    for (var e = 0,
                             a = 0; a < appData.player.length; a++) appData.player[a].is_win && (appData.player[a].win_show = !0, 0 == a && mp3AudioPlay("win"), 0 == e && (e = 1, numD = appData.player[a].num, setTimeout(function() {
                            viewMethods.selectCoin(numD, t)
                        },
                        1500)));
                    var r = new Date,
                        o = "";
                    o += r.getFullYear() + "-",
                        o += r.getMonth() + 1 + "-",
                        o += r.getDate() + "  ",
                        o += r.getHours() + ":",
                        r.getMinutes() >= 10 ? o += r.getMinutes() : o += "0" + r.getMinutes(),
                        appData.playerBoard.record = o,
                        setTimeout(function() {
                                viewMethods.tableReset(1)
                            },
                            n)
                },
                a)
        },
        showMessage: function() {
            appData.player[0].account_id == userData.accountId && (appData.isShowMessage = !0, disable_scroll(), setTimeout(function() {
                    appData.bScroll ? appData.bScroll.refresh() : appData.bScroll = new BScroll(document.getElementById("message-box"), {
                        startX: 0,
                        startY: 0,
                        scrollY: !0,
                        scrollX: !1,
                        click: !0
                    })
                },
                10))
        },
        hideMessage: function() {
            appData.isShowMessage = !1,
                enable_scroll()
        },
        messageOn: function(e) {
            socketModule.sendBroadcastVoice(e),
                m4aAudioPlay("message" + e),
                viewMethods.messageSay(0, e),
                viewMethods.hideMessage()
        },
        messageSay: function(e, t) {
            appData.player[e].messageOn = !0,
                appData.player[e].messageText = appData.message[t].text,
                setTimeout(function() {
                        appData.player[e].messageOn = !1
                    },
                    2500)
        },
        closeEnd: function() {
            $(".ranking .rankBack").css("opacity", "0.7"),
                $(".end").hide(),
                $(".roundEndShow").hide(),
                $(".ranking").hide(),
                reload()
        },
        selectCard: function(e, t) {
            appData.select = e,
                appData.ticket_count = t
        },
        shopBuy: function() {
            if (appData.select > 0) {
                appData.isShowShopLoading = !0;
                var e = appData.select;
                httpModule.buyCard(e)
            }
        },
        roundEnd: function() {
            for (var e = 0; e < appData.player.length; e++) 0 == appData.player[e].online_status && (appData.player[e].account_id = 0, appData.player[e].playing_status = 0, appData.player[e].online_status = 0, appData.player[e].nickname = "", appData.player[e].headimgurl = "", appData.player[e].account_score = 0),
                appData.player[e].ticket_checked = 0;
            chooseBigWinner(),
                $(".ranking .rankBack").css("opacity", "1"),
                $(".roundEndShow").show(),
                setTimeout(function() {
                        $(".ranking").show(),
                            canvas()
                    },
                    3500)
        },
        timeCountDown: function() {
            if (1 != isTimeLimitShow) return appData.game.time <= 0 ? (isTimeLimitShow = !1, 0) : (isTimeLimitShow = !0, appData.game.time--, timeLimit = setTimeout(function() {
                    isTimeLimitShow = !1,
                        viewMethods.timeCountDown()
                },
                1e3), void 0)
        },
        playerTimeCountDown: function() {
            if (1 != isPlayerTimeLimitShow) return appData.player[currentPlayerNum].limit_time <= 0 || currentPlayerNum < 0 ? (isPlayerTimeLimitShow = !1, 0) : (isPlayerTimeLimitShow = !0, appData.player[currentPlayerNum].limit_time--, setTimeout(function() {
                    isPlayerTimeLimitShow = !1,
                        viewMethods.playerTimeCountDown()
                },
                1e3), void 0)
        },
        tableReset: function(e) {
            for (var t = 0; t < 6; t++) appData.player[t].account_status > 1 && 1 == e && (appData.player[t].account_status = 1),
                appData.player[t].playing_status = 0,
                appData.player[t].is_win = !1,
                appData.player[t].is_operation = !1,
                appData.player[t].win_type = 0,
                appData.player[t].win_show = !1,
                appData.player[t].card = [],
                appData.player[t].card_type = 0,
                appData.player[t].is_showCard = !1,
                appData.player[t].is_readyPK = !1,
                appData.player[t].is_pk = !1;
            appData.game.can_open = 0,
                appData.game.score = 0,
                appData.game.cardDeal = 0,
                appData.game.currentScore = 0,
                appData.game.status = 1,
                $(".cards").removeClass("card-flipped"),
                $(".scoresArea").empty()
        },
        throwCoin: function(e, t) {
            if (0 == e) return $(".scoresArea").append("<div class='coin coinType" + appData.scoreList1[0] + "' style='top:" + (30 * perW - 28) * Math.random() + "px;left:" + (30 * perW - 28) * Math.random() + "px;' ></div>"),
                0;
            $(".scoresArea").append("<div class='coin coin" + e + " coinType" + t + "' ></div>"),
                $(".coin" + e).velocity({
                        top: (30 * perW - 28) * Math.random(),
                        left: (30 * perW - 28) * Math.random()
                    },
                    {
                        duration: 300,
                        complete: function() {
                            $(".coin").removeClass("coin" + e)
                        }
                    })
        },
        selectCoin: function(e, t) {
            var a = 0,
                n = 0;
            1 == e ? (a = 280, n = 40) : 2 == e ? (a = 70, n = 160) : 3 == e ? (a = -20, n = 160) : 4 == e ? (a = -60, n = 40) : 5 == e ? (a = -20, n = -80) : 6 == e && (a = 70, n = -80),
                $(".coin").velocity({
                        top: a,
                        left: n
                    },
                    {
                        duration: 600,
                        complete: function() {
                            $(".scoresArea").empty()
                        }
                    })
        },
        playerPK: function(e, t) {
            $(".pk1").css("left", "-60%"),
                $(".pk2").css("right", "-60%"),
                $(".playerPK .quitBack").hide(),
                $(".playerPK .background").attr("src", globalData.imageUrl + "files/" + fileDealerNum + "/images/game/comB.png"),
                appData.turn = 0 == e ? t < 3 ? 0 : 1 : t < e ? 0 : 1,
                logMessage(e, t),
                0 == appData.turn ? (appData.pk1.nickname = appData.player[e].nickname, appData.pk1.headimgurl = appData.player[e].headimgurl, appData.pk1.account_score = appData.player[e].account_score, appData.pk1.account_status = appData.player[e].account_status, appData.pk2.nickname = appData.player[t].nickname, appData.pk2.headimgurl = appData.player[t].headimgurl, appData.pk2.account_score = appData.player[t].account_score, appData.pk2.account_status = appData.player[t].account_status) : (appData.pk1.nickname = appData.player[t].nickname, appData.pk1.headimgurl = appData.player[t].headimgurl, appData.pk1.account_score = appData.player[t].account_score, appData.pk1.account_status = appData.player[t].account_status, appData.pk2.nickname = appData.player[e].nickname, appData.pk2.headimgurl = appData.player[e].headimgurl, appData.pk2.account_score = appData.player[e].account_score, appData.pk2.account_status = appData.player[e].account_status),
                appData.pk.round = 2,
                setTimeout(function() {
                        m4aAudioPlay("com"),
                            $(".pk1").velocity({
                                    left: 0
                                },
                                {
                                    duration: 500
                                }),
                            $(".pk2").velocity({
                                    right: 0
                                },
                                {
                                    duration: 500,
                                    complete: function() {
                                        appData.pk.round = 3,
                                            setTimeout(function() {
                                                    appData.pk.round = 4,
                                                        7 == appData.pk1.account_status ? ($(".pk1 .quitBack").fadeIn(), $(".pk1 .background").attr("src", globalData.imageUrl + "files/" + fileDealerNum + "/images/game/player.png")) : $(".pk1 .background").attr("src", globalData.imageUrl + "files/" + fileDealerNum + "/images/game/playerWin.png"),
                                                        7 == appData.pk2.account_status ? ($(".pk2 .quitBack").fadeIn(), $(".pk2 .background").attr("src", globalData.imageUrl + "files/" + fileDealerNum + "/images/game/player.png")) : $(".pk2 .background").attr("src", globalData.imageUrl + "files/" + fileDealerNum + "/images/game/playerWin.png"),
                                                        setTimeout(function() {
                                                                appData.pk.round = 0;
                                                                for (var e = 0; e < appData.player.length; e++) appData.player[e].is_pk = !1
                                                            },
                                                            2e3)
                                                },
                                                800)
                                    }
                                })
                    },
                    0)
        },
        choose: function(e, t) {
            if (appData.player[0].is_operation) return 0;
            if (1 == e) socketModule.sendClickToLook(),
                m4aAudioPlay("audio3");
            else if (2 == e) socketModule.sendChooseChip(t),
                m4aAudioPlay(t + "f"),
                viewMethods.throwCoin(1, t),
                appData.player[0].is_operation = !0;
            else if (3 == e) socketModule.sendDiscard(),
                m4aAudioPlay("audio5"),
                appData.player[0].is_operation = !0;
            else if (4 == e) {
                for (var a = 0,
                         n = 0; n < appData.player.length; n++) 4 != appData.player[n].account_status && 5 != appData.player[n].account_status || a++;
                if (2 == a) socketModule.sendOpenCard(),
                    m4aAudioPlay("audio2"),
                    appData.player[0].is_operation = !0;
                else {
                    for (var n = 0; n < appData.player.length; n++) {
                        appData.player[n].is_readyPK = !1;
                        for (var r = 0; r < appData.pkPeople.length; r++) appData.player[n].account_id == appData.pkPeople[r] && (appData.player[n].is_readyPK = !0)
                    }
                    appData.pk.round = 1
                }
            } else 5 == e && (socketModule.sendPkCard(t), appData.player[0].is_operation = !0)
        },
        quitPk: function() {
            appData.pk.round = 0
        }
    },
    fileDealerNum = "d_30",
    width = window.innerWidth,
    height = window.innerHeight,
    numD = 0,
    isTimeLimitShow = !1,
    isPlayerTimeLimitShow = !1,
    currentPlayerNum = 0,
    createInfo = {
        type: 0,
        isShow: !1,
        isShowRule: !1,
        chip_type: 1,
        ticket_count: 1,
        disable_pk_100: 0,
        disable_pk_men: 0,
        upper_limit: 0,
        rule_height: 60
    },
    ruleInfo = {
        type: 0,
        isShow: !1,
        isShowRule: !1,
        chip_type: 1,
        ticket_count: 1,
        disable_pk_100: 0,
        disable_pk_men: 0,
        upper_limit: 0,
        rule_height: 60,
        balance_req: 0
    },
    editAudioInfo = {
        isShow: !1,
        backMusic: 1,
        messageMusic: 1
    },
    audioInfo = {
        backMusic: 1,
        messageMusic: 1
    };
localStorage.backMusic ? (editAudioInfo.backMusic = localStorage.backMusic, audioInfo.backMusic = localStorage.backMusic) : localStorage.backMusic = 1,
    localStorage.messageMusic ? (editAudioInfo.messageMusic = localStorage.messageMusic, audioInfo.messageMusic = localStorage.messageMusic) : localStorage.messageMusic = 1;
var scoreList1 = [4, 8, 16, 20],
    scoreList2 = [2, 4, 8, 10];
globalData.org_name = Base64.decode(globalData.org_name);
var appData = {
    isPlayer: 0,
    isWatch: 0,
    globalData: globalData,
    userData: userData,
    guests: [],
    showGuest: 0,
    canJoin: 1,
    canGuest: 1,
    joinType: 0,
    roomer: {
        name: Base64.decode(globalData.roomer.name),
        account_code: globalData.roomer.account_code
    },
    ranking: globalData.ranking,
    isGetDogRP: 0,
    isShowDogRP: 0,
    canGetDogRP: 1,
    dogRPText: "",
    isNewNoty: globalData.isNewNoty,
    historyInfo: historyInfo,
    user_id: userData.id,
    dealerName: globalData.dealerName,
    belong_name: Base64.decode(globalData.belong_name),
    roomStatus: globalData.roomStatus,
    isAA: !1,
    isAutoActive: !1,
    isShop: globalData.isShop,
    scoreList1: scoreList1,
    scoreList2: scoreList2,
    createInfo: createInfo,
    width: window.innerWidth,
    height: window.innerHeight,
    roomCard: Math.ceil(globalData.card),
    is_connect: !1,
    player: [],
    scoreboard: "",
    activity: [],
    isShowInvite: !1,
    isShowAlert: !1,
    isShowShop: !1,
    isShowMessage: !1,
    isShowShopLoading: !1,
    alertType: 0,
    alertText: "",
    base_score: 0,
    playerBoard: {
        score: [],
        round: 0,
        record: ""
    },
    game: game,
    roomCardInfo: [],
    wsocket: ws,
    connectOrNot: !0,
    socketStatus: 0,
    heartbeat: null,
    select: 1,
    ticket_count: 0,
    isDealing: !1,
    message: message,
    pkPeople: [],
    turn: 0,
    pk: {
        turn: 0,
        round: 0
    },
    pk1: {
        nickname: "",
        headimgurl: "",
        account_score: 0,
        account_status: 0
    },
    pk2: {
        nickname: "",
        headimgurl: "",
        account_score: 0,
        account_status: 0
    },
    isShowRecord: !1,
    recordList: [],
    ruleInfo: ruleInfo,
    editAudioInfo: editAudioInfo,
    audioInfo: audioInfo,
    isAuthPhone: userData.isAuthPhone,
    authCardCount: userData.authCardCount,
    phone: userData.phone,
    sPhone: "",
    sAuthcode: "",
    authcodeType: 1,
    authcodeText: "发送验证码",
    authcodeTime: 60,
    phoneType: 1,
    phoneText: "绑定手机",
    isReconnect: !0,
    bScroll: null,
    isShowNoty: !1,
    notyMsg: "",
    gameInfo: gameInfo,
    isShowNoteImg: !1
};
if (void 0 != globalData.isNotyMsg && null != globalData.isNotyMsg ? (appData.notyMsg = Base64.decode(globalData.notyMsg), 1 == globalData.isNotyMsg && (appData.isShowNoty = !0, setTimeout(function() {
            appData.isShowNoty = !1
        },
        1e3 * globalData.notyTime))) : globalData.isNotyMsg = 0, void 0 != globalData.isAlertMsg && null != globalData.isAlertMsg) {
    if (1 == globalData.isAlertMsg) {
        var content = Base64.decode(globalData.alertMsg);
        viewMethods.clickShowAlert(41, content)
    }
} else globalData.isAlertMsg = 0;
var resetState = function() {
        appData.player = [],
            appData.playerBoard = {
                score: [],
                round: 0,
                record: ""
            };
        for (var e = 0; e < 6; e++) appData.player.push({
            num: e + 1,
            serial_num: e + 1,
            account_id: 0,
            account_status: 0,
            playing_status: 0,
            online_status: 0,
            nickname: "",
            headimgurl: "",
            account_score: 0,
            ticket_checked: 0,
            is_win: !1,
            win_type: 0,
            limit_time: 0,
            current_win: 0,
            is_operation: !1,
            win_show: !1,
            card: [],
            is_showCard: !1,
            is_pk: !1,
            is_readyPK: !1,
            card_type: 0,
            messageOn: !1,
            messageText: "我们来血拼吧",
            is_guest: 0
        }),
            appData.playerBoard.score.push({
                account_id: 0,
                nickname: "",
                account_score: 0,
                isBigWinner: 0
            });
        1 != globalData.isAlertMsg && 1 != appData.isAuthPhone && httpModule.getActivityInfo()
    },
    newGame = function() {
        appData.playerBoard = {
            score: [],
            round: 0,
            record: ""
        },
            appData.game.round = 0,
            appData.game.status = 1,
            appData.game.score = 0,
            appData.game.currentScore = 0,
            appData.game.cardDeal = 0,
            appData.game.can_open = 0,
            appData.game.is_play = !1;
        for (var e = 0; e < appData.player.length; e++) appData.playerBoard.score.push({
            account_id: 0,
            nickname: "",
            account_score: 0,
            isBigWinner: 0
        }),
            1 == appData.player[e].online_status ? (appData.player[e].account_status = 0, appData.player[e].playing_status = 0, appData.player[e].is_win = !1, appData.player[e].is_operation = !1, appData.player[e].win_type = 0, appData.player[e].win_show = !1, appData.player[e].card = [], appData.player[e].card_type = 0, appData.player[e].ticket_checked = 0, appData.player[e].account_score = 0, appData.player[e].current_win = 0, appData.player[e].is_showCard = !1, appData.player[e].is_readyPK = !1, appData.player[e].is_pk = !1) : appData.player[e] = {
                num: e + 1,
                serial_num: appData.player[e].serial_num,
                account_id: 0,
                account_status: 0,
                playing_status: 0,
                online_status: 0,
                nickname: "",
                headimgurl: "",
                account_score: 0,
                is_win: !1,
                win_type: 0,
                ticket_checked: 0,
                limit_time: 0,
                current_win: 0,
                is_operation: !1,
                win_show: !1,
                card: [],
                is_showCard: !1,
                is_pk: !1,
                is_readyPK: !1,
                card_type: 0,
                is_guest: 0
            }
    },
    connectSocket = function(e, t, a, n, r) {
        ws = new WebSocket(e),
            ws.onopen = t,
            ws.onmessage = a,
            ws.onclose = n,
            ws.onerror = r
    },
    wsOpenCallback = function(e) {
        logMessage("websocket is opened"),
            appData.connectOrNot = !0,
        appData.heartbeat && clearInterval(appData.heartbeat),
            appData.heartbeat = setInterval(function() {
                    appData.socketStatus = appData.socketStatus + 1,
                    appData.socketStatus > 2 && (appData.connectOrNot = !1),
                    appData.socketStatus > 3 && appData.isReconnect && reload(),
                    ws.readyState == WebSocket.OPEN && ws.send("@")
                },
                3e3),
            socketModule.sendPrepareJoinRoom()
    },
    wsMessageCallback = function wsMessageCallback(evt) {
        if (appData.connectOrNot = !0, "@" == evt.data) return appData.socketStatus = 0,
            0;
        var obj = eval("(" + evt.data + ")");
        if ( - 201 == obj.result) viewMethods.clickShowAlert(31, obj.result_message);
        else if ( - 202 == obj.result) appData.isReconnect = !1,
            socketModule.closeSocket(),
            viewMethods.clickShowAlert(32, obj.result_message);
        else if ( - 203 == obj.result) methods.reloadView();
        else {
            if (204 == obj.result) return void socketModule.sendPrepareJoinRoom();
            if (205 == obj.result) return void viewMethods.clickShowAlert(66, "欢乐豆不足.");
            if (206 == obj.result) return void viewMethods.clickShowAlert(66, "您不是此公会成员.")
        }
        0 != obj.result ? (obj.operation == wsOperation.JoinRoom ? 1 == obj.result ? 1 == obj.data.alert_type ? viewMethods.clickShowAlert(1, obj.result_message) : 2 == obj.data.alert_type ? viewMethods.clickShowAlert(2, obj.result_message) : 3 == obj.data.alert_type ? viewMethods.clickShowAlert(11, obj.result_message) : viewMethods.clickShowAlert(7, obj.result_message) : (obj.result, viewMethods.clickShowAlert(7, obj.result_message)) : obj.operation == wsOperation.ReadyStart ? 1 == obj.result ? viewMethods.clickShowAlert(1, obj.result_message) : viewMethods.clickShowAlert(7, obj.result_message) : obj.operation == wsOperation.PrepareJoinRoom ? (obj.result > 0 && socketModule.processGameRule(obj), 1 == obj.result ? 1 == obj.data.alert_type ? viewMethods.clickShowAlert(1, obj.result_message) : 2 == obj.data.alert_type ? viewMethods.clickShowAlert(2, obj.result_message) : 3 == obj.data.alert_type ? viewMethods.clickShowAlert(11, obj.result_message) : viewMethods.clickShowAlert(7, obj.result_message) : (obj.result, viewMethods.clickShowAlert(7, obj.result_message))) : obj.operation == wsOperation.ActiveRoom ? 1 == obj.result ? viewMethods.clickShowAlert(1, obj.result_message) : socketModule.sendPrepareJoinRoom() : obj.operation == wsOperation.CreateRoom ? -1 == obj.result ? reload() : 1 == obj.result && viewMethods.clickShowAlert(1, obj.result_message) : obj.operation == wsOperation.RefreshRoom && reload(), appData.player[0].is_operation = !1) : obj.operation == wsOperation.PrepareJoinRoom ? socketModule.processPrepareJoinRoom(obj) : obj.operation == wsOperation.GameHistory ? socketModule.processGameHistory(obj) : obj.operation == wsOperation.JoinRoom ? socketModule.processJoinRoom(obj) : obj.operation == wsOperation.ActiveRoom ? socketModule.processActiveRoom(obj) : obj.operation == wsOperation.RefreshRoom ? socketModule.processRefreshRoom(obj) : obj.operation == wsOperation.AllGamerInfo ? socketModule.processAllGamerInfo(obj) : obj.operation == wsOperation.UpdateGamerInfo ? socketModule.processUpdateGamerInfo(obj) : obj.operation == wsOperation.UpdateAccountStatus ? socketModule.processUpdateAccountStatus(obj) : obj.operation == wsOperation.UpdateAccountShow ? socketModule.processUpdateAccountShow(obj) : obj.operation == wsOperation.UpdateAccountMultiples ? socketModule.processUpdateAccountMultiples(obj) : obj.operation == wsOperation.StartLimitTime ? socketModule.processStartLimitTime(obj) : obj.operation == wsOperation.CancelStartLimitTime ? socketModule.processCancelStartLimitTime(obj) : obj.operation == wsOperation.GameStart ? socketModule.processGameStart(obj) : obj.operation == wsOperation.NotyChooseChip ? socketModule.processNotyChooseChip(obj) : obj.operation == wsOperation.UpdateAccountScore ? socketModule.processUpdateAccountScore(obj) : obj.operation == wsOperation.OpenCard ? socketModule.processOpenCard(obj) : obj.operation == wsOperation.Win ? socketModule.processWin(obj) : obj.operation == wsOperation.Discard ? socketModule.processDiscard(obj) : obj.operation == wsOperation.BroadcastVoice ? socketModule.processBroadcastVoice(obj) : obj.operation == wsOperation.CreateRoom ? socketModule.processCreateRoom(obj) : obj.operation == wsOperation.StartBet ? socketModule.processStartBet(obj) : obj.operation == wsOperation.StartShow ? socketModule.processStartShow(obj) : obj.operation == wsOperation.PkCard ? socketModule.processPKCard(obj) : obj.operation == wsOperation.CardInfo ? socketModule.processCardInfo(obj) : obj.operation == wsOperation.GuestRoom ? socketModule.processGuestRoom(obj) : obj.operation == wsOperation.AllGuestInfo ? socketModule.processAllGuestInfo(obj) : obj.operation == wsOperation.UpdateGuestInfo ? socketModule.processUpdateGuestInfo(obj) : logMessage(obj.operation)
    },
    wsCloseCallback = function(e) {
        logMessage("websocket closed："),
            logMessage(e),
            appData.connectOrNot = !1,
            reconnectSocket()
    },
    wsErrorCallback = function(e) {
        logMessage("websocket onerror："),
            logMessage(e),
            appData.connectOrNot = !1
    },
    cCount = 0,
    reconnectSocket = function() {
        if (appData.isReconnect && 4 != globalData.roomStatus) {
            if (ws) {
                if (logMessage(ws.readyState), 1 == ws.readyState) return;
                ws = null
            }
            logMessage("reconnectSocket"),
                connectSocket(globalData.socket, wsOpenCallback, wsMessageCallback, wsCloseCallback, wsErrorCallback)
        }
    },
    m4aAudioPlay = function(e) {
        if (!audioModule.audioOn) return 0;
        audioModule.playSound(e)
    },
    mp3AudioPlay = function(e) {
        if (!audioModule.audioOn) return 0;
        audioModule.playSound(e)
    },
    audioModule = {
        audioOn: !1,
        audioContext: null,
        audioBuffers: [],
        baseUrl: "",
        initModule: function(e) {
            this.baseUrl = e,
                this.audioBuffers = [],
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext,
                this.audioContext = new window.AudioContext
        },
        stopSound: function(e) {
            var t = this.audioBuffers[e];
            t && t.source && (t.source.stop(0), t.source = null)
        },
        playSound: function(e, t) {
            if ("backMusic" == e) {
                if (0 == audioInfo.backMusic) return
            } else if (0 == audioInfo.messageMusic) return;
            var a = this.audioBuffers[e];
            if (a) try {
                void 0 != WeixinJSBridge && WeixinJSBridge.invoke("getNetworkType", {},
                    function(e) {
                        a.source = null,
                            a.source = audioModule.audioContext.createBufferSource(),
                            a.source.buffer = a.buffer,
                            a.source.loop = !1;
                        var n = audioModule.audioContext.createGain();
                        1 == t ? (a.source.loop = !0, n.gain.value = .7) : n.gain.value = 1,
                            a.source.connect(n),
                            n.connect(audioModule.audioContext.destination),
                            a.source.start(0)
                    })
            } catch(e) {
                logMessage(e),
                    a.source.start(0)
            }
        },
        initSound: function(e, t) {
            this.audioContext.decodeAudioData(e,
                function(e) {
                    audioModule.audioBuffers[t] = {
                        name: t,
                        buffer: e,
                        source: null
                    },
                    "backMusic" == t && (audioModule.audioOn = !0, audioModule.playSound(t, !0))
                },
                function(e) {
                    logMessage("Error decoding file", e)
                })
        },
        loadAudioFile: function(e, t) {
            var a = new XMLHttpRequest;
            a.open("GET", e, !0),
                a.responseType = "arraybuffer",
                a.onload = function(e) {
                    audioModule.initSound(a.response, t)
                },
                a.send()
        },
        loadAllAudioFile: function() {
            if (4 != globalData.roomStatus && 1 != isLoadAudioFile) {
                isLoadAudioFile = !0,
                    this.loadAudioFile(this.baseUrl + "files/" + fileDealerNum + "/audio/back.mp3", "backMusic");
                for (var e = ["50f.m4a", "100f.m4a", "200f.m4a", "5f.m4a", "40f.m4a", "2f.m4a", "4f.m4a", "8f.m4a", "16f.m4a", "10f.m4a", "20f.m4a", "audio1.m4a", "audio2.m4a", "audio3.m4a", "audio4.m4a", "audio5.m4a", "com.m4a", "lose.mp3", "win.mp3"], t = ["50f", "100f", "200f", "5f", "40f", "2f", "4f", "8f", "16f", "10f", "20f", "audio1", "audio2", "audio3", "audio4", "audio5", "com", "lose", "win"], a = 0; a < e.length; a++) this.loadAudioFile(this.baseUrl + "files/" + fileDealerNum + "/audio/" + e[a], t[a]);
                for (var n = ["message13.m4a", "message14.m4a", "message15.m4a", "message11.m4a", "message1.m4a", "message2.m4a", "message3.m4a", "message4.m4a", "message5.m4a", "message6.m4a", "message7.m4a", "message8.m4a"], r = ["message0", "message1", "message2", "message3", "message4", "message5", "message6", "message7", "message8", "message9", "message10", "message11"], a = 0; a < n.length; a++) this.loadAudioFile(this.baseUrl + "files/" + fileDealerNum + "/audio/" + n[a], r[a])
            }
        }
    };
audioModule.initModule(globalData.fileUrl);
var initView = function() {
        httpModule.checkPacket(),
            $("#app-main").width(appData.width),
            $("#app-main").height(appData.height),
            $("#table").width(appData.width),
            $("#table").height(appData.height),
            $(".ranking").css("width", 2 * appData.width),
            $(".ranking").css("height", 2 * appData.width * 1.621),
            window.onload = function() {
                for (var e = ["table", "vinvite", "valert", "vmessage", "vshop", "vcreateRoom", "vroomRule", "endCreateRoom", "endCreateRoomBtn"], t = e.length, a = 0; a < t; a++) {
                    var n = document.getElementById(e[a]);
                    n && n.addEventListener("touchmove",
                        function(e) {
                            e.preventDefault()
                        },
                        !1)
                }
                var r = (.195 * window.innerHeight - 28 - 89) / 2 + 26;
                r = r / window.innerHeight * 100,
                    $(".member4").css("top", r + "%")
            }
    },
    methods = {
        hideDogRP: function() {
            1 == appData.isGetDogRP && (appData.isShowDogRP = 0)
        },
        getDogRP: function() {
            $("#imgOpenRP").addClass("transf"),
            1 == appData.canGetDogRP && (httpModule.getSFRP(), appData.canGetDogRP = 0, setTimeout(function() {
                    appData.canGetDogRP = 1,
                        $(".imgOpenRP").removeClass("transf")
                },
                5e3))
        },
        showShop: viewMethods.clickShowShop,
        hideShop: viewMethods.clickHideShop,
        shopBuy: viewMethods.shopBuy,
        showInvite: viewMethods.clickShowInvite,
        showAlert: viewMethods.clickShowAlert,
        showMessage: viewMethods.showMessage,
        closeInvite: viewMethods.clickCloseInvite,
        closeAlert: viewMethods.clickCloseAlert,
        createRoom: viewMethods.clickCreateRoom,
        sitDown: viewMethods.clickSitDown,
        getCards: viewMethods.clickGetCards,
        seeMyCard4: viewMethods.seeMyCard4,
        seeMyCard5: viewMethods.seeMyCard5,
        imReady: viewMethods.clickReady,
        robBanker: viewMethods.clickRobBanker,
        showCard: viewMethods.clickShowCard,
        selectTimesCoin: viewMethods.clickSelectTimesCoin,
        hideMessage: viewMethods.hideMessage,
        closeEnd: viewMethods.closeEnd,
        messageOn: viewMethods.messageOn,
        home: viewMethods.clickHome,
        notRobBanker: viewMethods.clickNotRobBanker,
        selectCard: viewMethods.selectCard,
        quitPk: viewMethods.quitPk,
        choose: viewMethods.choose,
        cancelCreate: function() {
            appData.createInfo.isShow = !1
        },
        createCommit: function() {
            1 == appData.createInfo.type ? socketModule.sendCreateRoom() : 2 == appData.createInfo.type && socketModule.sendActiveRoom(),
                appData.createInfo.isShow = !1
        },
        selectChange: function(e, t) {
            1 == e ? appData.createInfo.chip_type = t: 2 == e ? 1 == t ? 0 == appData.createInfo.disable_pk_100 ? appData.createInfo.disable_pk_100 = 1 : appData.createInfo.disable_pk_100 = 0 : 2 == t && (0 == appData.createInfo.disable_pk_men ? appData.createInfo.disable_pk_men = 1 : appData.createInfo.disable_pk_men = 0) : 3 == e ? appData.createInfo.ticket_count = t: 4 == e && (appData.createInfo.upper_limit = t)
        },
        showGameRule: function() {
            4 != appData.roomStatus && (appData.ruleInfo.isShowRule = !0)
        },
        cancelGameRule: function() {
            appData.ruleInfo.isShowRule = !1
        },
        showGameHistory: function() {
            socketModule.sendGameHistory()
        },
        closeRecord: function() {
            appData.isShowRecord = !1
        },
        showAudioSetting: function() {
            appData.editAudioInfo.backMusic = appData.audioInfo.backMusic,
                appData.editAudioInfo.messageMusic = appData.audioInfo.messageMusic,
                appData.editAudioInfo.isShow = !0
        },
        cancelAudioSetting: function() {
            appData.editAudioInfo.isShow = !1
        },
        confirmAudioSetting: function() {
            appData.editAudioInfo.isShow = !1,
                appData.audioInfo.backMusic = appData.editAudioInfo.backMusic,
                appData.audioInfo.messageMusic = appData.editAudioInfo.messageMusic,
                localStorage.backMusic = appData.editAudioInfo.backMusic,
                localStorage.messageMusic = appData.editAudioInfo.messageMusic,
                1 == appData.audioInfo.backMusic ? (audioModule.stopSound("backMusic"), audioModule.playSound("backMusic", !0)) : audioModule.stopSound("backMusic")
        },
        setBackMusic: function() {
            0 == appData.editAudioInfo.backMusic ? appData.editAudioInfo.backMusic = 1 : appData.editAudioInfo.backMusic = 0
        },
        setMessageMusic: function() {
            0 == appData.editAudioInfo.messageMusic ? appData.editAudioInfo.messageMusic = 1 : appData.editAudioInfo.messageMusic = 0
        },
        bindPhone: function() {
            var e = checkPhone(appData.sPhone),
                t = checkAuthcode(appData.sAuthcode);
            return 0 == e ? void viewMethods.clickShowAlert(21, "手机号码有误，请重填") : 0 == t ? void viewMethods.clickShowAlert(21, "验证码有误，请重填") : void httpModule.bindPhone(appData.sPhone, appData.sAuthcode)
        },
        getAuthcode: function() {
            if (1 == appData.authcodeType) {
                if ("rgb(64, 112, 251)" == $("#authcode").css("background-color")) {
                    if (0 == checkPhone(appData.sPhone)) return void viewMethods.clickShowAlert(21, "手机号码有误，请重填");
                    httpModule.getAuthcode(appData.sPhone)
                }
            }
        },
        phoneChangeValue: function() {
            checkPhone(appData.sPhone) ? $("#authcode").css("background-color", "rgb(64,112,251)") : $("#authcode").css("background-color", "lightgray")
        },
        finishBindPhone: function() {
            reload()
        },
        reloadView: function() {
            reload()
        },
        confirmMessage: function() {
            appData.isShowAlert = !1,
                httpModule.callbackMessage(),
            1 != appData.isAuthPhone && httpModule.getActivityInfo()
        },
        personInfo: function() {
            window.location.href = globalData.hpUrl
        },
        showNoteImg: function() {
            appData.isShowNoteImg = !0
        },
        hideNoteImg: function() {
            appData.isShowNoteImg = !1
        },
        guestRoom: function() {
            checkIsPlayer(),
                socketModule.sendGuestRoom()
        },
        hideGuests: function() {
            appData.showGuest = 0
        },
        showGuests: function() {
            appData.canJoin = 0,
                appData.canGuest = 0;
            for (var e = 0; e < appData.player.length; e++) if (appData.player[e].account_id == userData.accountId) {
                appData.canGuest = 1;
                break
            }
            for (var e = 0; e < appData.guests.length; e++) if (appData.guests[e].account_id == userData.accountId) {
                appData.canJoin = 1;
                break
            }
            appData.player[0].account_status >= 2 && (appData.canGuest = 0),
                appData.showGuest = 1
        }
    },
    authcodeTimer = function e() {
        if (appData.authcodeTime <= 0) return appData.authcodeText = "发送验证码",
            appData.authcodeTime = 60,
            void(appData.authcodeType = 1);
        appData.authcodeTime = appData.authcodeTime - 1,
            appData.authcodeText = appData.authcodeTime + "s",
            setTimeout(function() {
                    e()
                },
                1e3)
    },
    vueLife = {
        vmCreated: function() {
            logMessage("vmCreated"),
                resetState(),
                initView(),
            4 != globalData.roomStatus && $("#loading").hide(),
                $(".main").show()
        },
        vmUpdated: function() {
            logMessage("vmUpdated")
        },
        vmMounted: function() {
            logMessage("vmMounted"),
                $("#marquee").marquee({
                    duration: globalData.notySpeed,
                    gap: 50,
                    delayBeforeStart: 0,
                    direction: "left",
                    duplicated: !0
                })
        },
        vmDestroyed: function() {
            logMessage("vmDestroyed")
        }
    },
    vm = new Vue({
        el: "#app-main",
        data: appData,
        methods: methods,
        created: vueLife.vmCreated,
        updated: vueLife.vmUpdated,
        mounted: vueLife.vmMounted,
        destroyed: vueLife.vmDestroyed
    });
$(function() {
    function e() {
        document[t] ? (audioModule.audioOn = !1, audioModule.stopSound("backMusic")) : "true" !== sessionStorage.isPaused && (audioModule.audioOn = !0, audioModule.stopSound("backMusic"), audioModule.playSound("backMusic", !0))
    }
    $(".showRanking").click(function() {
        $(".Ranking").show()
    }),
        $(".hideRanking").click(function() {
            $(".Ranking").hide()
        }),
        sessionStorage.isPaused = "false";
    var t, a;
    void 0 !== document.hidden ? (t = "hidden", a = "visibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", a = "webkitvisibilitychange"),
        void 0 === document.addEventListener || void 0 === t ? alert("This demo requires a browser such as Google Chrome that supports the Page Visibility API.") : document.addEventListener(a, e, !1)
});
var wsctop = 0,
    shareContent = "";
try {
    1 == testBoard && (globalData.scoreboard = {
        time: 1498291270,
        game_num: 10,
        scoreboard: {
            1 : {
                account_id: 1,
                name: "SmFyZWs=",
                score: 500,
                commission: 100
            },
            2 : {
                account_id: 2,
                name: "SmFyZWs=",
                score: -100,
                commission: 100
            },
            3 : {
                account_id: 3,
                name: "SmFyZWs=",
                score: -100,
                commission: 100
            },
            4 : {
                account_id: 4,
                name: "SmFyZWs=",
                score: -100,
                commission: 100
            },
            5 : {
                account_id: 5,
                name: "SmFyZWs=",
                score: -100,
                commission: 100
            },
            6 : {
                account_id: 6,
                name: "SmFyZWs=",
                score: -100,
                commission: 100
            }
        }
    },
        setTimeout(function() {
                try {
                    var e = globalData.scoreboard;
                    setTimeout(function() {
                            socketModule.processLastScoreboard(e)
                        },
                        0)
                } catch(e) {
                    console.log(e),
                        setTimeout(function() {
                                socketModule.processLastScoreboard("")
                            },
                            0)
                }
            },
            50))
} catch(e) {
    console.log(e)
}
4 == globalData.roomStatus && setTimeout(function() {
        try {
            var obj = eval("(" + globalData.scoreboard + ")");
            setTimeout(function() {
                    socketModule.processLastScoreboard(obj)
                },
                0)
        } catch(e) {
            console.log(e),
                setTimeout(function() {
                        socketModule.processLastScoreboard("")
                    },
                    0)
        }
    },
    50);
var wxModule = {
    config: function() {
        wx.config({
            debug: !1,
            appId: configData.appId,
            timestamp: configData.timestamp,
            nonceStr: configData.nonceStr,
            signature: configData.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"]
        }),
            getShareContent(),
            wx.onMenuShareTimeline({
                title: globalData.shareTitle,
                desc: shareContent,
                link: globalData.roomUrl,
                imgUrl: globalData.imageUrl + "files/" + fileDealerNum + "/images/game/home.jpg",
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareAppMessage({
                title: globalData.shareTitle,
                desc: shareContent,
                link: globalData.roomUrl,
                imgUrl: globalData.imageUrl + "files/" + fileDealerNum + "/images/game/home.jpg",
                success: function() {},
                cancel: function() {}
            })
    }
};
wx.config({
    debug: !1,
    appId: configData.appId,
    timestamp: configData.timestamp,
    nonceStr: configData.nonceStr,
    signature: configData.signature,
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"]
});
var isLoadAudioFile = !1;
wx.ready(function() {
    audioModule.loadAllAudioFile(),
        wx.hideMenuItems({
            menuList: ["menuItem:copyUrl", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:refresh"]
        }),
        getShareContent(),
        wx.onMenuShareTimeline({
            title: globalData.shareTitle,
            desc: shareContent,
            link: globalData.roomUrl,
            imgUrl: globalData.imageUrl + "files/" + fileDealerNum + "/images/game/home.jpg",
            success: function() {},
            cancel: function() {}
        }),
        wx.onMenuShareAppMessage({
            title: globalData.shareTitle,
            desc: shareContent,
            link: globalData.roomUrl,
            imgUrl: globalData.imageUrl + "files/" + fileDealerNum + "/images/game/home.jpg",
            success: function() {},
            cancel: function() {}
        })
}),
    wx.error(function(e) {});