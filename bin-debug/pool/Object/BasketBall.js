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
    var BasketBall = (function (_super) {
        __extends(BasketBall, _super);
        function BasketBall() {
            var _this = _super.call(this) || this;
            _this._isIdel = true;
            _this._type = pool.BallType.basket;
            _this._message = "";
            return _this;
        }
        BasketBall.prototype.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个篮球";
        };
        BasketBall.prototype.dispose = function () {
            this._isIdel = true;
            this._dis.distribution(this);
        };
        BasketBall.prototype.del = function () {
            this.dispose();
            this._dis = null;
        };
        BasketBall.prototype.setProtocol = function (val) {
            this._dis = val;
        };
        Object.defineProperty(BasketBall.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasketBall.prototype, "hashc", {
            get: function () {
                return this.hashCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasketBall.prototype, "isIdle", {
            get: function () {
                return this._isIdel;
            },
            enumerable: true,
            configurable: true
        });
        BasketBall.prototype.action = function () {
            console.log(this._message);
        };
        return BasketBall;
    }(egret.HashObject));
    pool.BasketBall = BasketBall;
    __reflect(BasketBall.prototype, "pool.BasketBall", ["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=BasketBall.js.map