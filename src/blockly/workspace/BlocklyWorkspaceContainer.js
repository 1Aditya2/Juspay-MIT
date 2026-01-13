import { useWorkspace } from "../../state/WorkSpaceContext";
import { useSprites } from "../../state/SpriteContext";
import BlocklyWorkspace from "./BlocklyWorkspace";
import React from "react";

const BlocklyWorkspaceContainer = () => {
  const { sprites } = useSprites();
  const { activeSpriteId } = useWorkspace();

  return (
    <div className="w-full h-full">
      {sprites.map((sprite) => (
        <div
          key={sprite.id}
          className={`w-full h-full ${
            sprite.id === activeSpriteId
              ? "flex"
              : "hidden"
          }`}
        >
          <BlocklyWorkspace
            spriteId={sprite.id}
            isActive={sprite.id === activeSpriteId}
          />
        </div>
      ))}
    </div>
  );
};

export default BlocklyWorkspaceContainer;
