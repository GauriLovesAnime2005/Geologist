class Hammer{
    constructor(x, y){
        var options = {
            restitution:0.5,
            friction: 1.0,
            density: 2
        }
        
        this.body = Bodies.rectangle(x, y, 100, 50,options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(4);
        stroke("white");
        rect(0,0, this.width, this.height);
        pop();
    }
}