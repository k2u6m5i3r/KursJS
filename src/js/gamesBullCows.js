function getNumberInArray() { //инициализация компьютера
    let arrayNumber = new Array();
    let tempSet = new Set();

    while(tempSet.size < 4){ // генерация 4х уникальных чисел от 0 до 9
        tempSet.add(Math.round(Math.random()*9));
    }
    // console.log(tempSet);

    tempSet.forEach(function(value, valueAgain, set) { // заполняю массив
        arrayNumber.push(value);
    })
    // console.log('init');
    return arrayNumber;
}

let userNumber = [1,2,3,4];
let computerNumber = getNumberInArray();

// console.log(computerNumber);
// console.log(userNumber);

function checkingNumberOfCows(numberFromUser, numberFromComputer) { // проверка количество коров
    let ans = 0;
    for(let i = 0; i < 4; i++){
        for(let j = 0 ; j < 4; j++ ){
            if(numberFromUser[i] == numberFromComputer[j] &&  i!=j ){
                ans++;
            } 
        }
    }    
    return ans;    
}

function checkingNumberOfBulls(numberFromUser, numberFromComputer) { // проверка количество быков
    let ans = 0;

    for(let i = 0; i < 4; i++) {
        if( numberFromUser[i] == numberFromComputer[i] ){
            ans++;
        }
    }
    return ans;   
}

// console.log(`количество быков`,checkingNumberOfBulls(userNumber, computerNumber));
// console.log(`количество коров`,checkingNumberOfCows(userNumber, computerNumber));
function checkingNumberUser(numberFromUser){
    let ans = false;
    if(numberFromUser[0] != numberFromUser[1] && numberFromUser[0] != numberFromUser[2] && numberFromUser[0] != numberFromUser[3] ){
        ans = true;
    } else {
        ans = false;
    }
    return ans;
}

export {getNumberInArray,  checkingNumberOfCows, checkingNumberOfBulls, checkingNumberUser}