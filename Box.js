class Block{
    constructor(x, y) {

        var options = {
           
            restitution: 0.4,
            friction: 0.005
           
        }

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
        this.image = loadImage("pls work.png");

    }

    score(){
        if(this.Visiblity < 0 && this.Visiblity > -105){
          score++;
        }
    }

    display(){

        if(this.body.speed<3){
            var pos = this.body.position;
            var angle =this.body.angle
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            image(this.image,0, 0, 30, 40);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 30, 40);
            pop();
          }

    }

}