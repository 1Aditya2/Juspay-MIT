import React, { createContext, useContext, useRef, useState } from "react";

const WorkspaceContext = createContext(null);

export const WorkspaceProvider = ({ children }) => {
  // spriteId -> Blockly.Workspace
  const workspacesRef = useRef({});
  const [activeSpriteId, setActiveSpriteId] = useState(null);

  const registerWorkspace = (spriteId, workspace) => {
    workspacesRef.current[spriteId] = workspace;
  };

  const getWorkspace = (spriteId) => {
    return workspacesRef.current[spriteId];
  };

  return (
    <WorkspaceContext.Provider
      value={{
        activeSpriteId,
        setActiveSpriteId,
        registerWorkspace,
        getWorkspace,
        workspacesRef,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => useContext(WorkspaceContext);
