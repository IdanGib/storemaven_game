import { Flex } from "@chakra-ui/react";
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
const ShapesDisplay: FunctionComponent<ShapesDisplayProps> = memo(({ side, size = 400 }) => {
  const hs = size / 2;
  const shape = getRandomShape();
  return <Flex height={`${hs}px`} width={`${size}px`}>
    <DisplaySide 
      size={hs} 
      hideContent={side === Sides.LEFT} 
      shape={shape} />
    <DisplaySide 
      size={hs} 
      hideContent={side === Sides.RIGHT} 
      shape={shape}/>
  </Flex>
});

export default ShapesDisplay;