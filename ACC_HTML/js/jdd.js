//点击高级搜索部分
	$('.senior_search').on('click',function(){
		$('.senior_search_content').show();

	})
	$('.btn-default').on('click',function(){
		$('.senior_search_content').hide();

	})
//点击开始播放
$(".play_cen").hover(
  function () {
    $(this).addClass("fa_color");
  },
  function () {
    $(this).removeClass("fa_color");
  }
);
//左侧的tab切换及高级搜索
$('.nav-tabs-if li').on('click',function(){
	if($(this).hasClass('active')){
		$('.senior_search_content').show();
	}else{
		$('.senior_search_content').hide();
	}

})


$('#Popup').on('click',function(){	
	//iframe窗
	window.layer.open({
	   type: 2,
	    title: false,
	  /*	closeBtn: true,	*/
	    shadeClose: true,
	    shade: true,
	    maxmin: true, //开启最大化最小化按钮
	    shade: [0],
	    area: ['1000px', '100%'],
	//  time: 3000, //2秒后自动关闭*/
	    shift: 2,
	    content: ['Popup.html', 'no'], //iframe的url，no代表不显示滚动条  
	    btn:['确定','取消']     
	});

})