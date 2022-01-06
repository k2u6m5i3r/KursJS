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
    return heapSizes.reduce(function(prev, current){
        return current ^ prev;
    },0);
}