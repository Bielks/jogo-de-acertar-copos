class Slingshot {
    constructor(corpoA, pontoB, rigidez, comp) {
        this.A = corpoA;
        this.B = pontoB;
        this.rig = rigidez;
        this.comp = comp;
        var options = {
            bodyA: this.A,
            pointB: this.B,
            stiffness: this.rig,
            length: this.comp,
            'stiffness': 0.05
        }
        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);
    }
    fly() {
        this.estilingue.bodyA = null;
    }
    display() {
        if(this.estilingue.bodyA != null) {
            push();
            strokeWeight(3);
            stroke('red');
            if(this.A.position.x < 170) {
                line(this.A.position.x, this.A.position.y, this.B.x, this.B.y);
            } 
           pop();
        }
    }
}