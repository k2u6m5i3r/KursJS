let firstName, middleName, lastName, age, gender, genderBoolean,retirementAge;

//циклы do while чтобы выполнился минимум один раз, а потом по условию!
do {
    firstName = prompt("Введите имя!");
    //если пользователь ничего не ввел, то длинна строки 0 //true повторить ввод
    //если пользователь ввел ФИО с маленькой буквы(первая буква). маленькая буква не равна большой // true повторить ввод
} while ( firstName.length == 0 || (firstName[0] !== firstName[0].toUpperCase()) );

do {
    middleName = prompt("Введите отчество!");
    //аналогично как в первом цикле. Только отчетсва если нет, то можно убрать проверку на middleName.length == 0
} while (middleName.length == 0 || (middleName[0] !== middleName[0].toUpperCase()));

do{
    lastName = prompt("Введите фамилию");
    //проверка как в имени
} while(lastName.length == 0 || (lastName[0] !== lastName[0].toUpperCase()));

do {
    age = prompt("Введите Ваш возраст!");
    //если пользователь нажмёт ок то вернётся пустая строка '' Number(age) приведёт к 0
    //если пользователь нажмёт отмена то вернётся null Number(age) приведёт к 0
    age = Number(age);
} while ( isNaN(age) || age == 0);

genderBoolean = confirm("Ваш пол - мужской?");
//если вернёт true то мужской иначе женский
console.log(genderBoolean);
if (genderBoolean) {
    gender = "мужской";
} else {
    gender = "женский";
}

//решить на пенсии или нет. муж > 65 жен > 60
if (genderBoolean && age > 65 ) {
    retirementAge = "да";
} else {
    retirementAge = "нет";
}
if (!genderBoolean && age > 60 ){
    retirementAge = "да";
} else {
    retirementAge = "нет";
}

console.log(
`ваше ФИО:${firstName} ${middleName} ${lastName}
ваш возраст в годах ${age} 
ваш возраст в днях ${age*365}
через 5 лет вам будет: ${age+5}
ваш пол: ${gender}  
вы на пенсии: ${retirementAge}`);
