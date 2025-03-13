var allcardxx, fapaizt = 0;
function allfapai(data){
        fapaizt=1;
        $('#userfp').html('');
        $('.isReady').hide();
        for(var i=0;i<data.user.length;i++){
            var user=data['user'][i];
            var indexuser=user.index-index-(-1);
            var html='';
            if(indexuser<=0){
                indexuser=indexuser-(-12);
            }
             if(data.allcard && indexuser!=1){
                var card=data.allcard;
                html=html+'<div class="cardss cards card'+indexuser+'" style="display: none;" data="'+indexuser+'">'
                html=html+'<div class="card cardopen card'+card[user.index][0]['card']+' card'+indexuser+'1 shiren-index14" ></div> '
                html=html+'<div class="card cardopen card'+card[user.index][1]['card']+' card'+indexuser+'2 shiren-index13" ></div> '
                html=html+'<div class="card cardopen card'+card[user.index][2]['card']+' card'+indexuser+'3 shiren-index12" ></div> '
                html=html+'<div class="card cardopen card'+card[user.index][3]['card']+' card'+indexuser+'4 shiren-index11" ></div>'
                html=html+'<div class="card cardopen card'+card[user.index][4]['card']+' card'+indexuser+'5 shiren-index10" ></div></div>';
            }
            else{
                html=html+'<div class="cardss cards card'+indexuser+'" style="display: none;" data="'+indexuser+'">'
                html=html+'<div class="card card'+indexuser+'1 shiren-index14" ></div> '
                html=html+'<div class="card card'+indexuser+'2 shiren-index13" ></div> '
                html=html+'<div class="card card'+indexuser+'3 shiren-index12" ></div> '
                html=html+'<div class="card card'+indexuser+'4 shiren-index11" ></div>'
                html=html+'<div class="card card'+indexuser+'5 shiren-index10" ></div></div>';
            }
            $('#userfp').append(html);
        }
        $('#userfp .cards').show();
        setTimeout(function(){
        $('#userfp .shiren-index10').show();
        fapaizt=0;
        },1000);
        setTimeout(function(){
        $('#userfp .shiren-index11').show();
        },800);
        setTimeout(function(){
        $('#userfp .shiren-index12').show();
        },600);
        setTimeout(function(){
        $('#userfp .shiren-index13').show();
        },400);
        setTimeout(function(){
        $('#userfp .shiren-index14').show();
        },200);
        $('.myCards').eq(0).show();
        if(data.card && !data.allcard){
            for(var i=0;i<data.card.length;i++){
                var card=data['card'][i];
                $('.card'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
                setTimeout('showmycard('+i+')',1500);
            }
        }
        if(data.allcard){
            for(var i=0;i<data['allcard'][index].length;i++){
                var card=data['allcard'][index][i];
                $('.card'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
                setTimeout('showmycard('+i+')',1500);
            }
        }
}
var allcardxx;
function fapaistart(data){
    allcardxx=data;
    var fp=0;
    for(i=1;i<6;i++){
            var xx={};
            xx.id=i;
            xx.card=data['card'][index][i-1];
           $('.cardDeal .cardss .card1'+i).attr('onclick','fapxx('+JSON.stringify(xx)+')');
           if($('.cardDeal .cardss .card1'+i).is(':hidden')){
             fp=fp+1;
           }
    }
    if(fp>=5){
        operationButton(7);
    }
}
function fapxx(data){
    $('.myCards .card'+(data.id-1)+'  .back').removeClass('cardundefined').addClass('card'+data.card.card);
    $('.cardDeal .cardss .card1'+data.id).hide();
    $('.myCards .card'+(data.id-1)).show();
    $('.myCards .card'+(data.id-1)).addClass('card-flipped');
    var fp=0;
    for(i=1;i<6;i++){
        if($('.cardDeal .cardss .card1'+i).is(':hidden')){
            fp=fp+1;
        }
    }
    if(fp>=5){
        operationButton(7);
    }
}
function tanpaime(){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('tanpai',{time:time});
    showtanpai();
}
function showtanpai(){
    var mp3xx='';
    operationButton(-1);
    if(allcardxx['sfniu'][index]==0){
        tanpaixx2({card:allcardxx['newcard'][index]})        
    }
    else{
        tanpaixx({card:allcardxx['newcard'][index]})
    }
    var msgxx={};
    msgxx.index=index;
    msgxx.img='/app/img/niu'+allcardxx['niu'][index]+'.png';
    showmemberBull(msgxx);
    mp3xx='mp3niu'+allcardxx['niu'][index];
    mp3play(mp3xx);
}
function showothertanpai(data){
    if(data==index){
        showtanpai();
    }
    else{
        mp3xx='mp3niu'+allcardxx['niu'][data];

        var msgxx={};
        msgxx.index=data;
        msgxx.img='/app/img/niu'+allcardxx['niu'][data]+'.png';
        showmemberBull(msgxx);

        var msgxx={};
        msgxx.user={};
        msgxx.user.index=data;
        msgxx.card=allcardxx['newcard'][data];
        tanpaixxother(msgxx);

        mp3play(mp3xx);
    }
}

function tanpaixx(data){
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('.card0'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
    }
   



    $('.cardDeal .card1').hide();
    $('.myCards').eq(0).hide();
    $('.myCards').eq(1).show();
    var left=['34','40','46','61','68'];
    for(var i=0;i<data.card.length;i++){
        $('.myCards  .card0'+i).animate({
                    left: left[i]+'%',
              },500)
    }
}

function tanpaixx2(data){
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('.card0'+i+'  .back').removeClass('cardundefined').addClass('card'+card.card);
    }
    $('.cardDeal .card1').hide();
    $('.myCards').eq(0).hide();
    $('.myCards').eq(2).show();

    var left=['33','42','51','60','69'];
    for(var i=0;i<data.card.length;i++){
        $('.myCards .card0'+i).animate({
                    left: left[i]+'%',
              },500)
    }
}


function tanpaixxother(data){
    var indexuser=data.user.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div>';
    var hz=0;
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][4-i];
        var card2=data['card'][i];
        if(i<3){
            hz=hz-(0-card2.val);
        }
        html=html+'<div class="cards card'+indexuser+' card'+indexuser+(i-(-1))+'1 shiren-index1'+(4-i)+'s card-flipped"><div class="face front"></div> <div class="face back card'+indexuser+' card'+card.card+' card-flipped"></div></div>';
    }
    html=html+'</div>';
    $('.cardOver').append(html);
    $('.cardDeal .card'+indexuser).hide();
    $('.cardOver .card'+indexuser).show();
    if(hz%10==0){
       var left=['19','17','13','11','9'];
        var right=['9','11','15','17','19'];

        var left1=['12.5','10.5','6.5','4.5','2.5'];
        // var left1=['2.5','4.5','6.5','10.5','12.5'];
        var left2=['56','52','45','41.5','38'];
        var right1=['3.5','5.5','9.5','11.5','13.5'];
    }
    else{
        // var left=['9','11','13','15','17'];
        var left=['17','15','13','11','9'];
        // var right=['17','15','13','11','9'];
        var right=['9','11','13','15','17'];

        var left1=['12.5','10.5','8.5','6.5','4.5'];
        var left2=['56','52','48','44','40'];
        var right1=['4.5','6.5','8.5','10.5','12.5'];
    }
    for(var i=0;i<data.card.length;i++){
        if(indexuser <6){
            $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1').animate({
                    right: right[i]+'vh',
              },500)
        }
        else if(indexuser ==6){

              $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1').animate({
                    right: right1[i]+'vh',
              },500)  
        }
        else if(indexuser ==7){
                $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1').animate({
                    left: left2[i]+'%',
              },500)  
        }
         else if(indexuser ==8){
                $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1').animate({
                    left: left1[i]+'vh',
              },500)  
        }
        else{
            $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1').animate({
                    left: left[i]+'vh',
              },500)  
        }

    
    

     }

}
function showmycard(id){
    $('.cardDeal .card1 .card1'+(id-(-1))).hide();
    $('.myCards .card'+id).show();
    $('.myCards .card'+id).addClass('card-flipped');
}
function roomxx(data){

}

