function adduser(data){
	var indexuser=data.user.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-9);
    }
    if($('.member'+indexuser+' .quitBack').length>0){
        $('.member'+indexuser+' .quitBack').hide();
    }
    else{
        if(data.user.online=='-1'){
            var onlinezt='display:block';
        }
        else{
            var onlinezt='display:none';
        }

    if(indexuser==1){
        var actxx='onclick="send(\'zhunbei\',{})"';
    }
    else{
        var actxx='style="display:none"';
    }

    var html='<div class="member member'+indexuser+'" id="user'+data.user.id+'">'
     html+='<img src="/app/img/player.png" class="background" /> '
     html+='<img src="/app/img/playerWin.png" class="background" style="display: none;" /> '
     html+='<div class="title">'+decode64(data.user.nickname)+'</div> '
     html+='<div class="avatar">'
     html+='<img src="'+data.user.img+'" style="position: absolute; left: 25%; width: 100%; border-radius: 3px;" /> '
     html+='<img src="/app/img/avatar_timer.jpg" style="position: absolute; left: 25%; width: 100%; border-radius: 3px; display: none;" /> '
     html+='<div style="position: absolute; top: 0px; left: 25%; width: 100%; line-height: 42px; text-align: center; color: rgb(96, 38, 3); font-size: 20px; display: none;"> 0</div>'
     html+='</div> <div class="score">'+data.user.dqjf+'</div>' 
     html+='<div class="quitBack" style="'+onlinezt+'"></div>' 
     html+='<div class="isReady">'
     html+='<img src="/app/img/readyButton.png" class="unready" '+actxx+'/>' 
     html+='<img src="/app/img/ready.png" class="ready" style="display: none;" />'
     html+='</div>';
     if(indexuser!=1){
     html+='<div class="cardOver cardOver'+indexuser+'" style="display: none;">'
     html+='<img src="/app/img/cardBox.png" class="cardResult" />' 
     html+='<div class="name">'+decode64(data.user.nickname)+'</div> '
     html+='<div class="openCard">'
     html+='<div class="cards card0">'
     html+='<div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div>' 
     html+=' <div class="cards card1">'
     html+='  <div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div> '
     html+=' <div class="cards card2">'
     html+='  <div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div> '
     html+='</div>'
     html+='<div class="winText" style="display: none;">';
     html+=' <div class="winType winType0"></div> ';
     html+=' <div class="winScore winType0">';
     html+='  +</div></div></div>';
     }
     html+='<div class="PKbox" style="display: none;">'
     html+='<div class="PKboxBack"></div>'
     html+='</div>'
     html+='</div>';
     $('#member').append(html);
     if(data.user.zt==1){
        $('.member'+indexuser+' .ready').show();
     }
     if(data.user.tpzt==1){
        havelook(data.user);
     }
     if(data.user.zt==2){
        havelose(data.user);
     }

     if(data.user.zt==3){
        havequit(data.user);
     }
}
}
function zbuser(data){
     var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-9);
    }
    $('.member'+indexuser+' .unready').hide();
    $('.member'+indexuser+' .ready').show();
}
function removeuser(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-9);
    }
    $('.member'+indexuser+' .quitBack').show();
    $('.member'+indexuser+' .ready').hide();
}

function removeuser2(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-9);
    }
    $('#member .member'+indexuser).remove();
}


