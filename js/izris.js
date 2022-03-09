var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

function labirint() {

    ctx.beginPath();

    //okvir 
    ctx.lineCap = "square";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(112, 0);
    ctx.moveTo(125, 0);
    ctx.lineTo(250, 0);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 250);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 250);
    ctx.moveTo(0, 250);
    ctx.lineTo(125, 250);
    ctx.moveTo(138, 250);
    ctx.lineTo(250, 250);


    //notranjost
    ctx.moveTo(88, 0);
    ctx.lineTo(88, 51);
    ctx.moveTo(88, 51);
    ctx.lineTo(112, 51);
    ctx.moveTo(14, 14);
    ctx.lineTo(14, 28);
    ctx.moveTo(14, 14);
    ctx.lineTo(76, 14);
    ctx.moveTo(51, 14);
    ctx.lineTo(51, 39);
    ctx.moveTo(0, 39);
    ctx.lineTo(26, 39);
    ctx.moveTo(26, 39);
    ctx.lineTo(26, 27);
    ctx.moveTo(26, 27);
    ctx.lineTo(39, 27);
    ctx.moveTo(39, 39);
    ctx.lineTo(76, 39);
    ctx.moveTo(63, 39);
    ctx.lineTo(63, 88);
    ctx.moveTo(38, 88);
    ctx.lineTo(63, 88);
    ctx.moveTo(38, 88);
    ctx.lineTo(38, 75);
    ctx.moveTo(38, 75);
    ctx.lineTo(51, 75);
    ctx.moveTo(51, 88);
    ctx.lineTo(51, 100);
    ctx.moveTo(51, 100);
    ctx.lineTo(88, 100);
    ctx.moveTo(63, 100);
    ctx.lineTo(63, 175);
    ctx.moveTo(63, 175);
    ctx.lineTo(76, 175);
    ctx.moveTo(76, 125);
    ctx.lineTo(50, 125);
    ctx.moveTo(38, 100);
    ctx.lineTo(38, 151);
    ctx.moveTo(14, 112);
    ctx.lineTo(51, 112);
    ctx.moveTo(14, 75);
    ctx.lineTo(14, 125);
    ctx.moveTo(0, 75);
    ctx.lineTo(14, 75);
    ctx.moveTo(0, 51);
    ctx.lineTo(52, 51);
    ctx.moveTo(13, 64);
    ctx.lineTo(101, 64);
    ctx.moveTo(26, 64);
    ctx.lineTo(26, 101);
    ctx.moveTo(124, 64);
    ctx.lineTo(138, 64);
    ctx.moveTo(138, 64);
    ctx.lineTo(138, 51);
    ctx.moveTo(124, 64);
    ctx.lineTo(124, 38);
    ctx.moveTo(124, 38);
    ctx.lineTo(200, 38);
    ctx.moveTo(186, 38);
    ctx.lineTo(186, 63);
    ctx.moveTo(186, 63);
    ctx.lineTo(174, 63);
    ctx.moveTo(174, 63);
    ctx.lineTo(174, 51);
    ctx.moveTo(174, 51);
    ctx.lineTo(150, 51);
    ctx.moveTo(150, 51);
    ctx.lineTo(150, 113);
    ctx.moveTo(150, 113);
    ctx.lineTo(124, 113);
    ctx.moveTo(124, 100);
    ctx.lineTo(124, 125);
    ctx.moveTo(138, 100);
    ctx.lineTo(138, 88);
    ctx.moveTo(138, 100);
    ctx.lineTo(112, 100);
    ctx.moveTo(112, 100);
    ctx.lineTo(112, 88);
    ctx.moveTo(112, 88);
    ctx.lineTo(88, 88);
    ctx.moveTo(88, 88);
    ctx.lineTo(88, 100);
    ctx.moveTo(75, 87);
    ctx.lineTo(75, 100);
    ctx.moveTo(75, 75);
    ctx.lineTo(125, 75);
    ctx.moveTo(112, 75);
    ctx.lineTo(112, 14);
    ctx.moveTo(112, 14);
    ctx.lineTo(100, 14);
    ctx.moveTo(100, 26);
    ctx.lineTo(100, 39);
    ctx.moveTo(100, 26);
    ctx.lineTo(61, 26);
    ctx.moveTo(112, 26);
    ctx.lineTo(139, 26);
    ctx.moveTo(124, 14);
    ctx.lineTo(162, 14);
    ctx.moveTo(162, 14);
    ctx.lineTo(162, 0);
    ctx.moveTo(174, 14);
    ctx.lineTo(174, 26);
    ctx.moveTo(186, 14);
    ctx.lineTo(186, 0);
    ctx.moveTo(161, 26);
    ctx.lineTo(211, 26);
    ctx.moveTo(199, 26);
    ctx.lineTo(199, 14);
    ctx.moveTo(199, 14);
    ctx.lineTo(223, 14);
    ctx.moveTo(223, 14);
    ctx.lineTo(223, 39);
    ctx.moveTo(223, 26);
    ctx.lineTo(236, 26);
    ctx.moveTo(236, 0);
    ctx.lineTo(236, 52);
    ctx.moveTo(223, 50);
    ctx.lineTo(223, 64);
    ctx.moveTo(223, 64);
    ctx.lineTo(247, 64);
    ctx.moveTo(236, 64);
    ctx.lineTo(236, 113);
    ctx.moveTo(236, 88);
    ctx.lineTo(211, 88);
    ctx.moveTo(211, 63);
    ctx.lineTo(211, 200);
    ctx.moveTo(211, 75);
    ctx.lineTo(224, 75);
    ctx.moveTo(211, 50);
    ctx.lineTo(211, 26);
    ctx.moveTo(149, 14);
    ctx.lineTo(149, 38);
    ctx.moveTo(76, 38);
    ctx.lineTo(76, 52);
    ctx.moveTo(125, 75);
    ctx.lineTo(125, 88);
    ctx.moveTo(0, 236);
    ctx.lineTo(38, 236);
    ctx.moveTo(38, 236);
    ctx.lineTo(38, 223);
    ctx.moveTo(27, 223);
    ctx.lineTo(14, 223);
    ctx.moveTo(14, 223);
    ctx.lineTo(14, 200);
    ctx.moveTo(14, 200);
    ctx.lineTo(26, 200);
    ctx.moveTo(26, 200);
    ctx.lineTo(26, 124);
    ctx.moveTo(26, 137);
    ctx.lineTo(14, 137);
    ctx.moveTo(0, 149);
    ctx.lineTo(14, 149);
    ctx.moveTo(14, 149);
    ctx.lineTo(14, 175);
    ctx.moveTo(0, 187);
    ctx.lineTo(26, 187);
    ctx.moveTo(26, 175);
    ctx.lineTo(38, 175);
    ctx.moveTo(38, 175);
    ctx.lineTo(38, 161);
    ctx.moveTo(38, 161);
    ctx.lineTo(51, 161);
    ctx.moveTo(51, 161);
    ctx.lineTo(51, 136);
    ctx.moveTo(51, 174);
    ctx.lineTo(51, 187);
    ctx.moveTo(38, 187);
    ctx.lineTo(88, 187);
    ctx.moveTo(38, 187);
    ctx.lineTo(38, 211);
    ctx.moveTo(38, 211);
    ctx.lineTo(26, 211);
    ctx.moveTo(51, 200);
    ctx.lineTo(51, 248);
    ctx.moveTo(51, 200);
    ctx.lineTo(88, 200);
    ctx.moveTo(88, 200);
    ctx.lineTo(88, 161);
    ctx.moveTo(75, 161);
    ctx.lineTo(100, 161);
    ctx.moveTo(75, 161);
    ctx.lineTo(75, 136);
    ctx.moveTo(75, 136);
    ctx.lineTo(88, 136);
    ctx.moveTo(88, 136);
    ctx.lineTo(88, 109);
    ctx.moveTo(75, 113);
    ctx.lineTo(113, 113);
    ctx.moveTo(113, 113);
    ctx.lineTo(113, 126);
    ctx.moveTo(100, 113);
    ctx.lineTo(100, 100);
    ctx.moveTo(100, 125);
    ctx.lineTo(100, 150);
    ctx.moveTo(88, 150);
    ctx.lineTo(127, 150);
    ctx.moveTo(223, 248);
    ctx.lineTo(223, 235);
    ctx.moveTo(186, 248);
    ctx.lineTo(186, 212);
    ctx.moveTo(174, 212);
    ctx.lineTo(224, 212);
    ctx.moveTo(174, 212);
    ctx.lineTo(174, 200);
    ctx.moveTo(174, 200);
    ctx.lineTo(162, 200);
    ctx.moveTo(162, 212);
    ctx.lineTo(162, 187);
    ctx.moveTo(162, 187);
    ctx.lineTo(149, 187);
    ctx.moveTo(149, 175);
    ctx.lineTo(199, 175);
    ctx.moveTo(199, 175);
    ctx.lineTo(199, 150);
    ctx.moveTo(199, 150);
    ctx.lineTo(162, 150);
    ctx.moveTo(162, 136);
    ctx.lineTo(162, 162);
    ctx.moveTo(173, 137);
    ctx.lineTo(199, 137);
    ctx.moveTo(199, 137);
    ctx.lineTo(199, 125);
    ctx.moveTo(199, 125);
    ctx.lineTo(211, 125);
    ctx.moveTo(224, 125);
    ctx.lineTo(236, 125);
    ctx.moveTo(223, 100);
    ctx.lineTo(223, 138);
    ctx.moveTo(223, 138);
    ctx.lineTo(248, 138);
    ctx.moveTo(236, 138);
    ctx.lineTo(236, 162);
    ctx.moveTo(236, 162);
    ctx.lineTo(222, 162);
    ctx.moveTo(248, 175);
    ctx.lineTo(223, 175);
    ctx.moveTo(236, 175);
    ctx.lineTo(236, 188);
    ctx.moveTo(236, 200);
    ctx.lineTo(211, 200);
    ctx.moveTo(236, 211);
    ctx.lineTo(248, 211);
    ctx.moveTo(236, 211);
    ctx.lineTo(236, 237);
    ctx.moveTo(236, 224);
    ctx.lineTo(211, 224);
    ctx.moveTo(211, 224);
    ctx.lineTo(211, 236);
    ctx.moveTo(211, 236);
    ctx.lineTo(199, 236);
    ctx.moveTo(211, 224);
    ctx.lineTo(198, 224);
    ctx.moveTo(199, 211);
    ctx.lineTo(199, 199);
    ctx.moveTo(198, 186);
    ctx.lineTo(225, 186);
    ctx.moveTo(174, 186);
    ctx.lineTo(186, 186);
    ctx.moveTo(174, 186);
    ctx.lineTo(174, 175);
    ctx.moveTo(186, 186);
    ctx.lineTo(186, 199);
    ctx.moveTo(198, 51);
    ctx.lineTo(211, 51);
    ctx.moveTo(198, 51);
    ctx.lineTo(198, 101);
    ctx.moveTo(198, 88);
    ctx.lineTo(174, 88);
    ctx.moveTo(174, 88);
    ctx.lineTo(174, 101);
    ctx.moveTo(198, 75);
    ctx.lineTo(162, 75);
    ctx.moveTo(162, 62);
    ctx.lineTo(162, 125);
    ctx.moveTo(137, 125);
    ctx.lineTo(187, 125);
    ctx.moveTo(187, 125);
    ctx.lineTo(187, 99);
    ctx.moveTo(174, 113);
    ctx.lineTo(200, 113);
    ctx.moveTo(211, 149);
    ctx.lineTo(224, 149);
    ctx.moveTo(125, 249);
    ctx.lineTo(125, 211);
    ctx.moveTo(125, 224);
    ctx.lineTo(138, 224);
    ctx.moveTo(125, 211);
    ctx.lineTo(112, 211);
    ctx.moveTo(112, 186);
    ctx.lineTo(112, 236);
    ctx.moveTo(112, 186);
    ctx.lineTo(125, 186);
    ctx.moveTo(124, 199);
    ctx.lineTo(137, 199);
    ctx.moveTo(137, 174);
    ctx.lineTo(137, 212);
    ctx.moveTo(137, 174);
    ctx.lineTo(100, 174);
    ctx.moveTo(100, 174);
    ctx.lineTo(100, 212);
    ctx.moveTo(100, 212);
    ctx.lineTo(88, 212);
    ctx.moveTo(112, 151);
    ctx.lineTo(112, 174);
    ctx.moveTo(100, 138);
    ctx.lineTo(136, 138);
    ctx.moveTo(111, 236);
    ctx.lineTo(75, 236);
    ctx.moveTo(111, 224);
    ctx.lineTo(75, 224);
    ctx.moveTo(75, 224);
    ctx.lineTo(75, 211);
    ctx.moveTo(75, 211);
    ctx.lineTo(63, 211);
    ctx.moveTo(63, 211);
    ctx.lineTo(63, 237);
    ctx.moveTo(137, 236);
    ctx.lineTo(137, 249);
    ctx.moveTo(137, 236);
    ctx.lineTo(174, 236);
    ctx.moveTo(174, 236);
    ctx.lineTo(174, 224);
    ctx.moveTo(174, 224);
    ctx.lineTo(161, 224);
    ctx.moveTo(149, 236);
    ctx.lineTo(149, 199);
    ctx.moveTo(149, 212);
    ctx.lineTo(137, 212);
    ctx.moveTo(149, 125);
    ctx.lineTo(149, 150);
    ctx.moveTo(137, 125);
    ctx.lineTo(137, 162);
    ctx.moveTo(125, 162);
    ctx.lineTo(188, 162);
    ctx.moveTo(248, 64);
    ctx.lineTo(248, 64);
    ctx.closePath();

    ctx.strokeStyle = "#1d72c5";
    ctx.stroke();
}
//spremenljivke
var y = 0;
var x = 118;
var nar = 1;
var dx = 1;
var dy = 1;
var interval = setInterval(drawIt, 7);

