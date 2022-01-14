class Polygon{
    constructor(x, y, largura, altura, angulo){
        this.X = x;
        this.Y = y;
        this.larg = largura;
        this.alt = altura;

        var options = {
            'restitution': 0.5,
            'friction': 1,
            'density': 1.3
        }
        this.body = Bodies.polygon(this.X, this.Y, this.alt, this.larg, options);
        this.image = loadImage('polygon.png');
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.larg, this.alt);
        pop();
    }
}