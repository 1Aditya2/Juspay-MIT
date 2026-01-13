import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["say_for_seconds"] = function (block) {
  const text = block.getFieldValue("TEXT");
  const duration = Number(block.getFieldValue("SECONDS"));

  return (
    JSON.stringify({
      type: "SAY",
      payload: { text, duration },
    }) + ",\n"
  );
};

javascriptGenerator.forBlock["think_for_seconds"] = function (block) {
  const text = block.getFieldValue("TEXT");
  const duration = Number(block.getFieldValue("SECONDS"));

  return (
    JSON.stringify({
      type: "THINK",
      payload: { text, duration },
    }) + ",\n"
  );
};
