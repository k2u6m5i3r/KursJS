//решение с "чистой функцией"
let str;
// do {
//     str = prompt("введите строку на русском языке!");
//     str = String(str);// если пользователь нажал Отмена то возращается null приведение превращает в строку и проверка на 'null'
// } while (  str.length == 0  || str == 'null');
str = "окещлещрлещлЗЩлазлвзщылавзщыла взщыалвщыаыЛВЩЗФЫВЛ ФЫВЛФЫЩв";

function getNumberForEach(str) {
    let ans = 0; //переменная подсчёта гластных
    let newStrToArray = []; //массив для храниниия элеметов строки
    newStrToArray = str.split('');
    newStrToArray.forEach(element => {
        element = element.toLowerCase();
        if (element == 'а' || element == 'о' || element == 'и' ||
            element == 'е' || element == 'ё' || element == 'э' ||
            element == 'ы' || element == 'у' || element == 'ю' || element == 'я'){
                ans++;
            }        
    });
    return ans;        
}
console.log(getNumberForEach(str));

function getNumberfilter(str) {
    let ans = []; //фильтр возращает массив элементов прошедшие проверку.
    ans = str.split(''); // разбил строку на элементы массива
    ans = ans.filter(element => {
        element = element.toLowerCase();
        if (element == 'а' || element == 'о' || element == 'и' ||
        element == 'е' || element == 'ё' || element == 'э' ||
        element == 'ы' || element == 'у' || element == 'ю' || element == 'я'){  
            return element;
        } 
    }) 
    return ans.length; // количество элементов прошедшие проверку  
}
console.log(getNumberfilter(str));

function getNumberReduce(str) {
    let ans = 0; //переменная подсчёта гластных
    let arrayTemp = []; // временный массив
    arrayTemp = str.split(''); // разбил строку на элементы массива
    ans = arrayTemp.reduce(function (acc, element) {
        element = element.toLowerCase();
        if(element == 'а' || element == 'о' || element == 'и' ||
        element == 'е' || element == 'ё' || element == 'э' ||
        element == 'ы' || element == 'у' || element == 'ю' || element == 'я'){
            // console.log(element);
            //acc.push(element);
            acc++;
        }
        return acc;
    }, 0);
    // console.log(ans);
    return ans;  
}
console.log(getNumberReduce(str));