import { HStack } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import DisplaySide from "../parts/DisplaySide";
import { SidesKeyboard } from "../utils/constants";
import { getRandomShape } from "../utils/helpers";
export interface ShapesDisplayProps {
  side: SidesKeyboard;
  size?: number;
}
const ShapesDisplay: FunctionComponent<ShapesDisplayProps> = memo(({ 
  side, size = 400 
}) => {
  const shape = getRandomShape();
  return <HStack spacing='4'>
    <DisplaySide 
      size={size} 
      hideContent={side === SidesKeyboard.RIGHT} 
      shape={shape} />
    <DisplaySide 
      size={size} 
      hideContent={side === SidesKeyboard.LEFT} 
      shape={shape}/>
  </HStack>
});

export default ShapesDisplay;