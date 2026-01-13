import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator.forBlock["move_steps"] = function (block) {
  const steps = Number(block.getFieldValue("STEPS"));

  const command = {
    type: "MOVE",
    payload: { steps },
  };

  return JSON.stringify(command) + ",\n";
};

javascriptGenerator.forBlock["turn_clockwise"] = function (block) {
  const degrees = Number(block.getFieldValue("DEGREES"));

  return (
    JSON.stringify({
      type: "TURN",
      payload: { degrees },
    }) + ",\n"
  );
};
javascriptGenerator.forBlock["turn_anticlockwise"] = function (block) {
  const degrees = Number(block.getFieldValue("DEGREES"));

  return (
    JSON.stringify({
      type: "TURN",
      payload: { degrees: -degrees },
    }) + ",\n"
  );
};
javascriptGenerator.forBlock["go_to_xy"] = function (block) {
  const x = Number(block.getFieldValue("X"));
  const y = Number(block.getFieldValue("Y"));

  return (
    JSON.stringify({
      type: "GOTO",
      payload: { x, y },
    }) + ",\n"
  );
};


