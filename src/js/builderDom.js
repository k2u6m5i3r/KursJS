function addMyElementDiv(typeClass, typeId, content){
    let result = document.createElement("div");
    result.className = typeClass;
    result.id = typeId;
    result.appendChild(document.createTextNode(content));
    return result;
}
function addMyElementBtn(typeClass, typeId, content){
    let result = document.createElement("input");
    result.type = "button";
    result.value = content;
    result.className = typeClass;
    result.id = typeId;
    return result;
}

export {addMyElementDiv, addMyElementBtn};