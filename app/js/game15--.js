function clear(index) {
    $('.user-card[data-pos="'+index+'"]').attr("class", "user-card hide-card show-card").css("display", "none");
    $('.user-card[data-pos="'+index+'"] .cardbox').attr("class", "cardbox hind").attr("onclick", "");
    $('.user-card[data-pos="'+index+'"] .cardbox .card').removeAttr("data-value").removeAttr("data-color");
    $('.niuniuNumber [data-pos="'+index+'"]').remove();
    if(index > 0) {
        $('.user-card[data-pos="'+index+'"] .cardbox').attr("class", "cardbox card-small hind");
    }
    $(".user-info").removeClass("choosed");
    //$('.banker span[data-pos="'+index+'"]').hide();
}

var fapaizt=0;
function allfapai(data){
    fapaizt=1;
    for (var i = 0; i < 10; i ++) {
        clear(i);
    }
    //$('.time').hide();
    $('.user-card[data-pos="0"] .cardbox[data-item="3"]').off('click');
    $('.user-card[data-pos="0"] .cardbox[data-item="4"]').off('click');
    $('.user-card[data-pos] span.card').attr({
        'data-value': '',
        'data-color': ''
    });

    $('.prepare').hide();
    $('.prepare-list').hide();
    $('.prepare-item').hide();

    for(var i=0;i<data.user.length;i++){
        var user=data['user'][i];
        var indexuser=user.index-index-(-1);
        var html='';
        if(indexuser<=0){
            indexuser=indexuser-(-10);
        }
        indexuser -= 1;
        $('.user-card[data-pos="' + indexuser + '"]').show();

        if(data.allcard && data.allcard[indexuser]) {
            for (var ii in data.allcard[indexuser]) {
                $('.user-card[data-pos="'+indexuser+'"] .cardbox[data-item="' + ii + '"] span.card').attr({
                    'data-value': data.allcard[indexuser][ii].pai,
                    'data-color': data.allcard[indexuser][ii].color
                });
                $('.user-card[data-pos="'+indexuser+'] .cardbox').removeClass('front').addClass('hind');
                $('.user-card[data-pos="'+indexuser+'"] .cardbox[data-item="' + ii + '"]').removeClass('hind').addClass('front');
            }
        }
    }

    setTimeout(function() {
        $('.user-card').addClass('animate');
    }, 500);

    var cards = data.card;
    if (cards && cards.length > 0) {
        for (var i in cards) {
            $('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"] span.card').attr({
                'data-value': cards[i].pai,
                'data-color': cards[i].color
            });
        }
        setTimeout(function() {
            if(!data.allcard) {
                $('.user-card[data-pos="0"] .cardbox').removeClass('front').addClass('hind');
                for (var i in cards) {
                    $('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"]').removeClass('hind').addClass('front');
                }
            }
            fapaizt = 0;
        }, 1500);
    }
}
var allcardxx;
function fapaistart(data){
    allcardxx=data;
    var fp=0;
    for(i=0;i<5;i++){
        var xx={};
        xx.id=i;
        xx.card=data['card'][index][i];
        $('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"] span.card').attr({
            'data-value': xx.card.pai,
            'data-color': xx.card.color
        });
        $('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"]').attr('onclick','fapxx('+JSON.stringify(xx)+')');
        if($('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"]').hasClass('front')){
            fp=fp+1;
        }
    }

    if(fp>=5){
        operationButton(7);
    }
}
function fapxx(data){
    $('.user-card[data-pos="0"] .cardbox[data-item="' + data.id + '"]').removeClass('hind').addClass('front');
    var fp=0;
    for(i=0;i<5;i++){
        if($('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"]').hasClass('front')){
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
    //if(allcardxx['sfniu'][index]==0){
    //tanpaixx2({card:allcardxx['newcard'][index]})
    //}
    //else{
    tanpaixx({card:allcardxx['newcard'][index]})
    //}
    var msgxx={};
    msgxx.index=index;
    msgxx.img='/app/img/bull10/game-niu'+allcardxx['niu'][index]+'.png';
    showmemberBull(msgxx);
    console.log(indexsex);
    console.log(index.toString());
    mp3xx='mp3niu'+getsex(index)+allcardxx['niu'][index];
    mp3play(mp3xx);
    $('.user-card[data-pos="0"] .cardbox').attr("onclick", "");
}
function showothertanpai(data){
    if(data==index){
        showtanpai();
    }
    else if(allcardxx && typeof(allcardxx['niu']) != undefined){
        mp3xx='mp3niu'+getsex(data)+allcardxx['niu'][data];

        var msgxx={};
        msgxx.index=data;
        msgxx.img='/app/img/bull10/game-niu'+allcardxx['niu'][data]+'.png';
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
    data.card = data.card && data.card.length ? data.card : [];

    for (var i=0;i<data.card.length;i++) {
        $('.user-card[data-pos="0"] .cardbox[data-item="' + i + '"] span.card').attr({
            'data-value': data.card[i].pai,
            'data-color': data.card[i].color
        });
    }
    $('.user-card[data-pos="0"] > div').removeClass('hind').addClass('front');
    if(allcardxx['niu'][index] > 0) {
        $('.user-card[data-pos="0"]').addClass('cattle');
    } else {
        $('.user-card[data-pos="0"]').addClass('nocattle');
    }
    $('<div class="niuNumber">').attr({
        'data-pos': 0,
        'data-item': allcardxx['niu'][index]
    }).appendTo('.niuniuNumber');
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
    indexuser -= 1;

    for (var i=0;i<data.card.length;i++) {
        $('.user-card[data-pos="' + indexuser + '"] .cardbox[data-item="' + i + '"] span.card').attr({
            'data-value': data.card[i].pai,
            'data-color': data.card[i].color
        });
    }
    $('.user-card[data-pos="' + indexuser + '"] > div').removeClass('hind').addClass('front');
    if(allcardxx['niu'][data.user.index] > 0) {
        $('.user-card[data-pos="' + indexuser + '"]').addClass('cattle');
    } else {
        $('.user-card[data-pos="' + indexuser + '"]').addClass('nocattle');
    }
    $('<div class="niuNumber">').attr({
        'data-pos': indexuser,
        'data-item': allcardxx['niu'][data.user.index]
    }).appendTo('.niuniuNumber');
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
    if(data.user.online=='-1'){
        var onlinezt=' leave';
    }
    else{
        var onlinezt='';
    }
    indexuser -= 1;
    $(".user-info[data-pos="+indexuser+"]").remove();
    var html='<div class="user-info'+onlinezt+'" data-id="'+data.user.id+'" data-pos="'+indexuser+'">' +
        '<div class="user-img">' +
        '<img src="'+data.user.img+'">' +
        '</div>' +
        '<div class="name-value">' +
        '<span class="user-nickname">'+decode64(data.user.nickname)+'</span>' +
        '<span class="user-value">'+data.user.dqjf+'</span>' +
        '</div>' +
        '</div>';
    $('.user-list').append(html);

    if(data.user.zt==1){
        if(indexuser == 0) $(".prepare").hide();
        $('.prepare-list .prepare-item[data-pos='+indexuser+']').show();
    }
    else {
        if(indexuser == 0) $(".prepare").show();
        $('.prepare-list .prepare-item[data-pos='+indexuser+']').hide();
    }
}
function zbuser(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;
    clear(indexuser);
    $('.prepare-list').show();
    $('.prepare-list .prepare-item[data-pos='+indexuser+']').show();
    $('.banker span').hide();
}
function removeuser(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;
    $('.user-list .user-info[data-pos='+indexuser+']').addClass("leave");
    //$('.prepare-list .prepare-item[data-pos='+indexuser+']').hide();
}

function removeuser2(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;
    $('.user-list .user-info[data-pos='+indexuser+']').hide();
    $('.prepare-list .prepare-item[data-pos='+indexuser+']').hide();
}
function showmemberTimesText(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;
    $(".selectMultiple .item[data-pos='"+indexuser+"']").show().html("<span>"+data.text+"</span>");
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
    var userindex=data['user'][data.index]-index-(-1);
    if(userindex<=0){
        userindex=userindex-(-10);
    }
    userindex -= 1;
    data.index=data.index-(-1);
    if(data.index >= data.user.length){
        data.index=0;
    }
    var t = 4;
    $('.banker span[data-pos="'+userindex+'"]').hide();
    $(".user-info").removeClass("choosed");
    $(".user-info[data-pos=" + userindex + "]").addClass("choosed");
    ji=setTimeout('showqz('+JSON.stringify(data)+')',3000/(data.user.length*t));
}

// 抢庄结束动画
function sss(data){
    var indexuser=data-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;

    clearTimeout(ji);
    $(".user-info").removeClass("choosed");
    $('.banker span[data-pos="'+indexuser+'"]').show();
    $(".user-info[data-pos=" + indexuser + "]").addClass("choosed");
    $('.rob-zhuang-num .item').empty();
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
    win -= 1;
    lose -= 1;
    console.log([lose, win]);
    return Gold(lose, [win]);
}


function jibiover(data){
    $('#jinbi .member'+data).remove();
}


function jibichange(data) {
    setTimeout(function() {
        jibichange_run(data);
    }, data.fx != 0 ? 1500 : 6000);
}

function jibichange_run(data){
    // 金币没飞完
    if((window.jibirun && window.jibirun == 1) || $('.canvas_gold').length) {
        //return setTimeout(function () { jibichange(data); }, 200);
    }
    for(var i=0;i<data.length;i++){
        var jifenxx=data[i];
        var userindex=jifenxx.index-index-(-1);
        if(userindex<=0){
            userindex=userindex-(-10);
        }
        userindex -= 1;
        if (jifenxx.jifen > 0) {
            $("<span class='winLost'>").html('+' + jifenxx.jifen).appendTo('.user-info[data-pos="' + userindex + '"] .user-img');
        } else {
            $("<span class='winLost lost'>").html(jifenxx.jifen).appendTo('.user-info[data-pos="' + userindex + '"] .user-img');
        }
        setTimeout(function() {
                $('.winLost').show();
                setTimeout(function() {
                        $('.winLost').css('top', '-40%');
                        $('.user-info[data-pos="0"] .winLost').css('top', '-80%');
                        setTimeout(function() {
                                $('.winLost').remove();
                                if ($('.canvas_gold')) {
                                    //$('.canvas_gold').remove();
                                }
                                for (var i in data) {
                                    var jifenxx=data[i];
                                    var userindex=jifenxx.index-index-(-1);
                                    if(userindex<=0){
                                        userindex=userindex-(-10);
                                    }
                                    userindex -= 1;
                                    var $target = $('.user-info[data-pos="' + userindex + '"] .user-value');
                                    $target.html(parseInt(jifenxx.dqjf));
                                }
                            },
                            2000)
                    },
                    200);
            },
            1000);
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

    $(".selectMultiple .item").empty();

    $(".prepare-item").hide();

    $('.myCards').hide();
    $('.myCards').eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none; transition: left 1s;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>')
    $('.myCards').eq(1).html('<div class="cards card00" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');
    $('.myCards').eq(2).html('<div class="cards card00"  ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>');


    $('#memberScoreText1').html('');
    $('#memberScoreText1').hide();
    $('.jiurenniuniu-background1').hide();
    $('.jiurenniuniu-background2').hide();

    //$(".canvas_gold").remove();
    clearmemberBull();
    clearmemberTimesText();
    clearmemberRobText();
    operationButton('8');

    // 图片本地化为了让结算页面正常显示
    window.userimg = window.userimg ? window.userimg : {};
    $("img.avatar").each(function(i, item) {
        var src = $(item).attr("src");
        if(src.search("\/index\.php") < 0 && !window.userimg[src]) {
            var image = new Image();
            image.onerror = function (ev) {
                image.src = "/app/img/bull10/default_head.png";
            }
            image.src = "/Portal/thumb/index?url="+encodeURIComponent(src);
            window.userimg[image.src] = image;
        }
    });

    // var script=document.createElement("script");
    //script.type="text/javascript";
    //script.src="/app/js/robat.js";
    //document.getElementsByTagName('head')[0].appendChild(script);
}
function zhunbei(){
    $(".prepare").hide();
    send('zhunbei',{});
    clear(0);
    $(".prepare-list").show();
    $(".prepare-list .prepare-item[data-pos=0]").show();
}


function xianxz(zt){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('xianxz',{bs:zt,time:time});
    showxian({index:index,zt:zt});
    operationButton('-1');
    $('.rob-zhuang-num .item').hide();
}
function showxian(data){
    var msgxx={};
    var mp3xx='';
    if(data.index==index){
        operationButton('-1');
    }
    msgxx.index=data.index;
    msgxx.text='×'+data.zt;
    showmemberTimesText(msgxx);
    mp3xx='xia'+getsex(data.index)+data.zt;
    mp3play(mp3xx);
    $('.rob-zhuang-num .item').hide();
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
    var text = '';
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
                html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull10/bull_text_'+bankwz+'.png">';
            }
            html+='</div><div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;width: 8vh;height: 4.16vh;">'
            html+='×'+data.zt;
            html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/X-'+data.zt+'.png" style="display: none;"></div>';
            text = '×' + data.zt;
        }
        else{
            html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">'
            if(bankwz != 'rob') {
                html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull10/bull_text_' + bankwz + '.png"></div>'
            }
            text = '抢庄';
        }
        mp3xx='qiangzhuang'+getsex(index);
    }
    else{
        html+='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">';
        html+='<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull10/bull_text_not'+bankwz+'.png"></div>';
        mp3xx='buqiang'+getsex(index);
        text = '不抢';
    }
    $('.rob-zhuang-num .item[data-pos="0"]').show();
    $('.rob-zhuang-num .item[data-pos="0"]').html('<span>' + text + '</span>');
    operationButton("");
    mp3play(mp3xx);
}
function qbankshowother(data){
    var msgxx={};
    var bankwz='';
    var mp3xx='';
    var text = '';
    var userindex=data.index-index-(-1);
    if(userindex<=0){
        userindex=userindex-(-10);
    }
    userindex -= 1;
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
            showmemberTimesText2(msgxx);
            msgxx.img='/app/img/bull10/bull_text_'+bankwz+'.png';
            text = '×' + data.zt;
        }
        else{
            msgxx.img='/app/img/bull10/bull_text_'+bankwz+'.png';
            text = '抢庄';
        }
        mp3xx='qiangzhuang'+getsex(data.index);
    }
    else{
        msgxx.img='/app/img/bull10/bull_text_not'+bankwz+'.png';
        showmemberRobText(msgxx);
        mp3xx='buqiang'+getsex(data.index);
        text = '不抢';
    }
    $('.rob-zhuang-num .item[data-pos="' + userindex + '"]').show();
    $('.rob-zhuang-num .item[data-pos="' + userindex + '"]').html('<span>' + text + '</span>');
    mp3play(mp3xx);
}

