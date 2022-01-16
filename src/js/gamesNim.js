let heapSizes = [];//массив для размеров куч

// стратегия игры Nim сумма XOR куч должна быть 0, если невозможно то проиграл игрок

function statusGames() {//
    if(heapXor(heapSizes) == 0){ // ошибок нет, игрок играет правильно. он может выграть
        return true;
    } else {
        return false;
    }
}

function gamesNimInic() {
    heapSizes[0]=1;
    heapSizes[1]=3;
    heapSizes[2]=5;
}


gamesNimInic();
console.log(heapSizes);
console.log(heapXor(heapSizes));


function heapXor(heapSizes) { // вспомогательная функция для быстрого нахождения XOR куч
    let ans;
    for(let i=0;i < heapSizes.length; i++){
        ans ^= heapSizes[i];
    }
    return ans;
}
function getCheckedItem(info) {
    let ans = 0;
    for(let i = 0; i < info.length; i++){
        if(info[i].checked){
            ans++;
        }
    }
    return ans;
}
function stepComputerTwoColumns(arrayHeep) {// метод как ходит компьютер
    let newHeepsStep = [];
    for(let i= 0; i< arrayHeep.length; i++) {
        newHeepsStep.push(arrayHeep[i]);
    }

    console.log(arrayHeep);
    console.log(heapXor(newHeepsStep));
    let temp=newHeepsStep.length;
    for(let i = 0; newHeepsStep[1] >=0 ; i++ ){
        newHeepsStep[1]--;
        if(heapXor(newHeepsStep) ==0){
            break;
        }
    }
    console.log(newHeepsStep);
    // метод возращает массив ходов от компьютера 
    return newHeepsStep;
}
export {getCheckedItem, heapXor, stepComputerTwoColumns};