module pool {
	export interface IDistributor{
		/**分配 */
		distribution(val: IBall): void;
		/**添加元素 */
		addVo(val: IBall):void;
		/**获取元素 */
		getVo(type: number): IBall;
		/**清除所有未使用的对象 */
		clear(): void;
	}
}