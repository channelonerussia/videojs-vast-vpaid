(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//simple representation of the API

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var IVPAIDAdUnit = exports.IVPAIDAdUnit = function () {
    function IVPAIDAdUnit() {
        _classCallCheck(this, IVPAIDAdUnit);
    }

    _createClass(IVPAIDAdUnit, [{
        key: 'handshakeVersion',

        //all methods below
        //are async methods
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }

        //creativeData is an object to be consistent with VPAIDHTML

    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {}
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {}
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {}
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {}
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {}
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {}
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {}
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(soundVolume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {}
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {}
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {}
    }]);

    return IVPAIDAdUnit;
}();

Object.defineProperty(IVPAIDAdUnit, 'EVENTS', {
    writable: false,
    configurable: false,
    value: ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError']
});

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var IVPAIDAdUnit = require('./IVPAIDAdUnit').IVPAIDAdUnit;
var ALL_VPAID_METHODS = Object.getOwnPropertyNames(IVPAIDAdUnit.prototype).filter(function (property) {
    return ['constructor'].indexOf(property) === -1;
});

var VPAIDAdUnit = exports.VPAIDAdUnit = function (_IVPAIDAdUnit) {
    _inherits(VPAIDAdUnit, _IVPAIDAdUnit);

    function VPAIDAdUnit(flash) {
        _classCallCheck(this, VPAIDAdUnit);

        var _this = _possibleConstructorReturn(this, (VPAIDAdUnit.__proto__ || Object.getPrototypeOf(VPAIDAdUnit)).call(this));

        _this._destroyed = false;
        _this._flash = flash;
        return _this;
    }

    _createClass(VPAIDAdUnit, [{
        key: '_destroy',
        value: function _destroy() {
            var _this2 = this;

            this._destroyed = true;
            ALL_VPAID_METHODS.forEach(function (methodName) {
                _this2._flash.removeCallbackByMethodName(methodName);
            });
            IVPAIDAdUnit.EVENTS.forEach(function (event) {
                _this2._flash.offEvent(event);
            });

            this._flash = null;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._flash.on(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            this._flash.off(eventName, callback);
        }

        //VPAID interface

    }, {
        key: 'handshakeVersion',
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('handshakeVersion', [playerVPAIDVersion], callback);
        }
    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);
            creativeData = creativeData || { AdParameters: '' };
            environmentVars = environmentVars || { flashVars: '' };

            this._flash.callFlashMethod('initAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode, desiredBitrate, creativeData.AdParameters || '', environmentVars.flashVars || ''], callback);
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);

            //resize ad inside the flash
            this._flash.callFlashMethod('resizeAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode], callback);
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('startAd', [], callback);
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('stopAd', [], callback);
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('pauseAd', [], callback);
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('resumeAd', [], callback);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('expandAd', [], callback);
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('collapseAd', [], callback);
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('skipAd', [], callback);
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {
            this._flash.callFlashMethod('getAdLinear', [], callback);
        }
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {
            this._flash.callFlashMethod('getAdWidth', [], callback);
        }
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {
            this._flash.callFlashMethod('getAdHeight', [], callback);
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {
            this._flash.callFlashMethod('getAdExpanded', [], callback);
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {
            this._flash.callFlashMethod('getAdSkippableState', [], callback);
        }
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {
            this._flash.callFlashMethod('getAdRemainingTime', [], callback);
        }
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {
            this._flash.callFlashMethod('getAdDuration', [], callback);
        }
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(volume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('setAdVolume', [volume], callback);
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {
            this._flash.callFlashMethod('getAdVolume', [], callback);
        }
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {
            this._flash.callFlashMethod('getAdCompanions', [], callback);
        }
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {
            this._flash.callFlashMethod('getAdIcons', [], callback);
        }
    }]);

    return VPAIDAdUnit;
}(IVPAIDAdUnit);

},{"./IVPAIDAdUnit":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var swfobject = require('swfobject');

var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var VPAIDAdUnit = require('./VPAIDAdUnit').VPAIDAdUnit;

var noop = require('./utils').noop;
var callbackTimeout = require('./utils').callbackTimeout;
var isPositiveInt = require('./utils').isPositiveInt;
var createElementWithID = require('./utils').createElementWithID;
var uniqueVPAID = require('./utils').unique('vpaid');
var createFlashTester = require('./flashTester.js').createFlashTester;

var ERROR = 'error';
var FLASH_VERSION = '10.1.0';

var flashTester = { isSupported: function isSupported() {
        return true;
    } }; // if the runFlashTest is not run the flashTester will always return true

var VPAIDFLASHClient = function () {
    function VPAIDFLASHClient(vpaidParentEl, callback) {
        var swfConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        var _this = this;

        var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { wmode: 'transparent', salign: 'tl', align: 'left', allowScriptAccess: 'always', scale: 'noScale', allowFullScreen: 'true', quality: 'high' };
        var vpaidOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { debug: false, timeout: 10000 };

        _classCallCheck(this, VPAIDFLASHClient);

        var me = this;

        this._vpaidParentEl = vpaidParentEl;
        this._flashID = uniqueVPAID();
        this._destroyed = false;
        callback = callback || noop;

        swfConfig.width = isPositiveInt(swfConfig.width, 800);
        swfConfig.height = isPositiveInt(swfConfig.height, 400);

        createElementWithID(vpaidParentEl, this._flashID, true);

        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + this._flashID + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER + '&debug=' + vpaidOptions.debug + '&salign=' + params.salign;

        if (!VPAIDFLASHClient.isSupported()) {
            return onError('user don\'t support flash or doesn\'t have the minimum required version of flash ' + FLASH_VERSION);
        }

        this.el = swfobject.createSWF(swfConfig, params, this._flashID);

        if (!this.el) {
            return onError('swfobject failed to create object in element');
        }

        var handler = callbackTimeout(vpaidOptions.timeout, function (err, data) {
            $loadPendedAdUnit.call(_this);
            callback(err, data);
        }, function () {
            callback('vpaid flash load timeout ' + vpaidOptions.timeout);
        });

        this._flash = new JSFlashBridge(this.el, swfConfig.data, this._flashID, swfConfig.width, swfConfig.height, handler);

        function onError(error) {
            setTimeout(function () {
                callback(new Error(error));
            }, 0);
            return me;
        }
    }

    _createClass(VPAIDFLASHClient, [{
        key: 'destroy',
        value: function destroy() {
            this._destroyAdUnit();

            if (this._flash) {
                this._flash.destroy();
                this._flash = null;
            }
            this.el = null;
            this._destroyed = true;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: '_destroyAdUnit',
        value: function _destroyAdUnit() {
            delete this._loadLater;

            if (this._adUnitLoad) {
                this._adUnitLoad = null;
                this._flash.removeCallback(this._adUnitLoad);
            }

            if (this._adUnit) {
                this._adUnit._destroy();
                this._adUnit = null;
            }
        }
    }, {
        key: 'loadAdUnit',
        value: function loadAdUnit(adURL, callback) {
            var _this2 = this;

            $throwIfDestroyed.call(this);

            if (this._adUnit) {
                this._destroyAdUnit();
            }

            if (this._flash.isReady()) {
                this._adUnitLoad = function (err, message) {
                    if (!err) {
                        _this2._adUnit = new VPAIDAdUnit(_this2._flash);
                    }
                    _this2._adUnitLoad = null;
                    callback(err, _this2._adUnit);
                };

                this._flash.callFlashMethod('loadAdUnit', [adURL], this._adUnitLoad);
            } else {
                this._loadLater = { url: adURL, callback: callback };
            }
        }
    }, {
        key: 'unloadAdUnit',
        value: function unloadAdUnit() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            $throwIfDestroyed.call(this);

            this._destroyAdUnit();
            this._flash.callFlashMethod('unloadAdUnit', [], callback);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashID();
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashURL();
        }
    }]);

    return VPAIDFLASHClient;
}();

setStaticProperty('isSupported', function () {
    return swfobject.hasFlashPlayerVersion(FLASH_VERSION) && flashTester.isSupported();
}, true);

setStaticProperty('runFlashTest', function (swfConfig) {
    flashTester = createFlashTester(document.body, swfConfig);
});

function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error('VPAIDFlashToJS is destroyed!');
    }
}

function $loadPendedAdUnit() {
    if (this._loadLater) {
        this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
        delete this._loadLater;
    }
}

function setStaticProperty(propertyName, value) {
    var writable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    Object.defineProperty(VPAIDFLASHClient, propertyName, {
        writable: writable,
        configurable: false,
        value: value
    });
}

VPAIDFLASHClient.swfobject = swfobject;

module.exports = VPAIDFLASHClient;

},{"./VPAIDAdUnit":2,"./flashTester.js":4,"./jsFlashBridge":5,"./utils":8,"swfobject":14}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var swfobject = require('swfobject');

var FLASH_TEST = 'vpaid_video_flash_tester';
var FLASH_TEST_EL = 'vpaid_video_flash_tester_el';
var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var utils = require('./utils');
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;

var FlashTester = function () {
    function FlashTester(parent) {
        var _this = this;

        var swfConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        _classCallCheck(this, FlashTester);

        this.parentEl = utils.createElementWithID(parent, FLASH_TEST_EL); // some browsers create global variables using the element id http://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables
        utils.hideFlashEl(this.parentEl);
        var params = {};
        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + FLASH_TEST_EL + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER;
        params.allowScriptAccess = 'always';

        this.el = swfobject.createSWF(swfConfig, params, FLASH_TEST_EL);
        this._handlers = new MultipleValuesRegistry();
        this._isSupported = false;
        if (this.el) {
            utils.hideFlashEl(this.el);
            this._flash = new JSFlashBridge(this.el, swfConfig.data, FLASH_TEST_EL, swfConfig.width, swfConfig.height, function () {
                var support = true;
                _this._isSupported = support;
                _this._handlers.get('change').forEach(function (callback) {
                    setTimeout(function () {
                        callback('change', support);
                    }, 0);
                });
            });
        }
    }

    _createClass(FlashTester, [{
        key: 'isSupported',
        value: function isSupported() {
            return this._isSupported;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }]);

    return FlashTester;
}();

var createFlashTester = exports.createFlashTester = function createFlashTester(el, swfConfig) {
    if (!window[FLASH_TEST]) {
        window[FLASH_TEST] = new FlashTester(el, swfConfig);
    }
    return window[FLASH_TEST];
};

},{"./jsFlashBridge":5,"./registry":7,"./utils":8,"swfobject":14}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var unique = require('./utils').unique;
var isPositiveInt = require('./utils').isPositiveInt;
var stringEndsWith = require('./utils').stringEndsWith;
var SingleValueRegistry = require('./registry').SingleValueRegistry;
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;
var registry = require('./jsFlashBridgeRegistry');
var VPAID_FLASH_HANDLER = 'vpaid_video_flash_handler';
var ERROR = 'AdError';

var JSFlashBridge = exports.JSFlashBridge = function () {
    function JSFlashBridge(el, flashURL, flashID, width, height, loadHandShake) {
        _classCallCheck(this, JSFlashBridge);

        this._el = el;
        this._flashID = flashID;
        this._flashURL = flashURL;
        this._width = width;
        this._height = height;
        this._handlers = new MultipleValuesRegistry();
        this._callbacks = new SingleValueRegistry();
        this._uniqueMethodIdentifier = unique(this._flashID);
        this._ready = false;
        this._handShakeHandler = loadHandShake;

        registry.addInstance(this._flashID, this);
    }

    _createClass(JSFlashBridge, [{
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            return this._handlers.remove(eventName, callback);
        }
    }, {
        key: 'offEvent',
        value: function offEvent(eventName) {
            return this._handlers.removeByKey(eventName);
        }
    }, {
        key: 'offAll',
        value: function offAll() {
            return this._handlers.removeAll();
        }
    }, {
        key: 'callFlashMethod',
        value: function callFlashMethod(methodName) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            var callbackID = '';
            // if no callback, some methods the return is void so they don't need callback
            if (callback) {
                callbackID = this._uniqueMethodIdentifier() + '_' + methodName;
                this._callbacks.add(callbackID, callback);
            }

            try {
                //methods are created by ExternalInterface.addCallback in as3 code, if for some reason it failed
                //this code will throw an error
                this._el[methodName]([callbackID].concat(args));
            } catch (e) {
                if (callback) {
                    $asyncCallback.call(this, callbackID, e);
                } else {

                    //if there isn't any callback to return error use error event handler
                    this._trigger(ERROR, e);
                }
            }
        }
    }, {
        key: 'removeCallback',
        value: function removeCallback(callback) {
            return this._callbacks.removeByValue(callback);
        }
    }, {
        key: 'removeCallbackByMethodName',
        value: function removeCallbackByMethodName(suffix) {
            var _this = this;

            this._callbacks.filterKeys(function (key) {
                return stringEndsWith(key, suffix);
            }).forEach(function (key) {
                _this._callbacks.remove(key);
            });
        }
    }, {
        key: 'removeAllCallbacks',
        value: function removeAllCallbacks() {
            return this._callbacks.removeAll();
        }
    }, {
        key: '_trigger',
        value: function _trigger(eventName, event) {
            var _this2 = this;

            this._handlers.get(eventName).forEach(function (callback) {
                //clickThru has to be sync, if not will be block by the popupblocker
                if (eventName === 'AdClickThru') {
                    callback(event);
                } else {
                    setTimeout(function () {
                        if (_this2._handlers.get(eventName).length > 0) {
                            callback(event);
                        }
                    }, 0);
                }
            });
        }
    }, {
        key: '_callCallback',
        value: function _callCallback(methodName, callbackID, err, result) {

            var callback = this._callbacks.get(callbackID);

            //not all methods callback's are mandatory
            //but if there exist an error, fire the error event
            if (!callback) {
                if (err && callbackID === '') {
                    this.trigger(ERROR, err);
                }
                return;
            }

            $asyncCallback.call(this, callbackID, err, result);
        }
    }, {
        key: '_handShake',
        value: function _handShake(err, data) {
            this._ready = true;
            if (this._handShakeHandler) {
                this._handShakeHandler(err, data);
                delete this._handShakeHandler;
            }
        }

        //methods like properties specific to this implementation of VPAID

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: this._width, height: this._height };
        }
    }, {
        key: 'setSize',
        value: function setSize(newWidth, newHeight) {
            this._width = isPositiveInt(newWidth, this._width);
            this._height = isPositiveInt(newHeight, this._height);
            this._el.setAttribute('width', this._width);
            this._el.setAttribute('height', this._height);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._width;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(newWidth) {
            this.setSize(newWidth, this._height);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._height;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(newHeight) {
            this.setSize(this._width, newHeight);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            return this._flashID;
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            return this._flashURL;
        }
    }, {
        key: 'isReady',
        value: function isReady() {
            return this._ready;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.offAll();
            this.removeAllCallbacks();
            registry.removeInstanceByID(this._flashID);
            if (this._el.parentElement) {
                this._el.parentElement.removeChild(this._el);
            }
        }
    }]);

    return JSFlashBridge;
}();

function $asyncCallback(callbackID, err, result) {
    var _this3 = this;

    setTimeout(function () {
        var callback = _this3._callbacks.get(callbackID);
        if (callback) {
            _this3._callbacks.remove(callbackID);
            callback(err, result);
        }
    }, 0);
}

Object.defineProperty(JSFlashBridge, 'VPAID_FLASH_HANDLER', {
    writable: false,
    configurable: false,
    value: VPAID_FLASH_HANDLER
});

/**
 * External interface handler
 *
 * @param {string} flashID identifier of the flash who call this
 * @param {string} typeID what type of message is, can be 'event' or 'callback'
 * @param {string} typeName if the typeID is a event the typeName will be the eventName, if is a callback the typeID is the methodName that is related this callback
 * @param {string} callbackID only applies when the typeID is 'callback', identifier of the callback to call
 * @param {object} error error object
 * @param {object} data
 */
window[VPAID_FLASH_HANDLER] = function (flashID, typeID, typeName, callbackID, error, data) {
    var instance = registry.getInstanceByID(flashID);
    if (!instance) return;
    if (typeName === 'handShake') {
        instance._handShake(error, data);
    } else {
        if (typeID !== 'event') {
            instance._callCallback(typeName, callbackID, error, data);
        } else {
            instance._trigger(typeName, data);
        }
    }
};

},{"./jsFlashBridgeRegistry":6,"./registry":7,"./utils":8}],6:[function(require,module,exports){
'use strict';

var SingleValueRegistry = require('./registry').SingleValueRegistry;
var instances = new SingleValueRegistry();

var JSFlashBridgeRegistry = {};
Object.defineProperty(JSFlashBridgeRegistry, 'addInstance', {
    writable: false,
    configurable: false,
    value: function value(id, instance) {
        instances.add(id, instance);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'getInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.get(id);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'removeInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.remove(id);
    }
});

module.exports = JSFlashBridgeRegistry;

},{"./registry":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MultipleValuesRegistry = exports.MultipleValuesRegistry = function () {
    function MultipleValuesRegistry() {
        _classCallCheck(this, MultipleValuesRegistry);

        this._registries = {};
    }

    _createClass(MultipleValuesRegistry, [{
        key: 'add',
        value: function add(id, value) {
            if (!this._registries[id]) {
                this._registries[id] = [];
            }
            if (this._registries[id].indexOf(value) === -1) {
                this._registries[id].push(value);
            }
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id] || [];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this._registries[key].indexOf(value) !== -1;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(key, value) {
            if (!this._registries[key]) {
                return;
            }

            var index = this._registries[key].indexOf(value);

            if (index < 0) {
                return;
            }
            return this._registries[key].splice(index, 1);
        }
    }, {
        key: 'removeByKey',
        value: function removeByKey(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this2 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this2.remove(key, value);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return MultipleValuesRegistry;
}();

var SingleValueRegistry = exports.SingleValueRegistry = function () {
    function SingleValueRegistry() {
        _classCallCheck(this, SingleValueRegistry);

        this._registries = {};
    }

    _createClass(SingleValueRegistry, [{
        key: 'add',
        value: function add(id, value) {
            this._registries[id] = value;
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this3 = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this3._registries[key] === value;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this4 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this4.remove(key);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return SingleValueRegistry;
}();

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = unique;
exports.noop = noop;
exports.callbackTimeout = callbackTimeout;
exports.createElementWithID = createElementWithID;
exports.isPositiveInt = isPositiveInt;
exports.stringEndsWith = stringEndsWith;
exports.hideFlashEl = hideFlashEl;
function unique(prefix) {
    var count = -1;
    return function (f) {
        return prefix + '_' + ++count;
    };
}

function noop() {}

function callbackTimeout(timer, onSuccess, onTimeout) {

    var timeout = setTimeout(function () {

        onSuccess = noop;
        onTimeout();
    }, timer);

    return function () {
        clearTimeout(timeout);
        onSuccess.apply(this, arguments);
    };
}

function createElementWithID(parent, id) {
    var cleanContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var nEl = document.createElement('div');
    nEl.id = id;
    if (cleanContent) {
        parent.innerHTML = '';
    }
    parent.appendChild(nEl);
    return nEl;
}

function isPositiveInt(newVal, oldVal) {
    return !isNaN(parseFloat(newVal)) && isFinite(newVal) && newVal > 0 ? newVal : oldVal;
}

var endsWith = function () {
    if (String.prototype.endsWith) return String.prototype.endsWith;
    return function endsWith(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}();

function stringEndsWith(string, search) {
    return endsWith.call(string, search);
}

function hideFlashEl(el) {
    // can't use display none or visibility none because will block flash in some browsers
    el.style.position = 'absolute';
    el.style.left = '-1px';
    el.style.top = '-1px';
    el.style.width = '1px';
    el.style.height = '1px';
}

},{}],9:[function(require,module,exports){
'use strict';

var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}


},{}],10:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el /*,
        videoSlot: this._videoEl*/
    }, environmentVars || {});

    width = parseInt(width);
    height = parseInt(height);
    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;


},{"./IVPAIDAdUnit":9,"./subscriber":12,"./utils":13}],11:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    if(this._onLoad){ return }

    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;
window.VPAIDHTML5Client = VPAIDHTML5Client;

},{"./VPAIDAdUnit":10,"./utils":13}],12:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;


},{}],13:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearTimeout(timeout);
        }
    };

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    if(element) {
        element.style.position = 'absolute';
        element.style.left = '0';
        element.style.top = '0';
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
    }
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};


},{}],14:[function(require,module,exports){
/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/* global ActiveXObject: false */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.swfobject = factory();
  }
}(this, function () {

    var UNDEF = "undefined",
        OBJECT = "object",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        EXPRESS_INSTALL_ID = "SWFObjectExprInst",
        ON_READY_STATE_CHANGE = "onreadystatechange",

        win = window,
        doc = document,
        nav = navigator,

        plugin = false,
        domLoadFnArr = [],
        regObjArr = [],
        objIdArr = [],
        listenersArr = [],
        storedFbContent,
        storedFbContentId,
        storedCallbackFn,
        storedCallbackObj,
        isDomLoaded = false,
        isExpressInstallActive = false,
        dynamicStylesheet,
        dynamicStylesheetMedia,
        autoHideShow = true,
        encodeURIEnabled = false,

    /* Centralized function for browser feature detection
        - User agent string detection is only used when no good alternative is possible
        - Is executed directly for optimal performance
    */
    ua = function () {
        var w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF,
            u = nav.userAgent.toLowerCase(),
            p = nav.platform.toLowerCase(),
            windows = p ? /win/.test(p) : /win/.test(u),
            mac = p ? /mac/.test(p) : /mac/.test(u),
            webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
            ie = nav.appName === "Microsoft Internet Explorer",
            playerVersion = [0, 0, 0],
            d = null;
        if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
            if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                plugin = true;
                ie = false; // cascaded feature detection for Internet Explorer
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
                playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
                playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
            }
        }
        else if (typeof win.ActiveXObject !== UNDEF) {
            try {
                var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                if (a) { // a will return null when ActiveX is disabled
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true; // cascaded feature detection for Internet Explorer
                        d = d.split(" ")[1].split(",");
                        playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                    }
                }
            }
            catch (e) {}
        }
        return {w3: w3cdom, pv: playerVersion, wk: webkit, ie: ie, win: windows, mac: mac};
    }(),

    /* Cross-browser onDomLoad
        - Will fire an event as soon as the DOM of a web page is loaded
        - Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
        - Regular onload serves as fallback
    */
    onDomLoad = function () {
        if (!ua.w3) { return; }
        if ((typeof doc.readyState !== UNDEF && (doc.readyState === "complete" || doc.readyState === "interactive")) || (typeof doc.readyState === UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically
            callDomLoadFunctions();
        }
        if (!isDomLoaded) {
            if (typeof doc.addEventListener !== UNDEF) {
                doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
            }
            if (ua.ie) {
                doc.attachEvent(ON_READY_STATE_CHANGE, function detach() {
                    if (doc.readyState === "complete") {
                        doc.detachEvent(ON_READY_STATE_CHANGE, detach);
                        callDomLoadFunctions();
                    }
                });
                if (win == top) { // if not inside an iframe
                    (function checkDomLoadedIE() {
                        if (isDomLoaded) { return; }
                        try {
                            doc.documentElement.doScroll("left");
                        }
                        catch (e) {
                            setTimeout(checkDomLoadedIE, 0);
                            return;
                        }
                        callDomLoadFunctions();
                    }());
                }
            }
            if (ua.wk) {
                (function checkDomLoadedWK() {
                    if (isDomLoaded) { return; }
                    if (!/loaded|complete/.test(doc.readyState)) {
                        setTimeout(checkDomLoadedWK, 0);
                        return;
                    }
                    callDomLoadFunctions();
                }());
            }
        }
    }();

    function callDomLoadFunctions() {
        if (isDomLoaded || !document.getElementsByTagName("body")[0]) { return; }
        try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
            var t, span = createElement("span");
            span.style.display = "none"; //hide the span in case someone has styled spans via CSS
            t = doc.getElementsByTagName("body")[0].appendChild(span);
            t.parentNode.removeChild(t);
            t = null; //clear the variables
            span = null;
        }
        catch (e) { return; }
        isDomLoaded = true;
        var dl = domLoadFnArr.length;
        for (var i = 0; i < dl; i++) {
            domLoadFnArr[i]();
        }
    }

    function addDomLoadEvent(fn) {
        if (isDomLoaded) {
            fn();
        }
        else {
            domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
        }
    }

    /* Cross-browser onload
        - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
        - Will fire an event as soon as a web page including all of its assets are loaded
     */
    function addLoadEvent(fn) {
        if (typeof win.addEventListener !== UNDEF) {
            win.addEventListener("load", fn, false);
        }
        else if (typeof doc.addEventListener !== UNDEF) {
            doc.addEventListener("load", fn, false);
        }
        else if (typeof win.attachEvent !== UNDEF) {
            addListener(win, "onload", fn);
        }
        else if (typeof win.onload === "function") {
            var fnOld = win.onload;
            win.onload = function () {
                fnOld();
                fn();
            };
        }
        else {
            win.onload = fn;
        }
    }

    /* Detect the Flash Player version for non-Internet Explorer browsers
        - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
          a. Both release and build numbers can be detected
          b. Avoid wrong descriptions by corrupt installers provided by Adobe
          c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
        - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
    */
    function testPlayerVersion() {
        var b = doc.getElementsByTagName("body")[0];
        var o = createElement(OBJECT);
        o.setAttribute("style", "visibility: hidden;");
        o.setAttribute("type", FLASH_MIME_TYPE);
        var t = b.appendChild(o);
        if (t) {
            var counter = 0;
            (function checkGetVariable() {
                if (typeof t.GetVariable !== UNDEF) {
                    try {
                        var d = t.GetVariable("$version");
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            ua.pv = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                        }
                    } catch (e) {
                        //t.GetVariable("$version") is known to fail in Flash Player 8 on Firefox
                        //If this error is encountered, assume FP8 or lower. Time to upgrade.
                        ua.pv = [8, 0, 0];
                    }
                }
                else if (counter < 10) {
                    counter++;
                    setTimeout(checkGetVariable, 10);
                    return;
                }
                b.removeChild(o);
                t = null;
                matchVersions();
            }());
        }
        else {
            matchVersions();
        }
    }

    /* Perform Flash Player and SWF version matching; static publishing only
    */
    function matchVersions() {
        var rl = regObjArr.length;
        if (rl > 0) {
            for (var i = 0; i < rl; i++) { // for each registered object element
                var id = regObjArr[i].id;
                var cb = regObjArr[i].callbackFn;
                var cbObj = {success: false, id: id};
                if (ua.pv[0] > 0) {
                    var obj = getElementById(id);
                    if (obj) {
                        if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
                            setVisibility(id, true);
                            if (cb) {
                                cbObj.success = true;
                                cbObj.ref = getObjectById(id);
                                cbObj.id = id;
                                cb(cbObj);
                            }
                        }
                        else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
                            var att = {};
                            att.data = regObjArr[i].expressInstall;
                            att.width = obj.getAttribute("width") || "0";
                            att.height = obj.getAttribute("height") || "0";
                            if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
                            if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
                            // parse HTML object param element's name-value pairs
                            var par = {};
                            var p = obj.getElementsByTagName("param");
                            var pl = p.length;
                            for (var j = 0; j < pl; j++) {
                                if (p[j].getAttribute("name").toLowerCase() !== "movie") {
                                    par[p[j].getAttribute("name")] = p[j].getAttribute("value");
                                }
                            }
                            showExpressInstall(att, par, id, cb);
                        }
                        else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display fallback content instead of SWF
                            displayFbContent(obj);
                            if (cb) { cb(cbObj); }
                        }
                    }
                }
                else { // if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or fallback content)
                    setVisibility(id, true);
                    if (cb) {
                        var o = getObjectById(id); // test whether there is an HTML object element or not
                        if (o && typeof o.SetVariable !== UNDEF) {
                            cbObj.success = true;
                            cbObj.ref = o;
                            cbObj.id = o.id;
                        }
                        cb(cbObj);
                    }
                }
            }
        }
    }

    /* Main function
        - Will preferably execute onDomLoad, otherwise onload (as a fallback)
    */
    domLoadFnArr[0] = function () {
        if (plugin) {
            testPlayerVersion();
        }
        else {
            matchVersions();
        }
    };

    function getObjectById(objectIdStr) {
        var r = null,
            o = getElementById(objectIdStr);

        if (o && o.nodeName.toUpperCase() === "OBJECT") {
            //If targeted object is valid Flash file
            if (typeof o.SetVariable !== UNDEF) {
                r = o;
            } else {
                //If SetVariable is not working on targeted object but a nested object is
                //available, assume classic nested object markup. Return nested object.

                //If SetVariable is not working on targeted object and there is no nested object,
                //return the original object anyway. This is probably new simplified markup.

                r = o.getElementsByTagName(OBJECT)[0] || o;
            }
        }

        return r;
    }

    /* Requirements for Adobe Express Install
        - only one instance can be active at a time
        - fp 6.0.65 or higher
        - Win/Mac OS only
        - no Webkit engines older than version 312
    */
    function canExpressInstall() {
        return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
    }

    /* Show the Adobe Express Install dialog
        - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
    */
    function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {

        var obj = getElementById(replaceElemIdStr);

        //Ensure that replaceElemIdStr is really a string and not an element
        replaceElemIdStr = getId(replaceElemIdStr);

        isExpressInstallActive = true;
        storedCallbackFn = callbackFn || null;
        storedCallbackObj = {success: false, id: replaceElemIdStr};

        if (obj) {
            if (obj.nodeName.toUpperCase() === "OBJECT") { // static publishing
                storedFbContent = abstractFbContent(obj);
                storedFbContentId = null;
            }
            else { // dynamic publishing
                storedFbContent = obj;
                storedFbContentId = replaceElemIdStr;
            }
            att.id = EXPRESS_INSTALL_ID;
            if (typeof att.width === UNDEF || (!/%$/.test(att.width) && toInt(att.width) < 310)) { att.width = "310"; }
            if (typeof att.height === UNDEF || (!/%$/.test(att.height) && toInt(att.height) < 137)) { att.height = "137"; }
            var pt = ua.ie ? "ActiveX" : "PlugIn",
                fv = "MMredirectURL=" + encodeURIComponent(win.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + pt + "&MMdoctitle=" + encodeURIComponent(doc.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof par.flashvars !== UNDEF) {
                par.flashvars += "&" + fv;
            }
            else {
                par.flashvars = fv;
            }
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            if (ua.ie && obj.readyState != 4) {
                var newObj = createElement("div");
                replaceElemIdStr += "SWFObjectNew";
                newObj.setAttribute("id", replaceElemIdStr);
                obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
                obj.style.display = "none";
                removeSWF(obj); //removeSWF accepts elements now
            }
            createSWF(att, par, replaceElemIdStr);
        }
    }

    /* Functions to abstract and display fallback content
    */
    function displayFbContent(obj) {
        if (ua.ie && obj.readyState != 4) {
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            obj.style.display = "none";
            var el = createElement("div");
            obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the fallback content
            el.parentNode.replaceChild(abstractFbContent(obj), el);
            removeSWF(obj); //removeSWF accepts elements now
        }
        else {
            obj.parentNode.replaceChild(abstractFbContent(obj), obj);
        }
    }

    function abstractFbContent(obj) {
        var ac = createElement("div");
        if (ua.win && ua.ie) {
            ac.innerHTML = obj.innerHTML;
        }
        else {
            var nestedObj = obj.getElementsByTagName(OBJECT)[0];
            if (nestedObj) {
                var c = nestedObj.childNodes;
                if (c) {
                    var cl = c.length;
                    for (var i = 0; i < cl; i++) {
                        if (!(c[i].nodeType == 1 && c[i].nodeName === "PARAM") && !(c[i].nodeType == 8)) {
                            ac.appendChild(c[i].cloneNode(true));
                        }
                    }
                }
            }
        }
        return ac;
    }

    function createIeObject(url, paramStr) {
        var div = createElement("div");
        div.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + url + "'>" + paramStr + "</object>";
        return div.firstChild;
    }

    /* Cross-browser dynamic SWF creation
    */
    function createSWF(attObj, parObj, id) {
        var r, el = getElementById(id);
        id = getId(id); // ensure id is truly an ID and not an element

        if (ua.wk && ua.wk < 312) { return r; }

        if (el) {
            var o = (ua.ie) ? createElement("div") : createElement(OBJECT),
                attr,
                attrLower,
                param;

            if (typeof attObj.id === UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the fallback content
                attObj.id = id;
            }

            //Add params
            for (param in parObj) {
                //filter out prototype additions from other potential libraries and IE specific param element
                if (parObj.hasOwnProperty(param) && param.toLowerCase() !== "movie") {
                    createObjParam(o, param, parObj[param]);
                }
            }

            //Create IE object, complete with param nodes
            if (ua.ie) { o = createIeObject(attObj.data, o.innerHTML); }

            //Add attributes to object
            for (attr in attObj) {
                if (attObj.hasOwnProperty(attr)) { // filter out prototype additions from other potential libraries
                    attrLower = attr.toLowerCase();

                    // 'class' is an ECMA4 reserved keyword
                    if (attrLower === "styleclass") {
                        o.setAttribute("class", attObj[attr]);
                    } else if (attrLower !== "classid" && attrLower !== "data") {
                        o.setAttribute(attr, attObj[attr]);
                    }
                }
            }

            if (ua.ie) {
                objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
            } else {
                o.setAttribute("type", FLASH_MIME_TYPE);
                o.setAttribute("data", attObj.data);
            }

            el.parentNode.replaceChild(o, el);
            r = o;
        }

        return r;
    }

    function createObjParam(el, pName, pValue) {
        var p = createElement("param");
        p.setAttribute("name", pName);
        p.setAttribute("value", pValue);
        el.appendChild(p);
    }

    /* Cross-browser SWF removal
        - Especially needed to safely and completely remove a SWF in Internet Explorer
    */
    function removeSWF(id) {
        var obj = getElementById(id);
        if (obj && obj.nodeName.toUpperCase() === "OBJECT") {
            if (ua.ie) {
                obj.style.display = "none";
                (function removeSWFInIE() {
                    if (obj.readyState == 4) {
                        //This step prevents memory leaks in Internet Explorer
                        for (var i in obj) {
                            if (typeof obj[i] === "function") {
                                obj[i] = null;
                            }
                        }
                        obj.parentNode.removeChild(obj);
                    } else {
                        setTimeout(removeSWFInIE, 10);
                    }
                }());
            }
            else {
                obj.parentNode.removeChild(obj);
            }
        }
    }

    function isElement(id) {
        return (id && id.nodeType && id.nodeType === 1);
    }

    function getId(thing) {
        return (isElement(thing)) ? thing.id : thing;
    }

    /* Functions to optimize JavaScript compression
    */
    function getElementById(id) {

        //Allow users to pass an element OR an element's ID
        if (isElement(id)) { return id; }

        var el = null;
        try {
            el = doc.getElementById(id);
        }
        catch (e) {}
        return el;
    }

    function createElement(el) {
        return doc.createElement(el);
    }

    //To aid compression; replaces 14 instances of pareseInt with radix
    function toInt(str) {
        return parseInt(str, 10);
    }

    /* Updated attachEvent function for Internet Explorer
        - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
    */
    function addListener(target, eventType, fn) {
        target.attachEvent(eventType, fn);
        listenersArr[listenersArr.length] = [target, eventType, fn];
    }

    /* Flash Player and SWF content version matching
    */
    function hasPlayerVersion(rv) {
        rv += ""; //Coerce number to string, if needed.
        var pv = ua.pv, v = rv.split(".");
        v[0] = toInt(v[0]);
        v[1] = toInt(v[1]) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
        v[2] = toInt(v[2]) || 0;
        return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
    }

    /* Cross-browser dynamic CSS creation
        - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
    */
    function createCSS(sel, decl, media, newStyle) {
        var h = doc.getElementsByTagName("head")[0];
        if (!h) { return; } // to also support badly authored HTML pages that lack a head element
        var m = (typeof media === "string") ? media : "screen";
        if (newStyle) {
            dynamicStylesheet = null;
            dynamicStylesheetMedia = null;
        }
        if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
            // create dynamic stylesheet + get a global reference to it
            var s = createElement("style");
            s.setAttribute("type", "text/css");
            s.setAttribute("media", m);
            dynamicStylesheet = h.appendChild(s);
            if (ua.ie && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
                dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
            }
            dynamicStylesheetMedia = m;
        }
        // add style rule
        if (dynamicStylesheet) {
            if (typeof dynamicStylesheet.addRule !== UNDEF) {
                dynamicStylesheet.addRule(sel, decl);
            } else if (typeof doc.createTextNode !== UNDEF) {
                dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
            }
        }
    }

    function setVisibility(id, isVisible) {
        if (!autoHideShow) { return; }
        var v = isVisible ? "visible" : "hidden",
            el = getElementById(id);
        if (isDomLoaded && el) {
            el.style.visibility = v;
        } else if (typeof id === "string") {
            createCSS("#" + id, "visibility:" + v);
        }
    }

    /* Filter to avoid XSS attacks
    */
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) !== null;
        return hasBadChars && typeof encodeURIComponent !== UNDEF ? encodeURIComponent(s) : s;
    }

    /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
    */
    var cleanup = function () {
        if (ua.ie) {
            window.attachEvent("onunload", function () {
                // remove listeners to avoid memory leaks
                var ll = listenersArr.length;
                for (var i = 0; i < ll; i++) {
                    listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                }
                // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                var il = objIdArr.length;
                for (var j = 0; j < il; j++) {
                    removeSWF(objIdArr[j]);
                }
                // cleanup library's main closures to avoid memory leaks
                for (var k in ua) {
                    ua[k] = null;
                }
                ua = null;
                for (var l in swfobject) {
                    swfobject[l] = null;
                }
                swfobject = null;
            });
        }
    }();

    return {
        /* Public API
            - Reference: http://code.google.com/p/swfobject/wiki/documentation
        */
        registerObject: function (objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
            if (ua.w3 && objectIdStr && swfVersionStr) {
                var regObj = {};
                regObj.id = objectIdStr;
                regObj.swfVersion = swfVersionStr;
                regObj.expressInstall = xiSwfUrlStr;
                regObj.callbackFn = callbackFn;
                regObjArr[regObjArr.length] = regObj;
                setVisibility(objectIdStr, false);
            }
            else if (callbackFn) {
                callbackFn({success: false, id: objectIdStr});
            }
        },

        getObjectById: function (objectIdStr) {
            if (ua.w3) {
                return getObjectById(objectIdStr);
            }
        },

        embedSWF: function (swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {

            var id = getId(replaceElemIdStr),
                callbackObj = {success: false, id: id};

            if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
                setVisibility(id, false);
                addDomLoadEvent(function () {
                    widthStr += ""; // auto-convert to string
                    heightStr += "";
                    var att = {};
                    if (attObj && typeof attObj === OBJECT) {
                        for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
                            att[i] = attObj[i];
                        }
                    }
                    att.data = swfUrlStr;
                    att.width = widthStr;
                    att.height = heightStr;
                    var par = {};
                    if (parObj && typeof parObj === OBJECT) {
                        for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
                            par[j] = parObj[j];
                        }
                    }
                    if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                        for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
                            if (flashvarsObj.hasOwnProperty(k)) {

                                var key = (encodeURIEnabled) ? encodeURIComponent(k) : k,
                                    value = (encodeURIEnabled) ? encodeURIComponent(flashvarsObj[k]) : flashvarsObj[k];

                                if (typeof par.flashvars !== UNDEF) {
                                    par.flashvars += "&" + key + "=" + value;
                                }
                                else {
                                    par.flashvars = key + "=" + value;
                                }

                            }
                        }
                    }
                    if (hasPlayerVersion(swfVersionStr)) { // create SWF
                        var obj = createSWF(att, par, replaceElemIdStr);
                        if (att.id == id) {
                            setVisibility(id, true);
                        }
                        callbackObj.success = true;
                        callbackObj.ref = obj;
                        callbackObj.id = obj.id;
                    }
                    else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
                        att.data = xiSwfUrlStr;
                        showExpressInstall(att, par, replaceElemIdStr, callbackFn);
                        return;
                    }
                    else { // show fallback content
                        setVisibility(id, true);
                    }
                    if (callbackFn) { callbackFn(callbackObj); }
                });
            }
            else if (callbackFn) { callbackFn(callbackObj); }
        },

        switchOffAutoHideShow: function () {
            autoHideShow = false;
        },

        enableUriEncoding: function (bool) {
            encodeURIEnabled = (typeof bool === UNDEF) ? true : bool;
        },

        ua: ua,

        getFlashPlayerVersion: function () {
            return {major: ua.pv[0], minor: ua.pv[1], release: ua.pv[2]};
        },

        hasFlashPlayerVersion: hasPlayerVersion,

        createSWF: function (attObj, parObj, replaceElemIdStr) {
            if (ua.w3) {
                return createSWF(attObj, parObj, replaceElemIdStr);
            }
            else {
                return undefined;
            }
        },

        showExpressInstall: function (att, par, replaceElemIdStr, callbackFn) {
            if (ua.w3 && canExpressInstall()) {
                showExpressInstall(att, par, replaceElemIdStr, callbackFn);
            }
        },

        removeSWF: function (objElemIdStr) {
            if (ua.w3) {
                removeSWF(objElemIdStr);
            }
        },

        createCSS: function (selStr, declStr, mediaStr, newStyleBoolean) {
            if (ua.w3) {
                createCSS(selStr, declStr, mediaStr, newStyleBoolean);
            }
        },

        addDomLoadEvent: addDomLoadEvent,

        addLoadEvent: addLoadEvent,

        getQueryParamValue: function (param) {
            var q = doc.location.search || doc.location.hash;
            if (q) {
                if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
                if (!param) {
                    return urlEncodeIfNecessary(q);
                }
                var pairs = q.split("&");
                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                        return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },

        // For internal usage only
        expressInstallCallback: function () {
            if (isExpressInstallActive) {
                var obj = getElementById(EXPRESS_INSTALL_ID);
                if (obj && storedFbContent) {
                    obj.parentNode.replaceChild(storedFbContent, obj);
                    if (storedFbContentId) {
                        setVisibility(storedFbContentId, true);
                        if (ua.ie) { storedFbContent.style.display = "block"; }
                    }
                    if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
                }
                isExpressInstallActive = false;
            }
        },

        version: "2.3"

    };
}));

},{}],15:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function(adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;
},{"./InLine":18,"./Wrapper":28}],16:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  logger.info ("<Companion> found companion ad");
  logger.debug ("<Companion>  companionJTree:", companionJTree);

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  logger.info ("<Companion>  creativeType: " + this.creativeType);
  logger.info ("<Companion>  staticResource: " + this.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }

  if (htmlResource !== null)
  {
    logger.info ("<Companion> found html resource", htmlResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }

  if (iframeResource !== null)
  {
    logger.info ("<Companion> found iframe resource", iframeResource);
  }

  this.iframeResource = iframeResource;

  //Optional fields
  this.id = xml.attr(companionJTree, 'id');
  this.width = xml.attr(companionJTree, 'width');
  this.height = xml.attr(companionJTree, 'height');
  this.expandedWidth = xml.attr(companionJTree, 'expandedWidth');
  this.expandedHeight = xml.attr(companionJTree, 'expandedHeight');
  this.scalable = xml.attr(companionJTree, 'scalable');
  this.maintainAspectRatio = xml.attr(companionJTree, 'maintainAspectRatio');
  this.minSuggestedDuration = xml.attr(companionJTree, 'minSuggestedDuration');
  this.apiFramework = xml.attr(companionJTree, 'apiFramework');
  this.companionClickThrough = xml.keyValue(companionJTree.companionClickThrough);
  this.trackingEvents = parseTrackingEvents(companionJTree.trackingEvents && companionJTree.trackingEvents.tracking);

  logger.info ("<Companion>  companionClickThrough: " + this.companionClickThrough);


  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData));
      });
    }
    return trackings;
  }
}

