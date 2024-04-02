const ingressos = [];
function highligntCard(selector)
{
var element = document.querySelector(selector);
element.classList.toggle('card-highlight');
}

// document.addEventListener('keydown', (event) => { //função para descobrir qual tecla do teclado foi apertada
//     var name = event.key;
//     var code = event.code;
//     alert(`tecla pressionada ${name} \r\n Key code: ${code}`);
// } , false);

// // checkKeyboardCode();

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
} , false)
}
addKeyboardEventListeners ();

function selectCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-selector");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}

showSelectedCards = () =>
{  
    if(ingressos.length > 0) alert("ingressos selecionados:" + ingressos);
}
