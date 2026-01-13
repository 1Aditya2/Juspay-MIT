import React from "react";
import CatSprite from "../components/CatSprite";

const SPRITE_SIZE = 80;

const SpriteView = ({ sprite, stageWidth, stageHeight }) => {
  const left = stageWidth / 2 + sprite.x - SPRITE_SIZE / 2;
  const top = stageHeight / 2 - sprite.y - SPRITE_SIZE / 2;

  return (
    <div
      className="absolute flex items-center justify-center text-white rounded"
      style={{
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        transform: `rotate(${sprite.rotation}deg)`,
        left,
        top,
      }}
    >
      <CatSprite/>
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
