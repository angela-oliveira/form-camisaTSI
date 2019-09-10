const resultado = document.querySelector('#resultado01')

const mais = document.querySelector('.mais01')
const menos = document.querySelector('.menos01')

indn(resultado)

function indn(result){

    mais.onclick = ()=> {
        if(result.value >= 0){
            result.value ++
        }
    }
    menos.onclick =()=>{
        if(result.value > 0){
            result.value --
        }
    }
}