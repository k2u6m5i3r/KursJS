let firstName, middleName, lastName, age, gender, genderBoolean,retirementAge;

//циклы do while чтобы выполнился минимум один раз, а потом по условию!
do {
    firstName = prompt("Введите имя!");
    //если пользователь ничего не ввел нажал Ok, то длинна строки 0 //true повторить ввод
    //если пользователь ввел ФИО с маленькой буквы(первая буква). маленькая буква не равна большой // true повторить ввод
    firstName = String(firstName); // если пользователь нажал Отмена то возращается null приведение превращает в строку и проверка на 'null'
} while ( firstName.length == 0 || (firstName[0] !== firstName[0].toUpperCase()) || firstName == 'null');

do {
    middleName = prompt("Введите отчество!");
    //аналогично как в первом цикле. Только отчетсва если нет, то можно убрать проверку на middleName.length == 0
    middleName = String(middleName);
} while (middleName.length == 0 || (middleName[0] !== middleName[0].toUpperCase()) || middleName == 'null');

do{
    lastName = prompt("Введите фамилию");
    //проверка как в имени
    lastName = String(lastName);
} while(lastName.length == 0 || (lastName[0] !== lastName[0].toUpperCase()) || lastName == 'null' ) ;

do {
    age = prompt("Введите Ваш возраст!");
    //если пользователь нажмёт ок то вернётся пустая строка '' Number(age) приведёт к 0
    //если пользователь нажмёт отмена то вернётся null Number(age) приведёт к 0
    age = Number(age);
} while ( isNaN(age) || age == 0);

genderBoolean = confirm("Ваш пол - мужской?");
//если вернёт true то мужской иначе женский
if (genderBoolean) {
    gender = "мужской";
} else {
    gender = "женский";
}

//решить на пенсии или нет. муж > 65 жен > 60
if (genderBoolean) {
    if ( age > 65 ){
        retirementAge = "да";
     } else {
        retirementAge = "нет";
     }
} else {
    if ( age > 60 ) {
        retirementAge = "да";
    } else {
        retirementAge = "нет";
    }
}
console.log(
`ваше ФИО:${firstName} ${middleName} ${lastName}
ваш возраст в годах ${age} 
ваш возраст в днях ${age*365}
через 5 лет вам будет: ${age+5}
ваш пол: ${gender}  
вы на пенсии: ${retirementAge}`);
