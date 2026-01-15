import { AnimationEngine } from "../runtime/AnimationEngine";
import { spriteManager } from "./SpriteManager";
import { workspaceManager } from "./workSpaceManager";
import { javascriptGenerator } from "blockly/javascript";
export const detectXCollisions = (size = 40) => {
    const sprites = spriteManager.getAll();
    const collisions = [];

    for (let i = 0; i < sprites.length; i++) {
        for (let j = i + 1; j < sprites.length; j++) {
            const a = sprites[i];
            const b = sprites[j];

            const half = size / 4;

            const aLeft = a.x - half;
            const aRight = a.x + half;
            const bLeft = b.x - half;
            const bRight = b.x + half;

            if (aRight >= bLeft && bRight >= aLeft) {
                collisions.push([a.id, b.id]);
            }
        }
    }

    return collisions;
};
export const heroSwap = (collisions) => {
    console.log({ collisions })
    collisions.forEach(([aId, bId]) => {
        const workspace1 = workspaceManager.get(aId);
        const workspace2 = workspaceManager.get(bId);
        if (!workspace1 || !workspace2) return;
        console.log({ workspace1, workspace2 })

        const code1 = javascriptGenerator.workspaceToCode(workspace1);
        const code2 = javascriptGenerator.workspaceToCode(workspace2);

        const parsableCode1 = code1.replace(/,\s*$/, "");
        const parsableCode2 = code2.replace(/,\s*$/, "");
        // if (!parsableCode1.trim() || !parsableCode2.trim()) return;
        console.log({ parsableCode1, parsableCode2 })

        const commands1 = JSON.parse(`[${parsableCode1}]`);
        const commands2 = JSON.parse(`[${parsableCode2}]`);
        AnimationEngine.run(aId, commands2);
        AnimationEngine.run(bId, commands1);
    })
}