function reuser(){
$('#member').html('');
}

function adduser(data){
    var indexuser=data.user.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    if($('.member'+indexuser+' .onlinezt').length>0){
        $('.member'+indexuser+' .onlinezt').hide();
    }
    else{
        if(data.user.online=='-1'){
            var onlinezt='display:block';
        }
        else{
            var onlinezt='display:none';
        }
    var html='    <div class="member member'+indexuser+'" id="user'+data.user.id+'">'
    html+='<div class="zmmyctime"></div>'
     html+='<div style="    background: #000;z-index: 888;position: absolute;width: 100%;height: 100%;opacity: 0.5;'+onlinezt+'" class="onlinezt"></div>'
     html+='<img src="'+data.user.img+'" class="avatar" />'
     html+='<img src="/app/img/bull9/playerWin.png" class="banker" style="display: none;" /> '
     html+='<div class="bottom shiren-bottom">'
     html+='<div class="bname shiren-bname">'+data.user.nickname+'</div>'
    html+='<div class="bscore shiren-bname">'+data.user.dqjf+'</div></div> '
    html+='<img id="banker213612" src="/app/img/bull9/bull_banker_bg.png" class="background shiren-background" /> '
     html+='<img src="/app/img/bull9/bull_banker_icon.png" class="background background1 shiren-background1" />' 
     html+='<img id="bankerAnimate'+indexuser+'" src="/app/img/bull9/bull_banker_animate.png" class="shiren-background2" />' 
     html+='<img id="bankerAnimate1'+indexuser+'" src="/app/img/bull9/bull_banker_animate.png" class="shiren-background2" /><div class="isReady" style="display:none"><img src="http://goss.fexteam.com/files/d_25/images/game/ready.png " class="ready" style=""></div></div>';
     $('#member').append(html);
     if(data.user.zt==1){
        $('.member'+indexuser+' .isReady').show();
     }
    }
}
function zbuser(data){
     var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    $('.member'+indexuser+' .isReady').show();
}
function removeuser(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    $('.member'+indexuser+' .onlinezt').show();
    $('.member'+indexuser+' .isReady').hide();
}

