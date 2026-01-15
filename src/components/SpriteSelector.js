import { useSprites } from "../state/SpriteContext";
import { useWorkspace } from "../state/WorkSpaceContext";
import React, { useEffect, useMemo, useState } from "react";
import { allSprites } from "../utils/constant";
import SimpleDropdown from "./DropDown";
const SpriteSelector = () => {
  const { sprites = [], addSprite } = useSprites();
  const [selectSprite, setSelectSprite] = useState('');
  const { setActiveSpriteId } = useWorkspace();

  useEffect(() => {
    if (sprites.length === 1) {
      setSelectSprite(sprites[0].id);
      setActiveSpriteId(sprites[0].id)
    }
  }, [sprites]);

  const dropDownOptions = useMemo(() => {
    return sprites.map(({ type, id }, index) => {
      return {
        label: <div className="flex items-center gap-12">
          <p>Sprite&nbsp;{index+1}</p>
          <div className="w-8 h-8">
          {allSprites.find(({ type: spriteType }) => {
            return spriteType === type
          }).element}
          </div>
        </div>,
        value: id
      }
    })
  }, [sprites]);

  return (
    <div className="flex gap-2 p-2 absolute right-1/3 top-6">
      <SimpleDropdown
        options={dropDownOptions}
        value={selectSprite}
        onChange={(v) => {
          setSelectSprite(v);setActiveSpriteId(v)
        }}
      />
      <div className="flex justify-between flex-col gap-4">
        {allSprites.map(({ type, element }) => {
          return (
            <div key={type} className="cursor-pointer w-14 h-14" onClick={() => addSprite(type)}>{element}</div>
          );
        })}
      </div>
    </div>
  );
};

export default SpriteSelector;
