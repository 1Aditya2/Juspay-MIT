import { javascriptGenerator } from "blockly/javascript";
import { useSprites } from "../state/SpriteContext";
import { useWorkspace } from "../state/WorkSpaceContext";
import { AnimationEngine } from "../engine/runtime/AnimationEngine";
import { spriteManager } from "../engine/sprites/SpriteManager";
import React, { useEffect } from "react";
const PlayButton = () => {
  const { sprites, collisionArray } = useSprites();
  const { getWorkspace } = useWorkspace();
  console.log({ collisionArray })

  const handlePlay = () => {
    sprites.forEach((sprite) => {
      const workspace = getWorkspace(sprite.id);
      if (!workspace) return;
      const code = javascriptGenerator.workspaceToCode(workspace);
      const parsableCode = code.replace(/,\s*$/, "");
      if (!parsableCode.trim()) return;
      const commands = JSON.parse(`[${parsableCode}]`);
      AnimationEngine.run(sprite.id, commands);
    });
  };

  return (
    <button
      onClick={handlePlay}
      style={{ right: '52%' }}
      className="px-4 py-2 bg-green-500 text-white rounded absolute top-6 mt-2 cursor-pointer"
    >
      ▶ Play
    </button>
  );
};

export default PlayButton;
