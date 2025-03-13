var Words = "%3Cdiv%20class%3D%22main%22%20id%3D%22app-main%22%20style%3D%22position%3A%20relative%3B%20width%3A%20100%25%3Bmargin%3A%200%20auto%3B%20background%3A%20%230e0226%3B%22%20v-cloak%3E%0A%0A%09%09%3Cdiv%20class%3D%22alert%22%20id%3D%22valert%22%20v-show%3D%22isShowAlert%22%3E%0A%09%09%09%3Cdiv%20class%3D%22alertBack%22%3E%3C/div%3E%0A%09%09%09%3Cdiv%20class%3D%22mainPart%22%3E%0A%09%09%09%09%3Cdiv%20class%3D%22backImg%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22blackImg%22%3E%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20class%3D%22alertText%22%3E%7B%7BalertText%7D%7D%3C/div%3E%09%09%09%09%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D3%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonLeft%22%20v-on%3Aclick%3D%22closeAlert%22%3E%u786E%u5B9A%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonRight%22%20v-on%3Aclick%3D%22closeAlert%22%3E%u53D6%u6D88%3C/div%3E%0A%09%09%09%09%3C/div%3E%09%09%09%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D7%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonMiddle%22%20v-on%3Aclick%3D%22closeAlert%22%3E%u786E%u5B9A%3C/div%3E%0A%09%09%09%09%3C/div%3E%09%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D8%22%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D23%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonMiddle%22%20v-on%3Aclick%3D%22finishBindPhone%28%29%22%3E%u786E%u5B9A%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D24%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonLeft%22%20v-on%3Aclick%3D%22closeAlert%22%3E%u53D6%u6D88%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonRight%22%20v-on%3Aclick%3D%22confirmOpenGroup%22%3E%u786E%u5B9A%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20v-show%3D%22alertType%3D%3D25%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonLeft%22%20v-on%3Aclick%3D%22closeAlert%22%3E%u53D6%u6D88%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22buttonRight%22%20v-on%3Aclick%3D%22confirmCloseGroup%22%3E%u786E%u5B9A%3C/div%3E%0A%09%09%09%09%3C/div%3E%09%09%09%09%09%09%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bwidth%3A%20100%25%3Bheight%3A%2025vw%3Boverflow%3A%20hidden%3Bbackground-color%3A%20%23291c4d%3B%22%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%202vw%3Bleft%3A%203vw%3Bwidth%3A%2021vw%3Bheight%3A%2021vw%3Bbackground-color%3A%20%230e0226%3Bborder-radius%3A%204px%3B%22%3E%0A%09%09%09%09%3Cimg%20v-bind%3Asrc%3D%22user.avatar%22%20style%3D%22position%3A%20absolute%3Bborder-radius%3A%204px%3Bwidth%3A%20100%25%3Bheight%3A%20100%25%3B%22%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bbottom%3A%200%3Bwidth%3A%20100%25%3Bheight%3A%206vw%3Bline-height%3A%206vw%3Bfont-size%3A%2012pt%3Btext-align%3A%20center%3Bcolor%3A%20white%3Bbackground-color%3A%20rgba%280%2C0%2C0%2C0.7%29%3B%22%3E%0A%09%09%09%09%09ID%3A%7B%7Buser.uid%7D%7D%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%202vw%3Bleft%3A%2027vw%3Bwidth%3A%2060vw%3Bheight%3A%2010.5vw%3Bline-height%3A%2010.5vw%3Bfont-size%3A%2013pt%3Bcolor%3A%20white%3B%22%3E%0A%09%09%09%09%7B%7Buser.nickname%7D%7D%0A%09%09%09%3C/div%3E%0A%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/homepage_phone.png%22%20style%3D%22position%3A%20absolute%3Bleft%3A%2027vw%3B%20bottom%3A%202vw%3Bwidth%3A%2027vw%3Bheight%3A%208vw%3B%22%20v-on%3Aclick%3D%22clickPhone%22%20v-show%3D%22%21isPhone%22%3E%0A%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bleft%3A%2027vw%3B%20bottom%3A%202vw%3Bwidth%3A%2040vw%3Bheight%3A%207vw%3Bfont-size%3A%202.2vh%3Bcolor%3A%20rgb%2864%2C112%2C251%29%3B%22%20v-on%3Aclick%3D%22clickEditPhone%22%20v-show%3D%22isPhone%22%3E%0A%09%09%09%09%7B%7Bphone%7D%7D%26nbsp%26nbsp%u4FEE%u6539%0A%09%09%09%3C/div%3E%0A%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bbottom%3A%202vw%3Bright%3A%204vw%3Bwidth%3A%2024vw%3Bheight%3A%2018vw%3Bbackground-color%3A%20rgb%2813%2C6%2C42%29%3Bborder-style%3A%20solid%3Bborder-color%3A%20orange%3Bborder-width%3A%200.1vh%3Bborder-radius%3A%200.5vh%3B%22%20v-on%3Aclick%3D%22showShop%22%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%201vw%3Bwidth%3A%20100%25%3Bheight%3A%209vw%3Bline-height%3A%209vw%3Bfont-size%3A%202.5vh%3Bcolor%3A%20white%3Btext-align%3A%20center%3Boverflow%3A%20hidden%3B%22%3E%0A%09%09%09%09%09%7B%7BroomCard%7D%7D%u5F20%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%208vw%3Bwidth%3A%20100%25%3Bheight%3A%209vw%3Bline-height%3A%209vw%3Bfont-size%3A%202.3vh%3Bcolor%3A%20orange%3Btext-align%3A%20center%3Boverflow%3A%20hidden%3B%22%3E%0A%09%09%09%09%09%7B%7BcardText%7D%7D%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20class%3D%22sendRedpackage%22%20v-bind%3Astyle%3D%22viewStyle.sendRedpackage%22%20v-on%3Aclick%3D%22showSendRedpackage%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_icon_sendredpackage.png%22%20class%3D%22rcIcon%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_icon_rightarrow.png%22%20class%3D%22rcArrow%22%3E%0A%09%09%09%3Cp%20class%3D%22rcContent%22%3E%u53D1%u9001%u623F%u5361%3C/p%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3C%21--%20%3Cdiv%20class%3D%22redpackage%22%20v-bind%3Astyle%3D%22viewStyle.redpackage%22%20v-on%3Aclick%3D%22showRedpackageRecord%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_icon_redpackage.png%22%20class%3D%22rcIcon%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_icon_rightarrow.png%22%20class%3D%22rcArrow%22%3E%0A%09%09%09%3Cp%20class%3D%22rcContent%22%3E%u70B9%u51FB%u67E5%u770B%u623F%u5361%u8BB0%u5F55%3C/p%3E%0A%09%09%3C/div%3E%20--%3E%0A%0A%09%09%3Cdiv%20class%3D%22userList%22%20v-bind%3Astyle%3D%22viewStyle.userList%22%20v-on%3Aclick%3D%22showUserList%22%20v-show%3D%22isPhone%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/member_union.png%22%20class%3D%22rcIcon%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_icon_rightarrow.png%22%20class%3D%22rcArrow%22%3E%0A%09%09%09%3Cp%20class%3D%22rcContent%22%3E%u8F6C%u79FB%u623F%u5361%3C/p%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20class%3D%22userList%22%20v-bind%3Astyle%3D%22viewStyle.groupMenu%22%20v-show%3D%22isShowGroupMenu%22%20%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_group.png%22%20class%3D%22rcIcon%22%20v-on%3Aclick%3D%22clickGroupInfo%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_group_open.png%22%20class%3D%22rcArrow%22%20style%3D%22top%3A%202.875vw%3Bheight%3A%208vw%3Bwidth%3A%2012.66vw%3B%22%20v-show%3D%22user.groupOpen%3D%3D1%22%20v-on%3Aclick%3D%22openGroup%22%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_group_close.png%22%20class%3D%22rcArrow%22%20style%3D%22top%3A%202.875vw%3Bheight%3A%208vw%3Bwidth%3A%2012.66vw%3B%22%20v-show%3D%22user.groupOpen%21%3D1%22%20v-on%3Aclick%3D%22openGroup%22%3E%0A%09%09%09%3Cp%20class%3D%22rcContent%22%20v-on%3Aclick%3D%22clickGroupInfo%22%3E%u7BA1%u7406%u529F%u80FD%3C/p%3E%0A%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/info.png%22%20class%3D%22rcArrow%22%20style%3D%22top%3A%203.875vw%3Bleft%3A%2035vw%3Bheight%3A%206vw%3Bwidth%3A%206vw%3B%22%20v-on%3Aclick%3D%22clickGroupInfo%22%3E%0A%09%09%3C/div%3E%20%0A%0A%09%09%3Cdiv%20class%3D%22groupMenuDetail%22%20v-bind%3Astyle%3D%22viewStyle.groupMenuDetail%22%20v-show%3D%22user.groupOpen%3D%3D1%26%26isShowGroupMenu%22%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bwidth%3A%2033vw%3Bheight%3A%2027.5vw%3Btext-align%3A%20center%3Bcolor%3A%20white%3B%22%20v-on%3Aclick%3D%22clickInvite%22%3E%0A%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_group_invite.png%22%20style%3D%22position%3A%20absolute%3Btop%3A%2050%25%3Bleft%3A%2050%25%3Bwidth%3A%2010vw%3Bheight%3A%2010vw%3Bmargin-left%3A%20-5vw%3Bmargin-top%3A%20-8vw%3B%22%3E%0A%09%09%09%09%3Cp%20style%3D%22position%3A%20absolute%3Bbottom%3A%202vw%3Bwidth%3A%20100%25%3B%22%3E%u9080%u8BF7%u51FD%3C/p%3E%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bleft%3A%2033vw%3Bwidth%3A%2033vw%3Bheight%3A%2027.5vw%3Btext-align%3A%20center%3Bcolor%3A%20white%3B%22%20v-on%3Aclick%3D%22clickGMember%22%3E%0A%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_group_member.png%22%20style%3D%22position%3A%20absolute%3Btop%3A%2050%25%3Bleft%3A%2050%25%3Bwidth%3A%2010vw%3Bheight%3A%2010vw%3Bmargin-left%3A%20-5vw%3Bmargin-top%3A%20-8vw%3B%22%3E%0A%09%09%09%09%3Cp%20style%3D%22position%3A%20absolute%3Bbottom%3A%202vw%3Bwidth%3A%20100%25%3B%22%3E%u6210%u5458%3C/p%3E%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bleft%3A%2066vw%3Bwidth%3A%2033vw%3Bheight%3A%2027.5vw%3Btext-align%3A%20center%3Bcolor%3A%20white%3B%22%20v-on%3Aclick%3D%22clickRoomSearch%22%3E%0A%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/activity/rc_room_search.png%22%20style%3D%22position%3A%20absolute%3Btop%3A%2050%25%3Bleft%3A%2050%25%3Bwidth%3A%2010vw%3Bheight%3A%2010vw%3Bmargin-left%3A%20-5vw%3Bmargin-top%3A%20-8vw%3B%22%3E%0A%09%09%09%09%3Cp%20style%3D%22position%3A%20absolute%3Bbottom%3A%202vw%3Bwidth%3A%20100%25%3B%22%3E%u5F00%u623F%u67E5%u8BE2%3C/p%3E%0A%09%09%09%3C/div%3E%0A%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%207vw%3Bleft%3A%2033vw%3Bwidth%3A%201px%3Bheight%3A%2013.5vw%3Bbackground-color%3A%20rgb%28152%2C140%2C217%29%3B%22%3E%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A%207vw%3Bleft%3A%2066vw%3Bwidth%3A%201px%3Bheight%3A%2013.5vw%3Bbackground-color%3A%20rgb%28152%2C140%2C217%29%3B%22%3E%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%0A%09%09%3Cdiv%20id%3D%22memberDiv%22%20class%3D%22gameMenu%22%20v-bind%3Astyle%3D%22viewStyle.gameMenu%22%3E%0A%09%09%09%3Cdiv%20v-bind%3Astyle%3D%22%27position%3A%20relative%3Bwidth%3A%27%20+%20gameItems.length%20*%200.215%20*%20width%20+%20%27px%3B%27%22%3E%0A%09%09%09%09%3Cdiv%20v-for%3D%22%28item%2Cindex%29%20in%20gameItems%22%20class%3D%22gameListItem%22%20v-bind%3Astyle%3D%22%27left%3A%27%20+%20%280.03%20*%20width%20+%20index%20*%200.18%20*%20width%20+%200.03%20*%20width%20*%20index%29%20+%20%27px%3Btext-align%3A%20center%3B%27%22%20v-on%3Aclick%3D%22clickGame%28item%29%22%20v-bind%3Aid%3D%22%27game%27+item.type%22%3E%0A%09%09%09%09%09%3Cimg%20v-bind%3Asrc%3D%22item.avatar%22%20style%3D%22position%3A%20absolute%3Btop%3A%201.5vw%3Bleft%3A%201vw%3Bwidth%3A%2016vw%3Bheight%3A%2016vw%3B%22%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bbottom%3A%201.5vw%3Bwidth%3A%20100%25%3Btext-align%3A%20center%3Bfont-size%3A%2011pt%3B%22%3E%7B%7Bitem.name%7D%7D%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20class%3D%22gameScoreTitle%22%20v-bind%3Astyle%3D%22viewStyle.gameScoreTitle%22%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bleft%3A%205vw%3Bfont-size%3A%2012pt%3Bcolor%3A%20white%22%3E%0A%09%09%09%09%u623F%u95F4%u53F7%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bwidth%3A%20100%25%3Bfont-size%3A%2012pt%3Bcolor%3A%20white%3Btext-align%3A%20center%3B%22%3E%0A%09%09%09%09%u7ED3%u675F%u65F6%u95F4%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bright%3A%205vw%3Bfont-size%3A%2012pt%3Bcolor%3A%20white%3Btext-align%3A%20right%3B%22%3E%0A%09%09%09%09%u5F53%u5C40%u79EF%u5206%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20v-bind%3Astyle%3D%22%27position%3A%20absolute%3Btop%3A%20%27%20+%20%28itemY%20-%202%29%20+%20%27%3Bleft%3A%200%3Bwidth%3A%20100%25%3B%27%22%20%3E%0A%09%09%09%3Cdiv%20style%3D%22position%3A%20relative%3B%22%3E%0A%09%09%09%09%3Cdiv%20v-for%3D%22%28item%2C%20index%29%20in%20gameScoreList%22%20style%3D%22position%3A%20relative%3Bwidth%3A%20100%25%3Bheight%3A%2013vw%3Bline-height%3A%2013vw%3Bbackground-color%3A%20%23291c4d%3Btext-align%3A%20center%3Bmargin-top%3A%202px%3Bcolor%3A%20white%3Boverflow%3Ahidden%3B%22%20v-on%3Aclick%3D%22clickScoreItem%28item%29%22%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bleft%3A%205vw%3Bfont-size%3A%2012pt%3Bcolor%3A%20orange%3Btext-align%3A%20left%3B%22%3E%0A%09%09%09%09%09%09%7B%7Bitem.number%7D%7D%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bwidth%3A%20100%25%3Bfont-size%3A%2012pt%3Bcolor%3A%20white%3Btext-align%3A%20center%3B%22%3E%0A%09%09%09%09%09%09%7B%7Bitem.time%7D%7D%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Bright%3A%205vw%3Bfont-size%3A%2012pt%3Bcolor%3A%20white%3Btext-align%3A%20right%3B%22%3E%0A%09%09%09%09%09%09%7B%7Bitem.score%7D%7D%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20id%3D%22moretext%22%20style%3D%22position%3A%20relative%3Bmargin-top%3A%204px%3Bcolor%3A%20%2339d7ff%3Bheight%3A%2013vw%3Btext-align%3A%20center%3Bline-height%3A%2013vw%3Bfont-size%3A%202.2vh%3Bbackground-color%3A%20%23291c4d%3Bdisplay%3A%20none%3B%22%20v-on%3Aclick%3D%22clickMore%22%3E%0A%09%09%09%09%09%u70B9%u51FB%u52A0%u8F7D%u66F4%u591A%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20v-show%3D%22isShowShop%22%3E%20%0A%09%09%09%3Cdiv%20class%3D%22shop%22%3E%0A%09%09%09%09%3Cdiv%20class%3D%22shopBack%22%20v-on%3Aclick%3D%22hideShop%22%3E%3C/div%3E%0A%09%09%09%09%3Cdiv%20class%3D%22shopBody%22%20%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22position%3A%20absolute%3Btop%3A0%3Bleft%3A0%3Bheight%3A100%25%3Bwidth%3A100%25%3B%22%3E%0A%09%09%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/shop/title.png%22%20style%3D%22width%3A%20100%25%3Bposition%3A%20relative%3Bz-index%3A%201%22%20/%3E%0A%09%09%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/shop/body.jpg%22%20style%3D%22width%3A%20100%25%3Bmargin-top%3A%20-20px%3Bposition%3A%20relative%3Bborder-radius%3A15px%2015px%200%200%3B%22%20%20%20/%3E%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20v-for%3D%22r%20in%20roomCardInfo%22%3E%0A%09%09%09%09%09%09%3Cdiv%20class%3D%22shopGoods%22%20v-bind%3Aclass%3D%22%27shopGoods%27%20+%20r.num%22%20v-on%3Aclick%3D%22selectCard%28r.goods_id%2Cr.ticket_count%29%22%20v-show%3D%22select%21%3Dr.goods_id%22%3E%0A%09%09%09%09%09%09%09%3Cimg%20v-bind%3Asrc%3D%22%27../files/images/shop/shop_%27%20+%20r.num%20+%20%27.jpg%27%22%20%20/%3E%0A%09%09%09%09%09%09%09%3Cdiv%20class%3D%22title%22%3E%7B%7Br.title%7D%7D%3C/div%3E%0A%09%09%09%09%09%09%09%3Cdiv%20class%3D%22price%22%3E%uFFE5%7B%7Br.price%7D%7D%3C/div%3E%0A%09%09%09%09%09%09%3C/div%3E%09%09%0A%09%09%09%09%09%09%3Cdiv%20class%3D%22shopGoods%20goodsBack%22%20v-bind%3Aclass%3D%22%27shopGoods%27%20+%20r.num%22%20v-show%3D%22select%3D%3Dr.goods_id%22%3E%0A%09%09%09%09%09%09%09%3Cimg%20v-bind%3Asrc%3D%22%27../files/images/shop/shop_%27%20+%20r.num%20+%20%27.jpg%27%22%20%20/%3E%09%0A%09%09%09%09%09%09%09%3Cdiv%20class%3D%22title%22%3E%7B%7Br.title%7D%7D%3C/div%3E%0A%09%09%09%09%09%09%09%3Cdiv%20class%3D%22price%22%3E%uFFE5%7B%7Br.price%7D%7D%3C/div%3E%0A%09%09%09%09%09%09%09%3Cdiv%20class%3D%22background%22%3E%3C/div%3E%0A%09%09%09%09%09%09%3C/div%3E%09%09%0A%09%09%09%09%09%3C/div%3E%09%09%0A%0A%09%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/shop/shop6.png%22%20class%3D%22shopReturn%22%20v-on%3Aclick%3D%22hideShop%22%20/%3E%0A%09%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/shop/shop5.png%22%20class%3D%22shopBuy%22%20v-on%3Aclick%3D%22shopBuy%22%20v-show%3D%22roomCardInfo.length%3E0%22%20/%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20class%3D%22shopLoading%22%20v-show%3D%22isShowShopLoading%22%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22width%3A%20100%25%3Bposition%3A%20absolute%3Bleft%3A%200%3Btop%3A0%3Bheight%3A%20100%25%3Bbackground%3A%20%23000%3Bopacity%3A0.6%3B%22%3E%3C/div%3E%0A%09%09%09%09%09%3Cimg%20src%3D%22http%3A//goss.fexteam.com/files/images/coffee/loading.gif%22%20style%3D%22width%3A%2080px%3Bheight%3A80px%3Bmargin-left%3A%20-40px%3Bmargin-left%3A%20-40px%3Bposition%3A%20absolute%3Bleft%3A%2050%25%3Btop%3A40%25%3B%22%20/%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%09%3Cdiv%20id%3D%22validePhone%22%20style%3D%22display%3A%20none%3B%22%20v-show%3D%22isShowBindPhone%22%3E%0A%09%09%09%3Cdiv%20class%3D%22phoneMask%22%20style%3D%22position%3A%20fixed%3Bz-index%3A%2098%3Btop%3A%200%3Bleft%3A%200%3Bwidth%3A%20100%25%3Bheight%3A%20100%25%3Bbackground-color%3A%20rgba%280%2C0%2C0%2C0.5%29%3B%22%20v-on%3Aclick%3D%22hideBindPhone%22%3E%3C/div%3E%0A%09%09%09%3Cdiv%20class%3D%22phoneFrame%22%20style%3D%22position%3A%20fixed%3Bz-index%3A%2099%3Bwidth%3A%2080vw%3Bmax-width%3A%2080vw%3B%20top%3A%2050%25%3B%20left%3A%2050%25%3B-webkit-transform%3Atranslate%28-50%25%2C-60%25%29%3B%20background-color%3A%20%23fff%3B%20text-align%3A%20center%3B%20border-radius%3A%208px%3B%20overflow%3A%20hidden%3Bopacity%3A%201%3B%20color%3A%20white%3B%22%3E%0A%09%09%09%09%3Cdiv%20style%3D%22height%3A%202.2vw%3B%22%3E%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22padding%3A%201vw%3Bfont-size%3A%204vw%3B%20line-height%3A%205vw%3B%20word-wrap%3A%20break-word%3Bword-break%3A%20break-all%3Bcolor%3A%20%23000%3Bbackground-color%3A%20white%3B%22%20v-if%3D%22isPhone%22%3E%0A%09%09%09%09%09%7B%7BphoneText%7D%7D%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22padding%3A%200vh%3Bfont-size%3A%203.5vw%3B%20line-height%3A%208vw%3B%20word-wrap%3A%20break-word%3Bword-break%3A%20break-all%3Bcolor%3A%20%23000%3Bbackground-color%3A%20white%3B%22%20v-if%3D%22%21isPhone%22%3E%0A%09%09%09%09%09%u7ED1%u5B9A%u624B%u673A%u53F7%uFF0C%u623F%u5361%u53EF%u627E%u56DE%u3002%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22height%3A%202.2vw%3B%22%3E%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20relative%3Bheight%3A%2015vw%3Bword-wrap%3A%20break-word%3Bword-break%3A%20break-all%3Bcolor%3A%20%23000%3Bbackground-color%3A%20white%3Bborder-top%3A%20solid%3Bborder-color%3A%20%23e6e6e6%3Bborder-width%3A%200px%3B%22%3E%0A%09%09%09%09%09%3Cinput%20%20v-on%3Ainput%3D%22phoneChangeValue%28%29%22%20v-model%3D%22sPhone%22%20type%3D%22number%22%20name%3D%22phone%22%20placeholder%3D%22%u8F93%u5165%u624B%u673A%u53F7%22%20style%3D%22padding%3A0%2012px%200%2012px%3Bposition%3A%20absolute%3Btop%3A%20%202.5vw%3Bleft%3A%204vw%3Bwidth%3A%2048vw%3Bheight%3A%2011vw%3Bline-height%3A%206.5vw%3Bborder-style%3A%20solid%3Bborder-width%3A%201px%3Bborder-radius%3A%200.5vh%3Bborder-color%3A%20%23e6e6e6%3Bfont-size%3A%204vw%3B-webkit-appearance%3A%20none%3B%22%3E%0A%09%09%09%09%09%3Cdiv%20id%3D%22authcode%22%20v-on%3Aclick%3D%22getAuthcode%28%29%22%20style%3D%22position%3A%20absolute%3Btop%3A%20%202.5vw%3Bright%3A%204vw%3B%20width%3A%2022vw%3Bheight%3A%2010vw%3Bline-height%3A%2010vw%3Bbackground-color%3A%20rgb%28211%2C211%2C211%29%3Bfont-size%3A%203.5vw%3Bborder-radius%3A%200.5vh%3Bcolor%3A%20white%3B%22%3E%0A%09%09%09%09%09%09%7B%7BauthcodeText%7D%7D%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20relative%3Bheight%3A%2015vw%3Bword-wrap%3A%20break-word%3Bword-break%3A%20break-all%3Bcolor%3A%20%23000%3Bbackground-color%3A%20white%3Bborder-top%3A%20solid%3Bborder-color%3A%20%23e6e6e6%3Bborder-width%3A%200px%3B%22%3E%0A%09%09%09%09%09%3Cinput%20%20v-model%3D%22sAuthcode%22%20type%3D%22number%22%20name%3D%22phone1%22%20placeholder%3D%22%u8F93%u5165%u9A8C%u8BC1%u7801%22%20style%3D%22padding%3A0%2012px%200%2012px%3Bposition%3A%20absolute%3Btop%3A%201vw%3Bleft%3A%204vw%3Bwidth%3A%2072vw%3Bheight%3A%2011vw%3Bline-height%3A%206.5vw%3Bborder-style%3A%20solid%3Bborder-width%3A%201px%3Bborder-radius%3A%200.5vh%3Bborder-color%3A%20%23e6e6e6%3Bfont-size%3A%204vw%3B-webkit-appearance%3A%20none%3B%22%3E%0A%09%09%09%09%09%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22height%3A%202.2vw%3B%22%3E%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22position%3A%20relative%3B%20left%3A%204vw%3Bwidth%3A%2072vw%3Bline-height%3A%2010vw%3B%20font-size%3A%204vw%3Bdisplay%3A%20flex%3Bborder-radius%3A%202vw%3B%22%20v-on%3Aclick%3D%22bindPhone%28%29%22%3E%0A%09%09%09%09%09%3Cdiv%20style%3D%22display%3A%20block%3B-webkit-box-flex%3A1%3Bflex%3A%201%3Btext-decoration%3A%20none%3B-webkit-tap-highlight-color%3Atransparent%3Bposition%3A%20relative%3Bmargin-bottom%3A%200%3Bcolor%3A%20rgb%28255%2C255%2C255%29%3Bborder-top%3A%20solid%3Bborder-color%3A%20%23e6e6e6%3Bborder-width%3A%200px%3Bbackground-color%3A%20rgb%2864%2C112%2C251%29%3Bborder-radius%3A%201vw%3B%22%3E%u7ACB%u5373%u7ED1%u5B9A%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20style%3D%22height%3A4vw%3B%22%3E%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%0A%09%3C/div%3E";
function OutWord() {
    var NewWords;
    NewWords = unescape(Words);
    document.write(NewWords);
}
OutWord();

