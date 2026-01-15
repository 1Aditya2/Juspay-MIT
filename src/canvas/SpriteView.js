import React from "react";
import { allSprites, CATTYPE } from "../utils/constant";
import { getLeftFromX, getTopFromY } from "../utils/helper";
const SPRITE_SIZE = 40;
const SpriteView = ({ sprite, stageWidth, stageHeight }) => {
  const left = getLeftFromX(sprite.x, stageWidth, SPRITE_SIZE);
  const top = getTopFromY(sprite.y, stageHeight, SPRITE_SIZE)
  const { type = CATTYPE } = sprite || {};

  return (
    <div
      className="absolute flex items-center justify-center text-white rounded"
      style={{
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        transform: `rotate(${sprite.rotation}deg)`,
        left,
        top
      }}
    >
      {allSprites.find(({ type:spriteType }) => spriteType === type).element}
      {sprite.sayText && (
        <div className="absolute -top-8 bg-white text-black text-xs px-2 py-1 rounded shadow">
          {sprite.sayText}
        </div>
      )}
      {sprite.thinkText && (
        <div className="absolute -top-8 bg-white text-black text-xs px-2 py-1 rounded shadow">
          {sprite.thinkText}
        </div>
      )}
    </div>
  );
};

export default SpriteView;
