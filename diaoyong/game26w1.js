var xiazhu_fen=0;
function startroom(data){
    $('#userfp').html('');
    $('.isReady').hide();

    $("#panel div.cup div.touzi3d").css("display", "none");
    $("#panel div.cup").css("display", "block");
    $("#panel div.cup").addClass("maozi");

    if(data.fenpai) {
        var html2 = '<div class="pbig touzi'+data.fenpai[0]+' up1" style="display: block;"></div>' +
            '            <div class="pbig touzi'+data.fenpai[1]+' up2" style="display: block;"></div>' +
            '            <div class="pbig touzi'+data.fenpai[2]+' up3" style="display: block;"></div>' +
            '            <div class="pbig touzi-img'+data.fenpai[0]+' down1" style="display: block;"></div>' +
            '            <div class="pbig touzi-img'+data.fenpai[1]+' down2" style="display: block;"></div>' +
            '            <div class="pbig touzi-img'+data.fenpai[2]+' down3" style="display: block;"></div>';
        $("#panel div.open").css("display","block").html(html2);
    }
}

function history(data) {
    var html = "";
    for(var i = 0; i < data.length; i ++) {
        var text = "";
        if(data[i]['prizes']["big"]) {
            text = "大";
        }
        if(data[i]['prizes']["little"]) {
            text = "小";
        }
        html += '<div class="item">\n' +
            '             <div class="hjs">'+data[i]['js']+'</div>\n' +
            '             <div class="himg">\n' +
            '                 <img src="/app/img/beastfish/t'+data[i]['result'][0]+'.png"/>\n' +
            '             </div>\n' +
            '             <div class="himg">\n' +
            '                 <img src="/app/img/beastfish/t'+data[i]['result'][1]+'.png"/>\n' +
            '             </div>\n' +
            '             <div class="himg">\n' +
            '                 <img src="/app/img/beastfish/t'+data[i]['result'][2]+'.png"/>\n' +
            '             </div>\n' +
            '             <div class="htext">'+text+'</div>\n' +
            '         </div>';
    }
    $("#history-box").html(html);
}

var allcardxx;
function fapaistart(data){
    allcardxx=data;
    var fp=0;
    for(i=1;i<3;i++){
            var xx={};
            xx.id=i;
            xx.card=data['card'][index][i-1];
           $('.cardDeal .card1'+i).attr('onclick','fapxx('+JSON.stringify(xx)+')');
           if($('.cardDeal .card1'+i).is(':hidden')){
             fp=fp+1;
           }
    }
    if(fp>=2){
        operationButton(7);
    }
}
function fapxx(data){
    $('.myCards .card'+(data.id-1)+'  .back').removeClass('cardundefined').addClass('card'+data.card);
    $('.cardDeal .card1'+data.id).hide();
    $('.myCards .card'+(data.id-1)).show();
    $('.myCards .card'+(data.id-1)).addClass('card-flipped');
    var fp=0;
    for(var i=1;i<3;i++){
        if($('.cardDeal .card1'+i).is(':hidden')){
            fp=fp+1;
        }
    }
    if(fp>=2){
        operationButton(7);
    }
}
function tanpaime(){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('tanpai',{time:time});
    operationButton();
    //showtanpai();
}
function showtanpai(){
    var mp3xx='';
    operationButton(-1);
    tanpaixx({card:allcardxx['newcard'][index]});
    //tanpaixx2({card:allcardxx['newcard'][index]});
    var msgxx={};
    msgxx.index=index;
    msgxx.img='/themes/game/Public/zhongyi/img/pai/point/win'+allcardxx['allniu'][index]+'.png';
    showmemberBull(msgxx);
    mp3xx='mp3niu'+allcardxx['allniu'][index];
    mp3play(mp3xx);
}
function showothertanpai(data){
    if(data==index){
        showtanpai();
    }
    else if(allcardxx && typeof(allcardxx['allniu']) != undefined){
        mp3xx='mp3niu'+allcardxx['allniu'][data];

        var msgxx={};
        msgxx.index=data;
        msgxx.img='/themes/game/Public/zhongyi/img/pai/point/win'+allcardxx['allniu'][data]+'.png';
        showmemberBull(msgxx);

        var msgxx={};
        msgxx.user={};
        msgxx.user.index=data;
        msgxx.card=allcardxx['card'][data];
        tanpaixxother(msgxx);

        mp3play(mp3xx);
    }
}

