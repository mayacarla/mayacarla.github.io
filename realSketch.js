function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

  function draw() {
    background(0,0, 0);

   if ((mouseX <= 200) && (mouseY <= 200)) {
      noStroke();
      fill(0, 0, 0);
      rect(0, 0, 200, 200);   // Upper-left
      fill(98, 98, 96);
      textSize(35);
      textStyle(BOLDITALIC);
      textFont('Georgia');
      text("I am", 60, 90);
      text("not", 70, 140 );
   }
   else if ((mouseX <= 200) && (mouseY > 200)) {
      noStroke();
      fill(0, 0, 0);
      rect(1, 200, 200, 200);  // Lower-left; real
      textSize(35);
      textStyle(BOLDITALIC);
      textFont('Georgia');
      fill(79, 78, 77);
      text("real", 60, 314);
   }

   else if ((mouseX > 200) && (mouseY <= 200)) {
      noStroke();
      fill(0,0,0);
      rect(200, 200, 200, 200); // Lower-right; here
      textSize(35);
      textStyle(BOLDITALIC);
      textFont('Georgia');
      fill(54, 53, 52);
      text("here", 260, 323);
   }

   else {
    fill(241, 237, 234);
    rect(200, 0, 200, 200); // Lower-right
    noStroke();
    fill(26, 33, 51);
    noStroke();
     ellipse(270, 97, 55, 100); //eye left
     ellipse(350, 97, 55, 100); // eye right
     fill(244, 244, 244);
     ellipse(270, 113, 20, 20);
     ellipse(350, 113, 20, 20);


  //eyebrow
    stroke(26, 33, 51);
    strokeWeight(4);
    noFill();
    arc(270, 70, 70, 80, 35, 100);
    arc(350, 70, 70, 80, 35, 100);
    noStroke();

   }

} // end of sketch
