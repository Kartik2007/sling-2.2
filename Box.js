class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
    display() {
    
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      
    
      

  }
}
    score(){

    if(this.visibility<0 && this.visibility >-105){
    score++;
    }
  }
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    
  
    
    

    