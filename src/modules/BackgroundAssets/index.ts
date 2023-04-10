import { BackgroundAssetPosition, BackgroundAssetSize } from './types';

export class BackgroundAsset {
    private ctx: CanvasRenderingContext2D;
    public position: BackgroundAssetPosition;
    public size: BackgroundAssetSize;
    public img: HTMLImageElement;

    constructor(
        ctx: CanvasRenderingContext2D,
        position: BackgroundAssetPosition,
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
}
