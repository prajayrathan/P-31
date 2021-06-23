class Particle{
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          friction: 0,
          density:1

      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      
      fill(this.color)
      imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
      pop();
    }
  };