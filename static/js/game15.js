var fapaizt=0;
function allfapai(data){
        fapaizt=1;
        $('#userfp').html('');
        $('.isReady').hide();
        for(var i=0;i<data.user.length;i++){
            var user=data['user'][i];
            var indexuser=user.index-index-(-1);
            var html='';
            if(indexuser<=0){
                indexuser=indexuser-(-10);
            }
            if(data.allcard && indexuser!=1){
                var card=data.allcard;
                if(indexuser > 6) {
                    html=html+'<div class="cardss cards card'+indexuser+'" style="display: none;" data="'+indexuser+'">'
                    html=html+'<div class="card cardopen card'+card[user.index][0]['card']+' card'+indexuser+'5 jiurenniuniu-index14" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][1]['card']+' card'+indexuser+'4 jiurenniuniu-index13" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][2]['card']+' card'+indexuser+'3 jiurenniuniu-index12" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][3]['card']+' card'+indexuser+'2 jiurenniuniu-index11" ></div>'
                    html=html+'<div class="card cardopen card'+card[user.index][4]['card']+' card'+indexuser+'1 jiurenniuniu-index10" ></div></div>';
                }
                else {
                    html=html+'<div class="cardss cards card'+indexuser+'" style="display: none;" data="'+indexuser+'">'
                    html=html+'<div class="card cardopen card'+card[user.index][0]['card']+' card'+indexuser+'1 jiurenniuniu-index14" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][1]['card']+' card'+indexuser+'2 jiurenniuniu-index13" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][2]['card']+' card'+indexuser+'3 jiurenniuniu-index12" ></div> '
                    html=html+'<div class="card cardopen card'+card[user.index][3]['card']+' card'+indexuser+'4 jiurenniuniu-index11" ></div>'
                    html=html+'<div class="card cardopen card'+card[user.index][4]['card']+' card'+indexuser+'5 jiurenniuniu-index10" ></div></div>';
                }
            }
            else{
                html=html+'<div class="cardss cards card'+indexuser+'" style="display: none;" data="'+indexuser+'">'
                html=html+'<div class="card card'+indexuser+'1 jiurenniuniu-index14" ></div> '
                html=html+'<div class="card card'+indexuser+'2 jiurenniuniu-index13" ></div> '
                html=html+'<div class="card card'+indexuser+'3 jiurenniuniu-index12" ></div> '
                html=html+'<div class="card card'+indexuser+'4 jiurenniuniu-index11" ></div>'
                html=html+'<div class="card card'+indexuser+'5 jiurenniuniu-index10" ></div></div>';
            }
            $('#userfp').append(html);
        }
        $('#userfp .cards').show();
        setTimeout(function(){
        $('#userfp .jiurenniuniu-index10').show();
        fapaizt=0;
        },450);
        setTimeout(function(){
        $('#userfp .jiurenniuniu-index11').show();
        },350);
        setTimeout(function(){
        $('#userfp .jiurenniuniu-index12').show();
        },250);
        setTimeout(function(){
        $('#userfp .jiurenniuniu-index13').show();
        },150);
        setTimeout(function(){
        $('#userfp .jiurenniuniu-index14').show();
        },100);
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
           $('.cardDeal .card1'+i).attr('onclick','fapxx('+JSON.stringify(xx)+')');
           if($('.cardDeal .card1'+i).is(':hidden')){
             fp=fp+1;
           }
    }
    if(fp>=5){
        operationButton(7);
    }
}
function fapxx(data){
    $('.myCards .card'+(data.id-1)+'  .back').removeClass('cardundefined').addClass('card'+data.card.card);
    $('.cardDeal .card1'+data.id).hide();
    $('.myCards .card'+(data.id-1)).show();
    $('.myCards .card'+(data.id-1)).addClass('card-flipped');
    var fp=0;
    for(i=1;i<6;i++){
        if($('.cardDeal .card1'+i).is(':hidden')){
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
    msgxx.img='/static/img/bull10/game-niu'+allcardxx['niu'][index]+'.png';
    showmemberBull(msgxx);
    console.log(indexsex);
    console.log(index.toString());
    mp3xx='mp3niu'+indexsex[index.toString()]+allcardxx['niu'][index];
    mp3play(mp3xx);
}
function showothertanpai(data){
    if(data==index){
        showtanpai();
    }
    else if(allcardxx && typeof(allcardxx['niu']) != undefined){
        mp3xx='mp3niu'+indexsex[data.toString()]+allcardxx['niu'][data];

        var msgxx={};
        msgxx.index=data;
        msgxx.img='/static/img/bull10/game-niu'+allcardxx['niu'][data]+'.png';
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
    var left=['28','38','48','58','68'];
    var times = [100, 100, 400, 100, 700];
    if(allcardxx['niu'][index] > 0) {
        left=['20','30','40','58','68'];
    }

    for(var i=0;i<data.card.length;i++){
        (function (i) {
            setTimeout(function () {
                $('.myCards .card0'+i).animate({
                    left: left[i]+'vw'
                },500);
            }, times[i]);
        })(i);
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

    var left=['28','38','48','58','68'];
    var times = [100, 100, 300, 100, 500];
    for(var i=0;i<data.card.length;i++){
        (function (i) {
            setTimeout(function () {
                $('.myCards .card0'+i).animate({
                    left: left[i]+'vw'
                },500);
            }, times[i]);
        })(i);
    }
}


function tanpaixxother(data){
    data.card = data.card && data.card.length ? data.card : [];
    var indexuser=data.user.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    var html='<div>';
    var hz=0;
    var left=['20.5','18.5','13.5','11.5','9.5'];
    var right=['12.63','14.63','17.63','19.63','21.63'];
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][4-i];
        var card2=data['card'][i];
        if(i<3){
            hz=hz-(0-card2.val);
        }
        var cs = 'jiurenniuniu-index1'+(4-i)+'s'+(indexuser<6 ? 's' : '');
        html=html+'<div class="cards card'+indexuser+' card'+indexuser+(i-(-1))+'1 '+cs+' card-flipped"><div class="face front"></div> <div class="face back card'+indexuser+' card'+card.card+' card-flipped"></div></div>';
    }
    html=html+'</div>';
    $('.cardOver').append(html);
    $('.cardDeal .card'+indexuser).hide();
    $('.cardOver .card'+indexuser).show();
    if(hz%10==0){
        var left=['21.63','19.63','15.63','13.63','11.63'];
        var right=['10.5','12.5','16.5','18.5','20.5'];

        var right5=['12.5','14.5','18.5','20.5','22.5'];
        var left6=['23','21','17','15','13'];
    }
    else{
        var left=['19.5','17.5','15.5','13.5','11.5'];
        var right=['10.63','12.63','14.63','16.63','18.63'];

        var right5=['13','15','17','19','21'];
        var left6=['22','20','18','16','14'];
    }
    var move = {
        2  : ["right", "12.5vh", "14.5vh", "16.5vh", "18.5vh", "20.5vh"],
        3  : ["right", "12.5vh", "14.5vh", "16.5vh", "18.5vh", "20.5vh"],
        4  : ["right", "12.5vh", "14.5vh", "16.5vh", "18.5vh", "20.5vh"],
        5  : ["right", "12.5vh", "14.5vh", "16.5vh", "18.5vh", "20.5vh"],
        6  : ["left",  "38vw", "42vw", "46vw", "50vw", "54vw"],
        7  : ["left",  "11.5vh", "13.5vh", "15.5vh", "17.5vh", "19.5vh"],
        8  : ["left",  "11.5vh", "13.5vh", "15.5vh", "17.5vh", "19.5vh"],
        9  : ["left",  "11.5vh", "13.5vh", "15.5vh", "17.5vh", "19.5vh"],
        10 : ["left",  "11.5vh", "13.5vh", "15.5vh", "17.5vh", "19.5vh"]
    };
    if(allcardxx['niu'][data.user.index] > 0) {
        move = {
            2  : ["right", "12.5vh", "14.5vh", "19.5vh", "21.5vh", "23.5vh"],
            3  : ["right", "12.5vh", "14.5vh", "19.5vh", "21.5vh", "23.5vh"],
            4  : ["right", "12.5vh", "14.5vh", "19.5vh", "21.5vh", "23.5vh"],
            5  : ["right", "12.5vh", "14.5vh", "19.5vh", "21.5vh", "23.5vh"],
            6  : ["left",  "54vw", "58vw", "36vw", "40vw", "44vw"],
            7  : ["left",  "21.5vh", "23.5vh", "12.5vh", "14.5vh", "16.5vh"],
            8  : ["left",  "21.5vh", "23.5vh", "12.5vh", "14.5vh", "16.5vh"],
            9  : ["left",  "21.5vh", "23.5vh", "12.5vh", "14.5vh", "16.5vh"],
            10 : ["left",  "21.5vh", "23.5vh", "12.5vh", "14.5vh", "16.5vh"]
        };
    }
    for(var i=0;i<data.card.length;i++){
        var $obj = $(' .cardOver .card'+indexuser+'.card'+indexuser+(i-(-1))+'1');
        var attr = {};
        attr[move[indexuser][0]] = move[indexuser][i+1];
        $obj.animate(attr);
     }
}
function showmycard(id){
    $('.cardDeal .card1'+(id-(-1))).hide();
    $('.myCards .card'+id).show();
    $('.myCards .card'+id).addClass('card-flipped');
}
function roomxx(data){

}
function adduser(data){
    var indexuser=data.user.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
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
     html+='<div style="background: url(\'/static/img/bull10/game-leave.png\') no-repeat center top rgba(0,0,0,0.3);background-size: 90%;z-index: 888;position: absolute;width: 100%;height: 100%;'+onlinezt+'" class="onlinezt"></div>'
     html+='<img src="'+data.user.img+'" class="avatar" />'
     html+='<div class="banker flash" style="display: none;"></div>'
     html+='<div class="bottom jiurenniuniu-bottom">'
     html+='<div class="bname jiurenniuniu-bname">'+decode64(data.user.nickname)+'</div>'
    html+='<div class="bscore jiurenniuniu-bname">'+data.user.dqjf+'</div></div> '
    html+='<img id="banker213612" src="/static/img/bull9/bull_banker_bg.png" class="background jiurenniuniu-background" /> '
     html+='<img src="/static/img/bull10/zhuang.png" class="background jiurenniuniu-background1" />'
     html+='<div id="bankerAnimate'+indexuser+'" class="jiurenniuniu-background2 flash" style="border-radius:2vw;"></div>'
     html+='<div id="bankerAnimate1'+indexuser+'" class="jiurenniuniu-background2 flash" style="border-radius:2vw;"></div><div class="isReady" style="display:none">准备</div></div>';
     $('#member').append(html);
     if(data.user.zt==1){
        $('.member'+indexuser+' .isReady').show();
     }
    }
}
function zbuser(data){
     var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    $('.member'+indexuser+' .isReady').show();
}
function removeuser(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    $('.member'+indexuser+' .onlinezt').show();
    $('.member'+indexuser+' .isReady').hide();
}

function removeuser2(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    $('#member .member'+indexuser).remove();
}
function showmemberTimesText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
    $('#memberTimesText').append(html);
}
function showmemberTimesText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    if(indexuser==6){
        var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
    }
    else if(indexuser >5){
   
    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';

}else{
    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
}
  $('#memberTimesText2').append(html);
}

