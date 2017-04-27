
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"bin-debug/core/views/BasePanel.js",
	"bin-debug/core/utils/NativeApi.js",
	"bin-debug/componentExt/ShareIconPanel.js",
	"bin-debug/componentExt/WaitPanel.js",
	"bin-debug/core/component/AlertPanel.js",
	"bin-debug/core/component/EButton.js",
	"bin-debug/core/component/ETabBar.js",
	"bin-debug/core/component/ETextField.js",
	"bin-debug/core/component/EToggleButton.js",
	"bin-debug/core/component/EToggleSwitch.js",
	"bin-debug/core/component/ShareIconRender.js",
	"bin-debug/core/component/TipsManager.js",
	"bin-debug/core/component/TipsPanel.js",
	"bin-debug/core/config/GameConfig.js",
	"bin-debug/core/data/GlobalData.js",
	"bin-debug/core/data/PropertiesAnalyzer.js",
	"bin-debug/core/net/Network.js",
	"bin-debug/core/net/SocketManager.js",
	"bin-debug/core/notification/MainNotify.js",
	"bin-debug/core/utils/EffectUtils.js",
	"bin-debug/core/utils/Global.js",
	"bin-debug/core/utils/md5.js",
	"bin-debug/componentExt/LoadingPanel.js",
	"bin-debug/core/utils/RegUtils.js",
	"bin-debug/core/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/core/utils/UtilsClass/LEvent.js",
	"bin-debug/core/utils/UtilsClass/LListener.js",
	"bin-debug/core/utils/UtilsClass/TipsUtils.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/core/views/GameScene.js",
	"bin-debug/core/views/PanelManager.js",
	"bin-debug/core/views/PopUpManager.js",
	"bin-debug/Main.js",
	"bin-debug/pool/BallGenerator.js",
	"bin-debug/pool/Distributor.js",
	"bin-debug/pool/interface/IBall.js",
	"bin-debug/pool/interface/IDistributor.js",
	"bin-debug/pool/Object/BaseBall.js",
	"bin-debug/pool/Object/BasketBall.js",
	"bin-debug/pool/Object/FootBall.js",
	"bin-debug/view/GameOverPanel.js",
	"bin-debug/view/GamePanel.js",
	"bin-debug/view/SharePanel.js",
	"bin-debug/view/StartPanel.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};