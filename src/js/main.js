//here will by JavaScript code ...
import { addMyElementDiv, addMyElementBtn }  from './builderDom.js';
//JSON
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, false);//синхронно, чтобы дальше работать
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


let forGamesNim = "";
readTextFile("./js/gamesNim.json", function(text){
    var data = JSON.parse(text);
    //console.log(data);
    forGamesNim = data;
});
// console.log('JSON tx data ', forGamesNim);





let gamesNim = document.getElementById('gamesNim');
console.log(gamesNim);
const paravilo = addMyElementDiv("gamesNim-pravilo","gamesNim-pravilo", forGamesNim.pravilo);
gamesNim.appendChild(paravilo);
const buttonNextStep = addMyElementBtn("gamesNim-btn-next","gamesNim-btn-next",forGamesNim.buttonNextStep);
gamesNim.appendChild(buttonNextStep);
const buttonNewGames = addMyElementBtn("gamesNim-btn-newGames","gamesNim-btn-newGames",forGamesNim.buttonNewGames);
gamesNim.appendChild(buttonNewGames);
const statusGames = addMyElementDiv("gamesNim-status","gamesNim-status", forGamesNim.status);
gamesNim.appendChild(statusGames);
