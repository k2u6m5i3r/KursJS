//here will by JavaScript code ...
import { addMyElement, addMyElementInput }  from './builderDom.js';
import {getNumberInArray,  checkingNumberOfCows, checkingNumberOfBulls, checkingNumberUser} from './gamesBullCows.js';

//JSON подгружать данные

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




header(myDoc);

let blocContent = addMyElement("div", "content", "content", "")
myDoc.appendChild(blocContent);

const gamesBullCowsHeaderClick = document.getElementById("gamesBullCowsHeader"); //нахожу кнопку "Быки и коровы" и вызываю функцию построить игру
gamesBullCowsHeaderClick.onclick = function () {
    while (blocContent.firstChild) {
        blocContent.firstChild.remove();
    }
    gamesBullCows(blocContent);// передаю узел куда нужно поместиться
};
const gamesNimClick = document.getElementById("gamesNimHeader"); //нахожу кнопку "Ним" и вызываю функцию построить игру
gamesNimClick.onclick = function () {
    while (blocContent.firstChild) {
        blocContent.firstChild.remove();
    }
    gamesNim(blocContent);// передаю узел куда нужно поместиться
};
const aboutClick = document.getElementById("aboutHeader"); //нахожу кнопку "Ним" и вызываю функцию построить игру
aboutClick.onclick = function () {
    while (blocContent.firstChild) {
        blocContent.firstChild.remove();
    }
    about(blocContent);// передаю узел куда нужно поместиться
};

footer(myDoc);



function header(myDoc) {//функция построить html header
    // добавляю header
    let header = addMyElement("header", "header", "header", "");
    header.appendChild(addMyElement("div", "header-logo", "header-logo", ""));                  //логотип
    let menuHeader = addMyElement("div", "header-menu menu", "header-menu", "");                     //меню 
    menuHeader.appendChild(addMyElement("p", "menu-item", "gamesBullCowsHeader","Игра \"Быки и коровы\""));      //под меню игра 1
    menuHeader.appendChild(addMyElement("p", "menu-item", "gamesNimHeader","Игра \"Ним\""));                     //под меню игра 2
    menuHeader.appendChild(addMyElement("p", "menu-item", "aboutHeader","Автор"));                               //под меню автор
    header.appendChild(menuHeader);                                                             //меню поместить в главный хеадер
    myDoc.appendChild(header);      //загрузить в документ
}
function footer(myDoc) {
    // добавляю блок footer
 let footer =  addMyElement("footer", "footer", "footer", "");
 // контент в блок footer 
 let footerContent = addMyElement("div", "footer-content",  "footer-content", "2022");
 footer.appendChild(footerContent);
 
 myDoc.appendChild(footer); 
 }

