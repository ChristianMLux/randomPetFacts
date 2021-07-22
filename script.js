let facts = [];
let pics = [];
let factDOM = document.getElementById("fact");
let getFactBtnDOM = document.getElementById("getFactBtn");
let catPicDOM = document.getElementById("catPic");
let i = 0;

class Fact {
  constructor(text, url) {
    this.fact = text;
    this.catPicURL = url;
  }
}

getFactBtnDOM.addEventListener("click", getCompleteFact);

function getCatPic() {
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

function getCompleteFact() {
  getCatPic();
  getCatFact();
}

function renderFact(fact) {
  factDOM.textContent = fact.fact;
  catPicDOM.src = fact.catPicURL;
}

/**
 *
 */