function tanpaixx(data){
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('.card0'+i+'  .back').removeClass('cardundefined').addClass('card'+card);
    }

    $('.cardDeal .card1').hide();
    $('.myCards').eq(0).hide();
    $('.myCards').eq(1).show();
}

function tanpaixx2(data){
    for(var i=0;i<data.card.length;i++){
        var card=data['card'][i];
        $('.card0'+i+'  .back').removeClass('cardundefined').addClass('card'+card);
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
        indexuser=indexuser-(-12);
    }
    var html='<div>';
    var hz=0;
    var left=['20.5','18.5','13.5','11.5','9.5'];
    var right=['12.63','14.63','17.63','19.63','21.63'];
    for(var i=0;i<data.card.length;i++){
        var card=data["card"][i];
        var cs = 'jiurenniuniu-index1'+(1-i)+'s'+(indexuser<6 ? 's' : '');
        html=html+'<div class="cards card'+indexuser+' card'+indexuser+(i-(-1))+'1 '+cs+' card-flipped"><div class="face front"></div> <div class="face back card'+indexuser+' card'+card+' card-flipped"></div></div>';
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
     html+='<div style="background: rgb(0, 0, 0); z-index: 888; position: absolute; width: 100%; height: 100%; opacity: 0.5;'+onlinezt+'" class="onlinezt"></div>'
     html+='<img src="'+data.user.img+'" class="avatar" />'
     html+='<div class="banker flash" style="display: none;"></div>'
     html+='<div class="bottom jiurenniuniu-bottom">'
     html+='<div class="bname jiurenniuniu-bname">'+decode64(data.user.nickname)+'</div>'
     html+='<div class="bscore jiurenniuniu-bname">'+data.user.dqjf+'</div></div> '
     html+='<img id="banker213612" src="/themes/game/Public/zhongyi/img/bull_banker_bg.png" class="background jiurenniuniu-background" /> '
     html+='<img src="/app/img/beastfish/zhuang.png" class="background jiurenniuniu-background1" />'
     html+='<div id="bankerAnimate'+indexuser+'" class="jiurenniuniu-background2 flash" style="border-radius:0;"></div>'
     html+='<div id="bankerAnimate1'+indexuser+'" class="jiurenniuniu-background2 flash" style="border-radius:0;"></div><div class="isReady ready" style="display:none"><img style="width: 100%;height:100%;" src="/app/img/beastfish/ready.jpg"/></div></div>';
     $('#member').append(html);
     $("div.vacancy"+indexuser).css("display", "none");
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
    $("div.vacancy"+indexuser).css("display", "block");
}
function showmemberTimesText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
    $('#memberTimesText').append(html);
}
function showmemberTimesText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    if(indexuser==6){
        var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >抢庄×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
    }
    else if(indexuser >5){

    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >抢庄×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';

}else{
    var html='<div class="memberTimesText memberTimesText'+indexuser+'" style="display: block;" >抢庄×'+data['beishu']+'<img src="'+data.img+'" style="position: absolute; width: 100%;display: none;" /></div>';
}
  $('#memberTimesText2').append(html);
}

function showmemberRobText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberRobText memberRobText'+indexuser+'" style="display: block;" >不抢</div>';
    $('#memberRobText').append(html);
}
function showmemberRobText2(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var html='<div class="memberRobText memberRobText'+indexuser+'" style="display: block;" >抢庄</div>';

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
    // if($('#userfp .qzcard').length==0){
    //     $('#userfp .cardss').addClass('qzcard');
    // }
    var userindex=data['user'][data.index]-index-(-1);
    if(userindex<=0){
        userindex=userindex-(-12);
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
        indexuser=indexuser-(-12);
    }

    clearTimeout(ji);
  $('.jiurenniuniu-background').hide();

 $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate1"+indexuser).animate({
                    top: "0",
                    left: "0",
                    width: "6vh",
                    height: "6vh"
            },
            400,
            function() {
                $("#bankerAnimate1"+indexuser).animate({
                        top: "0",
                        left: "0",
                        width: "6vh",
                        height: "6vh"
                },
                400,
                function() {
                  $('.member'+indexuser+' .jiurenniuniu-background').hide();
                  $('.member'+indexuser+' .jiurenniuniu-background1').show();

                })
            }),
            $("#bankerAnimate"+indexuser).animate({
                top: "-2vh",
                left: "-2vh",
                width: "10vh",
                height: "10vh"
            },400),
                $("#bankerAnimate"+indexuser).animate({
                    top: "0",
                    left: "0",
                    width: "6vh",
                    height: "6vh"
              },400)

        }

        var jibiTime = null;