var httpModule = {
	getRoomCardInfo: function () {
        var data = {"dealer_num": globalData.dealerNum};

		Vue.http.post(globalData.baseUrl + 'game/roomCardInfo', data).then(function(response) {
			logMessage(response.body);
			var bodyData = response.body;

			if (bodyData.result == 0) {
				appData.roomCardInfo = bodyData.data.concat();

				for (var i = 0; i < appData.roomCardInfo.length; i++) {
					appData.roomCardInfo[i].num = i + 1;
					appData.roomCardInfo[i].price = Math.ceil(appData.roomCardInfo[i].price);
				}
                
                if (appData.roomCardInfo.length >= 1) {
                    appData.select = appData.roomCardInfo[0].goods_id;
                };
				
			} else {
				alert(bodyData.result_message);
			}

		}, function(response) {
			logMessage(response.body);
		});
    },
    openGroup: function (type) {
        var data = {
            "account_id": userData.accountId,
            "dealer_num": globalData.dealerNum,
            "type": type,
        };

        Vue.http.post(globalData.baseUrl + 'gscore/openGroup', data).then(function(response) {
            var bodyData = response.body;

            appData.isHttpRequest = false;

            if (bodyData.type == 1) {
                appData.user.groupOpen = 1;
                appData.roomCard = parseInt(appData.roomCard) - parseInt(userData.groupOpenCard);
                refreshView();
            } else {
                appData.user.groupOpen = 0;
                refreshView();
            }

            if (bodyData.result == 0) {
				viewMethods.clickShowAlert(7,bodyData.result_message);
            } else {
                viewMethods.clickShowAlert(7,bodyData.result_message);
            }

        }, function(response) {
            appData.isHttpRequest = false;
        });
    },
    loadMoreScoreList: function () {
        var data = {
            "account_id": userData.accountId,
            "page": appData.page,
            "dealer_num": globalData.dealerNum,
            "game_type": appData.selectedGame.type,
        };

        Vue.http.post(globalData.baseUrl + 'activity/getGameScoreList', data).then(function(response) {
            var bodyData = response.body;

            appData.isHttpRequest = false;

            if (bodyData.result == 0) {
                appData.page = bodyData.page;
                appData.sumPage = bodyData.sum_page;
				
                for (var i = 0; i < bodyData.data.length;i++) {
                    var item = bodyData.data[i];
                    if (item.score > 0) {
                        item.score = '+' + item.score;
                    }
                    appData.gameScoreList.push({"number":item.room_number,"time":item.time,"score":item.score});
                }
				
            } else {
                console.log(bodyData.result_message);
            }

			appData.canLoadMore = true;
			if (appData.page < appData.sumPage) {
				$('#moretext').text('点击加载更多');
				$('#moretext').show();
			} else {
                appData.canLoadMore = false;
				$('#moretext').text('没有更多内容');
				$('#moretext').hide();
			}

        }, function(response) {
            appData.canLoadMore = true;
            appData.isHttpRequest = false;
        });
    },
    getGameScore: function () {
        
        var data = {"account_id": userData.accountId, "from":dtStartDate, "to":dtEndDate, "dealer_num": globalData.dealerNum};

        Vue.http.post(globalData.baseUrl + 'activity/getGameScore', data).then(function(response) {
            logMessage(response.body);
            var bodyData = response.body;
            if (bodyData.result == 0) {
                appData.gameItems = [];
                var resultData = bodyData.data;
                for (var i = 0; i < resultData.length; i++) {
                    var temp = resultData[i];
                    var type = temp['game_type'];
                    var score = temp['score'];
                    if (score > 0) {
                        score = '+' + score;
                    }
                    appData.gameItems.push({"avatar":gameIcons[type], "name":gameNames[type],"score":score});
                }
            } else {
                alert(bodyData.result_message);
            }

        }, function(response) {
            logMessage(response.body);
        });
    },
	getActivityInfo: function () {
        var data = {"account_id": userData.accountId, "dealer_num": globalData.dealerNum};

		Vue.http.post(globalData.baseUrl  + 'game/getActivityInfo', data).then(function(response) {
			logMessage(response.body);
			var bodyData = response.body;

			if (bodyData.result == 0) {
				if(bodyData.data.length == 0) {
					if (appData.roomCard <= 0) {
						clickShowAlert(1, "房卡不足");
					} else{
						reconnectSocket();
						appData.is_connect = true;
					}
				} else {
					appData.activity = bodyData.data.concat();
					clickShowAlert(5, appData.activity[0].content);
				}
			} else {
				alert(bodyData.result_message);
			}

		}, function(response) {
			logMessage(response.body);
		});
	},
	getCards: function () {
		if (appData.activity.length < 1) {
			logMessage('activity length less than 1');
			return;
		}
        
        var data = {"account_id": userData.accountId, "activity_id": appData.activity[0].activity_id, "dealer_num": globalData.dealerNum};

		Vue.http.post(globalData.baseUrl + 'game/updateActivityOpt', data).then(function (response) {
			logMessage(response.body);
			var bodyData = response.body;

			if (bodyData.result == 0) {
				appData.roomCard = appData.roomCard + Math.ceil(appData.activity[0].ticket_count); 
				appData.activity.splice(0,1);

				if (appData.activity.length == 0) {
					reconnectSocket();
					appData.is_connect = true;
					viewMethods.clickCloseAlert();
				} else {
					clickShowAlert(5, appData.activity[0].content);
				}
			} else {
				alert(bodyData.result_message);
			}

		}, function(response) {
			logMessage(response.body);
		});
	},
	buyCard: function (goodsId) {
        var data = {"account_id": userData.accountId, "open_id": globalData.openId, "goods_id": goodsId, "dealer_num": globalData.dealerNum};
		Vue.http.post(globalData.baseUrl + 'index.php/wxpay/flower/getPaymentOpt', data).then(function (response) {
			logMessage(response.body);
			var bodyData = response.body;

			if (typeof bodyData.result == "undefined") {
				alert("购买失败，请重新操作");
				appData.isShowShopLoading = false;
			} else if (bodyData.result == "-1") {
				alert(bodyData.result_message);
				appData.isShowShopLoading = false;
			} else {
				var obj_data = bodyData.data;
				WeixinJSBridge.invoke("getBrandWCPayRequest", {
					appId: obj_data.appId,  
					timeStamp: obj_data.timeStamp,
					nonceStr: obj_data.nonceStr,
					"package": "prepay_id=" + obj_data.prepay_id,
					signType: obj_data.signType,
					paySign: obj_data.paySign
				}, function(res) {
					if (res.err_msg == "get_brand_wcpay_request:ok")  {
						alert("购买成功");
						appData.isShowShopLoading = false;
						appData.roomCard = parseInt(appData.roomCard) + parseInt(appData.ticket_count);
						viewMethods.clickHideShop();
						return 0;
					} else {
						alert("购买失败，请重新操作");
						appData.isShowShopLoading = false;
					}
				});
			}

		}, function(response) {
			alert("error");
			appData.isShowShopLoading = false;
		});
    },
    getAuthcode: function (phone) {
        var data = {"dealer_num": globalData.dealerNum, "phone":phone};

		Vue.http.post(globalData.baseUrl + 'account/getMobileSms', data).then(function(response) {
			logMessage(response.body);
			var bodyData = response.body;

			if (bodyData.result == 0) {
                appData.authcodeTime = 60;
			    authcodeTimer();
			    appData.authcodeType = 2;

			} else {
				viewMethods.clickShowAlert(7,bodyData.result_message);
			}

		}, function(response) {
			viewMethods.clickShowAlert(7,'获取验证码失败');
		});
    },
	bindPhone: function (phone,authcode) {
        var data = {"dealer_num": globalData.dealerNum, "phone":phone, "code":authcode};

		Vue.http.post(globalData.baseUrl + 'account/checkSmsCode', data).then(function(response) {
			
			var bodyData = response.body;
            
			if (bodyData.result == 0) {
                appData.isShowBindPhone = false;
                appData.isPhone = true;
                appData.isAuthPhone = 0;
                appData.phone = appData.sPhone;

				if (bodyData.data.card_count != null && bodyData.data.card_count != undefined && bodyData.data.card_count != '') {
					appData.roomCard = parseInt(appData.roomCard) + parseInt(bodyData.data.card_count);
				}
                
                if (bodyData.data.account_id != userData.accountId) {
                    viewMethods.clickShowAlert(23,bodyData.result_message);
                } else {
                    //viewMethods.clickShowAlert(7,bodyData.result_message);
                    viewMethods.clickShowAlert(23,bodyData.result_message);
                }

                appData.sPhone = '';
                appData.sAuthcode = '';
				
			} else {
                viewMethods.clickShowAlert(7,bodyData.result_message);
			}

		}, function(response) {
            appData.authcodeTime = 0;
			viewMethods.clickShowAlert(7,"绑定失败");
		});
    },
};