function showmemberRobText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    var html='<div class="memberRobText'+indexuser+'" style="display: block;" ><img src="'+data.img+'" style="position: absolute; width: 100%;"></div>';
    $('#memberRobText').append(html);
}
function showmemberRobText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    var html='<div class="memberFreeRobText'+indexuser+'" style="display: block;" ><img src="'+data.img+'" style="position: absolute; width: 100%;"></div>';

    $('#memberFreeRobText').append(html);
}

function showmemberBull(data){
     var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    var html='<div class="memberBull'+indexuser+'" style="display: block;"><img src="'+data.img+'" style="position: absolute; width: 100%;height: 100%;"/></div>';
    $('#memberBull').append(html);
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
        indexuser=indexuser-(-10);
    }

    if(data.bd){
        $('#userfp .qzcard').removeClass('qzcard');
    }
    $('#userfp .card'+indexuser).addClass('qzcard');
}
function showqz(data){
    // if($('#userfp .qzcard').length==0){
    //     $('#userfp .cardss').addClass('qzcard');
    // }
    var userindex=data['user'][data.index]-index-(-1);
    if(userindex<=0){
        userindex=userindex-(-10);
    }
  $('.jiurenniuniu-background').hide();
  $('.member'+userindex+' .jiurenniuniu-background').show();

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


  ji=setTimeout('showqz('+JSON.stringify(data)+')',3000/(data.user.length*t));
}

