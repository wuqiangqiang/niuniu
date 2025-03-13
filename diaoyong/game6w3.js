var fapaizt=0;
var all;
var gamezt=0;
function allfapai(data){

    if(data==2){
        $('#userfp').html('');
        
        var html='';
        for(var i=0;i<6;i++){
            html=html+'<div class="cardDown card card'+i+'" style="margin-left:'+Number((i+2.35)*4)+'vh;">'
            html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div>'
            html=html+'<div class="cardUp card card'+i+'" style="margin-left:'+Number((i+2.35)*4)+'vh;">'
            html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div> ';
        }

        $('#userfp').html(html);
        $('#userfp').css('display','block');
        if(typeof(all)!='undefined'){
                 shoupai(all);   
        }

    }
    else if(data==3){
        $('#userfp').html('');
        
        var html='';
        for(var i=0;i<10;i++){
            html=html+'<div class="cardDown card card'+i+'" style="margin-left:'+Number((i+0.35)*4)+'vh;">'
            html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div>'
            html=html+'<div class="cardUp card card'+i+'" style="margin-left:'+Number((i+0.35)*4)+'vh;">'
            html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div> ';
        }

        $('#userfp').html(html);
        $('#userfp').css('display','block');
        
        if(typeof(all)!='undefined'){
                 shoupai(all);   
        }

    }
    else{
        fapaizt=1;
        
        $('#userfp').html('');
        $('.isReady').hide();

        var html='';
        for(var i=0;i<10;i++){
        html=html+'<div class="cardDown card card'+i+'" style="margin-left:'+Number((i+0.35)*4)+'vh;  display:none;">'
        html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div>'
        html=html+'<div class="cardUp card card'+i+'" style="margin-left:'+Number((i+0.35)*4)+'vh; display:none;">'
        html=html+'<img src="/app/img/28gang/majiang1.png" class="outer" /></div> ';
        }
        $('#userfp').append(html);
        $('#userfp').css('display','block');
            setTimeout(function(){
            $('#userfp .card0').show();
             $('#userfp .card1').show();
        },300);
            setTimeout(function(){
            $('#userfp .card2').show();
            $('#userfp .card3').show();
        },600);
            setTimeout(function(){
            $('#userfp .card4').show();
            $('#userfp .card5').show();

        },900);
            setTimeout(function(){
            $('#userfp .card6').show();
            $('#userfp .card7').show();

        },1200);
            setTimeout(function(){
            $('#userfp .card8').show();
            $('#userfp .card9').show();
        },1500);
    }
}
function zhuangclear(){
    $('.rtbabg').hide();
    $('.rtbabg1').hide();
    $('.status').show();
    gamezt=1;
}
function showqz(data){
    //operationButton('')
    if(index>3){
        var indexuser=data['user'][data.index]+1;
    }
    else if(data['user'][data.index]>3){
        var indexuser=data['user'][data.index]+1;
    }
    else{
        var indexuser=data['user'][data.index]-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }

  $('.rtbabg').hide();
  $('.member'+indexuser+' .rtbabg').show();

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
    if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
$('.member'+indexuser+' .status').eq(0).show();
$('.member'+indexuser+' .status').eq(1).hide();
    clearTimeout(ji);
  $('.rtbabg').hide();

 $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate"+indexuser).show(),
            $("#bankerAnimate1"+indexuser).animate({
                top: "2%",
                left: "1%",
                width: "100%",
                height: "100%"
            },
            400,
            function() {
                $("#bankerAnimate1"+indexuser).animate({
                    top: "10%",
                    left: "10%",
                    width: "82%",
                    height: "82%"
                },
                400,
                function() {
                  $('.member'+indexuser+' .rtbabg1').show();
                  
                    
                })
            }),
            $("#bankerAnimate"+indexuser).animate({
                top: "2%",
                left: "1%",
                width: "100%",
                height: "100%"
            },400),
                $("#bankerAnimate"+indexuser).animate({
                    top: "10%",
                    left: "10%",
                    width: "82%",
                    height: "82%"
              },600)

}



var cmsj;
function cmxx(data){
    cmsj=data;
    console.log(cmsj);
}
var gongneng=0;
function kqgongneng(data){
    console.log(data);
    gongneng=data;
}
function xianstart(data){
    if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }

    if(indexuser==1 && index<4){
         for(var i =2;i<=4;i++){
            $('.member'+i+' .scorePlace').eq(1).show();
         }
    }
    else{
        for(var i =1;i<=4;i++){
            if(i!=indexuser){
                $('.member'+i+' .scorePlace').eq(1).show();
                $('.member'+i+' .PKbox').show();  
            }
         }
    }
}
function xiandingzhi(data){

    if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }


    if(data!=index){
        for(var i =1;i<=4;i++){
            if(i!=indexuser){
                $('.member'+i+' .scorePlace').eq(1).hide();
                $('.member'+i+' .scorePlace').eq(0).show();
                $('.member'+i+' .PKbox').hide();  
            }
         }
    }
    $('.scorePlaceBanker').each(function(){
        $(this).remove();
    });
    $('.setScore').each(function(){
        $(this).remove();
    });
    $('.myScoreImg').each(function(){
        $(this).remove();
    });
    $('.totalScore').attr('data-val',0);
    $('.myScore').attr('data-val',0);
    gongneng=0;
}

