class SpriteManager {
    constructor() {
      this.sprites = new Map(); // spriteId -> sprite object
      this.listeners = new Set(); // subscribers (React)
    }
    register(sprite) {
      this.sprites.set(sprite.id, {
        ...sprite,
        vx: 0,
        vy: 0,
      });
    }
  
    // 🔄 Sync full sprite list (on app start / reset)
    syncSprites(spriteList) {
      this.sprites.clear();
      spriteList.forEach((sprite) => {
        this.register(sprite);
      });
    }
  
    // 📤 Subscribe to updates
    subscribe(listener) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
  
    // 📣 Notify React
    notify(sprite) {
      this.listeners.forEach((listener) => listener(sprite));
    }
  
    // 🔍 Read
    get(id) {
      return this.sprites.get(id);
    }
  
    getAll() {
      return Array.from(this.sprites.values());
    }
  
    // ✏️ Mutate (ENGINE USES THIS)
    update(id, updates) {
      const sprite = this.sprites.get(id);
      if (!sprite) return;
  
      Object.assign(sprite, updates);
      this.notify(sprite);
    }
  
    // ♻️ Reset (useful for replay)
    reset() {
      this.sprites.forEach((sprite) => {
        sprite.x = 0;
        sprite.y = 0;
        sprite.rotation = 0;
        sprite.sayText = null;
        sprite.thinkText = null;
        this.notify(sprite);
      });
    }
  }
  
  export const spriteManager = new SpriteManager();
  