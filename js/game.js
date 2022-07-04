class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.intervalId = null;

        // Player
        this.player = new Player(this.ctx);
        this.projectiles = [];
        this.enemies = []
        
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.collisionCheck();
        }, 1000 / 60)
        this.spawnEnemies();
    }

    draw() {
        this.enemies.forEach(enemy  => enemy.draw());
        this.projectiles.forEach(projectile  => projectile.draw());
        this.player.draw();
    }

    move() {
        this.projectileShoot();
        this.enemies.forEach(enemy  => enemy.move());
        this.projectiles.forEach(projectile => projectile.move());
    }

    projectileShoot() {
        if(!this.player.isShooting) {
            this.player.isShooting = true;
            canvas.addEventListener('click', (event) => {
                const angle = Math.atan2(event.offsetY - CANVAS_WIDTH / 2, event.offsetX - CANVAS_HEIGHT / 2);
                const velocity = {x: Math.cos(angle)*2,y: Math.sin(angle)*2};
                this.projectiles.push(new Projectile(this.ctx, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, velocity));
            })
            setTimeout(() => {
                this.player.isShooting = false;
            }, 5000);
        }
    }

    spawnEnemies() {

        let posX = 10;
        let posY = 100;
        
        this.intervalId = setInterval(() => {
            const angle = Math.atan2(this.player.position.x / 2, this.player.position.y / 2);
            const velocity = {x: Math.cos(angle), y: Math.sin(angle)};
            this.enemies.push(new Enemy(this.ctx, posX, posY, velocity))
        }, 5000)
    }


    collisionCheck() {
        
    }

    clear() {        
        // Clear Projectiles
        this.projectiles = this.projectiles.filter(projectile => projectile.isVisible(this.player));
        // Clear Canvas
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        
    }
}