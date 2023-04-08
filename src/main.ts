import { Platform } from './modules/Platform';
import { Player } from './modules/Player';
import { World } from './modules/World';

const canvas = document.querySelector('canvas')!;
const ctx = canvas?.getContext('2d')!;

canvas.width = innerWidth;
canvas.height = innerHeight;

const world = new World();
const player = new Player(ctx, world.gravity, canvas.height);
const platforms = [
    new Platform(ctx, { x: 200, y: 850 }),
    new Platform(ctx, { x: 500, y: 800 }),
];

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach((platform) => {
        platform.draw();
    });

    if (world.keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if (world.keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        if (world.keys.right.pressed) {
            platforms.forEach((platform) => {
                platform.position.x -= 5;
            });
        } else if (world.keys.left.pressed) {
            platforms.forEach((platform) => {
                platform.position.x += 5;
            });
        }
    }

    platforms.forEach((platform) => {
        platform.platformColision(player);
    });
}

animate();

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left');
            world.keys.left.pressed = true;
            break;
        case 68:
            console.log('right');
            world.keys.right.pressed = true;
            break;
        case 83:
            console.log('down');
            break;
        case 87:
            console.log('up');
            player.velocity.y -= 20;
            break;
    }
});

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left');
            world.keys.left.pressed = false;
            break;
        case 68:
            console.log('right');
            world.keys.right.pressed = false;
            break;
        case 83:
            console.log('down');
            break;
        case 87:
            console.log('up');
            break;
    }
});
