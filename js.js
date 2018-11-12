var t;
var gametype;
var Ximg;
var Oimg;


document.getElementById("reloadGame").style.display = "none";
document.getElementById("frame").style.display = "none";
document.getElementById("frame2").style.display = "none";


function Draw(gametype){
if(gametype == 1){
	document.getElementById("frame").style.display = "block";
	t = new Array(9);
}
if(gametype == 2){
	document.getElementById("frame2").style.display = "block";
	t = new Array(25);
	}
}
function ai(gametype){
if(gametype == 1){

		var id = Math.floor(Math.random() * 9);

}
if(gametype == 2){

		var id = Math.floor(Math.random() * (34 - 9) + 9);

}
		t[id] ? ai(gametype) : move(id, 'ai', gametype);

}

function mainFunction() {
gametype = document.getElementById("selectBar").value;
Draw(gametype);

Ximg = document.getElementById("getCross").value;
Oimg = document.getElementById("getCircle").value;

if(Ximg == ""){Ximg = "img/cross.png"};
if(Oimg == ""){Oimg = "img/circle.png"};

console.log(Ximg);
console.log(Oimg);

document.getElementById("startGame").style.display = "none";
document.getElementById("selectBar").style.display = "none";
document.getElementById("whoIsFirst").style.display = "none";
document.getElementById("figureToPlay").style.display = "none";
document.getElementById("getCross").style.display = "none";
document.getElementById("getCircle").style.display = "none";

if(document.getElementById("whoIsFirst").value == 2){ai(gametype);}
}

function placeRow(id, role){

if(role == 'player'){

	if(document.getElementById("figureToPlay").value == 1){
	document.getElementById(id).innerHTML = '<img src = "' + Ximg + '" width="100%">';}
	else {document.getElementById(id).innerHTML = '<img src = "' + Oimg + '" width="100%">';}
}

if(role == 'ai'){

	if(document.getElementById("figureToPlay").value == 1){
	document.getElementById(id).innerHTML = '<img src = "' + Oimg + '" width="100%">';}
	else {document.getElementById(id).innerHTML = '<img src = "' + Ximg + '" width="100%">';}
}


}

function move(id, role, gametype) {
  if(t[id]) return false;
  t[id] = role;
  placeRow(id,role);
  if(gametype == 1){
  		document.getElementById(id).className = 'cell ' + role;
  		!checkEnd() ? (role == 'player') ? ai(gametype) : null : reset(role,gametype);}
  if(gametype == 2){
  		document.getElementById(id).className = 'cell2 ' + role;
		!checkEnd2() ? (role == 'player') ? ai(gametype) : null : reset(role,gametype);
  }
}

function WinColorGreen(){
if(gametype == 1)document.getElementById("frame").style.backgroundColor = "#c6f7db";
if(gametype == 2)document.getElementById("frame2").style.backgroundColor = "#c6f7db";
}
function WinColorRed(){
if(gametype == 1)document.getElementById("frame").style.backgroundColor = "#f2ceca";
if(gametype == 2)document.getElementById("frame2").style.backgroundColor = "#f2ceca";
}


