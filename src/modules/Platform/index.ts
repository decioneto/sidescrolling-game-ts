import { Player } from '../Player';
import { PlatformPosition, PlatformSize } from './types';

export class Platform {
    private ctx: CanvasRenderingContext2D;
    public position: PlatformPosition;
    public size: PlatformSize;

    constructor(ctx: CanvasRenderingContext2D, position: PlatformPosition) {
        this.ctx = ctx;
        this.position = position;
        this.size = {
            width: 200,
            height: 20,
        };
    }

    public draw() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
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
