import { Blocks, FieldNumber, FieldTextInput } from "blockly";

Blocks["say_for_seconds"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("say")
      .appendField(new FieldTextInput("Hello!"), "TEXT")
      .appendField("for")
      .appendField(new FieldNumber(2, 0.1), "SECONDS")
      .appendField("seconds");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("Show a speech bubble for a duration");
  },
};

Blocks["think_for_seconds"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("think")
      .appendField(new FieldTextInput("Hmm..."), "TEXT")
      .appendField("for")
      .appendField(new FieldNumber(2, 0.1), "SECONDS")
      .appendField("seconds");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("Show a thought bubble for a duration");
  },
};