function userdjs(data){
    clearTimeout(ji);
    var now=data.time-Math.ceil(new Date()/1000)-(0-timewc)-1;
    if(now>0){
        var indexuser=data.index-index-(-1);
        if(indexuser<=0){
                    indexuser=indexuser-(-9);
        }
        $('.member'+indexuser+' .avatar img').eq(1).show();
        $('.member'+indexuser+' .avatar div').html(now);
        $('.member'+indexuser+' .avatar div').show();
        ji=setTimeout('userdjs('+JSON.stringify(data)+')',1000);
    }
    else{
        clearuserdjs();
    }
}
function clearuserdjs(){
    clearTimeout(ji);
    $('.avatar').each(function(){
      $(this).find('img').eq(1).hide();
    })
    $('.avatar div').hide();
}
function allfapai(data){
	$('.ready').hide();
  $('.isReady').hide();
	for(var i=0;i<data.user.length;i++){
		var user=data['user'][i];
		var indexuser=user.index-index-(-1);
		var html='';
		if(indexuser<=0){
                indexuser=indexuser-(-9);
        }

        for(j=1;j<4;j++){
          if(data.card){
              if(indexuser>=6) {
                  html = html + '<div class="card cardall card' + indexuser + j + ' card' + data['card'][user.id][(j - 1)]['card'] + ' zhajinhua-index' + (4-j) + '"  style="display:none" ></div>';
              } else {
                  html = html + '<div class="card cardall card' + indexuser + j + ' card' + data['card'][user.id][(j - 1)]['card'] + ' zhajinhua-index' + j + '"  style="display:none" ></div>';
              }
          }
          else{
            html=html+'<div class="card card'+indexuser+j+'  zhajinhua-index'+j+'"  style="display:none" ></div>';
          }
        }
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

     setTimeout(function(){
        $('.place').show()
        $('.scoresArea').show();
        $('.myCards').show();
     },1000);

     // $('.myCards').show();
     // $('#userfp').hide();
}
function havelook(data){
  var indexuser=data.index-index-(-1);
  if(indexuser<=0){
      indexuser=indexuser-(-9);
  }
  var html='<div class="isSeen isSeen'+indexuser+'" style="z-index: 100;"></div> ';
  $('#userfp').append(html);
}

function havelose(data){
  var indexuser=data.index-index-(-1);
  if(indexuser<=0){
      indexuser=indexuser-(-9);
  }
  if(indexuser==1){
    hidebook();
    $('#member .member1 .quitBack').show();
    $('.myCards .isLose').show();
    $('.myQuitBack').show();
    for(var i=0;i<3;i++){
        $('.cardDeal .card1'+(i-(-1))).hide();
        $('.myCards .card'+i).show();
    }
  }
  else{
  var html='<div class="isLose isLose'+indexuser+'" style="z-index: 100;" ></div> ';
  $('#userfp').append(html);
  }
}

function havequit(data){
  var indexuser=data.index-index-(-1);
  if(indexuser<=0){
      indexuser=indexuser-(-9);
  }
  if(indexuser==1){
    hidebook();
    $('#member .member1 .quitBack').show();
    $('.myCards .isQuit').show();
    $('.myQuitBack').show();
    for(var i=0;i<3;i++){
        $('.cardDeal .card1'+(i-(-1))).hide();
        $('.myCards .card'+i).show();
    }
  }
  else{
  var html='<div class="isQuit isQuit'+indexuser+'"  style="z-index: 100;"></div> ';
  $('#userfp').append(html);
  }
}
function bipai(data){
  $('#Buttons').hide();
  if(data.user.length>1){
    $('.pkBackground').show();
    for(var i=0;i<data.user.length;i++){
      var user=data.user[i];
      var indexuser=user.index-index-(-1);
      if(indexuser<=0){
        indexuser=indexuser-(-9);
      }
      $(' #member .member'+indexuser+' .PKbox').show();
      $(' #member .member'+indexuser+' .PKbox').attr('onclick',"send('bipai',{uid:"+user.id+",time:"+data.time+"})");
    }
  }
  else{
    send('bipai',{uid:data['user']['0']['id'],time:data.time});
  }
}
function qxbp(){
  $(' #member .PKbox').attr('onclick','');
  $('#Buttons').show();
  $('.pkBackground').hide();
  $('.PKbox').hide();
  $('.playerPK').hide();
}
function startPk(data){
  mp3play('shandian');
  $('.playerPK .pkLoser').hide();
  $('.playerPK .pk1 .title').html(decode64(data['user'][0]['nickname']));
  $('.playerPK .pk1 .avatar').attr('src',data['user'][0]['img']);
  $('.playerPK .pk1 .score').html(data['user'][0]['dqjf']);

  $('.playerPK .pk2 .title').html(decode64(data['user'][1]['nickname']));
  $('.playerPK .pk2 .avatar').attr('src',data['user'][1]['img']);
  $('.playerPK .pk2 .score').html(data['user'][1]['dqjf']);

  $('.playerPK').show();
  setTimeout(function(){
        if(data['user'][0]['index']==data.lose){
          $('.playerPK .pk1 .pkLoser').show();
        }
        else{
          $('.playerPK .pk2 .pkLoser').show();
        }

        havelose({index:data.lose});
     },1000);
}
function fapai(data){
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('.myCards .card'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
        showmycard(i)
    }
}
function otherpai(data){
  var indexuser=data.index-index-(-1);
    if(indexuser<=0){
         indexuser=indexuser-(-9);
    }
  $('.cardOver'+indexuser).show();
  $('#member .member'+indexuser+' .openCard').show();
  console.log(data.card);
  for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('#member .member'+indexuser+' .card'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
        $('#member .member'+indexuser+' .card'+i).addClass('card-flipped');
  }
}
function showmycard(id){
    $('.cardDeal .card1'+(id-(-1))).hide();
    $('.myCards .card'+id).show();
    $('.myCards .card'+id).addClass('card-flipped');
}

function showbook(){
  $('#looking').show();
  $('#looking').attr('onclick','send("looking",{})');
}
function hidebook(){
  $('#looking').hide();
  $('#looking').attr('onclick','');
}

// 扔筹码动画
function scoresArea(data){//index,i

    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
         indexuser=indexuser-(-9);
    }
    var total=$('.totalScore .scores').html();
    var jf=$('#member .member'+indexuser+' .score').html();

    $('#member .member'+indexuser+' .score').html(jf-data.jf);
    $('.totalScore .scores').html(total-(0-data.jf));

    $(".scoresArea").append("<div class='coin  coin" + indexuser + " coinType"+data.jf+" style='top:" + (140 * 1 - 28) * Math.random() + "px;left:" + (140 * 1 - 28) * Math.random() + "px;' ></div>")
    $(".coin" + indexuser).animate({
            top: (110 * 1 - 28) * Math.random(),
            left: (110 * 1 - 28) * Math.random()
        },300)
    $('.coin').removeClass("coin"+ indexuser);
   //console.log( $('.scoresArea').children())
  


// if($('.scoresArea').children().length == '10'){
//    shou(5)
// }else{

// }

}
function recm(data){
    var total=0;
    for(var i=0;i<data.cm.length;i++){
      total=total-(0-data.cm[i]);
      $(".scoresArea").append("<div class='coin  coinType"+data.cm[i]+"' style='top:" + (140 * 1 - 28) * Math.random() + "px;left:" + (140 * 1 - 28) * Math.random() + "px;' ></div>");
    }
    $('.totalScore .scores').html(total);

}