function jibi(data){
    if(data.win.index!=data.bank.index && data.zt!=1){
        if(data.fx==1){
            var kstime=5000;
        }
        else{
            var kstime=5000+200*8+1000;
        }
        data.zt=1;
        setTimeout('jibi('+JSON.stringify(data)+')',kstime);
        return false;
    }
    if(data.win.index==data.bank.index && data.zt!=1){
        var kstime=5000;
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

    var top  = parseInt($('.member'+lose).offset().top);
    var left = parseInt($('.member'+lose).offset().left);

    var ytop  = parseInt($('.member'+win).offset().top);
    var yleft = parseInt($('.member'+win).offset().left);
    for(var i=0;i<11;i++){
        var $html=$('<div class="memberCoin member'+win+lose+'"><img src="/app/img/beastfish/bull_coin.png" class="jiurenniuniu-memberCoin" /></div>');
        $('#jinbi').append($html);
        $('#jinbi .member'+win+lose).eq(i).css('top',top+$html.height()/2);
        $('#jinbi .member'+win+lose).eq(i).css('left',left+$html.width()/2);
        $('#jinbi .member'+win+lose).eq(i).animate({
            top:ytop+$html.height()/2,
            left:yleft+$html.width()/2
        },0+i*180, function () {
            var $this = $(this);
            setTimeout(function () {
                $this.remove();
            }, 50);
        });
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
        setTimeout('jibiover2()',7000);
    }
    else{
        setTimeout('jibiover2()',4500);
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
    /*$('.cardDeal').html('');
    $('.cardOver').html('');
    $('.myCards').hide();
    $('.myCards').eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>')
    $('.myCards').eq(1).html('<div class="cards card00" style="left: 34%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 40%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 46%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 61%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 68%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    $('.myCards').eq(2).html('<div class="cards card00" style="left: 33%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 42%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 51%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 60%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 69%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    */
    $('#memberScoreText1').show();
}



function initroom(){

    xiazhu_fen = 0;
    $('.cardDeal').html('');
    $('.cardOver').html('');

    $("#panel div.cup, #panel div.open").css("display", "none");
    $("#panel div.cup").removeClass("over").removeClass("maozi");
    $("#panel .item .wp").removeClass("on");
    $(".bling").removeClass("bling");
    $("#panel .item .total,#panel .item .my").css("display", "block").html("");
    $(".fly-coin").remove();


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
    operationButton("");
    $('.member1 .isReady').show();
}


function xiazhu(index, fen) {
    xiazhu_fen = fen;
    $("#operationButton div.divCoin").css("top", "0");
    $("#operationButton div.divCoin:eq("+index+")").css("top","-3vh");
    $("#operationButton div.divCoin").find(".down").css("display", "block");
    $("#operationButton div.divCoin").find(".up").css("display", "none");

    $("#operationButton div.divCoin:eq("+index+")").find(".down").css("display", "none");
    $("#operationButton div.divCoin:eq("+index+")").find(".up").css("display", "block");
    $("#panel div.item").unbind("click");
    $("#panel div.item").click(function (e) {
        e.preventDefault();
        xianxz($(this).attr("data-type"), xiazhu_fen);
    });
}

function xiazhuError(data) {
    //alert(data);
}
function yao() {
    var time=Math.ceil(new Date()/1000)-timewc;
    send('yao',{time:time});
    $("#tou-end .on").css("display", "block");
    $("#tou-end .off").css("display", "none");
}
function stopyao() {
    if($("#tou-end .on").css("display") == "none") return;
    var time=Math.ceil(new Date()/1000)-timewc;
    send('stopyao',{time:time});
    //operationButton('');
}
function showyao() {
    mp3play('shake');
    $("#panel div.cup").addClass("yao");
    setTimeout(function () {
        $("#panel div.cup").removeClass("yao");
    }, 1000);
}
function xianxz(type, fen){
    if(!fen) return false;
    var time=Math.ceil(new Date()/1000)-timewc;
    send('xianxz',{type:type,fen:fen,time:time});
    //showxian({index:index,zt:zt});
    //operationButton('-1');
}
function showxian(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-12);
    }
    var msgxx={};
    var mp3xx='';
    msgxx.index=data.index;
    msgxx.img='/app/img/beastfish/c'+data.fen+'1.png';
    msgxx.type=data.type;
    var $html = $('<div class="fly-coin"><img src="'+msgxx.img+'"/></div>');
    $("body").append($html);
    var $target = $('#panel div.item[data-type="'+data.type+'"] .wp');
    var maxLeft = $target.offset().left+$target.width()-$html.width();
    var maxTop = $target.offset().top+$target.height()-$html.height();
    var tLeft = $target.offset().left+Math.random()*$target.width();
    var tTop = $target.offset().top+Math.random()*$target.height();
    if(data.index==index){
        //operationButton('-1');
        var start = $(".member"+indexuser).offset();
    } else {
        var start = $(".member"+indexuser).offset();
    }
    $html.css({"left":start.left,"top":start.top})
    if(tLeft>maxLeft) tLeft = maxLeft;
    if(tTop>maxTop) tTop = maxTop;
    $html.animate({"left":tLeft,"top":tTop});
    for(var k in data.allTotal) {
        $("#panel div.item[data-type='"+k+"'] .total").html(data.allTotal[k]);
    }
    for(var k in data.meTotal) {
        $("#panel div.item[data-type='"+k+"'] .my").html(data.meTotal[k]);
    }
    //mp3play('chip');
    //showmemberTimesText(msgxx);
    //mp3xx='xia'+getsex(data.index)+data.zt;
    //mp3play(mp3xx);
}

