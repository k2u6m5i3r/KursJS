function treeSum(parameters) {
    let ans=0;// результат суммирования будет в этой переменной
    if(Array.isArray(parameters)){//проверка пришёл массив
        // Пришёл массив
        for (let index = 0; index < parameters.length; index++) {// по каждому элементу прохожу
            if(Array.isArray(parameters[index])){// проверка что элемент массива - массив
                //да элемент массива являляется массивом
                ans += treeSum(parameters[index]) // запускаю рекурсию, возрат сумма элеметов массива
            } else {
                // элемент массива просто число
                ans += parameters[index];
            }
        }
    }
    return ans;
}

let testTask05 =    [5,7,
                    [4, [2], 8, [1,3], 2],
                    [9,[]],
                    1,8
                    ]
console.log(treeSum(testTask05));
console.log(treeSum([1,2,3,4,5,[1,2,2]]));