function removeuser2(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    $('#member .member'+indexuser).remove();
}
function showmemberTimesText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberTimesText'+indexuser+'" style="display: block;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>';
    $('#memberTimesText').append(html);
}
function showmemberTimesText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }

    if(indexuser<6){
        var html='<div class="memberTimesText'+indexuser+'" style="display: block;right:9vh;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>'; 

    } else if(indexuser==6){
        var html='<div class="memberTimesText'+indexuser+'" style="display: block;right: 13.5vh;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>'; 
    }
    else if(indexuser==7){
        var html='<div class="memberTimesText'+indexuser+'" style="display: block;left: 60%;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>'; 
    }
    else if(indexuser==8){
        var html='<div class="memberTimesText'+indexuser+'" style="display: block;left: 18.5vh;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>'; 
    }
    else{
   
    var html='<div class="memberTimesText'+indexuser+'" style="display: block;left:14vh;" ><img src="'+data.img+'" style="position: absolute; width: 100%;" /></div>';

}
  $('#memberTimesText2').append(html);
}

function showmemberRobText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberRobText'+indexuser+'" style="display: block;" ><img src="'+data.img+'" style="position: absolute; width: 100%;"></div>';
    $('#memberRobText').append(html);
}
function showmemberRobText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberFreeRobText'+indexuser+'" style="display: block;" ><img src="'+data.img+'" style="position: absolute; width: 100%;"></div>';
    $('#memberFreeRobText').append(html);
}

function showmemberBull(data){
     var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberBull'+indexuser+'" style="display: block;"><img src="'+data.img+'" style="position: absolute; width: 100%;height: 100%;"/></div>';
    $('#memberBull').append(html);
}
function timewcgx(data){
    timewc=Math.ceil(new Date()/1000)-data;
    //console.log(timewc);
    setTimeout('send("timegx",{})',5000);
}
function clearmemberBull(){
    $('#memberBull').html('');
}
function clearmemberTimesText(){
    $('#memberTimesText').html('');
}
function clearmemberRobText(){
    $('#memberRobText').html('');
}
function clearmemberRobText2(){
    $('#memberFreeRobText').html('');
    $('#memberTimesText2').html('');
}
function qzcard(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }

    if(data.bd){
        $('#userfp .qzcard').removeClass('qzcard');
    }
    $('#userfp .card'+indexuser).addClass('qzcard');
}
function showqz(data){
    if($('#userfp .qzcard').length==0){
        $('#userfp .cardss').addClass('qzcard');
    }
    var userindex=data['user'][data.index]-index-(-1);
    if(userindex<0){
        userindex=userindex-(-12);
    }
  $('.shiren-background').hide();
  $('.member'+userindex+' .shiren-background').show();

  data.index=data.index-(-1);
  if(data.index>=data.user.length){
    data.index=0;
  }
  var t=4;
  if(data.user.length==2){
    t=6;
  }
  if(data.user.length==3 || data.user.length==4){
    t=5;
  }


  ji=setTimeout('showqz('+JSON.stringify(data)+')',4000/(data.user.length*t));
}