module.exports = Companion;
},{"../../utils/consoleLogger":41,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./TrackingEvent":21}],17:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');
var Companion = require('./Companion');
var utilities = require('../../utils/utilityFunctions');

function Creative(creativeJTree) {
  if(!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if(creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }

  if (creativeJTree.companionAds) {
    var companions = [];
    var companionAds = creativeJTree.companionAds && creativeJTree.companionAds.companion;
    if (utilities.isDefined(companionAds)) {
      companionAds = utilities.isArray(companionAds) ? companionAds : [companionAds];
      companionAds.forEach(function (companionData) {
        companions.push(new Companion(companionData));
      });
    }
    this.companionAds = companions;
  }
}

/**
 * Returns true if the browser supports at the creative.
 */
Creative.prototype.isSupported = function(){
  if(this.linear) {
    return this.linear.isSupported();
  }

  return true;
};

Creative.parseCreatives = function parseCreatives(creativesJTree) {
  var creatives = [];
  var creativesData;
  if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
    creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
    creativesData.forEach(function (creative) {
      creatives.push(new Creative(creative));
    });
  }
  return creatives;
};

module.exports = Creative;

},{"../../utils/utilityFunctions":47,"./Companion":16,"./Linear":19}],18:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var parsers = require('./parsers');
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = Creative.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  this.error = xml.keyValue(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;

  if (this.extensions && this.extensions.extension) {
    this.times = parseExtensions(this.extensions.extension);
  }

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if(utilities.isNotEmptyString(survey.keyValue)){
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }

  function parseExtensions(extData) {
    var times = {};
    if (extData) {
      extData = utilities.isArray(extData) ? extData : [extData];
      extData.forEach(function (_extData) {
        var time = parsers.time(_extData.keyValue);
        if (time) times[_extData.attr('type')] = time;
      });
    }
    return times;
  }
}


/**
 * Returns true if the browser supports all the creatives.
 */
InLine.prototype.isSupported = function(){
  var i,len;

  if(this.creatives.length === 0) {
    return false;
  }

  for(i = 0, len = this.creatives.length; i< len; i+=1){
    if(!this.creatives[i].isSupported()){
      return false;
    }
  }
  return true;
};

module.exports = InLine;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./parsers":29,"./vastUtil":30}],19:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');


function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if(linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
      this.adParameters = xml.decode(this.adParameters);
    }
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }
}

/**
 * Must return true if at least one of the MediaFiles' type is supported
 */
Linear.prototype.isSupported = function () {
  var i, len;
  for(i=0, len=this.mediaFiles.length; i<len; i+=1) {
    if(this.mediaFiles[i].isSupported()) {
      return true;
    }
  }

  return false;
};

module.exports = Linear;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./MediaFile":20,"./TrackingEvent":21,"./VideoClicks":27,"./parsers":29}],20:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');

var attributesList = [
  //Required attributes
  'delivery',
  'type',
  'width',
  'height',
  //Optional attributes
  'codec',
  'id',
  'bitrate',
  'minBitrate',
  'maxBitrate',
  'scalable',
  'maintainAspectRatio',
  'apiFramework'
];

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);

  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = mediaFileJTree.attr(attribute);
  }
}

MediaFile.prototype.isSupported = function(){
  if(vastUtil.isVPAID(this)) {
    return !!vastUtil.findSupportedVPAIDTech(this.type);
  }

  if (this.type === 'video/x-flv') {
    return vastUtil.isFlashSupported();
  }

  return true;
};

module.exports = MediaFile;

},{"../../utils/xml":48,"./vastUtil":30}],21:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;
},{"../../utils/xml":48,"./parsers":29}],22:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');

function VASTClient(options) {
  if (!(this instanceof VASTClient)) {
    return new VASTClient(options);
  }
  var defaultOptions = {
    WRAPPER_LIMIT: 5
  };

  options = options || {};
  this.settings = utilities.extend({}, options, defaultOptions);
  this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
  var that = this;

  var error = sanityCheck(adTagUrl, callback);
  if (error) {
    if (utilities.isFunction(callback)) {
      return callback(error);
    }
    throw error;
  }

  async.waterfall([
      this._getVASTAd.bind(this, adTagUrl),
      buildVASTResponse
    ],
    callback);

  /*** Local functions ***/
  function buildVASTResponse(adsChain, cb) {
    try {
      var response = that._buildVASTResponse(adsChain);
      cb(null, response);
    } catch (e) {
      cb(e);
    }
  }

  function sanityCheck(adTagUrl, cb) {
    if (!adTagUrl) {
      return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
    }

    if (!utilities.isFunction(cb)) {
      return new VASTError('on VASTClient.getVASTResponse, missing callback function');
    }
  }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
  var that = this;

  getAdWaterfall(adTagUrl, function (error, vastTree) {
    var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
    if (error) {
      that._trackError(error, waterfallAds);
      return callback(error, waterfallAds);
    }

    getAd(waterfallAds.shift(), [], waterfallHandler);

    /*** Local functions ***/
    function waterfallHandler(error, adChain) {
      if (error) {
        that._trackError(error, adChain);
        if (waterfallAds.length > 0) {
          getAd(waterfallAds.shift(),[], waterfallHandler);
        } else {
          callback(error, adChain);
        }
      } else {
        callback(null, adChain);
      }
    }
  });

  /*** Local functions ***/
  function getAdWaterfall(adTagUrl, callback) {
    var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
    async.waterfall([
      requestVastXML,
      buildVastWaterfall
    ], callback);
  }

  function buildVastWaterfall(xmlStr, callback) {
    var vastTree;
    try {
      vastTree = xml.toJXONTree(xmlStr);
      logger.debug ("built JXONTree from VAST response:", vastTree);

      if(utilities.isArray(vastTree.ad)) {
        vastTree.ads = vastTree.ad;
      } else if(vastTree.ad){
        vastTree.ads = [vastTree.ad];
      } else {
        vastTree.ads = [];
      }
      callback(validateVASTTree(vastTree), vastTree);

    } catch (e) {
      callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
    }
  }

  function validateVASTTree(vastTree) {
    var vastVersion = xml.attr(vastTree, 'version');

    if (!vastTree.ad) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
    }

    if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
    }

    return null;
  }

  function getAd(adTagUrl, adChain, callback) {
    if (adChain.length >= that.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
    }

    async.waterfall([
      function (next) {
        if (utilities.isString(adTagUrl)) {
          requestVASTAd(adTagUrl, next);
        } else {
          next(null, adTagUrl);
        }
      },
      buildAd
    ], function (error, ad) {
      if (ad) {
        adChain.push(ad);
      }

      if (error) {
        return callback(error, adChain);
      }

      if (ad.wrapper) {
        return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
      }

      return callback(null, adChain);
    });
  }

  function buildAd(adJxonTree, callback) {
    try {
      var ad = new Ad(adJxonTree);
      callback(validateAd(ad), ad);
    } catch (e) {
      callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
    }
  }

  function validateAd(ad) {
    var wrapper = ad.wrapper;
    var inLine = ad.inLine;
    var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

    if (inLine && wrapper) {
      return new VASTError(errMsgPrefix +"InLine and Wrapper both found on the same Ad", 101);
    }

    if (!inLine && !wrapper) {
      return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
    }

    if (inLine && !inLine.isSupported()) {
      return new VASTError(errMsgPrefix + "could not find MediaFile that is supported by this video player", 403);
    }

    if (wrapper && !wrapper.VASTAdTagURI) {
      return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
    }

    return null;
  }

  function requestVASTAd(adTagUrl, callback) {
    that._requestVASTXml(adTagUrl, function (error, xmlStr) {
      if (error) {
        return callback(error);
      }
      try {
        var vastTree = xml.toJXONTree(xmlStr);
        callback(validateVASTTree(vastTree), vastTree.ad);
      } catch (e) {
        callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
      }
    });
  }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
  try {
    if (utilities.isFunction(adTagUrl)) {
      adTagUrl(requestHandler);
    } else {
      logger.info ("requesting adTagUrl: " + adTagUrl);
      http.get(adTagUrl, requestHandler, {
        withCredentials: true
      });
    }
  } catch (e) {
    callback(e);
  }

  /*** Local functions ***/
  function requestHandler(error, response, status) {
    if (error) {
      var errMsg = utilities.isDefined(status) ?
      "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" :
        "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
      return callback(new VASTError(errMsg, 301), null);
    }

    callback(null, response);
  }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
  var response = new VASTResponse();
  addAdsToResponse(response, adsChain);
  validateResponse(response);

  return response;

  //*** Local function ****
  function addAdsToResponse(response, ads) {
    ads.forEach(function (ad) {
      response.addAd(ad);
    });
  }

  function validateResponse(response) {
    var progressEvents = response.trackingEvents.progress;

    if (!response.hasLinear()) {
      throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
    }

    if (response.duration === undefined) {
      throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
    }

    if (progressEvents) {
      progressEvents.forEach(function (progressEvent) {
        if (!utilities.isNumber(progressEvent.offset)) {
          throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
        }
      });
    }
  }
};

VASTClient.prototype._trackError = function (error, adChain) {
  if (!utilities.isArray(adChain) || adChain.length === 0) { //There is nothing to track
    return;
  }

  var errorURLMacros = [];
  adChain.forEach(addErrorUrlMacros);
  vastUtil.track(errorURLMacros, {ERRORCODE: error.code || 900});  //900 <== Undefined error

  /*** Local functions  ***/
  function addErrorUrlMacros(ad) {
    if (ad.wrapper && ad.wrapper.error) {
      errorURLMacros.push(ad.wrapper.error);
    }

    if (ad.inLine && ad.inLine.error) {
      errorURLMacros.push(ad.inLine.error);
    }
  }
};

module.exports = VASTClient;

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/http":43,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],23:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;
},{}],24:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VASTIntegrator(player) {
  if (!(this instanceof VASTIntegrator)) {
    return new VASTIntegrator(player);
  }

  this.player = player;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
  }

  async.waterfall([
    function (next) {
      next(null, vastResponse);
    },
    this._selectAdSource.bind(this),
    this._createVASTTracker.bind(this),
    this._addClickThrough.bind(this),
    this._addSkipButton.bind(this),
    this._setupEvents.bind(this),
    this._playSelectedAd.bind(this)
  ], function (error, response) {
    if (error && response) {
      that._trackError(error, response);
    }
    callback(error, response);
  });

  this._adUnit = {
    _src: null,
    type: 'VAST',
    pauseAd: function () {
      that.player.pause(true);
    },

    resumeAd: function () {
      that.player.trigger('vast.resumeAd');
      that.player.play(true);
    },

    isPaused: function () {
      return that.player.paused(true);
    },

    getSrc: function () {
      return this._src;
    }
  };

  return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
  var source;

  var playerWidth = dom.getDimension(this.player.el()).width;
  response.mediaFiles.sort(function compareTo(a, b) {
    var deltaA = Math.abs(playerWidth - a.width);
    var deltaB = Math.abs(playerWidth - b.width);
    return deltaA - deltaB;
  });

  source = this.player.selectSource(response.mediaFiles).source;

  if (source) {
    logger.info ("selected source: ", source);
    if (this._adUnit) {
      this._adUnit._src = source;
    }
    return callback(null, source, response);
  }

  // code 403 <== Couldn't find MediaFile that is supported by this video player
  callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
  try {
    callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
  } catch (e) {
    callback(e, response);
  }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
  var previouslyMuted;
  var player = this.player;
  player.on('fullscreenchange', trackFullscreenChange);
  player.on('vast.adStart', trackImpressions);
  player.on('pause', trackPause);
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function(evt){
    if(evt.type === 'vast.adEnd'){
      tracker.trackComplete();
    }
  });

  return callback(null, adMediaFile, response);

  /*** Local Functions ***/
  function unbindEvents() {
    player.off('fullscreenchange', trackFullscreenChange);
    player.off('vast.adStart', trackImpressions);
    player.off('pause', trackPause);
    player.off('timeupdate', trackProgress);
    player.off('volumechange', trackVolumeChange);
  }

  function trackFullscreenChange() {
    if (player.isFullscreen()) {
      tracker.trackFullscreen();
    } else {
      tracker.trackExitFullscreen();
    }
  }

  function trackPause() {
    //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
    //      We should not track this pause event because it makes the VAST tracking confusing again we use a
    //      Threshold of 2 seconds to prevent false positives on IOS.
    if (Math.abs(player.duration() - player.currentTime()) < 2) {
      return;
    }

    tracker.trackPause();
    playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'play'){
        tracker.trackResume();
      }
    });
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
  var skipOffsetInSec;
  var that = this;

  if (utilities.isNumber(response.skipoffset)) {
    skipOffsetInSec = response.skipoffset / 1000;
    addSkipButtonToPlayer(this.player, skipOffsetInSec);
  }
  callback(null, source, tracker, response);

  /*** Local function ***/
  function addSkipButtonToPlayer(player, skipOffset) {
    var skipButton = createSkipButton(player);
    var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

    player.el().appendChild(skipButton);
    player.on('timeupdate', updateSkipButton);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

    function removeSkipButton() {
      player.off('timeupdate', updateSkipButton);
      dom.remove(skipButton);
    }
  }

  function createSkipButton(player) {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");

    skipButton.onclick = function (e) {
      if (dom.hasClass(skipButton, 'enabled')) {
        tracker.trackSkip();
        player.trigger('vast.adSkip');
      }

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }

  function updateSkipButtonState(skipButton, skipOffset, player) {
    var timeLeft = Math.ceil(skipOffset - player.currentTime());
    if (timeLeft > 0) {
      skipButton.innerHTML = (/^(ru|be|uk)/i.test(navigator.language || navigator.userLanguage) ? "&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100;&#32;&#1095;&#1077;&#1088;&#1077;&#1079; " : "Skip in ") + utilities.toFixedDigits(timeLeft, 2) + "...";
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        skipButton.innerHTML = /^(ru|be|uk)/i.test(navigator.language || navigator.userLanguage) ? "&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100;" : "Skip ad";
      }
    }
  }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
  var player = this.player;
  var blocker = createClickThroughBlocker(player, tracker, response);
  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

  player.el().insertBefore(blocker, player.controlBar.el());
  player.on('timeupdate', updateBlocker);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

  return callback(null, mediaFile, tracker, response);

  /*** Local Functions ***/

  function createClickThroughBlocker(player, tracker, response) {
    var blocker = window.document.createElement("a");
    var clickThroughMacro = response.clickThrough;

    dom.addClass(blocker, 'vast-blocker');
    blocker.href = generateClickThroughURL(clickThroughMacro, player);

    if (utilities.isString(clickThroughMacro)) {
      blocker.target = "_blank";
    }

    blocker.onclick = function (e) {
      if (player.paused()) {
        player.play();

        //We prevent event propagation to avoid problems with the player's normal pause mechanism
        if (window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        }
        return false;
      }

      player.trigger('vast.AdClickThru');
      player.pause();
      tracker.trackClick();
    };

    return blocker;
  }

  function updateBlockerURL(blocker, response, player) {
    blocker.href = generateClickThroughURL(response.clickThrough, player);
  }

  function generateClickThroughURL(clickThroughMacro, player) {
    var variables = {
      ASSETURI: mediaFile.src,
      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
    };

    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
  }

  function removeBlocker() {
    player.off('timeupdate', updateBlocker);
    dom.remove(blocker);
  }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
  var player = this.player;

  player.preload("auto"); //without preload=auto the durationchange event is never fired
  player.src(source);

  logger.debug ("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      logger.debug ("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
      playAd();
    } else if(evt.type === 'error') {
      callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
    }
    //NOTE: If the ads get canceled we do nothing/
  });

  /**** local functions ******/
  function playAd() {

    playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'vast.adsCancel'){
        return;
      }

      logger.debug ("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");

      player.trigger('vast.adStart');

      player.on('ended', proceed);
      player.on('vast.adsCancel', proceed);
      player.on('vast.adSkip', proceed);

      function proceed(evt) {

        if(evt.type === 'ended' && (player.duration() - player.currentTime()) > 3 ) {
          // Ignore ended event if the Ad time was not 'near' the end
          // avoids issues where IOS controls could skip the Ad
          return;
        }

        player.off('ended', proceed);
        player.off('vast.adsCancel', proceed);
        player.off('vast.adSkip', proceed);

        //NOTE: if the ads get cancel we do nothing apart removing the listners
        if(evt.type === 'ended' || evt.type === 'vast.adSkip'){
          callback(null, response);
        }
      }
    });

    logger.debug ("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");

    typeof player.ready === 'function' ? player.ready(player.play) : player.play();
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;
},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./VASTTracker":26,"./vastUtil":30}],25:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
  this.times = undefined;
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

VASTResponse.prototype._addErrorTrackUrl = function (error) {
  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
  if (errorURL) {
    this.errorURLMacros.push(errorURL);
  }
};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
  if (offset) {
    this.skipoffset = offset;
  }
};

VASTResponse.prototype._addTimes = function (times) {
  if (times) {
    this.times = times;
  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrl(inLine.error);
    this._addImpressions(inLine.impressions);
    this._addTimes(inLine.times);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrl(wrapper.error);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined;//We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function(){
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

module.exports = VASTResponse;


},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./InLine":18,"./Linear":19,"./VideoClicks":27,"./Wrapper":28}],26:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);

}

VASTTracker.prototype.initialize = function(assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: {tracked: false, time: Math.round(25 * vastResponse.duration) / 100},
    midpoint: {tracked: false, time: Math.round(50 * vastResponse.duration) / 100},
    thirdQuartile: {tracked: false, time: Math.round(75 * vastResponse.duration) / 100}
  };
};

VASTTracker.prototype.sanityCheck = function(assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
          if (!event.uri) {
              return;
          }

          uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked){
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress){
      var quartile = quartiles[quartileName];
      if(canBeTracked(quartile, progress)){
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= (quartileTime + 5000);
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

[
  'rewind',
  'fullscreen',
  'exitFullscreen',
  'pause',
  'resume',
  'mute',
  'unmute',
  'acceptInvitation',
  'acceptInvitationLinear',
  'collapse',
  'expand'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName);
    };
  });

[
  'start',
  'skip',
  'close',
  'closeLinear'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName, true);
    };
  });

[
  'firstQuartile',
  'midpoint',
  'thirdQuartile'
].forEach(function (quartile) {
    VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
      this.quartiles[quartile].tracked = true;
      this.trackEvent(quartile, true);
    };
  });

VASTTracker.prototype.trackComplete = function () {
  if(this.quartiles.thirdQuartile.tracked){
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, {ERRORCODE: errorcode});
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],27:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;
},{"../../utils/utilityFunctions":47,"../../utils/xml":48}],28:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if(!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = Creative.parseCreatives(wrapperJTree.creatives);
  this.error = xml.keyValue(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers'))? xml.attr(wrapperJTree, 'followAdditionalWrappers'): true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./vastUtil":30}],29:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
var timeRegex = /(\d\d):(\d\d)/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if(isPercentage(offset)){
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if(duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent){
      return quantity * percent / 100;
    }
  },

  time : function parseTime(timeStr) {
    var match, timeInMs;

    if (utilities.isString(timeStr)) {
      match = timeStr.match(timeRegex);
      if (match) {
        timeInMs = parseMinToMs(match[1]) + parseSecToMs(match[2]);
      }
    }

    return isNaN(timeInMs) ? null : timeInMs;

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  }

};


module.exports = parsers;
},{"../../utils/utilityFunctions":47}],30:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var VPAIDHTML5Tech = require('../vpaid/VPAIDHTML5Tech');
var VPAIDFlashTech = require('../vpaid/VPAIDFlashTech');
var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
    if (impressions) {
      impressions = utilities.isArray(impressions) ? impressions : [impressions];
      return utilities.transformArray(impressions, function (impression) {
        if (utilities.isNotEmptyString(impression.keyValue)) {
          return impression.keyValue;
        }
        return undefined;
      });
    }
    return [];
  },


  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = (progress / (60 * 1000)) % 60;
    minutes = Math.floor(minutes);
    seconds = (progress / 1000) % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },


  //List of supported VPAID technologies
  VPAID_techs: [
    VPAIDFlashTech,
    VPAIDHTML5Tech
  ],

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  },

  findSupportedVPAIDTech: function findSupportedVPAIDTech(mimeType) {
    var i, len, VPAIDTech;

    for (i = 0, len = this.VPAID_techs.length; i < len; i += 1) {
      VPAIDTech = this.VPAID_techs[i];
      if (VPAIDTech.supports(mimeType)) {
        return VPAIDTech;
      }
    }
    return null;
  },

  isFlashSupported: function isFlashSupported() {
    return VPAIDFLASHClient.isSupported();
  },

  /**
   * Necessary step for VPAIDFLAShClient to know if flash is supported and not blocked.
   * IMPORTANT NOTE: This is an async test and needs to be run as soon as possible.
   *
   * @param vpaidFlashLoaderPath the path to the vpaidFlashLoader swf obj.
   */
  runFlashSupportCheck: function runFlashSupportCheck(vpaidFlashLoaderPath) {
    VPAIDFLASHClient.runFlashTest({data: vpaidFlashLoaderPath});
  }

};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":47,"../vpaid/VPAIDFlashTech":32,"../vpaid/VPAIDHTML5Tech":33,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],31:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout) ){
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = [
    'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'
  ];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }


  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);

  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  timeoutId = setTimeout(function () {
    cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
  this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
  this.waitForEvent('AdStarted', cb);
  this._adUnit.startAd();
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
[
  'adLinear',
  'adWidth',
  'adHeight',
  'adExpanded',
  'adSkippableState',
  'adRemainingTime',
  'adDuration',
  'adVolume',
  'adCompanions',
  'adIcons'
].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb){
  this.adUnitAsyncCall('setAdVolume',volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/utilityFunctions":47,"../vast/VASTError":23}],32:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDFlashTech(mediaFile, settings) {
  if (!(this instanceof VPAIDFlashTech)) {
    return new VPAIDFlashTech(mediaFile);
  }
  sanityCheck(mediaFile);
  this.name = 'vpaid-flash';
  this.mediaFile = mediaFile;
  this.containerEl = null;
  this.vpaidFlashClient = null;
  this.settings = settings;

  /*** local functions ***/
  function sanityCheck(mediaFile) {
    if (!mediaFile || !utilities.isString(mediaFile.src)) {
      throw new VASTError('on VPAIDFlashTech, invalid MediaFile');
    }
  }
}

VPAIDFlashTech.VPAIDFLASHClient = VPAIDFLASHClient;

VPAIDFlashTech.supports = function (type) {
  return (MimeTypes.flash.indexOf(type) > -1) && VPAIDFlashTech.VPAIDFLASHClient.isSupported();
};

VPAIDFlashTech.prototype.loadAdUnit = function loadFlashCreative(containerEl, objectEl, callback) {
  var that = this;
  var flashClientOpts = this.settings && this.settings.vpaidFlashLoaderPath ? {data: this.settings.vpaidFlashLoaderPath} : undefined;
  sanityCheck(containerEl, callback);

  this.containerEl = containerEl;

  logger.debug ("<VPAIDFlashTech.loadAdUnit> loading VPAIDFLASHClient with opts:", flashClientOpts);

  this.vpaidFlashClient = new VPAIDFlashTech.VPAIDFLASHClient(containerEl, function (error) {
    if (error) {
      return callback(error);
    }

    logger.info ("<VPAIDFlashTech.loadAdUnit> calling VPAIDFLASHClient.loadAdUnit(); that.mediaFile:", that.mediaFile);
    that.vpaidFlashClient.loadAdUnit(that.mediaFile.src, callback);
  }, flashClientOpts);

  /*** Local Functions ***/
  function sanityCheck(container, cb) {

    if (!dom.isDomElement(container)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, invalid dom container element');
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, missing valid callback');
    }
  }
};

VPAIDFlashTech.prototype.unloadAdUnit = function () {
  if (this.vpaidFlashClient) {
    try{
      this.vpaidFlashClient.destroy();
    } catch(e){
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }
    this.vpaidFlashClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

module.exports = VPAIDFlashTech;

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],33:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDHTML5Tech(mediaFile) {

  if(!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
      if (!mediaFile || !utilities.isString(mediaFile.src)) {
        throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
      }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && MimeTypes.html5.indexOf(type) > -1;
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch(e) {
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDHTML5Client/js/VPAIDHTML5Client":11}],34:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');
var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VPAIDIntegrator(player, settings) {
  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 5000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;

  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;

  }
}

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  var that = this;
  var player = this.player;
  logger.debug ("<VPAIDIntegrator.playAd> looking for supported tech...");
  var tech = this._findSupportedTech(vastResponse, this.settings);

  callback = callback || utilities.noop;

  this._adUnit = null;

  dom.addClass(player.el(), 'vjs-vpaid-ad');

  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function(){
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    logger.info ("<VPAIDIntegrator.playAd> found tech: ", tech);

    async.waterfall([
      function (next) {
        next(null, tech, vastResponse);
      },
      this._loadAdUnit.bind(this),
      this._playAdUnit.bind(this),
      this._finishPlaying.bind(this)

    ], adComplete);

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function() {
        player.trigger('vpaid.pauseAd');
        player.pause(true);//we make sure that the video content gets stopped.
      },
      resumeAd: function() {
          player.trigger('vpaid.resumeAd');
      },
      isPaused: function() {
        return this._paused;
      },
      getSrc: function() {
        return tech.mediaFile;
      }
    };

  } else {
    logger.debug ("<VPAIDIntegrator.playAd> could not find suitable tech");
    var error = new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile', 403);
    adComplete(error, this._adUnit, vastResponse);
  }

  return this._adUnit;

  /*** Local functions ***/
  function adComplete(error, adUnit, vastResponse) {
    if (error && vastResponse) {
      that._trackError(vastResponse, error.code);
    }
    player.trigger('vpaid.adEnd');
    player.trigger('vast.adEnd');
    // callback(error, vastResponse);
  }

  function triggerVpaidAdEnd(){
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var preferredTech = settings && settings.preferredTech;
  var skippedSupportTechs = [];
  var i, len, mediaFile, VPAIDTech, isPreferedTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);

    // no supported VPAID tech found, skip mediafile
    if (!VPAIDTech) { continue; }

    // do we have a prefered tech, does it play this media file ?
    isPreferedTech = preferredTech ?
      (mediaFile.type === preferredTech || (MimeTypes[preferredTech] && MimeTypes[preferredTech].indexOf(mediaFile.type) > -1 )) :
      false;

    // our prefered tech can read this mediafile, defaulting to it.
    if (isPreferedTech) {
      return new VPAIDTech(mediaFile, settings);
    }

    skippedSupportTechs.push({ mediaFile: mediaFile, tech: VPAIDTech });
  }

  if (skippedSupportTechs.length) {
    var firstTech = skippedSupportTechs[0];
    return new firstTech.tech(firstTech.mediaFile, settings);
  }

  return null;
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function(adUnit, src, responseTimeout) {
  return new VPAIDAdUnitWrapper(adUnit, {src: src, responseTimeout: responseTimeout});
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function() {
        dom.removeClass(player.el(),techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([
    function (next) {
      next(null, adUnit, vastResponse);
    },
    this._handshake.bind(this),
    this._initAd.bind(this),
    this._setupEvents.bind(this),
    this._addSkipButton.bind(this),
    this._linkPlayerControls.bind(this),
    this._startAd.bind(this)
  ], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function(adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var that = this;

  adUnit.on('AdSkipped', function () {
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
  });

  adUnit.on('AdImpression', function () {
    player.trigger('vpaid.AdImpression');
    tracker.trackImpressions();
  });

  adUnit.on('AdStarted', function () {
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    notifyPlayToPlayer();
  });

  adUnit.on('AdVideoStart', function () {
    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPlaying', function () {
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPaused', function () {
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
  });

  function notifyPlayToPlayer(){
    if(that._adUnit && that._adUnit.isPaused()){
      that._adUnit._paused = false;
    }
    player.trigger('play');

  }

  function notifyPauseToPlayer() {
    if(that._adUnit){
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
  });

  adUnit.on('AdClickThru', function (data) {
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
      window.open(clickThruUrl, '_blank');
    }

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
    player.trigger('vpaid.AdError');
    //NOTE: we track errors code 901, as noted in VAST 3.0
    tracker.trackErrorWithCode(901);
  });

  adUnit.on('AdVolumeChange', function () {
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (lastVolume !== currentVolume) {
        if (currentVolume === 0 && lastVolume > 0) {
          tracker.trackMute();
        }

        if (currentVolume > 0 && lastVolume === 0) {
          tracker.trackUnmute();
        }

        player.volume(currentVolume);
      }
    });
  });

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }
};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;
  var that = this;
  var skipTime = getSkipTime(vastResponse);

  if (skipTime >= 0) adUnit.on('AdSkippableStateChange', updateSkipButtonState);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function getSkipTime(vastResponse) {
    var duration = vastResponse.duration;
    var times = vastResponse.times || {};
    return (times['skipTime'] < duration) ? times['skipTime'] : -1;
  }

  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function skipButtonTimer() {
    if (!skipButton) return;

    if (that._adUnit.isPaused()) {
      setTimeout(skipButtonTimer, 500);
      return;
    }

    if (skipTime > 0) {
      skipTime -= 1000;
      setTimeout(skipButtonTimer, 1000);
      return;
    }

    dom.removeClass(skipButton, "vjs-hidden");
  }


  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    dom.addClass(skipButton, "vjs-hidden");
    player.el().appendChild(skipButton);

    skipButtonTimer();
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    skipButton.innerHTML = /^(ru|be|uk)/i.test(navigator.language || navigator.userLanguage) ? "&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100;" : "Skip ad";

    skipButton.onclick = function (e) {
      adUnit.skipAd(utilities.noop);//We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });


    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
      player.trigger('vpaid.AdVolumeChange');
      var lastVolume = player.volume();
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          if (lastVolume !== vol) {
            player.volume(vol);
          }
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;

  adUnit.startAd(function (error) {
    if (!error) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  adUnit.on('AdStopped', function () {
   player.trigger('vpaid.AdStopped');
   finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
    var errMsg = error? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
    finishPlayingAd(new VASTError(errMsg));
  });

  /*** local functions ***/
  function finishPlayingAd(error) {
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response, errorCode) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: errorCode || 901});
};

function resizeAd(player, adUnit, VIEW_MODE) {
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error) {
    logger.error ('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"../vast/VASTResponse":25,"../vast/VASTTracker":26,"../vast/vastUtil":30,"./VPAIDAdUnitWrapper":31}],35:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(function () {
        var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
        if(currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement() {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;
},{"../../utils/dom":42}],36:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));

},{"./ads-label":35}],37:[function(require,module,exports){
'use strict';

/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var element = document.createElement('div');

var BlackPosterFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function() {
        if(posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;
},{}],38:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

},{"./black-poster":37}],39:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');

var logger = require ('../utils/consoleLogger');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient();
  var adsCanceled = false;
  var defaultOpts = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 500,

    //TODO:finish this IOS FIX
    //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
    // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
    // starts watching the content. To prevent this usec
    iosPrerollCancelTimeout: 2000,

    // maximun amount of time for the ad to actually start playing. If this timeout gets
    // triggered the ads will be cancelled
    adCancelTimeout: 3000,

    // Boolean flag that configures the player to play a new ad before the user sees the video again
    // the current video
    playAdAlways: false,

    // Flag to enable or disable the ads by default.
    adsEnabled: true,

    // Boolean flag to enable or disable the resize with window.resize or orientationchange
    autoResize: true,

    // Path to the VPAID flash ad's loader
    vpaidFlashLoaderPath: '/VPAIDFlash.swf',

    // verbosity of console logging:
    // 0 - error
    // 1 - error, warn
    // 2 - error, warn, info
    // 3 - error, warn, info, log
    // 4 - error, warn, info, log, debug
    verbosity: 0
  };

  var settings = utilities.extend({}, defaultOpts, options || {});

  if(utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)){
    settings.adTagUrl = settings.url;
  }

  if (utilities.isString(settings.adTagUrl)) {
    settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
  }

  if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
  }

  if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
  }

  logger.setVerbosity (settings.verbosity);

  vastUtil.runFlashSupportCheck(settings.vpaidFlashLoaderPath);// Necessary step for VPAIDFLASHClient to work.

  playerUtils.prepareForAds(player);

  if (settings.playAdAlways) {
    // No matter what happens we play a new ad before the user sees the video again.
    player.on('vast.contentEnd', function () {
      setTimeout(function () {
        player.trigger('vast.reset');
      }, 0);
    });
  }

  player.on('vast.firstPlay', tryToPlayPrerollAd);

  player.on('vast.reset', function () {
    //If we are reseting the plugin, we don't want to restore the content
    snapshot = null;
    cancelAds();
  });

  player.vast = {
    isEnabled: function () {
      return settings.adsEnabled;
    },

    enable: function () {
      settings.adsEnabled = true;
    },

    disable: function () {
      settings.adsEnabled = false;
    }
  };

  return player.vast;

  /**** Local functions ****/
  function tryToPlayPrerollAd() {
    //We remove the poster to prevent flickering whenever the content starts playing
    playerUtils.removeNativePoster(player);

    playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
      removeAdUnit();
      restoreVideoContent();
    });

    async.waterfall([
      checkAdsEnabled,
      preparePlayerForAd,
      startAdCancelTimeout,
      playPrerollAd
    ], function (error, response) {
      if (error) {
        trackAdError(error, response);
      } else {
        player.trigger('vast.adEnd');
      }
    });

    /*** Local functions ***/

    function removeAdUnit() {
      if (player.vast && player.vast.adUnit) {
        player.vast.adUnit = null; //We remove the adUnit
      }
    }

    function restoreVideoContent() {
      setupContentEvents();
      if (snapshot) {
        playerUtils.restorePlayerSnapshot(player, snapshot);
        snapshot = null;
      }
    }

    function setupContentEvents() {
      playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
        if (evt.type !== 'playing') {
          return;
        }

        player.trigger('vast.contentStart');

        playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
          if (evt.type === 'ended') {
            player.trigger('vast.contentEnd');
          }
        });
      });
    }

    function checkAdsEnabled(next) {
      if (settings.adsEnabled) {
        return next(null);
      }
      next(new VASTError('Ads are not enabled'));
    }

    function preparePlayerForAd(next) {
      if (canPlayPrerollAd()) {
        snapshot = playerUtils.getPlayerSnapshot(player);
        player.pause();
        addSpinnerIcon();

        if(player.paused()) {
          next(null);
        } else {
          playerUtils.once(player, ['playing'], function() {
            player.pause();
            next(null);
          });
        }
      } else {
        next(new VASTError('video content has been playing before preroll ad'));
      }
    }

    function canPlayPrerollAd() {
      return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
    }

    function startAdCancelTimeout(next) {
      var adCancelTimeoutId;
      adsCanceled = false;

      adCancelTimeoutId = setTimeout(function () {
        trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
      }, settings.adCancelTimeout);

      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

      /*** local functions ***/
      function clearAdCancelTimeout() {
        if (adCancelTimeoutId) {
          clearTimeout(adCancelTimeoutId);
          adCancelTimeoutId = null;
        }
      }

      next(null);
    }

    function addSpinnerIcon() {
      dom.addClass(player.el(), 'vjs-vast-ad-loading');
      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
    }

    function removeSpinnerIcon() {
      //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
      // If we remove it synchronously we see a flash of the content video before the ad starts playing.
      setTimeout(function () {
        dom.removeClass(player.el(), 'vjs-vast-ad-loading');
      }, 100);
    }

  }

  function cancelAds() {
    player.trigger('vast.adsCancel');
    adsCanceled = true;
  }

  function playPrerollAd(callback) {
    async.waterfall([
      getVastResponse,
      playAd
    ], callback);
  }

  function getVastResponse(callback) {
    vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
  }

  function playAd(vastResponse, callback) {
    //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
    //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall
    if (adsCanceled) {
      return;
    }

    var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
    var adFinished = false;

    playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adStart') {
        addAdsLabel();
      }
    });

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

    if (utilities.isIDevice()) {
      preventManualProgress();
    }

    player.vast.vastResponse = vastResponse;
    logger.debug ("calling adIntegrator.playAd() with vastResponse:", vastResponse);
    player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);

    /*** Local functions ****/
    function addAdsLabel() {
      if (adFinished || player.controlBar.getChild('AdsLabel')) {
        return;
      }

      player.controlBar.addChild('AdsLabel');
    }

    function removeAdsLabel() {
      player.controlBar.removeChild('AdsLabel');
      adFinished = true;
    }

    function preventManualProgress() {
      //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
      var PROGRESS_THRESHOLD = 3;
      var previousTime = 0;
      var skipad_attempts = 0;

      player.on('timeupdate', preventAdSeek);
      player.on('ended', preventAdSkip);

      playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

      /*** Local functions ***/
      function preventAdSkip() {
        // Ignore ended event if the Ad time was not 'near' the end
        // and revert time to the previous 'valid' time
        if ((player.duration() - previousTime) > PROGRESS_THRESHOLD) {
          player.pause(true); // this reduce the video jitter if the IOS skip button is pressed
          player.play(true); // we need to trigger the play to put the video element back in a valid state
          player.currentTime(previousTime);
        }
      }

      function preventAdSeek() {
        var currentTime = player.currentTime();
        var progressDelta = Math.abs(currentTime - previousTime);
        if (progressDelta > PROGRESS_THRESHOLD) {
          skipad_attempts += 1;
          if (skipad_attempts >= 2) {
            player.pause(true);
          }
          player.currentTime(previousTime);
        } else {
          previousTime = currentTime;
        }
      }

      function stopPreventManualProgress() {
        player.off('timeupdate', preventAdSeek);
        player.off('ended', preventAdSkip);
      }
    }
  }

  function trackAdError(error, vastResponse) {
    player.trigger({type: 'vast.adError', error: error});
    cancelAds();
    logger.error ('AD ERROR:', error.message, error, vastResponse);
  }

  function isVPAID(vastResponse) {
    var i, len;
    var mediaFiles = vastResponse.mediaFiles;
    for (i = 0, len = mediaFiles.length; i < len; i++) {
      if (vastUtil.isVPAID(mediaFiles[i])) {
        return true;
      }
    }
    return false;
  }
};

},{"../ads/vast/VASTClient":22,"../ads/vast/VASTError":23,"../ads/vast/VASTIntegrator":24,"../ads/vast/vastUtil":30,"../ads/vpaid/VPAIDIntegrator":34,"../utils/async":40,"../utils/consoleLogger":41,"../utils/dom":42,"../utils/playerUtils":45,"../utils/utilityFunctions":47}],40:[function(require,module,exports){
//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function (index) {
    var fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};


async.waterfall = function (tasks, callback) {
  callback = callback || function () { };
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function () {
        };
      }
      else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        }
        else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;


},{"./utilityFunctions":47}],41:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _verbosity = 0;
var _prefix = "[videojs-vast-vpaid] ";

