class Ghost {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		
		this.r=r;
		this.image=loadImage("PlaceholderImages/Enemies/BooPlaceholder2.png");
		this.body=Bodies.circle(x,y,r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
