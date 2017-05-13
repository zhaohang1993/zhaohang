var ACC_AjaxRequest = function(options, callback){
	
	var url = ACC_ + "/disparcha";
	
	//request parameters example
	var paramData = {};
	
	var settings =	{
						async: true, // 同步请求 false，异步请求 true
						type: "POST", // 请求类型，POST、GET
						url: "", // 请求的地址
						timeout: 90, // 请求超时时长
						data: {}, // 传递给后台的参数值及值
						dataType: "json", // xml - xml文档、html - html内容、script - js代码、json - json数据、jsonp - 、text - 纯文本字符串
						global: false, // 是否触发全局ajax事件，如 ajaxStart、ajaxStop 等
						processData: true, // 是否禁止转换 data 参数的数据，默认是转换，如无需转换，设置为 false
						showTipMsg: true, // 是否显示提示信息，默认显示
						callbackFunc: callback, // 回调函数
						complete: function(XMLHttpRequest, textStatus){
							// 请求完成后调用
							
						},
						statusCode: {
							404: function(){
									console.log("请求的地址不存在。");
									if(this.showTipMsg){
										// 显示提示信息
										
									}
								 },
							500: function(){
									console.log("服务器错误。");
									if(this.showTipMsg){
										// 显示提示信息
										
									}
								 }
						},
						error: function(XMLHttpRequest,textStatus,errorThrown){
							// 处理请求发生异常
							console.log("请求发生异常！");
							if(this.showTipMsg){
								// 显示提示信息
								
							}
							
						},
						success: function(responseData, textStatus, ){
							if(this.showTipMsg){
								// 显示提示信息
								if(this.dataType=="json"){
									
								}
								
							}
							
							// 执行成功后调用
							if(typeof(this.callbackFunc)=="function"){
								// 是否有回调函数，回调函数的参数必须是请求的返回值
								this.callbackFunc(responseData);
							}
							
						}
						
						
					};
	
	$.extend(settings, options);
	
	$.ajax(settings);
	
}