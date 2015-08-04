// *** Intro to OOP *** //

// Base Class - constructor
// var Vehicle = function(numberOfWheels, carColor){
//   // properties
//   this.wheels = numberOfWheels;
//   this.color = carColor;
// };

// //Methods
// Vehicle.prototype.honk = function () {
//   return 'honk!';
// };

// Vehicle.prototype.toString = function () {
//   return 'The vehilce has ' + this.wheels + ' wheels and is ' + this.color + '.';
// };

// // Instances
// var redCar = new Vehicle(4, 'red');
// console.log(redCar);
// console.log(redCar.honk());
// console.log(redCar.toString());

//Base Class - constructor

var Song = function (songName, bandName) {
  this.song = songName;
  this.band = bandName;

};

//Methods
Song.prototype.countName = function () {
  return this.song.split(" ").length
};

Song.prototype.createElement = function () {
  var newElement = $('<p></p>');
  newElement.text(this.song + ' by ' + this.band);
  return newElement;
};


//Instances
var newSong = new Song('A Day in the Life', 'The Beatles');
console.log(newSong);
console.log(newSong.countName());

$( document ).ready(function() {
    $('body').append(newSong.createElement());
});
