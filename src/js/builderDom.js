function addMyElement(typeBlock ,typeClass, typeId, content){
    let result = document.createElement(typeBlock);
    result.className = typeClass;
    result.id = typeId;
    if(console.length != 0){
        result.appendChild(document.createTextNode(content));
    }
    return result;
}
function addMyElementInput(typeInput, typeClass, typeId, content){
    let result = document.createElement("input");
    result.type = typeInput;
    result.value = content;
    result.className = typeClass;
    result.id = typeId;
    return result;
}

export {addMyElement, addMyElementInput};