const SCREEN_WIDTH = 465;
const SPRITE_SIZE = 40;
const STAGE_HEIGHT = 770;

export const getRandomX = () => {
    const min = SPRITE_SIZE / 2;
    const max = SCREEN_WIDTH - SPRITE_SIZE / 2;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomY = () => {
    const min = SPRITE_SIZE / 2;
    const max = STAGE_HEIGHT - SPRITE_SIZE / 2;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

export const getLeftFromX = (x, stageWidth, spriteSize) => {
    const raw = stageWidth / 2 + x - spriteSize / 2;
    return clamp(raw, 0, stageWidth - spriteSize);
};
export const getTopFromY = (y, stageHeight, spriteSize) => {
    const raw = stageHeight / 2 + y - spriteSize / 2;
    return clamp(raw, 0, stageHeight - spriteSize);
};
