module pool {
	export class FootBall extends egret.HashObject implements IBall{
		private _isIdel: boolean = true;
		private _type:number = BallType.foot;
		private _dis:IDistributor;

		private _message: string = "";
		public constructor() {
			super();
		}

		public reset(): void{
			this._isIdel = false;
			this._dis.distribution(this);
			this._message = "这是一个足球";
		}

		public dispose(): void{
			this._isIdel = true;
			this._dis.distribution(this);
		}

		public del(): void{
			this.dispose();
			this._dis = null;
		}

		public setProtocol(val: IDistributor): void{
			this._dis = val;
		}

		public get type():number{
			return this._type;
		}

		public get hashc(): number{
			return this.hashCode;
		}

		public get isIdle(): boolean{
			return this._isIdel;
		}

		public action(): void{
			console.log(this._message);
		}
	}
}