var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var content = "";
function fillDiv (thing) {

  content += thing + " ";
  el.innerHTML = content;
}

planets.forEach(fillDiv);
// Use the map method to create a new array where the first letter of each planet is capitalized
var capital = planets.map(function(num) {
   var cows =  num[0].toUpperCase() + num.slice(1);
   return cows;
});
console.log(capital);

// Use the filter method to create a new array that contains planets with the letter 'e'

var onlyE = planets.filter(testForE);

function testForE(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "e") {
          return word;
    }
  }
}

console.log(onlyE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var sentence = words.reduce(function(a, b) {
  return a.concat(" " + b);
});

console.log(sentence);
