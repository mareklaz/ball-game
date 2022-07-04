class Projectile {
    constructor(ctx, positionX, positionY, velocity) {
        this.ctx = ctx;
        this.radius = 5;
        this.position = {
            x: positionX,
            y: positionY
        }
        this.velocity = velocity;
        this.velocityN = 5;
        this.color = '#4fc3f7';
    }

    move() {
        this.position.x = this.position.x + this.velocity.x;
        this.position.y = this.position.y + this.velocity.y;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI *2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    isVisible(player) {
        // const distance = 200
        // const visibleX = this.position.x >= player.position.x - distance && this.position.x <= player.position.x + distance;
        // const visibleY = this.position.y >= player.position.y - distance && this.position.y <= player.position.x + distance;
        const visibleX = this.position.x >= LIMIT_LEFT && this.position.x <= LIMIT_RIGHT;
        const visibleY = this.position.y >= LIMIT_TOP && this.position.y <= LIMIT_BOTTOM;
        return visibleX && visibleY
    }

}