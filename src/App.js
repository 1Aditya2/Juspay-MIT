import React, { useEffect } from "react";
import '../src/index.css'
import Sidebar from "./components/Sidebar";
import "./blockly";
import PreviewArea from "./components/PreviewArea";
import { useSprites } from "./state/SpriteContext";
export default function App() {
  const { addSprite } = useSprites();
  useEffect(() => {
    addSprite();
  }, []);
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen flex overflow-hidden flex-row">
        <div className="flex-1 flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl">
           <Sidebar /> 
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
