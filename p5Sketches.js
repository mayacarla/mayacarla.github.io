
var sketchZoom = function(p) {


  p.setup = function() {
    p.createCanvas(450, 600);
    p.noStroke();
  };

  p.draw = function(){

    p.background(255, 255, 255);
    p.textSize(286);
    p.textStyle(p.BOLD);
    p.textFont("Arial");


    p.fill(191, 126, 4);
    p.text("ZO", 46, 252);
    p.textSize(286);
    p.text("OM", 1, 490);


    p.x = p.mouseX;
    p.y = p.mouseY;
    p.ix = p.width - p.mouseX;  // Inverse X
    p.iy = p.height - p.mouseY; // Inverse Y

    //same
    p.fill(0, 8, 255, 180);

    p.ellipse(p.x, p.height/2, p.y, p.y);
    p.fill(252, 163, 255, 180);

    p.ellipse(p.ix, p.height/2, p.iy, p.iy);

    if(p.mouseY > p.mouseX){
       p.textSize(125);
       p.text("IN", 46, 600);

      }

    if (p.mouseX > p.mouseY){
      p.textSize(120);
      //same
      p.fill(0, 8, 255, 180);
      p.text("OUT", 10, 595);
    }

  };

};

//Shift SKETCH
var sketchShift = function(p) {

  p.shapes = [];
  p.numberOfShapes = 6000;
  p.mouseThreshold = 50;
  p.moveDistance = 150;

class Shape {
  constructor() {
    // each shape has a random x position
    this.x = p.random(0, p.windowWidth);
    // random y position
    this.y = p.random(0, p.windowHeight);
    // random size between two values
    this.radius = p.random(5, 25);
    // random color
    this.color = p.color(p.random(0, 255), p.random(0, 255), p.random(0, 255));
  }

  //moves a shape away from mouse
  updateShape() {
    p.mouseDistance = p.int(p.dist(this.x, this.y, p.mouseX, p.mouseY));
    if (p.mouseDistance <= p.mouseThreshold) {
      // shape; new x position
      this.x += p.random(-p.moveDistance, p.moveDistance);
      // new y position
      this.y += p.random(-p.moveDistance, p.moveDistance);
    }
  }


  //draws each shape
  drawShape() {
    p.fill(this.color);
    p.ellipse(this.x, this.y, this.radius, this.radius);
   }
 }


  p.setup = function() {
      p.createCanvas(450, 600);
      p.noStroke();

    // creates shapes
     for (let i = 0; i < p.numberOfShapes; i++) {
       p.shapes.push(new Shape());
     }
  };

  p.draw = function(){
    p.background(191, 126, 4);
    p.shiftText();
    p.keyPressed();
  };

  p.shiftText = function(){
    p.textSize(130);
    p.textFont("Arial");
    p.textStyle(p.BOLD);

    p.noStroke();
    p.fill(182, 82, 30);
    p.push();
    p.translate(268, 90);
    p.rotate(15);
    p.text("S", 5, 70);
    p.pop();
    p.text("H", 285, 230);
    p.text("I", 345, 345);
    p.text("F", 350, 460);
    p.text("T", 350, 575);

    // figure guy 1
    p.stroke('black');
    p.strokeWeight(2);
    p.ellipse(217,455, 30, 30);
    p.strokeWeight(5);
    p.text("I", 200, 575);

    p.strokeWeight(3);
    p.line(239, 506, 339, 424);
    p.line(236, 490, 352, 393);

    p.strokeWeight(2);
    p.ellipse(246, 575, 20, 10);

    // figure guy 2
    p.stroke('black');
    p.strokeWeight(2);
    p.ellipse(88, 334, 30, 30);
    p.strokeWeight(5);
    p.text("I", 90, 459);

    p.strokeWeight(3);
    p.line(239, 506, 339, 424);
    p.line(236, 490, 352, 393);

    p.strokeWeight(2);
    p.ellipse(140, 459, 20, 10);

    //explaination mark
    p.line(36, 289, 55, 308);
    p.noStroke();
    p.fill('black');
    p.ellipse(59, 313, 5, 5);
  };

  p.keyPressed = function(){
    if (p.keyCode === p.SHIFT) {
      //SHIFT text disappers
    p.fill(191, 126, 4);
    p.push();
    p.translate(268, 90);
    p.rotate(15);
    p.text("S", 5, 70);
    p.pop();
    p.text("H", 285, 230);
    p.text("I", 345, 345);
    p.text("F", 350, 460);
    p.text("T", 350, 575);

    // figure guy 1
    p.noStroke();
    p.fill(191, 126, 4);
    p.rect(13, 274, 400, 400);

        for (let i = 0; i < p.shapes.length; i++) {
       p.shapes[i].updateShape();
       p.shapes[i].drawShape();
     }
       p.ellipse(p.mouseX, p.mouseY, 50, 50);

  }
};

}; // end of sketchArrow function

