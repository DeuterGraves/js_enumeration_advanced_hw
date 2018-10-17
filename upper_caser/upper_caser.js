const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  return this.words.map(word => word.toUpperCase());
}

/*

Cinema.prototype.getTitles = function () {
  return this.films.map(film => film.title)
};
*/
module.exports = UpperCaser;
