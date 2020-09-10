class Polygon {

    constructor(x, y, radius) {
      var options = {
        friction: 1,
        restitution: 1.0,
        isStatic: false
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;

      World.add(world, this.body);
    }

    display() {

          push();

         ellipse(this.body.position.x, this.body.position.y, this.radius);

         pop();
      }
    }