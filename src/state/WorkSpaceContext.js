import React, { createContext, useContext, useState } from "react";
import { workspaceManager } from "../engine/sprites/workSpaceManager";

const WorkspaceContext = createContext(null);

export const WorkspaceProvider = ({ children }) => {
  const [activeSpriteId, setActiveSpriteId] = useState(null);

  return (
    <WorkspaceContext.Provider
      value={{
        activeSpriteId,
        setActiveSpriteId,

        // Delegate to manager
        registerWorkspace: (spriteId, workspace) =>
          workspaceManager.register(spriteId, workspace),

        getWorkspace: (spriteId) =>
          workspaceManager.get(spriteId),

        hasWorkspace: (spriteId) =>
          workspaceManager.has(spriteId),
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => useContext(WorkspaceContext);
