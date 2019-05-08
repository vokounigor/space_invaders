function Ship() {
    this.pos = cols * (scl / 2);
    this.pos = constrain(this.pos, 0, width - scl);
    this.y = rows + scl*(rows - 1);
    this.c = 255;
}

Ship.prototype.show = function () {
    stroke(0);
    fill(this.c);
    rect(this.pos, height - 2 * scl, scl, scl);
}

Ship.prototype.move = function (vec) {
    let check = this.pos + vec;
    check = constrain(check, 0, width - scl);
    this.pos = check;
}

Ship.prototype.hit = function () {
    if (life >= 1) {
        life--;
    }
}