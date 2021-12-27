let palette = document.querySelector('#color-palette');
let pixel = document.querySelector('#pixel-board');

const corPaleta = ['black', 'yellow', 'green', 'red'];

for (let index = 0; index < corPaleta.length; index += 1){
    // criando 4 divs da paleta de cores    
       palette.appendChild(criarElemento('div', 'color'));     
  // stylizando as 4 paletas
    mudarCorPaleta(corPaleta,index);
}
// função para criar elementos(divs, p, li, ul, etc) com os nomes de suas classes
function criarElemento(elemento, classe){
    let newElemento = document.createElement(elemento);
    newElemento.className = classe;  
    return newElemento;   
}
//função que styliza a cor de fundo da paleta de 4 cores e sua borda
function mudarCorPaleta(arrayPaleta, indexPaleta){
    if(arrayPaleta[indexPaleta] !== 'white'){
        let corDiv = document.getElementsByClassName('color')[indexPaleta];
         corDiv.style.background = arrayPaleta[indexPaleta];
         corDiv.style.border = 'solid 1px black';
        }
}
// criando as divs, sendo 5 elementos por linha
for(indexLinha = 0; indexLinha < 5; indexLinha += 1){    
    for(indexColuna = 0; indexColuna < 5; indexColuna += 1){
        let elemento = criarElemento('div', 'pixel');
        pixel.appendChild(elemento);          
    }
    //criando elemento apos 5 div's, pula a linha
    let elementoPulaLinha = criarElemento('br','pulalinha');
    pixel.appendChild(elementoPulaLinha);
}
// pegando a qtidade de divs criadas no quadro pixel e armazenando na variavel tamanho
let tamanho = document.getElementsByClassName('pixel').length;
//console.log(tamanho);
//for que styliza a cor de fundo do pixel e sua borda
for(let index = 0; index < tamanho; index += 1){
    let corPixel = document.getElementsByClassName('pixel')[index];
        corPixel.style.background = 'white';
        corPixel.style.border = 'solid 1px black';
        if (index % 5 === 0){
        corPixel.style.margin = 0;
        }
}

let corPreto = document.querySelector('.color');
corPreto.classList.add('selected');
let corAmarelo = document.getElementsByClassName('color')[1];
let corVerde = document.getElementsByClassName('color')[2];
let corVermelho = document.getElementsByClassName('color')[3];


function classSelected(evento){
    const elemento = document.getElementsByClassName('color');
    for(let index = 0; index < elemento.length; index += 1){
    elemento[index].classList.remove('selected');          
    evento.target.classList.add('selected');
    } 
}
corPreto.addEventListener('click', classSelected);
corAmarelo.addEventListener('click', classSelected);
corVerde.addEventListener('click', classSelected);
corVermelho.addEventListener('click', classSelected);


