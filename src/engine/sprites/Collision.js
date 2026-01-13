import { spriteManager } from "./SpriteManager";
export const checkCollision = (a, b, size = 40) => {
  return (
    Math.abs(a.x - b.x) < size &&
    Math.abs(a.y - b.y) < size
  );
};

export const detectCollisions = () => {
  const sprites = spriteManager.getAll();
  const collisions = [];

  for (let i = 0; i < sprites.length; i++) {
    for (let j = i + 1; j < sprites.length; j++) {
      if (checkCollision(sprites[i], sprites[j])) {
        collisions.push([sprites[i].id, sprites[j].id]);
      }
    }
  }

  return collisions;
};
