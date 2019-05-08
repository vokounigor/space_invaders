function Projectile(pos, y) {
    this.pos = pos;
    this.y = y || height - scl;
    this.bulletSpeed = 10;
}

Projectile.prototype.update = function () {
    if (!this.isOffScreen()) {
        this.y -= this.bulletSpeed;
    }
}

Projectile.prototype.show = function () {
    stroke(0);
    fill(255);
    rect(this.pos + 10, this.y - scl, 10, scl / 2);
}

Projectile.prototype.isOffScreen = function () {
    return (this.y < -10);
}

Projectile.prototype.stop = function () {
    this.bulletSpeed = 0;
}