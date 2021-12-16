let container = document.getElementById('color-palette')
//let contadorDiv = 4;
let colorClass = ['black square', 'blue square', 'red square', 'yellow square'];

function createDivElement(classes){
let newDiv = document.createElement('div');
newDiv.className = classes;
return newDiv
}
function addElementChild(local, elemento){
    local.appendChild(elemento)
 }
for (let cor of colorClass){
let element = createDivElement(cor)
addElementChild(container, element)
}
