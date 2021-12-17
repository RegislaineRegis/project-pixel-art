let palette = document.querySelector("#color-palette");

let corPaleta = ['black', 'yellow', 'green', 'red'];

for (let index = 0; index < corPaleta.length; index += 1){
    // criando 4 divs
    let newDiv = document.createElement('div');
    newDiv.className = 'color';  
    palette.appendChild(newDiv);  
  // stylizando as 4 paletas
    if(corPaleta[index] !== 'white'){
        let corDiv = document.getElementsByClassName('color')[index];
         corDiv.style.background = corPaleta[index];
         corDiv.style.border = 'solid 1px black';
        }
}
function criarDiv(){
       
}
function MudarCorPaleta(){

}