// 收筹码动画
function shou(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
         indexuser=indexuser-(-9);
    }
    var total=$('.totalScore .scores').html();
    var jf=$('#member .member'+indexuser+' .score').html();
    $('#userfp').html('');

    if(indexuser==1){
      $('.myCards .winText').show();
      $('.winScore').html('+'+total);
      $('.winScore').show();
      $('#member .member'+indexuser+' .background').eq(1).show();
    }
    else{
      $('.cardOver'+indexuser+' .cardResult').attr('src','/app/img/cardBoxWin.png');
      $('.cardOver'+indexuser+' .winText').html('<div class="winType winType'+data.type+'"></div> <div class="winScore winType'+data.type+'">+'+total+'</div>');
      $('.cardOver'+indexuser+' .winText').show();
    }

    $('#member .member'+indexuser+' .score').html(jf-(0-total));
    $('.totalScore .scores').html(0);


    var top = ['73','36','20','3','20','36'];
    var left = ['0','0','0','0','-75','-75'];
    var right = ['0','-75','-75','0','0','0'];


        $('.scoresArea').children().animate({
                left:50+'%',
                top:50+'%'
        },500);

    $('.scoresArea').animate({
                top: top[indexuser-1]+'%',
                right:right[indexuser-1]+'%',
                left:left[indexuser-1]+'%',
        },1000)

  setTimeout(function (){
             $(".scoresArea").empty()
    },800)
  if(indexuser==1){
    mp3play('winmp3');
  }
  else{
    mp3play('losemp3');
  }
}

