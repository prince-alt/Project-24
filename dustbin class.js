class dustbin {

    constructor () {

        var position = {
        
        'isStatic' : true,
        'friction' : 0.3
        
        }
        
        this.body1 = Bodies.rectangle(600,620,200,20,position);
        
        this.body2 = Bodies.rectangle(706,580,20,100,position);
        
        this.body3 = Bodies.rectangle(494,580,20,200,position);
        
        this.body1.width = 200;
        this.body1.height = 20;
        
        this.body2.width = 20;
        this.body2.height = 100;
        
        this.body3.width = 20;
        this.body3.height = 100;
        
        }
        
        display(){
        
            fill ("blue");
            stroke("blue");
            
         rect(600,620,this.body1.width,this.body1.height);
        
         rect(706,580,this.body2.width,this.body2.height);
        
         rect(494,580,this.body3.width,this.body3.height);
        
        }
 

}