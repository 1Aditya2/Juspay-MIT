import React from "react";
import { useSprites } from "../state/SpriteContext";
import SpriteView from "./SpriteView";

const STAGE_WIDTH = 600;
const STAGE_HEIGHT = 400;

const Stage = () => {
  const { sprites } = useSprites();

  return (
    <div className="flex h-full">
      <div
        className="relative bg-white rounded"
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
        }}
      >
        {sprites.map((sprite) => (
          <SpriteView
            key={sprite.id}
            sprite={sprite}
            stageWidth={STAGE_WIDTH}
            stageHeight={STAGE_HEIGHT}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
