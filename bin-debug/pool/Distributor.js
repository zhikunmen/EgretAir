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
        var d = __define,c=Distributor,p=c.prototype;
        p.distribution = function (val) {
            if (val.isIdle) {
                this._idlePool[val.hashc] = val;
                delete this._usedPool[val.hashc];
            }
            else {
                this._usedPool[val.hashc] = val;
                delete this._idlePool[val.hashc];
            }
        };
        p.addVo = function (val) {
            val.setProtocol(this);
            if (val.isIdle) {
                this._idlePool[val.hashc] = val;
            }
            else {
                this._usedPool[val.hashc] = val;
            }
        };
        p.getVo = function (type) {
            var obj = null;
            for (var key in this._idlePool) {
                obj = this._idlePool[key];
                if (obj.type == type) {
                    obj.reset();
                    return obj;
                }
            }
        };
        p.clear = function () {
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
    egret.registerClass(Distributor,'pool.Distributor',["pool.IDistributor"]);
})(pool || (pool = {}));
//# sourceMappingURL=Distributor.js.map