function setVerbosity (v)
{
    _verbosity = v;
}

function handleMsg (method, args)
{
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
        args[0] = _prefix + args[0];
    }

    if (method.apply)
    {
        method.apply (console, Array.prototype.slice.call(args));
    }
    else
    {
        method (Array.prototype.slice.call(args));
    }
}

function debug ()
{
    if (_verbosity < 4)
    {
        return;
    }

    if (typeof console.debug === 'undefined')
    {
        // IE 10 doesn't have a console.debug() function
        handleMsg (console.log, arguments);
    }
    else
    {
        handleMsg (console.debug, arguments);
    }
}

function log ()
{
    if (_verbosity < 3)
    {
        return;
    }

    handleMsg (console.log, arguments);
}

function info ()
{
    if (_verbosity < 2)
    {
        return;
    }

    handleMsg (console.info, arguments);
}


function warn ()
{
    if (_verbosity < 1)
    {
        return;
    }

    handleMsg (console.warn, arguments);
}

function error ()
{
    handleMsg (console.error, arguments);
}

var consoleLogger = {
    setVerbosity: setVerbosity,
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
};

if ((typeof (console) === 'undefined') || !console.log)
{
    // no console available; make functions no-op
    consoleLogger.debug = function () {};
    consoleLogger.log = function () {};
    consoleLogger.info = function () {};
    consoleLogger.warn = function () {};
    consoleLogger.error = function () {};
}

