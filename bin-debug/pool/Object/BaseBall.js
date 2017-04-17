var pool;
(function (pool) {
    var BaseBall = (function (_super) {
        __extends(BaseBall, _super);
        function BaseBall() {
            _super.call(this);
            this._isIdel = true;
            this._type = pool.BallType.base;
            this._message = "";
        }
        var d = __define,c=BaseBall,p=c.prototype;
        p.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个棒球";
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
        return BaseBall;
    }(egret.HashObject));
    pool.BaseBall = BaseBall;
    egret.registerClass(BaseBall,'pool.BaseBall',["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=BaseBall.js.map