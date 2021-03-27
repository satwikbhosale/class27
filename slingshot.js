class Slingshot{
    constructor(bodyA,bodyB){
        var Option={
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB
        }

        this.slingshot=Matter.Constraint.create(Option)
        World.add(world, this.slingshot);

    }
    display(){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.slingshot.bodyB.position
        strokeWeight(5)
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
