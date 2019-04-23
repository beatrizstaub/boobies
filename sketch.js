function setup(){
createCanvas (1100, 600);
background(237, 29, 2);

img = loadImage('images/body.PNG');
img2 = loadImage ('images/hand1.PNG');
img3 = loadImage ('images/hand2.PNG');
img4 = loadImage ('images/boob1.PNG');
img5 = loadImage ('images/boob2.PNG');
img6 = loadImage ('images/rothand1.png');
img7 = loadImage ('images/rothand2.png');

}
//drawn in iPad
//images are all here

function draw(){

  background (237, 29, 2);

  image(img, 0, 0,1200, 800);
  (img, 50, 50, img.width/3, img.height/3);

  image(img4, 250, 30, 300, 300);
  (img4, 0, 0, img.width/3, img.height/3);

  image(img5, 600, 30, 300, 300);
  (img5, 0, 0, img.width/3, img.height/3);

  (img2, 0, 0, img.width/3, img.height/3);
  (img3, 0, 0, img.width/3, img.height/3);
  (img6, 0, 0, img.width/3, img.height/3);
  (img7, 0, 0, img.width/3, img.height/3);

  fill(198, 119, 53);
  ellipse(569, 590, 30, 40);

  if (mouseIsPressed) {
  
    image(img6, -250, -190, 750, 650);
    image(img7, 650, -190, 750, 650);
  
  }

  else{
    

    image(img2, 400, 15, 700, 400);
    image(img3, 0, 15, 700, 400);
  }

stroke(198, 119, 53);
}

//made by Beatriz Staub
//inspired by Adriana Degreas
