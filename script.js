let facts = [];
let imgs = [];
let factDOM = document.getElementById("fact");
let getFactBtnDOM = document.getElementById("getFactBtn");
let catPicDOM = document.getElementById("catPic");

class Fact {
  constructor(text, url) {
    this.fact = text;
    this.imgURL = url;
  }
  getCatFact() {
    fetch("https://catfact.ninja/fact?max_length=140")
      .then((response) => response.json())
      .then(function (data) {
        facts.push(data.fact);
      });
  }
  getCatImg() {
    fetch("https://api.thecatapi.com/v1/images/search?url")
      .then((response) => response.json())
      .then(function (data) {
        imgs.push(data);
      });
  }
}

let newFact = new Fact();

initApp();
function initApp() {
  createCatFact();
}

getFactBtnDOM.addEventListener("click", createFactArray);

function createCatFact() {
  newFact.getCatFact();
  newFact.getCatImg();
}

function createFactArray() {
  renderFact();
  createCatFact();
  facts = [];
  imgs = [];
}

function renderFact() {
  factDOM.textContent = facts;
  catPicDOM.src = imgs[0][0].url;
}

/**
 *function getCatPic() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then(function (data) {
      pics.push(data);
      //console.log(pics[0][0].url);
    });
}
function getCatFact() {
  fetch("https://catfact.ninja/fact?max_length=140")
    .then((response) => response.json())
    .then(function (data) {
      facts.push(data);
      let fact = new Fact(facts[i].fact, pics[i][0].url);
      renderFact(fact);
      console.log(pics);
      //console.log(fact);
      i++;
    });
}
 */
