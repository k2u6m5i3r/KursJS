// console.log("Hello World!!!");
class HashStorageClass {
    storageObject = {}; //объект хранения, в нем будут создаваться поля - значения(ключ:значение)  
    constructor(){
        
    }
    addValue(key, value){
        this.storageObject[key] = value;
    }
    getValue(key){
        // выведет undefined если такого ключа нет
        return this.storageObject[key];
    }
    deleteValue(key){
        if(storageObject[key]){ // {}-true undefined -false;
            delete this.storageObject[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys(){
        // класс чистый  и нельзя использовать Object.keys(storageObject)?!
        let returnKey = [];
        for( let key in this.storageObject){
            returnKey.push(key);
        }
        return returnKey;
    }
}
let drinkStorage = new HashStorageClass();
function SetDrink(nameDrink, alcoalcoholСontent, fullRecipe){ // ненужная фуенкция для тестирования быстрого заполнении напитков 
    //Ввод через prompt
// let nameDrink = prompt(`ввеидте название напитка`);
// let alcoalcoholСontent = prompt(`напиток ${nameDrink} алкогольный?`);
// let fullRecipe = prompt(`Напишите рецепт напитка ${nameDrink}`);
drinkStorage.addValue(nameDrink,{alcoalcoholСontent, fullRecipe});// в новом стандарте развернет как ключ-значение;

}
// заполняю напитками
SetDrink('Margo', '3%%' ,'Смешать, но не взбалтывать' );
SetDrink('Mery', '40%%' ,'смешать всё' );
SetDrink('Mery-2', '20%%' ,'смешать всё' );
SetDrink('juice', '0%%', 'Просто выдавить фрукт');

console.log(drinkStorage.getKeys());
console.dir(drinkStorage);
