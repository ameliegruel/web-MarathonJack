function createArray() {
    var score=[];
    for (var i=0;i<4;i++) {
        for (var j=1;j<14;j++) {
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
    for (var k=1;k<53;k++) {
        cards.push(String(k)+".BMP");
    };
    var dico = new Object();
    for (var l=0;l<52;l++) {
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
    var x = Math.floor(Math.random() * 52);
    while (arrayCards[x] === "Error") {
        x = Math.floor(Math.random() * 52);
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
    document.getElementById("addCard").disabled=true;
    while (dealerScore < myScore) {
        dealerNewCard();
    };
    if (dealerScore > myScore && dealerScore <= 42) {
        Loser();
    } else {
        Winner();
    }
}

function Loser() {
    document.getElementById("status").innerHTML="<b><big>YOU HAVE LOST</big></b>";
}

function Winner() {
    document.getElementById("status").innerHTML="<b><big>YOU WON</big></b>"
}

function myNewCard(event) {
    var path = randomCard();
    addImgInDiv("myCard",path);
    myScore=updateScore(myScore,path);
    document.getElementById("myScore").innerHTML="You have "+String(myScore)+" points.";
    if (myScore > 42 ) {
        Loser();
    };
}

function Reset() {
    document.getElementById("dealerCard").innerHTML='<img class="dos" src ="dos.JPEG" alt=" " id="image1"/>';
    document.getElementById("myCard").innerHTML='<img class="dos" src ="dos.JPEG" alt=" " id="image2"/>';
    document.getElementById("status").innerHTML='Card or stay? <button id="addCard" type=button>Card</button> <button id="stay" type=button>Stay</button>';
    myScore=0;
    dealerScore=0;
    document.getElementById("myScore").innerHTML="You have "+String(myScore)+" points.";
    setUpListeners();
}

function setUpListeners() {
    dealerNewCard();
    var addCard=document.getElementById("addCard");
    addCard.addEventListener("click",myNewCard);
    var stay=document.getElementById("stay");
    stay.addEventListener("click",dealerStay);
    var reset=document.getElementById("reset");
    reset.addEventListener("click",Reset);
}  

var myScore=0;
var dealerScore=0;
// var arrayCards=['1.BMP', '2.BMP', '3.BMP', '4.BMP', '5.BMP', '6.BMP', '7.BMP', '8.BMP', '9.BMP', '10.BMP', '11.BMP', '12.BMP', '13.BMP', '14.BMP', '15.BMP', '16.BMP', '17.BMP', '18.BMP', '19.BMP', '20.BMP', '21.BMP', '22.BMP', '23.BMP', '24.BMP', '25.BMP', '26.BMP', '27.BMP', '28.BMP', '29.BMP', '30.BMP', '31.BMP', '32.BMP', '33.BMP', '34.BMP', '35.BMP', '36.BMP', '37.BMP', '38.BMP', '39.BMP', '40.BMP', '41.BMP', '42.BMP', '43.BMP', '44.BMP', '45.BMP', '46.BMP', '47.BMP', '48.BMP', '49.BMP', '50.BMP', '51.BMP', '52.BMP'];
// var arrayScore={'50.BMP': 10, '37.BMP': 10, '4.BMP': 4, '46.BMP': 7, '26.BMP': 10, '21.BMP': 8, '25.BMP': 10, '42.BMP': 3, '51.BMP': 10, '17.BMP': 4, '24.BMP': 10, '38.BMP': 10, '8.BMP': 8, '1.BMP': 11, '41.BMP': 2, '33.BMP': 7, '43.BMP': 4, '5.BMP': 5, '12.BMP': 10, '44.BMP': 5, '36.BMP': 10, '18.BMP': 5, '39.BMP': 10, '30.BMP': 4, '7.BMP': 7, '15.BMP': 2, '16.BMP': 3, '35.BMP': 9, '28.BMP': 2, '32.BMP': 6, '19.BMP': 6, '13.BMP': 10, '14.BMP': 11, '2.BMP': 2, '10.BMP': 10, '22.BMP': 9, '52.BMP': 10, '11.BMP': 10, '34.BMP': 8, '6.BMP': 6, '49.BMP': 10, '9.BMP': 9, '40.BMP': 11, '27.BMP': 11, '31.BMP': 5, '29.BMP': 3, '47.BMP': 8, '45.BMP': 6, '20.BMP': 7, '23.BMP': 10, '3.BMP': 3, '48.BMP': 9};
var arrayCards=createArray()[0];
var arrayScore=createArray()[1];
window.onload=setUpListeners()