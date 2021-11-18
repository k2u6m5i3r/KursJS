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
    let ans = 0; //переменная подсчёта гластных

    return ans;  
}
console.log(getNumberForEach(str));

function getNumberReduce(str) {
    let ans = 0; //переменная подсчёта гластных

    return ans;  
}