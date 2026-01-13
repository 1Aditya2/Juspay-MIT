import React, { useEffect, useRef } from "react";
import { inject, svgResize } from 'blockly'
import { toolboxConfig } from "../toolbox/toolboxConfig";
import { useWorkspace } from "../../state/WorkSpaceContext";

const BlocklyWorkspace = ({ spriteId, isActive }) => {
  const blocklyDivRef = useRef(null);
  const { registerWorkspace, getWorkspace } = useWorkspace();

  useEffect(() => {
    if (getWorkspace(spriteId)) return;

    const workspace = inject(blocklyDivRef.current, {
      toolbox: toolboxConfig,
    });

    registerWorkspace(spriteId, workspace);
  }, [spriteId]);

  useEffect(() => {
    if (!isActive) return;

    const workspace = getWorkspace(spriteId);
    if (!workspace) return;

    requestAnimationFrame(() => {
      svgResize(workspace);
    });
  }, [isActive]);

  return (
    <div
      ref={blocklyDivRef}
      className="w-full h-full"
    />
  );
};

export default BlocklyWorkspace;
