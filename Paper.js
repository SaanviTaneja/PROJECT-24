class Paper {
    constructor(x, y, height, angle) {
      var options = {
        
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(200,100,PI/2);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };