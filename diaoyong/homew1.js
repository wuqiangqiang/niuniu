var glboldataxx=[];
// var mb;

function opnemm(html,id){
  if(!glboldataxx[id+html]){
  	$.get('/index.php/portal/index/'+html+'/room/'+room,function(data){
  		//mb=html;
  		glboldataxx[id+html]=data;
  		$('#'+id).html(data);
  		$('#'+id).show();
  	})
  }
  else{
  	if(id!='message'){
    	$('#'+id).html(glboldataxx[id+html]);
	}

    $('#'+id).show();
  }
}


function selectChange(type,id,index){
	glboldataxx[mb][type]=index;
	$('.'+type).find('img').hide();
	$('#'+id).find('img').show();
}

function selectChanges(type,id,index){
	glboldataxx[mb][type]=index;
	if($('#'+id).children('img').css('display') == 'block'){
		 $('#'+id).children('img').hide();
	}else{
		$('#'+id).children('img').show();
	}
}
function zhengzkf(){
	alert('敬请期待');
}
function cancelCreate(){
	$('#room').hide();
}

// 选择房间
function selectBankerMode(index,id){
	glboldataxx[mb][index]=index;
	$(".bankerUnSelected").find('img').attr('src','./img/banker_unselected.png')
	$('.selectPart').eq(2).hide();
	$('.selectPart').eq(6).hide();
	$('.selectPart').eq(1).show();

	if(index == 1){
		$('#'+id).find('img').attr('src','./img/banker_selected.png')
	}
	if(index == 2){
		$('#'+id).find('img').attr('src','./img/banker_selected.png')
		$('.selectPart').eq(6).show();
	}
	if(index == 3){
		$('#'+id).find('img').attr('src','./img/banker_selected.png')
	}
	if(index == 4){
		$('#'+id).find('img').attr('src','./img/banker_selected.png')
	}
	if(index == 5){
		$('#'+id).find('img').attr('src','./img/banker_selected.png')
		$('.selectPart').eq(2).show();
		$('.selectPart').eq(1).hide();
	}
}


function shoujibd(){
	$('#validePhone').show();
}
function alertgl(){
	$('#valert').show();
}
function alertqx(){
	$('#valert').hide();
}
//功能管理  页面
function guanlign(){
	window.location.href='../gongnsm.html';
}


//个人中心    积分   
$(function(){

	$('.daoluan').on('click',function(){
			$('.gameListItem').css('z-index','99');
			$(this).siblings().css('z-index','9999');
	})

	$('.phoneMask').on('click',function(){
		$('#validePhone').hide();
	})

})
// 红包旋转功能
	function xuanzhuan(){
		
			$('.btnOpen').find('img').addClass('transf')
	
			setTimeout(function() {
				
			$('#ropen').show();

			}, 1000);
	}


// 公共弹框
function public(data){
	$('#'+data).hide();
}
// 快捷语音
function sendmsg(msg,id) {
   send('sendmsg',{msg:msg,id:id});
   $('#message').hide();
}
    


var ji;
function djs(sj){
   clearTimeout(ji);
	 var now=sj-Math.ceil(new Date()/1000)-(0-timewc)-1;
	 if(now>0){
    // if(now<=3){
    //   mp3play('mp3daojishi');
    // }
	 	ji=setTimeout('djs('+sj+')',1000);
	 	$('.clock').show();
    $('#divRobBankerText').show();
	 	$('#djs').text(now);
	 }
	 else{
	 	cleardjs();
	 }
}
function cleardjs(){
	clearTimeout(ji);
	$('.clock').hide()
	$('#divRobBankerText').hide();
	$('.gongg').hide();
}

