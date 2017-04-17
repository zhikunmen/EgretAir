module pool {
	/**生成器类 */
	export class BallGenerator {
		private _dis: IDistributor = null;
		public constructor(val: IDistributor) {
			this.init(val);
		}

		private init(val: IDistributor): void{
			this._dis = val;
		}

		public getBall(type: number){
			let vo:IBall = this._dis.getVo(type);
			if(vo == null){
				//创建一个对象
				vo = this.createVo(type);
				this._dis.addVo(vo);
				vo.reset();
			}
			return vo;
		}

		private createVo(type: number): IBall{
			switch(type){
				case BallType.base:
					return new BaseBall();
				case BallType.basket:
					return new BasketBall();
				case BallType.foot:
					return new FootBall();
			}
		}
	}
}