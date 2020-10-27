var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  createCanvas(500, 500);
  dog.image = loadImage('images/dogImg.png')
  happyDog.image = loadImage('image/dogImg1.png')
}
function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dos = createSprite(250,250,10,10)
  foodStock=database.ref('Food');
  foodStock.on('value',readStock)
}
function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  drawSprites();
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x+1
  }
  database.ref('/').update({
Food:x
  })
}