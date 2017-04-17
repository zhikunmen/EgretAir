var pool;
(function (pool) {
    var BasketBall = (function (_super) {
        __extends(BasketBall, _super);
        function BasketBall() {
            _super.call(this);
            this._isIdel = true;
            this._type = pool.BallType.basket;
            this._message = "";
        }
        var d = __define,c=BasketBall,p=c.prototype;
        p.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个篮球";
        };
        p.dispose = function () {
            this._isIdel = true;
            this._dis.distribution(this);
        };
        p.del = function () {
            this.dispose();
            this._dis = null;
        };
        p.setProtocol = function (val) {
            this._dis = val;
        };
        d(p, "type"
            ,function () {
                return this._type;
            }
        );
        d(p, "hashc"
            ,function () {
                return this.hashCode;
            }
        );
        d(p, "isIdle"
            ,function () {
                return this._isIdel;
            }
        );
        p.action = function () {
            console.log(this._message);
        };
        return BasketBall;
    }(egret.HashObject));
    pool.BasketBall = BasketBall;
    egret.registerClass(BasketBall,'pool.BasketBall',["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=BasketBall.js.map