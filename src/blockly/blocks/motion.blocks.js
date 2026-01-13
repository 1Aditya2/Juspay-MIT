import { Blocks, FieldNumber } from "blockly";

Blocks["move_steps"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move")
      .appendField(new FieldNumber(10), "STEPS")
      .appendField("steps");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour(200);
    this.setTooltip("Move sprite by number of steps");
    this.setHelpUrl("");
  },
};
Blocks["turn_clockwise"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turn ⟳")
      .appendField(new FieldNumber(15), "DEGREES")
      .appendField("degrees");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Turn clockwise");
  },
};

Blocks["turn_anticlockwise"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turn ⟲")
      .appendField(new FieldNumber(15), "DEGREES")
      .appendField("degrees");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Turn anticlockwise");
  },
};
Blocks["go_to_xy"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("go to x:")
      .appendField(new FieldNumber(0), "X")
      .appendField("y:")
      .appendField(new FieldNumber(0), "Y");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Move sprite instantly to x y position");
  },
};