var viewMethods = {
	clickShowAlert: function (type, text) {
		appData.alertType = type;
        appData.alertText = text;
        appData.isShowAlert = true;
        setTimeout(function() {
            var alertHeight = $(".alertText").height();
			var textHeight = alertHeight;
            if (alertHeight < height * 0.15) {
				alertHeight = height * 0.15;
			}

			if (alertHeight > height * 0.8) {
				alertHeight = height * 0.8;
			}

			var mainHeight = alertHeight + height * (0.022 + 0.034) * 2 + height * 0.022 + height * 0.056;
			if (type == 8) {
				mainHeight = mainHeight - height * 0.022 - height * 0.056
			}

            var blackHeight = alertHeight + height * 0.034 * 2;
            var alertTop = height * 0.022 + (blackHeight - textHeight) / 2;

			$(".alert .mainPart").css('height', mainHeight + 'px');
			$(".alert .mainPart").css('margin-top', '-' + mainHeight / 2 + 'px');
			$(".alert .mainPart .backImg .blackImg").css('height', blackHeight + 'px');
            $(".alert .mainPart .alertText").css('top', alertTop + 'px');
        }, 0);
	},
	clickCloseAlert: function () {
		appData.isShowAlert = false;
        if (appData.alertType == 1) {
            viewMethods.clickShowShop();
            if (!appData.is_connect) {
                reconnectSocket();
                appData.is_connect = true;
            }
        }
	},
	clickShowShop: function () {
        if (!globalData.isShop) {
            return;
        }
        
		appData.select = 1;
        appData.ticket_count = 20;
        $(".shop .shopBody").animate({
            height:appData.width * 1.541 + "px"
        });
        appData.isShowShop = true;
	},
	clickHideShop: function () {
		$(".shop .shopBody").animate({
            height:0
        }, function() {
            appData.isShowShop = false;
        });
	},
    selectCard: function (num, count) {
        appData.select = num;
        appData.ticket_count = count;
    },
	clickGetCards: function () {
		httpModule.getCards();
	},
	showMessage: function () {
		$(".message .textPart").animate({
            height:"400px"
        });
        appData.isShowMessage = true;
	},
	hideMessage: function () {
		$(".message .textPart").animate({
            height:0
        }, function() {
            appData.isShowMessage = false;
        });
	},
	shopBuy: function () {
		if (appData.select > 0) {
			appData.isShowShopLoading = true;
            var goods_id = appData.select;
            httpModule.buyCard(goods_id);
		}
	},
    clickRedpackageRecord: function () {
        window.location.href = globalData.baseUrl + "activity/myRedPackage?dealer_num=" + globalData.dealerNum;
    },
    clickSendRedPackage: function () {
        window.location.href = globalData.baseUrl + "activity/redpackage?dealer_num=" + globalData.dealerNum;
    },
    changeStartDate : function () {
        logMessage('start date：' + appData.startDate);
        var date = new Date(appData.startDate);
        var timestamp = convertTimestamp(date);
        
        //alert(timestamp);
        logMessage(timestamp);
        logMessage(dtEndTimestamp);
        if (timestamp > dtEndTimestamp) {
            appData.startDate = dtStartDate;
            //alert('开始时间不能大于结束时间');
            return;
        } else {
            dtStartDate = appData.startDate;
            dtStartTimestamp = timestamp;

            httpModule.getGameScore();
        }
    },
    changeEndDate : function () {
        logMessage('end date：' + appData.endDate);
        var date = new Date(appData.endDate);
        var timestamp = convertTimestamp(date);
        timestamp = timestamp + 86399;

        //alert(timestamp);

        if (timestamp > todayTimestamp) {
            appData.endDate = dtEndDate;
            //alert('结束时间不能大于今天');
            return;
        } else {
            dtEndDate = appData.endDate;
            dtEndTimestamp = timestamp;
            httpModule.getGameScore();
        }
    },
};

