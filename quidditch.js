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


/**
 * @event btnStart 
 * @param click  
 */
btnStart.addEventListener("click", function start() {
affichage.removeChild(btnStart)
    var divTimer = document.createElement("div");
        divTimer.id = "divTimer";
    main.appendChild(divTimer);
    console.log("yo")
    var pTimer = document.createElement("p");
        pTimer.id = "pTime";
    divTimer.appendChild(pTimer);

    
    function clock() {
        var myTimer = setInterval(myClock, 1000);
        var c = 5;
    
        function myClock() {
          document.getElementById("pTime").innerHTML = --c;
          if (c == 0) {
            clearInterval(myTimer);
            affichage.appendChild(btnStart);
            affichage.removeChild(vif);
          }
        }
      };
      clock();

    affichage.appendChild(vif);

    /**
     * @event click 
     * @param vifo
     */
    vif.addEventListener("click", vifo);

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

        console.log('youpie');
    };



});