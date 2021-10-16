let numberUser = prompt('введите число!');
//alert(`вы ввели ${numberUser}`);
if (numberUser == 'NaN') {
    //если ввод NaN пишем что введен NaN
    numberUser = prompt(`вы ввели NaN ${numberUser}. ВВедите число`);//вводим заново число строку уже правильно
} 
if ( String(+numberUser)  == 'NaN' || numberUser == '') {//пользователь ввел некоректно число или пустую строку
    numberUser = prompt(`вы ввели ${numberUser}. ВВедите число`);//вводим заново  число строку уже правильно
}
//второй раз введено точно число строкой
if (numberUser > 0 ) {//
    alert(`вы ввели число ${numberUser}. Число положительное`);
} else {
    alert(`вы ввели число ${numberUser}. Число отрицательное`);
}

console.log(typeof numberUser);//работа со строкой