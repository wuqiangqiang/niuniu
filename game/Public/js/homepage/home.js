var glboldata=[];
var mb;

function opnemm(html,id){
  console.log(111)
	$.get(html+'.html',function(data){
		mb=html;
		if(!glboldata[html]){
			glboldata[html]=[];
		}
		$('#'+id).html(data);
		$('#'+id).show();
	})

}


function selectChange(type,id,index){
	glboldata[mb][type]=index;
	$('.'+type).find('img').hide();
	$('#'+id).find('img').show();
}

function selectChanges(type,id,index){
	glboldata[mb][type]=index;
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
	glboldata[mb][index]=index;
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
function alertqx_no(){
  $('#valert_no').hide();
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
      showlist($(this).attr('data-id'));
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





function tipxx(msg){
  $('#tipmsg').html(msg);
  $('#valert2').show();
}

function guanli(){
      alertqx();
      $.post("/index.php/portal/home/ktguanli",{zt:1},function(result){
        if(result.status=='1'){
            $('.groupMenuDetail').show();
            $('.grzxgl2').show();
            $('.grzxgl3').hide();
            tipxx('开通成功');
            window.setTimeout("location.href ='/index.php/portal/user/index'",1000);
        }
        else{
          tipxx(result.info);
        }
      },'json');
}

function guanli_no(){
      alertqx();
      $.post("/index.php/portal/home/gbguanli",{zt:1},function(result){
        if(result.status=='1'){
            $('.groupMenuDetail').hide();
            $('.grzxgl2').hide();
            $('.grzxgl3').show();
            tipxx('关闭成功');
            window.setTimeout("location.href ='/index.php/portal/user/index'",1000);
        }
        else{
          tipxx(result.info);
        }
      },'json');
}

function chenggong(){
  $('#fasongfk').hide();
}
function fasongfk(index){
   if(index == 1){
      $('#qh1').show();
      $('#qh2').hide();
      $('#selectTab').css('left','14%');
      $('#outRP').css('color','#fff');
      $('#reveiveRP').css('color','#000')
   }else{
      $('#qh1').hide();
      $('#qh2').show();
      $('#selectTab').css('left','51%');
      $('#reveiveRP').css('color','#fff');
      $('#outRP').css('color','#000')
   }
}