var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pool;
(function (pool) {
    var BaseBall = (function (_super) {
        __extends(BaseBall, _super);
        function BaseBall() {
            var _this = _super.call(this) || this;
            _this._isIdel = true;
            _this._type = pool.BallType.base;
            _this._message = "";
            return _this;
        }
        BaseBall.prototype.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个棒球";
        };
        BaseBall.prototype.dispose = function () {
            this._isIdel = true;
            this._dis.distribution(this);
        };
        BaseBall.prototype.del = function () {
            this.dispose();
            this._dis = null;
        };
        BaseBall.prototype.setProtocol = function (val) {
            this._dis = val;
        };
        Object.defineProperty(BaseBall.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseBall.prototype, "hashc", {
            get: function () {
                return this.hashCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseBall.prototype, "isIdle", {
            get: function () {
                return this._isIdel;
            },
            enumerable: true,
            configurable: true
        });
        BaseBall.prototype.action = function () {
            console.log(this._message);
        };
        return BaseBall;
    }(egret.HashObject));
    pool.BaseBall = BaseBall;
    __reflect(BaseBall.prototype, "pool.BaseBall", ["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=BaseBall.js.map