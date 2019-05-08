function Enemy(pos, offset, spc) {
    this.pos = pos + spc;
    this.y = scl + (rows * offset);
    this.counter = 0;
    this.c = 0;
}

Enemy.prototype.show = function () {
    stroke(0);
    fill(255, 0, this.c);
    rect(this.pos, this.y, scl, scl);
}

Enemy.prototype.move = function () {
    if (frameCount % 60 === 0) {
        if (this.counter < 3) {
            this.pos += scl;
            this.counter++;
        } else if (this.counter >= 3 && this.counter < 6) {
            this.pos -= scl;
            this.counter++;
        } else {
            this.counter = 0;
        }
    }
}

Enemy.prototype.hit = function() {
    score++;
}

Enemy.prototype.fire = function() {
    if (frameCount % 60 === 0) {
        let r = random();
        if (r <= 0.02) {
            enp.push(new En_Projectile(this.pos, this.y));
        }
    }
}