// 抢庄结束动画
function sss(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }

    clearTimeout(ji);
  $('.jiurenniuniu-background').hide();

 $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate1"+indexuser).animate({
                top: "-0.1vh",
                left: "-0.1vh",
                width: "7.26vh",
                height: "7.26vh"
            },
            400,
            function() {
                $("#bankerAnimate1"+indexuser).animate({
                    top: "-0.1vh",
                    left: "-0.1vh",
                    width: "7.26vh",
                    height: "7.26vh"
                },
                400,
                function() {
                  $('.member'+indexuser+' .jiurenniuniu-background').hide();
                  $('.member'+indexuser+' .jiurenniuniu-background1').show();
                    
                })
            }),
            $("#bankerAnimate"+indexuser).animate({
                top: "-1.5vh",
                left: "-1.5vh",
                width: "10.26vh",
                height: "10.26vh"
            },400),
                $("#bankerAnimate"+indexuser).animate({
                    top: "-0.1vh",
                    left: "-0.1vh",
                    width: "7.26vh",
                    height: "7.26vh"
              },400)

        }

        var jibiTime = null;
     function jibi(data){
        window.jibirun = 1;
        if(jibiTime) clearTimeout(jibiTime);
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
        var win=data.win.index-index-(-1);
        var lose=data.lose.index-index-(-1);
        if(win<=0){
            win=win-(-10);
        }
        if(lose<=0){
            lose=lose-(-10);
        }
        jibiTime =setTimeout(function () {
            window.jibirun = 0;
        }, 150);
        return Gold(lose, [win]);
}