// 抢庄结束动画
function sss(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }

    clearTimeout(ji);
  			// $('.shiren-background').hide();
     //        $("#bankerAnimate"+indexuser).show(),
     //         $('.member'+indexuser+' .shiren-background2').hide()
     //         $('.member'+indexuser+' #bankerAnimate1'+indexuser).show()


              	$('.shiren-background').hide();
	 			$("#bankerAnimate"+indexuser).show();
	            // $('.member'+indexuser+' #bankerAnimate1'+indexuser).show()

             $("#bankerAnimate1"+indexuser).animate({
                top: "-1vh",
                left: "-1vh",
                width: "9.26vh",
                height: "9.26vh"
            },
            400,
            function() {
                $("#bankerAnimate1"+indexuser).animate({
                    top: "-0.1vh",
                    left: "-0.1vh",
                    width: "7.46vh",
                    height: "7.46vh"
                },
                400,
                function() {
                  $('.member'+indexuser+' .shiren-background').hide();
                  $('.member'+indexuser+' .shiren-background1').show();
                    
                })
            }),
            $("#bankerAnimate"+indexuser).animate({
                top: "-1vh",
                left: "-0.8vh",
                width: "7.8vh",
                height: "7.8vh"
            },400),
                $("#bankerAnimate"+indexuser).animate({
                    top: "-0.1vh",
                    left: "-0.1vh",
                    width: "6.3vh",
                    height: "6.2vh"
              },400)

        }


        function jibi(data){
            if(data.win.index!=data.bank.index && data.zt!=1){
                if(data.fx==1){
                    var kstime=1000;
                }
                else{
                    var kstime=1000+200*8+1000;
                }
                data.zt=1;
                setTimeout('jibi('+JSON.stringify(data)+')',kstime);
                return false;
            }
            if(data.win.index==data.bank.index && data.zt!=1){
                var kstime=1000;
                data.zt=1;
                setTimeout('jibi('+JSON.stringify(data)+')',kstime);
                return false;
            }
            mp3play('mp3gold');
            var win=data.win.index-index-(-1);
        var lose=data.lose.index-index-(-1);
        if(win<=0){
            win=win-(-12);
        }
        if(lose<=0){
            lose=lose-(-12);
        }   
  if (window.innerHeight)
winHeight = window.innerHeight,
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight,
winWidth = document.body.clientWidth;


var Hpx=winHeight*(1/100);
var Wpx=winWidth*(1/100);

  var top  =parseInt($('.member'+lose).css('top'))+parseInt(Hpx)*2.5+'px';
  if(lose<=6 && lose>1){
    var right =parseInt($('.member'+lose).css('right'))-parseInt(Wpx)*2;
    var left=parseInt(winWidth)-right-parseInt($('.member'+lose).css('width'))+'px';
  }
  else{
    var left =parseInt($('.member'+lose).css('left'))+parseInt(Wpx)*2+'px';
  }
  var ytop  =parseInt($('.member'+win).css('top'))+parseInt(Hpx)*2.5+'px';
  if(win<=6 && win>1){
    var yright =parseInt($('.member'+win).css('right'))-parseInt(Wpx)*2;
    var yleft=parseInt(winWidth)-yright-parseInt($('.member'+win).css('width'))+'px';
  }
  else{
    var yleft =parseInt($('.member'+win).css('left'))+parseInt(Wpx)*2+'px';
  }
  for(var i=0;i<11;i++){
     var html='<div class="memberCoin member'+win+lose+'"  ><img src="/app/img/bull9/bull_coin.png" class="shiren-memberCoin" /></div>'
     $('#jinbi').append(html);
     $('#jinbi .member'+win+lose).eq(i).css('top',top);
     $('#jinbi .member'+win+lose).eq(i).css('left',left);
     $('#jinbi .member'+win+lose).eq(i).animate({
       top:ytop,
       left:yleft
    },0+i*250);
}
    setTimeout('jibiover('+win+lose+')',2500);
  //  $('#member .member'+win+' .bscore').html(data.win.dqjf);
  // $('#member .member'+lose+' .bscore').html(data.lose.dqjf);
}


