var ji;
var data;
var html;
var html1;
var html2;
function readGo(){
	var html='<img src="img/ddz/ready.png" style="height: 3.5vh;" />'
	$('.buttonType3').html(html);

	Allreda()
}

function Allreda(){
	$('.cardsNum .text').html('17');
	var time=Math.ceil(new Date()/1000)+20;
	$('.landlordsPart').show();
	djs({sj:time,id1:'buqiang',id2:'qiang',bt1:'button7',bt2:'button3'})
	
	fapai()
}



function djs(data){
	 var sj=data.sj;
	 var now=sj-Math.ceil(new Date()/1000);
	 if(now>0){
	 	ji=setTimeout('djs('+JSON.stringify(data)+')',1000);
	 	$('.buttonType3').html('');
	 	$('.buttonParts .clock').show().html(now)
	 	html = 	'<img src="img/ddz/'+data.bt1+'.png" />'
	 	html1 = '<img src="img/ddz/'+data.bt2+'.png" />'
	 	html2 = '<img src="img/ddz/'+data.bt3+'.png" />'
	 	$('#'+data.id1+'').html(html);
	 	$('#'+data.id2+'').html(html1);
	 	$('#'+data.id3+'').html(html2);
	 }
	 else{
	 	cleardjs();
	 }
}

function cleardjs(){
	clearTimeout(ji);
	$('.buttonParts .clock').hide()
}




function buqiang(){
	cleardjs();
	$('#buqiang').html('');
	$('#qiang').html('');
}

function qiang(){
	cleardjs();
	var time=Math.ceil(new Date()/1000)+10;
	$('.operatePart').show();
	djs({sj:time,id1:'chupai1',bt1:'button6',})
	$('#buqiang').html('');
	$('#qiang').html('');
	
}
	






function fapai(){
	$('#myCards').show();
   for(let i=0;i<=7;i++){
   	setTimeout(function(){
   		 html="<div data-num="+i+" class='cardItem myCard notSelect  myCard66 pai"+i+"' ontouchmove=clickCar1() index="+i+"  ontouchmove=clickCar("+i+")  style='z-index:'"+i+"';'>"
   		 html+="<div class='notChoose'></div></div>"
    	$('#pai1').append(html);
   	},0+100*i)
  
   }
   for(var i=7;i<=16;i++){
   	setTimeout(function(){
   html="<div data-num="+i+" class='cardItem myCard notSelect myCard50 pai"+i+"' ontouchmove=clickCar("+i+") onmouseup=clickCar1("+i+") style='z-index:'"+i+"';'>"
   html+="<div class='notChoose'></div></div>"
    $('#pai2').append(html);
},0+100*i)
   }
}

document.addEventListener('touchstart',clickCar,false);
document.addEventListener('touchmove',clickCar1,false);
document.addEventListener('touchend',clickCar2,false);
function clickCar(evt){
	// console.log(evt);
	  	 var touch = evt.touches[0]; //获取第一个触点
         var x = Number(touch.pageX); //页面触点X坐标
         var y = Number(touch.pageY); //页面触点Y坐标
    //     //记录触点初始位置
    //     startX = x;
    //     startY = y;
    

}
function clickCar1(evt){
	console.log(evt.target.attr('index'));
	  var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
        //记录触点初始位置
        startX = x;
        startY = y;
    

}
function clickCar2(evt){
		// console.log(evt.target)
	 //  var touch = evt.touches[0]; //获取第一个触点
  //       var x = Number(touch.pageX); //页面触点X坐标
  //       var y = Number(touch.pageY); //页面触点Y坐标
  //       //记录触点初始位置
  //       startX = x;
  //       startY = y;
    

}

// function clickCar3(e){
// console.log(e.originalEvent.targetTouches[0].pageX)
// 	if($('.pai'+data+'').hasClass('isSelect')){
// 		$('.pai'+data+'').removeClass('isSelect').addClass('notSelect');
// 	}else{
// 		$('.pai'+data+'').removeClass('notSelect').addClass('isSelect');
// 	}
// }
// function clickCar2(data){
// 		$('.pai'+data+'').addClass('yanse');

// }



function chupai(){
	$('.buttonAndCards .cardShow').show();
	$('.buttonAndCards .cardShow .cardPass').show();

	console.log($('#pai1').children('.isSelect'))

	$('#pai1').children('.isSelect').hide();
	


	$('.cardShow').append($('#pai1').children('.isSelect'));


}

function Initialization(){
	var html = '<img src="img/ddz/button1.png" />'
	$('.buttonType3').html(html);
}