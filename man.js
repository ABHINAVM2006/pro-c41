class Man   {
    constructor(x, y)    {
        var options = {
            isStatic:true
        }
        this.image = loadImage("man.png");
        this.body = Bodies.circle(x, y,50,  options);
        this.radius = 100;
        
        World.add(world, this.body);

    }
    display()   {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);

    }
}