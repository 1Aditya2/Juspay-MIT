import { spriteManager } from "../sprites/SpriteManager";
import { handleHeroSwap } from "./heroSwap";
import { scheduler } from "./Scheduler";
import { Timeline } from "./Timeline";
const timelines = new Map();

scheduler.addCollisionHandler((collisions) => {
  handleHeroSwap(timelines, collisions);
});

export const AnimationEngine = {
  run(spriteId, commands) {
    const sprite = spriteManager.get(spriteId);
    if (!sprite || !Array.isArray(commands)) return;
    const timeline = new Timeline(spriteId, commands);
    timelines.set(sprite, timeline)
    timeline.start();
    this.executeCommands(spriteId, commands);
  },

  executeCommands(spriteId, commands) {
    commands.forEach((command) => {
      this.executeCommand(spriteId, command);
    });
  },

  executeCommand(spriteId, command) {
    switch (command.type) {
      case "MOVE": {
        const { steps } = command.payload;
        const sprite = spriteManager.get(spriteId);
        spriteManager.update(spriteId, {
          x: sprite.x + steps,
        });
        break;
      }

      case "TURN": {
        const { degrees } = command.payload;
        const sprite = spriteManager.get(spriteId);
        spriteManager.update(spriteId, {
          rotation: sprite.rotation + degrees,
        });
        break;
      }

      case "GOTO": {
        const { x, y } = command.payload;
        spriteManager.update(spriteId, { x, y });
        break;
      }

      case "SAY": {
        const { text } = command.payload;
        spriteManager.update(spriteId, { sayText: text });
        break;
      }

      case "THINK": {
        const { text } = command.payload;
        spriteManager.update(spriteId, { thinkText: text });
        break;
      }

      case "REPEAT": {
        const { times } = command.payload;
        for (let i = 0; i < times; i++) {
          this.executeCommands(spriteId, command.children || []);
        }
        break;
      }

      default:
        console.warn("Unknown command:", command.type);
    }
  },
};
