// *** Intro to OOP *** //

// // Base Class - constructor
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

// //Base Class - constructor

// var Song = function (songName, bandName) {
//   this.songName = songName;
//   this.bandName = bandName;

// };

// //Methods
// Song.prototype.countName = function () {
//   return this.songName.split(" ").length;
// };

// Song.prototype.createElement = function () {
//   var newEl = $('<h1>test</h1>');
//   return newEl;
// };


// //Instances
// var newSong = new Song('A Day in the Life', 'The Beatles');
// console.log(newSong);
// console.log(newSong.countName());

// $( document ).ready(function() {
//     $('body').append(newSong.countName());
//     $('body').append(newSong.createElement());
// });

var Person = function(firstAndLastName) {
  this.firstAndLastName = firstAndLastName;
  this.isInstructor = true;
};

var michael = new Person('Michael Herman');

Person.prototype.getFullName = function () {
  return this.firstAndLastName;
};

Person.prototype.getFirstName = function() {
  var splitName = this.firstAndLastName.split(" ");
  return splitName[0];
};

Person.prototype.getLastName = function () {
  var splitName = this.firstAndLastName.split(" ");
  return splitName[1];
};

