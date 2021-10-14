//решение без чистой функции
let str, ans;
ans = 0; //переменная подсчёта гластных

do {
    str = prompt("введите строку на русском языке!");
} while (  str.length == 0 );
//str = "окещлещрлещлЗЩлазлвзщылавзщыла взщыалвщыаыЛВЩЗФЫВЛ ФЫВЛФЫЩв";
for (let index = 0; index < str.length; index++) {
    //в нижний регистр чтобы не сравнивать большие буквы, а только маленькие строчный
    const element = str[index].toLowerCase();
    if (element == 'а' || element == 'о' || element == 'и' ||
        element == 'е' || element == 'ё' || element == 'э' ||
        element == 'ы' || element == 'у' || element == 'ю' || element == 'я'){
            ans++;
        }
}
console.log(ans);