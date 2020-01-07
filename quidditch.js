// VAR HTML recovery
var main = document.querySelector("main");

//VAR Build HTML
var affichage = document.createElement("article");
affichage.classList = "partieG";
main.appendChild(affichage);


var btnStart = document.createElement("button");
btnStart.id = "btnStart";
btnStart.textContent = "START";
affichage.appendChild(btnStart);

var vifImg = document.createElement("div");
vifImg.classList = "vifImg";
affichage.appendChild(vifImg);

var vif = new Image(100, 100);
vif.src = "image/vif.png";
vif.classList = "vifdor";
var scorediv = document.createElement('p');
main.appendChild(scorediv)
scorediv.classList = "score"


/**
 * @event btnStart 
 * @param click  
 */
btnStart.addEventListener("click", function start() {
    var score = 0;
    affichage.removeChild(btnStart)
    affichage.appendChild(vif);
    scorediv.textContent = score
    var divTimer = document.createElement("div");
    divTimer.id = "divTimer";
    main.appendChild(divTimer);
    console.log("yo")
    var pTimer = document.createElement("p");
    pTimer.id = "pTime";
    divTimer.appendChild(pTimer);
    //a l'exterieur de la boucle, permet d'etre modifier par la suite 
    //avec un vif special, rajout de temps ...
    var c = 7;
    
    
    function clock() {
        var myTimer = setInterval(myClock, 1000);
        //affiche directement le temps
        pTimer.innerHTML = c;
        
        function myClock() {
            --c
            pTimer.innerHTML = c;
            if (c == 0) {
                clearInterval(myTimer);
                affichage.appendChild(btnStart);
                affichage.removeChild(vif);
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
        affichage.removeChild(vif);
        var vifX = vifRandom(90);
        var vifY = vifRandom(70);
        
        /**
         * @function vifRandom
         * @param {*} max 
         */
        function vifRandom(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        vif.style.left = vifX + "vh";
        vif.style.top = vifY + "vh";
        affichage.appendChild(vif);
        
        console.log(vifX);
        console.log(vifY);
        score++;
        scorediv.textContent = score
        console.log(score)
        //rajout de 5 point 
        // c= c + 5 
    };
    
    
    
});