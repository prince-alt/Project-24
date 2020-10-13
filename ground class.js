class ground {

constructor(){

var groundp = {

isStatic : true,

}

this.body = Bodies.rectangle(400,650,800,40,groundp);
this.width = 800;
this.height = 40;
Worldc.add(world,this.body);

}

display(){

var pos = this.body.position;

rectMode(CENTER);
fill("pink");
rect(pos.x,pos.y,this.width,this.height);


}


}