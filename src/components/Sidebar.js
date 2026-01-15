import React from "react";
import PlayButton from "./PlayButton";
import SpriteSelector from "./SpriteSelector";
import BlocklyWorkspaceContainer from "../blockly/workspace/BlocklyWorkspaceContainer";

export default function Sidebar() {
  return (
    <div className="w-full h-full">
      <BlocklyWorkspaceContainer/>
      <PlayButton/>
      <SpriteSelector/>
    </div>
  );
}