function showxianTotal(data){
    for(var k in data.allTotal) {
        $("#panel div.item[data-type='"+k+"'] .total").html(data.allTotal[k]);
    }
    for(var k in data.meTotal) {
        $("#panel div.item[data-type='"+k+"'] .my").html(data.meTotal[k]);
    }
}

// 开骰结果
function showresult(data) {
    mp3play('kaizhuang');
    var html1 = '<div class="touzi3d touzi3d'+data["result"][0]+' pos1"></div>' +
    '            <div class="touzi3d touzi3d'+data["result"][1]+' pos2"></div>' +
    '            <div class="touzi3d touzi3d'+data["result"][2]+' pos3"></div>';
    var html2 = '<div class="pbig touzi'+data["result"][0]+' up1" style="display: none;"></div>' +
        '            <div class="pbig touzi'+data["result"][1]+' up2" style="display: none;"></div>' +
        '            <div class="pbig touzi'+data["result"][2]+' up3" style="display: none;"></div>' +
        '            <div class="pbig touzi-img'+data["result"][0]+' down1" style="display: none;"></div>' +
        '            <div class="pbig touzi-img'+data["result"][1]+' down2" style="display: none;"></div>' +
        '            <div class="pbig touzi-img'+data["result"][2]+' down3" style="display: none;"></div>';
    $("#panel div.cup").css("display", "block").html(html1).addClass("over");
    $("#panel div.open").html(html2);
    setTimeout(function () {
        $("#panel div.cup").removeClass("maozi").removeClass("over");
    }, 2000);

    setTimeout(function () {
        $("#panel div.open, #panel div.open div.up1").css("display", "block");
        $("#panel div.open div.down1").css("display", "block");
        $("#panel div.open div.down1, #panel div.open div.up1").addClass("bling");

        var $wp = $("#panel .item[data-type='"+data["result"][0]+"'] .wp");
        $wp.addClass("on");
        mp3play('fish'+data["result"][0]);
    }, 1200);
    setTimeout(function () {
        $("#panel div.open div.up2").css("display", "block");
        $("#panel div.open div.down2").css("display", "block");
        $("#panel div.open div.down2, #panel div.open div.up2").addClass("bling");

        var $wp = $("#panel .item[data-type='"+data["result"][1]+"'] .wp");
        $wp.addClass("on");
        mp3play('fish'+data["result"][1]);
    }, 2200);
    setTimeout(function () {
        if(data["prizes"]['little']) {
            $("#panel .item[data-type='little'] .wp").addClass("on");
        }
        if(data["prizes"]['big']) {
            $("#panel .item[data-type='big'] .wp").addClass("on");
        }

        $("#panel div.open div.up3").css("display", "block");
        $("#panel div.open div.down3").css("display", "block");
        $("#panel div.open div.down3, #panel div.open div.up3").addClass("bling");

        var $wp = $("#panel .item[data-type='"+data["result"][2]+"'] .wp");
        $wp.addClass("on");
        mp3play('fish'+data["result"][2]);
    }, 3200);
    setTimeout(function () {
        var point = Math.ceil(data["result"][0])+Math.ceil(data["result"][1])+Math.ceil(data["result"][2]);
        mp3play('point'+point);
    }, 3900);
}