function gamesNim(myDoc) {
    //добавляю main с игрой Nim
    let gamesNim =  addMyElement("main", "gamesNim content", "gamesNim", "");
    myDoc.append(gamesNim);
        // получаю локально поля для заполнения в игрк Ним
    let forGamesNim = "";
    readTextFile("./js/gamesNim.json", function(text){
        var data = JSON.parse(text);
        forGamesNim = data;
    });

    //Добавление main-gamesNim - блока для игры Ним
    const titelGames = addMyElement("div", "gamesNim-titel titel", "gamesNim-titel", forGamesNim.titel);
    gamesNim.appendChild(titelGames);
    // Добавление блок правило игры
    const paravilo = addMyElement("div", "gamesNim-pravilo", "gamesNim-pravilo", forGamesNim.pravilo);
    gamesNim.appendChild(paravilo);
    const poleGamesNim = addMyElement("div", "gamesNim-games level", "gamesNim-games", "");
    for(let i = 0; i <= 3; i++){//Создание 4х уровней игры Ним
        poleGamesNim.appendChild(addMyElement("div", `gamesNim-level level-${i+1}`, `gamesNim-level-${i+1}`, ""));//перевый уровень
        poleGamesNim.children[i].appendChild(addMyElement("div", `level-${i+1}-titel`, `level-${i+1}-titel`,`Уровень ${i+1}`));
        poleGamesNim.children[i].appendChild(addMyElement("div", `level-${i+1}-poleGames poleGames`, `level-${i+1}-poleGames`, ""));
        poleGamesNim.children[i].appendChild(addMyElement("div", `level-${i+1}-status`, `level-${i+1}-status`, forGamesNim.status));
        poleGamesNim.children[i].appendChild(addMyElementInput("button", `level-${i+1}-button-next`, `level-${i+1}-button-next`, forGamesNim.buttonNextStep));
        poleGamesNim.children[i].appendChild(addMyElementInput("button", `level-${i+1}-button-newGames`, `level-${i+1}-button-newGames`, forGamesNim.buttonNewGames));
    }
    gamesNim.appendChild(poleGamesNim);
        //нарисовать каджый уровень
    //нарисовать первый уровень
    const gamesNimlevel_1 = document.getElementById("level-1-poleGames");
    gamesNimlevel_1.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
    function gamesNimBuildItem(elementTurColumn, levelTur, numberItem) {
        const poleGamesItemTemp = new DocumentFragment();
        for(let i = 0 ; i < numberItem ; i++){
            const tempCheck = addMyElementInput("checkbox", `checkbox-${levelTur}-${elementTurColumn}`,`chechbox-${levelTur}-${elementTurColumn}-${i}`, "");
            const tempImg = addMyElement("lebel",`img-${levelTur}-${elementTurColumn}`, `img-${levelTur}-${elementTurColumn}-${i}`, "♦");
            const tempBlock = addMyElement("div", "img-checkbox",`img-checkbox-${levelTur}-${elementTurColumn}-${i}`, "");
            tempBlock.append(tempCheck);
            tempBlock.append(tempImg);
            poleGamesItemTemp.appendChild(tempBlock);
        }
        return poleGamesItemTemp;
    }
    // function gamesNimBuildItem(elementTurColumn, levelTur, numberItem) {
    //     const poleGamesItemTemp = new DocumentFragment();
    //     for(let i = 0 ; i < numberItem ; i++){
    //         const tempCheck = addMyElementInput("checkbox", `checkbox-${levelTur}-${elementTurColumn}`,`chechbox-${levelTur}-${elementTurColumn}-${i}`, "");
    //         const tempImg = addMyElement("lebel",`img-${levelTur}-${elementTurColumn}`, `img-${levelTur}-${elementTurColumn}-${i}`, "♦");
    //         const tempBlock = addMyElement("div", "img-checkbox",`img-checkbox-${levelTur}-${elementTurColumn}-${i}`, "");
    //         tempBlock.append(tempCheck);
    //         tempBlock.append(tempImg);
    //         poleGamesItemTemp.appendChild(tempBlock);
    //     }
    //     return poleGamesItemTemp;
    // }
    gamesNimlevel_1.children[0].appendChild(gamesNimBuildItem("1", "1", 4));

    
    //нарисовать второй уровень
    const gamesNimlevel_2 = document.getElementById("level-2-poleGames");
    gamesNimlevel_2.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
    gamesNimlevel_2.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
    
    let level2Hep = forGamesNim.gamesTur2;
    
    
    gamesNimlevel_2.children[0].appendChild(gamesNimBuildItem("2", "1", 1));
    gamesNimlevel_2.children[1].appendChild(gamesNimBuildItem("2", "2", 4));
    //нарисовать третий уровень
    const gamesNimlevel_3 = document.getElementById("level-3-poleGames");
    gamesNimlevel_3.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
    gamesNimlevel_3.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
    
    
    gamesNimlevel_3.children[0].appendChild(gamesNimBuildItem("3", "1", 2));
    gamesNimlevel_3.children[1].appendChild(gamesNimBuildItem("3", "2", 5));

    //нарисовать четвёртый уровень
    const gamesNimlevel_4 = document.getElementById("level-4-poleGames");

    gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
    gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
    gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-3", ""));    
    
    gamesNimlevel_4.children[0].appendChild(gamesNimBuildItem("4", "1", 3));
    gamesNimlevel_4.children[1].appendChild(gamesNimBuildItem("4", "2", 5));
    gamesNimlevel_4.children[2].appendChild(gamesNimBuildItem("4", "3", 7));


        //отработать каждую кнопку на каджом уровне
        // проверка что чекед https://only-to-top.ru/blog/coding/2019-12-22-checkbox-checked.html
    const level_1_buttonNext = document.getElementById("level-1-button-next");
    level_1_buttonNext.onclick = function () {
        console.log('уровень 1');
        let info = document.getElementsByClassName('checkbox-1-1');
        for(let i = 0; i < info.length ; i++){
            console.log(info[i].checked);
        }
    }
    const level_1_buttonNewGames = document.getElementById("level-1-button-newGames");
    level_1_buttonNewGames.onclick = function () {
            //нарисовать по новому первый уровень
        const gamesNimlevel_1 = document.getElementById("level-1-poleGames");
        // удалить прошлые узлы
        while (gamesNimlevel_1.firstChild) {
            gamesNimlevel_1.firstChild.remove();
        }
        //сбросить статусную строку
        const statusGamesLevel1 = document.getElementById('level-1-status');
        statusGamesLevel1.textContent = "Ваш ход";

        gamesNimlevel_1.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
        gamesNimlevel_1.children[0].appendChild(gamesNimBuildItem("1", "1", 4));
    }

    const level_2_buttonNext = document.getElementById("level-2-button-next");
    level_2_buttonNext.onclick = function(){
        console.log('уровень 2');
        let info_2_1 = document.getElementsByClassName('checkbox-1-2');
        for(let i = 0; i < info_2_1.length ; i++){
            console.log(info_2_1[i].checked);
        }
        let info_2_2 = document.getElementsByClassName('checkbox-2-2');
        for(let i = 0; i < info_2_2.length ; i++){
            console.log(info_2_2[i].checked);
        }

    }
    const level_2_buttonNewGames = document.getElementById("level-2-button-newGames");
    level_2_buttonNewGames.onclick = function(){
        const gamesNimlevel_2 = document.getElementById("level-2-poleGames");
        // удалить прошлые узлы
        while (gamesNimlevel_2.firstChild) {
            gamesNimlevel_2.firstChild.remove();
        }
        //сбросить статусную строку
        const statusGamesLevel2 = document.getElementById('level-2-status');
        statusGamesLevel2.textContent = "Ваш ход";

        gamesNimlevel_2.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
        gamesNimlevel_2.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
        let level2Hep = forGamesNim.gamesTur2;
        gamesNimlevel_2.children[0].appendChild(gamesNimBuildItem("2", "1", 1));
        gamesNimlevel_2.children[1].appendChild(gamesNimBuildItem("2", "2", 4));    
    }

    const level_3_buttonNext = document.getElementById("level-3-button-next");
    level_3_buttonNext.onclick = function(){
        console.log('уровень 3');
        let info_3_1 = document.getElementsByClassName('checkbox-1-3');
        for(let i = 0; i < info_3_1.length ; i++){
            console.log(info_3_1[i].checked);
        }
        let info_3_2 = document.getElementsByClassName('checkbox-2-3');
        for(let i = 0; i < info_3_2.length ; i++){
            console.log(info_3_2[i].checked);
        }

    }
    const level_3_buttonNewGames = document.getElementById("level-3-button-newGames");
    level_3_buttonNewGames.onclick = function(){
        const gamesNimlevel_3 = document.getElementById("level-3-poleGames");
        // удалить прошлые узлы
        while (gamesNimlevel_3.firstChild) {
            gamesNimlevel_3.firstChild.remove();
        }
        //сбросить статусную строку
        const statusGamesLevel3 = document.getElementById('level-3-status');
        statusGamesLevel3.textContent = "Ваш ход";

        gamesNimlevel_3.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
        gamesNimlevel_3.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
        gamesNimlevel_3.children[0].appendChild(gamesNimBuildItem("3", "1", 2));
        gamesNimlevel_3.children[1].appendChild(gamesNimBuildItem("3", "2", 5));       
    }

    const level_4_buttonNext = document.getElementById("level-4-button-next");
    level_4_buttonNext.onclick = function(){
        console.log('уровень 4');
        let info_4_1 = document.getElementsByClassName('checkbox-1-4');
        for(let i = 0; i < info_4_1.length ; i++){
            console.log(info_4_1[i].checked);
        }
        let info_4_2 = document.getElementsByClassName('checkbox-2-4');
        for(let i = 0; i < info_4_2.length ; i++){
            console.log(info_4_2[i].checked);
        }
        let info_4_3 = document.getElementsByClassName('checkbox-3-4');
        for(let i = 0; i < info_4_3.length ; i++){
            console.log(info_4_3[i].checked);
        }
    }
    const level_4_buttonNewGames = document.getElementById("level-4-button-newGames");
    level_4_buttonNewGames.onclick = function () {
            //нарисовать четвёртый уровень
        const gamesNimlevel_4 = document.getElementById("level-4-poleGames");
        // удалить прошлые узлы
        while (gamesNimlevel_4.firstChild) {
            gamesNimlevel_4.firstChild.remove();
        }
        //сбросить статусную строку
        const statusGamesLevel4 = document.getElementById('level-4-status');
        statusGamesLevel4.textContent = "Ваш ход";

        gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-1", ""));
        gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-2", ""));
        gamesNimlevel_4.appendChild(addMyElement("div","poleGames-item", "poleGames-item-3", ""));    
        gamesNimlevel_4.children[0].appendChild(gamesNimBuildItem("4", "1", 3));
        gamesNimlevel_4.children[1].appendChild(gamesNimBuildItem("4", "2", 5));
        gamesNimlevel_4.children[2].appendChild(gamesNimBuildItem("4", "3", 7));
    }


}

