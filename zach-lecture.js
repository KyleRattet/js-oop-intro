

///Make songs for playlist to use



///Songs have titles, artist, and length
//Playlist needs a name
//somewhere to store songs within out playlist
//find a particular song
//add songs to the playlist
// remove songs
///play/next/stop (behvavior)
//shuffle songs (behavior)

var Song = function (title, artist, length) {
  this.title = 'title';
  this.artist = artist;
  this.length = length;
};

//creating songs
song1 = new Song('artist', 200);

//create playlist
var Playlist = function(name){
  this.name = name;
  this.songs = [];
  //if song is playing
  this.current_song = null;

};

//write function to add songs for playlist
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};


//write function to get artists
Playlist.prototype.getArtists = function () {
  var artists = [];
  for (var i = 0; i < this.songs.length; i++) {
    artists.push(this.songs[i].artists);
  }
  return artists;
};


//write play function
Playlist.prototype.currentlyPlaying = function () {
  return this.songs[this.current_song]

};


Playlist.prototype.play = function () {
  this.current_song = 0;


};

var Song = function (title, artist, length) {
  this.title = 'title';
  this.artist = artist;
  this.length = length;
};

//creating songs
song1 = new Song('artist', 200);

//create playlist
var Playlist = function(name){
  this.name = name;
  this.songs = [];
  //if song is playing
  this.current_song = null;

};

//write function to add songs for playlist
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};


//write function to get artists
Playlist.prototype.getArtists = function () {
  var artists = [];
  for (var i = 0; i < this.songs.length; i++) {
    artists.push(this.songs[i].artists);
  }
  return artists;
};


//write play function
Playlist.prototype.currentlyPlaying = function () {
  return this.songs[this.current_song]

};


Playlist.prototype.play = function () {
  this.current_song = 0;


};

Playlist.play()
playlist = new Playlist('my playlist')
Playlist {name: "my playlist", songs: Array[0], current_song: null}
song1
Song {title: "title", artist: 200, length: undefined}
song2 = new Song ("title", "bob", 203)
Song {title: "title", artist: "bob", length: 203}
myplaylist = new Playlist('emo g11')
Playlist {name: "emo g11", songs: Array[0], current_song: null}
song1
Song {title: "title", artist: 200, length: undefined}
song 2
VM2622:2 Uncaught SyntaxError: Unexpected number
    at Object.InjectedScript._evaluateOn (<anonymous>:905:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:838:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM71:905InjectedScript._evaluateAndWrap @ VM71:838InjectedScript.evaluate @ VM71:694
song2
Song {title: "title", artist: "bob", length: 203}
myplaylist.addSong(song1)
undefined
myplaylist.addSong(song2)
undefined
myplaylist
Playlist {name: "emo g11", songs: Array[2], current_song: null}
myplaylist.currentlyPlaying()
undefined
myplaylist.play()
undefined
myplaylist.currentlyPlaying()
Song {title: "title", artist: 200, length: undefined}
myplaylist.artist
undefined
myplaylist.artist()
VM3035:2 Uncaught TypeError: myplaylist.artist is not a function
    at <anonymous>:2:12
    at Object.InjectedScript._evaluateOn (<anonymous>:905:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:838:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM3035:2InjectedScript._evaluateOn @ VM71:905InjectedScript._evaluateAndWrap @ VM71:838InjectedScript.evaluate @ VM71:694
myplaylist.getArtists()
[undefined, undefined]
myplaylist
Playlist {name: "emo g11", songs: Array[2], current_song: 0}current_song: 0name: "emo g11"songs: Array[2]0: Song1: Songlength: 2__proto__: Array[0]concat: concat()constructor: Array()entries: entries()every: every()filter: filter()forEach: forEach()indexOf: indexOf()join: join()keys: keys()lastIndexOf: lastIndexOf()length: 0map: map()pop: pop()push: push()reduce: reduce()reduceRight: reduceRight()reverse: reverse()shift: shift()slice: slice()some: some()sort: sort()splice: splice()toLocaleString: toLocaleString()toString: toString()unshift: unshift()Symbol(Symbol.iterator): ArrayValues()Symbol(Symbol.unscopables): Object__proto__: Object__proto__: PlaylistaddSong: (song)constructor: (name)currentlyPlaying: ()getArtists: ()play: ()__proto__: Object