function overroom(data){
    window.isClose = true;
    $('#loadings').fadeIn();
    var _data = {
        "game_id":"11",
        "users":[],
        "sum":data.zjs,
        "num":data.js,
        "datetime":data.time,
        "room_number":data.roomid
    };
    for (var k in data.user) {
        _data["users"].push({
            "value" : data.user[k].dqjf,
            "nickname" : decode64(data.user[k].nickname_base64),
            "path" : data.user[k].img,
            "user_id" : data.user[k].id
        });
    }
    liuliuCreateRanking(_data,
        function(d) {
            var img = document.createElement('img');
            if (parseInt(_data.users.length) > 6) {
                img.className = 'room-gameover-ten ranking-img';
            } else {
                img.className = 'room-gameover ranking-img';
            }
            img.src = d;
            img.onload = function() {
                setTimeout(function() {
                        $('#loadings').fadeOut();
                        document.body.style.backgroundColor = '#000000';
                        document.body.style.minHeight = 'initial';
                        document.body.appendChild(img);
                        var div = document.createElement('div');
                        div.className = 'search-number-box';
                        document.body.appendChild(div);
                        var detailedBtn = '<a class="search-number-box-btn" href="#" style="position: absolute;"></a>';
                        div.insertAdjacentHTML("beforeend", detailedBtn);
                        getRankingSix();
                        $('.body').remove();
                        $(document.body).off('touchmove');
                    },
                    2500);
            };
        });
}


