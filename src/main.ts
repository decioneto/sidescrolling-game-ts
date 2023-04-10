import { BackgroundAsset } from './modules/BackgroundAssets';
import { Platform } from './modules/Platform';
import { Player } from './modules/Player';
import { World } from './modules/World';
import PlatformAsset from '../public/assets/images/platform.png';
import Background from '../public/assets/images/background.png';

const canvas = document.querySelector('canvas')!;
const ctx = canvas?.getContext('2d')!;

canvas.width = 1024;
canvas.height = 576;

function createImage(image: string) {
    const imageElement = new Image();
    imageElement.src = image;

    return imageElement;
}

const world = new World();
const backgroundAssets = [
    new BackgroundAsset(ctx, { x: 0, y: 0 }, createImage(Background)),
];
const player = new Player(ctx, world.gravity, canvas.height);
const platforms = [
    new Platform(ctx, { x: -1, y: 490 }, createImage(PlatformAsset)),
    new Platform(ctx, { x: 650, y: 400 }, createImage(PlatformAsset)),
];

let scrollOffset = 0;

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'slategrey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    backgroundAssets.forEach((backgroundAsset) => {
        backgroundAsset.draw();
    });
    platforms.forEach((platform) => {
        platform.draw();
    });

    player.update();

    if (world.keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if (world.keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        if (world.keys.right.pressed) {
            scrollOffset += 5;
            platforms.forEach((platform) => {
                platform.position.x -= 5;
            });
        } else if (world.keys.left.pressed) {
            scrollOffset -= 5;
            platforms.forEach((platform) => {
                platform.position.x += 5;
            });
        }
    }

    platforms.forEach((platform) => {
        platform.platformColision(player);

        if (scrollOffset === 2000) {
            alert('You won!');
            return;
        }
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
