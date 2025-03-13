var glboldata=[];
var mb;

function opnemm(html,id){
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
  	
function alertgl(){
	$('#valert').show();
}


function alertqx(){
	$('#valert').hide();
}