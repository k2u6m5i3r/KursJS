//here will by JavaScript code ...
import { addMyElement, addMyElementBtn }  from './builderDom.js';
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

let myDoc = document.getElementById("wrapper"); //получаю точеку ввхода в HTML документ
console.log(myDoc);

// добавляю header

    // // добавляю main с игрой Nim
    // let gamesNim =  addMyElement("main", "gamesNim content", "gamesNim", "");
    // myDoc.append(gamesNim);
    //     // получаю локально поля для заполнения в игрк Ним
    // let forGamesNim = "";
    // readTextFile("./js/gamesNim.json", function(text){
    //     var data = JSON.parse(text);
    //     forGamesNim = data;
    // });

    // //Добавление main-gamesNim - блока для игры Ним
    // // Добавление полк правило игры
    // const paravilo = addMyElement("div", "gamesNim-pravilo", "gamesNim-pravilo", forGamesNim.pravilo);
    // gamesNim.appendChild(paravilo);
    // const poleGamesNim = addMyElement("div", "gamesNim-games", "gamesNim-games", "");
    // gamesNim.appendChild(poleGamesNim);
    // const statusGames = addMyElement("div", "gamesNim-status", "gamesNim-status", forGamesNim.status);
    // gamesNim.appendChild(statusGames);
    // const poleBtn = addMyElement("div", "gamesNim-btn btn", "gamesNim-btn", "");
    // gamesNim.appendChild(poleBtn);
    // const buttonNextStep = addMyElementBtn("btn-next button","gamesNim-btn-next",forGamesNim.buttonNextStep);
    // poleBtn.appendChild(buttonNextStep);
    // const buttonNewGames = addMyElementBtn("btn-newGames button","gamesNim-btn-newGames",forGamesNim.buttonNewGames);
    // poleBtn.appendChild(buttonNewGames);

//  добавляю main с игрой gamesBullCows

let gamesBullCows =  addMyElement("main", "gamesBullCows content", "gamesBullCows", "");
    myDoc.append(gamesBullCows);
        // получаю локально поля для заполнения в игрк Ним
    let forGamesBullCows = "";
    readTextFile("./js/gamesBullCows.json", function(text){
        var data = JSON.parse(text);
        forGamesBullCows = data;
    });

    //Добавление main-gamesNim - блока для игры Ним
    const titelGames = addMyElement("div", "gamesBullCows-titel titel", "gamesBullCows-titel", forGamesBullCows.titel);
    gamesBullCows.appendChild(titelGames);
    // Добавление полк правило игры
    const paravilo = addMyElement("div", "gamesBullCows-pravilo", "gamesBullCows-pravilo", forGamesBullCows.pravilo);
    gamesBullCows.appendChild(paravilo);
    const poleGamesBullCows = addMyElement("div", "gamesBullCows-games", "gamesBullCows-games", "");
    gamesBullCows.appendChild(poleGamesBullCows);
    
    const poleBtn = addMyElement("div", "gamesBullCows-btn btn", "gamesBullCows-btn", "");
    gamesBullCows.appendChild(poleBtn);
    const buttonNextStep = addMyElementBtn("btn-next button","gamesBullCows-btn-next",forGamesBullCows.buttonNextStep);
    poleBtn.appendChild(buttonNextStep);
    const buttonNewGames = addMyElementBtn("btn-newGames button","gamesBullCows-btn-newGames",forGamesBullCows.buttonNewGames);
    poleBtn.appendChild(buttonNewGames);
    const logGames = addMyElement("div", "gamesBullCows-log", "gamesBullCows-log", "");//Блок для ведения лога ходов
    const logGamesTitel= addMyElement("div", "logBullCows-tilet titel", "logBullCows-tilet", forGamesBullCows.log);  // титель
    logGames.appendChild(logGamesTitel);
    const logGamesLoging= addMyElement("div", "logBullCows-log", "logBullCows-log", ""); // журнал ходов
    logGames.appendChild(logGamesLoging);
    gamesBullCows.appendChild(logGames);


// добавляю блок footer
let footer =  addMyElement("footer", "footer", "footer", "");
    // контент в блок footer 
let footerContent = addMyElement("div", "footer-content",  "footer-content", "2022");
footer.appendChild(footerContent);

myDoc.appendChild(footer);