module.exports = consoleLogger;
},{}],42:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = (cssClass || '');

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el){
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if(child.parentNode){
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node){
  if(node && node.parentNode){
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element;
};

dom.click = function(el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function(el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if(!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;
},{"./utilityFunctions":47}],43:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = ('response' in xhr) ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(
      status,
      response,
      xhr.getAllResponseHeaders(),
      statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":46,"./utilityFunctions":47}],44:[function(require,module,exports){
'use strict';

module.exports = {
  html5: [
    'text/javascript',
    'text/javascript1.0',
    'text/javascript1.2',
    'text/javascript1.4',
    'text/jscript',
    'application/javascript',
    'application/x-javascript',
    'text/ecmascript',
    'text/ecmascript1.0',
    'text/ecmascript1.2',
    'text/ecmascript1.4',
    'text/livescript',
    'application/ecmascript',
    'application/x-ecmascript',
  ],

  flash: [
    'application/x-shockwave-flash'
  ],
};

},{}],45:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }
  return snapshot;

  /**** Local Functions ****/
  function getSuppressedTracks(player) {
    var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

    if (tracks && utilities.isArray(tracks.tracks_)) {
      tracks = tracks.tracks_;
    }

    if (!utilities.isArray(tracks)) {
      tracks = [];
    }

    var suppressedTracks = [];
    tracks.forEach(function (track) {
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    });

    return suppressedTracks;
  }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

  if (snapshot.nativePoster) {
    tech.poster = snapshot.nativePoster;
  }

  if ('style' in snapshot) {
    // overwrite all css style properties to restore state precisely
    if (tech) tech.setAttribute('style', snapshot.style || '');
  }

  if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({src: snapshot.src, type: snapshot.type});

    // safari requires a call to `load` to pick up a changed source
    player.load();

  } else {
    restoreTracks();

    if (snapshot.playing) {
      player.play();
    }
  }

  /*** Local Functions ***/

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired() {
    var timeoutId = setTimeout(function() {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function(){
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }

  function restoreTracks() {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume() {

    // if some period of the video is seekable, resume playback
    // otherwise delay a bit and then check again unless we're out of attempts

    if (!playerUtils.isReadyToResume(player) && attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      try {
        if(player.currentTime() !== snapshot.currentTime) {
          if (snapshot.playing) { // if needed restore playing status after seek completes
            player.one('seeked', function() {
              player.play();
            });
          }
          player.currentTime(snapshot.currentTime);

        } else if (snapshot.playing) {
          // if needed and no seek has been performed, restore playing status immediately
          player.play();
        }

      } catch (e) {
        videojs.log.warn('Failed to resume the content after an advertisement', e);
      }
    }
  }
};

playerUtils.isReadyToResume = function (player) {

  if (player.readyState() > 1) {
    // some browsers and media aren't "seekable".
    // readyState greater than 1 allows for seeking without exceptions
    return true;
  }

  if (player.seekable() === undefined) {
    // if the player doesn't expose the seekable time ranges, try to
    // resume playback immediately
    return true;
  }

  if (player.seekable().length > 0) {
    // if some period of the video is seekable, resume playback
    return true;
  }

  return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
  var blackPoster = player.addChild('blackPoster');
  var _firstPlay = true;
  var volumeSnapshot;


  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
  player.on('vast.adStart', hideBlackPoster);
  player.on('vast.adsCancel', hideBlackPoster);
  player.on('vast.adError', hideBlackPoster);
  player.on('vast.adStart', addStyles);
  player.on('vast.adEnd', removeStyles);
  player.on('vast.adsCancel', removeStyles);

  /*** Local Functions ***/

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.

   We also need this monkeypatch to be able to pause and resume an ad using the player's API

   If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi() {

    /**
     * Monkey patch needed to handle firstPlay and resume of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
     * @returns {player}
     */
    var origPlay = player.play;
    player.play = function (callOrigPlay) {
      var that = this;

      if (isFirstPlay()) {
        firstPlay();
      } else {
        resume(callOrigPlay);
      }

      return this;

      /*** local functions ***/
      function firstPlay() {
        if (!utilities.isIPhone()) {
          volumeSnapshot = saveVolumeSnapshot();
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume(callOrigPlay) {
        if (isAdPlaying() && !callOrigPlay) {
          player.vast.adUnit.resumeAd();
        } else {
          origPlay.apply(that, arguments);
        }
      }
    };


    /**
     * Needed monkey patch to handle pause of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPause = player.pause;
    player.pause = function (callOrigPause) {
      if (isAdPlaying() && !callOrigPause) {
        player.vast.adUnit.pauseAd();
      } else {
        origPause.apply(this, arguments);
      }
      return this;
    };


    /**
     * Needed monkey patch to handle paused state of the player when ads are playing.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPaused = player.paused;
    player.paused = function (callOrigPaused) {
      if (isAdPlaying() && !callOrigPaused) {
        return player.vast.adUnit.isPaused();
      }
      return origPaused.apply(this, arguments);
    };
  }

  function isAdPlaying() {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay() {
    if (isFirstPlay()) {
      _firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay() {
    _firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay() {
    return _firstPlay;
  }

  function saveVolumeSnapshot() {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume() {
    if (volumeSnapshot) {
      player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot(snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      player.muted(snapshot.muted);
    }
  }

  function hideBlackPoster() {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles() {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles() {
    dom.removeClass(player.el(), 'vjs-ad-playing');
  }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
  var tech = player.el().querySelector('.vjs-tech');
  if (tech) {
    tech.removeAttribute('poster');
  }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once(player, events, handler) {
  function listener() {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};


module.exports = playerUtils;
},{"./dom":42,"./utilityFunctions":47}],46:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port)? urlParsingNode.port: 80,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}


/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond)? cond : function() {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if(cond(key, value)){
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":47}],47:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;


function noop(){ }

function isNull(o) {
  return o === null;
}

function isDefined(o){
  return o !== undefined;
}

function isUndefined(o){
  return o === undefined;
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isFunction(str){
  return typeof str === 'function';
}

function isNumber(num){
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array){
  return Object.prototype.toString.call( array ) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function isString(str) {
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email){
  if(!utilities.isString(email)){
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend (obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if(isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])){
          obj[k] = extend({}, obj[k], arg[k]);
        }else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function(item, index){
    var transformedItem = transformer(item, index);
    if(utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if(utilities.isNumber(num) && !isNaN(num)){
    formattedNum = num + '';
    while(formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function() {
    var time = new Date().getTime();
    if ((time - previousCall) >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce (callback, wait) {
  var timeoutId;

  return function (){
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found){
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++){
    if (found(children[i])) {
      return children[i];
    }
    else {
      var el = treeSearch(children[i], getChildren, found);
      if (el){
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if(utilities.isNumber(value)){
    value = value + '';  //we make sure that we are working with strings
  }

  if(!utilities.isString(value)){
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return /iP(hone|ad)/.test(utilities._UA);
}

function isMobile() {
  return /iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA);
}

function isIPhone() {
  return /iP(hone|od)/.test(utilities._UA);
}

function isAndroid() {
  return /Android/.test(utilities._UA);
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid
};

module.exports = utilities;

},{}],48:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource){
  //IE 8
  if(typeof window.DOMParser === 'undefined'){
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource){
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if(isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)){
        throw new Error();
      }
    }catch(e){
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try { // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
        erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
        parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (utilities.isISO8601(sValue)) { return new Date(sValue); }
  return sValue.trim();
};

xml.JXONTree = function JXONTree (oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if(oXMLParent.documentElement){
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
      else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; }
      }
    }
    if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined'? oXMLParent.attributes.length > 0: oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function(attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString){
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if(xmlObj){
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if(xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":47}],49:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');
var registerPlugin = videojs.registerPlugin || videojs.plugin;

registerPlugin('vastClient', videoJsVAST);


},{"./plugin/components/ads-label_5":36,"./plugin/components/black-poster_5":38,"./plugin/videojs.vast.vpaid":39}]},{},[49])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvZmxhc2hUZXN0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURGTEFTSENsaWVudC9qcy9qc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvcmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsImJvd2VyX2NvbXBvbmVudHMvc3dmb2JqZWN0L3N3Zm9iamVjdC9zcmMvc3dmb2JqZWN0LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9Db21wYW5pb24uanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0xpbmVhci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L01lZGlhRmlsZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1RyYWNraW5nRXZlbnQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURGbGFzaFRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXIuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNS5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hc3luYy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbnNvbGVMb2dnZXIuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvbWltZXR5cGVzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzYudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUFDYSx1QixBQUFBOzs7Ozs7YUFFVDs7QUFDQTs7MkNBQ21FO2dCQUFsRCxBQUFrRCx5RkFBN0IsQUFBNkI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTtBQUVyRTs7Ozs7OytCLEFBQ1EsTyxBQUFPLFEsQUFBUSxVLEFBQVUsZ0JBQTJHO2dCQUEzRixBQUEyRixtRkFBNUUsRUFBQyxjQUFELEFBQWMsQUFBOEQ7Z0JBQXpELEFBQXlELHNGQUF2QyxFQUFDLFdBQUQsQUFBWSxBQUEyQjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFFOzs7O2lDLEFBQ3JJLE8sQUFBTyxRLEFBQVEsVUFBZ0M7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OztrQ0FFNUI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OztpQ0FDSDtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFFOzs7O2tDQUNEO2dCQUF0QixBQUFzQiwrRUFBWCxBQUFXLEFBQUU7Ozs7bUNBQ0Q7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OzttQ0FDRjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzd6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBBUElcbmV4cG9ydCBjbGFzcyBJVlBBSURBZFVuaXQge1xuXG4gICAgLy9hbGwgbWV0aG9kcyBiZWxvd1xuICAgIC8vYXJlIGFzeW5jIG1ldGhvZHNcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIC8vY3JlYXRpdmVEYXRhIGlzIGFuIG9iamVjdCB0byBiZSBjb25zaXN0ZW50IHdpdGggVlBBSURIVE1MXG4gICAgaW5pdEFkICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSA9IHtBZFBhcmFtZXRlcnM6Jyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIHN0YXJ0QWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgY29sbGFwc2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBza2lwQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG5cbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcbiAgICBnZXRBZExpbmVhcihjYWxsYmFjaykge31cbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSGVpZ2h0KGNhbGxiYWNrKSB7fVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge31cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWREdXJhdGlvbihjYWxsYmFjaykge31cbiAgICBzZXRBZFZvbHVtZShzb3VuZFZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZ2V0QWRWb2x1bWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRDb21wYW5pb25zKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHt9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IFtcbiAgICAgICAgJ0FkTG9hZGVkJyxcbiAgICAgICAgJ0FkU3RhcnRlZCcsXG4gICAgICAgICdBZFN0b3BwZWQnLFxuICAgICAgICAnQWRTa2lwcGVkJyxcbiAgICAgICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZExpbmVhckNoYW5nZScsXG4gICAgICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgICAgICdBZFJlbWFpbmluZ1RpbWVDaGFuZ2UnLCAvLyBbRGVwcmVjYXRlZCBpbiAyLjBdIGJ1dCB3aWxsIGJlIHN0aWxsIGZpcmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAgICAgJ0FkVmlkZW9TdGFydCcsXG4gICAgICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICAgICAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLFxuICAgICAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAgICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAgICAgJ0FkSW50ZXJhY3Rpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAgICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAgICAgJ0FkVXNlckNsb3NlJyxcbiAgICAgICAgJ0FkUGF1c2VkJyxcbiAgICAgICAgJ0FkUGxheWluZycsXG4gICAgICAgICdBZExvZycsXG4gICAgICAgICdBZEVycm9yJ1xuICAgIF1cbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpLklWUEFJREFkVW5pdDtcbmxldCBBTExfVlBBSURfTUVUSE9EUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKElWUEFJREFkVW5pdC5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gWydjb25zdHJ1Y3RvciddLmluZGV4T2YocHJvcGVydHkpID09PSAtMTtcbn0pO1xuXG5leHBvcnQgY2xhc3MgVlBBSURBZFVuaXQgZXh0ZW5kcyBJVlBBSURBZFVuaXQge1xuICAgIGNvbnN0cnVjdG9yIChmbGFzaCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmxhc2ggPSBmbGFzaDtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgQUxMX1ZQQUlEX01FVEhPRFMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2tCeU1ldGhvZE5hbWUobWV0aG9kTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBJVlBBSURBZFVuaXQuRVZFTlRTLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5vZmZFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vZmYoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9WUEFJRCBpbnRlcmZhY2VcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2hhbmRzaGFrZVZlcnNpb24nLCBbcGxheWVyVlBBSURWZXJzaW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczogJyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vcmVzaXplIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGZsYXNoIG9iamVjdFxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge0FkUGFyYW1ldGVyczogJyd9O1xuICAgICAgICBlbnZpcm9ubWVudFZhcnMgPSBlbnZpcm9ubWVudFZhcnMgfHwge2ZsYXNoVmFyczogJyd9O1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaW5pdEFkJywgW3RoaXMuX2ZsYXNoLmdldFdpZHRoKCksIHRoaXMuX2ZsYXNoLmdldEhlaWdodCgpLCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YS5BZFBhcmFtZXRlcnMgfHwgJycsIGVudmlyb25tZW50VmFycy5mbGFzaFZhcnMgfHwgJyddLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3Jlc2l6ZSBlbGVtZW50IHRoYXQgaGFzIHRoZSBmbGFzaCBvYmplY3RcbiAgICAgICAgdGhpcy5fZmxhc2guc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvL3Jlc2l6ZSBhZCBpbnNpZGUgdGhlIGZsYXNoXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgncmVzaXplQWQnLCBbdGhpcy5fZmxhc2guZ2V0V2lkdGgoKSwgdGhpcy5fZmxhc2guZ2V0SGVpZ2h0KCksIHZpZXdNb2RlXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RhcnRBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0b3BBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3N0b3BBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdwYXVzZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXN1bWVBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGV4cGFuZEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZXhwYW5kQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnY29sbGFwc2VBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3NraXBBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9wcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSB0cmVhdCBhcyBhc3luYyBtZXRob2RzXG4gICAgZ2V0QWRMaW5lYXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZExpbmVhcicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkV2lkdGgoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFdpZHRoJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEhlaWdodCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEV4cGFuZGVkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFJlbWFpbmluZ1RpbWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZER1cmF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWREdXJhdGlvbicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzZXRBZFZvbHVtZScsIFt2b2x1bWVdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkVm9sdW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRWb2x1bWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZENvbXBhbmlvbnMoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZENvbXBhbmlvbnMnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEljb25zKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRJY29ucycsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN3Zm9iamVjdCA9IHJlcXVpcmUoJ3N3Zm9iamVjdCcpO1xuXG5jb25zdCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmNvbnN0IFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpLlZQQUlEQWRVbml0O1xuXG5jb25zdCBub29wID0gcmVxdWlyZSgnLi91dGlscycpLm5vb3A7XG5jb25zdCBjYWxsYmFja1RpbWVvdXQgPSByZXF1aXJlKCcuL3V0aWxzJykuY2FsbGJhY2tUaW1lb3V0O1xuY29uc3QgaXNQb3NpdGl2ZUludCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5pc1Bvc2l0aXZlSW50O1xuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJRCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5jcmVhdGVFbGVtZW50V2l0aElEO1xuY29uc3QgdW5pcXVlVlBBSUQgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlKCd2cGFpZCcpO1xuY29uc3QgY3JlYXRlRmxhc2hUZXN0ZXIgPSByZXF1aXJlKCcuL2ZsYXNoVGVzdGVyLmpzJykuY3JlYXRlRmxhc2hUZXN0ZXI7XG5cbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcbmNvbnN0IEZMQVNIX1ZFUlNJT04gPSAnMTAuMS4wJztcblxubGV0IGZsYXNoVGVzdGVyID0ge2lzU3VwcG9ydGVkOiAoKT0+IHRydWV9OyAvLyBpZiB0aGUgcnVuRmxhc2hUZXN0IGlzIG5vdCBydW4gdGhlIGZsYXNoVGVzdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG5cbmNsYXNzIFZQQUlERkxBU0hDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yICh2cGFpZFBhcmVudEVsLCBjYWxsYmFjaywgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSwgcGFyYW1zID0geyB3bW9kZTogJ3RyYW5zcGFyZW50Jywgc2FsaWduOiAndGwnLCBhbGlnbjogJ2xlZnQnLCBhbGxvd1NjcmlwdEFjY2VzczogJ2Fsd2F5cycsIHNjYWxlOiAnbm9TY2FsZScsIGFsbG93RnVsbFNjcmVlbjogJ3RydWUnLCBxdWFsaXR5OiAnaGlnaCd9LCB2cGFpZE9wdGlvbnMgPSB7IGRlYnVnOiBmYWxzZSwgdGltZW91dDogMTAwMDAgfSkge1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fdnBhaWRQYXJlbnRFbCA9IHZwYWlkUGFyZW50RWw7XG4gICAgICAgIHRoaXMuX2ZsYXNoSUQgPSB1bmlxdWVWUEFJRCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHN3ZkNvbmZpZy53aWR0aCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLndpZHRoLCA4MDApO1xuICAgICAgICBzd2ZDb25maWcuaGVpZ2h0ID0gaXNQb3NpdGl2ZUludChzd2ZDb25maWcuaGVpZ2h0LCA0MDApO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoSUQodnBhaWRQYXJlbnRFbCwgdGhpcy5fZmxhc2hJRCwgdHJ1ZSk7XG5cbiAgICAgICAgcGFyYW1zLm1vdmllID0gc3dmQ29uZmlnLmRhdGE7XG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke3RoaXMuX2ZsYXNoSUR9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9JmRlYnVnPSR7dnBhaWRPcHRpb25zLmRlYnVnfSZzYWxpZ249JHtwYXJhbXMuc2FsaWdufWA7XG5cbiAgICAgICAgaWYgKCFWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCd1c2VyIGRvblxcJ3Qgc3VwcG9ydCBmbGFzaCBvciBkb2VzblxcJ3QgaGF2ZSB0aGUgbWluaW11bSByZXF1aXJlZCB2ZXJzaW9uIG9mIGZsYXNoICcgKyBGTEFTSF9WRVJTSU9OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCB0aGlzLl9mbGFzaElEKTtcblxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCAnc3dmb2JqZWN0IGZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IGluIGVsZW1lbnQnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlciA9IGNhbGxiYWNrVGltZW91dCh2cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAkbG9hZFBlbmRlZEFkVW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ3ZwYWlkIGZsYXNoIGxvYWQgdGltZW91dCAnICsgdnBhaWRPcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbmV3IEpTRmxhc2hCcmlkZ2UodGhpcy5lbCwgc3dmQ29uZmlnLmRhdGEsIHRoaXMuX2ZsYXNoSUQsIHN3ZkNvbmZpZy53aWR0aCwgc3dmQ29uZmlnLmhlaWdodCwgaGFuZGxlcik7XG5cbiAgICAgICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5fZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3lBZFVuaXQoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2sodGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9mbGFzaC5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSAoZXJyLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KHRoaXMuX2ZsYXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCB0aGlzLl9hZFVuaXQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdsb2FkQWRVbml0JywgW2FkVVJMXSwgdGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRMYXRlciA9IHt1cmw6IGFkVVJMLCBjYWxsYmFja307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRBZFVuaXQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgndW5sb2FkQWRVbml0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hJRCgpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoLmdldEZsYXNoSUQoKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hVUkwoKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaC5nZXRGbGFzaFVSTCgpO1xuICAgIH1cbn1cblxuc2V0U3RhdGljUHJvcGVydHkoJ2lzU3VwcG9ydGVkJywgKCkgPT4ge1xuICAgIHJldHVybiBzd2ZvYmplY3QuaGFzRmxhc2hQbGF5ZXJWZXJzaW9uKEZMQVNIX1ZFUlNJT04pICYmIGZsYXNoVGVzdGVyLmlzU3VwcG9ydGVkKCk7XG59LCB0cnVlKTtcblxuc2V0U3RhdGljUHJvcGVydHkoJ3J1bkZsYXNoVGVzdCcsIChzd2ZDb25maWcpID0+IHtcbiAgICBmbGFzaFRlc3RlciA9IGNyZWF0ZUZsYXNoVGVzdGVyKGRvY3VtZW50LmJvZHksIHN3ZkNvbmZpZyk7XG59KTtcblxuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVlBBSURGbGFzaFRvSlMgaXMgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGxvYWRQZW5kZWRBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRMYXRlcikge1xuICAgICAgICB0aGlzLmxvYWRBZFVuaXQodGhpcy5fbG9hZExhdGVyLnVybCwgdGhpcy5fbG9hZExhdGVyLmNhbGxiYWNrKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRMYXRlcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRpY1Byb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHdyaXRhYmxlID0gZmFsc2UpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlBBSURGTEFTSENsaWVudCwgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiB3cml0YWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cblZQQUlERkxBU0hDbGllbnQuc3dmb2JqZWN0ID0gc3dmb2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlERkxBU0hDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN3Zm9iamVjdCA9IHJlcXVpcmUoJ3N3Zm9iamVjdCcpO1xuXG5jb25zdCBGTEFTSF9URVNUID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX3Rlc3Rlcic7XG5jb25zdCBGTEFTSF9URVNUX0VMID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX3Rlc3Rlcl9lbCc7XG5jb25zdCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc3QgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuXG5jbGFzcyBGbGFzaFRlc3RlciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCBzd2ZDb25maWcgPSB7ZGF0YTogJ1ZQQUlERmxhc2guc3dmJywgd2lkdGg6IDgwMCwgaGVpZ2h0OiA0MDB9KSB7XG4gICAgICAgIHRoaXMucGFyZW50RWwgPSB1dGlscy5jcmVhdGVFbGVtZW50V2l0aElEKHBhcmVudCwgRkxBU0hfVEVTVF9FTCk7IC8vIHNvbWUgYnJvd3NlcnMgY3JlYXRlIGdsb2JhbCB2YXJpYWJsZXMgdXNpbmcgdGhlIGVsZW1lbnQgaWQgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDM0Mjc4L2RvLWRvbS10cmVlLWVsZW1lbnRzLXdpdGgtaWRzLWJlY29tZS1nbG9iYWwtdmFyaWFibGVzXG4gICAgICAgIHV0aWxzLmhpZGVGbGFzaEVsKHRoaXMucGFyZW50RWwpO1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIHBhcmFtcy5tb3ZpZSA9IHN3ZkNvbmZpZy5kYXRhO1xuICAgICAgICBwYXJhbXMuRmxhc2hWYXJzID0gYGZsYXNoaWQ9JHtGTEFTSF9URVNUX0VMfSZoYW5kbGVyPSR7SlNGbGFzaEJyaWRnZS5WUEFJRF9GTEFTSF9IQU5ETEVSfWA7XG4gICAgICAgIHBhcmFtcy5hbGxvd1NjcmlwdEFjY2VzcyA9ICdhbHdheXMnO1xuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCBGTEFTSF9URVNUX0VMKTtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBuZXcgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLl9pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgdXRpbHMuaGlkZUZsYXNoRWwodGhpcy5lbCk7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaCA9IG5ldyBKU0ZsYXNoQnJpZGdlKHRoaXMuZWwsIHN3ZkNvbmZpZy5kYXRhLCBGTEFTSF9URVNUX0VMLCBzd2ZDb25maWcud2lkdGgsIHN3ZkNvbmZpZy5oZWlnaHQsICgpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cHBvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU3VwcG9ydGVkID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVycy5nZXQoJ2NoYW5nZScpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnY2hhbmdlJywgc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcbiAgICB9XG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGNyZWF0ZUZsYXNoVGVzdGVyID0gZnVuY3Rpb24gY3JlYXRlRmxhc2hUZXN0ZXIoZWwsIHN3ZkNvbmZpZykge1xuICAgIGlmICghd2luZG93W0ZMQVNIX1RFU1RdKSB7XG4gICAgICAgIHdpbmRvd1tGTEFTSF9URVNUXSA9IG5ldyBGbGFzaFRlc3RlcihlbCwgc3dmQ29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvd1tGTEFTSF9URVNUXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCB1bmlxdWUgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlO1xubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmxldCBzdHJpbmdFbmRzV2l0aCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHJpbmdFbmRzV2l0aDtcbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuY29uc3QgcmVnaXN0cnkgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2VSZWdpc3RyeScpO1xuY29uc3QgVlBBSURfRkxBU0hfSEFORExFUiA9ICd2cGFpZF92aWRlb19mbGFzaF9oYW5kbGVyJztcbmNvbnN0IEVSUk9SID0gJ0FkRXJyb3InO1xuXG5leHBvcnQgY2xhc3MgSlNGbGFzaEJyaWRnZSB7XG4gICAgY29uc3RydWN0b3IgKGVsLCBmbGFzaFVSTCwgZmxhc2hJRCwgd2lkdGgsIGhlaWdodCwgbG9hZEhhbmRTaGFrZSkge1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl9mbGFzaElEID0gZmxhc2hJRDtcbiAgICAgICAgdGhpcy5fZmxhc2hVUkwgPSBmbGFzaFVSTDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX3VuaXF1ZU1ldGhvZElkZW50aWZpZXIgPSB1bmlxdWUodGhpcy5fZmxhc2hJRCk7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIgPSBsb2FkSGFuZFNoYWtlO1xuXG4gICAgICAgIHJlZ2lzdHJ5LmFkZEluc3RhbmNlKHRoaXMuX2ZsYXNoSUQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVCeUtleShldmVudE5hbWUpO1xuICAgIH1cblxuICAgIG9mZkFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIGNhbGxGbGFzaE1ldGhvZChtZXRob2ROYW1lLCBhcmdzID0gW10sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lEID0gJyc7XG4gICAgICAgIC8vIGlmIG5vIGNhbGxiYWNrLCBzb21lIG1ldGhvZHMgdGhlIHJldHVybiBpcyB2b2lkIHNvIHRoZXkgZG9uJ3QgbmVlZCBjYWxsYmFja1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrSUQgPSBgJHt0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyKCl9XyR7bWV0aG9kTmFtZX1gO1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFja0lELCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL21ldGhvZHMgYXJlIGNyZWF0ZWQgYnkgRXh0ZXJuYWxJbnRlcmZhY2UuYWRkQ2FsbGJhY2sgaW4gYXMzIGNvZGUsIGlmIGZvciBzb21lIHJlYXNvbiBpdCBmYWlsZWRcbiAgICAgICAgICAgIC8vdGhpcyBjb2RlIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgIHRoaXMuX2VsW21ldGhvZE5hbWVdKFtjYWxsYmFja0lEXS5jb25jYXQoYXJncykpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhbnkgY2FsbGJhY2sgdG8gcmV0dXJuIGVycm9yIHVzZSBlcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihFUlJPUiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUJ5VmFsdWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKHN1ZmZpeCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZmlsdGVyS2V5cygoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nRW5kc1dpdGgoa2V5LCBzdWZmaXgpO1xuICAgICAgICB9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIF90cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIC8vY2xpY2tUaHJ1IGhhcyB0byBiZSBzeW5jLCBpZiBub3Qgd2lsbCBiZSBibG9jayBieSB0aGUgcG9wdXBibG9ja2VyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnQWRDbGlja1RocnUnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzLmdldChldmVudE5hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2FsbENhbGxiYWNrKG1ldGhvZE5hbWUsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XG5cbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAvL25vdCBhbGwgbWV0aG9kcyBjYWxsYmFjaydzIGFyZSBtYW5kYXRvcnlcbiAgICAgICAgLy9idXQgaWYgdGhlcmUgZXhpc3QgYW4gZXJyb3IsIGZpcmUgdGhlIGVycm9yIGV2ZW50XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChlcnIgJiYgY2FsbGJhY2tJRCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRVJST1IsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KTtcblxuICAgIH1cblxuICAgIF9oYW5kU2hha2UoZXJyLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIoZXJyLCBkYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kU2hha2VIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tZXRob2RzIGxpa2UgcHJvcGVydGllcyBzcGVjaWZpYyB0byB0aGlzIGltcGxlbWVudGF0aW9uIG9mIFZQQUlEXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0fTtcbiAgICB9XG4gICAgc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaXNQb3NpdGl2ZUludChuZXdXaWR0aCwgdGhpcy5fd2lkdGgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KG5ld0hlaWdodCwgdGhpcy5faGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuX3dpZHRoKTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgICBzZXRXaWR0aChuZXdXaWR0aCkge1xuICAgICAgICB0aGlzLnNldFNpemUobmV3V2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgc2V0SGVpZ2h0KG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5fd2lkdGgsIG5ld0hlaWdodCk7XG4gICAgfVxuICAgIGdldEZsYXNoSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaElEO1xuICAgIH1cbiAgICBnZXRGbGFzaFVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoVVJMO1xuICAgIH1cbiAgICBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlbW92ZUluc3RhbmNlQnlJRCh0aGlzLl9mbGFzaElEKTtcbiAgICAgICAgaWYgKHRoaXMuX2VsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYXN5bmNDYWxsYmFjayhjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3MuZ2V0KGNhbGxiYWNrSUQpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoY2FsbGJhY2tJRCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2UsICdWUEFJRF9GTEFTSF9IQU5ETEVSJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBWUEFJRF9GTEFTSF9IQU5ETEVSXG59KTtcblxuLyoqXG4gKiBFeHRlcm5hbCBpbnRlcmZhY2UgaGFuZGxlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbGFzaElEIGlkZW50aWZpZXIgb2YgdGhlIGZsYXNoIHdobyBjYWxsIHRoaXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlSUQgd2hhdCB0eXBlIG9mIG1lc3NhZ2UgaXMsIGNhbiBiZSAnZXZlbnQnIG9yICdjYWxsYmFjaydcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSBpZiB0aGUgdHlwZUlEIGlzIGEgZXZlbnQgdGhlIHR5cGVOYW1lIHdpbGwgYmUgdGhlIGV2ZW50TmFtZSwgaWYgaXMgYSBjYWxsYmFjayB0aGUgdHlwZUlEIGlzIHRoZSBtZXRob2ROYW1lIHRoYXQgaXMgcmVsYXRlZCB0aGlzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tJRCBvbmx5IGFwcGxpZXMgd2hlbiB0aGUgdHlwZUlEIGlzICdjYWxsYmFjaycsIGlkZW50aWZpZXIgb2YgdGhlIGNhbGxiYWNrIHRvIGNhbGxcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBlcnJvciBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbndpbmRvd1tWUEFJRF9GTEFTSF9IQU5ETEVSXSA9IChmbGFzaElELCB0eXBlSUQsIHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IHJlZ2lzdHJ5LmdldEluc3RhbmNlQnlJRChmbGFzaElEKTtcbiAgICBpZiAoIWluc3RhbmNlKSByZXR1cm47XG4gICAgaWYgKHR5cGVOYW1lID09PSAnaGFuZFNoYWtlJykge1xuICAgICAgICBpbnN0YW5jZS5faGFuZFNoYWtlKGVycm9yLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZUlEICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fY2FsbENhbGxiYWNrKHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdHJpZ2dlcih0eXBlTmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgaW5zdGFuY2VzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcblxuY29uc3QgSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5ID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnYWRkSW5zdGFuY2UnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2VzLmFkZChpZCwgaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnZ2V0SW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5nZXQoaWQpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAncmVtb3ZlSW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5yZW1vdmUoaWQpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTRmxhc2hCcmlkZ2VSZWdpc3RyeTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgfVxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0cmllc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdHJpZXNbaWRdLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF0gfHwgW107XG4gICAgfVxuICAgIGZpbHRlcktleXMgKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgZmluZEJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmVtb3ZlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2tleV0pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmVtb3ZlQnlLZXkgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllcztcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbmdsZVZhbHVlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgIH1cbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICB9XG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZW1vdmUgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzO1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGYgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fV8keysrY291bnR9YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBvblRpbWVvdXQoKTtcblxuICAgIH0sIHRpbWVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgb25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIGlkLCBjbGVhbkNvbnRlbnQgPSBmYWxzZSkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuRWwuaWQgPSBpZDtcbiAgICBpZiAoY2xlYW5Db250ZW50KSB7XG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmVJbnQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobmV3VmFsKSkgJiYgaXNGaW5pdGUobmV3VmFsKSAmJiBuZXdWYWwgPiAwID8gbmV3VmFsIDogb2xkVmFsO1xufVxuXG5sZXQgZW5kc1dpdGggPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gZW5kc1dpdGggKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHN1YmplY3RTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoKHN0cmluZywgc2VhcmNoKSB7XG4gICAgcmV0dXJuIGVuZHNXaXRoLmNhbGwoc3RyaW5nLCBzZWFyY2gpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZsYXNoRWwoZWwpIHtcbiAgICAvLyBjYW4ndCB1c2UgZGlzcGxheSBub25lIG9yIHZpc2liaWxpdHkgbm9uZSBiZWNhdXNlIHdpbGwgYmxvY2sgZmxhc2ggaW4gc29tZSBicm93c2Vyc1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbC5zdHlsZS5sZWZ0ID0gJy0xcHgnO1xuICAgIGVsLnN0eWxlLnRvcCA9ICctMXB4JztcbiAgICBlbC5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHV0aWxzLnNldEZ1bGxTaXplU3R5bGUoZWwpO1xuICAgICAgICAkYWRkRXZlbnRzU3Vic2NyaWJlcnMuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pc1ZhbGlkVlBBSURBZCA9IGZ1bmN0aW9uIGlzVmFsaWRWUEFJREFkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufTtcblxuSVZQQUlEQWRVbml0Lk1FVEhPRFMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcbiAgICB2YXIgaWdub3JlcyA9IFtcbiAgICAgICAgJ3N1YnNjcmliZScsXG4gICAgICAgICd1bnN1YnNjcmliZScsXG4gICAgICAgICdpbml0QWQnXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVzLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHJldHVybjtcblxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYXR5ID0gSVZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdLmxlbmd0aDtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoYXJpYXR5ID09PSBhcmdzLmxlbmd0aCkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVttZXRob2RdLmFwcGx5KHRoaXMuX2NyZWF0aXZlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG5cbi8qKlxuICogaW5pdEFkIGNvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvbiwgaWYgZWwgJiB2aWRlbyB3YXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBzbG90ICYgdmlkZW9TbG90IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uIGluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge1xuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcbiAgICBlbnZpcm9ubWVudFZhcnMgPSB1dGlscy5leHRlbmQoe1xuICAgICAgICBzbG90OiB0aGlzLl9lbCAvKixcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsKi9cbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCk7XG4gICAgaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcbn07XG5cblxuLyoqXG4gKiB1bnN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50KTtcbn07XG5cbi8vYWxpYXNcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XG5WUEFJREFkVW5pdC5wcm90b3R5cGUub2ZmID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlO1xuXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVtnZXR0ZXJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24gc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZS5nZXRBZFZvbHVtZSgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUocmVzdWx0ID09PSB2b2x1bWUsICdmYWlsZWQgdG8gYXBwbHkgdm9sdW1lOiAnICsgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuVlBBSURBZFVuaXQucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBZCgpO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XG59O1xuXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XG4gICAgLy8gc29tZSBhZHMgaW1wbGVtZW50XG4gICAgLy8gc28gdGhleSBvbmx5IGhhbmRsZSBvbmUgc3Vic2NyaWJlclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXG4gICAgRklMVEVSRURfRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkdHJpZ2dlci5iaW5kKHRoaXMsIGV2ZW50KSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBtYXAgdGhlIGNsaWNrIGV2ZW50IHRvIGJlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGRlcGVuZGluZyBvZiB0aGUgb3JkZXIgb2YgdGhlIGFyZ3VtZW50c1xuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXG4gICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCRjbGlja1RocnVIb29rLmJpbmQodGhpcyksIEFEX0NMSUNLKTtcblxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCBhYmxlIHRvIGNsaWNrIGluIHRoZSB2aWRlb1xuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuICAgICAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkY2xpY2tUaHJ1SG9vayh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlclN5bmMoQURfQ0xJQ0ssIHt1cmw6IHVybCwgaWQ6IGlkLCBwbGF5ZXJIYW5kbGVzOiBwbGF5ZXJIYW5kbGVzfSk7XG59XG5cbmZ1bmN0aW9uICR0cmlnZ2VyKGV2ZW50KSB7XG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXIoZXZlbnQsIEFycmF5LnByb3RvdHlwZS5zbGljZShhcmd1bWVudHMsIDEpKTtcbn1cblxuZnVuY3Rpb24gY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCBzdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcbnZhciBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKTtcblxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD4nICtcbiAgICAnPGh0bWwgbGFuZz1cImVuXCI+JyArXG4gICAgJzxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvaGVhZD4nICtcbiAgICAnPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJ7e2lmcmFtZVVSTF9KU319XCI+PC9zY3JpcHQ+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPicgK1xuICAgICd3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgXFwne3tvcmlnaW59fVxcJyk7JyArXG4gICAgJzwvc2NyaXB0PicgK1xuICAgICc8L2JvZHk+JyArXG4gICAgJzwvaHRtbD4nO1xuXG52YXIgQURfU1RPUFBFRCA9ICdBZFN0b3BwZWQnO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuLyoqXG4gKiBWUEFJREhUTUw1Q2xpZW50XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIHRvIGxvYWQgYWRVbml0IGFuZCBhIGVsIHRvIGFkZCB0byBhZFVuaXQgc2xvdFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyBkZWZhdWx0IHZpZGVvIGVsZW1lbnQgdG8gYmUgdXNlZCBieSBhZFVuaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdGVtcGxhdGVDb25maWddIHRlbXBsYXRlOiBodG1sIHRlbXBsYXRlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgZXh0cmFPcHRpb25zOiB0byBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFt2cGFpZE9wdGlvbnNdIHRpbWVvdXQ6IHdoZW4gbG9hZGluZyBhZFVuaXRcbiAqL1xuZnVuY3Rpb24gVlBBSURIVE1MNUNsaWVudChlbCwgdmlkZW8sIHRlbXBsYXRlQ29uZmlnLCB2cGFpZE9wdGlvbnMpIHtcbiAgICB0ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnIHx8IHt9O1xuXG4gICAgdGhpcy5faWQgPSB1bmlxdWUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlRWxlbWVudEluRWwoZWwsICdkaXYnKTtcbiAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgdGhpcy5fdnBhaWRPcHRpb25zID0gdnBhaWRPcHRpb25zIHx8IHt0aW1lb3V0OiAxMDAwMH07XG5cbiAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZyA9IHtcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlQ29uZmlnLnRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZSxcbiAgICAgICAgZXh0cmFPcHRpb25zOiB0ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMgfHwge31cbiAgICB9O1xufVxuXG4vKipcbiAqIGRlc3Ryb3lcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBpc0Rlc3Ryb3llZFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbn07XG5cbi8qKlxuICogbG9hZEFkVW5pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgIGlmKHRoaXMuX29uTG9hZCl7IHJldHVybiB9XG5cbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxuICAgICAgICB0aGlzLl9mcmFtZUNvbnRhaW5lcixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb25maWcudGVtcGxhdGUsXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XG4gICAgICAgICAgICBpZnJhbWVVUkxfSlM6IGFkVVJMLFxuICAgICAgICAgICAgaWZyYW1lSUQ6IHRoaXMuZ2V0SUQoKSxcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG5cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxuICAgICAgICB0aGlzLl92cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgb25Mb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGdldE9yaWdpbigpKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFkRGVzdHJveWVkKCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbn1cblxuZnVuY3Rpb24gJHVubG9hZFByZXZpb3VzQWRVbml0KCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XG4gICAgJHJlbW92ZUVsLmNhbGwodGhpcywgJ19mcmFtZScpO1xuICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcbiAqXG4gKi9cbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9vbkxvYWQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fb25Mb2FkO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbiAgICB9XG59XG5cbi8qKlxuICogJHRocm93SWZEZXN0cm95ZWRcbiAqXG4gKi9cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnVlBBSURIVE1MNUNsaWVudCBhbHJlYWR5IGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xud2luZG93LlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBjYWxsYmFja1RpbWVvdXQgaWYgdGhlIG9uU3VjY2VzcyBpcyBub3QgY2FsbGVkIGFuZCByZXR1cm5zIHRydWUgaW4gdGhlIHRpbWVsaW1pdCB0aGVuIG9uVGltZW91dCB3aWxsIGJlIGNhbGxlZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdWNjZXNzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblRpbWVvdXRcbiAqL1xuZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuICAgIHZhciBjYWxsYmFjaywgdGltZW91dDtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuXG4vKipcbiAqIGNyZWF0ZUVsZW1lbnRJbkVsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJbkVsKHBhcmVudCwgdGFnTmFtZSwgaWQpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHZhciBpZnJhbWUgPSBjcmVhdGVJZnJhbWUocGFyZW50LCBudWxsLCBkYXRhLnpJbmRleCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG5FbC5zcmMgPSB1cmwgfHwgJ2Fib3V0OmJsYW5rJztcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XG4gICAgbkVsLm1hcmdpbkhlaWdodCA9ICcwJztcbiAgICBuRWwuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xuICAgIG5FbC5oZWlnaHQgPSAnMTAwJSc7XG4gICAgc2V0RnVsbFNpemVTdHlsZShuRWwpO1xuXG4gICAgaWYoekluZGV4KXtcbiAgICAgICAgbkVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICB9XG5cbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5mdW5jdGlvbiBzZXRGdWxsU2l6ZVN0eWxlKGVsZW1lbnQpIHtcbiAgICBpZihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBzaW1wbGVUZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSA6IGRhdGFba2V5XTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogc2V0SWZyYW1lQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElmcmFtZUVsZW1lbnR9IGlmcmFtZUVsXG4gKiBAcGFyYW0gY29udGVudFxuICovXG5mdW5jdGlvbiBzZXRJZnJhbWVDb250ZW50KGlmcmFtZUVsLCBjb250ZW50KSB7XG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAoIWlmcmFtZURvYykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0IHdpdGgga2V5cyBmcm9tIGFub3RoZXIgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXG4gKiBAcGFyYW0ge29iamVjdH0gZnJvbVNvdXJjZVxuICovXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tU291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB0b0V4dGVuZFtrZXldID0gZnJvbVNvdXJjZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b0V4dGVuZDtcbn1cblxuXG4vKipcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyAoKytjb3VudCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9vcDogbm9vcCxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzZXRGdWxsU2l6ZVN0eWxlOiBzZXRGdWxsU2l6ZVN0eWxlLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCIvKiEgICAgU1dGT2JqZWN0IHYyLjMuMjAxMzA1MjEgPGh0dHA6Ly9naXRodWIuY29tL3N3Zm9iamVjdC9zd2ZvYmplY3Q+XHJcbiAgICBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgPGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPlxyXG4qL1xyXG5cclxuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3Q6IGZhbHNlICovXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTURcclxuICAgIGRlZmluZShmYWN0b3J5KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAvLyBOb2RlLCBDb21tb25KUy1saWtlXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcclxuICAgIHJvb3Quc3dmb2JqZWN0ID0gZmFjdG9yeSgpO1xyXG4gIH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIFVOREVGID0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBPQkpFQ1QgPSBcIm9iamVjdFwiLFxyXG4gICAgICAgIFNIT0NLV0FWRV9GTEFTSCA9IFwiU2hvY2t3YXZlIEZsYXNoXCIsXHJcbiAgICAgICAgU0hPQ0tXQVZFX0ZMQVNIX0FYID0gXCJTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaFwiLFxyXG4gICAgICAgIEZMQVNIX01JTUVfVFlQRSA9IFwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIixcclxuICAgICAgICBFWFBSRVNTX0lOU1RBTExfSUQgPSBcIlNXRk9iamVjdEV4cHJJbnN0XCIsXHJcbiAgICAgICAgT05fUkVBRFlfU1RBVEVfQ0hBTkdFID0gXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixcclxuXHJcbiAgICAgICAgd2luID0gd2luZG93LFxyXG4gICAgICAgIGRvYyA9IGRvY3VtZW50LFxyXG4gICAgICAgIG5hdiA9IG5hdmlnYXRvcixcclxuXHJcbiAgICAgICAgcGx1Z2luID0gZmFsc2UsXHJcbiAgICAgICAgZG9tTG9hZEZuQXJyID0gW10sXHJcbiAgICAgICAgcmVnT2JqQXJyID0gW10sXHJcbiAgICAgICAgb2JqSWRBcnIgPSBbXSxcclxuICAgICAgICBsaXN0ZW5lcnNBcnIgPSBbXSxcclxuICAgICAgICBzdG9yZWRGYkNvbnRlbnQsXHJcbiAgICAgICAgc3RvcmVkRmJDb250ZW50SWQsXHJcbiAgICAgICAgc3RvcmVkQ2FsbGJhY2tGbixcclxuICAgICAgICBzdG9yZWRDYWxsYmFja09iaixcclxuICAgICAgICBpc0RvbUxvYWRlZCA9IGZhbHNlLFxyXG4gICAgICAgIGlzRXhwcmVzc0luc3RhbGxBY3RpdmUgPSBmYWxzZSxcclxuICAgICAgICBkeW5hbWljU3R5bGVzaGVldCxcclxuICAgICAgICBkeW5hbWljU3R5bGVzaGVldE1lZGlhLFxyXG4gICAgICAgIGF1dG9IaWRlU2hvdyA9IHRydWUsXHJcbiAgICAgICAgZW5jb2RlVVJJRW5hYmxlZCA9IGZhbHNlLFxyXG5cclxuICAgIC8qIENlbnRyYWxpemVkIGZ1bmN0aW9uIGZvciBicm93c2VyIGZlYXR1cmUgZGV0ZWN0aW9uXHJcbiAgICAgICAgLSBVc2VyIGFnZW50IHN0cmluZyBkZXRlY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gbm8gZ29vZCBhbHRlcm5hdGl2ZSBpcyBwb3NzaWJsZVxyXG4gICAgICAgIC0gSXMgZXhlY3V0ZWQgZGlyZWN0bHkgZm9yIG9wdGltYWwgcGVyZm9ybWFuY2VcclxuICAgICovXHJcbiAgICB1YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdzNjZG9tID0gdHlwZW9mIGRvYy5nZXRFbGVtZW50QnlJZCAhPT0gVU5ERUYgJiYgdHlwZW9mIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gVU5ERUYgJiYgdHlwZW9mIGRvYy5jcmVhdGVFbGVtZW50ICE9PSBVTkRFRixcclxuICAgICAgICAgICAgdSA9IG5hdi51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgcCA9IG5hdi5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICB3aW5kb3dzID0gcCA/IC93aW4vLnRlc3QocCkgOiAvd2luLy50ZXN0KHUpLFxyXG4gICAgICAgICAgICBtYWMgPSBwID8gL21hYy8udGVzdChwKSA6IC9tYWMvLnRlc3QodSksXHJcbiAgICAgICAgICAgIHdlYmtpdCA9IC93ZWJraXQvLnRlc3QodSkgPyBwYXJzZUZsb2F0KHUucmVwbGFjZSgvXi4qd2Via2l0XFwvKFxcZCsoXFwuXFxkKyk/KS4qJC8sIFwiJDFcIikpIDogZmFsc2UsIC8vIHJldHVybnMgZWl0aGVyIHRoZSB3ZWJraXQgdmVyc2lvbiBvciBmYWxzZSBpZiBub3Qgd2Via2l0XHJcbiAgICAgICAgICAgIGllID0gbmF2LmFwcE5hbWUgPT09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIsXHJcbiAgICAgICAgICAgIHBsYXllclZlcnNpb24gPSBbMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIGQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmF2LnBsdWdpbnMgIT09IFVOREVGICYmIHR5cGVvZiBuYXYucGx1Z2luc1tTSE9DS1dBVkVfRkxBU0hdID09PSBPQkpFQ1QpIHtcclxuICAgICAgICAgICAgZCA9IG5hdi5wbHVnaW5zW1NIT0NLV0FWRV9GTEFTSF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIC8vIG5hdi5taW1lVHlwZXNbXCJhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaFwiXS5lbmFibGVkUGx1Z2luIGluZGljYXRlcyB3aGV0aGVyIHBsdWctaW5zIGFyZSBlbmFibGVkIG9yIGRpc2FibGVkIGluIFNhZmFyaSAzK1xyXG4gICAgICAgICAgICBpZiAoZCAmJiAodHlwZW9mIG5hdi5taW1lVHlwZXMgIT09IFVOREVGICYmIG5hdi5taW1lVHlwZXNbRkxBU0hfTUlNRV9UWVBFXSAmJiBuYXYubWltZVR5cGVzW0ZMQVNIX01JTUVfVFlQRV0uZW5hYmxlZFBsdWdpbikpIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZSA9IGZhbHNlOyAvLyBjYXNjYWRlZCBmZWF0dXJlIGRldGVjdGlvbiBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoL14uKlxccysoXFxTK1xccytcXFMrJCkvLCBcIiQxXCIpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyVmVyc2lvblswXSA9IHRvSW50KGQucmVwbGFjZSgvXiguKilcXC4uKiQvLCBcIiQxXCIpKTtcclxuICAgICAgICAgICAgICAgIHBsYXllclZlcnNpb25bMV0gPSB0b0ludChkLnJlcGxhY2UoL14uKlxcLiguKilcXHMuKiQvLCBcIiQxXCIpKTtcclxuICAgICAgICAgICAgICAgIHBsYXllclZlcnNpb25bMl0gPSAvW2EtekEtWl0vLnRlc3QoZCkgPyB0b0ludChkLnJlcGxhY2UoL14uKlthLXpBLVpdKyguKikkLywgXCIkMVwiKSkgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB3aW4uQWN0aXZlWE9iamVjdCAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IEFjdGl2ZVhPYmplY3QoU0hPQ0tXQVZFX0ZMQVNIX0FYKTtcclxuICAgICAgICAgICAgICAgIGlmIChhKSB7IC8vIGEgd2lsbCByZXR1cm4gbnVsbCB3aGVuIEFjdGl2ZVggaXMgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBkID0gYS5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGllID0gdHJ1ZTsgLy8gY2FzY2FkZWQgZmVhdHVyZSBkZXRlY3Rpb24gZm9yIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBkLnNwbGl0KFwiIFwiKVsxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclZlcnNpb24gPSBbdG9JbnQoZFswXSksIHRvSW50KGRbMV0pLCB0b0ludChkWzJdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3czOiB3M2Nkb20sIHB2OiBwbGF5ZXJWZXJzaW9uLCB3azogd2Via2l0LCBpZTogaWUsIHdpbjogd2luZG93cywgbWFjOiBtYWN9O1xyXG4gICAgfSgpLFxyXG5cclxuICAgIC8qIENyb3NzLWJyb3dzZXIgb25Eb21Mb2FkXHJcbiAgICAgICAgLSBXaWxsIGZpcmUgYW4gZXZlbnQgYXMgc29vbiBhcyB0aGUgRE9NIG9mIGEgd2ViIHBhZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgLSBJbnRlcm5ldCBFeHBsb3JlciB3b3JrYXJvdW5kIGJhc2VkIG9uIERpZWdvIFBlcmluaSdzIHNvbHV0aW9uOiBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vSUVDb250ZW50TG9hZGVkL1xyXG4gICAgICAgIC0gUmVndWxhciBvbmxvYWQgc2VydmVzIGFzIGZhbGxiYWNrXHJcbiAgICAqL1xyXG4gICAgb25Eb21Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdWEudzMpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZG9jLnJlYWR5U3RhdGUgIT09IFVOREVGICYmIChkb2MucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IGRvYy5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIpKSB8fCAodHlwZW9mIGRvYy5yZWFkeVN0YXRlID09PSBVTkRFRiAmJiAoZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSB8fCBkb2MuYm9keSkpKSB7IC8vIGZ1bmN0aW9uIGlzIGZpcmVkIGFmdGVyIG9ubG9hZCwgZS5nLiB3aGVuIHNjcmlwdCBpcyBpbnNlcnRlZCBkeW5hbWljYWxseVxyXG4gICAgICAgICAgICBjYWxsRG9tTG9hZEZ1bmN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzRG9tTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLmFkZEV2ZW50TGlzdGVuZXIgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2FsbERvbUxvYWRGdW5jdGlvbnMsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodWEuaWUpIHtcclxuICAgICAgICAgICAgICAgIGRvYy5hdHRhY2hFdmVudChPTl9SRUFEWV9TVEFURV9DSEFOR0UsIGZ1bmN0aW9uIGRldGFjaCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MuZGV0YWNoRXZlbnQoT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCBkZXRhY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsRG9tTG9hZEZ1bmN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbiA9PSB0b3ApIHsgLy8gaWYgbm90IGluc2lkZSBhbiBpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gY2hlY2tEb21Mb2FkZWRJRSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9tTG9hZGVkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbChcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tEb21Mb2FkZWRJRSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbERvbUxvYWRGdW5jdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1YS53aykge1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIGNoZWNrRG9tTG9hZGVkV0soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9tTG9hZGVkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghL2xvYWRlZHxjb21wbGV0ZS8udGVzdChkb2MucmVhZHlTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja0RvbUxvYWRlZFdLLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsRG9tTG9hZEZ1bmN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxsRG9tTG9hZEZ1bmN0aW9ucygpIHtcclxuICAgICAgICBpZiAoaXNEb21Mb2FkZWQgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSkgeyByZXR1cm47IH1cclxuICAgICAgICB0cnkgeyAvLyB0ZXN0IGlmIHdlIGNhbiByZWFsbHkgYWRkL3JlbW92ZSBlbGVtZW50cyB0by9mcm9tIHRoZSBET007IHdlIGRvbid0IHdhbnQgdG8gZmlyZSBpdCB0b28gZWFybHlcclxuICAgICAgICAgICAgdmFyIHQsIHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vaGlkZSB0aGUgc3BhbiBpbiBjYXNlIHNvbWVvbmUgaGFzIHN0eWxlZCBzcGFucyB2aWEgQ1NTXHJcbiAgICAgICAgICAgIHQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7XHJcbiAgICAgICAgICAgIHQgPSBudWxsOyAvL2NsZWFyIHRoZSB2YXJpYWJsZXNcclxuICAgICAgICAgICAgc3BhbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlzRG9tTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZGwgPSBkb21Mb2FkRm5BcnIubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGw7IGkrKykge1xyXG4gICAgICAgICAgICBkb21Mb2FkRm5BcnJbaV0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRG9tTG9hZEV2ZW50KGZuKSB7XHJcbiAgICAgICAgaWYgKGlzRG9tTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb21Mb2FkRm5BcnJbZG9tTG9hZEZuQXJyLmxlbmd0aF0gPSBmbjsgLy8gQXJyYXkucHVzaCgpIGlzIG9ubHkgYXZhaWxhYmxlIGluIElFNS41K1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBDcm9zcy1icm93c2VyIG9ubG9hZFxyXG4gICAgICAgIC0gQmFzZWQgb24gSmFtZXMgRWR3YXJkcycgc29sdXRpb246IGh0dHA6Ly9icm90aGVyY2FrZS5jb20vc2l0ZS9yZXNvdXJjZXMvc2NyaXB0cy9vbmxvYWQvXHJcbiAgICAgICAgLSBXaWxsIGZpcmUgYW4gZXZlbnQgYXMgc29vbiBhcyBhIHdlYiBwYWdlIGluY2x1ZGluZyBhbGwgb2YgaXRzIGFzc2V0cyBhcmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZExvYWRFdmVudChmbikge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luLmFkZEV2ZW50TGlzdGVuZXIgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmbiwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZG9jLmFkZEV2ZW50TGlzdGVuZXIgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmbiwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luLmF0dGFjaEV2ZW50ICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICBhZGRMaXN0ZW5lcih3aW4sIFwib25sb2FkXCIsIGZuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHdpbi5vbmxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB2YXIgZm5PbGQgPSB3aW4ub25sb2FkO1xyXG4gICAgICAgICAgICB3aW4ub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm5PbGQoKTtcclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW4ub25sb2FkID0gZm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIERldGVjdCB0aGUgRmxhc2ggUGxheWVyIHZlcnNpb24gZm9yIG5vbi1JbnRlcm5ldCBFeHBsb3JlciBicm93c2Vyc1xyXG4gICAgICAgIC0gRGV0ZWN0aW5nIHRoZSBwbHVnLWluIHZlcnNpb24gdmlhIHRoZSBvYmplY3QgZWxlbWVudCBpcyBtb3JlIHByZWNpc2UgdGhhbiB1c2luZyB0aGUgcGx1Z2lucyBjb2xsZWN0aW9uIGl0ZW0ncyBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIGEuIEJvdGggcmVsZWFzZSBhbmQgYnVpbGQgbnVtYmVycyBjYW4gYmUgZGV0ZWN0ZWRcclxuICAgICAgICAgIGIuIEF2b2lkIHdyb25nIGRlc2NyaXB0aW9ucyBieSBjb3JydXB0IGluc3RhbGxlcnMgcHJvdmlkZWQgYnkgQWRvYmVcclxuICAgICAgICAgIGMuIEF2b2lkIHdyb25nIGRlc2NyaXB0aW9ucyBieSBtdWx0aXBsZSBGbGFzaCBQbGF5ZXIgZW50cmllcyBpbiB0aGUgcGx1Z2luIEFycmF5LCBjYXVzZWQgYnkgaW5jb3JyZWN0IGJyb3dzZXIgaW1wb3J0c1xyXG4gICAgICAgIC0gRGlzYWR2YW50YWdlIG9mIHRoaXMgbWV0aG9kIGlzIHRoYXQgaXQgZGVwZW5kcyBvbiB0aGUgYXZhaWxhYmlsaXR5IG9mIHRoZSBET00sIHdoaWxlIHRoZSBwbHVnaW5zIGNvbGxlY3Rpb24gaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGVzdFBsYXllclZlcnNpb24oKSB7XHJcbiAgICAgICAgdmFyIGIgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG4gICAgICAgIHZhciBvID0gY3JlYXRlRWxlbWVudChPQkpFQ1QpO1xyXG4gICAgICAgIG8uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiBoaWRkZW47XCIpO1xyXG4gICAgICAgIG8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBGTEFTSF9NSU1FX1RZUEUpO1xyXG4gICAgICAgIHZhciB0ID0gYi5hcHBlbmRDaGlsZChvKTtcclxuICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiBjaGVja0dldFZhcmlhYmxlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0LkdldFZhcmlhYmxlICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdC5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IGQuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVhLnB2ID0gW3RvSW50KGRbMF0pLCB0b0ludChkWzFdKSwgdG9JbnQoZFsyXSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3QuR2V0VmFyaWFibGUoXCIkdmVyc2lvblwiKSBpcyBrbm93biB0byBmYWlsIGluIEZsYXNoIFBsYXllciA4IG9uIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGlzIGVycm9yIGlzIGVuY291bnRlcmVkLCBhc3N1bWUgRlA4IG9yIGxvd2VyLiBUaW1lIHRvIHVwZ3JhZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVhLnB2ID0gWzgsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50ZXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrR2V0VmFyaWFibGUsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiLnJlbW92ZUNoaWxkKG8pO1xyXG4gICAgICAgICAgICAgICAgdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtYXRjaFZlcnNpb25zKCk7XHJcbiAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaFZlcnNpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFBlcmZvcm0gRmxhc2ggUGxheWVyIGFuZCBTV0YgdmVyc2lvbiBtYXRjaGluZzsgc3RhdGljIHB1Ymxpc2hpbmcgb25seVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG1hdGNoVmVyc2lvbnMoKSB7XHJcbiAgICAgICAgdmFyIHJsID0gcmVnT2JqQXJyLmxlbmd0aDtcclxuICAgICAgICBpZiAocmwgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmw7IGkrKykgeyAvLyBmb3IgZWFjaCByZWdpc3RlcmVkIG9iamVjdCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSByZWdPYmpBcnJbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2IgPSByZWdPYmpBcnJbaV0uY2FsbGJhY2tGbjtcclxuICAgICAgICAgICAgICAgIHZhciBjYk9iaiA9IHtzdWNjZXNzOiBmYWxzZSwgaWQ6IGlkfTtcclxuICAgICAgICAgICAgICAgIGlmICh1YS5wdlswXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1BsYXllclZlcnNpb24ocmVnT2JqQXJyW2ldLnN3ZlZlcnNpb24pICYmICEodWEud2sgJiYgdWEud2sgPCAzMTIpKSB7IC8vIEZsYXNoIFBsYXllciB2ZXJzaW9uID49IHB1Ymxpc2hlZCBTV0YgdmVyc2lvbjogSG91c3Rvbiwgd2UgaGF2ZSBhIG1hdGNoIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5yZWYgPSBnZXRPYmplY3RCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKGNiT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWdPYmpBcnJbaV0uZXhwcmVzc0luc3RhbGwgJiYgY2FuRXhwcmVzc0luc3RhbGwoKSkgeyAvLyBzaG93IHRoZSBBZG9iZSBFeHByZXNzIEluc3RhbGwgZGlhbG9nIGlmIHNldCBieSB0aGUgd2ViIHBhZ2UgYXV0aG9yIGFuZCBpZiBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dC5kYXRhID0gcmVnT2JqQXJyW2ldLmV4cHJlc3NJbnN0YWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0LndpZHRoID0gb2JqLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0LmhlaWdodCA9IG9iai5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKSB7IGF0dC5zdHlsZWNsYXNzID0gb2JqLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdldEF0dHJpYnV0ZShcImFsaWduXCIpKSB7IGF0dC5hbGlnbiA9IG9iai5nZXRBdHRyaWJ1dGUoXCJhbGlnblwiKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgSFRNTCBvYmplY3QgcGFyYW0gZWxlbWVudCdzIG5hbWUtdmFsdWUgcGFpcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXIgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gb2JqLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyYW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGwgPSBwLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwW2pdLmdldEF0dHJpYnV0ZShcIm5hbWVcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJtb3ZpZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcltwW2pdLmdldEF0dHJpYnV0ZShcIm5hbWVcIildID0gcFtqXS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwcmVzc0luc3RhbGwoYXR0LCBwYXIsIGlkLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIEZsYXNoIFBsYXllciBhbmQgU1dGIHZlcnNpb24gbWlzbWF0Y2ggb3IgYW4gb2xkZXIgV2Via2l0IGVuZ2luZSB0aGF0IGlnbm9yZXMgdGhlIEhUTUwgb2JqZWN0IGVsZW1lbnQncyBuZXN0ZWQgcGFyYW0gZWxlbWVudHM6IGRpc3BsYXkgZmFsbGJhY2sgY29udGVudCBpbnN0ZWFkIG9mIFNXRlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZiQ29udGVudChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7IGNiKGNiT2JqKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIGlmIG5vIEZsYXNoIFBsYXllciBpcyBpbnN0YWxsZWQgb3IgdGhlIGZwIHZlcnNpb24gY2Fubm90IGJlIGRldGVjdGVkIHdlIGxldCB0aGUgSFRNTCBvYmplY3QgZWxlbWVudCBkbyBpdHMgam9iIChlaXRoZXIgc2hvdyBhIFNXRiBvciBmYWxsYmFjayBjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGdldE9iamVjdEJ5SWQoaWQpOyAvLyB0ZXN0IHdoZXRoZXIgdGhlcmUgaXMgYW4gSFRNTCBvYmplY3QgZWxlbWVudCBvciBub3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8uU2V0VmFyaWFibGUgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLnJlZiA9IG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5pZCA9IG8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IoY2JPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBNYWluIGZ1bmN0aW9uXHJcbiAgICAgICAgLSBXaWxsIHByZWZlcmFibHkgZXhlY3V0ZSBvbkRvbUxvYWQsIG90aGVyd2lzZSBvbmxvYWQgKGFzIGEgZmFsbGJhY2spXHJcbiAgICAqL1xyXG4gICAgZG9tTG9hZEZuQXJyWzBdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChwbHVnaW4pIHtcclxuICAgICAgICAgICAgdGVzdFBsYXllclZlcnNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoVmVyc2lvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE9iamVjdEJ5SWQob2JqZWN0SWRTdHIpIHtcclxuICAgICAgICB2YXIgciA9IG51bGwsXHJcbiAgICAgICAgICAgIG8gPSBnZXRFbGVtZW50QnlJZChvYmplY3RJZFN0cik7XHJcblxyXG4gICAgICAgIGlmIChvICYmIG8ubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJPQkpFQ1RcIikge1xyXG4gICAgICAgICAgICAvL0lmIHRhcmdldGVkIG9iamVjdCBpcyB2YWxpZCBGbGFzaCBmaWxlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygby5TZXRWYXJpYWJsZSAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgIHIgPSBvO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9JZiBTZXRWYXJpYWJsZSBpcyBub3Qgd29ya2luZyBvbiB0YXJnZXRlZCBvYmplY3QgYnV0IGEgbmVzdGVkIG9iamVjdCBpc1xyXG4gICAgICAgICAgICAgICAgLy9hdmFpbGFibGUsIGFzc3VtZSBjbGFzc2ljIG5lc3RlZCBvYmplY3QgbWFya3VwLiBSZXR1cm4gbmVzdGVkIG9iamVjdC5cclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIFNldFZhcmlhYmxlIGlzIG5vdCB3b3JraW5nIG9uIHRhcmdldGVkIG9iamVjdCBhbmQgdGhlcmUgaXMgbm8gbmVzdGVkIG9iamVjdCxcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHRoZSBvcmlnaW5hbCBvYmplY3QgYW55d2F5LiBUaGlzIGlzIHByb2JhYmx5IG5ldyBzaW1wbGlmaWVkIG1hcmt1cC5cclxuXHJcbiAgICAgICAgICAgICAgICByID0gby5nZXRFbGVtZW50c0J5VGFnTmFtZShPQkpFQ1QpWzBdIHx8IG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlcXVpcmVtZW50cyBmb3IgQWRvYmUgRXhwcmVzcyBJbnN0YWxsXHJcbiAgICAgICAgLSBvbmx5IG9uZSBpbnN0YW5jZSBjYW4gYmUgYWN0aXZlIGF0IGEgdGltZVxyXG4gICAgICAgIC0gZnAgNi4wLjY1IG9yIGhpZ2hlclxyXG4gICAgICAgIC0gV2luL01hYyBPUyBvbmx5XHJcbiAgICAgICAgLSBubyBXZWJraXQgZW5naW5lcyBvbGRlciB0aGFuIHZlcnNpb24gMzEyXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gY2FuRXhwcmVzc0luc3RhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuICFpc0V4cHJlc3NJbnN0YWxsQWN0aXZlICYmIGhhc1BsYXllclZlcnNpb24oXCI2LjAuNjVcIikgJiYgKHVhLndpbiB8fCB1YS5tYWMpICYmICEodWEud2sgJiYgdWEud2sgPCAzMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNob3cgdGhlIEFkb2JlIEV4cHJlc3MgSW5zdGFsbCBkaWFsb2dcclxuICAgICAgICAtIFJlZmVyZW5jZTogaHR0cDovL3d3dy5hZG9iZS5jb20vY2Z1c2lvbi9rbm93bGVkZ2ViYXNlL2luZGV4LmNmbT9pZD02YTI1M2I3NVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNob3dFeHByZXNzSW5zdGFsbChhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0ciwgY2FsbGJhY2tGbikge1xyXG5cclxuICAgICAgICB2YXIgb2JqID0gZ2V0RWxlbWVudEJ5SWQocmVwbGFjZUVsZW1JZFN0cik7XHJcblxyXG4gICAgICAgIC8vRW5zdXJlIHRoYXQgcmVwbGFjZUVsZW1JZFN0ciBpcyByZWFsbHkgYSBzdHJpbmcgYW5kIG5vdCBhbiBlbGVtZW50XHJcbiAgICAgICAgcmVwbGFjZUVsZW1JZFN0ciA9IGdldElkKHJlcGxhY2VFbGVtSWRTdHIpO1xyXG5cclxuICAgICAgICBpc0V4cHJlc3NJbnN0YWxsQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBzdG9yZWRDYWxsYmFja0ZuID0gY2FsbGJhY2tGbiB8fCBudWxsO1xyXG4gICAgICAgIHN0b3JlZENhbGxiYWNrT2JqID0ge3N1Y2Nlc3M6IGZhbHNlLCBpZDogcmVwbGFjZUVsZW1JZFN0cn07XHJcblxyXG4gICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIk9CSkVDVFwiKSB7IC8vIHN0YXRpYyBwdWJsaXNoaW5nXHJcbiAgICAgICAgICAgICAgICBzdG9yZWRGYkNvbnRlbnQgPSBhYnN0cmFjdEZiQ29udGVudChvYmopO1xyXG4gICAgICAgICAgICAgICAgc3RvcmVkRmJDb250ZW50SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAvLyBkeW5hbWljIHB1Ymxpc2hpbmdcclxuICAgICAgICAgICAgICAgIHN0b3JlZEZiQ29udGVudCA9IG9iajtcclxuICAgICAgICAgICAgICAgIHN0b3JlZEZiQ29udGVudElkID0gcmVwbGFjZUVsZW1JZFN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHQuaWQgPSBFWFBSRVNTX0lOU1RBTExfSUQ7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0LndpZHRoID09PSBVTkRFRiB8fCAoIS8lJC8udGVzdChhdHQud2lkdGgpICYmIHRvSW50KGF0dC53aWR0aCkgPCAzMTApKSB7IGF0dC53aWR0aCA9IFwiMzEwXCI7IH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHQuaGVpZ2h0ID09PSBVTkRFRiB8fCAoIS8lJC8udGVzdChhdHQuaGVpZ2h0KSAmJiB0b0ludChhdHQuaGVpZ2h0KSA8IDEzNykpIHsgYXR0LmhlaWdodCA9IFwiMTM3XCI7IH1cclxuICAgICAgICAgICAgdmFyIHB0ID0gdWEuaWUgPyBcIkFjdGl2ZVhcIiA6IFwiUGx1Z0luXCIsXHJcbiAgICAgICAgICAgICAgICBmdiA9IFwiTU1yZWRpcmVjdFVSTD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh3aW4ubG9jYXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC8mL2csIFwiJTI2XCIpKSArIFwiJk1NcGxheWVyVHlwZT1cIiArIHB0ICsgXCImTU1kb2N0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkb2MudGl0bGUuc2xpY2UoMCwgNDcpICsgXCIgLSBGbGFzaCBQbGF5ZXIgSW5zdGFsbGF0aW9uXCIpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhci5mbGFzaHZhcnMgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICBwYXIuZmxhc2h2YXJzICs9IFwiJlwiICsgZnY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXIuZmxhc2h2YXJzID0gZnY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSUUgb25seTogd2hlbiBhIFNXRiBpcyBsb2FkaW5nIChBTkQ6IG5vdCBhdmFpbGFibGUgaW4gY2FjaGUpIHdhaXQgZm9yIHRoZSByZWFkeVN0YXRlIG9mIHRoZSBvYmplY3QgZWxlbWVudCB0byBiZWNvbWUgNCBiZWZvcmUgcmVtb3ZpbmcgaXQsXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgeW91IGNhbm5vdCBwcm9wZXJseSBjYW5jZWwgYSBsb2FkaW5nIFNXRiBmaWxlIHdpdGhvdXQgYnJlYWtpbmcgYnJvd3NlciBsb2FkIHJlZmVyZW5jZXMsIGFsc28gb2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSBkb2Vzbid0IHdvcmtcclxuICAgICAgICAgICAgaWYgKHVhLmllICYmIG9iai5yZWFkeVN0YXRlICE9IDQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdPYmogPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZUVsZW1JZFN0ciArPSBcIlNXRk9iamVjdE5ld1wiO1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqLnNldEF0dHJpYnV0ZShcImlkXCIsIHJlcGxhY2VFbGVtSWRTdHIpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld09iaiwgb2JqKTsgLy8gaW5zZXJ0IHBsYWNlaG9sZGVyIGRpdiB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIG9iamVjdCBlbGVtZW50IHRoYXQgbG9hZHMgZXhwcmVzc2luc3RhbGwuc3dmXHJcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlU1dGKG9iaik7IC8vcmVtb3ZlU1dGIGFjY2VwdHMgZWxlbWVudHMgbm93XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlU1dGKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogRnVuY3Rpb25zIHRvIGFic3RyYWN0IGFuZCBkaXNwbGF5IGZhbGxiYWNrIGNvbnRlbnRcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RmJDb250ZW50KG9iaikge1xyXG4gICAgICAgIGlmICh1YS5pZSAmJiBvYmoucmVhZHlTdGF0ZSAhPSA0KSB7XHJcbiAgICAgICAgICAgIC8vIElFIG9ubHk6IHdoZW4gYSBTV0YgaXMgbG9hZGluZyAoQU5EOiBub3QgYXZhaWxhYmxlIGluIGNhY2hlKSB3YWl0IGZvciB0aGUgcmVhZHlTdGF0ZSBvZiB0aGUgb2JqZWN0IGVsZW1lbnQgdG8gYmVjb21lIDQgYmVmb3JlIHJlbW92aW5nIGl0LFxyXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHlvdSBjYW5ub3QgcHJvcGVybHkgY2FuY2VsIGEgbG9hZGluZyBTV0YgZmlsZSB3aXRob3V0IGJyZWFraW5nIGJyb3dzZXIgbG9hZCByZWZlcmVuY2VzLCBhbHNvIG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgZG9lc24ndCB3b3JrXHJcbiAgICAgICAgICAgIG9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgb2JqKTsgLy8gaW5zZXJ0IHBsYWNlaG9sZGVyIGRpdiB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGZhbGxiYWNrIGNvbnRlbnRcclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYWJzdHJhY3RGYkNvbnRlbnQob2JqKSwgZWwpO1xyXG4gICAgICAgICAgICByZW1vdmVTV0Yob2JqKTsgLy9yZW1vdmVTV0YgYWNjZXB0cyBlbGVtZW50cyBub3dcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChhYnN0cmFjdEZiQ29udGVudChvYmopLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhYnN0cmFjdEZiQ29udGVudChvYmopIHtcclxuICAgICAgICB2YXIgYWMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmICh1YS53aW4gJiYgdWEuaWUpIHtcclxuICAgICAgICAgICAgYWMuaW5uZXJIVE1MID0gb2JqLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuZXN0ZWRPYmogPSBvYmouZ2V0RWxlbWVudHNCeVRhZ05hbWUoT0JKRUNUKVswXTtcclxuICAgICAgICAgICAgaWYgKG5lc3RlZE9iaikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBuZXN0ZWRPYmouY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsID0gYy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNbaV0ubm9kZVR5cGUgPT0gMSAmJiBjW2ldLm5vZGVOYW1lID09PSBcIlBBUkFNXCIpICYmICEoY1tpXS5ub2RlVHlwZSA9PSA4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWMuYXBwZW5kQ2hpbGQoY1tpXS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhYztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJZU9iamVjdCh1cmwsIHBhcmFtU3RyKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiPG9iamVjdCBjbGFzc2lkPSdjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDAnPjxwYXJhbSBuYW1lPSdtb3ZpZScgdmFsdWU9J1wiICsgdXJsICsgXCInPlwiICsgcGFyYW1TdHIgKyBcIjwvb2JqZWN0PlwiO1xyXG4gICAgICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcm9zcy1icm93c2VyIGR5bmFtaWMgU1dGIGNyZWF0aW9uXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU1dGKGF0dE9iaiwgcGFyT2JqLCBpZCkge1xyXG4gICAgICAgIHZhciByLCBlbCA9IGdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZCA9IGdldElkKGlkKTsgLy8gZW5zdXJlIGlkIGlzIHRydWx5IGFuIElEIGFuZCBub3QgYW4gZWxlbWVudFxyXG5cclxuICAgICAgICBpZiAodWEud2sgJiYgdWEud2sgPCAzMTIpIHsgcmV0dXJuIHI7IH1cclxuXHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gKHVhLmllKSA/IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgOiBjcmVhdGVFbGVtZW50KE9CSkVDVCksXHJcbiAgICAgICAgICAgICAgICBhdHRyLFxyXG4gICAgICAgICAgICAgICAgYXR0ckxvd2VyLFxyXG4gICAgICAgICAgICAgICAgcGFyYW07XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dE9iai5pZCA9PT0gVU5ERUYpIHsgLy8gaWYgbm8gJ2lkJyBpcyBkZWZpbmVkIGZvciB0aGUgb2JqZWN0IGVsZW1lbnQsIGl0IHdpbGwgaW5oZXJpdCB0aGUgJ2lkJyBmcm9tIHRoZSBmYWxsYmFjayBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBhdHRPYmouaWQgPSBpZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9BZGQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAocGFyYW0gaW4gcGFyT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvL2ZpbHRlciBvdXQgcHJvdG90eXBlIGFkZGl0aW9ucyBmcm9tIG90aGVyIHBvdGVudGlhbCBsaWJyYXJpZXMgYW5kIElFIHNwZWNpZmljIHBhcmFtIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGlmIChwYXJPYmouaGFzT3duUHJvcGVydHkocGFyYW0pICYmIHBhcmFtLnRvTG93ZXJDYXNlKCkgIT09IFwibW92aWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU9ialBhcmFtKG8sIHBhcmFtLCBwYXJPYmpbcGFyYW1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgSUUgb2JqZWN0LCBjb21wbGV0ZSB3aXRoIHBhcmFtIG5vZGVzXHJcbiAgICAgICAgICAgIGlmICh1YS5pZSkgeyBvID0gY3JlYXRlSWVPYmplY3QoYXR0T2JqLmRhdGEsIG8uaW5uZXJIVE1MKTsgfVxyXG5cclxuICAgICAgICAgICAgLy9BZGQgYXR0cmlidXRlcyB0byBvYmplY3RcclxuICAgICAgICAgICAgZm9yIChhdHRyIGluIGF0dE9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dE9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkgeyAvLyBmaWx0ZXIgb3V0IHByb3RvdHlwZSBhZGRpdGlvbnMgZnJvbSBvdGhlciBwb3RlbnRpYWwgbGlicmFyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ckxvd2VyID0gYXR0ci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAnY2xhc3MnIGlzIGFuIEVDTUE0IHJlc2VydmVkIGtleXdvcmRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ckxvd2VyID09PSBcInN0eWxlY2xhc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGF0dE9ialthdHRyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyTG93ZXIgIT09IFwiY2xhc3NpZFwiICYmIGF0dHJMb3dlciAhPT0gXCJkYXRhXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0T2JqW2F0dHJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh1YS5pZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqSWRBcnJbb2JqSWRBcnIubGVuZ3RoXSA9IGF0dE9iai5pZDsgLy8gc3RvcmVkIHRvIGZpeCBvYmplY3QgJ2xlYWtzJyBvbiB1bmxvYWQgKGR5bmFtaWMgcHVibGlzaGluZyBvbmx5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIEZMQVNIX01JTUVfVFlQRSk7XHJcbiAgICAgICAgICAgICAgICBvLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgYXR0T2JqLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvLCBlbCk7XHJcbiAgICAgICAgICAgIHIgPSBvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT2JqUGFyYW0oZWwsIHBOYW1lLCBwVmFsdWUpIHtcclxuICAgICAgICB2YXIgcCA9IGNyZWF0ZUVsZW1lbnQoXCJwYXJhbVwiKTtcclxuICAgICAgICBwLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgcE5hbWUpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcFZhbHVlKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcm9zcy1icm93c2VyIFNXRiByZW1vdmFsXHJcbiAgICAgICAgLSBFc3BlY2lhbGx5IG5lZWRlZCB0byBzYWZlbHkgYW5kIGNvbXBsZXRlbHkgcmVtb3ZlIGEgU1dGIGluIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU1dGKGlkKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IGdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAob2JqICYmIG9iai5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIk9CSkVDVFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS5pZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiByZW1vdmVTV0ZJbklFKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBzdGVwIHByZXZlbnRzIG1lbW9yeSBsZWFrcyBpbiBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbaV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZVNXRkluSUUsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnQoaWQpIHtcclxuICAgICAgICByZXR1cm4gKGlkICYmIGlkLm5vZGVUeXBlICYmIGlkLm5vZGVUeXBlID09PSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJZCh0aGluZykge1xyXG4gICAgICAgIHJldHVybiAoaXNFbGVtZW50KHRoaW5nKSkgPyB0aGluZy5pZCA6IHRoaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZ1bmN0aW9ucyB0byBvcHRpbWl6ZSBKYXZhU2NyaXB0IGNvbXByZXNzaW9uXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcclxuXHJcbiAgICAgICAgLy9BbGxvdyB1c2VycyB0byBwYXNzIGFuIGVsZW1lbnQgT1IgYW4gZWxlbWVudCdzIElEXHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChpZCkpIHsgcmV0dXJuIGlkOyB9XHJcblxyXG4gICAgICAgIHZhciBlbCA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZWwgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge31cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbCkge1xyXG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudChlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UbyBhaWQgY29tcHJlc3Npb247IHJlcGxhY2VzIDE0IGluc3RhbmNlcyBvZiBwYXJlc2VJbnQgd2l0aCByYWRpeFxyXG4gICAgZnVuY3Rpb24gdG9JbnQoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFVwZGF0ZWQgYXR0YWNoRXZlbnQgZnVuY3Rpb24gZm9yIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgLSBTdG9yZXMgYXR0YWNoRXZlbnQgaW5mb3JtYXRpb24gaW4gYW4gQXJyYXksIHNvIG9uIHVubG9hZCB0aGUgZGV0YWNoRXZlbnQgZnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGZuKSB7XHJcbiAgICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KGV2ZW50VHlwZSwgZm4pO1xyXG4gICAgICAgIGxpc3RlbmVyc0FycltsaXN0ZW5lcnNBcnIubGVuZ3RoXSA9IFt0YXJnZXQsIGV2ZW50VHlwZSwgZm5dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZsYXNoIFBsYXllciBhbmQgU1dGIGNvbnRlbnQgdmVyc2lvbiBtYXRjaGluZ1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc1BsYXllclZlcnNpb24ocnYpIHtcclxuICAgICAgICBydiArPSBcIlwiOyAvL0NvZXJjZSBudW1iZXIgdG8gc3RyaW5nLCBpZiBuZWVkZWQuXHJcbiAgICAgICAgdmFyIHB2ID0gdWEucHYsIHYgPSBydi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgdlswXSA9IHRvSW50KHZbMF0pO1xyXG4gICAgICAgIHZbMV0gPSB0b0ludCh2WzFdKSB8fCAwOyAvLyBzdXBwb3J0cyBzaG9ydCBub3RhdGlvbiwgZS5nLiBcIjlcIiBpbnN0ZWFkIG9mIFwiOS4wLjBcIlxyXG4gICAgICAgIHZbMl0gPSB0b0ludCh2WzJdKSB8fCAwO1xyXG4gICAgICAgIHJldHVybiAocHZbMF0gPiB2WzBdIHx8IChwdlswXSA9PSB2WzBdICYmIHB2WzFdID4gdlsxXSkgfHwgKHB2WzBdID09IHZbMF0gJiYgcHZbMV0gPT0gdlsxXSAmJiBwdlsyXSA+PSB2WzJdKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3Jvc3MtYnJvd3NlciBkeW5hbWljIENTUyBjcmVhdGlvblxyXG4gICAgICAgIC0gQmFzZWQgb24gQm9iYnkgdmFuIGRlciBTbHVpcycgc29sdXRpb246IGh0dHA6Ly93d3cuYm9iYnl2YW5kZXJzbHVpcy5jb20vYXJ0aWNsZXMvZHluYW1pY0NTUy5waHBcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDU1Moc2VsLCBkZWNsLCBtZWRpYSwgbmV3U3R5bGUpIHtcclxuICAgICAgICB2YXIgaCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcbiAgICAgICAgaWYgKCFoKSB7IHJldHVybjsgfSAvLyB0byBhbHNvIHN1cHBvcnQgYmFkbHkgYXV0aG9yZWQgSFRNTCBwYWdlcyB0aGF0IGxhY2sgYSBoZWFkIGVsZW1lbnRcclxuICAgICAgICB2YXIgbSA9ICh0eXBlb2YgbWVkaWEgPT09IFwic3RyaW5nXCIpID8gbWVkaWEgOiBcInNjcmVlblwiO1xyXG4gICAgICAgIGlmIChuZXdTdHlsZSkge1xyXG4gICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldCA9IG51bGw7XHJcbiAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0TWVkaWEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWR5bmFtaWNTdHlsZXNoZWV0IHx8IGR5bmFtaWNTdHlsZXNoZWV0TWVkaWEgIT0gbSkge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgZHluYW1pYyBzdHlsZXNoZWV0ICsgZ2V0IGEgZ2xvYmFsIHJlZmVyZW5jZSB0byBpdFxyXG4gICAgICAgICAgICB2YXIgcyA9IGNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XHJcbiAgICAgICAgICAgIHMuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbSk7XHJcbiAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0ID0gaC5hcHBlbmRDaGlsZChzKTtcclxuICAgICAgICAgICAgaWYgKHVhLmllICYmIHR5cGVvZiBkb2Muc3R5bGVTaGVldHMgIT09IFVOREVGICYmIGRvYy5zdHlsZVNoZWV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldCA9IGRvYy5zdHlsZVNoZWV0c1tkb2Muc3R5bGVTaGVldHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXRNZWRpYSA9IG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFkZCBzdHlsZSBydWxlXHJcbiAgICAgICAgaWYgKGR5bmFtaWNTdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZHluYW1pY1N0eWxlc2hlZXQuYWRkUnVsZSAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0LmFkZFJ1bGUoc2VsLCBkZWNsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jLmNyZWF0ZVRleHROb2RlICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHNlbCArIFwiIHtcIiArIGRlY2wgKyBcIn1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpc2liaWxpdHkoaWQsIGlzVmlzaWJsZSkge1xyXG4gICAgICAgIGlmICghYXV0b0hpZGVTaG93KSB7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciB2ID0gaXNWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBlbCA9IGdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoaXNEb21Mb2FkZWQgJiYgZWwpIHtcclxuICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9IHY7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY3JlYXRlQ1NTKFwiI1wiICsgaWQsIFwidmlzaWJpbGl0eTpcIiArIHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGaWx0ZXIgdG8gYXZvaWQgWFNTIGF0dGFja3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB1cmxFbmNvZGVJZk5lY2Vzc2FyeShzKSB7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gL1tcXFxcXFxcIjw+XFwuO10vO1xyXG4gICAgICAgIHZhciBoYXNCYWRDaGFycyA9IHJlZ2V4LmV4ZWMocykgIT09IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGhhc0JhZENoYXJzICYmIHR5cGVvZiBlbmNvZGVVUklDb21wb25lbnQgIT09IFVOREVGID8gZW5jb2RlVVJJQ29tcG9uZW50KHMpIDogcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZWxlYXNlIG1lbW9yeSB0byBhdm9pZCBtZW1vcnkgbGVha3MgY2F1c2VkIGJ5IGNsb3N1cmVzLCBmaXggaGFuZ2luZyBhdWRpby92aWRlbyB0aHJlYWRzIGFuZCBmb3JjZSBvcGVuIHNvY2tldHMvTmV0Q29ubmVjdGlvbnMgdG8gZGlzY29ubmVjdCAoSW50ZXJuZXQgRXhwbG9yZXIgb25seSlcclxuICAgICovXHJcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodWEuaWUpIHtcclxuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVycyB0byBhdm9pZCBtZW1vcnkgbGVha3NcclxuICAgICAgICAgICAgICAgIHZhciBsbCA9IGxpc3RlbmVyc0Fyci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNBcnJbaV1bMF0uZGV0YWNoRXZlbnQobGlzdGVuZXJzQXJyW2ldWzFdLCBsaXN0ZW5lcnNBcnJbaV1bMl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2xlYW51cCBkeW5hbWljYWxseSBlbWJlZGRlZCBvYmplY3RzIHRvIGZpeCBhdWRpby92aWRlbyB0aHJlYWRzIGFuZCBmb3JjZSBvcGVuIHNvY2tldHMgYW5kIE5ldENvbm5lY3Rpb25zIHRvIGRpc2Nvbm5lY3RcclxuICAgICAgICAgICAgICAgIHZhciBpbCA9IG9iaklkQXJyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaWw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNXRihvYmpJZEFycltqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhbnVwIGxpYnJhcnkncyBtYWluIGNsb3N1cmVzIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiB1YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVhW2tdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgaW4gc3dmb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dmb2JqZWN0W2xdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3Zm9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8qIFB1YmxpYyBBUElcclxuICAgICAgICAgICAgLSBSZWZlcmVuY2U6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9zd2ZvYmplY3Qvd2lraS9kb2N1bWVudGF0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICByZWdpc3Rlck9iamVjdDogZnVuY3Rpb24gKG9iamVjdElkU3RyLCBzd2ZWZXJzaW9uU3RyLCB4aVN3ZlVybFN0ciwgY2FsbGJhY2tGbikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMgJiYgb2JqZWN0SWRTdHIgJiYgc3dmVmVyc2lvblN0cikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlZ09iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcmVnT2JqLmlkID0gb2JqZWN0SWRTdHI7XHJcbiAgICAgICAgICAgICAgICByZWdPYmouc3dmVmVyc2lvbiA9IHN3ZlZlcnNpb25TdHI7XHJcbiAgICAgICAgICAgICAgICByZWdPYmouZXhwcmVzc0luc3RhbGwgPSB4aVN3ZlVybFN0cjtcclxuICAgICAgICAgICAgICAgIHJlZ09iai5jYWxsYmFja0ZuID0gY2FsbGJhY2tGbjtcclxuICAgICAgICAgICAgICAgIHJlZ09iakFycltyZWdPYmpBcnIubGVuZ3RoXSA9IHJlZ09iajtcclxuICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkob2JqZWN0SWRTdHIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuKHtzdWNjZXNzOiBmYWxzZSwgaWQ6IG9iamVjdElkU3RyfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRPYmplY3RCeUlkOiBmdW5jdGlvbiAob2JqZWN0SWRTdHIpIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0T2JqZWN0QnlJZChvYmplY3RJZFN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlbWJlZFNXRjogZnVuY3Rpb24gKHN3ZlVybFN0ciwgcmVwbGFjZUVsZW1JZFN0ciwgd2lkdGhTdHIsIGhlaWdodFN0ciwgc3dmVmVyc2lvblN0ciwgeGlTd2ZVcmxTdHIsIGZsYXNodmFyc09iaiwgcGFyT2JqLCBhdHRPYmosIGNhbGxiYWNrRm4pIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IGdldElkKHJlcGxhY2VFbGVtSWRTdHIpLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tPYmogPSB7c3VjY2VzczogZmFsc2UsIGlkOiBpZH07XHJcblxyXG4gICAgICAgICAgICBpZiAodWEudzMgJiYgISh1YS53ayAmJiB1YS53ayA8IDMxMikgJiYgc3dmVXJsU3RyICYmIHJlcGxhY2VFbGVtSWRTdHIgJiYgd2lkdGhTdHIgJiYgaGVpZ2h0U3RyICYmIHN3ZlZlcnNpb25TdHIpIHtcclxuICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGFkZERvbUxvYWRFdmVudChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhTdHIgKz0gXCJcIjsgLy8gYXV0by1jb252ZXJ0IHRvIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFN0ciArPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0T2JqICYmIHR5cGVvZiBhdHRPYmogPT09IE9CSkVDVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGF0dE9iaikgeyAvLyBjb3B5IG9iamVjdCB0byBhdm9pZCB0aGUgdXNlIG9mIHJlZmVyZW5jZXMsIGJlY2F1c2Ugd2ViIGF1dGhvcnMgb2Z0ZW4gcmV1c2UgYXR0T2JqIGZvciBtdWx0aXBsZSBTV0ZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRbaV0gPSBhdHRPYmpbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0LmRhdGEgPSBzd2ZVcmxTdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0LndpZHRoID0gd2lkdGhTdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0LmhlaWdodCA9IGhlaWdodFN0cjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhck9iaiAmJiB0eXBlb2YgcGFyT2JqID09PSBPQkpFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBwYXJPYmopIHsgLy8gY29weSBvYmplY3QgdG8gYXZvaWQgdGhlIHVzZSBvZiByZWZlcmVuY2VzLCBiZWNhdXNlIHdlYiBhdXRob3JzIG9mdGVuIHJldXNlIHBhck9iaiBmb3IgbXVsdGlwbGUgU1dGc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyW2pdID0gcGFyT2JqW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFzaHZhcnNPYmogJiYgdHlwZW9mIGZsYXNodmFyc09iaiA9PT0gT0JKRUNUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gZmxhc2h2YXJzT2JqKSB7IC8vIGNvcHkgb2JqZWN0IHRvIGF2b2lkIHRoZSB1c2Ugb2YgcmVmZXJlbmNlcywgYmVjYXVzZSB3ZWIgYXV0aG9ycyBvZnRlbiByZXVzZSBmbGFzaHZhcnNPYmogZm9yIG11bHRpcGxlIFNXRnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbGFzaHZhcnNPYmouaGFzT3duUHJvcGVydHkoaykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IChlbmNvZGVVUklFbmFibGVkKSA/IGVuY29kZVVSSUNvbXBvbmVudChrKSA6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gKGVuY29kZVVSSUVuYWJsZWQpID8gZW5jb2RlVVJJQ29tcG9uZW50KGZsYXNodmFyc09ialtrXSkgOiBmbGFzaHZhcnNPYmpba107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyLmZsYXNodmFycyAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyLmZsYXNodmFycyArPSBcIiZcIiArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIuZmxhc2h2YXJzID0ga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNQbGF5ZXJWZXJzaW9uKHN3ZlZlcnNpb25TdHIpKSB7IC8vIGNyZWF0ZSBTV0ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGNyZWF0ZVNXRihhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHQuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrT2JqLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja09iai5yZWYgPSBvYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrT2JqLmlkID0gb2JqLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4aVN3ZlVybFN0ciAmJiBjYW5FeHByZXNzSW5zdGFsbCgpKSB7IC8vIHNob3cgQWRvYmUgRXhwcmVzcyBJbnN0YWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dC5kYXRhID0geGlTd2ZVcmxTdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHByZXNzSW5zdGFsbChhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0ciwgY2FsbGJhY2tGbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIHNob3cgZmFsbGJhY2sgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrRm4pIHsgY2FsbGJhY2tGbihjYWxsYmFja09iaik7IH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNhbGxiYWNrRm4pIHsgY2FsbGJhY2tGbihjYWxsYmFja09iaik7IH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzd2l0Y2hPZmZBdXRvSGlkZVNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXV0b0hpZGVTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZW5hYmxlVXJpRW5jb2Rpbmc6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgIGVuY29kZVVSSUVuYWJsZWQgPSAodHlwZW9mIGJvb2wgPT09IFVOREVGKSA/IHRydWUgOiBib29sO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVhOiB1YSxcclxuXHJcbiAgICAgICAgZ2V0Rmxhc2hQbGF5ZXJWZXJzaW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7bWFqb3I6IHVhLnB2WzBdLCBtaW5vcjogdWEucHZbMV0sIHJlbGVhc2U6IHVhLnB2WzJdfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYXNGbGFzaFBsYXllclZlcnNpb246IGhhc1BsYXllclZlcnNpb24sXHJcblxyXG4gICAgICAgIGNyZWF0ZVNXRjogZnVuY3Rpb24gKGF0dE9iaiwgcGFyT2JqLCByZXBsYWNlRWxlbUlkU3RyKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53Mykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVNXRihhdHRPYmosIHBhck9iaiwgcmVwbGFjZUVsZW1JZFN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2hvd0V4cHJlc3NJbnN0YWxsOiBmdW5jdGlvbiAoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIsIGNhbGxiYWNrRm4pIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczICYmIGNhbkV4cHJlc3NJbnN0YWxsKCkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFeHByZXNzSW5zdGFsbChhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0ciwgY2FsbGJhY2tGbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmVTV0Y6IGZ1bmN0aW9uIChvYmpFbGVtSWRTdHIpIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVTV0Yob2JqRWxlbUlkU3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNyZWF0ZUNTUzogZnVuY3Rpb24gKHNlbFN0ciwgZGVjbFN0ciwgbWVkaWFTdHIsIG5ld1N0eWxlQm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNTUyhzZWxTdHIsIGRlY2xTdHIsIG1lZGlhU3RyLCBuZXdTdHlsZUJvb2xlYW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkRG9tTG9hZEV2ZW50OiBhZGREb21Mb2FkRXZlbnQsXHJcblxyXG4gICAgICAgIGFkZExvYWRFdmVudDogYWRkTG9hZEV2ZW50LFxyXG5cclxuICAgICAgICBnZXRRdWVyeVBhcmFtVmFsdWU6IGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IGRvYy5sb2NhdGlvbi5zZWFyY2ggfHwgZG9jLmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgIGlmIChxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoL1xcPy8udGVzdChxKSkgeyBxID0gcS5zcGxpdChcIj9cIilbMV07IH0gLy8gc3RyaXAgcXVlc3Rpb24gbWFya1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmxFbmNvZGVJZk5lY2Vzc2FyeShxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYWlycyA9IHEuc3BsaXQoXCImXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWlyc1tpXS5zdWJzdHJpbmcoMCwgcGFpcnNbaV0uaW5kZXhPZihcIj1cIikpID09IHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmxFbmNvZGVJZk5lY2Vzc2FyeShwYWlyc1tpXS5zdWJzdHJpbmcoKHBhaXJzW2ldLmluZGV4T2YoXCI9XCIpICsgMSkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gRm9yIGludGVybmFsIHVzYWdlIG9ubHlcclxuICAgICAgICBleHByZXNzSW5zdGFsbENhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0V4cHJlc3NJbnN0YWxsQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gZ2V0RWxlbWVudEJ5SWQoRVhQUkVTU19JTlNUQUxMX0lEKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmogJiYgc3RvcmVkRmJDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHN0b3JlZEZiQ29udGVudCwgb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmVkRmJDb250ZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShzdG9yZWRGYkNvbnRlbnRJZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1YS5pZSkgeyBzdG9yZWRGYkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmVkQ2FsbGJhY2tGbikgeyBzdG9yZWRDYWxsYmFja0ZuKHN0b3JlZENhbGxiYWNrT2JqKTsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNFeHByZXNzSW5zdGFsbEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdmVyc2lvbjogXCIyLjNcIlxyXG5cclxuICAgIH07XHJcbn0pKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XG5cbmZ1bmN0aW9uIEFkKGFkSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFkKSkge1xuICAgIHJldHVybiBuZXcgQWQoYWRKVHJlZSk7XG4gIH1cbiAgdGhpcy5pbml0aWFsaXplKGFkSlRyZWUpO1xufVxuXG5BZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFkSlRyZWUpIHtcbiAgdGhpcy5pZCA9IGFkSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGFkSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcblxuICBpZihhZEpUcmVlLmluTGluZSkge1xuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XG4gIH1cblxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xuICAgIHRoaXMud3JhcHBlciA9IG5ldyBXcmFwcGVyKGFkSlRyZWUud3JhcHBlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5cbmZ1bmN0aW9uIENvbXBhbmlvbihjb21wYW5pb25KVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFuaW9uKSkge1xuICAgIHJldHVybiBuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKTtcbiAgfVxuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGNvbXBhbmlvbiBhZFwiKTtcbiAgbG9nZ2VyLmRlYnVnIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25KVHJlZTpcIiwgY29tcGFuaW9uSlRyZWUpO1xuXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZVR5cGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSwgJ2NyZWF0aXZlVHlwZScpO1xuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY3JlYXRpdmVUeXBlOiBcIiArIHRoaXMuY3JlYXRpdmVUeXBlKTtcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIHN0YXRpY1Jlc291cmNlOiBcIiArIHRoaXMuc3RhdGljUmVzb3VyY2UpO1xuXG4gIC8vIFdlaXJkIGJ1ZyB3aGVuIHRoZSBKWE9OIHRyZWUgaXMgYnVpbHQgaXQgZG9lc24ndCBoYW5kbGUgY2FzaW5nIHByb3Blcmx5IGluIHRoaXMgc2l0dWF0aW9uLi4uXG4gIHZhciBodG1sUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xuICB9XG5cbiAgaWYgKGh0bWxSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGh0bWwgcmVzb3VyY2VcIiwgaHRtbFJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaHRtbFJlc291cmNlID0gaHRtbFJlc291cmNlO1xuXG4gIHZhciBpZnJhbWVSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaWZyYW1lUmVzb3VyY2UgIT09IG51bGwpXG4gIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBpZnJhbWUgcmVzb3VyY2VcIiwgaWZyYW1lUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5pZnJhbWVSZXNvdXJjZSA9IGlmcmFtZVJlc291cmNlO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMuaWQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2lkJyk7XG4gIHRoaXMud2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3dpZHRoJyk7XG4gIHRoaXMuaGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdoZWlnaHQnKTtcbiAgdGhpcy5leHBhbmRlZFdpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZFdpZHRoJyk7XG4gIHRoaXMuZXhwYW5kZWRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkSGVpZ2h0Jyk7XG4gIHRoaXMuc2NhbGFibGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3NjYWxhYmxlJyk7XG4gIHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbyA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnbWFpbnRhaW5Bc3BlY3RSYXRpbycpO1xuICB0aGlzLm1pblN1Z2dlc3RlZER1cmF0aW9uID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtaW5TdWdnZXN0ZWREdXJhdGlvbicpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXBpRnJhbWV3b3JrJyk7XG4gIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCk7XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nKTtcblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY29tcGFuaW9uQ2xpY2tUaHJvdWdoOiBcIiArIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcblxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYW5pb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBDb21wYW5pb24gPSByZXF1aXJlKCcuL0NvbXBhbmlvbicpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcbiAgICByZXR1cm4gbmV3IENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5pZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGNyZWF0aXZlSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcblxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xuICAgIHRoaXMubGluZWFyID0gbmV3IExpbmVhcihjcmVhdGl2ZUpUcmVlLmxpbmVhcik7XG4gIH1cblxuICBpZiAoY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMpIHtcbiAgICB2YXIgY29tcGFuaW9ucyA9IFtdO1xuICAgIHZhciBjb21wYW5pb25BZHMgPSBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcyAmJiBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcy5jb21wYW5pb247XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY29tcGFuaW9uQWRzKSkge1xuICAgICAgY29tcGFuaW9uQWRzID0gdXRpbGl0aWVzLmlzQXJyYXkoY29tcGFuaW9uQWRzKSA/IGNvbXBhbmlvbkFkcyA6IFtjb21wYW5pb25BZHNdO1xuICAgICAgY29tcGFuaW9uQWRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbmlvbkRhdGEpIHtcbiAgICAgICAgY29tcGFuaW9ucy5wdXNoKG5ldyBDb21wYW5pb24oY29tcGFuaW9uRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY29tcGFuaW9uQWRzID0gY29tcGFuaW9ucztcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhdCB0aGUgY3JlYXRpdmUuXG4gKi9cbkNyZWF0aXZlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubGluZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZWFyLmlzU3VwcG9ydGVkKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkNyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzID0gZnVuY3Rpb24gcGFyc2VDcmVhdGl2ZXMoY3JlYXRpdmVzSlRyZWUpIHtcbiAgdmFyIGNyZWF0aXZlcyA9IFtdO1xuICB2YXIgY3JlYXRpdmVzRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpKSB7XG4gICAgY3JlYXRpdmVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSA/IGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlIDogW2NyZWF0aXZlc0pUcmVlLmNyZWF0aXZlXTtcbiAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBjcmVhdGl2ZXMucHVzaChuZXcgQ3JlYXRpdmUoY3JlYXRpdmUpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY3JlYXRpdmVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xuXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gSW5MaW5lKGlubGluZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbkxpbmUoaW5saW5lSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBGaWVsZHNcbiAgdGhpcy5hZFRpdGxlID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkVGl0bGUpO1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMoaW5saW5lSlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMoaW5saW5lSlRyZWUuY3JlYXRpdmVzKTtcblxuICAvL09wdGlvbmFsIEZpZWxkc1xuICB0aGlzLmRlc2NyaXB0aW9uID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmRlc2NyaXB0aW9uKTtcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xuICB0aGlzLnN1cnZleXMgPSBwYXJzZVN1cnZleXMoaW5saW5lSlRyZWUuc3VydmV5KTtcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5lcnJvcik7XG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcbiAgdGhpcy5leHRlbnNpb25zID0gaW5saW5lSlRyZWUuZXh0ZW5zaW9ucztcblxuICBpZiAodGhpcy5leHRlbnNpb25zICYmIHRoaXMuZXh0ZW5zaW9ucy5leHRlbnNpb24pIHtcbiAgICB0aGlzLnRpbWVzID0gcGFyc2VFeHRlbnNpb25zKHRoaXMuZXh0ZW5zaW9ucy5leHRlbnNpb24pO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVN1cnZleXMoaW5saW5lU3VydmV5cykge1xuICAgIGlmIChpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHV0aWxpdGllcy5pc0FycmF5KGlubGluZVN1cnZleXMpID8gaW5saW5lU3VydmV5cyA6IFtpbmxpbmVTdXJ2ZXlzXSwgZnVuY3Rpb24gKHN1cnZleSkge1xuICAgICAgICBpZih1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhzdXJ2ZXkua2V5VmFsdWUpKXtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJpOiBzdXJ2ZXkua2V5VmFsdWUsXG4gICAgICAgICAgICB0eXBlOiBzdXJ2ZXkuYXR0cigndHlwZScpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHRlbnNpb25zKGV4dERhdGEpIHtcbiAgICB2YXIgdGltZXMgPSB7fTtcbiAgICBpZiAoZXh0RGF0YSkge1xuICAgICAgZXh0RGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGV4dERhdGEpID8gZXh0RGF0YSA6IFtleHREYXRhXTtcbiAgICAgIGV4dERhdGEuZm9yRWFjaChmdW5jdGlvbiAoX2V4dERhdGEpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBwYXJzZXJzLnRpbWUoX2V4dERhdGEua2V5VmFsdWUpO1xuICAgICAgICBpZiAodGltZSkgdGltZXNbX2V4dERhdGEuYXR0cigndHlwZScpXSA9IHRpbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYWxsIHRoZSBjcmVhdGl2ZXMuXG4gKi9cbkluTGluZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICB2YXIgaSxsZW47XG5cbiAgaWYodGhpcy5jcmVhdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yKGkgPSAwLCBsZW4gPSB0aGlzLmNyZWF0aXZlcy5sZW5ndGg7IGk8IGxlbjsgaSs9MSl7XG4gICAgaWYoIXRoaXMuY3JlYXRpdmVzW2ldLmlzU3VwcG9ydGVkKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5MaW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cblxuZnVuY3Rpb24gTGluZWFyKGxpbmVhckpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaW5lYXIpKSB7XG4gICAgcmV0dXJuIG5ldyBMaW5lYXIobGluZWFySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih4bWwua2V5VmFsdWUobGluZWFySlRyZWUuZHVyYXRpb24pKTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gcGFyc2VNZWRpYUZpbGVzKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZWRpYUZpbGUpO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nLCB0aGlzLmR1cmF0aW9uKTtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQoeG1sLmF0dHIobGluZWFySlRyZWUsICdza2lwb2Zmc2V0JyksIHRoaXMuZHVyYXRpb24pO1xuXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xuICB9XG5cbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcblxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSkge1xuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhLCBkdXJhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1lZGlhRmlsZXMobWVkaWFGaWxlc0p4b25UcmVlKSB7XG4gICAgdmFyIG1lZGlhRmlsZXMgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChtZWRpYUZpbGVzSnhvblRyZWUpKSB7XG4gICAgICBtZWRpYUZpbGVzSnhvblRyZWUgPSB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzSnhvblRyZWUpID8gbWVkaWFGaWxlc0p4b25UcmVlIDogW21lZGlhRmlsZXNKeG9uVHJlZV07XG5cbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChtZkRhdGEpIHtcbiAgICAgICAgbWVkaWFGaWxlcy5wdXNoKG5ldyBNZWRpYUZpbGUobWZEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhRmlsZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcbiAqL1xuTGluZWFyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yKGk9MCwgbGVuPXRoaXMubWVkaWFGaWxlcy5sZW5ndGg7IGk8bGVuOyBpKz0xKSB7XG4gICAgaWYodGhpcy5tZWRpYUZpbGVzW2ldLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZWFyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gICdkZWxpdmVyeScsXG4gICd0eXBlJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xuICAnY29kZWMnLFxuICAnaWQnLFxuICAnYml0cmF0ZScsXG4gICdtaW5CaXRyYXRlJyxcbiAgJ21heEJpdHJhdGUnLFxuICAnc2NhbGFibGUnLFxuICAnbWFpbnRhaW5Bc3BlY3RSYXRpbycsXG4gICdhcGlGcmFtZXdvcmsnXG5dO1xuXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xuXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxufVxuXG5NZWRpYUZpbGUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgaWYodmFzdFV0aWwuaXNWUEFJRCh0aGlzKSkge1xuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlby94LWZsdicpIHtcbiAgICByZXR1cm4gdmFzdFV0aWwuaXNGbGFzaFN1cHBvcnRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xuICAgIHJldHVybiBuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbik7XG4gIH1cblxuICB0aGlzLm5hbWUgPSB0cmFja2luZ0pUcmVlLmF0dHIoJ2V2ZW50Jyk7XG4gIHRoaXMudXJpID0geG1sLmtleVZhbHVlKHRyYWNraW5nSlRyZWUpO1xuXG4gIGlmKCdwcm9ncmVzcycgPT09IHRoaXMubmFtZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQodHJhY2tpbmdKVHJlZS5hdHRyKCdvZmZzZXQnKSwgZHVyYXRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2h0dHAnKS5odHRwO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XG4gIH1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIFdSQVBQRVJfTElNSVQ6IDVcbiAgfTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5zZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xufVxuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5nZXRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBnZXRWQVNUUmVzcG9uc2UoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICB2YXIgZXJyb3IgPSBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2FsbGJhY2spO1xuICBpZiAoZXJyb3IpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICB0aGlzLl9nZXRWQVNUQWQuYmluZCh0aGlzLCBhZFRhZ1VybCksXG4gICAgICBidWlsZFZBU1RSZXNwb25zZVxuICAgIF0sXG4gICAgY2FsbGJhY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4sIGNiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXNwb25zZSA9IHRoYXQuX2J1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKTtcbiAgICAgIGNiKG51bGwsIHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYihlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2IpIHtcbiAgICBpZiAoIWFkVGFnVXJsKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgYWQgdGFnIFVSTCcpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgY2FsbGJhY2sgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9nZXRWQVNUQWQgPSBmdW5jdGlvbiAoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB2YXN0VHJlZSkge1xuICAgIHZhciB3YXRlcmZhbGxBZHMgPSB2YXN0VHJlZSAmJiB1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZHMpID8gdmFzdFRyZWUuYWRzIDogbnVsbDtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHdhdGVyZmFsbEFkcyk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIHdhdGVyZmFsbEFkcyk7XG4gICAgfVxuXG4gICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksIFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiB3YXRlcmZhbGxIYW5kbGVyKGVycm9yLCBhZENoYWluKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIGlmICh3YXRlcmZhbGxBZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdFZhc3RYTUwgPSB0aGF0Ll9yZXF1ZXN0VkFTVFhtbC5iaW5kKHRoYXQsIGFkVGFnVXJsKTtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgcmVxdWVzdFZhc3RYTUwsXG4gICAgICBidWlsZFZhc3RXYXRlcmZhbGxcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFZhc3RXYXRlcmZhbGwoeG1sU3RyLCBjYWxsYmFjaykge1xuICAgIHZhciB2YXN0VHJlZTtcbiAgICB0cnkge1xuICAgICAgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgbG9nZ2VyLmRlYnVnIChcImJ1aWx0IEpYT05UcmVlIGZyb20gVkFTVCByZXNwb25zZTpcIiwgdmFzdFRyZWUpO1xuXG4gICAgICBpZih1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZCkpIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XG4gICAgICB9IGVsc2UgaWYodmFzdFRyZWUuYWQpe1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbdmFzdFRyZWUuYWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW107XG4gICAgICB9XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSkge1xuICAgIHZhciB2YXN0VmVyc2lvbiA9IHhtbC5hdHRyKHZhc3RUcmVlLCAndmVyc2lvbicpO1xuXG4gICAgaWYgKCF2YXN0VHJlZS5hZCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XG4gICAgfVxuXG4gICAgaWYgKHZhc3RWZXJzaW9uICYmICh2YXN0VmVyc2lvbiAhPSAzICYmIHZhc3RWZXJzaW9uICE9IDIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWQoYWRUYWdVcmwsIGFkQ2hhaW4sIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFkQ2hhaW4ubGVuZ3RoID49IHRoYXQuV1JBUFBFUl9MSU1JVCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5nZXRBZCwgcGxheWVycyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIHRoYXQuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcbiAgICB9XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhhZFRhZ1VybCkpIHtcbiAgICAgICAgICByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KG51bGwsIGFkVGFnVXJsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1aWxkQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkKSB7XG4gICAgICBpZiAoYWQpIHtcbiAgICAgICAgYWRDaGFpbi5wdXNoKGFkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC53cmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFkKGFkSnhvblRyZWUsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlQWQoYWQpLCBhZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUFkKGFkKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgdmFyIGVyck1zZ1ByZWZpeCA9ICdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZUFkLCAnO1xuXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggK1wiSW5MaW5lIGFuZCBXcmFwcGVyIGJvdGggZm91bmQgb24gdGhlIHNhbWUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWluTGluZSAmJiAhd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJub3Igd3JhcHBlciBub3IgaW5saW5lIGVsZW1lbnRzIGZvdW5kIG9uIHRoZSBBZFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChpbkxpbmUgJiYgIWluTGluZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcImNvdWxkIG5vdCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclwiLCA0MDMpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJtaXNzaW5nICdWQVNUQWRUYWdVUkknIGluIHdyYXBwZXJcIiwgMTAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdGhhdC5fcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgeG1sU3RyKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZS5hZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5yZXF1ZXN0VkFTVEFkLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX3JlcXVlc3RWQVNUWG1sID0gZnVuY3Rpb24gcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVGFnVXJsKSkge1xuICAgICAgYWRUYWdVcmwocmVxdWVzdEhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyAoXCJyZXF1ZXN0aW5nIGFkVGFnVXJsOiBcIiArIGFkVGFnVXJsKTtcbiAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUpO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdmFyIGVyck1zZyA9IHV0aWxpdGllcy5pc0RlZmluZWQoc3RhdHVzKSA/XG4gICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XG4gICAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgRXJyb3IgZ2V0dGluZyB0aGUgdGhlIFZBU1QgWE1MIHdpdGggaGUgcGFzc2VkIGFkVGFnWE1MIGZuXCI7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihlcnJNc2csIDMwMSksIG51bGwpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX2J1aWxkVkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFZBU1RSZXNwb25zZSgpO1xuICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gIHJldHVybiByZXNwb25zZTtcblxuICAvLyoqKiBMb2NhbCBmdW5jdGlvbiAqKioqXG4gIGZ1bmN0aW9uIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkcykge1xuICAgIGFkcy5mb3JFYWNoKGZ1bmN0aW9uIChhZCkge1xuICAgICAgcmVzcG9uc2UuYWRkQWQoYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHZhciBwcm9ncmVzc0V2ZW50cyA9IHJlc3BvbnNlLnRyYWNraW5nRXZlbnRzLnByb2dyZXNzO1xuXG4gICAgaWYgKCFyZXNwb25zZS5oYXNMaW5lYXIoKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIE1pc3NpbmcgZHVyYXRpb24gZmllbGQgaW4gVkFTVCByZXNwb25zZVwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xuICAgICAgcHJvZ3Jlc3NFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBhZENoYWluKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkoYWRDaGFpbikgfHwgYWRDaGFpbi5sZW5ndGggPT09IDApIHsgLy9UaGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XG4gIGFkQ2hhaW4uZm9yRWFjaChhZGRFcnJvclVybE1hY3Jvcyk7XG4gIHZhc3RVdGlsLnRyYWNrKGVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pOyAgLy85MDAgPD09IFVuZGVmaW5lZCBlcnJvclxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICAqKiovXG4gIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XG4gICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC53cmFwcGVyLmVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUQ2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBWQVNURXJyb3IobWVzc2FnZSwgY29kZSkge1xuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbiAgaWYgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblZBU1RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVkFTVCBFcnJvclwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC4gSXQgYXNzdW1lcyB0aGF0IHRoZSB2aWRlb2pzLWNvbnRyaWItYWRzIHBsdWdpblxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuL1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVEludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICB9XG5cbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG59XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdPbiBWQVNUSW50ZWdyYXRvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9zZWxlY3RBZFNvdXJjZS5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcGxheVNlbGVjdGVkQWQuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHtcbiAgICBfc3JjOiBudWxsLFxuICAgIHR5cGU6ICdWQVNUJyxcbiAgICBwYXVzZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wYXVzZSh0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVzdW1lQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnRyaWdnZXIoJ3Zhc3QucmVzdW1lQWQnKTtcbiAgICAgIHRoYXQucGxheWVyLnBsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIGlzUGF1c2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhhdC5wbGF5ZXIucGF1c2VkKHRydWUpO1xuICAgIH0sXG5cbiAgICBnZXRTcmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcmM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NlbGVjdEFkU291cmNlID0gZnVuY3Rpb24gc2VsZWN0QWRTb3VyY2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBzb3VyY2U7XG5cbiAgdmFyIHBsYXllcldpZHRoID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnBsYXllci5lbCgpKS53aWR0aDtcbiAgcmVzcG9uc2UubWVkaWFGaWxlcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVUbyhhLCBiKSB7XG4gICAgdmFyIGRlbHRhQSA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYS53aWR0aCk7XG4gICAgdmFyIGRlbHRhQiA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYi53aWR0aCk7XG4gICAgcmV0dXJuIGRlbHRhQSAtIGRlbHRhQjtcbiAgfSk7XG5cbiAgc291cmNlID0gdGhpcy5wbGF5ZXIuc2VsZWN0U291cmNlKHJlc3BvbnNlLm1lZGlhRmlsZXMpLnNvdXJjZTtcblxuICBpZiAoc291cmNlKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwic2VsZWN0ZWQgc291cmNlOiBcIiwgc291cmNlKTtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xuICB9XG5cbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2tlci50cmFja0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcbiAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxuICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXG4gICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cbiAgICBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheScsICd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmKGV2dC50eXBlID09PSAncGxheScpe1xuICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgIH1cbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcbiAgfVxuICBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcblxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG4gICAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFNraXAnKTtcbiAgICAgIH1cblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcikge1xuICAgIHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgIGlmICh0aW1lTGVmdCA+IDApIHtcbiAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gKC9eKHJ1fGJlfHVrKS9pLnRlc3QobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpID8gXCImIzEwNTU7JiMxMDg4OyYjMTA4NjsmIzEwODc7JiMxMDkxOyYjMTA4OTsmIzEwOTA7JiMxMDgwOyYjMTA5MDsmIzExMDA7JiMzMjsmIzEwOTU7JiMxMDc3OyYjMTA4ODsmIzEwNzc7JiMxMDc5OyBcIiA6IFwiU2tpcCBpbiBcIikgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IC9eKHJ1fGJlfHVrKS9pLnRlc3QobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpID8gXCImIzEwNTU7JiMxMDg4OyYjMTA4NjsmIzEwODc7JiMxMDkxOyYjMTA4OTsmIzEwOTA7JiMxMDgwOyYjMTA5MDsmIzExMDA7XCIgOiBcIlNraXAgYWRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcblxuICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XG4gICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xuXG4gICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgfVxuXG4gICAgYmxvY2tlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxuICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5BZENsaWNrVGhydScpO1xuICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XG4gICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXG4gICAgfTtcblxuICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiAnIyc7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcbiAgICBkb20ucmVtb3ZlKGJsb2NrZXIpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIHBsYXllci5wcmVsb2FkKFwiYXV0b1wiKTsgLy93aXRob3V0IHByZWxvYWQ9YXV0byB0aGUgZHVyYXRpb25jaGFuZ2UgZXZlbnQgaXMgbmV2ZXIgZmlyZWRcbiAgcGxheWVyLnNyYyhzb3VyY2UpO1xuXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiB3YWl0aW5nIGZvciBkdXJhdGlvbmNoYW5nZSB0byBwbGF5IHRoZSBhZC4uLlwiKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydkdXJhdGlvbmNoYW5nZScsICdlcnJvcicsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZD4gZ290IGR1cmF0aW9uY2hhbmdlOyBjYWxsaW5nIHBsYXlBZCgpXCIpO1xuICAgICAgcGxheUFkKCk7XG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVEludGVncmF0b3IsIFBsYXllciBpcyB1bmFibGUgdG8gcGxheSB0aGUgQWRcIiwgNDAwKSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXG4gIH0pO1xuXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXG4gIGZ1bmN0aW9uIHBsYXlBZCgpIHtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkc0NhbmNlbCcpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gZ290IHBsYXlpbmcgZXZlbnQ7IHRyaWdnZXJpbmcgdmFzdC5hZFN0YXJ0Li4uXCIpO1xuXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XG5cbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcblxuICAgICAgZnVuY3Rpb24gcHJvY2VlZChldnQpIHtcblxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xuICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgICAgLy8gYXZvaWRzIGlzc3VlcyB3aGVyZSBJT1MgY29udHJvbHMgY291bGQgc2tpcCB0aGUgQWRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xuXG4gICAgICAgIC8vTk9URTogaWYgdGhlIGFkcyBnZXQgY2FuY2VsIHdlIGRvIG5vdGhpbmcgYXBhcnQgcmVtb3ZpbmcgdGhlIGxpc3RuZXJzXG4gICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnIHx8IGV2dC50eXBlID09PSAndmFzdC5hZFNraXAnKXtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gY2FsbGluZyBwbGF5ZXIucGxheSgpLi4uXCIpO1xuXG4gICAgdHlwZW9mIHBsYXllci5yZWFkeSA9PT0gJ2Z1bmN0aW9uJyA/IHBsYXllci5yZWFkeShwbGF5ZXIucGxheSkgOiBwbGF5ZXIucGxheSgpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEludGVncmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxud2luZG93LkluTGluZV9fQSA9IEluTGluZTtcbmZ1bmN0aW9uIFZBU1RSZXNwb25zZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RSZXNwb25zZSgpO1xuICB9XG5cbiAgdGhpcy5fbGluZWFyQWRkZWQgPSBmYWxzZTtcbiAgdGhpcy5hZHMgPSBbXTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xuICB0aGlzLmltcHJlc3Npb25zID0gW107XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHt9O1xuICB0aGlzLm1lZGlhRmlsZXMgPSBbXTtcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRUaXRsZSA9ICcnO1xuICB0aGlzLmR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMudGltZXMgPSB1bmRlZmluZWQ7XG59XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcbiAgdmFyIGluTGluZSwgd3JhcHBlcjtcbiAgaWYgKGFkIGluc3RhbmNlb2YgQWQpIHtcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgd3JhcHBlciA9IGFkLndyYXBwZXI7XG5cbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcblxuICAgIGlmIChpbkxpbmUpIHtcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB0aGlzLl9hZGRXcmFwcGVyKHdyYXBwZXIpO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICB2YXIgZXJyb3JVUkwgPSBlcnJvciBpbnN0YW5jZW9mIHhtbC5KWE9OVHJlZSA/IHhtbC5rZXlWYWx1ZShlcnJvcikgOiBlcnJvcjtcbiAgaWYgKGVycm9yVVJMKSB7XG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiAoaW1wcmVzc2lvbnMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5pbXByZXNzaW9ucywgaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gKGNsaWNrVGhyb3VnaCkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xuICAgIHRoaXMuY2xpY2tUaHJvdWdoID0gY2xpY2tUaHJvdWdoO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1RyYWNraW5ncyA9IGZ1bmN0aW9uIChjbGlja1RyYWNraW5ncykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGN1c3RvbUNsaWNrcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmN1c3RvbUNsaWNrcywgY3VzdG9tQ2xpY2tzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRyYWNraW5nRXZlbnRzID0gZnVuY3Rpb24gKHRyYWNraW5nRXZlbnRzKSB7XG4gIHZhciBldmVudHNNYXAgPSB0aGlzLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0pIHtcbiAgICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdLnB1c2godHJhY2tpbmdFdmVudCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh0aXRsZSkpIHtcbiAgICB0aGlzLmFkVGl0bGUgPSB0aXRsZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihkdXJhdGlvbikpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XG4gIGlmICh2aWRlb0NsaWNrcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoKHZpZGVvQ2xpY2tzLmNsaWNrVGhyb3VnaCk7XG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xuICAgIHRoaXMuX2FkZEN1c3RvbUNsaWNrcyh2aWRlb0NsaWNrcy5jdXN0b21DbGlja3MpO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRNZWRpYUZpbGVzID0gZnVuY3Rpb24gKG1lZGlhRmlsZXMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgaWYgKG9mZnNldCkge1xuICAgIHRoaXMuc2tpcG9mZnNldCA9IG9mZnNldDtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVGltZXMgPSBmdW5jdGlvbiAodGltZXMpIHtcbiAgaWYgKHRpbWVzKSB7XG4gICAgdGhpcy50aW1lcyA9IHRpbWVzO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRBZFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoYWRQYXJhbWV0ZXJzKSB7XG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IGFkUGFyYW1ldGVycztcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTGluZWFyID0gZnVuY3Rpb24gKGxpbmVhcikge1xuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XG4gICAgdGhpcy5fYWRkRHVyYXRpb24obGluZWFyLmR1cmF0aW9uKTtcbiAgICB0aGlzLl9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgdGhpcy5fYWRkTWVkaWFGaWxlcyhsaW5lYXIubWVkaWFGaWxlcyk7XG4gICAgdGhpcy5fYWRkU2tpcG9mZnNldChsaW5lYXIuc2tpcG9mZnNldCk7XG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xuICAgIHRoaXMuX2xpbmVhckFkZGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW5MaW5lID0gZnVuY3Rpb24gKGluTGluZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKGluTGluZSBpbnN0YW5jZW9mIEluTGluZSkge1xuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKGluTGluZS5lcnJvcik7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMoaW5MaW5lLmltcHJlc3Npb25zKTtcbiAgICB0aGlzLl9hZGRUaW1lcyhpbkxpbmUudGltZXMpO1xuXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgaWYgKGNyZWF0aXZlLmxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRMaW5lYXIoY3JlYXRpdmUubGluZWFyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkV3JhcHBlciA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAod3JhcHBlciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKHdyYXBwZXIuZXJyb3IpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKHdyYXBwZXIuaW1wcmVzc2lvbnMpO1xuXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIHZhciBsaW5lYXIgPSBjcmVhdGl2ZS5saW5lYXI7XG4gICAgICBpZiAobGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgICAgIHRoYXQuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkOy8vV2UgZW5zdXJlIHRoYXQgbm8gY2xpY2tUaHJvdWdoIGhhcyBiZWVuIGFkZGVkXG4gICAgICAgIHRoYXQuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuaGFzTGluZWFyID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xufTtcblxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGFycmF5LnB1c2goaXRlbSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFRyYWNrZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHRoaXMuc2FuaXR5Q2hlY2soYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcblxufVxuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgdGhpcy5yZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xuICB0aGlzLnByb2dyZXNzID0gMDtcbiAgdGhpcy5xdWFydGlsZXMgPSB7XG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgbWlkcG9pbnQ6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg1MCAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIHRoaXJkUXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg3NSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9XG4gIH07XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGFzc2V0VVJJKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhhc3NldFVSSSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCB0aGUgVVJJIG9mIHRoZSBhZCBhc3NldCBiZWluZyBwbGF5ZWQnKTtcbiAgfVxuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1VSTHMgPSBmdW5jdGlvbiB0cmFja1VSTHModXJscywgdmFyaWFibGVzKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA+IDApIHtcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcbiAgICAgIEFTU0VUVVJJOiB0aGlzLmFzc2V0VVJJLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XG5cbiAgICB2YXN0VXRpbC50cmFjayh1cmxzLCB2YXJpYWJsZXMpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcbiAgdGhpcy50cmFja1VSTHMoZ2V0RXZlbnRVcmlzKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSkpO1xuICBpZiAodHJhY2tPbmNlKSB7XG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGdldEV2ZW50VXJpcyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB1cmlzO1xuXG4gICAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgICB1cmlzID0gW107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQudXJpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cmlzLnB1c2goZXZlbnQudXJpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJpcztcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKG5ld1Byb2dyZXNzSW5Ncykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBldmVudHMgPSBbXTtcbiAgdmFyIE9OQ0UgPSB0cnVlO1xuICB2YXIgQUxXQVlTID0gZmFsc2U7XG4gIHZhciB0cmFja2luZ0V2ZW50cyA9IHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihuZXdQcm9ncmVzc0luTXMpKSB7XG4gICAgYWRkVHJhY2tFdmVudCgnc3RhcnQnLCBPTkNFLCBuZXdQcm9ncmVzc0luTXMgPiAwKTtcbiAgICBhZGRUcmFja0V2ZW50KCdyZXdpbmQnLCBBTFdBWVMsIGhhc1Jld291bmQodGhpcy5wcm9ncmVzcywgbmV3UHJvZ3Jlc3NJbk1zKSk7XG4gICAgYWRkUXVhcnRpbGVFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja1Byb2dyZXNzRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XG4gICAgdHJhY2tFdmVudHMoKTtcbiAgICB0aGlzLnByb2dyZXNzID0gbmV3UHJvZ3Jlc3NJbk1zO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGhhc1Jld291bmQoY3VycmVudFByb2dyZXNzLCBuZXdQcm9ncmVzcykge1xuICAgIHZhciBSRVdJTkRfVEhSRVNIT0xEID0gMzAwMDsgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGVyZSB3YXMgYSByZXdpbmQgYW4gdGhhdCBpdCB3YXMgb24gcHVycG9zZS5cbiAgICByZXR1cm4gY3VycmVudFByb2dyZXNzID4gbmV3UHJvZ3Jlc3NJbk1zICYmIE1hdGguYWJzKG5ld1Byb2dyZXNzIC0gY3VycmVudFByb2dyZXNzKSA+IFJFV0lORF9USFJFU0hPTEQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUcmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlLCBjYW5CZUFkZGVkKSB7XG4gICAgaWYgKHRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gJiYgY2FuQmVBZGRlZCkge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgIHRyYWNrT25jZTogISF0cmFja09uY2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFF1YXJ0aWxlRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlcyA9IHRoYXQucXVhcnRpbGVzO1xuICAgIHZhciBmaXJzdFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMuZmlyc3RRdWFydGlsZTtcbiAgICB2YXIgbWlkcG9pbnQgPSB0aGF0LnF1YXJ0aWxlcy5taWRwb2ludDtcbiAgICB2YXIgdGhpcmRRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGU7XG5cbiAgICBpZiAoIWZpcnN0UXVhcnRpbGUudHJhY2tlZCkge1xuICAgICAgdHJhY2tRdWFydGlsZSgnZmlyc3RRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCFtaWRwb2ludC50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdtaWRwb2ludCcsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgICAgdHJhY2tRdWFydGlsZSgndGhpcmRRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiB0cmFja1F1YXJ0aWxlKHF1YXJ0aWxlTmFtZSwgcHJvZ3Jlc3Mpe1xuICAgICAgdmFyIHF1YXJ0aWxlID0gcXVhcnRpbGVzW3F1YXJ0aWxlTmFtZV07XG4gICAgICBpZihjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSl7XG4gICAgICAgIHF1YXJ0aWxlLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgICBhZGRUcmFja0V2ZW50KHF1YXJ0aWxlTmFtZSwgT05DRSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykge1xuICAgIHZhciBxdWFydGlsZVRpbWUgPSBxdWFydGlsZS50aW1lO1xuICAgIC8vV2Ugb25seSBmaXJlIHRoZSBxdWFydGlsZSBldmVudCBpZiB0aGUgcHJvZ3Jlc3MgaXMgYmlnZ2VyIHRoYW4gdGhlIHF1YXJ0aWxlIHRpbWUgYnkgNSBzZWNvbmRzIGF0IG1vc3QuXG4gICAgcmV0dXJuIHByb2dyZXNzID49IHF1YXJ0aWxlVGltZSAmJiBwcm9ncmVzcyA8PSAocXVhcnRpbGVUaW1lICsgNTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cy5wcm9ncmVzcykpIHtcbiAgICAgIHJldHVybjsgLy9Ob3RoaW5nIHRvIHRyYWNrXG4gICAgfVxuXG4gICAgdmFyIHBlbmRpbmdQcm9ncmVzc0V2dHMgPSBbXTtcblxuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5vZmZzZXQgPD0gcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhhdC50cmFja1VSTHMoW2V2dC51cmldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdQcm9ncmVzc0V2dHMucHVzaChldnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzID0gcGVuZGluZ1Byb2dyZXNzRXZ0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhhdC50cmFja0V2ZW50KGV2ZW50Lm5hbWUsIGV2ZW50LnRyYWNrT25jZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbltcbiAgJ3Jld2luZCcsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgJ3BhdXNlJyxcbiAgJ3Jlc3VtZScsXG4gICdtdXRlJyxcbiAgJ3VubXV0ZScsXG4gICdhY2NlcHRJbnZpdGF0aW9uJyxcbiAgJ2FjY2VwdEludml0YXRpb25MaW5lYXInLFxuICAnY29sbGFwc2UnLFxuICAnZXhwYW5kJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgfTtcbiAgfSk7XG5cbltcbiAgJ3N0YXJ0JyxcbiAgJ3NraXAnLFxuICAnY2xvc2UnLFxuICAnY2xvc2VMaW5lYXInXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnZmlyc3RRdWFydGlsZScsXG4gICdtaWRwb2ludCcsXG4gICd0aGlyZFF1YXJ0aWxlJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChxdWFydGlsZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocXVhcnRpbGUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucXVhcnRpbGVzW3F1YXJ0aWxlXS50cmFja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhY2tFdmVudChxdWFydGlsZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSk7XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgIHRoaXMudHJhY2tFdmVudCgnY29tcGxldGUnLCB0cnVlKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXJyb3JXaXRoQ29kZSA9IGZ1bmN0aW9uIHRyYWNrRXJyb3JXaXRoQ29kZShlcnJvcmNvZGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihlcnJvcmNvZGUpKSB7XG4gICAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3Jjb2RlfSk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0ltcHJlc3Npb25zID0gZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5pbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDcmVhdGl2ZVZpZXcgPSBmdW5jdGlvbiB0cmFja0NyZWF0aXZlVmlldygpIHtcbiAgdGhpcy50cmFja0V2ZW50KCdjcmVhdGl2ZVZpZXcnKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NsaWNrID0gZnVuY3Rpb24gdHJhY2tDbGljaygpIHtcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5jbGlja1RyYWNraW5ncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RUcmFja2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSkge1xuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcbiAgfVxuXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUcmFja2luZyk7XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY3VzdG9tQ2xpY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VDbGlja1RyYWNraW5ncyh0cmFja2luZ0RhdGEpIHtcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgICBpZiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICB0cmFja2luZ0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0RhdGEpID8gdHJhY2tpbmdEYXRhIDogW3RyYWNraW5nRGF0YV07XG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcbiAgICAgICAgY2xpY2tUcmFja2luZ3MucHVzaCh4bWwua2V5VmFsdWUoY2xpY2tUcmFja2luZ0RhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpY2tUcmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0NsaWNrczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gV3JhcHBlcih3cmFwcGVySlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyh3cmFwcGVySlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xuXG4gIC8vT3B0aW9uYWwgZWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuZXJyb3IpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSB3cmFwcGVySlRyZWUuZXh0ZW5zaW9ucztcblxuICAvL09wdGlvbmFsIGF0dHJzXG4gIHRoaXMuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzID0gdXRpbGl0aWVzLmlzRGVmaW5lZCh4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKSk/IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpOiB0cnVlO1xuICB0aGlzLmFsbG93TXVsdGlwbGVBZHMgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdhbGxvd011bHRpcGxlQWRzJyk7XG4gIHRoaXMuZmFsbGJhY2tPbk5vQWQgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmYWxsYmFja09uTm9BZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xudmFyIHRpbWVSZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKS87XG5cbnZhciBwYXJzZXJzID0ge1xuXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG5cbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZXJzLmR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfSxcblxuICB0aW1lIDogZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHIpIHtcbiAgICB2YXIgbWF0Y2gsIHRpbWVJbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyh0aW1lU3RyKSkge1xuICAgICAgbWF0Y2ggPSB0aW1lU3RyLm1hdGNoKHRpbWVSZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGltZUluTXMgPSBwYXJzZU1pblRvTXMobWF0Y2hbMV0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4odGltZUluTXMpID8gbnVsbCA6IHRpbWVJbk1zO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBWUEFJREhUTUw1VGVjaCA9IHJlcXVpcmUoJy4uL3ZwYWlkL1ZQQUlESFRNTDVUZWNoJyk7XG52YXIgVlBBSURGbGFzaFRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREZsYXNoVGVjaCcpO1xudmFyIFZQQUlERkxBU0hDbGllbnQgPSByZXF1aXJlKCdWUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQnKTtcblxudmFyIHZhc3RVdGlsID0ge1xuXG4gIHRyYWNrOiBmdW5jdGlvbiB0cmFjayhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBzb3VyY2VzID0gdmFzdFV0aWwucGFyc2VVUkxNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpO1xuICAgIHZhciB0cmFja0ltZ3MgPSBbXTtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNyYykge1xuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgIHRyYWNrSW1ncy5wdXNoKGltZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYWNrSW1ncztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvczogZnVuY3Rpb24gcGFyc2VNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgcGFyc2VkVVJMcyA9IFtdO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgVVJMTWFjcm9zLmZvckVhY2goZnVuY3Rpb24gKFVSTE1hY3JvKSB7XG4gICAgICBwYXJzZWRVUkxzLnB1c2godmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZFVSTHM7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpO1xuICB9LFxuXG4gIF9wYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh2YXJpYWJsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBVUkxNYWNybyA9IFVSTE1hY3JvLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrZXkgKyBcIlxcXFxcXF1cIiwgJ2dtJyksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBVUkxNYWNybztcbiAgfSxcblxuICBwYXJzZUR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG4gICAgdmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIHBhcnNlSW1wcmVzc2lvbnM6IGZ1bmN0aW9uIHBhcnNlSW1wcmVzc2lvbnMoaW1wcmVzc2lvbnMpIHtcbiAgICBpZiAoaW1wcmVzc2lvbnMpIHtcbiAgICAgIGltcHJlc3Npb25zID0gdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpID8gaW1wcmVzc2lvbnMgOiBbaW1wcmVzc2lvbnNdO1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheShpbXByZXNzaW9ucywgZnVuY3Rpb24gKGltcHJlc3Npb24pIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGltcHJlc3Npb24ua2V5VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGltcHJlc3Npb24ua2V5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0sXG5cblxuICAvL1dlIGFzc3VtZSB0aGF0IHRoZSBwcm9ncmVzcyBpcyBnb2luZyB0byBhcnJpdmUgaW4gbWlsbGlzZWNvbmRzXG4gIGZvcm1hdFByb2dyZXNzOiBmdW5jdGlvbiBmb3JtYXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIHZhciBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzO1xuICAgIGhvdXJzID0gcHJvZ3Jlc3MgLyAoNjAgKiA2MCAqIDEwMDApO1xuICAgIGhvdXJzID0gTWF0aC5mbG9vcihob3Vycyk7XG4gICAgbWludXRlcyA9IChwcm9ncmVzcyAvICg2MCAqIDEwMDApKSAlIDYwO1xuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xuICAgIHNlY29uZHMgPSAocHJvZ3Jlc3MgLyAxMDAwKSAlIDYwO1xuICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMpO1xuICAgIG1pbGxpc2Vjb25kcyA9IHByb2dyZXNzICUgMTAwMDtcbiAgICByZXR1cm4gdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoaG91cnMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWludXRlcywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhzZWNvbmRzLCAyKSArICcuJyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbGxpc2Vjb25kcywgMyk7XG4gIH0sXG5cbiAgcGFyc2VPZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZiAoaXNQZXJjZW50YWdlKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdmFzdFV0aWwucGFyc2VEdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KSB7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfSxcblxuXG4gIC8vTGlzdCBvZiBzdXBwb3J0ZWQgVlBBSUQgdGVjaG5vbG9naWVzXG4gIFZQQUlEX3RlY2hzOiBbXG4gICAgVlBBSURGbGFzaFRlY2gsXG4gICAgVlBBSURIVE1MNVRlY2hcbiAgXSxcblxuICBpc1ZQQUlEOiBmdW5jdGlvbiBpc1ZQQUlETWVkaWFGaWxlKG1lZGlhRmlsZSkge1xuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xuICB9LFxuXG4gIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2g6IGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWltZVR5cGUpIHtcbiAgICB2YXIgaSwgbGVuLCBWUEFJRFRlY2g7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLlZQQUlEX3RlY2hzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBWUEFJRFRlY2ggPSB0aGlzLlZQQUlEX3RlY2hzW2ldO1xuICAgICAgaWYgKFZQQUlEVGVjaC5zdXBwb3J0cyhtaW1lVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgaXNGbGFzaFN1cHBvcnRlZDogZnVuY3Rpb24gaXNGbGFzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gVlBBSURGTEFTSENsaWVudC5pc1N1cHBvcnRlZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBOZWNlc3Nhcnkgc3RlcCBmb3IgVlBBSURGTEFTaENsaWVudCB0byBrbm93IGlmIGZsYXNoIGlzIHN1cHBvcnRlZCBhbmQgbm90IGJsb2NrZWQuXG4gICAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGlzIGFuIGFzeW5jIHRlc3QgYW5kIG5lZWRzIHRvIGJlIHJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gdnBhaWRGbGFzaExvYWRlclBhdGggdGhlIHBhdGggdG8gdGhlIHZwYWlkRmxhc2hMb2FkZXIgc3dmIG9iai5cbiAgICovXG4gIHJ1bkZsYXNoU3VwcG9ydENoZWNrOiBmdW5jdGlvbiBydW5GbGFzaFN1cHBvcnRDaGVjayh2cGFpZEZsYXNoTG9hZGVyUGF0aCkge1xuICAgIFZQQUlERkxBU0hDbGllbnQucnVuRmxhc2hUZXN0KHtkYXRhOiB2cGFpZEZsYXNoTG9hZGVyUGF0aH0pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFzdFV0aWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlEQWRVbml0V3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cyk7XG4gIH1cbiAgc2FuaXR5Q2hlY2sodnBhaWRBZFVuaXQsIG9wdHMpO1xuXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdHMpO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHZwYWlkQWRVbml0O1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRVbml0LCBvcHRzKSB7XG4gICAgaWYgKCFhZFVuaXQgfHwgIVZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlKGFkVW5pdCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlEQWRVbml0V3JhcHBlciwgdGhlIHBhc3NlZCBWUEFJRCBhZFVuaXQgZG9lcyBub3QgZnVsbHkgaW1wbGVtZW50IHRoZSBWUEFJRCBpbnRlcmZhY2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc09iamVjdChvcHRzKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgb3B0aW9ucyBoYXNoICBidXQgZ290ICdcIiArIG9wdHMgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCEoXCJyZXNwb25zZVRpbWVvdXRcIiBpbiBvcHRzKSB8fCAhdXRpbGl0aWVzLmlzTnVtYmVyKG9wdHMucmVzcG9uc2VUaW1lb3V0KSApe1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgcmVzcG9uc2VUaW1lb3V0IGluIG9wdGlvbnNcIik7XG4gICAgfVxuICB9XG59XG5cblZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlID0gZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZShWUEFJREFkVW5pdCkge1xuICAvL05PVEU6IHNraXBBZCBpcyBub3QgcGFydCBvZiB0aGUgbWV0aG9kIGxpc3QgYmVjYXVzZSBpdCBvbmx5IGFwcGVhcnMgaW4gVlBBSUQgMi4wIGFuZCB3ZSBzdXBwb3J0IFZQQUlEIDEuMFxuICB2YXIgVlBBSURJbnRlcmZhY2VNZXRob2RzID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJywgJ2luaXRBZCcsICdzdGFydEFkJywgJ3N0b3BBZCcsICdyZXNpemVBZCcsICdwYXVzZUFkJywgJ2V4cGFuZEFkJywgJ2NvbGxhcHNlQWQnXG4gIF07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IFZQQUlESW50ZXJmYWNlTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghVlBBSURBZFVuaXQgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKFZQQUlEQWRVbml0W1ZQQUlESW50ZXJmYWNlTWV0aG9kc1tpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gY2FuU3Vic2NyaWJlVG9FdmVudHMoVlBBSURBZFVuaXQpICYmIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhWUEFJREFkVW5pdCk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNhblN1YnNjcmliZVRvRXZlbnRzKGFkVW5pdCkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnVuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9mZik7XG5cbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5hZFVuaXRBc3luY0NhbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIG1ldGhvZCA9IGFyZ3Muc2hpZnQoKTtcbiAgdmFyIGNiID0gYXJncy5wb3AoKTtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCB0aGlzLl9hZFVuaXQpO1xuICBhcmdzLnB1c2god3JhcENhbGxiYWNrKCkpO1xuXG4gIHRoaXMuX2FkVW5pdFttZXRob2RdLmFwcGx5KHRoaXMuX2FkVW5pdCwgYXJncyk7XG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIG9uIGNhbGwgJ1wiICsgbWV0aG9kICsgXCInXCIpKTtcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIGFkVW5pdCkge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKG1ldGhvZCkgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdFttZXRob2RdKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIGludmFsaWQgbWV0aG9kIG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH1cbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub247XG4gIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC51bnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub2ZmO1xuICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUud2FpdEZvckV2ZW50ID0gZnVuY3Rpb24gKGV2dE5hbWUsIGNiLCBjb250ZXh0KSB7XG4gIHZhciB0aW1lb3V0SWQ7XG4gIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKTtcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcblxuICB0aGlzLm9uKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xuXG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICdcIiArIGV2dE5hbWUgKyBcIidcIikpO1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhldnROYW1lLCBjYikge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGV2dE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBldnQgbmFtZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgY2FsbGJhY2tcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzcG9uc2VMaXN0ZW5lcigpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIGNiLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9XG59O1xuXG4vLyBWUEFJRCBNRVRIT0RTXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmhhbmRzaGFrZVZlcnNpb24gPSBmdW5jdGlvbiAodmVyc2lvbiwgY2IpIHtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ2hhbmRzaGFrZVZlcnNpb24nLCB2ZXJzaW9uLCBjYik7XG59O1xuXG4vKiBqc2hpbnQgbWF4cGFyYW1zOjYgKi9cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSwgY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkTG9hZGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYikge1xuICAvLyBOT1RFOiBBZFNpemVDaGFuZ2UgZXZlbnQgaXMgb25seSBzdXBwb3J0ZWQgb24gVlBBSUQgMi4wIHNvIGZvciB0aGUgbW9tZW50IHdlIGFyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG4gIC8vIGFuZCB3aWxsIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmluZSBhZnRlciB0aGUgYXN5bmMgY2FsbFxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgncmVzaXplQWQnLCB3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5zdGFydEFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdG9wcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGF1c2VkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQbGF5aW5nJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucmVzdW1lQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5leHBhbmRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuY29sbGFwc2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU2tpcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnNraXBBZCgpO1xufTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBnZXR0ZXJzXG5bXG4gICdhZExpbmVhcicsXG4gICdhZFdpZHRoJyxcbiAgJ2FkSGVpZ2h0JyxcbiAgJ2FkRXhwYW5kZWQnLFxuICAnYWRTa2lwcGFibGVTdGF0ZScsXG4gICdhZFJlbWFpbmluZ1RpbWUnLFxuICAnYWREdXJhdGlvbicsXG4gICdhZFZvbHVtZScsXG4gICdhZENvbXBhbmlvbnMnLFxuICAnYWRJY29ucydcbl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgdmFyIGdldHRlck5hbWUgPSAnZ2V0JyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHByb3BlcnR5KTtcblxuICBWUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlW2dldHRlck5hbWVdID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgdGhpcy5hZFVuaXRBc3luY0NhbGwoZ2V0dGVyTmFtZSwgY2IpO1xuICB9O1xufSk7XG5cbi8vVlBBSUQgcHJvcGVydHkgc2V0dGVyc1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2Ipe1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnc2V0QWRWb2x1bWUnLHZvbHVtZSwgY2IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdFdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciBWUEFJREZMQVNIQ2xpZW50ID0gcmVxdWlyZSgnVlBBSURGTEFTSENsaWVudC9qcy9WUEFJREZMQVNIQ2xpZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREZsYXNoVGVjaCkpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlERmxhc2hUZWNoKG1lZGlhRmlsZSk7XG4gIH1cbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWZsYXNoJztcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBudWxsO1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaCwgaW52YWxpZCBNZWRpYUZpbGUnKTtcbiAgICB9XG4gIH1cbn1cblxuVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudCA9IFZQQUlERkxBU0hDbGllbnQ7XG5cblZQQUlERmxhc2hUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIChNaW1lVHlwZXMuZmxhc2guaW5kZXhPZih0eXBlKSA+IC0xKSAmJiBWUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCk7XG59O1xuXG5WUEFJREZsYXNoVGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRGbGFzaENyZWF0aXZlKGNvbnRhaW5lckVsLCBvYmplY3RFbCwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgZmxhc2hDbGllbnRPcHRzID0gdGhpcy5zZXR0aW5ncyAmJiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRoID8ge2RhdGE6IHRoaXMuc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGh9IDogdW5kZWZpbmVkO1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcblxuICBsb2dnZXIuZGVidWcgKFwiPFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQ+IGxvYWRpbmcgVlBBSURGTEFTSENsaWVudCB3aXRoIG9wdHM6XCIsIGZsYXNoQ2xpZW50T3B0cyk7XG5cbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbmV3IFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQoY29udGFpbmVyRWwsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG5cbiAgICBsb2dnZXIuaW5mbyAoXCI8VlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdD4gY2FsbGluZyBWUEFJREZMQVNIQ2xpZW50LmxvYWRBZFVuaXQoKTsgdGhhdC5tZWRpYUZpbGU6XCIsIHRoYXQubWVkaWFGaWxlKTtcbiAgICB0aGF0LnZwYWlkRmxhc2hDbGllbnQubG9hZEFkVW5pdCh0aGF0Lm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcbiAgfSwgZmxhc2hDbGllbnRPcHRzKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgY2IpIHtcblxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaC5sb2FkQWRVbml0LCBpbnZhbGlkIGRvbSBjb250YWluZXIgZWxlbWVudCcpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaC5sb2FkQWRVbml0LCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJyk7XG4gICAgfVxuICB9XG59O1xuXG5WUEFJREZsYXNoVGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy52cGFpZEZsYXNoQ2xpZW50KSB7XG4gICAgdHJ5e1xuICAgICAgdGhpcy52cGFpZEZsYXNoQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgbG9nZ2VyLmVycm9yICgnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XG4gICAgfVxuICAgIHRoaXMudnBhaWRGbGFzaENsaWVudCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xuICAgIGRvbS5yZW1vdmUodGhpcy5jb250YWluZXJFbCk7XG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURGbGFzaFRlY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciBWUEFJREhUTUw1Q2xpZW50ID0gcmVxdWlyZSgnVlBBSURIVE1MNUNsaWVudC9qcy9WUEFJREhUTUw1Q2xpZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpIHtcblxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBWUEFJREhUTUw1VGVjaCkpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSk7XG4gIH1cblxuICBzYW5pdHlDaGVjayhtZWRpYUZpbGUpO1xuXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1odG1sNSc7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB0aGlzLnZpZGVvRWwgPSBudWxsO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XG5cbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWVkaWFGaWxlKSB7XG4gICAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XG4gICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFKTtcbiAgICAgIH1cbiAgfVxufVxuXG5WUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50ID0gVlBBSURIVE1MNUNsaWVudDtcblxuVlBBSURIVE1MNVRlY2guc3VwcG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gIXV0aWxpdGllcy5pc09sZElFKCkgJiYgTWltZVR5cGVzLmh0bWw1LmluZGV4T2YodHlwZSkgPiAtMTtcbn07XG5cblZQQUlESFRNTDVUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spIHtcbiAgc2FuaXR5Q2hlY2soY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKTtcblxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XG4gIHRoaXMudmlkZW9FbCA9IHZpZGVvRWw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbmV3IFZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQoY29udGFpbmVyRWwsIHZpZGVvRWwsIHt9KTtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQubG9hZEFkVW5pdCh0aGlzLm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhjb250YWluZXIsIHZpZGVvLCBjYikge1xuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XG4gICAgfVxuXG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KHZpZGVvKSB8fCB2aWRlby50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd2aWRlbycpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLKTtcbiAgICB9XG4gIH1cbn07XG5cblZQQUlESFRNTDVUZWNoLnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XG4gIGlmICh0aGlzLnZwYWlkSFRNTENsaWVudCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnZwYWlkSFRNTENsaWVudC5kZXN0cm95KCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IgKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcbiAgICB9XG5cbiAgICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xuICAgIGRvbS5yZW1vdmUodGhpcy5jb250YWluZXJFbCk7XG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIH1cbn07XG5cbnZhciBQUkVGSVggPSAnb24gVlBBSURIVE1MNVRlY2gnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFID0gUFJFRklYICsgJywgaW52YWxpZCBNZWRpYUZpbGUnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBjb250YWluZXIgSHRtbEVsZW1lbnQnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fVklERU9fRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIEhUTUxWaWRlb0VsZW1lbnQnO1xuVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyA9IFBSRUZJWCArICcsIG1pc3NpbmcgdmFsaWQgY2FsbGJhY2snO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVUZWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWltZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbWltZXR5cGVzJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RSZXNwb25zZScpO1xudmFyIFZBU1RUcmFja2VyID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUVHJhY2tlcicpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vdmFzdC92YXN0VXRpbCcpO1xuXG52YXIgVlBBSURBZFVuaXRXcmFwcGVyID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdFdyYXBwZXInKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVlBBSURJbnRlZ3JhdG9yKHBsYXllciwgc2V0dGluZ3MpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIpO1xuICB9XG5cbiAgdGhpcy5WSUVXX01PREUgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBGVUxMU0NSRUVOOiBcImZ1bGxzY3JlZW5cIixcbiAgICBUSFVNQk5BSUw6IFwidGh1bWJuYWlsXCJcbiAgfTtcbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBjcmVhdGVWUEFJRENvbnRhaW5lckVsKHBsYXllcik7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICByZXNwb25zZVRpbWVvdXQ6IDUwMDAsXG4gICAgVlBBSURfVkVSU0lPTjogJzIuMCdcbiAgfTtcbiAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXJFbCwgJ1ZQQUlELWNvbnRhaW5lcicpO1xuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShjb250YWluZXJFbCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lckVsO1xuXG4gIH1cbn1cblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVEludGVncmF0b3IucGxheUFkLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGxvb2tpbmcgZm9yIHN1cHBvcnRlZCB0ZWNoLi4uXCIpO1xuICB2YXIgdGVjaCA9IHRoaXMuX2ZpbmRTdXBwb3J0ZWRUZWNoKHZhc3RSZXNwb25zZSwgdGhpcy5zZXR0aW5ncyk7XG5cbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICB0aGlzLl9hZFVuaXQgPSBudWxsO1xuXG4gIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuXG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKXtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgICByZW1vdmVBZFVuaXQoKTtcbiAgfSk7XG5cbiAgaWYgKHRlY2gpIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gZm91bmQgdGVjaDogXCIsIHRlY2gpO1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIG5leHQobnVsbCwgdGVjaCwgdmFzdFJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9sb2FkQWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9wbGF5QWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9maW5pc2hQbGF5aW5nLmJpbmQodGhpcylcblxuICAgIF0sIGFkQ29tcGxldGUpO1xuXG4gICAgdGhpcy5fYWRVbml0ID0ge1xuICAgICAgX3BhdXNlZDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdWUEFJRCcsXG4gICAgICBwYXVzZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnBhdXNlQWQnKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOy8vd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHZpZGVvIGNvbnRlbnQgZ2V0cyBzdG9wcGVkLlxuICAgICAgfSxcbiAgICAgIHJlc3VtZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucmVzdW1lQWQnKTtcbiAgICAgIH0sXG4gICAgICBpc1BhdXNlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgICB9LFxuICAgICAgZ2V0U3JjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRlY2gubWVkaWFGaWxlO1xuICAgICAgfVxuICAgIH07XG5cbiAgfSBlbHNlIHtcbiAgICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGNvdWxkIG5vdCBmaW5kIHN1aXRhYmxlIHRlY2hcIik7XG4gICAgdmFyIGVycm9yID0gbmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLnBsYXlBZCwgY291bGQgbm90IGZpbmQgYSBzdXBwb3J0ZWQgbWVkaWFGaWxlJywgNDAzKTtcbiAgICBhZENvbXBsZXRlKGVycm9yLCB0aGlzLl9hZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gYWRDb21wbGV0ZShlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IgJiYgdmFzdFJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKHZhc3RSZXNwb25zZSwgZXJyb3IuY29kZSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkRW5kJyk7XG4gICAgLy8gY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgIGlmICh0ZWNoKSB7XG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xuICAgIH1cbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xuICB2YXIgcHJlZmVycmVkVGVjaCA9IHNldHRpbmdzICYmIHNldHRpbmdzLnByZWZlcnJlZFRlY2g7XG4gIHZhciBza2lwcGVkU3VwcG9ydFRlY2hzID0gW107XG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoLCBpc1ByZWZlcmVkVGVjaDtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XG4gICAgVlBBSURUZWNoID0gdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtZWRpYUZpbGUudHlwZSk7XG5cbiAgICAvLyBubyBzdXBwb3J0ZWQgVlBBSUQgdGVjaCBmb3VuZCwgc2tpcCBtZWRpYWZpbGVcbiAgICBpZiAoIVZQQUlEVGVjaCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIHByZWZlcmVkIHRlY2gsIGRvZXMgaXQgcGxheSB0aGlzIG1lZGlhIGZpbGUgP1xuICAgIGlzUHJlZmVyZWRUZWNoID0gcHJlZmVycmVkVGVjaCA/XG4gICAgICAobWVkaWFGaWxlLnR5cGUgPT09IHByZWZlcnJlZFRlY2ggfHwgKE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXSAmJiBNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0uaW5kZXhPZihtZWRpYUZpbGUudHlwZSkgPiAtMSApKSA6XG4gICAgICBmYWxzZTtcblxuICAgIC8vIG91ciBwcmVmZXJlZCB0ZWNoIGNhbiByZWFkIHRoaXMgbWVkaWFmaWxlLCBkZWZhdWx0aW5nIHRvIGl0LlxuICAgIGlmIChpc1ByZWZlcmVkVGVjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgc2tpcHBlZFN1cHBvcnRUZWNocy5wdXNoKHsgbWVkaWFGaWxlOiBtZWRpYUZpbGUsIHRlY2g6IFZQQUlEVGVjaCB9KTtcbiAgfVxuXG4gIGlmIChza2lwcGVkU3VwcG9ydFRlY2hzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdFRlY2ggPSBza2lwcGVkU3VwcG9ydFRlY2hzWzBdO1xuICAgIHJldHVybiBuZXcgZmlyc3RUZWNoLnRlY2goZmlyc3RUZWNoLm1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIgPSBmdW5jdGlvbihhZFVuaXQsIHNyYywgcmVzcG9uc2VUaW1lb3V0KSB7XG4gIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwge3NyYzogc3JjLCByZXNwb25zZVRpbWVvdXQ6IHJlc3BvbnNlVGltZW91dH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MucmVzcG9uc2VUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XG4gIHRlY2gubG9hZEFkVW5pdCh0aGlzLmNvbnRhaW5lckVsLCB2anNUZWNoRWwsIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgV3JhcHBlZEFkVW5pdCA9IHRoYXQuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHRlY2gubWVkaWFGaWxlLnNyYywgcmVzcG9uc2VUaW1lb3V0KTtcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgdGVjaENsYXNzKTtcbiAgICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBuZXh0KG51bGwsIFdyYXBwZWRBZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbmV4dChlLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlBZFVuaXQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5faGFuZHNoYWtlLmJpbmQodGhpcyksXG4gICAgdGhpcy5faW5pdEFkLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc3RhcnRBZC5iaW5kKHRoaXMpXG4gIF0sIGNhbGxiYWNrKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2hhbmRzaGFrZSA9IGZ1bmN0aW9uIGhhbmRzaGFrZShhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xuICAgIHZhciBtYWpvck51bSA9IG1ham9yKHZlcnNpb24pO1xuICAgIHJldHVybiBtYWpvck51bSA+PSAxICYmIG1ham9yTnVtIDw9IDI7XG4gIH1cblxuICBmdW5jdGlvbiBtYWpvcih2ZXJzaW9uKSB7XG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9pbml0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgYWRVbml0LmluaXRBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIHRoaXMuVklFV19NT0RFLk5PUk1BTCwgLTEsIHtBZFBhcmFtZXRlcnM6IHZhc3RSZXNwb25zZS5hZFBhcmFtZXRlcnMgfHwgJyd9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSkge1xuICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XG4gIHZhciB0cmFja2VyID0gdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBhZFVuaXQub24oJ0FkU2tpcHBlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGVkJyk7XG4gICAgdHJhY2tlci50cmFja1NraXAoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEltcHJlc3Npb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkSW1wcmVzc2lvbicpO1xuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkU3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdGFydGVkJyk7XG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9TdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1N0YXJ0Jyk7XG4gICAgdHJhY2tlci50cmFja1N0YXJ0KCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQbGF5aW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBsYXlpbmcnKTtcbiAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQYXVzZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGF1c2VkJyk7XG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xuICB9KTtcblxuICBmdW5jdGlvbiBub3RpZnlQbGF5VG9QbGF5ZXIoKXtcbiAgICBpZih0aGF0Ll9hZFVuaXQgJiYgdGhhdC5fYWRVbml0LmlzUGF1c2VkKCkpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BsYXknKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGF1c2VUb1BsYXllcigpIHtcbiAgICBpZih0aGF0Ll9hZFVuaXQpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigncGF1c2UnKTtcbiAgfVxuXG4gIGFkVW5pdC5vbignQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja0ZpcnN0UXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvTWlkcG9pbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9NaWRwb2ludCcpO1xuICAgIHRyYWNrZXIudHJhY2tNaWRwb2ludCgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZScpO1xuICAgIHRyYWNrZXIudHJhY2tUaGlyZFF1YXJ0aWxlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb0NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvQ29tcGxldGUnKTtcbiAgICB0cmFja2VyLnRyYWNrQ29tcGxldGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZENsaWNrVGhydScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkQ2xpY2tUaHJ1Jyk7XG4gICAgdmFyIHVybCA9IGRhdGEudXJsO1xuICAgIHZhciBwbGF5ZXJIYW5kbGVzID0gZGF0YS5wbGF5ZXJIYW5kbGVzO1xuICAgIHZhciBjbGlja1RocnVVcmwgPSB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmwpID8gdXJsIDogZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwodmFzdFJlc3BvbnNlLmNsaWNrVGhyb3VnaCk7XG5cbiAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcbiAgICBpZiAocGxheWVySGFuZGxlcyAmJiBjbGlja1RocnVVcmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGNsaWNrVGhydVVybCwgJ19ibGFuaycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvKSB7XG4gICAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgICBBU1NFVFVSSTogYWRVbml0Lm9wdGlvbnMuc3JjLFxuICAgICAgICBDT05URU5UUExBWUhFQUQ6IDAgLy9JbiBWUEFJRCB0aGVyZSBpcyBubyBtZXRob2QgdG8ga25vdyB0aGUgY3VycmVudCB0aW1lIGZyb20gdGhlIGFkVW5pdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6IG51bGw7XG4gICAgfVxuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckFjY2VwdEludml0YXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbigpO1xuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uTGluZWFyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyQ2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckNsb3NlJyk7XG4gICAgdHJhY2tlci50cmFja0Nsb3NlKCk7XG4gICAgdHJhY2tlci50cmFja0Nsb3NlTGluZWFyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyTWluaW1pemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XG4gICAgdHJhY2tlci50cmFja0NvbGxhcHNlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRFcnJvcicpO1xuICAgIC8vTk9URTogd2UgdHJhY2sgZXJyb3JzIGNvZGUgOTAxLCBhcyBub3RlZCBpbiBWQVNUIDMuMFxuICAgIHRyYWNrZXIudHJhY2tFcnJvcldpdGhDb2RlKDkwMSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XG4gICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgY3VycmVudFZvbHVtZSkge1xuICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IGN1cnJlbnRWb2x1bWUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPT09IDAgJiYgbGFzdFZvbHVtZSA+IDApIHtcbiAgICAgICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPiAwICYmIGxhc3RWb2x1bWUgPT09IDApIHtcbiAgICAgICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIudm9sdW1lKGN1cnJlbnRWb2x1bWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoaXMsIHBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG4gIHZhciB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCA9IHV0aWxpdGllcy50aHJvdHRsZSh1cGRhdGVWaWV3U2l6ZSwgMTAwKTtcbiAgdmFyIGF1dG9SZXNpemUgPSB0aGlzLnNldHRpbmdzLmF1dG9SZXNpemU7XG5cbiAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gIH1cblxuICBwbGF5ZXIub24oJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XG4gIHBsYXllci5vbigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xuXG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci5vZmYoJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XG4gICAgcGxheWVyLm9mZigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXVzZUFkVW5pdCgpIHtcbiAgICBhZFVuaXQucGF1c2VBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWVBZFVuaXQoKSB7XG4gICAgYWRVbml0LnJlc3VtZUFkKHV0aWxpdGllcy5ub29wKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgc2tpcEJ1dHRvbjtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBza2lwVGltZSA9IGdldFNraXBUaW1lKHZhc3RSZXNwb25zZSk7XG5cbiAgaWYgKHNraXBUaW1lID49IDApIGFkVW5pdC5vbignQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSk7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gZ2V0U2tpcFRpbWUodmFzdFJlc3BvbnNlKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gdmFzdFJlc3BvbnNlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lcyA9IHZhc3RSZXNwb25zZS50aW1lcyB8fCB7fTtcbiAgICByZXR1cm4gKHRpbWVzWydza2lwVGltZSddIDwgZHVyYXRpb24pID8gdGltZXNbJ3NraXBUaW1lJ10gOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScpO1xuICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcbiAgICAgIGlmIChpc1NraXBwYWJsZSkge1xuICAgICAgICBpZiAoIXNraXBCdXR0b24pIHtcbiAgICAgICAgICBhZGRTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZVNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBCdXR0b25UaW1lcigpIHtcbiAgICBpZiAoIXNraXBCdXR0b24pIHJldHVybjtcblxuICAgIGlmICh0aGF0Ll9hZFVuaXQuaXNQYXVzZWQoKSkge1xuICAgICAgc2V0VGltZW91dChza2lwQnV0dG9uVGltZXIsIDUwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNraXBUaW1lID4gMCkge1xuICAgICAgc2tpcFRpbWUgLT0gMTAwMDtcbiAgICAgIHNldFRpbWVvdXQoc2tpcEJ1dHRvblRpbWVyLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb20ucmVtb3ZlQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2anMtaGlkZGVuXCIpO1xuICB9XG5cblxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmpzLWhpZGRlblwiKTtcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblxuICAgIHNraXBCdXR0b25UaW1lcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIHNraXBCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcbiAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IC9eKHJ1fGJlfHVrKS9pLnRlc3QobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpID8gXCImIzEwNTU7JiMxMDg4OyYjMTA4NjsmIzEwODc7JiMxMDkxOyYjMTA4OTsmIzEwOTA7JiMxMDgwOyYjMTA5MDsmIzExMDA7XCIgOiBcIlNraXAgYWRcIjtcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xpbmtQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGxpbmtWb2x1bWVDb250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQpO1xuICBsaW5rRnVsbFNjcmVlbkNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gbGlua1ZvbHVtZUNvbnRyb2wocGxheWVyLCBhZFVuaXQpIHtcbiAgICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XG4gICAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIHVwZGF0ZVBsYXllclZvbHVtZSk7XG5cbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XG4gICAgfSk7XG5cblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVBZFVuaXRWb2x1bWUoKSB7XG4gICAgICB2YXIgdm9sID0gcGxheWVyLm11dGVkKCkgPyAwIDogcGxheWVyLnZvbHVtZSgpO1xuICAgICAgYWRVbml0LnNldEFkVm9sdW1lKHZvbCwgbG9nRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXllclZvbHVtZSgpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xuICAgICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCB2b2wpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgbG9nRXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsYXN0Vm9sdW1lICE9PSB2b2wpIHtcbiAgICAgICAgICAgIHBsYXllci52b2x1bWUodm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtGdWxsU2NyZWVuQ29udHJvbChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG4gICAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGF0LCBwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKTtcblxuICAgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICB9KTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc3RhcnRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgYWRVbml0LnN0YXJ0QWQoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuICAgIH1cbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluaXNoUGxheWluZyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xuICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RvcHBlZCcpO1xuICAgZmluaXNoUGxheWluZ0FkKG51bGwpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICB2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcbiAgICBmaW5pc2hQbGF5aW5nQWQobmV3IFZBU1RFcnJvcihlcnJNc2cpKTtcbiAgfSk7XG5cbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBmaW5pc2hQbGF5aW5nQWQoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKHJlc3BvbnNlLCBlcnJvckNvZGUpIHtcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yQ29kZSB8fCA5MDF9KTtcbn07XG5cbmZ1bmN0aW9uIHJlc2l6ZUFkKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xuICBhZFVuaXQucmVzaXplQWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCBNT0RFLCBsb2dFcnJvcik7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvciAoJ0VSUk9SOiAnICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURJbnRlZ3JhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYWRzLWxhYmVsIHZqcy1jb250cm9sIHZqcy1sYWJlbC1oaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnQWR2ZXJ0aXNlbWVudCc7XG5cbnZhciBBZHNMYWJlbEZhY3RvcnkgPSBmdW5jdGlvbihiYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB7XG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBXZSBhc3luY2hyb25vdXNseSByZXBvc2l0aW9uIHRoZSBhZHMgbGFiZWwgZWxlbWVudFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZUNvbXAgPSBwbGF5ZXIuY29udHJvbEJhciAmJiggcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJ0aW1lckNvbnRyb2xzXCIpIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwiY3VycmVudFRpbWVEaXNwbGF5XCIpICk7XG4gICAgICAgIGlmKGN1cnJlbnRUaW1lQ29tcCkge1xuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGN1cnJlbnRUaW1lQ29tcC5lbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ3Zqcy1sYWJlbC1oaWRkZW4nKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRzTGFiZWxGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG52YXIgQWRzTGFiZWwgPSByZXF1aXJlKCcuL2Fkcy1sYWJlbCcpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQWRzTGFiZWwnLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQWRzTGFiZWwpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IHRoYXQgc2hvd3MgYSBibGFjayBzY3JlZW4gdW50aWwgdGhlIGFkcyBwbHVnaW4gaGFzIGRlY2lkZWQgaWYgaXQgY2FuIG9yIGl0IGNhbiBub3QgcGxheSB0aGUgYWQuXG4gKlxuICogTm90ZTogSW4gY2FzZSB5b3Ugd29uZGVyIHdoeSBpbnN0ZWFkIG9mIHRoaXMgYmxhY2sgcG9zdGVyIHdlIGRvbid0IGp1c3Qgc2hvdyB0aGUgc3Bpbm5lciBsb2FkZXIuXG4gKiAgICAgICBJT1MgZGV2aWNlcyBkbyBub3Qgd29yayB3ZWxsIHdpdGggYW5pbWF0aW9ucyBhbmQgdGhlIGJyb3dzZXIgY2hyYXNoZXMgZnJvbSB0aW1lIHRvIHRpbWUgVGhhdCBpcyB3aHkgd2UgY2hvc2UgdG9cbiAqICAgICAgIGhhdmUgYSBzZWNvbmRhcnkgYmxhY2sgcG9zdGVyLlxuICpcbiAqICAgICAgIEl0IGFsc28gbWFrZXMgaXQgbXVjaCBtb3JlIGVhc2llciBmb3IgdGhlIHVzZXJzIG9mIHRoZSBwbHVnaW4gc2luY2UgaXQgZG9lcyBub3QgY2hhbmdlIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBvZiB0aGVcbiAqICAgICAgIHNwaW5uZXIgYW5kIHRoZSBwbGF5ZXIgd29ya3MgdGhlIHNhbWUgd2F5IHdpdGggYW5kIHdpdGhvdXQgdGhlIHBsdWdpbi5cbiAqXG4gKiBAcGFyYW0ge3Zqcy5QbGF5ZXJ8T2JqZWN0fSBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnZhciBCbGFja1Bvc3RlckZhY3RvcnkgPSBmdW5jdGlvbihiYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB7XG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1ibGFjay1wb3N0ZXInO1xuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgIHZhciBwb3N0ZXJJbWcgPSBwbGF5ZXIuZ2V0Q2hpbGQoJ3Bvc3RlckltYWdlJyk7XG5cbiAgICAgIC8vV2UgbmVlZCB0byBkbyBpdCBhc3luY2hyb25vdXNseSB0byBiZSBzdXJlIHRoYXQgdGhlIGJsYWNrIHBvc3RlciBlbCBpcyBvbiB0aGUgZG9tLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYocG9zdGVySW1nICYmIHBsYXllciAmJiBwbGF5ZXIuZWwoKSkge1xuICAgICAgICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBwb3N0ZXJJbWcuZWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0sXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsYWNrUG9zdGVyRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxudmFyIEJsYWNrUG9zdGVyID0gcmVxdWlyZSgnLi9ibGFjay1wb3N0ZXInKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0JsYWNrUG9zdGVyJywgdmlkZW9qcy5leHRlbmQoYmFzZVZpZGVvSnNDb21wb25lbnQsIEJsYWNrUG9zdGVyKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNUQ2xpZW50ID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVENsaWVudCcpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RFcnJvcicpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvdmFzdFV0aWwnKTtcblxudmFyIFZBU1RJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEludGVncmF0b3InKTtcbnZhciBWUEFJREludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVkFTVFBsdWdpbihvcHRpb25zKSB7XG4gIHZhciBzbmFwc2hvdDtcbiAgdmFyIHBsYXllciA9IHRoaXM7XG4gIHZhciB2YXN0ID0gbmV3IFZBU1RDbGllbnQoKTtcbiAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XG4gIHZhciBkZWZhdWx0T3B0cyA9IHtcbiAgICAvLyBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIGluIG1zIHRvIHdhaXQgdG8gcmVjZWl2ZSBgYWRzcmVhZHlgIGZyb20gdGhlIGFkXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYWZ0ZXIgcGxheSBoYXMgYmVlbiByZXF1ZXN0ZWQuIEFkIGltcGxlbWVudGF0aW9ucyBhcmVcbiAgICAvLyBleHBlY3RlZCB0byBsb2FkIGFueSBkeW5hbWljIGxpYnJhcmllcyBhbmQgbWFrZSBhbnkgcmVxdWVzdHMgdG8gZGV0ZXJtaW5lXG4gICAgLy8gYWQgcG9saWNpZXMgZm9yIGEgdmlkZW8gZHVyaW5nIHRoaXMgdGltZS5cbiAgICB0aW1lb3V0OiA1MDAsXG5cbiAgICAvL1RPRE86ZmluaXNoIHRoaXMgSU9TIEZJWFxuICAgIC8vV2hlbmV2ZXIgeW91IHBsYXkgYW4gYWRkIG9uIElPUywgdGhlIG5hdGl2ZSBwbGF5ZXIga2lja3MgaW4gYW5kIHdlIGxvb3NlIGNvbnRyb2wgb2YgaXQuIE9uIHZlcnkgaGVhdnkgcGFnZXMgdGhlICdwbGF5JyBldmVudFxuICAgIC8vIE1heSBvY2N1ciBhZnRlciB0aGUgdmlkZW8gY29udGVudCBoYXMgYWxyZWFkeSBzdGFydGVkLiBUaGlzIGlzIHdyb25nIGlmIHlvdSB3YW50IHRvIHBsYXkgYSBwcmVyb2xsIGFkIHRoYXQgbmVlZHMgdG8gaGFwcGVuIGJlZm9yZSB0aGUgdXNlclxuICAgIC8vIHN0YXJ0cyB3YXRjaGluZyB0aGUgY29udGVudC4gVG8gcHJldmVudCB0aGlzIHVzZWNcbiAgICBpb3NQcmVyb2xsQ2FuY2VsVGltZW91dDogMjAwMCxcblxuICAgIC8vIG1heGltdW4gYW1vdW50IG9mIHRpbWUgZm9yIHRoZSBhZCB0byBhY3R1YWxseSBzdGFydCBwbGF5aW5nLiBJZiB0aGlzIHRpbWVvdXQgZ2V0c1xuICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgYWRDYW5jZWxUaW1lb3V0OiAzMDAwLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyIHRvIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluXG4gICAgLy8gdGhlIGN1cnJlbnQgdmlkZW9cbiAgICBwbGF5QWRBbHdheXM6IGZhbHNlLFxuXG4gICAgLy8gRmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYWRzIGJ5IGRlZmF1bHQuXG4gICAgYWRzRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgcmVzaXplIHdpdGggd2luZG93LnJlc2l6ZSBvciBvcmllbnRhdGlvbmNoYW5nZVxuICAgIGF1dG9SZXNpemU6IHRydWUsXG5cbiAgICAvLyBQYXRoIHRvIHRoZSBWUEFJRCBmbGFzaCBhZCdzIGxvYWRlclxuICAgIHZwYWlkRmxhc2hMb2FkZXJQYXRoOiAnL1ZQQUlERmxhc2guc3dmJyxcblxuICAgIC8vIHZlcmJvc2l0eSBvZiBjb25zb2xlIGxvZ2dpbmc6XG4gICAgLy8gMCAtIGVycm9yXG4gICAgLy8gMSAtIGVycm9yLCB3YXJuXG4gICAgLy8gMiAtIGVycm9yLCB3YXJuLCBpbmZvXG4gICAgLy8gMyAtIGVycm9yLCB3YXJuLCBpbmZvLCBsb2dcbiAgICAvLyA0IC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcbiAgICB2ZXJib3NpdHk6IDBcbiAgfTtcblxuICB2YXIgc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcbiAgfVxuXG4gIGxvZ2dlci5zZXRWZXJib3NpdHkgKHNldHRpbmdzLnZlcmJvc2l0eSk7XG5cbiAgdmFzdFV0aWwucnVuRmxhc2hTdXBwb3J0Q2hlY2soc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGgpOy8vIE5lY2Vzc2FyeSBzdGVwIGZvciBWUEFJREZMQVNIQ2xpZW50IHRvIHdvcmsuXG5cbiAgcGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyhwbGF5ZXIpO1xuXG4gIGlmIChzZXR0aW5ncy5wbGF5QWRBbHdheXMpIHtcbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBoYXBwZW5zIHdlIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluLlxuICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LnJlc2V0Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xuXG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcbiAgICBzbmFwc2hvdCA9IG51bGw7XG4gICAgY2FuY2VsQWRzKCk7XG4gIH0pO1xuXG4gIHBsYXllci52YXN0ID0ge1xuICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNldHRpbmdzLmFkc0VuYWJsZWQ7XG4gICAgfSxcblxuICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHBsYXllci52YXN0O1xuXG4gIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiB0cnlUb1BsYXlQcmVyb2xsQWQoKSB7XG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlQWRVbml0KCk7XG4gICAgICByZXN0b3JlVmlkZW9Db250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgY2hlY2tBZHNFbmFibGVkLFxuICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxuICAgICAgc3RhcnRBZENhbmNlbFRpbWVvdXQsXG4gICAgICBwbGF5UHJlcm9sbEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRyYWNrQWRFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRFbmQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkVW5pdCgpIHtcbiAgICAgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQpIHtcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0ID0gbnVsbDsgLy9XZSByZW1vdmUgdGhlIGFkVW5pdFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVWaWRlb0NvbnRlbnQoKSB7XG4gICAgICBzZXR1cENvbnRlbnRFdmVudHMoKTtcbiAgICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgICBwbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCk7XG4gICAgICAgIHNuYXBzaG90ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cENvbnRlbnRFdmVudHMoKSB7XG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgIT09ICdwbGF5aW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRTdGFydCcpO1xuXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2VuZGVkJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2VuZGVkJykge1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudEVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Fkc0VuYWJsZWQobmV4dCkge1xuICAgICAgaWYgKHNldHRpbmdzLmFkc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHQobnVsbCk7XG4gICAgICB9XG4gICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ0FkcyBhcmUgbm90IGVuYWJsZWQnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcGFyZVBsYXllckZvckFkKG5leHQpIHtcbiAgICAgIGlmIChjYW5QbGF5UHJlcm9sbEFkKCkpIHtcbiAgICAgICAgc25hcHNob3QgPSBwbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgYWRkU3Bpbm5lckljb24oKTtcblxuICAgICAgICBpZihwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIG5leHQobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblBsYXlQcmVyb2xsQWQoKSB7XG4gICAgICByZXR1cm4gIXV0aWxpdGllcy5pc0lQaG9uZSgpIHx8IHBsYXllci5jdXJyZW50VGltZSgpIDw9IHNldHRpbmdzLmlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QWRDYW5jZWxUaW1lb3V0KG5leHQpIHtcbiAgICAgIHZhciBhZENhbmNlbFRpbWVvdXRJZDtcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XG4gICAgICB9LCBzZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV4dChudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XG4gICAgICAvL0lNUE9SVEFOVCBOT1RFOiBXZSByZW1vdmUgdGhlIHNwaW5uZXJJY29uIGFzeW5jaHJvbm91c2x5IHRvIGdpdmUgdGltZSB0byB0aGUgYnJvd3NlciB0byBzdGFydCB0aGUgdmlkZW8uXG4gICAgICAvLyBJZiB3ZSByZW1vdmUgaXQgc3luY2hyb25vdXNseSB3ZSBzZWUgYSBmbGFzaCBvZiB0aGUgY29udGVudCB2aWRlbyBiZWZvcmUgdGhlIGFkIHN0YXJ0cyBwbGF5aW5nLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBnZXRWYXN0UmVzcG9uc2UsXG4gICAgICBwbGF5QWRcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcbiAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICAgIHZhciBhZEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xuICAgICAgICBhZGRBZHNMYWJlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gICAgbG9nZ2VyLmRlYnVnIChcImNhbGxpbmcgYWRJbnRlZ3JhdG9yLnBsYXlBZCgpIHdpdGggdmFzdFJlc3BvbnNlOlwiLCB2YXN0UmVzcG9uc2UpO1xuICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICAgIGZ1bmN0aW9uIGFkZEFkc0xhYmVsKCkge1xuICAgICAgaWYgKGFkRmluaXNoZWQgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ0Fkc0xhYmVsJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZHNMYWJlbCgpIHtcbiAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNoaWxkKCdBZHNMYWJlbCcpO1xuICAgICAgYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcblxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgbG9nZ2VyLmVycm9yICgnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiLy9TbWFsbCBzdWJzZXQgb2YgYXN5bmNcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgYXN5bmMgPSB7fTtcblxuYXN5bmMuc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgIH07XG4gICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmbjtcbiAgfTtcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbn07XG5cblxuYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgfVxuICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbn07XG5cbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzeW5jLndoZW4gZXJyb3I6IG1pc3NpbmcgY2FsbGJhY2sgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgaXNBbGxvd2VkID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZGl0aW9uKSA/IGNvbmRpdGlvbiA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIG5leHQgPSBhcmdzLnBvcCgpO1xuXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcblxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF92ZXJib3NpdHkgPSAwO1xudmFyIF9wcmVmaXggPSBcIlt2aWRlb2pzLXZhc3QtdnBhaWRdIFwiO1xuXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXG57XG4gICAgX3ZlcmJvc2l0eSA9IHY7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1zZyAobWV0aG9kLCBhcmdzKVxue1xuICAgIGlmICgoYXJncy5sZW5ndGgpID4gMCAmJiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSlcbiAgICB7XG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kLmFwcGx5KVxuICAgIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5IChjb25zb2xlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWcgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIC8vIElFIDEwIGRvZXNuJ3QgaGF2ZSBhIGNvbnNvbGUuZGVidWcoKSBmdW5jdGlvblxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2cgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gaW5mbyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcbn1cblxuXG5mdW5jdGlvbiB3YXJuICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS53YXJuLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBlcnJvciAoKVxue1xuICAgIGhhbmRsZU1zZyAoY29uc29sZS5lcnJvciwgYXJndW1lbnRzKTtcbn1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gICAgc2V0VmVyYm9zaXR5OiBzZXRWZXJib3NpdHksXG4gICAgZGVidWc6IGRlYnVnLFxuICAgIGxvZzogbG9nLFxuICAgIGluZm86IGluZm8sXG4gICAgd2Fybjogd2FybixcbiAgICBlcnJvcjogZXJyb3Jcbn07XG5cbmlmICgodHlwZW9mIChjb25zb2xlKSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICFjb25zb2xlLmxvZylcbntcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcbiAgICBjb25zb2xlTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc29sZUxvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGRvbSA9IHt9O1xuXG5kb20uaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xufTtcblxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufTtcblxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcbn07XG5cbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSBlbC5zdHlsZS5kaXNwbGF5O1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XztcbiAgfVxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XG59O1xuXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXMsIGksIGxlbjtcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIHZhciBuZXdDbGFzc2VzID0gW107XG4gICAgdmFyIGksIGxlbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgIC8vIHdvdWxkIG5vdCBiZSB0aGVyZSBmb3IgSUU4XG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXG4gICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbFtcIm9uXCIgKyB0eXBlXSA9IG51bGw7XG4gIH1cbn07XG5cbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XG4gIH1cbn07XG5cbmRvbS5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xuICByZXR1cm4gZWwudGV4dENvbnRlbnQgfHwgZWwudGV4dDtcbn07XG5cbmRvbS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xufTtcblxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn07XG5cbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59O1xuXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59O1xuXG5kb20ub25jZSA9IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xuICB9XG5cbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbn07XG5cbi8vTm90ZTogdGhlcmUgaXMgbm8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGlQYWQgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmxVdGlscyA9IHJlcXVpcmUoJy4vdXJsVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSHR0cFJlcXVlc3RFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbn1cbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdChjcmVhdGVYaHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoJ01pc3NpbmcgWE1MSHR0cFJlcXVlc3QgZmFjdG9yeSBtZXRob2QnKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlWGhyID0gY3JlYXRlWGhyO1xufVxuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcbiAgdmFyIHhociA9IHRoaXMuY3JlYXRlWGhyKCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xuXG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsVXRpbHMudXJsUGFydHModXJsKS5ocmVmLCB0cnVlKTtcblxuICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgc2V0SGVhZGVycyh4aHIsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1c1RleHQsIHJlc3BvbnNlLCBzdGF0dXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb25seSB3YXkgdG8gZG8gYSBzZWN1cmUgcmVxdWVzdCBvbiBJRTggYW5kIElFOSBpcyB3aXRoIHRoZSBYRG9tYWluUmVxdWVzdCBvYmplY3QuIFVuZm9ydHVuYXRlbHksIG1pY3Jvc29mdCBpc1xuICAgICAqIHNvIG5pY2UgdGhhdCBkZWNpZGVkIHRoYXQgdGhlIHN0YXR1cyBwcm9wZXJ0eSBhbmQgdGhlICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIG1ldGhvZCB3aGVyZSBub3QgbmVlZGVkIHNvIHdlIGhhdmUgdG9cbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxuICAgICAqIHRoZSBzdGF0dXMgd2lsbCBhbHdheXMgYmUgMjAwLiBJZiB5b3UgZG9uJ3QgbGlrZSBpdCwgRE8gTk9UIFVTRSBBTkNJRU5UIEJST1dTRVJTISEhXG4gICAgICpcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxuICAgICAqL1xuICAgIGlmICgheGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICgheGhyLnN0YXR1cykge1xuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgJyc7XG5cbiAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBYSFIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZCBieSBJRTEwKVxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcblxuICAgIGNhbGxiYWNrKFxuICAgICAgc3RhdHVzLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICBzdGF0dXNUZXh0KTtcbiAgfTtcblxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgeGhyLm9uYWJvcnQgPSByZXF1ZXN0RXJyb3I7XG5cbiAgeGhyLnNlbmQoKTtcblxuICBpZiAodGltZW91dCA+IDApIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHhociAmJiB4aHIuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgaGFuZGxlciAnXCIgKyBjYWxsYmFjayArIFwiJyBmb3IgdGhlIGh0dHAgcmVxdWVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChvcHRpb25zKSAmJiAhdXRpbGl0aWVzLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKHhociwgaGVhZGVycykge1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XG4gICAgY2FsbGJhY2soLTEsIG51bGwsIG51bGwsICcnKTtcbiAgfVxufTtcblxuSHR0cFJlcXVlc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHN0YXR1cywgcmVzcG9uc2UsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpIHtcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykge1xuICAgIHJldHVybiAyMDAgPD0gc3RhdHVzICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGlmICghKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSkge1xuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cbiAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgfVxuICByZXR1cm4geGhyO1xufVxuXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHR0cDogaHR0cCxcbiAgSHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVxdWVzdEVycm9yOiBIdHRwUmVxdWVzdEVycm9yLFxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGh0bWw1OiBbXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMicsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvanNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjAnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjInLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjQnLFxuICAgICd0ZXh0L2xpdmVzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24veC1lY21hc2NyaXB0JyxcbiAgXSxcblxuICBmbGFzaDogW1xuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCdcbiAgXSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgcGxheWVyVXRpbHMgPSB7fTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhcHR1cmVzIHRoZSBwb3J0aW9ucyBvZiBwbGF5ZXIgc3RhdGUgcmVsZXZhbnQgdG9cbiAqIHZpZGVvIHBsYXliYWNrLiBUaGUgcmVzdWx0IG9mIHRoaXMgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCB0b1xuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XG4gKiB3YXMgaW4gd2hlbiB0aGlzIGZ1bmN0aW9uIHdhcyBpbnZva2VkLlxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XG4gKi9cbnBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gZ2V0UGxheWVyU25hcHNob3QocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG5cbiAgdmFyIHNuYXBzaG90ID0ge1xuICAgIGVuZGVkOiBwbGF5ZXIuZW5kZWQoKSxcbiAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXG4gICAgY3VycmVudFRpbWU6IHBsYXllci5jdXJyZW50VGltZSgpLFxuICAgIHR5cGU6IHBsYXllci5jdXJyZW50VHlwZSgpLFxuICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXG4gICAgc3VwcHJlc3NlZFRyYWNrczogZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpXG4gIH07XG5cbiAgaWYgKHRlY2gpIHtcbiAgICBzbmFwc2hvdC5uYXRpdmVQb3N0ZXIgPSB0ZWNoLnBvc3RlcjtcbiAgICBzbmFwc2hvdC5zdHlsZSA9IHRlY2guZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB9XG4gIHJldHVybiBzbmFwc2hvdDtcblxuICAvKioqKiBMb2NhbCBGdW5jdGlvbnMgKioqKi9cbiAgZnVuY3Rpb24gZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpIHtcbiAgICB2YXIgdHJhY2tzID0gcGxheWVyLnJlbW90ZVRleHRUcmFja3MgPyBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcygpIDogW107XG5cbiAgICBpZiAodHJhY2tzICYmIHV0aWxpdGllcy5pc0FycmF5KHRyYWNrcy50cmFja3NfKSkge1xuICAgICAgdHJhY2tzID0gdHJhY2tzLnRyYWNrc187XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MpKSB7XG4gICAgICB0cmFja3MgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IFtdO1xuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgc3VwcHJlc3NlZFRyYWNrcy5wdXNoKHtcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICBtb2RlOiB0cmFjay5tb2RlXG4gICAgICB9KTtcbiAgICAgIHRyYWNrLm1vZGUgPSAnZGlzYWJsZWQnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHByZXNzZWRUcmFja3M7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gbW9kaWZ5IHRoZSBzcGVjaWZpZWQgcGxheWVyIHNvIHRoYXQgaXRzIHN0YXRlIGlzIGVxdWl2YWxlbnQgdG9cbiAqIHRoZSBzdGF0ZSBvZiB0aGUgc25hcHNob3QuXG4gKiBAcGFyYW0ge29iamVjdH0gc25hcHNob3QgLSB0aGUgcGxheWVyIHN0YXRlIHRvIGFwcGx5XG4gKi9cbnBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uIHJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBhdHRlbXB0cyA9IDIwOyAvLyB0aGUgbnVtYmVyIG9mIHJlbWFpbmluZyBhdHRlbXB0cyB0byByZXN0b3JlIHRoZSBzbmFwc2hvdFxuXG4gIGlmIChzbmFwc2hvdC5uYXRpdmVQb3N0ZXIpIHtcbiAgICB0ZWNoLnBvc3RlciA9IHNuYXBzaG90Lm5hdGl2ZVBvc3RlcjtcbiAgfVxuXG4gIGlmICgnc3R5bGUnIGluIHNuYXBzaG90KSB7XG4gICAgLy8gb3ZlcndyaXRlIGFsbCBjc3Mgc3R5bGUgcHJvcGVydGllcyB0byByZXN0b3JlIHN0YXRlIHByZWNpc2VseVxuICAgIGlmICh0ZWNoKSB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XG4gIH1cblxuICBpZiAoaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSkge1xuXG4gICAgLy8gb24gaW9zNywgZmlkZGxpbmcgd2l0aCB0ZXh0VHJhY2tzIHRvbyBlYXJseSB3aWxsIGNhdXNlIHNhZmFyaSB0byBjcmFzaFxuICAgIHBsYXllci5vbmUoJ2NvbnRlbnRsb2FkZWRtZXRhZGF0YScsIHJlc3RvcmVUcmFja3MpO1xuXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIHRyeVRvUmVzdW1lKTtcbiAgICBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCk7XG5cbiAgICAvLyBpZiB0aGUgc3JjIGNoYW5nZWQgZm9yIGFkIHBsYXliYWNrLCByZXNldCBpdFxuICAgIHBsYXllci5zcmMoe3NyYzogc25hcHNob3Quc3JjLCB0eXBlOiBzbmFwc2hvdC50eXBlfSk7XG5cbiAgICAvLyBzYWZhcmkgcmVxdWlyZXMgYSBjYWxsIHRvIGBsb2FkYCB0byBwaWNrIHVwIGEgY2hhbmdlZCBzb3VyY2VcbiAgICBwbGF5ZXIubG9hZCgpO1xuXG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZVRyYWNrcygpO1xuXG4gICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIC8qKlxuICAgKiBTb21ldGltZXMgZmlyZWZveCBkb2VzIG5vdCB0cmlnZ2VyIHRoZSAnY2FucGxheScgZXZ0LlxuICAgKiBUaGlzIGNvZGUgZW5zdXJlIHRoYXQgaXQgYWx3YXlzIGdldHMgdHJpZ2dlcmVkIHRyaWdnZXJlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKSB7XG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcignY2FucGxheScpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uKCl7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxuICAgKiBiZWZvcmUgYWQgcGxheWJhY2sgYmVnYW4uIFdpdGggYSBjdXN0b20gYWQgZGlzcGxheSBvciBidXJuZWQtaW5cbiAgICogYWRzLCB0aGUgY29udGVudCBwbGF5ZXIgc3RhdGUgaGFzbid0IGJlZW4gbW9kaWZpZWQgYW5kIHNvIG5vXG4gICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXG4gICAqL1xuICBmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XG4gICAgICByZXR1cm4gcGxheWVyLnNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gICAgfVxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxuICAgIHJldHVybiBwbGF5ZXIuY3VycmVudFNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlVHJhY2tzKCkge1xuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gc25hcHNob3Quc3VwcHJlc3NlZFRyYWNrcztcbiAgICBzdXBwcmVzc2VkVHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrU25hcHNob3QpIHtcbiAgICAgIHRyYWNrU25hcHNob3QudHJhY2subW9kZSA9IHRyYWNrU25hcHNob3QubW9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZGVvIGVsZW1lbnQgaGFzIGxvYWRlZCBlbm91Z2ggb2YgdGhlIHNuYXBzaG90IHNvdXJjZVxuICAgKiB0byBiZSByZWFkeSB0byBhcHBseSB0aGUgcmVzdCBvZiB0aGUgc3RhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHRyeVRvUmVzdW1lKCkge1xuXG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcbiAgICAvLyBvdGhlcndpc2UgZGVsYXkgYSBiaXQgYW5kIHRoZW4gY2hlY2sgYWdhaW4gdW5sZXNzIHdlJ3JlIG91dCBvZiBhdHRlbXB0c1xuXG4gICAgaWYgKCFwbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUocGxheWVyKSAmJiBhdHRlbXB0cy0tKSB7XG4gICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKHBsYXllci5jdXJyZW50VGltZSgpICE9PSBzbmFwc2hvdC5jdXJyZW50VGltZSkge1xuICAgICAgICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7IC8vIGlmIG5lZWRlZCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGFmdGVyIHNlZWsgY29tcGxldGVzXG4gICAgICAgICAgICBwbGF5ZXIub25lKCdzZWVrZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUoc25hcHNob3QuY3VycmVudFRpbWUpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgICAgIC8vIGlmIG5lZWRlZCBhbmQgbm8gc2VlayBoYXMgYmVlbiBwZXJmb3JtZWQsIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmlkZW9qcy5sb2cud2FybignRmFpbGVkIHRvIHJlc3VtZSB0aGUgY29udGVudCBhZnRlciBhbiBhZHZlcnRpc2VtZW50JywgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5wbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUgPSBmdW5jdGlvbiAocGxheWVyKSB7XG5cbiAgaWYgKHBsYXllci5yZWFkeVN0YXRlKCkgPiAxKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBhbmQgbWVkaWEgYXJlbid0IFwic2Vla2FibGVcIi5cbiAgICAvLyByZWFkeVN0YXRlIGdyZWF0ZXIgdGhhbiAxIGFsbG93cyBmb3Igc2Vla2luZyB3aXRob3V0IGV4Y2VwdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlIHBsYXllciBkb2Vzbid0IGV4cG9zZSB0aGUgc2Vla2FibGUgdGltZSByYW5nZXMsIHRyeSB0b1xuICAgIC8vIHJlc3VtZSBwbGF5YmFjayBpbW1lZGlhdGVseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpLmxlbmd0aCA+IDApIHtcbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHByZXBhcmVzIHRoZSBwbGF5ZXIgdG8gZGlzcGxheSBhZHMuXG4gKiBBZGRpbmcgY29udmVuaWVuY2UgZXZlbnRzIGxpa2UgdGhlICd2YXN0LmZpcnNQbGF5JyB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgZmlyc3QgcGxheWVkXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXG4gKlxuICogQHBhcmFtIHBsYXllclxuICovXG5wbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgYmxhY2tQb3N0ZXIgPSBwbGF5ZXIuYWRkQ2hpbGQoJ2JsYWNrUG9zdGVyJyk7XG4gIHZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgdmFyIHZvbHVtZVNuYXBzaG90O1xuXG5cbiAgbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKTtcblxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIC8qKlxuICAgV2hhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgaXMgdWdseSBhbmQgaG9ycmlibGUgYW5kIEkgc2hvdWxkIHRoaW5rIHR3aWNlIGJlZm9yZSBjYWxsaW5nIG15c2VsZiBhIGdvb2QgZGV2ZWxvcGVyLiBXaXRoIHRoYXQgc2FpZCxcbiAgIGl0IGlzIHRoZSBiZXN0IHNvbHV0aW9uIEkgY291bGQgZmluZCB0byBtdXRlIHRoZSB2aWRlbyB1bnRpbCB0aGUgJ3BsYXknIGV2ZW50IGhhcHBlbnMgKG9uIG1vYmlsZSBkZXZpY2VzKSBhbmQgdGhlIHBsdWdpbiBjYW4gZGVjaWRlIHdoZXRoZXJcbiAgIHRvIHBsYXkgdGhlIGFkIG9yIG5vdC5cblxuICAgV2UgYWxzbyBuZWVkIHRoaXMgbW9ua2V5cGF0Y2ggdG8gYmUgYWJsZSB0byBwYXVzZSBhbmQgcmVzdW1lIGFuIGFkIHVzaW5nIHRoZSBwbGF5ZXIncyBBUElcblxuICAgSWYgeW91IGhhdmUgYSBiZXR0ZXIgc29sdXRpb24gcGxlYXNlIGRvIHRlbGwgbWUuXG4gICAqL1xuICBmdW5jdGlvbiBtb25rZXlQYXRjaFBsYXllckFwaSgpIHtcblxuICAgIC8qKlxuICAgICAqIE1vbmtleSBwYXRjaCBuZWVkZWQgdG8gaGFuZGxlIGZpcnN0UGxheSBhbmQgcmVzdW1lIG9mIHBsYXlpbmcgYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcmVzdG9yaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGxheSA9IHBsYXllci5wbGF5O1xuICAgIHBsYXllci5wbGF5ID0gZnVuY3Rpb24gKGNhbGxPcmlnUGxheSkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICAgICAgICBmaXJzdFBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VtZShjYWxsT3JpZ1BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgICAgZnVuY3Rpb24gZmlyc3RQbGF5KCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc0lQaG9uZSgpKSB7XG4gICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcbiAgICAgICAgICBwbGF5ZXIubXV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXN1bWUoY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BsYXkpIHtcbiAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucmVzdW1lQWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2UgPSBwbGF5ZXIucGF1c2U7XG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5wYXVzZUFkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnUGF1c2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlZCBzdGF0ZSBvZiB0aGUgcGxheWVyIHdoZW4gYWRzIGFyZSBwbGF5aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQYXVzZWQgPSBwbGF5ZXIucGF1c2VkO1xuICAgIHBsYXllci5wYXVzZWQgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlZCkge1xuICAgICAgICByZXR1cm4gcGxheWVyLnZhc3QuYWRVbml0LmlzUGF1c2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ1BhdXNlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0FkUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KCkge1xuICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gICAgICBfZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5maXJzdFBsYXknKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZpcnN0UGxheSgpIHtcbiAgICBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgICBibGFja1Bvc3Rlci5zaG93KCk7XG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xuICAgIHJldHVybiBfZmlyc3RQbGF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVZvbHVtZVNuYXBzaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdXRlZDogcGxheWVyLm11dGVkKCksXG4gICAgICB2b2x1bWU6IHBsYXllci52b2x1bWUoKVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlQ29udGVudFZvbHVtZSgpIHtcbiAgICBpZiAodm9sdW1lU25hcHNob3QpIHtcbiAgICAgIHBsYXllci5jdXJyZW50VGltZSgwKTtcbiAgICAgIHJlc3RvcmVWb2x1bWVTbmFwc2hvdCh2b2x1bWVTbmFwc2hvdCk7XG4gICAgICB2b2x1bWVTbmFwc2hvdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVZvbHVtZVNuYXBzaG90KHNuYXBzaG90KSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc09iamVjdChzbmFwc2hvdCkpIHtcbiAgICAgIHBsYXllci52b2x1bWUoc25hcHNob3Qudm9sdW1lKTtcbiAgICAgIHBsYXllci5tdXRlZChzbmFwc2hvdC5tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJsYWNrUG9zdGVyKCkge1xuICAgIGlmICghZG9tLmhhc0NsYXNzKGJsYWNrUG9zdGVyLmVsKCksICd2anMtaGlkZGVuJykpIHtcbiAgICAgIGJsYWNrUG9zdGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZXMoKSB7XG4gICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVN0eWxlcygpIHtcbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cbiAqIHJldXNpbmcgYSB2aWRlbyBlbGVtZW50IGZvciBtdWx0aXBsZSB2aWRlb3MsIHRoZSBwb3N0ZXIgaW1hZ2Ugd2lsbCBicmllZmx5XG4gKiByZWFwcGVhciB3aGlsZSB0aGUgbmV3IHNvdXJjZSBsb2Fkcy4gUmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhaGVhZCBvZiB0aW1lXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIGlmICh0ZWNoKSB7XG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gbWFueSBldmVudHMgdW50aWwgb25lIG9mIHRoZW0gZ2V0cyBmaXJlZCwgdGhlbiB3ZVxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XG4gKlxuICogQHBhcmFtIHBsYXllciBzcGVjaWZpYyBwbGF5ZXIgZnJvbSB3aGVyZSB0byBsaXN0ZW4gZm9yIHRoZSBldmVudHNcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0byBleGVjdXRlIG9uY2Ugb25lIG9mIHRoZSBldmVudHMgZmlyZXNcbiAqL1xucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwbGF5ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbi8qKlxuICpcbiAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGZ1bmN0aW9uIGNvbWVzIGZyb20gYW5ndWxhckpzIGFuZCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgdXJsUmVzb2x2ZVxuICogICAgICAgICAgICAgICAgIHlvdSBjYW4gdGFrZSBhIGxvb2sgYXQgdGhlIG9yaWdpbmFsIGNvZGUgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy91cmxVdGlscy5qc1xuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBub24tSUUgYnJvd3NlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFzc2lnbmluZyBhIFVSTCB0byB0aGUgaHJlZiBwcm9wZXJ0eSBvZiBhbiBhbmNob3IgRE9NIG5vZGUsIGV2ZW4gb25lIGF0dGFjaGVkIHRvIHRoZSBET00sXG4gKiByZXN1bHRzIGJvdGggaW4gdGhlIG5vcm1hbGl6aW5nIGFuZCBwYXJzaW5nIG9mIHRoZSBVUkwuICBOb3JtYWxpemluZyBtZWFucyB0aGF0IGEgcmVsYXRpdmVcbiAqIFVSTCB3aWxsIGJlIHJlc29sdmVkIGludG8gYW4gYWJzb2x1dGUgVVJMIGluIHRoZSBjb250ZXh0IG9mIHRoZSBhcHBsaWNhdGlvbiBkb2N1bWVudC5cbiAqIFBhcnNpbmcgbWVhbnMgdGhhdCB0aGUgYW5jaG9yIG5vZGUncyBob3N0LCBob3N0bmFtZSwgcHJvdG9jb2wsIHBvcnQsIHBhdGhuYW1lIGFuZCByZWxhdGVkXG4gKiBwcm9wZXJ0aWVzIGFyZSBhbGwgcG9wdWxhdGVkIHRvIHJlZmxlY3QgdGhlIG5vcm1hbGl6ZWQgVVJMLiAgVGhpcyBhcHByb2FjaCBoYXMgd2lkZVxuICogY29tcGF0aWJpbGl0eSAtIFNhZmFyaSAxKywgTW96aWxsYSAxKywgT3BlcmEgNyssZSBldGMuICBTZWVcbiAqIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBJRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBJRSA+PSA4IGFuZCA8PSAxMCBub3JtYWxpemVzIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byB0aGUgYW5jaG9yIG5vZGUgc2ltaWxhciB0byB0aGUgb3RoZXJcbiAqIGJyb3dzZXJzLiAgSG93ZXZlciwgdGhlIHBhcnNlZCBjb21wb25lbnRzIHdpbGwgbm90IGJlIHNldCBpZiB0aGUgVVJMIGFzc2lnbmVkIGRpZCBub3Qgc3BlY2lmeVxuICogdGhlbS4gIChlLmcuIGlmIHlvdSBhc3NpZ24gYS5ocmVmID0gXCJmb29cIiwgdGhlbiBhLnByb3RvY29sLCBhLmhvc3QsIGV0Yy4gd2lsbCBiZSBlbXB0eS4pICBXZVxuICogd29yayBhcm91bmQgdGhhdCBieSBwZXJmb3JtaW5nIHRoZSBwYXJzaW5nIGluIGEgMm5kIHN0ZXAgYnkgdGFraW5nIGEgcHJldmlvdXNseSBub3JtYWxpemVkXG4gKiBVUkwgKGUuZy4gYnkgYXNzaWduaW5nIHRvIGEuaHJlZikgYW5kIGFzc2lnbmluZyBpdCBhLmhyZWYgYWdhaW4uICBUaGlzIGNvcnJlY3RseSBwb3B1bGF0ZXMgdGhlXG4gKiBwcm9wZXJ0aWVzIHN1Y2ggYXMgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0LCBldGMuXG4gKlxuICogSUU3IGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gYW4gYW5jaG9yIG5vZGUuICAoQXBwYXJlbnRseSwgaXQgZG9lcywgaWYgb25lXG4gKiB1c2VzIHRoZSBpbm5lciBIVE1MIGFwcHJvYWNoIHRvIGFzc2lnbiB0aGUgVVJMIGFzIHBhcnQgb2YgYW4gSFRNTCBzbmlwcGV0IC1cbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MjcyOSkgIEhvd2V2ZXIsIHNldHRpbmcgaW1nW3NyY10gZG9lcyBub3JtYWxpemUgdGhlIFVSTC5cbiAqIFVuZm9ydHVuYXRlbHksIHNldHRpbmcgaW1nW3NyY10gdG8gc29tZXRoaW5nIGxpa2UgXCJqYXZhc2NyaXB0OmZvb1wiIG9uIElFIHRocm93cyBhbiBleGNlcHRpb24uXG4gKiBTaW5jZSB0aGUgcHJpbWFyeSB1c2FnZSBmb3Igbm9ybWFsaXppbmcgVVJMcyBpcyB0byBzYW5pdGl6ZSBzdWNoIFVSTHMsIHdlIGNhbid0IHVzZSB0aGF0XG4gKiBtZXRob2QgYW5kIElFIDwgOCBpcyB1bnN1cHBvcnRlZC5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogICBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQW5jaG9yRWxlbWVudFxuICogICBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqICAgaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8yOTAyXG4gKiAgIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9wYXJzaW5nLXVybHMtd2l0aC10aGUtZG9tL1xuICpcbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkLlxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGl6ZXMgYW5kIHBhcnNlcyBhIFVSTC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgVVJMIGFzIGEgZGljdGlvbmFyeS5cbiAqXG4gKiAgIHwgbWVtYmVyIG5hbWUgICB8IERlc2NyaXB0aW9uICAgIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGhyZWYgICAgICAgICAgfCBBIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgVVJMIGlmIGl0IHdhcyBub3QgYW4gYWJzb2x1dGUgVVJMIHxcbiAqICAgfCBwcm90b2NvbCAgICAgIHwgVGhlIHByb3RvY29sIGluY2x1ZGluZyB0aGUgdHJhaWxpbmcgY29sb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaG9zdCAgICAgICAgICB8IFRoZSBob3N0IGFuZCBwb3J0IChpZiB0aGUgcG9ydCBpcyBub24tZGVmYXVsdCkgb2YgdGhlIG5vcm1hbGl6ZWRVcmwgICAgfFxuICogICB8IHNlYXJjaCAgICAgICAgfCBUaGUgc2VhcmNoIHBhcmFtcywgbWludXMgdGhlIHF1ZXN0aW9uIG1hcmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgfCBoYXNoICAgICAgICAgIHwgVGhlIGhhc2ggc3RyaW5nLCBtaW51cyB0aGUgaGFzaCBzeW1ib2xcbiAqICAgfCBob3N0bmFtZSAgICAgIHwgVGhlIGhvc3RuYW1lXG4gKiAgIHwgcG9ydCAgICAgICAgICB8IFRoZSBwb3J0LCB3aXRob3V0IFwiOlwiXG4gKiAgIHwgcGF0aG5hbWUgICAgICB8IFRoZSBwYXRobmFtZSwgYmVnaW5uaW5nIHdpdGggXCIvXCJcbiAqXG4gKi9cblxudmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vKipcbiAqIGRvY3VtZW50TW9kZSBpcyBhbiBJRS1vbmx5IHByb3BlcnR5XG4gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvY2MxOTY5ODgodj12cy44NSkuYXNweFxuICovXG52YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZnVuY3Rpb24gdXJsUGFydHModXJsKSB7XG4gIHZhciBocmVmID0gdXJsO1xuXG4gIGlmIChtc2llKSB7XG4gICAgLy8gTm9ybWFsaXplIGJlZm9yZSBwYXJzZS4gIFJlZmVyIEltcGxlbWVudGF0aW9uIE5vdGVzIG9uIHdoeSB0aGlzIGlzXG4gICAgLy8gZG9uZSBpbiB0d28gc3RlcHMgb24gSUUuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcbiAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgfVxuXG4gIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgcmV0dXJuIHtcbiAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgcG9ydDogdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsUGFyc2luZ05vZGUucG9ydCk/IHVybFBhcnNpbmdOb2RlLnBvcnQ6IDgwLFxuICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpXG4gICAgICA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gIH07XG59XG5cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBxdWVyeSBzdHJpbmcgKHNlYXJjaCBwYXJ0IG9mIGEgdXJsKSBhbmQgcmV0dXJucyBhIGRpY3Rpb25hcnkgd2l0aFxuICogdGhlIGRpZmZlcmVudCBrZXkgdmFsdWUgcGFpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBxcyBxdWVyeVN0cmluZ1xuICovXG5mdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqKHFzLCBjb25kKSB7XG4gIHZhciBwYWlycywgcXNPYmo7XG5cbiAgY29uZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmQpPyBjb25kIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcXMgPSBxcy50cmltKCkucmVwbGFjZSgvXlxcPy8sICcnKTtcbiAgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBxc09iaiA9IHt9O1xuXG4gIHV0aWxpdGllcy5mb3JFYWNoKHBhaXJzLCBmdW5jdGlvbiAocGFpcikge1xuICAgIHZhciBrZXlWYWx1ZSwga2V5LCB2YWx1ZTtcbiAgICBpZiAocGFpciAhPT0gJycpIHtcbiAgICAgIGtleVZhbHVlID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAga2V5ID0ga2V5VmFsdWVbMF07XG4gICAgICB2YWx1ZSA9IGtleVZhbHVlWzFdO1xuICAgICAgaWYoY29uZChrZXksIHZhbHVlKSl7XG4gICAgICAgIHFzT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBxc09iajtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW4gb2JqZWN0IGFuZCBzZXJpYWxpemVzIGl0IGludG8gYSBxdWVyeSBzdHJpbmcgd2l0aG91dCB0aGUgbGVhZGluZyAnPydcbiAqIEBwYXJhbSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9ialRvUXVlcnlTdHJpbmcob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICB1dGlsaXRpZXMuZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXJsUGFydHM6IHVybFBhcnRzLFxuICBxdWVyeVN0cmluZ1RvT2JqOiBxdWVyeVN0cmluZ1RvT2JqLFxuICBvYmpUb1F1ZXJ5U3RyaW5nOiBvYmpUb1F1ZXJ5U3RyaW5nXG59O1xuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5PREVfVFlQRV9FTEVNRU5UID0gMTtcbnZhciBTTkFLRV9DQVNFX1JFR0VYUCA9IC9bQS1aXS9nO1xudmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykrJC9pO1xuLypqc2xpbnQgbWF4bGVuOiA1MDAgKi9cbnZhciBJU084MDg2X1JFR0VYUCA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtMl0pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVFxcc10oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjRcXDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvO1xuXG5cbmZ1bmN0aW9uIG5vb3AoKXsgfVxuXG5mdW5jdGlvbiBpc051bGwobykge1xuICByZXR1cm4gbyA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKG8pe1xuICByZXR1cm4gbyAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihzdHIpe1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIobnVtKXtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc09iamVjdChvYmopICYmIG9iai53aW5kb3cgPT09IG9iajtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShhcnJheSl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFycmF5ICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IHV0aWxpdGllcy5pc1dpbmRvdyhvYmopIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKG9iaikgfHwgdXRpbGl0aWVzLmlzVW5kZWZpbmVkKG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcblxuICBpZiAob2JqLm5vZGVUeXBlID09PSBOT0RFX1RZUEVfRUxFTUVOVCAmJiBsZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcob2JqKSB8fCB1dGlsaXRpZXMuaXNBcnJheShvYmopIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTm90RW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBhcnJheUxpa2VPYmpUb0FycmF5KGFyZ3MpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGtleSwgbGVuZ3RoO1xuICBpZiAob2JqKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgaGFzT3duUHJvcGVydHkgZXhpc3RzLFxuICAgICAgICAvLyBhcyBvbiBJRTggdGhlIHJlc3VsdCBvZiBxdWVyeVNlbGVjdG9yQWxsIGlzIGFuIG9iamVjdCB3aXRob3V0IGEgaGFzT3duUHJvcGVydHkgZnVuY3Rpb25cbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb3RvdHlwZScgJiYga2V5ICE9PSAnbGVuZ3RoJyAmJiBrZXkgIT09ICduYW1lJyAmJiAoIW9iai5oYXNPd25Qcm9wZXJ0eSB8fCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgdmFyIGlzUHJpbWl0aXZlID0gdHlwZW9mIG9iaiAhPT0gJ29iamVjdCc7XG4gICAgICBmb3IgKGtleSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlIHx8IGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9iai5mb3JFYWNoICYmIG9iai5mb3JFYWNoICE9PSBmb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCwgb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUsIHNlcGFyYXRvcikge1xuICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgfHwgJ18nO1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKFNOQUtFX0NBU0VfUkVHRVhQLCBmdW5jdGlvbihsZXR0ZXIsIHBvcykge1xuICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpe1xuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKGVtYWlsKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGVtYWlsLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCAob2JqKSB7XG4gIHZhciBhcmcsIGksIGs7XG4gIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrIGluIGFyZykge1xuICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBpZihpc09iamVjdChvYmpba10pICYmICFpc051bGwob2JqW2tdKSAmJiBpc09iamVjdChhcmdba10pKXtcbiAgICAgICAgICBvYmpba10gPSBleHRlbmQoe30sIG9ialtrXSwgYXJnW2tdKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIG9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpe1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRlY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3b3JrcyB0aGUgc2FtZSB3YXkgYXJyYXkucHJvdG90eXBlLm1hcCB3b3JrcyBidXQgaWYgdGhlIHRyYW5zZm9ybWVyIHJldHVybnMgdW5kZWZpbmUsIHRoZW5cbiAqIGl0IHdvbid0IGJlIGFkZGVkIHRvIHRoZSB0cmFuc2Zvcm1lZCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkoYXJyYXksIHRyYW5zZm9ybWVyKSB7XG4gIHZhciB0cmFuc2Zvcm1lZEFycmF5ID0gW107XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgdmFyIHRyYW5zZm9ybWVkSXRlbSA9IHRyYW5zZm9ybWVyKGl0ZW0sIGluZGV4KTtcbiAgICBpZih1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYW5zZm9ybWVkSXRlbSkpIHtcbiAgICAgIHRyYW5zZm9ybWVkQXJyYXkucHVzaCh0cmFuc2Zvcm1lZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvRml4ZWREaWdpdHMobnVtLCBkaWdpdHMpIHtcbiAgdmFyIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xuICBkaWdpdHMgPSB1dGlsaXRpZXMuaXNOdW1iZXIoZGlnaXRzKSA/IGRpZ2l0cyA6IDA7XG4gIG51bSA9IHV0aWxpdGllcy5pc051bWJlcihudW0pID8gbnVtIDogcGFyc2VJbnQobnVtLCAxMCk7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcihudW0pICYmICFpc05hTihudW0pKXtcbiAgICBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgICB3aGlsZShmb3JtYXR0ZWROdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICBmb3JtYXR0ZWROdW0gPSAnMCcgKyBmb3JtYXR0ZWROdW07XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWROdW07XG4gIH1cbiAgcmV0dXJuIE5hTiArICcnO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gKGRlbGF5ICsgMSk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcbiAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UgKGNhbGxiYWNrLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpe1xuICAgIGlmKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgd2FpdCk7XG4gIH07XG59XG5cbi8vIGEgZnVuY3Rpb24gZGVzaWduZWQgdG8gYmxvdyB1cCB0aGUgc3RhY2sgaW4gYSBuYWl2ZSB3YXlcbi8vIGJ1dCBpdCBpcyBvayBmb3IgdmlkZW9KcyBjaGlsZHJlbiBjb21wb25lbnRzXG5mdW5jdGlvbiB0cmVlU2VhcmNoKHJvb3QsIGdldENoaWxkcmVuLCBmb3VuZCl7XG4gIHZhciBjaGlsZHJlbiA9IGdldENoaWxkcmVuKHJvb3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICBpZiAoZm91bmQoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGVsID0gdHJlZVNlYXJjaChjaGlsZHJlbltpXSwgZ2V0Q2hpbGRyZW4sIGZvdW5kKTtcbiAgICAgIGlmIChlbCl7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZWNob0ZuKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2YWw7XG4gIH07XG59XG5cbi8vTm90ZTogU3VwcG9ydGVkIGZvcm1hdHMgY29tZSBmcm9tIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIGFuZCB0aGUgaXNvODYwMSByZWdleCBjb21lcyBmcm9tIGh0dHA6Ly93d3cucGVsYWdvZGVzaWduLmNvbS9ibG9nLzIwMDkvMDUvMjAvaXNvLTg2MDEtZGF0ZS12YWxpZGF0aW9uLXRoYXQtZG9lc250LXN1Y2svXG5mdW5jdGlvbiBpc0lTTzg2MDEodmFsdWUpIHtcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKHZhbHVlKSl7XG4gICAgdmFsdWUgPSB2YWx1ZSArICcnOyAgLy93ZSBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyB3aXRoIHN0cmluZ3NcbiAgfVxuXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcodmFsdWUpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gSVNPODA4Nl9SRUdFWFAudGVzdCh2YWx1ZS50cmltKCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgQnJvd3NlciBpcyBJRTkgYW5kIGJlbG93XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIHZlcnNpb24gPSB1dGlsaXRpZXMuZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKTtcbiAgaWYgKHZlcnNpb24gPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZlcnNpb24gPCAxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICogU291cmNlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTA5KHY9dnMuODUpLmFzcHhcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICovXG5mdW5jdGlvbiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpIHtcbiAgdmFyIHJ2ID0gLTE7XG5cbiAgaWYgKG5hdmlnYXRvci5hcHBOYW1lID09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKSB7XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KVwiKTtcbiAgICB2YXIgcmVzID0gcmUuZXhlYyh1YSk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgcnYgPSBwYXJzZUZsb2F0KHJlc1sxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ2O1xufVxuXG4vKioqIE1vYmlsZSBVdGlsaXR5IGZ1bmN0aW9ucyAqKiovXG5mdW5jdGlvbiBpc0lEZXZpY2UoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfEFuZHJvaWR8V2luZG93cyBQaG9uZS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNJUGhvbmUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxvZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgcmV0dXJuIC9BbmRyb2lkLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG52YXIgdXRpbGl0aWVzID0ge1xuICBfVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIG5vb3A6IG5vb3AsXG4gIGlzTnVsbDogaXNOdWxsLFxuICBpc0RlZmluZWQ6IGlzRGVmaW5lZCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5TGlrZTogaXNBcnJheUxpa2UsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNFbXB0eVN0cmluZzogaXNFbXB0eVN0cmluZyxcbiAgaXNOb3RFbXB0eVN0cmluZzogaXNOb3RFbXB0eVN0cmluZyxcbiAgYXJyYXlMaWtlT2JqVG9BcnJheTogYXJyYXlMaWtlT2JqVG9BcnJheSxcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgc25ha2VfY2FzZTogc25ha2VfY2FzZSxcbiAgaXNWYWxpZEVtYWlsOiBpc1ZhbGlkRW1haWwsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxuICBkZWNhcGl0YWxpemU6IGRlY2FwaXRhbGl6ZSxcbiAgdHJhbnNmb3JtQXJyYXk6IHRyYW5zZm9ybUFycmF5LFxuICB0b0ZpeGVkRGlnaXRzOiB0b0ZpeGVkRGlnaXRzLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGRlYm91bmNlOiBkZWJvdW5jZSxcbiAgdHJlZVNlYXJjaDogdHJlZVNlYXJjaCxcbiAgZWNob0ZuOiBlY2hvRm4sXG4gIGlzSVNPODYwMTogaXNJU084NjAxLFxuICBpc09sZElFOiBpc09sZElFLFxuICBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbjogZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24sXG4gIGlzSURldmljZTogaXNJRGV2aWNlLFxuICBpc01vYmlsZTogaXNNb2JpbGUsXG4gIGlzSVBob25lOiBpc0lQaG9uZSxcbiAgaXNBbmRyb2lkOiBpc0FuZHJvaWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbGl0aWVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSB7fTtcblxueG1sLnN0clRvWE1MRG9jID0gZnVuY3Rpb24gc3RyVG9YTUxEb2Moc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gIC8vSUUgOFxuICBpZih0eXBlb2Ygd2luZG93LkRPTVBhcnNlciA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciB4bWxEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XG4gICAgeG1sRG9jdW1lbnQuYXN5bmMgPSBmYWxzZTtcbiAgICB4bWxEb2N1bWVudC5sb2FkWE1MKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuICAgIHJldHVybiB4bWxEb2N1bWVudDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcblxuICBmdW5jdGlvbiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHZhciBwYXJzZWREb2N1bWVudDtcblxuICAgIC8vTm90ZTogVGhpcyB0cnkgY2F0Y2ggaXMgdG8gZGVhbCB3aXRoIHRoZSBmYWN0IHRoYXQgb24gSUUgcGFyc2VyLnBhcnNlRnJvbVN0cmluZyBkb2VzIHRocm93IGFuIGVycm9yIGJ1dCB0aGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QuXG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlLCBcImFwcGxpY2F0aW9uL3htbFwiKTtcblxuICAgICAgaWYoaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInhtbC5zdHJUb1hNTERPQzogRXJyb3IgcGFyc2luZyB0aGUgc3RyaW5nOiAnXCIgKyBzdHJpbmdDb250YWluaW5nWE1MU291cmNlICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWREb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkge1xuICAgIHRyeSB7IC8vIHBhcnNlciBhbmQgcGFyc2VyZXJyb3JOUyBjb3VsZCBiZSBjYWNoZWQgb24gc3RhcnR1cCBmb3IgZWZmaWNpZW5jeVxuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSxcbiAgICAgICAgZXJyb25lb3VzUGFyc2UgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKCdJTlZBTElEJywgJ3RleHQveG1sJyksXG4gICAgICAgIHBhcnNlcmVycm9yTlMgPSBlcnJvbmVvdXNQYXJzZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLm5hbWVzcGFjZVVSSTtcblxuICAgICAgaWYgKHBhcnNlcmVycm9yTlMgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJykge1xuICAgICAgICAvLyBJbiBQaGFudG9tSlMgdGhlIHBhcnNlZXJyb3IgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBhIHNwZWNpYWwgbmFtZXNwYWNlLCBzbyB3ZSBhcmUganVzdCBndWVzc2luZyBoZXJlIDooXG4gICAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsICdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9Ob3RlIG9uIElFIHBhcnNlU3RyaW5nIHRocm93cyBhbiBlcnJvciBieSBpdHNlbGYgYW5kIGl0IHdpbGwgbmV2ZXIgcmVhY2ggdGhpcyBjb2RlLiBCZWNhdXNlIGl0IHdpbGwgaGF2ZSBmYWlsZWQgYmVmb3JlXG4gICAgfVxuICB9XG59O1xuXG54bWwucGFyc2VUZXh0ID0gZnVuY3Rpb24gcGFyc2VUZXh0IChzVmFsdWUpIHtcbiAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gbnVsbDsgfVxuICBpZiAoL14oPzp0cnVlfGZhbHNlKSQvaS50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgfVxuICBpZiAoaXNGaW5pdGUoc1ZhbHVlKSkgeyByZXR1cm4gcGFyc2VGbG9hdChzVmFsdWUpOyB9XG4gIGlmICh1dGlsaXRpZXMuaXNJU084NjAxKHNWYWx1ZSkpIHsgcmV0dXJuIG5ldyBEYXRlKHNWYWx1ZSk7IH1cbiAgcmV0dXJuIHNWYWx1ZS50cmltKCk7XG59O1xuXG54bWwuSlhPTlRyZWUgPSBmdW5jdGlvbiBKWE9OVHJlZSAob1hNTFBhcmVudCkge1xuICB2YXIgcGFyc2VUZXh0ID0geG1sLnBhcnNlVGV4dDtcblxuICAvL1RoZSBkb2N1bWVudCBvYmplY3QgaXMgYW4gZXNwZWNpYWwgb2JqZWN0IHRoYXQgaXQgbWF5IG1pc3Mgc29tZSBmdW5jdGlvbnMgb3IgYXR0cnMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxuICAvL1RvIHByZXZlbnQgdGhpcyBwcm9ibGVtIHdpdGggY3JlYXRlIHRoZSBKWE9OVHJlZSB1c2luZyB0aGUgcm9vdCBjaGlsZE5vZGUgd2hpY2ggaXMgYSBmdWxseSBmbGVzaGVkIG5vZGUgb24gYWxsIHN1cHBvcnRlZFxuICAvL2Jyb3dzZXJzLlxuICBpZihvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCl7XG4gICAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKG9YTUxQYXJlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdmFyIHNDb2xsZWN0ZWRUeHQgPSBcIlwiO1xuICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XG4gICAgICBvTm9kZSA9IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5pdGVtKG5JdGVtKTtcbiAgICAgIC8qanNoaW50IGJpdHdpc2U6IGZhbHNlKi9cbiAgICAgIGlmICgob05vZGUubm9kZVR5cGUgLSAxIHwgMSkgPT09IDMpIHsgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9Ob2RlLm5vZGVWYWx1ZS50cmltKCkgOiBvTm9kZS5ub2RlVmFsdWU7IH1cbiAgICAgIGVsc2UgaWYgKG9Ob2RlLm5vZGVUeXBlID09PSAxICYmICFvTm9kZS5wcmVmaXgpIHtcbiAgICAgICAgc1Byb3AgPSB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9Ob2RlLm5vZGVOYW1lKTtcbiAgICAgICAgdkNvbnRlbnQgPSBuZXcgeG1sLkpYT05UcmVlKG9Ob2RlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoc1Byb3ApKSB7XG4gICAgICAgICAgaWYgKHRoaXNbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgeyB0aGlzW3NQcm9wXSA9IFt0aGlzW3NQcm9wXV07IH1cbiAgICAgICAgICB0aGlzW3NQcm9wXS5wdXNoKHZDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHsgdGhpc1tzUHJvcF0gPSB2Q29udGVudDsgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc0NvbGxlY3RlZFR4dCkgeyB0aGlzLmtleVZhbHVlID0gcGFyc2VUZXh0KHNDb2xsZWN0ZWRUeHQpOyB9XG4gIH1cblxuICAvL0lFOCBTdHVwaWQgZml4XG4gIHZhciBoYXNBdHRyID0gdHlwZW9mIG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCc/IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGggPiAwOiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMoKTtcbiAgaWYgKGhhc0F0dHIpIHtcbiAgICB2YXIgb0F0dHJpYjtcbiAgICBmb3IgKHZhciBuQXR0cmliID0gMDsgbkF0dHJpYiA8IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGg7IG5BdHRyaWIrKykge1xuICAgICAgb0F0dHJpYiA9IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5pdGVtKG5BdHRyaWIpO1xuICAgICAgdGhpc1tcIkBcIiArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUob0F0dHJpYi5uYW1lKV0gPSBwYXJzZVRleHQob0F0dHJpYi52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufTtcblxueG1sLkpYT05UcmVlLnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICByZXR1cm4gdGhpc1snQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbn07XG5cbnhtbC50b0pYT05UcmVlID0gZnVuY3Rpb24gdG9KWE9OVHJlZSh4bWxTdHJpbmcpe1xuICB2YXIgeG1sRG9jID0geG1sLnN0clRvWE1MRG9jKHhtbFN0cmluZyk7XG4gIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKHhtbERvYyk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBleHRyYWN0IHRoZSBrZXl2YWx1ZSBvZiBhIEpYT05UcmVlIG9ialxuICpcbiAqIEBwYXJhbSB4bWxPYmoge0pYT05UcmVlfVxuICogcmV0dXJuIHRoZSBrZXkgdmFsdWUgb3IgdW5kZWZpbmVkO1xuICovXG54bWwua2V5VmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlWYWx1ZSh4bWxPYmopIHtcbiAgaWYoeG1sT2JqKXtcbiAgICByZXR1cm4geG1sT2JqLmtleVZhbHVlO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuYXR0ciA9IGZ1bmN0aW9uIGdldEF0dHJWYWx1ZSh4bWxPYmosIGF0dHIpIHtcbiAgaWYoeG1sT2JqKSB7XG4gICAgcmV0dXJuIHhtbE9ialsnQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZVhNTChzdHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XG59O1xuXG54bWwuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlWE1MKHN0cikge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB4bWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzUnKTtcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUnKTtcblxudmFyIHZpZGVvSnNWQVNUID0gcmVxdWlyZSgnLi9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkJyk7XG52YXIgcmVnaXN0ZXJQbHVnaW4gPSB2aWRlb2pzLnJlZ2lzdGVyUGx1Z2luIHx8IHZpZGVvanMucGx1Z2luO1xuXG5yZWdpc3RlclBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcblxuIl19