function jibiover(data){
    $('#jinbi .member'+data).remove();
}


function jibichange(data){
    // 金币没飞完
    if(window.jibirun && window.jibirun == 1) {
        return setTimeout(function () { jibichange(data); }, 50);
    }
    for(var i=0;i<data.length;i++){
        var jifenxx=data[i];
        var userindex=jifenxx.index-index-(-1);
        if(userindex<=0){
            userindex=userindex-(-10);
        }
        var $member = $(".member"+userindex);
        var offset = $member.offset();
        var $html=$('<div class="memberScoreText'+userindex+'" data-dqjf="'+jifenxx.dqjf+'" data-index="'+userindex+'"></div>');
        $('#memberScoreText1').append($html);
        var left = offset.left;
        $html.css({"left":left, "top":offset.top+$member.height(), "opacity" : 1});
        var fx=jifenxx.fx;
    }
   if(fx==0){
        setTimeout('jibiover2()',3000);
    }
    else{
        setTimeout('jibiover2()',2500);
    }
}
function jibiover2(){
    clearmemberBull();
    clearmemberTimesText();
    $('#memberScoreText1 div').each(function(){
        var userindex=$(this).attr('data-index');
        var dqjf=parseInt($(this).attr('data-dqjf'));
        var lsjf=parseInt($('#member .member'+userindex+' .bscore').html());
        if(dqjf-lsjf>0){
            $(this).html('<label class="jiurenniuniu-memberScoreText2"  style="display: block;">+'+(dqjf-lsjf)+'</label>');
        }
        else{
            $(this).html('<label class="jiurenniuniu-memberScoreText1"  style="display: block;">'+(dqjf-lsjf)+'</label>');
        }
        var $this = $(this);
        (function (userindex, dqjf) {
            setTimeout(function () {
                $this.animate({"top":$('#member .member'+userindex).offset().top-$this.height()}, function () {
                    setTimeout(function () {
                        $('#member .member'+userindex+' .bscore').html(dqjf);
                    }, 500);
                });
            }, 100);
        })(userindex, dqjf);

    });
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
    $('.jiurenniuniu-background1').hide();
    $('.jiurenniuniu-background2').hide();

    $(".canvas_gold").remove();
    clearmemberBull();
    clearmemberTimesText();
    clearmemberRobText();
    operationButton('8');

    window.jibirun = 0;
    // 图片本地化为了让结算页面正常显示
    window.userimg = window.userimg ? window.userimg : {};
    $("img.avatar").each(function(i, item) {
        var src = $(item).attr("src");
        if(src.search("\/index\.php") < 0 && !window.userimg[src]) {
            var image = new Image();
            image.onerror = function (ev) {
                image.src = "/static/img/bull10/default_head.png";
            }
            image.src = "/Portal/thumb/index?url="+encodeURIComponent(src);
            window.userimg[image.src] = image;
        }
    });

    // var script=document.createElement("script");  
    //script.type="text/javascript";  
    //script.src="/static/js/robat.js";  
    //document.getElementsByTagName('head')[0].appendChild(script);
}
function zhunbei(){
    $("#divRobBankerText").html("");
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
    msgxx.img='/static/img/X-'+data.zt+'.png';
    msgxx.beishu=data.zt;
    showmemberTimesText(msgxx);
    mp3xx='xia'+indexsex[data.index.toString()]+data.zt;
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
            if(bankwz != 'rob') {
                html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/static/img/bull10/bull_text_'+bankwz+'.png">';
            }
            html+='</div><div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;width: 8vh;height: 4.16vh;">'
            html+='X'+data.zt;
            html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/static/img/X-'+data.zt+'.png" style="display: none;"></div>'
        }
        else{
            html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">'
            if(bankwz != 'rob') {
                html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/static/img/bull10/bull_text_' + bankwz + '.png"></div>'
            }
        }
        mp3xx='qiangzhuang'+indexsex[index.toString()];
    }
    else{
        html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">';
        html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/static/img/bull10/bull_text_not'+bankwz+'.png"></div>';
        mp3xx='buqiang'+indexsex[index.toString()];
    }
     $('#operationButton').html(html);
     mp3play(mp3xx);
}
function qbankshowother(data){
    var msgxx={};
    var bankwz='';
    var mp3xx='';
    msgxx.index=data.index;
    msgxx.beishu=data.zt;
    if(data.type==1){
        bankwz='go';
    }
    else{
        bankwz='rob';
    }
    if(data.zt){
        if(data.type==4){
            msgxx.img='/static/img/X-'+data.zt+'.png';
            showmemberTimesText2(msgxx);
            msgxx.img='/static/img/bull10/bull_text_'+bankwz+'.png';
            if(bankwz != 'rob') {
                showmemberRobText2(msgxx);
            }
        }
        else{
            msgxx.img='/static/img/bull10/bull_text_'+bankwz+'.png';
            if(bankwz != 'rob') {
                showmemberRobText(msgxx);
            }
        }
        mp3xx='qiangzhuang'+indexsex[data.index.toString()];
    }
    else{
        msgxx.img='/static/img/bull10/bull_text_not'+bankwz+'.png';
        showmemberRobText(msgxx);
        mp3xx='buqiang'+indexsex[data.index.toString()];
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
    img.src="/static/img/bull10/ranking_4_bg.jpg";
    img1.src="/static/dyj.png";
    //img2.src="bg.png";
    var sj=data;

    $("body").html("");
    var div = document.createElement('div');
    div.className = 'search-number-box';
    document.body.appendChild(div);
    var detailedBtn = '<a class="search-number-box-btn" href="/index.php/portal/home/xiangqing/room/'+window.roomID+'" style="position: absolute;z-index: 9999999;display: block;"></a>';
    $(detailedBtn).appendTo($(div));
    createRanking(data, function(src) {
        var img = new Image();
        img.src = src;
        if (parseInt(data.user.length) > 6) {
            img.className = 'room-gameover-ten';
        } else {
            img.className = 'room-gameover';
        }
        img.onload = function() {
            document.body.appendChild(img);
            $(function () {
                $("#loadings").remove();
            });
            if (document.getElementsByClassName('body')[0]) {
                document.body.removeChild(document.getElementsByClassName('body')[0]);
            }
            document.body.style.backgroundColor = '#000000';
            document.body.style.minHeight = 'initial';
            if (typeof(jQuery) != 'undefined') $(document.body).off('touchmove');
            setTimeout(getRankingSix, 200);
        };
        mp3open = 1;
        mp3play("background");
        $(document.body).off('touchmove');
    });
}


function msgshow(data){
      var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    mp3play(data.mp3);
       var html='<div class="messageSay messageSay'+indexuser+'" ><div id="fj-kjyy">'+data.msg+'</div> <div class="triangle"></div></div>'
      $('#messageSay').append(html);
      setTimeout(function(){
            console.log(indexuser);
            $('.messageSay'+indexuser).remove();
      },1500);
}

var opcount = 0;
function operationButton(data){
    var html='';
    if(data=='1'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block; margin: 0 2%;" onclick="qbank(1,1)">'
        html+='                        <img class="operationButton-3" src="/static/img/bull10/niuniu-zhuang.png">'
        html+='                        <div class="operationButton-3-ts" >'
        html+='上庄'
        html+='                        </div>'
        html+='                       </div>'
        html+='                       <div class="operationButton-4-zt" id="jiurenbqz" style="display: inline-block; margin: 0 2%;" onclick="qbank(0,1)">'
        html+='                        <img class="operationButton-gg" src="/static/img/bull10/niuniu-zhuang1.png"> '
        html+='                        <div class="operationButton-3-ts" >'
        html+='不上'
        html+='                        </div>'
        html+='                       </div>'
    }
    if(data=='2'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(1,4)">'
        html+='             <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div class="operationButton-gg3">'
        html+='               1倍'
        html+='             </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(2,4)">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               2倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='           z-index: 200;" onclick="qbank(4,4)">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               4倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="qbank(0,4)">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               不抢'
        html+='              </div>'
        html+='             </div> '
    }
    if(data=='3'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block;margin: 0 2%;" onclick="qbank(1,2)">'
        html+='                      <img class="operationButton-3" src="/static/img/bull10/niuniu-zhuang.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       抢庄'
        html+='                      </div>'
        html+='                     </div>'
        html+='                     <div class="operationButton-4-zt" id="jiurenbqz" style="display: inline-block;margin: 0 2%;" onclick="qbank(0,2)">'
        html+='                      <img class="operationButton-gg" src="/static/img/bull10/niuniu-zhuang1.png">'
        html+='                      <div class="operationButton-gg1" >'
        html+='                       不抢'
        html+='                      </div>'
        html+='                     </div>';
    }
    if(data=='4'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(1);">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div class="operationButton-gg3">'
        html+='               1倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(2);">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               2倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(3);">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               3倍'
        html+='              </div>'
        html+='             </div>' 
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(5);">'
        html+='              <img src="/static/img/bull10/niuniu-zhuang.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               5倍'
        html+='              </div>'
        html+='             </div>';
    }
    if(data=='5'){
        html+='<div class="gongg" style="display: block;"><!--等待闲家下注--></div>';
    }
    if(data=='6'){
        html+='<div class="gongg" style="display: block;">点击牌面翻牌</div>';
    }
    if(data=='7'){
        html+='<div class="operationButton-1-zt" id="jiurenbqz" style="display: inline-block;" onclick="tanpaime();">';
        html+='<img class="operationButton-gg" src="/static/img/bull10/niuniu-prepare.png"  /> ';
        html+='<div   class="operationButton-gg1"  style="width: 100%;">';
        html+='摊牌';
        html+='</div>';
        html+='</div>';
    }

    if(data=='8'){
        if(opcount > 0) {
            divRobBankerText(6);
            $("#divRobBankerText").css("display", "block");
        }
        html+='<div class="operationButton-1-zt">' +
            '<img class="operationButton-1" id="zb" src="/static/img/bull10/niuniu-prepare.png"/>' +
            '<div class="operationButton-gg1"  style="width: 100%;" onClick="zhunbei()">准备</div>'+
            '</div>';
    }

    if(data=='9'){
        html+='<div class="operationButton-2-zt">准备</div>';
    }

    opcount ++;
    $('#operationButton').html("");
    if(data==3 || data==2){
        setTimeout(function () {
            $('#operationButton').html(html);
        }, 2000);
    }
    else {
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
    if(data=='6'){
        html+='点击准备开始下一局';
    }
    $('#divRobBankerText').html(html);
}

function Gold(source, target) {
    if (source == "" || target == "") {
        return;
    }
    var id_bol;
    if (Object.prototype.toString.call(source) == '[object Array]') {
        id_bol = true;
    } else {
        id_bol = false;
    }
    var count = 15;
    var gold_w = 10;
    var gold_h = 10;
    var obj = [];
    var str = [];
    var str1 = [];
    var bol = false;
    var index = 39;
    var _index = 0;
    var index1_num = 0;
    var music_bol = true;
    var $canvas = $('<canvas width="' + $(window).width() + '" height="' + $(window).height() + ' "class="canvas_gold"></canvas>').appendTo('body');
    var can = $canvas.get(0).getContext("2d");
    if (id_bol) {
        var $target = $('.member' + target);
        for (var z = 0; z < source.length; z++) {
            var $source = $('.member' + source[z]);
            if(!$source.length || !$target.length) continue;
            var coins = [];
            var _str_a = [];
            var _str_b = [];
            for (var i = 0; i < count; i++) {
                var coin = new jinbi(gold_w, gold_h);
                coin.x = $source.position().left + Math.round(Math.random() * ($source.width() * 0.62));
                coin.y = $source.position().top + Math.round(Math.random() * ($source.width() * 0.62));
                coins.push(coin);
                _str_a.push({
                    "x": coin.x,
                    "y": coin.y
                });
                _str_b.push({
                    "x": $target.position().left + Math.round(Math.random() * ($target.width() * 0.62)),
                    "y": $target.position().top + Math.round(Math.random() * ($target.width() * 0.62))
                });
            }
            obj.push(coins);
            str.push(_str_a);
            str1.push(_str_b);
        }
    } else {
        var $source = $('.member' + source + '');
        for (var z = 0; z < target.length; z++) {
            var $target = $('.member' + target[z] + '');
            var coins = [];
            var _str_a = [];
            var _str_b = [];
            for (var i = 0; i < count; i++) {
                var coin = new jinbi(gold_w, gold_h);
                coin.x = $source.position().left + Math.round(Math.random() * ($source.width() * 0.62));
                coin.y = $source.position().top + Math.round(Math.random() * ($source.width() * 0.62));
                coins.push(coin);
                _str_a.push({
                    "x": coin.x,
                    "y": coin.y
                });
                _str_b.push({
                    "x": $target.position().left + Math.round(Math.random() * ($target.width() * 0.62)),
                    "y": $target.position().top + Math.round(Math.random() * ($target.width() * 0.62))
                });
            }
            obj.push(coins);
            str.push(_str_a);
            str1.push(_str_b);
        }
    }
    var img = new Image();
    img.src = "/static/img/bull10/gold.png";
    img.onload = function() {
        move();
    }
    function move() {
        can.clearRect(0, 0, $canvas.width(), $canvas.height());
        if (_index % 2 == 0 && index1_num < count) {
            index1_num++;
        }
        for (var j = 0; j < obj.length; j++) {
            for (var k = 0; k < index1_num; k++) {
                obj[j][k].index++;
                if (obj[j][k].index <= index) {
                    obj[j][k].x += (str1[j][k]["x"] - str[j][k]["x"]) / index;
                    obj[j][k].y += (str1[j][k]["y"] - str[j][k]["y"]) / index;
                    obj[j][k].draw();
                }
                if (obj[j][0].index == index / 3) {
                    if (music_bol) {
                        mp3play('mp3gold');
                        music_bol = false;
                    }
                }
            }
        }
        if (obj[0][0].index == index) {
            if (id_bol) {
                $('.member' + target + '').addClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.member' + target[i] + '').addClass('flash');
                }
            }
        } else if (obj[0][count - 1].index == index) {
            if (id_bol) {
                $('.member' + target + '').removeClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.member' + target[i] + '').removeClass('flash');
                }
            }
        }
        _index++;
        if (obj[0][count - 1].index > index) {
            bol = true;
            setTimeout(function() {
                    //$canvas.remove();
                },
                500)
        }
        if (!bol) {
            setTimeout(move, 15)
        }
    }
    function jinbi(w, h) {
        var img = new Image();
        img.src = "/static/img/bull10/gold.png";
        this.play = img;
        this.x = 0;
        this.y = 0;
        this.index = 0;
        this.width1 = w;
        this.height1 = h;
        this.draw = function() {
            can.drawImage(this.play, 0, 0, this.play.width, this.play.height, this.x, this.y, this.width1, this.height1);
        }
    }
}

