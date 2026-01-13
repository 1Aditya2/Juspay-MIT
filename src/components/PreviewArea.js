import React from "react";
import Stage from "../canvas/Stage";

export default function PreviewArea() {
  return (
    <div className="flex h-full overflow-y-auto p-2">
      <Stage/>
    </div>
  );
}