var width = window.innerWidth;
var height = window.innerHeight;
var isTimeLimitShow = false;
var viewOffset = 4;
var itemOffset = 4;
var itemHeight = 66 / 320 * width;
var leftOffset = 8 / 320 * width;
var userViewHeight = 0.25 * width;
var avatarWidth = 0.21875 * width;
var avatarY = (userViewHeight - avatarWidth) / 2;
var itemY = (80 + 44 * 2 + 40) / 320 * width + viewOffset * 3 + itemOffset;
var dtStartDate = '';
var dtEndDate = '';
var dtStartTimestamp = '0';
var dtEndTimestamp = '0';
var todayTimestamp = '0';
var groupOffset = 20;

var viewStyle = {
    sendRedpackage: {
        top: width * 0.25 + groupOffset + 'px',
    },
	redpackage: {
		top: width * 0.25 + viewOffset + groupOffset + 44 / 320 * width + 'px',
    },
    userList: {
		top: width * 0.25 + viewOffset * 1 + groupOffset + 44 / 320 * width * 1 + 'px',
    },
    groupMenu: {
        top:'0px',
    },
    groupMenuDetail: {
        top:'0px',
    },
	datepicker: {
		top: (80 + 44 * 2) / 320 * width + viewOffset * 3 * 4,
    },
    gameMenu: {
        top: (80 + 44 * 2) / 320 * width + viewOffset * 3 * 4,
        width: width,
    },
    gameScoreTitle: {
        top:0,
    },
};

