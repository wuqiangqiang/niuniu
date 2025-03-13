require = function e(i, t, a) {
    function n(o, s) {
        if (!t[o]) {
            if (!i[o]) {
                var r = "function" == typeof require && require;
                if (!s && r) return r(o, !0);
                if (c) return c(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND",
                    l
            }
            var m = t[o] = {
                exports: {}
            };
            i[o][0].call(m.exports,
                function(e) {
                    var t = i[o][1][e];
                    return n(t || e)
                },
                m, m.exports, e, i, t, a)
        }
        return t[o].exports
    }
    for (var c = "function" == typeof require && require,
             o = 0; o < a.length; o++) n(a[o]);
    return n
} ({
        AnimInAndOut: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "909aaJTe1RGdr6cduOidBnE", "AnimInAndOut"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    onEnable: function() {
                        this.node.opacity = 0,
                            this.node.setScale(0);
                        var e = cc.fadeIn(.2),
                            i = cc.scaleTo(.2, 1);
                        this.node.runAction(cc.spawn(e, i))
                    },
                    animateAndDestroy: function() {
                        var e = this;
                        if (!this.isDestroying) {
                            this.isDestroying = !0;
                            var i = cc.fadeOut(.2),
                                t = cc.scaleTo(.2, 0),
                                a = cc.callFunc(function() {
                                    e.node && e.node.destroy()
                                });
                            this.node.runAction(cc.sequence(cc.spawn(i, t), a))
                        }
                    },
                    animateAndDisable: function() {
                        var e = this;
                        if (!this.isDestroying) {
                            this.isDestroying = !0;
                            var i = cc.fadeOut(.2),
                                t = cc.scaleTo(.2, 0),
                                a = cc.callFunc(function() {
                                    e.node.active = !1
                                });
                            this.node.runAction(cc.sequence(cc.spawn(i, t), a))
                        }
                    }
                }),
                cc._RF.pop()
        },
            {}],
        Base64: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "47742zihF9B2rVo9pctDMBk", "Base64"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    statics: {
                        decode: function(e) {
                            var i = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
                                t = e.length,
                                a = 0;
                            "=" == e.charAt(t - 1) && ("=" == e.charAt(t - 2) ? (a = 4, e = e.substring(0, t - 2)) : (a = 2, e = e.substring(0, t - 1)));
                            for (var n = [], c = 0, o = e.length; c < o; ++c) for (var s = e.charAt(c), r = 0, l = i.length; r < l; ++r) if (s == i[r]) {
                                var m = this._toBinary(r),
                                    d = m.length;
                                if (6 - d > 0) for (var u = 6 - d; u > 0; --u) m.unshift(0);
                                n = n.concat(m);
                                break
                            }
                            a > 0 && (n = n.slice(0, n.length - a));
                            for (var h = [], g = [], c = 0, o = n.length; c < o;) if (0 == n[c]) h = h.concat(this._toDecimal(n.slice(c, c + 8))),
                                c += 8;
                            else {
                                for (var p = 0; c < o && 1 == n[c];)++p,
                                    ++c;
                                for (g = g.concat(n.slice(c + 1, c + 8 - p)), c += 8 - p; p > 1;) g = g.concat(n.slice(c + 2, c + 8)),
                                    c += 8,
                                    --p;
                                h = h.concat(this._toDecimal(g)),
                                    g = []
                            }
                            return h
                        },
                        _toBinary: function(e) {
                            for (var i = new Array; e > 0;) {
                                var t = e % 2;
                                e = Math.floor(e / 2),
                                    i.push(t)
                            }
                            return i.reverse(),
                                i
                        },
                        _toDecimal: function(e) {
                            for (var i = 0,
                                     t = 0,
                                     a = e.length - 1; a >= 0; --a) 1 == e[a] && (i += Math.pow(2, t)),
                                ++t;
                            return i
                        }
                    },
                    onLoad: function() {}
                }),
                cc._RF.pop()
        },
            {}],
        BeiMiCommon: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "184a4qpxlNOTpkQeEM8enbz", "BeiMiCommon"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    ready: function() {
                        var e = !1;
                        return cc.beimi ? e = !0 : this.scene("login", this),
                            e
                    },
                    disconnect: function() {
                        null != cc.beimi.socket && (cc.beimi.socket.disconnect(), cc.beimi.socket = null)
                    },
                    getCommon: function(e) {
                        return cc.find("Canvas/script/" + e).getComponent(e)
                    },
                    loadding: function() {
                        cc.beimi.loadding.size() > 0 && (this.loaddingdialog = cc.beimi.loadding.get(), cc.director.getScene().getChildByName("Canvas").addChild(this.loaddingdialog, 20), this.loaddingdialog.setPosition(cc.p(0, 0)), this._animCtrl = this.loaddingdialog.getComponent(cc.Animation), this._animCtrl.play("loadding").wrapMode = cc.WrapMode.Loop)
                    },
                    alert: function(e) {
                        if (cc.beimi.dialog.size() > 0) {
                            this.alertdialog = cc.beimi.dialog.get(),
                                cc.director.getScene().getChildByName("Canvas").addChild(this.alertdialog, 20),
                                this.alertdialog.setPosition(cc.p(0, 0));
                            var i = this.alertdialog.getChildByName("message");
                            null != i && i.getComponent(cc.Label) && (i.getComponent(cc.Label).string = e)
                        }
                    },
                    alert0: function(e) {
                        if (cc.beimi.dialog0.size() > 0) {
                            this.alertdialog0 = cc.beimi.dialog0.get(),
                                cc.director.getScene().getChildByName("Canvas").addChild(this.alertdialog0, 20),
                                this.alertdialog0.setPosition(cc.p(0, 0));
                            var i = this.alertdialog0.getChildByName("message");
                            null != i && i.getComponent(cc.Label) && (i.getComponent(cc.Label).string = e)
                        }
                    },
                    alert2: function(e) {
                        if (cc.beimi.dialog2.size() > 0) {
                            this.alertdialog2 = cc.beimi.dialog2.get(),
                                cc.director.getScene().getChildByName("Canvas").addChild(this.alertdialog2, 20),
                                this.alertdialog2.setPosition(cc.p(0, 0));
                            var i = this.alertdialog2.getChildByName("message");
                            null != i && i.getComponent(cc.Label) && (i.getComponent(cc.Label).string = e)
                        }
                    },
                    joinroom: function(e) {
                        if (cc.beimi.joinroom.size() > 0) {
                            this.alertjoinroom = cc.beimi.joinroom.get(),
                                this.alertjoinroom.parent = cc.find("Canvas");
                            var i = this.alertjoinroom.getChildByName("message");
                            null != i && i.getComponent(cc.Label) && (i.getComponent(cc.Label).string = e)
                        }
                    },
                    reconnect: function() {
                        cc.beimi.Reconnect.size() > 0 && (this.Reconnect = cc.beimi.Reconnect.get(), cc.director.getScene().getChildByName("Canvas").addChild(this.Reconnect, 20), this.Reconnect.setPosition(cc.p(0, 0)))
                    },
                    closeReconnect: function() {
                        cc.beimi.Reconnect.put(cc.find("Canvas/Reconnect"))
                    },
                    line: function() {
                        cc.beimi.line.size() > 0 && (this.alertline = cc.beimi.line.get(), this.alertline.parent = cc.find("Canvas"), cc.director.getScene().getChildByName("Canvas").addChild(this.alertline, 20), this.alertline.setPosition(cc.p(0, 0)))
                    },
                    closeline: function() {
                        cc.beimi.line.put(cc.find("Canvas/line"))
                    },
                    closeloadding: function() {
                        cc.beimi.loadding.put(cc.find("Canvas/loadding"))
                    },
                    closealert: function() {
                        cc.beimi.dialog.put(cc.find("Canvas/alert"))
                    },
                    scene: function(e, i) {
                        cc.director.preloadScene(e,
                            function() {
                                cc.beimi && i.closeloadding(i.loaddingdialog),
                                    cc.director.loadScene(e)
                            })
                    },
                    root: function() {
                        return cc.find("Canvas")
                    },
                    decode: function(i) {
                        var t = new Array;
                        if (cc.sys.isNative) {
                            var a = e("Base64").decode(i);
                            if (a && a.length > 0) for (c = 0; c < a.length; c++) t[c] = a[c]
                        } else for (var n = new DataView(i), c = 0; c < i.byteLength; c++) t[c] = n.getInt8(c);
                        return t
                    },
                    parse: function(e) {
                        return cc.sys.isNative ? JSON.parse(e) : e
                    },
                    reset: function(e, i) {
                        cc.beimi.token = e.data.token,
                            cc.beimi.http.authorization = e.data.token,
                            cc.beimi.userId = e.data.userId,
                            cc.beimi.name = e.data.name,
                            cc.beimi.photo = e.data.photo,
                            cc.beimi.card = e.data.card,
                            cc.beimi.sex = e.data.sex,
                            cc.beimi.isopenfriend = e.data.groupId,
                            cc.beimi.hasPhone = e.data.phone,
                            this.io.put("userinfo", i),
                            this.io.put("userId", cc.beimi.userId),
                            this.io.put("token", cc.beimi.token),
                            this.io.put("name", cc.beimi.name),
                            this.io.put("photo", cc.beimi.photo),
                            this.io.put("card", cc.beimi.card)
                    },
                    logout: function() {
                        null != cc.beimi.dialog && (cc.beimi.dialog.destroy(), cc.beimi.dialog = null),
                            cc.beimi.authorization = null,
                            cc.beimi.user = null,
                            cc.beimi.games = null,
                            cc.beimi.playway = null,
                            this.disconnect()
                    },
                    map: function(e, i) {
                        this.routes[e] = i ||
                            function() {}
                    },
                    route: function(e) {
                        return this.routes[e] ||
                            function() {}
                    }
                }),
                cc._RF.pop()
        },
            {
                Base64: "Base64"
            }],
        BeiMiDialog: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "226a7CVs+dO1YSGIfLo1zNO", "BeiMiDialog");
            var a = e("BeiMiCommon");
            cc.Class({
                extends: a,
                properties: {},
                onLoad: function() {
                    this.node.on(cc.Node.EventType.TOUCH_START,
                        function(e) {
                            e.stopPropagation()
                        })
                },
                onClose: function() {
                    var e = cc.find("Canvas/alert");
                    cc.beimi.dialog.put(e)
                },
                onClose2: function() {
                    var e = cc.find("Canvas/alert2");
                    cc.beimi.dialog2.put(e);
                    var i = cc.beimi.beiMiCommon;
                    i.loadding(),
                        i.scene("hall", i)
                },
                onClose0: function() {
                    var e = cc.find("Canvas/alert0");
                    cc.beimi.dialog0.put(e),
                        location.reload()
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon"
            }],
        EnterRoom: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "24817gvusRABZXNtVqNkxZZ", "EnterRoom");
            e("socket");
            cc.Class({
                extends: cc.Component,
                properties: {
                    EditBox_num: {
                        default:
                            null,
                        type: cc.EditBox
                    }
                },
                onLoad: function() {},
                onClick_EnterRoom: function(i, t) {
                    if (t) var a = t;
                    else {
                        if ((a = this.EditBox_num.getComponent(cc.EditBox).string.replace(/(^\s*)|(\s*$)/g, "")).length <= 0) return;
                        this.node.destroy()
                    }
                    cc.beimi.iscreare = 2;
                    var n = {
                            roomId: a
                        },
                        c = e("EnterRoom");
                    cc.beimi.beiMiCommon.loadding();
                    cc.beimi.http.httpPost("/checkRoom", n, c.prototype.sucess, c.prototype.error, c)
                },
                sucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon,
                        a = JSON.parse(e);
                    if (cc.log("checkRoom:data:" + JSON.stringify(a)), null != a && 200 == a.code) {
                        cc.beimi.roomId = a.data.roomId,
                            cc.beimi.http.gameurl = a.data.gameURL;
                        var n = a.data.roomRule.roomType;
                        cc.beimi.roomType = n,
                            1 == n || 606 == n ? t.scene("sixgame", t) : 2 == n || 610 == n || 708 == n ? t.scene("game", t) : 510 == n && t.scene("game_fish", t)
                    } else if (null != a && 300 == a.code) cc.beimi.roomId = a.data.roomId,
                        cc.beimi.rangking = a.data.playerOrder,
                        cc.beimi.rules = a.data.roomRule,
                        cc.beimi.ranktime = a.data.cTime,
                        cc.beimi.currentGameNum = a.data.currentGameNum,
                        t.scene("end", t);
                    else if (null != a && 1019 == a.code) {
                        t.closeloadding(t.loaddingdialog);
                        var c = a.data.applyStatus,
                            o = a.data.name,
                            s = a.data.photo,
                            r = a.data.groupId;
                        cc.beimi.alert_groupApply.size() > 0 && (i.alert_groupApplydialog = cc.beimi.alert_groupApply.get(), i.alert_groupApplydialog.parent = cc.find("Canvas"), i.alert_groupApplydialog.getComponent("groupApply").init(o, s, r, c))
                    } else t.closeloadding(t.loaddingdialog),
                        t.alert(a.msg)
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                onClose: function() {
                    this.node.destroy()
                }
            }),
                cc._RF.pop()
        },
            {
                EnterRoom: "EnterRoom",
                socket: "socket"
            }],
        EventStop: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "5f977jbdp5GObmTP1fX2T72", "EventStop"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {
                        this.node.on(cc.Node.EventType.TOUCH_START,
                            function(e) {
                                e.stopPropagation()
                            })
                    }
                }),
                cc._RF.pop()
        },
            {}],
        Game: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "862449EiINET42lIGDeCmel", "Game");
            e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {
                    var i = "hidden" in document ? "hidden": "webkitHidden" in document ? "webkitHidden": "mozHidden" in document ? "mozHidden": null,
                        t = i.replace(/hidden/i, "visibilitychange");
                    document.addEventListener(t,
                        function() {
                            document[i] ? (console.log("页面非激活：" + cc.director.getScene()), a.isback = !0, a.timeout = 15e3, a.reset().start()) : (a.isback = !1, a.timeout = 100, a.reset().start(), console.log("页面激活"))
                        });
                    var a = {
                        timeout: 15e4,
                        timeout2: 100,
                        isback: !1,
                        timeoutObj: null,
                        serverTimeoutObj: null,
                        reset: function() {
                            return clearTimeout(this.timeoutObj),
                                clearTimeout(this.serverTimeoutObj),
                                this
                        },
                        start: function() {
                            var i = this;
                            this.timeoutObj = setTimeout(function() {
                                    i.serverTimeoutObj = setTimeout(function() {
                                            if (console.log("3秒了：" + i.isback), i.isback) {
                                                var t = cc.director.getScene().name;
                                                "game" != t && "game_fish" != t && "sixgame" != t || (cc.beimi.isclose = !0, cc.beimi.socket.close(), e("BeiMiCommon").prototype.reconnect())
                                            }
                                        },
                                        i.timeout2)
                                },
                                this.timeout)
                        }
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                audioPlayer: "audioPlayer"
            }],
        HTTP: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "f2edbYICRlK17UBjhJWWkDb", "HTTP"),
                cc.VERSION = 2017061001;
            var a = cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {
                    sharecontent: {
                        title: "",
                        link: "",
                        imgUrl: "",
                        desc: ""
                    },
                    mainurl: "",
                    baseurl: "http://192.168.1.10:84/niuniu",
                    wsurl: "http://192.168.1.4:9081/niuniu",
                    gameurl: "192.168.1.10:8888",
                    authorization: null,
                    httpGet: function(e, i, t, n) {
                        var c = cc.loader.getXMLHttpRequest();
                        c.onreadystatechange = function() {
                            if (4 === c.readyState) if (c.status >= 200 && c.status < 300) {
                                var e = c.responseText;
                                i && i(e, n)
                            } else t && t(n)
                        },
                            c.open("GET", a.baseurl + e, !0),
                        null != a.authorization && c.setRequestHeader("authorization", a.authorization),
                        cc.sys.isNative && c.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                            c.timeout = 3e3,
                            c.send()
                    },
                    encodeFormData: function(e) {
                        var i = [],
                            t = /%20/g;
                        for (var a in e) {
                            var n = e[a].toString(),
                                c = encodeURIComponent(a).replace(t, "+") + "=" + encodeURIComponent(n).replace(t, "+");
                            i.push(c)
                        }
                        return i.join("&")
                    },
                    httpPost: function(e, i, t, n, c) {
                        var o = cc.loader.getXMLHttpRequest();
                        o.onreadystatechange = function() {
                            if (4 === o.readyState) if (o.status >= 200 && o.status < 300) {
                                var e = o.responseText;
                                t && t(e, c)
                            } else n && n(c)
                        },
                            o.open("POST", a.baseurl + e, !0),
                        null !== a.authorization && o.setRequestHeader("Authorization", a.authorization),
                        cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                            o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            o.timeout = 5e3,
                            o.send(a.encodeFormData(i))
                    }
                },
                onLoad: function() {}
            });
            cc._RF.pop()
        },
            {}],
        Hall: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "d61eeark6pBNIsEYG+MWOM/", "Hall");
            e("audioPlayer"),
                e("socket");
            cc.Class({
                extends: cc.Component,
                properties: {
                    CreateRoom_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    EnterRoom_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    }
                },
                onLoad: function() {},
                onClickCreateRoom: function(e, i) {
                    cc.beimi.mroomType = i,
                        cc.beimi.CreateRoom = new cc.NodePool,
                        cc.beimi.CreateRoom.put(cc.instantiate(this.CreateRoom_Prefab)),
                        cc.beimi.CreateRoom.get().parent = cc.find("Canvas")
                },
                onClickEnterRoom: function() {
                    cc.beimi.EnterRoom = new cc.NodePool,
                        cc.beimi.EnterRoom.put(cc.instantiate(this.EnterRoom_Prefab)),
                        cc.beimi.EnterRoom.get().parent = cc.find("Canvas")
                },
                onClick_room: function() {
                    var e = Toast.makeText("敬请期待...", Toast.LENGTH_SHORT);
                    e.setGravity(Toast.CENTER, 0, 0),
                        e.show()
                },
                onClick_sendCard: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("sendCard", e)
                },
                onClick_manage: function() {
                    cc.beimi.manage.size() > 0 && (this.managedialog = cc.beimi.manage.get(), this.managedialog.parent = cc.find("Canvas"))
                }
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer",
                socket: "socket"
            }],
        IOUtils: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "6d9b7x7vIdIHJzucVu0UA9E", "IOUtils");
            var a = e("pako.min");
            cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {
                    joinRoomId: "569224",
                    get: function(e) {
                        return cc.sys.localStorage.getItem(e)
                    },
                    put: function(e, i) {
                        cc.sys.localStorage.setItem(e, i)
                    },
                    remove: function(e) {
                        cc.sys.localStorage.removeItem(e)
                    },
                    heartCheck: {
                        timeout: 18e3,
                        timeout2: 5e3,
                        timeoutObj: null,
                        serverTimeoutObj: null,
                        reset: function() {
                            return clearTimeout(this.timeoutObj),
                                clearTimeout(this.serverTimeoutObj),
                                this
                        },
                        start: function() {
                            var i = this;
                            this.timeoutObj = setTimeout(function() {
                                    var t = e("socket"),
                                        a = {};
                                    a.cmd = 11,
                                        cc.beimi.isclose ? cc.log("关闭了socket：-------") : (i.reconnect(), cc.log("心跳 -------"), t.prototype.sendData(a,
                                            function(e, t) {
                                                i.reset().start(),
                                                    cc.log("清理 " + i.serverTimeoutObj)
                                            }), cc.log("清理2 " + i.serverTimeoutObj))
                                },
                                this.timeout)
                        },
                        reconnect: function() {
                            var i = this;
                            i.serverTimeoutObj = setTimeout(function() {
                                    cc.beimi.socket.close(),
                                        e("BeiMiCommon").prototype.reconnect(),
                                        cc.log("掉线重连-------")
                                },
                                i.timeout2)
                        }
                    },
                    weinxinfen: function(i, t, a, n) {
                        if (document.title = a, window.weixinConfig) c = window.weixinConfig.imgUrl;
                        else var c = "http://192.168.1.10:84/niuniu/assets/img/douniu72.jpg";
                        if (cc.beimi.http = e("HTTP"), cc.beimi.http.sharecontent.title = a, cc.beimi.http.sharecontent.link = cc.beimi.http.baseurl + "/niuniu/index?joinType=1&roomId=" + t + "&roomType=" + i, cc.beimi.http.sharecontent.imgUrl = c, cc.beimi.http.sharecontent.desc = n, cc.log("微信分享房间shareContent:" + JSON.stringify(cc.beimi.http.sharecontent)), cc.beimi.istest);
                        else if (!window.wxConfig) {
                            var a = "",
                                o = cc.beimi.http.mainurl + "joinType=1&roomId=" + t;
                            window.history.replaceState(null, null, o),
                                cc.log("微信分享房间mainUrl:" + o)
                        }
                    },
                    loadmyinti: function() {
                        if (!cc.beimi.userId) {
                            cc.beimi.iscreare = 2,
                                cc.beimi.roomId = window.joinRoomId;
                            cc.director.getWinSize().width,
                                cc.director.getScene().getChildByName("Canvas").width = cc.director.getWinSize().width,
                                cc.director.getScene().getChildByName("Canvas").height = cc.director.getWinSize().height;
                            var i = window.gameUserInfo;
                            window.baseURL && (cc.beimi.http.baseurl = window.baseURL),
                            window.gameURL && (cc.beimi.http.gameurl = window.gameURL),
                                cc.log("gameUserInfo:" + i);
                            var t = e("common");
                            if (i) {
                                var a = window.weixinConfig;
                                t.prototype.weixinConfig(a);
                                var n = {};
                                n.data = i,
                                    t.prototype.reset(n, i)
                            } else t.prototype.login();
                            e("init").prototype.initMgr()
                        }
                    },
                    utfarraytostr: function(e) {
                        for (var i, t, n, c, o = new Uint8Array(e), s = a.ungzip(o), r = "", l = 0, m = s.length; l < m;)(i = s[l++]) >> 4 <= 7 ? r += String.fromCharCode(i) : i >> 4 == 12 || i >> 4 == 13 ? (t = s[l++], r += String.fromCharCode((31 & i) << 6 | 63 & t)) : i >> 4 == 14 && (t = s[l++], n = s[l++], c = (15 & i) << 12 | (63 & t) << 6, r += String.fromCharCode(c | (63 & n) << 0));
                        return r
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                HTTP: "HTTP",
                common: "common",
                init: "init",
                "pako.min": "pako.min",
                socket: "socket"
            }],
        NewScript: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "c4958zxiBdOf6v3cFbpdt6s", "NewScript");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    cocos: cc.Sprite,
                    show: cc.Sprite,
                    cocosImage: cc.Sprite,
                    psp: {
                        type: cc.Node,
                        default:
                            null
                    },
                    bbg: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    newCard: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    a: 0
                },
                onLoad: function() {
                    a.prototype.formatdate(148323661e4)
                },
                shot: function() {
                    cc.renderer.enableDirtyRegion(!1);
                    cc.renderer.isDirtyRegionEnabled()
                },
                captureScreen: function() {
                    var e = 0,
                        i = this.psp,
                        t = this.node,
                        a = this.newCard;
                    clearTimeout(this.serverTimeoutObj),
                        this.schedule(function() {
                                var n = cc.instantiate(a);
                                t.addChild(n),
                                    n.setPosition(0, 0);
                                var c, o = n.width; (c = cc.moveTo(.3, i.x + 80 + e * o + 5 * e, i.y - 5)).easing(cc.easeOut(3)),
                                    n.runAction(c),
                                    e++,
                                    cc.log(e)
                            },
                            .2, 4, .01)
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        Reconnect: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "98c98IfidxHHaEwITBkQQsS", "Reconnect"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        roomid: {
                            default:
                                null,
                            type: cc.Label
                        }
                    },
                    onLoad: function() {
                        this.roomid.string = cc.beimi.roomId + "房间号"
                    },
                    onClick_home: function() {
                        var i = e("BeiMiCommon");
                        i.prototype.closeReconnect(),
                            cc.beimi.isclose = !0,
                            cc.beimi.socket.close(),
                            (i = cc.beimi.beiMiCommon).loadding(),
                            i.scene("hall", i)
                    },
                    onClick_intoGame: function() {
                        var i = e("BeiMiCommon");
                        e("socket");
                        i.prototype.closeReconnect();
                        var t = cc.beimi.roomType;
                        1 == t || 606 == t ? ((i = cc.beimi.beiMiCommon).loadding(), i.scene("sixgame", i)) : 2 == t || 610 == t || 708 == t ? ((i = cc.beimi.beiMiCommon).loadding(), i.scene("game", i)) : 510 == t && ((i = cc.beimi.beiMiCommon).loadding(), i.scene("game_fish", i))
                    }
                }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                socket: "socket"
            }],
        SettingItem: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "57f07AcQHlPOJSJGq7J3H7v", "SettingItem"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        typeName: "yinXiao",
                        openNode: cc.Node,
                        closeNode: cc.Node,
                        maskNode: cc.Node,
                        handleNode: cc.Node
                    },
                    onLoad: function() {
                        var e = cc.sys.localStorage.getItem(this.typeName);
                        this.setValue(e, !0)
                    },
                    setValue: function(e, i) {
                        this.value = e,
                            this.maskNode.width = 280 * e,
                            e <= 0 ? (this.closeNode.active = !0, this.openNode.active = !1) : (this.closeNode.active = !1, this.openNode.active = !0),
                        i && (this.handleNode.x = 280 * e - 140),
                            this.valueSet = !0
                    },
                    onClickOpenNodeToClose: function() {
                        this.setValue(0, !0)
                    },
                    onClickCloseNodeToOpen: function() {
                        this.setValue(1, !0)
                    },
                    update: function(e) {
                        if (null != this.value && null != this.valueSet) {
                            this.handleNode.x;
                            var i = (this.handleNode.x + 140) / 280;
                            this.setValue(i)
                        }
                    }
                }),
                cc._RF.pop()
        },
            {}],
        SettingPanel: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "083326EDyBEoLQmJA0JR99T", "SettingPanel");
            var a = e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    settingItemList: [e("SettingItem")]
                },
                onLoad: function() {
                    this.yinXiao = a.getYinXiao(),
                        this.yinLiang = a.getYinLiang()
                },
                animateAndDestroy: function() {
                    this.node && this.node.destroy()
                },
                update: function(e) {
                    var i = this.settingItemList[0].value,
                        t = this.settingItemList[1].value;
                    null != i && null != t && (parseInt(10 * i) != parseInt(10 * this.yinXiao) && a.setYinXiao(i), parseInt(10 * t) != parseInt(10 * this.yinLiang) && a.setYinLiang(t))
                }
            }),
                cc._RF.pop()
        },
            {
                SettingItem: "SettingItem",
                audioPlayer: "audioPlayer"
            }],
        StarClickPanel: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "c044b2nFexGBampRd+bZp7L", "StarClickPanel");
            var a = e("uicreator");
            cc.Class({
                extends: cc.Component,
                properties: {
                    xiaoxi: {
                        default:
                            null,
                        type: cc.Node
                    },
                    roomrole: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    home: {
                        default:
                            null,
                        type: cc.Prefab
                    }
                },
                onLoad: function() {},
                onClickSetting: function() {
                    a.createSettingPanel()
                },
                onClickSetopen: function() {
                    this.openAudio.active = !0,
                        this.closeAudio.active = !1,
                        cc.audioEngine.setMusicVolume(1),
                        cc.audioEngine.setEffectsVolume(1)
                },
                onClickSetclose: function() {
                    this.openAudio.active = !1,
                        this.closeAudio.active = !0,
                        cc.audioEngine.setMusicVolume(0),
                        cc.audioEngine.setEffectsVolume(0)
                },
                onClickliaotian: function() {
                    a.createliaotianPanel(this.xiaoxi)
                },
                onClick_rule: function() {
                    var e = cc.instantiate(this.roomrole);
                    cc.director.getScene().getChildByName("Canvas").addChild(e, 20),
                        e.setPosition(0, 0);
                    var i = e.getComponent("roomRule"),
                        t = cc.beimi.rules;
                    i.roomRule(t)
                },
                onClick_back: function() {
                    if (cc.beimi.backhome.size() > 0) {
                        e = cc.beimi.backhome.get();
                        parent = cc.find("Canvas"),
                            parent.addChild(e, 20),
                            e.setPosition(0, 0)
                    } else {
                        cc.beimi.backhome = new cc.NodePool,
                            cc.beimi.backhome.put(cc.instantiate(this.home_Prefab));
                        var e = cc.beimi.backhome.get();
                        parent = cc.find("Canvas"),
                            parent.addChild(e, 20),
                            e.setPosition(0, 0)
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                uicreator: "uicreator"
            }],
        audioPlayer: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "22d40UB3WJDBI+JJW1vvjeC", "audioPlayer");
            var a = new Object;
            a.setYinLiang = function(e) {
                cc.sys.localStorage.setItem("yinLiang", e),
                    this.yinLiang = e,
                    cc.log("this.bgId:" + this.bgId),
                null != this.bgId && cc.audioEngine.setVolume(this.bgId, this.yinLiang)
            },
                a.setYinXiao = function(e) {
                    cc.sys.localStorage.setItem("yinXiao", e),
                        this.yinXiao = e
                },
                a.getYinLiang = function() {
                    return this.init(),
                        this.yinLiang
                },
                a.getYinXiao = function() {
                    return this.init(),
                        this.yinXiao
                },
                a.init = function() {
                    if (null == this.yinLiang || null == this.yinXiao) {
                        var e = cc.sys.localStorage.getItem("yinLiang"),
                            i = 1;
                        null != e ? i = parseFloat(e) : this.setYinLiang(1);
                        var t = cc.sys.localStorage.getItem("yinXiao"),
                            a = 1;
                        null != t ? a = parseFloat(t) : this.setYinXiao(a),
                            this.yinLiang = i,
                            this.yinXiao = a
                    }
                },
                a.playYinXiao = function(e) {
                    return this.init(),
                        this.yinXiao <= 0 ? -1 : cc.audioEngine.play(e, !1, this.yinXiao)
                },
                a.playYinLiang = function(e, i) {
                    return this.init(),
                        cc.audioEngine.play(e, i, this.yinLiang)
                },
                a.playerBgMusic = function(e) {
                    cc.log("audio:" + e),
                    null != this.bgId && (cc.audioEngine.stop(this.bgId), this.bgId = null),
                        this.bgId = this.playYinLiang(e, !0),
                        cc.log("bgId:" + this.bgId)
                },
                a.stopBgMusic = function() {
                    null != this.bgId && cc.audioEngine.stop(this.bgId)
                },
                i.exports = a,
                cc._RF.pop()
        },
            {}],
        backHome: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "eb16cORRzFBaaj4rveEGFf+", "backHome"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    onclick_backhome: function() {
                        cc.log("返回-------");
                        var i = cc.find("Canvas/home");
                        cc.beimi.backhome.put(i),
                            e("socket").prototype.closeSocket(),
                            cc.beimi.isclose = !0;
                        var t = cc.beimi.beiMiCommon;
                        t.loadding(),
                            t.scene("hall", t)
                    },
                    onclick_cancel: function() {
                        var e = cc.find("Canvas/home");
                        cc.beimi.backhome.put(e)
                    }
                }),
                cc._RF.pop()
        },
            {
                socket: "socket"
            }],
        broadcast: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "5686fm2DVlA86JHr+wmxBYP", "broadcast"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        wordNode: cc.Node
                    },
                    onLoad: function() {
                        var e = this;
                        this.showString("抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。倡导文明，杜绝赌博！");
                        var i = -(this.node.width + 1.5 * this.wordNode.width),
                            t = (this.wordNode.width, cc.moveBy(25, cc.p(i, 0))),
                            a = cc.callFunc(function() {
                                e.wordNode.setPosition(cc.p(0, 0))
                            });
                        this.wordNode.runAction(cc.repeatForever(cc.sequence(t, a)))
                    },
                    showString: function(e) {
                        this.wordNode.getComponent(cc.Label).string = e
                    }
                }),
                cc._RF.pop()
        },
            {}],
        common: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "6814ezfnMRPS5/f/RtWBqjq", "common");
            var a = e("BeiMiCommon"),
                n = e("audioPlayer");
            cc.Class({
                extends: a,
                properties: {
                    playername: {
                        default:
                            null,
                        type: cc.Label
                    },
                    cardsnum: {
                        default:
                            null,
                        type: cc.Label
                    },
                    head: {
                        default:
                            null,
                        type: cc.Sprite
                    }
                },
                onLoad: function() {
                    cc.director.getScene().getChildByName("Canvas").getComponent("init").initMgr(),
                        this.io = e("IOUtils"),
                        cc.beimi.beiMiCommon = this;
                    var i = window.gameUserInfo;
                    if (window.baseURL && (cc.beimi.http.baseurl = window.baseURL), console.log("gameUserInfo:" + JSON.stringify(i)), i) {
                        s = window.weixinConfig;
                        if (console.log("weixinConfig:" + JSON.stringify(s)), this.weixinConfig(s), cc.beimi.userId) cc.log("从房间返回大厅"),
                            this.loadhead(this);
                        else {
                            var t = {};
                            t.data = i,
                                this.reset(t, i),
                                this.loadhead(this);
                            var a = e("EnterRoom"),
                                c = window.joinRoomId,
                                o = window.joinType;
                            if (cc.log("type:" + o), void 0 != o) if (0 == o) cc.log("来到大厅");
                            else if (1 == o) {
                                cc.log("来到大厅要跳房间");
                                var s = window.weixinConfig;
                                this.weixinConfig(s),
                                c && a.prototype.onClick_EnterRoom("", c)
                            } else if (2 == o) {
                                cc.log("来到大厅要跳红包");
                                var r = window.redInfo;
                                cc.beimi.redId = r.id,
                                    cc.beimi.redSign = r.sign;
                                var l = cc.beimi.beiMiCommon;
                                l.loadding(),
                                    l.scene("receive", l)
                            }
                        }
                    } else this.login();
                    n.stopBgMusic()
                },
                login: function() {
                    if (this.io = e("IOUtils"), this.loadding(), cc.beimi.istest) cc.beimi.http.httpGet("/getUserInfo", this.sucess, this.error, this);
                    else {
                        var i = "";
                        2 == window.joinType && window.redInfo ? i = "joinType=2&id=" + window.redInfo.id + "&sign=" + window.redInfo.sign: 1 == window.joinType && window.joinRoomId && (i = "joinType=1&roomId=" + window.joinRoomId);
                        cc.beimi.http.httpGet("/myUserInfo?" + i, this.sucess, this.error, this)
                    }
                },
                sucess: function(e, i) {
                    var t = JSON.parse(e);
                    i.closeloadding(i.loaddingdialog),
                        null != t && 200 == t.code ? cc.beimi.istest ? (i.reset(t, e), cc.beimi.http.baseURL = t.data.baseURL, cc.beimi.http.gameURL = t.data.gameURL, i.loadhead(i)) : i.alert0("网络异常，服务访问失败") : (i.closeloadding(i.loaddingdialog), i.alert(t.msg))
                },
                error: function(e) {
                    e.closeloadding(e.loaddingdialog),
                        e.alert0("网络异常，服务访问失败")
                },
                loadhead: function(e) {
                    e.playername.string = cc.beimi.name,
                        e.cardsnum.string = cc.beimi.card;
                    var i = e.head,
                        t = cc.beimi.photo;
                    cc.log("头像：" + t),
                    t && cc.loader.load({
                            url: t,
                            type: "png"
                        },
                        function(e, t) {
                            var a = new cc.SpriteFrame(t);
                            i.spriteFrame = a
                        })
                },
                weixinConfig: function(i) {
                    if (document.title = i.title, cc.beimi.http = e("HTTP"), cc.beimi.http.sharecontent.title = i.title, cc.beimi.http.sharecontent.link = i.link, cc.beimi.http.sharecontent.imgUrl = i.imgUrl, cc.beimi.http.sharecontent.desc = i.desc, cc.beimi.http.mainurl = i.mainUrl, cc.log("微信分享大厅shareContent:" + cc.beimi.http.sharecontent.link), cc.beimi.istest);
                    else if (!window.wxConfig) {
                        var t = i.mainUrl;
                        window.history.replaceState(null, null, t),
                            cc.log("微信分享大厅mainUrl:" + t)
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                EnterRoom: "EnterRoom",
                HTTP: "HTTP",
                IOUtils: "IOUtils",
                audioPlayer: "audioPlayer"
            }],
        createRoom: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "c0bbb2oF4NKfJQ75J8UuXsi", "createRoom");
            var a = e("BeiMiCommon");
            cc.Class({
                extends: a,
                properties: {},
                onLoad: function() {},
                onClick_createRoom: function() {
                    this.loadding(),
                        cc.beimi.CreateRoom.put(cc.find("Canvas/createRoom"));
                    var e = cc.beimi.gametype,
                        i = cc.beimi.difen,
                        t = cc.beimi.jushu,
                        a = cc.beimi.guize,
                        n = cc.beimi.paixing_1,
                        c = cc.beimi.niuniu_paixing,
                        o = c[0],
                        s = c[1],
                        r = c[2],
                        l = c[3],
                        m = c[4],
                        d = c[5],
                        u = c[6],
                        h = cc.beimi.shangzhuang,
                        g = cc.beimi.mroomType,
                        p = cc.beimi.openFriend,
                        f = cc.beimi.maxPower;
                    if (1 == g) {
                        b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            ruletype: a,
                            roomType: g,
                            topBanker: h,
                            openFriend: p,
                            szn5: o,
                            whn5: s,
                            thn6: r,
                            hln7: l,
                            zdn8: m,
                            wxn8: d,
                            ths10: u
                        };
                        cc.sys.localStorage.setItem("rule_1", JSON.stringify(b))
                    } else if (2 == g) {
                        b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            ruletype: a,
                            roomType: g,
                            topBanker: h,
                            openFriend: p,
                            szn5: o,
                            whn5: s,
                            thn6: r,
                            hln7: l,
                            zdn8: m,
                            wxn8: d,
                            ths10: u
                        };
                        cc.sys.localStorage.setItem("rule_2", JSON.stringify(b))
                    } else if (510 == g) {
                        b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            ruletype: a,
                            roomType: g,
                            openFriend: p,
                            maxPower: f
                        };
                        cc.sys.localStorage.setItem("rule_510", JSON.stringify(b))
                    } else if (610 == g) {
                        b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            ruletype: a,
                            roomType: g,
                            openFriend: p,
                            minChane: n
                        };
                        cc.sys.localStorage.setItem("rule_610", JSON.stringify(b))
                    } else if (606 == g) {
                        b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            ruletype: a,
                            roomType: g,
                            openFriend: p,
                            minChane: n
                        };
                        cc.sys.localStorage.setItem("rule_606", JSON.stringify(b))
                    } else if (708 == g) {
                        var b = {
                            gametype: e,
                            score: i,
                            gamenum: t,
                            roomType: g,
                            openFriend: p,
                            minChane: n
                        };
                        cc.sys.localStorage.setItem("rule_708", JSON.stringify(b))
                    }
                    var y = new Date;
                    cc.log("创建time: " + y.getMinutes() + " :" + y.getSeconds());
                    cc.beimi.http.httpPost("/createRoom", b, this.sucess, this.error, this)
                },
                sucess: function(e, i) {
                    var t = new Date;
                    cc.log("创建成功time: " + t.getMinutes() + " :" + t.getSeconds());
                    var a = JSON.parse(e);
                    if (null != a && 200 == a.code) {
                        cc.beimi.roomId = a.data.roomId,
                            cc.beimi.http.gameurl = a.data.gameURL,
                            cc.log("创建==房卡: " + a.data.remaining);
                        cc.beimi.beiMiCommon;
                        cc.beimi.iscreare = 1;
                        var n = cc.beimi.mroomType;
                        cc.beimi.roomType = n,
                            1 == n || 606 == n ? i.scene("sixgame", i) : 2 == n || 610 == n | 708 == n ? i.scene("game", i) : 510 == n && i.scene("game_fish", i)
                    } else i.closeloadding(i.loaddingDialog),
                        i.alert(a.msg)
                },
                error: function(e) {
                    e.closeloadding(e.loaddingDialog),
                        e.alert("网络异常，服务访问失败")
                },
                onclick_remove: function() {
                    this.node.destroy()
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon"
            }],
        dianshu: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "bba61fb2eNOOJssRtIckH4s", "dianshu"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        num_black: {
                            default:
                                null,
                            type: cc.Node
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {},
                    order: function(e) {
                        var i;
                        i = this.atlas.getSpriteFrame("dianshu_" + e),
                            this.num_black.getComponent(cc.Sprite).spriteFrame = i
                    }
                }),
                cc._RF.pop()
        },
            {}],
        end: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "1fd2fpzARdFEqetGsyqo+ls", "end");
            var a = e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    long_save: {
                        type: cc.Node,
                        default:
                            null
                    },
                    holdTimeEclipse: 0,
                    holdClick: !1,
                    oldClick: !1
                },
                onLoad: function() {
                    a.stopBgMusic()
                },
                start: function() {
                    cc.log("111111")
                },
                update: function(e) {}
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer"
            }],
        fama: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "df6d508pYtPhYjhbx69jTxN", "fama"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        },
                        famaSprite: {
                            default:
                                null,
                            type: cc.Sprite
                        }
                    },
                    onLoad: function() {},
                    order: function(e) {
                        var i = this.atlas.getSpriteFrame("fama_" + e);
                        this.famaSprite.spriteFrame = i
                    }
                }),
                cc._RF.pop()
        },
            {}],
        fish_icon: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "673ed8O8R5Dz6v7iCuPAOt4", "fish_icon"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        fish_icon: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {},
                    order: function(e, i) {
                        if (1 == i) t = "img_f_" + e;
                        else var t = "Image_" + e;
                        this.fish_icon.spriteFrame = this.atlas.getSpriteFrame(t)
                    }
                }),
                cc._RF.pop()
        },
            {}],
        fish_image: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "f63a068RmdGM5MQciiUBUpS", "fish_image"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        image: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        score: {
                            default:
                                null,
                            type: cc.Label
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {},
                    order: function(e, i) {
                        var t = "Image_" + e;
                        this.image.spriteFrame = this.atlas.getSpriteFrame(t),
                            this.score.string = i,
                            1 == e || 6 == e ? this.image.node.color = cc.Color.YELLOW.fromHEX("#FF0000") : 2 == e || 5 == e ? this.image.node.color = cc.Color.YELLOW.fromHEX("#14FF00") : 3 == e || 4 == e ? this.image.node.color = cc.Color.YELLOW.fromHEX("#9494FF") : 100 != e && 101 != e || (this.image.node.color = cc.Color.YELLOW.fromHEX("#FFFFFF"))
                    }
                }),
                cc._RF.pop()
        },
            {}],
        fish: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "0b833aRX6hGaKCX958YZfxU", "fish");
            var a = e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    money_1_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_2_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_3_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_4_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_5_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_6_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_7_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_8_z: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_1: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_2: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_3: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_4: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_5: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_6: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_7: {
                        type: cc.Label,
                        default:
                            null
                    },
                    money_8: {
                        type: cc.Label,
                        default:
                            null
                    },
                    mask_1: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_2: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_3: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_4: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_5: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_6: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_7: {
                        type: cc.Node,
                        default:
                            null
                    },
                    mask_8: {
                        type: cc.Node,
                        default:
                            null
                    },
                    sz_1: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    sz_2: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    sz_3: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    icon_1: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    icon_2: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    icon_3: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    game_szd: {
                        type: cc.Node,
                        default:
                            null
                    },
                    fish_icon: {
                        type: cc.Node,
                        default:
                            null
                    },
                    game_sz_04: {
                        type: cc.Node,
                        default:
                            null
                    },
                    btn_1: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_2: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_3: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_4: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_5: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_6: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_7: {
                        type: cc.Button,
                        default:
                            null
                    },
                    btn_8: {
                        type: cc.Button,
                        default:
                            null
                    },
                    sezi1: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    sezi2: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    sezi3: {
                        type: cc.Sprite,
                        default:
                            null
                    },
                    atlas: {
                        default:
                            null,
                        type: cc.SpriteAtlas
                    },
                    div1: {
                        type: cc.Node,
                        default:
                            null
                    },
                    div2: {
                        type: cc.Node,
                        default:
                            null
                    }
                },
                onLoad: function() {
                    cc.beimi.myfishxiazhu = 0
                },
                summoney: function(e, i, t, a) {
                    if (t >= 0 && e) switch (e + "") {
                        case "1":
                            this.money_1_z.string = t;
                            break;
                        case "2":
                            this.money_2_z.string = t;
                            break;
                        case "3":
                            this.money_3_z.string = t;
                            break;
                        case "4":
                            this.money_4_z.string = t;
                            break;
                        case "5":
                            this.money_5_z.string = t;
                            break;
                        case "6":
                            this.money_6_z.string = t;
                            break;
                        case "100":
                            this.money_7_z.string = t;
                            break;
                        case "101":
                            this.money_8_z.string = t
                    }
                    if (a == cc.beimi.userId && i >= 0 && e) switch (e + "") {
                        case "1":
                            this.money_1.string = i;
                            break;
                        case "2":
                            this.money_2.string = i;
                            break;
                        case "3":
                            this.money_3.string = i;
                            break;
                        case "4":
                            this.money_4.string = i;
                            break;
                        case "5":
                            this.money_5.string = i;
                            break;
                        case "6":
                            this.money_6.string = i;
                            break;
                        case "100":
                            this.money_7.string = i;
                            break;
                        case "101":
                            this.money_8.string = i
                    }
                },
                setoutszd: function() {
                    this.game_szd.active = !0
                },
                szanimation: function() {
                    var e = this;
                    this.game_szd.active = !0,
                        this.schedule(function() {
                                cc.loader.loadRes("audios/bg/shake_dice", cc.AudioClip,
                                    function(e, i) {
                                        a.playYinXiao(i)
                                    })
                            },
                            .2, 2, .01);
                    var i = e.game_szd.getComponent(cc.Animation);
                    i.play("fish"),
                        setTimeout(function() {
                                i.stop("fish"),
                                    e.game_szd.skewX = 0
                            },
                            1500)
                },
                openszd: function(e) {
                    var i = e.totalPoint,
                        t = e.sezi,
                        a = this,
                        n = Math.floor(360 * Math.random()),
                        c = n - 120,
                        o = n + 120;
                    this.sezi1.node.setPosition(this.getNewStarPosition(n)),
                        this.sezi2.node.setPosition(this.getNewStarPosition(c)),
                        this.sezi3.node.setPosition(this.getNewStarPosition(o));
                    var s = cc.moveBy(.2, 0, 220),
                        r = cc.fadeOut(1),
                        l = cc.sequence(s, r);
                    this.game_sz_04.runAction(l);
                    for (var m = 0; m < t.length; m++) {
                        var d = t[m];
                        if (0 == m) {
                            a.sezi1.spriteFrame = a.atlas.getSpriteFrame("img_g_" + d);
                            u = 0;
                            a.setsprite(u, a, d, i, e)
                        } else if (1 == m) {
                            a.sezi2.spriteFrame = a.atlas.getSpriteFrame("img_g_" + d);
                            u = 500;
                            a.setsprite(u, a, d, i, e)
                        } else if (2 == m) {
                            a.sezi3.spriteFrame = a.atlas.getSpriteFrame("img_g_" + d);
                            var u = 1e3;
                            a.setsprite(u, a, d, i, e)
                        }
                    }
                },
                getNewStarPosition: function(e) {
                    cc.beimi.fishscafe;
                    var i = 22 + 2 * cc.randomMinus1To1(),
                        t = i * Math.sin(3.14 * e / 180),
                        a = i * Math.cos(3.14 * e / 180);
                    return cc.p(t, a)
                },
                setsprite: function(e, i, t, n, c) {
                    setTimeout(function() {
                            if (0 == e) o = 1;
                            else if (500 == e) o = 2;
                            else if (1e3 == e) {
                                cc.beimi.runGame.recordhistory(c);
                                var o = 3;
                                "100" == n ? (i.mask_7.active = !0, i.mask_7.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "101" == n && (i.mask_8.active = !0, i.mask_8.getChildByName("ani2").getComponent(cc.Animation).play("ani2"))
                            }
                            i.setanim(i, t),
                                i.div1.getChildByName("sz_" + o).active = !0,
                                i.div2.getChildByName("icon_" + o).active = !0,
                                i.div1.getChildByName("sz_" + o).getComponent(cc.Sprite).spriteFrame = i.atlas.getSpriteFrame("img_sz_" + t),
                                i.div2.getChildByName("icon_" + o).getComponent(cc.Sprite).spriteFrame = i.atlas.getSpriteFrame("img_f_" + t),
                                i.div1.getChildByName("sz_" + o).getChildByName("ani1").getComponent(cc.Animation).play("ani"),
                                i.div2.getChildByName("icon_" + o).getChildByName("ani1").getComponent(cc.Animation).play("ani");
                            var s; (s = 1 == cc.beimi.playersex[c.banker] ? "voice/man/fish_0_" + t: "voice/woman/fish_" + t) && cc.loader.loadRes(s, cc.AudioClip,
                            function(e, i) {
                                a.playYinXiao(i)
                            }),
                                cc.loader.loadRes("audios/bg/spinbutton", cc.AudioClip,
                                    function(e, i) {
                                        a.playYinXiao(i)
                                    })
                        },
                        e)
                },
                setanim: function(e, i) {
                    "1" == i ? (e.mask_1.active = !0, e.mask_1.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "2" == i ? (e.mask_2.active = !0, e.mask_2.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "3" == i ? (e.mask_3.active = !0, e.mask_3.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "4" == i ? (e.mask_4.active = !0, e.mask_4.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "5" == i ? (e.mask_5.active = !0, e.mask_5.getChildByName("ani2").getComponent(cc.Animation).play("ani2")) : "6" == i && (e.mask_6.active = !0, e.mask_6.getChildByName("ani2").getComponent(cc.Animation).play("ani2"))
                },
                isclick: function(e) {
                    this.btn_1.interactable = e,
                        this.btn_2.interactable = e,
                        this.btn_3.interactable = e,
                        this.btn_4.interactable = e,
                        this.btn_5.interactable = e,
                        this.btn_6.interactable = e,
                        this.btn_7.interactable = e,
                        this.btn_8.interactable = e
                },
                addmoney: function(i, t) {
                    var a = e("socket"),
                        n = {};
                    if (n.cmd = 102, n.playerStatus = 3, t && (n.select = t), !cc.beimi.fishxiazhu || cc.beimi.fishxiazhu <= 0) return (c = Toast.makeText("请选择下注分数。", Toast.LENGTH_SHORT)).setGravity(Toast.CENTER, 0, 0),
                        void c.show();
                    if (cc.beimi.myfishxiazhu + cc.beimi.fishxiazhu > cc.beimi.maxPower) {
                        var c = Toast.makeText("超出单局最大分数。", Toast.LENGTH_SHORT);
                        return c.setGravity(Toast.CENTER, 0, 0),
                            void c.show()
                    }
                    n.multiple = cc.beimi.fishxiazhu,
                        a.prototype.sendData(n,
                            function(e, i, t) {
                                if (200 == i) {
                                    var a = e.select,
                                        n = e.multiple,
                                        c = e.lastMultiple,
                                        o = e.roomMultiple,
                                        s = e.userId;
                                    cc.beimi.fishscene.getComponent("fish").summoney(a, c, o, s);
                                    var r = cc.beimi.runGame,
                                        l = cc.beimi.myfishxiazhu;
                                    cc.beimi.myfishxiazhu = l + cc.beimi.fishxiazhu,
                                        r.zhuanimation(s, a, n)
                                }
                            })
                },
                clearup: function() {
                    cc.beimi.myfishxiazhu = 0,
                        this.mask_1.active = !1,
                        this.mask_2.active = !1,
                        this.mask_3.active = !1,
                        this.mask_4.active = !1,
                        this.mask_5.active = !1,
                        this.mask_6.active = !1,
                        this.mask_7.active = !1,
                        this.mask_8.active = !1,
                        this.money_1.string = "",
                        this.money_2.string = "",
                        this.money_3.string = "",
                        this.money_4.string = "",
                        this.money_5.string = "",
                        this.money_6.string = "",
                        this.money_7.string = "",
                        this.money_8.string = "",
                        this.money_1_z.string = "",
                        this.money_2_z.string = "",
                        this.money_3_z.string = "",
                        this.money_4_z.string = "",
                        this.money_5_z.string = "",
                        this.money_6_z.string = "",
                        this.money_7_z.string = "",
                        this.money_8_z.string = "",
                        this.div1.getChildByName("sz_1").active = !1,
                        this.div2.getChildByName("icon_1").active = !1,
                        this.div1.getChildByName("sz_2").active = !1,
                        this.div2.getChildByName("icon_2").active = !1,
                        this.div1.getChildByName("sz_3").active = !1,
                        this.div2.getChildByName("icon_3").active = !1,
                        this.game_sz_04.setPosition(1, 27.4),
                        this.game_sz_04.opacity = 255,
                        this.game_szd.active = !1,
                        this.isclick(!1)
                }
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer",
                socket: "socket"
            }],
        friend: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "ac720ZGMXRMIbabTlRHbGh1", "friend");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    open_f: {
                        default:
                            null,
                        type: cc.Node
                    },
                    close_f: {
                        default:
                            null,
                        type: cc.Node
                    },
                    dialog: {
                        default:
                            null,
                        type: cc.Node
                    },
                    remove_node: {
                        default:
                            null,
                        type: cc.Node
                    },
                    friend_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    holdTimeEclipse: 0,
                    holdClick: !1,
                    mytype: 0,
                    OPT_HEIGHT: 100
                },
                onLoad: function() {
                    this.value_get = [],
                        this.item_get = [],
                        this.isfrist = !0,
                        this.offget = 0,
                        this.limit = 25,
                        this.myGroup(this.offget, this.limit)
                },
                onOpenGroup: function() {
                    if (this.isonopen = !0, this.isfrist) this.ondialog();
                    else {
                        cc.beimi.beiMiCommon.loadding();
                        var e = {
                            groupStatus: !0
                        };
                        cc.beimi.http.httpPost("/redCard/actionGroupStatus", e, this.mysucess, this.myerror, this)
                    }
                },
                onCloseGroup: function() {},
                creatGroup: function() {
                    this.dialog.setPosition(4e3, 0),
                        cc.beimi.beiMiCommon.loadding();
                    cc.beimi.http.httpGet("/redCard/makeGroup", this.mysucess, this.myerror, this)
                },
                ondialog: function(e, i) { - 1 == i ? this.dialog.setPosition(4e3, 0) : this.dialog.setPosition(0, 0);
                    var t = this.dialog.getChildByName("alert").getChildByName("queding").getComponent(cc.Button);
                    this.dialog.getChildByName("alert").getChildByName("hit").getComponent(cc.Label).string = "开启好友管理功能消耗将100张房卡",
                        t.node.on("click", this.creatGroup, this)
                },
                myGroup: function(e, i) {
                    cc.beimi.beiMiCommon.loadding();
                    var t = {
                        offset: e,
                        limit: i
                    };
                    cc.beimi.http.httpPost("/redCard/getMyGroup", t, this.sucess, this.error, this)
                },
                load_item_data: function(e) {
                    for (var i = 0; i < this.item_get.length; i++) {
                        var t = this.item_get[i],
                            n = t.getChildByName("content").getChildByName("header").getChildByName("name").getComponent(cc.Label),
                            c = t.getChildByName("content").getChildByName("header").getChildByName("time").getComponent(cc.Label),
                            o = t.getChildByName("content").getChildByName("header").getComponent(cc.Sprite),
                            s = t.getChildByName("content").getChildByName("type0"),
                            r = t.getChildByName("content").getChildByName("type1"),
                            l = t.getChildByName("content").getChildByName("type1").getComponent(cc.Button),
                            m = t.getChildByName("content");
                        this.value_get[e + i].status ? (r.active = !0, s.active = !1) : (r.active = !1, s.active = !0);
                        var d = new Date(parseInt(this.value_get[e + i].cTime)),
                            u = this.value_get[e + i].photo;
                        u && this.loadhead(o, u);
                        parseInt(d.getMonth());
                        n.string = this.value_get[e + i].name,
                            c.string = a.prototype.formatdate(this.value_get[e + i].cTime),
                            l.node.off(cc.Node.EventType.TOUCH_END),
                            l.node.on(cc.Node.EventType.TOUCH_END, this.groupApply.bind(this, this.value_get[e + i].userId, i, e + i), this),
                            m.on(cc.Node.EventType.TOUCH_START, this.ontouchstart.bind(this, this.value_get[e + i].userId, i, e + i), this),
                            m.on(cc.Node.EventType.TOUCH_END, this.ontouchend, this),
                            m.on(cc.Node.EventType.TOUCH_CANCEL, this.ontouchend, this)
                    }
                },
                groupApply: function(e, i, t) {
                    this.item_point = i,
                        this.list_point = t,
                        cc.beimi.beiMiCommon.loadding();
                    var a = {
                        userId: e
                    };
                    this.mytype = 100;
                    cc.beimi.http.httpPost("/redCard/receiveMember", a, this.sucess, this.error, this)
                },
                ontouchstart: function(e, i, t) {
                    this.holdClick = !0,
                        this.holdTimeEclipse = 0,
                        this.item_point = i,
                        this.list_point = t,
                        this.remove_userID = e
                },
                ontouchend: function(e) {
                    this.holdClick = !1,
                        this.holdTimeEclipse = 0
                },
                remove_friend: function(e, i) {
                    if (this.remove_node.setPosition(0, 3e3), -1 == i);
                    else {
                        cc.beimi.beiMiCommon.loadding();
                        var t = {
                            userId: this.remove_userID
                        };
                        this.mytype = 101;
                        cc.beimi.http.httpPost("/redCard/removeGroupMember", t, this.sucess, this.error, this)
                    }
                },
                loadhead: function(e, i) {
                    cc.loader.load({
                            url: i,
                            type: "png"
                        },
                        function(i, t) {
                            var a = new cc.SpriteFrame(t);
                            e.spriteFrame = a
                        })
                },
                sucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog);
                    var a = JSON.parse(e);
                    if (cc.log("红包data:" + JSON.stringify(a)), null != a && 200 == a.code) {
                        if (100 == i.mytype) {
                            var n = (o = i.item_get[i.item_point]).getChildByName("content").getChildByName("type0");
                            o.getChildByName("content").getChildByName("type1").active = !1,
                                n.active = !0,
                                i.value_get[i.list_point].status = 0
                        } else if (101 == i.mytype) {
                            o = i.item_get[i.item_point];
                            delete i.item_get[i.item_point],
                                o.destroy(),
                                delete i.value_get[i.list_point]
                        } else if (i.open_f.active = !0, i.close_f.active = !1, i.isfrist = !1, a.data && a.data.member && a.data.member.length > 0) {
                            i.value_get = i.value_get.concat(a.data.member);
                            for (var c = 0; c < a.data.member.length; c++) if (i.item_get.length < 24) {
                                var o = cc.instantiate(i.friend_prefab);
                                i.scroll_view.content.addChild(o),
                                    i.item_get.push(o)
                            }
                            i.load_item_data(i.start_index, 1)
                        }
                    } else t.closeloadding(t.loaddingdialog),
                        t.alert("您还没有开启好友管理功能");
                    i.mytype = 0
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                mysucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog);
                    var a = JSON.parse(e);
                    cc.log("开群data:" + JSON.stringify(a)),
                        null != a && 200 == a.code ? (cc.beimi.isopenfriend = a.data.groupId, i.isonopen ? (i.open_f.active = !0, i.close_f.active = !1, i.isfrist = !1, a.data && (cc.beimi.card = a.data.remaining)) : (i.open_f.active = !1, i.close_f.active = !0, i.isfrist = !1)) : (i.open_f.active = !1, i.close_f.active = !0, i.isfrist = !1, t.closeloadding(t.loaddingdialog))
                },
                myerror: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                onClick_home: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("hall", e)
                },
                start: function() {
                    this.start_index = 0,
                        this.content_start_y = this.scroll_view.content.y
                },
                update: function(e) {
                    if (this.start_index + 24 < this.value_get.length && this.scroll_view.content.y >= this.content_start_y + 16 * this.OPT_HEIGHT) {
                        this.scroll_view.stopAutoScroll();
                        var i = 8;
                        if (this.start_index += i, this.start_index + 24 > this.value_get.length) {
                            var t = this.start_index + 24 - this.value_get.length;
                            i -= t,
                                this.start_index -= t
                        }
                        return this.scroll_view.content.y -= i * this.OPT_HEIGHT,
                            this.load_item_data(this.start_index),
                            cc.log("该加载了" + this.start_index),
                            void(this.start_index + 25 > this.value_get.length && (this.offget = this.offget + this.limit, this.limit = 24, this.myGroup(this.offget, this.limit)))
                    }
                    if (this.start_index > 0 && this.scroll_view.content.y <= this.content_start_y) {
                        this.scroll_view.stopAutoScroll();
                        var a = 8;
                        this.start_index -= a,
                        this.start_index < 0 && (a += this.start_index, this.start_index = 0),
                            this.scroll_view.content.y += a * this.OPT_HEIGHT,
                            this.load_item_data(this.start_index)
                    }
                    this.holdClick && (this.holdTimeEclipse += e, this.holdTimeEclipse > .5 && (this.holdTimeEclipse = .5, this.remove_node.setPosition(0, 0), this.holdClick = !1))
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        groupApply: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "9bf31zuv0JNrZJEOAagjTm+", "groupApply"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        btn_queding: {
                            default:
                                null,
                            type: cc.Node
                        },
                        btn_dengdai: {
                            default:
                                null,
                            type: cc.Node
                        },
                        head: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        groupername: {
                            default:
                                null,
                            type: cc.Label
                        }
                    },
                    onLoad: function() {},
                    init: function(e, i, t, a) {
                        this.groupid = t,
                            this.groupername.string = e,
                            a ? (this.btn_queding.active = !1, this.btn_dengdai.active = !0) : (this.btn_queding.active = !0, this.btn_dengdai.active = !1),
                        i && this.loadhead(this.head, i)
                    },
                    loadhead: function(e, i) {
                        cc.loader.load({
                                url: i,
                                type: "png"
                            },
                            function(i, t) {
                                var a = new cc.SpriteFrame(t);
                                e.spriteFrame = a
                            })
                    },
                    onClose: function() {
                        var e = cc.find("Canvas/alert_groupApply");
                        cc.beimi.alert_groupApply.put(e)
                    },
                    groupApply: function() {
                        cc.beimi.beiMiCommon.loadding();
                        var e = {
                            groupId: this.groupid
                        };
                        cc.beimi.http.httpPost("/redCard/groupApply", e, this.sucess, this.error, this)
                    },
                    sucess: function(e, i) {
                        var t = cc.beimi.beiMiCommon;
                        t.closeloadding(t.loaddingdialog);
                        var a = JSON.parse(e);
                        cc.log("申请加群data:" + JSON.stringify(a)),
                            null != a && 200 == a.code ? (i.btn_queding.active = !1, i.btn_dengdai.active = !0) : (t.closeloadding(t.loaddingdialog), t.alert(a.msg))
                    },
                    error: function(e, i) {
                        var t = cc.beimi.beiMiCommon;
                        t.closeloadding(t.loaddingdialog),
                            t.alert("网络异常，服务访问失败")
                    }
                }),
                cc._RF.pop()
        },
            {}],
        "heartCheck ": [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "abd4eWk7WVCELbEWwjFZoJC", "heartCheck "),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {}
                }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                socket: "socket"
            }],
        history_sz_itme: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "5439e/5QHRNz6tiBs25B5Dj", "history_sz_itme"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        gamenum: {
                            default:
                                null,
                            type: cc.Label
                        },
                        icon1: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        icon2: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        icon3: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        img: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {},
                    order: function(e) {
                        if (e.currentGameNum) {
                            var i = e.currentGameNum.split("/");
                            if (e.next) t = i[0] - 1;
                            else t = i[0]
                        } else var t = e.gameNum;
                        var a = e.totalPoint,
                            n = e.sezi,
                            c = n[0],
                            o = n[1],
                            s = n[2];
                        this.gamenum.string = t,
                            this.icon1.spriteFrame = this.atlas.getSpriteFrame("img_f_" + c),
                            this.icon2.spriteFrame = this.atlas.getSpriteFrame("img_f_" + o),
                            this.icon3.spriteFrame = this.atlas.getSpriteFrame("img_f_" + s),
                            this.img.spriteFrame = this.atlas.getSpriteFrame("Image_" + a)
                    }
                }),
                cc._RF.pop()
        },
            {}],
        history_sz: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "ed7e7bPMRJH7KjPSTkv1bKB", "history_sz"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        content: {
                            default:
                                null,
                            type: cc.Node
                        },
                        history_sz_itme: {
                            type: cc.Prefab,
                            default:
                                null
                        }
                    },
                    onLoad: function() {
                        this.list = [],
                            this.itmes = []
                    },
                    order: function(e) {
                        var i = {};
                        e.totalPoint && (i.totalPoint = e.totalPoint, i.currentGameNum = e.currentGameNum, i.gameNum = e.gameNum, i.next = e.next),
                        e.sezi && (i.sezi = e.sezi),
                            this.list.push(i);
                        for (a = 0; a < this.list.length; a++) this.list.length > 6 && this.list.shift();
                        if (this.itmes.length < 6) {
                            var t = cc.instantiate(this.history_sz_itme);
                            this.content.addChild(t),
                                this.itmes.push(t)
                        }
                        for (var a = 0; a < this.itmes.length; a++) this.itmes[a].getComponent("history_sz_itme").order(this.list[a])
                    }
                }),
                cc._RF.pop()
        },
            {}],
        init: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "bf407fW7aVLA5IuID4Ztaqg", "init");
            e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    _progress: 0,
                    _splash: null,
                    _isLoading: !1,
                    loaddingPrefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    alertPrefab0: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    alertPrefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    alertPrefab2: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    joinroomPrefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    linePrefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    Reconnect_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    LiaotianPrefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    manage_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    alert_groupApply_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    home_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    }
                },
                onLoad: function() {
                    cc.director.getWinSize().width,
                        cc.director.getScene().getChildByName("Canvas").width = cc.director.getWinSize().width,
                        cc.director.getScene().getChildByName("Canvas").height = cc.director.getWinSize().height;
                    cc.director.setDisplayStats(!1)
                },
                initMgr: function() {
                    if (null == cc.beimi) {
                        cc.beimi = {},
                            cc.beimi.http = e("HTTP");
                        var i = cc.beimi.http.sharecontent;
                        window.wx && (wx.onMenuShareAppMessage(i), wx.onMenuShareTimeline(i)),
                            cc.beimi.dialog = null,
                            cc.beimi.loadding = new cc.NodePool,
                            cc.beimi.loadding.put(cc.instantiate(this.loaddingPrefab)),
                            cc.beimi.dialog = new cc.NodePool,
                            cc.beimi.dialog.put(cc.instantiate(this.alertPrefab)),
                            cc.beimi.dialog2 = new cc.NodePool,
                            cc.beimi.dialog2.put(cc.instantiate(this.alertPrefab2)),
                            cc.beimi.dialog0 = new cc.NodePool,
                            cc.beimi.dialog0.put(cc.instantiate(this.alertPrefab0)),
                            cc.beimi.LiaotianPrefab = new cc.NodePool,
                            cc.beimi.LiaotianPrefab.put(cc.instantiate(this.LiaotianPrefab)),
                            cc.beimi.joinroom = new cc.NodePool,
                            cc.beimi.joinroom.put(cc.instantiate(this.joinroomPrefab)),
                            cc.beimi.line = new cc.NodePool,
                            cc.beimi.line.put(cc.instantiate(this.linePrefab)),
                            cc.beimi.Reconnect = new cc.NodePool,
                            cc.beimi.Reconnect.put(cc.instantiate(this.Reconnect_Prefab)),
                            cc.beimi.manage = new cc.NodePool,
                            cc.beimi.manage.put(cc.instantiate(this.manage_Prefab)),
                            cc.beimi.alert_groupApply = new cc.NodePool,
                            cc.beimi.alert_groupApply.put(cc.instantiate(this.alert_groupApply_Prefab)),
                            cc.beimi.backhome = new cc.NodePool,
                            cc.beimi.backhome.put(cc.instantiate(this.home_Prefab))
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                HTTP: "HTTP",
                audioPlayer: "audioPlayer"
            }],
        itemid: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "03c34rBXLBBq7mfsOn1sUD+", "itemid"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        itemid: 0
                    },
                    onLoad: function() {},
                    onClick_destroy: function() {
                        if (cc.beimi.isliaotian) {
                            if (cc.beimi.isliaotian = !1, "LiaotianPanel" == this.node.name) return void this.node.destroy();
                            var e = this.node.parent.parent.parent.parent.parent;
                            e && e.destroy()
                        } else cc.beimi.LiaotianPrefab.put(cc.find("Canvas/LiaotianPanel"))
                    }
                }),
                cc._RF.pop()
        },
            {}],
        itme_list: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "2b1adRsS6hD6KqyxonZ4p2q", "itme_list"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        puker_content: {
                            default:
                                null,
                            type: cc.Node
                        },
                        paijiu_content1: {
                            default:
                                null,
                            type: cc.Node
                        },
                        paijiu_content2: {
                            default:
                                null,
                            type: cc.Node
                        },
                        sz_content: {
                            default:
                                null,
                            type: cc.Node
                        },
                        newCard: {
                            default:
                                null,
                            type: cc.Prefab
                        },
                        paijiu_Pre: {
                            default:
                                null,
                            type: cc.Prefab
                        },
                        fish_image: {
                            default:
                                null,
                            type: cc.Prefab
                        },
                        head: {
                            default:
                                null,
                            type: cc.Sprite
                        },
                        playername: {
                            default:
                                null,
                            type: cc.Label
                        },
                        niuniu: {
                            default:
                                null,
                            type: cc.Label
                        },
                        niuniu2: {
                            default:
                                null,
                            type: cc.Label
                        },
                        score: {
                            default:
                                null,
                            type: cc.Node
                        },
                        beishu: {
                            default:
                                null,
                            type: cc.Label
                        },
                        zhuang: {
                            default:
                                null,
                            type: cc.Node
                        },
                        bg_color: {
                            default:
                                null,
                            type: cc.Node
                        }
                    },
                    onLoad: function() {},
                    order: function(e, i, t, a, n) {
                        var c, o = "";
                        for (var s in a) {
                            var r = a[s];
                            r.userId == i && (o = r.name, c = r.photo)
                        }
                        this.zhuang.active = e == i;
                        var l = t.winMoney,
                            m = t.multiple,
                            d = t.orderPoker,
                            u = t.currentData;
                        if (510 == n) {
                            this.beishu.node.active = e == i;
                            for (var s in u) {
                                var h = u[s],
                                    g = cc.instantiate(this.fish_image);
                                this.sz_content.addChild(g),
                                    g.getComponent("fish_image").order(s, h)
                            }
                        } else if (610 == n || 606 == n || 708 == n) {
                            if (708 == n) {
                                t.firstPoker,
                                    t.secondPoker;
                                for (b = 0; b < 4; b++) {
                                    var p = (_ = cc.instantiate(this.paijiu_Pre)).getComponent("paijiu");
                                    _.scaleX = .7,
                                        _.scaleY = .7,
                                        p.order(d[b]),
                                        p.isOpen(!1, _.scaleX, _.scaleY, !0),
                                        0 == b || 1 == b ? this.paijiu_content1.addChild(_) : (_.rotation = -90, this.paijiu_content2.addChild(_))
                                }
                            } else for (var f = t.point,
                                            b = 0; b < 2; b++) {
                                _ = cc.instantiate(this.paijiu_Pre);
                                this.puker_content.addChild(_),
                                    _.setPosition(35 * b - 10, 0),
                                    _.scaleX = .7,
                                    _.scaleY = .7,
                                    (p = _.getComponent("paijiu")).order(d[b]),
                                    p.isOpen(!1, _.scaleX, _.scaleY, !0)
                            }
                            var y = {
                                0 : "零点",
                                1 : "一点",
                                2 : "二点",
                                3 : "三点",
                                4 : "四点",
                                5 : "五点",
                                6 : "六点",
                                7 : "七点",
                                8 : "八点",
                                9 : "九点",
                                17 : "地高九",
                                27 : "天高九",
                                38 : "地杠",
                                48 : "天杠",
                                59 : "地王",
                                69 : "天王",
                                101 : "杂五",
                                102 : "杂七",
                                103 : "杂八",
                                104 : "杂九",
                                105 : "双零霖",
                                106 : "双高脚",
                                107 : "双红头",
                                108 : "双斧头",
                                109 : "双板凳",
                                110 : "双长三",
                                111 : "双梅",
                                112 : "双鹅",
                                113 : "双人",
                                114 : "双地",
                                115 : "双天",
                                116 : "至尊宝",
                                "0_0": "零点",
                                "1_0": "一点",
                                "2_0": "二点",
                                "3_0": "三点",
                                "4_0": "四点",
                                "5_0": "五点",
                                "6_0": "六点",
                                "7_0": "七点",
                                "8_0": "八点",
                                "9_0": "九点",
                                "17_0": "地高九",
                                "27_0": "天高九",
                                "38_0": "地杠",
                                "48_0": "天杠",
                                "59_0": "地王",
                                "69_0": "天王",
                                "101_0": "杂五",
                                "102_0": "杂七",
                                "103_0": "杂八",
                                "104_0": "杂九",
                                "105_0": "双零霖",
                                "106_0": "双高脚",
                                "107_0": "双红头",
                                "108_0": "双斧头",
                                "109_0": "双板凳",
                                "110_0": "双长三",
                                "111_0": "双梅",
                                "112_0": "双鹅",
                                "113_0": "双人",
                                "114_0": "双地",
                                "115_0": "双天",
                                "116_0": "至尊宝"
                            };
                            708 == n ? (this.niuniu.string = y[t.firstPointStr], this.niuniu2.node.active = !0, this.niuniu2.string = y[t.secondPointStr]) : this.niuniu.string = y[f]
                        } else if (1 == n || 2 == n) {
                            for (var f = t.niu,
                                     b = 0; b < 5; b++) {
                                var _ = cc.instantiate(this.newCard);
                                this.puker_content.addChild(_),
                                    _.setPosition(15 * b - 10, 0),
                                    _.scaleX = .7,
                                    _.scaleY = .7,
                                    (p = _.getComponent("puker")).order(d[b]),
                                    p.isOpen(!1, _.scaleX, _.scaleY, !0)
                            }
                            var v;
                            0 == f ? v = "没牛": 1 == f ? v = "牛一": 2 == f ? v = "牛二": 3 == f ? v = "牛三": 4 == f ? v = "牛四": 5 == f ? v = "牛五": 6 == f ? v = "牛六": 7 == f ? v = "牛七": 8 == f ? v = "牛八": 9 == f ? v = "牛九": 10 == f ? v = "牛牛": 11 == f ? v = "五花牛": 12 == f ? v = "炸弹牛": 13 == f ? v = "五小牛": 21 == f ? v = "顺子牛": 22 == f ? v = "五花牛": 23 == f ? v = "同花牛": 24 == f ? v = "葫芦牛": 25 == f ? v = "炸弹牛": 26 == f ? v = "五小牛": 27 == f && (v = "同花顺"),
                                this.niuniu.string = v
                        }
                        l > 0 ? (l = "+" + l, this.score.color = cc.Color.YELLOW.fromHEX("#D85E0D")) : this.score.color = cc.Color.YELLOW.fromHEX("#49FF5E"),
                            this.playername.string = o,
                            this.score.getComponent(cc.Label).string = l,
                            this.beishu.string = m ? m + "倍": "",
                        c && this.loadhead(this.head, c)
                    },
                    loadhead: function(e, i) {
                        cc.loader.load({
                                url: i,
                                type: "png"
                            },
                            function(i, t) {
                                var a = new cc.SpriteFrame(t);
                                e.spriteFrame = a
                            })
                    }
                }),
                cc._RF.pop()
        },
            {}],
        itme_standings_1: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "742aflOab5F+4BWUM8WO/0z", "itme_standings_1"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        content: {
                            default:
                                null,
                            type: cc.Node
                        },
                        grxx7_n: {
                            default:
                                null,
                            type: cc.Node
                        },
                        grxx7_n_1: {
                            default:
                                null,
                            type: cc.Node
                        },
                        itme_list: {
                            default:
                                null,
                            type: cc.Prefab
                        },
                        itme_sz: {
                            default:
                                null,
                            type: cc.Prefab
                        },
                        top: {
                            default:
                                null,
                            type: cc.Node
                        },
                        paixing: {
                            default:
                                null,
                            type: cc.Node
                        },
                        fish_node: {
                            default:
                                null,
                            type: cc.Node
                        }
                    },
                    onLoad: function() {
                        this.isopen = !1
                    },
                    order: function(e, i, t) {
                        this.isopen ? (this.isopen = !1, this.oncloes(t)) : (this.isopen = !0, this.onopen(e, i, t))
                    },
                    onopen: function(e, i, t) {
                        var a = e.clearData;
                        if (510 == t) {
                            if (!this.isfist) {
                                this.paixing.active = !1,
                                    this.fish_node.active = !0;
                                for (var n = e.sezi,
                                         c = e.totalPoint,
                                         o = 0; o < n.length; o++) {
                                    var s = cc.instantiate(this.itme_sz);
                                    this.fish_node.getChildByName("sz_content").addChild(s),
                                        s.getComponent("fish_icon").order(n[o], 1)
                                }
                                var r = cc.instantiate(this.itme_sz);
                                this.fish_node.getChildByName("sz_content").addChild(r),
                                    r.getComponent("fish_icon").order(c, 2)
                            }
                            this.isfist = !0
                        } else this.paixing.active = !0,
                            this.fish_node.active = !1;
                        for (var l in a) {
                            var m = a[l],
                                d = cc.instantiate(this.itme_list);
                            this.content.addChild(d),
                                d.getComponent("itme_list").order(e.banker, l, m, i, t)
                        }
                        this.node.height = 1620,
                            this.content.active = !0,
                            this.top.active = !0,
                            this.grxx7_n.active = !1,
                            this.grxx7_n_1.active = !0,
                            cc.log("" + this.content.height)
                    },
                    oncloes: function(e) {
                        this.node.height = 120,
                            this.content.removeAllChildren(),
                            this.top.active = !1,
                            this.content.active = !1,
                            this.grxx7_n.active = !0,
                            this.grxx7_n_1.active = !1
                    }
                }),
                cc._RF.pop()
        },
            {}],
        jinbi: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "45132e1zRhA/qeQkDMDW0Rv", "jinbi"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    update: function(e) {}
                }),
                cc._RF.pop()
        },
            {}],
        joinAlert: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "00db6fOBN5FAaJHS8PeQDTT", "joinAlert");
            var a = e("BeiMiCommon");
            cc.Class({
                extends: a,
                properties: {},
                onLoad: function() {
                    this.node.on(cc.Node.EventType.TOUCH_START,
                        function(e) {
                            e.stopPropagation()
                        })
                },
                onClose: function() {
                    var e = cc.find("Canvas/joinroom");
                    cc.beimi.joinroom.put(e),
                        socket.prototype.closeSocket();
                    var i = cc.beimi.beiMiCommon;
                    i.loadding(),
                        i.scene("hall", i)
                },
                onjoinroom: function() {
                    var i = cc.find("Canvas/joinroom");
                    cc.beimi.joinroom.put(i);
                    var t = e("socket"),
                        a = cc.beimi.roomId;
                    t.prototype.joinRoom(a)
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                socket: "socket"
            }],
        liaotian: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "ea125VPHnROg737TgY4SjEJ", "liaotian");
            var a = e("audioPlayer"),
                n = e("runGame");
            cc.Class({
                extends: cc.Component,
                properties: {
                    opt_item_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    OPT_HEIGHT: 80
                },
                onLoad: function() {
                    this.value_set = cc.beimi.value_set,
                        this.item_set = [];
                    for (var e = 0; e < this.value_set.length; e++) {
                        var i = cc.instantiate(this.opt_item_prefab);
                        this.scroll_view.content.addChild(i),
                            this.item_set.push(i)
                    }
                },
                load_item_data: function(e) {
                    for (var i = 0; i < this.value_set.length; i++) {
                        var t = this.item_set[i],
                            a = t.getChildByName("bg").getChildByName("src").getComponent(cc.Label);
                        a.string = "" + this.value_set[e + i];
                        a.string;
                        t.getChildByName("bg").getComponent("itemid").itemid = i,
                            t.getChildByName("bg").getComponent(cc.Button).node.on("click", this.callback, this)
                    }
                },
                callback: function(e) {
                    var i = e.detail.node.getComponent("itemid").itemid + 1;
                    this.onClick_voice(i);
                    var t = e.detail.node.getChildByName("src").getComponent(cc.Label).string;
                    if (cc.beimi.isspeaking) {
                        var a = Toast.makeText("您说话太快了...", Toast.LENGTH_SHORT);
                        return a.setGravity(Toast.CENTER, 0, 0),
                            void a.show()
                    }
                    cc.beimi.isspeaking = !0,
                        n.prototype.outLable(cc.beimi.userId, t)
                },
                start: function() {
                    this.start_index = 0,
                        this.load_item_data(this.start_index),
                        this.content_start_y = this.scroll_view.content.y
                },
                onClick_voice: function(i) {
                    if (!cc.beimi.isspeaking) {
                        var t = cc.beimi.sex;
                        if (1 == t) n = "voice/man/message1_" + i;
                        else var n = "voice/woman/message2_" + i;
                        cc.loader.loadRes(n, cc.AudioClip,
                            function(e, i) {
                                a.playYinXiao(i)
                            });
                        var c = e("socket"),
                            o = {};
                        o.cmd = 120,
                            o.voices = i,
                            o.sex = t,
                            c.prototype.sendData(o,
                                function(e, i) {})
                    }
                },
                update: function(e) {}
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer",
                runGame: "runGame",
                socket: "socket"
            }],
        login: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "f5d10NsYF1KiKbH3aK9v6cb", "login");
            var a = e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    bgMusic: {
                        url: cc.AudioClip,
                        default:
                            null
                    }
                },
                onLoad: function() {
                    a.playerBgMusic(this.bgMusic)
                }
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer"
            }],
        manage: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "fb045ARBelIMZAQc4oJYA6W", "manage"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    onClose: function() {
                        var e = cc.find("Canvas/manage");
                        cc.beimi.manage.put(e)
                    },
                    friendmanage: function() {
                        var e = cc.find("Canvas/manage");
                        cc.beimi.manage.put(e);
                        var i = cc.beimi.beiMiCommon;
                        i.loadding(),
                            i.scene("friendGroup", i)
                    },
                    updatum: function() {
                        var e = cc.find("Canvas/manage");
                        cc.beimi.manage.put(e),
                            location.reload()
                    },
                    querycard: function() {
                        var e = cc.find("Canvas/manage");
                        cc.beimi.manage.put(e);
                        var i = cc.beimi.beiMiCommon;
                        i.loadding(),
                            i.scene("redPacket", i)
                    },
                    onlogout: function() {
                        window.wx && wx.closeWindow()
                    },
                    onreport: function() {
                        var e = cc.find("Canvas/manage");
                        cc.beimi.manage.put(e);
                        var i = cc.beimi.beiMiCommon;
                        i.loadding(),
                            i.scene("standings", i)
                    }
                }),
                cc._RF.pop()
        },
            {}],
        mobile_bind: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "52d874THrxGSo4291NmhXWq", "mobile_bind"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        phone_EditBox: {
                            type: cc.EditBox,
                            default:
                                null
                        },
                        yan_EditBox: {
                            type: cc.EditBox,
                            default:
                                null
                        },
                        cooling: {
                            type: cc.Label,
                            default:
                                null
                        },
                        btn_getcooling: {
                            type: cc.Node,
                            default:
                                null
                        },
                        btn_wait: {
                            type: cc.Node,
                            default:
                                null
                        }
                    },
                    onLoad: function() {},
                    ongetcooling: function() {
                        var e = this.phone_EditBox.getComponent(cc.EditBox).string.replace(/(^\s*)|(\s*$)/g, "");
                        if (e.length < 11)(i = cc.beimi.beiMiCommon).alert("请输入正确的手机号码");
                        else {
                            this.btn_getcooling.active = !1,
                                this.btn_wait.active = !0,
                                this.timer(this, 60);
                            var i = cc.beimi.beiMiCommon;
                            i.loadding();
                            var t = {
                                phone: e
                            };
                            this.type = 101;
                            cc.beimi.http.httpPost("/redCard/SMSSend", t, this.sucess, this.error, this)
                        }
                    },
                    onsure: function() {
                        var e = this.phone_EditBox.getComponent(cc.EditBox).string.replace(/(^\s*)|(\s*$)/g, ""),
                            i = this.yan_EditBox.getComponent(cc.EditBox).string.replace(/(^\s*)|(\s*$)/g, "");
                        if (e.length < 11)(t = cc.beimi.beiMiCommon).alert("请输入正确的手机号码");
                        else if (i.length < 4)(t = cc.beimi.beiMiCommon).alert("请输入正确的验证码");
                        else {
                            this.btn_getcooling.active = !1,
                                this.btn_wait.active = !0,
                                this.timer(this, 60);
                            var t = cc.beimi.beiMiCommon;
                            t.loadding();
                            var a = {
                                phone: e,
                                code: i
                            };
                            this.type = 100;
                            cc.beimi.http.httpPost("/redCard/SMSVerify", a, this.sucess, this.error, this)
                        }
                    },
                    onnexttime: function() {
                        var e = cc.find("Canvas/mobile_bind");
                        cc.beimi.mobile_bind.put(e),
                            cc.beimi.receive_js.onClick_openbag("", cc.beimi.receive_js)
                    },
                    onClose: function() {
                        var e = cc.find("Canvas/mobile_bind");
                        cc.beimi.mobile_bind.put(e)
                    },
                    sucess: function(e, i) {
                        var t = cc.beimi.beiMiCommon;
                        t.closeloadding(t.loaddingdialog);
                        var a = JSON.parse(e);
                        if (cc.log("红包data:" + JSON.stringify(a)), null != a && 200 == a.code) {
                            if (100 == i.type) {
                                var n = cc.find("Canvas/mobile_bind");
                                cc.beimi.mobile_bind.put(n),
                                    (t = cc.beimi.beiMiCommon).alert("绑定成功"),
                                    cc.beimi.hasPhone = !0
                            }
                        } else t.alert(a.msg)
                    },
                    error: function(e, i) {
                        var t = cc.beimi.beiMiCommon;
                        t.closeloadding(t.loaddingdialog),
                            t.alert("网络异常，服务访问失败")
                    },
                    timer: function(e, i) {
                        e.cooling.string = i > 9 ? "重新发送(" + i + "s)": "重新发送(0" + i + "s)",
                            e.callback = function() {
                                if ((i -= 1) >= 0) {
                                    var t = i;
                                    i < 10 && (t = "0" + i),
                                    0 == i && (e.btn_getcooling.active = !0, e.btn_wait.active = !1),
                                        e.cooling.string = "重新发送(" + t + "s)"
                                }
                            },
                            e.unscheduleAllCallbacks(),
                            e.schedule(e.callback, 1, i, 0)
                    }
                }),
                cc._RF.pop()
        },
            {}],
        myRed: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "6d8998vLi9Leq3CTl9zhK1t", "myRed");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    select: {
                        default:
                            null,
                        type: cc.Node
                    },
                    red_item_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    setscroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    nodata: {
                        default:
                            null,
                        type: cc.Node
                    },
                    getnode: {
                        default:
                            null,
                        type: cc.Node
                    },
                    setnode: {
                        default:
                            null,
                        type: cc.Node
                    },
                    left_lable: {
                        default:
                            null,
                        type: cc.Node
                    },
                    right_lable: {
                        default:
                            null,
                        type: cc.Node
                    },
                    OPT_HEIGHT: 110
                },
                onLoad: function() {
                    var e = window.weixinConfig,
                        i = cc.beimi.beiMiCommon;
                    e && i.weixinConfig(e),
                        this.ismyred = !0,
                        this.value_get = [],
                        this.value_set = [],
                        this.item_get = [],
                        this.item_set = [],
                        this.offget = 0,
                        this.limit = 25,
                        this.offset = 0,
                        this.setlimit = 25,
                        this.myGetRed(this.offget, this.limit),
                        this.isfirst = !0,
                        this.getnode.active = !0,
                        this.setnode.active = !1
                },
                onClick_letf: function() {
                    this.getnode.active = !0,
                        this.setnode.active = !1,
                        this.select.anchorX = 1,
                        this.ismyred = !0,
                        this.left_lable.color = cc.Color.YELLOW.fromHEX("#31FC21"),
                        this.right_lable.color = cc.Color.YELLOW.fromHEX("#FFF500")
                },
                onClick_right: function() {
                    this.left_lable.color = cc.Color.YELLOW.fromHEX("#FFF500"),
                        this.right_lable.color = cc.Color.YELLOW.fromHEX("#31FC21"),
                        this.getnode.active = !1,
                        this.setnode.active = !0,
                        this.select.anchorX = 0,
                        this.ismyred = !1,
                    this.isfirst && (this.isfirst = !1, this.mySendRed(this.offset, this.setlimit))
                },
                myGetRed: function(e, i) {
                    cc.beimi.beiMiCommon.loadding();
                    var t = {
                            offset: e,
                            limit: i
                        },
                        a = new Date;
                    cc.log("收到的红包申请time: " + a.getMinutes() + " :" + a.getSeconds());
                    cc.beimi.http.httpPost("/redCard/myGetRed", t, this.sucess, this.error, this)
                },
                mySendRed: function(e, i) {
                    cc.beimi.beiMiCommon.loadding();
                    var t = {
                        offset: e,
                        limit: i
                    };
                    cc.beimi.http.httpPost("/redCard/mySendRed", t, this.sucess, this.error, this)
                },
                sucess: function(e, i) {
                    var t = new Date;
                    cc.log("收到的红包申请成功time: " + t.getMinutes() + " :" + t.getSeconds());
                    var a = cc.beimi.beiMiCommon;
                    a.closeloadding(a.loaddingdialog);
                    var n = JSON.parse(e);
                    if (cc.log("红包data:" + JSON.stringify(n)), null != n && 200 == n.code) {
                        if (n.data && n.data.length > 0) {
                            i.ismyred ? i.value_get = i.value_get.concat(n.data) : i.value_set = i.value_set.concat(n.data);
                            for (var c = 0; c < n.data.length; c++) if (i.ismyred) {
                                if (i.item_get.length < 24) {
                                    o = cc.instantiate(i.red_item_prefab);
                                    i.scroll_view.content.addChild(o),
                                        i.item_get.push(o)
                                }
                            } else if (i.item_set.length < 24) {
                                var o = cc.instantiate(i.red_item_prefab);
                                i.setscroll_view.content.addChild(o),
                                    i.item_set.push(o)
                            }
                            i.ismyred ? i.load_item_data(i.start_index, 1) : i.load_item_data(i.setstart_index, 2)
                        }
                    } else a.closeloadding(a.loaddingdialog),
                        a.alert(n.msg)
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                load_item_data: function(e, i) {
                    if (1 == i) t = this.item_get;
                    else if (2 == i) var t = this.item_set;
                    for (var n = 0; n < t.length; n++) {
                        var c = t[n],
                            o = c.getChildByName("left").getChildByName("name").getComponent(cc.Label),
                            s = c.getChildByName("right").getChildByName("cards").getComponent(cc.Label),
                            r = c.getChildByName("right").getChildByName("time").getComponent(cc.Label),
                            l = c.getChildByName("left").getChildByName("player_head_boy").getChildByName("bull_banker_animate").getComponent(cc.Sprite),
                            m = c.getChildByName("left").getChildByName("player_head_boy"),
                            d = c.getChildByName("left").getChildByName("redbag"),
                            u = c.getChildByName("bg1").getComponent(cc.Button);
                        if (1 == i) {
                            var h = this.value_get[e + n].photo,
                                g = this.value_get[e + n].name,
                                p = this.value_get[e + n].num;
                            m.active = !0,
                                d.active = !1,
                                u.node.off(cc.Node.EventType.TOUCH_END),
                                u.node.on(cc.Node.EventType.TOUCH_END, this.selectred.bind(this, this.value_get[e + n].id, this.value_get[e + n].sign), this),
                                r.string = a.prototype.formatdate(this.value_get[e + n].uTime)
                        } else if (2 == i) {
                            if (this.value_set[e + n].receive) {
                                var h = this.value_set[e + n].photo,
                                    g = this.value_set[e + n].name;
                                m.active = !0,
                                    d.active = !1
                            } else {
                                g = "未领取";
                                m.active = !1,
                                    d.active = !0
                            }
                            p = this.value_set[e + n].num;
                            r.string = a.prototype.formatdate(this.value_set[e + n].uTime),
                                u.node.off(cc.Node.EventType.TOUCH_END),
                                u.node.on(cc.Node.EventType.TOUCH_END, this.selectred.bind(this, this.value_set[e + n].id, this.value_set[e + n].sign), this)
                        }
                        h && this.loadhead(l, h),
                            o.string = g,
                            s.string = p + "张房卡"
                    }
                },
                loadhead: function(e, i) {
                    cc.loader.load({
                            url: i,
                            type: "png"
                        },
                        function(i, t) {
                            var a = new cc.SpriteFrame(t);
                            e.spriteFrame = a
                        })
                },
                start: function() {
                    this.start_index = 0,
                        this.setstart_index = 0,
                        this.content_start_y = this.scroll_view.content.y,
                        this.setcontent_start_y = this.setscroll_view.content.y
                },
                selectred: function(e, i) {
                    cc.log("我被点击了：" + e + "--" + i),
                        cc.beimi.redId = e,
                        cc.beimi.redSign = i;
                    var t = cc.beimi.http.mainurl + "joinType=2&id=" + e + "&sign=" + i;
                    window.history && window.history.replaceState(null, null, t),
                        cc.log("微信分享红包mainUrl:" + t);
                    var a = cc.beimi.beiMiCommon;
                    a.loadding(),
                        a.scene("receive", a)
                },
                onClick_home: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("hall", e)
                },
                update: function(e) {
                    if (this.value_get) if (this.ismyred && this.value_get.length > 0 ? this.nodata.active = !1 : this.ismyred && 0 == this.value_get.length ? this.nodata.active = !0 : this.ismyred || 0 != this.value_set.length ? !this.ismyred && this.value_set.length > 0 && (this.nodata.active = !1) : this.nodata.active = !0, this.ismyred) {
                        if (this.start_index + 24 < this.value_get.length && this.scroll_view.content.y >= this.content_start_y + 16 * this.OPT_HEIGHT) {
                            this.scroll_view.stopAutoScroll();
                            i = 8;
                            return this.start_index += i,
                            this.start_index + 24 > this.value_get.length && (i -= t = this.start_index + 24 - this.value_get.length, this.start_index -= t),
                                this.scroll_view.content.y -= i * this.OPT_HEIGHT,
                                this.load_item_data(this.start_index, 1),
                                cc.log("该加载了" + this.start_index),
                                void(this.start_index + 25 > this.value_get.length && (this.offget = this.offget + this.limit, this.limit = 24, this.myGetRed(this.offget, this.limit)))
                        }
                        if (this.start_index > 0 && this.scroll_view.content.y <= this.content_start_y) {
                            this.scroll_view.stopAutoScroll();
                            a = 8;
                            this.start_index -= a,
                            this.start_index < 0 && (a += this.start_index, this.start_index = 0),
                                this.scroll_view.content.y += a * this.OPT_HEIGHT,
                                this.load_item_data(this.start_index, 1)
                        }
                    } else {
                        if (this.setstart_index + 24 < this.value_set.length && this.setscroll_view.content.y >= this.setcontent_start_y + 16 * this.OPT_HEIGHT) {
                            this.setscroll_view.stopAutoScroll();
                            var i = 8;
                            if (this.setstart_index += i, this.setstart_index + 24 > this.value_set.length) {
                                var t = this.setstart_index + 24 - this.value_set.length;
                                i -= t,
                                    this.setstart_index -= t
                            }
                            return this.setscroll_view.content.y -= i * this.OPT_HEIGHT,
                                this.load_item_data(this.setstart_index, 2),
                                cc.log("该加载了2=>:" + this.setstart_index),
                                void(this.setstart_index + 25 > this.value_set.length && (this.offset = this.offset + this.setlimit, this.setlimit = 24, this.mySendRed(this.offset, this.setlimit)))
                        }
                        if (this.setstart_index > 0 && this.setscroll_view.content.y <= this.setcontent_start_y) {
                            this.setscroll_view.stopAutoScroll();
                            var a = 8;
                            this.setstart_index -= a,
                            this.setstart_index < 0 && (a += this.setstart_index, this.setstart_index = 0),
                                this.setscroll_view.content.y += a * this.OPT_HEIGHT,
                                this.load_item_data(this.setstart_index, 2)
                        }
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        niu: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "453e63fwEtNfq8TVE/nu8jN", "niu"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        num_black: {
                            default:
                                null,
                            type: cc.Node
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {},
                    order: function(e) {
                        var i;
                        i = this.atlas.getSpriteFrame("game_niu" + e),
                            this.num_black.getComponent(cc.Sprite).spriteFrame = i
                    }
                }),
                cc._RF.pop()
        },
            {}],
        paijiu_hit: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "4b5f8schltPe7VYN7d56De9", "paijiu_hit"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {},
                    sortPoker: function(e, i) {
                        if (e == i) return 1;
                        var t = e.split("_"),
                            a = i.split("_"),
                            n = parseInt(t[0]),
                            c = parseInt(a[0]);
                        return n > c ? -1 : n == c && parseInt(t[1]) > parseInt(a[1]) ? -1 : 1
                    },
                    pokerPointValue: function(e, i) {
                        e.sort(this.sortPoker);
                        var t = 0,
                            a = e[0].split("_"),
                            n = e[1].split("_");
                        if (a[0] == n[0]) return t = parseInt(a[0]),
                            "0" == a[0] ? 116 : 100 + t;
                        var c = parseInt(n[2]);
                        if ("15" == a[0]) {
                            if (c >= 7 && c < 10) return 9 == c ? t = 69 : 8 == c ? t = 48 : 7 == c && (t = 27),
                                t
                        } else if ("14" == a[0] && c >= 7 && c < 10) return 9 == c ? t = 59 : 8 == c ? t = 38 : 7 == c && (t = 17),
                            t;
                        if ("0" == n[0] && i) {
                            var o = parseInt(a[2]),
                                s = (o + 3) % 10,
                                r = (o + 6) % 10;
                            return t = s > r ? s: r
                        }
                        return t = (parseInt(a[2]) + c) % 10
                    },
                    getPointValue: function(e) {
                        var i = 0;
                        switch (e) {
                            case 116:
                                i = 75;
                                break;
                            case 115:
                            case 114:
                            case 113:
                                i = 70;
                                break;
                            case 112:
                            case 111:
                            case 110:
                            case 109:
                            case 108:
                            case 107:
                            case 106:
                            case 105:
                                i = 65;
                                break;
                            case 69:
                            case 59:
                                i = 60;
                                break;
                            case 48:
                            case 38:
                                i = 55;
                                break;
                            case 27:
                            case 17:
                                i = 50;
                                break;
                            default:
                                i = 0 == e ? -5 : 50 - 5 * (10 - e)
                        }
                        return i
                    },
                    pokerTips: function(e, i) {
                        for (var t = [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2]], a = 0, n = 0, c = 0; c < t.length; c++) {
                            var o = t[c],
                                s = [e[o[0]], e[o[1]]],
                                r = [e[o[2]], e[o[3]]],
                                l = this.pokerPointValue(s, i),
                                m = this.pokerPointValue(r, i);
                            console.log("index:" + c + " point1:" + l + " point2:" + m);
                            var d = this.getPointValue(l) + this.getPointValue(m);
                            d > a && (a = d, n = c)
                        }
                        return console.log("lastIndex:" + n),
                            t[n]
                    }
                }),
                cc._RF.pop()
        },
            {}],
        paijiu: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "b055c9UrEBAmKrOioR7FglW", "paijiu"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        newCard_bm: {
                            default:
                                null,
                            type: cc.Node
                        },
                        num_black: {
                            default:
                                null,
                            type: cc.Node
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {
                        this.isclisking = !1,
                            this.isturning = !1
                    },
                    isOpen: function(e, i, t, a) {
                        if (1 != this.isturning) if (a) this.newCard_bm.active = e;
                        else {
                            cc.log("翻牌" + e);
                            cc.beimi.runGame;
                            var n = this;
                            if (e) this.newCard_bm.active = e;
                            else if (n.newCard_bm.active) {
                                n.isturning = !0;
                                var c = cc.scaleTo(.2, .3, t),
                                    o = cc.scaleTo(.2, i, t),
                                    s = cc.callFunc(function() {
                                        n.newCard_bm.active = e
                                    }),
                                    r = cc.callFunc(function() {
                                        n.isturning = !1
                                    }),
                                    l = cc.sequence(c, s, o, r);
                                this.node.runAction(l)
                            }
                        }
                    },
                    isclick: function(e) {
                        this.newCard_bm.getComponent(cc.Button).interactable = e
                    },
                    ispaiclick: function(e, i) {
                        this.num_black.getComponent(cc.Button).interactable = e,
                        i && (this.oncheck = !1)
                    },
                    paionclick: function(e, i) {
                        var t = cc.beimi.runGame;
                        if (this.oncheck) {
                            if (cc.beimi.popup_paijiu <= 0) return;
                            cc.beimi.popup_paijiu -= 1,
                                this.node.runAction(cc.moveBy(0, 0, -20)),
                                this.oncheck = !1
                        } else {
                            if (i) return;
                            cc.beimi.popup_paijiu += 1,
                                this.node.runAction(cc.moveBy(0, 0, 20)),
                                this.oncheck = !0
                        }
                        2 == cc.beimi.popup_paijiu ? t.zupai_hit(!0) : t.zupai_hit(!1)
                    },
                    getstatus: function() {
                        return this.oncheck
                    },
                    getvalue: function() {
                        return this.paijiu_num
                    },
                    order: function(e) {
                        var i;
                        this.pai_num = e,
                        0 != e && (this.paijiu_num = e, i = this.atlas.getSpriteFrame("img_" + e), this.num_black.getComponent(cc.Sprite).spriteFrame = i)
                    },
                    onClick_turnCard: function() {
                        if (!this.isclisking) {
                            var e = cc.beimi.runGame,
                                i = this,
                                t = this.node.scale;
                            if (i.newCard_bm.active) {
                                this.isclisking = !0;
                                var a = cc.scaleTo(.2, .3, t),
                                    n = cc.scaleTo(.2, t, t),
                                    c = cc.callFunc(function() {
                                        i.newCard_bm.active = !1
                                    }),
                                    o = cc.callFunc(function() {
                                        i.isclisking = !1
                                    }),
                                    s = cc.sequence(a, c, n, o);
                                this.node.runAction(s)
                            }
                            e.outhit(!1),
                                e.outTanpaibtn(!0)
                        }
                    }
                }),
                cc._RF.pop()
        },
            {}],
        "pako.min": [function(e, i, t) { (function(a) {
            "use strict";
            cc._RF.push(i, "3ded4MzvWRITqR6TcocPzoI", "pako.min");
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                }; !
                function(e) {
                    "object" == (void 0 === t ? "undefined": n(t)) && void 0 !== i ? i.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window: void 0 !== a ? a: "undefined" != typeof self ? self: this).pako = e()
                } (function() {
                    return function i(t, a, n) {
                        function c(s, r) {
                            if (!a[s]) {
                                if (!t[s]) {
                                    var l = "function" == typeof e && e;
                                    if (!r && l) return l(s, !0);
                                    if (o) return o(s, !0);
                                    var m = new Error("Cannot find module '" + s + "'");
                                    throw m.code = "MODULE_NOT_FOUND",
                                        m
                                }
                                var d = a[s] = {
                                    exports: {}
                                };
                                t[s][0].call(d.exports,
                                    function(e) {
                                        return c(t[s][1][e] || e)
                                    },
                                    d, d.exports, i, t, a, n)
                            }
                            return a[s].exports
                        }
                        for (var o = "function" == typeof e && e,
                                 s = 0; s < n.length; s++) c(n[s]);
                        return c
                    } ({
                            1 : [function(e, i, t) {
                                function a(e) {
                                    if (! (this instanceof a)) return new a(e);
                                    this.options = o.assign({
                                            level: u,
                                            method: g,
                                            chunkSize: 16384,
                                            windowBits: 15,
                                            memLevel: 8,
                                            strategy: h,
                                            to: ""
                                        },
                                        e || {});
                                    var i = this.options;
                                    i.raw && i.windowBits > 0 ? i.windowBits = -i.windowBits: i.gzip && i.windowBits > 0 && i.windowBits < 16 && (i.windowBits += 16),
                                        this.err = 0,
                                        this.msg = "",
                                        this.ended = !1,
                                        this.chunks = [],
                                        this.strm = new l,
                                        this.strm.avail_out = 0;
                                    var t = c.deflateInit2(this.strm, i.level, i.method, i.windowBits, i.memLevel, i.strategy);
                                    if (t !== d) throw new Error(r[t]);
                                    if (i.header && c.deflateSetHeader(this.strm, i.header), i.dictionary) {
                                        var n;
                                        if (n = "string" == typeof i.dictionary ? s.string2buf(i.dictionary) : "[object ArrayBuffer]" === m.call(i.dictionary) ? new Uint8Array(i.dictionary) : i.dictionary, (t = c.deflateSetDictionary(this.strm, n)) !== d) throw new Error(r[t]);
                                        this._dict_set = !0
                                    }
                                }
                                function n(e, i) {
                                    var t = new a(i);
                                    if (t.push(e, !0), t.err) throw t.msg || r[t.err];
                                    return t.result
                                }
                                var c = e("./zlib/deflate"),
                                    o = e("./utils/common"),
                                    s = e("./utils/strings"),
                                    r = e("./zlib/messages"),
                                    l = e("./zlib/zstream"),
                                    m = Object.prototype.toString,
                                    d = 0,
                                    u = -1,
                                    h = 0,
                                    g = 8;
                                a.prototype.push = function(e, i) {
                                    var t, a, n = this.strm,
                                        r = this.options.chunkSize;
                                    if (this.ended) return ! 1;
                                    a = i === ~~i ? i: !0 === i ? 4 : 0,
                                        "string" == typeof e ? n.input = s.string2buf(e) : "[object ArrayBuffer]" === m.call(e) ? n.input = new Uint8Array(e) : n.input = e,
                                        n.next_in = 0,
                                        n.avail_in = n.input.length;
                                    do {
                                        if (0 === n.avail_out && (n.output = new o.Buf8(r), n.next_out = 0, n.avail_out = r), 1 !== (t = c.deflate(n, a)) && t !== d) return this.onEnd(t), this.ended = !0, !1;
                                        0 !== n.avail_out && (0 !== n.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(s.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)))
                                    } while (( n . avail_in > 0 || 0 === n . avail_out ) && 1 !== t);
                                    return 4 === a ? (t = c.deflateEnd(this.strm), this.onEnd(t), this.ended = !0, t === d) : 2 !== a || (this.onEnd(d), n.avail_out = 0, !0)
                                },
                                    a.prototype.onData = function(e) {
                                        this.chunks.push(e)
                                    },
                                    a.prototype.onEnd = function(e) {
                                        e === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
                                            this.chunks = [],
                                            this.err = e,
                                            this.msg = this.strm.msg
                                    },
                                    t.Deflate = a,
                                    t.deflate = n,
                                    t.deflateRaw = function(e, i) {
                                        return i = i || {},
                                            i.raw = !0,
                                            n(e, i)
                                    },
                                    t.gzip = function(e, i) {
                                        return i = i || {},
                                            i.gzip = !0,
                                            n(e, i)
                                    }
                            },
                                {
                                    "./utils/common": 3,
                                    "./utils/strings": 4,
                                    "./zlib/deflate": 8,
                                    "./zlib/messages": 13,
                                    "./zlib/zstream": 15
                                }],
                            2 : [function(e, i, t) {
                                function a(e) {
                                    if (! (this instanceof a)) return new a(e);
                                    this.options = o.assign({
                                            chunkSize: 16384,
                                            windowBits: 0,
                                            to: ""
                                        },
                                        e || {});
                                    var i = this.options;
                                    i.raw && i.windowBits >= 0 && i.windowBits < 16 && (i.windowBits = -i.windowBits, 0 === i.windowBits && (i.windowBits = -15)),
                                    !(i.windowBits >= 0 && i.windowBits < 16) || e && e.windowBits || (i.windowBits += 32),
                                    i.windowBits > 15 && i.windowBits < 48 && 0 == (15 & i.windowBits) && (i.windowBits |= 15),
                                        this.err = 0,
                                        this.msg = "",
                                        this.ended = !1,
                                        this.chunks = [],
                                        this.strm = new m,
                                        this.strm.avail_out = 0;
                                    var t = c.inflateInit2(this.strm, i.windowBits);
                                    if (t !== r.Z_OK) throw new Error(l[t]);
                                    this.header = new d,
                                        c.inflateGetHeader(this.strm, this.header)
                                }
                                function n(e, i) {
                                    var t = new a(i);
                                    if (t.push(e, !0), t.err) throw t.msg || l[t.err];
                                    return t.result
                                }
                                var c = e("./zlib/inflate"),
                                    o = e("./utils/common"),
                                    s = e("./utils/strings"),
                                    r = e("./zlib/constants"),
                                    l = e("./zlib/messages"),
                                    m = e("./zlib/zstream"),
                                    d = e("./zlib/gzheader"),
                                    u = Object.prototype.toString;
                                a.prototype.push = function(e, i) {
                                    var t, a, n, l, m, d, h = this.strm,
                                        g = this.options.chunkSize,
                                        p = this.options.dictionary,
                                        f = !1;
                                    if (this.ended) return ! 1;
                                    a = i === ~~i ? i: !0 === i ? r.Z_FINISH: r.Z_NO_FLUSH,
                                        "string" == typeof e ? h.input = s.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? h.input = new Uint8Array(e) : h.input = e,
                                        h.next_in = 0,
                                        h.avail_in = h.input.length;
                                    do {
                                        if (0 === h.avail_out && (h.output = new o.Buf8(g), h.next_out = 0, h.avail_out = g), (t = c.inflate(h, r.Z_NO_FLUSH)) === r.Z_NEED_DICT && p && (d = "string" == typeof p ? s.string2buf(p) : "[object ArrayBuffer]" === u.call(p) ? new Uint8Array(p) : p, t = c.inflateSetDictionary(this.strm, d)), t === r.Z_BUF_ERROR && !0 === f && (t = r.Z_OK, f = !1), t !== r.Z_STREAM_END && t !== r.Z_OK) return this.onEnd(t), this.ended = !0, !1;
                                        h.next_out && (0 !== h.avail_out && t !== r.Z_STREAM_END && (0 !== h.avail_in || a !== r.Z_FINISH && a !== r.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = s.utf8border(h.output, h.next_out), l = h.next_out - n, m = s.buf2string(h.output, n), h.next_out = l, h.avail_out = g - l, l && o.arraySet(h.output, h.output, n, l, 0), this.onData(m)) : this.onData(o.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0)
                                    } while (( h . avail_in > 0 || 0 === h . avail_out ) && t !== r.Z_STREAM_END);
                                    return t === r.Z_STREAM_END && (a = r.Z_FINISH),
                                        a === r.Z_FINISH ? (t = c.inflateEnd(this.strm), this.onEnd(t), this.ended = !0, t === r.Z_OK) : a !== r.Z_SYNC_FLUSH || (this.onEnd(r.Z_OK), h.avail_out = 0, !0)
                                },
                                    a.prototype.onData = function(e) {
                                        this.chunks.push(e)
                                    },
                                    a.prototype.onEnd = function(e) {
                                        e === r.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
                                            this.chunks = [],
                                            this.err = e,
                                            this.msg = this.strm.msg
                                    },
                                    t.Inflate = a,
                                    t.inflate = n,
                                    t.inflateRaw = function(e, i) {
                                        return i = i || {},
                                            i.raw = !0,
                                            n(e, i)
                                    },
                                    t.ungzip = n
                            },
                                {
                                    "./utils/common": 3,
                                    "./utils/strings": 4,
                                    "./zlib/constants": 6,
                                    "./zlib/gzheader": 9,
                                    "./zlib/inflate": 11,
                                    "./zlib/messages": 13,
                                    "./zlib/zstream": 15
                                }],
                            3 : [function(e, i, t) {
                                function a(e, i) {
                                    return Object.prototype.hasOwnProperty.call(e, i)
                                }
                                var c = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                                t.assign = function(e) {
                                    for (var i = Array.prototype.slice.call(arguments, 1); i.length;) {
                                        var t = i.shift();
                                        if (t) {
                                            if ("object" != (void 0 === t ? "undefined": n(t))) throw new TypeError(t + "must be non-object");
                                            for (var c in t) a(t, c) && (e[c] = t[c])
                                        }
                                    }
                                    return e
                                },
                                    t.shrinkBuf = function(e, i) {
                                        return e.length === i ? e: e.subarray ? e.subarray(0, i) : (e.length = i, e)
                                    };
                                var o = {
                                        arraySet: function(e, i, t, a, n) {
                                            if (i.subarray && e.subarray) e.set(i.subarray(t, t + a), n);
                                            else for (var c = 0; c < a; c++) e[n + c] = i[t + c]
                                        },
                                        flattenChunks: function(e) {
                                            var i, t, a, n, c, o;
                                            for (a = 0, i = 0, t = e.length; i < t; i++) a += e[i].length;
                                            for (o = new Uint8Array(a), n = 0, i = 0, t = e.length; i < t; i++) c = e[i],
                                                o.set(c, n),
                                                n += c.length;
                                            return o
                                        }
                                    },
                                    s = {
                                        arraySet: function(e, i, t, a, n) {
                                            for (var c = 0; c < a; c++) e[n + c] = i[t + c]
                                        },
                                        flattenChunks: function(e) {
                                            return [].concat.apply([], e)
                                        }
                                    };
                                t.setTyped = function(e) {
                                    e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, o)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, s))
                                },
                                    t.setTyped(c)
                            },
                                {}],
                            4 : [function(e, i, t) {
                                function a(e, i) {
                                    if (i < 65537 && (e.subarray && o || !e.subarray && c)) return String.fromCharCode.apply(null, n.shrinkBuf(e, i));
                                    for (var t = "",
                                             a = 0; a < i; a++) t += String.fromCharCode(e[a]);
                                    return t
                                }
                                var n = e("./common"),
                                    c = !0,
                                    o = !0;
                                try {
                                    String.fromCharCode.apply(null, [0])
                                } catch(e) {
                                    c = !1
                                }
                                try {
                                    String.fromCharCode.apply(null, new Uint8Array(1))
                                } catch(e) {
                                    o = !1
                                }
                                for (var s = new n.Buf8(256), r = 0; r < 256; r++) s[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
                                s[254] = s[254] = 1,
                                    t.string2buf = function(e) {
                                        var i, t, a, c, o, s = e.length,
                                            r = 0;
                                        for (c = 0; c < s; c++) 55296 == (64512 & (t = e.charCodeAt(c))) && c + 1 < s && 56320 == (64512 & (a = e.charCodeAt(c + 1))) && (t = 65536 + (t - 55296 << 10) + (a - 56320), c++),
                                            r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                                        for (i = new n.Buf8(r), o = 0, c = 0; o < r; c++) 55296 == (64512 & (t = e.charCodeAt(c))) && c + 1 < s && 56320 == (64512 & (a = e.charCodeAt(c + 1))) && (t = 65536 + (t - 55296 << 10) + (a - 56320), c++),
                                            t < 128 ? i[o++] = t: t < 2048 ? (i[o++] = 192 | t >>> 6, i[o++] = 128 | 63 & t) : t < 65536 ? (i[o++] = 224 | t >>> 12, i[o++] = 128 | t >>> 6 & 63, i[o++] = 128 | 63 & t) : (i[o++] = 240 | t >>> 18, i[o++] = 128 | t >>> 12 & 63, i[o++] = 128 | t >>> 6 & 63, i[o++] = 128 | 63 & t);
                                        return i
                                    },
                                    t.buf2binstring = function(e) {
                                        return a(e, e.length)
                                    },
                                    t.binstring2buf = function(e) {
                                        for (var i = new n.Buf8(e.length), t = 0, a = i.length; t < a; t++) i[t] = e.charCodeAt(t);
                                        return i
                                    },
                                    t.buf2string = function(e, i) {
                                        var t, n, c, o, r = i || e.length,
                                            l = new Array(2 * r);
                                        for (n = 0, t = 0; t < r;) if ((c = e[t++]) < 128) l[n++] = c;
                                        else if ((o = s[c]) > 4) l[n++] = 65533,
                                            t += o - 1;
                                        else {
                                            for (c &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && t < r;) c = c << 6 | 63 & e[t++],
                                                o--;
                                            o > 1 ? l[n++] = 65533 : c < 65536 ? l[n++] = c: (c -= 65536, l[n++] = 55296 | c >> 10 & 1023, l[n++] = 56320 | 1023 & c)
                                        }
                                        return a(l, n)
                                    },
                                    t.utf8border = function(e, i) {
                                        var t;
                                        for ((i = i || e.length) > e.length && (i = e.length), t = i - 1; t >= 0 && 128 == (192 & e[t]);) t--;
                                        return t < 0 ? i: 0 === t ? i: t + s[e[t]] > i ? t: i
                                    }
                            },
                                {
                                    "./common": 3
                                }],
                            5 : [function(e, i, t) {
                                i.exports = function(e, i, t, a) {
                                    for (var n = 65535 & e | 0,
                                             c = e >>> 16 & 65535 | 0,
                                             o = 0; 0 !== t;) {
                                        t -= o = t > 2e3 ? 2e3: t;
                                        do {
                                            c = c + (n = n + i[a++] | 0) | 0
                                        } while (-- o );
                                        n %= 65521,
                                            c %= 65521
                                    }
                                    return n | c << 16 | 0
                                }
                            },
                                {}],
                            6 : [function(e, i, t) {
                                i.exports = {
                                    Z_NO_FLUSH: 0,
                                    Z_PARTIAL_FLUSH: 1,
                                    Z_SYNC_FLUSH: 2,
                                    Z_FULL_FLUSH: 3,
                                    Z_FINISH: 4,
                                    Z_BLOCK: 5,
                                    Z_TREES: 6,
                                    Z_OK: 0,
                                    Z_STREAM_END: 1,
                                    Z_NEED_DICT: 2,
                                    Z_ERRNO: -1,
                                    Z_STREAM_ERROR: -2,
                                    Z_DATA_ERROR: -3,
                                    Z_BUF_ERROR: -5,
                                    Z_NO_COMPRESSION: 0,
                                    Z_BEST_SPEED: 1,
                                    Z_BEST_COMPRESSION: 9,
                                    Z_DEFAULT_COMPRESSION: -1,
                                    Z_FILTERED: 1,
                                    Z_HUFFMAN_ONLY: 2,
                                    Z_RLE: 3,
                                    Z_FIXED: 4,
                                    Z_DEFAULT_STRATEGY: 0,
                                    Z_BINARY: 0,
                                    Z_TEXT: 1,
                                    Z_UNKNOWN: 2,
                                    Z_DEFLATED: 8
                                }
                            },
                                {}],
                            7 : [function(e, i, t) {
                                var a = function() {
                                    for (var e, i = [], t = 0; t < 256; t++) {
                                        e = t;
                                        for (var a = 0; a < 8; a++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                                        i[t] = e
                                    }
                                    return i
                                } ();
                                i.exports = function(e, i, t, n) {
                                    var c = a,
                                        o = n + t;
                                    e ^= -1;
                                    for (var s = n; s < o; s++) e = e >>> 8 ^ c[255 & (e ^ i[s])];
                                    return - 1 ^ e
                                }
                            },
                                {}],
                            8 : [function(e, i, t) {
                                function a(e, i) {
                                    return e.msg = z[i],
                                        i
                                }
                                function n(e) {
                                    return (e << 1) - (e > 4 ? 9 : 0)
                                }
                                function c(e) {
                                    for (var i = e.length; --i >= 0;) e[i] = 0
                                }
                                function o(e) {
                                    var i = e.state,
                                        t = i.pending;
                                    t > e.avail_out && (t = e.avail_out),
                                    0 !== t && (B.arraySet(e.output, i.pending_buf, i.pending_out, t, e.next_out), e.next_out += t, i.pending_out += t, e.total_out += t, e.avail_out -= t, i.pending -= t, 0 === i.pending && (i.pending_out = 0))
                                }
                                function s(e, i) {
                                    k._tr_flush_block(e, e.block_start >= 0 ? e.block_start: -1, e.strstart - e.block_start, i),
                                        e.block_start = e.strstart,
                                        o(e.strm)
                                }
                                function r(e, i) {
                                    e.pending_buf[e.pending++] = i
                                }
                                function l(e, i) {
                                    e.pending_buf[e.pending++] = i >>> 8 & 255,
                                        e.pending_buf[e.pending++] = 255 & i
                                }
                                function m(e, i, t, a) {
                                    var n = e.avail_in;
                                    return n > a && (n = a),
                                        0 === n ? 0 : (e.avail_in -= n, B.arraySet(i, e.input, e.next_in, n, t), 1 === e.state.wrap ? e.adler = T(e.adler, i, n, t) : 2 === e.state.wrap && (e.adler = x(e.adler, i, n, t)), e.next_in += n, e.total_in += n, n)
                                }
                                function d(e, i) {
                                    var t, a, n = e.max_chain_length,
                                        c = e.strstart,
                                        o = e.prev_length,
                                        s = e.nice_match,
                                        r = e.strstart > e.w_size - J ? e.strstart - (e.w_size - J) : 0,
                                        l = e.window,
                                        m = e.w_mask,
                                        d = e.prev,
                                        u = e.strstart + q,
                                        h = l[c + o - 1],
                                        g = l[c + o];
                                    e.prev_length >= e.good_match && (n >>= 2),
                                    s > e.lookahead && (s = e.lookahead);
                                    do {
                                        if (t = i, l[t + o] === g && l[t + o - 1] === h && l[t] === l[c] && l[++t] === l[c + 1]) {
                                            c += 2,
                                                t++;
                                            do {} while ( l [++ c ] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && l[++c] === l[++t] && c < u);
                                            if (a = q - (u - c), c = u - q, a > o) {
                                                if (e.match_start = i, o = a, a >= s) break;
                                                h = l[c + o - 1],
                                                    g = l[c + o]
                                            }
                                        }
                                    } while (( i = d [ i & m ]) > r && 0 != --n);
                                    return o <= e.lookahead ? o: e.lookahead
                                }
                                function u(e) {
                                    var i, t, a, n, c, o = e.w_size;
                                    do {
                                        if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= o + (o - J)) {
                                            B.arraySet(e.window, e.window, o, o, 0),
                                                e.match_start -= o,
                                                e.strstart -= o,
                                                e.block_start -= o,
                                                i = t = e.hash_size;
                                            do {
                                                a = e.head[--i], e.head[i] = a >= o ? a - o: 0
                                            } while (-- t );
                                            i = t = o;
                                            do {
                                                a = e.prev[--i], e.prev[i] = a >= o ? a - o: 0
                                            } while (-- t );
                                            n += o
                                        }
                                        if (0 === e.strm.avail_in) break;
                                        if (t = m(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= X) for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + X - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < X)););
                                    } while ( e . lookahead < J && 0 !== e . strm . avail_in )
                                }
                                function h(e, i) {
                                    for (var t, a;;) {
                                        if (e.lookahead < J) {
                                            if (u(e), e.lookahead < J && i === S) return V;
                                            if (0 === e.lookahead) break
                                        }
                                        if (t = 0, e.lookahead >= X && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + X - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== t && e.strstart - t <= e.w_size - J && (e.match_length = d(e, t)), e.match_length >= X) if (a = k._tr_tally(e, e.strstart - e.match_start, e.match_length - X), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= X) {
                                            e.match_length--;
                                            do {
                                                e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + X - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                                            } while ( 0 != -- e . match_length );
                                            e.strstart++
                                        } else e.strstart += e.match_length,
                                            e.match_length = 0,
                                            e.ins_h = e.window[e.strstart],
                                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                                        else a = k._tr_tally(e, 0, e.window[e.strstart]),
                                            e.lookahead--,
                                            e.strstart++;
                                        if (a && (s(e, !1), 0 === e.strm.avail_out)) return V
                                    }
                                    return e.insert = e.strstart < X - 1 ? e.strstart: X - 1,
                                        i === R ? (s(e, !0), 0 === e.strm.avail_out ? K: Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? V: W
                                }
                                function g(e, i) {
                                    for (var t, a, n;;) {
                                        if (e.lookahead < J) {
                                            if (u(e), e.lookahead < J && i === S) return V;
                                            if (0 === e.lookahead) break
                                        }
                                        if (t = 0, e.lookahead >= X && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + X - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = X - 1, 0 !== t && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - J && (e.match_length = d(e, t), e.match_length <= 5 && (e.strategy === F || e.match_length === X && e.strstart - e.match_start > 4096) && (e.match_length = X - 1)), e.prev_length >= X && e.match_length <= e.prev_length) {
                                            n = e.strstart + e.lookahead - X,
                                                a = k._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - X),
                                                e.lookahead -= e.prev_length - 1,
                                                e.prev_length -= 2;
                                            do {++e.strstart <= n && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + X - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                                            } while ( 0 != -- e . prev_length );
                                            if (e.match_available = 0, e.match_length = X - 1, e.strstart++, a && (s(e, !1), 0 === e.strm.avail_out)) return V
                                        } else if (e.match_available) {
                                            if ((a = k._tr_tally(e, 0, e.window[e.strstart - 1])) && s(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return V
                                        } else e.match_available = 1,
                                            e.strstart++,
                                            e.lookahead--
                                    }
                                    return e.match_available && (a = k._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0),
                                        e.insert = e.strstart < X - 1 ? e.strstart: X - 1,
                                        i === R ? (s(e, !0), 0 === e.strm.avail_out ? K: Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? V: W
                                }
                                function p(e, i) {
                                    for (var t, a, n, c, o = e.window;;) {
                                        if (e.lookahead <= q) {
                                            if (u(e), e.lookahead <= q && i === S) return V;
                                            if (0 === e.lookahead) break
                                        }
                                        if (e.match_length = 0, e.lookahead >= X && e.strstart > 0 && (n = e.strstart - 1, (a = o[n]) === o[++n] && a === o[++n] && a === o[++n])) {
                                            c = e.strstart + q;
                                            do {} while ( a === o [++ n ] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && n < c);
                                            e.match_length = q - (c - n),
                                            e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                        }
                                        if (e.match_length >= X ? (t = k._tr_tally(e, 1, e.match_length - X), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = k._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (s(e, !1), 0 === e.strm.avail_out)) return V
                                    }
                                    return e.insert = 0,
                                        i === R ? (s(e, !0), 0 === e.strm.avail_out ? K: Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? V: W
                                }
                                function f(e, i) {
                                    for (var t;;) {
                                        if (0 === e.lookahead && (u(e), 0 === e.lookahead)) {
                                            if (i === S) return V;
                                            break
                                        }
                                        if (e.match_length = 0, t = k._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (s(e, !1), 0 === e.strm.avail_out)) return V
                                    }
                                    return e.insert = 0,
                                        i === R ? (s(e, !0), 0 === e.strm.avail_out ? K: Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? V: W
                                }
                                function b(e, i, t, a, n) {
                                    this.good_length = e,
                                        this.max_lazy = i,
                                        this.nice_length = t,
                                        this.max_chain = a,
                                        this.func = n
                                }
                                function y(e) {
                                    e.window_size = 2 * e.w_size,
                                        c(e.head),
                                        e.max_lazy_match = w[e.level].max_lazy,
                                        e.good_match = w[e.level].good_length,
                                        e.nice_match = w[e.level].nice_length,
                                        e.max_chain_length = w[e.level].max_chain,
                                        e.strstart = 0,
                                        e.block_start = 0,
                                        e.lookahead = 0,
                                        e.insert = 0,
                                        e.match_length = e.prev_length = X - 1,
                                        e.match_available = 0,
                                        e.ins_h = 0
                                }
                                function _() {
                                    this.strm = null,
                                        this.status = 0,
                                        this.pending_buf = null,
                                        this.pending_buf_size = 0,
                                        this.pending_out = 0,
                                        this.pending = 0,
                                        this.wrap = 0,
                                        this.gzhead = null,
                                        this.gzindex = 0,
                                        this.method = j,
                                        this.last_flush = -1,
                                        this.w_size = 0,
                                        this.w_bits = 0,
                                        this.w_mask = 0,
                                        this.window = null,
                                        this.window_size = 0,
                                        this.prev = null,
                                        this.head = null,
                                        this.ins_h = 0,
                                        this.hash_size = 0,
                                        this.hash_bits = 0,
                                        this.hash_mask = 0,
                                        this.hash_shift = 0,
                                        this.block_start = 0,
                                        this.match_length = 0,
                                        this.prev_match = 0,
                                        this.match_available = 0,
                                        this.strstart = 0,
                                        this.match_start = 0,
                                        this.lookahead = 0,
                                        this.prev_length = 0,
                                        this.max_chain_length = 0,
                                        this.max_lazy_match = 0,
                                        this.level = 0,
                                        this.strategy = 0,
                                        this.good_match = 0,
                                        this.nice_match = 0,
                                        this.dyn_ltree = new B.Buf16(2 * H),
                                        this.dyn_dtree = new B.Buf16(2 * (2 * G + 1)),
                                        this.bl_tree = new B.Buf16(2 * (2 * D + 1)),
                                        c(this.dyn_ltree),
                                        c(this.dyn_dtree),
                                        c(this.bl_tree),
                                        this.l_desc = null,
                                        this.d_desc = null,
                                        this.bl_desc = null,
                                        this.bl_count = new B.Buf16(U + 1),
                                        this.heap = new B.Buf16(2 * M + 1),
                                        c(this.heap),
                                        this.heap_len = 0,
                                        this.heap_max = 0,
                                        this.depth = new B.Buf16(2 * M + 1),
                                        c(this.depth),
                                        this.l_buf = 0,
                                        this.lit_bufsize = 0,
                                        this.last_lit = 0,
                                        this.d_buf = 0,
                                        this.opt_len = 0,
                                        this.static_len = 0,
                                        this.matches = 0,
                                        this.insert = 0,
                                        this.bi_buf = 0,
                                        this.bi_valid = 0
                                }
                                function v(e) {
                                    var i;
                                    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = A, i = e.state, i.pending = 0, i.pending_out = 0, i.wrap < 0 && (i.wrap = -i.wrap), i.status = i.wrap ? Y: Z, e.adler = 2 === i.wrap ? 0 : 1, i.last_flush = S, k._tr_init(i), I) : a(e, P)
                                }
                                function C(e) {
                                    var i = v(e);
                                    return i === I && y(e.state),
                                        i
                                }
                                function N(e, i, t, n, c, o) {
                                    if (!e) return P;
                                    var s = 1;
                                    if (i === L && (i = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), c < 1 || c > O || t !== j || n < 8 || n > 15 || i < 0 || i > 9 || o < 0 || o > E) return a(e, P);
                                    8 === n && (n = 9);
                                    var r = new _;
                                    return e.state = r,
                                        r.strm = e,
                                        r.wrap = s,
                                        r.gzhead = null,
                                        r.w_bits = n,
                                        r.w_size = 1 << r.w_bits,
                                        r.w_mask = r.w_size - 1,
                                        r.hash_bits = c + 7,
                                        r.hash_size = 1 << r.hash_bits,
                                        r.hash_mask = r.hash_size - 1,
                                        r.hash_shift = ~~ ((r.hash_bits + X - 1) / X),
                                        r.window = new B.Buf8(2 * r.w_size),
                                        r.head = new B.Buf16(r.hash_size),
                                        r.prev = new B.Buf16(r.w_size),
                                        r.lit_bufsize = 1 << c + 6,
                                        r.pending_buf_size = 4 * r.lit_bufsize,
                                        r.pending_buf = new B.Buf8(r.pending_buf_size),
                                        r.d_buf = 1 * r.lit_bufsize,
                                        r.l_buf = 3 * r.lit_bufsize,
                                        r.level = i,
                                        r.strategy = o,
                                        r.method = t,
                                        C(e)
                                }
                                var w, B = e("../utils/common"),
                                    k = e("./trees"),
                                    T = e("./adler32"),
                                    x = e("./crc32"),
                                    z = e("./messages"),
                                    S = 0,
                                    R = 4,
                                    I = 0,
                                    P = -2,
                                    L = -1,
                                    F = 1,
                                    E = 4,
                                    A = 2,
                                    j = 8,
                                    O = 9,
                                    M = 286,
                                    G = 30,
                                    D = 19,
                                    H = 2 * M + 1,
                                    U = 15,
                                    X = 3,
                                    q = 258,
                                    J = q + X + 1,
                                    Y = 42,
                                    Z = 113,
                                    V = 1,
                                    W = 2,
                                    K = 3,
                                    Q = 4;
                                w = [new b(0, 0, 0, 0,
                                    function(e, i) {
                                        var t = 65535;
                                        for (t > e.pending_buf_size - 5 && (t = e.pending_buf_size - 5);;) {
                                            if (e.lookahead <= 1) {
                                                if (u(e), 0 === e.lookahead && i === S) return V;
                                                if (0 === e.lookahead) break
                                            }
                                            e.strstart += e.lookahead,
                                                e.lookahead = 0;
                                            var a = e.block_start + t;
                                            if ((0 === e.strstart || e.strstart >= a) && (e.lookahead = e.strstart - a, e.strstart = a, s(e, !1), 0 === e.strm.avail_out)) return V;
                                            if (e.strstart - e.block_start >= e.w_size - J && (s(e, !1), 0 === e.strm.avail_out)) return V
                                        }
                                        return e.insert = 0,
                                            i === R ? (s(e, !0), 0 === e.strm.avail_out ? K: Q) : (e.strstart > e.block_start && (s(e, !1), e.strm.avail_out), V)
                                    }), new b(4, 4, 8, 4, h), new b(4, 5, 16, 8, h), new b(4, 6, 32, 32, h), new b(4, 4, 16, 16, g), new b(8, 16, 32, 32, g), new b(8, 16, 128, 128, g), new b(8, 32, 128, 256, g), new b(32, 128, 258, 1024, g), new b(32, 258, 258, 4096, g)],
                                    t.deflateInit = function(e, i) {
                                        return N(e, i, j, 15, 8, 0)
                                    },
                                    t.deflateInit2 = N,
                                    t.deflateReset = C,
                                    t.deflateResetKeep = v,
                                    t.deflateSetHeader = function(e, i) {
                                        return e && e.state ? 2 !== e.state.wrap ? P: (e.state.gzhead = i, I) : P
                                    },
                                    t.deflate = function(e, i) {
                                        var t, s, m, d;
                                        if (!e || !e.state || i > 5 || i < 0) return e ? a(e, P) : P;
                                        if (s = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === s.status && i !== R) return a(e, 0 === e.avail_out ? -5 : P);
                                        if (s.strm = e, t = s.last_flush, s.last_flush = i, s.status === Y) if (2 === s.wrap) e.adler = 0,
                                            r(s, 31),
                                            r(s, 139),
                                            r(s, 8),
                                            s.gzhead ? (r(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), r(s, 255 & s.gzhead.time), r(s, s.gzhead.time >> 8 & 255), r(s, s.gzhead.time >> 16 & 255), r(s, s.gzhead.time >> 24 & 255), r(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), r(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (r(s, 255 & s.gzhead.extra.length), r(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (e.adler = x(e.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = 69) : (r(s, 0), r(s, 0), r(s, 0), r(s, 0), r(s, 0), r(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), r(s, 3), s.status = Z);
                                        else {
                                            var u = j + (s.w_bits - 8 << 4) << 8;
                                            u |= (s.strategy >= 2 || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3) << 6,
                                            0 !== s.strstart && (u |= 32),
                                                u += 31 - u % 31,
                                                s.status = Z,
                                                l(s, u),
                                            0 !== s.strstart && (l(s, e.adler >>> 16), l(s, 65535 & e.adler)),
                                                e.adler = 1
                                        }
                                        if (69 === s.status) if (s.gzhead.extra) {
                                            for (m = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)), o(e), m = s.pending, s.pending !== s.pending_buf_size));) r(s, 255 & s.gzhead.extra[s.gzindex]),
                                                s.gzindex++;
                                            s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)),
                                            s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = 73)
                                        } else s.status = 73;
                                        if (73 === s.status) if (s.gzhead.name) {
                                            m = s.pending;
                                            do {
                                                if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)), o(e), m = s.pending, s.pending === s.pending_buf_size)) {
                                                    d = 1;
                                                    break
                                                }
                                                d = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, r(s, d)
                                            } while ( 0 !== d );
                                            s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)),
                                            0 === d && (s.gzindex = 0, s.status = 91)
                                        } else s.status = 91;
                                        if (91 === s.status) if (s.gzhead.comment) {
                                            m = s.pending;
                                            do {
                                                if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)), o(e), m = s.pending, s.pending === s.pending_buf_size)) {
                                                    d = 1;
                                                    break
                                                }
                                                d = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, r(s, d)
                                            } while ( 0 !== d );
                                            s.gzhead.hcrc && s.pending > m && (e.adler = x(e.adler, s.pending_buf, s.pending - m, m)),
                                            0 === d && (s.status = 103)
                                        } else s.status = 103;
                                        if (103 === s.status && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && o(e), s.pending + 2 <= s.pending_buf_size && (r(s, 255 & e.adler), r(s, e.adler >> 8 & 255), e.adler = 0, s.status = Z)) : s.status = Z), 0 !== s.pending) {
                                            if (o(e), 0 === e.avail_out) return s.last_flush = -1,
                                                I
                                        } else if (0 === e.avail_in && n(i) <= n(t) && i !== R) return a(e, -5);
                                        if (666 === s.status && 0 !== e.avail_in) return a(e, -5);
                                        if (0 !== e.avail_in || 0 !== s.lookahead || i !== S && 666 !== s.status) {
                                            var h = 2 === s.strategy ? f(s, i) : 3 === s.strategy ? p(s, i) : w[s.level].func(s, i);
                                            if (h !== K && h !== Q || (s.status = 666), h === V || h === K) return 0 === e.avail_out && (s.last_flush = -1),
                                                I;
                                            if (h === W && (1 === i ? k._tr_align(s) : 5 !== i && (k._tr_stored_block(s, 0, 0, !1), 3 === i && (c(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), o(e), 0 === e.avail_out)) return s.last_flush = -1,
                                                I
                                        }
                                        return i !== R ? I: s.wrap <= 0 ? 1 : (2 === s.wrap ? (r(s, 255 & e.adler), r(s, e.adler >> 8 & 255), r(s, e.adler >> 16 & 255), r(s, e.adler >> 24 & 255), r(s, 255 & e.total_in), r(s, e.total_in >> 8 & 255), r(s, e.total_in >> 16 & 255), r(s, e.total_in >> 24 & 255)) : (l(s, e.adler >>> 16), l(s, 65535 & e.adler)), o(e), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? I: 1)
                                    },
                                    t.deflateEnd = function(e) {
                                        var i;
                                        return e && e.state ? (i = e.state.status) !== Y && 69 !== i && 73 !== i && 91 !== i && 103 !== i && i !== Z && 666 !== i ? a(e, P) : (e.state = null, i === Z ? a(e, -3) : I) : P
                                    },
                                    t.deflateSetDictionary = function(e, i) {
                                        var t, a, n, o, s, r, l, m, d = i.length;
                                        if (!e || !e.state) return P;
                                        if (t = e.state, 2 === (o = t.wrap) || 1 === o && t.status !== Y || t.lookahead) return P;
                                        for (1 === o && (e.adler = T(e.adler, i, d, 0)), t.wrap = 0, d >= t.w_size && (0 === o && (c(t.head), t.strstart = 0, t.block_start = 0, t.insert = 0), m = new B.Buf8(t.w_size), B.arraySet(m, i, d - t.w_size, t.w_size, 0), i = m, d = t.w_size), s = e.avail_in, r = e.next_in, l = e.input, e.avail_in = d, e.next_in = 0, e.input = i, u(t); t.lookahead >= X;) {
                                            a = t.strstart,
                                                n = t.lookahead - (X - 1);
                                            do {
                                                t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + X - 1]) & t.hash_mask, t.prev[a & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = a, a++
                                            } while (-- n );
                                            t.strstart = a,
                                                t.lookahead = X - 1,
                                                u(t)
                                        }
                                        return t.strstart += t.lookahead,
                                            t.block_start = t.strstart,
                                            t.insert = t.lookahead,
                                            t.lookahead = 0,
                                            t.match_length = t.prev_length = X - 1,
                                            t.match_available = 0,
                                            e.next_in = r,
                                            e.input = l,
                                            e.avail_in = s,
                                            t.wrap = o,
                                            I
                                    },
                                    t.deflateInfo = "pako deflate (from Nodeca project)"
                            },
                                {
                                    "../utils/common": 3,
                                    "./adler32": 5,
                                    "./crc32": 7,
                                    "./messages": 13,
                                    "./trees": 14
                                }],
                            9 : [function(e, i, t) {
                                i.exports = function() {
                                    this.text = 0,
                                        this.time = 0,
                                        this.xflags = 0,
                                        this.os = 0,
                                        this.extra = null,
                                        this.extra_len = 0,
                                        this.name = "",
                                        this.comment = "",
                                        this.hcrc = 0,
                                        this.done = !1
                                }
                            },
                                {}],
                            10 : [function(e, i, t) {
                                i.exports = function(e, i) {
                                    var t, a, n, c, o, s, r, l, m, d, u, h, g, p, f, b, y, _, v, C, N, w, B, k, T;
                                    t = e.state,
                                        a = e.next_in,
                                        k = e.input,
                                        n = a + (e.avail_in - 5),
                                        c = e.next_out,
                                        T = e.output,
                                        o = c - (i - e.avail_out),
                                        s = c + (e.avail_out - 257),
                                        r = t.dmax,
                                        l = t.wsize,
                                        m = t.whave,
                                        d = t.wnext,
                                        u = t.window,
                                        h = t.hold,
                                        g = t.bits,
                                        p = t.lencode,
                                        f = t.distcode,
                                        b = (1 << t.lenbits) - 1,
                                        y = (1 << t.distbits) - 1;
                                    e: do {
                                        g < 15 && (h += k[a++] << g, g += 8, h += k[a++] << g, g += 8), _ = p[h & b];
                                        i: for (;;) {
                                            if (v = _ >>> 24, h >>>= v, g -= v, 0 == (v = _ >>> 16 & 255)) T[c++] = 65535 & _;
                                            else {
                                                if (! (16 & v)) {
                                                    if (0 == (64 & v)) {
                                                        _ = p[(65535 & _) + (h & (1 << v) - 1)];
                                                        continue i
                                                    }
                                                    if (32 & v) {
                                                        t.mode = 12;
                                                        break e
                                                    }
                                                    e.msg = "invalid literal/length code",
                                                        t.mode = 30;
                                                    break e
                                                }
                                                C = 65535 & _,
                                                (v &= 15) && (g < v && (h += k[a++] << g, g += 8), C += h & (1 << v) - 1, h >>>= v, g -= v),
                                                g < 15 && (h += k[a++] << g, g += 8, h += k[a++] << g, g += 8),
                                                    _ = f[h & y];
                                                t: for (;;) {
                                                    if (v = _ >>> 24, h >>>= v, g -= v, !(16 & (v = _ >>> 16 & 255))) {
                                                        if (0 == (64 & v)) {
                                                            _ = f[(65535 & _) + (h & (1 << v) - 1)];
                                                            continue t
                                                        }
                                                        e.msg = "invalid distance code",
                                                            t.mode = 30;
                                                        break e
                                                    }
                                                    if (N = 65535 & _, v &= 15, g < v && (h += k[a++] << g, (g += 8) < v && (h += k[a++] << g, g += 8)), (N += h & (1 << v) - 1) > r) {
                                                        e.msg = "invalid distance too far back",
                                                            t.mode = 30;
                                                        break e
                                                    }
                                                    if (h >>>= v, g -= v, v = c - o, N > v) {
                                                        if ((v = N - v) > m && t.sane) {
                                                            e.msg = "invalid distance too far back",
                                                                t.mode = 30;
                                                            break e
                                                        }
                                                        if (w = 0, B = u, 0 === d) {
                                                            if (w += l - v, v < C) {
                                                                C -= v;
                                                                do {
                                                                    T[c++] = u[w++]
                                                                } while (-- v );
                                                                w = c - N,
                                                                    B = T
                                                            }
                                                        } else if (d < v) {
                                                            if (w += l + d - v, (v -= d) < C) {
                                                                C -= v;
                                                                do {
                                                                    T[c++] = u[w++]
                                                                } while (-- v );
                                                                if (w = 0, d < C) {
                                                                    C -= v = d;
                                                                    do {
                                                                        T[c++] = u[w++]
                                                                    } while (-- v );
                                                                    w = c - N,
                                                                        B = T
                                                                }
                                                            }
                                                        } else if (w += d - v, v < C) {
                                                            C -= v;
                                                            do {
                                                                T[c++] = u[w++]
                                                            } while (-- v );
                                                            w = c - N,
                                                                B = T
                                                        }
                                                        for (; C > 2;) T[c++] = B[w++],
                                                            T[c++] = B[w++],
                                                            T[c++] = B[w++],
                                                            C -= 3;
                                                        C && (T[c++] = B[w++], C > 1 && (T[c++] = B[w++]))
                                                    } else {
                                                        w = c - N;
                                                        do {
                                                            T[c++] = T[w++], T[c++] = T[w++], T[c++] = T[w++], C -= 3
                                                        } while ( C > 2 );
                                                        C && (T[c++] = T[w++], C > 1 && (T[c++] = T[w++]))
                                                    }
                                                    break
                                                }
                                            }
                                            break
                                        }
                                    } while ( a < n && c < s );
                                    a -= C = g >> 3,
                                        h &= (1 << (g -= C << 3)) - 1,
                                        e.next_in = a,
                                        e.next_out = c,
                                        e.avail_in = a < n ? n - a + 5 : 5 - (a - n),
                                        e.avail_out = c < s ? s - c + 257 : 257 - (c - s),
                                        t.hold = h,
                                        t.bits = g
                                }
                            },
                                {}],
                            11 : [function(e, i, t) {
                                function a(e) {
                                    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                                }
                                function n() {
                                    this.mode = 0,
                                        this.last = !1,
                                        this.wrap = 0,
                                        this.havedict = !1,
                                        this.flags = 0,
                                        this.dmax = 0,
                                        this.check = 0,
                                        this.total = 0,
                                        this.head = null,
                                        this.wbits = 0,
                                        this.wsize = 0,
                                        this.whave = 0,
                                        this.wnext = 0,
                                        this.window = null,
                                        this.hold = 0,
                                        this.bits = 0,
                                        this.length = 0,
                                        this.offset = 0,
                                        this.extra = 0,
                                        this.lencode = null,
                                        this.distcode = null,
                                        this.lenbits = 0,
                                        this.distbits = 0,
                                        this.ncode = 0,
                                        this.nlen = 0,
                                        this.ndist = 0,
                                        this.have = 0,
                                        this.next = null,
                                        this.lens = new h.Buf16(320),
                                        this.work = new h.Buf16(288),
                                        this.lendyn = null,
                                        this.distdyn = null,
                                        this.sane = 0,
                                        this.back = 0,
                                        this.was = 0
                                }
                                function c(e) {
                                    var i;
                                    return e && e.state ? (i = e.state, e.total_in = e.total_out = i.total = 0, e.msg = "", i.wrap && (e.adler = 1 & i.wrap), i.mode = N, i.last = 0, i.havedict = 0, i.dmax = 32768, i.head = null, i.hold = 0, i.bits = 0, i.lencode = i.lendyn = new h.Buf32(B), i.distcode = i.distdyn = new h.Buf32(k), i.sane = 1, i.back = -1, v) : C
                                }
                                function o(e) {
                                    var i;
                                    return e && e.state ? (i = e.state, i.wsize = 0, i.whave = 0, i.wnext = 0, c(e)) : C
                                }
                                function s(e, i) {
                                    var t, a;
                                    return e && e.state ? (a = e.state, i < 0 ? (t = 0, i = -i) : (t = 1 + (i >> 4), i < 48 && (i &= 15)), i && (i < 8 || i > 15) ? C: (null !== a.window && a.wbits !== i && (a.window = null), a.wrap = t, a.wbits = i, o(e))) : C
                                }
                                function r(e, i) {
                                    var t, a;
                                    return e ? (a = new n, e.state = a, a.window = null, (t = s(e, i)) !== v && (e.state = null), t) : C
                                }
                                function l(e) {
                                    if (T) {
                                        var i;
                                        for (d = new h.Buf32(512), u = new h.Buf32(32), i = 0; i < 144;) e.lens[i++] = 8;
                                        for (; i < 256;) e.lens[i++] = 9;
                                        for (; i < 280;) e.lens[i++] = 7;
                                        for (; i < 288;) e.lens[i++] = 8;
                                        for (b(y, e.lens, 0, 288, d, 0, e.work, {
                                            bits: 9
                                        }), i = 0; i < 32;) e.lens[i++] = 5;
                                        b(_, e.lens, 0, 32, u, 0, e.work, {
                                            bits: 5
                                        }),
                                            T = !1
                                    }
                                    e.lencode = d,
                                        e.lenbits = 9,
                                        e.distcode = u,
                                        e.distbits = 5
                                }
                                function m(e, i, t, a) {
                                    var n, c = e.state;
                                    return null === c.window && (c.wsize = 1 << c.wbits, c.wnext = 0, c.whave = 0, c.window = new h.Buf8(c.wsize)),
                                        a >= c.wsize ? (h.arraySet(c.window, i, t - c.wsize, c.wsize, 0), c.wnext = 0, c.whave = c.wsize) : ((n = c.wsize - c.wnext) > a && (n = a), h.arraySet(c.window, i, t - a, n, c.wnext), (a -= n) ? (h.arraySet(c.window, i, t - a, a, 0), c.wnext = a, c.whave = c.wsize) : (c.wnext += n, c.wnext === c.wsize && (c.wnext = 0), c.whave < c.wsize && (c.whave += n))),
                                        0
                                }
                                var d, u, h = e("../utils/common"),
                                    g = e("./adler32"),
                                    p = e("./crc32"),
                                    f = e("./inffast"),
                                    b = e("./inftrees"),
                                    y = 1,
                                    _ = 2,
                                    v = 0,
                                    C = -2,
                                    N = 1,
                                    w = 12,
                                    B = 852,
                                    k = 592,
                                    T = !0;
                                t.inflateReset = o,
                                    t.inflateReset2 = s,
                                    t.inflateResetKeep = c,
                                    t.inflateInit = function(e) {
                                        return r(e, 15)
                                    },
                                    t.inflateInit2 = r,
                                    t.inflate = function(e, i) {
                                        var t, n, c, o, s, r, d, u, B, k, T, x, z, S, R, I, P, L, F, E, A, j, O, M, G = 0,
                                            D = new h.Buf8(4),
                                            H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                                        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return C; (t = e.state).mode === w && (t.mode = 13),
                                            s = e.next_out,
                                            c = e.output,
                                            d = e.avail_out,
                                            o = e.next_in,
                                            n = e.input,
                                            r = e.avail_in,
                                            u = t.hold,
                                            B = t.bits,
                                            k = r,
                                            T = d,
                                            j = v;
                                        e: for (;;) switch (t.mode) {
                                            case N:
                                                if (0 === t.wrap) {
                                                    t.mode = 13;
                                                    break
                                                }
                                                for (; B < 16;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if (2 & t.wrap && 35615 === u) {
                                                    t.check = 0,
                                                        D[0] = 255 & u,
                                                        D[1] = u >>> 8 & 255,
                                                        t.check = p(t.check, D, 2, 0),
                                                        u = 0,
                                                        B = 0,
                                                        t.mode = 2;
                                                    break
                                                }
                                                if (t.flags = 0, t.head && (t.head.done = !1), !(1 & t.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                                                    e.msg = "incorrect header check",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (8 != (15 & u)) {
                                                    e.msg = "unknown compression method",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (u >>>= 4, B -= 4, A = 8 + (15 & u), 0 === t.wbits) t.wbits = A;
                                                else if (A > t.wbits) {
                                                    e.msg = "invalid window size",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.dmax = 1 << A,
                                                    e.adler = t.check = 1,
                                                    t.mode = 512 & u ? 10 : w,
                                                    u = 0,
                                                    B = 0;
                                                break;
                                            case 2:
                                                for (; B < 16;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if (t.flags = u, 8 != (255 & t.flags)) {
                                                    e.msg = "unknown compression method",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (57344 & t.flags) {
                                                    e.msg = "unknown header flags set",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.head && (t.head.text = u >> 8 & 1),
                                                512 & t.flags && (D[0] = 255 & u, D[1] = u >>> 8 & 255, t.check = p(t.check, D, 2, 0)),
                                                    u = 0,
                                                    B = 0,
                                                    t.mode = 3;
                                            case 3:
                                                for (; B < 32;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                t.head && (t.head.time = u),
                                                512 & t.flags && (D[0] = 255 & u, D[1] = u >>> 8 & 255, D[2] = u >>> 16 & 255, D[3] = u >>> 24 & 255, t.check = p(t.check, D, 4, 0)),
                                                    u = 0,
                                                    B = 0,
                                                    t.mode = 4;
                                            case 4:
                                                for (; B < 16;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                t.head && (t.head.xflags = 255 & u, t.head.os = u >> 8),
                                                512 & t.flags && (D[0] = 255 & u, D[1] = u >>> 8 & 255, t.check = p(t.check, D, 2, 0)),
                                                    u = 0,
                                                    B = 0,
                                                    t.mode = 5;
                                            case 5:
                                                if (1024 & t.flags) {
                                                    for (; B < 16;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    t.length = u,
                                                    t.head && (t.head.extra_len = u),
                                                    512 & t.flags && (D[0] = 255 & u, D[1] = u >>> 8 & 255, t.check = p(t.check, D, 2, 0)),
                                                        u = 0,
                                                        B = 0
                                                } else t.head && (t.head.extra = null);
                                                t.mode = 6;
                                            case 6:
                                                if (1024 & t.flags && ((x = t.length) > r && (x = r), x && (t.head && (A = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Array(t.head.extra_len)), h.arraySet(t.head.extra, n, o, x, A)), 512 & t.flags && (t.check = p(t.check, n, x, o)), r -= x, o += x, t.length -= x), t.length)) break e;
                                                t.length = 0,
                                                    t.mode = 7;
                                            case 7:
                                                if (2048 & t.flags) {
                                                    if (0 === r) break e;
                                                    x = 0;
                                                    do {
                                                        A = n[o + x++], t.head && A && t.length < 65536 && (t.head.name += String.fromCharCode(A))
                                                    } while ( A && x < r );
                                                    if (512 & t.flags && (t.check = p(t.check, n, x, o)), r -= x, o += x, A) break e
                                                } else t.head && (t.head.name = null);
                                                t.length = 0,
                                                    t.mode = 8;
                                            case 8:
                                                if (4096 & t.flags) {
                                                    if (0 === r) break e;
                                                    x = 0;
                                                    do {
                                                        A = n[o + x++], t.head && A && t.length < 65536 && (t.head.comment += String.fromCharCode(A))
                                                    } while ( A && x < r );
                                                    if (512 & t.flags && (t.check = p(t.check, n, x, o)), r -= x, o += x, A) break e
                                                } else t.head && (t.head.comment = null);
                                                t.mode = 9;
                                            case 9:
                                                if (512 & t.flags) {
                                                    for (; B < 16;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    if (u !== (65535 & t.check)) {
                                                        e.msg = "header crc mismatch",
                                                            t.mode = 30;
                                                        break
                                                    }
                                                    u = 0,
                                                        B = 0
                                                }
                                                t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0),
                                                    e.adler = t.check = 0,
                                                    t.mode = w;
                                                break;
                                            case 10:
                                                for (; B < 32;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                e.adler = t.check = a(u),
                                                    u = 0,
                                                    B = 0,
                                                    t.mode = 11;
                                            case 11:
                                                if (0 === t.havedict) return e.next_out = s,
                                                    e.avail_out = d,
                                                    e.next_in = o,
                                                    e.avail_in = r,
                                                    t.hold = u,
                                                    t.bits = B,
                                                    2;
                                                e.adler = t.check = 1,
                                                    t.mode = w;
                                            case w:
                                                if (5 === i || 6 === i) break e;
                                            case 13:
                                                if (t.last) {
                                                    u >>>= 7 & B,
                                                        B -= 7 & B,
                                                        t.mode = 27;
                                                    break
                                                }
                                                for (; B < 3;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                switch (t.last = 1 & u, u >>>= 1, B -= 1, 3 & u) {
                                                    case 0:
                                                        t.mode = 14;
                                                        break;
                                                    case 1:
                                                        if (l(t), t.mode = 20, 6 === i) {
                                                            u >>>= 2,
                                                                B -= 2;
                                                            break e
                                                        }
                                                        break;
                                                    case 2:
                                                        t.mode = 17;
                                                        break;
                                                    case 3:
                                                        e.msg = "invalid block type",
                                                            t.mode = 30
                                                }
                                                u >>>= 2,
                                                    B -= 2;
                                                break;
                                            case 14:
                                                for (u >>>= 7 & B, B -= 7 & B; B < 32;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if ((65535 & u) != (u >>> 16 ^ 65535)) {
                                                    e.msg = "invalid stored block lengths",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (t.length = 65535 & u, u = 0, B = 0, t.mode = 15, 6 === i) break e;
                                            case 15:
                                                t.mode = 16;
                                            case 16:
                                                if (x = t.length) {
                                                    if (x > r && (x = r), x > d && (x = d), 0 === x) break e;
                                                    h.arraySet(c, n, o, x, s),
                                                        r -= x,
                                                        o += x,
                                                        d -= x,
                                                        s += x,
                                                        t.length -= x;
                                                    break
                                                }
                                                t.mode = w;
                                                break;
                                            case 17:
                                                for (; B < 14;) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if (t.nlen = 257 + (31 & u), u >>>= 5, B -= 5, t.ndist = 1 + (31 & u), u >>>= 5, B -= 5, t.ncode = 4 + (15 & u), u >>>= 4, B -= 4, t.nlen > 286 || t.ndist > 30) {
                                                    e.msg = "too many length or distance symbols",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.have = 0,
                                                    t.mode = 18;
                                            case 18:
                                                for (; t.have < t.ncode;) {
                                                    for (; B < 3;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    t.lens[H[t.have++]] = 7 & u,
                                                        u >>>= 3,
                                                        B -= 3
                                                }
                                                for (; t.have < 19;) t.lens[H[t.have++]] = 0;
                                                if (t.lencode = t.lendyn, t.lenbits = 7, O = {
                                                        bits: t.lenbits
                                                    },
                                                        j = b(0, t.lens, 0, 19, t.lencode, 0, t.work, O), t.lenbits = O.bits, j) {
                                                    e.msg = "invalid code lengths set",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.have = 0,
                                                    t.mode = 19;
                                            case 19:
                                                for (; t.have < t.nlen + t.ndist;) {
                                                    for (; G = t.lencode[u & (1 << t.lenbits) - 1], R = G >>> 24, I = G >>> 16 & 255, P = 65535 & G, !(R <= B);) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    if (P < 16) u >>>= R,
                                                        B -= R,
                                                        t.lens[t.have++] = P;
                                                    else {
                                                        if (16 === P) {
                                                            for (M = R + 2; B < M;) {
                                                                if (0 === r) break e;
                                                                r--,
                                                                    u += n[o++] << B,
                                                                    B += 8
                                                            }
                                                            if (u >>>= R, B -= R, 0 === t.have) {
                                                                e.msg = "invalid bit length repeat",
                                                                    t.mode = 30;
                                                                break
                                                            }
                                                            A = t.lens[t.have - 1],
                                                                x = 3 + (3 & u),
                                                                u >>>= 2,
                                                                B -= 2
                                                        } else if (17 === P) {
                                                            for (M = R + 3; B < M;) {
                                                                if (0 === r) break e;
                                                                r--,
                                                                    u += n[o++] << B,
                                                                    B += 8
                                                            }
                                                            B -= R,
                                                                A = 0,
                                                                x = 3 + (7 & (u >>>= R)),
                                                                u >>>= 3,
                                                                B -= 3
                                                        } else {
                                                            for (M = R + 7; B < M;) {
                                                                if (0 === r) break e;
                                                                r--,
                                                                    u += n[o++] << B,
                                                                    B += 8
                                                            }
                                                            B -= R,
                                                                A = 0,
                                                                x = 11 + (127 & (u >>>= R)),
                                                                u >>>= 7,
                                                                B -= 7
                                                        }
                                                        if (t.have + x > t.nlen + t.ndist) {
                                                            e.msg = "invalid bit length repeat",
                                                                t.mode = 30;
                                                            break
                                                        }
                                                        for (; x--;) t.lens[t.have++] = A
                                                    }
                                                }
                                                if (30 === t.mode) break;
                                                if (0 === t.lens[256]) {
                                                    e.msg = "invalid code -- missing end-of-block",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (t.lenbits = 9, O = {
                                                        bits: t.lenbits
                                                    },
                                                        j = b(y, t.lens, 0, t.nlen, t.lencode, 0, t.work, O), t.lenbits = O.bits, j) {
                                                    e.msg = "invalid literal/lengths set",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (t.distbits = 6, t.distcode = t.distdyn, O = {
                                                        bits: t.distbits
                                                    },
                                                        j = b(_, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, O), t.distbits = O.bits, j) {
                                                    e.msg = "invalid distances set",
                                                        t.mode = 30;
                                                    break
                                                }
                                                if (t.mode = 20, 6 === i) break e;
                                            case 20:
                                                t.mode = 21;
                                            case 21:
                                                if (r >= 6 && d >= 258) {
                                                    e.next_out = s,
                                                        e.avail_out = d,
                                                        e.next_in = o,
                                                        e.avail_in = r,
                                                        t.hold = u,
                                                        t.bits = B,
                                                        f(e, T),
                                                        s = e.next_out,
                                                        c = e.output,
                                                        d = e.avail_out,
                                                        o = e.next_in,
                                                        n = e.input,
                                                        r = e.avail_in,
                                                        u = t.hold,
                                                        B = t.bits,
                                                    t.mode === w && (t.back = -1);
                                                    break
                                                }
                                                for (t.back = 0; G = t.lencode[u & (1 << t.lenbits) - 1], R = G >>> 24, I = G >>> 16 & 255, P = 65535 & G, !(R <= B);) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if (I && 0 == (240 & I)) {
                                                    for (L = R, F = I, E = P; G = t.lencode[E + ((u & (1 << L + F) - 1) >> L)], R = G >>> 24, I = G >>> 16 & 255, P = 65535 & G, !(L + R <= B);) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    u >>>= L,
                                                        B -= L,
                                                        t.back += L
                                                }
                                                if (u >>>= R, B -= R, t.back += R, t.length = P, 0 === I) {
                                                    t.mode = 26;
                                                    break
                                                }
                                                if (32 & I) {
                                                    t.back = -1,
                                                        t.mode = w;
                                                    break
                                                }
                                                if (64 & I) {
                                                    e.msg = "invalid literal/length code",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.extra = 15 & I,
                                                    t.mode = 22;
                                            case 22:
                                                if (t.extra) {
                                                    for (M = t.extra; B < M;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    t.length += u & (1 << t.extra) - 1,
                                                        u >>>= t.extra,
                                                        B -= t.extra,
                                                        t.back += t.extra
                                                }
                                                t.was = t.length,
                                                    t.mode = 23;
                                            case 23:
                                                for (; G = t.distcode[u & (1 << t.distbits) - 1], R = G >>> 24, I = G >>> 16 & 255, P = 65535 & G, !(R <= B);) {
                                                    if (0 === r) break e;
                                                    r--,
                                                        u += n[o++] << B,
                                                        B += 8
                                                }
                                                if (0 == (240 & I)) {
                                                    for (L = R, F = I, E = P; G = t.distcode[E + ((u & (1 << L + F) - 1) >> L)], R = G >>> 24, I = G >>> 16 & 255, P = 65535 & G, !(L + R <= B);) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    u >>>= L,
                                                        B -= L,
                                                        t.back += L
                                                }
                                                if (u >>>= R, B -= R, t.back += R, 64 & I) {
                                                    e.msg = "invalid distance code",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.offset = P,
                                                    t.extra = 15 & I,
                                                    t.mode = 24;
                                            case 24:
                                                if (t.extra) {
                                                    for (M = t.extra; B < M;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    t.offset += u & (1 << t.extra) - 1,
                                                        u >>>= t.extra,
                                                        B -= t.extra,
                                                        t.back += t.extra
                                                }
                                                if (t.offset > t.dmax) {
                                                    e.msg = "invalid distance too far back",
                                                        t.mode = 30;
                                                    break
                                                }
                                                t.mode = 25;
                                            case 25:
                                                if (0 === d) break e;
                                                if (x = T - d, t.offset > x) {
                                                    if ((x = t.offset - x) > t.whave && t.sane) {
                                                        e.msg = "invalid distance too far back",
                                                            t.mode = 30;
                                                        break
                                                    }
                                                    x > t.wnext ? (x -= t.wnext, z = t.wsize - x) : z = t.wnext - x,
                                                    x > t.length && (x = t.length),
                                                        S = t.window
                                                } else S = c,
                                                    z = s - t.offset,
                                                    x = t.length;
                                                x > d && (x = d),
                                                    d -= x,
                                                    t.length -= x;
                                                do {
                                                    c[s++] = S[z++]
                                                } while (-- x );
                                                0 === t.length && (t.mode = 21);
                                                break;
                                            case 26:
                                                if (0 === d) break e;
                                                c[s++] = t.length,
                                                    d--,
                                                    t.mode = 21;
                                                break;
                                            case 27:
                                                if (t.wrap) {
                                                    for (; B < 32;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u |= n[o++] << B,
                                                            B += 8
                                                    }
                                                    if (T -= d, e.total_out += T, t.total += T, T && (e.adler = t.check = t.flags ? p(t.check, c, T, s - T) : g(t.check, c, T, s - T)), T = d, (t.flags ? u: a(u)) !== t.check) {
                                                        e.msg = "incorrect data check",
                                                            t.mode = 30;
                                                        break
                                                    }
                                                    u = 0,
                                                        B = 0
                                                }
                                                t.mode = 28;
                                            case 28:
                                                if (t.wrap && t.flags) {
                                                    for (; B < 32;) {
                                                        if (0 === r) break e;
                                                        r--,
                                                            u += n[o++] << B,
                                                            B += 8
                                                    }
                                                    if (u !== (4294967295 & t.total)) {
                                                        e.msg = "incorrect length check",
                                                            t.mode = 30;
                                                        break
                                                    }
                                                    u = 0,
                                                        B = 0
                                                }
                                                t.mode = 29;
                                            case 29:
                                                j = 1;
                                                break e;
                                            case 30:
                                                j = -3;
                                                break e;
                                            case 31:
                                                return - 4;
                                            case 32:
                                            default:
                                                return C
                                        }
                                        return e.next_out = s,
                                            e.avail_out = d,
                                            e.next_in = o,
                                            e.avail_in = r,
                                            t.hold = u,
                                            t.bits = B,
                                            (t.wsize || T !== e.avail_out && t.mode < 30 && (t.mode < 27 || 4 !== i)) && m(e, e.output, e.next_out, T - e.avail_out) ? (t.mode = 31, -4) : (k -= e.avail_in, T -= e.avail_out, e.total_in += k, e.total_out += T, t.total += T, t.wrap && T && (e.adler = t.check = t.flags ? p(t.check, c, T, e.next_out - T) : g(t.check, c, T, e.next_out - T)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === w ? 128 : 0) + (20 === t.mode || 15 === t.mode ? 256 : 0), (0 === k && 0 === T || 4 === i) && j === v && (j = -5), j)
                                    },
                                    t.inflateEnd = function(e) {
                                        if (!e || !e.state) return C;
                                        var i = e.state;
                                        return i.window && (i.window = null),
                                            e.state = null,
                                            v
                                    },
                                    t.inflateGetHeader = function(e, i) {
                                        var t;
                                        return e && e.state ? 0 == (2 & (t = e.state).wrap) ? C: (t.head = i, i.done = !1, v) : C
                                    },
                                    t.inflateSetDictionary = function(e, i) {
                                        var t, a, n = i.length;
                                        return e && e.state ? 0 !== (t = e.state).wrap && 11 !== t.mode ? C: 11 === t.mode && (a = 1, (a = g(a, i, n, 0)) !== t.check) ? -3 : m(e, i, n, n) ? (t.mode = 31, -4) : (t.havedict = 1, v) : C
                                    },
                                    t.inflateInfo = "pako inflate (from Nodeca project)"
                            },
                                {
                                    "../utils/common": 3,
                                    "./adler32": 5,
                                    "./crc32": 7,
                                    "./inffast": 10,
                                    "./inftrees": 12
                                }],
                            12 : [function(e, i, t) {
                                var a = e("../utils/common"),
                                    n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                                    c = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                                    o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                                    s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                                i.exports = function(e, i, t, r, l, m, d, u) {
                                    var h, g, p, f, b, y, _, v, C, N = u.bits,
                                        w = 0,
                                        B = 0,
                                        k = 0,
                                        T = 0,
                                        x = 0,
                                        z = 0,
                                        S = 0,
                                        R = 0,
                                        I = 0,
                                        P = 0,
                                        L = null,
                                        F = 0,
                                        E = new a.Buf16(16),
                                        A = new a.Buf16(16),
                                        j = null,
                                        O = 0;
                                    for (w = 0; w <= 15; w++) E[w] = 0;
                                    for (B = 0; B < r; B++) E[i[t + B]]++;
                                    for (x = N, T = 15; T >= 1 && 0 === E[T]; T--);
                                    if (x > T && (x = T), 0 === T) return l[m++] = 20971520,
                                        l[m++] = 20971520,
                                        u.bits = 1,
                                        0;
                                    for (k = 1; k < T && 0 === E[k]; k++);
                                    for (x < k && (x = k), R = 1, w = 1; w <= 15; w++) if (R <<= 1, (R -= E[w]) < 0) return - 1;
                                    if (R > 0 && (0 === e || 1 !== T)) return - 1;
                                    for (A[1] = 0, w = 1; w < 15; w++) A[w + 1] = A[w] + E[w];
                                    for (B = 0; B < r; B++) 0 !== i[t + B] && (d[A[i[t + B]]++] = B);
                                    if (0 === e ? (L = j = d, y = 19) : 1 === e ? (L = n, F -= 257, j = c, O -= 257, y = 256) : (L = o, j = s, y = -1), P = 0, B = 0, w = k, b = m, z = x, S = 0, p = -1, I = 1 << x, f = I - 1, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                                    for (;;) {
                                        _ = w - S,
                                            d[B] < y ? (v = 0, C = d[B]) : d[B] > y ? (v = j[O + d[B]], C = L[F + d[B]]) : (v = 96, C = 0),
                                            h = 1 << w - S,
                                            k = g = 1 << z;
                                        do {
                                            l[b + (P >> S) + (g -= h)] = _ << 24 | v << 16 | C | 0
                                        } while ( 0 !== g );
                                        for (h = 1 << w - 1; P & h;) h >>= 1;
                                        if (0 !== h ? (P &= h - 1, P += h) : P = 0, B++, 0 == --E[w]) {
                                            if (w === T) break;
                                            w = i[t + d[B]]
                                        }
                                        if (w > x && (P & f) !== p) {
                                            for (0 === S && (S = x), b += k, R = 1 << (z = w - S); z + S < T && !((R -= E[z + S]) <= 0);) z++,
                                                R <<= 1;
                                            if (I += 1 << z, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                                            l[p = P & f] = x << 24 | z << 16 | b - m | 0
                                        }
                                    }
                                    return 0 !== P && (l[b + P] = w - S << 24 | 64 << 16 | 0),
                                        u.bits = x,
                                        0
                                }
                            },
                                {
                                    "../utils/common": 3
                                }],
                            13 : [function(e, i, t) {
                                i.exports = {
                                    2 : "need dictionary",
                                    1 : "stream end",
                                    0 : "",
                                    "-1": "file error",
                                    "-2": "stream error",
                                    "-3": "data error",
                                    "-4": "insufficient memory",
                                    "-5": "buffer error",
                                    "-6": "incompatible version"
                                }
                            },
                                {}],
                            14 : [function(e, i, t) {
                                function a(e) {
                                    for (var i = e.length; --i >= 0;) e[i] = 0
                                }
                                function n(e, i, t, a, n) {
                                    this.static_tree = e,
                                        this.extra_bits = i,
                                        this.extra_base = t,
                                        this.elems = a,
                                        this.max_length = n,
                                        this.has_stree = e && e.length
                                }
                                function c(e, i) {
                                    this.dyn_tree = e,
                                        this.max_code = 0,
                                        this.stat_desc = i
                                }
                                function o(e) {
                                    return e < 256 ? K[e] : K[256 + (e >>> 7)]
                                }
                                function s(e, i) {
                                    e.pending_buf[e.pending++] = 255 & i,
                                        e.pending_buf[e.pending++] = i >>> 8 & 255
                                }
                                function r(e, i, t) {
                                    e.bi_valid > M - t ? (e.bi_buf |= i << e.bi_valid & 65535, s(e, e.bi_buf), e.bi_buf = i >> M - e.bi_valid, e.bi_valid += t - M) : (e.bi_buf |= i << e.bi_valid & 65535, e.bi_valid += t)
                                }
                                function l(e, i, t) {
                                    r(e, t[2 * i], t[2 * i + 1])
                                }
                                function m(e, i) {
                                    var t = 0;
                                    do {
                                        t |= 1 & e, e >>>= 1, t <<= 1
                                    } while (-- i > 0 );
                                    return t >>> 1
                                }
                                function d(e) {
                                    16 === e.bi_valid ? (s(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                                }
                                function u(e, i) {
                                    var t, a, n, c, o, s, r = i.dyn_tree,
                                        l = i.max_code,
                                        m = i.stat_desc.static_tree,
                                        d = i.stat_desc.has_stree,
                                        u = i.stat_desc.extra_bits,
                                        h = i.stat_desc.extra_base,
                                        g = i.stat_desc.max_length,
                                        p = 0;
                                    for (c = 0; c <= O; c++) e.bl_count[c] = 0;
                                    for (r[2 * e.heap[e.heap_max] + 1] = 0, t = e.heap_max + 1; t < j; t++)(c = r[2 * r[2 * (a = e.heap[t]) + 1] + 1] + 1) > g && (c = g, p++),
                                        r[2 * a + 1] = c,
                                    a > l || (e.bl_count[c]++, o = 0, a >= h && (o = u[a - h]), s = r[2 * a], e.opt_len += s * (c + o), d && (e.static_len += s * (m[2 * a + 1] + o)));
                                    if (0 !== p) {
                                        do {
                                            for (c = g - 1; 0 === e.bl_count[c];) c--;
                                            e.bl_count[c]--, e.bl_count[c + 1] += 2, e.bl_count[g]--, p -= 2
                                        } while ( p > 0 );
                                        for (c = g; 0 !== c; c--) for (a = e.bl_count[c]; 0 !== a;)(n = e.heap[--t]) > l || (r[2 * n + 1] !== c && (e.opt_len += (c - r[2 * n + 1]) * r[2 * n], r[2 * n + 1] = c), a--)
                                    }
                                }
                                function h(e, i, t) {
                                    var a, n, c = new Array(O + 1),
                                        o = 0;
                                    for (a = 1; a <= O; a++) c[a] = o = o + t[a - 1] << 1;
                                    for (n = 0; n <= i; n++) {
                                        var s = e[2 * n + 1];
                                        0 !== s && (e[2 * n] = m(c[s]++, s))
                                    }
                                }
                                function g() {
                                    var e, i, t, a, c, o = new Array(O + 1);
                                    for (t = 0, a = 0; a < P - 1; a++) for ($[a] = t, e = 0; e < 1 << q[a]; e++) Q[t++] = a;
                                    for (Q[t - 1] = a, c = 0, a = 0; a < 16; a++) for (ee[a] = c, e = 0; e < 1 << J[a]; e++) K[c++] = a;
                                    for (c >>= 7; a < E; a++) for (ee[a] = c << 7, e = 0; e < 1 << J[a] - 7; e++) K[256 + c++] = a;
                                    for (i = 0; i <= O; i++) o[i] = 0;
                                    for (e = 0; e <= 143;) V[2 * e + 1] = 8,
                                        e++,
                                        o[8]++;
                                    for (; e <= 255;) V[2 * e + 1] = 9,
                                        e++,
                                        o[9]++;
                                    for (; e <= 279;) V[2 * e + 1] = 7,
                                        e++,
                                        o[7]++;
                                    for (; e <= 287;) V[2 * e + 1] = 8,
                                        e++,
                                        o[8]++;
                                    for (h(V, F + 1, o), e = 0; e < E; e++) W[2 * e + 1] = 5,
                                        W[2 * e] = m(e, 5);
                                    ie = new n(V, q, L + 1, F, O),
                                        te = new n(W, J, 0, E, O),
                                        ae = new n(new Array(0), Y, 0, A, G)
                                }
                                function p(e) {
                                    var i;
                                    for (i = 0; i < F; i++) e.dyn_ltree[2 * i] = 0;
                                    for (i = 0; i < E; i++) e.dyn_dtree[2 * i] = 0;
                                    for (i = 0; i < A; i++) e.bl_tree[2 * i] = 0;
                                    e.dyn_ltree[2 * D] = 1,
                                        e.opt_len = e.static_len = 0,
                                        e.last_lit = e.matches = 0
                                }
                                function f(e) {
                                    e.bi_valid > 8 ? s(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
                                        e.bi_buf = 0,
                                        e.bi_valid = 0
                                }
                                function b(e, i, t, a) {
                                    f(e),
                                    a && (s(e, t), s(e, ~t)),
                                        z.arraySet(e.pending_buf, e.window, i, t, e.pending),
                                        e.pending += t
                                }
                                function y(e, i, t, a) {
                                    var n = 2 * i,
                                        c = 2 * t;
                                    return e[n] < e[c] || e[n] === e[c] && a[i] <= a[t]
                                }
                                function _(e, i, t) {
                                    for (var a = e.heap[t], n = t << 1; n <= e.heap_len && (n < e.heap_len && y(i, e.heap[n + 1], e.heap[n], e.depth) && n++, !y(i, a, e.heap[n], e.depth));) e.heap[t] = e.heap[n],
                                        t = n,
                                        n <<= 1;
                                    e.heap[t] = a
                                }
                                function v(e, i, t) {
                                    var a, n, c, s, m = 0;
                                    if (0 !== e.last_lit) do {
                                        a = e.pending_buf[e.d_buf + 2 * m] << 8 | e.pending_buf[e.d_buf + 2 * m + 1], n = e.pending_buf[e.l_buf + m], m++, 0 === a ? l(e, n, i) : (l(e, (c = Q[n]) + L + 1, i), 0 !== (s = q[c]) && r(e, n -= $[c], s), l(e, c = o(--a), t), 0 !== (s = J[c]) && r(e, a -= ee[c], s))
                                    } while ( m < e . last_lit );
                                    l(e, D, i)
                                }
                                function C(e, i) {
                                    var t, a, n, c = i.dyn_tree,
                                        o = i.stat_desc.static_tree,
                                        s = i.stat_desc.has_stree,
                                        r = i.stat_desc.elems,
                                        l = -1;
                                    for (e.heap_len = 0, e.heap_max = j, t = 0; t < r; t++) 0 !== c[2 * t] ? (e.heap[++e.heap_len] = l = t, e.depth[t] = 0) : c[2 * t + 1] = 0;
                                    for (; e.heap_len < 2;) c[2 * (n = e.heap[++e.heap_len] = l < 2 ? ++l: 0)] = 1,
                                        e.depth[n] = 0,
                                        e.opt_len--,
                                    s && (e.static_len -= o[2 * n + 1]);
                                    for (i.max_code = l, t = e.heap_len >> 1; t >= 1; t--) _(e, c, t);
                                    n = r;
                                    do {
                                        t = e.heap[1], e.heap[1] = e.heap[e.heap_len--], _(e, c, 1), a = e.heap[1], e.heap[--e.heap_max] = t, e.heap[--e.heap_max] = a, c[2 * n] = c[2 * t] + c[2 * a], e.depth[n] = (e.depth[t] >= e.depth[a] ? e.depth[t] : e.depth[a]) + 1, c[2 * t + 1] = c[2 * a + 1] = n, e.heap[1] = n++, _(e, c, 1)
                                    } while ( e . heap_len >= 2 );
                                    e.heap[--e.heap_max] = e.heap[1],
                                        u(e, i),
                                        h(c, l, e.bl_count)
                                }
                                function N(e, i, t) {
                                    var a, n, c = -1,
                                        o = i[1],
                                        s = 0,
                                        r = 7,
                                        l = 4;
                                    for (0 === o && (r = 138, l = 3), i[2 * (t + 1) + 1] = 65535, a = 0; a <= t; a++) n = o,
                                        o = i[2 * (a + 1) + 1],
                                    ++s < r && n === o || (s < l ? e.bl_tree[2 * n] += s: 0 !== n ? (n !== c && e.bl_tree[2 * n]++, e.bl_tree[2 * H]++) : s <= 10 ? e.bl_tree[2 * U]++:e.bl_tree[2 * X]++, s = 0, c = n, 0 === o ? (r = 138, l = 3) : n === o ? (r = 6, l = 3) : (r = 7, l = 4))
                                }
                                function w(e, i, t) {
                                    var a, n, c = -1,
                                        o = i[1],
                                        s = 0,
                                        m = 7,
                                        d = 4;
                                    for (0 === o && (m = 138, d = 3), a = 0; a <= t; a++) if (n = o, o = i[2 * (a + 1) + 1], !(++s < m && n === o)) {
                                        if (s < d) do {
                                            l(e, n, e.bl_tree)
                                        } while ( 0 != -- s );
                                        else 0 !== n ? (n !== c && (l(e, n, e.bl_tree), s--), l(e, H, e.bl_tree), r(e, s - 3, 2)) : s <= 10 ? (l(e, U, e.bl_tree), r(e, s - 3, 3)) : (l(e, X, e.bl_tree), r(e, s - 11, 7));
                                        s = 0,
                                            c = n,
                                            0 === o ? (m = 138, d = 3) : n === o ? (m = 6, d = 3) : (m = 7, d = 4)
                                    }
                                }
                                function B(e) {
                                    var i;
                                    for (N(e, e.dyn_ltree, e.l_desc.max_code), N(e, e.dyn_dtree, e.d_desc.max_code), C(e, e.bl_desc), i = A - 1; i >= 3 && 0 === e.bl_tree[2 * Z[i] + 1]; i--);
                                    return e.opt_len += 3 * (i + 1) + 5 + 5 + 4,
                                        i
                                }
                                function k(e, i, t, a) {
                                    var n;
                                    for (r(e, i - 257, 5), r(e, t - 1, 5), r(e, a - 4, 4), n = 0; n < a; n++) r(e, e.bl_tree[2 * Z[n] + 1], 3);
                                    w(e, e.dyn_ltree, i - 1),
                                        w(e, e.dyn_dtree, t - 1)
                                }
                                function T(e) {
                                    var i, t = 4093624447;
                                    for (i = 0; i <= 31; i++, t >>>= 1) if (1 & t && 0 !== e.dyn_ltree[2 * i]) return S;
                                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return R;
                                    for (i = 32; i < L; i++) if (0 !== e.dyn_ltree[2 * i]) return R;
                                    return S
                                }
                                function x(e, i, t, a) {
                                    r(e, (I << 1) + (a ? 1 : 0), 3),
                                        b(e, i, t, !0)
                                }
                                var z = e("../utils/common"),
                                    S = 0,
                                    R = 1,
                                    I = 0,
                                    P = 29,
                                    L = 256,
                                    F = L + 1 + P,
                                    E = 30,
                                    A = 19,
                                    j = 2 * F + 1,
                                    O = 15,
                                    M = 16,
                                    G = 7,
                                    D = 256,
                                    H = 16,
                                    U = 17,
                                    X = 18,
                                    q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                                    J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                                    Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                    Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                    V = new Array(2 * (F + 2));
                                a(V);
                                var W = new Array(2 * E);
                                a(W);
                                var K = new Array(512);
                                a(K);
                                var Q = new Array(256);
                                a(Q);
                                var $ = new Array(P);
                                a($);
                                var ee = new Array(E);
                                a(ee);
                                var ie, te, ae, ne = !1;
                                t._tr_init = function(e) {
                                    ne || (g(), ne = !0),
                                        e.l_desc = new c(e.dyn_ltree, ie),
                                        e.d_desc = new c(e.dyn_dtree, te),
                                        e.bl_desc = new c(e.bl_tree, ae),
                                        e.bi_buf = 0,
                                        e.bi_valid = 0,
                                        p(e)
                                },
                                    t._tr_stored_block = x,
                                    t._tr_flush_block = function(e, i, t, a) {
                                        var n, c, o = 0;
                                        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = T(e)), C(e, e.l_desc), C(e, e.d_desc), o = B(e), n = e.opt_len + 3 + 7 >>> 3, (c = e.static_len + 3 + 7 >>> 3) <= n && (n = c)) : n = c = t + 5,
                                            t + 4 <= n && -1 !== i ? x(e, i, t, a) : 4 === e.strategy || c === n ? (r(e, 2 + (a ? 1 : 0), 3), v(e, V, W)) : (r(e, 4 + (a ? 1 : 0), 3), k(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), v(e, e.dyn_ltree, e.dyn_dtree)),
                                            p(e),
                                        a && f(e)
                                    },
                                    t._tr_tally = function(e, i, t) {
                                        return e.pending_buf[e.d_buf + 2 * e.last_lit] = i >>> 8 & 255,
                                            e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & i,
                                            e.pending_buf[e.l_buf + e.last_lit] = 255 & t,
                                            e.last_lit++,
                                            0 === i ? e.dyn_ltree[2 * t]++:(e.matches++, i--, e.dyn_ltree[2 * (Q[t] + L + 1)]++, e.dyn_dtree[2 * o(i)]++),
                                        e.last_lit === e.lit_bufsize - 1
                                    },
                                    t._tr_align = function(e) {
                                        r(e, 2, 3),
                                            l(e, D, V),
                                            d(e)
                                    }
                            },
                                {
                                    "../utils/common": 3
                                }],
                            15 : [function(e, i, t) {
                                i.exports = function() {
                                    this.input = null,
                                        this.next_in = 0,
                                        this.avail_in = 0,
                                        this.total_in = 0,
                                        this.output = null,
                                        this.next_out = 0,
                                        this.avail_out = 0,
                                        this.total_out = 0,
                                        this.msg = "",
                                        this.state = null,
                                        this.data_type = 2,
                                        this.adler = 0
                                }
                            },
                                {}],
                            "/": [function(e, i, t) {
                                var a = {}; (0, e("./lib/utils/common").assign)(a, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")),
                                    i.exports = a
                            },
                                {
                                    "./lib/deflate": 1,
                                    "./lib/inflate": 2,
                                    "./lib/utils/common": 3,
                                    "./lib/zlib/constants": 6
                                }]
                        },
                        {},
                        [])("/")
                }),
                cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
            {}],
        puker: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "924891A3kdM2axOGyu24LA3", "puker"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        newCard_bm: {
                            default:
                                null,
                            type: cc.Node
                        },
                        num_black: {
                            default:
                                null,
                            type: cc.Node
                        },
                        colour_s: {
                            default:
                                null,
                            type: cc.Node
                        },
                        colour_1: {
                            default:
                                null,
                            type: cc.Node
                        },
                        colour_2: {
                            default:
                                null,
                            type: cc.Node
                        },
                        atlas: {
                            default:
                                null,
                            type: cc.SpriteAtlas
                        }
                    },
                    onLoad: function() {
                        this.isclisking = !1,
                            this.isturning = !1
                    },
                    isOpen: function(e, i, t, a) {
                        if (1 != this.isturning) if (a) this.newCard_bm.active = e;
                        else {
                            cc.log("翻牌" + e);
                            var n = this;
                            if (e) this.newCard_bm.active = e;
                            else if (n.newCard_bm.active) {
                                n.isturning = !0;
                                var c = cc.scaleTo(.2, .3, t),
                                    o = cc.scaleTo(.2, i, t),
                                    s = cc.callFunc(function() {
                                        n.newCard_bm.active = e
                                    }),
                                    r = cc.callFunc(function() {
                                        n.isturning = !1
                                    }),
                                    l = cc.sequence(c, s, o, r);
                                this.node.runAction(l)
                            }
                        }
                    },
                    isclick: function(e) {
                        this.newCard_bm.getComponent(cc.Button).interactable = e
                    },
                    order: function(e) {
                        var i, t, a;
                        if (0 != e) {
                            e.substr(0, 1);
                            var n = e.substr(0, 1);
                            this.colour_2.active = !1,
                                this.colour_1.active = !0,
                                1 == n ? (i = this.atlas.getSpriteFrame("colour_s_1"), a = this.atlas.getSpriteFrame("colour_1"), 11 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_111"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 12 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_112"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 13 == parseInt(e.substr(1, 3)) && (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_113"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a)) : 2 == n ? (i = this.atlas.getSpriteFrame("colour_s_2"), a = this.atlas.getSpriteFrame("colour_2"), 11 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_211"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 12 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_212"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 13 == parseInt(e.substr(1, 3)) && (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_213"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a)) : 3 == n ? (i = this.atlas.getSpriteFrame("colour_s_3"), a = this.atlas.getSpriteFrame("colour_3"), 11 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_311"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 12 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_312"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 13 == parseInt(e.substr(1, 3)) && (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_313"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a)) : 4 == n && (i = this.atlas.getSpriteFrame("colour_s_4"), a = this.atlas.getSpriteFrame("colour_4"), 11 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_411"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 12 == parseInt(e.substr(1, 3)) ? (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_412"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a) : 13 == parseInt(e.substr(1, 3)) && (this.colour_2.active = !0, this.colour_1.active = !1, a = this.atlas.getSpriteFrame("colour_413"), this.colour_2.getComponent(cc.Sprite).spriteFrame = a));
                            var c = e.substr(1, 3);
                            t = parseInt(n) % 2 == 0 ? this.atlas.getSpriteFrame("num_0" + c) : this.atlas.getSpriteFrame("num_1" + c),
                                this.num_black.getComponent(cc.Sprite).spriteFrame = t,
                                this.colour_s.getComponent(cc.Sprite).spriteFrame = i,
                                this.colour_1.getComponent(cc.Sprite).spriteFrame = a
                        }
                    },
                    onClick_turnCard: function() {
                        if (!this.isclisking) {
                            var e = this,
                                i = this.node.scale;
                            if (e.newCard_bm.active) {
                                this.isclisking = !0;
                                var t = cc.scaleTo(.2, .3, i),
                                    a = cc.scaleTo(.2, i, i),
                                    n = cc.callFunc(function() {
                                        e.newCard_bm.active = !1
                                    }),
                                    c = cc.callFunc(function() {
                                        e.isclisking = !1
                                    }),
                                    o = cc.sequence(t, n, a, c);
                                this.node.runAction(o)
                            }
                            var s = cc.beimi.runGame;
                            s.outhit(!1),
                                s.outTanpaibtn(!0)
                        }
                    }
                }),
                cc._RF.pop()
        },
            {}],
        ranking: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "e3857xEXhpL6rWSD87bd7hJ", "ranking");
            e("audioPlayer"),
                e("runGame");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    play_item_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    roomid: {
                        default:
                            null,
                        type: cc.Label
                    },
                    nowtime: {
                        default:
                            null,
                        type: cc.Label
                    },
                    gamenum: {
                        default:
                            null,
                        type: cc.Label
                    }
                },
                onLoad: function() {
                    var e = cc.beimi.roomId,
                        i = cc.beimi.currentGameNum,
                        t = new Date(parseInt(cc.beimi.ranktime));
                    parseInt(t.getMonth());
                    e && (this.roomid.string = "房间号:" + e, this.nowtime.string = a.prototype.formatdate(cc.beimi.ranktime), this.gamenum.string = i + "局"),
                        this.value_set = cc.beimi.rangking,
                        this.item_set = [];
                    for (var n = 0; n < this.value_set.length; n++) {
                        var c = cc.instantiate(this.play_item_prefab);
                        this.scroll_view.content.addChild(c),
                            this.item_set.push(c)
                    }
                    this.start_index = 0,
                        this.load_item_data(this.start_index)
                },
                load_item_data: function(e) {
                    for (var i = 0; i < this.value_set.length; i++) {
                        var t = this.item_set[i],
                            a = t.getChildByName("bg").getChildByName("mission_icon_1"),
                            n = t.getChildByName("bg").getChildByName("name").getComponent(cc.Label),
                            c = t.getChildByName("bg").getChildByName("name"),
                            o = t.getChildByName("bg").getChildByName("score").getComponent(cc.Label),
                            s = t.getChildByName("bg").getChildByName("score"),
                            r = t.getChildByName("bg").getChildByName("header").getComponent(cc.Sprite),
                            l = this.value_set[e + i].photo;
                        if (l && this.loadhead(r, l), i == this.value_set.length - 1) {
                            var m = this;
                            setTimeout(function() {
                                    m.captureScreen()
                                },
                                1e3)
                        }
                        n.string = "" + this.value_set[e + i].name;
                        var d = this.value_set[e + i].money;
                        d > 0 ? (o.string = "+" + d, c.color = cc.Color.YELLOW.fromHEX("#D85E0D"), s.color = cc.Color.YELLOW.fromHEX("#D85E0D")) : (o.string = "" + d, c.color = cc.Color.YELLOW.fromHEX("#2CCA17"), s.color = cc.Color.YELLOW.fromHEX("#2CCA17")),
                            a.active = 0 == i
                    }
                },
                loadhead: function(e, i) {
                    cc.loader.load({
                            url: i,
                            type: "png"
                        },
                        function(i, t) {
                            var a = new cc.SpriteFrame(t);
                            e.spriteFrame = a
                        })
                },
                captureScreen: function() {
                    var e = document.getElementById("GameCanvas"),
                        i = e.toDataURL("image/jpg", .5),
                        t = document.createElement("div");
                    t.id = "shareImg",
                        t.style.display = "block",
                        t.style.position = "absolute",
                        t.style.width = "100%",
                        t.style.height = "100%",
                        document.body.appendChild(t);
                    var a = document.createElement("img");
                    a.id = "backHall",
                        a.style.position = "absolute",
                        a.style.display = "block",
                        a.style.width = "2.5em",
                        a.style.height = "2.5em",
                        a.style.marginLeft = "0.5em",
                        a.style.marginTop = "0.5em",
                        a.setAttribute("src", cc.beimi.http.baseurl + "/assets/img/btn_home.png"),
                        a.onclick = function(e) {
                            var i = this.parentNode;
                            cc.director.preloadScene("hall",
                                function() {
                                    cc.director.loadScene("hall"),
                                        window.document.body.removeChild(i)
                                },
                                this)
                        },
                        t.appendChild(a);
                    var n = document.createElement("img");
                    n.setAttribute("src", i),
                        n.style.width = e.clientWidth + "px",
                        n.style.height = e.clientHeight + "px",
                        t.appendChild(n)
                },
                update: function(e) {}
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer",
                runGame: "runGame",
                uiTime: "uiTime"
            }],
        receive: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "1278bnCPWRDZa7a8wvhD9vT", "receive");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    hongbao: {
                        default:
                            null,
                        type: cc.Node
                    },
                    mynode: {
                        default:
                            null,
                        type: cc.Node
                    },
                    kai: {
                        default:
                            null,
                        type: cc.Node
                    },
                    head1: {
                        default:
                            null,
                        type: cc.Sprite
                    },
                    name1: {
                        default:
                            null,
                        type: cc.Label
                    },
                    head2: {
                        default:
                            null,
                        type: cc.Sprite
                    },
                    name2: {
                        default:
                            null,
                        type: cc.Label
                    },
                    head3: {
                        default:
                            null,
                        type: cc.Sprite
                    },
                    name3: {
                        default:
                            null,
                        type: cc.Label
                    },
                    time: {
                        default:
                            null,
                        type: cc.Label
                    },
                    cards: {
                        default:
                            null,
                        type: cc.Label
                    },
                    cards_1: {
                        default:
                            null,
                        type: cc.Label
                    },
                    mobile_bind_Prefab: {
                        default:
                            null,
                        type: cc.Prefab
                    }
                },
                onLoad: function() {
                    if (cc.beimi.receive_js = this, (!cc.beimi.mobile_bind || cc.beimi.mobile_bind && cc.beimi.mobile_bind.size() <= 0) && (cc.beimi.mobile_bind = new cc.NodePool, cc.beimi.mobile_bind.put(cc.instantiate(this.mobile_bind_Prefab))), cc.beimi.redId) var e = cc.beimi.redId,
                        i = cc.beimi.redSign;
                    cc.beimi.beiMiCommon.loadding();
                    cc.beimi.http.httpGet("/redCard/redInfo?id=" + e + "&sign=" + i, this.sucess, this.error, this)
                },
                sucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingDialog);
                    var a = JSON.parse(e);
                    if (cc.log("恭喜发财红包拿来data:" + a), null != a && 200 == a.code) {
                        var n = a.data;
                        if (cc.log("微信红包config:" + JSON.stringify(a)), cc.beimi.uTime = n.uTime, cc.beimi.rednum = n.num, cc.beimi.redname = n.name, cc.beimi.redphoto = n.photo, n.receive) {
                            i.mynode.active = !0,
                                i.hongbao.active = !1;
                            var c = n.r_name,
                                o = n.r_photo,
                                s = n.name,
                                r = n.photo,
                                l = cc.beimi.uTime,
                                m = cc.beimi.rednum;
                            i.redmsg(i, c, o, s, r, l, m)
                        } else {
                            i.mynode.active = !1,
                                i.hongbao.active = !0,
                                i.name1.string = n.name;
                            var d = i.head1,
                                u = n.photo;
                            i.loadhead(d, u)
                        }
                    } else t.alert(a.msg)
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingDialog),
                        t.alert("网络异常，服务访问失败")
                },
                loadhead: function(e, i) {
                    i && cc.loader.load({
                            url: i,
                            type: "png"
                        },
                        function(i, t) {
                            var a = new cc.SpriteFrame(t);
                            e.spriteFrame = a
                        })
                },
                onClick_openbag: function(e, i) {
                    if (i) t = i;
                    else {
                        if (!cc.beimi.hasPhone && cc.beimi.mobile_bind.size() > 0) return this.alertmobile_bind = cc.beimi.mobile_bind.get(),
                            void(this.alertmobile_bind.parent = cc.find("Canvas"));
                        var t = this
                    }
                    var a = cc.beimi.redId,
                        n = cc.beimi.redSign;
                    cc.beimi.beiMiCommon.loadding();
                    cc.beimi.http.httpGet("/redCard/openRed?id=" + a + "&sign=" + n, t.mysucess, t.myerror, t)
                },
                mysucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingDialog);
                    var a = JSON.parse(e);
                    if (cc.log("恭喜发财红包拿来data:" + a), null != a && 200 == a.code) {
                        var n = a.data;
                        cc.beimi.card = n.remaining,
                            cc.log("微信红包config:" + JSON.stringify(a)),
                            i.mynode.active = !0,
                            i.hongbao.active = !1;
                        var c = cc.beimi.name,
                            o = cc.beimi.photo,
                            s = cc.beimi.redname,
                            r = cc.beimi.redphoto,
                            l = cc.beimi.uTime,
                            m = cc.beimi.rednum;
                        i.redmsg(i, c, o, s, r, l, m)
                    } else t.alert(a.msg)
                },
                myerror: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingDialog),
                        t.alert("网络异常，服务访问失败")
                },
                redmsg: function(e, i, t, n, c, o, s) {
                    e.name3.string = i;
                    var r = e.head3,
                        l = t;
                    e.loadhead(r, l),
                        e.name2.string = "来自 " + n + " 的房卡红包";
                    var m = e.head2,
                        d = c;
                    e.loadhead(m, d),
                        e.time.string = a.prototype.formatdate(o),
                        e.cards.string = s + "张",
                        e.cards_1.string = s
                },
                onClick_intoGame: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("hall", e)
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        roomRule: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "f0037m58lJOAb6d8hAqryk8", "roomRule"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        moshi: {
                            default:
                                null,
                            type: cc.Label
                        },
                        difen: {
                            default:
                                null,
                            type: cc.Label
                        },
                        guine: {
                            default:
                                null,
                            type: cc.Label
                        },
                        paixian: {
                            default:
                                null,
                            type: cc.Label
                        },
                        jushu: {
                            default:
                                null,
                            type: cc.Label
                        },
                        shangzhuang: {
                            default:
                                null,
                            type: cc.Label
                        },
                        shop_line: {
                            default:
                                null,
                            type: cc.Node
                        },
                        node2: {
                            default:
                                null,
                            type: cc.Node
                        },
                        node3: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab1: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab2: {
                            default:
                                null,
                            type: cc.Node
                        }
                    },
                    onLoad: function() {},
                    roomRule: function(e) {
                        var i, t, a, n = "",
                            c = "",
                            o = "",
                            s = "",
                            r = "",
                            l = "",
                            m = "",
                            d = e.gamenum.split(":"),
                            u = d[0] + "局x" + d[1] + "房卡";
                        if (510 == e.roomType) {
                            1 == e.gametype ? i = "自由抢庄": 2 == e.gametype && (i = "固定庄家"),
                                1 == e.ruletype ? t = "3个相同3倍，2个相同2倍": 2 == e.ruletype && (t = "3个相同5倍，2个相同3倍"),
                                a = e.maxPower;
                            h = "单局最大下注：";
                            this.node2.active = !1,
                                this.node3.active = !0,
                                this.node3.getChildByName("guine").getComponent(cc.Label).string = "规则：" + t,
                                this.tab1.active = !0,
                                this.tab2.active = !1,
                                e.openFriend ? this.shop_line.active = !0 : this.shop_line.active = !1
                        } else if (610 == e.roomType || 606 == e.roomType || 708 == e.roomType) this.tab1.active = !1,
                            this.tab2.active = !0,
                            1 == e.gametype ? i = "明牌抢庄": 2 == e.gametype && (i = "固定庄家"),
                            708 == e.roomType ? t = "每人四张牌，分为大小两组，分别与庄家对牌，全胜全败为胜负，一胜一败为和局.": 1 == e.ruletype ? t = "至尊(8倍)，双天、双地、双人(6倍)，其他对子(5倍)，天王、地王(4倍)，天杠、地杠(3倍)，九点(2倍),八点(2倍)": 2 == e.ruletype && (t = "至尊(10倍)，双天、双地、双人(8倍)，其他对子(6倍)，天王、地王(5倍)，天杠、地杠(4倍)，九点(3倍),八点(2倍)"),
                            this.tab2.getChildByName("moshi").getChildByName("shop_line").getChildByName("moshi").getComponent(cc.Label).string = "模式：" + i,
                            this.tab2.getChildByName("difen").getChildByName("shop_line").getChildByName("difen").getComponent(cc.Label).string = "底分：" + e.score + "分",
                            this.tab2.getChildByName("guize").getChildByName("shop_line").getChildByName("guize").getComponent(cc.Label).string = t,
                            this.tab2.getChildByName("jushu").getChildByName("shop_line").getChildByName("jushu").getComponent(cc.Label).string = "局数：" + u,
                            e.minChane ? this.tab2.getChildByName("paixing").active = !0 : this.tab2.getChildByName("paixing").active = !1,
                            e.openFriend ? this.tab2.getChildByName("openfriend").active = !0 : this.tab2.getChildByName("openfriend").active = !1;
                        else {
                            this.tab1.active = !0,
                                this.tab2.active = !1,
                                1 == e.gametype ? i = "明牌抢庄": 2 == e.gametype ? i = "通比牛牛": 3 == e.gametype ? i = "自由抢庄": 4 == e.gametype ? i = "牛牛上庄": 5 == e.gametype && (i = "固定庄家"),
                                1 == e.ruletype ? t = "牛牛x3 牛九x2 牛八x2": 2 == e.ruletype && (t = "牛牛x4 牛九x3 牛八x2 牛七x2"),
                            e.szn5 && (n = "顺子牛(5倍) "),
                            e.whn5 && (c = "五花牛(5倍) "),
                            e.thn6 && (o = "同花牛(6倍) "),
                            e.hln7 && (s = "葫芦牛(7倍) "),
                            e.zdn8 && (r = "炸弹牛(8倍) "),
                            e.wxn8 && (l = "五小牛(8倍) "),
                            e.ths10 && (m = "同花顺(10倍) "),
                                a = e.szn5 || e.whn5 || e.thn6 || e.hln7 || e.zdn8 || e.wxn8 || e.ths10 ? n + c + o + s + r + l + m: "牛牛";
                            var h = "牌型：";
                            this.node2.active = !0,
                                this.node3.active = !1,
                                this.guine.string = "规则：" + t,
                                e.openFriend ? this.shop_line.active = !0 : this.shop_line.active = !1
                        }
                        this.moshi.string = "模式：" + i,
                            this.difen.string = "底分：" + e.score + "分",
                            this.paixian.string = h + a,
                            this.jushu.string = "局数：" + u
                    },
                    onclick_remove: function() {
                        this.node.destroy()
                    }
                }),
                cc._RF.pop()
        },
            {}],
        roomType: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "d925eZ7aidEoaHyMADQpVBu", "roomType"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        tab1: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab2: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab3: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab4: {
                            default:
                                null,
                            type: cc.Node
                        },
                        tab5: {
                            default:
                                null,
                            type: cc.Node
                        }
                    },
                    onLoad: function() {
                        cc.beimi.gametype = 1,
                            cc.beimi.difen = 1,
                            cc.beimi.guize = 1,
                            cc.beimi.openFriend = !1,
                            cc.beimi.niuniu_paixing = [!0, !0, !0, !0, !0, !0, !0];
                        var e, i = cc.beimi.mroomType;
                        if (1 == i ? (cc.beimi.paixing_1 = !0, cc.beimi.paixing_2 = !0, cc.beimi.paixing_3 = !0, cc.beimi.shangzhuang = 1, this.tab1.active = !0, this.tab2.active = !1, this.tab3.active = !1, this.tab4.active = !1, cc.beimi.jushu = "10:1", e = cc.sys.localStorage.getItem("rule_1"), this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("cardnum").getComponent(cc.Label).string = "x1", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("cardnum").getComponent(cc.Label).string = "x2", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("ju_label").getComponent(cc.Label).string = "10局", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("ju_label").getComponent(cc.Label).string = "20局") : 2 == i ? (cc.beimi.paixing_1 = !0, cc.beimi.paixing_2 = !0, cc.beimi.paixing_3 = !0, cc.beimi.shangzhuang = 1, this.tab1.active = !0, this.tab2.active = !1, this.tab3.active = !1, this.tab4.active = !1, cc.beimi.jushu = "12:2", e = cc.sys.localStorage.getItem("rule_2"), this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("cardnum").getComponent(cc.Label).string = "x2", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("cardnum").getComponent(cc.Label).string = "x4", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("ju_label").getComponent(cc.Label).string = "12局", this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("ju_label").getComponent(cc.Label).string = "24局") : 510 == i ? (cc.beimi.maxPower = 5, this.tab1.active = !1, this.tab2.active = !0, this.tab3.active = !1, this.tab4.active = !1, cc.beimi.jushu = "12:3", e = cc.sys.localStorage.getItem("rule_510")) : 610 == i ? (cc.beimi.paixing_1 = !0, this.tab1.active = !1, this.tab2.active = !1, this.tab3.active = !0, this.tab4.active = !1, cc.beimi.jushu = "12:3", e = cc.sys.localStorage.getItem("rule_610"), this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("cardnum").getComponent(cc.Label).string = "x3", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("cardnum").getComponent(cc.Label).string = "x6", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("ju_label").getComponent(cc.Label).string = "12局", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("ju_label").getComponent(cc.Label).string = "24局") : 606 == i ? (cc.beimi.paixing_1 = !0, this.tab1.active = !1, this.tab2.active = !1, this.tab3.active = !0, this.tab4.active = !1, cc.beimi.jushu = "10:2", e = cc.sys.localStorage.getItem("rule_606"), this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("cardnum").getComponent(cc.Label).string = "x2", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("cardnum").getComponent(cc.Label).string = "x4", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getChildByName("ju_label").getComponent(cc.Label).string = "10局", this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle2").getChildByName("ju_label").getComponent(cc.Label).string = "20局") : 708 == i && (cc.beimi.paixing_1 = !0, cc.beimi.difen = 3, this.tab1.active = !1, this.tab2.active = !1, this.tab3.active = !1, this.tab4.active = !0, cc.beimi.jushu = "12:3", e = cc.sys.localStorage.getItem("rule_708")), e) var t = JSON.parse(e);
                        if (t) if (void 0 != t.openFriend && (cc.beimi.isopenfriend ? cc.beimi.openFriend = t.openFriend: t.openFriend = !1), cc.beimi.gametype = t.gametype, cc.beimi.difen = t.score, cc.beimi.guize = t.ruletype, cc.beimi.jushu = t.gamenum, 1 == i || 2 == i) {
                            if (cc.beimi.shangzhuang = t.topBanker, 1 == t.gametype) {
                                "10:1" == t.gamenum || "12:1" == t.gamenum ? cc.beimi.jushu = "10:1": "20:2" != t.gamenum && "24:2" != t.gamenum || (cc.beimi.jushu = "20:2");
                                o = "toggle" + t.score;
                                this.tab1.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                    this.tab1.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName(o).getComponent(cc.Toggle).isChecked = !0;
                                c = "toggle" + t.ruletype;
                                if (this.tab1.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab1.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName(c).getComponent(cc.Toggle).isChecked = !0, void 0 != t.szn5) {
                                    var a = cc.beimi.niuniu_paixing;
                                    a[0] = t.szn5,
                                        a[1] = t.whn5,
                                        a[2] = t.thn6,
                                        a[3] = t.hln7,
                                        a[4] = t.zdn8,
                                        a[5] = t.wxn8,
                                        a[6] = t.ths10,
                                        cc.beimi.niuniu_paixing = a,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle1").getComponent(cc.Toggle).isChecked = t.szn5,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle2").getComponent(cc.Toggle).isChecked = t.whn5,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle3").getComponent(cc.Toggle).isChecked = t.thn6,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle4").getComponent(cc.Toggle).isChecked = t.hln7,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle5").getComponent(cc.Toggle).isChecked = t.zdn8,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle6").getComponent(cc.Toggle).isChecked = t.wxn8,
                                        this.tab1.getChildByName("paixing").getChildByName("New Toggle7").getComponent(cc.Toggle).isChecked = t.ths10
                                }
                                if (1 == i) {
                                    if ("10:1" == t.gamenum || "12:1" == t.gamenum) s = "toggle1";
                                    else if ("20:2" == t.gamenum || "24:2" == t.gamenum) s = "toggle2"
                                } else if (2 == i) if ("12:2" == t.gamenum) s = "toggle1";
                                else if ("24:4" == t.gamenum) s = "toggle2";
                                s && (this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab1.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName(s).getComponent(cc.Toggle).isChecked = !0),
                                    this.tab1.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = t.openFriend
                            }
                        } else if (510 == i) {
                            cc.beimi.maxPower = t.maxPower;
                            o = "toggle" + t.score;
                            this.tab2.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                this.tab2.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName(o).getComponent(cc.Toggle).isChecked = !0;
                            c = "toggle" + t.ruletype;
                            this.tab2.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                this.tab2.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName(c).getComponent(cc.Toggle).isChecked = !0;
                            var n = "toggle" + t.maxPower;
                            if (this.tab2.getChildByName("maxPower").getChildByName("New ToggleGroup").getChildByName("toggle5").getComponent(cc.Toggle).isChecked = !1, this.tab2.getChildByName("maxPower").getChildByName("New ToggleGroup").getChildByName(n).getComponent(cc.Toggle).isChecked = !0, "12:3" == t.gamenum) s = "toggle1";
                            else if ("24:6" == t.gamenum) s = "toggle2";
                            s && (this.tab2.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab2.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName(s).getComponent(cc.Toggle).isChecked = !0),
                                this.tab2.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = t.openFriend,
                                this.tab2.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                1 == t.gametype ? this.tab2.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !0 : 2 == t.gametype && (this.tab2.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle2").getComponent(cc.Toggle).isChecked = !0)
                        } else if (610 == i) {
                            void 0 != t.minChane && (cc.beimi.paixing_1 = t.minChane);
                            o = "toggle" + t.score;
                            this.tab3.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                this.tab3.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName(o).getComponent(cc.Toggle).isChecked = !0;
                            c = "toggle" + t.ruletype;
                            if (this.tab3.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab3.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName(c).getComponent(cc.Toggle).isChecked = !0, this.tab3.getChildByName("paixing").getChildByName("New Toggle1").getComponent(cc.Toggle).isChecked = cc.beimi.paixing_1, "12:3" == t.gamenum) s = "toggle1";
                            else if ("24:6" == t.gamenum) s = "toggle2";
                            s && (this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName(s).getComponent(cc.Toggle).isChecked = !0),
                                this.tab3.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = t.openFriend,
                                this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                1 == t.gametype ? this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !0 : 2 == t.gametype && (this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle2").getComponent(cc.Toggle).isChecked = !0)
                        } else if (606 == i) {
                            void 0 != t.minChane && (cc.beimi.paixing_1 = t.minChane);
                            o = "toggle" + t.score;
                            this.tab3.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                this.tab3.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName(o).getComponent(cc.Toggle).isChecked = !0;
                            var c = "toggle" + t.ruletype;
                            if (this.tab3.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab3.getChildByName("guize").getChildByName("New ToggleGroup").getChildByName(c).getComponent(cc.Toggle).isChecked = !0, this.tab3.getChildByName("paixing").getChildByName("New Toggle1").getComponent(cc.Toggle).isChecked = cc.beimi.paixing_1, "10:2" == t.gamenum) s = "toggle1";
                            else if ("20:4" == t.gamenum) s = "toggle2";
                            s && (this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab3.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName(s).getComponent(cc.Toggle).isChecked = !0),
                                this.tab3.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = t.openFriend,
                                this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                1 == t.gametype ? this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !0 : 2 == t.gametype && (this.tab3.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle2").getComponent(cc.Toggle).isChecked = !0)
                        } else if (708 == i) {
                            if (void 0 != t.minChane && (cc.beimi.paixing_1 = t.minChane), 100 != t.score) {
                                var o = "toggle" + t.score;
                                this.tab4.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                    this.tab4.getChildByName("difen").getChildByName("New ToggleGroup").getChildByName(o).getComponent(cc.Toggle).isChecked = !0
                            }
                            if (this.tab4.getChildByName("paixing").getChildByName("New Toggle1").getComponent(cc.Toggle).isChecked = cc.beimi.paixing_1, "12:3" == t.gamenum) s = "toggle1";
                            else if ("24:6" == t.gamenum) var s = "toggle2";
                            s && (this.tab4.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1, this.tab4.getChildByName("jushu").getChildByName("New ToggleGroup").getChildByName(s).getComponent(cc.Toggle).isChecked = !0),
                                this.tab4.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = t.openFriend,
                                this.tab4.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1,
                                1 == t.gametype ? this.tab4.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !0 : 2 == t.gametype && (this.tab4.getChildByName("moshi").getChildByName("New ToggleGroup").getChildByName("toggle2").getComponent(cc.Toggle).isChecked = !0)
                        }
                    },
                    onClickdifen_1: function(e, i) {
                        cc.beimi.difen = i
                    },
                    onClickmaxPower: function(e, i) {
                        cc.beimi.maxPower = i
                    },
                    onClickguize_1: function(e, i) {
                        cc.beimi.guize = i
                    },
                    onClickpaixing_1: function(e, i) {
                        var t = cc.beimi.niuniu_paixing;
                        if (i) switch (i) {
                            case "0":
                                t[0] ? t[0] = !1 : t[0] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "1":
                                t[1] ? t[1] = !1 : t[1] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "2":
                                t[2] ? t[2] = !1 : t[2] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "3":
                                t[3] ? t[3] = !1 : t[3] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "4":
                                t[4] ? t[4] = !1 : t[4] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "5":
                                t[5] ? t[5] = !1 : t[5] = !0,
                                    cc.beimi.niuniu_paixing = t;
                                break;
                            case "6":
                                t[6] ? t[6] = !1 : t[6] = !0,
                                    cc.beimi.niuniu_paixing = t
                        } else cc.beimi.paixing_1 ? cc.beimi.paixing_1 = !1 : cc.beimi.paixing_1 = !0
                    },
                    onClickpaixing_2: function() {
                        cc.beimi.paixing_2 ? cc.beimi.paixing_2 = !1 : cc.beimi.paixing_2 = !0
                    },
                    onClickpaixing_3: function() {
                        cc.beimi.paixing_3 ? cc.beimi.paixing_3 = !1 : cc.beimi.paixing_3 = !0
                    },
                    onClickjushu_1: function() {
                        var e = cc.beimi.mroomType;
                        1 == e ? cc.beimi.jushu = "10:1": 2 == e ? cc.beimi.jushu = "12:2": 510 == e || 610 == e || 708 == e ? cc.beimi.jushu = "12:3": 606 == e && (cc.beimi.jushu = "10:2")
                    },
                    onClickjushu_2: function() {
                        var e = cc.beimi.mroomType;
                        1 == e ? cc.beimi.jushu = "20:2": 2 == e ? cc.beimi.jushu = "24:4": 510 == e || 610 == e || 708 == e ? cc.beimi.jushu = "24:6": 606 == e && (cc.beimi.jushu = "20:4")
                    },
                    onClickshangzhuang_1: function() {
                        cc.beimi.shangzhuang = 1
                    },
                    onClickshangzhuang_2: function() {
                        cc.beimi.shangzhuang = 100
                    },
                    onClickshangzhuang_3: function() {
                        cc.beimi.shangzhuang = 300
                    },
                    onClickshangzhuang_4: function() {
                        cc.beimi.shangzhuang = 500
                    },
                    onClickrtype: function(e, i) {
                        cc.beimi.mroomType;
                        cc.beimi.gametype = i
                    },
                    onClickfriend: function(e, i) {
                        cc.beimi.openFriend ? cc.beimi.openFriend = !1 : cc.beimi.isopenfriend ? cc.beimi.openFriend = !0 : (1 == i ? this.tab1.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1 : 2 == i ? this.tab2.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1 : 3 == i ? this.tab3.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1 : 4 == i && (this.tab4.getChildByName("teshu").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = !1), cc.beimi.beiMiCommon.alert("您还未开通好友管理功能，请到游戏大厅-更多功能开启"))
                    }
                }),
                cc._RF.pop()
        },
            {}],
        runGame: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "2bf12vSrSlFVZEZmu9hb6k2", "runGame");
            var a = e("audioPlayer");
            cc.Class({
                extends: cc.Component,
                properties: {
                    nodegame: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player0: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player1: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player2: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player3: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player4: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player5: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player6: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player7: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player8: {
                        default:
                            null,
                        type: cc.Node
                    },
                    player9: {
                        default:
                            null,
                        type: cc.Node
                    },
                    newCard: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    paijiu_Pre: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    dianshu_pre: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    num_niu: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    jinbi_ainim: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    zhuang: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    ban: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    fama: {
                        default:
                            null,
                        type: cc.Prefab
                    },
                    runGame: {
                        default:
                            null,
                        type: cc.Node
                    },
                    nntimer: {
                        default:
                            null,
                        type: cc.Label
                    },
                    atlas: {
                        default:
                            null,
                        type: cc.SpriteAtlas
                    },
                    roomNumber: {
                        default:
                            null,
                        type: cc.Label
                    },
                    cardnum: {
                        default:
                            null,
                        type: cc.Label
                    },
                    dizhu_Label: {
                        default:
                            null,
                        type: cc.Label
                    },
                    ju_label: {
                        default:
                            null,
                        type: cc.Label
                    },
                    hit_1: {
                        default:
                            null,
                        type: cc.Node
                    },
                    timehit: {
                        default:
                            null,
                        type: cc.Node
                    },
                    history_node: {
                        default:
                            null,
                        type: cc.Node
                    },
                    jinbiMusic: {
                        url: cc.AudioClip,
                        default:
                            null
                    }
                },
                onLoad: function() {
                    cc.beimi.playerindex = {},
                        cc.beimi.pu = {},
                        cc.beimi.cards = {},
                        cc.beimi.playertype = {},
                        cc.beimi.onlooker = {},
                        cc.beimi.playList = [],
                        cc.beimi.famas = [],
                        cc.beimi.playersex = {},
                        cc.beimi.end = !1,
                        cc.beimi.isspeaking = !1,
                        cc.beimi.niunius = {},
                        cc.beimi.ban = new cc.NodePool,
                        cc.beimi.ban.put(cc.instantiate(this.ban)),
                        cc.beimi.zhuangjia = new cc.NodePool,
                        cc.beimi.zhuangjia.put(cc.instantiate(this.zhuang)),
                        cc.beimi.jinbiNode = new cc.NodePool;
                    for (var i = 0; i < 80; i++) cc.beimi.jinbiNode.put(cc.instantiate(this.jinbi_ainim));
                    this.nntimer.string = "00";
                    this.isDowned = !1,
                        cc.beimi.runGame = this;
                    e("socket");
                    window.addEventListener("popstate",
                        function(e) {
                            cc.beimi.isclose = !0,
                                cc.beimi.socket.close(),
                            window.wx && wx.closeWindow()
                        },
                        !0)
                },
                start: function() {
                    var i = e("socket"),
                        t = cc.beimi.roomType;
                    if (510 == t) {
                        cc.beimi.fama = new cc.NodePool,
                            this.fish_node = cc.director.getScene().getChildByName("Canvas").getChildByName("game_bg").getChildByName("fish");
                        var a = cc.director.getWinSize().width,
                            n = 1;
                        a - 220 < 362 && (n = (a - 220) / 362),
                        a - 220 > 362 && (n = (a - 220) / 362),
                            this.fish_node.scale = n;
                        cc.beimi.fishscene = this.fish_node,
                            cc.beimi.fishscafe = n;
                        this.nodegame.getChildByName("jishi").setPosition(cc.p(0, 210)),
                            this.nodegame.getChildByName("readybtn").setPosition(cc.p(0, -250 * n)),
                            this.nodegame.getChildByName("beishu").setPosition(cc.p(0, -250 * n)),
                            this.nodegame.getChildByName("ready1").setPosition(cc.p(0, -250 * n)),
                            this.nodegame.getChildByName("qz").setPosition(cc.p(0, -250 * n));
                        var c = 1;
                        a / 2 - 70 < 250 && (c = (a / 2 - 70) / 250),
                        a / 2 - 70 > 250 && (c = (a / 2 - 70) / 250),
                            this.history_node.scale = c;
                        for (o = 0; o < 10; o++) cc.beimi.fama.put(cc.instantiate(this.fama))
                    }
                    if (1 == t) {
                        cc.beimi.niuniuNode = new cc.NodePool;
                        for (o = 0; o < 10; o++) cc.beimi.niuniuNode.put(cc.instantiate(this.num_niu));
                        cc.beimi.cardNode = new cc.NodePool;
                        for (o = 0; o < 50; o++) cc.beimi.cardNode.put(cc.instantiate(this.newCard));
                        s = {
                            0 : this.player0,
                            1 : this.player1,
                            2 : this.player3,
                            3 : this.player5,
                            4 : this.player7,
                            5 : this.player9
                        };
                        i.prototype.socketfun()
                    } else if (2 == t) {
                        cc.beimi.niuniuNode = new cc.NodePool;
                        for (o = 0; o < 10; o++) cc.beimi.niuniuNode.put(cc.instantiate(this.num_niu));
                        cc.beimi.cardNode = new cc.NodePool;
                        for (o = 0; o < 50; o++) cc.beimi.cardNode.put(cc.instantiate(this.newCard));
                        s = {
                            0 : this.player0,
                            1 : this.player1,
                            2 : this.player2,
                            3 : this.player3,
                            4 : this.player4,
                            5 : this.player5,
                            6 : this.player6,
                            7 : this.player7,
                            8 : this.player8,
                            9 : this.player9
                        };
                        i.prototype.socketfun()
                    } else if (510 == t) {
                        s = {
                            0 : this.player0,
                            1 : this.player1,
                            2 : this.player2,
                            3 : this.player3,
                            4 : this.player4,
                            5 : this.player5,
                            6 : this.player6,
                            7 : this.player7,
                            8 : this.player8,
                            9 : this.player9
                        };
                        i.prototype.socketfun()
                    } else if (610 == t) {
                        cc.beimi.niuniuNode = new cc.NodePool;
                        for (o = 0; o < 10; o++) cc.beimi.niuniuNode.put(cc.instantiate(this.dianshu_pre));
                        cc.beimi.cardNode = new cc.NodePool;
                        for (o = 0; o < 50; o++) cc.beimi.cardNode.put(cc.instantiate(this.paijiu_Pre));
                        s = {
                            0 : this.player0,
                            1 : this.player1,
                            2 : this.player2,
                            3 : this.player3,
                            4 : this.player4,
                            5 : this.player5,
                            6 : this.player6,
                            7 : this.player7,
                            8 : this.player8,
                            9 : this.player9
                        };
                        i.prototype.socketfun()
                    } else if (606 == t) {
                        cc.beimi.niuniuNode = new cc.NodePool;
                        for (o = 0; o < 10; o++) cc.beimi.niuniuNode.put(cc.instantiate(this.dianshu_pre));
                        cc.beimi.cardNode = new cc.NodePool;
                        for (o = 0; o < 50; o++) cc.beimi.cardNode.put(cc.instantiate(this.paijiu_Pre));
                        s = {
                            0 : this.player0,
                            1 : this.player1,
                            2 : this.player3,
                            3 : this.player5,
                            4 : this.player7,
                            5 : this.player9
                        };
                        i.prototype.socketfun()
                    } else if (708 == t) {
                        cc.beimi.niuniuNode = new cc.NodePool;
                        for (o = 0; o < 20; o++) cc.beimi.niuniuNode.put(cc.instantiate(this.dianshu_pre));
                        cc.beimi.cardNode = new cc.NodePool;
                        for (var o = 0; o < 50; o++) cc.beimi.cardNode.put(cc.instantiate(this.paijiu_Pre));
                        this.player1.parent.active = !1,
                            this.player9.parent.active = !1;
                        var s = {
                            0 : this.player0,
                            1 : this.player2,
                            2 : this.player3,
                            3 : this.player4,
                            4 : this.player5,
                            5 : this.player6,
                            6 : this.player7,
                            7 : this.player8
                        };
                        this.player2.parent.runAction(cc.moveBy(0, 0, -50)),
                            this.player3.parent.runAction(cc.moveBy(0, 0, -50)),
                            this.player4.parent.runAction(cc.moveBy(0, 0, -50)),
                            this.player6.parent.runAction(cc.moveBy(0, 0, -50)),
                            this.player7.parent.runAction(cc.moveBy(0, 0, -50)),
                            this.player8.parent.runAction(cc.moveBy(0, 0, -50)),
                            cc.beimi.popup_paijiu = 0,
                            cc.beimi.paijiu_my = [],
                            i.prototype.socketfun()
                    }
                    cc.beimi.pls = s,
                        this.value_set = [],
                        this.value_set.push("快点吧，我等的花儿也谢了"),
                        this.value_set.push("我出去叫人"),
                        this.value_set.push("你的牌好靓啊"),
                        this.value_set.push("我当年横扫澳门九条街"),
                        this.value_set.push("算你牛逼"),
                        this.value_set.push("别吹牛逼，有本事干到底"),
                        this.value_set.push("输的裤衩都没了"),
                        this.value_set.push("我给你们送温暖了"),
                        this.value_set.push("谢谢老板"),
                        this.value_set.push("我来啦，让你们久等了"),
                        this.value_set.push("我出去一下，马上回来，等我哦"),
                        this.value_set.push("怎么断线了，网络太差了"),
                        this.value_set.push("搏一搏单车变摩托"),
                        cc.beimi.value_set = this.value_set
                },
                addPlayers: function(e, i, t) {
                    var a = cc.beimi.pls,
                        n = cc.beimi.pu,
                        c = a[e],
                        o = i.userId;
                    cc.beimi.playList.push(o),
                        n[o] = c,
                        cc.beimi.playerindex[o] = e,
                        cc.beimi.playersex[o] = i.sex,
                        c.active = !0;
                    var s = cc.beimi.runGame;
                    s.onready(e, !1),
                        c.getChildByName("own").getChildByName("Info").getChildByName("name").getComponent(cc.Label).string = i.name,
                        c.getChildByName("own").getChildByName("Info").getChildByName("win_label").getComponent(cc.Label).string = i.money;
                    var r = c.getChildByName("own").getChildByName("player_head").getComponent(cc.Sprite),
                        l = i.photo;
                    l && cc.loader.load({
                            url: l,
                            type: "png"
                        },
                        function(e, i) {
                            var t = new cc.SpriteFrame(i);
                            r.spriteFrame = t
                        }),
                    t && o == cc.beimi.userId && (cc.beimi.rules = t.roomRule, s.cardnum.string = cc.beimi.card, s.dizhu_Label.string = "底分: " + t.roomRule.score + "分", s.jushuFun(t.currentGameNum), 1 == cc.beimi.roomType || 2 == cc.beimi.roomType || 510 == cc.beimi.roomType && (cc.director.getScene().getChildByName("Canvas").getChildByName("game_bg").getChildByName("bgg").getChildByName("dizhu_Label").getComponent(cc.Label).string = "单局最大：" + t.roomRule.maxPower, cc.beimi.maxPower = t.roomRule.maxPower))
                },
                ready_fapai: function(e, i, t) {
                    var a = cc.beimi.runGame;
                    e && (a.outtimehit(t), a.outhit_1(i, !0), a.timer(a, e))
                },
                deal_card: function(e, i, t) {
                    for (var a = cc.beimi.sex,
                             n = cc.beimi.runGame,
                             c = cc.beimi.pu[e], o = c.parent, s = [], r = 0; r < 5; r++) {
                        var l = cc.beimi.cardNode.get();
                        cc.find("Canvas").addChild(l, 10);
                        var m = l.getComponent("puker");
                        l.scafe = 1,
                            m.isOpen(!0),
                            m.isclick(!1),
                            l.setPosition(0, 0),
                            s.push(l)
                    }
                    var r = 0,
                        d = l.width;
                    n.setcardpos(c, o, r, n, s, d, a, i, t),
                        cc.beimi.cards[cc.beimi.playerindex[e]] = s
                },
                setcardpos: function(e, i, t, a, n, c, o, s, r) {
                    if (! (t >= 5)) {
                        var l, m;
                        e == a.player0 ? (l = cc.moveTo(.8, t * c * 1.2 - 173 + 5 * t, i.y + 95), m = cc.scaleTo(.8, 1.2, 1.2)) : e == a.player1 ? (l = cc.moveTo(.8, i.x - 140 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player8 ? (l = cc.moveTo(.8, i.x - 140 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player3 ? (l = cc.moveTo(.8, i.x - 140 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player6 ? (l = cc.moveTo(.8, i.x - 140 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player5 ? (l = cc.moveTo(.8, i.x - 30 + 15 * t, i.y - 115), m = cc.scaleTo(.8, .7, .7)) : e == a.player4 ? (l = cc.moveTo(.8, i.x + 80 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player7 ? (l = cc.moveTo(.8, i.x + 80 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player2 ? (l = cc.moveTo(.8, i.x + 80 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)) : e == a.player9 && (l = cc.moveTo(.8, i.x + 80 + 15 * t, i.y - 20), m = cc.scaleTo(.8, .7, .7)),
                            l.easing(cc.easeOut(3));
                        var d = cc.spawn(m, l),
                            u = cc.callFunc(function() {
                                n[4].getComponent("puker").order(s[4]),
                                2 == cc.beimi.isrunning && a.outbeishu(!0)
                            });
                        if (e == a.player0) if (4 == t) {
                            g = cc.sequence(d, u);
                            n[t].runAction(g)
                        } else {
                            cc.log(t + "张");
                            var h = cc.callFunc(function(e, i) {
                                    var t = e.getComponent("puker");
                                    t.order(i);
                                    var a = e.scaleX,
                                        n = e.scaleY;
                                    t.isOpen(!1, a, n)
                                }.bind("", n[t], s[t])),
                                g = cc.sequence(d, h);
                            n[t].runAction(g)
                        } else cc.beimi.isruncard && a.setVoice("", 4, o),
                            n[t].runAction(d),
                        4 == t && (cc.beimi.isruncard && 2 == cc.beimi.isrunning && (a.outtimehit(!0), a.outhit_1("抢庄", !0), a.timer(a, r)), cc.beimi.isruncard = !1);
                        t++,
                            setTimeout(function() {
                                    a.setcardpos(e, i, t, a, n, c, o, s, r)
                                },
                                100)
                    }
                },
                deal_paijiu: function(e, i, t) {
                    var a = cc.beimi.sex,
                        n = cc.beimi.runGame,
                        c = cc.beimi.pu[e],
                        o = c.parent,
                        s = [],
                        r = 0,
                        l = 0;
                    708 == cc.beimi.roomType ? (r = 4, l = 2, e == cc.beimi.userId && (cc.beimi.paijiu_my = [], cc.beimi.paijiu_my.push(i[0]), cc.beimi.paijiu_my.push(i[1]))) : (r = 2, l = 1);
                    for (u = 0; u < r; u++) {
                        var m = cc.beimi.cardNode.get();
                        cc.find("Canvas").addChild(m, 10);
                        var d = m.getComponent("paijiu");
                        m.scafe = 1,
                            d.isOpen(!0),
                            d.isclick(!1),
                            m.setPosition(0, 0),
                            s.push(m)
                    }
                    var u = 0,
                        h = m.width;
                    n.setpaipos(c, o, u, n, s, h, a, i, t, r, l),
                        cc.beimi.cards[cc.beimi.playerindex[e]] = s
                },
                setpaipos: function(e, i, t, a, n, c, o, s, r, l, m) {
                    if (! (t >= l)) {
                        var d, u;
                        if (708 == cc.beimi.roomType) var h = 60,
                            g = 60,
                            p = 30,
                            f = 20,
                            b = -102,
                            y = 45,
                            _ = .6;
                        else var h = 105,
                            g = 80,
                            p = 35,
                            f = 20,
                            b = -36,
                            y = 15,
                            _ = .7;
                        e == a.player0 ? (d = cc.moveTo(.8, b + t * c * 1.2 + 12 * t, i.y + 85), u = cc.scaleTo(.8, 1.2, 1.2)) : e == a.player1 ? (d = 708 == cc.beimi.roomType ? cc.moveTo(.8, i.x - h - t * p, i.y - f) : cc.moveTo(.8, i.x - h + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player8 ? (d = 708 == cc.beimi.roomType ? cc.moveTo(.8, i.x - h - t * p, i.y - f) : cc.moveTo(.8, i.x - h + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player3 ? (d = 708 == cc.beimi.roomType ? cc.moveTo(.8, i.x - h - t * p, i.y - f) : cc.moveTo(.8, i.x - h + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player6 ? (d = 708 == cc.beimi.roomType ? cc.moveTo(.8, i.x - h - t * p, i.y - f) : cc.moveTo(.8, i.x - h + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player5 ? (d = cc.moveTo(.8, i.x - y + t * p, i.y - 115), u = cc.scaleTo(.8, _, _)) : e == a.player4 ? (d = cc.moveTo(.8, i.x + g + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player7 ? (d = cc.moveTo(.8, i.x + g + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player2 ? (d = cc.moveTo(.8, i.x + g + t * p, i.y - f), u = cc.scaleTo(.8, _, _)) : e == a.player9 && (d = cc.moveTo(.8, i.x + g + t * p, i.y - f), u = cc.scaleTo(.8, _, _)),
                            d.easing(cc.easeOut(3));
                        var v = cc.spawn(u, d),
                            C = cc.callFunc(function() {
                                2 == cc.beimi.isrunning && a.outbeishu(!0)
                            });
                        if (e == a.player0) if (t < m) {
                            cc.log(t + "张");
                            var N = cc.callFunc(function(e, i) {
                                    var t = e.getComponent("paijiu");
                                    t.order(i);
                                    var a = e.scaleX,
                                        n = e.scaleY;
                                    t.isOpen(!1, a, n)
                                }.bind("", n[t], s[t])),
                                w = cc.sequence(v, N);
                            n[t].runAction(w)
                        } else {
                            w = cc.sequence(v, C);
                            n[t].runAction(w)
                        } else {
                            a.setVoice("", 4, o);
                            var B = cc.callFunc(function() {
                                    cc.beimi.isruncard
                                }),
                                k = cc.sequence(v, B);
                            n[t].runAction(k),
                            t == l - 1 && cc.beimi.isruncard && 2 == cc.beimi.isrunning && 2 != cc.beimi.gametype && (a.outtimehit(!0), a.outhit_1("抢庄", !0), a.timer(a, r))
                        }
                        t++,
                            setTimeout(function() {
                                    a.setpaipos(e, i, t, a, n, c, o, s, r, l, m)
                                },
                                100)
                    }
                },
                againCard: function(e, i, t) {
                    var a = cc.beimi.runGame,
                        n = cc.beimi.pu[e],
                        c = n.parent,
                        o = [];
                    if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType) {
                        var s = 0,
                            r = 0;
                        if (708 == cc.beimi.roomType) {
                            if (s = 4, 4 == t) {
                                if (e == cc.beimi.userId) {
                                    cc.beimi.paijiu_my = [];
                                    l = [];
                                    4 == i.length && (l.push(i[0]), l.push(i[1]), l.push(i[2]), l.push(i[3])),
                                        cc.beimi.paijiu_my = l,
                                    cc.beimi.onlooker[cc.beimi.userId] || (a.nodegame.getChildByName("zupai_node").active = !0)
                                }
                                r = 4
                            } else {
                                if (e == cc.beimi.userId) {
                                    cc.beimi.paijiu_my = [];
                                    var l = [];
                                    i.length > 1 && (l.push(i[0]), l.push(i[1])),
                                        cc.beimi.paijiu_my = l
                                }
                                r = 2
                            }
                            var m = 60,
                                d = 60,
                                u = 30,
                                h = 20,
                                g = -102,
                                p = 45,
                                f = .6
                        } else {
                            s = 2,
                                r = 1;
                            var m = 105,
                                d = 80,
                                u = 35,
                                h = 20,
                                g = -36,
                                p = 15,
                                f = .7
                        }
                        for (w = 0; w < s; w++) {
                            _ = cc.beimi.cardNode.get(); (v = cc.find("Canvas")).addChild(_, 10),
                                o.push(_);
                            C = _.width;
                            n == a.player0 ? (_.setPosition(g + w * C * 1.2 + 12 * w, c.y + 85), _.scaleX = 1.2, _.scaleY = 1.2) : n == a.player1 || n == a.player8 || n == a.player3 || n == a.player6 ? (708 == cc.beimi.roomType ? _.setPosition(c.x - m - w * u, c.y - h) : _.setPosition(c.x - m + w * u, c.y - h), _.scaleX = f, _.scaleY = f) : n == a.player4 || n == a.player7 || n == a.player2 || n == a.player9 ? (_.setPosition(c.x + d + w * u, c.y - h), _.scaleX = f, _.scaleY = f) : n == a.player5 && (_.setPosition(c.x - p + w * u, c.y - 115), _.scaleX = f, _.scaleY = f)
                        }
                        if ((N = cc.beimi.cards)[cc.beimi.playerindex[e]] = o, n == a.player0) for (w = 0; w < r; w++) {
                            B = o[w].getComponent("paijiu");
                            if (i) {
                                B.order(i[w]);
                                var b = o[w].scaleX,
                                    y = o[w].scaleY;
                                B.isOpen(!1, b, y)
                            }
                            1 == t && 2 != cc.beimi.gametype && a.outbeishu(!0)
                        }
                    } else {
                        for (w = 0; w < 5; w++) {
                            var _ = cc.beimi.cardNode.get(),
                                v = cc.find("Canvas");
                            v.addChild(_, 10),
                                o.push(_);
                            var C = _.width;
                            n == a.player0 ? (_.setPosition(w * C * 1.2 - 173 + 5 * w, c.y + 95), _.scaleX = 1.2, _.scaleY = 1.2) : n == a.player1 || n == a.player8 || n == a.player3 || n == a.player6 ? (_.setPosition(c.x - 140 + 15 * w, c.y - 20), _.scaleX = .7, _.scaleY = .7) : n == a.player4 || n == a.player7 || n == a.player2 || n == a.player9 ? (_.setPosition(c.x + 80 + 15 * w, c.y - 20), _.scaleX = .7, _.scaleY = .7) : n == a.player5 && (_.setPosition(c.x - 15 + 15 * w, c.y - 115), _.scaleX = .7, _.scaleY = .7)
                        }
                        var N = cc.beimi.cards;
                        if (N[cc.beimi.playerindex[e]] = o, n == a.player0) for (var w = 0; w < o.length - 1; w++) {
                            var B = o[w].getComponent("puker");
                            if (i) {
                                B.order(i[w]);
                                var b = o[w].scaleX,
                                    y = o[w].scaleY;
                                B.isOpen(!1, b, y)
                            }
                            1 == t && 2 != cc.beimi.gametype && a.outbeishu(!0)
                        }
                    }
                },
                againfish: function(e) {
                    if (3 == e.status || 4 == e.status) {
                        var i = cc.beimi.runGame,
                            t = e.mySelect,
                            a = e.selectPower,
                            n = cc.beimi.fishscene.getComponent("fish");
                        for (var c in t) {
                            var o = c,
                                s = t[c],
                                r = -1;
                            n.summoney(o, s, r, cc.beimi.userId)
                        }
                        for (var c in a) {
                            var o = c,
                                r = a[c],
                                s = -1;
                            n.summoney(o, s, r);
                            var l, m = parseInt(r / 5),
                                d = r % 5,
                                u = parseInt(m / 2),
                                h = m % 2;
                            if (u > 0) for (g = 0; g < u; g++) l = 10,
                                i.setfamaagain(o, l);
                            if (d > 0 && (l = d, i.setfamaagain(o, l)), h > 0) for (var g = 0; g < h; g++) l = 5,
                                i.setfamaagain(o, l)
                        }
                    }
                },
                setfamaagain: function(e, i) {
                    var t = cc.beimi.runGame;
                    if (cc.beimi.fama.size() < 0) a = cc.beimi.fama.get();
                    else {
                        cc.beimi.fama.put(cc.instantiate(t.fama));
                        var a = cc.beimi.fama.get()
                    }
                    cc.find("Canvas/game_bg").addChild(a),
                        a.getComponent("fama").order(i),
                        cc.beimi.famas.push(a);
                    var n, c, o = cc.beimi.fishscafe,
                        s = (cc.beimi.fishscene, -135 * o + cc.randomMinus1To1() * (30 * o)),
                        r = cc.randomMinus1To1() * (25 * o),
                        l = -135 * o + cc.randomMinus1To1() * (30 * o),
                        m = -124 * o + cc.randomMinus1To1() * (25 * o),
                        d = -45 * o + cc.randomMinus1To1() * (30 * o),
                        u = -124 * o + cc.randomMinus1To1() * (25 * o),
                        h = 45 * o + cc.randomMinus1To1() * (30 * o),
                        g = -124 * o + cc.randomMinus1To1() * (25 * o),
                        p = 135 * o + cc.randomMinus1To1() * (30 * o),
                        f = cc.randomMinus1To1() * (25 * o),
                        b = 135 * o + cc.randomMinus1To1() * (30 * o),
                        y = -124 * o + cc.randomMinus1To1() * (25 * o),
                        _ = 135 * o + cc.randomMinus1To1() * (30 * o),
                        v = 124 * o + cc.randomMinus1To1() * (25 * o),
                        C = -135 * o + cc.randomMinus1To1() * (30 * o),
                        N = 124 * o + cc.randomMinus1To1() * (25 * o);
                    1 == e ? (n = s, c = r) : 2 == e ? (n = l, c = m) : 3 == e ? (n = d, c = u) : 4 == e ? (n = h, c = g) : 5 == e ? (n = p, c = f) : 6 == e ? (n = b, c = y) : 100 == e ? (n = _, c = v) : 101 == e && (n = C, c = N),
                        a.setPosition(n, c)
                },
                outbtn: function(e) {
                    var i = cc.beimi.runGame,
                        t = (cc.beimi.pu[cc.beimi.userId], cc.beimi.cards[cc.beimi.playerindex[cc.beimi.userId]]);
                    if (708 == cc.beimi.roomType) {
                        if (t) for (var a = 0; a < t.length; a++)(n = t[a].getComponent("paijiu")).ispaiclick(!0)
                    } else if (t) {
                        if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType) n = t[t.length - 1].getComponent("paijiu");
                        else var n = t[t.length - 1].getComponent("puker");
                        n.isclick(!0),
                            i.outhit(!0)
                    }
                    i.outtimehit(!0),
                        i.outhit_1("等待摊牌", !0),
                        i.timer(i, e)
                },
                turnMycard: function(e) {
                    var i = cc.beimi.runGame,
                        t = e.lastPoker,
                        a = (cc.beimi.pu[cc.beimi.userId], cc.beimi.cards[cc.beimi.playerindex[cc.beimi.userId]]);
                    if (a) if (708 == cc.beimi.roomType) {
                        if (a.length) {
                            for (o = 2; o < a.length; o++) { (s = a[o].getComponent("paijiu")).order(t[o - 2]),
                                cc.beimi.paijiu_my.push(t[o - 2]);
                                var n = a[o].scaleX,
                                    c = a[o].scaleY;
                                s.isOpen(!1, n, c)
                            }
                            for (var o = 0; o < a.length; o++)(s = a[o].getComponent("paijiu")).ispaiclick(!0);
                            cc.beimi.onlooker[cc.beimi.userId] || (i.nodegame.getChildByName("zupai_node").active = !0)
                        }
                    } else if (a.length) {
                        if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType) s = a[a.length - 1].getComponent("paijiu");
                        else var s = a[a.length - 1].getComponent("puker");
                        s.order(t),
                            s.isclick(!0),
                            i.outhit(!0)
                    }
                },
                zupai_hit: function(e) {
                    var i = cc.beimi.runGame;
                    e ? (i.nodegame.getChildByName("zupai_node").getChildByName("zupai_btn1").active = !0, i.nodegame.getChildByName("zupai_node").getChildByName("zupai_btn2").active = !1) : (i.nodegame.getChildByName("zupai_node").getChildByName("zupai_btn1").active = !1, i.nodegame.getChildByName("zupai_node").getChildByName("zupai_btn2").active = !0)
                },
                paijiu_finish: function(e, i) {
                    var t = cc.beimi.cards,
                        a = cc.beimi.runGame,
                        n = cc.beimi.pu;
                    e || (e = cc.beimi.userId);
                    var c = n[e],
                        o = cc.beimi.playertype;
                    if (1 != o[e]) {
                        if (o[e] = 1, e == cc.beimi.userId && (a.nodegame.getChildByName("zupai_node").active = !1, i)) var s = i.orderPoker;
                        var r = 1,
                            l = 12;
                        c == a.player0 ? (r = 1.2, l = 12) : (r = .6, l = 7);
                        var m = t[cc.beimi.playerindex[e]];
                        if (m && m.length && 4 == m.length) {
                            for (var d = 0; d < m.length; d++) {
                                var u = m[d].getComponent("paijiu");
                                u.paionclick("", !0),
                                    u.ispaiclick(!1, !0),
                                s && 4 == s.length && u.order(s[d])
                            }
                            var h = m[2].width;
                            m[2].rotation = -90,
                                m[3].rotation = -90,
                                c == a.player1 || c == a.player8 || c == a.player3 || c == a.player6 ? (e != cc.beimi.userId && (m[2].runAction(cc.moveBy(0, -3, 0)), m[3].runAction(cc.moveBy(0, -7, 0))), m[3].runAction(cc.moveBy(.1, h * r / 2 + .5 * l, h * r / 2 + .5 * l)), m[2].runAction(cc.moveBy(.1, -(h * r / 2 + .5 * l), -(h * r / 2 + .5 * l)))) : (e != cc.beimi.userId && (m[2].runAction(cc.moveBy(0, 3, 0)), m[3].runAction(cc.moveBy(0, 7, 0))), m[2].runAction(cc.moveBy(.1, h * r / 2 + .5 * l, h * r / 2 + .5 * l)), m[3].runAction(cc.moveBy(.1, -(h * r / 2 + .5 * l), -(h * r / 2 + .5 * l))))
                        }
                    }
                },
                paijiu_hit: function() {
                    for (var e = cc.beimi.runGame,
                             i = cc.beimi.cards[cc.beimi.playerindex[cc.beimi.userId]], t = 0; t < i.length; t++)(s = i[t].getComponent("paijiu")).paionclick("", !0);
                    var a = e.nodegame.getChildByName("zupai_node").getChildByName("btn_hit").getComponent("paijiu_hit"),
                        n = cc.beimi.rules.minChane;
                    if (4 == cc.beimi.paijiu_my.length) for (var c = a.pokerTips(cc.beimi.paijiu_my, n), o = 0; o < 2; o++) for (t = 0; t < i.length; t++) {
                        var s = i[t].getComponent("paijiu");
                        c[o] == t && s.paionclick()
                    }
                },
                timer: function(e, i) {
                    e.nntimer.string = i > 9 ? i: "0" + i,
                        e.callback = function() {
                            if ((i -= 1) >= 0) {
                                var t = i;
                                i < 10 && (t = "0" + i),
                                0 == i && e.outtimehit(!1),
                                    e.nntimer.string = t
                            }
                        };
                    var t = cc.beimi.time_schedule;
                    t.unscheduleAllCallbacks(),
                        t.schedule(e.callback, 1, i, 0)
                },
                draw_niuniu: function(e, i) {
                    var t = cc.beimi.playersex[e],
                        a = cc.beimi.playertype,
                        n = cc.beimi.runGame;
                    if (708 != cc.beimi.roomType) {
                        if (1 == a[e]) return;
                        a[e] = 1
                    }
                    if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType) {
                        c = i.clearData.point;
                        n.setVoice(c, 1, t)
                    } else if (708 != cc.beimi.roomType) {
                        var c = i.clearData.niu;
                        n.setVoice(c, 1, t)
                    }
                    var o = cc.beimi.pu[e],
                        s = o.parent,
                        r = i.clearData.orderPoker,
                        l = cc.beimi.cards[cc.beimi.playerindex[e]];
                    if (e == cc.beimi.userId) m = 1.2;
                    else var m = .7;
                    var d = 0,
                        u = 0,
                        h = 0,
                        g = 0;
                    if (708 == cc.beimi.roomType) {
                        var p = [];
                        if (l) for (f = 0; f < l.length; f++)(b = l[f].getComponent("paijiu")).order(r[f]);
                        n.schedule(function() {
                                var a = cc.beimi.niuniuNode.get();
                                cc.find("Canvas").addChild(a, 10);
                                var c = a.getComponent("dianshu"),
                                    r = cc.beimi.niunius;
                                if (p.push(a), 0 == d) {
                                    b = i.clearData.secondPointStr;
                                    if (l) for (y = 2; y < l.length; y++) {
                                        var m = .6,
                                            f = .6; (_ = l[y].getComponent("paijiu")).isOpen(!1, m, f)
                                    }
                                    u = 67.5,
                                        h = 33.75
                                } else {
                                    var b = i.clearData.firstPointStr;
                                    if (l) for (var y = 0; y < 2; y++) {
                                        var _ = l[y].getComponent("paijiu"),
                                            m = .6,
                                            f = .6;
                                        _.isOpen(!1, m, f)
                                    }
                                    u = -67.5,
                                        h = -33.75,
                                        r[cc.beimi.playerindex[e]] = p
                                }
                                if (b) {
                                    var v = (b + "").lastIndexOf("_0");
                                    if (cc.log("这是以_0结尾：" + (b + "").lastIndexOf("_0")), -1 === v) n.setVoice(b, 1, t);
                                    else {
                                        var C = (b + "").split("_")[0];
                                        n.setVoice(C, 1, t)
                                    }
                                }
                                if (c.order(b), o == n.player0) {
                                    a.setPosition(u, s.y + 175);
                                    N = cc.scaleTo(.2, .6, .6);
                                    a.runAction(N)
                                } else if (o == n.player1 || o == n.player8 || o == n.player3 || o == n.player6) {
                                    g = 0 == d ? 140 : 75,
                                        a.setPosition(s.x - g, s.y - 60);
                                    N = cc.scaleTo(.2, .3, .3);
                                    a.runAction(N)
                                } else if (o == n.player4 || o == n.player7 || o == n.player2 || o == n.player9) {
                                    g = 0 == d ? 140 : 75,
                                        a.setPosition(s.x + g, s.y - 60);
                                    N = cc.scaleTo(.2, .3, .3);
                                    a.runAction(N)
                                } else if (o == n.player5) {
                                    a.setPosition(s.x + h, s.y - 155);
                                    var N = cc.scaleTo(.2, .3, .3);
                                    a.runAction(N)
                                }
                                cc.log("八人大牌九显示结果"),
                                    d++
                            },
                            2, 1, .001)
                    } else {
                        if (l) for (var f = 0; f < l.length; f++) {
                            if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType) b = l[f].getComponent("paijiu");
                            else var b = l[f].getComponent("puker");
                            b.order(r[f]);
                            var y = m,
                                _ = m;
                            b.isclick(!1),
                                b.isOpen(!1, y, _)
                        }
                        var v = cc.beimi.niuniuNode.get();
                        if (cc.find("Canvas").addChild(v, 10), 610 == cc.beimi.roomType || 606 == cc.beimi.roomType) C = v.getComponent("dianshu");
                        else var C = v.getComponent("niu");
                        if (C.order(c), cc.beimi.niunius[cc.beimi.playerindex[e]] = v, cc.log("显示牛牛" + e), 1 == cc.beimi.roomType || 2 == cc.beimi.roomType) {
                            if (o == n.player0) {
                                v.setPosition(0, s.y + 70);
                                N = cc.scaleTo(.2, .8, .8);
                                v.runAction(N),
                                    0 == i.clearData.separate ? (l[0].runAction(cc.moveBy(.5, 66, 0)), l[1].runAction(cc.moveBy(.5, 33, 0)), l[3].runAction(cc.moveBy(.5, -33, 0)), l[4].runAction(cc.moveBy(.5, -66, 0))) : 3 == i.clearData.separate ? (l[0].runAction(cc.moveBy(.5, 56, 0)), l[1].runAction(cc.moveBy(.5, 23, 0)), l[2].runAction(cc.moveBy(.5, -10, 0)), l[3].runAction(cc.moveBy(.5, 13, 0)), l[4].runAction(cc.moveBy(.5, -20, 0))) : 4 == i.clearData.separate && (l[0].runAction(cc.moveBy(.5, 56, 0)), l[1].runAction(cc.moveBy(.5, 23, 0)), l[2].runAction(cc.moveBy(.5, -10, 0)), l[3].runAction(cc.moveBy(.5, -33, 0)), l[4].runAction(cc.moveBy(.5, -20, 0)))
                            } else if (o == n.player1 || o == n.player8 || o == n.player3 || o == n.player6) {
                                v.setPosition(s.x - 110, s.y - 35);
                                N = cc.scaleTo(.2, .5, .5);
                                v.runAction(N),
                                0 == i.clearData.separate || (3 == i.clearData.separate ? (l[0].runAction(cc.moveBy(.5, -15, 0)), l[1].runAction(cc.moveBy(.5, -15, 0)), l[2].runAction(cc.moveBy(.5, -15, 0))) : 4 == i.clearData.separate && (l[0].runAction(cc.moveBy(.5, -15, 0)), l[1].runAction(cc.moveBy(.5, -15, 0)), l[2].runAction(cc.moveBy(.5, -15, 0)), l[3].runAction(cc.moveBy(.5, -15, 0))))
                            } else if (o == n.player4 || o == n.player7 || o == n.player2 || o == n.player9) {
                                v.setPosition(s.x + 110, s.y - 35);
                                N = cc.scaleTo(.2, .5, .5);
                                v.runAction(N),
                                0 == i.clearData.separate || (3 == i.clearData.separate ? (l[3].runAction(cc.moveBy(.5, 15, 0)), l[4].runAction(cc.moveBy(.5, 15, 0))) : 4 == i.clearData.separate && l[4].runAction(cc.moveBy(.5, 15, 0)))
                            } else if (o == n.player5) {
                                v.setPosition(s.x, s.y - 130);
                                N = cc.scaleTo(.2, .5, .5);
                                v.runAction(N),
                                0 == i.clearData.separate || (3 == i.clearData.separate ? (l[3].runAction(cc.moveBy(.5, 15, 0)), l[4].runAction(cc.moveBy(.5, 15, 0))) : 4 == i.clearData.separate && l[4].runAction(cc.moveBy(.5, 15, 0)))
                            }
                        } else if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType) if (o == n.player0) {
                            v.setPosition(0, s.y + 175);
                            N = cc.scaleTo(.2, .8, .8);
                            v.runAction(N)
                        } else if (o == n.player1 || o == n.player8 || o == n.player3 || o == n.player6) {
                            v.setPosition(s.x - 90, s.y - 60);
                            N = cc.scaleTo(.2, .4, .4);
                            v.runAction(N)
                        } else if (o == n.player4 || o == n.player7 || o == n.player2 || o == n.player9) {
                            v.setPosition(s.x + 90, s.y - 60);
                            N = cc.scaleTo(.2, .4, .4);
                            v.runAction(N)
                        } else if (o == n.player5) {
                            v.setPosition(s.x, s.y - 155);
                            var N = cc.scaleTo(.2, .4, .4);
                            v.runAction(N)
                        }
                    }
                },
                relatively: function(e, i) {
                    if (1 == cc.beimi.roomType || 2 == cc.beimi.roomType) t = .5;
                    else if (510 == cc.beimi.roomType) t = 4.5;
                    else if (708 == cc.beimi.roomType) var t = 3;
                    var a = cc.beimi.runGame;
                    a.hiddenhit(!1),
                        a.outtimehit(!1),
                        a.scheduleOnce(function() {
                                for (var t in e) {
                                    var n = e[t];
                                    t == i.banker && a.money_anim(t, n, e, i)
                                }
                            },
                            t)
                },
                rundisap2: function(e, i, t, a, n, c) {
                    for (var o = cc.beimi.runGame,
                             s = 0; s < e.length; s++) {
                        var r = {
                                indx: 0,
                                pos: e[s]
                            },
                            l = function(e, i, t, a, n, c, o, s) {
                                var r = cc.beimi.runGame,
                                    l = cc.beimi.pu[this.pos].parent;
                                1 == o ? r.createjinbi(l, e) : r.createjinbi(e, l),
                                7 == ++this.indx && i == t - 1 && (cc.log("number: " + i + "length" + t), a && null != a && a.length > 0 ? r.rundisap2(a, e, null, n, c, 2) : r.scor(n, c))
                            }.bind(r, i, s, e.length, t, a, n, c);
                        o.schedule(l, .1, 7, .8)
                    }
                },
                money_anim: function(e, i, t, a) {
                    var n, c = cc.beimi.runGame,
                        o = cc.beimi.pu,
                        s = i.clearData.winP,
                        r = i.clearData.loseP,
                        l = (n = o[e]).parent;
                    s && s.length > 0 && c.rundisap2(s, l, r, t, a, 1),
                    (!s && r && r.length > 0 || s && s.length <= 0 && r && r.length > 0) && c.rundisap2(r, l, null, t, a, 2),
                    s && 0 == s.length && r && 0 == r.length && c.scor(t, a)
                },
                createjinbi: function(e, i) {
                    var t = cc.beimi.runGame,
                        n = cc.beimi.jinbiNode.get();
                    cc.find("Canvas").addChild(n, 10),
                        n.setPosition(e.x, e.y);
                    var c = cc.moveTo(.8, i.x, i.y);
                    c.easing(cc.easeOut(3));
                    var o = cc.callFunc(function() {
                            cc.beimi.jinbiNode.put(n)
                        }),
                        s = cc.sequence(c, o);
                    n.runAction(s),
                        a.playYinXiao(t.jinbiMusic)
                },
                scor: function(e, i) {
                    var t = cc.beimi.runGame;
                    t.scheduleOnce(function() {
                            setTimeout(function() {
                                    if (510 == cc.beimi.roomType && 2 == cc.beimi.gametype || 610 == cc.beimi.roomType && 2 == cc.beimi.gametype || 606 == cc.beimi.roomType && 2 == cc.beimi.gametype || 708 == cc.beimi.roomType && 2 == cc.beimi.gametype || cc.beimi.zhuangjia.put(cc.find("Canvas/banker")), 1 == cc.beimi.roomType || 2 == cc.beimi.roomType || 610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType) {
                                        for (var e in i.playerList) {
                                            i.playerList[e]; (m = (l = cc.beimi.pu)[e]) && ((d = m.getChildByName("score")).active = !1);
                                            var a = cc.beimi.cards;
                                            for (var e in a) {
                                                var n = a[e];
                                                if (n) {
                                                    for (h = 0; h < n.length; h++) {
                                                        if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType)(c = n[h].getComponent("paijiu")).ispaiclick(!1, !0);
                                                        else var c = n[h].getComponent("puker");
                                                        n[h].rotation = 0,
                                                            n[h].scafe = 1,
                                                            c.isOpen(!0),
                                                            c.isclick(!1),
                                                            n[h].setPosition(0, 0),
                                                            cc.beimi.cardNode.put(n[h])
                                                    }
                                                    cc.beimi.popup_paijiu = 0,
                                                    708 == cc.beimi.roomType && t.zupai_hit(!1)
                                                }
                                            }
                                            var o = cc.beimi.niunius;
                                            for (var e in o) {
                                                var s = o[e];
                                                if (708 == cc.beimi.roomType) for (h = 0; h < s.length; h++) cc.beimi.niuniuNode.put(s[h]);
                                                else cc.beimi.niuniuNode.put(s)
                                            }
                                        }
                                        var r = {};
                                        cc.beimi.playertype = r,
                                            cc.beimi.isruncard = !0
                                    } else if (510 == cc.beimi.roomType) {
                                        cc.beimi.fishscene.getComponent("fish").clearup();
                                        for (var e in i.playerList) {
                                            i.playerList[e];
                                            var l = cc.beimi.pu,
                                                m = l[e];
                                            if (m) {
                                                var d = m.getChildByName("score");
                                                d.active = !1,
                                                    m.getChildByName("score_bg").active = !1,
                                                    m.getChildByName("score_bg").getChildByName("score").active = !1,
                                                m != t.player0 && (m.getChildByName("score_bg").getChildByName("qz").active = !1),
                                                    m.getChildByName("score_bg").getChildByName("bs").active = !1
                                            }
                                        }
                                        for (var u = cc.beimi.famas,
                                                 h = 0; h < u.length; h++) {
                                            var g = u[h];
                                            cc.beimi.fama.put(g),
                                                delete cc.beimi.famas[g]
                                        }
                                    }
                                    if (i.next) t.jushuFun(i.currentGameNum),
                                        t.outreadybtn(!0);
                                    else {
                                        cc.beimi.end = !0,
                                            cc.beimi.rangking = i.playerOrder;
                                        var p = cc.beimi.beiMiCommon;
                                        p.loadding(),
                                            p.scene("end", p)
                                    }
                                },
                                2e3);
                            for (var a in e) {
                                var n = e[a];
                                t.num_beishu(a, "", !1),
                                n.clearData && t.outScore(a, n.clearData.winMoney, i)
                            }
                        },
                        .8)
                },
                outLable: function(e, i) {
                    var t = cc.beimi.runGame,
                        a = cc.beimi.pu[e].getChildByName("chatpp_ld");
                    a.active = !0,
                        a.getChildByName("liaotian_Label").getComponent(cc.Label).string = i,
                        t.scheduleOnce(function() {
                                a.active = !1,
                                e == cc.beimi.userId && (cc.beimi.isspeaking = !1)
                            },
                            4)
                },
                outScore: function(i, t, a) {
                    e("socket");
                    var n = cc.beimi.runGame,
                        c = cc.beimi.pu[i];
                    if (510 == cc.beimi.roomType) o = c.getChildByName("score_bg").getChildByName("score");
                    else var o = c.getChildByName("score");
                    var s = t;
                    t > 0 ? (o.color = cc.Color.YELLOW.fromHEX("#E9E00C"), s = "+" + t) : o.color = cc.Color.YELLOW.fromHEX("#FFFFFF"),
                    cc.beimi.onlooker[i] || (510 == cc.beimi.roomType ? (c.getChildByName("score_bg").active = !0, c.getChildByName("score_bg").getChildByName("score").active = !0) : o.active = !0),
                        o.getComponent(cc.Label).string = s;
                    var r = c.getChildByName("own").getChildByName("Info").getChildByName("win_label"),
                        l = r.getComponent(cc.Label).string;
                    l = parseInt(l) + t,
                        r.getComponent(cc.Label).string = l,
                        n.outJiabeibtn(!1)
                },
                outreadybtn: function(e) {
                    cc.beimi.runGame.nodegame.getChildByName("readybtn").active = e
                },
                onclick_readybtn: function() {
                    var i = e("socket");
                    this.nodegame.getChildByName("readybtn").active = !1;
                    cc.beimi.runGame;
                    var t = {};
                    t.cmd = 102,
                        t.playerStatus = 1,
                        i.prototype.sendData(t,
                            function(e, i, t) {
                                200 == i && (cc.beimi.runGame.onready(0, !0), e && cc.beimi.runGame.ready_fapai(e.countDown, "", !0))
                            })
                },
                onready: function(e, i) {
                    var t = cc.beimi.runGame,
                        a = cc.beimi.pls[e];
                    a == t.player0 ? t.nodegame.getChildByName("ready1").active = i: a && (a.getChildByName("ready1").active = i)
                },
                outbeishu: function(e) {
                    if (cc.log("隐藏抢庄倍数按钮" + e), cc.beimi.onlooker[cc.beimi.userId]);
                    else {
                        var i = cc.beimi.runGame;
                        e ? (i.nodegame.getChildByName("beishu").active = e, i.nodegame.getChildByName("beishu").runAction(cc.fadeIn(1))) : i.nodegame.getChildByName("beishu").active = e
                    }
                },
                outJiabeibtn: function(e) {
                    cc.log("隐藏倍数按钮：" + e),
                        cc.beimi.runGame.nodegame.getChildByName("jiabei").active = e
                },
                outTanpaibtn: function(e) {
                    cc.beimi.runGame.nodegame.getChildByName("tanpai").active = e
                },
                outkaigubtn: function(e) {
                    cc.beimi.runGame.nodegame.getChildByName("kaigu").active = e
                },
                outhit_1: function(e, i) {
                    var t = cc.beimi.runGame;
                    t.hit_1.active = i,
                        t.hit_1.getComponent(cc.Label).string = e
                },
                outhit: function(e) {
                    cc.beimi.runGame.nodegame.getChildByName("hit_Label").active = e
                },
                hiddenhit: function(e) {
                    var i = cc.beimi.runGame;
                    1 == cc.beimi.roomType || 2 == cc.beimi.roomType || 610 == cc.beimi.roomType || 606 == cc.beimi.roomType ? (i.outTanpaibtn(e), i.outhit(e)) : 510 == cc.beimi.roomType && i.outkaigubtn(e)
                },
                onclick_beishubtn: function(i, t) {
                    var a = cc.beimi.sex,
                        n = cc.beimi.runGame,
                        c = e("socket");
                    this.nodegame.getChildByName("beishu").active = !1,
                        this.nodegame.getChildByName("jiabei").active = !1;
                    var o = {};
                    switch (o.cmd = 102, t) {
                        case "1倍/抢庄":
                            o.playerStatus = 2,
                                o.multiple = 1,
                                510 == cc.beimi.roomType ? n.num_qiang(cc.beimi.userId, "抢庄", !0) : n.num_qiang(cc.beimi.userId, "抢庄X1", !0),
                                n.setVoice(1, 2, a);
                            break;
                        case "2倍/抢庄":
                            o.playerStatus = 2,
                                o.multiple = 2,
                                n.num_qiang(cc.beimi.userId, "抢庄X2", !0),
                                n.setVoice(1, 2, a);
                            break;
                        case "4倍/抢庄":
                            o.playerStatus = 2,
                                o.multiple = 4,
                                n.num_qiang(cc.beimi.userId, "抢庄X4", !0),
                                n.setVoice(1, 2, a);
                            break;
                        case "不抢/抢庄":
                            o.playerStatus = 2,
                                o.multiple = 0,
                                n.num_qiang(cc.beimi.userId, "不抢", !0),
                                n.setVoice(0, 2, a);
                            break;
                        case "1倍/加倍":
                            o.playerStatus = 3,
                                o.multiple = 1,
                                n.setVoice(1, 3, a),
                                n.num_beishu(cc.beimi.userId, 1, !0);
                            break;
                        case "2倍/加倍":
                            o.playerStatus = 3,
                                o.multiple = 2,
                                n.setVoice(2, 3, a),
                                n.num_beishu(cc.beimi.userId, 2, !0);
                            break;
                        case "3倍/加倍":
                            o.playerStatus = 3,
                                o.multiple = 3,
                                n.setVoice(3, 3, a),
                                n.num_beishu(cc.beimi.userId, 3, !0);
                            break;
                        case "5倍/加倍":
                            o.playerStatus = 3,
                                o.multiple = 5,
                                n.setVoice(5, 3, a),
                                n.num_beishu(cc.beimi.userId, 5, !0);
                            break;
                        case "1分":
                            return cc.beimi.fishxiazhu = 1,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 30,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "2分":
                            return cc.beimi.fishxiazhu = 2,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 30,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "3分":
                            return cc.beimi.fishxiazhu = 3,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 30,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "4分":
                            return cc.beimi.fishxiazhu = 4,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 30,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "5分":
                            return cc.beimi.fishxiazhu = 5,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 30,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "10分":
                            return cc.beimi.fishxiazhu = 10,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 30,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 0);
                        case "20分":
                            return cc.beimi.fishxiazhu = 20,
                                this.nodegame.getChildByName("xiazhu").getChildByName("1").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("2").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("3").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("4").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("5").y = 0,
                                this.nodegame.getChildByName("xiazhu").getChildByName("10").y = 0,
                                void(this.nodegame.getChildByName("xiazhu").getChildByName("20").y = 30);
                        case "摇骰":
                            o.playerStatus = 3,
                                o.roll = !0,
                                n.outyaotoubtn(!1)
                    }
                    c.prototype.sendData(o,
                        function(e, i, t) {
                            200 == i && e.roll && n.szanimation()
                        })
                },
                onclick_tanpai: function() {
                    var i = cc.beimi.runGame;
                    i.outTanpaibtn(!1);
                    var t = e("socket"),
                        a = {};
                    if (a.cmd = 102, 708 == cc.beimi.roomType) {
                        var n = cc.beimi.cards[cc.beimi.playerindex[cc.beimi.userId]];
                        a.selectPoker = [];
                        for (var c = 0; c < n.length; c++) {
                            var o = n[c].getComponent("paijiu");
                            o.getstatus() && a.selectPoker.push(o.getvalue())
                        }
                        if (2 != a.selectPoker.length) return
                    }
                    a.playerStatus = 4,
                        t.prototype.sendData(a,
                            function(e, t, a) {
                                200 == t && (e.userId = cc.beimi.userId, 708 == cc.beimi.roomType ? i.paijiu_finish(e.userId, e) : i.draw_niuniu(e.userId, e))
                            })
                },
                onclick_kaigu: function() {
                    cc.beimi.runGame.outkaigubtn(!1);
                    var i = e("socket"),
                        t = {};
                    t.cmd = 102,
                        t.playerStatus = 4,
                        i.prototype.sendData(t,
                            function(e, i, t) {})
                },
                num_beishu: function(e, i, t) {
                    cc.beimi.runGame;
                    var a = cc.beimi.pu[e];
                    if (a) {
                        if (510 == cc.beimi.roomType) {
                            cc.log("显示倍数---------"),
                                a.getChildByName("score_bg").active = t;
                            n = a.getChildByName("score_bg").getChildByName("bs")
                        } else var n = a.getChildByName("bs");
                        n.active = t,
                            n.getComponent(cc.Label).string = "x" + i
                    }
                },
                num_qiang: function(e, i, t) {
                    var a = cc.beimi.runGame,
                        n = cc.beimi.pu[e];
                    if (n == a.player0) c = a.nodegame.getChildByName("qz");
                    else if (510 == cc.beimi.roomType) {
                        n.getChildByName("score_bg").active = t;
                        c = n.getChildByName("score_bg").getChildByName("qz")
                    } else var c = n.getChildByName("qz");
                    c.active = t,
                        c.getComponent(cc.Label).string = i
                },
                zhuang_head: function(e) {
                    var i = cc.beimi.runGame;
                    cc.log("隐藏抢庄按钮"),
                        i.nodegame.getChildByName("beishu").active = !1;
                    var t = e.bankerList;
                    if (t) {
                        var a = cc.beimi.roomType;
                        if (510 == a && 2 == cc.beimi.gametype || 610 == a && 2 == cc.beimi.gametype || 606 == a && 2 == cc.beimi.gametype || 708 == a && 2 == cc.beimi.gametype);
                        else {
                            cc.beimi.ban.size() <= 0 && cc.beimi.ban.put(cc.find("Canvas/ban"));
                            var n = cc.beimi.ban.get();
                            cc.find("Canvas").addChild(n, 10),
                                i.selectBanker(0, n, t, 0, 0, i, e)
                        }
                    } else i.bankerfun(0, e)
                },
                selectBanker: function(e, i, t, a, n, c, o) {
                    if (e += .2, n >= 3 * t.length) return c.bankerfun(e, o),
                        void cc.beimi.ban.put(i);
                    a >= t.length && (a = 0);
                    var s = t[a],
                        r = cc.beimi.pu[s].parent;
                    a++,
                        n++,
                        i.setPosition(r.x, r.y),
                        setTimeout(function() {
                                c.selectBanker(e, i, t, a, n, c, o)
                            },
                            200)
                },
                bankerfun: function(e, i, t, a) {
                    var n = cc.beimi.runGame,
                        c = cc.beimi.pu,
                        o = c[i.banker],
                        s = cc.beimi.roomType;
                    if (510 == s) 1 == cc.beimi.gametype && n.outbankhead(i);
                    else if (1 == cc.beimi.gametype) if (n.outbankhead(i), t) for (var r in i.playerList) {
                        o = i.playerList[r];
                        i.banker == r && n.num_beishu(i.banker, i.playerList[r].multiple, !0)
                    } else n.num_beishu(i.banker, i.bankerMutiples, !0);
                    for (var r in c) {
                        var l = r;
                        n.num_qiang(l, "", !1)
                    }
                    var m = cc.beimi.isrunning;
                    3 == m && (n.outtimehit(!0), n.outhit_1("闲家下注", !0), n.timer(n, i.countDown - parseInt(e)));
                    var d = cc.beimi.onlooker;
                    if (i.banker == cc.beimi.userId || d[cc.beimi.userId]) if (t) {
                        if (510 == s && i.banker == cc.beimi.userId) for (var r in i.playerList) {
                            o = i.playerList[r];
                            i.banker == r && (!o.clearData || o.clearData && !o.clearData.roll) && n.outyaotoubtn(!0)
                        }
                    } else 510 == s && i.banker == cc.beimi.userId && n.outyaotoubtn(!0);
                    else 4 != a && (cc.log("如果自己不是庄家并且不是旁观，显示下注"), 3 == (m = cc.beimi.isrunning) && (1 == s || 2 == s || 610 == s || 606 == s || 708 == s ? n.outJiabeibtn(!0) : 510 == s && n.outxiazhu(!0)));
                    510 == s && n.setVoice("", 7, 0)
                },
                outbankhead: function(e) {
                    var i = cc.beimi.roomType;
                    if (510 == i && 2 == cc.beimi.gametype || 610 == i && 2 == cc.beimi.gametype || 606 == i && 2 == cc.beimi.gametype || 708 == i && 2 == cc.beimi.gametype) t = e.ownerId;
                    else var t = e.banker;
                    cc.beimi.runGame;
                    var a = cc.beimi.pu[t].parent;
                    cc.beimi.zhuangjia.size() <= 0 && cc.beimi.zhuangjia.put(cc.find("Canvas/banker"));
                    var n = cc.beimi.zhuangjia.get();
                    cc.find("Canvas").addChild(n, 10),
                        n.setPosition(a.x, a.y);
                    var c = cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1));
                    n.runAction(c)
                },
                outxiazhu: function(e) {
                    var i = cc.beimi.runGame,
                        t = cc.beimi.fishscene.getComponent("fish");
                    t.setoutszd(),
                        t.isclick(e),
                        i.nodegame.getChildByName("xiazhu").active = e
                },
                outyaotoubtn: function(e) {
                    cc.beimi.fishscene.getComponent("fish").setoutszd(),
                        cc.beimi.runGame.nodegame.getChildByName("yaogu").active = e
                },
                addmoney: function(e) {
                    var i = e.select,
                        t = e.multiple,
                        a = e.lastMultiple,
                        n = e.roomMultiple,
                        c = e.userId;
                    cc.beimi.fishscene.getComponent("fish").summoney(i, a, n, c),
                        cc.beimi.runGame.zhuanimation(c, i, t)
                },
                szanimation: function() {
                    cc.beimi.runGame.outyaotoubtn(!1),
                        cc.beimi.fishscene.getComponent("fish").szanimation()
                },
                openszd: function(e) {
                    cc.beimi.fishscene.getComponent("fish").openszd(e)
                },
                outhistory_node: function(e) {
                    var i = this,
                        t = cc.beimi.runGame;
                    if (1 != this.isRunningAnim) {
                        if (this.isRunningAnim = !0, 0 == this.isDowned) {
                            var a = cc.moveBy(.6, cc.p(0, -200)),
                                n = cc.moveBy(.15, cc.p(0, 10)),
                                c = cc.callFunc(function() {
                                    i.isRunningAnim = null
                                });
                            t.history_node.runAction(cc.sequence(a, n, c))
                        } else {
                            var a = cc.moveBy(.15, cc.p(0, -10)),
                                n = cc.moveBy(.6, cc.p(0, 200)),
                                c = cc.callFunc(function() {
                                    i.isRunningAnim = null
                                });
                            t.history_node.runAction(cc.sequence(a, n, c))
                        }
                        this.isDowned = !this.isDowned
                    }
                },
                recordhistory: function(e) {
                    var i = cc.beimi.runGame.history_node.getChildByName("history_sz");
                    i && i.getComponent("history_sz").order(e)
                },
                zhuanimation: function(e, i, t, n) {
                    var c = cc.beimi.runGame;
                    if (cc.beimi.fama.size() <= 0) o = cc.beimi.fama.get();
                    else {
                        cc.beimi.fama.put(cc.instantiate(c.fama));
                        var o = cc.beimi.fama.get()
                    }
                    cc.find("Canvas/game_bg").addChild(o),
                        o.getComponent("fama").order(t);
                    var s = cc.beimi.pu[e];
                    if (e == cc.beimi.userId) {
                        r = c.nodegame.getChildByName("xiazhu").getChildByName("" + t);
                        o.setPosition(r.x, -250)
                    } else {
                        var r = s.parent;
                        o.setPosition(r.x, r.y)
                    }
                    cc.beimi.famas.push(o);
                    var l = cc.beimi.fishscafe,
                        m = (cc.beimi.fishscene, -135 * l + cc.randomMinus1To1() * (30 * l)),
                        d = cc.randomMinus1To1() * (25 * l),
                        u = -135 * l + cc.randomMinus1To1() * (30 * l),
                        h = -124 * l + cc.randomMinus1To1() * (25 * l),
                        g = -45 * l + cc.randomMinus1To1() * (30 * l),
                        p = -124 * l + cc.randomMinus1To1() * (25 * l),
                        f = 45 * l + cc.randomMinus1To1() * (30 * l),
                        b = -124 * l + cc.randomMinus1To1() * (25 * l),
                        y = 135 * l + cc.randomMinus1To1() * (30 * l),
                        _ = cc.randomMinus1To1() * (25 * l),
                        v = 135 * l + cc.randomMinus1To1() * (30 * l),
                        C = -124 * l + cc.randomMinus1To1() * (25 * l),
                        N = 135 * l + cc.randomMinus1To1() * (30 * l),
                        w = 124 * l + cc.randomMinus1To1() * (25 * l),
                        B = -135 * l + cc.randomMinus1To1() * (30 * l),
                        k = 124 * l + cc.randomMinus1To1() * (25 * l);
                    if (1 == i) T = cc.moveTo(.2, m, d);
                    else if (2 == i) T = cc.moveTo(.2, u, h);
                    else if (3 == i) T = cc.moveTo(.2, g, p);
                    else if (4 == i) T = cc.moveTo(.2, f, b);
                    else if (5 == i) T = cc.moveTo(.2, y, _);
                    else if (6 == i) T = cc.moveTo(.2, v, C);
                    else if (100 == i) T = cc.moveTo(.2, N, w);
                    else if (101 == i) var T = cc.moveTo(.2, B, k);
                    var x = cc.callFunc(function() {
                            cc.loader.loadRes("audios/bg/Sound 138", cc.AudioClip,
                                function(e, i) {
                                    a.playYinXiao(i)
                                })
                        }),
                        z = cc.sequence(T, x);
                    o.runAction(z)
                },
                jushuFun: function(e) {
                    cc.beimi.runGame.ju_label.string = e + "局"
                },
                setVoice: function(e, i, t) {
                    var n;
                    1 == t ? 1 == i ? 1 == cc.beimi.roomType || 2 == cc.beimi.roomType ? n = "voice/man/niu1_" + e: 610 != cc.beimi.roomType && 606 != cc.beimi.roomType && 708 != cc.beimi.roomType || (n = "voice/man/dianshu_0_" + e) : 2 == i ? n = "voice/man/nobanker1_" + e: 3 == i ? n = "voice/man/multiple1x" + e: 5 == i && (n = "voice/man/man_look_poper") : 1 == i ? 1 == cc.beimi.roomType || 2 == cc.beimi.roomType ? n = "voice/woman/niu2_" + e: 610 != cc.beimi.roomType && 606 != cc.beimi.roomType && 708 != cc.beimi.roomType || (n = "voice/woman/dianshu_" + e) : 2 == i ? n = "voice/woman/nobanker2_" + e: 3 == i ? n = "voice/woman/multiple2x" + e: 5 == i && (n = "voice/woman/woman_look_poper"),
                    6 == i && (n = "voice/other/Sound 142"),
                    7 == i && (n = "voice/other/Sound 136"),
                    8 == i && (n = "voice/other/Sound 139"),
                    4 == i && (n = "voice/other/fapai"),
                        cc.log("加倍: " + n),
                    n && cc.loader.loadRes(n, cc.AudioClip,
                        function(e, i) {
                            a.playYinXiao(i)
                        })
                },
                roomNum: function(e) {
                    cc.beimi.runGame
                },
                outtimehit: function(e) {
                    cc.beimi.runGame.timehit.active = e
                },
                leave_head: function(e, i) {
                    var t = cc.beimi.pu[e],
                        a = cc.beimi.beiMiCommon;
                    e == cc.beimi.userId && (cc.beimi.isclose = !0, cc.beimi.socket.close(), a.reconnect()),
                    t && (t.getChildByName("own").getChildByName("leave_bg").active = i)
                },
                outgame: function(e, i) {
                    cc.log("id:" + e + "退出了");
                    var t = cc.beimi.pu,
                        a = t[e];
                    a && (a.active = !1),
                        delete t[e],
                        delete cc.beimi.playList[e]
                },
                liaotianVoice: function(e, i) {
                    if (1 == i) t = "voice/man/message1_" + e;
                    else var t = "voice/woman/message2_" + e;
                    cc.loader.loadRes(t, cc.AudioClip,
                        function(e, i) {
                            a.playYinXiao(i)
                        })
                },
                setindexplayer: function(e, i) {
                    var t = e.roomType,
                        n = cc.beimi.runGame;
                    if (1 == t || 2 == t) a.stopBgMusic(),
                        cc.loader.loadRes("audios/bg/bgMain", cc.AudioClip,
                            function(e, i) {
                                a.playerBgMusic(i)
                            });
                    else if (610 == t || 606 == t || 708 == t) a.stopBgMusic(),
                        cc.loader.loadRes("audios/bg/game_bg_rapid", cc.AudioClip,
                            function(e, i) {
                                a.playerBgMusic(i)
                            });
                    else if (510 == t) {
                        if (n.againfish(i), i.resultHistory) for (var c = i.resultHistory,
                                                                      o = c.length - 1; o >= 0; o--) n.recordhistory(c[o]);
                        1 != i.status && 2 != i.status && cc.beimi.fishscene.getComponent("fish").setoutszd(),
                            a.stopBgMusic(),
                            cc.loader.loadRes("audios/bg/table_background_music", cc.AudioClip,
                                function(e, i) {
                                    a.playerBgMusic(i)
                                }),
                            5 == e.maxPower ? (this.nodegame.getChildByName("xiazhu").getChildByName("10").active = !1, this.nodegame.getChildByName("xiazhu").getChildByName("20").active = !1) : 10 == e.maxPower ? (this.nodegame.getChildByName("xiazhu").getChildByName("2").active = !1, this.nodegame.getChildByName("xiazhu").getChildByName("20").active = !1) : 20 != e.maxPower && 50 != e.maxPower || (this.nodegame.getChildByName("xiazhu").getChildByName("2").active = !1, this.nodegame.getChildByName("xiazhu").getChildByName("4").active = !1),
                            cc.director.getScene().getChildByName("Canvas").getChildByName("game_bg").getChildByName("bgg").active = !0
                    }
                },
                timekeeping: function(e, i) {
                    var t = cc.beimi.runGame;
                    t.outtimehit(!0),
                        t.outhit_1(e, !0),
                        t.timer(t, i)
                },
                clearcard: function(e) {
                    var i = cc.beimi.runGame,
                        t = 10;
                    if (1 == cc.beimi.roomType || 2 == cc.beimi.roomType || 610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType) {
                        if (cc.beimi.isruncard = !0, cc.beimi.cardNode.size() < 50) {
                            var a = cc.beimi.cards;
                            for (var n in a) {
                                var c = a[n];
                                if (c) for (m = 0; m < c.length; m++) {
                                    if (610 == cc.beimi.roomType || 606 == cc.beimi.roomType || 708 == cc.beimi.roomType)(o = c[m].getComponent("paijiu")).ispaiclick(!1, !0);
                                    else var o = c[m].getComponent("puker");
                                    c[m].rotation = 0,
                                        c[m].scafe = 1,
                                        o.isOpen(!0),
                                        o.isclick(!1),
                                        c[m].setPosition(0, 0),
                                        cc.beimi.cardNode.put(c[m])
                                }
                            }
                        }
                        if (708 == cc.beimi.roomType ? (cc.beimi.popup_paijiu = 0, i.zupai_hit(!1), t = 20) : t = 10, cc.beimi.niuniuNode.size() < t) {
                            var s = cc.beimi.niunius;
                            for (var n in s) {
                                var r = s[n];
                                if (708 == cc.beimi.roomType) for (m = 0; m < r.length; m++) cc.beimi.niuniuNode.put(r[m]);
                                else cc.beimi.niuniuNode.put(r)
                            }
                        }
                    } else if (510 == cc.beimi.roomType) {
                        i.outyaotoubtn(!1),
                            cc.beimi.fishscene.getComponent("fish").clearup();
                        for (var l = cc.beimi.famas,
                                 m = 0; m < l.length; m++) {
                            var d = l[m];
                            cc.beimi.fama.put(d),
                                delete cc.beimi.famas[d]
                        }
                    }
                    2 == cc.beimi.gametype || (cc.beimi.zhuangjia.size() <= 0 && cc.beimi.zhuangjia.put(cc.find("Canvas/banker")), cc.beimi.ban.size() <= 0 && cc.beimi.ban.put(cc.find("Canvas/ban")));
                    var u = cc.beimi.pls;
                    for (var n in u) {
                        var h = u[n];
                        510 == cc.beimi.roomType && (h.getChildByName("score").active = !1, h.getChildByName("score_bg").active = !1, h.getChildByName("score_bg").getChildByName("score").active = !1, h != i.player0 && (h.getChildByName("score_bg").getChildByName("qz").active = !1), h.getChildByName("score_bg").getChildByName("bs").active = !1)
                    }
                    var g = {};
                    cc.beimi.playertype = g
                }
            }),
                cc._RF.pop()
        },
            {
                audioPlayer: "audioPlayer",
                socket: "socket"
            }],
        sendCard: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "17ff6WUuXNOtZC5ITLcSjks", "sendCard"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        mycards: {
                            default:
                                null,
                            type: cc.Label
                        },
                        EditBox: {
                            default:
                                null,
                            type: cc.EditBox
                        },
                        sendcards: {
                            default:
                                null,
                            type: cc.Label
                        },
                        phone: {
                            default:
                                null,
                            type: cc.Label
                        }
                    },
                    onLoad: function() {
                        this.mycards.string = cc.beimi.card + "张",
                            cc.beimi.hasPhone ? this.phone.string = "已绑定手机：" + cc.beimi.hasPhone: this.phone.string = "未绑定手机"
                    },
                    sendcardsNumber: function() {
                        var e = this.EditBox.string.replace(/(^\s*)|(\s*$)/g, "");
                        e >= 0 && "" != e ? (this.sendcards.string = parseInt(e), this.EditBox.string = parseInt(e)) : e < 0 ? this.EditBox.string = 0 : "" == e && (this.sendcards.string = 0),
                        e >= cc.beimi.card && (this.EditBox.string = cc.beimi.card, this.sendcards.string = cc.beimi.card)
                    },
                    onClick_send: function() {
                        var e = this.EditBox.string.replace(/(^\s*)|(\s*$)/g, "");
                        if (e > 0) {
                            cc.beimi.beiMiCommon.loadding();
                            cc.beimi.http.httpGet("/redCard/makeRed?num=" + e, this.sucess, this.error, this)
                        } else {
                            var i = Toast.makeText("请输入房卡", Toast.LENGTH_SHORT);
                            i.setGravity(Toast.CENTER, 0, 0),
                                i.show()
                        }
                    },
                    sucess: function(i, t) {
                        var a = cc.beimi.beiMiCommon,
                            n = JSON.parse(i);
                        if (cc.log("微信红包data:" + n), null != n && 200 == n.code) {
                            document.title = "红包";
                            var c = n.data;
                            if (cc.log("微信红包config:" + JSON.stringify(n)), cc.beimi.redId = c.id, cc.beimi.redSign = c.sign, cc.beimi.card = c.remaining, cc.beimi.http = e("HTTP"), cc.beimi.http.sharecontent.title = c.title, cc.beimi.http.sharecontent.link = c.link, cc.beimi.http.sharecontent.imgUrl = c.imgUrl, cc.beimi.http.sharecontent.desc = c.desc, cc.log("微信分享红包shareContent:" + JSON.stringify(cc.beimi.http.sharecontent)), cc.beimi.istest);
                            else if (!window.wxConfig) {
                                var o = cc.beimi.http.mainurl + "joinType=2&id=" + c.id + "&sign=" + c.sign;
                                window.history.replaceState(null, null, o),
                                    cc.log("微信分享红包mainUrl:" + o)
                            } (a = cc.beimi.beiMiCommon).scene("receive", a)
                        } else a.closeloadding(a.loaddingdialog),
                            a.alert(n.msg)
                    },
                    error: function(e, i) {
                        var t = cc.beimi.beiMiCommon;
                        t.closeloadding(t.loaddingdialog),
                            t.alert("网络异常，服务访问失败")
                    },
                    onClick_myBag: function() {
                        var e = cc.beimi.beiMiCommon;
                        e.loadding(),
                            e.scene("redPacket", e)
                    },
                    onClick_home: function() {
                        var e = cc.beimi.beiMiCommon;
                        e.loadding(),
                            e.scene("hall", e)
                    }
                }),
                cc._RF.pop()
        },
            {
                HTTP: "HTTP"
            }],
        socket: [function(require, module, exports) {
            "use strict";
            cc._RF.push(module, "5525dNnhHlHFpbi00rCkQlJ", "socket");
            var runGame = require("runGame");
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function() {},
                socketfun: function(e) {
                    var i = {};
                    cc.beimi.actionManage = i,
                        this.io = require("IOUtils"),
                        cc.beimi.io = this.io;
                    var t, a = this.io.get("token"),
                        n = this.io.get("userId"),
                        c = cc.beimi.http.gameurl,
                        o = this;
                    require("BeiMiCommon").prototype.loadding();
                    var s = new Date;
                    cc.log("链接time: " + s.getMinutes() + " :" + s.getSeconds());
                    try {
                        cc.log("ws:" + c + "?token=" + a + "&userId=" + n),
                            (t = new WebSocket("ws:" + c + "?token=" + a + "&userId=" + n)).binaryType = "arraybuffer",
                            cc.beimi.socket = t
                    } catch(e) {}
                    t.onopen = function(e) {
                        cc.log("握手成功----------");
                        var i = require("BeiMiCommon");
                        i.prototype.closeReconnect(),
                            cc.beimi.isclose = !1,
                            this.io = require("IOUtils"),
                            this.io.heartCheck.reset().start();
                        var t = new Date;
                        cc.log("链接成功time: " + t.getMinutes() + " :" + t.getSeconds()),
                            i.prototype.closeline(i.prototype.alertline);
                        var a = cc.beimi.roomId;
                        o.joinRoom(a)
                    },
                        t.onerror = function(e) {
                            cc.log("握手失败----------");
                            var i = cc.beimi.beiMiCommon;
                            if (cc.beimi.end) i.loadding(),
                                i.scene("end", i);
                            else {
                                if (i.closeloadding(i.loaddingdialog), cc.beimi.isclose) return void cc.log("关闭了socket：-------");
                                i.reconnect();
                                var t = Toast.makeText("连接失败...", Toast.LENGTH_SHORT);
                                t.setGravity(Toast.CENTER, 0, 0),
                                    t.show()
                            }
                        },
                        t.onmessage = function(e) {
                            var i = cc.beimi.runGame;
                            this.io = require("IOUtils"),
                                this.io.heartCheck.reset().start();
                            var t, a = require("socket"),
                                n = require("BeiMiCommon"),
                                c = e.data;
                            t = "string" == typeof c ? o.strToJson(c) : o.strToJson(this.io.utfarraytostr(c));
                            var s = cc.beimi.actionManage;
                            if (200 != t.code && t.msg && 1018 != t.code) {
                                if (n.prototype.closeloadding(n.prototype.loaddingdialog), 1003 == t.code || 1004 == t.code || 1012 == t.code || 1013 == t.code || 1015 == t.code) return cc.beimi.isclose = !0,
                                    cc.beimi.socket.close(),
                                    void n.prototype.alert2(t.msg);
                                1020 == t.code || n.prototype.alert(t.msg)
                            }
                            if (t.uid) {
                                var r = s[t.uid];
                                if (r) return r(t.data, t.code, t.msg),
                                    void delete s[t.uid]
                            }
                            var l = cc.beimi.roomType;
                            switch (t.cmd) {
                                case 2001:
                                    cc.log("加人ret: " + JSON.stringify(t));
                                    var m;
                                    m = cc.beimi.io.get(cc.beimi.userId),
                                    (g = t.data.index - m) < 0 && (1 == l || 606 == l ? g += 6 : 2 == l || 510 == l || 610 == l ? g += 10 : 708 == l && (g += 8));
                                    var d = t.data,
                                        u = cc.beimi.onlooker; - 1 == d.playerStatus ? u[d.userId] = !0 : u[d.userId] = !1,
                                    cc.beimi.io.put(d.userId, g),
                                    i.addPlayers(g, t.data);
                                    break;
                                case 2002:
                                    if (1 == t.data.status) {
                                        var h = t.data.userId,
                                            g = cc.beimi.io.get(h);
                                        i.onready(g, !0),
                                            i.ready_fapai(t.data.countDown, "", !0)
                                    } else if (2 == t.data.status) {
                                        w = (N = cc.beimi.playersex)[t.data.userId];
                                        0 == t.data.multiple ? (i.num_qiang(t.data.userId, "不抢", !0), i.setVoice(0, 2, w)) : (510 == l ? i.num_qiang(t.data.userId, "抢庄", !0) : i.num_qiang(t.data.userId, "抢庄X" + t.data.multiple, !0), i.setVoice(1, 2, w))
                                    } else if (3 == t.data.status) {
                                        w = (N = cc.beimi.playersex)[t.data.userId];
                                        1 == l || 2 == l || 610 == l || 606 == l || 708 == l ? (i.num_beishu(t.data.userId, t.data.multiple, !0), i.setVoice(t.data.multiple, 3, w)) : 510 == l && (t.data.roll ? i.szanimation() : i.addmoney(t.data))
                                    } else 4 == t.data.status && (1 == l || 2 == l ? i.draw_niuniu(t.data.userId, t.data) : 610 == l || 606 == l ? i.draw_niuniu(t.data.userId, t.data) : 708 == l && i.paijiu_finish(t.data.userId));
                                    break;
                                case 20002:
                                    if (cc.log("服务器群发信息ret： " + JSON.stringify(t)), 2 == t.data.status) {
                                        if (i.clearcard(), cc.beimi.isrunning = 2, cc.log("服务器： 发牌"), 1 == l || 2 == l || 610 == l || 606 == l || 708 == l) {
                                            for (var p = t.data.playerPoker,
                                                     u = cc.beimi.onlooker,
                                                     f = cc.beimi.playList,
                                                     b = 0; b < f.length; b++) p[f[b]] ? u[f[b]] = !1 : (u[f[b]] = !0, f[b] == cc.beimi.userId && i.outreadybtn(!1));
                                            for (var y in p) {
                                                var _ = p[y],
                                                    h = y,
                                                    g = cc.beimi.io.get(h);
                                                h == cc.beimi.userId && (g = 0),
                                                    cc.log("发牌了" + g),
                                                    610 == l || 606 == l || 708 == l ? i.deal_paijiu(h, _, t.data.countDown) : i.deal_card(h, _, t.data.countDown),
                                                    i.onready(g, !1)
                                            }
                                        } else if (510 == l) {
                                            i.setVoice("", 6, 0),
                                                i.ready_fapai(t.data.countDown, "抢庄", !0);
                                            var v = t.data.playerListStatus,
                                                u = cc.beimi.onlooker;
                                            for (var y in v) {
                                                v[y];
                                                for (var f = cc.beimi.playList,
                                                         b = 0; b < f.length; b++) v[f[b]] && 1 == v[f[b]] ? (f[b] == cc.beimi.userId && i.outbeishu(!0), u[f[b]] = !1) : (u[f[b]] = !0, f[b] == cc.beimi.userId && i.outreadybtn(!1));
                                                g = cc.beimi.io.get(y);
                                                y == cc.beimi.userId && (g = 0),
                                                    i.onready(g, !1)
                                            }
                                        }
                                    } else if (3 == t.data.status) {
                                        if (cc.beimi.isrunning = 3, cc.log("服务器： 显示庄家"), i.ready_fapai(t.data.countDown, "", !1), 0 == t.data.multiple ? i.num_qiang(t.data.userId, "不抢", !0) : t.data.multiple && i.num_qiang(t.data.userId, "抢庄X" + t.data.multiple, !0), 510 == cc.beimi.roomType && 2 == cc.beimi.gametype) {
                                            i.clearcard();
                                            var v = t.data.playerListStatus,
                                                u = cc.beimi.onlooker;
                                            for (var y in v) {
                                                v[y];
                                                for (var f = cc.beimi.playList,
                                                         b = 0; b < f.length; b++) v[f[b]] && 1 == v[f[b]] ? u[f[b]] = !1 : (u[f[b]] = !0, f[b] == cc.beimi.userId && i.outreadybtn(!1));
                                                g = cc.beimi.io.get(y);
                                                y == cc.beimi.userId && (g = 0),
                                                    i.onready(g, !1)
                                            }
                                        } else if (610 == cc.beimi.roomType && 2 == cc.beimi.gametype || 606 == cc.beimi.roomType && 2 == cc.beimi.gametype || 708 == cc.beimi.roomType && 2 == cc.beimi.gametype) {
                                            i.clearcard();
                                            for (var p = t.data.playerPoker,
                                                     u = cc.beimi.onlooker,
                                                     f = cc.beimi.playList,
                                                     b = 0; b < f.length; b++) p[f[b]] ? u[f[b]] = !1 : (u[f[b]] = !0, f[b] == cc.beimi.userId && i.outreadybtn(!1));
                                            for (var y in p) {
                                                var _ = p[y],
                                                    h = y,
                                                    g = cc.beimi.io.get(h);
                                                h == cc.beimi.userId && (g = 0),
                                                    cc.log("发牌了" + g),
                                                    610 == l || 606 == l || 708 == l ? i.deal_paijiu(h, _, t.data.countDown) : i.deal_card(h, _, t.data.countDown),
                                                    i.onready(g, !1)
                                            }
                                        }
                                        i.zhuang_head(t.data),
                                            i.outbeishu(!1)
                                    } else if (4 == t.data.status) {
                                        if (cc.beimi.isrunning = 4, 1 == l || 2 == l || 610 == l || 606 == l || 708 == l) {
                                            if (cc.log("服务器： 发牌自己最后一张牌" + JSON.stringify(t.data)), !(u = cc.beimi.onlooker)[cc.beimi.userId]) for (var y in t.data.multipleList) {
                                                var C = t.data.multipleList[y];
                                                u[y] || (i.num_beishu(y, C, !0), y == cc.beimi.userId && i.turnMycard(t.data))
                                            }
                                            i.ready_fapai(t.data.countDown, "等待摊牌", !0),
                                                i.outJiabeibtn(!1)
                                        } else if (510 == l) {
                                            if (t.data.banker == cc.beimi.userId && i.outkaigubtn(!0), t.data.autoSelect) for (b = 0; b < t.data.autoSelect.length; b++) i.addmoney(t.data.autoSelect[b]);
                                            i.outxiazhu(!1),
                                                i.ready_fapai(t.data.countDown, "等待庄家开骰", !0),
                                                i.setVoice("", 8, 0)
                                        }
                                    } else if (5 == t.data.status) if (cc.beimi.isrunning = 5, cc.log("服务器： 比牌" + JSON.stringify(t.data)), cc.beimi.currentGameNum = t.data.currentGameNum, cc.beimi.ranktime = t.data.cTime, t.data.next || (cc.beimi.end = !0, cc.beimi.isclose = !0, cc.beimi.socket.close()), i.relatively(t.data.playerList, t.data), 1 == l || 2 == l || 610 == l || 606 == l || 708 == l) for (var y in t.data.playerList) {
                                        d = t.data.playerList[y]; (u = cc.beimi.onlooker)[y] || (708 == l && i.paijiu_finish(y), i.draw_niuniu(y, d))
                                    } else if (510 == l) {
                                        var N = cc.beimi.playersex,
                                            w = N[t.data.banker];
                                        i.openszd(t.data)
                                    }
                                    break;
                                case 2004:
                                    t.data && i.leave_head(t.data.userId, !0);
                                    break;
                                case 2005:
                                    t.data && i.leave_head(t.data, !1);
                                    break;
                                case 2020:
                                    var B = t.data.sex,
                                        g = t.data.voices,
                                        k = cc.beimi.value_set[g - 1];
                                    i.outLable(t.data.userId, k),
                                        i.liaotianVoice(g, B);
                                    break;
                                case 3e3:
                                    a.prototype.closeSocket();
                                    var T = Toast.makeText("账号在其他地方登陆", Toast.LENGTH_SHORT);
                                    T.setGravity(Toast.CENTER, 0, 0),
                                        T.show();
                                    break;
                                case 2003:
                                    t.data && i.outgame(t.data.userId)
                            }
                        }
                },
                joinRoom: function(e) {
                    var i = {},
                        t = cc.beimi.iscreare;
                    1 == t ? i.cmd = 100 : 2 == t && (i.cmd = 101),
                        cc.beimi.iscreare = 2,
                        i.roomId = e,
                        cc.log("加入的房间cmd: " + i.cmd),
                        this.sendData(i,
                            function(e, i, t) {
                                var a = cc.beimi.beiMiCommon;
                                a.closeloadding(a.loaddingdialog);
                                var n = cc.beimi.runGame;
                                if (200 == i) {
                                    g = new Date;
                                    cc.log("加入房间成功time: " + g.getMinutes() + " :" + g.getSeconds());
                                    var c = require("IOUtils"),
                                        o = cc.beimi.roomId;
                                    cc.beimi.isruncard = !0,
                                        cc.log("加入房间data: " + JSON.stringify(e));
                                    var s = e.roomRule.roomType;
                                    if (c.weinxinfen(s, o, e.title, e.desc), cc.beimi.card = e.remaining, cc.beimi.gametype = e.roomRule.gametype, cc.beimi.roomType = s, n.setindexplayer(e.roomRule, e), e.playerList) {
                                        n.roomNum(e.roomId);
                                        var r = e.playerList[cc.beimi.userId].index;
                                        for (var l in e.playerList) {
                                            var m = e.playerList[l],
                                                d = m.index - r;
                                            d < 0 && (1 == s || 606 == s ? d += 6 : 2 == s || 510 == s || 610 == s ? d += 10 : 708 == s && (d += 8)),
                                                m.userId == cc.beimi.userId ? (d = 0, cc.beimi.io.put(m.userId, r)) : cc.beimi.io.put(m.userId, d),
                                                n.addPlayers(d, m, e),
                                            0 == m.online && n.leave_head(m.userId, !0);
                                            var u = cc.beimi.onlooker;
                                            if ( - 1 == m.playerStatus ? u[m.userId] = !0 : u[m.userId] = !1, 1 == e.status) e.countDown > 0 && n.ready_fapai(e.countDown, "", !0),
                                                1 == m.playerStatus ? n.onready(d, !0) : m.userId == cc.beimi.userId && n.outreadybtn(!0),
                                            e.countDown > 0 && n.timekeeping("", e.countDown);
                                            else if (2 == e.status) {
                                                n.timekeeping("抢庄", e.countDown),
                                                    n.outreadybtn(!1),
                                                    n.onready(d, !1);
                                                h = m.poker;
                                                u[m.userId] || (1 == s || 2 == s || 610 == s || 606 == s || 708 == s ? 2 == m.playerStatus ? n.againCard(m.userId, h, 2, e.countDown) : -1 != m.playerStatus && n.againCard(m.userId, h, 1, e.countDown) : 510 == s && (1 == m.playerStatus ? (m.userId == cc.beimi.userId && n.outbeishu(!0), cc.log("我不是旁观：" + m.playerStatus)) : m.playerStatus))
                                            } else if (3 == e.status) {
                                                n.timekeeping("闲家下注", e.countDown),
                                                    n.outbeishu(!1),
                                                    n.outreadybtn(!1),
                                                    n.onready(d, !1);
                                                h = m.poker;
                                                u[m.userId] || (1 == s || 2 == s || 610 == s || 606 == s || 708 == s ? 3 == m.playerStatus ? n.againCard(m.userId, h, 3) : -1 != m.playerStatus && (e.banker != cc.beimi.userId && m.userId == cc.beimi.userId && n.outJiabeibtn(!0), n.againCard(m.userId, h, 3)) : 510 == s && (3 == m.playerStatus || -1 != m.playerStatus && e.banker != cc.beimi.userId && m.userId == cc.beimi.userId && n.outxiazhu(!0)))
                                            } else if (4 == e.status) {
                                                n.outbeishu(!1),
                                                    n.outJiabeibtn(!1),
                                                    n.outreadybtn(!1),
                                                    n.onready(d, !1);
                                                var h = m.poker;
                                                u[m.userId] || 1 != s && 2 != s && 610 != s && 606 != s && 708 != s || (4 == m.playerStatus ? (n.againCard(m.userId, h, 4), 708 != s ? n.draw_niuniu(m.userId, m) : n.paijiu_finish(m.userId)) : -1 != m.playerStatus && (n.againCard(m.userId, h, 4), n.outbtn(e.countDown))),
                                                u[m.userId] || (1 == s || 2 == s || 610 == s || 606 == s || 708 == s ? n.num_beishu(m.userId, m.multiple, !0) : 510 == s && (cc.log("我不是旁观：" + JSON.stringify(e)), e.banker == cc.beimi.userId && n.outkaigubtn(!0))),
                                                    1 == s || 2 == s || 610 == s || 606 == s || 708 == s ? n.timekeeping("等待摊牌", e.countDown) : 510 == s && n.timekeeping("等待庄家开骰", e.countDown)
                                            }
                                        }
                                        510 == s && 2 == cc.beimi.gametype || 610 == s && 2 == cc.beimi.gametype || 606 == s && 2 == cc.beimi.gametype || 708 == s && 2 == cc.beimi.gametype ? n.outbankhead(e) : 3 != e.status && 4 != e.status || n.bankerfun(0, e, !0, 4)
                                    }
                                } else if (1020 == i) cc.beimi.roomId = e.roomId,
                                    cc.beimi.rangking = e.playerOrder,
                                    cc.beimi.rules = e.roomRule,
                                    cc.beimi.ranktime = e.cTime,
                                    cc.beimi.currentGameNum = e.currentGameNum,
                                    cc.beimi.isclose = !0,
                                    cc.beimi.socket.close(),
                                    (a = cc.beimi.beiMiCommon).loadding(),
                                    a.scene("end", a);
                                else {
                                    var g = new Date;
                                    cc.log("加入失败time: " + g.getMinutes() + " :" + g.getSeconds()),
                                        (a = cc.beimi.beiMiCommon).alert(t)
                                }
                            })
                },
                sendData: function(e, i) {
                    this.io = require("IOUtils"),
                    cc.beimi.isclose || this.io.heartCheck.reset().reconnect();
                    var t = cc.beimi.actionManage,
                        a = this.guid();
                    e.uid = a,
                        t[a] = i;
                    var n = new Date;
                    cc.log("加入time: " + n.getMinutes() + " :" + n.getSeconds()),
                        cc.beimi.socket.send(JSON.stringify(e))
                },
                S4: function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                },
                guid: function() {
                    return this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4()
                },
                strToJson: function strToJson(str) {
                    var json = eval("(" + str + ")");
                    return json
                },
                closeSocket: function() {
                    cc.beimi.isclose = !0,
                        cc.beimi.socket.close()
                }
            }),
                cc._RF.pop()
        },
            {
                BeiMiCommon: "BeiMiCommon",
                IOUtils: "IOUtils",
                runGame: "runGame",
                socket: "socket"
            }],
        standings_1: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "8884bKGq71FM4BE11RwKXJW", "standings_1");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    opt_item_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    room: {
                        default:
                            null,
                        type: cc.Label
                    },
                    itime: {
                        default:
                            null,
                        type: cc.Label
                    },
                    rule1: {
                        default:
                            null,
                        type: cc.Label
                    },
                    rule2: {
                        default:
                            null,
                        type: cc.Label
                    },
                    OPT_HEIGHT: 120
                },
                onLoad: function() {
                    this.roomType = 1,
                        this.mygamenum = "",
                        this.playerOrder = "",
                        this.value_set = [],
                        this.item_set = [],
                        this.isfrist = !0,
                        this.offget = 0,
                        this.limit = 25;
                    var e = cc.beimi.zhanji_roomId,
                        i = cc.beimi.historyId_zhanji;
                    this.resultInfo(e, i)
                },
                resultInfo: function(e, i) {
                    cc.beimi.beiMiCommon.loadding();
                    var t = {
                        roomId: e,
                        historyId: i
                    };
                    cc.beimi.http.httpPost("/redCard/resultInfo", t, this.sucess, this.error, this)
                },
                sucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog);
                    var a = JSON.parse(e);
                    if (cc.log("红包data:" + JSON.stringify(a)), null != a && 200 == a.code) {
                        if (a.data) {
                            cc.beimi.roomId = a.data.roomId,
                                cc.beimi.rangking = a.data.playerOrder,
                                cc.beimi.rules = a.data.roomRule,
                                cc.beimi.ranktime = a.data.cTime;
                            var n = a.data.roomRule.gamenum.split(":");
                            a.data.numClear && a.data.numClear.length > 0 ? cc.beimi.currentGameNum = a.data.numClear.length + "/" + n[0] : cc.beimi.currentGameNum = "",
                                i.mygamenum = a.data.roomRule.gamenum.split(":"),
                                i.playerOrder = a.data.playerOrder,
                                i.roomType = a.data.roomRule.roomType,
                                i.titletext(a.data),
                                i.value_set = i.value_set.concat(a.data.numClear);
                            for (var c = 0; c < a.data.numClear.length; c++) if (i.item_set.length < 24) {
                                var o = cc.instantiate(i.opt_item_prefab);
                                i.scroll_view.content.addChild(o),
                                    i.item_set.push(o)
                            }
                            i.load_item_data(i.start_index)
                        }
                    } else t.closeloadding(t.loaddingdialog),
                        t.alert(a.msg)
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                titletext: function(e) {
                    this.room.string = "房间号：" + e.roomId,
                        this.itime.string = "结束时间：" + a.prototype.formatdate(e.cTime);
                    var i, t, n, c, o = "",
                        s = "",
                        r = "",
                        l = "",
                        m = "",
                        d = "",
                        u = "",
                        h = "",
                        g = "",
                        p = "";
                    510 == e.roomRule.roomType ? (1 == e.roomRule.gametype ? i = "自由抢庄": 2 == e.roomRule.gametype && (i = "固定庄家"), 1 == e.roomRule.ruletype ? t = "3个相同3倍，2个相同2倍": 2 == e.roomRule.ruletype && (t = "3个相同5倍，2个相同3倍"), n = "单局最大下注：" + e.roomRule.maxPower) : 610 == e.roomRule.roomType || 606 == e.roomRule.roomType || 708 == e.roomRule.roomType ? (1 == e.roomRule.gametype ? i = "明牌抢庄": 2 == e.roomRule.gametype && (i = "固定庄家"), n = "", e.roomRule.minChane && (n = "丁三牌及二四牌可以互换使用"), 708 == e.roomRule.roomType ? t = "每人四张牌，分为大小两组，分别与庄家对牌，全胜全败为胜负，一胜一败为和局.": 1 == e.roomRule.ruletype ? t = "至尊(8倍)，双天、双地、双人(6倍)，其他对子(5倍)，天王、地王(4倍)，天杠、地杠(3倍)，九点(2倍)，八点(2倍)": 2 == e.roomRule.ruletype && (t = "至尊(10倍)，双天、双地、双人(8倍)，其他对子(6倍)，天王、地王(5倍)，天杠、地杠(4倍)，九点(3倍)，八点(2倍)")) : (1 == e.roomRule.gametype ? i = "明牌抢庄": 2 == e.roomRule.gametype ? i = "通比牛牛": 3 == e.roomRule.gametype ? i = "自由抢庄": 4 == e.roomRule.gametype ? i = "牛牛上庄": 5 == e.roomRule.gametype && (i = "固定庄家"), 1 == e.roomRule.ruletype ? t = "牛牛x3 牛九x2 牛八x2": 2 == e.roomRule.ruletype && (t = "牛牛x4 牛九x3 牛八x2 牛七x2"), void 0 == e.roomRule.szn5 ? (e.roomRule.niu5 && (o = "五花牛(5倍) "), e.roomRule.niu6 && (s = "炸弹牛(6倍) "), e.roomRule.niu8 && (r = "五小牛(8倍)"), n = e.roomRule.niu5 || e.roomRule.niu6 || e.roomRule.niu8 ? o + s + r: "牛牛") : (e.roomRule.szn5 && (l = "顺子牛(5倍) "), e.roomRule.whn5 && (m = "五花牛(5倍) "), e.roomRule.thn6 && (d = "同花牛(6倍) "), e.roomRule.hln7 && (u = "葫芦牛(7倍) "), e.roomRule.zdn8 && (h = "炸弹牛(8倍) "), e.roomRule.wxn8 && (g = "五小牛(8倍) "), e.roomRule.ths10 && (p = "同花顺(10倍) "), n = e.roomRule.szn5 || e.roomRule.whn5 || e.roomRule.thn6 || e.roomRule.hln7 || e.roomRule.zdn8 || e.roomRule.wxn8 || e.roomRule.ths10 ? l + m + d + u + h + g + p: "牛牛")),
                        c = e.roomRule.score;
                    var f = e.roomRule.gamenum.split(":"),
                        b = f[0] + "局x" + f[1] + "房卡";
                    this.rule1.string = b + " 底分" + c + "分 " + i,
                        this.rule2.string = t + " " + n
                },
                load_item_data: function(e) {
                    for (var i = 0; i < this.item_set.length; i++) {
                        var t = this.item_set[i],
                            a = t.getChildByName("mask").getChildByName("bg").getChildByName("jushu").getComponent(cc.Label),
                            n = t.getChildByName("mask").getChildByName("bg").getChildByName("right").getChildByName("score").getComponent(cc.Label),
                            c = t.getChildByName("mask").getChildByName("bg").getChildByName("right").getChildByName("score"),
                            o = t.getChildByName("mask").getChildByName("bg").getComponent(cc.Button);
                        a.string = "局数：" + this.value_set[e + i].gameNum + "/" + this.mygamenum[0];
                        var s = this.value_set[e + i].clearData,
                            r = "s";
                        for (var l in s) {
                            var m = s[l];
                            l == cc.beimi.userId && (r = m.winMoney)
                        }
                        r > 0 ? (r = "+" + r, c.color = cc.Color.YELLOW.fromHEX("#D85E0D")) : r <= 0 ? c.color = cc.Color.YELLOW.fromHEX("#2CCA17") : (r = "旁观", c.color = cc.Color.YELLOW.fromHEX("#696666")),
                            n.string = r,
                            o.node.off(cc.Node.EventType.TOUCH_END),
                            o.node.on(cc.Node.EventType.TOUCH_END, this.selectred.bind(this, t, this.value_set[e + i], this.playerOrder), this)
                    }
                },
                selectred: function(e, i, t) {
                    i.clearData;
                    var a = this.roomType;
                    e.getComponent("itme_standings_1").order(i, t, a)
                },
                start: function() {
                    this.start_index = 0,
                        this.content_start_y = this.scroll_view.content.y
                },
                onClick_ranking: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("end", e)
                },
                onClick_home: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("standings", e)
                },
                update: function(e) {
                    if (this.start_index + 24 < this.value_set.length && this.scroll_view.content.y >= this.content_start_y + 16 * this.OPT_HEIGHT) {
                        var i = 8;
                        if (this.start_index += i, this.start_index + 24 > this.value_set.length) {
                            var t = this.start_index + 24 - this.value_set.length;
                            i -= t,
                                this.start_index -= t
                        }
                        return this.scroll_view.content.y -= i * this.OPT_HEIGHT,
                            void this.load_item_data(this.start_index)
                    }
                    if (this.start_index > 0 && this.scroll_view.content.y <= this.content_start_y) {
                        var a = 8;
                        this.start_index -= a,
                        this.start_index < 0 && (a += this.start_index, this.start_index = 0),
                            this.scroll_view.content.y += a * this.OPT_HEIGHT,
                            this.load_item_data(this.start_index)
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        standings: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "3d8ddxvGulHqbJ4mRBLQtLk", "standings");
            var a = e("uiTime");
            cc.Class({
                extends: cc.Component,
                properties: {
                    opt_item_prefab: {
                        type: cc.Prefab,
                        default:
                            null
                    },
                    scroll_view: {
                        type: cc.ScrollView,
                        default:
                            null
                    },
                    atlas: {
                        default:
                            null,
                        type: cc.SpriteAtlas
                    },
                    OPT_HEIGHT: 120
                },
                onLoad: function() {
                    this.value_set = [],
                        this.item_set = [],
                        this.isfrist = !0,
                        this.offget = 0,
                        this.limit = 25,
                        this.myResult(this.offget, this.limit)
                },
                myResult: function(e, i) {
                    cc.beimi.beiMiCommon.loadding();
                    var t = {
                        offset: e,
                        limit: i
                    };
                    cc.beimi.http.httpPost("/redCard/myResult", t, this.sucess, this.error, this)
                },
                sucess: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog);
                    var a = JSON.parse(e);
                    if (cc.log("历史战绩data:" + JSON.stringify(a)), null != a && 200 == a.code) {
                        if (a.data) {
                            i.value_set = i.value_set.concat(a.data);
                            for (var n = 0; n < a.data.length; n++) if (i.item_set.length < 24) {
                                var c = cc.instantiate(i.opt_item_prefab);
                                i.scroll_view.content.addChild(c),
                                    i.item_set.push(c)
                            }
                            i.load_item_data(i.start_index, 1)
                        }
                    } else t.closeloadding(t.loaddingdialog),
                        t.alert(a.msg)
                },
                error: function(e, i) {
                    var t = cc.beimi.beiMiCommon;
                    t.closeloadding(t.loaddingdialog),
                        t.alert("网络异常，服务访问失败")
                },
                load_item_data: function(e) {
                    for (var i = 0; i < this.item_set.length; i++) {
                        var t = this.item_set[i],
                            n = t.getChildByName("bg").getChildByName("header").getChildByName("room").getComponent(cc.Label),
                            c = t.getChildByName("bg").getChildByName("header").getChildByName("itime").getComponent(cc.Label),
                            o = t.getChildByName("bg").getChildByName("score").getComponent(cc.Label),
                            s = t.getChildByName("bg").getChildByName("header").getComponent(cc.Sprite),
                            r = t.getChildByName("bg").getChildByName("score");
                        n.string = "房间号：" + this.value_set[e + i].roomId,
                            c.string = a.prototype.formatdate(this.value_set[e + i].cTime);
                        var l = this.value_set[e + i].money;
                        l > 0 ? (l = "+" + l, r.color = cc.Color.YELLOW.fromHEX("#D85E0D")) : r.color = cc.Color.YELLOW.fromHEX("#2CCA17"),
                            o.string = l;
                        var m = t.getChildByName("bg").getComponent(cc.Button);
                        m.node.off(cc.Node.EventType.TOUCH_END),
                            m.node.on(cc.Node.EventType.TOUCH_END, this.selectred.bind(this, this.value_set[e + i].roomId, this.value_set[e + i].historyId), this);
                        var d = this.value_set[e + i].roomType;
                        this.loadhead(s, d)
                    }
                },
                selectred: function(e, i) {
                    cc.beimi.historyId_zhanji = i,
                        cc.beimi.zhanji_roomId = e;
                    var t = cc.beimi.beiMiCommon;
                    t.loadding(),
                        t.scene("standings_1", t)
                },
                loadhead: function(e, i) {
                    if (1 == i) t = this.atlas.getSpriteFrame("tenniuniu.1");
                    else if (2 == i) t = this.atlas.getSpriteFrame("tenniuniu");
                    else if (510 == i) t = this.atlas.getSpriteFrame("fish_icon");
                    else if (610 == i) t = this.atlas.getSpriteFrame("ten_paijiu");
                    else if (606 == i) t = this.atlas.getSpriteFrame("six_paijiu");
                    else if (708 == i) t = this.atlas.getSpriteFrame("eight_dapaijiu");
                    else var t = this.atlas.getSpriteFrame("tenniuniu.1");
                    e.spriteFrame = t
                },
                start: function() {
                    this.start_index = 0,
                        this.content_start_y = this.scroll_view.content.y
                },
                onClick_home: function() {
                    var e = cc.beimi.beiMiCommon;
                    e.loadding(),
                        e.scene("hall", e)
                },
                update: function(e) {
                    if (this.start_index + 24 < this.value_set.length && this.scroll_view.content.y >= this.content_start_y + 16 * this.OPT_HEIGHT) {
                        this.scroll_view.stopAutoScroll();
                        var i = 8;
                        if (this.start_index += i, this.start_index + 24 > this.value_set.length) {
                            var t = this.start_index + 24 - this.value_set.length;
                            i -= t,
                                this.start_index -= t
                        }
                        return this.scroll_view.content.y -= i * this.OPT_HEIGHT,
                            this.load_item_data(this.start_index),
                            void(this.start_index + 25 > this.value_set.length && (this.offget = this.offget + this.limit, this.limit = 24, this.myResult(this.offget, this.limit)))
                    }
                    if (this.start_index > 0 && this.scroll_view.content.y <= this.content_start_y) {
                        this.scroll_view.stopAutoScroll();
                        var a = 8;
                        this.start_index -= a,
                        this.start_index < 0 && (a += this.start_index, this.start_index = 0),
                            this.scroll_view.content.y += a * this.OPT_HEIGHT,
                            this.load_item_data(this.start_index)
                    }
                }
            }),
                cc._RF.pop()
        },
            {
                uiTime: "uiTime"
            }],
        time_schedule: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "97098PWsF5Pgphh6MC0Qb5I", "time_schedule"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function() {
                        cc.beimi.time_schedule = this
                    }
                }),
                cc._RF.pop()
        },
            {}],
        uiTime: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "1ef18KCchVOfL5Bmipi+6fB", "uiTime"),
                cc.Class({
                    extends: cc.Component,
                    onLoad: function() {},
                    formatdate: function(e) {
                        var i = new Date(parseInt(e)),
                            t = i.getFullYear(),
                            a = i.getMonth() + 1,
                            n = i.getDate(),
                            c = i.getHours(),
                            o = i.getMinutes();
                        i.getSeconds();
                        return a < 10 && (a = "0" + (i.getMonth() + 1)),
                        n < 10 && (n = "0" + i.getDate()),
                        c < 10 && (c = "0" + i.getHours()),
                        o < 10 && (o = "0" + i.getMinutes()),
                        t + "-" + a + "-" + n + " " + c + ":" + o
                    }
                }),
                cc._RF.pop()
        },
            {}],
        uicreator: [function(e, i, t) {
            "use strict";
            cc._RF.push(i, "7ca4ahOOudAupg+q5NN/sRx", "uicreator");
            var a = new Object;
            a.createSettingPanel = function() {
                cc.loader.loadRes("prefab/SettingPanel",
                    function(e, i) {
                        if (!e) {
                            var t = cc.instantiate(i);
                            cc.director.getScene().getChildByName("Canvas").addChild(t, 20),
                                t.setPosition(cc.p(0, 0))
                        }
                    })
            },
                a.createliaotianPanel = function(e) {
                    var i = .5 * cc.director.getWinSize().width - 185,
                        t = e.parent.y + 260;
                    cc.beimi.LiaotianPrefab.size() > 0 ? (this.LiaotianPrefab = cc.beimi.LiaotianPrefab.get(), cc.director.getScene().getChildByName("Canvas").addChild(this.LiaotianPrefab, 20), this.LiaotianPrefab.setPosition(cc.p(i, t))) : (cc.beimi.isliaotian = !0, cc.loader.loadRes("prefab/Liaotian",
                        function(e, a) {
                            if (!e) {
                                var n = cc.instantiate(a);
                                cc.director.getScene().getChildByName("Canvas").addChild(n, 20),
                                    n.setPosition(cc.p(i, t))
                            }
                        }))
                },
                i.exports = a,
                cc._RF.pop()
        },
            {}]
    },
    {},
    ["AnimInAndOut", "Base64", "BeiMiCommon", "BeiMiDialog", "EnterRoom", "EventStop", "Game", "HTTP", "Hall", "IOUtils", "NewScript", "Reconnect", "SettingItem", "SettingPanel", "StarClickPanel", "audioPlayer", "backHome", "broadcast", "common", "createRoom", "dianshu", "end", "fama", "fish", "fish_icon", "fish_image", "friend", "groupApply", "heartCheck ", "history_sz", "history_sz_itme", "init", "itemid", "itme_list", "itme_standings_1", "jinbi", "joinAlert", "liaotian", "login", "manage", "mobile_bind", "myRed", "niu", "paijiu", "paijiu_hit", "pako.min", "puker", "ranking", "receive", "roomRule", "roomType", "runGame", "sendCard", "socket", "standings", "standings_1", "time_schedule", "uiTime", "uicreator"]);