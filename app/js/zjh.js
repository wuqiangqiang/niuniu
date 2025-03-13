// 准备
function ready(){
	$('.member1 .isReady .unready').hide();
	$('.member1 .isReady .ready').show();
	// var data=[];
	// var user=[];
	// user['index']=1;
	// data['user']+=user;
	// user['index']=2;
	// data['user']+=user;
	// user['index']=3;
	// data['user']+=user;
	// console.log(data)
allfapai({user:{index:'1'},user:{index:'2'}});
}



var index=1;
function allfapai(data){
	console.log(data)
	console.log(data['user'][1])
	$('.member1 .isReady .ready').hide();


	$('#userfp').html('');

	for(var i=0;i<data.user.length;i++){
		var user=data['user'][i];
		var indexuser=user.index-index-(-1);
		var html='';
		if(indexuser<=0){
                indexuser=indexuser-(-9);
        }
        html=html+'<div class="card card'+indexuser+'1  zhajinhua-index1"  style="display:none" ></div><div class="card card'+indexuser+'2 zhajinhua-index2" style="display: none;"></div><div class="card card'+indexuser+'3 zhajinhua-index3" style="display: none;"></div>';
        $('#userfp').append(html);
	}
	 setTimeout(function(){
        $('#userfp .zhajinhua-index1').show();
        // fapaizt=0;
     },1000);
      setTimeout(function(){
        $('#userfp .zhajinhua-index2').show();
     },800);
       setTimeout(function(){
     	$('#userfp .zhajinhua-index3').show();
     },600);
     // $('.myCards').show();
     // $('#userfp').hide();
}



function showmycard(id){
    $('.cardDeal .card1'+(id-(-1))).hide();
    $('.myCards .card'+id).show();
    $('.myCards .card'+id).addClass('card-flipped');
}


// 扔筹码动画
function scoresArea(index,i){
    $('.place').show()
    $('.scoresArea').show();
    $(".scoresArea").append("<div class='coin  coin" + index + " coinType"+i+" style='top:" + (140 * 1 - 28) * Math.random() + "px;left:" + (140 * 1 - 28) * Math.random() + "px;' ></div>")
    $(".coin" + index).animate({
            top: (140 * 1 - 28) * Math.random(),
            left: (140 * 1 - 28) * Math.random()
        },500)
    $('.coin').removeClass("coin"+ index);
   console.log( $('.scoresArea').children())
  


if($('.scoresArea').children().length == '10'){
   shou(5)
}else{

}

}




// 收筹码动画
function shou(i){

    var top = ['73','36','20','3','20','36'];
    var left = ['0','0','0','0','-75','-75'];
    var right = ['0','-75','-75','0','0','0'];


        $('.scoresArea').children().animate({
                left:50+'%',
                top:50+'%'
        },500);

    $('.scoresArea').animate({
                top: top[i]+'%',
                right:right[i]+'%',
                left:left[i]+'%',
        },1000)

  setTimeout(function (){
        
             $(".scoresArea").empty()
    },800)

}












function overroom(data){


    overzt=0;
    $('#table').hide();

    var img=new Image()
    var img1=new Image()
    var img2=new Image()
    img.src="/app/zjh.png";
    img1.src="/app/dyj.png";
    //img2.src="bg.png";
    var sj=data;
    img.onload = function(){
        console.log(sj);
        ctx.drawImage(img,0,0,800,1297)
        ctx.drawImage(img1,142,305,78,98)
        //ctx.drawImage(img1,87,156,50,34)
        //ctx.drawImage(img2,87,193,50,34)
        var time1=sj.time.substring(0,sj.time.length-3);
        ctx.font = "22px bold songti";
        ctx.fillStyle = "#d8cb66";
        ctx.fillText("房间号:"+sj.id, 178,284);
        ctx.fillText(time1, 361, 284);
        ctx.fillText(sj.zjs+"局", 580, 284);

        for(var i=0;i<sj.user.length;i++){
            if(i>1){
                ctx.fillStyle = "#19170b";
                ctx.fillRect(142,528-(0-(i-2)*105),519,96);
            }
            var user=sj['user'][i];
            ctx.font = "32px bolder songti";
            ctx.fillStyle = "#d8cb66";
            ctx.fillText(user.nickname.substring(0, 8), 225, 355+i*105);
            if(user.dqjf>0){
                user.dqjf='+'+user.dqjf;
            }else{
                ctx.fillStyle = "#fff";
                ctx.fillText(user.nickname.substring(0, 8), 225, 355+i*105);
                ctx.fillText(user.dqjf, 530, 355-(0-i*105));
            }
            ctx.fillText(user.dqjf, 530, 355-(0-i*76));
        }
    var dataURL = c.toDataURL();
    $('#overtime').html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 8%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="'+dataURL+'" style="width: 100%;height:100%;position: absolute;z-index: 201;">')
    $('#overtime').show();
    }
}