var appData = {
	'viewStyle': viewStyle,
	'width': window.innerWidth,
	'height': window.innerHeight,
	'roomCard': Math.ceil(globalData.card),
	'user': userData,
	'activity': [],
	'isShowInvite': false,
	'isShowAlert': false,
	'isShowShop': false,
	'isShowMessage': false,
	'alertType': 0,
	'alertText': '',
	'roomCardInfo': [],
    'select': 1,
    'ticket_count': 0,
    'isDealing': false,
    isShowShopLoading: false,
    'gameItems':[],
    itemY:itemY,
    itemHeight: 66 / 320 * width,
    itemOffset: itemOffset,
    startDate: '',
    endDate: '',
    isPhone:false,
    isShowBindPhone:false,
    'isAuthPhone':userData.isAuthPhone,
	'authCardCount':userData.authCardCount,
	'phone':userData.phone,
	'sPhone':'',
	'sAuthcode':'',
	'authcodeType':1,
	'authcodeText':'发送验证码',
	'authcodeTime':60,
	'phoneType':1,
    'phoneText':'绑定手机',
    'isShowGroupMenu':globalData.isShowGroupMenu,
    'gameScoreList':[],
    bScroll:null,
    page:1,
    sumPage:1,
    canLoadMore:true,
    selectedGame:null,
    isHttpRequest:false,
    cardText:globalData.cardText,
};