function gamesBullCows(blocContent) {
    //  добавляю main с игрой gamesBullCows

    let gamesBullCows =  addMyElement("main", "gamesBullCows content", "gamesBullCows", "");

    blocContent.appendChild(gamesBullCows);
        // получаю локально поля для заполнения в игры Быки и коровы
    let forGamesBullCows = "";
    readTextFile("./js/gamesBullCows.json", function(text){
        var data = JSON.parse(text);
        forGamesBullCows = data;
    });
    // Строительство игровыого поля начало
    //Добавление main-gamesNim - блока для игры Быки и коровы
    const titelGames = addMyElement("div", "gamesBullCows-titel titel", "gamesBullCows-titel", forGamesBullCows.titel);
    gamesBullCows.appendChild(titelGames);
    // Добавление полк правило игры
    const paravilo = addMyElement("div", "gamesBullCows-content", "gamesBullCows-content", forGamesBullCows.pravilo);
    gamesBullCows.appendChild(paravilo);
    const poleGamesBullCows = addMyElement("div", "gamesBullCows-games", "gamesBullCows-games", "");
    gamesBullCows.appendChild(poleGamesBullCows);

    const threeСolumns = addMyElement("div", "gamesBullCows-columns", "gamesBullCows-columns", "");
    for(let i = 1; i <= 4; i++){
        threeСolumns.appendChild(addMyElement("div", "gamesBullCows-columns-item", "gamesBullCows-columns-item-"+i, ""));
    }
    threeСolumns.children[1].classList.add("gamesBullCows-four-columns");
    poleGamesBullCows.appendChild(threeСolumns);
    // первая колонка (Картинка + Число угаданных быков) содержит два блока
    const firstCollumn = document.getElementById("gamesBullCows-columns-item-1");
    firstCollumn.append(addMyElement("div", "columns-item-image","columns-item-image-bull", ""));
    firstCollumn.append(addMyElement("div", "columns-item-content","columns-item-content-bull", "0"));
    // ввод числа(быбор)
    const twoCollumn = document.getElementById("gamesBullCows-columns-item-2");
    let poleNumbers = new DocumentFragment();
    for(let i= 1; i <= 4; i++){
        poleNumbers.appendChild(addMyElement("div", "gamesBullCows-four-columns-items", "gamesBullCows-four-columns-items-"+i, "" ));
    }
    // console.dir(poleNumbers);

    function addDigit(numberDigit){
        let tempDigit = new DocumentFragment();
        for(let i =0; i< 10; i++){
            let lb = document.createElement('label');
            lb.setAttribute("for", `number-${numberDigit}-${i}`);  
            lb.textContent =`${i}`;
            lb.appendChild(addMyElementInput("radio",`number-${numberDigit}`,`number-${numberDigit}-${i}`, ""+i ));
            tempDigit.appendChild(lb);
        }
        tempDigit.appendChild(addMyElement("div", `number-${numberDigit}-itog number-itog`,`number-${numberDigit}-itog`, `${numberDigit}` ));
        return tempDigit;
    }
    poleNumbers.children[0].append(addDigit("1"));
    poleNumbers.children[1].append(addDigit("2"));
    poleNumbers.children[2].append(addDigit("3"));
    poleNumbers.children[3].append(addDigit("4"));

    // // модернизация
    // poleNumbers.children[0].onclick=function (event) {
    //     console.log(event.target);
    // }  

    twoCollumn.appendChild(poleNumbers);
    // добавить событие на нажитие input-radio, чтобы потом достать цифру для числа в игре
    for(let j = 1; j <= 4; j++){
        let allNumber_j = document.getElementsByClassName(`number-${j}`);
        for(let i=0; i< allNumber_j.length ; i++){
            allNumber_j[i].onclick = function(){
                document.getElementById(`number-${j}-itog`).textContent = allNumber_j[i].value;
            }
        }
    }
 
    // третья колонка (Картинка + Число угадныых быков)  содержит два блока
    const threeCollumn = document.getElementById("gamesBullCows-columns-item-3");
    threeCollumn.append(addMyElement("div", "columns-item-image","columns-item-image-cows", ""));
    threeCollumn.append(addMyElement("div", "columns-item-content","columns-item-content-cows", "0"));
    // 4ая колонка 
    const logGames = addMyElement("div", "gamesBullCows-log logBullCows", "gamesBullCows-log", "");//Блок для ведения лога ходов
    const logGamesTitel= addMyElement("div", "logBullCows-tilet titel", "logBullCows-tilet", forGamesBullCows.log);  // титель
    logGames.appendChild(logGamesTitel);
    const logGamesError = addMyElement("div","logBullCows-error","logBullCows-error", "" );
    logGames.appendChild(logGamesError);
    const logGamesLoging= addMyElement("div", "logBullCows-log", "logBullCows-log", ""); // журнал ходов
    logGames.appendChild(logGamesLoging);
    gamesBullCows.appendChild(logGames);
    document.getElementById("gamesBullCows-columns-item-4").append(logGames);

    //поле кнопок
    const poleBtn = addMyElement("div", "gamesBullCows-btn btn", "gamesBullCows-btn", "");
    gamesBullCows.appendChild(poleBtn);
    const buttonNextStep = addMyElementInput("button", "btn-next button","gamesBullCows-btn-next",forGamesBullCows.buttonNextStep);
    poleBtn.appendChild(buttonNextStep);
    const buttonNewGames = addMyElementInput("button", "btn-newGames button","gamesBullCows-btn-newGames",forGamesBullCows.buttonNewGames);
    poleBtn.appendChild(buttonNewGames);


    // Строительство игровыого поля закончил
    // иницилизация игры 
    let computerNumber = getNumberInArray();//число от компьютера есть
    console.log(computerNumber);
        // действие пользоватедя "принять ход"
    const userStep = document.getElementById('gamesBullCows-btn-next');
    userStep.onclick = function () {
        let numberAll = document.getElementsByClassName('number-itog');
        let userNumber = [numberAll[0].textContent, numberAll[1].textContent, numberAll[2].textContent, numberAll[3].textContent];
        console.log(userNumber);
        // console.log(`количество быков`,checkingNumberOfBulls(userNumber, computerNumber));
        // console.log(`количество коров`,checkingNumberOfCows(userNumber, computerNumber));
        let blokLog = document.getElementById("logBullCows-error");// блок с ошибкой или победой
        let blocImgSetBull = document.getElementById("columns-item-content-bull"); // поменять но картинкой подпись у быка
        let blocImgSetCows = document.getElementById("columns-item-content-cows"); // поменять но картинкой подпись у коровы
        let blogLogStep = document.getElementById("logBullCows-log"); // для храниния ходов
        if(checkingNumberUser(userNumber) ){// проверка корректности. нет повторений
            console.log("Ошибка корректности");
            blokLog.textContent = ""; 
            let tempBull = checkingNumberOfBulls(userNumber, computerNumber);
            let tempCows = checkingNumberOfCows(userNumber, computerNumber);
            blocImgSetBull.textContent = tempBull;
            blocImgSetCows.textContent = tempCows;
            blogLogStep.appendChild(addMyElement("div", "logBullCows-sptep", "logBullCows-sptep", `${userNumber} ${tempBull} ${tempCows}`));
            if(tempBull == 4){ // пользователь угадал 4 цифры
                blokLog.textContent = forGamesBullCows.result_win;
            }
        } else {
            blokLog.textContent = forGamesBullCows.status_error1;
        }

    }
        //действие пользователя начать игру сначала
    const userNewGames = document.getElementById('gamesBullCows-btn-newGames');
    userNewGames.onclick = function (){
        console.log("New Games");
        // иницилизация игры заново 
        computerNumber = getNumberInArray();//число от компьютера есть
        console.log(computerNumber);
        let blokLog = document.getElementById("logBullCows-error");// блок с ошибкой или победой
        blokLog.textContent = "";
        let blocImgSetBull = document.getElementById("columns-item-content-bull"); // поменять но картинкой подпись у быка
        blocImgSetBull.textContent = "0";
        let blocImgSetCows = document.getElementById("columns-item-content-cows"); // поменять но картинкой подпись у коровы
        blocImgSetCows.textContent = "0";
        let blogLogStep = document.getElementById("logBullCows-log"); // для храниния ходов
        console.log(blogLogStep);
        while (blogLogStep.firstChild) {
            blogLogStep.firstChild.remove();
        }
        //blogLogStep.textContent = "";
        console.log(blogLogStep);

    }


}

function about(blocContent) {
    while (blocContent.firstChild) {
        blocContent.firstChild.remove();
    }
    let aboutHeader =  addMyElement("main", "about content", "about", "");
    blocContent.append(aboutHeader);
        // получаю локально поля для заполнения Автора
    let forAbout = "";
    readTextFile("./js/about.json", function(text){
        var data = JSON.parse(text);
        forAbout = data;
    });
    const titelAbout = addMyElement("div", "about-titel titel", "about-titel", forAbout.titel);
    aboutHeader.appendChild(titelAbout);
    // Добавление полк правило игры
    const content = addMyElement("div", "about-content", "about-content", forAbout.content);
    aboutHeader.appendChild(content);
}