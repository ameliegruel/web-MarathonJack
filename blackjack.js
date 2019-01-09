// Blackjack

function createArray() {
    var score=[];
    for (var i=0;i<4;i++) {
        for (var j=1;j <= nbCards/4 ;j++) {
            if (j === 1) {
                score.push(11);
            } else if (j === 11 || j === 12 || j === 13) {
                score.push(10);
            } else {
                score.push(j);
            };
        };
    };
    var cards=[];
    for (var k=1;k <= nbCards;k++) {
        cards.push("img/"+String(k)+".BMP");
    };
    var dico = new Object();
    for (var l=0;l<nbCards;l++) {
        dico[cards[l]] = score[l];
    };
    return [cards,dico];
}

function createImg(path) {
    var img = document.createElement('img');
    img.src = path ;
    return img;
}

function addImgInDiv(id,path) {
    var newImg = createImg(path);
    var divJS = document.getElementById(id);
    divJS.appendChild(newImg);
}

function randomCard() {
    var x = Math.floor(Math.random() * nbCards);
    while (arrayCards[x] === "Error") {
        x = Math.floor(Math.random() * nbCards);
    };
    var path = arrayCards[x];
    arrayCards[x] = "Error";
    return path;
}

function updateScore(score,path) {
    score=score+arrayScore[path];
    return score;
}

function dealerNewCard() {
    var path = randomCard();
    addImgInDiv("dealerCard",path);
    dealerScore=updateScore(dealerScore,path);
    document.getElementById("dealerScore").innerHTML="The dealer has "+String(dealerScore)+" points.";
}

function dealerStay() {
    while (dealerScore < myScore) {
        dealerNewCard();
    };
    if (dealerScore > myScore && dealerScore <= 21) {
        Loser();
    } else {
        Winner();
    }
}

function BigLose() {
    document.getElementById("status").innerHTML="<big>You don't have any tokens left. Sorry !</big>";
    document.getElementById("BigLose").innerHTML=" "
}

function Loser() {
    document.getElementById("status").innerHTML="<big><b>YOU HAVE LOST</b></big>";
    if (jetons <= 0) {
        BigLose();
    }
}

function Winner() {
    jetons+=mise*2;
    document.getElementById("status").innerHTML="<big><b>YOU WON</b> <br>You now have </big>"+String(jetons)+"<big> tokens</big>";
    document.getElementById("nbJetons").innerHTML=String(jetons)+" tokens left.";
}

function myNewCard(event) {
    var path = randomCard();
    addImgInDiv("myCard",path);
    myScore=updateScore(myScore,path);
    document.getElementById("myScore").innerHTML="You have "+String(myScore)+" points.";
    if (myScore > 21 ) {
        Loser();
    };
}

function Reset() {
    document.getElementById("dealerCard").innerHTML='<img class="dos" src ="img/dos.JPEG" alt=" " id="image1"/>';
    document.getElementById("myCard").innerHTML='<img class="dos" src ="img/dos.JPEG" alt=" " id="image2"/>';
    document.getElementById("status").innerHTML='Card or stay? <button id="addCard" type=button>Card</button> <button id="stay" type=button>Stay</button>';
    myScore=0;
    dealerScore=0;
    arrayCards=createArray()[0];
    document.getElementById("myScore").innerHTML="You have "+String(myScore)+" points.";
    setUpListeners();
}

function Mise() {
    mise=prompt("The goal of the BlackJack is to not get a score higher than 21 but still higher than the dealer's. If you lose (by getting a score higher than 21 or lower than the dealer's), you lose your ante. However if you win, you gain back twice the value you bet. \n \nYou start with 100 tokens\nHow many tokens do you want to bet on this party ?",0);
    mise=parseInt(mise);
    jetons-=mise;
    document.getElementById("mise").innerHTML="You have bet "+mise+" tokens.";
    document.getElementById("nbJetons").innerHTML=String(jetons)+" tokens left.";
}

function setUpListeners() {
    Mise();
    for (var distrib=0;distrib < 2;distrib++) {
        dealerNewCard();
        myNewCard();
    };
    var addCard=document.getElementById("addCard");
    addCard.addEventListener("click",myNewCard);
    var stay=document.getElementById("stay");
    stay.addEventListener("click",dealerStay);
    var reset=document.getElementById("reset");
    reset.addEventListener("click",Reset);
}

