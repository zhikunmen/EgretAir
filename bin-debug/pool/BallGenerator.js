var pool;
(function (pool) {
    /**生成器类 */
    var BallGenerator = (function () {
        function BallGenerator(val) {
            this._dis = null;
            this.init(val);
        }
        var d = __define,c=BallGenerator,p=c.prototype;
        p.init = function (val) {
            this._dis = val;
        };
        p.getBall = function (type) {
            var vo = this._dis.getVo(type);
            if (vo == null) {
                //创建一个对象
                vo = this.createVo(type);
                this._dis.addVo(vo);
                vo.reset();
            }
            return vo;
        };
        p.createVo = function (type) {
            switch (type) {
                case pool.BallType.base:
                    return new pool.BaseBall();
                case pool.BallType.basket:
                    return new pool.BasketBall();
                case pool.BallType.foot:
                    return new pool.FootBall();
            }
        };
        return BallGenerator;
    }());
    pool.BallGenerator = BallGenerator;
    egret.registerClass(BallGenerator,'pool.BallGenerator');
})(pool || (pool = {}));
//# sourceMappingURL=BallGenerator.js.map