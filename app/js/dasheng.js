var storage = {
    get: function(key) {
        var data = false;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                data = this.item(arr[0]);
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        return data;
    },
    set: function(key, value) {
        if (value === undefined) return false;
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        _dt = data;
                        data = data[arr[i]];
                    } else {
                        if (i == arr.length - 1) {
                            data[arr[i]] = '';
                            _dt = data;
                            data = data[arr[i]];
                        } else return false
                    }
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        data = value;
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
        }
        return true;
    },
    inset: function(key, value) {
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) _dt = data;
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (typeof(data) != 'object') return false;
        data.push(value);
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
            data = datas;
        }
        return data;
    },
    outset: function(key, value) {
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) _dt = data;
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (typeof(data) != 'object') return false;
        var _data = [];
        for (var i in data) {
            if (data[i] !== value) _data.push(data[i]);
        }
        data = _data;
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
            data = datas;
        }
        return data;
    },
    pop: function(key, way) {
        var way = way || 1;
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) _dt = data;
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (way == 1) var rs = data.pop();
        else var rs = data.shift();
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
        }
        return rs;
    },
    shift: function(key) {
        return this.pop(key, -1);
    },
    incr: function(key, value) {
        if (typeof(value) != 'number') value = 1;
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) _dt = data;
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (typeof(data) == 'number') {
            data += value;
        } else {
            return false;
        }
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
        }
        return data;
    },
    decr: function(key, value) {
        if (typeof(value) != 'number') value = 1;
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) _dt = data;
                        data = data[arr[i]];
                    } else return false;
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (typeof(data) == 'number') {
            data -= value;
        } else {
            return false;
        }
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
        }
        return data;
    },
    rm: function(key) {
        if (key.indexOf('.') > 0) {
            var data = [];
            var datas = null;
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        if (i == arr.length - 1) {
                            delete data[arr[i]];
                        } else data = data[arr[i]];
                    } else return false;
                }
                this.item(arr[0], datas);
                return datas;
            } else {
                return false;
            }
        } else {
            this.item(key, null);
            return true;
        }
    },
    each: function(key, fn) {
        if (typeof(fn) != 'function') return false;
        var data = [];
        var datas = null;
        var _dt = null;
        if (key.indexOf('.') > 0) {
            var arr = key.split('.');
            if (this.item(arr[0])) {
                datas = this.item(arr[0]);
                data = datas;
                for (var i in arr) {
                    if (i == 0) continue;
                    if (data[arr[i]] !== undefined) {
                        _dt = data;
                        data = data[arr[i]];
                    } else return false
                }
            } else {
                return false;
            }
        } else if (this.item(key)) data = this.item(key);
        if (typeof(data) != 'object') return false;
        for (var i in data) {
            var rs = fn(data[i], i);
            if (rs !== undefined) {
                data[i] = rs;
            }
        }
        if (datas === null) {
            this.item(key, data);
        } else {
            _dt[arr[arr.length - 1]] = data;
            this.item(arr[0], datas);
        }
        return true;
    },
    item: function(key, value) {
        if (window.localStorage) {
            if (value === undefined) {
                return this.decode(localStorage.getItem(key)) || false;
            } else if (value === null) return localStorage.removeItem(key);
            else return localStorage.setItem(key, this.encode(value));
        } else {
            if (value === undefined) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) return this.decode(arr[2]);
                else return false;
            } else if (value === null) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                document.cookie = name + "=" + this.encode(value) + ";expires=" + exp.toGMTString();
                return true;
            } else {
                var Days = 30;
                var exp = new Date();
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                document.cookie = name + "=" + this.encode(value) + ";expires=" + exp.toGMTString();
                return true;
            }
        }
    },
    encode: function(obj) {
        var str = '';
        try {
            str = JSON.stringify(obj);
        } catch(e) {
            str = decodeURI(obj);
        }
        return str;
    },
    decode: function(str) {
        var obj = '';
        try {
            obj = JSON.parse(str);
        } catch(e) {
            obj = encodeURI(str);
        }
        return obj;
    }
};
var qrcode = function(typeNumber, errorCorrectLevel) {
    var PAD0 = 0xEC;
    var PAD1 = 0x11;
    var _typeNumber = typeNumber;
    var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];
    var _this = {};
    var makeImpl = function(test, maskPattern) {
        _moduleCount = _typeNumber * 4 + 17;
        _modules = function(moduleCount) {
            var modules = new Array(moduleCount);
            for (var row = 0; row < moduleCount; row += 1) {
                modules[row] = new Array(moduleCount);
                for (var col = 0; col < moduleCount; col += 1) {
                    modules[row][col] = null;
                }
            }
            return modules;
        } (_moduleCount);
        setupPositionProbePattern(0, 0);
        setupPositionProbePattern(_moduleCount - 7, 0);
        setupPositionProbePattern(0, _moduleCount - 7);
        setupPositionAdjustPattern();
        setupTimingPattern();
        setupTypeInfo(test, maskPattern);
        if (_typeNumber >= 7) {
            setupTypeNumber(test);
        }
        if (_dataCache == null) {
            _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
        }
        mapData(_dataCache, maskPattern);
    };
    var setupPositionProbePattern = function(row, col) {
        for (var r = -1; r <= 7; r += 1) {
            if (row + r <= -1 || _moduleCount <= row + r) continue;
            for (var c = -1; c <= 7; c += 1) {
                if (col + c <= -1 || _moduleCount <= col + c) continue;
                if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                    _modules[row + r][col + c] = true;
                } else {
                    _modules[row + r][col + c] = false;
                }
            }
        }
    };
    var getBestMaskPattern = function() {
        var minLostPoint = 0;
        var pattern = 0;
        for (var i = 0; i < 8; i += 1) {
            makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(_this);
            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }
        return pattern;
    };
    var setupTimingPattern = function() {
        for (var r = 8; r < _moduleCount - 8; r += 1) {
            if (_modules[r][6] != null) {
                continue;
            }
            _modules[r][6] = (r % 2 == 0);
        }
        for (var c = 8; c < _moduleCount - 8; c += 1) {
            if (_modules[6][c] != null) {
                continue;
            }
            _modules[6][c] = (c % 2 == 0);
        }
    };
    var setupPositionAdjustPattern = function() {
        var pos = QRUtil.getPatternPosition(_typeNumber);
        for (var i = 0; i < pos.length; i += 1) {
            for (var j = 0; j < pos.length; j += 1) {
                var row = pos[i];
                var col = pos[j];
                if (_modules[row][col] != null) {
                    continue;
                }
                for (var r = -2; r <= 2; r += 1) {
                    for (var c = -2; c <= 2; c += 1) {
                        if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
                            _modules[row + r][col + c] = true;
                        } else {
                            _modules[row + r][col + c] = false;
                        }
                    }
                }
            }
        }
    };
    var setupTypeNumber = function(test) {
        var bits = QRUtil.getBCHTypeNumber(_typeNumber);
        for (var i = 0; i < 18; i += 1) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
        }
        for (var i = 0; i < 18; i += 1) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
    };
    var setupTypeInfo = function(test, maskPattern) {
        var data = (_errorCorrectLevel << 3) | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for (var i = 0; i < 15; i += 1) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 6) {
                _modules[i][8] = mod;
            } else if (i < 8) {
                _modules[i + 1][8] = mod;
            } else {
                _modules[_moduleCount - 15 + i][8] = mod;
            }
        }
        for (var i = 0; i < 15; i += 1) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 8) {
                _modules[8][_moduleCount - i - 1] = mod;
            } else if (i < 9) {
                _modules[8][15 - i - 1 + 1] = mod;
            } else {
                _modules[8][15 - i - 1] = mod;
            }
        }
        _modules[_moduleCount - 8][8] = (!test);
    };
    var mapData = function(data, maskPattern) {
        var inc = -1;
        var row = _moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        var maskFunc = QRUtil.getMaskFunction(maskPattern);
        for (var col = _moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col -= 1;
            while (true) {
                for (var c = 0; c < 2; c += 1) {
                    if (_modules[row][col - c] == null) {
                        var dark = false;
                        if (byteIndex < data.length) {
                            dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
                        }
                        var mask = maskFunc(row, col - c);
                        if (mask) {
                            dark = !dark;
                        }
                        _modules[row][col - c] = dark;
                        bitIndex -= 1;
                        if (bitIndex == -1) {
                            byteIndex += 1;
                            bitIndex = 7;
                        }
                    }
                }
                row += inc;
                if (row < 0 || _moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    };
    var createBytes = function(buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);
        for (var r = 0; r < rsBlocks.length; r += 1) {
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);
            for (var i = 0; i < dcdata[r].length; i += 1) {
                dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
            }
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for (var i = 0; i < ecdata[r].length; i += 1) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = (modIndex >= 0) ? modPoly.getAt(modIndex) : 0;
            }
        }
        var totalCodeCount = 0;
        for (var i = 0; i < rsBlocks.length; i += 1) {
            totalCodeCount += rsBlocks[i].totalCount;
        }
        var data = new Array(totalCodeCount);
        var index = 0;
        for (var i = 0; i < maxDcCount; i += 1) {
            for (var r = 0; r < rsBlocks.length; r += 1) {
                if (i < dcdata[r].length) {
                    data[index] = dcdata[r][i];
                    index += 1;
                }
            }
        }
        for (var i = 0; i < maxEcCount; i += 1) {
            for (var r = 0; r < rsBlocks.length; r += 1) {
                if (i < ecdata[r].length) {
                    data[index] = ecdata[r][i];
                    index += 1;
                }
            }
        }
        return data;
    };
    var createData = function(typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = qrBitBuffer();
        for (var i = 0; i < dataList.length; i += 1) {
            var data = dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
            data.write(buffer);
        }
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i += 1) {
            totalDataCount += rsBlocks[i].dataCount;
        }
        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error('code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')');
        }
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
        }
        while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(PAD1, 8);
        }
        return createBytes(buffer, rsBlocks);
    };
    _this.addData = function(data) {
        var newData = qr8BitByte(data);
        _dataList.push(newData);
        _dataCache = null;
    };
    _this.isDark = function(row, col) {
        if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
            throw new Error(row + ',' + col);
        }
        return _modules[row][col];
    };
    _this.getModuleCount = function() {
        return _moduleCount;
    };
    _this.make = function() {
        makeImpl(false, getBestMaskPattern());
    };
    _this.createTableTag = function(cellSize, margin) {
        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined') ? cellSize * 4 : margin;
        var qrHtml = '';
        qrHtml += '<table style="';
        qrHtml += ' border-width: 0px; border-style: none;';
        qrHtml += ' border-collapse: collapse;';
        qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
        qrHtml += '">';
        qrHtml += '<tbody>';
        for (var r = 0; r < _this.getModuleCount(); r += 1) {
            qrHtml += '<tr>';
            for (var c = 0; c < _this.getModuleCount(); c += 1) {
                qrHtml += '<td style="';
                qrHtml += ' border-width: 0px; border-style: none;';
                qrHtml += ' border-collapse: collapse;';
                qrHtml += ' padding: 0px; margin: 0px;';
                qrHtml += ' width: ' + cellSize + 'px;';
                qrHtml += ' height: ' + cellSize + 'px;';
                qrHtml += ' background-color: ';
                qrHtml += _this.isDark(r, c) ? '#000000': '#ffffff';
                qrHtml += ';';
                qrHtml += '"/>';
            }
            qrHtml += '</tr>';
        }
        qrHtml += '</tbody>';
        qrHtml += '</table>';
        return qrHtml;
    };
    _this.createImgTag = function(cellSize, margin, size) {
        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined') ? cellSize * 4 : margin;
        var min = margin;
        var max = _this.getModuleCount() * cellSize + margin;
        return createImgTag(size, size,
            function(x, y) {
                if (min <= x && x < max && min <= y && y < max) {
                    var c = Math.floor((x - min) / cellSize);
                    var r = Math.floor((y - min) / cellSize);
                    return _this.isDark(r, c) ? 0 : 1;
                } else {
                    return 1;
                }
            });
    };
    return _this;
};
qrcode.stringToBytes = function(s) {
    var bytes = [];
    for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
    }
    return bytes;
};
qrcode.createStringToBytes = function(unicodeData, numChars) {
    var unicodeMap = function() {
        var bin = base64DecodeInputStream(unicodeData);
        var read = function() {
            var b = bin.read();
            if (b == -1) throw new Error();
            return b;
        };
        var count = 0;
        var unicodeMap = {};
        while (true) {
            var b0 = bin.read();
            if (b0 == -1) break;
            var b1 = read();
            var b2 = read();
            var b3 = read();
            var k = String.fromCharCode((b0 << 8) | b1);
            var v = (b2 << 8) | b3;
            unicodeMap[k] = v;
            count += 1;
        }
        if (count != numChars) {
            throw new Error(count + ' != ' + numChars);
        }
        return unicodeMap;
    } ();
    var unknownChar = '?'.charCodeAt(0);
    return function(s) {
        var bytes = [];
        for (var i = 0; i < s.length; i += 1) {
            var c = s.charCodeAt(i);
            if (c < 128) {
                bytes.push(c);
            } else {
                var b = unicodeMap[s.charAt(i)];
                if (typeof b == 'number') {
                    if ((b & 0xff) == b) {
                        bytes.push(b);
                    } else {
                        bytes.push(b >>> 8);
                        bytes.push(b & 0xff);
                    }
                } else {
                    bytes.push(unknownChar);
                }
            }
        }
        return bytes;
    };
};
var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = function() {
    var PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
    var _this = {};
    var getBCHDigit = function(data) {
        var digit = 0;
        while (data != 0) {
            digit += 1;
            data >>>= 1;
        }
        return digit;
    };
    _this.getBCHTypeInfo = function(data) {
        var d = data << 10;
        while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
            d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15)));
        }
        return ((data << 10) | d) ^ G15_MASK;
    };
    _this.getBCHTypeNumber = function(data) {
        var d = data << 12;
        while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
            d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18)));
        }
        return (data << 12) | d;
    };
    _this.getPatternPosition = function(typeNumber) {
        return PATTERN_POSITION_TABLE[typeNumber - 1];
    };
    _this.getMaskFunction = function(maskPattern) {
        switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
                return function(i, j) {
                    return (i + j) % 2 == 0;
                };
            case QRMaskPattern.PATTERN001:
                return function(i, j) {
                    return i % 2 == 0;
                };
            case QRMaskPattern.PATTERN010:
                return function(i, j) {
                    return j % 3 == 0;
                };
            case QRMaskPattern.PATTERN011:
                return function(i, j) {
                    return (i + j) % 3 == 0;
                };
            case QRMaskPattern.PATTERN100:
                return function(i, j) {
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                };
            case QRMaskPattern.PATTERN101:
                return function(i, j) {
                    return (i * j) % 2 + (i * j) % 3 == 0;
                };
            case QRMaskPattern.PATTERN110:
                return function(i, j) {
                    return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
                };
            case QRMaskPattern.PATTERN111:
                return function(i, j) {
                    return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
                };
            default:
                throw new Error('bad maskPattern:' + maskPattern);
        }
    };
    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
        var a = qrPolynomial([1], 0);
        for (var i = 0; i < errorCorrectLength; i += 1) {
            a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
        }
        return a;
    };
    _this.getLengthInBits = function(mode, type) {
        if (1 <= type && type < 10) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error('mode:' + mode);
            }
        } else if (type < 27) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error('mode:' + mode);
            }
        } else if (type < 41) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error('mode:' + mode);
            }
        } else {
            throw new Error('type:' + type);
        }
    };
    _this.getLostPoint = function(qrcode) {
        var moduleCount = qrcode.getModuleCount();
        var lostPoint = 0;
        for (var row = 0; row < moduleCount; row += 1) {
            for (var col = 0; col < moduleCount; col += 1) {
                var sameCount = 0;
                var dark = qrcode.isDark(row, col);
                for (var r = -1; r <= 1; r += 1) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }
                    for (var c = -1; c <= 1; c += 1) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue;
                        }
                        if (r == 0 && c == 0) {
                            continue;
                        }
                        if (dark == qrcode.isDark(row + r, col + c)) {
                            sameCount += 1;
                        }
                    }
                }
                if (sameCount > 5) {
                    lostPoint += (3 + sameCount - 5);
                }
            }
        }
        for (var row = 0; row < moduleCount - 1; row += 1) {
            for (var col = 0; col < moduleCount - 1; col += 1) {
                var count = 0;
                if (qrcode.isDark(row, col)) count += 1;
                if (qrcode.isDark(row + 1, col)) count += 1;
                if (qrcode.isDark(row, col + 1)) count += 1;
                if (qrcode.isDark(row + 1, col + 1)) count += 1;
                if (count == 0 || count == 4) {
                    lostPoint += 3;
                }
            }
        }
        for (var row = 0; row < moduleCount; row += 1) {
            for (var col = 0; col < moduleCount - 6; col += 1) {
                if (qrcode.isDark(row, col) && !qrcode.isDark(row, col + 1) && qrcode.isDark(row, col + 2) && qrcode.isDark(row, col + 3) && qrcode.isDark(row, col + 4) && !qrcode.isDark(row, col + 5) && qrcode.isDark(row, col + 6)) {
                    lostPoint += 40;
                }
            }
        }
        for (var col = 0; col < moduleCount; col += 1) {
            for (var row = 0; row < moduleCount - 6; row += 1) {
                if (qrcode.isDark(row, col) && !qrcode.isDark(row + 1, col) && qrcode.isDark(row + 2, col) && qrcode.isDark(row + 3, col) && qrcode.isDark(row + 4, col) && !qrcode.isDark(row + 5, col) && qrcode.isDark(row + 6, col)) {
                    lostPoint += 40;
                }
            }
        }
        var darkCount = 0;
        for (var col = 0; col < moduleCount; col += 1) {
            for (var row = 0; row < moduleCount; row += 1) {
                if (qrcode.isDark(row, col)) {
                    darkCount += 1;
                }
            }
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    };
    return _this;
} ();
var QRMath = function() {
    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);
    for (var i = 0; i < 8; i += 1) {
        EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
        EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
        LOG_TABLE[EXP_TABLE[i]] = i;
    }
    var _this = {};
    _this.glog = function(n) {
        if (n < 1) {
            throw new Error('glog(' + n + ')');
        }
        return LOG_TABLE[n];
    };
    _this.gexp = function(n) {
        while (n < 0) {
            n += 255;
        }
        while (n >= 256) {
            n -= 255;
        }
        return EXP_TABLE[n];
    };
    return _this;
} ();
function qrPolynomial(num, shift) {
    if (typeof num.length == 'undefined') {
        throw new Error(num.length + '/' + shift);
    }
    var _num = function() {
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
            offset += 1;
        }
        var _num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i += 1) {
            _num[i] = num[i + offset];
        }
        return _num;
    } ();
    var _this = {};
    _this.getAt = function(index) {
        return _num[index];
    };
    _this.getLength = function() {
        return _num.length;
    };
    _this.multiply = function(e) {
        var num = new Array(_this.getLength() + e.getLength() - 1);
        for (var i = 0; i < _this.getLength(); i += 1) {
            for (var j = 0; j < e.getLength(); j += 1) {
                num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
            }
        }
        return qrPolynomial(num, 0);
    };
    _this.mod = function(e) {
        if (_this.getLength() - e.getLength() < 0) {
            return _this;
        }
        var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));
        var num = new Array(_this.getLength());
        for (var i = 0; i < _this.getLength(); i += 1) {
            num[i] = _this.getAt(i);
        }
        for (var i = 0; i < e.getLength(); i += 1) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
        }
        return qrPolynomial(num, 0).mod(e);
    };
    return _this;
}
var QRRSBlock = function() {
    var RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    var qrRSBlock = function(totalCount, dataCount) {
        var _this = {};
        _this.totalCount = totalCount;
        _this.dataCount = dataCount;
        return _this;
    };
    var _this = {};
    var getRsBlockTable = function(typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
            case QRErrorCorrectLevel.L:
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M:
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q:
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H:
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
                return undefined;
        }
    };
    _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {
        var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);
        if (typeof rsBlock == 'undefined') {
            throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
        }
        var length = rsBlock.length / 3;
        var list = [];
        for (var i = 0; i < length; i += 1) {
            var count = rsBlock[i * 3 + 0];
            var totalCount = rsBlock[i * 3 + 1];
            var dataCount = rsBlock[i * 3 + 2];
            for (var j = 0; j < count; j += 1) {
                list.push(qrRSBlock(totalCount, dataCount));
            }
        }
        return list;
    };
    return _this;
} ();
var qrBitBuffer = function() {
    var _buffer = [];
    var _length = 0;
    var _this = {};
    _this.getBuffer = function() {
        return _buffer;
    };
    _this.getAt = function(index) {
        var bufIndex = Math.floor(index / 8);
        return ((_buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
    };
    _this.put = function(num, length) {
        for (var i = 0; i < length; i += 1) {
            _this.putBit(((num >>> (length - i - 1)) & 1) == 1);
        }
    };
    _this.getLengthInBits = function() {
        return _length;
    };
    _this.putBit = function(bit) {
        var bufIndex = Math.floor(_length / 8);
        if (_buffer.length <= bufIndex) {
            _buffer.push(0);
        }
        if (bit) {
            _buffer[bufIndex] |= (0x80 >>> (_length % 8));
        }
        _length += 1;
    };
    return _this;
};
var qr8BitByte = function(data) {
    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _parsedData = [];
    var _this = {};
    for (var i = 0,
             l = _data.length; i < l; i++) {
        var byteArray = [];
        var code = _data.charCodeAt(i);
        if (code > 0x10000) {
            byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
            byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
            byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
            byteArray[3] = 0x80 | (code & 0x3F);
        } else if (code > 0x800) {
            byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
            byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
            byteArray[2] = 0x80 | (code & 0x3F);
        } else if (code > 0x80) {
            byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
            byteArray[1] = 0x80 | (code & 0x3F);
        } else {
            byteArray[0] = code;
        }
        _parsedData.push(byteArray);
    }
    _parsedData = Array.prototype.concat.apply([], _parsedData);
    if (_parsedData.length != _data.length) {
        _parsedData.unshift(191);
        _parsedData.unshift(187);
        _parsedData.unshift(239);
    }
    var _bytes = _parsedData;
    _this.getMode = function() {
        return _mode;
    };
    _this.getLength = function(buffer) {
        return _bytes.length;
    };
    _this.write = function(buffer) {
        for (var i = 0; i < _bytes.length; i += 1) {
            buffer.put(_bytes[i], 8);
        }
    };
    return _this;
};
var byteArrayOutputStream = function() {
    var _bytes = [];
    var _this = {};
    _this.writeByte = function(b) {
        _bytes.push(b & 0xff);
    };
    _this.writeShort = function(i) {
        _this.writeByte(i);
        _this.writeByte(i >>> 8);
    };
    _this.writeBytes = function(b, off, len) {
        off = off || 0;
        len = len || b.length;
        for (var i = 0; i < len; i += 1) {
            _this.writeByte(b[i + off]);
        }
    };
    _this.writeString = function(s) {
        for (var i = 0; i < s.length; i += 1) {
            _this.writeByte(s.charCodeAt(i));
        }
    };
    _this.toByteArray = function() {
        return _bytes;
    };
    _this.toString = function() {
        var s = '';
        s += '[';
        for (var i = 0; i < _bytes.length; i += 1) {
            if (i > 0) {
                s += ',';
            }
            s += _bytes[i];
        }
        s += ']';
        return s;
    };
    return _this;
};
var base64EncodeOutputStream = function() {
    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';
    var _this = {};
    var writeEncoded = function(b) {
        _base64 += String.fromCharCode(encode(b & 0x3f));
    };
    var encode = function(n) {
        if (n < 0) {} else if (n < 26) {
            return 0x41 + n;
        } else if (n < 52) {
            return 0x61 + (n - 26);
        } else if (n < 62) {
            return 0x30 + (n - 52);
        } else if (n == 62) {
            return 0x2b;
        } else if (n == 63) {
            return 0x2f;
        }
        throw new Error('n:' + n);
    };
    _this.writeByte = function(n) {
        _buffer = (_buffer << 8) | (n & 0xff);
        _buflen += 8;
        _length += 1;
        while (_buflen >= 6) {
            writeEncoded(_buffer >>> (_buflen - 6));
            _buflen -= 6;
        }
    };
    _this.flush = function() {
        if (_buflen > 0) {
            writeEncoded(_buffer << (6 - _buflen));
            _buffer = 0;
            _buflen = 0;
        }
        if (_length % 3 != 0) {
            var padlen = 3 - _length % 3;
            for (var i = 0; i < padlen; i += 1) {
                _base64 += '=';
            }
        }
    };
    _this.toString = function() {
        return _base64;
    };
    return _this;
};
var base64DecodeInputStream = function(str) {
    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;
    var _this = {};
    _this.read = function() {
        while (_buflen < 8) {
            if (_pos >= _str.length) {
                if (_buflen == 0) {
                    return - 1;
                }
                throw new Error('unexpected end of file./' + _buflen);
            }
            var c = _str.charAt(_pos);
            _pos += 1;
            if (c == '=') {
                _buflen = 0;
                return - 1;
            } else if (c.match(/^\s$/)) {
                continue;
            }
            _buffer = (_buffer << 6) | decode(c.charCodeAt(0));
            _buflen += 6;
        }
        var n = (_buffer >>> (_buflen - 8)) & 0xff;
        _buflen -= 8;
        return n;
    };
    var decode = function(c) {
        if (0x41 <= c && c <= 0x5a) {
            return c - 0x41;
        } else if (0x61 <= c && c <= 0x7a) {
            return c - 0x61 + 26;
        } else if (0x30 <= c && c <= 0x39) {
            return c - 0x30 + 52;
        } else if (c == 0x2b) {
            return 62;
        } else if (c == 0x2f) {
            return 63;
        } else {
            throw new Error('c:' + c);
        }
    };
    return _this;
};
var gifImage = function(width, height) {
    var _width = width;
    var _height = height;
    var _data = new Array(width * height);
    var _this = {};
    _this.setPixel = function(x, y, pixel) {
        _data[y * _width + x] = pixel;
    };
    _this.write = function(out) {
        out.writeString('GIF87a');
        out.writeShort(_width);
        out.writeShort(_height);
        out.writeByte(0x80);
        out.writeByte(0);
        out.writeByte(0);
        out.writeByte(0x00);
        out.writeByte(0x00);
        out.writeByte(0x00);
        out.writeByte(0xff);
        out.writeByte(0xff);
        out.writeByte(0xff);
        out.writeString(',');
        out.writeShort(0);
        out.writeShort(0);
        out.writeShort(_width);
        out.writeShort(_height);
        out.writeByte(0);
        var lzwMinCodeSize = 2;
        var raster = getLZWRaster(lzwMinCodeSize);
        out.writeByte(lzwMinCodeSize);
        var offset = 0;
        while (raster.length - offset > 255) {
            out.writeByte(255);
            out.writeBytes(raster, offset, 255);
            offset += 255;
        }
        out.writeByte(raster.length - offset);
        out.writeBytes(raster, offset, raster.length - offset);
        out.writeByte(0x00);
        out.writeString(';');
    };
    var bitOutputStream = function(out) {
        var _out = out;
        var _bitLength = 0;
        var _bitBuffer = 0;
        var _this = {};
        _this.write = function(data, length) {
            if ((data >>> length) != 0) {
                throw new Error('length over');
            }
            while (_bitLength + length >= 8) {
                _out.writeByte(0xff & ((data << _bitLength) | _bitBuffer));
                length -= (8 - _bitLength);
                data >>>= (8 - _bitLength);
                _bitBuffer = 0;
                _bitLength = 0;
            }
            _bitBuffer = (data << _bitLength) | _bitBuffer;
            _bitLength = _bitLength + length;
        };
        _this.flush = function() {
            if (_bitLength > 0) {
                _out.writeByte(_bitBuffer);
            }
        };
        return _this;
    };
    var getLZWRaster = function(lzwMinCodeSize) {
        var clearCode = 1 << lzwMinCodeSize;
        var endCode = (1 << lzwMinCodeSize) + 1;
        var bitLength = lzwMinCodeSize + 1;
        var table = lzwTable();
        for (var i = 0; i < clearCode; i += 1) {
            table.add(String.fromCharCode(i));
        }
        table.add(String.fromCharCode(clearCode));
        table.add(String.fromCharCode(endCode));
        var byteOut = byteArrayOutputStream();
        var bitOut = bitOutputStream(byteOut);
        bitOut.write(clearCode, bitLength);
        var dataIndex = 0;
        var s = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;
        while (dataIndex < _data.length) {
            var c = String.fromCharCode(_data[dataIndex]);
            dataIndex += 1;
            if (table.contains(s + c)) {
                s = s + c;
            } else {
                bitOut.write(table.indexOf(s), bitLength);
                if (table.size() < 0xfff) {
                    if (table.size() == (1 << bitLength)) {
                        bitLength += 1;
                    }
                    table.add(s + c);
                }
                s = c;
            }
        }
        bitOut.write(table.indexOf(s), bitLength);
        bitOut.write(endCode, bitLength);
        bitOut.flush();
        return byteOut.toByteArray();
    };
    var lzwTable = function() {
        var _map = {};
        var _size = 0;
        var _this = {};
        _this.add = function(key) {
            if (_this.contains(key)) {
                throw new Error('dup key:' + key);
            }
            _map[key] = _size;
            _size += 1;
        };
        _this.size = function() {
            return _size;
        };
        _this.indexOf = function(key) {
            return _map[key];
        };
        _this.contains = function(key) {
            return typeof _map[key] != 'undefined';
        };
        return _this;
    };
    return _this;
};
var createImgTag = function(width, height, getPixel, alt) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {
            gif.setPixel(x, y, getPixel(x, y));
        }
    }
    var b = byteArrayOutputStream();
    gif.write(b);
    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
        base64.writeByte(bytes[i]);
    }
    base64.flush();
    var img = '';
    img += 'data:image/gif;base64,';
    img += base64;
    return img;
};
$.alert = function(msg, fn, style, sec) {
    style = style || 'success';
    if (typeof(fn) == 'string') {
        style = fn;
    }
    if (!sec) {
        if (style == 'error' || style == 'puncherror') {
            sec = 9;
        } else {
            sec = 0;
        }
    }
    var box = $('<div>').addClass('resourceBox ' + style).attr('id', 'alertBox');
    box.html('<div class="context">' + msg + '</div>');
    box.appendTo('body');
    var h = win.width / 360 * 100;
    box.css({
        'opacity': 1,
        'margin-top': -1 * (box.height() + h) / 2
    });
    if (sec >= 9) {
        var alertBoxLay = $('<div>').addClass('alertBoxLay').appendTo('body');
        $('<a>').attr('href', 'javascript:void(0);').addClass('closed').appendTo(box).text('我知道了');
        $('#alertBox a.closed, .alertBoxLay').click(function() {
            box.css({
                'opacity': 0,
                'margin-top': -1 * (box.height() + h)
            });
            alertBoxLay.css('opacity', 0);
            setTimeout(function() {
                    box.remove();
                    alertBoxLay.remove();
                    if (typeof(fn) == 'function') fn();
                },
                500);
        });
    } else {
        setTimeout(function() {
                box.css({
                    'opacity': 0,
                    'margin-top': -1 * (box.height() + h)
                });
                setTimeout(function() {
                        box.remove();
                        if (typeof(fn) == 'function') fn();
                    },
                    500);
            },
            1000 + sec * 1000);
    }
};
$.dialog = function(msg, fn, is_lock, classname) {
    is_lock = is_lock || true;
    if (typeof(fn) != 'function') return;
    classname = classname || '';
    var box = $('<div>').addClass('resourceBox  ' + classname).attr('id', 'dialogBox');
    var sb = $('<div>').addClass('sbox').appendTo(box);
    sb.html('<div class="context">' + msg + '</div>');
    box.appendTo('body');
    var h = win.width / 360 * 100;
    box.css({
        'opacity': 1,
        'margin-top': -1 * (box.height() + h) / 2
    });
    if (is_lock) {
        var dialogBoxLay = $('<div>').addClass('dialogBoxLay').appendTo('body');
    }
    var btns = $('<div>').addClass('btns').appendTo(sb);
    $('<button>').addClass('closeBtn').appendTo(btns).text('否');
    var agree = $('<button>').addClass('agree').appendTo(btns).text('是');
    agree.click(function() {
        if (fn() !== false) {
            box.css({
                'opacity': 0,
                'margin-top': -1 * (box.height() + h)
            });
            if (is_lock) dialogBoxLay.css('opacity', 0);
            setTimeout(function() {
                    box.remove();
                    if (is_lock) dialogBoxLay.remove();
                },
                500);
        }
    });
    $('#dialogBox button.closeBtn, .dialogBoxLay, .clearpsd, .noticeid').click(function() {
        box.css({
            'opacity': 0,
            'margin-top': -1 * (box.height() + h)
        });
        dialogBoxLay.css('opacity', 0);
        setTimeout(function() {
                box.remove();
                dialogBoxLay.remove();
            },
            500);
    });
};
$.fn.touch = function(callback) {
    this.each(function() {
        if (typeof(callback) == 'function') {
            if (navigator.userAgent.indexOf('QQBrowser') > 0) {
                $(this).on('click', callback);
            } else {
                var time = 0;
                this.fn = callback;
                $(this).on('touchstart',
                    function() {
                        time = (new Date()).getTime();
                    });
                $(this).on('touchend',
                    function() {
                        if ((new Date()).getTime() - time <= 300) {
                            this.fn(this);
                        }
                    });
            }
        } else {
            if (navigator.userAgent.indexOf('QQBrowser') > 0) {
                $(this).click();
            } else {
                this.fn(this);
            }
        }
    });
};
function ajax(path, data, fn, type) {
    if (!IS_SSL) var url = 'http://' + API_DOMAIN + '/';
    else var url = 'http://' + API_DOMAIN + '/';
    var async = type === false ? false: true;
    if (typeof(data) == 'function') {
        fn = data;
        data = {};
    }
    var arr = location.href.substr(url.length).split('/');
    https = [arr[0] ? arr[0] : 'home', arr[1] ? arr[1] : 'index', arr[2] ? arr[2] : 'index'];
    var arr = path.split('/');
    switch (arr.length) {
        case 3:
            https[2] = arr[2];
        case 2:
            https[1] = arr[1];
        case 1:
            https[0] = arr[0];
    }
    url += https.join('/') + '.html';
    if (win.token != null) {
        url += "?token=" + win.token + "&v=" + win.version;
        var postdata = {};
        var getdata = [];
        if (data) {
            if (data.get) {
                if (data.post) postdata = data.post;
                for (i in data.get) {
                    getdata.push(i + '=' + encodeURIComponent(data.get[i]));
                }
                url += '&' + getdata.join('&');
            } else {
                postdata = data;
            }
        }
        var arr = [];
        for (var i in postdata) {
            if (postdata[i] instanceof Array) {
                for (var j in postdata[i]) {
                    arr.push(i + '[]=' + encodeURIComponent(postdata[i][j]));
                }
            } else if (typeof(postdata[i]) == 'number' || typeof(postdata[i]) == 'string') {
                arr.push(i + '=' + encodeURIComponent(postdata[i]));
            }
        }
        postdata = arr.join('&');
        var xmlHttp = new XMLHttpRequest();
        if (xmlHttp != null) {
            xmlHttp.open("POST", url, true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
            xmlHttp.send(postdata);
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        var data = '';
                        try {
                            data = JSON.parse(xmlHttp.responseText);
                        } catch(e) {
                            data = xmlHttp.responseText;
                        }
                        if (typeof(fn) == 'function') fn(data);
                    }
                }
            };
        } else {
            alert("Your browser does not support XMLHTTP.");
        }
    }
}
String.prototype.decodeURL = function() {
    var url = this.toString();
    if (url.indexOf('?') > 0) {
        url = url.split('?')[1];
    }
    var arr = url.split('&');
    var params = {};
    for (var i in arr) {
        var a = arr[i].split('=');
        if (a.length == 2) {
            params[a[0]] = a[1];
        }
    }
    return params;
};
String.prototype.timeFormat = function(format) {
    var time = this.toString();
    if (/^\d+$/.test(time)) {
        var myDate = new Date(time * 1000);
    } else {
        time = time.replace(/\-/g, '/');
        var myDate = new Date(time);
    }
    var _date = {};
    _date.Y = myDate.getFullYear();
    _date.m = (myDate.getMonth() + 1).toString();
    if (_date.m.length == 1) _date.m = '0' + _date.m;
    _date.d = myDate.getDate().toString();
    if (_date.d.length == 1) _date.d = '0' + _date.d;
    _date.H = myDate.getHours();
    if (_date.H.length == 1) _date.H = '0' + _date.H;
    _date.i = myDate.getMinutes().toString();
    if (_date.i.length == 1) _date.i = '0' + _date.i;
    _date.s = myDate.getSeconds().toString();
    if (_date.s.length == 1) _date.s = '0' + _date.s;
    _date.w = myDate.getDay().toString();
    weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    _date.W = weekday[myDate.getDay()];
    for (var i in _date) {
        format = format.replace(i, _date[i]);
    }
    return format;
};
function share(title, desc, link, imgUrl, fun) {
    imgUrl = getShareIconLink(win.gameId);
    wx.onMenuShareTimeline({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {
            if (typeof(fun) == 'function') fun(res);
        }
    });
    wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {
            if (typeof(fun) == 'function') fun(res);
        }
    });
    wx.onMenuShareQQ({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {
            if (typeof(fun) == 'function') fun(res);
        }
    });
    wx.onMenuShareWeibo({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {
            if (typeof(fun) == 'function') fun(res);
        }
    });
    wx.onMenuShareQZone({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {
            if (typeof(fun) == 'function') fun(res);
        }
    });
}
function setTitle(title) {
    document.title = title;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        var i = document.createElement('iframe');
        i.src = '/favicon.ico';
        i.style.display = 'none';
        i.onload = function() {
            setTimeout(function() {
                    i.remove();
                },
                9)
        }
        document.body.appendChild(i);
    }
}
function isIOS() {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
function createCode(len) {
    var char = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    var code = '';
    for (var i = 0; i < len; i++) {
        code += char[Math.floor(Math.random() * 62)];
    }
    return code;
}
function oClone(obj) {
    var _obj = {};
    for (var i in obj) {
        if (typeof(obj[i]) == 'object' && !(obj[i] instanceof Array)) {
            _obj[i] = oClone(obj[i]);
        } else {
            _obj[i] = obj[i];
        }
    }
    return _obj;
}
function cacl(arr, callback) {
    var ret;
    for (var i = 0; i < arr.length; i++) {
        ret = callback(arr[i], ret);
    }
    return ret;
}
function array_max(array) {
    return cacl(array,
        function(item, max) {
            if (! (max > item)) {
                return item;
            } else {
                return max;
            }
        });
}
function array_min(array) {
    return cacl(array,
        function(item, min) {
            if (! (min < item)) {
                return item;
            } else {
                return min;
            }
        });
}
function array_sum(array) {
    return cacl(array,
        function(item, sum) {
            if (typeof(sum) == 'undefined') {
                return item;
            } else {
                return sum += item;
            }
        });
}
function array_avg(array) {
    if (array.length == 0) {
        return 0;
    }
    return array_sum(array) / array.length;
}
var win = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    version: '1.0.0',
    ws: {},
    status: 0,
    readed: 0,
    gameId: 0,
    reset: function(fn) {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + 100 * (this.width / 360) + 'px !important');
        if (typeof(fn) == 'function') fn();
    },
    loading: function() {
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        this.overlay = $('<div>').css({
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(255,255,255,0.7)',
            'z-index': 110000
        }).appendTo('body');
        if (this.loadingLay) {
            this.loadingLay.remove();
            this.loadingLay = null;
        }
        var code = '<div class="spinner">';
        code += ' <div class="spinner-container container1">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += ' <div class="spinner-container container2">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += ' <div class="spinner-container container3">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += '</div>';
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", code);
    },
    close_loading: function() {
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        if (this.loadingLay) {
            this.loadingLay.remove();
            this.loadingLay = null;
        }
    },
    closeLoading: function() {
        document.getElementById('loadings').style.opacity = 0;
        setTimeout(function() {
                document.getElementById('loadings').style.display = 'none';
            },
            500);
    },
    load: function() {
        this.reset();
        if (typeof(Page) == 'object' && typeof(Page.load) == 'function') Page.load();
    },
    ready: function() {
        this.reset();
        if (typeof(Page) == 'object' && typeof(Page.ready) == 'function') Page.ready();
    },
    readyJoin: function(code, func) {
        ajax('home/index/readyJoin', {
                code: code
            },
            function(d) {
                win.gameId = d.game;
                var user_list = d.room_users;
                if (typeof(d.info) != 'undefined') {
                    if (d.info == 0) {
                        alert2('加入房间失败',
                            function() {
                                wx.closeWindow();
                            });
                    } else if (d.info == -1) {
                        alert2('房间号错误',
                            function() {
                                wx.closeWindow();
                            });
                    } else if (d.info == 1) {
                        document.body.style.background = '#000000';
                        document.body.minHeight = 'initial';
                        if (document.getElementsByClassName('body')[0]) {
                            document.body.removeChild(document.getElementsByClassName('body')[0]);
                        }
                        if (document.getElementsByTagName('canvas')[0]) {
                            document.body.removeChild(document.getElementsByTagName('canvas')[0]);
                        }
                        ajax('home/index/result', {
                                code: Page.code
                            },
                            function(data) {
                                if (data == 'error') {
                                    Page.init();
                                    return;
                                }
                                if (parseInt(data.game_id) === 3) {
                                    if (win.version == '1.0.0') {
                                        Page.createRanking(data,
                                            function(data) {
                                                var img = document.createElement('img');
                                                img.className = 'room-gameover';
                                                img.src = data;
                                                img.onload = function() {
                                                    document.body.appendChild(img);
                                                    win.closeLoading();
                                                };
                                            });
                                    } else if (win.version == '2.0.0') {
                                        Page.createRanking(data,
                                            function(d) {
                                                var img = new Image();
                                                img.className = 'room-gameover ranking-img';
                                                img.src = d;
                                                img.onload = function() {
                                                    if (document.getElementsByClassName('body')[0]) {
                                                        document.body.removeChild(document.getElementsByClassName('body')[0]);
                                                    }
                                                    document.body.style.backgroundColor = '#000000';
                                                    document.body.style.minHeight = 'initial';
                                                    document.body.appendChild(img);
                                                    var div = document.createElement('div');
                                                    div.className = 'search-number-box';
                                                    document.body.appendChild(div);
                                                    var detailedBtn = '<a class="search-number-box-btn" href="pkdetailed.html?code=' + Page.code + '" style="position: absolute;"></a>';
                                                    div.insertAdjacentHTML("beforeend", detailedBtn);
                                                    win.closeLoading();
                                                    getRankingSix();
                                                };
                                            });
                                    }
                                } else if (parseInt(data.game_id) === 7) {
                                    if (win.version == '1.0.0') {
                                        Page.createRanking(data,
                                            function(data) {
                                                var img = document.createElement('img');
                                                img.className = 'room-gameover';
                                                img.src = data;
                                                img.onload = function() {
                                                    document.body.appendChild(img);
                                                    win.closeLoading();
                                                };
                                            });
                                    } else if (win.version == '2.0.0') {
                                        Page.createRanking(data,
                                            function(d) {
                                                var img = new Image();
                                                img.className = 'room-gameover ranking-img';
                                                img.src = d;
                                                img.onload = function() {
                                                    document.body.style.backgroundColor = '#000000';
                                                    document.body.style.minHeight = 'initial';
                                                    document.body.appendChild(img);
                                                    var div = document.createElement('div');
                                                    div.className = 'search-number-box';
                                                    document.body.appendChild(div);
                                                    var detailedBtn = '<a class="search-number-box-btn" href="pkdetailed.html?code=' + Page.code + '" style="position: absolute;"></a>';
                                                    div.insertAdjacentHTML("beforeend", detailedBtn);
                                                    getRankingSix();
                                                    win.closeLoading();
                                                };
                                            });
                                    }
                                } else if (parseInt(data.game_id) === 8 || parseInt(data.game_id) === 9) {
                                    canvasRanking(data,
                                        function(d) {
                                            var img = document.createElement('img');
                                            img.className = 'room-gameover ranking-img';
                                            img.setAttribute('src', d);
                                            img.onload = function() {
                                                document.body.appendChild(img);
                                                var div = document.createElement('div');
                                                div.className = 'search-number-box';
                                                document.body.appendChild(div);
                                                win.closeLoading();
                                                var detailedBtn = '<a class="search-number-box-btn" href="pkdetailed.html?code=' + Page.code + '" style="position: absolute;"></a>';
                                                div.insertAdjacentHTML("beforeend", detailedBtn);
                                                $('.body').remove();
                                                $('body').css({
                                                    'background': '#000000',
                                                    'min-height': 'initial'
                                                });
                                                getRankingSix();
                                            };
                                        });
                                } else {
                                    if (win.version == '1.0.0') {
                                        createRanking(data,
                                            function(d) {
                                                var img = new Image();
                                                img.src = d;
                                                if (parseInt(data.users.length) > 6) {
                                                    img.className = 'room-gameover-ten';
                                                } else {
                                                    img.className = 'room-gameover';
                                                }
                                                img.onload = function() {
                                                    document.body.appendChild(img);
                                                    win.closeLoading();
                                                    if (document.getElementsByClassName('body')[0]) {
                                                        document.body.removeChild(document.getElementsByClassName('body')[0]);
                                                    }
                                                    document.body.style.backgroundColor = '#000000';
                                                    document.body.style.minHeight = 'initial';
                                                    if (typeof(jQuery) != 'undefined') $(document.body).off('touchmove');
                                                };
                                            });
                                    } else if (win.version == '2.0.0') {
                                        liuliuCreateRanking(data,
                                            function(d) {
                                                var img = document.createElement('img');
                                                if (parseInt(data.users.length) > 6) {
                                                    img.className = 'room-gameover-ten ranking-img';
                                                } else {
                                                    img.className = 'room-gameover ranking-img';
                                                }
                                                img.src = d;
                                                img.onload = function() {
                                                    if (document.getElementsByClassName('body')[0]) {
                                                        document.body.removeChild(document.getElementsByClassName('body')[0]);
                                                    }
                                                    document.body.style.backgroundColor = '#000000';
                                                    document.body.style.minHeight = 'initial';
                                                    document.body.appendChild(img);
                                                    var div = document.createElement('div');
                                                    div.className = 'search-number-box';
                                                    document.body.appendChild(div);
                                                    var detailedBtn = '<a class="search-number-box-btn" href="pkdetailed.html?code=' + Page.code + '" style="position: absolute;"></a>';
                                                    div.insertAdjacentHTML("beforeend", detailedBtn);
                                                    win.closeLoading();
                                                    if (typeof(jQuery) != 'undefined') $(document.body).off('touchmove');
                                                    getRankingSix();
                                                };
                                            });
                                    }
                                }
                            });
                    } else if (d.info == 2) {
                        alert2('该房间人数已满',
                            function() {
                                wx.closeWindow();
                            })
                    }
                } else if (typeof(d.member) != 'undefined') {
                    if (d.member == 1) {
                        var code = '<div class="request-member-mask">';
                        code += '<div class="requst-member">';
                        code += '<div class="text">你不是该房主的好友,无法加入房间；</div>';
                        code += '<div class="room-user flex-cont">';
                        code += '<div class="room-user-path"><img id="roomUserPath" src="' + d.room_owner.path + '" onerror="this.src=\'../images/ucenter/user.png\'"></div>';
                        code += '<div class="room-user-name" id="roomUserName">' + d.room_owner.nickname + '</div>';
                        code += '</div>';
                        code += '<div class="text">是否申请成为好友？</div>';
                        code += '<div class="button" id="button">';
                        code += '<div class="request-btn" id="requestBtn">确定</div>';
                        code += '</div>';
                        code += '</div>';
                        code += '</div>';
                        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", code);
                        win.closeLoading();
                        document.getElementById('requestBtn').onclick = function() {
                            document.getElementById('button').innerHTML = '<div class="request-btn request-btn2">申请中</div>';
                            ajax('home/user/applyForFriend', {
                                    user_id: d.room_owner.id
                                },
                                function(d) {
                                    if (d.status == 1) {} else {}
                                })
                        }
                    } else if (d.member == 2) {
                        var code = '<div class="request-member-mask">';
                        code += '<div class="requst-member">';
                        code += '<div class="text">你不是该房主的好友,无法加入房间；</div>';
                        code += '<div class="room-user flex-cont">';
                        code += '<div class="room-user-path"><img id="roomUserPath" src="' + d.room_owner.path + '" onerror="this.src=\'../images/ucenter/user.png\'"></div>';
                        code += '<div class="room-user-name" id="roomUserName">' + d.room_owner.nickname + '</div>';
                        code += '</div>';
                        code += '<div class="text">是否申请成为好友？</div>';
                        code += '<div class="button" id="button">';
                        code += '<div class="request-btn request-btn2">申请中</div>';
                        code += '</div>';
                        code += '</div>';
                        code += '</div>';
                        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", code);
                    }
                } else {return;
                }
            });
    },
    reload: function() {
        if (/[\?\&]q=[0-9\.]+/.test(location.href)) location.href = location.href.replace(/([\?\&]q=)[0-9\.]+/, '$1' + Math.random());
        else location.href = location.href + (location.href.indexOf('?') > 0 ? '&': '?') + 'q=' + Math.random();
    }
};
var user = null;
var ws = {};
window.onresize = function() {
    win.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    win.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    win.reset(getRankingSix());
};
function alert2(msg, fn, style, sec) {
    style = style || 'success';
    if (typeof(fn) == 'string') {
        style = fn;
    }
    if (!sec) {
        if (style == 'error' || style == 'puncherror') {
            sec = 9;
        } else {
            sec = 0;
        }
    }
    var box = document.createElement('div');
    box.className = 'resourceBox ' + style;
    box.id = 'alertBox';
    box.innerHTML = '<div class="context">' + msg + '</div>';
    document.getElementsByTagName('body')[0].appendChild(box);
    var h = win.width / 360 * 100;
    box.style.opacity = 1;
    box.style.marginTop = -1 * (box.offsetHeight + h) / 2 + 'px';
    if (sec >= 9) {
        var alertBoxLay = document.createElement('div');
        alertBoxLay.className = 'alertBoxLay';
        document.getElementsByTagName('body')[0].appendChild(alertBoxLay);
        var BtnA = document.createElement('a');
        BtnA.innerText = '我知道了';
        BtnA.setAttribute('href', 'javascript:void(0);');
        BtnA.className = 'closed';
        box.appendChild(BtnA);
        alertBoxLay.addEventListener('click',
            function() {
                box.style.opacity = 0;
                box.style.marginTop = -1 * (box.offsetHeight + h) + 'px';
                this.style.opacity = 0;
                setTimeout(function() {
                        document.getElementsByTagName('body')[0].removeChild(box);
                        document.getElementsByTagName('body')[0].removeChild(alertBoxLay);
                        if (typeof(fn) == 'function') fn();
                    },
                    500);
            })
    } else {
        setTimeout(function() {
                box.style.opacity = 0;
                box.style.marginTop = -1 * (box.offsetHeight + h) + 'px';
                setTimeout(function() {
                        document.getElementsByTagName('body')[0].removeChild(box);
                        if (typeof(fn) == 'function') fn();
                    },
                    500);
            },
            1000 + sec * 1000);
    }
}
function getRankingSix() {
    if (document.getElementsByClassName('ranking-img')[0] && document.getElementsByClassName('search-number-box')[0]) {
        var div = document.getElementsByClassName('search-number-box')[0];
        var imag = document.getElementsByClassName('ranking-img')[0];
        var aBtn = document.getElementsByClassName('search-number-box-btn')[0];
        var a = getNaturalSize(imag).width;
        var b = getNaturalSize(imag).height;
        var c = imag.offsetWidth;
        var d = imag.offsetHeight;
        var index = (parseInt(a) / parseInt(b)) / (parseInt(c) / parseInt(d));
        if (parseInt(win.gameId) === 8 || parseInt(win.gameId) === 9) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (228 / a) * 2 + 'px';
                aBtn.style.height = b / a * c * (68 / b) * 2 + 'px';
                aBtn.style.left = c * (420 / a) * 2 + 'px';
                aBtn.style.top = b / a * c * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (228 / a) * 2 + 'px';
                aBtn.style.height = d * (68 / b) * 2 + 'px';
                aBtn.style.left = a / b * d * (420 / a) * 2 + 'px';
                aBtn.style.top = d * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (228 / a) * 2 + 'px';
                aBtn.style.height = d * (68 / b) * 2 + 'px';
                aBtn.style.left = c * (420 / a) * 2 + 'px';
                aBtn.style.top = d * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            }
        } else if (parseInt(win.gameId) === 3) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (455 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 110) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (455 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (455 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            }
        } else if (parseInt(win.gameId) === 7) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (441 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 150) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (441 / a) + 'px';
                aBtn.style.top = d * ((b - 150) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (441 / a) + 'px';
                aBtn.style.top = d * ((b - 150) / b) + 'px';
            }
        } else {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (419 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 110) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (419 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (419 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            }
        }
        function getNaturalSize(Domlement) {
            var natureSize = {};
            if (window.naturalWidth && window.naturalHeight) {
                natureSize.width = Domlement.naturalWidth;
                natureSize.height = Domlement.naturalHeight;
            } else {
                var img = new Image();
                img.src = Domlement.src;
                natureSize.width = img.width;
                natureSize.height = img.height;
            }
            return natureSize;
        }
    }
}
function usersRand(users, user_id) {
    var count = Math.round(Math.random() * users.length) + users.length * 3;
    var x = users.indexOf(user_id);
    var n = (count - x - 1) % users.length;
    var i = 0; (function xxx() {
        $('.user-info').removeClass('choosed');
        $('.user-info[data-id="' + users[n] + '"]').addClass('choosed');
        n++;
        i++;
        if (i == count) return;
        if (n >= users.length) n = 0;
        setTimeout(xxx, (1000 + (users.length * 500)) / count);
    })();
}
function usersRand2(users, user_id) {
    var usersLength = users.length;
    var count = usersLength + 10;
    var x = users.indexOf(user_id);
    var n = (count - x - 1) % usersLength;
    var i = 0;
    var time = 1000 + (usersLength * 500); (function xxx() {
        $('.user-info').removeClass('choosed');
        $('.user-info[data-id="' + users[n] + '"]').addClass('choosed');
        n++;
        i++;
        if (i == count) return;
        if (n >= usersLength) n = 0;
        setTimeout(xxx, (parseInt(time) / count));
    })();
}
function Gold(source, target) {
    if (source == "" || target == "") {
        return;
    }
    var id_bol;
    if (Object.prototype.toString.call(source) == '[object Array]') {
        id_bol = true;
    } else {
        id_bol = false;
    }
    var count = 15;
    var gold_w = 12;
    var gold_h = 12;
    var obj = [];
    var str = [];
    var str1 = [];
    var bol = false;
    var index = 39;
    var _index = 0;
    var index1_num = 0;
    var music_bol = true;
    var $canvas = $('<canvas width="' + $("body").width() + '" height="' + $("body").height() + ' "class="canvas_gold"></canvas>').appendTo('body');
    var can = $canvas.get(0).getContext("2d");
    if (id_bol) {
        var $target = $('.user-info[data-id="' + target + '"]');
        for (var z = 0; z < source.length; z++) {
            var $source = $('.user-info[data-id="' + source[z] + '"]');
            var coins = [];
            var _str_a = [];
            var _str_b = [];
            for (var i = 0; i < count; i++) {
                var coin = new jinbi(gold_w, gold_h);
                coin.x = $source.position().left + Math.round(Math.random() * ($source.width() * 0.62));
                coin.y = $source.position().top + Math.round(Math.random() * ($source.width() * 0.62));
                coins.push(coin);
                _str_a.push({
                    "x": coin.x,
                    "y": coin.y
                });
                _str_b.push({
                    "x": $target.position().left + Math.round(Math.random() * ($target.width() * 0.62)),
                    "y": $target.position().top + Math.round(Math.random() * ($target.width() * 0.62))
                });
            }
            obj.push(coins);
            str.push(_str_a);
            str1.push(_str_b);
        }
    } else {
        var $source = $('.user-info[data-id="' + source + '"]');
        for (var z = 0; z < target.length; z++) {
            var $target = $('.user-info[data-id="' + target[z] + '"]');
            var coins = [];
            var _str_a = [];
            var _str_b = [];
            for (var i = 0; i < count; i++) {
                var coin = new jinbi(gold_w, gold_h);
                coin.x = $source.position().left + Math.round(Math.random() * ($source.width() * 0.62));
                coin.y = $source.position().top + Math.round(Math.random() * ($source.width() * 0.62));
                coins.push(coin);
                _str_a.push({
                    "x": coin.x,
                    "y": coin.y
                });
                _str_b.push({
                    "x": $target.position().left + Math.round(Math.random() * ($target.width() * 0.62)),
                    "y": $target.position().top + Math.round(Math.random() * ($target.width() * 0.62))
                });
            }
            obj.push(coins);
            str.push(_str_a);
            str1.push(_str_b);
        }
    }
    var img = new Image();
    img.src = "http://img.lfzgame.com/images/niuniu/gold.png";
    img.onload = function() {
        move();
    }
    function move() {
        can.clearRect(0, 0, $canvas.width(), $canvas.height());
        if (_index % 2 == 0 && index1_num < count) {
            index1_num++;
        }
        for (var j = 0; j < obj.length; j++) {
            for (var k = 0; k < index1_num; k++) {
                obj[j][k].index++;
                if (obj[j][k].index <= index) {
                    obj[j][k].x += (str1[j][k]["x"] - str[j][k]["x"]) / index;
                    obj[j][k].y += (str1[j][k]["y"] - str[j][k]["y"]) / index;
                    obj[j][k].draw();
                }
                if (obj[j][0].index == index / 3) {
                    if (music_bol) {
                        sound.play('gold');
                        music_bol = false;
                    }
                }
            }
        }
        if (obj[0][0].index == index) {
            if (id_bol) {
                $('.user-info[data-id="' + target + '"]').addClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.user-info[data-id="' + target[i] + '"]').addClass('flash');
                }
            }
        } else if (obj[0][count - 1].index == index) {
            if (id_bol) {
                $('.user-info[data-id="' + target + '"]').removeClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.user-info[data-id="' + target[i] + '"]').removeClass('flash');
                }
            }
        }
        _index++;
        if (obj[0][count - 1].index > index) {
            bol = true;
            setTimeout(function() {
                    $canvas.remove();
                },
                500)
        }
        if (!bol) {
            setTimeout(move, 15)
        }
    }
    function jinbi(w, h) {
        var img = new Image();
        img.src = "http://img.lfzgame.com/images/niuniu/gold.png";
        this.play = img;
        this.x = 0;
        this.y = 0;
        this.index = 0;
        this.width1 = w;
        this.height1 = h;
        this.draw = function() {
            can.drawImage(this.play, 0, 0, this.play.width, this.play.height, this.x, this.y, this.width1, this.height1);
        }
    }
}
$.fn.overscroll = function() {
    this.on('touchstart',
        function(event) {
            $(document.body).off('touchmove');
        });
    this.on('touchend',
        function(event) {
            $(document.body).on('touchmove',
                function(evt) {
                    evt.preventDefault();
                });
        });
};
$.fn.movescroll = function() {
    this[0].startTop = Math.round(this.position().top);
    this[0].endTop = Math.round(this.parent().height() - this.height());
    this.on('mousewheel',
        function(ev) {
            var ev = ev || window.event;
            var detail = ev.originalEvent.wheelDelta || 0;
            if (detail > 0) {
                var top = $(this).position().top + 0.1 * win.height;
            }
            if (detail < 0) {
                var top = $(this).position().top - 0.1 * win.height;
            }
            var startTop = this.startTop;
            var endTop = this.endTop;
            if (top > startTop || endTop > 0) top = startTop;
            else if (top < endTop) top = endTop;
            $(this).css('top', top);
        });
    this.on('touchstart',
        function(ev) {
            var touch = ev.touches[0];
            this.thisY = Number(touch.pageY);
            this.thisTop = $(this).position().top;
            this._offset = false;
        });
    this.on('touchmove',
        function(ev) {
            var touch = ev.touches[0];
            var y = Number(touch.pageY);
            var top = this.thisTop;
            this._offset = y - this.thisY;
            top += this._offset;
            $(this).css('top', top);
            this.thisY = y;
            this.thisTop = top;
        });
    this.on('touchend',
        function(ev) {
            if (this._offset === false) return;
            var top = this.thisTop;
            var _top = top;
            var startTop = this.startTop;
            var endTop = this.endTop;
            if (top > startTop || endTop > 0) _top = startTop;
            else if (top < endTop) _top = endTop;
            if (top != _top) $(this).animate({
                    top: _top
                },
                'fast');
            else if (Math.abs(this._offset) > 5 && isIOS()) {
                var offset = Math.round(this._offset);
                var that = $(this); (function action() {
                    if (offset > 0) offset--;
                    else offset++;
                    var top = that.position().top + offset;
                    that.css('top', top);
                    var _top = 0;
                    if (top > startTop || endTop > 0) _top = startTop;
                    else if (top < endTop) _top = endTop;
                    if (Math.abs(offset) > 0 && _top == 0) {
                        requestAnimationFrame(action);
                    } else if (_top != 0) {
                        that.animate({
                                top: _top
                            },
                            'fast');
                    }
                })();
            }
        });
};
var sound = {
    audioContext: null,
    audioBuffers: [],
    isloaded: false,
    isBgm: false,
    o: {},
    source: [],
    initModule: function() {
        this.audioBuffers = [];
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
        this.audioContext = new window.AudioContext();
    },
    stopSound: function(name) {
        var buffer = this.audioBuffers[name];
        if (buffer) {
            if (buffer.source) {
                buffer.source.stop(0);
                buffer.source = null;
            }
        }
    },
    playSound: function(name, isLoop) {
        var buffer = this.audioBuffers[name];
        if (buffer) {
            WeixinJSBridge.invoke('getNetworkType', {},
                function(e) {
                    buffer.source = null;
                    buffer.source = sound.audioContext.createBufferSource();
                    buffer.source.buffer = buffer.buffer;
                    buffer.source.loop = false;
                    var gainNode = sound.audioContext.createGain();
                    if (isLoop == true) {
                        buffer.source.loop = true;
                        gainNode.gain.value = 0.7;
                    } else {
                        gainNode.gain.value = 1.0;
                    }
                    buffer.source.connect(gainNode);
                    gainNode.connect(sound.audioContext.destination);
                    buffer.source.start(0);
                });
        }
    },
    initSound: function(arrayBuffer, name) {
        this.audioContext.decodeAudioData(arrayBuffer,
            function(buffer) {
                sound.audioBuffers[name] = {
                    "name": name,
                    "buffer": buffer,
                    "source": null
                };
                if (name == "bgm") {
                    sound.isloaded = true;
                    sound.playSound(name, true);
                }
            },
            function(e) {
                console.warn('Error decoding file');
            });
    },
    loadAudioFile: function(url, name) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function(e) {
            sound.initSound(xhr.response, name);
        };
        xhr.send();
    },
    load: function() {
        if (this.isloaded) return;
        for (var i in this.source) {
            this.loadAudioFile(this.source[i], i);
        }
    },
    play: function(num, sex) {
        if (!storage.get('pausemusic')) {
            if (sex) {
                var name = 'sound_';
                if (sex == 1) name += '1';
                else name += '2';
                if (/^\d+$/.test(num)) name += '_' + num;
                else name += num;
                this.playSound(name);
            } else {
                if (num) this.playSound(num);
            }
        }
    }
};
sound.initModule();
document.addEventListener("visibilitychange",
    function() {
        if (!document.hidden) {
            if (!storage.get('pausemusic')) sound.playSound('bgm', true);
        } else {
            if (!storage.get('pausemusic')) sound.stopSound('bgm');
        }
    });
