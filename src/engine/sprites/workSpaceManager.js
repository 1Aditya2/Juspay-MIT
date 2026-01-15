class WorkspaceManager {
    constructor() {
      this.workspaces = new Map();
    }
  
    register(spriteId, workspace) {
      if (!spriteId || !workspace) return;
      this.workspaces.set(spriteId, workspace);
    }
  
    get(spriteId) {
      return this.workspaces.get(spriteId) || null;
    }
  
    has(spriteId) {
      return this.workspaces.has(spriteId);
    }
  
    remove(spriteId) {
      const ws = this.workspaces.get(spriteId);
      if (ws) {
        ws.dispose();
        this.workspaces.delete(spriteId);
      }
    }
  
    clear() {
      this.workspaces.forEach((ws) => ws.dispose());
      this.workspaces.clear();
    }
  }
  
  export const workspaceManager = new WorkspaceManager();
  