function loadMoreScoreList() {
	if (appData.page < appData.sumPage) {
		appData.page = appData.page + 1;
        //httpModule.searchClientMember();
        console.log(appData.page);
        httpModule.loadMoreScoreList();
		$('#moretext').show();
		$('#moretext').text('加载中...');
	} else {
		$('#moretext').hide();
		$('#moretext').text('上拉加载更多');
	}
};

function refreshBScroll() {
	Vue.nextTick(function () {
		if (!appData.bScroll) {
			appData.bScroll = new BScroll(document.getElementById('memberDiv'), {
				startX: 0,
				startY: 0,
				scrollY: false,
				scrollX: true,
				click: true,
				bounceTime: 500,
			});
		} else {
			appData.bScroll.refresh();
		}
	});
};

refreshBScroll();

globalData.gameList=eval('(' + globalData.gameList + ')');
for (var i = 0; i < globalData.gameList.length; i++) {
    var type = globalData.gameList[i];
    var isChecked = 0;
    appData.gameItems.push({"avatar":gameIcons[type], "name":gameNames[type],"isChecked":isChecked,"type":type});
}

if (userData.phone != undefined && userData.phone.length >= 1) {
    logMessage(userData.phone);
    appData.isPhone = true;
    appData.phone = userData.phone;
    appData.phoneText = '修改手机号';
}

