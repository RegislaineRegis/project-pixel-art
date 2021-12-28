let palette = document.querySelector('#color-palette');
let pixel = document.querySelector('#pixel-board');
let buttonVqv = document.getElementById('generate-board');


const corPaleta = ['black', 'yellow', 'green', 'red'];

for (let index = 0; index < corPaleta.length; index += 1){
    // criando 4 divs da paleta de cores    
       palette.appendChild(criarElemento('div', 'color'));     
  // stylizando as 4 paletas
    mudarCorPaleta(corPaleta,index);
}

buttonVqv.addEventListener('click', function botaoVqv(){    
    inputElemento = document.getElementById('board-size').value;
  if(inputElemento === "" || inputElemento <= 0 || inputElemento > 50){
      alert("Board inválido!");
      document.getElementById('board-size').value = '';
  }else{      
      // criando as divs, sendo 5 elementos por linha
   for(let indexLinha = 0; indexLinha < inputElemento; indexLinha += 1){    
    for(let indexColuna = 0; indexColuna < inputElemento; indexColuna += 1){
        let elemento = criarElemento('div', 'pixel');
        pixel.appendChild(elemento);          
    }
    //criando elemento apos 5 div's, pula a linha
    let elementoPulaLinha = criarElemento('br','pulalinha');
    pixel.appendChild(elementoPulaLinha);  
  }
  pixelWhite();
  }
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
})
// função para criar elementos(divs, p, li, ul, etc) com os nomes de suas classes
function criarElemento(elemento, classe){
    let newElemento = document.createElement(elemento);
    newElemento.className = classe;  
    return newElemento;   
}
//função que styliza a cor de fundo do pixel como branca e sua borda

function pixelWhite(){
    let tamanho = (document.getElementById('board-size').value)*(document.getElementById('board-size').value);
    for(let index = 0; index < tamanho; index += 1){
        let corPixel = document.getElementsByClassName('pixel')[index];
          corPixel.style.background = 'white';
          corPixel.style.border = 'solid 1px black';
          if (index % 5 === 0){
          corPixel.style.margin = 0;
          }
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

    btnLimpa.addEventListener('click', function(){

        inputElemento = document.getElementsByClassName('pixel').length;    
        document.getElementById('board-size').value = '';     
   // referencia: Retirado de um site de explicação, pois ao efetuar a minha logica estava removendo tbm 
   //o elemento pai section e não estava conseguindo inserir novamente os elementos 
   //enqto tiver um elemento filho no pai da section id="pixel-board" ele vai removendo
   //retirado a infromação do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild 
        while(pixel.firstChild){
            pixel.removeChild(pixel.firstChild)
        }       
    });