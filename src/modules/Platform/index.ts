import { Player } from '../Player';
import { PlatformPosition, PlatformSize } from './types';

export class Platform {
    private ctx: CanvasRenderingContext2D;
    public position: PlatformPosition;
    public size: PlatformSize;
    public img: HTMLImageElement;

    constructor(
        ctx: CanvasRenderingContext2D,
        position: PlatformPosition,
        image: HTMLImageElement
    ) {
        this.ctx = ctx;
        this.position = position;
        this.img = image;
        this.size = {
            width: this.img.width,
            height: this.img.height,
        };
    }

    public draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y);
    }

    public platformColision(player: Player) {
        const colisionY =
            player.position.y + player.size.height <= this.position.y &&
            player.position.y + player.size.height + player.velocity.y >=
                this.position.y;
        const colisionX =
            player.position.x + player.size.width >= this.position.x &&
            player.position.x <= this.position.x + this.size.width;

        if (colisionY && colisionX) {
            player.velocity.y = 0;
        }
    }
}
