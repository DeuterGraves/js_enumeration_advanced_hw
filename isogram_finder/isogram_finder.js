const IsogramFinder = function (word) {
  this.word = word.split('');
  uniques = []
}


function includeChecker(letter) {
  // var uniques = []
  if (uniques.includes(letter) != true ){
    uniques.push(letter);
    return true;
    console.log("uniquest", uniques);
  }else{
    return false;
  }
};


// console.log("every array", array1.every(includeChecker));

IsogramFinder.prototype.isIsogram = function () {
for (var letter in this.word ){
  if (uniques.includes(letter) != true ){
    uniques.push(letter);
    return true;
    console.log("uniquest", uniques);
  }else{
    return false;
  }
]
  // console.log("this word", this.word);
  // console.log("YOUNEEKS", uniques);
  // return this.word.every(includeChecker);
   // console.log(this.word.every(includeChecker));
};


/*
uniques = []
console.log("this word before runs", this.word);
console.log("uniques before runs", uniques);
this.word.every(includeChecker());

console.log("uniques after runs", uniques);
console.log("this word after runs", this.word);
*/
/*

if (uniques.includes(this.word.every(letter => uniques.push(letter))));


kinda works:

function includes(number) {
if (uniques.includes(number) === false ){
uniques.push(number);
return number;
}else{
return false;
}
};


var array1 = [1, 30, 39, 29, 10, 13, 29, 30, 13];
var uniques = []

console.log("every array", array1.every(includes));
// expected output: true
console.log("new array:", array2)
*/


/*
this.word.every( letter => if (uniques.includes(letter) == false){
uniques.push(letter);
console.log(uniques);
}else{
console.log("repeated letter!!")
}

)
console.log("every try", thing)

function testNum(a) {
if (a > 0) {
return "positive";
} else {
return "NOT positive";
}
}
*/
/*
Cinema.prototype.minDuration = function (duration) {
return this.films.every(film => film.length >= duration);
};*/

// or - use every to test uniques if it includes the letter in this.word - if it doesnt - pass in, she has it reutn the letter once it's in to show when it's there and trigger a false for hte duplicates.

/* SO WEIRD _ THIS RETURNS NUMBERS
console.log(uniques);
console.log(this.word);

for ( letter in this.word){
console.log(letter);
if (uniques.indexOf(letter) < 0 ){
uniques.push(letter);
}else{
return false;
}
}

console.log(uniques);*/
/*
console.log("this word", this.word);
console.log("unuqites", uniques);

console.log("expect -1 a bunch", this.word.map(letter => uniques.indexOf(letter)));

// if indexof === -1 push
console.log("uniques", uniques);

console.log("every gives true for pos or neg numbers:", this.word.every(letter => uniques.indexOf(letter)));
*/

//  create a temporary array - this array will take a letter from this.word array as long as it's indexOF in THAT new array = -1 = that means it doesn't yet exist in that array. IF indexOF != -1 then return false for hte array. if we get all the way through, return true.

/*
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var zoo = []

console.log(zoo.indexOf('bison'));
// expected output: -1
*/

// THIS FRIGGING WORKS
/*
function includeChecker(letter) {
  if (uniques.includes(letter) === false ){
    uniques.push(letter);
    return true;
  }else{
    return false;
  }
 };


var array1 = ["r", "e", "p", "e", "a", "t", "e", "d"];


console.log("every array", array1.every(includeChecker));
whatis = array1.every(includeChecker);
console.log(typeof whatis)
// expected output: true
console.log("new array:", uniques)
*/


module.exports = IsogramFinder;
