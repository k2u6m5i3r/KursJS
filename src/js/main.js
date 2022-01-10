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




//header(myDoc);

// let blocContent = addMyElement("div", "content", "content", "")
// myDoc.appendChild(blocContent);

// const gamesBullCowsHeaderClick = document.getElementById("gamesBullCowsHeader");
// gamesBullCowsHeaderClick.onclick = function () {

//     gamesBullCows(blocContent);// передаю узел куда нужно поместиться
// };

//footer();

login(myDoc);

function login(myDoc) {
        // получаю локально поля для заполнения формы
        let forLogin = "";
        readTextFile("./js/login.json", function(text){
            var data = JSON.parse(text);
            forLogin = data;
        });
        console.log(forLogin);
    let myForm = addMyElement("div", "form", "form", "");
    let registration = addMyElement("div", "form-registration registration","form-registration", ""); //Блок регистрации 
    let loginInput = addMyElement("div", "form-login login","form-login", "");//Блок логирования
    let passwordReset = addMyElement("div", "form-resetPassword resetPassword","form-resetPassword", ""); //Блок сброса пароля

    loginInput.appendChild(addMyElement("h2", "login-titel", "login-titel", forLogin.bntTabLogin ));
    loginInput.appendChild(addMyElement("div", "login-text", "login-text", forLogin.emaillogin ));
    loginInput.appendChild(addMyElementInput("text", "login-input-login", "login-input-login",""));
    loginInput.appendChild(addMyElement("div", "login-password", "login-password", forLogin.password ));
    loginInput.appendChild(addMyElementInput("password", "login-input-password", "login-input-password",""));
    loginInput.appendChild(addMyElementInput("button","bnt-login", "btn-login", forLogin.btnLogint ));
    loginInput.appendChild(addMyElementInput("button","btn-LoginToRegistration", "btn-LoginToRegistration", forLogin.btnRegisration ));
    loginInput.appendChild(addMyElementInput("button","bnt--pasword", "bnt-reset-pasword", forLogin.btnReset ));
    myForm.appendChild(loginInput);

    registration.appendChild(addMyElement("h2", "registration-titel", "registration-titel", forLogin.bntTabRegistration ));
    registration.appendChild(addMyElement("div", "registration-text", "registration-text", forLogin.emaillogin ));
    registration.appendChild(addMyElementInput("text", "registration-input-login", "registration-input-login",""));
    registration.appendChild(addMyElement("div", "registration-password", "registration-password", forLogin.password ));
    registration.appendChild(addMyElementInput("password", "registration-input-password", "registration-input-password",""));
    registration.appendChild(addMyElement("div", "registration-repassword", "registration-repassword", forLogin.repassword ));
    registration.appendChild(addMyElementInput("password", "registration-input-repassword", "registration-input-repassword",""));
    registration.appendChild(addMyElementInput("button","bnt-registration", "btn-registration", forLogin.bntTabRegistration )); 
    registration.appendChild(addMyElementInput("button", "btn-registationToLogin","btn-registationToLogin", forLogin.btnLogin ));
    registration.appendChild(addMyElementInput("button","bnt-reset-pasword", "bnt-reset-pasword", forLogin.btnReset ));
    myForm.appendChild(registration);

    passwordReset.appendChild(addMyElement("h2", "resetPassword-titel", "resetPassword-titel", forLogin.bntTabReset ));
    passwordReset.appendChild(addMyElement("div", "resetPassword-text", "resetPassword-text", forLogin.emaillogin ));
    passwordReset.appendChild(addMyElementInput("text", "resetPassword-input-login", "resetPassword-input-login",""));
    passwordReset.appendChild(addMyElementInput("button","resetPassword-input","resetPassword-input",forLogin.btnResetInput));

    myForm.appendChild(passwordReset);

    myDoc.appendChild(myForm);

}

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
function footer(myDom) {
    // добавляю блок footer
 let footer =  addMyElement("footer", "footer", "footer", "");
 // контент в блок footer 
 let footerContent = addMyElement("div", "footer-content",  "footer-content", "2022");
 footer.appendChild(footerContent);
 
 myDoc.appendChild(footer); 
 }
function gamesNim() {
    // добавляю main с игрой Nim
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
    // console.log("s");
    console.log(computerNumber);
        // действие пользоватедя "принять ход"
    const userStep = document.getElementById('gamesBullCows-btn-next');
    userStep.onclick = function () {
        let numberAll = document.getElementsByClassName('number-itog');
        let userNumber = [numberAll[0].textContent, numberAll[1].textContent, numberAll[2].textContent, numberAll[3].textContent];
        console.log(userNumber);
        console.log(`количество быков`,checkingNumberOfBulls(userNumber, computerNumber));
        console.log(`количество коров`,checkingNumberOfCows(userNumber, computerNumber));
        let blokLog = document.getElementById("logBullCows-error");// блок с ошибкой или победой
        let blocImgSetBull = document.getElementById("columns-item-content-bull"); // поменять но картинкой подпись у быка
        let blocImgSetCows = document.getElementById("columns-item-content-cows"); // поменять но картинкой подпись у коровы
        let blogLogStep = document.getElementById("logBullCows-log"); // для храниния ходов
        if(checkingNumberUser(userNumber) ){// проверка корректности. нет повторений
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


}
