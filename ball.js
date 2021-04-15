class Ball{
    constructor(x,y,radius){
        var options = {
            airFriction : 0.7
        }
        this.ball = Bodies.rectangle(x,y,radius,options);
        this.radius = radius;       
        World.add(world,this.ball);
    }
    display(){
        var position = this.ball.position;
        push();
        translate(position.x, position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}