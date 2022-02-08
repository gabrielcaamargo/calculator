const insert = buttonValue => {
  const primeiroNumero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = primeiroNumero + buttonValue
}

const clean = () => document.getElementById('resultado').innerHTML = ''

const backspace = () => {
  const resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

const calculate = () => {
  const resultado = document.getElementById('resultado').innerHTML
  
  resultado 
  ? document.getElementById('resultado').innerHTML = eval(resultado)
  : document.getElementById('resultado').innerHTML = '0'
}
