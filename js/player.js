class Player {
    constructor (ctx) {
        this.ctx = ctx;
        
        // Player Parameters
        this.radius = 20;
        this.position = {
            x: CANVAS_HEIGHT / 2,
            y: CANVAS_WIDTH / 2
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.color = '#4fc3f7';
        this.isShooting = false;
        // Others
        // this.setListener();
    }

    // setListener() {
    //     document.onkeydown = event => this.getInput(event.key, true);
    //     document.onkeyup = event => this.getInput(event.key, false);
    // }

    playerController() {
        
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI *2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}