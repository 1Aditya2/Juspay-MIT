class SpriteManager {
    constructor() {
      this.sprites = new Map();
      this.listeners = new Set();
      // this.collisionListeners = new Set();
    }
    register(sprite) {
      this.sprites.set(sprite.id, {
        ...sprite
      });
    }
    syncSprites(spriteList) {
      this.sprites.clear();
      spriteList.forEach((sprite) => {
        this.register(sprite);
      });
    }
    subscribe(listener) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
    notify(sprite) {
      this.listeners.forEach((listener) => listener(sprite));
    }
    get(id) {
      return this.sprites.get(id);
    }
    getAll() {
      return Array.from(this.sprites.values());
    }
    update(id, updates) {
      const sprite = this.sprites.get(id);
      if (!sprite) return;
  
      Object.assign(sprite, updates);
      this.notify(sprite);
    }
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
  