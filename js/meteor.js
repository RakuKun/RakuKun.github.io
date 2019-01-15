export default class Meteor {

    constructor(ctx, cvs, isUpper) {
        this.ctx = ctx
        this.cvs = cvs;
        //#region Customizable 
        this.angle = Math.PI * 3 / 4;
        let speed = 3 + Math.random() * 3;
        this.length = Math.random() * 70 + 100;
        this.radius = 3 + Math.random() * 2;
        this.x = Math.random() * this.cvs.width * 3 / 4 + this.cvs.width * 1 / 2;
        this.y = Math.random() * -100;
        //#endregion
        this.isUpper = isUpper;
        this.init();
        this.vx = speed * Math.cos(this.angle);
        this.vy = speed * Math.sin(this.angle);
    }

    init() {
        if (this.isUpper) {
            this.x = Math.random() * this.cvs.width * 3 / 4 + this.cvs.width * 1 / 4;
            this.y = Math.random() * -50;
        } else {
            this.x = Math.random() * 10 + this.cvs.width;
            this.y = Math.random() * -200 + Math.random() * this.cvs.height * 1 / 2;
        }
    }

    flow() {
        let minX = Math.abs(this.length * Math.cos(this.angle));
        let minY = Math.abs(this.length * Math.sin(this.angle)) + this.cvs.height;
        if (this.x < -minX || this.y > minY) {
            return false
        }
        this.x += this.vx
        this.y += this.vy
        return true
    }

    draw() {
        let ctx = this.ctx,
            gra = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.length)
        gra.addColorStop(0, 'rgba(11,16,19,1)')
        gra.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.fillStyle = gra
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, Math.PI / 4, 5 * Math.PI / 4)
        ctx.lineTo(this.x + this.length, this.y - this.length)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}