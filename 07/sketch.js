function setup() {
  
//02.color change, appears different pattern

createCanvas(1000, 1000);
background(300);//
  noFill(0);
  stroke(0);   
  
    for (i=0; i<500; i=i+4) {
      
      stroke(200);//
      //shadow
      rect(130+i/3-10,250+i-20 ,100 ,70)
      rect(470+i/-3-10,250+i-20 ,100 ,70)
      rect(480+i/3-10,250+i-20 ,100 ,70)
      rect(820+i/-3-10,250+i-20 ,100 ,70)


      stroke(0);//
      //front
      rect(100+i/3-10,230+i-20 ,100 ,70)
      rect(440+i/-3-10,230+i-20 ,100 ,70)
      rect(450+i/3-10,230+i-20 ,100 ,70)
      rect(790+i/-3-10,230+i-20 ,100 ,70)
    }

}






function mousePressed() {
  saveCanvas("p5-sketche-07","png")
}