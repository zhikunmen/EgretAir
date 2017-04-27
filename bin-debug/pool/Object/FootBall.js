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
    var FootBall = (function (_super) {
        __extends(FootBall, _super);
        function FootBall() {
            var _this = _super.call(this) || this;
            _this._isIdel = true;
            _this._type = pool.BallType.foot;
            _this._message = "";
            return _this;
        }
        FootBall.prototype.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个足球";
        };
        FootBall.prototype.dispose = function () {
            this._isIdel = true;
            this._dis.distribution(this);
        };
        FootBall.prototype.del = function () {
            this.dispose();
            this._dis = null;
        };
        FootBall.prototype.setProtocol = function (val) {
            this._dis = val;
        };
        Object.defineProperty(FootBall.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FootBall.prototype, "hashc", {
            get: function () {
                return this.hashCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FootBall.prototype, "isIdle", {
            get: function () {
                return this._isIdel;
            },
            enumerable: true,
            configurable: true
        });
        FootBall.prototype.action = function () {
            console.log(this._message);
        };
        return FootBall;
    }(egret.HashObject));
    pool.FootBall = FootBall;
    __reflect(FootBall.prototype, "pool.FootBall", ["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=FootBall.js.map