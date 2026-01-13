import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { SpriteProvider } from "./state/SpriteContext.js";
import { WorkspaceProvider } from "./state/WorkSpaceContext.js";

console.log("hi");

ReactDOM.render(
  <SpriteProvider>
    <WorkspaceProvider>
      <App />
    </WorkspaceProvider>
  </SpriteProvider>,
  document.getElementById("root")
);
