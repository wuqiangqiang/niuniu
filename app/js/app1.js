var cs=10;
var hosturl=window.location.hostname;
var websocket;
var token;
var room;
var index;
var timewc=0;
var bgmp3open;
var mp3open;
var overzt=1;
if(!localStorage.bgmp3open){
    bgmp3open=1;
}
else{
    bgmp3open=localStorage.bgmp3open;
}
if(!localStorage.mp3open){
    mp3open=1;
}
else{
    mp3open=localStorage.mp3open;
}

var isinitok = 0;
function initok() {
	isinitok = 1;
}



function connect(n){
  if(overzt==0){
    load('hide');
    return false;
  }
  if(websocket)websocket.close();
    if(cs>0){
      cs=cs-1;
      websocket = new WebSocket("ws://"+hosturl+":"+n);
      websocket.onmessage = function(event) {
        cs=10;
        zdata=JSON.parse(event.data);
        //console.log(zdata);
        window[zdata.act](zdata.msg);
      };
      websocket.onopen=function(e){
            load('hide');
            if(!token){
                token=localStorage.token;
            }
            send('init',{token:token,room:room});
      }
      websocket.onclose=function(e){
            if(overzt==0){
                return false;
                load('hide');
              }
            load('show');
            //prompt('网络不给力,正在努力链接服务器!');
            websocket.close(); //关闭TCP连接
            cs=cs-1;
            connect(n);
      };
    }
    else{
      load('hide');
      //prompt('已经于服务器断开,请刷新重试!');
      setTimeout("$('body').hide()",3000);
    }
}
function gologin(){
    location.href="/";
}
function gxtoken(data){
    localStorage.token=data;
}
//加载中
function load(s) {
    var Img = "data:image/gif;base64,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"
    var html = "<div class=\"load\"><img src=" + Img + " /></div>";
    if (s == 'show') {
        $('body').append(html);
    }
    if (s == 'hide') {
        $('.load').remove();
    }
    maik(s);
}
//遮罩
function maik(s) {
    var hei = $(window).height();
    var wid = $(window).width();
    var html = "<div class=\"maik\" style='height:"+hei+"px;width:"+wid+"px;' onclick=\"Center($('.noticewi'), 'hide')\"></div>";
    if (s == 'show') {
        if ($(".maik").length <= 0) {
            $('body').append(html);
        }
    }
    if (s == 'hide') {
        $('.maik').remove();
    }
}
//获取页参数
function Request(m) {
    var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
}
function prompt(txt) {
    var html = "<div class=\"prompt\"><span>" + txt + "</span></div>";
    var Bw = $(window).width();
    var Bh = $(window).height();
    $('body').append(html);
    var Pw = $('.prompt').width();
    var Ph = $('.prompt').height();
    $('.prompt').css({
        "top": Bh / 2 - Ph / 2,
        "left": Bw / 2 - Pw / 2
    });
    setTimeout(function () {
        $('.prompt').remove();
    }, 2000);
}

//记录登陆凭证
function login(data){
    localStorage.userid=data.uid;
    localStorage.salt=data.salt;
}
//销毁登陆凭证
function loginout(msg){
    if(msg){
        prompt(msg);
        setTimeout("$('body').hide()",3000);
    }
    localStorage.token='';
    websocket.close();
}

function send(act,data){
    if(!data){
        data={};
    }
    var fs = data;
    fs.act=act;
    var jsonStr = JSON.stringify(fs);
    if(typeof(websocket)=='undefined'){
        prompt('与服务器端口链接，请刷新重试');
        return false;
    }
    websocket.send(jsonStr);
}


function alert2v(msg) {
	var html = '<div id="valert2" class="alert" style="z-index: 2100000;">';
	html += '<div class="alertBack"></div> ',
	html += '<div class="mainPart" style="height: 31%;margin-top: -113.39px;">',
	html += '<div class="backImg">',
	html += '<div class="blackImg" style="height: 59%;"></div>',
	html = (html += "</div> ") + '<div class="alertText" style="top: 35%;" id="tipmsg">' + msg + "</div>",
	html += '<div class="buttonRight" style="left: 31.5%;width: 17vh;height: 5.5vh;" onclick="$(\'#valert2\').remove()">确定</div> </div></div>',
	$("body").append(html)
}


//标题
function Title(title) {
    document.title = title;
}
function attr(data){
    $('#'+data.id).attr(data.wz,data.nr);
}
function html(data){
    if(data.id == 'nickname') {
        data.html = decode64(data.html);
    }
    $('#'+data.id).html(data.html);
}

function addid(data){
    $('#'+data.id).addClass(data.html);
}


function removeid(data){
    $('#'+data.id).removeClass(data.html);
}


function value(data){
    $('#'+data.id).val(data.html);
}
function value2(data){
    $(''+data.id).val(''+data.html);
}
function append(data){
    $('#'+data.id).append(data.html);
}
function jsdata(data){
    eval(data);
}
function active(data){
    $('#'+data.id).addClass(data.html).siblings().removeClass(data.html);
} 

function showid(data){
    $('#'+data.id).show();
}
function hideid(data){
    $('#'+data.id).hide();
}

function goroom(data){
    location.href="/portal/index/room.html?room="+data.room;
}

function gxindex(data){
    index=data;
}

function watchindex(data) {
	allindex = data,
	console.log("dddddddddddddddddfdfdf"),
	index = allindex.length <= 0 ? 0 : allindex[0]
}



function timewcgx(data){
    timewc=Math.ceil(new Date()/1000)-data;
    //console.log(timewc);
    setTimeout('send("timegx",{})',5000);
}
function timeyc(data){
    send("timeyc",{time:data});
}
function ycxx(data){
    $('#user'+data.id+' .zmmyctime').html(data.time);
}


function WeChat(url,title,img,desc){
     $.get("/index.php/portal/index/getconfig/",{url:window.location.href},function(data) {
        wx.config(data);
        wx.ready(function () {
        // 在这里调用 API
        wx.onMenuShareTimeline({  //例如分享到朋友圈的API 
        title: title, // 分享标题
        link: url, // 分享链接
        imgUrl: img, // 分享图标
        success: function () {
        },
        cancel: function () {
        // 用户取消分享后执行的回调函数
        }
        });
 
        wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: url, // 分享链接
        imgUrl: img, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
        },
        cancel: function () {
        // 用户取消分享后执行的回调函数
        }
        });
        wx.error(function (res) {
         //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
        });
        });
    },
    "json"
    );
}

var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//中国asp之家 http://www.aspxhome.com
function encode64(input)
{
    input = strUnicode2Ansi(input);

    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    do{
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2))
        {
            enc3 = enc4 = 64;
        }
        else if(isNaN(chr3))
        {
            enc4 = 64;
        }

        output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    }while(i < input.length);

    return output;
}
