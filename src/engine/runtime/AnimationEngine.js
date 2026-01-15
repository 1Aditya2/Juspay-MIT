import { spriteManager } from "../sprites/SpriteManager";
import { Timeline } from "./Timeline";

const timelines = new Map();

export const AnimationEngine = {
  run(spriteId, commands) {
    const sprite = spriteManager.get(spriteId);
    if (!sprite || !Array.isArray(commands)) return;

    if (timelines.has(spriteId)) {
      timelines.get(spriteId).stop();
    }
    const timeline = new Timeline(spriteId, commands);
    timelines.set(spriteId, timeline);
    timeline.start();
  }
};
