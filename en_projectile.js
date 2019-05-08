function En_Projectile(pos, y) {
    this.pos = pos;
    this.y = y;
    this.bulletSpeed = 10;
}

En_Projectile.prototype.show = function() {
    stroke(0);
    fill(255,0,0);
    rect(this.pos + 10, this.y - scl, 10, scl/2);
}

En_Projectile.prototype.update = function() {
    if (!this.isOffScreen()) {
        this.y += this.bulletSpeed;
    }
}

En_Projectile.prototype.isOffScreen = function() {
    return (this.y > height + 10);
}

En_Projectile.prototype.stop = function() {
    this.bulletSpeed = 0;
}