import { KeysMapping } from './types';

export class World {
    constructor() {}
    public gravity = 1.5;
    public keys: KeysMapping = {
        up: {
            pressed: false,
        },
        right: {
            pressed: false,
        },
        left: {
            pressed: false,
        },
        down: {
            pressed: false,
        },
    };
}
