import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { spriteManager } from "../engine/sprites/SpriteManager";
import { getRandomX, getRandomY } from "../utils/helper";

const SpriteContext = createContext(null);

export const SpriteProvider = ({ children }) => {
  const [sprites, setSprites] = useState([]);
  const [activeSpriteId, setActiveSpriteId] = useState(null);

  useEffect(() => {
    spriteManager.syncSprites(sprites);
  }, [sprites]);
  
  useEffect(() => {
    const unsubscribe = spriteManager.subscribe((updatedSprite) => {
      updateSprite(updatedSprite.id, updatedSprite);
    });
    return unsubscribe;
  }, []);

  const addSprite = (type = 'cat') => {
    const newSprite = {
      id: uuid(),
      type: type,
      x: getRandomX(),
      y: getRandomY(),
      rotation: 0,
      sayText: null,
      thinkText: null,
    };

    setSprites((prev) => [...prev, newSprite]);
    setActiveSpriteId(newSprite.id);
  };

  const updateSprite = (id, updates) => {
    setSprites((prev) =>
      prev.map((sprite) =>
        sprite.id === id ? { ...sprite, ...updates } : sprite
      )
    );
  };

  const activeSprite = sprites.find(
    (sprite) => sprite.id === activeSpriteId
  );

  return (
    <SpriteContext.Provider
      value={{
        sprites,
        activeSprite,
        activeSpriteId,
        setActiveSpriteId,
        addSprite,
        updateSprite
      }}
    >
      {children}
    </SpriteContext.Provider>
  );
};

export const useSprites = () => {
  const context = useContext(SpriteContext);
  if (!context) {
    throw new Error("useSprites must be used inside SpriteProvider");
  }
  return context;
};