function xiazhu(data){

        if(gongneng<=0){
        var html= '';
        html= '<div class="setScore setScore'+data+'" >'
        html+= '<div class="clickBack" onclick="xiaoshi()"></div>'
        html+= '<div class="area"><div class="back"></div> <div class="triangle"></div>'
        html+= '<div>';
        for (var i = 0; i < cmsj.length; i++) {
            html+= '<img src="/app/img/28gang/coin'+cmsj[i]+'.png" class="buttonRound" onClick="xiazhupuls('+data+','+cmsj[i]+')">';
        }
        html+= '</div></div></div>';
      $('.table').append(html);  
    }
    else{
        var html= '';
        html= '<div class="setScore setScore'+data+'" >'
        html+= '<div class="clickBack" onclick="xiaoshi()"></div>'
        html+= '<div class="area"><div class="back"></div> <div class="triangle"></div>'
        html+= '<div>';
        for (var i = 0; i < cmsj.length; i++) {
            html+= '<img src="/app/img/28gang/coin'+cmsj[i]+'.png" class="buttonRound1" onClick="xiazhupuls('+data+','+cmsj[i]+')">';
        }
        html+= '<div style="height: 6vh;width: 9vh;position: relative;display: -webkit-inline-box;"><img src="/app/img/28gang/bisheng.png" class="buttonRound1" onclick="xiazhupuls('+data+','+(cmsj[(cmsj.length-1)]-(-1))+')"><span style="color: #fff;font-size:0.1rem;">胜率'+gongneng+'%</span></div>';
        html+= '</div></div></div>';
      $('.table').append(html);
    }      
}

function xiaoshi(){
    $('.setScore').remove();
}


// 1是闲下注的样子  2是庄看到闲下注的样子
function xiazhupuls(xzindex,data){

    $('.setScore'+xzindex+'').remove();
    if(index<4){
        xzindex=index+xzindex-1;
    }
    else{
        xzindex=xzindex-1;
    }
    if(xzindex>=4){
        xzindex=xzindex-4;
    }

    showmeplus({xzindex:xzindex,xz:data});

    var time=Math.ceil(new Date()/1000)-timewc;
    send('xianxz',{xzindex:xzindex,xz:data,time:time});
    if(data%10==1){
          gongneng=0;
         data=data-1;
    }
     addxz({xzindex:xzindex,index:index,xz:data,bank:-1});
    // if(index == 1){
    //     html = '<img src="/app/img/28gang/coin'+data+'.png" class="myScoreImg">'
    //    $('.setScore'+index+'').hide()
    //    $('.member'+index+' .scorePlace').append(html);
    // }else{
    //    html = '<div class="scorePlace scorePlaceBanker scorePlace'+index+'" style="height: 12vh;">'
    //    html += '<div class="coin coin'+index+'  coinType'+data+'"></div>'
    //    html += '</div>'
    // $('.member'+index+'').append(html);
    // $('.member'+index+' .scorePlace .coin'+index+'').animate({
    //     'margin-left': '0px',
    //     'margin-top': '0px'
    // })
    // }
}
function showmeplus(data){


       if(index>3){
            var indexuser=data.xzindex+1;
        }
        else if(data.xzindex>3){
            var indexuser=data.xzindex+1;
        }
        else{
            var indexuser=data.xzindex-index-(-1);
        }
        if(indexuser<=0){
            indexuser=indexuser-(-4);
        }

        var html='';
    $('.setScore'+indexuser+'').remove();
    $('.member'+indexuser+' .PKbox').hide();
    if(data.xz%10==1){
      html = '<img src="/app/img/28gang/bisheng.png" class="myScoreImg">';
    }
    else{
     html = '<img src="/app/img/28gang/coin'+data.xz+'.png" class="myScoreImg">';
    }
    $('.member'+indexuser+' .scorePlace').append(html);
    var time=Math.ceil(new Date()/1000)-timewc;
}

// 摊牌
function tanpai(){
    var time=Math.ceil(new Date()/1000)-timewc;
    send('tanpai',{time:time});
    sjtanpai(index);
    operationButton('');
}
function sjtanpai(data){
        if(index == data){
            operationButton('')
        }
        var cardxx=all[data];
        if(index>3){
            var indexuser=data+1;
        }
        else if(data>3){
            var indexuser=data+1;
        }
        else{
            var indexuser=data-index-(-1);
        }
        if(indexuser<=0){
            indexuser=indexuser-(-4);
        }

        var html='';
        html=html+'<div class="pointArea">'
        html=html+'<img src="/app/img/28gang/point.png"><div class="point">'+cardxx.typename+'</div>'
        html=html+'</div>';
        $('.member'+indexuser+' .gameStatus').append(html);
        var bian = cardxx.type*10;
        mp3play('mp3'+bian)
         if(index == data){
            divRobBankerText('13')
        }

}