var jetons=100;
var mise;
var myScore=0;
var dealerScore=0;
var nbCards=52;
// var arrayCards=['1.BMP', '2.BMP', '3.BMP', '4.BMP', '5.BMP', '6.BMP', '7.BMP', '8.BMP', '9.BMP', '10.BMP', '11.BMP', '12.BMP', '13.BMP', '14.BMP', '15.BMP', '16.BMP', '17.BMP', '18.BMP', '19.BMP', '20.BMP', '21.BMP', '22.BMP', '23.BMP', '24.BMP', '25.BMP', '26.BMP', '27.BMP', '28.BMP', '29.BMP', '30.BMP', '31.BMP', '32.BMP', '33.BMP', '34.BMP', '35.BMP', '36.BMP', '37.BMP', '38.BMP', '39.BMP', '40.BMP', '41.BMP', '42.BMP', '43.BMP', '44.BMP', '45.BMP', '46.BMP', '47.BMP', '48.BMP', '49.BMP', '50.BMP', '51.BMP', '52.BMP'];
// var arrayScore={'50.BMP': 10, '37.BMP': 10, '4.BMP': 4, '46.BMP': 7, '26.BMP': 10, '21.BMP': 8, '25.BMP': 10, '42.BMP': 3, '51.BMP': 10, '17.BMP': 4, '24.BMP': 10, '38.BMP': 10, '8.BMP': 8, '1.BMP': 11, '41.BMP': 2, '33.BMP': 7, '43.BMP': 4, '5.BMP': 5, '12.BMP': 10, '44.BMP': 5, '36.BMP': 10, '18.BMP': 5, '39.BMP': 10, '30.BMP': 4, '7.BMP': 7, '15.BMP': 2, '16.BMP': 3, '35.BMP': 9, '28.BMP': 2, '32.BMP': 6, '19.BMP': 6, '13.BMP': 10, '14.BMP': 11, '2.BMP': 2, '10.BMP': 10, '22.BMP': 9, '52.BMP': 10, '11.BMP': 10, '34.BMP': 8, '6.BMP': 6, '49.BMP': 10, '9.BMP': 9, '40.BMP': 11, '27.BMP': 11, '31.BMP': 5, '29.BMP': 3, '47.BMP': 8, '45.BMP': 6, '20.BMP': 7, '23.BMP': 10, '3.BMP': 3, '48.BMP': 9};
var arrayCards=createArray()[0];
var arrayScore=createArray()[1];
window.onload=setUpListeners();

// Make it snow

var SNOW_Picture ="img/snow.gif"
var SNOW_no = 15;

var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;

var SNOW_Time;
var SNOW_dx, SNOW_xp, SNOW_yp;
var SNOW_am, SNOW_stx, SNOW_sty;
var i, SNOW_Browser_Width, SNOW_Browser_Height;

if (SNOW_browser_IE_NS)
{
   SNOW_Browser_Width = document.body.clientWidth;
   SNOW_Browser_Height = document.body.clientHeight;
}
else if (SNOW_browser_MOZ)
{
   SNOW_Browser_Width = self.innerWidth - 20;
   SNOW_Browser_Height = self.innerHeight;
}
else if (SNOW_browser_IE7)
{
   SNOW_Browser_Width = document.documentElement.clientWidth;
   SNOW_Browser_Height = document.documentElement.clientHeight;
}

SNOW_dx = new Array();
SNOW_xp = new Array();
SNOW_yp = new Array();
SNOW_am = new Array();
SNOW_stx = new Array();
SNOW_sty = new Array();

for (i = 0; i < SNOW_no; ++ i)
{
   SNOW_dx[i] = 0;
   SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);
   SNOW_yp[i] = Math.random()*SNOW_Browser_Height;
   SNOW_am[i] = Math.random()*20;
   SNOW_stx[i] = 0.02 + Math.random()/10;
   SNOW_sty[i] = 0.7 + Math.random();
   if (i == 0) document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");
   else document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");
}

function SNOW_Weather()
{

for (i = 0; i < SNOW_no; ++ i)
{
   SNOW_yp[i] += SNOW_sty[i];

   if (SNOW_yp[i] > SNOW_Browser_Height-50)
   {
       SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);
       SNOW_yp[i] = 0;
       SNOW_stx[i] = 0.02 + Math.random()/10;
       SNOW_sty[i] = 0.7 + Math.random();
   }

   SNOW_dx[i] += SNOW_stx[i];

   document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";
   document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";
}

SNOW_Time = setTimeout("SNOW_Weather()", 20);

}

SNOW_Weather();