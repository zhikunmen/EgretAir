var pool;
(function (pool) {
    (function (BallType) {
        /**足球 */
        BallType[BallType["foot"] = 1] = "foot";
        /**篮球 */
        BallType[BallType["basket"] = 2] = "basket";
        /**棒球 */
        BallType[BallType["base"] = 3] = "base";
    })(pool.BallType || (pool.BallType = {}));
    var BallType = pool.BallType;
})(pool || (pool = {}));
//# sourceMappingURL=IBall.js.map