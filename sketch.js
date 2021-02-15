//Create variables here
var happydog;
var dog;
var database;
var foodS;
var foodStock;
var feedDog;
var addFoods;
var gameState=Play;



function preload()
{
  //load images here
  //backgroundImg = loadImage("sprites/bg.png");
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale=0.1;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFodd.position(800,95);
  addFood.mousepressed(addFoods);

  readState=database.ref('gameState');
readState.on("value",function(data)){
  gameState=data.val();
}
}


function draw() {  
background(46, 139, 87);
foodObj.dispaly();
writeStock(foodS);

//if(keyWentDown(UP_ARROW)){
//writeStock(foodS);
//dog.addImage(happydogImage);
//}

text("NOTE:press up arrow key to feed Drago milk",250,250);
stroke("blue");
fill("purple");
text("Food:"+foodS,270,250);
if(lastFed>=12){
  text("Last Fed :"+lastFed%12+"PM", 350,30);
}else if(lastFed==0){
  text("Last Fed: 12 AM",350,30);
}else{
  text("Last Fed:"+lastFed+"AM",350,30);
}
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});
if(foodS === 0){
  dog.addImage(happyDog);
  milkBottle2.visible=false;
}else{
  dog.addImage(sadDog);
  milkBottle2.visible=true;
}
if(gameState===1){
  dog.addImage(happyDog);
  dog.scale=0.175;
  dog.y=250;
}
if(gameState===2){
  dog.addImage(sadDog);
  dog.sacle=0.175;
  milkBottle2.visible=false;
  dog.y=250;
}
var Bath=createButton("I want to take a bath");
Bath.position(580,125);
if(Bath.mousePressed(function(){
  gameState=3;
  database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===3){
    dog.addImage(washroom);
    dog.scale=1;
    milkBottle2.visible=false;
  }
  var Sleep=createButton("I am very sleepy");
  Sleep.position(710,125);
  if(Sleep.mousePressed(function(){
    gameState=4;
    database.ref('/').update({'gameState:gameState'});
  }));
if(gameState===4){
  dog.addImage(bedroom);
  dog.scale=1;
  milkBottle2.visible=false;
}
var Play=createButton("Let's play!!");
Play.position(500,160);
if(Play.mousePressed(function(){
  gameState=5;
  database.ref('/').update({'gameState':gameState});
}));
var PlayInGarden=createButton("Let's play in the park");
PlayInGarden.position(585,160);
if(PlayInGarden.mousePressed(function(){
  gameState=6;
  database.ref('/').update({'gameState':gameState});
}));
if(gameState===6){
dog.y=175;
dog.addImage(garden);
dog.scale=1;
milkBottle2.visible=false;
}
  drawSprites();
  //displayfoodclass object
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
  }
  database.ref('/').update({
    Food:x
  }

  )
}
function feedDog(){
  dog.addImage(happydogImage);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  d
}
function addFoods(){
  foods++;
  dtatbase.ref('/').update({
    food:foodS
  })
}
function update(state){
  database.ref('/').update({
    gameState:state
  });
}