function createRanking(data, func) {
    var users = data.user;
    var game_id = 4;
    var room_number = data.id;
    var num = data.zjs;
    var sum = data.zjs;
    var datetime = data.time;
    var width = 750;
    var height = 1216;
    var pics = ['/static/img/bull10/ranking_' + game_id + '_bg.jpg', '/static/img/bull10/people_bg.png', '/static/img/bull10/ranking_icon.png'];
    if (users.length > 6) {
        pics.push('/static/img/bull10/people_bg2.jpg');
        pics.push('/static/img/bull10/people_bg3.jpg');
        height += 102 * (users.length - 6);
    }
    var count = 0,
        imgs = [];
    for (var i in users) {
        // 图片本地化
        if(users[i].img.search("\/index\.php") < 0) {
            users[i].img = "/Portal/thumb/index?url="+encodeURIComponent(users[i].img);
        }
        pics.push(users[i].img);
    }
    window.userimg = window.userimg ? window.userimg : {};
    for (var i in pics) {
        if(!window.userimg[pics[i]]) {
            var img = document.createElement("img");
            img.onload = function () {
                count++;
                if (count >= pics.length) draw();
            };
            img.onerror = function () {
                this.src = "/static/img/bull10/default_head.png";
            };
            img.src = pics[i];
        } else {
            var img = window.userimg[pics[i]];
        }
        imgs[i] = img;
    }
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    function draw() {
        context.drawImage(imgs[0], 0, 0, width, width / 750 * 1216);
        var text = '房间号：' + room_number + '                     ' + datetime + '   ' + num + '/' + sum + '局';
        context.font = "19px 微软雅黑";
        context.textAlign = 'center';
        context.fillStyle = "#a28080";
        context.fillText(text, 375, 412);
        for (var i in users) {
            if (i >= 6) context.drawImage(imgs[3], 0, 430 + i * 102, 750, 102);
            var n = parseInt(i) + parseInt(users.length > 6 ? 5 : 3);
            context.drawImage(imgs[n], 170, 446 + i * 102, 59, 59);
            context.drawImage(imgs[1], 129, 430 + i * 102, 490, 90);
            var textwidth = 250;
            context.font = "24px 微软雅黑";
            context.textAlign = 'start';
            context.fillStyle = "#666666";
            var arr = decode64(users[i].nickname).split('');
            var txt = '',
                row = [];
            for (var j in arr) {
                if (context.measureText(txt).width >= textwidth) {
                    row.push(txt);
                    txt = '';
                }
                txt += arr[j];
            }
            if (txt != '') row.push(txt);
            if (row.length == 1) {
                context.fillText(row[0], 240, 482 + 102 * i);
            } else {
                context.fillText(row[0], 240, 470 + 102 * i);
                context.fillText(row[1], 240, 498 + 102 * i);
            }
            context.font = "36px 微软雅黑";
            context.textAlign = 'center';
            if (users[i]['dqjf'] > 0) {
                context.fillStyle = "#cd5908";
                context.fillText('+' + users[i]['dqjf'], 560, 490 + 102 * i);
            } else if (users[i]['dqjf'] < 0) {
                context.fillStyle = "#32b16c";
                context.fillText(users[i]['dqjf'], 560, 490 + 102 * i);
            } else {
                context.fillStyle = "#989898";
                context.fillText('0', 560, 490 + 102 * i);
            }
            if (users[i]['dqjf'] == users[0]['dqjf']) {
                context.drawImage(imgs[2], 108, 430 + i * 102, 51, 84);
            }
        }
        if (i >= 6) context.drawImage(imgs[4], 0, 430 + (++i) * 102, 750, 175);
        if (typeof(func) == 'function') func(canvas.toDataURL("image/png"));
    }
}

