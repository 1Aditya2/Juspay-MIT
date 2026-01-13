import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["repeat_times"] = function (block) {
  const times = Number(block.getFieldValue("TIMES"));

  const innerCode = javascriptGenerator.statementToCode(block, "DO");

  const parsableInnerCode = innerCode.replace(/,\s*$/, "");
  console.log({ parsableInnerCode })
  const children = parsableInnerCode
    ? JSON.parse(`[${parsableInnerCode}]`)
    : [];

  return (
    JSON.stringify({
      type: "REPEAT",
      payload: { times },
      children,
    }) + ",\n"
  );
};
