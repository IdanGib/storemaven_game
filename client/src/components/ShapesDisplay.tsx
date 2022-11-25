import { Box, HStack } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import DisplaySide from "../parts/DisplaySide";
import { getRandomShape } from "../utils/helpers";
export interface ShapesDisplayProps {
  side: string;
  rightKey: string;
  leftKey: string;
  size?: number;
  hide?: boolean;
}
const ShapesDisplay: FunctionComponent<ShapesDisplayProps> = memo(({ 
  side, size = 400, hide, rightKey, leftKey
}) => {
  const shape = getRandomShape();
  return <HStack 
      visibility={hide ? 'hidden' : 'visible'}
      border='1px solid gray' 
      p='2' 
      spacing='4'>
    <DisplaySide 
      size={size} 
      hideContent={side === rightKey} 
      shape={shape} />
    <Box height={`${size}px`} width='1px' background='gray'></Box>
    <DisplaySide 
      size={size} 
      hideContent={side === leftKey} 
      shape={shape}/>
  </HStack>
});

export default ShapesDisplay;