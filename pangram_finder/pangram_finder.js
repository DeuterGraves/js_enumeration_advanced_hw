const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => this.phrase.includes(letter));

  // console.log("this alphabet", this.alphabet); //array of the alphabet

  // this.phrase.includes("y") //this is true
  // need to cycle the alphabet through where "y" lives
}


module.exports = PangramFinder;