function addxz(data){
    
    if(index>3){
        var indexuser=data.xzindex+1;
    }
    else if(data.xzindex>3){
        var indexuser=data.xzindex+1;
    }
    else{
        var indexuser=data.xzindex-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    var html='';

    if(data.bank==index){
    
       html = '<div class="scorePlace scorePlaceBanker scorePlace'+indexuser+'" style="height: 12vh;">'
       html += '<div class="coin coin'+indexuser+'  coinType'+data.xz+'"></div>'
       html += '</div>';
        $('.member'+indexuser+'').append(html);
        var suiji = 10-(Math.random()*30);
        $('.member'+indexuser+' .scorePlace .coin'+indexuser+'').last().animate({
             'margin-left': suiji+'px',
            'margin-top': suiji+'px'
        })
    }
    
    var totalScore=$('.member'+indexuser+' .totalScore').attr('data-val');
    totalScore=totalScore-(0-data.xz);
    $('.member'+indexuser+' .totalScore').attr('data-val',totalScore);
    $('.member'+indexuser+' .totalScore').html('总注：'+totalScore);
    if(data.index==index){
        var myScore=$('.member'+indexuser+' .myScore').attr('data-val');
        myScore=myScore-(0-data.xz);
        $('.member'+indexuser+' .myScore').attr('data-val',myScore);
        $('.member'+indexuser+' .myScore').html('下注：'+myScore);
    }
}






function fapai(data){

          
    if(index>3){
        var bank=data.bank+1;
    }
    else if(data.bank>3){
        var bank=data.bank+1;
    }
    else{
        var bank=data.bank-index-(-1);
    }
    if(bank<=0){
        bank=bank-(-4);
    }

    for(var i =1;i<=4;i++){
        if(i!=bank){
            $('.member'+i+' .scorePlace').eq(1).hide();
            $('.member'+i+' .scorePlace').eq(0).show();
            $('.member'+i+' .PKbox').hide();  
        }
    }

     
    $('.scorePlaceBanker').each(function(){
        $(this).remove();
    });
    $('.setScore').each(function(){
        $(this).remove();
    });
    $('.myScoreImg').each(function(){
        $(this).remove();
    });
    $('.totalScore').attr('data-val',0);
    $('.myScore').attr('data-val',0);


    
    if(data.act == '1'){
        var time1=0;
        var time2=0;
        var time3=0;
    }
    else{
        var time1=2600;
        var time2=500;
        var time3=5000;

    }

    operationButton('');
    shaizi(data.shaizi);
    all=data['all'];
    setTimeout(function(){
    $('#dice').html(''); 
    var hz=data.shaizi.one-(0-data.shaizi.two);
    var xy=hz%4+data.bank-1;
    if(xy>3){
        xy=xy-4;
    }


    if(index>3){
        var indexuser=xy+1;
    }
    else if(xy>3){
        var indexuser=xy+1;
    }
    else{
        var indexuser=xy-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }

    for(i=0;i<4;i++){
        var j=indexuser+i;
        if(j>4){
            j=j-4;
        }
        if(index>4){
            xzindex=j-1;
        }
        else{
            var xzindex=j+index-1;
        }

        if(xzindex>3){
                xzindex=xzindex-4;
            }
        ffpai(i,j,data['allcards'][xzindex],time2);   
    }
},time1);
     setTimeout(function(){
            var left=parseInt($('.cardDown').css('left'))-2*parseInt($('.cardDown').css('width'));
            $('.cardDown').animate({
                'left':left/2+'px'
            },time2);
            var left=parseInt($('.cardUp').css('left'))-2*parseInt($('.cardUp').css('width'));
            $('.cardUp').animate({
                'left':left/2+'px'
            },time2);
     },time3);
     setTimeout(function(){
     $('.majiangTemp').hide();
     $('.majiangTemp1').show();
    },time3+time2);
     setTimeout(function(){
        $('.majiangTemp').hide();
        $('.majiangTemp1').hide();
        $('.majiangSet').show();
     },time3+time2+500);
}

function ffpai(i,j,card,time){
    $('.member'+j+' .majiang').append('<div class="majiangTemp" style="display: none;"><img src="/app/img/28gang/majiang2.png" class="outer" /> <img src="/app/img/28gang/majiang2.png" class="outer moved" /></div>');
   $('.member'+j+' .majiang').append('<div class="majiangTemp1" style="display: none;"><img src="/app/img/28gang/majiang2.png" class="outer" /> <img src="/app/img/28gang/majiang2.png" class="outer moved" /></div>');
    setTimeout(function(){
        if(time!=0){
            $('.member'+j+' .majiangTemp').show();
        }
        $("#userfp").find("div").eq(2*i).hide();
        $("#userfp").find("div").eq(2*i-(0-1)).hide();
        var bwidht=$(window).width();
        var mleft=$("#userfp").find("div").eq(2*(i)).css("margin-left");
        var left=$("#userfp").find("div").eq(2*(i)).css("left");
        var memw=$('.member'+j).css('width');
        var memright=$('.member'+j).css('margin-right');
        var right=parseInt(bwidht)-parseInt(mleft)-parseInt(left)-parseInt(memw)-parseInt(memright)-2*$('.member'+j+' .majiangTemp img').width();

        $('.member'+j+' .majiangTemp img').css('margin-right',right+'px');   
    if(j == 1){
        $('.member'+j+' .majiangTemp img').animate({
            'margin-bottom':'0px',
            'margin-right':'0px', 
            'width':'8vh'
        },time);
    }else{
        $('.member'+j+' .majiangTemp img').animate({
            'margin-bottom':'0px',
            'margin-right':'0px'
        },time);
    }
        
 },time*i)
            if(j==1 && index<4){ 
                var html='<div class="majiangSet" style="display:none">'
            html+='<div class="outer outer'+j+' zmmfapai0"  ><img src="/app/img/28gang/majiang2.png" class="ani" onclick="fanpai(0)"> <img src="/app/img/28gang/majiang3.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang4.png" class="ani" style="display: none;"> <img src="/app/img/28gang/majiang5.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang6.png" class="ani" style="display: none"> <img src="/app/img/28gang/card'+card['0']['card']+'.png" class="inner" style="display: none"></div>'
            html+='<div class="outer moved moved'+j+' zmmfapai1" ><img src="/app/img/28gang/majiang2.png" class="ani"  onclick="fanpai(1)"> <img src="/app/img/28gang/majiang3.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang4.png" class="ani" style="display: none;"> <img src="/app/img/28gang/majiang5.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang6.png" class="ani" style="display: none"> <img src="/app/img/28gang/card'+card['1']['card']+'.png" class="inner" style="display: none"></div>'
            html+='</div>';
            }
            else{
            var html='<div class="majiangSet" style="display:none">'
            html+='<div class="outer outer'+j+' zmmfapai0"><img src="/app/img/28gang/majiang2.png" class="ani" > <img src="/app/img/28gang/majiang3.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang4.png" class="ani" style="display: none;"> <img src="/app/img/28gang/majiang5.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang6.png" class="ani" style="display: none"> <img src="/app/img/28gang/card'+card['0']['card']+'.png" class="inner" style="display: none"></div>'
            html+='<div class="outer moved moved'+j+' zmmfapai1"><img src="/app/img/28gang/majiang2.png" class="ani" > <img src="/app/img/28gang/majiang3.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang4.png" class="ani" style="display: none;"> <img src="/app/img/28gang/majiang5.png" class="ani" style="margin-bottom: -0.5vh; display: none;"> <img src="/app/img/28gang/majiang6.png" class="ani" style="display: none"> <img src="/app/img/28gang/card'+card['1']['card']+'.png" class="inner" style="display: none"></div>'
            html+='</div>';
            }

            $('.member'+j+' .majiang').append(html);

}






function fanpai(data){
     for(i=1;i<=5;i++){
        fanpais('.member1 .zmmfapai'+data,i,1)
    }  
}
function tanpaixx(data){
        if(index>3){
            var indexuser=data+1;
        }
        else if(data>3){
            var indexuser=data+1;
        }
        else{
            var indexuser=data-index-(-1);
        }
        if(indexuser<=0){
            indexuser=indexuser-(-4);
        }

        for(i=1;i<=5;i++){
            fanpais('.member'+indexuser+' .zmmfapai0',i,0);
            fanpais('.member'+indexuser+' .zmmfapai1',i,0);
        }
        setTimeout(function(){
            sjtanpai(data);
        },500);
}
function fanpais(data,i,cs){
    if(i<5){
            var time=100*i;
        }
        else{
            var time=400;
        }
    setTimeout(function(){
        if(i == 5){
            $(data).find('img').eq(i).show();
        }else{
            $(data).find('img').eq(i).show().siblings().hide();
        }
    if(cs==1){
        if(!$('.member1 .zmmfapai0 .inner').is(':hidden') && !$('.member1 .zmmfapai1 .inner').is(':hidden')){
            operationButton('5');

        } 
    }
},time)
  
}













function msgshow(data){
    if(index>3){
        var indexuser=data.index+1;
    }
    else if(data.index>3){
        var indexuser=data.index+1;
    }
    else{
        var indexuser=data.index-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    mp3play(data.mp3);
       var html='<div class="messageSay messageSay'+indexuser+'" ><div id="fj-kjyy">'+data.msg+'</div> <div class="triangle"></div></div>';
      $('#messageSay').append(html);
      setTimeout(function(){
            $('.messageSay'+indexuser).remove();
      },1500);
}









function shaizi(data){
    var html='<div class="dice1">'
        html+='<img src="/app/img/28gang/timg.gif" /></div>'
        html+='<div class="dice2" style="display:none">'
        html+='<img src="/app/img/28gang/timg.gif"  /></div>';
    $('#dice').append(html); 
    $('.dice1 img').show();
    setTimeout(function(){
        $('.dice1 img').attr('src','/app/img/28gang/'+data.one+'.png');
    },750)
    setTimeout(function(){
        $('.dice2').show();
    },750)
    setTimeout(function(){
        $('.dice2 img').attr('src','/app/img/28gang/'+data.two+'.png');
    },1500)

}






function zbuser(data){
    if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    $('.member'+indexuser+' .gameStatus .ready').show();
}



function removeuser(data){
    if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    $('#member .member'+indexuser+' .quitBack').show();
    $('.member'+indexuser+' .ready').hide();
    // $('.member'+indexuser+' .background').hide();
}

function removeuser2(data){
   if(index>3){
        var indexuser=data+1;
    }
    else if(data>3){
        var indexuser=data+1;
    }
    else{
        var indexuser=data-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    if(indexuser>4){
         $('#member .memberUp'+indexuser).remove();
    }
    else{
        $('#member .member'+indexuser).attr('id','');
        $('#member .member'+indexuser+' .title').hide();
        $('#member .member'+indexuser+' .avatar').hide();
        $('#member .member'+indexuser+' .score').hide();
        $('#member .member'+indexuser+' .background').hide();
        $('#member .member'+indexuser+' .quitBack').show();
        $('.gameStatus img').hide();
    }
    if($('#member .memberUp').length==0){
        $('.fish').show();
    }
}


function membercsh(){
    for(i=1;i<5;i++){
     var html='<div class="member member'+i+'" id="userxx'+i+'"><div class="zmmyctime"></div>'
     html+='<img src="/app/img/28gang/player.png" class="background" style="display: none;" /> '
     html+='<img src="/app/img/28gang/banker1.png" style="position: absolute; top: 10%; left: 10%; width: 82%; height: 82%; display: none;" />'
     html+='<div class="title"></div> '
     html+='<img src="" class="avatar"  style="display:none"/>'
     html+='<div class="score" style="display:none"></div> '
     html+='<img src="/app/img/28gang/status_icon.png" class="status" style="display: none;" />' 
     html+='<img src="/app/img/28gang/status2_icon.png" class="status" />'
     html+='<img id="bankerAnimate'+i+'"  class="rtbabg" src="/app/img/28gang/banker1.png" style="position: absolute; top: 10%; left: 10%; width: 82%; height: 82%; display: none;" />' 
     html+='<img id="bankerAnimate1'+i+'" class="rtbabg1" src="/app/img/28gang/banker1.png" style="position: absolute; top: 10%; left: 10%; width: 82%; height: 82%; display: none;" />' 
     html+='<img src="/app/img/28gang/fapai.png" class="fapaikuang" style="position: absolute; top: 10%; left: 10%; width: 82%; height: 82%; z-index: 1; display: none;" />'
     html+='<img src="/app/img/28gang/fapai1.png" class="fapaikuang1" style="position: absolute; top: 10%; left: 10%; width: 82%; height: 82%; z-index: 1; display: none;" />'
     html+='<div class="quitBack" ></div>'
     html+='<div class="majiang"></div>'
     html+='<div><div class="scorePlace" style="display: none;"><div class="back"></div> <div class="totalScore" data-val="0">总注：0</div><div class="myScore" data-val="0">下注：0</div></div><div class="scorePlace" style="display: none;"><div class="back"></div> <div class="totalScore" data-val="0">总注：0</div></div><div class="PKbox" onClick="xiazhu('+i+')" style="display: none;"><div class="PKboxBack"></div></div></div>'
     html+='<div class="gameStatus"><img src="/app/img/28gang/ready.png" class="ready" style="display: none;" /><img src="/app/img/28gang/robBanker1.png" class="banker" style="display: none;" /><img src="/app/img/28gang/robBanker.png" class="banker" style="display: none;" /><div class="memberScoreText memberScoreText1" style="display: none;"></div></div></div>';
     $('#member').append(html);
    }
}
function initroom2(){
     // $('#userfp').hide();
     $('.pointArea').each(function(){
        $(this).remove();    
     })

      $('.scorePlace').hide();
    $('.totalScore').html('总注:0');
    $('.myScore').html('下注:0');

    $('.member .majiang').html('');

    $('.memberScoreText').html('');
}
function initroom(){

    clearmemberBull()
     $('#userfp').hide();
     $('.pointArea').each(function(){
        $(this).remove();    
     })
      $('.scorePlace').hide();
    $('.totalScore').html('总注:0');
    $('.myScore').html('下注:0');

    $('.member .majiang').html('');

    gamezt=0;
    $('.first_half_cards').html('<div class="back"></div> <div class="title">手牌区</div> ');
    $('.memberScoreText').html('');
    if(index<4){
        operationButton('7');
    }
}






function adduser(data){
    if(index>3){
        indexuser=data.user.index+1;
    }
    else if(data.user.index>3){
        indexuser=data.user.index+1;
    }
    else{
        var indexuser=data.user.index-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }

    if(indexuser >4){
        var html='<div class="memberUp memberUp'+indexuser+'"  id="user'+data.user.id+'">'
            html+='<div class="zmmyctime"></div>'
            html+='<div><div><img src="'+data.user.img+'" class="avatar" /> <div class="info"><div class="back"></div> <div class="name">'+data.user.nickname+'</div> <div class="score" data-val="0">'+data.user.dqjf+'</div></div></div>'
            html+='<div class="memberScoreText memberScoreText1" style="display: none;"></div></div></div>';
            $('.fish').hide();
            $('#member').append(html);
    }else{
        $('#member .member'+indexuser+' .title').html(data.user.nickname);
        $('#member .member'+indexuser+' .title').show();
        $('#member .member'+indexuser+' .background').show();
        $('#member .member'+indexuser+' .quitBack').hide();


        $('#member .member'+indexuser).attr('id','user'+data.user.id);
        $('#member .member'+indexuser+' .avatar').attr('src',data.user.img);
        $('#member .member'+indexuser+' .avatar').show();

        $('#member .member'+indexuser+' .score').html(data.user.dqjf);
        $('#member .member'+indexuser+' .score').show();
        if(data.user.zt==1 && gamezt==0){
            $('.member'+indexuser+' .ready').show();
         }

         if(data.user.online=='-1'){
             $('#member .member'+indexuser+' .quitBack').show();
        }
     }
}
function gxjifen(data){
    if(index>3){
        indexuser=data.index+1;
    }
    else if(data.index>3){
        indexuser=data.index+1;
    }
    else{
        var indexuser=data.index-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }

    $('#member .member'+indexuser+' .score').html(data.dqjf);
}
function qbank(zt){
    if(zt == 1){
        operationButton('9');
    }else{
        operationButton('8');
    }
    var time=Math.ceil(new Date()/1000)-timewc;
    send('qbank',{zt:zt,time:time});

}


function qbankshow(data){
    if(index>3){
        indexuser=data.index+1;
    }
    else if(data.index>3){
        indexuser=data.index+1;
    }
    else{
        var indexuser=data.index-index-(-1);
    }
    if(indexuser<=0){
        indexuser=indexuser-(-4);
    }
    
    $('.member'+indexuser+' .gameStatus .banker').eq(data.zt).show();
    
    if(data.zt == '0'){
        mp3play('buqaing')
    }else{
        mp3play('qiangzhuang')
    }
}
function zhunbei(){
    send('zhunbei',{});
    operationButton('');
    $('.member1 .gameStatus .ready').show();
}
function statclear(){
    $('.gameStatus .ready').hide();
    $('.gameStatus .banker').hide();
}
function sendfp(){
    operationButton('');
    var time=Math.ceil(new Date()/1000)-timewc;
    send('startroom',{time:time});
}
function operationButton(data){
    var html='';
    if(data=='1'){
        html+='<div class="buttonLeft buttonCenter" onclick="qbank(0);">不抢</div> '
        html+='<div class="buttonRight buttonCenter" onclick="qbank(1);">抢庄</div>';
    }
    if(data=='2'){
        html+='<div class="buttonMiddle buttonCenter">洗牌</div>';
    }
    if(data=='3'){
        html+='<div class="buttonCenter qiepai">'
        html+='<img src="/app/img/28gang/q1.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/q2.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/q3.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/q4.png" class="buttonRound" />'
        html+='</div>';
    }
    if(data=='4'){
        html+='<div class="buttonCenter fapai" onclick="sendfp();">'
        html+='<div style="display: none;">'
        html+='<img src="/app/img/28gang/f1.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/f2.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/f3.png" class="buttonRound" />'
        html+='<img src="/app/img/28gang/f4.png" class="buttonRound" />'
        html+='</div>'
        html+='<img src="/app/img/28gang/f5.png" class="buttonRound" />'
        html+='</div>';
    }
    if(data=='5'){
        if(index <4){
        html+='<div class="buttonMiddle buttonCenter" onclick="tanpai();">摊牌</div>';}
    }
    if(data=='6'){
        if(index <4){
        html+='<div><div class="buttonLeft buttonCenter">下庄</div> <div class="buttonRight buttonCenter">准备</div></div>';
        }
    }
    if(data=='7'){
        if(index <4){
        html+='<div class="buttonCenter"><div class="buttonMiddle buttonCenter"  onClick="zhunbei();">准备</div> <img src="/app/img/28gang/ready.png" class="ready" style="display: none;"></div>';
        }
    }

    if(data=='8'){
        if(index <4){
        html+='<div class="buttonCenter"><img src="/app/img/28gang/robBanker1.png" class="bankerStatus"></div>';
        mp3play('buqiang')

        }
    }

     if(data=='9'){
        if(index <4){
        html+='<div class="buttonCenter" ><img src="/app/img/28gang/robBanker.png" class="bankerStatus"></div>';
        mp3play('qiangzhuang')

        }
    }
    if(data=='10'){
        if(index <4){
        html+='<div class="buttonCenter"><img src="/app/img/28gang/pleaseBet.png" class="bankerStatus" style="height: 4vh;" /></div> ';
        }
    }
    if(data=='11'){
        if(index <4){
        html+='<div class="buttonCenter"><img src="/app/img/28gang/waitBet.png" class="bankerStatus" style="height: 4vh;" /></div>';
        }
    }
    if(data=='12'){
        if(index <4){
            html+='<div class="buttonCenter"><img src="/app/img/28gang/kp.png" class="bankerStatus" style="height: 4vh;" /></div>';
        }
    }
    $('#operationButton').html(html);
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
        
            if(index>3){
                var win=data.win.index+1;
            }
            else if(data.win.index>3){
                var win=data.win.index+1;
            }
            else{
                var win=data.win.index-index-(-1);
            }
            if(win<=0){
                win=win-(-4);
            }

            if(index>3){
                var lose=data.lose.index+1;
            }
            else if(data.lose.index>3){
                var lose=data.lose.index+1;
            }
            else{
                var lose=data.lose.index-index-(-1);
            }
            if(lose<=0){
                lose=lose-(-4);
            }
        // var win=data.win.index-indexuser;
        // var lose=data.lose.index-indexuser;
        // if(win<=0){
        //     win=win-(-4);
        // }
        // if(lose<=0){
        //     lose=lose-(-4);
        // }   
  if (window.innerHeight)
winHeight = window.innerHeight,
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight,
winWidth = document.body.clientWidth;
// 金币宽
var jinbiWidth = 7.5,
    loseTop = parseInt($('.member'+lose).css('bottom')),
    loseHg  = parseInt($('.member'+lose +' .avatar').css('height'))/1,
    loseLf  = parseInt($('.member'+lose).css('left')),
    loseWt  = parseInt($('.member'+lose).css('width')),
    loseMl  = parseInt($('.member'+lose).css('margin-left')),
    winTop = parseInt($('.member'+win).css('bottom')),
    winHg  = parseInt($('.member'+win +' .avatar').css('height'))/1,
    winLf  = parseInt($('.member'+win).css('left')),
    winWt  = parseInt($('.member'+win).css('width')),
    winMl  = parseInt($('.member'+win).css('margin-left'))

if(typeof(winMl) == 'undefined'){
       winMl = 0; 
}

    var top  =loseTop-jinbiWidth+loseHg+'px';

  if(typeof(loseLf) == 'undefined' || !loseLf){
  }
  else{
    var left =loseLf-jinbiWidth+loseMl+loseWt/2+'px';
  }
 

 
  var ytop  =winTop-jinbiWidth+winHg+'px';
  if(typeof(winLf) == 'undefined' || !winLf){
  }
  else{
    var yleft =winLf-jinbiWidth+winMl+winWt/2+'px';
  }



  for(var i=0;i<8;i++){
     var html='<div class="memberCoin member'+win+lose+'"  ><img src="/app/img/28gang/coin.png" class="erba-memberCoin" /></div>'
     $('#jinbi').append(html);
     $('.member'+win+lose).eq(i).css('bottom',top);
     $('.member'+win+lose).eq(i).css('left',left);
     $('.member'+win+lose).eq(i).animate({
       bottom:ytop,
       left:yleft
    },0+i*150); 
}
   setTimeout('jibiover('+win+lose+')',2500);
}

function jibiover(data){
    $('#jinbi .member'+data).remove();
}


function jibichange(data){
    for(var i=0;i<data.length;i++){
        var jifenxx=data[i];

         if(index>3){
            var indexuser=jifenxx.index+1;
        }
        else if(jifenxx.index>3){
            var indexuser=jifenxx.index+1;
        }
        else{
            var indexuser=jifenxx.index-index-(-1);
        }
        if(indexuser<=0){
            indexuser=indexuser-(-4);
        }
        if(indexuser<5){
            $('.member'+indexuser+' .score').attr('data-val',jifenxx.dqjf);
        }
        else{
            $('.memberUp'+indexuser+' .score').attr('data-val',jifenxx.dqjf);
        }
        // var html='<label class="erbashu">-0</label><label class="erbaying">+0</label>';
        // var html='<div class="memberScoreText'+userindex+'" data-dqjf="'+jifenxx.dqjf+'" data-index="'+userindex+'"></div>';
        // $('.memberScoreText'+userindex+'').append(html);  
        //var fx=jifenxx.fx; 
    }

    setTimeout('jibiover2()',5000);
}
function clearmemberBull(){
    $('#memberBull').html('');
}

function jibiover2(){
     // $('#userfp').hide();
     $('.pointArea').each(function(){
        $(this).remove();    
     })

     $('.scorePlace').hide();
    $('.totalScore').html('总注:0');
    $('.myScore').html('下注:0');

    $('.member .majiang').html('');

    $('#member .member').each(function(){
        if(!$(this).find('.avatar').is(':hidden')){
        var lsjf=parseInt($(this).find('.score').html())+0;
        var dqjf=parseInt($(this).find('.score').attr('data-val'))+0;
        $(this).find('.score').html(dqjf);
        if(dqjf-lsjf>0){
            $(this).find('.memberScoreText1').html('<label class="erbaying"  style="display: block;">+'+(dqjf-lsjf)+'</label>');
        }
        else{
            $(this).find('.memberScoreText1').html('<label class="erbashu"  style="display: block;">'+(dqjf-lsjf)+'</label>');
        }
         $(this).find('.memberScoreText1').show();
        }
    })


     $('#member .memberUp').each(function(){

        if(!$(this).find('.avatar').is(':hidden')){
        var lsjf=parseInt($(this).find('.score').html());
        var dqjf=parseInt($(this).find('.score').attr('data-val'));
        $(this).find('.score').html(dqjf);
        if(dqjf-lsjf>0){
            $(this).find('.memberScoreText1').html('<label class="erbaying1"  style="display: block;">+'+(dqjf-lsjf)+'</label>');
        }
        else{
            $(this).find('.memberScoreText1').html('<label class="erbashu1"  style="display: block;">'+(dqjf-lsjf)+'</label>');
        }
         $(this).find('.memberScoreText1').show();
        }
    })
}







function  shoupai(data){
    var html='';
    html='<div class="cards"><img src="/app/img/28gang/card'+data['0']['card']['0']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['0']['card']['1']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['1']['card']['0']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['1']['card']['1']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['2']['card']['0']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['2']['card']['1']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['3']['card']['0']['card']+'.png" class="inner"></div>'
    html+='<div class="cards"><img src="/app/img/28gang/card'+data['3']['card']['1']['card']+'.png" class="inner"></div>'
    $('.first_half_cards').append(html);
}

function divRobBankerText(data){
    var html='';
    if(data=='0'){
        html+='准备开始';
    }
    if(data=='1'){
        html+='选择庄家';
    }
    if(data=='2'){
        html+='抢庄';
    }
    if(data=='3'){
        html+='等待下注';
    }
    if(data=='4'){
        html+='等待麻将摊牌';
    }
    if(data=='5'){
        html+='等待结束';
    }
    if(data=='6'){
        html+='庄家发牌';
    }
    if(data=='12'){
        html+='等待下一阶段';
    }
    if(data=='13'){
        html+='等待摊牌';
    }
    $('#divRobBankerText').html(html);
}























function overroom(data){


    overzt=0;
    $('#table').hide();
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    var img=new Image()
    var img1=new Image()
    //img.src="/app/skin/bg6/"+skin+".png";
    img.src="/app/skin/bg6/test.png";
    img1.src="/app/dyj.png";


    
    var sj=data;
    img.onload = function(){
        var ying = sj.user[0].index
        ctx.drawImage(img,0,0,800,1297)
        
        var time1=sj.time.substring(0,sj.time.length-3);
        ctx.font = "24px bolder 微软雅黑";
        ctx.fillStyle = "#d8cb66";
        ctx.fillText("房间号:22"+sj.id, 211,307);
        ctx.fillText(time1, 382, 307);

      sj.user.sort(function(a,b){
    return a.index-b.index
})
      ctx.font = "28px 微软雅黑";
        ctx.fillStyle = "black";
        var writeContent = fangzhu.skinname+'房主 ：'+fangzhu.nickname;
        var writeLeft = (c.width-ctx.measureText(writeContent).width)/2;
        ctx.fillText(writeContent,writeLeft,355);

        for(var i=0;i<sj.user.length;i++){
            if(i>1){
                ctx.fillStyle = "#07463e";
                ctx.fillRect(120,553-(0-(i-2)*78),561,70);
            }
            var user=sj.user[i];
            console.log(user)
            ctx.font = "31px bolder 微软雅黑";
            ctx.fillStyle = "#d8cb66";
            ctx.fillText(user.nickname.substring(0,8), 225, 436+(i*80));
            if(user.dqjf>0){
                user.dqjf='+'+user.dqjf;
            }else{
                ctx.fillStyle = "#fff";
                ctx.fillText(user.nickname.substring(0,8), 225, 436+(i*80));
                ctx.fillText(user.dqjf,  531, 436+(i*80));
            }
            ctx.fillText(user.dqjf,  531, 436+(i*80));
        }





        ctx.drawImage(img1,120,379-(0-(ying*84)),70,84)

    var dataURL = c.toDataURL();
    $('#overtime').html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 8%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="'+dataURL+'" style="width: 100%;height:100%;position: absolute;z-index: 201;">')
    $('#overtime').show();
    }
}