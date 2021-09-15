
//Containers for dots
ArrayList<Dot> dots = new ArrayList<Dot>();
ArrayList<Dot> deleter =  new ArrayList<Dot>(); 

void setup(){
  size(1280,720);
  fill(0);
  rect(0,0,width,height);
}

void draw(){
  fill(0,20);
  stroke(50,50);
  rect(0,0,width,height);
  
  float fireRate = .5;
  float dotSize = 15;
  float speed = 10;
  
  color pixel = #ffa800;
  color web = #3fd1b1;
  color game = #da2c49;
  
  color [] colors = new color[3];
  colors[0] = pixel;
  colors[1] = web;
  colors[2] = game;
  
  //Going Right
  if(random(1) < fireRate){
    dots.add(new Dot(0, random(height-dotSize), dotSize , speed,0,colors[floor(random(3))]));
  }
  //Going left
  //if(random(1) < fireRate){
  //  dots.add(new Dot(width, random(height-dotSize), dotSize , -speed,0,colors[floor(random(3))]));
  //}
  
  ////Going Down
  //if(random(1) < fireRate){
  //  dots.add(new Dot(random(width-dotSize), 0, dotSize , 0,speed,colors[floor(random(3))]));
  //}
  //Goin Up
  //if(random(1) < fireRate){
  //  dots.add(new Dot(random(width-dotSize), height, dotSize , 0,-speed,colors[floor(random(3))]));
  //}
  
  for(Dot d: dots){
    d.render();
    if(d.xPos-d.size > width || d.xPos < 0 || d.yPos+d.size < 0 || d.yPos > height+d.size*2 ){
      deleter.add(d);
    }
  }
  
  for(Dot d: deleter){
    int deleteIndex = dots.indexOf(d);
    if(deleteIndex > -1){
      dots.remove(deleteIndex);
    }
  }
  
  deleter.clear();
  
  println(dots.size());
  
}


class Dot{
  float xPos, yPos, size;
  float xSpeed, ySpeed;
  color c;
  
  Dot(float x,float y,float s, float spx, float spy, color clr){
    xPos = x;
    yPos = y;
    size = s;
    xSpeed = spx;
    ySpeed = spy;
    c = clr;
  }
  
  void render(){
    fill(c);
    stroke(c);
    rect(xPos,yPos,size,size);
    yPos+=ySpeed;
    xPos+=xSpeed;
    checkDirection();
  }
  
  void checkDirection(){
    // Get midpoint of dot
    // check distance from mouse
    // change color
    float myXPos =  xPos+size/2;
    float myYPos =  yPos+size/2;
    
    
    boolean inXBounds = false;
    boolean inYBounds = false;
    if(abs(myXPos-mouseX) <= size){
      inXBounds =true;
    }
    if(abs(myYPos-mouseY) <= size){
      inYBounds =true;
    }
    
    if(inXBounds && inYBounds){
      xSpeed = random(-5,5);
      ySpeed = random(-5,5);
      c = #2CFF7A;

    }
    
   
  }

}
