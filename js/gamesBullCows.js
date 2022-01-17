function getNumberInArray() { //инициализация компьютера
    let arrayNumber = new Array();
    let tempSet = new Set();
    while(tempSet.size < 4){ // генерация 4х уникальных чисел от 0 до 9
        tempSet.add(Math.round(Math.random()*9));
    }
    tempSet.forEach(function(value, valueAgain, set) { // заполняю массив
        arrayNumber.push(value);
    })
    return arrayNumber;
}

let userNumber = [1,2,3,4];
let computerNumber = getNumberInArray();

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

function checkingNumberUser(numberFromUser){
    let ans = false;
    // Проверить
    for(let i = 0; i < 4; i++){
        for(let j = i; j < 4; j++ ){
            if(i != j)
            if( numberFromUser[i] == numberFromUser[j]  ){
                return false;
            } else{
               ans = true;
            }
        }
    }
    return ans;
}

export {getNumberInArray,  checkingNumberOfCows, checkingNumberOfBulls, checkingNumberUser}