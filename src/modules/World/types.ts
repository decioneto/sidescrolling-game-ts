export interface KeysMapping {
    up: {
        pressed: boolean;
    };
    right: {
        pressed: boolean;
    };
    left: {
        pressed: boolean;
    };
    down: {
        pressed: boolean;
    };
}

export interface WorldPosition {
    x: number;
    y: number;
}

export interface WorldSize {
    width: number;
    height: number;
}
