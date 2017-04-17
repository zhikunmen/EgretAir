module pool {
	export class Distributor implements IDistributor{
		/**使用中的对象 */
		private _usedPool: Object = null;
		private _idlePool: Object = null;

		public constructor() {
			this._usedPool = {};
			this._idlePool = {};
		}

		public distribution(val: IBall):void{
			if(val.isIdle){
				this._idlePool[val.hashc] = val;
				delete this._usedPool[val.hashc];
			}else{
				this._usedPool[val.hashc] = val;
				delete this._idlePool[val.hashc];
			}
		}

		public addVo(val: IBall){
			val.setProtocol(this);
			if(val.isIdle){
				this._idlePool[val.hashc] = val;
			}else{
				this._usedPool[val.hashc] = val;
			}
		}

		public getVo(type: number):IBall{
			let obj:IBall = null;
			for(let key in this._idlePool){
				obj = this._idlePool[key] as IBall;
				if(obj.type == type){
					obj.reset();
					return obj;
				}
			}
			return null;
		}

		public clear(): void{
			let obj:IBall = null;
			for(let key in this._idlePool){
				obj = this._idlePool[key] as IBall;
				obj.del();
			}
			this._idlePool = null;
			this._idlePool = {};
		}
	}
}