import { detectCollisions } from "../sprites/Collision";

class Scheduler {
    constructor() {
      this.tasks = new Set();
      this.collisionHandlers = new Set();
      this.lastTime = null;
      this.running = false;
    }
    addCollisionHandler(handler) {
      this.collisionHandlers.add(handler);
    }
    start() {
      if (this.running) return;
      this.running = true;
      requestAnimationFrame(this.loop);
    }
    stop() {
      this.running = false;
      this.lastTime = null;
    }
  
    loop = (time) => {
      if (!this.running) return;
  
      if (this.lastTime == null) {
        this.lastTime = time;
      }
  
      const delta = (time - this.lastTime) / 1000;
      this.lastTime = time;
  
      this.tasks.forEach((task) => task(delta));

      const collisions = detectCollisions();
      if (collisions.length) {
        this.collisionHandlers.forEach((handler) =>
          handler(collisions)
        );
      }
  
      requestAnimationFrame(this.loop);
    };
  
    add(task) {
      this.tasks.add(task);
      this.start();

      return () => {
        this.tasks.delete(task);
        if (this.tasks.size === 0) {
          this.stop();
        }
      };
    }
  }
  
  export const scheduler = new Scheduler();
  