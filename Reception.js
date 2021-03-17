class Reception extends BaseClass {
    constructor(x, y){
      super(x,y,400,400);
      this.image = loadImage("pics/reception.png");
      this.Visiblity = 155;
    }
  
   display(){
     console.log(this.body.speed);
    imageMode(CENTER);
     
     if(frameCount > 1000 && frameCount < 1100){
        push();
        this.Visiblity = this.Visiblity + 1;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y,  windowWidth,windowHeight * 0.83);
      pop();
     }
     else if(frameCount > 1090 && frameCount < 1190){
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 1;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y,  windowWidth,windowHeight * 0.83);
       pop();
     }

     else{

        World.remove(world, this.body);
       push();
     
       tint(255,0);
       image(this.image, this.body.position.x, this.body.position.y,  windowWidth,windowHeight * 0.83);
       pop();
     }
     
   }
  
  
  
  };