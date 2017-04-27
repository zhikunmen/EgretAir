var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pool;
(function (pool) {
    var Distributor = (function () {
        function Distributor() {
            /**使用中的对象 */
            this._usedPool = null;
            this._idlePool = null;
            this._usedPool = {};
            this._idlePool = {};
        }
        Distributor.prototype.distribution = function (val) {
            if (val.isIdle) {
                this._idlePool[val.hashc] = val;
                delete this._usedPool[val.hashc];
            }
            else {
                this._usedPool[val.hashc] = val;
                delete this._idlePool[val.hashc];
            }
        };
        Distributor.prototype.addVo = function (val) {
            val.setProtocol(this);
            if (val.isIdle) {
                this._idlePool[val.hashc] = val;
            }
            else {
                this._usedPool[val.hashc] = val;
            }
        };
        Distributor.prototype.getVo = function (type) {
            var obj = null;
            for (var key in this._idlePool) {
                obj = this._idlePool[key];
                if (obj.type == type) {
                    obj.reset();
                    return obj;
                }
            }
            return null;
        };
        Distributor.prototype.clear = function () {
            var obj = null;
            for (var key in this._idlePool) {
                obj = this._idlePool[key];
                obj.del();
            }
            this._idlePool = null;
            this._idlePool = {};
        };
        return Distributor;
    }());
    pool.Distributor = Distributor;
    __reflect(Distributor.prototype, "pool.Distributor", ["pool.IDistributor"]);
})(pool || (pool = {}));
//# sourceMappingURL=Distributor.js.map