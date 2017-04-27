var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pool;
(function (pool) {
    /**生成器类 */
    var BallGenerator = (function () {
        function BallGenerator(val) {
            this._dis = null;
            this.init(val);
        }
        BallGenerator.prototype.init = function (val) {
            this._dis = val;
        };
        BallGenerator.prototype.getBall = function (type) {
            var vo = this._dis.getVo(type);
            if (vo == null) {
                //创建一个对象
                vo = this.createVo(type);
                this._dis.addVo(vo);
                vo.reset();
            }
            return vo;
        };
        BallGenerator.prototype.createVo = function (type) {
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
    __reflect(BallGenerator.prototype, "pool.BallGenerator");
})(pool || (pool = {}));
//# sourceMappingURL=BallGenerator.js.map