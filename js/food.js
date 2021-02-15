class Food{
    constructor(){
        this. foodStock;
        this. lastFed;
    
    }

display(){
    //else-if statement
var x=80,y=100;

imageMode(CENTER);
image(this.foodStock!=0);

    for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
    }

}

bedroom(){
    background(bedroom,550,500);
}

garden(){
    background(garden,550,550);

}

washroom(){
    background(this.washroom,550,500);
}
//currentTime=hour();
//if(currentTime==(lastFed+1)){
  //  update("Playing");
    //foodObj.garden();
//}else if(currentTime==(lastFed+2)){
  //  update("Sleeping");
    //foodObj.bedroom();
//}else if(currentTime>(lastFed+2)&& currentTime<=(lastFed+4)){
  //  update("Bathing");
    //foodObj.washing();
//}else{
  //  update("Hungry")
    //foodObj.display();
//}
var button=createButton("Feed the Dog");
button.position(400,125);

if(button.mousePressed(function(){
    foodS=foodS-1;
    gameState=1;
    database.ref('/').update({'gameState':gameState})
}))
}
var addFodd=createButton("Add Food");
addFood.postion(500,125);

if(addFood.mousePressed(function(){
    foodS=foodS+1;
    gameState=2;
    database.ref('/').update({'gameState': gameState})
}));
