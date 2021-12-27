// Создание блока тега blockInfo1

let blockInfo1 = document.createElement('div');
blockInfo1.className = "blockInfo1";
blockInfo1.style.background = 'blue';
blockInfo1.innerText = "Созданный блок 1";
// console.dir(blockInfo);

// Создание блока тега blockInfo1

let blockInfo2 = document.createElement('div');
blockInfo2.className = "blockInfo2";
blockInfo2.style.background = 'orange';
blockInfo2.innerText = "Созданный блок 2";
// console.dir(blockInfo2);

// получить блок
let findBlock = document.getElementById('createBlock'); //находу по  id
findBlock.style.background = 'red';                     // установка на найденный текст стиля 

// console.log(findBlock);


//вставляю в блок createBlock
findBlock.append(blockInfo2);    // добавить в конец
findBlock.prepend(blockInfo1);   // добавить в начало

blockInfo2.onclick = function(){ //добавляю событие нажатие на блок 2
    console.log("событие нажатие на блок 2");
}

blockInfo1.onclick = function(){ //добавляю событие нажатие на блок 1
    console.log("событие нажатие на блок 1");
}