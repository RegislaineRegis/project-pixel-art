
window.onload = function (){
criandoPainel(5);
}

let palette = document.querySelector('#color-palette');
let pixel = document.querySelector('#pixel-board');
let buttonVqv = document.getElementById('generate-board');

const corPaleta = ['black', 'yellow', 'green', 'red'];

    for (let index = 0; index < 4; index += 1){
        // criando 4 divs da paleta de cores    
        palette.appendChild(criarElemento('div', 'color'));     
    // stylizando as 4 paletas
        mudarCorPaleta(corPaleta,index);
    }


buttonVqv.addEventListener('click', botaoVqv);

function botaoVqv(){     
    inputElemento = document.getElementById('board-size').value;
    // referencia: Retirado de um site de explicação, pois ao efetuar a minha logica estava removendo tbm 
   //o elemento pai section e não estava conseguindo inserir novamente os elementos 
   //enqto tiver um elemento filho no pai da section id="pixel-board" ele vai removendo
   //retirado a infromação do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild 
    while(pixel.firstChild){
        pixel.removeChild(pixel.firstChild)
    }    
    if(inputElemento === ""){
        alert("Board inválido!");
        document.getElementById('board-size').value = '';
    }else if (inputElemento <= 1 || inputElemento <= 5){
        inputElemento = 5;
        document.getElementById('board-size').value = '';
        criandoPainel(inputElemento);         
    }else if (inputElemento > 50){
        inputElemento = 50;
        document.getElementById('board-size').value = '';
        criandoPainel(inputElemento);        
    }
    else{ 
        console.log(inputElemento);
        criandoPainel(inputElemento);
    }    
}
function criandoPainel(elementoPainel){  

    for(let indexLinha = 0; indexLinha < elementoPainel; indexLinha += 1){    
        for(let indexColuna = 0; indexColuna < elementoPainel; indexColuna += 1){
            let elemento = criarElemento('div', 'pixel');
            pixel.appendChild(elemento);          
        }
        //criando elemento apos 5 div's, pula a linha
        let elementoPulaLinha = criarElemento('br','pulalinha');
        pixel.appendChild(elementoPulaLinha);  
    }    
    pixelWhite(elementoPainel);  

    corPreto.addEventListener('click', classSelected);
    corAmarelo.addEventListener('click', classSelected);
    corVerde.addEventListener('click', classSelected);
    corVermelho.addEventListener('click', classSelected);


    // capturando o quadro de pixel
    let clickPressiona = document.getElementsByClassName('pixel');
    
    for(let index = 0 ; index < clickPressiona.length; index += 1){
        clickPressiona[index].addEventListener('click',function pintaPixel(){
            for(let indexPaleta = 0; indexPaleta < corPaleta.length; indexPaleta += 1){
                //pega o nome da classe daquela div da paleta de cor
            let classe = document.getElementsByClassName('color')[indexPaleta].className;
                if(classe === 'color selected'){
                clickPressiona[index].style.background = document.getElementsByClassName('color')[indexPaleta].style.background;
                }
            }
        })
    }
}

// função para criar elementos(divs, p, li, ul, etc) com os nomes de suas classes
function criarElemento(elemento, classe){
    let newElemento = document.createElement(elemento);
    newElemento.className = classe;  
    return newElemento;   
}
//função que styliza a cor de fundo do pixel como branca e sua borda

function pixelWhite(ElementoTamanho){
    
    let tamanho = ElementoTamanho*ElementoTamanho;
    for(let index = 0; index < tamanho; index += 1){
        let corPixel = document.getElementsByClassName('pixel')[index];
          corPixel.style.background = 'white';
          corPixel.style.border = 'solid 1px black';
     }
}
//função que styliza a cor de fundo da paleta de 4 cores e sua borda
function mudarCorPaleta(arrayPaleta, indexPaleta){
    if(arrayPaleta[indexPaleta] !== 'white'){
        let corDiv = document.getElementsByClassName('color')[indexPaleta];
         corDiv.style.background = arrayPaleta[indexPaleta];
         corDiv.style.border = 'solid 1px black';
        }
}
let corPreto = document.querySelector('.color');
corPreto.classList.add('selected');
let corAmarelo = document.getElementsByClassName('color')[1];
let corVerde = document.getElementsByClassName('color')[2];
let corVermelho = document.getElementsByClassName('color')[3];
// apenas um da classe color deve possuir a classe selected, percorri minhas 4 divs da Paleta de cores
//corpaletta add o evento qdo clicada add a classe selected

function classSelected(evento){
    const elemento = document.getElementsByClassName('color');
    for(let index = 0; index < elemento.length; index += 1){
    elemento[index].classList.remove('selected');          
    evento.target.classList.add('selected');
    } 
} 
   // capturando o botão limpar
   
let btnLimpa = document.getElementById('clear-board');    
    
btnLimpa.addEventListener('click', limpar);
 // botão limpar a explicação foi achada na documentação do for/of
 //iterando sobre coleção do dom usando for/of
function limpar(){  
   let elemento = document.querySelectorAll('section > div');
   for(let elementoDiv of elemento){
       elementoDiv.style.background = 'white';
   }
}

   