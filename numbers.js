// Write your numbers code in this file!
const baseURL = "http://numbersapi.com/"
let currYear = new Date().getFullYear()
let allnumberDiv = document.getElementById('all-the-numbers')
let allnumbtn = document.getElementById('all-numbers-button')

let yearDiv = document.getElementById('year-history')
let factbtn = document.getElementById('number-one')
let factdiv = document.getElementById('one-facts')
let randommathfact = document.getElementById('random-math-fact')
let enterNumber = document.getElementById('pick-a-number')
 document.addEventListener('DOMContentLoaded', onDOM)

allnumbtn.addEventListener('click', getallfacts)


function getallfacts() {
  allnumberDiv.innerText = ""
  console.log("workign");
  for (var i = 0; i < 100; i++) {
    fetch(`${baseURL}random/trivia`)
      .then(res => res.text())
      .then(text => printallfacts(text));
    console.log(`got ${i}`);
  }
}

function printallfacts(data) {
  console.log("ypoo");
  let div = document.createElement('div')
  div.innerText = `-${data}\n`
  allnumberDiv.appendChild(div)
}

function onDOM(){
  setInterval(getYearFact,5000)

}

function getYearFact(){
  fetch(`${baseURL}${currYear}/year`)
    .then(res => res.text())
    .then(text => printYearfact(text));

}

function printYearfact(data){
  console.log(data);
  yearDiv.innerText += `${data}\n\n`
  currYear -= 1
}


console.log("working");






factbtn.addEventListener('click', getfacts)
enterNumber.addEventListener('change', factsOnChange)


function factsOnChange() {
  console.log('heeeeeeyyyyy')
  // debugger
  if (!isNaN(parseInt(enterNumber.value))) {
    fetch(`${baseURL}${enterNumber.value}/math`)
      .then(res => res.text())
      .then(text => printMathFact(text));
  } else {randommathfact.innerText = 'Get Lost!'}
  }

function printMathFact(text) {
  randommathfact.innerText = text

}


function getfacts() {
  fetch(`${baseURL}1`)
    .then(res => res.text())
    .then(text => printFact(text));
}
function printFact(data){
  factdiv.innerText = data
}
