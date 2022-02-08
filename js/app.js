const insert = buttonValue => {
  const firstValue = document.getElementById('resultField').innerHTML
  document.getElementById('resultField').innerHTML = firstValue + buttonValue
}

const clean = () => document.getElementById('resultField').innerHTML = ''

const backspace = () => {
  const inputValue = document.getElementById('resultField').innerHTML
  document.getElementById('resultField').innerHTML = inputValue.substring(0, inputValue.length -1)
}

const calculate = () => {
  const handleCalculate = document.getElementById('resultField').innerHTML
  
  handleCalculate
  ? document.getElementById('resultField').innerHTML = eval(handleCalculate).toFixed(2)
  : document.getElementById('resultField').innerHTML = '0'
}