function drawIt() {
    ctx.fillStyle = "#cef3ff";
    if (nar == 1) {

        ctx.fillRect(x, y, 3, 3);

        labirint();

    
    }
    if (x==118&&y>=0&&y<=20)
        y+=dy;
	if (y==20&&x<=142&&x>=118)
		x+=dx;
	if (x==142&&y>=20&&y<=30)
        y+=dy;
	if (y==30&&x<=142&&x>=118)
		x-=dx;
	if (x==118&&y>=30&&y<=67)
        y+=dy;
	if (y==67&&x<=127&&x>=118)
		x+=dx;
	if (x==127&&y>=67&&y<=92)
        y+=dy;
	if (y==92&&x<=127&&x>=118)
		x-=dx;
	if (x==118&&y>=82&&y<=92)
        y-=dy;
	if (y==82&&x<=118&&x>=70)
		x-=dx;
	if (x==70&&y>=71&&y<=82)
        y-=dy;
	if (y==71&&x<=105&&x>=70)
		x+=dx;
	if (x==105&&y>=59&&y<=71)
        y-=dy;
	if (y==59&&x<=105&&x>=83)
		x-=dx;
	if (x==83&&y>=33&&y<=59)
        y-=dy;
	if (y==33&&x<=83&&x>=55)
		x-=dx;
	if (x==55&&y>=22&&y<=33)
        y-=dy;
	if (y==22&&x<=80&&x>=55)
		x+=dx;
	if (x==80&&y>=5&&y<=22)
        y-=dy;
	if (y==5&&x<=80&&x>=7)
		x-=dx;
	if (x==7&&y>=5&&y<=31)
        y+=dy;
	if (y==31&&x<=19&&x>=7)
		x+=dx;
	if (x==19&&y>=17&&y<=31)
        y-=dy;
	if (y==17&&x<=40&&x>=19)
		x+=dx;
	if (x==40&&y>=17&&y<=31)
        y+=dy;
	if (y==31&&x<=40&&x>=33)
		x-=dx;
	if (x==33&&y>=31&&y<=41)
        y+=dy;
	if (y==41&&x<=55&&x>=33)
		x+=dx;
	if (x==55&&y>=41&&y<=54)
        y+=dy;
	if (y==54&&x<=55&&x>=7)
		x-=dx;
	if (x==7&&y>=54&&y<=68)
        y+=dy;
	if (y==68&&x<=15&&x>=7)
		x+=dx;
    if (x==15&&y>=68&&y<=104)
        y+=dy;
	if (y==104&&x<=29&&x>=15)
		x+=dx;
	if (x==29&&y>=95&&y<=104)
        y-=dy;
	if (y==95&&x<=40&&x>=29)
		x+=dx;
	if (x==40&&y>=95&&y<=104)
        y+=dy;
	if (y==104&&x<=55&&x>=40)
		x+=dx;
	if (x==55&&y>=104&&y<=118)
        y+=dy;
	if (y==118&&x<=55&&x>=42)
		x-=dx;
	if (x==42&&y>=118&&y<=126)
        y+=dy;
	if (y==126&&x<=55&&x>=42)
		x+=dx;
	if (x==55&&y>=126&&y<=179)
        y+=dy;
	if (y==179&&x<=80&&x>=55)
		x+=dx;
	if (x==80&&y>=165&&y<=179)
        y-=dy;
	if (y==165&&x<=80&&x>=70)
		x-=dx;
	if (x==70&&y>=129&&y<=165)
        y-=dy;
	if (y==129&&x<=80&&x>=70)
		x+=dx;
	if (x==80&&y>=120&&y<=129)
        y-=dy;
	if (y==120&&x<=80&&x>=70)
		x-=dx;
	if (x==70&&y>=105&&y<=120)
        y-=dy;
	if (y==105&&x<=90&&x>=70)
		x+=dx;
	if (x==90&&y>=96&&y<=105)
        y-=dy;
	if (y==96&&x<=102&&x>=90)
		x+=dx;
	if (x==102&&y>=96&&y<=105)
        y+=dy;
	if (y==105&&x<=115&&x>=102)
		x+=dx;
	if (x==115&&y>=105&&y<=128)
        y+=dy;
	if (y==128&&x<=115&&x>=105)
		x-=dx;
	if (x==105&&y>=120&&y<=128)
        y-=dy;
	if (y==120&&x<=105&&x>=95)
		x-=dx;
	if (x==95&&y>=120&&y<=142)
        y+=dy;
	if (y==142&&x<=95&&x>=80)
		x-=dx;
	if (x==80&&y>=142&&y<=153)
        y+=dy;
	if (y==153&&x<=105&&x>=80)
		x+=dx;
	if (x==105&&y>=153&&y<=163)
        y+=dy;
	if (y==163&&x<=105&&x>=95)
		x-=dx;
	if (x==95&&y>=163&&y<=202)
        y+=dy;
	if (y==202&&x<=95&&x>=83)
		x-=dx;
	if (x==83&&y>=202&&y<=213)
        y+=dy;
	if (y==213&&x<=102&&x>=83)
		x+=dx;
	if (x==102&&y>=180&&y<=213)
        y-=dy;
	if (y==180&&x<=128&&x>=102)
		x+=dx;
	if (x==128&&y>=180&&y<=188)
        y+=dy;
	if (y==188&&x<=128&&x>=118)
		x-=dx;
	if (x==118&&y>=188&&y<=200)
        y+=dy;
	if (y==200&&x<=128&&x>=118)
		x+=dx;
	if (x==128&&y>=200&&y<=215)
        y+=dy;
	if (y==215&&x<=144&&x>=128)
		x+=dx;
	if (x==144&&y>=215&&y<=226)
        y+=dy;
	if (y==226&&x<=144&&x>=132)
		x-=dx;
	if (x==132&&y>=226&&y<=250)
        y+=dy;
	
    
}