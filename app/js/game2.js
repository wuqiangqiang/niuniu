var allcardxx, fapaizt = 0;
function allfapai(data) {
	fapaizt = 1,
	$("#userfp").html(""),
	$(".isReady").hide();
	for (var i = 0; i < data.user.length; i++) {
		var user = data.user[i],
		indexuser = user.index - index - -1,
		html = "";
		if (indexuser <= 0 && (indexuser -= -9), data.allcard && 1 != indexuser)
			html = (html = (html = (html = (html = (html = html + '<div class="cardss cards card' + indexuser + '" style="display: none;" data="' + indexuser + '">') + '<div class="card cardopen card' + (card = data.allcard)[user.index][0].card + " card" + indexuser + '1 jiurenniuniu-index14" ></div> ') + '<div class="card cardopen card' + card[user.index][1].card + " card" + indexuser + '2 jiurenniuniu-index13" ></div> ') + '<div class="card cardopen card' + card[user.index][2].card + " card" + indexuser + '3 jiurenniuniu-index12" ></div> ') + '<div class="card cardopen card' + card[user.index][3].card + " card" + indexuser + '4 jiurenniuniu-index11" ></div>') + '<div class="card cardopen card' + card[user.index][4].card + " card" + indexuser + '5 jiurenniuniu-index10" ></div></div>';
		else
			html = (html = (html = (html = (html = (html = html + '<div class="cardss cards card' + indexuser + '" style="display: none;" data="' + indexuser + '">') + '<div class="card card' + indexuser + '1 jiurenniuniu-index14" ></div> ') + '<div class="card card' + indexuser + '2 jiurenniuniu-index13" ></div> ') + '<div class="card card' + indexuser + '3 jiurenniuniu-index12" ></div> ') + '<div class="card card' + indexuser + '4 jiurenniuniu-index11" ></div>') + '<div class="card card' + indexuser + '5 jiurenniuniu-index10" ></div></div>';
		$("#userfp").append(html)
	}
	if ($("#userfp .cards").show(), setTimeout(function () {
			$("#userfp .jiurenniuniu-index10").show(),
			fapaizt = 0
		}, 1e3), setTimeout(function () {
			$("#userfp .jiurenniuniu-index11").show()
		}, 800), setTimeout(function () {
			$("#userfp .jiurenniuniu-index12").show()
		}, 600), setTimeout(function () {
			$("#userfp .jiurenniuniu-index13").show()
		}, 400), setTimeout(function () {
			$("#userfp .jiurenniuniu-index14").show()
		}, 200), $(".myCards").eq(0).show(), data.card && !data.allcard)
		for (i = 0; i < data.card.length; i++) {
			var card = data.card[i];
			$(".card" + i + "  .back").removeClass("cardundefined").addClass("card" + card.card),
			setTimeout("showmycard(" + i + ")", 1500)
		}
	if (data.allcard)
		for (i = 0; i < data.allcard[index].length; i++) {
			card = data.allcard[index][i];
			$(".card" + i + "  .back").removeClass("cardundefined").addClass("card" + card.card),
			setTimeout("showmycard(" + i + ")", 1500)
		}
}
function fapaistart(data) {
	allcardxx = data;
	var fp = 0;
	for (i = 1; i < 6; i++) {
		var xx = {};
		xx.id = i,
		xx.card = data.card[index][i - 1],
		$(".cardDeal .card1" + i).attr("onclick", "fapxx(" + JSON.stringify(xx) + ")"),
		$(".cardDeal .card1" + i).is(":hidden") && (fp += 1)
	}
	5 <= fp && operationButton(7)
}
function fapxx(data) {
	$(".myCards .card" + (data.id - 1) + "  .back").removeClass("cardundefined").addClass("card" + data.card.card),
	$(".cardDeal .card1" + data.id).hide(),
	$(".myCards .card" + (data.id - 1)).show(),
	$(".myCards .card" + (data.id - 1)).addClass("card-flipped");
	var fp = 0;
	for (i = 1; i < 6; i++)
		$(".cardDeal .card1" + i).is(":hidden") && (fp += 1);
	5 <= fp && operationButton(7)
}
function tanpaime() {
	var time = Math.ceil(new Date / 1e3) - timewc;
	send("tanpai", {
		time: time
	}),
	showtanpai()
}
function showtanpai() {
	var mp3xx;
	operationButton(-1),
	0 == allcardxx.sfniu[index] ? tanpaixx2({
		card: allcardxx.newcard[index]
	}) : tanpaixx({
		card: allcardxx.newcard[index]
	});
	var msgxx = {};
	msgxx.index = index,
	msgxx.img = "/app/img/niu" + allcardxx.niu[index] + ".png",
	showmemberBull(msgxx),
	mp3xx = "mp3niu" + allcardxx.niu[index],
	mp3play(mp3xx)
}
function showothertanpai(data) {
	var msgxx;
	data == index ? showtanpai() : (mp3xx = "mp3niu" + allcardxx.niu[data], (msgxx = {}).index = data, msgxx.img = "/app/img/niu" + allcardxx.niu[data] + ".png", showmemberBull(msgxx), (msgxx = {
				user: {}
			}).user.index = data, msgxx.card = allcardxx.newcard[data], tanpaixxother(msgxx), mp3play(mp3xx))
}
function tanpaixx(data) {
	for (var i = 0; i < data.card.length; i++) {
		var card = data.card[i];
		$(".card0" + i + "  .back").removeClass("cardundefined").addClass("card" + card.card)
	}
	$(".cardDeal .card1").hide(),
	$(".myCards").eq(0).hide(),
	$(".myCards").eq(1).show();
	var left = ["34", "40", "46", "61", "68"];
	for (i = 0; i < data.card.length; i++)
		$(".myCards  .card0" + i).animate({
			left: left[i] + "%"
		}, 500)
}
function tanpaixx2(data) {
	for (var i = 0; i < data.card.length; i++) {
		var card = data.card[i];
		$(".card0" + i + "  .back").removeClass("cardundefined").addClass("card" + card.card)
	}
	$(".cardDeal .card1").hide(),
	$(".myCards").eq(0).hide(),
	$(".myCards").eq(2).show();
	var left = ["33", "42", "51", "60", "69"];
	for (i = 0; i < data.card.length; i++)
		$(".myCards .card0" + i).animate({
			left: left[i] + "%"
		}, 500)
}
function tanpaixxother(data) {
	var indexuser = data.user.index - index - -1;
	indexuser <= 0 && (indexuser -= -9);
	for (var html = "<div>", hz = 0, left = ["20.5", "18.5", "13.5", "11.5", "9.5"], right = ["12.63", "14.63", "17.63", "19.63", "21.63"], i = 0; i < data.card.length; i++) {
		var card = data.card[4 - i],
		card2 = data.card[i];
		i < 3 && (hz -= 0 - card2.val),
		html = html + '<div class="cards card' + indexuser + " card" + indexuser + (i - -1) + "1 jiurenniuniu-index1" + (4 - i) + 's card-flipped"><div class="face front"></div> <div class="face back card' + indexuser + " card" + card.card + ' card-flipped"></div></div>'
	}
	if (html += "</div>", $(".cardOver").append(html), $(".cardDeal .card" + indexuser).hide(), $(".cardOver .card" + indexuser).show(), hz % 10 == 0) {
		left = ["21.63", "19.63", "15.63", "13.63", "11.63"],
		right = ["10.5", "12.5", "16.5", "18.5", "20.5"];
		var right5 = ["12.5", "14.5", "18.5", "20.5", "22.5"],
		left6 = ["23", "21", "17", "15", "13"]
	} else
		left = ["19.5", "17.5", "15.5", "13.5", "11.5"], right = ["10.63", "12.63", "14.63", "16.63", "18.63"], right5 = ["13", "15", "17", "19", "21"], left6 = ["22", "20", "18", "16", "14"];
	for (i = 0; i < data.card.length; i++)
		6 < indexuser ? ($(" .cardOver .card" + indexuser + ".card" + indexuser + (i - -1) + "1").animate({
				left: left[i] + "vh"
			}, 500), console.log(888)) : 5 == indexuser ? $(" .cardOver .card" + indexuser + ".card" + indexuser + (i - -1) + "1").animate({
			right: right5[i] + "vh"
		}, 500) : 6 == indexuser ? $(" .cardOver .card" + indexuser + ".card" + indexuser + (i - -1) + "1").animate({
			left: left6[i] + "vh"
		}, 500) : $(" .cardOver .card" + indexuser + ".card" + indexuser + (i - -1) + "1").animate({
			right: right[i] + "vh"
		}, 500)
}
function showmycard(id) {
	$(".cardDeal .card1" + (id - -1)).hide(),
	$(".myCards .card" + id).show(),
	$(".myCards .card" + id).addClass("card-flipped")
}
function roomxx(data) {}
function adduser(data) {
	if (1 != isinitok)
		return setTimeout(function () {
			adduser(data)
		}, 50);
	var indexuser = data.user.index - index - -1;
	if (indexuser <= 0 && (indexuser -= -9), 0 < $(".member" + indexuser + " .onlinezt").length)
		$(".member" + indexuser + " .onlinezt").hide();
	else {
		if ("-1" == data.user.online)
			var onlinezt = "display:block";
		else
			onlinezt = "display:none";
		var html = '    <div class="member member' + indexuser + '" id="user' + data.user.id + '">';
		html += '<div class="zmmyctime"></div>',
		html += '<div style="    background: #000;z-index: 888;position: absolute;width: 100%;height: 100%;opacity: 0.5;' + onlinezt + '" class="onlinezt"></div>',
		html += '<img src="' + data.user.img + '" class="avatar" />',
		html += '<img src="/app/img/bull9/playerWin.png" class="banker" style="display: none;" /> ',
		html += '<div class="bottom jiurenniuniu-bottom">',
		html += '<div class="bname jiurenniuniu-bname">' + data.user.nickname + "</div>",
		html += '<div class="bscore jiurenniuniu-bname">' + data.user.dqjf + "</div></div> ",
		html += '<img id="banker213612" src="/app/img/bull9/bull_banker_bg.png" class="background jiurenniuniu-background" /> ',
		html += '<img src="/app/img/bull9/bull_banker_icon.png" class="background jiurenniuniu-background1" />',
		html += '<img id="bankerAnimate' + indexuser + '" src="/app/img/bull9/bull_banker_animate.png" class="jiurenniuniu-background2" />',
		html += '<img id="bankerAnimate1' + indexuser + '" src="/app/img/bull9/bull_banker_animate.png" class="jiurenniuniu-background2" /><div class="isReady" style="display:none"><img src="http://goss.fexteam.com/files/d_25/images/game/ready.png " class="ready" style="display: none;"></div></div>',
		$("#member").append(html),
		1 == data.user.zt && 0 == data.zt && $(".member" + indexuser + " .isReady").show()
	}
}
function zbuser(data) {
	var indexuser = data - index - -1;
	indexuser <= 0 && (indexuser -= -9),
	data == index ? operationButton(9) : ($(".member" + indexuser + " .unready").hide(), $(".member" + indexuser + " .isReady").show(), $(".member" + indexuser + " .ready").show())
}
function removeuser(data) {
	$("#user" + data + " .onlinezt").show(),
	$("#user" + data + " .isReady").hide()
}
function removeuser2(data) {
	var indexuser = data - index - -1;
	indexuser <= 0 && (indexuser -= -6),
	$("#user" + data).remove()
}
function showmemberTimesText(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9);
	var html = '<div class="memberTimesText' + indexuser + '" style="display: block;" ><img src="' + data.img + '" style="position: absolute; width: 100%;" /></div>';
	$("#memberTimesText").append(html)
}
function showmemberTimesText2(data) {
	var indexuser = data.index - index - -1;
	if (indexuser <= 0 && (indexuser -= -9), 6 == indexuser)
		var html = '<div class="memberTimesText' + indexuser + '" style="display: block;left:12vh;" ><img src="' + data.img + '" style="position: absolute; width: 100%;" /></div>';
	else if (5 < indexuser)
		html = '<div class="memberTimesText' + indexuser + '" style="display: block;left:16vh;" ><img src="' + data.img + '" style="position: absolute; width: 100%;" /></div>';
	else
		html = '<div class="memberTimesText' + indexuser + '" style="display: block;" ><img src="' + data.img + '" style="position: absolute; width: 100%;" /></div>';
	$("#memberTimesText2").append(html)
}
function showmemberRobText(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9);
	var html = '<div class="memberRobText' + indexuser + '" style="display: block;" ><img src="' + data.img + '" style="position: absolute; width: 100%;"></div>';
	$("#memberRobText").append(html)
}
function showmemberRobText2(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9);
	var html = '<div class="memberFreeRobText' + indexuser + '" style="display: block;" ><img src="' + data.img + '" style="position: absolute; width: 100%;"></div>';
	$("#memberFreeRobText").append(html)
}
function showmemberBull(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9);
	var html = '<div class="memberBull' + indexuser + '" style="display: block;"><img src="' + data.img + '" style="position: absolute; width: 100%;height: 100%;"/></div>';
	$("#memberBull").append(html)
}
function clearmemberBull() {
	$("#memberBull").html("")
}
function clearmemberTimesText() {
	$("#memberTimesText").html("")
}
function clearmemberRobText() {
	$("#memberRobText").html("")
}
function clearmemberRobText2() {
	$("#memberFreeRobText").html(""),
	$("#memberTimesText2").html("")
}
function qzcard(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9),
	data.bd && $("#userfp .qzcard").removeClass("qzcard"),
	$("#userfp .card" + indexuser).addClass("qzcard")
}
function showqz(data) {
	var userindex = data.user[data.index] - index - -1;
	userindex <= 0 && (userindex -= -9),
	$(".jiurenniuniu-background").hide(),
	$(".member" + userindex + " .jiurenniuniu-background").show(),
	data.index = data.index - -1,
	data.index >= data.user.length && (data.index = 0);
	var t = 4;
	2 == data.user.length && (t = 6),
	3 != data.user.length && 4 != data.user.length || (t = 5),
	ji = setTimeout("showqz(" + JSON.stringify(data) + ")", 4e3 / (data.user.length * t))
}
function sss(data) {
	var indexuser = data - index - -1;
	indexuser <= 0 && (indexuser -= -9),
	clearTimeout(ji),
	$(".jiurenniuniu-background").hide(),
	$("#bankerAnimate" + indexuser).show(),
	$("#bankerAnimate" + indexuser).show(),
	$("#bankerAnimate1" + indexuser).animate({
		top: "-1vh",
		left: "-1vh",
		width: "9.26vh",
		height: "9.26vh"
	}, 400, function () {
		$("#bankerAnimate1" + indexuser).animate({
			top: "-0.1vh",
			left: "-0.1vh",
			width: "7.46vh",
			height: "7.46vh"
		}, 400, function () {
			$(".member" + indexuser + " .jiurenniuniu-background").hide(),
			$(".member" + indexuser + " .jiurenniuniu-background1").show()
		})
	}),
	$("#bankerAnimate" + indexuser).animate({
		top: "-1.5vh",
		left: "-1.5vh",
		width: "10.26vh",
		height: "10.26vh"
	}, 400),
	$("#bankerAnimate" + indexuser).animate({
		top: "-0.1vh",
		left: "-0.1vh",
		width: "7.46vh",
		height: "7.46vh"
	}, 400)
}
function jibi(data) {
	if (data.win.index != data.bank.index && 1 != data.zt) {
		if (1 == data.fx)
			var kstime = 1e3;
		else
			kstime = 3600;
		return data.zt = 1,
		setTimeout("jibi(" + JSON.stringify(data) + ")", kstime),
		!1
	}
	if (data.win.index == data.bank.index && 1 != data.zt) {
		kstime = 1e3;
		return data.zt = 1,
		setTimeout("jibi(" + JSON.stringify(data) + ")", kstime),
		!1
	}
	mp3play("mp3gold");
	var win = data.win.index - index - -1,
	lose = data.lose.index - index - -1;
	win <= 0 && (win -= -9),
	lose <= 0 && (lose -= -9),
	window.innerHeight ? (winHeight = window.innerHeight, winWidth = window.innerWidth) : document.body && document.body.clientHeight && (winHeight = document.body.clientHeight, winWidth = document.body.clientWidth);
	var loseTop = parseInt($(".member" + lose).offset().top),
	loseHg = parseInt($(".member" + lose + " .avatar").css("height")) / 2,
	loseRg = parseInt($(".member" + lose).css("right")),
	loseLf = parseInt($(".member" + lose).offset().left),
	loseWt = parseInt($(".member" + lose).width()),
	loseMl = parseInt($(".member" + lose).css("margin-left")),
	winTop = parseInt($(".member" + win).offset().top),
	winHg = parseInt($(".member" + win + " .avatar").css("height")) / 2,
	winRg = parseInt($(".member" + win).css("right")),
	winLf = parseInt($(".member" + win).offset().left),
	winWt = parseInt($(".member" + win).width()),
	winMl = parseInt($(".member" + win).css("margin-left"));
	void 0 === winMl && (winMl = 0);
	var top = loseTop - 7.5 + loseHg + "px";
	if (void 0 === loseLf)
		var right = loseRg + 7.5 - loseWt / 2, left = parseInt(winWidth) - right - loseWt + "px";
	else
		left = loseLf - 7.5 + loseMl + loseWt / 2 + "px";
	var ytop = winTop - 7.5 + winHg + "px";
	if (void 0 === winLf)
		var yright = winRg + 7.5 - winWt / 2, yleft = parseInt(winWidth) - yright - winWt + "px";
	else
		yleft = winLf - 7.5 + parseFloat(winWt / 2) + "px";
	for (var i = 0; i < 8; i++) {
		var html = '<div class="memberCoin member' + win + lose + '"  ><img src="/app/img/bull9/bull_coin.png" class="liurenniuniu-memberCoin" /></div>';
		$("#jinbi").append(html),
		$(".member" + win + lose).eq(i).css("top", top),
		$(".member" + win + lose).eq(i).css("left", left),
		$(".member" + win + lose).eq(i).animate({
			top: ytop,
			left: yleft
		}, 0 + 250 * i)
	}
	setTimeout("jibiover(" + win + lose + ")", 2500)
}
function jibiover(data) {
	$("#jinbi .member" + data).remove()
}
function jibichange(data) {
	for (var i = 0; i < data.length; i++) {
		var jifenxx = data[i],
		userindex = jifenxx.index - index - -1;
		userindex <= 0 && (userindex -= -9);
		var html = '<div class="memberScoreText' + userindex + '" data-dqjf="' + jifenxx.dqjf + '" data-index="' + userindex + '"></div>';
		$("#memberScoreText1").append(html);
		var fx = jifenxx.fx
	}
	0 == fx ? setTimeout("jibiover2()", 6e3) : setTimeout("jibiover2()", 3500)
}
function jibiover2() {
	clearmemberBull(),
	clearmemberTimesText(),
	$("#memberScoreText1 div").each(function () {
		var userindex = $(this).attr("data-index"),
		dqjf = parseInt($(this).attr("data-dqjf")),
		lsjf = parseInt($("#member .member" + userindex + " .bscore").html());
		$("#member .member" + userindex + " .bscore").html(dqjf),
		0 < dqjf - lsjf ? $(this).html('<label class="jiurenniuniu-memberScoreText2"  style="display: block;">+' + (dqjf - lsjf) + "</label>") : $(this).html('<label class="jiurenniuniu-memberScoreText1"  style="display: block;">' + (dqjf - lsjf) + "</label>")
	}),
	$(".cardDeal").html(""),
	$(".cardOver").html(""),
	$(".myCards").hide(),
	$(".myCards").eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>'),
	$(".myCards").eq(1).html('<div class="cards card00" style="left: 34%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 40%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 46%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 61%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 68%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>'),
	$(".myCards").eq(2).html('<div class="cards card00" style="left: 33%;" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" style="left: 42%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" style="left: 51%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" style="left: 60%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" style="left: 69%;"><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>'),
	$("#memberScoreText1").show()
}
function initroom() {
	$(".cardDeal").html(""),
	$(".cardOver").html(""),
	$(".myCards").hide(),
	$(".myCards").eq(0).html(' <div class="cards3D"><div class="cards card0" style="display: none; transition: left 1s;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card1" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card2" style="display: none;"><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card3" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div> <div class="cards card4" style="display: none;" ><div class="face front"></div> <div class="face back cardundefined"></div></div></div>'),
	$(".myCards").eq(1).html('<div class="cards card00" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>'),
	$(".myCards").eq(2).html('<div class="cards card00"  ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card01" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card02" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card03" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div> <div class="cards card04" ><div class="face back cardundefined" style="transform:rotateY(0deg);-ms-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-o-transform:rotateY(0deg);"></div></div>'),
	$("#memberScoreText1").html(""),
	$("#memberScoreText1").hide(),
	$(".jiurenniuniu-background1").hide(),
	$(".jiurenniuniu-background2").hide(),
	clearmemberBull(),
	clearmemberTimesText(),
	clearmemberRobText()
}
function zhunbei() {
	send("zhunbei", {})
}
function xianxz(zt) {
	var time = Math.ceil(new Date / 1e3) - timewc;
	send("xianxz", {
		bs: zt,
		time: time
	}),
	showxian({
		index: index,
		zt: zt
	}),
	operationButton("-1")
}
function showxian(data) {
	var mp3xx,
	msgxx = {};
	data.index == index && operationButton("-1"),
	msgxx.index = data.index,
	msgxx.img = "/app/img/X-" + data.zt + ".png",
	showmemberTimesText(msgxx),
	mp3xx = "xia" + data.zt,
	mp3play(mp3xx)
}
function qbank(zt, type) {
	if (1 == fapaizt)
		return !1;
	var time = Math.ceil(new Date / 1e3) - timewc;
	send("qbank", {
		zt: zt,
		time: time,
		type: type
	}),
	qbankshow({
		zt: zt,
		type: type
	})
}
function qbankshow(data) {
	var html = "",
	bankwz = "",
	mp3xx = "";
	bankwz = 1 == data.type ? "go" : "rob",
	data.zt ? (4 == data.type ? (html += '<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block">', html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_' + bankwz + '.png">', html += '</div><div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;width: 3vh;left: 10vh;height: 3vh;top: 4vh;">', html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/X-' + data.zt + '.png"></div>') : (html += '<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">', html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_' + bankwz + '.png"></div>'), mp3xx = "qiangzhuang") : (html += '<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">', html += '<img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_not' + bankwz + '.png"></div>', mp3xx = "buqiang"),
	$("#operationButton").html(html),
	mp3play(mp3xx)
}
function qbankshowother(data) {
	var msgxx = {},
	bankwz = "",
	mp3xx = "";
	msgxx.index = data.index,
	bankwz = 1 == data.type ? "go" : "rob",
	data.zt ? (4 == data.type ? (msgxx.img = "/app/img/X-" + data.zt + ".png", showmemberTimesText2(msgxx), msgxx.img = "/app/img/bull9/bull_text_" + bankwz + ".png", showmemberRobText2(msgxx)) : (msgxx.img = "/app/img/bull9/bull_text_" + bankwz + ".png", showmemberRobText(msgxx)), mp3xx = "qiangzhuang") : (msgxx.img = "/app/img/bull9/bull_text_not" + bankwz + ".png", showmemberRobText(msgxx), mp3xx = "buqiang"),
	mp3play(mp3xx)
}
function overroom(data) {
	overzt = 0,
	$("#table").hide();
	var c = document.getElementById("myCanvas"),
	ctx = c.getContext("2d"),
	img = new Image,
	img1 = new Image;
	new Image;
	img.src = "/app/bg.png",
	img1.src = "/app/dyj.png";
	var sj = data;
	img.onload = function () {
		console.log(sj),
		ctx.drawImage(img, 0, 0, 800, 1297);
		var time1 = sj.time.substring(0, sj.time.length - 3);
		ctx.font = "22px bolder songti",
		ctx.fillStyle = "#d8cb66",
		ctx.fillText("房间号:" + sj.id, 175, 295),
		ctx.fillText(time1, 375, 295),
		ctx.fillText(sj.zjs + "局", 575, 295),
		ctx.font = "31px bolder songti",
		ctx.fillStyle = "black";
		for (var writeContent = fangzhu.skinname + "房主 ：" + fangzhu.nickname, i = (c.width, ctx.measureText(writeContent).width, 0); i < sj.user.length; i++) {
			1 < i && (ctx.fillStyle = "#19170b", ctx.fillRect(140, 486 - (0 - 75 * (i - 2)), 521, 70));
			var user = sj.user[i];
			ctx.font = "31px bolder songti",
			ctx.fillStyle = "#d8cb66",
			ctx.fillText(user.nickname.substring(0, 10), 219, 380 + 75 * i),
			0 < user.dqjf ? user.dqjf = "+" + user.dqjf : (ctx.fillStyle = "#fff", ctx.fillText(user.nickname.substring(0, 10), 219, 380 + 75 * i), ctx.fillText(user.dqjf, 581, 380 + 75 * i)),
			ctx.fillText(user.dqjf, 581, 380 + 75 * i)
		}
		var dataURL = c.toDataURL();
		$("#overtime").html('<div onclick="location.href=\'/portal/user/index.html\'" style="z-index: 9999;position: absolute;width: 28%;height: 6%;bottom: 7%;right: 15%;" ></div><div style="background: #000;width: 100%;height: 100%;position: absolute;z-index: 200;""></div> <img src="' + dataURL + '" style="width: 100%;height:100%;position: absolute;z-index: 201;">'),
		$("#overtime").show()
	}
}
function msgshow(data) {
	var indexuser = data.index - index - -1;
	indexuser <= 0 && (indexuser -= -9),
	mp3play(data.mp3);
	var html = '<div class="messageSay messageSay' + indexuser + '" ><div id="fj-kjyy">' + data.msg + '</div> <div class="triangle"></div></div>';
	$("#messageSay").append(html),
	setTimeout(function () {
		console.log(indexuser),
		$(".messageSay" + indexuser).remove()
	}, 1500)
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
        html+='            z-index: 200;" onclick="xianxz(1);">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div class="operationButton-gg3">'
        html+='               1倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin2" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(2);">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               2倍'
        html+='              </div>'
        html+='             </div> '
        html+='             <div class="divCoin divCoin3" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(4);">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               4倍'
        html+='              </div>'
        html+='             </div>' 
        html+='             <div class="divCoin divCoin4" style="display: inline-block;'
        html+='            z-index: 200;" onclick="xianxz(5);">'
        html+='              <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> '
        html+='              <div  class="operationButton-gg3"  >'
        html+='               5倍'
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
function divRobBankerText(data) {
	var html = "";
	"0" == data && (html += "准备开始"),
	"1" == data && (html += "上庄"),
	"2" == data && (html += "抢庄"),
	"3" == data && (html += "闲家下注"),
	"4" == data && (html += "等待摊牌"),
	"5" == data && (html += "等待结束"),
	$("#divRobBankerText").html(html)
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