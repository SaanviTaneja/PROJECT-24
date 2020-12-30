class Dustbin {
    constructor(x, y, height, angle) {
      var options = {
          'isStatic':false,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rect(200,100);
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
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };