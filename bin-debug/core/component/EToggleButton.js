/**
  * 图片button类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  * todo:九宫格、多动画、图字等
  */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EToggleButton = (function (_super) {
    __extends(EToggleButton, _super);
    /**
    * context             上下文环境
    * imgNormalName       图片
    * imgSelectName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStr       按钮描述
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function EToggleButton(context, imgNormalName, imgSelectName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        _this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        _this.isPlayCartoon = false;
        _this.cartoonType = 1;
        _this.isSelected = false;
        _this.imgNormalName = "";
        _this.imgSelectName = "";
        _this.param = { context: null, data: null }; //回调参数
        _this.param.context = context;
        _this.imgNormalName = imgNormalName;
        _this.imgSelectName = imgSelectName;
        _this.init(backFun, descStr, fontSize, cartoonType, assetsName);
        return _this;
    }
    EToggleButton.prototype.init = function (backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.btnImg = new egret.Bitmap();
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        this.btnImg.texture = this.assets.getTexture(this.imgNormalName);
        this.addChild(this.btnImg);
        if (descStr != "") {
            this.textField = new egret.TextField();
            this.addChild(this.textField);
            this.textField.size = fontSize;
            this.textField.textAlign = "center";
            this.textField.bold = true;
            this.textField.stroke = 1;
            this.textField.strokeColor = 0x665249;
            this.textField.textColor = 0xbdb2aa;
            this.textField.text = descStr;
            this.textField.width = this.btnImg.width;
            this.textField.x = this.btnImg.width / 2 - this.textField.width / 2;
            this.textField.y = this.btnImg.height / 2 - this.textField.height / 2;
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    };
    EToggleButton.prototype.onbuttonTouchTap = function (e) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2 = function () {
            this.isPlayCartoon = false;
        };
        var onComplete1 = function () {
            if (this.isSelected) {
                this.btnImg.texture = this.assets.getTexture(this.imgNormalName);
            }
            else {
                this.btnImg.texture = this.assets.getTexture(this.imgSelectName);
            }
            this.isSelected = !this.isSelected;
            if (this.cartoonType == 1) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 500, egret.Ease.elasticOut).call(onComplete2, this);
            }
            else if (this.cartoonType == 2) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 500, egret.Ease.backOut).call(onComplete2, this);
            }
            else if (this.cartoonType == 3) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 100).call(onComplete2, this);
            }
        };
        egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5, x: this.x + this.btnImg.width / 4, y: this.y + this.btnImg.height / 4 }, 100, egret.Ease.sineIn).call(onComplete1, this);
        egret.setTimeout(function () {
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        }, this, 200);
    };
    EToggleButton.prototype.getBitmap = function () {
        return this.btnImg;
    };
    //设置绑定数据
    EToggleButton.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    EToggleButton.prototype.getBindData = function () {
        return this.param.data;
    };
    //获取是否选择
    EToggleButton.prototype.getSelected = function () {
        return this.isSelected;
    };
    //设置按钮是否可用
    EToggleButton.prototype.setEnable = function (bool) {
        this.touchEnabled = bool;
    };
    //设置是否选择
    EToggleButton.prototype.setSelected = function (bool) {
        this.isSelected = bool;
        if (bool) {
            this.btnImg.texture = this.assets.getTexture(this.imgSelectName);
        }
        else {
            this.btnImg.texture = this.assets.getTexture(this.imgNormalName);
        }
    };
    return EToggleButton;
}(egret.DisplayObjectContainer));
__reflect(EToggleButton.prototype, "EToggleButton");
//# sourceMappingURL=EToggleButton.js.map