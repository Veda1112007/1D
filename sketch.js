var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var endCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2, player3, player4, player5;
var players0, player01, player02, player03, player04, player05;
var bg;
var bg2;
var Endlineplayers;
function preload() {
  bg = loadImage('images/track.jpg');
  bg2 = loadImage("images/download.jpg");
  }

function setup(){
  canvas = createCanvas(windowWidth - 20, windowHeight-30);
  database = firebase.database();
  Player.getPlayerInfo();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
