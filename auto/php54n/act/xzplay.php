<?php
$id = ceil($data2['id']);
$msg = array();
$msg['id'] = 'selectBanker' . $data2['id'];
$msg['html'] = 'active';
act('active', $msg, $connection);
$play = $db->getOne("select * from jz_rule where id='" . $db->s($id) . "' and zt=1");
if (isset($connection->user['history_select'])) {
	$history_select = $db->getOne('SELECT `history_select` FROM `jz_user` WHERE `id` = ' . ceil($connection->user['id']));
	$history_select = !empty($history_select['history_select']) ? json_decode($history_select['history_select'], true) : [];
	if (empty($history_select[$play['type']])) {
		$history_select[$play['type']] = [];
	}
	$history_select[$play['type']]['id'] = $play['id'];
	$db->update('jz_user', ['history_select' => json_encode($history_select)], 'id=' . ceil($connection->user['id']));
}
$msg = array();
$msg['id'] = 'setting';
$msg['html'] = '';
if ($play['cm']) {
	$msg['html'] .= '<div class="selectPart">
                            <div class="selectTitle">筹码：</div>
                            <div class="selectList">';
	$list = explode(',', $play['cm']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="cm' . $key . '" onclick="send(\'rule\',{id:\'cm\',key:' . $key . '})">
                                    <div class="selectBox"></div>
                                    <img src="/app/files/d_19/images/common/gou.png">
                                    <div class="selectText">' . $value . '</div>
                                </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                        </div>';
}
if ($play['df']) {
$msg['html'] .= '
<div class="selectPart" style="height:9vh;" >
						<div class="selectTitle">底分：</div>
						<div class="selectList">
							<div class="selectItem"  id ="df0"  onclick="send(\'rule\',{id:\'df\',key:\'0\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >1分</div>
							</div>							
							<div class="selectItem"  id ="df1" onclick="send(\'rule\',{id:\'df\',key:\'1\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >2分</div>
							</div>
							<div class="selectItem" id ="df2" onclick="send(\'rule\',{id:\'df\',key:\'2\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >3分</div>
							</div>
                            <div class="selectItem" id ="df3" onclick="send(\'rule\',{id:\'df\',key:\'3\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >4分</div>
							</div>
                            <div class="selectItem" id ="df4" onclick="send(\'rule\',{id:\'df\',key:\'4\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >5分</div>
							</div>
                              <div  class="selectItem"   id ="shabi" onclick="send(\'rule\',{id:\'shabi\',key:value,value:this.value})">
                             <div class="selectBox" ></div>
                             <img src="/app/files/d_19/images/common/gou.png">
                                <select  onchange="send(\'rule\',{id:\'df\',key:value,value:this.value})" style="margin-top: 0.5vh;">
                              <option value="0">1分</option><option value="1">2分</option><option value="2">3分</option><option value="3">4分</option><option value="4">5分</option><option value="5">6分</option><option value="6">7分</option><option value="7">8分</option><option value="8">9分</option><option value="9">10分</option><option value="10">11分</option><option value="11">12分</option><option value="12">13分</option><option value="13">14分</option><option value="14">15分</option><option value="15">16分</option><option value="16">17分</option><option value="17">18分</option><option value="18">19分</option><option value="19">20分</option><option value="20">21分</option><option value="21">22分</option><option value="22">23分</option><option value="23">24分</option><option value="24">25分</option><option value="25">26分</option><option value="26">27分</option><option value="27">28分</option><option value="28">29分</option><option value="29">30分</option><option value="30">31分</option><option value="31">32分</option><option value="32">33分</option><option value="33">34分</option><option value="34">35分</option><option value="35">36分</option><option value="36">37分</option><option value="37">38分</option><option value="38">39分</option><option value="39">40分</option><option value="40">41分</option><option value="41">42分</option><option value="42">43分</option><option value="43">44分</option><option value="44">45分</option><option value="45">46分</option><option value="46">47分</option><option value="47">48分</option><option value="48">49分</option><option value="49">50分</option><option value="50">51分</option><option value="51">52分</option><option value="52">53分</option><option value="53">54分</option><option value="54">55分</option><option value="55">56分</option><option value="56">57分</option><option value="57">58分</option><option value="58">59分</option><option value="59">60分</option><option value="60">61分</option><option value="61">62分</option><option value="62">63分</option><option value="63">64分</option><option value="64">65分</option><option value="65">66分</option><option value="66">67分</option><option value="67">68分</option><option value="68">69分</option><option value="69">70分</option><option value="70">71分</option><option value="71">72分</option><option value="72">73分</option><option value="73">74分</option><option value="74">75分</option><option value="75">76分</option><option value="76">77分</option><option value="77">78分</option><option value="78">79分</option><option value="79">80分</option><option value="80">81分</option><option value="81">82分</option><option value="82">83分</option><option value="83">84分</option><option value="84">85分</option><option value="85">86分</option><option value="86">87分</option><option value="87">88分</option><option value="88">89分</option><option value="89">90分</option><option value="90">91分</option><option value="91">92分</option><option value="92">93分</option><option value="93">94分</option><option value="94">95分</option><option value="95">96分</option><option value="96">97分</option><option value="97">98分</option><option value="98">99分</option><option value="99">100分</option></select></div>										</div>
					</div>';
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['gz']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">规则：</div>
                    <div class="selectList">';
	$list = explode(',', $play['gz']);
	foreach ($list as $key => $value) {
		if ($play['type'] != 27) {
			$msg['html'] .= '<div class="selectItem" id="gz' . $key . '" onclick="send(\'rule\',{id:\'gz\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
		} else {
			$msg['html'] .= '<div class="selectItem" id="gz' . $key . '" onclick="send(\'rule\',{id:\'gz\',key:' . $key . '})">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'gz';
			$data['key'] = '0';
			reqact($data, $connection);
		}
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['gz2']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">规则：</div>
                    <div class="selectList">';
	$list = explode(',', $play['gz2']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="gz2' . $key . '" onclick="send(\'rule\',{id:\'gz2\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['px']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">牌型：</div>
                    <div class="selectList">';
	$list = explode(',', $play['px']);
	foreach ($list as $key => $value) {
		if ($play['type'] != 27) {
			$msg['html'] .= '<div class="selectItem" id="px' . $key . '" onclick="send(\'rule\',{id:\'px\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
		} else {
			$msg['html'] .= '<div class="selectItem" id="px' . $key . '" onclick="send(\'rule\',{id:\'px\',key:' . $key . '})">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
			$connection->rule['px'][0] = 1;
		}
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['type'] == 1 || $play['type'] == 2 || $play['type'] == 10 || $play['type'] == 14 ){
$msg['html'] .= '
<div class="selectPart" style="height:9vh;" >
						<div class="selectTitle">倍数：</div>
						<div class="selectList">
							<div class="selectItem"  id ="bs1"  onclick="send(\'rule\',{id:\'bs\',key:\'1\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >1，2，4，5</div>
							</div>							
							<div class="selectItem"  id ="bs2" onclick="send(\'rule\',{id:\'bs\',key:\'2\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >1，3，5，8</div>
							</div>
							<div class="selectItem" id ="bs3" onclick="send(\'rule\',{id:\'bs\',key:\'3\'})">
								<div class="selectBox" ></div>
								<img src="/app/files/d_19/images/common/gou.png">
								<div class="selectText" >2，4，6，10</div>
							</div>
						</div>
					</div>';
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['type'] == 1 || $play['type'] == 2 || $play['type'] == 10 || $play['type'] == 14 || $play['type']== 5  || $play['type']==16 ){
$msg['html'] .= '
<div class="selectPart" style="height:9vh;line-height:4.5vh ">
						<div class="selectTitle">时间：</div>
						<div class="selectList">						
							<div class="selectItem"  >
								<div class="text" style="float: left;">准备</div>
								<select  onchange="send(\'rule\',{id:\'time\',key:\'zb\',value:this.value})">
									<option value="10" >10秒</option>
									<option value="9" >9秒</option>
									<option value="8" >8秒</option>
									<option value="7" >7秒</option>
									<option value="6" >6秒</option>
									<option value="5" >5秒</option>
								</select>
							</div>
							<div class="selectItem"  style="margin-left: 1vh;">
								<div class="text" style="float: left;">抢庄</div>
								<select id = "timeqz" onchange="send(\'rule\',{id:\'time\',key:\'qz\',value:this.value})">
									<option value="10">10秒</option>
									<option value="9">9秒</option>
									<option value="8">8秒</option>
									<option value="7">7秒</option>
									<option value="6">6秒</option>
									<option value="5">5秒</option>
								</select>
							</div>
						</div>	
						<div class="selectList" style="margin-left: 8vh;margin-top: .4vh">
							<div class="selectItem"  >
								<div class="text" style="float: left;">下注</div>
								<select id = "timexz" onchange="send(\'rule\',{id:\'time\',key:\'xz\',value:this.value})">
									<option value="10" >10秒</option>
									<option value="9">9秒</option>
									<option value="8">8秒</option>
									<option value="7">7秒</option>
									<option value="6">6秒</option>
									<option value="5">5秒</option>
								</select>
							</div>
							<div class="selectItem" style="margin-left: 1vh;">
								<div class="text" style="float: left;">摊牌</div>
								<select id = "timetp" onchange="send(\'rule\',{id:\'time\',key:\'tp\',value:this.value})">
									<option value="10">10秒</option>
									<option value="9">9秒</option>
									<option value="8">8秒</option>
									<option value="7">7秒</option>
									<option value="6">6秒</option>
									<option value="5">5秒</option>
								</select>
							</div>
						</div>
					</div>';

					
}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';


if ($play['js']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">局数：</div>
                    <div class="selectList">';
	$list = explode(',', $play['js']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="js' . $key . '" onclick="send(\'rule\',{id:\'js\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['sz']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">上庄：</div>
                    <div class="selectList">';
	$list = explode(',', $play['sz']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="sz' . $key . '" onclick="send(\'rule\',{id:\'sz\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['sx']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">上限：</div>
                    <div class="selectList">';
	$list = explode(',', $play['sx']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="sx' . $key . '" onclick="send(\'rule\',{id:\'sx\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['zm']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">抓马：</div>
                    <div class="selectList">';
	$list = explode(',', $play['zm']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="zm' . $key . '" onclick="send(\'rule\',{id:\'zm\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['gp']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">鬼牌：</div>
                    <div class="selectList">';
	$list = explode(',', $play['gp']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="gp' . $key . '" onclick="send(\'rule\',{id:\'gp\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}
if ($play['gd']) {
	$msg['html'] .= '<div class="selectPart">
                    <div class="selectTitle">锅底：</div>
                    <div class="selectList">';
	$list = explode(',', $play['gd']);
	foreach ($list as $key => $value) {
		$msg['html'] .= '<div class="selectItem" id="gd' . $key . '" onclick="send(\'rule\',{id:\'gd\',key:' . $key . '})">
                            <div class="selectBox"></div>
                            <img src="/app/files/d_19/images/common/gou.png">
                            <div class="selectText">' . $value . '</div>
                        </div> ';
	}
	$msg['html'] .= '</div><div style="clear: both;"></div>
                </div>';
}


act('html', $msg, $connection);
$data = array();
$data['act'] = 'rule';
$data['play'] = $play;
reqact($data, $connection);
if (!empty($history_select) && !empty($history_select[$play['type']]) && !empty($history_select[$play['type']]['rule'])) {
	foreach ($history_select[$play['type']]['rule'] as $id => $val) {
		if (($id == 'gz2') || ($id == 'px')) {
		} else {
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = $id;
			$data['key'] = $val;
			reqact($data, $connection);
		}
	}
} 
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'time';
			$data['key'] = 'zb';
			$data['value'] = '10';
			reqact($data, $connection);
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'time';
			$data['key'] = 'qz';
			$data['value'] = '10';
			reqact($data, $connection);			
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'time';
			$data['key'] = 'xz';
			$data['value'] = '10';
			reqact($data, $connection);
			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'time';
			$data['key'] = 'tp';
			$data['value'] = '10';
			reqact($data, $connection);		

			$data = array();
			$data['act'] = 'rule';
			$data['id'] = 'bs';
			$data['key'] = '1';
			reqact($data, $connection);