function jibiover(data){
    $('#jinbi .member'+data).remove();
}


function jibichange(data){
    for(var i=0;i<data.length;i++){
        var jifenxx=data[i];
        var userindex=jifenxx.index-index-(-1);
        if(userindex<=0){
            userindex=userindex-(-12);
        }
        var html='<div class="memberScoreText'+userindex+'" data-dqjf="'+jifenxx.dqjf+'" data-index="'+userindex+'"></div>';
        $('#memberScoreText1').append(html);   
     var fx=jifenxx.fx; 
    }
   if(fx==0){
        setTimeout('jibiover2()',6000);
    }
    else{
        setTimeout('jibiover2()',3500);
    }
}
function jibiover2(){
    clearmemberBull();
    clearmemberTimesText();
    $('#memberScoreText1 div').each(function(){
        var userindex=$(this).attr('data-index');
        var dqjf=parseInt($(this).attr('data-dqjf'));
        var lsjf=parseInt($('#member .member'+userindex+' .bscore').html());
        $('#member .member'+userindex+' .bscore').html(dqjf);
        if(dqjf-lsjf>0){
            $(this).html('<label class="shiren-memberScoreText2"  style="display: block;">+'+(dqjf-lsjf)+'</label>');
        }
        else{
            $(this).html('<label class="shiren-memberScoreText1"  style="display: block;">'+(dqjf-lsjf)+'</label>');
        }
    })
    $('.cardDeal').html('');
    $('.cardOver').html('');
    $('.myCards').hide();
    $('.myCards').eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>')
    $('.myCards').eq(1).html('<div class="cards card00" style="left: 34%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 40%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 46%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 61%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 68%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    $('.myCards').eq(2).html('<div class="cards card00" style="left: 33%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 42%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 51%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 60%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 69%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    $('#memberScoreText1').show();
}



function initroom(){
    
    $('.cardDeal').html('');
    $('.cardOver').html('');

    $('.myCards').hide();
    $('.myCards').eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none; transition: left 1s;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>')
    $('.myCards').eq(1).html('<div class="cards card00" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    $('.myCards').eq(2).html('<div class="cards card00"  ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    
    
    $('#memberScoreText1').html('');
    $('#memberScoreText1').hide();
    $('.shiren-background1').hide();
    $('.shiren-background2').hide();
    clearmemberBull();
    clearmemberTimesText();
    clearmemberRobText();
    //operationButton('8');
}
function zhunbei(){
    send('zhunbei',{});
    operationButton('9');
}
function xianxz(zt){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('xianxz',{bs:zt,time:time});
    showxian({index:index,zt:zt});
    operationButton('-1');
}
function showxian(data){
    var msgxx={};
    var mp3xx='';
    if(data.index==index){
        operationButton('-1');
    }
    msgxx.index=data.index;
    msgxx.img='/app/img/X-'+data.zt+'.png';
    showmemberTimesText(msgxx);
    mp3xx='xia'+data.zt;
    mp3play(mp3xx);
}
function qbank(zt,type){
    if(fapaizt==1){
        return false;
    }
    var time=Math.ceil(new Date()/1000)-timewc;
    send('qbank',{zt:zt,time:time,type:type});
    qbankshow({zt:zt,type:type})
}
function qbankshow(data){
    var html='';
    var bankwz='';
    var mp3xx='';
    if(data.type==1){
        bankwz='go';
    }
    else{
        bankwz='rob';
    }
    if(data.zt){
        if(data.type==4){
            html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block">'
            html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_'+bankwz+'.png">'
            html+='</div><div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;width: 17px;left: 190px;height: 17px;top: 28px;">'
            html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/X-'+data.zt+'.png"></div>'
        }
        else{
            html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">'
            html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_'+bankwz+'.png"></div>'
        }
        mp3xx='qiangzhuang';
    }
    else{
        html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">';
        html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_not'+bankwz+'.png"></div>';
        mp3xx='buqiang';
    }
     $('#operationButton').html(html);
     mp3play(mp3xx);
}
function qbankshowother(data){
    var msgxx={};
    var bankwz='';
    var mp3xx='';
    msgxx.index=data.index;
    if(data.type==1){
        bankwz='go';
    }
    else{
        bankwz='rob';
    }
    if(data.zt){
        if(data.type==4){
            msgxx.img='/app/img/X-'+data.zt+'.png';
            showmemberTimesText2(msgxx);
            msgxx.img='/app/img/bull9/bull_text_'+bankwz+'.png';
            showmemberRobText2(msgxx);
        }
        else{
            msgxx.img='/app/img/bull9/bull_text_'+bankwz+'.png';
            showmemberRobText(msgxx);
        }
        mp3xx='qiangzhuang';
    }
    else{
        msgxx.img='/app/img/bull9/bull_text_not'+bankwz+'.png';
        showmemberRobText(msgxx);
        mp3xx='buqiang';
    }
    mp3play(mp3xx);
}

function overroom(data){


    overzt=0;
    $('#table').hide();
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    var img=new Image()
    var img1=new Image()
    var img2=new Image()
    img.src="/app/bg12.png";
    img1.src="/app/dyj.png";
    //img2.src="bg.png";
    var sj=data;
    img.onload = function(){
        console.log(sj);
        ctx.drawImage(img,0,0,800,1297);
        ctx.drawImage(img1,120,366,50,60);
        //ctx.drawImage(img1,87,156,50,34)
        //ctx.drawImage(img2,87,193,50,34)
        var time1=sj.time.substring(0,sj.time.length-3);
        ctx.font = "22px bolder songti";
        ctx.fillStyle = "#d8cb66";
        ctx.fillText("房间号:"+sj.id, 175,278);
        ctx.fillText(time1, 375, 278);
        ctx.fillText(sj.zjs+"局", 575, 278);

        ctx.font = "31px bolder songti";
        ctx.fillStyle = "black";
        var writeContent = fangzhu.skinname+'房主 ：'+fangzhu.nickname;
        var writeLeft = (c.width-ctx.measureText(writeContent).width)/2;
        ctx.fillText(writeContent,writeLeft,345);

        for(var i=0;i<sj.user.length;i++){
            if(i>1){
                ctx.fillStyle = "#19170b";
                ctx.fillRect(122,494-(0-(i-2)*57),556,55);
            }
            var user=sj['user'][i];
            ctx.font = "31px bolder songti";
            ctx.fillStyle = "#d8cb66";
            ctx.fillText(user.id, 175, 415+(i*57));
            ctx.fillText(decode64(user.nickname).substring(0,9), 319, 415+(i*57));
            if(user.dqjf>0){
                user.dqjf='+'+user.dqjf;
            }else{
                ctx.fillStyle = "#fff";
                ctx.fillText(decode64(user.nickname).substring(0,9), 319, 415+(i*57));
                ctx.fillText(user.dqjf, 581, 415+(i*57));
            }
            ctx.fillText( user.dqjf, 581, 415+(i*57));
        }
        var dataURL = c.toDataURL();
        $('#overtime').html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 3%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="'+dataURL+'" style="width: 100%;height:100%;position: absolute;z-index: 201;">')
        $('#overtime').show();
    }
}


function msgshow(data){
      var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    mp3play(data.mp3);
       var html='<div class="messageSay messageSay'+indexuser+'" ><div id="fj-kjyy">'+data.msg+'</div> <div class="triangle"></div></div>'
      $('#messageSay').append(html);
      setTimeout(function(){
            console.log(indexuser);
            $('.messageSay'+indexuser).remove();
      },1500);
}



function operationButton(data){
    var html='';
    if(data=='1'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block;" onclick="qbank(1,1)">'
        html+='                        <img class="operationButton-3" src="/app/img/bull9/bull_button_orange.png">'
        html+='                        <div class="operationButton-3-ts" >'
        html+='上庄'
        html+='                        </div>'
        html+='                       </div>'
        html+='                       <div class="operationButton-4-zt" id="jiurenbqz" style="display: inline-block;" onclick="qbank(0,1)">'
        html+='                        <img class="operationButton-gg" src="/app/img/bull9/bull_button_blue.png"> '
        html+='                        <div class="operationButton-3-ts" >'
        html+='不上'
        html+='                        </div>'
        html+='                       </div>'
    }
    if(data=='2'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(1,4)">'
        html+='             <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div class="operationButton-gg3">'
        html+='               1倍'
        html+='             </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(2,4)">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               2倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='           z-index: 200;" onclick="qbank(4,4)">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               4倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(0,4)">'
        html+='              <img src="/app/img/bull9/bull_times_bg_blue.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               不抢'
        html+='              </div>'
        html+='             </div> '
    }
    if(data=='3'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block;" onclick="qbank(1,2)">'
        html+='                      <img class="operationButton-3" src="/app/img/bull9/bull_button_orange.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       抢庄'
        html+='                      </div>'
        html+='                     </div>'
        html+='                     <div class="operationButton-4-zt" id="jiurenbqz" style="display: inline-block;" onclick="qbank(0,2)">'
        html+='                      <img class="operationButton-gg" src="/app/img/bull9/bull_button_blue.png">' 
        html+='                      <div class="operationButton-gg1" >'
        html+='                       不抢'
        html+='                      </div>'
        html+='                     </div>';
    }
    if(data=='4'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(' + window.beishu[0] + ');">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div class="operationButton-gg3">'
        html+='                ' + window.beishu[0] +  '倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(' + window.beishu[1] + ');">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               ' + window.beishu[1] +  '倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(' + window.beishu[2] + ');">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               ' + window.beishu[2] +  '倍'
        html+='              </div>'
        html+='             </div>' 
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(' + window.beishu[3] + ');">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               ' + window.beishu[3] +  '倍'
        html+='              </div>'
        html+='             </div>';
    }
    if(data=='5'){
        html+='<div class="gongg" style="display: block;">等待闲家下注</div>';
    }
    if(data=='6'){
        html+='<div class="gongg" style="display: block;">点击牌面翻牌</div>';
    }
    if(data=='7'){
        html+='<div class="operationButton-1-zt" id="jiurenbqz" style="display: inline-block;" onclick="tanpaime();">';
        html+='<img class="operationButton-gg" src="/app/img/bull9/bull_button_blue.png"  /> ';
        html+='<div   class="operationButton-gg1"  style="width: 100%;">';
        html+='摊牌';
        html+='</div>';
        html+='</div>';
    }

    if(data=='8'){
        html+='<div class="operationButton-1-zt"><img class="operationButton-1" id="zb" src="/app/img/bull9/readyButton.png" onClick="zhunbei()"></div>';
    }

    if(data=='9'){
        html+='<div class="operationButton-2-zt"><img id="zbs" class="operationButton-2" src="/app/img/bull9/ready.png" style="display:block;"></div>';
    }

    $('#operationButton').html("");
    if(data==4 || data==3 || data==2 || data==1){
        setTimeout(function () {
            $('#operationButton').html(html);
        }, 2000);
    } else {
        $('#operationButton').html(html);
    }
}

function divRobBankerText(data){
    var html='';
    if(data=='0'){
        html+='准备开始';
    }
    if(data=='1'){
        html+='上庄';
    }
    if(data=='2'){
        html+='抢庄';
    }
    if(data=='3'){
        html+='闲家下注';
    }
    if(data=='4'){
        html+='等待摊牌';
    }
    if(data=='5'){
        html+='等待结束';
    }
    $('#divRobBankerText').html(html);
}

function updatescore(data) {
	$("#user" + data.id + " .bottom .bscore").html(data.score)
}
function joingame() {
	1 != isinitok && joinroom(),
	removejoinalert(),
	send("joingame")
}
function joinwatch() {
	1 != isinitok && joinroom(),
	removejoinalert(),
	send("joinwatch")
}
function watch() {
	$("#watch-game").show()
}
function tojoin() {
	$("#watch-list").hide(),
	$("#watch-game").hide()
}
function watchlist(data) {
	var html = "";
	for (var k in data.data)
		html += '<div class="playerItem">\n                    <img src="' + data.data[k].img + '" class="playerAvatar" />\n                    <div class="playerName">' + data.data[k].nickname + '</div>\n                    <img src="/app/bscore/icon.png" class="playerIcon" />\n                </div>';
	$("#watch-list .playerList").html(html),
	1 == data.is_start ? ($("#watch-list .joimwatch").hide(), $("#watch-list .joingame").hide()) : 1 == data.is_watch ? ($("#watch-list .joimwatch").hide(), $("#watch-list .joingame").show()) : 0 == data.is_watch && ($("#watch-list .joimwatch").show(), $("#watch-list .joingame").hide())
}