function qbank(zt,type){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('qbank',{zt:zt,time:time,type:type});
    qbankshow({zt:zt,type:type});
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
        html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">';
        html += '抢庄</div>';
        mp3xx='qiangzhuang';
    }
    else{
        html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">';
        html+='不抢</div>';
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
            } else {
                showmemberRobText2(msgxx);
            }
        }
        mp3xx='qiangzhuang';
    }
    else{
        msgxx.img='/static/img/bull10/bull_text_not'+bankwz+'.png';
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
    img.src="/app/12fish.png";
    img1.src="/app/dyj.png";
    img2.src="/app/img/beastfish/user-line.png";
    //img2.src="bg.png";
    var sj=data;
    img.onload = function(){
        ctx.drawImage(img,0,0,800,1297);
        //ctx.drawImage(img1,120,221,50,60);
        //ctx.drawImage(img1,87,156,50,34)
        //ctx.drawImage(img2,87,193,50,34)
        var time1=sj.time.substring(0,sj.time.length-3);
        ctx.font = "25px bolder 微软雅黑";
        ctx.fillStyle = "#f7f2db";
        ctx.fillText(window.fangzhu.skinname+"房间:4"+sj.id, 175,235);
        ctx.fillText(time1, 375, 235);
        ctx.fillText(sj.zjs+"局", 575, 235);

        ctx.font = "26px bolder 微软雅黑";
        ctx.fillStyle = "#5761A9";
        var writeContent = fangzhu.skinname+'房主 ：'+fangzhu.nickname;
        var writeLeft = (c.width-ctx.measureText(writeContent).width)/2;
        ctx.fillText(writeContent,writeLeft,185);

        for(var i=0;i<sj.user.length;i++){
            if(i>1){
                ctx.fillStyle = "#19170b";
                ctx.drawImage(img2,105,320-(0-(i-1)*70),593,65);
            }
            var user=sj['user'][i];
            ctx.font = "30px bolder 微软雅黑";
            ctx.fillStyle = "black";
            ctx.fillText(user.id, 175, 305+(i*67));
            ctx.fillText(decode64(user.nickname).substring(0,8), 319, 305+(i*67));
            if(user.dqjf>0){
                user.dqjf='+'+user.dqjf;
            }
            ctx.fillText( user.dqjf, 581, 305+(i*67));
        }
        var dataURL = c.toDataURL();
        $('#overtime').html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 3%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="'+dataURL+'" style="width: 100%;height:100%;position: absolute;z-index: 9201;">')
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
        html+='<div class="operationButton-3-zt" id="tou-yao" style="display: inline-block;margin: 0 2%;" onclick="yao()">'
        html+='                      <img class="operationButton-3" src="/app/img/beastfish/button2.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       摇 筛'
        html+='                      </div>'
        html+='                     </div>';
        html+='                     <div class="operationButton-3-zt" id="tou-end" style="display: inline-block;margin: 0 2%;" onclick="stopyao()">'
        html+='                      <img class="operationButton-3 on" style="display: none;" src="/app/img/beastfish/button2.png">'
        html+='                      <img class="operationButton-3 off" style="display: block;" src="/app/img/beastfish/defaultbutton.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       结 束'
        html+='                      </div>'
        html+='                     </div>';
    }
    if(data=='3'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block;margin: 0 2%;" onclick="qbank(1,2)">'
        html+='                      <img class="operationButton-3" src="/app/img/beastfish/button2.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       抢 庄'
        html+='                      </div>'
        html+='                     </div>'
        html+='                     <div class="operationButton-3-zt" id="jiurenbqz" style="display: inline-block;margin: 0 2%;" onclick="qbank(0,2)">'
        html+='                      <img class="operationButton-3" src="/app/img/beastfish/bull_button_blue.png">'
        html+='                      <div class="operationButton-3-ts" >'
        html+='                       不 抢'
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
        html+='<div class="operationButton-3-zt" id="jiurenbqz" style="display: inline-block;" onclick="tanpaime();">';
        html+='<img class="operationButton-3" src="/app/img/beastfish/button2.png"  /> ';
        html+='<div   class="operationButton-3-ts"  style="width: 100%;">';
        html+='开 盅';
        html+='</div>';
        html+='</div>';
    }

    if(data=='8'){
        if(opcount > 0) {
            divRobBankerText(6);
            $("#divRobBankerText").css("display", "block");
        }
        html+='<div class="operationButton-1-zt">' +
            '<img class="operationButton-1" id="zb" src="/app/img/beastfish/readyButton.png"/>' +
            '<div class="operationButton-gg1"  style="width: 100%;" onClick="zhunbei()"></div>'+
            '</div>';
    }

    if(data=='9'){
        html+='<div class="operationButton-2-zt"><img style="width: 15vw;" src="/themes/game/Public/zhongyi/img/readytxt.png"/></div>';
    }

    // 筹码5,10,20,50
    if(data=='10'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(0,5);">'
        html+='              <img src="/app/img/beastfish/c51.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c54.png"  class="up operationButton-gg"  />'
        html+='             </div>'
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(1,10);">'
        html+='              <img src="/app/img/beastfish/c101.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c104.png"  class="up operationButton-gg"  />'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(2,20);">'
        html+='              <img src="/app/img/beastfish/c201.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c204.png"  class="up operationButton-gg"  />'
        html+='             </div>'
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(3,50);">'
        html+='              <img src="/app/img/beastfish/c501.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c504.png"  class="up operationButton-gg"  />'
        html+='             </div>';
    }
    // 筹码10,20,50,100
    if(data=='11'){
        html+='<div class="divCoin divCoin1" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(0,10);">'
        html+='              <img src="/app/img/beastfish/c101.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c104.png"  class="up operationButton-gg"  /> '
        html+='             </div>'
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(1,20);">'
        html+='              <img src="/app/img/beastfish/c201.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c204.png"  class="up operationButton-gg"  /> '
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(2,50);">'
        html+='              <img src="/app/img/beastfish/c501.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c504.png"  class="up operationButton-gg"  /> '
        html+='             </div>'
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xiazhu(3,100);">'
        html+='              <img src="/app/img/beastfish/c1001.png"  class="down operationButton-gg"  /> '
        html+='              <img src="/app/img/beastfish/c1001.png"  class="up operationButton-gg"  /> '
        html+='             </div>';
    }

    opcount ++;
    $('#operationButton').html("");
    $('#operationButton').html(html);
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
        html+='等待庄家开骰';
    }
    if(data=='5'){
        html+='等待结束';
    }
    if(data=='6'){
        //html+='点击准备开始下一局';
    }
    if(data=='7'){
        html += '庄家摇骰';
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
    var pics = ['/static/img/bull10/ranking_' + game_id + '_bg.jpg', '/themes/game/Public/zhongyi/img/userbg.png', '/themes/game/Public/zhongyi/img/winboss.png'];
    if (users.length > 16) {
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
        var text = '房间号：' + room_number + '    ' + datetime + '   ' + num + '/' + sum + '局';
        context.font = "24px 微软雅黑";
        context.textAlign = 'center';
        context.fillStyle = "#bd926e";
        context.fillText(text, 375, 222);
        for (var i in users) {
            context.drawImage(imgs[1], 99, 250 + i * 77, 550, 70);
            if (i >= 16) context.drawImage(imgs[3], 0, 430 + i * 77, 750, 102);
            var n = parseInt(i) + parseInt(users.length > 16 ? 5 : 3);
            context.drawImage(imgs[n], 180, 260 + i * 77, 50, 50);
            var textwidth = 250;
            context.font = "24px 微软雅黑";
            context.textAlign = 'start';
            context.fillStyle = "#cb5d19";
            if(users[i]['dqjf'] < 0) {
                context.fillStyle = "#57b929";
            }

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
                context.fillText(row[0], 240, 294 + 77 * i);
            } else {
                context.fillText(row[0], 240, 290 + 72 * i);
                context.fillText(row[1], 240, 318 + 72 * i);
            }
            context.font = "36px 微软雅黑";
            context.textAlign = 'center';
            if (users[i]['dqjf'] > 0) {
                context.fillStyle = "#cb5d19";
                context.fillText('+' + users[i]['dqjf'], 560, 300 + 75 * i);
            } else if (users[i]['dqjf'] < 0) {
                context.fillStyle = "#57b929";
                context.fillText(users[i]['dqjf'], 560, 310 + 75 * i);
            } else {
                context.fillStyle = "#989898";
                context.fillText('0', 560, 310 + 75 * i);
            }
            if (users[i]['dqjf'] == users[0]['dqjf']) {
                context.drawImage(imgs[2], 108, 250 + i * 77, 51, 74);
            }
        }
        if (i >= 16) context.drawImage(imgs[4], 0, 430 + (++i) * 77, 750, 175);
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