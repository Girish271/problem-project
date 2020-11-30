class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.Bottombody = Bodies.rectangle(x,y,width,height,options);
        this.leftbody=Bodies.rectangle(x,y,width,height,options);
        this.Rightbody=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.Bottombody);
        World.add(world,this.leftbody);
        World.add(world,this.Rightbody);
    }
    display(){
        var posBottom=this.Bottombody.position;
        var posRight=this.Rightbody.position;
        var posLeft=this.leftbody.position;
        push()
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height);
        pop();
        push()
        translate(posRight.x,posRight.y)
        rectMode(CENTER)
        rect(300,300,20,10);
        pop();
        push()
        translate(posLeft.x,posLeft.y)
        rectMode(CENTER)
        rect(200,200,20,10);
        pop();

    }

}