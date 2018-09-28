export default class Paint {
    constructor(obj) {
        this.image = new Image();
        this.image.src = "./images/paint1.png";
        this.width = 100;
        this.height = 120;
        this.X = 480;
        this.Y = 200;
        this.falling = false;
    }

    dropPaint() {
        this.falling = true;
    }

    draw(ctx) {
        if (this.falling) {
            if (this.Y < 340) {
                this.Y += 10;
            }
        }

        if (this.Y === 340) {
            this.falling = false;
            this.image.src = './images/paint2.png';
            this.width = 130;
            this.height = 45;
            this.X = 450;
            this.Y += 45;
        }
        ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
    }
}
