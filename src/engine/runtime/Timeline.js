import { scheduler } from "./Scheduler";
import { spriteManager } from "../sprites/SpriteManager";
export class Timeline {
  constructor(spriteId, commands) {
    this.spriteId = spriteId;
    this.queue = [...commands];
    this.currentTask = null;
    this.unsubscribe = null;
  }

  start() {
    this.next();
  }

  next() {
    if (this.queue.length === 0) {
      this.stop();
      return;
    }

    const command = this.queue.shift();
    this.execute(command);
  }

  execute(command) {
    switch (command.type) {
      case "MOVE":
        this.runMove(command.payload);
        break;

      case "TURN":
        this.runTurn(command.payload);
        break;

      case "GOTO":
        this.runGoto(command.payload);
        break;

      case "SAY":
        this.runSay(command.payload);
        break;

      case "THINK":
        this.runThink(command.payload);
        break;

      case "REPEAT":
        this.expandRepeat(command);
        this.next();
        break;

      default:
        console.warn("Unknown command", command.type);
        this.next();
    }
  }

  runMove({ steps }) {
    const sprite = spriteManager.get(this.spriteId);
    const duration = Math.abs(steps) / 100;
    let elapsed = 0;
    const startX = sprite.x;

    this.unsubscribe = scheduler.add((delta) => {
      elapsed += delta;
      const progress = Math.min(elapsed / duration, 1);
      spriteManager.update(this.spriteId, {
        x: startX + steps * progress,
      });

      if (progress === 1) {
        this.unsubscribe();
        this.next();
      }
    });
  }

  runTurn({ degrees }) {
    const sprite = spriteManager.get(this.spriteId);
    const startRotation = sprite.rotation;
    const ROTATION_SPEED = 180;
    const duration = Math.abs(degrees) / ROTATION_SPEED;
    let elapsed = 0;
    this.unsubscribe = scheduler.add((delta) => {
      elapsed += delta;
      const progress = Math.min(elapsed / duration, 1);
      const currentRotation =
        startRotation + degrees * progress;
      spriteManager.update(this.spriteId, {
        rotation: currentRotation,
      });
  
      if (progress === 1) {
        this.unsubscribe();
        this.next();
      }
    });
  }  

  runGoto({ x, y }) {
    spriteManager.update(this.spriteId, { x, y });
    this.next();
  }

  runSay({ text, duration = 2 }) {
    spriteManager.update(this.spriteId, { sayText: text });

    setTimeout(() => {
      spriteManager.update(this.spriteId, { sayText: null });
      this.next();
    }, duration * 1000);
  }
  runThink({ text, duration = 2 }) {
    spriteManager.update(this.spriteId, { thinkText: text });

    setTimeout(() => {
      spriteManager.update(this.spriteId, { thinkText: null });
      this.next();
    }, duration * 1000);
  }

  expandRepeat(command) {
    const { times } = command.payload;
    const children = command.children || [];
  
    for (let i = 0; i < times; i++) {
      this.queue.unshift(...children.map(c => ({ ...c })));
    }
  }
  stop() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
    this.queue = [];
    this.currentTask = null;
  }
}
