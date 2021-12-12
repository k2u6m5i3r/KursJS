
function HashStorageFunc(){
    let storageObject = {}; //объект хранения, в нем будут создаваться поля - значения(ключ:значение)  
    this.addValue = function(key, value){
        storageObject[key] = value;
    }
    this.getValue = function(key){
        // выведет undefined если такого ключа нет
        return storageObject[key];
    }
    this.deleteValue = function(key){
        if(storageObject[key]){ // {}-true undefined -false;
            delete storageObject[key];
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function(){
        // класс чистый  и нельзя использовать Object.keys(storageObject)?!
        let returnKey = [];
        for( let key in storageObject){
            returnKey.push(key);
        }
        return returnKey;
    }
}
let drinkStorage = new HashStorageFunc();

console.dir(drinkStorage);
function SetDrink(nameDrink, alcoalcoholСontent, fullRecipe){ // ненужная фуенкция для тестирования быстрого заполнении напитков 
            //Ввод через prompt
    // let nameDrink = prompt(`ввеидте название напитка`);
    // let alcoDrinc = prompt(`напиток ${nameDrink} алкогольный?`);
    // let recipe = prompt(`Напишите рецепт напитка ${nameDrink}`);
    drinkStorage.addValue(nameDrink,{alcoalcoholСontent, fullRecipe});// в новом стандарте развернет как ключ-значение;
    
}
// заполняю напитками
SetDrink('Margo', '3%%' ,'Смешать, но не взбалтывать' );
SetDrink('Mery', '40%%' ,'смешать всё' );
SetDrink('Mery-2', '20%%' ,'смешать всё' );
SetDrink('juice', '0%%', 'Просто выдавить фрукт');

// вывожу напитки
console.log(`Напитки: ${drinkStorage.getKeys()}`);

// вывожу конкретный напиток
    //который существует
console.log(drinkStorage.getValue("Margo"));
    //которого нет
console.log(drinkStorage.getValue("juiceOrange"));

// удаляю один из напитков. только...
    //который существует 
console.log(drinkStorage.deleteValue("Margo"));
    //которого нет
console.log(drinkStorage.deleteValue("juiceOrange"));  

// смотрю что его нет
console.log(`Напитки: ${drinkStorage.getKeys()}`);