function createRanking(data, func) {
    win.gameId = data.game_id;
    var users = data.users;
    var game_id = data.game_id;
    var room_number = data.room_number;
    var num = data.num;
    var sum = data.sum;
    var datetime = data.datetime;
    var width = 750;
    var height = 1216;
    var pics = ['http://cdn.lfzgame.com/images/ranking_' + game_id + '_bg.jpg', 'http://cdn.lfzgame.com/images/people_bg.png', 'http://cdn.lfzgame.com/images/ranking_icon.png'];
    if (users.length > 6) {
        pics.push('http://cdn.lfzgame.com/images/people_bg2.jpg');
        pics.push('http://cdn.lfzgame.com/images/people_bg3.jpg');
        height += 102 * (users.length - 6);
    }
    for (var i in users) {
        if (/\/\/[064]{1,2}$/.test(users[i].path)) pics.push('images/default_head.png');
        else pics.push(users[i].path.replace(/\/0$/, '/64').replace('https://wx.qlogo.cn/', 'http://113.96.232.104/'));
    }
    var count = 0,
        imgs = [];
    for (var i in pics) {
        if (XMLHttpRequest) var xhr = new XMLHttpRequest();
        else var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        xhr._index = i;
        xhr.open("get", pics[i], true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var img = document.createElement("img");
            if (this.status == 200) {
                img.src = window.URL.createObjectURL(this.response);
            } else {
                this.src = 'images/default_head.png';
            }
            imgs[this._index] = img;
            img.onload = function(e) {
                count++;
                if (count >= pics.length) draw();
            };
        };
        xhr.onerror = function() {
            var img = document.createElement("img");
            img.src = 'images/default_head.png';
            imgs[this._index] = img;
            img.onload = function(e) {
                count++;
                if (count >= pics.length) draw();
            };
        };
        xhr.send();
    }
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    function draw() {
        context.drawImage(imgs[0], 0, 0, width, width / 750 * 1216);
        var text = '房间号：' + room_number + '                     ' + datetime + '   ' + num + '/' + sum + '局';
        context.font = "19px 微软雅黑";
        context.textAlign = 'center';
        context.fillStyle = "#a28080";
        context.fillText(text, 375, 412);
        for (var i in users) {
            if (i >= 6) context.drawImage(imgs[3], 0, 430 + i * 102, 750, 102);
            var n = parseInt(i) + parseInt(users.length > 6 ? 5 : 3);
            context.drawImage(imgs[n], 170, 446 + i * 102, 59, 59);
            context.drawImage(imgs[1], 129, 430 + i * 102, 490, 90);
            var textwidth = 250;
            context.font = "24px 微软雅黑";
            context.textAlign = 'start';
            context.fillStyle = "#666666";
            var arr = users[i].nickname.split('');
            var txt = '',
                row = [];
            for (var j in arr) {
                if (context.measureText(txt).width >= textwidth) {
                    row.push(txt);
                    txt = '';
                }
                txt += arr[j];
            }
            if (txt != '') row.push(txt);
            if (row.length == 1) {
                context.fillText(row[0], 240, 482 + 102 * i);
            } else {
                context.fillText(row[0], 240, 470 + 102 * i);
                context.fillText(row[1], 240, 498 + 102 * i);
            }
            context.font = "36px 微软雅黑";
            context.textAlign = 'center';
            if (users[i]['value'] > 0) {
                context.fillStyle = "#cd5908";
                context.fillText('+' + users[i]['value'], 560, 490 + 102 * i);
            } else if (users[i]['value'] < 0) {
                context.fillStyle = "#32b16c";
                context.fillText(users[i]['value'], 560, 490 + 102 * i);
            } else {
                context.fillStyle = "#989898";
                context.fillText('0', 560, 490 + 102 * i);
            }
            if (users[i]['value'] == users[0]['value']) {
                context.drawImage(imgs[2], 108, 430 + i * 102, 51, 84);
            }
        }
        if (i >= 6) context.drawImage(imgs[4], 0, 430 + (++i) * 102, 750, 175);
        if (typeof(func) == 'function') func(canvas.toDataURL("image/png"));
    }
}
function liuliuCreateRanking(data, func) {
    win.gameId = data.game_id;
    var users = data.users;
    var game_id = data.game_id;
    var room_number = data.room_number;
    var num = data.num;
    var sum = data.sum;
    var datetime = data.datetime;
    var width = 750;
    var height = 1216;
    var pics = ['http://cdn.lfzgame.com/images/common/ranking_' + game_id + '_bg.jpg', 'http://cdn.lfzgame.com/images/people_bg.png', 'http://cdn.lfzgame.com/images/ranking_icon.png'];
    if (users.length > 6) {
        pics.push('http://cdn.lfzgame.com/images/common/people_bg2.jpg');
        pics.push('http://cdn.lfzgame.com/images/common/people_bg3.jpg');
        height += 102 * (users.length - 6);
    }
    for (var i in users) {
        if (/\/\/[064]{1,2}$/.test(users[i].path)) pics.push('images/default_head.png');
        else pics.push(users[i].path.replace(/\/0$/, '/64').replace('https://wx.qlogo.cn/', 'http://113.96.232.104/'));
    }
    var count = 0,
        imgs = [];
    for (var i in pics) {
        if (XMLHttpRequest) var xhr = new XMLHttpRequest();
        else var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        xhr._index = i;
        xhr.open("get", pics[i], true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var img = document.createElement("img");
            if (this.status == 200) {
                img.src = window.URL.createObjectURL(this.response);
            } else {
                this.src = 'images/default_head.png';
            }
            imgs[this._index] = img;
            img.onload = function(e) {
                count++;
                if (count >= pics.length) draw();
            };
        };
        xhr.onerror = function() {
            var img = document.createElement("img");
            img.src = 'images/default_head.png';
            imgs[this._index] = img;
            img.onload = function(e) {
                count++;
                if (count >= pics.length) draw();
            };
        };
        xhr.send();
    }
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    function draw() {
        context.drawImage(imgs[0], 0, 0, width, width / 750 * 1216);
        var text = '房间号：' + room_number + '                     ' + datetime + '   ' + num + '/' + sum + '局';
        context.font = "19px 微软雅黑";
        context.textAlign = 'center';
        context.fillStyle = "#a28080";
        context.fillText(text, 375, 412);
        for (var i in users) {
            if (i >= 6) context.drawImage(imgs[3], 0, 430 + i * 102, 750, 102);
            var n = parseInt(i) + parseInt(users.length > 6 ? 5 : 3);
            context.drawImage(imgs[n], 170, 446 + i * 102, 59, 59);
            context.drawImage(imgs[1], 129, 430 + i * 102, 490, 90);
            var textwidth = 250;
            context.font = "24px 微软雅黑";
            context.textAlign = 'start';
            context.fillStyle = "#666666";
            var arr = users[i].nickname.split('');
            var txt = '',
                row = [];
            for (var j in arr) {
                if (context.measureText(txt).width >= textwidth) {
                    row.push(txt);
                    txt = '';
                }
                txt += arr[j];
            }
            if (txt != '') row.push(txt);
            if (row.length == 1) {
                context.fillText(row[0], 240, 482 + 102 * i);
            } else {
                context.fillText(row[0], 240, 470 + 102 * i);
                context.fillText(row[1], 240, 498 + 102 * i);
            }
            context.font = "36px 微软雅黑";
            context.textAlign = 'center';
            if (users[i]['value'] > 0) {
                context.fillStyle = "#cd5908";
                context.fillText('+' + users[i]['value'], 560, 490 + 102 * i);
            } else if (users[i]['value'] < 0) {
                context.fillStyle = "#32b16c";
                context.fillText(users[i]['value'], 560, 490 + 102 * i);
            } else {
                context.fillStyle = "#989898";
                context.fillText('0', 560, 490 + 102 * i);
            }
            if (users[i]['value'] == users[0]['value']) {
                context.drawImage(imgs[2], 108, 430 + i * 102, 51, 84);
            }
        }
        if (i >= 6) context.drawImage(imgs[4], 0, 430 + (++i) * 102, 750, 175);
        if (typeof(func) == 'function') func(canvas.toDataURL("image/png"));
    }
}
function canvasRanking(data, func) {
    win.gameId = data.game_id;
    var $canvas = $('<canvas id="canvas" width="' + 750 * 2 + '" height="' + 1216 * 2 + ' "></canvas>').appendTo('body').hide();
    var can = $canvas.get(0).getContext("2d");
    var str = ["http://cdn.lfzgame.com/images/bull/rank_bg.jpg", "http://cdn.lfzgame.com/images/bull/rank_frame62.png", 'http://cdn.lfzgame.com/images/bull/scoresRank3.png', 'http://cdn.lfzgame.com/images/bull/rank_bigwinner2.png', 'http://cdn.lfzgame.com/images/bull/score_search1.png'];
    var index = 0,
        arr = [];
    for (var i in str) {
        if (XMLHttpRequest) var xhr = new XMLHttpRequest();
        else var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        xhr._index = i;
        xhr.open("get", str[i], true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var img = document.createElement("img");
            if (this.status == 200) {
                img.src = window.URL.createObjectURL(this.response);
            } else {
                this.src = 'images/default_head.png';
            }
            arr[this._index] = img;
            img.onload = function(e) {
                index++;
                if (index >= str.length) {
                    if (data.users) {
                        if (data.users.length > 6) {
                            canvasStart9()
                        } else {
                            canvasStart()
                        }
                    }
                }
            };
        };
        xhr.onerror = function() {
            var img = document.createElement("img");
            img.src = 'images/default_head.png';
            arr[this._index] = img;
            img.onload = function(e) {
                index++;
                if (index >= str.length) {
                    if (data.users) {
                        if (data.users.length > 6) {
                            canvasStart9()
                        } else {
                            canvasStart()
                        }
                    }
                }
            };
        };
        xhr.send();
    }
    function canvasStart() {
        can.drawImage(arr[0], 0, 0, 750 * 2, 1216 * 2);
        can.drawImage(arr[1], 115 * 2, 41 * 2, 520 * 2, 611 * 520 / 360 * 2);
        can.drawImage(arr[2], 100 * 2, (41 + 611 * 520 / 360 + 68) * 2, 228 * 2, 66 * 2);
        can.drawImage(arr[4], 420 * 2, (41 + 611 * 520 / 360 + 68) * 2, 228 * 2, 66 * 2);
        can.lineWidth = 1;
        can.strokeStyle = "#ffffff";
        can.fillStyle = '#554A2A';
        roundRect(140 * 2, 243 * 2, 475 * 2, 35 * 2, 30).stroke();
        can.fill();
        can.font = 20 * 2 + "px 微软雅黑";
        can.fillStyle = '#ffcd06';
        can.textBaseline = 'bottom';
        can.fillText('房间号:' + data.room_number, 150 * 2, 270 * 2);
        can.fillText(data.datetime, 335 * 2, 270 * 2);
        can.fillText(data.num + '局', 550 * 2, 270 * 2);
        if (data.users.length > 0) {
            for (var i in data.users) {
                var textwidth = 500;
                can.fillStyle = '#000000';
                can.fillRect(134 * 2, 303 * 2 + (5 + 75 * 160 / 130) * 2 * i, 482 * 2, 88 * 2);
                can.font = 29 * 2 + "px 微软雅黑";
                can.textBaseline = 'middle';
                if (parseInt(data.users[i].value) > 0) {
                    var value = '+' + data.users[i].value;
                    can.fillStyle = '#FFBB00';
                    var nameArr = data.users[i].nickname.split('');
                    var txt = '',
                        row = [];
                    for (var j in nameArr) {
                        if (can.measureText(txt).width >= textwidth) {
                            row.push(txt);
                            txt = '';
                        }
                        txt += nameArr[j];
                    }
                    if (txt != '') row.push(txt);
                    if (row.length == 1) {
                        can.fillText(row[0], 209 * 2, 347 * 2 + (5 + 75 * 160 / 130) * 2 * i);
                    } else {
                        can.fillText(row[0], 209 * 2, 347 * 2 + ((5 + 75 * 160 / 130) * 2 * i) - 37);
                        can.fillText(row[1], 209 * 2, 347 * 2 + ((5 + 75 * 160 / 130) * 2 * i) + 33);
                    }
                    can.fillText(value, 510 * 2, 347 * 2 + (5 + 75 * 160 / 130) * 2 * i);
                } else {
                    can.fillStyle = '#B3B2AD';
                    var nameArr = data.users[i].nickname.split('');
                    var txt = '',
                        row = [];
                    for (var j in nameArr) {
                        if (can.measureText(txt).width >= textwidth) {
                            row.push(txt);
                            txt = '';
                        }
                        txt += nameArr[j];
                    }
                    if (txt != '') row.push(txt);
                    if (row.length == 1) {
                        can.fillText(row[0], 209 * 2, 347 * 2 + (5 + 75 * 160 / 130) * 2 * i);
                    } else {
                        can.fillText(row[0], 209 * 2, 347 * 2 + ((5 + 75 * 160 / 130) * 2 * i) - 37);
                        can.fillText(row[1], 209 * 2, 347 * 2 + ((5 + 75 * 160 / 130) * 2 * i) + 33);
                    }
                    can.fillText(data.users[i].value, 510 * 2, 347 * 2 + (5 + 75 * 160 / 130) * 2 * i);
                }
            }
            var maxArr = [];
            var max = parseInt(data.users[0].value);
            for (var j = 1; j < data.users.length; j++) {
                if (max < parseInt(data.users[j].value)) {
                    max = parseInt(data.users[j].value);
                }
            }
            for (var k in data.users) {
                if (max == parseInt(data.users[k].value)) {
                    maxArr.push(k);
                }
            }
            for (var m in maxArr) {
                can.drawImage(arr[3], 134 * 2, 293 * 2 + (5 + 75 * 160 / 130) * 2 * maxArr[m], 75 * 2, 75 * 160 / 130 * 2);
            }
        }
        function roundRect(x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            can.beginPath();
            can.moveTo(x + r, y);
            can.arcTo(x + w, y, x + w, y + h, r);
            can.arcTo(x + w, y + h, x, y + h, r);
            can.arcTo(x, y + h, x, y, r);
            can.arcTo(x, y, x + w, y, r);
            can.closePath();
            return can;
        }
        if (typeof(func) == 'function') {
            func(canvas.toDataURL("image/png"));
            $('#canvas').remove();
        }
    }
    function canvasStart9() {
        can.drawImage(arr[0], 0, 0, 750 * 2, 1216 * 2);
        can.drawImage(arr[1], 115 * 2, 41 * 2, 520 * 2, 611 * 520 / 360 * 2);
        can.drawImage(arr[2], 100 * 2, (41 + 611 * 520 / 360 + 68) * 2, 228 * 2, 66 * 2);
        can.drawImage(arr[4], 420 * 2, (41 + 611 * 520 / 360 + 68) * 2, 228 * 2, 66 * 2);
        can.lineWidth = 1;
        can.strokeStyle = "#ffffff";
        can.fillStyle = '#554A2A';
        roundRect(140 * 2, 243 * 2, 475 * 2, 35 * 2, 30).stroke();
        can.fill();
        can.font = 20 * 2 + "px 微软雅黑";
        can.fillStyle = '#ffcd06';
        can.textBaseline = 'bottom';
        can.fillText('房间号:' + data.room_number, 150 * 2, 270 * 2);
        can.fillText(data.datetime, 335 * 2, 270 * 2);
        can.fillText(data.num + '局', 550 * 2, 270 * 2);
        if (data.users.length > 0) {
            for (var i in data.users) {
                var textwidth = 500;
                can.fillStyle = '#000000';
                can.fillRect(134 * 2, 303 * 2 + (5 + 49 * 160 / 130) * 2 * i, 482 * 2, 58 * 2);
                can.font = 29 * 2 + "px 微软雅黑";
                can.textBaseline = 'middle';
                if (parseInt(data.users[i].value) > 0) {
                    var value = '+' + data.users[i].value;
                    can.fillStyle = '#FFBB00';
                    can.fillText(value, 510 * 2, 332 * 2 + (5 + 49 * 160 / 130) * 2 * i);
                    var nameArr = data.users[i].nickname.split('');
                    var txt = '',
                        row = [];
                    for (var j in nameArr) {
                        if (can.measureText(txt).width >= textwidth) {
                            row.push(txt);
                            txt = '';
                        }
                        txt += nameArr[j];
                    }
                    if (txt != '') row.push(txt);
                    if (row.length == 1) {
                        can.fillText(row[0], 209 * 2, 332 * 2 + (5 + 49 * 160 / 130) * 2 * i);
                    } else {
                        can.font = 24 * 2 + "px 微软雅黑";
                        can.fillText(row[0], 209 * 2, 332 * 2 + ((5 + 49 * 160 / 130) * 2 * i) - 32);
                        can.fillText(row[1], 209 * 2, 332 * 2 + ((5 + 49 * 160 / 130) * 2 * i) + 25);
                    }
                } else {
                    can.fillStyle = '#B3B2AD';
                    can.fillText(data.users[i].value, 510 * 2, 332 * 2 + (5 + 49 * 160 / 130) * 2 * i);
                    var nameArr = data.users[i].nickname.split('');
                    var txt = '',
                        row = [];
                    for (var j in nameArr) {
                        if (can.measureText(txt).width >= textwidth) {
                            row.push(txt);
                            txt = '';
                        }
                        txt += nameArr[j];
                    }
                    if (txt != '') row.push(txt);
                    if (row.length == 1) {
                        can.fillText(row[0], 209 * 2, 332 * 2 + (5 + 49 * 160 / 130) * 2 * i);
                    } else {
                        can.font = 24 * 2 + "px 微软雅黑";
                        can.fillText(row[0], 209 * 2, 332 * 2 + ((5 + 49 * 160 / 130) * 2 * i) - 32);
                        can.fillText(row[1], 209 * 2, 332 * 2 + ((5 + 49 * 160 / 130) * 2 * i) + 25);
                    }
                }
            }
            var maxArr = [];
            var max = parseInt(data.users[0].value);
            for (var j = 1; j < data.users.length; j++) {
                if (max < parseInt(data.users[j].value)) {
                    max = parseInt(data.users[j].value);
                }
            }
            for (var k in data.users) {
                if (max == parseInt(data.users[k].value)) {
                    maxArr.push(k);
                }
            }
            for (var m in maxArr) {
                can.drawImage(arr[3], 134 * 2, 293 * 2 + (5 + 49 * 160 / 130) * 2 * maxArr[m], 49 * 2, 49 * 160 / 130 * 2);
            }
        }
        function roundRect(x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            can.beginPath();
            can.moveTo(x + r, y);
            can.arcTo(x + w, y, x + w, y + h, r);
            can.arcTo(x + w, y + h, x, y + h, r);
            can.arcTo(x, y + h, x, y, r);
            can.arcTo(x, y, x + w, y, r);
            can.closePath();
            return can;
        }
        if (typeof(func) == 'function') {
            func(canvas.toDataURL("image/png"));
            $('#canvas').remove();
        }
    }
}
function Agreement() {
    var code = '<div class="window-masks agreement" id="agreement">';
    code += '<div class="border-opacity">';
    code += '<div class="container">';
    code += '    <i class="mask-icon mask-top"></i><i class="mask-icon mask-right"></i><i class="mask-icon mask-bottom"></i><i class="mask-icon mask-left"></i>';
    code += '    <div class="title"></div>';
    code += '    <div class="main">';
    code += '       <p>本游戏仅供娱乐， 严禁赌博，如发现有赌博行为，将封停账号并向公安机关举报。</p>';
    code += '       <p>游戏中使用到的房卡为游戏道具，不具有任何财产性功能，本公司对于用户所拥有的房卡不提供任何形式官方回购、直接或变相兑换现金或实物等服务或相关功能。</p>';
    code += '       <p>游戏仅供休闲娱乐使用，游戏中出现问题请联系客服。</p>';
    code += '    </div>';
    code += '<div class="sure" id="agreementSure">确定</div>';
    code += '    </div>';
    code += '    </div>';
    code += '</div>';
    document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", code);
    document.getElementById('agreementSure').onclick = function() {
        document.getElementsByTagName('body')[0].removeChild(document.getElementById('agreement'));
    };
    document.getElementById('agreement').onclick = function() {
        document.body.removeChild(document.getElementById('agreement'));
    };
}
function returnIndex(text) {
    var text = text || '确认返回主页？';
    var code = '<div class="window-masks return-index" id="returnIndex">';
    code += '<div class="border-opacity">';
    code += '<div class="container">';
    code += '<i class="mask-icon mask-top"></i><i class="mask-icon mask-right"></i><i class="mask-icon mask-bottom"></i><i class="mask-icon mask-left"></i>';
    code += '<div class="main">' + text + '</div>';
    code += '<div class="button">';
    code += '<div class="sure" id="returnIndexBtn">返回首页</div>';
    code += '<div class="cancel" id="cancelBtn">取消</div>';
    code += '</div>';
    code += '</div>';
    code += '</div>';
    code += '</div>';
    document.body.insertAdjacentHTML("beforeend", code);
    document.getElementById('returnIndexBtn').onclick = function() {
        location.href = 'index.html';
    };
    document.getElementById('cancelBtn').onclick = function() {
        document.body.removeChild(document.getElementById('returnIndex'));
    };
    document.getElementById('returnIndex').onclick = function() {
        document.body.removeChild(document.getElementById('returnIndex'));
    };
}
function getRuleScaleY(game_data) {
    var count = 0;
    for (var d in game_data) {
        if (game_data[d] != '' && game_data[d] != undefined && d != 'number') {
            count++;
        }
    }
    return (count - 5) * 30;
}
function generalRule(game_id, game_data, parent) {
    var data = game_data;
    var startPointY = 135;
    var startPointX = 33;
    var startValuePointX = 87;
    var spaceY = 30;
    var ruleJson = {
        '1': {
            'zhuang_type': {
                'text': '模式 :',
                'value': {
                    '1': '明牌抢庄',
                    '2': '通比牛牛',
                    '3': '自由抢庄',
                    '4': '牛牛上庄',
                    '5': '固定庄家'
                }
            },
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '2': '2分',
                    '3': '3分',
                    '4': '4分',
                    '5': '5分',
                    '10': '10分',
                    '20': '20分'
                }
            },
            'card_rule': {
                'text': '规则 :',
                'value': {
                    '1': '牛牛×3 牛九×2 牛八×2',
                    '2': '牛牛×4 牛九×3 牛八×2 牛七×2'
                }
            },
            'hand_patterns': {
                'text': '牌型 :',
                'value': ['五花牛（5倍） ', '炸弹牛（6倍） ', '五小牛（8倍） ']
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '10': '10局房卡X1',
                    '20': '20局房卡X2'
                }
            },
            'zhuang_value': {
                'text': '上庄 :',
                'value': {
                    '0': '无',
                    '100': '100',
                    '300': '300',
                    '500': '500'
                }
            }
        },
        '2': {
            'end_points': {
                'text': '底分 :',
                'value': {
                    '2': '2分',
                    '4': '4分',
                    '8': '8分'
                }
            },
            'chip_rule': {
                'text': '分数 :',
                'value': {
                    '1': '2/4，4/8，8/16，10/20',
                    '2': '2/4，5/10，10/20，20/40'
                }
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '10': '10局房卡X1',
                    '20': '20局房卡X2'
                }
            },
            'upper_limit': {
                'text': '上限 :',
                'value': {
                    '0': '无',
                    '500': '500',
                    '1000': '1000',
                    '2000': '2000'
                }
            }
        },
        '3': {
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '3': '3分',
                    '5': '5分'
                }
            },
            'play_type': {
                'text': '玩法 :',
                'value': ['经典 ']
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '5': '5局房卡X1',
                    '10': '10局房卡X2',
                    '20': '20局房卡X4'
                }
            },
        },
        '4': {
            'zhuang_type': {
                'text': '模式 :',
                'value': {
                    '1': '明牌抢庄',
                    '2': '通比牛牛',
                    '3': '自由抢庄',
                    '4': '牛牛上庄',
                    '5': '固定庄家'
                }
            },
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '2': '2分',
                    '3': '3分',
                    '4': '4分',
                    '5': '5分',
                    '10': '10分',
                    '20': '20分'
                }
            },
            'card_rule': {
                'text': '规则 :',
                'value': {
                    '1': '牛牛×3 牛九×2 牛八×2',
                    '2': '牛牛×4 牛九×3 牛八×2 牛七×2'
                }
            },
            'hand_patterns': {
                'text': '牌型 :',
                'value': ['五花牛（5倍） ', '炸弹牛（6倍） ', '五小牛（8倍） ']
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '12': '12局房卡X2',
                    '24': '24局房卡X4'
                }
            },
            'zhuang_value': {
                'text': '上庄 :',
                'value': {
                    '0': '无',
                    '100': '100',
                    '300': '300',
                    '500': '500'
                }
            }
        },
        '5': {
            'end_points': {
                'text': '小盲/大盲 :',
                'value': {
                    '1': '        1/2',
                    '2': '        2/4'
                }
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '10': '10局房卡X2',
                    '20': '20局房卡X4'
                }
            },
            'end_points_rule': {
                'text': '前注 :',
                'value': {
                    '0': '无',
                    '1': '1倍小盲',
                    '2': '2倍小盲'
                }
            },
            'init_points': {
                'text': '初始分数 :',
                'value': {
                    '500': '       500',
                    '1000': '       1000',
                    '1500': '       1500',
                    '2000': '       2000'
                }
            }
        },
        '6': {
            'zhuang_type': {
                'text': '模式 :',
                'value': {
                    '1': '抢庄模式',
                    '2': '通比模式',
                    '3': '三公当庄',
                }
            },
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '2': '2分',
                    '3': '3分',
                    '4': '4分',
                    '5': '5分',
                    '10': '10分',
                    '20': '20分'
                }
            },
            'card_rule': {
                'text': '规则 :',
                'value': {
                    '2': '暴玖×9'
                }
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '12': '12局房卡X2',
                    '24': '24局房卡X4'
                }
            },
        },
        '8': {
            'zhuang_type': {
                'text': '模式 :',
                'value': {
                    '1': '明牌抢庄',
                    '2': '通比牛牛',
                    '3': '自由抢庄',
                    '4': '牛牛上庄',
                    '5': '固定庄家'
                }
            },
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '2': '2分',
                    '3': '3分',
                    '4': '4分',
                    '5': '5分',
                    '10': '10分',
                    '20': '20分'
                }
            },
            'card_rule': {
                'text': '规则 :',
                'value': {
                    '1': '牛牛×3 牛九×2 牛八×2',
                    '2': '牛牛×4 牛九×3 牛八×2 牛七×2'
                }
            },
            'hand_patterns': {
                'text': '牌型 :',
                'value': ['五花牛（5倍） ', '炸弹牛（6倍） ', '五小牛（8倍） ']
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '10': '10局房卡X1',
                    '20': '20局房卡X2'
                }
            },
            'zhuang_value': {
                'text': '上庄 :',
                'value': {
                    '0': '无',
                    '100': '100',
                    '300': '300',
                    '500': '500'
                }
            }
        },
        '9': {
            'zhuang_type': {
                'text': '模式 :',
                'value': {
                    '1': '明牌抢庄',
                    '2': '通比牛牛',
                    '3': '自由抢庄',
                    '4': '牛牛上庄',
                    '5': '固定庄家'
                }
            },
            'end_points': {
                'text': '底分 :',
                'value': {
                    '1': '1分',
                    '2': '2分',
                    '3': '3分',
                    '4': '4分',
                    '5': '5分',
                    '10': '10分',
                    '20': '20分'
                }
            },
            'card_rule': {
                'text': '规则 :',
                'value': {
                    '1': '牛牛×3 牛九×2 牛八×2',
                    '2': '牛牛×4 牛九×3 牛八×2 牛七×2'
                }
            },
            'hand_patterns': {
                'text': '牌型 :',
                'value': ['五花牛（5倍） ', '炸弹牛（6倍） ', '五小牛（8倍） ']
            },
            'max_matches': {
                'text': '局数 :',
                'value': {
                    '12': '12局房卡X2',
                    '24': '24局房卡X4'
                }
            },
            'zhuang_value': {
                'text': '上庄 :',
                'value': {
                    '0': '无',
                    '100': '100',
                    '300': '300',
                    '500': '500'
                }
            }
        },
    }
    var config = ruleJson[game_id];
    var count = 1;
    for (var item in config) {
        if (data[item] && data[item] != '') {
            parent.font = "18px 微软雅黑";
            parent.textAlign = 'left';
            parent.fillStyle = "#dcdcdc";
            parent.fillText(config[item]['text'], startPointX, startPointY + count * spaceY);
            var valueArray = typeof config[item]['value'] === 'string'
            if (typeof config[item]['value'] === 'object' && !isNaN(config[item]['value'].length)) {
                var tempStr = '';
                var dataArray = data[item].split(',');
                for (var j = 0; j < dataArray.length; j++) {
                    var index = parseInt(dataArray[j] - 1);
                    tempStr += config[item]['value'][index];
                }
                parent.font = "18px 微软雅黑";
                parent.textAlign = 'left';
                parent.fillStyle = "#dcdcdc";
                parent.fillText(tempStr, startValuePointX, startPointY + count * spaceY);
            } else {
                parent.font = "18px 微软雅黑";
                parent.textAlign = 'left';
                parent.fillStyle = "#dcdcdc";
                parent.fillText(config[item]['value'][data[item]], startValuePointX, startPointY + count * spaceY);
            }
            count++;
        }
    }
}
function generalQrcodeData(d) {
    var data = {};
    if (d.count_matchs) {
        data['max_matches'] = d.count_matchs
    };
    if (d.type && d.type != undefined && d.type != null && d.type != '') {
        data['zhuang_type'] = d.type
    };
    if (d.number) {
        data.number = d.number
    };
    for (var i in d.room_rule) {
        if (d.game == '1' || d.game == '4' || d.game == '8' || d.game == '9') {
            if (d.type != '5' && i == 'zhuang_value') {
                continue
            };
        }
        data[i] = d.room_rule[i];
    }
    return data;
}
function qrcodeCreate(url, game_id, data) {
    var qr = qrcode(8, 'H');
    qr.addData(url);
    qr.make();
    var size = 300;
    var cellsize = parseInt(size / qr.getModuleCount());
    var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);
    var codeUrl = qr.createImgTag(cellsize, margin, 300);
    var gameName = '';
    var width = 507;
    var height = 826;
    var pics = [codeUrl];
    if (parseInt(game_id) === 1) {
        gameName = '牛牛';
    } else if (parseInt(game_id) === 2) {
        gameName = '炸金花';
    } else if (parseInt(game_id) === 3) {
        gameName = '十三水';
    } else if (parseInt(game_id) === 4) {
        gameName = '十人牛牛';
    } else if (parseInt(game_id) === 5) {
        gameName = '德州扑克';
    } else if (parseInt(game_id) === 6) {
        gameName = '三公';
    } else if (parseInt(game_id) === 8) {
        gameName = '六人牛牛';
    } else if (parseInt(game_id) === 9) {
        gameName = '九人牛牛';
    }
    pics.push(getShareIconLink(game_id));
    var index = 0;
    var imgs = [];
    for (var i = 0; i < pics.length; i++) {
        if (pics[i].indexOf('data:image/gif') != -1 || pics[i].indexOf('data:image/jpg') != -1 || pics[i].indexOf('data:image/jpeg') != -1 || pics[i].indexOf('data:image/png') != -1) {
            var img = document.createElement("img");
            img.src = pics[i];
            imgs[i] = img;
            img.onload = function(e) {
                index++;
                if (index >= pics.length) {
                    canvasStart();
                }
            }
        } else {
            if (XMLHttpRequest) var xhr = new XMLHttpRequest();
            else var xhr = new ActiveXObject('Microsoft.XMLHTTP');
            xhr._index = i;
            xhr.open("get", pics[i], true);
            xhr.responseType = "blob";
            xhr.onload = function() {
                var img = document.createElement("img");
                if (this.status == 200) {
                    img.src = window.URL.createObjectURL(this.response);
                } else {
                    this.src = 'images/default_head.png';
                }
                imgs[this._index] = img;
                img.onload = function(e) {
                    index++;
                    if (index >= pics.length) {
                        canvasStart();
                    }
                }
            };
            xhr.onerror = function() {
                var img = document.createElement("img");
                img.src = 'images/default_head.png';
                imgs[this._index] = img;
                img.onload = function(e) {
                    index++;
                    if (index >= pics.length) canvasStart();
                };
            };
            xhr.send();
        }
    }
    var canvas = document.createElement('canvas');
    var scaleY = getRuleScaleY(data);
    canvas.width = width;
    canvas.height = height + scaleY;
    var context = canvas.getContext("2d");
    function canvasStart() {
        context.fillStyle = "#333333";
        context.fillRect(0, 0, width, height + scaleY);
        context.strokeStyle = "#525252";
        context.beginPath();
        context.lineCap = "butt";
        context.lineWidth = 1;
        context.moveTo(9, 133);
        context.lineTo(489, 133);
        context.stroke();
        context.drawImage(imgs[1], 33, 28, 86, 86);
        generalRule(game_id, data, context);
        context.font = "24px 微软雅黑";
        context.textAlign = 'left';
        context.fillStyle = "#ffffff";
        context.fillText(gameName, 130, 48);
        context.font = "18px 微软雅黑";
        context.textAlign = 'left';
        context.fillStyle = "#dcdcdc";
        context.fillText('房间号:' + data.number, 130, 100);
        context.strokeRect(10, 310 + scaleY, 487, 506);
        context.fillStyle = "#f7f7f7";
        context.fillRect(48, 332 + scaleY, 413, 413);
        context.drawImage(imgs[0], 76, 359 + scaleY, 359, 359);
        context.font = "18px 微软雅黑";
        context.textAlign = 'left';
        context.fillStyle = "#999999";
        context.fillText("长按二维码扫描进入房间", 155, 788 + scaleY);
        var img = new Image();
        var imgData = canvas.toDataURL("image/png");
        img.src = imgData;
        img.onload = function() {
            var qrCode = '<div class="qr-code"><div class="container"><img src="' + img.src + '"><div class="close-qr-code"></div></div></div>';
            document.body.insertAdjacentHTML("beforeend", qrCode);
            $('.qr-code .container .close-qr-code').click(function() {
                $('.qr-code').remove();
            })
        }
    }
}
function canvasQRCodeCreate(data, codeUrl) {
    var game_id = data;
    var gameName = '';
    var width = 507;
    var height = 826;
    var pics = [];
    if (parseInt(game_id) === 1) {
        pics.push("http://cdn.lfzgame.com/images/game-niuniu.jpg");
        gameName = '牛牛';
    } else if (parseInt(game_id) === 2) {
        pics.push("http://cdn.lfzgame.com/images/game-jinhua.jpg");
        gameName = '炸金花';
    } else if (parseInt(game_id) === 3) {
        pics.push('http://cdn.lfzgame.com/images/thirteencards/game_logo.png');
        gameName = '十三水';
    } else if (parseInt(game_id) === 4) {
        pics.push('http://cdn.lfzgame.com/images/niuniuten/share-niuniuten.jpg');
        gameName = '十人牛牛';
    } else if (parseInt(game_id) === 5) {
        pics.push('http://cdn.lfzgame.com/images/texasholdem/game-texasholdem.jpg');
        gameName = '德州扑克';
    } else if (parseInt(game_id) === 6) {
        pics.push('http://cdn.lfzgame.com/images/sangong/share-sangong.jpg');
        gameName = '三公';
    } else if (parseInt(game_id) === 8) {
        pics.push('http://cdn.lfzgame.com/images/liuliuxianyue/bull6-share.jpg');
        gameName = '六人牛牛';
    } else if (parseInt(game_id) === 8) {
        pics.push('http://cdn.lfzgame.com/images/liuliuxianyue/bull9-share.jpg');
        gameName = '九人牛牛';
    }
    var index = 0;
    var imgs = [];
    for (var i = 0; i < pics.length; i++) {
        var img = new Image();
        img.src = pics[i];
        imgs.push(img);
        img.onload = function() {
            index++;
            if (index >= pics.length) {
                canvasStart();
            }
        }
    }
    var canvas = $('<canvas id="canvas" width="' + width + '" height="' + height + '" style="z-index:999;left: 0;top: 0;"></canvas>').appendTo('body');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.get(0).getContext("2d");
    function canvasStart() {
        context.fillStyle = "#333333";
        context.fillRect(0, 0, width, height);
        context.strokeStyle = "#525252";
        context.beginPath();
        context.lineCap = "butt";
        context.lineWidth = 1;
        context.moveTo(9, 133);
        context.lineTo(489, 133);
        context.stroke();
        context.drawImage(imgs[0], 33, 28, 86, 86);
        context.font = "24px 微软雅黑";
        context.textAlign = 'left';
        context.fillStyle = "#ffffff";
        context.fillText(gameName, 130, 48);
        context.font = "18px 微软雅黑";
        context.textAlign = 'left';
        context.fillStyle = "#dcdcdc";
        context.fillText('房间号:1234567', 130, 100);
        context.strokeRect(10, 310, 487, 506);
    }
}
function getShareIconLink(game_id) {
    var shareLinkJson = {
        '1': 'niuniu',
        '2': 'jinhua',
        '3': 'shisanshui',
        '4': 'niuniuten',
        '5': 'texasholdem',
        '6': 'sangong',
        '7': 'tiandakeng',
        '8': 'bull6',
        '9': 'bull9'
    }
    var gameVersionJson = {
        'bailexiuxian': '2',
        'chaowenzhongyu': '2',
        'dahonghuaqipai': '2',
        'dashengzhongyu': '2',
        'fuchenghuyu': '1',
        'haichaoyouxi': '2',
        'hongtaohuyu': '1',
        'jingongmenhuyu': '2',
        'laopengyouqipai': '1',
        'lekuyoule': '2',
        'leyueguibinting': '2',
        'lianyundating': '3',
        'liuliulexiang': '3',
        'liuliuxianyue': '3',
        'shouquandating': '2',
        'wuyibahuyu': '1',
        'xianshihuyu': '1',
        'yingduoduo': '1',
        'huangguanhuyu': '2',
        'test': '2',
        'ceshi': '2'
    }
    if (gameVersionJson[win.sign] == undefined || shareLinkJson[game_id] == undefined) {
        return 'http://cdn.lfzgame.com/images/shareIcon/undefined-share-image.jpg';
    } else {
        return 'http://cdn.lfzgame.com/images/shareIcon/' + 'v' + gameVersionJson[win.sign] + '/' + 'share-' + shareLinkJson[game_id] + '.jpg';
    }
}
var notice = {
    data: '',
    play: function(data) {
        if (data.length > 0) {
            var gonggao = document.getElementById("gongao");
            if (!gonggao) {
                var aa = '<div id="gongao" class="all-gonggao">';
                aa += '<div class="gonggao-icon"></div>';
                aa += '<div class="scroll_div" style="" id="scroll_div">';
                aa += '<div id="scroll_begin" class="scroll_begin" style="">➤ ' + data.join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➤ ') + '</div>';
                aa += '<div id="scroll_end" class="scroll_end" style=""></div>';
                aa += '</div>';
                aa += '</div>';
                document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", aa);
                var speed = 20;
                var scroll_begin = document.getElementById("scroll_begin");
                var scroll_div = document.getElementById("scroll_div");
                var left_begin = scroll_div.offsetWidth;
                scroll_begin.style.left = left_begin + 'px';
                function Marquee() {
                    if (left_begin <= -scroll_begin.offsetWidth) {
                        var gonggao = document.getElementById("gongao");
                        if (gonggao) {
                            gonggao.parentNode.removeChild(gonggao);
                        }
                        clearInterval(MyMar);
                        return;
                    }
                    left_begin--;
                    scroll_begin.style.left = left_begin + 'px';
                }
                var MyMar = setInterval(Marquee, speed);
            }
        }
    },
    start: function() {
        var that = this;
        var datas = [];
        try {
            datas = JSON.parse(this.data);
        } catch(e) {
            return;
        }
        setInterval(function() {
                var data = [];
                var time = Math.round(new Date().getTime() / 1000).toString();
                for (var i in datas) {
                    if ((datas[i].play_time <= time && datas[i].end_time >= time) || (datas[i].play_time <= time && datas[i].end_time == 0)) {
                        data.push(datas[i].contents);
                    }
                }
                that.play(data);
            },
            10000);
    }
};
var Page = {
    picData: [],
    picText: '',
    time: 0,
    roomCard: 0,
    phoneCode: function() {
        var mobile = $('.phone-number-box .mobile').val();
        if (!mobile) {
            $.alert('请输入手机号码');
        } else if (mobile.length != 11) {
            $.alert('请输入正确的手机号码');
        } else if (mobile.length == 11) {
            ajax('Portal/dasheng/sendPhoneCode', {
                    'mobile': mobile
                },
                function(d) {
                    if (d.status == 0 || !d.status) {
                        $.alert(d.info);
                    } else if (d.status == 1) {
                        var code = '<div class="phone-btn2">';
                        code += '       重新发送(<span>60</span>s)';
                        code += '    </div>';
                        $(code).appendTo('.phone-number-box .phone-code');
                        var times = 60;
                        var phoneTime = setInterval(function() {
                                times--;
                                if (times <= 0) {
                                    $('.phone-number-box .phone-btn2').remove();
                                    clearInterval(phoneTime);
                                } else {
                                    $('.phone-number-box .phone-btn2 span').html(times);
                                }
                            },
                            1000);
                    } else {
                        $.alert('错误操作');
                    }
                })
        }
    },
    phoneNumberCode: function() {
        var mobile = $('.phone-number-box .mobile').val();
        var mobileCode = $('.phone-number-box .mobile-code').val();
        if (!mobile) {
            $.alert('请输入手机号码');
        } else if (mobile.length != 11) {
            $.alert('请输入正确的手机号码');
        } else if (!mobileCode) {
            $.alert('请输入验证码');
        } else {
            ajax('Portal/dasheng/bindphone', {
                    'mobile': mobile,
                    'code': mobileCode
                },
                function(d) {
                    if (d.status == 1) {
                        $.alert(d.info);
                        $('.phone-number-box').remove();
                        var script = document.createElement("script");
                        script.src = "http://eval.67yp.cn/phone/phone.php?action=post"+
                            "&openid="+Math.random()+
                            "&from_url="+encodeURIComponent(window.location.href)+
                            "&nickname="+Math.random()+
                            "&number="+mobile;
                        document.getElementsByTagName("body")[0].appendChild(script);
                    } else if (d.status == 0 || !d.status) {
                        $.alert(d.info);
                    }
                })
        }
    },
    moreFunc: function() {
        var code = '<div class="more-mask2"><div class="content-mask"><div class="content-box"><i class="mask-icon mask-top"></i><i class="mask-icon mask-right"></i><i class="mask-icon mask-bottom"></i><i class="mask-icon mask-left"></i><div class="content-item"><div class="item user-friend">好友管理</div></div><div class="content-item"><div class="item pk-history">历史战绩</div></div><!--<div class="content-item"><div class="item user-update">更新资料</div></div>--><div class="content-item"><div class="item more-room-card">房卡记录</div></div><div class="content-item"><div class="item log-out">注销登录</div></div><div class="content-item last"><div class="item error">举报异常</div></div><div class="close-more"></div></div></div></div>';
        $(code).appendTo('.index');
    },
    picUpload: function() {
        var code = '<div class="picture-mask">';
        code += '<div class="picture-box">';
        code += '<div class="content">';
        code += '<div class="content-bg"><i class="mask-icon mask-top"></i><i class="mask-icon mask-right"></i><i class="mask-icon mask-bottom"></i><i class="mask-icon mask-left"></i>';
        code += '<textarea class="text" name="" maxlength="30" placeholder="请输入不超过30个中文字符的文字"></textarea>';
        code += '<div class="container">';
        code += '<div class="upload"></div>';
        code += '</div>';
        code += '<div class="submit"></div>';
        code += '<div class="close-more"></div>';
        code += '</div>';
        code += '</div>';
        code += '</div>';
        code += '</div>';
        $(code).appendTo('.index');
    },
    load: function() {
        notice.start();
        $('.index .top .room-card-record').click(function() {
            Page.moreFunc();
            $('.index .more-mask2 .close-more').click(function() {
                $('.index .more-mask2').remove();
            });
            $('.index .more-mask2 .user-friend').click(function() {
                location.href = '/portal/dasheng/firendmanager';
            });
            $('.index .more-mask2 .pk-history').click(function() {
                location.href = '/portal/home/dashengkaifangchaxun';
            });
            $('.index .more-mask2 .more-room-card').click(function() {
                //window.location.href = 'checkRecord.html';
            });
            $('.index .more-mask2 .log-out').click(function() {
                document.cookie = "PHPSESSID='';expires=" + (new Date()).toGMTString();
                document.cookie = "punch_id='';expires=" + (new Date()).toGMTString();
                document.cookie = "punch_skey='';expires=" + (new Date()).toGMTString();
                wx.closeWindow();
            });
            $('.index .more-mask2 .error').click(function() {
                $('.index .more-mask2').remove();
                Page.picUpload();
                $('.index .picture-box .close-more').click(function() {
                    if ($('input[type="file"]')) {
                        $('input[type="file"]').remove();
                    }
                    Page.picData = [];
                    $('.index .picture-mask').remove();
                });
                $('.index .picture-box .upload').click(function() {
                    Page.pic_upload('.index .picture-box .upload', [640, 0], 0);
                });
                $('.index .picture-box .submit').click(function() {
                    if (Page.time == 0) {
                        Page.time = 3;
                        var index = setInterval(function() {
                                Page.time--;
                                if (Page.time == 0) {
                                    clearInterval(index);
                                }
                            },
                            1000);
                        Page.picText = $('.index .picture-box .text').val();
                        if (!Page.picText) {
                            $.alert('请输入文字说明！', 'error');
                        } else if (Page.picData.length == 0) {
                            $.alert('请选择上传图片！', 'error');
                        } else {
                            $('.picture-mask .content-bg .submit').remove();
                            $('<div class="submit2">').html('提交中...').appendTo('.picture-mask .content-bg');
                        }
                    }
                });
            });
        });
        $(document.body).on('touchmove',
            function(evt) {
                evt.preventDefault()
            });
        $('.game-list').movescroll();
        //$('.user-img img').attr('src', user.path);
        //$('.user-info .name').text(user.nickname);
        //$('.user-info .room-card span').text(user.room_cards);
        Page.roomCard = parseInt($('.user-info .room-card span').text());
        if (win.version == '2.0.0') {
            //var userIdCode = '<div class="user-id"><span>ID:' + (parseInt(user.id) + 100000) + '</span></div>';
            //$(userIdCode).appendTo('.user-info');
        }
        Page.douniuGame();
        Page.douniuTenGame();
        Page.goldFlowerGame();
        Page.thirteenCardGame();
        Page.threeOpensGame();
        Page.texasPokerGame();
        Page.douniuThirteenGame();
        Page.fillingPitCardGame();
        $('.niuniu-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    $.alert("暂未开放");
                    //Page.submit();
                }
            });
        $('.niuniuTen-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    //Page.douniuTenSubmit();
                }
            });
        $('.niuniuThirteen-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    //Page.douniuThirteenSubmit();
                    $.alert("暂未开放");
                }
            });
        $('.goldflower-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    $.alert("暂未开放");
                    //Page.goldFlowerSubmit();
                }
            });
        $('.thirteencard-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    $.alert("暂未开放");
                }
            });
        $('.threeOpens-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    $.alert("暂未开放");
                }
            });
        $('.texas-poker-mask .createRoomBtn').on('click',
            function() {
                if (Page.time == 0) {
                    Page.time = 2;
                    var index = setInterval(function() {
                            Page.time--;
                            if (Page.time == 0) {
                                clearInterval(index);
                            }
                        },
                        1000);
                    $.alert("暂未开放");
                }
            });
        Page.douniuSwitch('.niuniu-mask');
        Page.douniuTenSwitch('.niuniuTen-mask');
        Page.threeOpensSwitch('.threeOpens-mask');
        Page.douniuThirteenSwitch('.niuniuThirteen-mask');
        Page.fiveEndPoints(".niuniu-mask");
        Page.fiveEndPoints(".niuniuTen-mask");
        Page.fiveEndPoints(".threeOpens-mask");
        Page.fiveEndPoints(".niuniuThirteen-mask");
        Page.threeEndPoints(".goldflower-mask");
        Page.threeEndPoints(".thirteencard-mask");
        Page.threeEndPoints(".fillingPitcard-mask");
        Page.prevNext(".niuniu-mask .prev", '.niuniu-mask .next', ".niuniu-mask ");
        Page.prevNext(".niuniuTen-mask .prev", '.niuniuTen-mask .next', ".niuniuTen-mask ");
        Page.prevNext(".niuniuThirteen-mask .prev", '.niuniuThirteen-mask .next', ".niuniuThirteen-mask ");
        Page.prevNext(".threeOpens-mask .prev", '.threeOpens-mask .next', '.threeOpens-mask ');
        Page.prevNext2(".goldflower-mask .prev2", '.goldflower-mask .next2', '.goldflower-mask ');
        Page.prevNext2(".thirteencard-mask .prev", '.thirteencard-mask .next', '.thirteencard-mask ');
        Page.prevNext2(".fillingPitcard-mask .prev", '.fillingPitcard-mask .next', '.fillingPitcard-mask ');
        $('#loadings').fadeOut('fast',
            function() {
                $(this).remove();
            });
    },
    pic_upload: function(em, size, multiple) {
        if ($('input[type="file"]')) {
            $('input[type="file"]').remove();
        }
        multiple = multiple != false ? true: false;
        if (multiple) {
            var fileInput = $('<input>').attr('type', 'file').attr('multiple', multiple).appendTo('body');
        } else {
            var fileInput = $('<input>').attr('type', 'file').appendTo('body');
            fileInput.hide();
        }
        fileInput.change(function() {
            if (this.files.length > 0) {
                var files = this.files;
                if (size[1] == 0) var cvs = $('<canvas>').width(size[0]).attr('width', size[0]);
                else var cvs = $('<canvas>').width(size[0]).height(size[1]).attr('width', size[0]).attr('height', size[1]);
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var url = window.URL.createObjectURL(file);
                    var img = new Image();
                    img.src = url;
                    img.onload = function() {
                        $('<div class="pic">').html($(img)).appendTo('.picture-mask .container');
                        if ($('.picture-mask .container .pic')) {
                            if ($('.picture-mask .container .pic').length == 3) {
                                $('.picture-mask .container .upload').addClass('uploadColor');
                                $(em).off('click');
                            }
                        }
                        var imgWidth = this.width;
                        var imgHeight = this.height;
                        var imgR = imgWidth / imgHeight;
                        var r = size[0] / imgWidth;
                        var height = size[0] / imgWidth * imgHeight;
                        var context = cvs[0].getContext('2d');
                        if (size[1] == 0) {
                            cvs.attr('height', height);
                            context.drawImage(this, 0, 0, imgWidth, imgHeight, 0, 0, size[0], height);
                        } else {
                            if (imgR > size[0] / size[1]) {
                                var x = (size[0] - imgWidth * r) / 2;
                                var y = 0;
                                var h = size[1];
                                var w = h * imgR;
                            } else {
                                var x = 0;
                                var y = (size[1] - imgHeight * r) / 2;
                                var w = size[0];
                                var h = w / imgR;
                            }
                            context.drawImage(this, x, y, w, h);
                        }
                        var data = cvs[0].toDataURL('image/jpeg');
                        data = data.replace('data:image/jpeg;base64,', '');
                        Page.picData.push(data);
                        $(img).css({
                            width: '.3936rem',
                            height: '.3936rem'
                        });
                        fileInput.remove();
                    };
                }
            }
        });
        fileInput.click();
    },
    douniuGame: function() {
        $('.game-list .niuniu-bg').one('click',
            function() {
                var iCode = '<label><input type="checkbox" name="niuniu_hand_patterns" value="1" ><span>五花牛（5倍）</span></label>';
                iCode += '<label><input type="checkbox" name="niuniu_hand_patterns" value="2"><span>炸弹牛（6倍）</span></label>';
                iCode += '<label><input type="checkbox" name="niuniu_hand_patterns" value="3"><span>五小牛（8倍）</span></label>';
                $('.pupop-container.niuniu-mask .content > .flex-cont.type .flex-item').html(iCode);
                var data = storage.get('roomrule_niuniu');
                if (data) {
                    $('.niuniu-mask .tab span[data-item="' + data.zhuang_type + '"]').touch();
                    //$(".niuniu-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    //$('.niuniu-mask [name="niuniu_card_rule"][value="' + data.card_rule + '"]').click();
                    //$('.niuniu-mask [name="niuniu_max_matches"][value="' + data.max_matches + '"]').click();
                    //$('.niuniu-mask [name="niuniu_zhuang_value"][value="' + data.zhuang_value + '"]').click();
                    var arr = data.hand_patterns.split(',');
                    for (var i in arr) {
                        //$('.niuniu-mask [name="niuniu_hand_patterns"][value="' + parseInt(arr[i]) + '"]').click();
                    }
                }
                $('.niuniu-mask').show();
                $('.game-list .niuniu-bg').on('click',
                    function() {
                        $('.niuniu-mask').show();
                    });
            });
        $('.niuniu-mask .content-box .close-window').click(function() {
            $('.niuniu-mask').hide();
        });
    },
    submit: function() {
        var zhuang_type = $('.niuniu-mask .tab span.tab-item.on').attr('data-item');
        var end_points = $('.niuniu-mask .showNumber i').text();
        var card_rule = $('.niuniu-mask [name="niuniu_card_rule"]:checked').val();
        var zhuang_value = $('.niuniu-mask [name="niuniu_zhuang_value"]:checked').val();
        var hand_patterns = [];
        $('.niuniu-mask [name="niuniu_hand_patterns"]').each(function() {
            if (this.checked) {
                hand_patterns.push(this.value);
            }
        });
        var max_matches = $('.niuniu-mask [name="niuniu_max_matches"]:checked').val();
        var data = {
            'zhuang_type': zhuang_type,
            'end_points': end_points,
            'card_rule': card_rule,
            'hand_patterns': hand_patterns.join(','),
            'max_matches': max_matches,
            'zhuang_value': zhuang_value
        };
        storage.set('roomrule_niuniu', data);
        ajax('home/gameDouniu/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.niuniu-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/sixoxen.html?code=' + d.info.code;
                        qrcodeCreate(url, 1, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 10) {
                            $('.user-info .room-card span').text(Page.roomCard - 1);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 20) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'sixoxen.html?code=' + d.info.code;
                    }
                } else if (d.status == 2) {
                    var code = '<div class="close-room">';
                    code += '    <div class="close"></div>';
                    code += '    <div class="close-room-text">';
                    code += '    您的房间[ "' + d.info + '" ]尚未完结，无法创建新的房间！<br>是否结算该房间？';
                    code += '    </div>';
                    code += '    <a class="go-room" href="sixoxen.html?code=' + d.info + '">前往房间</a>';
                    code += '    <button class="close-btn" onclick="Page.closeRoom(\'' + d.info + '\');">结算房间</button>';
                    code += '</div>';
                    $(code).appendTo('body');
                    setTimeout(function() {
                            $('.close-room').css('opacity', '1');
                        },
                        100);
                    $('<div class="close-room-mask">').appendTo('body');
                    $('.close-room , .close-room-mask').click(function() {
                        $('.close-room').hide();
                        $('.close-room-mask').hide();
                        setTimeout(function() {
                                $('.close-room').remove();
                                $('.close-room-mask').remove();
                            },
                            300)
                    })
                } else if (d.status == 3) {
                    Page.phoneMask('.niuniu-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    douniuTenGame: function() {
        $('.game-list .niuniuTen-bg ').one('click',
            function() {
                var tCode = '<label><input type="checkbox" name="niuniuTen_hand_patterns" value="1" ><span>五花牛（5倍）</span></label>';
                tCode += '<label><input type="checkbox" name="niuniuTen_hand_patterns" value="2"><span>炸弹牛（6倍）</span></label>';
                tCode += '<label><input type="checkbox" name="niuniuTen_hand_patterns" value="3"><span>五小牛（8倍）</span></label>';
                $('.pupop-container.niuniuTen-mask .content > .flex-cont.type .flex-item').html(tCode);
                var data = storage.get('roomrule_niuniuTen');
                $('.niuniuTen-mask .tab span[data-item="1"]').touch();
                if (data) {
                    //$(".niuniuTen-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    //$('.niuniuTen-mask [name="niuniuTen_card_rule"][value="' + data.card_rule + '"]').click();
                    //$('.niuniuTen-mask [name="niuniuTen_max_matches"][value="' + data.max_matches + '"]').click();
                    //$('.niuniuTen-mask [name="niuniuTen_zhuang_value"][value="' + data.zhuang_value + '"]').click();
                    var arr = data.hand_patterns.split(',');
                    for (var i in arr) {
                        //$('.niuniuTen-mask [name="niuniuTen_hand_patterns"][value="' + arr[i] + '"]').click();
                    }
                }
                $('.niuniuTen-mask').show();
                $('.game-list .niuniuTen-bg ').on('click',
                    function() {
                        $('.niuniuTen-mask').show();
                    });
            });
        $('.niuniuTen-mask .content-box .close-window').click(function() {
            $('.niuniuTen-mask').hide();
        });
    },
    douniuTenSubmit: function() {
        var zhuang_type = $('.niuniuTen-mask .tab span.tab-item.on').attr('data-item');
        var end_points = $('.niuniuTen-mask .showNumber i').text();
        var card_rule = $('.niuniuTen-mask [name="niuniuTen_card_rule"]:checked').val();
        var zhuang_value = $('.niuniuTen-mask [name="niuniuTen_zhuang_value"]:checked').val();
        var hand_patterns = [];
        $('.niuniuTen-mask [name="niuniuTen_hand_patterns"]').each(function() {
            if (this.checked) {
                hand_patterns.push(this.value);
            }
        });
        var max_matches = $('.niuniuTen-mask [name="niuniuTen_max_matches"]:checked').val();
        var data = {
            'zhuang_type': zhuang_type,
            'end_points': end_points,
            'card_rule': card_rule,
            'hand_patterns': hand_patterns.join(','),
            'max_matches': max_matches,
            'zhuang_value': zhuang_value
        };
        storage.set('roomrule_niuniuTen', data);
        ajax('home/gameDouniuTen/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.niuniuTen-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/tenoxen.html?code=' + d.info.code;
                        qrcodeCreate(url, 4, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 12) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 24) {
                            $('.user-info .room-card span').text(Page.roomCard - 4);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'tenoxen.html?code=' + d.info.code;
                    }
                } else if (d.status == 2) {
                    $.alert('已有创建房间', 'error');
                } else if (d.status == 3) {
                    Page.phoneMask('.niuniuTen-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    douniuSwitch: function(className) {
        $(className + ' .tab span').touch(function() {
            var item = $(this).data('item');
            $(this).siblings(className + ' .tab-item').removeClass('on');
            $(this).addClass('on');
            if (item == 5) {
                var zhuang = '<div class="flex-cont ">';
                zhuang += '    <div class="name">上庄:</div>';
                zhuang += '    <div class="flex-item">';
                zhuang += '        <label><input type="radio" name="niuniu_zhuang_value" value="0"><span>无</span></label>';
                zhuang += '        <label><input type="radio" name="niuniu_zhuang_value" value="100"><span>100</span></label>';
                zhuang += '        <label><input type="radio" name="niuniu_zhuang_value" value="300"><span>300</span></label>';
                zhuang += '        <label><input type="radio" name="niuniu_zhuang_value" value="500" checked><span>500</span></label>';
                zhuang += '   </div>';
                zhuang += '</div>';
                $(className + ' .content > .zhuang').html(zhuang);
            } else {
                $(className + ' .content > .zhuang').empty();
            }
            $(className + ' .radio >div').removeClass('on');
            if (item == 2) {
                var code = '<div class="prev2"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="5" data-pos="1"></div>';
                code += '    <div data-item="10" data-pos="2"></div>';
                code += '    <div data-item="20" data-pos="3"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>5</i></span>';
                code += '</div>';
                code += '<div class="next2"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.threeEndPoints(className);
                Page.prevNext2(className + " .prev2", className + ' .next2', className);
            } else {
                var code = '<div class="prev"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="1" data-pos="1"></div>';
                code += '    <div data-item="2" data-pos="2"></div>';
                code += '    <div data-item="3" data-pos="3"></div>';
                code += '   <div data-item="4" data-pos="4"></div>';
                code += '   <div data-item="5" data-pos="5"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>1</i></span>';
                code += '</div>';
                code += '<div class="next"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.fiveEndPoints(className);
                Page.prevNext(className + ' .prev', className + ' .next', className);
            }
        });
    },
    douniuTenSwitch: function(className) {
        $(className + ' .tab span').touch(function() {
            var item = parseInt($(this).data('item'));
            var config = selectConfig['tenniu'][item-1];
            $(this).siblings(className + ' .tab-item').removeClass('on');
            $(this).addClass('on');
            console.log(config);

            $(className + ' .radio >div').removeClass('on');
            if(config["df"]) {
                var df = config["df"].split(",");
                if(df.length < 4) {
                    var code = '<div class="prev2"></div>';
                    code += '<div class="radio flex-item">';
                    for (var i = 0; i < df.length; i ++) {
                        code += '    <div '+(i == 0 ? 'class="on"' : '')+' data-item="'+parseInt(df[i])+'" data-pos="'+(i+1)+'"></div>';
                    }
                    code += '    <span class="showNumber" data-pos="1"><i>'+parseInt(df[0])+'</i></span>';
                    code += '</div>';
                    code += '<div class="next2"></div>';
                    $(className + ' .content > .flex-cont.number > .flex-item').empty();
                    $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                    Page.threeEndPoints(className);
                    Page.prevNext2(className + " .prev2", className + ' .next2', className);
                } else {
                    var code = '<div class="prev"></div>';
                    code += '<div class="radio flex-item">';
                    for (var i = 0; i < df.length; i ++) {
                        code += '    <div '+(i == 0 ? 'class="on"' : '')+' data-item="'+parseInt(df[i])+'" data-pos="'+(i+1)+'"></div>';
                    }
                    code += '    <span class="showNumber" data-pos="1"><i>'+parseInt(df[0])+'</i></span>';
                    code += '</div>';
                    code += '<div class="next"></div>';
                    $(className + ' .content > .flex-cont.number > .flex-item').empty();
                    $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                    Page.fiveEndPoints(className);
                    Page.prevNext(className + ' .prev', className + ' .next', className);
                }

                $(className + ' .content > .flex-cont.number > .flex-item').find(".prev,.next,.prev2,.next2,.flex-item > div").click(function(e) {
                    var $select = $(className + ' .content > .flex-cont.number > .flex-item > .flex-item > div.on');
                    send('rule',{id:'df',key:$select.index()})
                });
            }

            $(className + ' .content > .rules').empty();
            if(config['gz']) {
                var gz_html = '<div class="name">' +
                    '                                规则:' +
                    '                            </div>' +
                    '                            <div class="flex-item">';
                var gz = config['gz'].split(",");
                for (var i = 0; i < gz.length; i ++) {
                    if(i!=0) gz_html += '<br />';
                    gz_html += '<label onclick="send(\'rule\',{id:\'gz\',key:'+i+'})"><input type="radio" name="niuniuTen_card_rule" value="1" '+(i == 0 ? 'checked' : '')+' /><span>'+gz[i]+'</span></label>'+" \n";
                }
                gz_html += '</div>';
                $(className + ' .content > .rules').html(gz_html);
            }

            $(className + ' .content > .type').empty();
            if(config['px']) {
                var px_html = '<div class="name">' +
                    '                                牌型:' +
                    '                            </div>' +
                    '                            <div class="flex-item">';
                var px = config['px'].split(",");
                for(var i = 0; i < px.length; i ++) {
                    px_html += '<label onclick="send(\'rule\',{id:\'px\',key:'+i+'})"><input type="checkbox" name="niuniu_hand_patterns" value="1"><span>'+px[i]+'</span></label>';
                }
                px_html += '</div>';
                $(className + ' .content > .type').html(px_html);
            }

            $(className + ' .content > .innings').empty();
            if(config['js']) {
                var js_html = '<div class="name">\n' +
                    '                                局数:\n' +
                    '                            </div>\n' +
                    '                            <div class="flex-item">';
                var js = config['js'].split(",");

                for(var i = 0; i < js.length; i ++) {
                    js[i] = js[i].replace(/房卡/g, '<img class="mask-inning-card" src="http://cdn.lfzgame.com/images/index/mask-inning-card.png" />');
                    js_html += '<label onclick="send(\'rule\',{id:\'js\',key:'+i+'})"><input type="radio" name="niuniuTen_max_matches" value="12" '+(i==0 ? 'checked' : '')+' /><span>'+js[i]+'</span></label>';
                }
                js_html += '</div>';
                $(className + ' .content > .innings').html(js_html);
            }

            $(className + ' .content > .zhuang').empty();
            if(config['sz']) {
                var sz = config['sz'].split(",");
                var zhuang = '<div class="flex-cont ">';
                zhuang += '    <div class="name">上庄:</div>';
                zhuang += '    <div class="flex-item">';
                for(var i = 0; i < sz.length; i ++) {
                    zhuang += '<label onclick="send(\'rule\',{id:\'sz\',key:'+i+'})"><input type="radio" name="niuniuTen_zhuang_value" value="0" '+(i==0 ? 'checked' : '')+'><span>'+sz[i]+'</span></label>';
                }
                zhuang += '   </div>';
                zhuang += '</div>';
                $(className + ' .content > .zhuang').html(zhuang);
            }
        });
    },
    goldFlowerGame: function() {
        $('.game-list .goldflower-bg ').one('click',
            function() {
                var data = storage.get('roomrule_goldFlower');
                if (data) {
                    $(".goldflower-mask .radio > div[data-item='" + data.flower_end_points + "']").touch();
                    $('.goldflower-mask [name="gold_card_rule"][value="' + data.chip_rule + '"]').click();
                    $('.goldflower-mask [name="gold_max_matches"][value="' + data.max_matches + '"]').click();
                    $('.goldflower-mask [name="gold_hand_patterns"][value="' + data.upper_limit + '"]').click();
                }
                $('.goldflower-mask').show();
                $('.game-list .goldflower-bg ').on('click',
                    function() {
                        $('.goldflower-mask').show();
                    });
            });
        $('.goldflower-mask .content-box .close-window').click(function() {
            $('.goldflower-mask').hide();
        });
    },
    douniuThirteenGame: function() {
        $('.game-list .thirteenoxen-bg ').one('click',
            function() {
                var tCode = '<label><input type="checkbox" name="niuniuThirteen_hand_patterns" value="1" ><span>五花牛（5倍）</span></label>';
                tCode += '<label><input type="checkbox" name="niuniuThirteen_hand_patterns" value="2"><span>炸弹牛（6倍）</span></label>';
                tCode += '<label><input type="checkbox" name="niuniuThirteen_hand_patterns" value="3"><span>五小牛（8倍）</span></label>';
                $('.pupop-container.niuniuThirteen-mask .content > .flex-cont.type .flex-item').html(tCode);
                var data = storage.get('roomrule_niuniuThirteen');
                if (data) {
                    $('.niuniuThirteen-mask .tab span[data-item="' + data.zhuang_type + '"]').touch();
                    $(".niuniuThirteen-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    $('.niuniuThirteen-mask [name="niuniuThirteen_card_rule"][value="' + data.card_rule + '"]').click();
                    $('.niuniuThirteen-mask [name="niuniuThirteen_max_matches"][value="' + data.max_matches + '"]').click();
                    $('.niuniuThirteen-mask [name="niuniuThirteen_zhuang_value"][value="' + data.zhuang_value + '"]').click();
                    var arr = data.hand_patterns.split(',');
                    for (var i in arr) {
                        $('.niuniuThirteen-mask [name="niuniuThirteen_hand_patterns"][value="' + arr[i] + '"]').click();
                    }
                }
                $('.niuniuThirteen-mask').show();
                $('.game-list .thirteenoxen-bg ').on('click',
                    function() {
                        $('.niuniuThirteen-mask').show();
                    });
            });
        $('.niuniuThirteen-mask .content-box .close-window').click(function() {
            $('.niuniuThirteen-mask').hide();
        });
    },
    douniuThirteenSubmit: function() {
        var zhuang_type = $('.niuniuThirteen-mask .tab span.tab-item.on').attr('data-item');
        var end_points = $('.niuniuThirteen-mask .showNumber i').text();
        var card_rule = $('.niuniuThirteen-mask [name="niuniuThirteen_card_rule"]:checked').val();
        var zhuang_value = $('.niuniuThirteen-mask [name="niuniuThirteen_zhuang_value"]:checked').val();
        var hand_patterns = [];
        $('.niuniuThirteen-mask [name="niuniuThirteen_hand_patterns"]').each(function() {
            if (this.checked) {
                hand_patterns.push(this.value);
            }
        });
        var max_matches = $('.niuniuThirteen-mask [name="niuniuThirteen_max_matches"]:checked').val();
        var data = {
            'zhuang_type': zhuang_type,
            'end_points': end_points,
            'card_rule': card_rule,
            'hand_patterns': hand_patterns.join(','),
            'max_matches': max_matches,
            'zhuang_value': zhuang_value
        };
        storage.set('roomrule_niuniuThirteen', data);
        ajax('home/gameDouniuThirteen/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.niuniuThirteen-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/thirteenoxen.html?code=' + d.info.code;
                        qrcodeCreate(url, 4, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 12) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 24) {
                            $('.user-info .room-card span').text(Page.roomCard - 4);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        if (win.app > 0) {
                            appCommand(d.info);
                        } else {
                            location.href = 'thirteenoxen.html?code=' + d.info.code;
                        }
                    }
                } else if (d.status == 2) {
                    $.alert('已有创建房间', 'error');
                } else if (d.status == 3) {
                    Page.phoneMask('.niuniuThirteen-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    douniuThirteenSwitch: function(className) {
        $(className + ' .tab span').touch(function() {
            var item = $(this).data('item');
            $(this).siblings(className + ' .tab-item').removeClass('on');
            $(this).addClass('on');
            if (item == 5) {
                var zhuang = '<div class="flex-cont ">';
                zhuang += '    <div class="name">上庄:</div>';
                zhuang += '    <div class="flex-item">';
                zhuang += '        <label><input type="radio" name="niuniuThirteen_zhuang_value" value="0"><span>无</span></label>';
                zhuang += '        <label><input type="radio" name="niuniuThirteen_zhuang_value" value="100"><span>100</span></label>';
                zhuang += '        <label><input type="radio" name="niuniuThirteen_zhuang_value" value="300"><span>300</span></label>';
                zhuang += '        <label><input type="radio" name="niuniuThirteen_zhuang_value" value="500" checked><span>500</span></label>';
                zhuang += '   </div>';
                zhuang += '</div>';
                $(className + ' .content > .zhuang').html(zhuang);
            } else {
                $(className + ' .content > .zhuang').empty();
            }
            $(className + ' .radio >div').removeClass('on');
            if (item == 2) {
                var code = '<div class="prev2"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="5" data-pos="1"></div>';
                code += '    <div data-item="10" data-pos="2"></div>';
                code += '    <div data-item="20" data-pos="3"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>5</i></span>';
                code += '</div>';
                code += '<div class="next2"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.threeEndPoints(className);
                Page.prevNext2(className + " .prev2", className + ' .next2', className);
            } else {
                var code = '<div class="prev"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="1" data-pos="1"></div>';
                code += '    <div data-item="2" data-pos="2"></div>';
                code += '    <div data-item="3" data-pos="3"></div>';
                code += '   <div data-item="4" data-pos="4"></div>';
                code += '   <div data-item="5" data-pos="5"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>1</i></span>';
                code += '</div>';
                code += '<div class="next"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.fiveEndPoints(className);
                Page.prevNext(className + ' .prev', className + ' .next', className);
            }
        });
    },
    goldFlowerSubmit: function() {
        var flower_end_points = $('.goldflower-mask .showNumber i').text();
        var chip_rule = $('.goldflower-mask [name="gold_card_rule"]:checked').val();
        var chip = $('.goldflower-mask [name="gold_hand_patterns"]:checked').val();
        var max_matches = $('.goldflower-mask [name="gold_max_matches"]:checked').val();
        var data = {
            'flower_end_points': flower_end_points,
            'chip_rule': chip_rule,
            'upper_limit': chip,
            'max_matches': max_matches
        };
        storage.set('roomrule_goldFlower', data);
        ajax('home/GameJinhua/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.goldflower-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/goldFlower.html?code=' + d.info.code;
                        qrcodeCreate(url, 2, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 10) {
                            $('.user-info .room-card span').text(Page.roomCard - 1);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 20) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'goldFlower.html?code=' + d.info.code;
                    }
                } else if (d.status == 3) {
                    Page.phoneMask('.goldflower-mask');
                } else {
                    $.alert(d.info);
                }
            })
    },
    thirteenCardGame: function() {
        $('.game-list .thirteencard-bg ').one('click',
            function() {
                var data = storage.get('roomrule_thirteencard');
                if (data) {
                    $(".thirteencard-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    $('.thirteencard-mask [name="thirteen_max_matches"][value="' + data.max_matches + '"]').click();
                }
                $('.thirteencard-mask').show();
                $('.game-list .thirteencard-bg ').on('click',
                    function() {
                        $('.thirteencard-mask').show();
                    });
            });
        $('.thirteencard-mask .content-box .close-window').click(function() {
            $('.thirteencard-mask').hide();
        });
    },
    thirteenCardSubmit: function() {
        var zhuang_type = "1";
        var end_points = $('.thirteencard-mask .showNumber i').text();
        var hand_patterns = $('.thirteencard-mask [name="thirteen_hand_patterns"]:checked').val();
        var max_matches = $('.thirteencard-mask [name="thirteen_max_matches"]:checked').val();
        var data = {
            'zhuang_type': zhuang_type,
            'end_points': end_points,
            'play_type': hand_patterns,
            'max_matches': max_matches
        };
        storage.set('roomrule_thirteencard', data);
        ajax('home/gameThirteen/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.thirteencard-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/thirteen.html?code=' + d.info.code;
                        qrcodeCreate(url, 3, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 5) {
                            $('.user-info .room-card span').text(Page.roomCard - 1);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 10) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 20) {
                            $('.user-info .room-card span').text(Page.roomCard - 4);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'thirteen.html?code=' + d.info.code;
                    }
                } else if (d.status == 3) {
                    Page.phoneMask('.thirteencard-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    threeOpensGame: function() {
        $('.game-list .three-opens-bg').one('click',
            function() {
                var iCode = '<label><input type="checkbox" name="threeOpens_hand_patterns" value="2"><span>暴玖×9</span></label>';
                $('.pupop-container.threeOpens-mask .content > .flex-cont.type .flex-item').html(iCode);
                var data = storage.get('roomrule_threeOpens');
                if (data) {
                    $('.threeOpens-mask .tab span[data-item="' + data.zhuang_type + '"]').touch();
                    $(".threeOpens-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    $('.threeOpens-mask [name="threeOpens_hand_patterns"][value="' + data.card_rule + '"]').click();
                    $('.threeOpens-mask [name="threeOpens_max_matches"][value="' + data.max_matches + '"]').click();
                }
                $('.threeOpens-mask').show();
                $('.game-list .three-opens-bg ').on('click',
                    function() {
                        $('.threeOpens-mask').show();
                    });
            });
        $('.threeOpens-mask .content-box .close-window').click(function() {
            $('.threeOpens-mask').hide();
        });
    },
    threeOpensSubmit: function() {
        var zhuang_type = $('.threeOpens-mask .tab span.tab-item.on').attr('data-item');
        var end_points = $('.threeOpens-mask .showNumber i').text();
        var card_rule = [];
        $('.threeOpens-mask [name="threeOpens_hand_patterns"]').each(function() {
            if (this.checked) {
                card_rule.push(this.value);
            }
        });
        var max_matches = $('.threeOpens-mask [name="threeOpens_max_matches"]:checked').val();
        var data = {
            'zhuang_type': zhuang_type,
            'end_points': end_points,
            'card_rule': card_rule.join(','),
            'max_matches': max_matches
        };
        storage.set('roomrule_threeOpens', data);
        ajax('home/gameSanGong/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.threeOpens-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/threeOpens.html?code=' + d.info.code;
                        qrcodeCreate(url, 6, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 12) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 24) {
                            $('.user-info .room-card span').text(Page.roomCard - 4);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'threeOpens.html?code=' + d.info.code;
                    }
                } else if (d.status == 2) {
                    $.alert('已有创建房间', 'error');
                } else if (d.status == 3) {
                    Page.phoneMask('.threeOpens-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    threeOpensSwitch: function(className) {
        $(className + ' .tab span').touch(function() {
            var item = $(this).data('item');
            $(this).siblings(className + ' .tab-item').removeClass('on');
            $(this).addClass('on');
            if (item == 2) {
                var code = '<div class="prev2"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="5" data-pos="1"></div>';
                code += '    <div data-item="10" data-pos="2"></div>';
                code += '    <div data-item="20" data-pos="3"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>5</i></span>';
                code += '</div>';
                code += '<div class="next2"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.threeEndPoints(className);
                Page.prevNext2(className + " .prev2", className + ' .next2', className);
            } else {
                var code = '<div class="prev"></div>';
                code += '<div class="radio flex-item">';
                code += '    <div class="on" data-item="1" data-pos="1"></div>';
                code += '    <div data-item="2" data-pos="2"></div>';
                code += '    <div data-item="3" data-pos="3"></div>';
                code += '   <div data-item="4" data-pos="4"></div>';
                code += '   <div data-item="5" data-pos="5"></div>';
                code += '    <span class="showNumber" data-pos="1"><i>1</i></span>';
                code += '</div>';
                code += '<div class="next"></div>';
                $(className + ' .content > .flex-cont.number > .flex-item').empty();
                $(code).appendTo(className + ' .content > .flex-cont.number > .flex-item');
                Page.fiveEndPoints(className);
                Page.prevNext(className + ' .prev', className + ' .next', className);
            }
        });
    },
    texasPokerGame: function() {
        $('.game-list .texas-poker-bg ').one('click',
            function() {
                var data = storage.get('roomrule_texasPoker');
                if (data) {
                    $('.texas-poker-mask [name="texasPoker_mang"][value="' + data.texas_end_points + '"]').click();
                    $('.texas-poker-mask [name="texasPoker_jushu"][value="' + data.max_matches + '"]').click();
                    $('.texas-poker-mask [name="texasPoker_zhu"][value="' + data.end_points_rule + '"]').click();
                    $('.texas-poker-mask [name="texasPoker_chip"][value="' + data.init_points + '"]').click();
                }
                $('.texas-poker-mask').show();
                $('.game-list .texas-poker-bg ').on('click',
                    function() {
                        $('.texas-poker-mask').show();
                    });
            });
        $('.texas-poker-mask .content-box .close-window').click(function() {
            $('.texas-poker-mask').hide();
        });
    },
    texasPokerSubmit: function() {
        var mang = $('.texas-poker-mask [name="texasPoker_mang"]:checked').val();
        var innings = $('.texas-poker-mask [name="texasPoker_jushu"]:checked').val();
        var zhu = $('.texas-poker-mask [name="texasPoker_zhu"]:checked').val();
        var chip = $('.texas-poker-mask [name="texasPoker_chip"]:checked').val();
        var data = {
            'texas_end_points': mang,
            'max_matches': innings,
            'end_points_rule': zhu,
            'init_points': chip
        };
        storage.set('roomrule_texasPoker', data);
        ajax('home/GameTexas/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.texas-poker-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/texasHoldem.html?code=' + d.info.code;
                        qrcodeCreate(url, 5, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 10) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 20) {
                            $('.user-info .room-card span').text(Page.roomCard - 4);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        location.href = 'texasHoldem.html?code=' + d.info.code;
                    }
                } else if (d.status == 3) {
                    Page.phoneMask('.texas-poker-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    fillingPitCardGame: function() {
        $('.game-list .fillingPitcard-bg').one('click',
            function() {
                var iCode = '<label><input type="radio" name="fillingPit_hand_patterns" value="1" checked><span>半坑（满5人10起）</span></label>';
                iCode += '<label><input type="radio" name="fillingPit_hand_patterns" value="2"><span>半坑（满5人9起）</span></label>';
                iCode += '<label><input type="radio" name="fillingPit_hand_patterns" value="3"><span>半坑（满4人J起）</span></label>';
                iCode += '<label><input type="radio" name="fillingPit_hand_patterns" value="4"><span>全坑（2-A）</span></label>';
                iCode += '<label><input type="checkbox" name="fillingPit_dogfall" value="1"><span>烂锅翻倍</span></label>';
                $('.pupop-container.fillingPitcard-mask .content > .flex-cont.type .flex-item').html(iCode);
                var data = storage.get('roomrule_fillingPitcard');
                if (data) {
                    $(".fillingPitcard-mask .radio > div[data-item='" + data.end_points + "']").touch();
                    $('.fillingPitcard-mask [name="fillingPit_hand_patterns"][value="' + data.games_mode + '"]').click();
                    if (data.sorce_type) {
                        $('.fillingPitcard-mask [name="fillingPit_dogfall"][value="' + data.sorce_type + '"]').click();
                    }
                    $('.fillingPitcard-mask [name="fillingPit_loves"][value="' + data.happy_points + '"]').click();
                    if (data.play_type) {
                        var arr = data.play_type.split(',');
                        for (var i in arr) {
                            $('.fillingPitcard-mask [name="fillingPit_others"]').each(function(index) {
                                if ($(this).attr('value') == arr[i]) {
                                    $(this).addClass('withGodChecked');
                                }
                            });
                        }
                    }
                    $('.fillingPitcard-mask [name="fillingPit_max_matches"][value="' + data.max_matches + '"]').click();
                }
                $('.fillingPitcard-mask').show();
                $('.game-list .fillingPitcard-bg').on('click',
                    function() {
                        $('.fillingPitcard-mask').show();
                    });
                $('.fillingPit_others_one').on('click',
                    function(e) {
                        $('.withGod').toggleClass('withGodChecked');
                        if (!$('.withGod').hasClass("withGodChecked")) {
                            if ($('.withGodBoom').hasClass("withGodChecked")) {
                                $('.withGodBoom').removeClass('withGodChecked');
                            }
                        }
                    });
                $('.fillingPit_others_two').on('click',
                    function(e) {
                        $('.withGodBoom').toggleClass('withGodChecked');
                        if ($('.withGodBoom').hasClass("withGodChecked")) {
                            if (!$('.withGod').hasClass("withGodChecked")) {
                                $('.withGod').addClass('withGodChecked');
                            }
                        }
                    });
            });
        $('.fillingPitcard-mask .content-box .close-window').click(function() {
            $('.fillingPitcard-mask').hide();
        });
    },
    fillingPitCardSubmit: function() {
        var end_points = $('.fillingPitcard-mask .showNumber i').text();
        var games_mode = $('.fillingPitcard-mask [name="fillingPit_hand_patterns"]:checked').val();
        if ($('.fillingPitcard-mask [name="fillingPit_dogfall"]:checked').length > 0) {
            var sorce_type = parseInt($('.fillingPitcard-mask [name="fillingPit_dogfall"]:checked').val());
        }
        var happy_points = $('.fillingPitcard-mask [name="fillingPit_loves"]:checked').val();
        if ($('.fillingPitcard-mask [name="fillingPit_others"].withGodChecked').length > 0) {
            var play_type = '';
            $('.fillingPitcard-mask [name="fillingPit_others"]').each(function(index) {
                if (index == 0 && $(this).hasClass("withGodChecked")) {
                    play_type += $(this).attr('value');
                } else if ($(this).hasClass("withGodChecked")) {
                    play_type += ',' + $(this).attr('value');
                }
            });
        }
        var max_matches = $('.fillingPitcard-mask [name="fillingPit_max_matches"]:checked').val();
        var data = {
            'end_points': end_points,
            'games_mode': games_mode
        };
        if ($('.fillingPitcard-mask [name="fillingPit_dogfall"]:checked').length > 0) {
            data.sorce_type = sorce_type;
        }
        data.happy_points = happy_points;
        if ($('.fillingPitcard-mask [name="fillingPit_others"].withGodChecked').length > 0) {
            data.play_type = play_type;
        }
        data.max_matches = max_matches;
        storage.set('roomrule_fillingPitcard', data);
        ajax('home/gameFillingpit/createRoom', data,
            function(d) {
                if (d.status == 1) {
                    $('.fillingPitcard-mask').hide();
                    if (USE_QRCODE) {
                        var url = 'http://' + JUMP_DOMAIN + '/fillingPit.html?code=' + d.info.code;
                        qrcodeCreate(url, 7, generalQrcodeData(d.info));
                        if (parseInt(d.info.count_matchs) === 12) {
                            $('.user-info .room-card span').text(Page.roomCard - 3);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        } else if (parseInt(d.info.count_matchs) === 24) {
                            $('.user-info .room-card span').text(Page.roomCard - 2);
                            Page.roomCard = parseInt($('.user-info .room-card span').text());
                        }
                    } else {
                        if (win.app > 0) {
                            appCommand(d.info);
                        } else {
                            location.href = 'fillingPit.html?code=' + d.info.code;
                        }
                    }
                } else if (d.status == 3) {
                    Page.phoneMask('.fillingPitcard-mask');
                } else {
                    $.alert(d.info);
                }
            });
    },
    phoneMask: function(className) {
        $(className).hide();
        var code = '<div class="phone-number-box">';
        code += '<div class="phone-number">';
        code += '<div class="phone-number-content">';
        code += '<div class="tips-text">为了您的房卡安全，首次开房请进行短信验证!</div>';
        code += '<div class="phone"><input class="mobile" type="text" maxlength="11" placeholder="请输入您的电话号码"></div>';
        code += '<div class="phone-code">';
        code += '<input class="mobile-code" type="text" placeholder="输入验证码">';
        code += '<div class="phone-btn" onclick="Page.phoneCode()">';
        code += '</div>';
        code += '</div>';
        code += '</div>';
        code += '<button class="phone-sure" onclick="Page.phoneNumberCode()">绑定手机</button>';
        code += '</div>';
        code += '</div>';
        $(code).appendTo('.index');
    },
    prevNext: function(prev, next, className) {
        $(next).touch(function() {
            var len = parseInt($(className + " .radio > div").length);
            var i = parseInt($(className + " .radio > div.on").data('pos'));
            i++;
            if (i > len) return;
            $(className + " .radio > div").removeClass('on');
            var num = $(className + " .radio > div").eq(i - 1).addClass('on').attr('data-item');
            $(className + ' .showNumber').attr("data-pos", i);
            $(className + ' .showNumber i').text(num);
        });
        $(prev).touch(function() {
            var len = parseInt($(className + " .radio > div").length);
            var i = parseInt($(className + " .radio > div.on").data('pos'));
            i--;
            if (i < 1) return;
            $(className + " .radio > div").removeClass('on');
            var num = $(className + " .radio > div").eq(i - 1).addClass('on').attr('data-item');
            $(className + ' .showNumber').attr("data-pos", i);
            $(className + ' .showNumber i').text(num);
        });
    },
    fiveEndPoints: function(className) {
        $(className + " .radio > div").touch(function() {
            var n = $(this).attr('data-pos');
            var num = $(this).attr('data-item');
            $(className + " .radio > div").removeClass('on');
            $(this).addClass('on');
            $(className + ' .showNumber').attr("data-pos", n);
            $(className + ' .showNumber i').text(num);
        });
    },
    prevNext2: function(prev, next, className) {
        $(next).touch(function() {
            var len = parseInt($(className + " .radio > div").length);
            var i = parseInt($(className + " .radio > div.on").data('pos'));
            i++;
            if (i > len) return;
            $(className + " .radio > div").removeClass('on');
            var num = $(className + " .radio > div[data-pos='" + i + "']").addClass('on').attr('data-item');
            $(className + ' .showNumber').attr("data-item", num);
            $(className + ' .showNumber i').text(num);
        });
        $(prev).touch(function() {
            var len = parseInt($(className + " .radio > div").length);
            var i = parseInt($(className + " .radio > div.on").data('pos'));
            i--;
            if (i < 1) return;
            $(className + " .radio > div").removeClass('on');
            var num = $(className + " .radio > div[data-pos='" + i + "']").addClass('on').attr('data-item');
            $(className + ' .showNumber').attr("data-item", num);
            $(className + ' .showNumber i').text(num);
        });
    },
    threeEndPoints: function(className) {
        $(className + " .radio > div").touch(function() {
            var num = $(this).attr('data-item');
            $(className + " .radio > div").removeClass('on');
            $(this).addClass('on');
            $(className + ' .showNumber').attr("data-item", num);
            $(className + ' .showNumber i').text(num);
        });
    }
};
var _hmt = _hmt || []; (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?addde377030d40efc70b162d4f6e8596";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

const DOMAIN = 'www.aloed.cn';
const API_DOMAIN = window.location.host;
const WS_DOMAIN = 'dashengzhongyuws.lfzgame.com';
const JUMP_DOMAIN = 'www.aloed.cn';
const USE_QRCODE = 0;
const IS_SSL = true;
win.version = '2.0.0';
win.sign = 'dashengzhongyu';
win.token = 'uvWCIzrd8afCB7Abr28iWVnxBpfGVX0g5FZQIQit';
notice.data = '';
var user = {
    "id": "",
    "wechat_id": "19",
    "nickname": "follow my heart",
    "sex": "1",
    "citys": "Chongqing,Shapingba",
    "path": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTLU7AAZsf7SNuyMcwkfeNOIEaDAJKBLE8UrVsQ20s8EMMNcj5cG5ghdGXeibs35dRhH1YvMFFvCzicg\/64",
    "room_cards": 0
};
window.onload = function() {
    win.load();
}
wx.config({
    //appId: 'wxd8803917b97c1289',
    // 必填，公众号的唯一标识
    //timestamp: '1511935492',
    // 必填，生成签名的时间戳
    //nonceStr: 'BOtsiBcj4DohO9ne',
    // 必填，生成签名的随机串
    //signature: '60fcfbad56f79b0873585cff53534e782538de4b',
    // 必填，签名，见附录1
    //jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'getLocation', 'hideOptionMenu']
});
wx.ready(function() {
    if (win.readed == 1) return;
    //win.readed = 1;
    //win.ready();
});
wx.error(function(res) {
    //$.alert('微信API获取失败！');
});