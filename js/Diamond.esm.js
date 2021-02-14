import { GAME_BOARD_X_OFFSET, GAME_BOARD_Y_OFFSET } from './gameLevels.esm.js';
import { Sprite } from './Sprite.esm.js';


const DIAMOND_ORGINAL_SIZE = 32;
const NUMBER_OF_DIAMONDS_TYPES = 6;

export const DIAMOND_SIZE = 48;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORGINAL_SIZE;



export class Diamond extends Sprite {
    constructor(x, y, row, column, kind, diamondSpriteImage) {
        const offset = {
            x: GAME_BOARD_X_OFFSET,
            y: GAME_BOARD_Y_OFFSET,
        }
        
        super(
            x,
            y,
            DIAMOND_ORGINAL_SIZE,
            DIAMOND_ORGINAL_SIZE,
            diamondSpriteImage,
            NUMBER_OF_DIAMONDS_TYPES,
            offset);


        this.column = column;
        this.kind = kind;
        this.row = row;
        this.match = 0;
    }

    draw() {
        super.draw(this.kind, DIAMOND_ZOOM)
    }
}