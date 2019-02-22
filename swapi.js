// Write your swapi code in this file!
let crawlbtn = document.getElementById('crawlBtn')
let crawldiv = document.getElementById('crawlDiv')
let planetBtn = document.getElementById('findPlanet')
let planetInput = document.getElementById('planetInput')
let planetDiv = document.getElementById('planetData')


crawlBtn.addEventListener('click', getOpeningCrawl)
planetBtn.addEventListener('click', getPlanet)

function getPlanet(e) {
  e.preventDefault()
  let planetInputValue = planetInput.value
  if((planetInputValue >= 1) && (planetInputValue <= 60)){
    fetch(`https://swapi.co/api/planets/${planetInputValue}/`)
      .then(res => res.json())
      .then(json => planet(json));
  }else{
    planetDiv.innerText = "Wrong input. Enter a number between 1 - 60"
  }
  // debugger

}


function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(json => crawl(json));
}


function planet(data){
  console.log(data)
  planetDiv.innerText = `Name: ${data["name"]} \nClimate: ${data["climate"]}`
}

function crawl(data){
  console.log(data);
  crawldiv.innerText = data["opening_crawl"]

}