function msgshow(data){
    var indexuser=data.index-index-(-1);
    if(indexuser<=0){
        indexuser=indexuser-(-10);
    }
    indexuser -= 1;

    mp3play(data.mp3);
    $('.user-info[data-pos="'+indexuser+'"] .user-chat-text').remove();
    var html = '<div class="user-chat-text" style="display: block;">'+data.msg+'</div>';
    $('.user-info[data-pos="'+indexuser+'"]').append(html);
    setTimeout(function(){
        $('.user-info[data-pos="'+indexuser+'"] .user-chat-text').remove();
    },1500);
}

var opcount = 0;
function operationButton(data){
    var html='';
    if(data=='1'){
        html+='<div class="operationButton-3-zt" id="jiurenqz" style="display: inline-block; margin: 0 2%;" onclick="qbank(1,1)">'
        html+='                        <img class="operationButton-3" src="/app/img/bull10/niuniu-zhuang.png">'
        html+='                        <div class="operationButton-3-ts" >'
        html+='上庄'
        html+='                        </div>'
        html+='                       </div>'
        html+='                       <div class="operationButton-4-zt" id="jiurenbqz" style="display: inline-block; margin: 0 2%;" onclick="qbank(0,1)">'
        html+='                        <img class="operationButton-gg" src="/app/img/bull10/niuniu-zhuang1.png"> '
        html+='                        <div class="operationButton-3-ts" >'
        html+='不上'
        html+='                        </div>'
        html+='                       </div>'
    }
    if(data=='2'){
        html+='<div class="grabzhuang" style="display: block;">' +
            '        <input type="button" data-item="9" data-value="1" value="1倍" onclick="qbank(1,4)" />' +
            '        <input type="button" data-item="9" data-value="2" value="2倍" onclick="qbank(2,4)" />' +
            '        <input type="button" data-item="9" data-value="4" value="4倍" onclick="qbank(4,4)" />' +
            '        <input type="button" data-item="10" data-value="0" name="0" value="不抢" onclick="qbank(0,4)" />' +
            '    </div>';
    }
    if(data=='3'){
        html += '<div class="zhuang_btn" style="display: block;">';
        html += '    <div class="upZhuang" onclick="qbank(1,2)">抢庄</div>';
        html += '    <div class="upZhuang no" onclick="qbank(0,2)">不抢</div>';
        html += '</div>';
    }
    if(data=='4'){
        html+='<div class="player-number" style="display: block;">' +
            '        <input type="button" data-value="1" value="1倍" onclick="xianxz(1);" />' +
            '        <input type="button" data-value="2" value="2倍" onclick="xianxz(2);" />' +
            '        <input type="button" data-value="3" value="3倍" onclick="xianxz(3);" />' +
            '        <input type="button" data-value="5" value="5倍" onclick="xianxz(5);" />' +
            '    </div>';
    }
    if(data=='5'){
        html+='<div class="gongg" style="display: block;"><!--等待闲家下注--></div>';
    }
    if(data=='6'){
        html+='<div class="lookCardText" style="display: block;">' +
            '        点击牌面看牌' +
            '    </div>';
    }
    if(data=='7'){
        // 摊牌
        html+='<div class="showdown" style="display: block;" onclick="tanpaime();">摊牌</div>';
    }

    if(data=='8'){
        if(opcount > 0) {
            divRobBankerText(6);
            $("#divRobBankerText").css("display", "block");
        }
        $(".prepare").show();
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
        //return;
    }
    var id_bol;
    if (Object.prototype.toString.call(source) == '[object Array]') {
        id_bol = true;
    } else {
        id_bol = false;
    }
    var count = 15;
    var gold_w = 12;
    var gold_h = 12;
    var obj = [];
    var str = [];
    var str1 = [];
    var bol = false;
    var index = 39;
    var _index = 0;
    var index1_num = 0;
    var music_bol = true;
    var $canvas = $('<canvas width="' + $("body").width() + '" height="' + $("body").height() + ' "class="canvas_gold"></canvas>').appendTo('body');
    var can = $canvas.get(0).getContext("2d");
    if (id_bol) {
        var $target = $('.user-info[data-pos="' + target + '"]');
        for (var z = 0; z < source.length; z++) {
            var $source = $('.user-info[data-pos="' + source[z] + '"]');
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
        var $source = $('.user-info[data-pos="' + source + '"]');
        for (var z = 0; z < target.length; z++) {
            var $target = $('.user-info[data-pos="' + target[z] + '"]');
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
    img.src = "http://img.lfzgame.com/images/niuniu/gold.png";
    img.onload = function() {
        move();
    };
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
                $('.user-info[data-id="' + target + '"]').addClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.user-info[data-id="' + target[i] + '"]').addClass('flash');
                }
            }
        } else if (obj[0][count - 1].index == index) {
            if (id_bol) {
                $('.user-info[data-id="' + target + '"]').removeClass('flash');
            } else {
                for (var i = 0; i < target.length; i++) {
                    $('.user-info[data-id="' + target[i] + '"]').removeClass('flash');
                }
            }
        }
        _index++;
        if (obj[0][count - 1].index > index) {
            bol = true;
            setTimeout(function() {
                    $canvas.remove();
                },
                500)
        }
        if (!bol) {
            setTimeout(move, 15)
        }
    }
    function jinbi(w, h) {
        var img = new Image();
        img.src = "http://img.lfzgame.com/images/niuniu/gold.png";
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
    var pics = ['/app/img/bull10/ranking_' + game_id + '_bg.jpg', '/app/img/bull10/people_bg.png', '/app/img/bull10/ranking_icon.png'];
    if (users.length > 6) {
        pics.push('/app/img/bull10/people_bg2.jpg');
        pics.push('/app/img/bull10/people_bg3.jpg');
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
                this.src = "/app/img/bull10/default_head.png";
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