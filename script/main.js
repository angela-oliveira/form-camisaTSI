// const resultado = document.querySelector('#resultado01')
// const mais = document.querySelector('.mais01')
// const menos = document.querySelector('.menos01')
// indn(resultado)

// function indn(result){
//     mais.onclick = ()=> {
//         if(result.value >= 0){
//             result.value ++
//         }
//     }
//     menos.onclick =()=>{
//         if(result.value > 0){
//             result.value --
//         }
//     }
// }

let cards = document.querySelectorAll('.card');
for (card of cards) {
    let resultado = card.querySelector("input");
    let mais;
    let menos;
    
    links = card.querySelectorAll("a");
    for (link of links) {
        if (link.getAttribute('class').indexOf('menos') >= 0) {
            menos = link;
        }else{
            mais = link;
        }
    }
    mais.onclick = ()=> {
        resultado.setAttribute('value', Number(resultado.value) + 1);
    }
    menos.onclick =()=>{
        if(resultado.value > 0){
            resultado.setAttribute('value', Number(resultado.value) - 1);
        }
    }
}