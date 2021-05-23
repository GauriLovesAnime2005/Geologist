class Iron{
    constructor(x, y, width, height ){
        var options = {
            restitution:0.8,
            friction: 2,
            density: 2
        }
        
        this.body = Bodies.rectangle(x, y, 100, 50,options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
    }
    
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}
