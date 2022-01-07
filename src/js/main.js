//here will by JavaScript code ...
import { addMyElement, addMyElementInput }  from './builderDom.js';
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
    // const buttonNextStep = addMyElementInput("button", "btn-next button","gamesNim-btn-next",forGamesNim.buttonNextStep);
    // poleBtn.appendChild(buttonNextStep);
    // const buttonNewGames = addMyElementInput("button", "btn-newGames button","gamesNim-btn-newGames",forGamesNim.buttonNewGames);
    // poleBtn.appendChild(buttonNewGames);

//  добавляю main с игрой gamesBullCows

let gamesBullCows =  addMyElement("main", "gamesBullCows content", "gamesBullCows", "");
    myDoc.append(gamesBullCows);
        // получаю локально поля для заполнения в игры Быки и коровы
    let forGamesBullCows = "";
    readTextFile("./js/gamesBullCows.json", function(text){
        var data = JSON.parse(text);
        forGamesBullCows = data;
    });

    //Добавление main-gamesNim - блока для игры Быки и коровы
    const titelGames = addMyElement("div", "gamesBullCows-titel titel", "gamesBullCows-titel", forGamesBullCows.titel);
    gamesBullCows.appendChild(titelGames);
    // Добавление полк правило игры
    const paravilo = addMyElement("div", "gamesBullCows-pravilo", "gamesBullCows-pravilo", forGamesBullCows.pravilo);
    gamesBullCows.appendChild(paravilo);
    const poleGamesBullCows = addMyElement("div", "gamesBullCows-games", "gamesBullCows-games", "");
    gamesBullCows.appendChild(poleGamesBullCows);

    const threeСolumns = addMyElement("div", "gamesBullCows-three-columns", "gamesBullCows-three-columns", "");
    for(let i = 1; i <= 3; i++){
        threeСolumns.appendChild(addMyElement("div", "gamesBullCows-three-columns-item", "gamesBullCows-three-columns-item-"+i, ""));
    }

    threeСolumns.children[1].classList.add("gamesBullCows-four-columns");

    poleGamesBullCows.appendChild(threeСolumns);
    // первая колонка (Картинка + Число угаданных быков) содержит два блока
    const firstCollumn = document.getElementById("gamesBullCows-three-columns-item-1");
    firstCollumn.append(addMyElement("div", "columns-item-image","columns-item-image-bull", ""));
    firstCollumn.append(addMyElement("div", "columns-item-content","columns-item-content-bull", "0"));
    

    // ввод числа(быбор)
    const twoCollumn = document.getElementById("gamesBullCows-three-columns-item-2");
    let poleNumbers = new DocumentFragment();
    for(let i= 1; i <= 4; i++){
        poleNumbers.appendChild(addMyElement("div", "gamesBullCows-four-columns-items", "gamesBullCows-four-columns-items-"+i, "" ));
    }
    console.dir(poleNumbers);

    function addDigit(numberDigit){
        let tempDigit = new DocumentFragment();
        for(let i =0; i< 10; i++){
            let lb = document.createElement('label');
            lb.setAttribute("for", `number${numberDigit}-${i}`);  
            lb.textContent =`${i}`;
            lb.appendChild(addMyElementInput("radio",`number-${numberDigit} allNumber`,`number-${numberDigit}-${i}`, ""+i ));
            tempDigit.appendChild(lb);
        }
        tempDigit.appendChild(addMyElement("div", `number-${numberDigit}-itog`,`number-${numberDigit}-itog`, "-" ));
        return tempDigit;
    }
    poleNumbers.children[0].append(addDigit("1"));
    poleNumbers.children[1].append(addDigit("2"));
    poleNumbers.children[2].append(addDigit("3"));
    poleNumbers.children[3].append(addDigit("4"));
    // console.log(poleNumbers);
    twoCollumn.appendChild(poleNumbers);
    // добавить событие на нажитие input-radio
    let allNumber = document.getElementsByClassName("allNumber");
    console.dir(allNumber);
    for(let i=0; i< allNumber.length ; i++){
        console.log("-");
        allNumber[i].onclick = function(){

            //document.getElementById("number-1-itog").textContent = number_1[i].value;
            console.log("*");
            console.log(allNumber[i].value);
        }
    }
    // третья колонка (Картинка + Число угадныых быков)  содержит два блока
    const threeCollumn = document.getElementById("gamesBullCows-three-columns-item-3");
    threeCollumn.append(addMyElement("div", "columns-item-image","columns-item-image-cows", ""));
    threeCollumn.append(addMyElement("div", "columns-item-content","columns-item-content-cows", "0"));
    

    const poleBtn = addMyElement("div", "gamesBullCows-btn btn", "gamesBullCows-btn", "");
    gamesBullCows.appendChild(poleBtn);
    const buttonNextStep = addMyElementInput("button", "btn-next button","gamesBullCows-btn-next",forGamesBullCows.buttonNextStep);
    poleBtn.appendChild(buttonNextStep);
    const buttonNewGames = addMyElementInput("button", "btn-newGames button","gamesBullCows-btn-newGames",forGamesBullCows.buttonNewGames);
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

