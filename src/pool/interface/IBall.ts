module pool {
	export enum BallType
	{
		/**足球 */
		foot = 1,
		/**篮球 */
		basket = 2,
		/**棒球 */
		base = 3,
	}

	export interface IBall{
		/**hashCode */
		hashc:number;
		/**类型 */
		type: number;
		/**是否使用 */
		isIdle: boolean;
		/**释放对象内部引用 */
		dispose(): void;
		/**彻底释放对象 */
		del(): void;
		/**重置 */
		reset(): void;
		/**设置协议 */
		setProtocol(val:IDistributor): void;
		/**动作 */
		action(): void;
	}
}