if (appData.isAuthPhone == 1) {
    appData.isShowBindPhone = true;
}

function refreshView() {
    if (appData.isShowGroupMenu) {
        if(appData.isPhone) {
            var topOffset = (0.25 + 0.1375 * 2) * width + viewOffset * 2 + groupOffset;
            if (userData.groupOpen == 1) {
                viewStyle.groupMenu.top = topOffset + groupOffset;
                viewStyle.groupMenuDetail.top = viewStyle.groupMenu.top + viewOffset + 0.1375 * width;
                viewStyle.datepicker.top = viewStyle.groupMenuDetail.top + 0.275 * width + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            } else {
                viewStyle.groupMenu.top = topOffset + groupOffset;
                viewStyle.datepicker.top = viewStyle.groupMenu.top + 0.1375 * width + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            }
            
        } else {
            var topOffset = (0.25 + 0.1375 * 1) * width + viewOffset + 20;
            if (userData.groupOpen == 1) {
                viewStyle.groupMenu.top = topOffset + groupOffset;
                viewStyle.groupMenuDetail.top = viewStyle.groupMenu.top + viewOffset + 0.1375 * width;
                viewStyle.datepicker.top = viewStyle.groupMenuDetail.top + 0.275 * width + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            } else {
                viewStyle.groupMenu.top = topOffset + groupOffset;
                viewStyle.datepicker.top = viewStyle.groupMenu.top + 0.1375 * width + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            }
        }

        viewStyle.gameMenu.top = viewStyle.datepicker.top;
        viewStyle.gameScoreTitle.top = viewStyle.gameMenu.top + 0.25 * width + itemOffset;
        appData.itemY = viewStyle.gameScoreTitle.top + 0.13 * width + itemOffset;
    } else {
        if(appData.isPhone) {
            var topOffset = (0.25 + 0.1375 * 2) * width + viewOffset * 2 + groupOffset;
            if (userData.groupOpen == 1) {
                viewStyle.groupMenu.top = topOffset + groupOffset;
                viewStyle.datepicker.top = topOffset + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            } else {
                viewStyle.datepicker.top = topOffset + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            }
            
        } else {
            var topOffset = (0.25 + 0.1375 * 1) * width + viewOffset + 20;
            if (userData.groupOpen == 1) {
                viewStyle.datepicker.top = topOffset + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            } else {
                viewStyle.datepicker.top = topOffset + groupOffset;
                appData.itemY = viewStyle.datepicker.top + 0.125 * width + itemOffset;
            }
        }

        viewStyle.gameMenu.top = viewStyle.datepicker.top;
        viewStyle.gameScoreTitle.top = viewStyle.gameMenu.top + 0.25 * width + itemOffset;
        appData.itemY = viewStyle.gameScoreTitle.top + 0.13 * width + itemOffset;
    }
};

refreshView();

Date.prototype.format = function(fmt) { 
 var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
     }
 }
 return fmt; 
};

convertTimestamp = function (date) {
    var timestamp = Date.parse(date);
    timestamp = timestamp / 1000;
    return timestamp;
}

function funDate(aa){
    var date1 = new Date(),
    time1 = date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();
    var date2 = new Date(date1);
    date2.setDate(date1.getDate()+aa);

    var year = date2.getFullYear();
    var month = date2.getMonth() + 1;
    var day = date2.getDate();
    var time2 = year + '-';

    var monthS = month + '-';
    
    if (monthS.length < 3) {
        time2 = time2 + '0' + month + '-';
    } else {
        time2 = time2 + month + '-';
    }
    
    var dayS = day + '-';
    if (dayS.length < 3) {
        time2 = time2 + '0' + day;
    } else {
        time2 = time2 + day;
    }

    return time2;
}