function getRankingSix(gameId) {
    if (document.getElementsByClassName('room-gameover')[0] && document.getElementsByClassName('search-number-box')[0]) {
        var div = document.getElementsByClassName('search-number-box')[0];
        var imag = document.getElementsByClassName('room-gameover')[0];
        var aBtn = document.getElementsByClassName('search-number-box-btn')[0];
        var a = getNaturalSize(imag).width;
        var b = getNaturalSize(imag).height;
        var c = imag.offsetWidth;
        var d = imag.offsetHeight;
        var index = (parseInt(a) / parseInt(b)) / (parseInt(c) / parseInt(d));
        if (parseInt(gameId) === 8 || parseInt(gameId) === 9) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (228 / a) * 2 + 'px';
                aBtn.style.height = b / a * c * (68 / b) * 2 + 'px';
                aBtn.style.left = c * (420 / a) * 2 + 'px';
                aBtn.style.top = b / a * c * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (228 / a) * 2 + 'px';
                aBtn.style.height = d * (68 / b) * 2 + 'px';
                aBtn.style.left = a / b * d * (420 / a) * 2 + 'px';
                aBtn.style.top = d * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (228 / a) * 2 + 'px';
                aBtn.style.height = d * (68 / b) * 2 + 'px';
                aBtn.style.left = c * (420 / a) * 2 + 'px';
                aBtn.style.top = d * ((41 + 611 * 520 / 360 + 68) / b) * 2 + 'px';
            }
        } else if (parseInt(gameId) === 3) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (455 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 110) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (455 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (455 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            }
        } else if (parseInt(gameId) === 7) {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (441 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 150) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (441 / a) + 'px';
                aBtn.style.top = d * ((b - 150) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (441 / a) + 'px';
                aBtn.style.top = d * ((b - 150) / b) + 'px';
            }
        } else {
            if (index > 1) {
                div.style.top = (d - b / a * c) / 2 + 'px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = b / a * c * (74 / b) + 'px';
                aBtn.style.left = c * (419 / a) + 'px';
                aBtn.style.top = b / a * c * ((b - 110) / b) + 'px';
            } else if (index < 1) {
                div.style.top = '0px';
                div.style.left = (c - a / b * d) / 2 + 'px';
                aBtn.style.width = a / b * d * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = a / b * d * (419 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            } else {
                div.style.top = '0px';
                div.style.left = '0px';
                aBtn.style.width = c * (236 / a) + 'px';
                aBtn.style.height = d * (74 / b) + 'px';
                aBtn.style.left = c * (419 / a) + 'px';
                aBtn.style.top = d * ((b - 110) / b) + 'px';
            }
        }
        function getNaturalSize(Domlement) {
            var natureSize = {};
            if (window.naturalWidth && window.naturalHeight) {
                natureSize.width = Domlement.naturalWidth;
                natureSize.height = Domlement.naturalHeight;
            } else {
                var img = new Image();
                img.src = Domlement.src;
                natureSize.width = img.width;
                natureSize.height = img.height;
            }
            return natureSize;
        }
    }
}