class    Drops {
    constructor(x,y)    {        
        this.image = loadImage("raindrop.png");
        this.body = Bodies.rectangle(x,y,15,15);
        this.w = 15;
        this.h = 15;     
        World.add(world,this.body);
      
    }
    display()  {
        var pos =this.body.position;
        imageMode(CENTER);        
        image(this.image,pos.x,pos.y, this.w, this.h);
        
       // rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
       
    }
}