function initroom(){
  $(".scoresArea").empty();
  $(".scoresArea").attr('style','');
  $('.openCard').hide();
  $('.cardOver').hide();
  $('#CardType').html('');
  $('.winText').hide();
  $('.cardResult').attr('src','/app/img/cardBox.png');
  $('#member .member').each(function(){
      $(this).find('.background').eq(1).hide();
    })

  $('#member .member1 .quitBack').hide();
  var html='<div class="winText" style="display: none;">';
      html=html+'<img src="/app/img/winner.png" /> ';
      html=html+'<div class="winScore" style="width: 100%; left: 0px; text-align: center; font-size: 16px; display: none;">';
      html=html+'+</div></div> ';
      html=html+'<div class="cards card0" style="display: none;">';
      html=html+'<div class="face front"></div> ';
      html=html+'<div class="face back cardundefined"></div> ';
      html=html+'<div class="myQuitBack" style="display: none;"></div>';
      html=html+'</div> ';
      html=html+'<div class="cards card1" style="display: none;">';
      html=html+'<div class="face front"></div> ';
      html=html+'<div class="face back cardundefined"></div> ';
      html=html+'<div class="myQuitBack" style="display: none;"></div>';
      html=html+'</div> ';
      html=html+'<div class="cards card2" style="display: none;">';
      html=html+'<div class="face front"></div> ';
      html=html+'<div class="face back cardundefined"></div> ';
      html=html+'<div class="myQuitBack" style="display: none;"></div>';
      html=html+'</div> ';
      html=html+'<div style="width: 70px; height: 20px; position: absolute; top: 17px; left: 50%; margin-left: -40px; z-index: 95; text-align: center; color: rgb(255, 255, 255); font-size: 15px; padding: 1px 5px; display: none;" id="looking">';
      html=html+'<img src="/app/img/lookcard.png" style="width: 70px; height: 20px;" />';
      html=html+'</div> ';
      html=html+'<div class="isQuit isQuit1" style="display: none;"></div> ';
      html=html+'<div class="isLose isLose1" style="display: none;"></div>';
      html=html+'<div class="isLose isLose1" style="display: none;"></div>';
  $('.myCards').html(html);

  var html='';
     html+='<div class="cards card0">'
     html+='<div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div>' 
     html+=' <div class="cards card1">'
     html+='  <div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div> '
     html+=' <div class="cards card2">'
     html+='  <div class="face front"></div> '
     html+='  <div class="face back cardundefined"></div>'
     html+=' </div> '
  
  $('#member .openCard').html(html);

  $('.myCards').hide();
  $('.place').hide();
  $('.scoresArea').hide();
  $('#totalScore').html(0);
  $('.isReady').show();
  $('.member1 .unready').show();
}
function overroom(data){


   overzt=0;
    $('#table').hide();
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    var img=new Image()
    var img1=new Image()
    var img2=new Image()
    img.src="/app/bgf9.png";
    img1.src="/app/dyj.png";
    //img2.src="bg.png";
    var sj=data;
    img.onload = function(){
        console.log(sj);
        ctx.drawImage(img,0,0,800,1297)
        //ctx.drawImage(img1,142,305,78,98)
        //ctx.drawImage(img1,87,156,50,34)
        //ctx.drawImage(img2,87,193,50,34)
        var time1=sj.time.substring(0,sj.time.length-3);
        ctx.font = "22px bold songti";
        ctx.fillStyle = "#ebd76e";
        ctx.fillText("房间号:"+sj.id, 178,284);
        ctx.fillText(time1, 361, 284);
        ctx.fillText(sj.zjs+"局", 580, 284);

        for(var i=0;i<sj.user.length;i++){
            if(i>1){
                ctx.fillStyle = "#15102e";
                ctx.fillRect(142,473-(0-(i-2)*86),519,80);
            }
            var user=sj['user'][i];
            ctx.font = "31px bolder songti";
            ctx.fillStyle = "#d8cb66";
            ctx.fillText(decode64(user.nickname).substring(0, 10), 225, 355+i*85);
            if(user.dqjf>0){
                user.dqjf='+'+user.dqjf;
            }else{
                ctx.fillStyle = "#fff";
                ctx.fillText(decode64(user.nickname).substring(0, 10), 225, 355+i*85);
                ctx.fillText(user.dqjf, 530, 356-(0-i*85));
            }
            ctx.fillText(user.dqjf, 530, 356-(0-i*85));
        }
    var dataURL = c.toDataURL();
    $('#overtime').html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 8%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="'+dataURL+'" style="width: 100%;height:100%;position: absolute;z-index: 201;">')
    $('#overtime').show();
    }
}


function msgshow(data){
      var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-9);
    }
       var html='<div class="messageSay messageSay'+indexuser+'" ><div>'+data.msg+'</div> <div class="triangle"></div></div>'
      $('#messageSay').append(html);
      mp3play(data.mp3);
      setTimeout(function(){
            console.log(indexuser);
            $('.messageSay'+indexuser).remove();
      },1500);
}