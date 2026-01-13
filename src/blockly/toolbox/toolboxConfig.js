export const toolboxConfig = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "move_steps"
    },
    { kind: "block", type: "turn_clockwise" },
    { kind: "block", type: "turn_anticlockwise" },
    { kind: "block", type: "go_to_xy" },
    // Control
    { kind: "block", type: "repeat_times" },
    { kind: "block", type: "say_for_seconds" },
    { kind: "block", type: "think_for_seconds" }
  ]
};
