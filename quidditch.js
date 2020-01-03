var main = document.querySelector('main')
var affichage = document.createElement('article')
main.appendChild(affichage)
affichage.classList = "partieG"


// var affScore = document.createElement('article')
// main.appendChild(affScore)
// affScore.classList = "partieD";

var vifImg = document.createElement('div')
vifImg.classList = "vifImg";
affichage.appendChild(vifImg);
var vif = new Image (100, 100);
vif.src = "image/vif.png";
vif.classList = "vifdor"
affichage.appendChild(vif)


vif.addEventListener('click', vifo)
function vifo(){
    affichage.removeChild(vif)
    var vifX = vifRandom(90)
    var vifY = vifRandom(70)

    function vifRandom(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    vif.style.left = vifX + "vh";
    vif.style.top = vifY + "vh";
    affichage.appendChild(vif)

    console.log(vifX)
    console.log(vifY)

    console.log('youpie');
    }
