//changer mon texte en italique quand la souris passe dessus
var changeMyText = function()
    this.text = ;
}


// genère nouvelle carte pour le dealer
var newcarddealer = function(){
    this.src=   
}

//genère nouvelle carte pour le player
var newcardplayer = function(){
    this.src=   
}


//programme principal
var setupListeners = function(){
    //carte début dealer
    var firstcarddealer = document.getElementById("image1");
    picture.addEventListener("click",newcard);
    //carte début player
    var firscardplayer = document.getElementById("image2");
    picture.addEventListener("click",newcard)
    
}
window.addEventListener("load",setupListeners);