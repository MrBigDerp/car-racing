var database;
var canvas, gameState = 0, playerCount = 0;
var form,game,player;

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);
  game  =  new Game();
  game.getState();
  game.start();
  
 
}

function draw(){
  background("white");
  

  
}