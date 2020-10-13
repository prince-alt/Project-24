class paper {

constructor(){

var options = {

    'isStatic' : false,
    'friction' : 0.5,
    'restitution' : 0.3,
    'density' : 1.2

}

this.body = Bodies.circle(200,100,10,options);
Worldc.add(world,this.body);

}

display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill ("white");
    ellipse(0,0,20,20);
    pop();

}

}