//Arrow SKETCH
var sketchArrow = function(p){

  p.stars = [];
  p.shootingStar;
  p.tail;
  p.body;
  p.body1;
  p.body2;
  p.body3;
  p.head;



  p.setup = function(){
    p.createCanvas(450, 600);
    p.tail = 26;
    p.body = 37;
    p.body1 = 55;
    p.body2 = 73;
    p.body3 = 90;
    p.head = 100;


    p.shootingStar = new p.ShootingStar();

  // making multiple shooting stars
   for (var i = 0; i < 50; i++) {
      p.stars.push(new p.ShootingStar());
  }

}; // end of setup

  p.draw = function(){
  //night sky
    p.background(0,26,51);






  if (p.keyIsDown(p.DOWN_ARROW)) {


  //random positioning of stars
    for (var i = 0; i < 10; i++) {
     var x = p.random(p.windowWidth);
     var y = p.random(p.windowHeight);
     p.noStroke();
     p.fill(255, 255, 0);
     p.ellipse(x, y, 3, 3);
     p.frameRate(10);
      }

    // shootingStar.draw();
  for (var i = 0; i < 3; i++) {
    p.stars[i].draw();
    p.frameRate(10);
}


  }



  // moon
    p.fill(191, 126, 4);
    p.noStroke();
    p.ellipse(309,175,200,200);

  // hill behind mountain
    p.fill(3, 64, 7);
	p.ellipse(50, 580, 1000, 200);

  // title: ARROW as tree
    p.textFont("Arial");
    p.textStyle(p.BOLD);
    p.textSize(40);
    p.fill(51, 112, 166);
    p.text("O W", 49, 496);
    p.text("RR", 60, 455);
    p.text("A", 75, 415);

  // tree stump
    p.textSize(20);
    p.fill(61, 43, 39);
    p.text("I", 83, 515);
    p.text("I", 86, 515);
    p.text("I", 89, 515);

  // mountain
    p.fill(112, 125, 145);
    p.noStroke();
    p.triangle(100, 600, 700, 600, 400, 350);


  // hill infront of mountain
    p.fill(1, 71, 9);
    p.ellipse(440, 600, 1000, 150);


 if (p.keyIsDown(p.UP_ARROW)) {

      //makes text disapear
      p.fill(0,26,51);
      p.noStroke();
      p.square(175, 16, 50);
      p.square(220, 16, 50);
      p.square(242, 16, 50);

          //bug animation
  //tail
    p.fill(243, 221, 41);
    p.noStroke();
    p.ellipse(p.tail,540,10, 10);
    p.tail = p.tail + 1;
  //body
    p.fill(116, 203, 63);
    p.noStroke();
    p.ellipse(p.body, 543,25,25);
    p.body = p.body + 1;
  //body1
    p.fill(37,186, 48);
    p.noStroke();
    p.ellipse(p.body1, 543, 25,25);
    p.body1 = p.body1 + 1;
  //body2
    p.fill(40, 157, 106);
    p.noStroke();
    p.ellipse(p.body2, 540, 25,25);
    p.body2 = p.body2 + 1;
  // body3
    p.fill(42, 113, 60);
    p.noStroke();
    p.ellipse(p.body3, 539, 25,25);
    p.body3 = p.body3 + 1;
  //head
    p.fill(191, 65, 36);
    p.noStroke();
    p.ellipse(p.head, 530, 25,25);
    p.head = p.head + 1;

  }
}; // end of draw funct.


// source: [https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b] as ref
 p.ShootingStar = function(){
  this.x = p.random(p.windowWidth);
  this.y = p.random(p.windowHeight);
  this.w = 6;
  this.h = 4;

};

  p.ShootingStar.prototype.draw = function() {
  p.noStroke();
  p.fill(255, 255, 0);

  p.ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.5;
  }
  this.w += 7;
  this.x += 5;

};



};// end of arrow sketch

// Clear Sketch
var sketchClear = function(p){


  p.colors = [];

  p.setup = function() {
    p.createCanvas(450, 600);
    p.background(227, 236, 252);

    p.fill(178, 205, 248); // text color
    p.textSize(85);
    p.textFont("Arial");
    p.text("ANY", 40, 255);
    p.text("WHERE", 130, 471);

  // click text
    p.textStyle(p.BOLD);
    p.textSize(180);
    p.text("C", 5, 394);
    p.text("L", 130, 394);
    p.text("K", 310, 394);
    p.textSize(78);
    p.text("I", 270, 325);
    p.text("C", 250, 394);


  // details for rectangles
    p.noStroke();
    p.fill(191, 126, 4, 102);// changes rec opacity during click

  }; // end of setup


  p.draw = function(){

  };

  p.mousePressed = function(){
  p.shuffle(p.colors, true);
  p.rect(p.mouseX, p.mouseY, 80, 80);
};


}; // end of cleared sketch





var myp5Zoom = new p5(sketchZoom);
var myp5Clear = new p5(sketchClear);
var myp5Shift = new p5(sketchShift);
var myp5Arrow = new p5(sketchArrow);