//Vue方法
var methods = {
	showShop: viewMethods.clickShowShop,
	hideShop: viewMethods.clickHideShop,
	shopBuy: viewMethods.shopBuy,
	showInvite: viewMethods.clickShowInvite,
	showAlert: viewMethods.clickShowAlert,
	showMessage: viewMethods.showMessage,
	closeInvite: viewMethods.clickCloseInvite,
	closeAlert: viewMethods.clickCloseAlert,
	getCards: viewMethods.clickGetCards,
	hideMessage: viewMethods.hideMessage,
	selectCard: viewMethods.selectCard,
    showRedpackageRecord:viewMethods.clickRedpackageRecord,
    showSendRedpackage:viewMethods.clickSendRedPackage,
    startDateChange: viewMethods.changeStartDate,
    endDateChange: viewMethods.changeEndDate,
    clickPhone:function () {
        appData.phoneText = '绑定手机';
        appData.phoneType = 1;
        appData.authcodeTime = 0;
        appData.authcodeText = '发送验证码';
        appData.authcodeType = 1;
        appData.isShowBindPhone = true;
    },
    hideBindPhone: function () {
        if (appData.phoneType == 1) {
            return;
        }
        
        appData.isShowBindPhone = false;
    },
    clickEditPhone:function () {
        appData.phoneText = '修改手机号';
        appData.phoneType = 2;
        appData.authcodeTime = 0;
        appData.authcodeText = '发送验证码';
        appData.authcodeType = 1;
        appData.isShowBindPhone = true;
    },
    bindPhone:function () {
        var validPhone = checkPhone(appData.sPhone);
		var validAuthcode = checkAuthcode(appData.sAuthcode);

		if (validPhone == false) {
            viewMethods.clickShowAlert(7,'手机号码有误，请重填'); 
			return;
		} 

		if (validAuthcode == false) {
            viewMethods.clickShowAlert(7,'验证码有误，请重填');
			return;
		} 
        
        httpModule.bindPhone(appData.sPhone,appData.sAuthcode);
    },
    getAuthcode:function () {
        if (appData.authcodeType != 1) {
			return;
		}

		var color = $('#authcode').css('background-color');
        if (color != 'rgb(64, 112, 251)') {
            return;
        }

        var validPhone = checkPhone(appData.sPhone);

		if (validPhone == false) {
            viewMethods.clickShowAlert(7,'手机号码有误，请重填'); 
			return;
		} 
        
        httpModule.getAuthcode(appData.sPhone);
    },
	phoneChangeValue:function () {
		var result = checkPhone(appData.sPhone);
        if (result) {
            $('#authcode').css('background-color','rgb(64,112,251)');
        } else {
            $('#authcode').css('background-color','lightgray');
        }
    },
    finishBindPhone:function () {
        window.location.href=window.location.href+"&id="+10000*Math.random();
    },
    showUserList:function () {
        window.location.href = globalData.baseUrl + "activity/pUserList?dealer_num=" + globalData.dealerNum;
    },
    openGroup:function () {
        if (appData.user.groupOpen == 1) {
            viewMethods.clickShowAlert(25,'关闭后再次开启管理功能需要消耗'+ userData.groupOpenCard + '张房卡，是否确定关闭？');
            //appData.user.groupOpen = 0;
        } else {
            //appData.user.groupOpen = 1;
            viewMethods.clickShowAlert(24,'是否消耗' + userData.groupOpenCard + '张房卡开启管理功能？');
        }
        //refreshView();
    },
    confirmOpenGroup:function () {
        if (appData.isHttpRequest) {
            return;
        }

        //appData.user.groupOpen = 1;
        //refreshView();
        viewMethods.clickCloseAlert();
        httpModule.openGroup(1);
        appData.isHttpRequest = true;
        setTimeout(function() {
            appData.isHttpRequest = false;
        }, 5);
    },
    confirmCloseGroup:function () {
        if (appData.isHttpRequest) {
            return;
        }

        //appData.user.groupOpen = 0;
        //refreshView();
        viewMethods.clickCloseAlert();
        httpModule.openGroup(2);
        appData.isHttpRequest = true;
        setTimeout(function() {
            appData.isHttpRequest = false;
        }, 5);
    },
    clickMore:function () {
        if (appData.canLoadMore) {
            $('#moretext').text('加载中...');
            $('#moretext').show();
            appData.canLoadMore = false;
            setTimeout(function() {
                appData.canLoadMore = true;
                $('#moretext').text('点击加载更多');
            }, 5000);

            loadMoreScoreList();
        }
    },
    clickGame:function (item) {
        try {
            if (appData.selectedGame) {
                if (appData.selectedGame.type == item.type) {
                    return;
                }
            } 

            if (appData.isHttpRequest) {
                return;
            }

            for (var i = 0; i < globalData.gameList.length; i++) {
                var type = globalData.gameList[i];
                type = 'game' + type;
                var obj = $('#' + type);
                $('#' + type).css("opacity", "0.3");
            }

            var selectGame = 'game' + item.type;
            $('#' + selectGame).css("opacity", "1");
            appData.selectedGame = item;
            appData.gameScoreList = [];
            appData.page = 1;
            appData.sumPage = 1;
            httpModule.loadMoreScoreList();

            appData.isHttpRequest = true;

            setTimeout(function() {
                appData.isHttpRequest = false;
            }, 5000);
        } catch (error) {
            console.log(error);
        }
    },
    clickScoreItem: function (item) {
        if (!appData.selectedGame) {
            return;
        }
        
        var url = globalData.baseUrl + "gscore/gameScoreDetail?dealer_num=" + globalData.dealerNum + '&game_type=' + appData.selectedGame.type + '&room_number='+item.number;
        window.location.href = url;
    },
    clickInvite: function () {
        window.location.href = userData.inviteUrl;
    },
    clickGMember: function () {
        window.location.href = globalData.baseUrl + "gscore/groupMember?dealer_num=" + globalData.dealerNum;
    },
    clickRoomSearch: function () {
        window.location.href = globalData.baseUrl + "gscore/roomlist?dealer_num=" + globalData.dealerNum;
    },
    clickGroupInfo: function () {
        window.location.href = globalData.infoUrl;
    },
};

//Vue生命周期
var vueLife = {
	vmCreated: function () {
		logMessage('vmCreated')
        $("#loading").hide();
		$(".main").show();
        httpModule.getRoomCardInfo();

        appData.startDate = '';
        //funDate(-7);
        appData.startDate = funDate(-7);
        appData.endDate = new Date().format("yyyy-MM-dd");

        dtStartDate = appData.startDate;
        dtStartTimestamp = '0';

        dtEndDate = appData.endDate;
        dtEndTimestamp = convertTimestamp(appData.endDate);
        dtEndTimestamp = dtEndTimestamp + 86399;
        todayTimestamp = dtEndTimestamp;

        dtStartTimestamp = convertTimestamp(appData.startDate);

        //httpModule.getGameScore();
        
	},
	vmUpdated: function () {
		logMessage('vmUpdated');
	},
	vmMounted: function () {
        logMessage('vmMounted');
        if (appData.gameItems.length >= 1) {
            if (globalData.gameType.length >= 1) {
                for (var i = 0; i < appData.gameItems.length;i++) {
                    var item = appData.gameItems[i];
                    if (item.type == globalData.gameType) {
                        methods.clickGame(item);
                        
                        break;
                    }
                }
            } else {
                methods.clickGame(appData.gameItems[0]);
            }
        }
	},
	vmDestroyed: function () {
		logMessage('vmDestroyed');
	}
};

//手机绑定******
function checkPhone(phone) {
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        return false;
    } else {
        return true;
    }
}

function checkAuthcode(code) {
	if (code == '' || code == undefined) {
		return false;
	}
	
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(code)) {
        return false;
    } else {
        return true;
    }
}

var authcodeTimer = function authcodeTimer() {
    if (appData.authcodeTime <= 0) {
        appData.authcodeText = '发送验证码';
        appData.authcodeTime = 60;
        appData.authcodeType = 1;
        return;
    }

    appData.authcodeTime = appData.authcodeTime - 1;
    appData.authcodeText = appData.authcodeTime + 's';

    setTimeout(function () {
        authcodeTimer();
    }, 1000);
};
//******手机绑定

//Vue实例
var vm = new Vue({
    el: '#app-main',
    data: appData,
    methods: methods,
    created: vueLife.vmCreated,
    updated: vueLife.vmUpdated,
    mounted: vueLife.vmMounted,
    destroyed: vueLife.vmDestroyed,
});

//微信配置
wx.config({
	debug:false,
	appId:configData.appId,
	timestamp:configData.timestamp,
	nonceStr:configData.nonceStr,
	signature:configData.signature,
	jsApiList:[ "onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems" ]
});
wx.ready(function() {
    wx.hideOptionMenu();
});
wx.error(function(a) {});

function logMessage(message) {	
	console.log(message);
};

