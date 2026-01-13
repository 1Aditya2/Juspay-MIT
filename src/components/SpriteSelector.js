import { useSprites } from "../state/SpriteContext";
import { useWorkspace } from "../state/WorkSpaceContext";
import React from "react";
const SpriteSelector = () => {
  const { sprites, addSprite } = useSprites();
  const { activeSpriteId, setActiveSpriteId } = useWorkspace();

  return (
    <div className="flex gap-2 p-2 absolute right-1/3 top-4">
      {sprites.map((sprite, index) => (
        <button
          key={sprite.id}
          onClick={() => setActiveSpriteId(sprite.id)}
          className={`px-2 py-1 rounded ${
            activeSpriteId === sprite.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Sprite{index+1}
        </button>
      ))}
      <button
        onClick={addSprite}
        className="px-2 py-1 bg-green-500 text-white rounded"
      >
        + Add Sprite
      </button>
    </div>
  );
};

export default SpriteSelector;
