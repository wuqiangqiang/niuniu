// function robat_add(n){
// //加人
//     var data=[];
//     data.user=[];
//     data.user.id=1;
//     data.user.img='http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5tBhicJMsicaO9ywUJ4EYg4QFeg16Xr6EdnkrrpHe5lWOwZcPwgguW0OxJprXbaqkReqxqzAZgoUA/0';
//     data.user.dqjf=0;
//     data.user.online=1;
//     data.zt=1;
//     var j=0;
//     for(i=0;i<n;i++){
//         if(i-(0-j)!=index){
//             data.user.index=i-(0-j);
//             data.user.nickname='test'+(i-(0-j));
//             adduser(data);
//         }
//         else{
//             i=i-1;
//             j=1;
//         }
//     }
// }
// robat_add(8);
// // //发牌
// var data=[];
// data.user=[];
// for (var i = 0; i <9; i++) {
//     data['user'][i]=[];
//     data['user'][i]['index']=i;
// };
// allfapai(data);

//按钮
// operationButton('7');


// //倒计时提示
// var sj=Math.ceil(new Date()/1000)+60;
// djs(sj);
// divRobBankerText('3');

// //抢庄 type 1上下庄 2抢庄 3倍数
// qbankshow({zt:4,type:2})

// //别人
// var j=0;
// for(i=0;i<8;i++){
//     console.log(1)
//     if(i-(0-j)!=index){
//         qbankshowother({index:i-(0-j),zt:4,type:2})
//     }
//     else{
//         i=i-1;
//         j=1;
//     }
// }

// //抢庄动画
// var data={
//     index:0,
//     user:[0,1,2,3,4,5,6]
// };
// showqz(data);
// setTimeout(function(){
//         sss(2);
//         },4000);



////闲下注
// for(i=0;i<9;i++){
//     showxian({index:i,zt:4});
// }

//翻牌
// var data=[];
// card=[
//     {card:'A1',val:'10'},
//     {card:'A1',val:'10'},
//     {card:'A1',val:'10'}
  
// ];
// data.card={
//     0:card,
//     1:card,
//     2:card,
//     3:card,
//     4:card,
//     5:card
// };
// data.newcard={
//     0:card,
//     1:card,
//     2:card,
//     3:card,
//     4:card,
//     5:card
// };
// data.niu={
//     0:13,
//     1:13,
//     2:13,
//     3:13,
//     4:13,
//     5:13
// };
// data.sfniu={
//     0:1,
//     1:1,
//     2:1,
//     3:1,
//     4:1,
//     5:1
// };
// fapaistart(data);
// setTimeout(function(){
//         showothertanpai(0);
//         showothertanpai(1);
//         showothertanpai(2);
//         showothertanpai(3);
//         showothertanpai(4);
//         showothertanpai(5);
//     },2000);
//     
//     
//     
// 金币
// 

//    var data=[];
// for(i=0;i<9;i++){
//     if(i!=1){
//     data.bank={index:1}
//     data.fx = 2;
//     data.zt = 1;
//     data.lose = {index: 1, dqjf: -10}
//     data.win =  {index: i, dqjf: 10}
//     jibi(data)
//     }
// }
 

