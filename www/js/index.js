var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
//     alert(1)
		/**
		 * 1、获取DOM节点
		 * 
		 */
		var appTest = document.getElementById("appTest");
		var box = document.getElementById("box");
		var btn = document.getElementById("btn");
		var btn1 = document.getElementById("btn1");
		var btn2 = document.getElementById("btn2");
		btn.onclick = function(){
			//类似于android+js合作中的  window.WebViewFn.getPicture()
			//异步回调，onSuccess表示成功的回调，onFail表示失败的回调
			navigator.camera.getPicture(onSuccess, onFail,
				{ 
					quality : 100,
				    destinationType: Camera.DestinationType.FILE_URI,
				    sourceType: Camera.PictureSourceType.CAMERA,
				    correctOrientation: true,
				     cameraDirection: 0//摄像头后置
//				    cameraDirection: 1//前置摄像头
				});

		}
		btn1.onclick = function(){
			//类似于android+js合作中的  window.WebViewFn.getPicture()
			//异步回调，onSuccess表示成功的回调，onFail表示失败的回调
			navigator.camera.getPicture(onSuccess, onFail,
				{ 
				    destinationType: Camera.DestinationType.FILE_URI,//Uri  拍照结束可以直接使用地址
				    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,//相册中选取照片
				    correctOrientation: true
				   
				});

		}
		
		function onSuccess(data){
//			alert("success:"+data)
			box.style.backgroundImage = "url("+data+")";
			box.style.backgroundSize = "cover";
		}
		
		function onFail(err){
			alert("err:"+err)
		}
		
		
		btn2.onclick = function(){
			var state = checkConn ();
		
			if(state !== 'WiFi connection'){
				appTest.innerHTML = "必须在wifi下使用此APP"
			}
			
//			alert('Connection type: ' + states[networkState]);

		}
		
		function checkConn (){
			var networkState = navigator.network.connection.type; 
			var states = {}; 
			states[Connection.UNKNOWN]  = 'Unknown connection'; 
			states[Connection.ETHERNET] = 'Ethernet connection'; 
			states[Connection.WIFI]     = 'WiFi connection'; 
			states[Connection.CELL_2G]  = 'Cell 2G connection'; 
			states[Connection.CELL_3G]  = 'Cell 3G connection'; 
			states[Connection.CELL_4G]  = 'Cell 4G connection'; 
			states[Connection.NONE]     = 'No network connection'; 
			return states[networkState];
		}
    }
};
