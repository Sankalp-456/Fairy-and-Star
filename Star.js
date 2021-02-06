class Star{
    constructor(x, y){
        var options ={
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("images/star.png");
        World.add(world, this.body);

    }
    display(){
        
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}