import CatSprite from "../components/Sprites/CatSprite";
import CircleSprite from "../components/Sprites/CircleSprite";
import SquareSprite from "../components/Sprites/SquareSprite";
import TriangleSprite from "../components/Sprites/TriangleSprite";
import React from "react";

export const CATTYPE = 'cat';
export const SQUARETYPE = 'square';
export const CIRCLETYPE = 'circle';
export const TRIANGLETYPE = 'triangle';

export const allSprites = [{
    type: CATTYPE,
    element: <CatSprite/>
  },
  {
    type: SQUARETYPE,
    element: <SquareSprite/>
  },
  {
    type: CIRCLETYPE,
    element: <CircleSprite/>
  },
  {
    type: TRIANGLETYPE,
    element: <TriangleSprite/>
  }
  ];
