import React, { useEffect, useRef, useState } from "react";
import { inject, svgResize } from 'blockly'
import { toolboxConfig } from "../toolbox/toolboxConfig";
import { useWorkspace } from "../../state/WorkSpaceContext";

const BlocklyWorkspace = ({ spriteId, isActive }) => {
  const blocklyDivRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const {
    registerWorkspace,
    getWorkspace,
    hasWorkspace,
  } = useWorkspace();

  useEffect(() => {
    if (!spriteId) return;

    const workspace = inject(blocklyDivRef.current, {
      toolbox: toolboxConfig,
    });

    registerWorkspace(spriteId, workspace);

    const onChange = () => {
      const blocks = workspace.getAllBlocks(false);
      setIsEmpty(blocks.length === 0);
    };

    workspace.addChangeListener(onChange);
    onChange();
  }, [spriteId]);


  useEffect(() => {
    if (!isActive) return;
    if (hasWorkspace(spriteId)) {
      requestAnimationFrame(() => {
        const workspace = getWorkspace(spriteId);
        svgResize(workspace);
      });
    }
  }, [isActive]);

  return (
    <div className="w-full h-full">
      <div
        ref={blocklyDivRef}
        className="w-full h-full"
      />
      {isActive && isEmpty && (
        <div className="absolute right-1/2 top-1/2 flex flex-col
                      items-center justify-center
                      text-gray-500 pointer-events-none">
          <div className="text-3xl">👋</div>
          <div className="mt-2 text-lg font-medium">
            Start building!
          </div>
          <div className="text-sm">
            Drag blocks from Motion / Looks
          </div>
        </div>
      )}
    </div>
  );
};

export default BlocklyWorkspace;
