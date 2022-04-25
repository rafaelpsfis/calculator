var resultado = document.getElementById('resultado')

function insert(num) {
    resultado.innerHTML = resultado.innerHTML + num
}
function clean() {
    resultado.innerHTML = ''
}
function erase() {
    let tobeerased = resultado.innerHTML
    resultado.innerHTML = tobeerased.substring(0, tobeerased.length -1)
}
function calculate() {
    let tobecalculated = resultado.innerHTML
    if (tobecalculated) {
        resultado.innerHTML = eval(tobecalculated)
    } else {
        window.alert('Insira números e operações antes de clicar em "="!')
    }
}

