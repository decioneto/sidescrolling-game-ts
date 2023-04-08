import { World } from '../World';
import { PlayerPosition, PlayerSize, PlayerVelocity } from './types';

export class Player extends World {
    private ctx: CanvasRenderingContext2D;
    public position: PlayerPosition;
    public size: PlayerSize;
    public velocity: PlayerVelocity;
    private floor: number;

    constructor(ctx: CanvasRenderingContext2D, gravity: number, floor: number) {
        super();
        this.ctx = ctx;
        this.position = {
            x: 100,
            y: 100,
        };
        this.size = {
            width: 30,
            height: 30,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.gravity = gravity;
        this.floor = floor;
    }

    public draw() {
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }

    public update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (
            this.position.y + this.size.height + this.velocity.y <=
            this.floor
        ) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
