// VAR HTML recovery

//VAR Build HTML
var header = document.querySelector('header')
var partieLogo = document.createElement('article')
var partieMenu = document.createElement('article')
var partieTemps = document.createElement('article')

// var titre = document.createElement('h1')
var titre = new Image (260,120)
titre.src = "image/quidditchlogo.png"
titre.id = "logo"
header.appendChild(partieLogo)
header.appendChild(partieMenu)
// partieMenu.textContent = "youpie"
// partieMenu.style.color = "red";
header.appendChild(partieTemps)
partieTemps.id = "timer"
partieLogo.appendChild(titre)
// titre.textContent="Quidditch"
var main = document.querySelector("main");
var affichage = document.createElement("article");
main.appendChild(affichage)
affichage.classList = "partieG";

// inserer l'image à cliquer du debut
var div = document.createElement('div')
affichage.appendChild(div);
div.classList.add('divBoutonDemarrage')
var btnStart = new Image(700, 200);
btnStart.src = "image/vif2.png"
div.appendChild(btnStart)



btnStart.id = "btnStart";
btnStart.textContent = "START";

var vifImg = document.createElement("div");
vifImg.classList = "vifImg";
affichage.appendChild(vifImg);
var xx = 50;
var yy = 50;
var vif = new Image(xx, yy);
vif.src = "image/vif.png";
var scorediv = document.createElement('p');
affichage.appendChild(scorediv)
scorediv.classList = "score"


/**
 * @event btnStart 
 * @param click  
 */
btnStart.addEventListener("click", function start() {
    vif.classList = "vifdor";
    var score = 0;
    div.removeChild(btnStart)
    main.appendChild(vif);
    scorediv.textContent = score
    var divTimer = document.createElement("div");
    divTimer.id = "divTimer";
    partieTemps.appendChild(divTimer);
    console.log("yo")
    var pTimer = document.createElement("p");
    pTimer.id = "pTime";
    divTimer.appendChild(pTimer);
    //a l'exterieur de la boucle, permet d'etre modifier par la suite 
    //avec un vif special, rajout de temps ...
    var c = 10;
    
    
    function clock() {
        var myTimer = setInterval(myClock, 1000);
        //affiche directement le temps
        pTimer.innerHTML = c;
        
        function myClock() {
            --c
            pTimer.innerHTML = c;
            if (c == 0) {
                clearInterval(myTimer);
                div.appendChild(btnStart);
                main.removeChild(vif);
                //enlever le temps
                divTimer.removeChild(pTimer)            
            }
        }
    };
    clock();


    /**
     * @event click 
     * @param vifo
     */
    vif.addEventListener("click", vifo)

    /**
     * @function vifo
     */
    function vifo() {
        main.removeChild(vif);
        var vifX = vifRandom(90);
        var vifY = vifRandom(90);
        
        /**
         * @function vifRandom
         * @param {*} max 
         */
        function vifRandom(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        vif.style.left = vifX + "%";
        vif.style.top = vifY + "%";
        main.appendChild(vif);
        
        console.log(vifX);
        console.log(vifY);
        score++;
        scorediv.textContent = score
        console.log(score)
        //rajout de 5 point 
        // c= c + 5 
    };
    
    
    
});