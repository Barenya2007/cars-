var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var car1,car2,car3,car4 ,cars;
var car1im, car2im, car3im, car4im, trackIM, backGroundIm;

function preload(){
car1im=loadImage("images/car1.png")
car2im=loadImage("images/car2.png")
car3im=loadImage("images/car3.png")
car4im=loadImage("images/car4.png")
trackIM=loadImage("images/track.jpg")
backGroundIm=loadImage("images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount===4){game.update(1)}
  if(gameState===1){
    clear()
    game.play();
  }
  if(gameState===2){
    game.end()
}
  
}
