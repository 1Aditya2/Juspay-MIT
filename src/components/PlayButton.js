import { javascriptGenerator } from "blockly/javascript";
import { useSprites } from "../state/SpriteContext";
import { useWorkspace } from "../state/WorkSpaceContext";
import { AnimationEngine } from "../engine/runtime/AnimationEngine";
import React from "react";
const PlayButton = () => {
  const { sprites } = useSprites();
  const { getWorkspace } = useWorkspace();

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
      className="px-4 py-2 bg-green-500 text-white rounded absolute right-2/3 top-6"
    >
      ▶ Play
    </button>
  );
};

export default PlayButton;
