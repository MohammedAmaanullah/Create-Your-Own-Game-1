class Blocks{
    constructor(x,y,width,height){
        var options = {
            friction : 0.1,
            density : 1.0
        }
        this.blocks = Bodies.rectangle(x,y,width,height,options);
        this.width = widht;
        this.height = height;
        World.add(world,this.blocks);
    }
    display(){
        var position = this.blocks.position;
        push();
        translate(position.x, position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}