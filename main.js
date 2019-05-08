let scl = 30;
let cols, rows;
let ship;
let p = [];
let enm = [];
let enp = [];
let score = 0;
let life = 2;

function setup() {
    createCanvas(600, 600);
    cols = width / scl;
    rows = height / scl;
    ship = new Ship();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            enm.push(new Enemy(j * (2 * scl), i * 3, 60));
        }
    }
}

function draw() {
    background(51);

    // Lose condition
    if (life === 0) {
        fill(255);
        textSize(80);
        text("Game Over", 75, height/2);
        textSize(24);
        text("Reload the page to try again", width/5, height/2 + 40);
        noLoop();
    }
    // Win condition
    if (enm.length === 0) {
        fill(255);
        textSize(80);
        text("You Win!", width/6 + 30, height/2);
        textSize(24);
        text("Reload the page to play again", width/5, height/2 + 40);
        noLoop();
    }

    fill(255);
    textSize(15);
    text("Score: " + score, width - 80, 20);
    text("Life: " + life, 10, 20);
    // For the ship
    ship.show();
    // For player's projectiles
    p.forEach(pr => {
        for (let i = 0; i < enm.length; i++) {
            if (collisionCheck(enm[i], pr)) {
                pr.stop();
                p.splice(p.indexOf(pr), 1);
                enm[i].hit();
                enm.splice(enm.indexOf(enm[i]),1);
            }
        }
        if (pr.isOffScreen()) {
            p.splice(p.indexOf(pr), 1);
        }
        pr.update();
        pr.show();
    });
    // For enemies
    enm.forEach(e => { 
        e.move();
        e.fire();
        e.show();
    });
    // For enemy projectiles
    enp.forEach(pr => {
        if (collisionCheck(ship, pr)) {
            ship.hit();
            pr.stop();
            enp.splice(enp.indexOf(pr),1);
        }

        if (pr.isOffScreen()){
            enp.splice(enp.indexOf(pr),1);
        }
        pr.update();
        pr.show();
    });
}

// Key code 32 is space bar
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        ship.move(-scl);
    } else if (keyCode === RIGHT_ARROW) {
        ship.move(scl);
    } else if (keyCode === 32) {
        p.push(new Projectile(ship.pos));
    }
}

function collisionCheck(body, projectile) {
    if (abs(body.y - projectile.y) <= scl && (body.pos - projectile.pos) === 0) {
        return true;
    } else {
        return false;
    }
}