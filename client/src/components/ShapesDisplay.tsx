import { HStack } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import DisplaySide from "../parts/DisplaySide";
import { getRandomShape } from "../utils/helpers";
export enum Sides {
  LEFT,
  RIGHT
}
export interface ShapesDisplayProps {
  side: Sides;
  size?: number;
}
const ShapesDisplay: FunctionComponent<ShapesDisplayProps> = memo(({ 
  side, size = 400 
}) => {
  const shape = getRandomShape();
  return <HStack spacing='4'>
    <DisplaySide 
      size={size} 
      hideContent={side === Sides.LEFT} 
      shape={shape} />
    <DisplaySide 
      size={size} 
      hideContent={side === Sides.RIGHT} 
      shape={shape}/>
  </HStack>
});

export default ShapesDisplay;