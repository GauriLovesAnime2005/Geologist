class Sand{
    constructor(x, y, height, angle){
        var options = {
            restitution:0.8,
            friction: 1.5,
            density: 1.5
        }
        
        this.body = Bodies.rectangle(x, y, 100, height,options);
        Matter.Body.setAngle(this.body, angle);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        strokeWeight(4);
        stroke("green");
        rect(0,0, this.width, this.height);
        pop();
    }
}