function lightupCheckEnd() {
  if (t[0]=="ai" && t[1]=="ai" && t[2]=="ai"){document.getElementById("0").style.backgroundColor = "red";document.getElementById("1").style.backgroundColor = "red";document.getElementById("2").style.backgroundColor = "red";}
  if (t[0]=="player" && t[1]=="player" && t[2]=="player")  {document.getElementById("0").style.backgroundColor = "green";document.getElementById("1").style.backgroundColor = "green";document.getElementById("2").style.backgroundColor = "green";}
  if (t[3]=="ai" && t[4]=="ai" && t[5]=="ai") {document.getElementById("3").style.backgroundColor = "red";document.getElementById("4").style.backgroundColor = "red";document.getElementById("5").style.backgroundColor = "red";}                  
  if (t[3]=="player" && t[4]=="player" && t[5]=="player"){document.getElementById("3").style.backgroundColor = "green";document.getElementById("4").style.backgroundColor = "green";document.getElementById("5").style.backgroundColor = "green";}
  if (t[6]=="ai" && t[7]=="ai" && t[8]=="ai") {document.getElementById("6").style.backgroundColor = "red";document.getElementById("7").style.backgroundColor = "red";document.getElementById("8").style.backgroundColor = "red";}
  if (t[6]=="player" && t[7]=="player" && t[8]=="player")  {document.getElementById("6").style.backgroundColor = "green";document.getElementById("7").style.backgroundColor = "green";document.getElementById("8").style.backgroundColor = "green";}
  if (t[0]=="ai" && t[3]=="ai" && t[6]=="ai")  {document.getElementById("0").style.backgroundColor = "red"; document.getElementById("3").style.backgroundColor = "red"; document.getElementById("6").style.backgroundColor = "red";}
  if (t[0]=="player" && t[3]=="player" && t[6]=="player")  {document.getElementById("0").style.backgroundColor = "green";document.getElementById("3").style.backgroundColor = "green";document.getElementById("6").style.backgroundColor = "green";}
  if (t[1]=="ai" && t[4]=="ai" && t[7]=="ai") {document.getElementById("1").style.backgroundColor = "red";document.getElementById("4").style.backgroundColor = "red";document.getElementById("7").style.backgroundColor = "red";}
  if (t[1]=="player" && t[4]=="player" && t[7]=="player") {document.getElementById("1").style.backgroundColor = "green";document.getElementById("4").style.backgroundColor = "green";document.getElementById("7").style.backgroundColor = "green";}
  if (t[2]=="ai" && t[5]=="ai" && t[8]=="ai" ) {document.getElementById("2").style.backgroundColor = "red";document.getElementById("5").style.backgroundColor = "red";document.getElementById("8").style.backgroundColor = "red";}
  if (t[2]=="player" && t[5]=="player" && t[8]=="player")  {document.getElementById("2").style.backgroundColor = "green";document.getElementById("5").style.backgroundColor = "green";document.getElementById("8").style.backgroundColor = "green";}
  if (t[0]=="ai" && t[4]=="ai" && t[8]=="ai") {document.getElementById("0").style.backgroundColor = "red";document.getElementById("4").style.backgroundColor = "red";document.getElementById("8").style.backgroundColor = "red";}
  if (t[0]=="player" && t[4]=="player" && t[8]=="player")  {document.getElementById("0").style.backgroundColor = "green";document.getElementById("4").style.backgroundColor = "green";document.getElementById("8").style.backgroundColor = "green";}
  if (t[2]=="ai" && t[4]=="ai" && t[6]=="ai") {document.getElementById("2").style.backgroundColor = "red";document.getElementById("4").style.backgroundColor = "red";document.getElementById("6").style.backgroundColor = "red";}
  if (t[2]=="player" && t[4]=="player" && t[6]=="player")  {document.getElementById("2").style.backgroundColor = "green";document.getElementById("4").style.backgroundColor = "green";document.getElementById("6").style.backgroundColor = "green";}
}
function lightupCheckEnd2(){

	 if (t[9]=='ai' && t[10]=='ai' && t[11]=='ai' && t[12]=='ai'&& t[13]=='ai') {document.getElementById("9").style.backgroundColor = "red";document.getElementById("10").style.backgroundColor = "red";document.getElementById("11").style.backgroundColor = "red";document.getElementById("12").style.backgroundColor = "red";document.getElementById("13").style.backgroundColor = "red";}
    if (t[9]=='player' && t[10]=='player' && t[11]=='player' && t[12]=='player'&& t[13]=='player') {document.getElementById("9").style.backgroundColor = "green";document.getElementById("10").style.backgroundColor = "green";document.getElementById("11").style.backgroundColor = "green";document.getElementById("12").style.backgroundColor = "green";document.getElementById("13").style.backgroundColor = "green";}
    if (t[14]=='ai' && t[15]=='ai' && t[16]=='ai' && t[17]=='ai'&& t[18]=='ai') {document.getElementById("14").style.backgroundColor="red";document.getElementById("15").style.backgroundColor="red";document.getElementById("16").style.backgroundColor="red";document.getElementById("17").style.backgroundColor="red";document.getElementById("18").style.backgroundColor="red";}
    if (t[14]=='player' && t[15]=='player' && t[16]=='player' && t[17]=='player'&& t[18]=='player')  {document.getElementById("14").style.backgroundColor="green";document.getElementById("15").style.backgroundColor="green";document.getElementById("16").style.backgroundColor="green";document.getElementById("17").style.backgroundColor="green";document.getElementById("18").style.backgroundColor="green";}
	if (t[19]=='ai' && t[20]=='ai' && t[21]=='ai' && t[22]=='ai'&& t[23]=='ai') {document.getElementById("19").style.backgroundColor ="red";document.getElementById("20").style.backgroundColor ="red";document.getElementById("21").style.backgroundColor ="red";document.getElementById("22").style.backgroundColor ="red";document.getElementById("23").style.backgroundColor ="red";}
	if (t[19]=='player' && t[20]=='player' && t[21]=='player' && t[22]=='player'&& t[23]=='player') {document.getElementById("19").style.backgroundColor ="green";document.getElementById("20").style.backgroundColor ="green";document.getElementById("21").style.backgroundColor ="green";document.getElementById("22").style.backgroundColor ="green";document.getElementById("23").style.backgroundColor ="green";}
	if (t[24]=='ai' && t[25]=='ai' && t[26]=='ai' && t[27]=='ai'&& t[28]=='ai') {document.getElementById("24").style.backgroundColor = "red";document.getElementById("25").style.backgroundColor = "red";document.getElementById("26").style.backgroundColor = "red";document.getElementById("27").style.backgroundColor = "red";document.getElementById("28").style.backgroundColor = "red";}
	if (t[24]=='player' && t[25]=='player' && t[26]=='player' && t[27]=='player'&& t[28]=='player') {document.getElementById("24").style.backgroundColor = "green";document.getElementById("25").style.backgroundColor = "green";document.getElementById("26").style.backgroundColor = "green";document.getElementById("27").style.backgroundColor = "green";document.getElementById("28").style.backgroundColor = "green";}
	if (t[29]=='ai' && t[30]=='ai' && t[31]=='ai' && t[32]=='ai'&& t[33]=='ai') {document.getElementById("29").style.backgroundColor = "red";document.getElementById("30").style.backgroundColor = "red";document.getElementById("31").style.backgroundColor = "red";document.getElementById("32").style.backgroundColor = "red";document.getElementById("33").style.backgroundColor = "red";}
	if (t[29]=='player' && t[30]=='player' && t[31]=='player' && t[32]=='player'&& t[33]=='player')  {document.getElementById("29").style.backgroundColor = "green";document.getElementById("30").style.backgroundColor = "green";document.getElementById("31").style.backgroundColor = "green";document.getElementById("32").style.backgroundColor = "green";document.getElementById("33").style.backgroundColor = "green";}

	if (t[9]=='ai' && t[14]=='ai' && t[19]=='ai' && t[24]=='ai'&& t[29]=='ai') {document.getElementById("9").style.backgroundColor = "red";document.getElementById("14").style.backgroundColor = "red";document.getElementById("19").style.backgroundColor = "red";document.getElementById("24").style.backgroundColor = "red";document.getElementById("29").style.backgroundColor = "red";}
	if (t[9]=='player' && t[14]=='player' && t[19]=='player' && t[24]=='player'&& t[29]=='player'){document.getElementById("9").style.backgroundColor = "green";document.getElementById("14").style.backgroundColor = "green";document.getElementById("19").style.backgroundColor = "green";document.getElementById("24").style.backgroundColor = "green";document.getElementById("29").style.backgroundColor = "green";}
    if (t[10]=='ai' && t[15]=='ai' && t[20]=='ai' && t[25]=='ai'&& t[30]=='ai') {document.getElementById("10").style.backgroundColor = "red";document.getElementById("15").style.backgroundColor = "red";document.getElementById("20").style.backgroundColor = "red";document.getElementById("25").style.backgroundColor = "red";document.getElementById("30").style.backgroundColor = "red";}
    if (t[10]=='player' && t[15]=='player' && t[20]=='player' && t[25]=='player'&& t[30]=='player') {document.getElementById("10").style.backgroundColor = "green";document.getElementById("15").style.backgroundColor = "green";document.getElementById("20").style.backgroundColor = "green";document.getElementById("25").style.backgroundColor = "green";document.getElementById("30").style.backgroundColor = "green";}
	if (t[11]=='ai' && t[16]=='ai' && t[21]=='ai' && t[26]=='ai'&& t[31]=='ai') {document.getElementById("11").style.backgroundColor = "red";document.getElementById("16").style.backgroundColor = "red";document.getElementById("21").style.backgroundColor = "red";document.getElementById("26").style.backgroundColor = "red";document.getElementById("31").style.backgroundColor = "red";}
	if (t[11]=='player' && t[16]=='player' && t[21]=='player' && t[26]=='player'&& t[31]=='player') {document.getElementById("11").style.backgroundColor = "green";document.getElementById("16").style.backgroundColor = "green";document.getElementById("21").style.backgroundColor = "green";document.getElementById("26").style.backgroundColor = "green";document.getElementById("31").style.backgroundColor = "green";}
	if (t[12]=='ai' && t[17]=='ai' && t[22]=='ai' && t[27]=='ai'&& t[32]=='ai') {document.getElementById("12").style.backgroundColor = "red";document.getElementById("17").style.backgroundColor = "red";document.getElementById("22").style.backgroundColor = "red";document.getElementById("27").style.backgroundColor = "red";document.getElementById("32").style.backgroundColor = "red";}
	if (t[12]=='player' && t[17]=='player' && t[22]=='player' && t[27]=='player'&& t[32]=='player')  {document.getElementById("12").style.backgroundColor = "green";document.getElementById("17").style.backgroundColor = "green";document.getElementById("22").style.backgroundColor = "green";document.getElementById("27").style.backgroundColor = "green";document.getElementById("32").style.backgroundColor = "green";}
	if (t[13]=='ai' && t[18]=='ai' && t[23]=='ai' && t[28]=='ai'&& t[33]=='ai') {document.getElementById("13").style.backgroundColor = "red";document.getElementById("18").style.backgroundColor = "red";document.getElementById("23").style.backgroundColor = "red";document.getElementById("28").style.backgroundColor = "red";document.getElementById("33").style.backgroundColor = "red";}
	if (t[13]=='player' && t[18]=='player' && t[23]=='player' && t[28]=='player'&& t[33]=='player') {document.getElementById("13").style.backgroundColor = "green";document.getElementById("18").style.backgroundColor = "green";document.getElementById("23").style.backgroundColor = "green";document.getElementById("28").style.backgroundColor = "green";document.getElementById("33").style.backgroundColor = "green";}

 if (t[9]=='ai' && t[15]=='ai' && t[21]=='ai' && t[27]=='ai'&& t[33]=='ai') {document.getElementById("9").style.backgroundColor =  "red";document.getElementById("15").style.backgroundColor =  "red";document.getElementById("21").style.backgroundColor =  "red";document.getElementById("27").style.backgroundColor =  "red";document.getElementById("33").style.backgroundColor =  "red";}
 if (t[9]=='player' && t[15]=='player' && t[21]=='player' && t[27]=='player'&& t[33]=='player') {document.getElementById("9").style.backgroundColor =  "green";document.getElementById("15").style.backgroundColor =  "green";document.getElementById("21").style.backgroundColor =  "green";document.getElementById("27").style.backgroundColor =  "green";document.getElementById("33").style.backgroundColor =  "green";}
 if (t[13]=='ai' && t[17]=='ai' && t[21]=='ai' && t[25]=='ai'&& t[29]=='ai') {document.getElementById("13").style.backgroundColor = "red";document.getElementById("17").style.backgroundColor = "red";document.getElementById("21").style.backgroundColor = "red";document.getElementById("25").style.backgroundColor = "red";document.getElementById("29").style.backgroundColor = "red";}
 if (t[13]=='player' && t[17]=='player' && t[21]=='player' && t[25]=='player'&& t[29]=='player') {document.getElementById("13").style.backgroundColor = "green";document.getElementById("17").style.backgroundColor = "green";document.getElementById("21").style.backgroundColor = "green";document.getElementById("25").style.backgroundColor = "green";document.getElementById("29").style.backgroundColor = "green";}
}

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai') return true;
  if (t[0]=='player' && t[1]=='player' && t[2]=='player') return true;
  if (t[3]=='ai' && t[4]=='ai' && t[5]=='ai') return true;
  if (t[3]=='player' && t[4]=='player' && t[5]=='player')  return true;
  if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai')return true;
  if (t[6]=='player' && t[7]=='player' && t[8]=='player')  return true;
  if (t[0]=='ai' && t[3]=='ai' && t[6]=='ai') return true;
  if (t[0]=='player' && t[3]=='player' && t[6]=='player') return true;
  if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai') return true;
  if (t[1]=='player' && t[4]=='player' && t[7]=='player')  return true;
  if (t[2]=='ai' && t[5]=='ai' && t[8]=='ai' )return true;
  if (t[2]=='player' && t[5]=='player' && t[8]=='player') return true;
  if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai') return true;
  if (t[0]=='player' && t[4]=='player' && t[8]=='player') return true;
  if (t[2]=='ai' && t[4]=='ai' && t[6]=='ai') return true;
  if (t[2]=='player' && t[4]=='player' && t[6]=='player') return true;
  if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}
