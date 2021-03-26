class Hero {
  constructor(x,y,r)
	{
		var options = { 
      density: 1, 
      frictionAir: 1
    };
		
		this.r=r;
		//this.image=loadImage("Images/Superhero-01.png");
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			rectMode(CENTER);
			rect( 0,0,this.r, this.r)
			pop()
			
	}
}
