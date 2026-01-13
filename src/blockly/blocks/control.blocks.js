import { Blocks, FieldNumber } from "blockly";
Blocks["repeat_times"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("repeat")
      .appendField(new FieldNumber(5, 1), "TIMES")
      .appendField("times");

    this.appendStatementInput("DO")
      .appendField("do");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour(120);
    this.setTooltip("Repeat enclosed blocks multiple times");
  },
};
