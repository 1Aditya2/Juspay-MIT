import React, { useRef } from "react";
import { allSprites, CATTYPE } from "../utils/constant";
import { clamp, getLeftFromX, getTopFromY, xFromLeft, yFromTop } from "../utils/helper";
import { spriteManager } from "../engine/sprites/SpriteManager";
const SPRITE_SIZE = 40;
const SpriteView = ({ sprite, stageWidth, stageHeight }) => {
  const dragOffset = useRef({ x: 0, y: 0 });
  const left = getLeftFromX(sprite.x, stageWidth, SPRITE_SIZE);
  const top = getTopFromY(sprite.y, stageHeight, SPRITE_SIZE)
  const { type = CATTYPE } = sprite || {};

  const onMouseDown = (e) => {
    e.stopPropagation();

    dragOffset.current = {
      x: e.clientX - left,
      y: e.clientY - top,
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
  const onMouseMove = (e) => {
    const rawLeft = e.clientX - dragOffset.current.x;
    const rawTop = e.clientY - dragOffset.current.y;

    const boundedLeft = clamp(
      rawLeft,
      0,
      stageWidth - SPRITE_SIZE
    );
    const boundedTop = clamp(
      rawTop,
      0,
      stageHeight - SPRITE_SIZE
    );

    const newX = xFromLeft(
      boundedLeft,
      stageWidth,
      SPRITE_SIZE
    );
    const newY = yFromTop(
      boundedTop,
      stageHeight,
      SPRITE_SIZE
    );
    console.log({ newX, newY })
    spriteManager.update(sprite.id, {
      x: newX,
      y: -(newY),
    });
  };
  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <div onMouseDown={onMouseDown}
      className="absolute flex items-center justify-center text-white rounded cursor-move"
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
