/*3 jeitos de criar variaveis
var - não é mais usado / foi descontinuado
let - pode trocar o valor depois
const - mantêm o valor é constante
*/
const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function abrirForm(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharForm(){
    formulario.style.left = "-230px"
    formulario.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}