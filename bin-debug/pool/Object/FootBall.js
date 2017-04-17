var pool;
(function (pool) {
    var FootBall = (function (_super) {
        __extends(FootBall, _super);
        function FootBall() {
            _super.call(this);
            this._isIdel = true;
            this._type = pool.BallType.foot;
            this._message = "";
        }
        var d = __define,c=FootBall,p=c.prototype;
        p.reset = function () {
            this._isIdel = false;
            this._dis.distribution(this);
            this._message = "这是一个足球";
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
        return FootBall;
    }(egret.HashObject));
    pool.FootBall = FootBall;
    egret.registerClass(FootBall,'pool.FootBall',["pool.IBall"]);
})(pool || (pool = {}));
//# sourceMappingURL=FootBall.js.map