function checkEnd2(){
    if (t[9]=='ai' && t[10]=='ai' && t[11]=='ai' && t[12]=='ai'&& t[13]=='ai') return true;
    if (t[9]=='player' && t[10]=='player' && t[11]=='player' && t[12]=='player'&& t[13]=='player') return true;
    if (t[14]=='ai' && t[15]=='ai' && t[16]=='ai' && t[17]=='ai'&& t[18]=='ai') return true;
    if (t[14]=='player' && t[15]=='player' && t[16]=='player' && t[17]=='player'&& t[18]=='player') return true;
	if (t[19]=='ai' && t[20]=='ai' && t[21]=='ai' && t[22]=='ai'&& t[23]=='ai') return true;
	if (t[19]=='player' && t[20]=='player' && t[21]=='player' && t[22]=='player'&& t[23]=='player') return true;
	if (t[24]=='ai' && t[25]=='ai' && t[26]=='ai' && t[27]=='ai'&& t[28]=='ai') return true;
	if (t[24]=='player' && t[25]=='player' && t[26]=='player' && t[27]=='player'&& t[28]=='player') return true;
	if (t[29]=='ai' && t[30]=='ai' && t[31]=='ai' && t[32]=='ai'&& t[33]=='ai') return true;
	if (t[29]=='player' && t[30]=='player' && t[31]=='player' && t[32]=='player'&& t[33]=='player') return true;

	if (t[9]=='ai' && t[14]=='ai' && t[19]=='ai' && t[24]=='ai'&& t[29]=='ai') return true;
	if (t[9]=='player' && t[14]=='player' && t[19]=='player' && t[24]=='player'&& t[29]=='player') return true;
    if (t[10]=='ai' && t[15]=='ai' && t[20]=='ai' && t[25]=='ai'&& t[30]=='ai') return true;
    if (t[10]=='player' && t[15]=='player' && t[20]=='player' && t[25]=='player'&& t[30]=='player') return true;
	if (t[11]=='ai' && t[16]=='ai' && t[21]=='ai' && t[26]=='ai'&& t[31]=='ai') return true;
	if (t[11]=='player' && t[16]=='player' && t[21]=='player' && t[26]=='player'&& t[31]=='player') return true;
	if (t[12]=='ai' && t[17]=='ai' && t[22]=='ai' && t[27]=='ai'&& t[32]=='ai') return true;
	if (t[12]=='player' && t[17]=='player' && t[22]=='player' && t[27]=='player'&& t[32]=='player') return true;
	if (t[13]=='ai' && t[18]=='ai' && t[23]=='ai' && t[28]=='ai'&& t[33]=='ai') return true;
	if (t[13]=='player' && t[18]=='player' && t[23]=='player' && t[28]=='player'&& t[33]=='player') return true;

 if (t[9]=='ai' && t[15]=='ai' && t[21]=='ai' && t[27]=='ai'&& t[33]=='ai') return true;
 if (t[9]=='player' && t[15]=='player' && t[21]=='player' && t[27]=='player'&& t[33]=='player') return true;
 if (t[13]=='ai' && t[17]=='ai' && t[21]=='ai' && t[25]=='ai'&& t[29]=='ai') return true;
 if (t[13]=='player' && t[17]=='player' && t[21]=='player' && t[25]=='player'&& t[29]=='player') return true;

if(t[9] && t[10] && t[11] && t[12] && t[13] && t[14] && t[15] && t[16] && t[17] && t[18] && t[19] && t[20] && t[21] && t[22] && t[23] && t[24] && t[25] && t[26] && t[27] && t[28] && t[29] && t[30] && t[31] && t[32] && t[33]) alert("Ничья!");document.getElementById("reloadGame").style.display = "block";
}
function reset(role,gametype) {


  if(role == 'ai'){ WinColorRed(); alert("AI Победил!");}
  if(role == 'player'){ WinColorGreen(); alert("Игрок Победил!");}
 if(gametype ==  1){ lightupCheckEnd();}
 if(gametype == 2){lightupCheckEnd2();}
  document.getElementById("reloadGame").style.display = "block";
}
