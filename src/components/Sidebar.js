import React from "react";
// import BlocklyWorkspace from "../blockly/workspace/BlocklyWorkspace";
import PlayButton from "./PlayButton";
import SpriteSelector from "./SpriteSelector";
import BlocklyWorkspaceContainer from "../blockly/workspace/BlocklyWorkspaceContainer";

export default function Sidebar() {
  return (
    <div className="w-full h-full border-r border-gray-200">
      <BlocklyWorkspaceContainer/>
      <PlayButton/>
      <SpriteSelector/>
    </div>
  );
}
