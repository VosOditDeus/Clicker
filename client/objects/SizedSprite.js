export default class SizedSprite extends Phaser.Sprite {
    constructor(game, x, y, frame, size, group) {
        super(game, x, y, frame, group);
        this.width = size;
        this.height = size;
    }
}
